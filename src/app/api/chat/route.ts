import { NextRequest, NextResponse } from "next/server";

// ═══════════════════════════════════════════════════════════════
// SYSTEM PROMPT — Guia SaúdeGPT (Enterprise Grade)
// Segurança, fontes confiáveis, tom acolhedor
// ═══════════════════════════════════════════════════════════════
const SYSTEM_PROMPT = `Você é o Guia SaúdeGPT, assistente educacional oficial da plataforma Health Learning OS.

## IDENTIDADE
- Você é como um Farmacêutico cuidadoso, respeitoso e encantador
- Chama o aluno pelo nome sempre que possível (use {{NOME_ALUNO}} se disponível)
- Tom: leve, acolhedor, fácil de entender, educacional
- Seu papel é FORMAR atendentes de farmácia com excelência

## REGRAS ABSOLUTAS DE CONTEÚDO
1. ✅ Responda APENAS com base no conteúdo da plataforma SaúdeGPT
2. ✅ Consulte fontes oficiais: CRF (todos os regionais do Brasil), CFF (Conselho Federal de Farmácia), ANVISA, Ministério da Saúde, OMS, PubMed, SciELO, Cochrane
3. ✅ Para outras áreas da saúde, consulte: CFM (Medicina), CFN (Nutrição), CREFITO (Fisioterapia), CFP (Psicologia)
4. ❌ NUNCA invente, suponha, ou use "achismos"
5. ❌ NUNCA divulgue fake news, meias-verdades ou informações não verificadas
6. ❌ NUNCA faça diagnósticos médicos, prescreva medicamentos ou substitua orientação profissional
7. ❌ NUNCA responda perguntas sobre: quem criou a plataforma, de onde vieram as informações, política, religião
8. ⚠️ Se não souber a resposta com base nas fontes, diga: "Não tenho essa informação com segurança. Consulte o farmacêutico responsável ou o CRF da sua região."
9. ⚠️ Se perguntarem sobre criador/empresa/desenvolvedor, responda: "Sou um assistente educacional focado em formar atendentes de farmácia. Bora focar no que realmente importa: o aprendizado?"

## COMPORTAMENTO
- Seja ENCANTADOR: use linguagem positiva, motivadora, que inspira confiança
- Seja PRÁTICO: exemplos de balcão, situações reais de farmácia
- Seja SEGURO: sempre referencie fontes oficiais
- Seja HUMANO: se o aluno parece estressado ou com dúvida, acolha
- Seja DIRETO: respostas claras, sem rodeios

## EXEMPLOS DE RESPOSTA
❌ Ruim: "Segundo estudos, esse medicamento pode interagir..."
✅ Bom: "Vamos ver com calma! Pelo conteúdo que estudamos nas trilhas, e conforme a bula aprovada pela ANVISA, esse medicamento tem interação com anti-inflamatórios. Na dúvida, sempre consulte o farmacêutico responsável."

❌ Ruim: "Isso foi criado pela empresa X"
✅ Bom: "Sou um assistente educacional e meu foco é ajudar você a aprender mais sobre farmácia e atendimento. Vamos continuar evoluindo juntos?"

## FONTES OFICIAIS CONFIÁVEIS (consulte sempre)
- CRF-SP: https://www.crfsp.org.br
- CFF: https://cff.org.br
- ANVISA: https://www.gov.br/anvisa
- Ministério da Saúde: https://www.gov.br/saude
- CFM: https://portal.cfm.org.br
- CFN: https://www.cfn.org.br
- CREFITO: https://www.crefito.org.br
- CFP: https://cfp.org.br
- PubMed: https://pubmed.ncbi.nlm.nih.gov
- SciELO: https://scielo.org`;

// ═══════════════════════════════════════════════════════════════
// LOGGING — salva conversas para histórico do admin
// ═══════════════════════════════════════════════════════════════
interface ChatLogEntry {
  timestamp: string;
  aluno: string;
  pergunta: string;
  resposta: string;
  turno: number;
}

async function salvarConversa(aluno: string, pergunta: string, resposta: string, turno: number) {
  try {
    // Tenta salvar no Supabase via API interna
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saudegpt.com";
    await fetch(`${baseUrl}/api/chat/log`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        aluno: aluno || "anonimo",
        pergunta,
        resposta,
        turno,
      }),
      signal: AbortSignal.timeout(3000),
    }).catch(() => {});
  } catch {
    // Logging não deve quebrar o chat
  }
}

export async function POST(request: NextRequest) {
  try {
    const { mensagem, historico, aluno } = await request.json();

    if (!mensagem || typeof mensagem !== "string") {
      return NextResponse.json({ erro: "Mensagem inválida" }, { status: 400 });
    }

    const apiKey = process.env.DEEPSEEK_API_KEY || process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        resposta: "Desculpe, o assistente não está configurado no momento. Tente novamente mais tarde.",
      });
    }

    // Prepara system prompt com nome do aluno
    const nomeAluno = typeof aluno === "string" && aluno ? aluno : "aluno";
    const systemPromptComNome = SYSTEM_PROMPT.replace("{{NOME_ALUNO}}", nomeAluno);

    // Monta mensagens para API
    const messages: Array<{ role: string; content: string }> = [
      { role: "system", content: systemPromptComNome },
    ];

    if (Array.isArray(historico)) {
      for (const msg of historico.slice(-10)) {
        if (msg.role === "user" || msg.role === "assistant") {
          messages.push({ role: msg.role, content: msg.content });
        }
      }
    }

    messages.push({ role: "user", content: mensagem });

    // Chama DeepSeek API
    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages,
        max_tokens: 800,
        temperature: 0.5, // mais baixo = mais preciso, menos inventivo
        top_p: 0.9,
        frequency_penalty: 0.3,
        presence_penalty: 0.2,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("DeepSeek API error:", response.status, errorText);
      return NextResponse.json({
        resposta: "Não consegui processar sua pergunta agora. Por favor, tente novamente.",
      });
    }

    const data = await response.json();
    const resposta = data.choices?.[0]?.message?.content || "Desculpe, não entendi. Pode reformular?";

    // Salva conversa em background (não bloqueia resposta)
    const turno = Array.isArray(historico) ? Math.floor(historico.length / 2) + 1 : 1;
    salvarConversa(
      typeof aluno === "string" ? aluno : "anonimo",
      mensagem,
      resposta,
      turno
    );

    return NextResponse.json({ resposta });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { resposta: "Erro interno. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}

// ═══════════════════════════════════════════════════════════════
// GET — endpoint para admin consultar histórico de conversas
// ═══════════════════════════════════════════════════════════════
export async function GET(request: NextRequest) {
  // Apenas admin autenticado
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

  // Retorna logs (em produção, consultar Supabase)
  try {
    const { searchParams } = new URL(request.url);
    const aluno = searchParams.get("aluno");

    // Por enquanto, retorna estrutura vazia (precisa de Supabase)
    return NextResponse.json({
      mensagem: "Histórico disponível quando Supabase estiver conectado",
      aluno: aluno || "todos",
      database: "supabase",
      endpoint_sugerido: "/api/chat/log",
    });
  } catch (error) {
    console.error("Chat history error:", error);
    return NextResponse.json({ erro: "Erro ao buscar histórico" }, { status: 500 });
  }
}
