import { NextResponse } from "next/server";

interface TermoRegistro {
  nome: string;
  data: string;
  ip?: string;
  assinaturaDigital: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as TermoRegistro;

    if (!body.nome || !body.assinaturaDigital) {
      return NextResponse.json(
        { ok: false, erro: "Nome e assinatura são obrigatórios" },
        { status: 400 },
      );
    }

    // Registrar com IP para auditoria
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "desconhecido";

    const registro = {
      ...body,
      ip,
      registradoEm: new Date().toISOString(),
    };

    // Aqui poderia salvar em banco (Supabase, Notion, arquivo)
    // Por enquanto apenas registramos no log e retornamos sucesso
    console.log(
      "[TERMO_CONSENTIMENTO]",
      JSON.stringify(registro, null, 2),
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[TERMO_CONSENTIMENTO_ERRO]", error);
    return NextResponse.json(
      { ok: false, erro: "Erro interno" },
      { status: 500 },
    );
  }
}
