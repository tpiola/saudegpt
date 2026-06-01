import { NextResponse } from "next/server";
import { credenciaisAdminValidas } from "@/lib/server/admin-auth";

export async function POST(request: Request) {
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
