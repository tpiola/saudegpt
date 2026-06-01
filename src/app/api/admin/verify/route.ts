import { NextResponse } from "next/server";
import {
  adminBloqueadoPorCredencialPadrao,
  credenciaisAdminValidas,
  MENSAGEM_ADMIN_BLOQUEADO,
} from "@/lib/server/admin-auth";

export async function POST(request: Request) {
  if (adminBloqueadoPorCredencialPadrao()) {
    return NextResponse.json({ ok: false, motivo: MENSAGEM_ADMIN_BLOQUEADO }, { status: 503 });
  }

  const body = await request.json();
  const usuario = (body.usuario as string | undefined) ?? "admin";
  const senha = body.senha as string;

  if (!senha) {
    return NextResponse.json({ ok: false, motivo: "Senha obrigatória" }, { status: 400 });
  }

  if (!credenciaisAdminValidas(usuario, senha)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const token = Buffer.from(`${usuario}:${senha}`).toString("base64");
  return NextResponse.json({ ok: true, token });
}
