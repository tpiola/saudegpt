import { NextResponse } from "next/server";
import {
  adminBloqueadoPorCredencialPadrao,
  headerAdminAutorizado,
  MENSAGEM_ADMIN_BLOQUEADO,
} from "@/lib/server/admin-auth";
import {
  excluirCadastroPorId,
  listarCadastros,
  upsertCadastro,
} from "@/lib/server/cadastros-store";
import type { CadastroRegistro } from "@/lib/cadastro-types";

function bloqueioAdmin() {
  if (adminBloqueadoPorCredencialPadrao()) {
    return NextResponse.json({ ok: false, erro: MENSAGEM_ADMIN_BLOQUEADO }, { status: 503 });
  }
  return null;
}

export async function GET(request: Request) {
  const bloqueado = bloqueioAdmin();
  if (bloqueado) return bloqueado;
  if (!headerAdminAutorizado(request)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const lista = await listarCadastros();
  return NextResponse.json({ ok: true, cadastros: lista });
}

export async function PATCH(request: Request) {
  const bloqueado = bloqueioAdmin();
  if (bloqueado) return bloqueado;
  if (!headerAdminAutorizado(request)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const { id, acao } = await request.json();
  if (!id || !acao) {
    return NextResponse.json({ ok: false, erro: "id e acao obrigatórios" }, { status: 400 });
  }

  const lista = await listarCadastros();
  let alvo: CadastroRegistro | undefined = lista.find((c) => c.id === id);
  if (!alvo) alvo = lista.find((c) => c.notionPageId === id);
  if (!alvo) return NextResponse.json({ ok: false, erro: "Não encontrado" }, { status: 404 });

  let atualizado: CadastroRegistro;
  if (acao === "aprovar") {
    atualizado = {
      ...alvo,
      status: "aprovado",
      aprovadoEm: new Date().toISOString(),
    };
  } else if (acao === "rejeitar") {
    atualizado = { ...alvo, status: "rejeitado" };
  } else {
    return NextResponse.json({ ok: false, erro: "Ação inválida" }, { status: 400 });
  }

  const salvo = await upsertCadastro(atualizado);
  return NextResponse.json({ ok: true, cadastro: salvo });
}

export async function DELETE(request: Request) {
  const bloqueado = bloqueioAdmin();
  if (bloqueado) return bloqueado;
  if (!headerAdminAutorizado(request)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ ok: false }, { status: 400 });

  const ok = await excluirCadastroPorId(id);
  if (!ok) {
    const lista = await listarCadastros();
    const notion = lista.find((c) => c.notionPageId === id);
    if (notion) {
      const ok2 = await excluirCadastroPorId(notion.id);
      if (ok2) return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ok: false, erro: "Não encontrado" }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
