import { NextResponse } from "next/server";
import { criarSessaoCheckout, PLANOS } from "@/lib/pagamento";

export async function POST(request: Request) {
  try {
    const { planoId } = await request.json();

    if (!planoId || typeof planoId !== "string") {
      return NextResponse.json(
        { ok: false, erro: "planoId é obrigatório." },
        { status: 400 },
      );
    }

    const plano = PLANOS.find((p) => p.id === planoId || p.slug === planoId);
    if (!plano) {
      return NextResponse.json(
        {
          ok: false,
          erro: `Plano "${planoId}" não encontrado. Planos disponíveis: ${PLANOS.map((p) => p.id).join(", ")}`,
        },
        { status: 400 },
      );
    }

    const sessao = await criarSessaoCheckout(planoId);

    return NextResponse.json({
      ok: true,
      url: sessao.url,
      sessionId: sessao.sessionId,
      plano: plano.nome,
    });
  } catch (error) {
    console.error("[checkout] Erro:", error);
    return NextResponse.json(
      { ok: false, erro: error instanceof Error ? error.message : "Erro interno" },
      { status: 500 },
    );
  }
}
