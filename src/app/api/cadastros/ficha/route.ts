import { NextResponse } from "next/server";
import { obterPorEmail, upsertCadastro } from "@/lib/server/cadastros-store";

export async function POST(request: Request) {
  try {
    const dados = await request.json();
    const { nome, email, whatsapp, cpf, rg, endereco, motivacao, objetivo, horasDia, diasDisponiveis, selfieUrl } = dados;

    if (!email?.trim()) {
      return NextResponse.json({ ok: false, erro: "E-mail obrigatório" }, { status: 400 });
    }

    const norm = email.trim().toLowerCase();

    // Tenta atualizar registro existente
    const existente = await obterPorEmail(norm);
    if (existente) {
      const atualizado = {
        ...existente,
        nome: nome?.trim() || existente.nome,
        telefone: whatsapp?.trim() || existente.telefone,
        cidade: endereco?.split(",")[0]?.trim() || existente.cidade,
        estado: endereco?.split(",").pop()?.trim() || existente.estado,
        motivacao: motivacao || existente.motivacao,
        // Se estiver pendente e preencheu ficha, mantém pendente
        status: existente.status || "pendente",
      };
      await upsertCadastro(atualizado);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[ficha] Erro ao salvar:", err);
    return NextResponse.json({ ok: false, erro: "Erro interno" }, { status: 500 });
  }
}
