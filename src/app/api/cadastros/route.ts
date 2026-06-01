import { NextResponse } from "next/server";
import { headerAdminAutorizado } from "@/lib/server/admin-auth";
import { listarCadastros, salvarCadastros } from "@/lib/server/cadastros-store";

export async function GET(request: Request) {
  if (!headerAdminAutorizado(request)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const lista = await listarCadastros();
  return NextResponse.json({ ok: true, cadastros: lista });
}

export async function PATCH(request: Request) {
  if (!headerAdminAutorizado(request)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const { id, acao } = await request.json();
  if (!id || !acao) {
    return NextResponse.json({ ok: false, erro: "id e acao obrigatórios" }, { status: 400 });
  }

  const lista = await listarCadastros();
  const idx = lista.findIndex((c) => c.id === id);
  if (idx < 0) return NextResponse.json({ ok: false, erro: "Não encontrado" }, { status: 404 });

  if (acao === "aprovar") {
    lista[idx] = {
      ...lista[idx],
      status: "aprovado",
      aprovadoEm: new Date().toISOString(),
    };
  } else if (acao === "rejeitar") {
    lista[idx] = { ...lista[idx], status: "rejeitado" };
  } else {
    return NextResponse.json({ ok: false, erro: "Ação inválida" }, { status: 400 });
  }

  await salvarCadastros(lista);
  return NextResponse.json({ ok: true, cadastro: lista[idx] });
}

export async function DELETE(request: Request) {
  if (!headerAdminAutorizado(request)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ ok: false }, { status: 400 });

  const lista = await listarCadastros();
  const filtrada = lista.filter((c) => c.id !== id);
  if (filtrada.length === lista.length) {
    return NextResponse.json({ ok: false, erro: "Não encontrado" }, { status: 404 });
  }
  await salvarCadastros(filtrada);
  return NextResponse.json({ ok: true });
}
