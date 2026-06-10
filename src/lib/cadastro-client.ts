"use client";

import type { CadastroRegistro, ProgressoSnapshot } from "@/lib/cadastro-types";
import { PROGRESSO_VAZIO } from "@/lib/cadastro-types";

const CHAVE_STATUS = "fap-cadastro-status";
const CHAVE_ID = "fap-cadastro-id";

export function salvarStatusLocal(status: CadastroRegistro["status"]) {
  try {
    localStorage.setItem(CHAVE_STATUS, status);
  } catch {
    // ignora
  }
}

export function lerStatusLocal(): CadastroRegistro["status"] | null {
  try {
    return localStorage.getItem(CHAVE_STATUS) as CadastroRegistro["status"] | null;
  } catch {
    return null;
  }
}

export function salvarIdCadastro(id: string) {
  try {
    localStorage.setItem(CHAVE_ID, id);
  } catch {
    // ignora
  }
}

export function lerIdCadastro(): string | null {
  try {
    return localStorage.getItem(CHAVE_ID);
  } catch {
    return null;
  }
}

export async function registrarCadastro(dados: {
  nome: string;
  email: string;
  whatsapp?: string;
  apelidoRanking?: string;
}): Promise<{ ok: boolean; status?: CadastroRegistro["status"]; erro?: string }> {
  const res = await fetch("/api/cadastros/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  const json = (await res.json()) as {
    ok: boolean;
    status?: CadastroRegistro["status"];
    id?: string;
    erro?: string;
  };
  if (json.ok && json.status) salvarStatusLocal(json.status);
  if (json.ok && json.id) salvarIdCadastro(json.id);
  return { ok: json.ok, status: json.status, erro: json.erro };
}

export async function sincronizarProgressoComServidor(
  email: string,
  progresso: ProgressoSnapshot,
): Promise<void> {
  try {
    await fetch("/api/cadastros/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, progresso }),
    });
  } catch {
    // ignora falha de rede
  }
}

export function montarSnapshotProgresso(estado: {
  concluidas: string[];
  xp: number;
  notas: Record<string, number>;
  tentativasQuiz?: Record<string, number>;
  tempoEstudoSegundos?: number;
  diasEstudo: string[];
  missoesPontos: number;
  favoritas?: string[];
  ultima?: { trilhaId: string; aulaId: string };
}): ProgressoSnapshot {
  return {
    concluidas: estado.concluidas,
    xp: estado.xp,
    notas: estado.notas,
    tentativasQuiz: estado.tentativasQuiz ?? {},
    tempoEstudoSegundos: estado.tempoEstudoSegundos ?? 0,
    diasEstudo: estado.diasEstudo ?? [],
    missoesPontos: estado.missoesPontos,
    favoritas: estado.favoritas ?? [],
    ultima: estado.ultima,
    ultimaSincronizacao: new Date().toISOString(),
  };
}

export { PROGRESSO_VAZIO };
