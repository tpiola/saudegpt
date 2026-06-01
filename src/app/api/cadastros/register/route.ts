import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { PROGRESSO_VAZIO } from "@/lib/cadastro-types";
import { listarCadastros, salvarCadastros } from "@/lib/server/cadastros-store";

export async function POST(request: Request) {
  const { nome, email, apelidoRanking } = await request.json();
  if (!nome?.trim() || !email?.trim()) {
    return NextResponse.json(
      { ok: false, erro: "Nome e e-mail são obrigatórios." },
      { status: 400 },
    );
  }

  const norm = email.trim().toLowerCase();
  const lista = await listarCadastros();
  const existente = lista.find((c) => c.email.toLowerCase() === norm);

  if (existente) {
    return NextResponse.json({
      ok: true,
      id: existente.id,
      status: existente.status,
    });
  }

  const registro = {
    id: randomUUID(),
    nome: nome.trim(),
    email: norm,
    apelidoRanking: apelidoRanking?.trim() || nome.trim().split(" ")[0],
    status: "pendente" as const,
    criadoEm: new Date().toISOString(),
    progresso: { ...PROGRESSO_VAZIO },
  };

  lista.push(registro);
  await salvarCadastros(lista);

  return NextResponse.json({ ok: true, id: registro.id, status: registro.status });
}
