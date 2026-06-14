import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `Você é o Guia SaúdeGPT, assistente educacional da plataforma Health Learning OS.

REGRAS ABSOLUTAS:
- NUNCA faça diagnósticos médicos
- NUNCA prescreva medicamentos
- NUNCA substitua orientação profissional
- Sempre recomende procurar um farmacêutico ou médico
- Baseie-se apenas no conteúdo aprovado da plataforma
- Se não souber, diga "Não sei"
- Responda em português do Brasil
- Seu papel é EDUCACIONAL, não clínico`;

export async function POST(request: NextRequest) {
  try {
    const { mensagem, systemPrompt } = await request.json();

    if (!mensagem || typeof mensagem !== "string") {
      return NextResponse.json({ erro: "Mensagem inválida" }, { status: 400 });
    }

    const apiKey = process.env.DEEPSEEK_API_KEY || process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        resposta: "Desculpe, o assistente não está configurado no momento. Tente novamente mais tarde.",
      });
    }

    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: systemPrompt || SYSTEM_PROMPT },
          { role: "user", content: mensagem },
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      console.error("DeepSeek API error:", response.status);
      return NextResponse.json({
        resposta: "Não consegui processar sua pergunta agora. Por favor, tente novamente.",
      });
    }

    const data = await response.json();
    const resposta = data.choices?.[0]?.message?.content || "Desculpe, não entendi. Pode reformular?";

    return NextResponse.json({ resposta });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { resposta: "Erro interno. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
