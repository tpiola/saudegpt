"use client";

const CHAVE = "fap-ranking-optin";

export interface EntradaRanking {
  apelido: string;
  xp: number;
  data: string;
}

export function lerRanking(): EntradaRanking[] {
  try {
    const bruto = localStorage.getItem(CHAVE);
    if (!bruto) return [];
    return JSON.parse(bruto) as EntradaRanking[];
  } catch {
    return [];
  }
}

export function registrarNoRanking(apelido: string, xp: number) {
  const lista = lerRanking().filter((e) => e.apelido !== apelido);
  lista.push({ apelido, xp, data: new Date().toISOString() });
  lista.sort((a, b) => b.xp - a.xp);
  try {
    localStorage.setItem(CHAVE, JSON.stringify(lista.slice(0, 50)));
  } catch {
    // ignora
  }
}
