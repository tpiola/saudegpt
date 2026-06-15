import { NextRequest, NextResponse } from "next/server";

// ═══════════════════════════════════════════════════════════════
// POST /api/chat/log — recebe logs e salva no Supabase
// ═══════════════════════════════════════════════════════════════
export async function POST(request: NextRequest) {
  try {
    const { timestamp, aluno, pergunta, resposta, turno } = await request.json();

    if (!pergunta || !resposta) {
      return NextResponse.json({ erro: "Dados incompletos" }, { status: 400 });
    }

    // Tenta salvar no Supabase
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey && !supabaseUrl.includes("placeholder")) {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(supabaseUrl, supabaseKey, {
        auth: { persistSession: false },
      });

      const { error } = await supabase.from("support_interactions").insert({
        aluno: aluno || "anonimo",
        pergunta,
        resposta,
        turno: turno || 1,
      });

      if (error) {
        console.error("[Supabase] Erro ao salvar:", error.message);
        // Fallback: salva em memória no server
        return saveToMemory({ timestamp, aluno, pergunta, resposta, turno });
      }

      return NextResponse.json({ ok: true, database: "supabase" });
    }

    // Fallback: salva em memória (volátil)
    return saveToMemory({ timestamp, aluno, pergunta, resposta, turno });
  } catch (error) {
    console.error("Chat log error:", error);
    return NextResponse.json({ erro: "Erro ao salvar log" }, { status: 500 });
  }
}

// ═══════════════════════════════════════════════════════════════
// GET /api/chat/log?aluno=NOME — consulta histórico (admin)
// ═══════════════════════════════════════════════════════════════
export async function GET(request: NextRequest) {
  // Autenticação admin
  const auth = request.headers.get("authorization");
  if (!auth || !auth.startsWith("Basic ")) {
    return NextResponse.json({ erro: "Não autorizado" }, { status: 401 });
  }

  try {
    const base64 = auth.split(" ")[1];
    const [user, pass] = atob(base64).split(":");
    if (user !== "admin" || pass !== "102030") {
      return NextResponse.json({ erro: "Credenciais inválidas" }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ erro: "Credenciais inválidas" }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const aluno = searchParams.get("aluno");

  // Tenta buscar do Supabase primeiro
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey && !supabaseUrl.includes("placeholder")) {
    try {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(supabaseUrl, supabaseKey, {
        auth: { persistSession: false },
      });

      let query = supabase
        .from("support_interactions")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(200);

      if (aluno) {
        query = query.ilike("aluno", `%${aluno}%`);
      }

      const { data, error } = await query;

      if (!error && data) {
        // Agrupa por aluno
        const agrupado: Record<string, any[]> = {};
        for (const c of data) {
          if (!agrupado[c.aluno]) agrupado[c.aluno] = [];
          agrupado[c.aluno].push(c);
        }

        return NextResponse.json({
          total: data.length,
          alunos: Object.keys(agrupado).length,
          conversas: agrupado,
          database: "supabase",
        });
      }
    } catch {
      // Fallback para memória
    }
  }

  // Fallback: memória
  const conversas = getConversas();
  let resultado = conversas;
  if (aluno) {
    resultado = conversas.filter((c) =>
      c.aluno.toLowerCase().includes(aluno.toLowerCase())
    );
  }

  const agrupado: Record<string, any[]> = {};
  for (const c of resultado) {
    if (!agrupado[c.aluno]) agrupado[c.aluno] = [];
    agrupado[c.aluno].push(c);
  }

  return NextResponse.json({
    total: resultado.length,
    alunos: Object.keys(agrupado).length,
    conversas: agrupado,
    database: "memoria",
    aviso: "Configure NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY para persistência",
  });
}

// ═══════════════════════════════════════════════════════════════
// Store em memória (fallback enquanto não tem Supabase)
// ═══════════════════════════════════════════════════════════════

interface ChatEntry {
  timestamp: string;
  aluno: string;
  pergunta: string;
  resposta: string;
  turno: number;
}

const conversasMemoria: ChatEntry[] = [];

function saveToMemory(entry: ChatEntry) {
  conversasMemoria.push({
    timestamp: entry.timestamp || new Date().toISOString(),
    aluno: entry.aluno || "anonimo",
    pergunta: entry.pergunta,
    resposta: entry.resposta,
    turno: entry.turno || 1,
  });

  // Mantém apenas últimas 5000
  if (conversasMemoria.length > 5000) {
    conversasMemoria.splice(0, conversasMemoria.length - 5000);
  }

  return NextResponse.json({ ok: true, total: conversasMemoria.length, database: "memoria" });
}

function getConversas(): ChatEntry[] {
  return [...conversasMemoria];
}
