import type { Aula, Modulo, Trilha } from "./types";
import { trilhaPerfumaria } from "./trilha-perfumaria";
import { trilhaMedicamentos } from "./trilha-medicamentos";
import { trilhaOperacional } from "./trilha-operacional";
import { trilhaCarreira } from "./trilha-carreira";

export const trilhas: Trilha[] = [
  trilhaPerfumaria,
  trilhaMedicamentos,
  trilhaOperacional,
  trilhaCarreira,
];

export function getTrilha(id: string): Trilha | undefined {
  return trilhas.find((t) => t.id === id);
}

export interface AulaLocalizada {
  aula: Aula;
  modulo: Modulo;
  trilha: Trilha;
}

// Localiza uma aula e devolve seu contexto (módulo e trilha) para navegação.
export function getAula(trilhaId: string, aulaId: string): AulaLocalizada | undefined {
  const trilha = getTrilha(trilhaId);
  if (!trilha) return undefined;
  for (const modulo of trilha.modulos) {
    const aula = modulo.aulas.find((a) => a.id === aulaId);
    if (aula) return { aula, modulo, trilha };
  }
  return undefined;
}

// Lista linear de todas as aulas, na ordem pedagógica, com contexto.
export function listarAulas(): AulaLocalizada[] {
  const lista: AulaLocalizada[] = [];
  for (const trilha of trilhas) {
    for (const modulo of trilha.modulos) {
      for (const aula of modulo.aulas) {
        lista.push({ aula, modulo, trilha });
      }
    }
  }
  return lista;
}

export function totalAulas(): number {
  return listarAulas().length;
}

export function xpTotalDisponivel(): number {
  return listarAulas().reduce((soma, item) => soma + item.aula.xp, 0);
}

// Aula seguinte na ordem global (para o botão "Continuar de onde parei").
export function proximaAula(trilhaId: string, aulaId: string): AulaLocalizada | undefined {
  const todas = listarAulas();
  const idx = todas.findIndex(
    (i) => i.trilha.id === trilhaId && i.aula.id === aulaId,
  );
  if (idx === -1 || idx + 1 >= todas.length) return undefined;
  return todas[idx + 1];
}

export function aulasDaTrilha(trilhaId: string): Aula[] {
  const trilha = getTrilha(trilhaId);
  if (!trilha) return [];
  return trilha.modulos.flatMap((m) => m.aulas);
}
