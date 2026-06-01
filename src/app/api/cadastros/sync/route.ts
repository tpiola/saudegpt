import { NextResponse } from "next/server";
import type { ProgressoSnapshot } from "@/lib/cadastro-types";
import { obterPorEmail, upsertCadastro } from "@/lib/server/cadastros-store";
import { PROGRESSO_VAZIO } from "@/lib/cadastro-types";
import { randomUUID } from "crypto";

export async function POST(request: Request) {
  const { email, progresso } = (await request.json()) as {
    email: string;
    progresso: ProgressoSnapshot;
  };

  if (!email?.trim() || !progresso) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const norm = email.trim().toLowerCase();
  let cadastro = await obterPorEmail(norm);

  if (!cadastro) {
    cadastro = {
      id: randomUUID(),
      nome: norm.split("@")[0],
      email: norm,
      status: "pendente",
      criadoEm: new Date().toISOString(),
      progresso: PROGRESSO_VAZIO,
    };
  }

  if (cadastro.status !== "aprovado") {
    await upsertCadastro({
      ...cadastro,
      progresso: {
        ...cadastro.progresso,
        ...progresso,
        ultimaSincronizacao: new Date().toISOString(),
      },
    });
    return NextResponse.json({ ok: true, status: cadastro.status });
  }

  await upsertCadastro({
    ...cadastro,
    progresso: {
      ...cadastro.progresso,
      ...progresso,
      ultimaSincronizacao: new Date().toISOString(),
    },
  });

  return NextResponse.json({ ok: true, status: cadastro.status });
}
