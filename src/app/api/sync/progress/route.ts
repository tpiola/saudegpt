import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Sincronização de progresso na nuvem (requer Supabase + tabela progresso_aluno).
export async function POST(request: Request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    return NextResponse.json({ ok: false, motivo: "Supabase não configurado" }, { status: 503 });
  }

  const auth = request.headers.get("authorization");
  if (!auth?.startsWith("Bearer ")) {
    return NextResponse.json({ ok: false, motivo: "Token ausente" }, { status: 401 });
  }

  const token = auth.slice(7);
  const sb = createClient(url, key);
  const {
    data: { user },
    error: authErr,
  } = await sb.auth.getUser(token);
  if (authErr || !user) {
    return NextResponse.json({ ok: false, motivo: "Sessão inválida" }, { status: 401 });
  }

  const body = await request.json();
  const { error } = await sb.from("progresso_aluno").upsert({
    user_id: user.id,
    dados: body,
    atualizado_em: new Date().toISOString(),
  });

  if (error) {
    return NextResponse.json({ ok: false, motivo: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
