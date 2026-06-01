"use client";

import { getSupabase } from "./client";

export async function tentarCadastroSupabase(email: string, senha: string) {
  const sb = getSupabase();
  if (!sb) return { erro: null as string | null };
  const { error } = await sb.auth.signUp({ email, password: senha });
  if (error) return { erro: error.message };
  return { erro: null };
}

export async function sincronizarProgressoNuvem(payload: object) {
  const sb = getSupabase();
  if (!sb) return;
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) return;
  await sb.from("progresso_aluno").upsert({
    user_id: user.id,
    dados: payload,
    atualizado_em: new Date().toISOString(),
  });
}
