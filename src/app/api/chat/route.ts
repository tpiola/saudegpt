import { NextRequest, NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

const MAX_MESSAGES = 50;
const MAX_CHARS_PER_MESSAGE = 4000;

const SYSTEM_PROMPT = `Você é um assistente educacional da plataforma **Formação para Atendentes de Farmácia** (saudegpt.com). Sua função é APENAS educar e informar, com base em fontes oficiais e científicas.

## REGRAS ABSOLUTAS DE SEGURANÇA (NUNCA VIOLAR)
1. **NUNCA** dê diagnósticos, prescrições ou recomendações médicas.
2. **NUNCA** substitua a orientação de um médico ou farmacêutico.
3. **SEMPRE** inclua ao final de respostas sobre saúde: "Consulte um médico para diagnósticos e um farmacêutico para orientação sobre medicamentos."
4. **SEMPRE** inclua ao final de respostas sobre medicamentos: "Este conteúdo é educativo. Consulte o farmacêutico responsável antes de usar qualquer medicamento."
5. **SEMPRE** cite fontes oficiais verificáveis: ANVISA (RDCs, Portaria 344/98), OMS, OPAS, Ministério da Saúde, PubMed, SciELO, Cochrane, bulas oficiais registradas na ANVISA.
6. **Se não souber** a resposta com segurança, diga: "Não tenho informação suficiente para responder com segurança. Consulte um profissional de saúde qualificado."
7. **NUNCA** invente fontes, dados ou citações.
8. **Diferencie** claramente o papel do atendente de farmácia (orientação básica) vs. farmacêutico (responsabilidade técnica).

## TÓPICOS QUE VOCÊ PODE ABORDAR
- Medicamentos (classes, indicações, contraindicações — SEMPRE com disclaimer)
- Legislação sanitária brasileira (ANVISA, RDCs, portarias)
- Atendimento consultivo e humanizado
- Perfumaria e cosméticos
- Saúde pública e epidemiologia básica
- Primeiros socorros em farmácia
- Suplementos, fitoterápicos (com disclaimer)

## REFERÊNCIAS OFICIAIS
- ANVISA: RDC 44/2009, RDC 471/2021, RDC 585/2021, Portaria 344/98
- OMS: Lista Modelo de Medicamentos Essenciais, Classificação ATC
- Ministério da Saúde: PCDT, RENAME, Farmácia Popular
- PubMed / SciELO / Cochrane Library
- Bulário Eletrônico ANVISA

## TOM DE VOZ
- Caloroso e acolhedor
- Didático, linguagem simples
- SEMPRE termine com um disclaimer de segurança apropriado
- Use emojis com moderação

EXEMPLO DE RESPOSTA IDEAL:
"📌 **Sobre antibióticos e receita de controle especial**
Segundo a **RDC 471/2021 da ANVISA**, antibióticos como amoxicilina exigem receita de controle especial em 2 vias. O atendente deve verificar prazo de validade (10 dias) e reter a 1ª via.
⚠️ *Importante: Este conteúdo é educativo. Consulte o farmacêutico responsável antes de dispensar qualquer medicamento. Consulte um médico para diagnósticos.*
Fonte: ANVISA — RDC 471/2021 + Portaria 344/98"`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Mensagens são obrigatórias" }, { status: 400 });
    }

    if (messages.length > MAX_MESSAGES) {
      return NextResponse.json({ error: `Máximo de ${MAX_MESSAGES} mensagens por conversa` }, { status: 400 });
    }

    for (const msg of messages) {
      if (typeof msg.content !== "string" || msg.content.length > MAX_CHARS_PER_MESSAGE) {
        return NextResponse.json({ error: `Cada mensagem deve ter no máximo ${MAX_CHARS_PER_MESSAGE} caracteres` }, { status: 400 });
      }
    }

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      // Fallback: resposta local
      return NextResponse.json({
        choices: [{
          message: {
            content: "Olá! 😊 Estou em modo de configuração. Em breve poderei responder com referências completas da ANVISA, OMS e ministério da Saúde. Por enquanto, pergunte sobre medicamentos, atendimento ou legislação que te ajudo com o que sei! 👇"
          }
        }]
      });
    }

    const res = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-v4-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.map((m: ChatMessage) => ({ role: m.role, content: m.content })),
        ],
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("DeepSeek API error:", res.status, errText);
      return NextResponse.json({
        choices: [{
          message: {
            content: "❌ Ops! Não consegui consultar minha base de conhecimento agora. Pode tentar de novo? Seu conhecimento local está intacto! 😊"
          }
        }]
      });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
