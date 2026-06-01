import { NextResponse } from "next/server";
import { obterPorEmail } from "@/lib/server/cadastros-store";

export async function GET(request: Request) {
  const email = new URL(request.url).searchParams.get("email");
  if (!email) return NextResponse.json({ ok: false }, { status: 400 });

  const cadastro = await obterPorEmail(email);
  if (!cadastro) {
    return NextResponse.json({ ok: true, status: null });
  }
  return NextResponse.json({ ok: true, status: cadastro.status, id: cadastro.id });
}
