"use client";

/** Rastreia buscas de produto por matrícula do aluno */
export interface SearchLog {
  timestamp: string;
  matricula: string;
  nome_aluno: string;
  tipo: "foto" | "barcode" | "texto";
  termo: string;
  produto_encontrado: string;
}

const TRACKING_KEY = "appfarmacia_search_logs";

export function getMatricula(): string {
  if (typeof window === "undefined") return "";
  try {
    const perfil = localStorage.getItem("appfarmacia_perfil");
    if (perfil) {
      const p = JSON.parse(perfil);
      return p.matricula || p.id || "";
    }
  } catch {}
  return "";
}

export function getNomeAluno(): string {
  if (typeof window === "undefined") return "";
  try {
    const perfil = localStorage.getItem("appfarmacia_perfil");
    if (perfil) {
      const p = JSON.parse(perfil);
      return p.nome || "";
    }
  } catch {}
  return "";
}

export function logSearch(
  tipo: SearchLog["tipo"],
  termo: string,
  produto_encontrado: string,
) {
  try {
    const log: SearchLog = {
      timestamp: new Date().toISOString(),
      matricula: getMatricula(),
      nome_aluno: getNomeAluno(),
      tipo,
      termo,
      produto_encontrado,
    };
    const existing: SearchLog[] = JSON.parse(
      localStorage.getItem(TRACKING_KEY) || "[]",
    );
    existing.unshift(log);
    // Mantém apenas os últimos 500 registros
    if (existing.length > 500) existing.length = 500;
    localStorage.setItem(TRACKING_KEY, JSON.stringify(existing));
  } catch {}
}

export function getSearchLogs(): SearchLog[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(TRACKING_KEY) || "[]");
  } catch {
    return [];
  }
}

export function clearSearchLogs() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TRACKING_KEY);
}
