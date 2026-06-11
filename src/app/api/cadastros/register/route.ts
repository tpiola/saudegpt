import { NextResponse, after } from "next/server";
import { randomUUID } from "crypto";
import { PROGRESSO_VAZIO } from "@/lib/cadastro-types";
import { obterPorEmail, upsertCadastro } from "@/lib/server/cadastros-store";
import { notificarNovoCadastro } from "@/lib/server/notificar-cadastro";

export async function POST(request: Request) {
  const { nome, email, whatsapp, apelidoRanking } = await request.json();
  if (!nome?.trim() || !email?.trim()) {
    return NextResponse.json(
      { ok: false, erro: "Nome e e-mail são obrigatórios." },
      { status: 400 },
    );
  }

  const norm = email.trim().toLowerCase();
  const existente = await obterPorEmail(norm);

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
    whatsapp: whatsapp?.trim() || "",
    apelidoRanking: apelidoRanking?.trim() || nome.trim().split(" ")[0],
    status: "pendente" as const,
    criadoEm: new Date().toISOString(),
    progresso: { ...PROGRESSO_VAZIO },
  };

  const salvo = await upsertCadastro(registro);

  // Avisa o coordenador para aprovar o acesso (após a resposta, sem bloquear).
  after(() => notificarNovoCadastro({ nome: registro.nome, email: registro.email, whatsapp: registro.whatsapp }));

  return NextResponse.json({ ok: true, id: salvo.id, status: salvo.status });
}
