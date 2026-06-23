import type { Aula, Modulo, Trilha } from "./types";
import { trilhaPerfumaria } from "./trilha-perfumaria";
import { trilhaMedicamentos } from "./trilha-medicamentos";
import { trilhaOperacional } from "./trilha-operacional";
import { trilhaVendas } from "./trilha-encantamento";
import { trilhaFundamentos } from "./trilha-fundamentos";
import { trilhaPratica } from "./trilha-pratica";
import { trilhaServicosCuidado } from "./trilha-servicos-cuidado";
import { trilhaNutricaoFundamentos } from "./trilha-nutricao-fundamentos";
import { trilhaFisioterapiaReabilitacao } from "./trilha-fisioterapia-reabilitacao";
import { trilhaPsicologiaSaudeMental } from "./trilha-psicologia-saude-mental";
import { trilhaCuidadorIdosos } from "./trilha-cuidador-idosos";

export const trilhas: Trilha[] = [
  trilhaPerfumaria,
  trilhaMedicamentos,
  trilhaOperacional,
  trilhaVendas,
  trilhaFundamentos,
  trilhaPratica,
  trilhaServicosCuidado,
  trilhaNutricaoFundamentos,
  trilhaFisioterapiaReabilitacao,
  trilhaPsicologiaSaudeMental,
  trilhaCuidadorIdosos,
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
  const idx = todas.findIndex((i) => i.trilha.id === trilhaId && i.aula.id === aulaId);
  if (idx === -1 || idx + 1 >= todas.length) return undefined;
  return todas[idx + 1];
}

export function aulasDaTrilha(trilhaId: string): Aula[] {
  const trilha = getTrilha(trilhaId);
  if (!trilha) return [];
  return trilha.modulos.flatMap((m) => m.aulas);
}

export function getModulo(trilhaId: string, moduloId: string) {
  const trilha = getTrilha(trilhaId);
  if (!trilha) return undefined;
  const modulo = trilha.modulos.find((m) => m.id === moduloId);
  if (!modulo) return undefined;
  return { trilha, modulo };
}

// Questões de prova do módulo (embaralhadas no cliente).
export function questoesDoModulo(trilhaId: string, moduloId: string) {
  const ctx = getModulo(trilhaId, moduloId);
  if (!ctx) return [];
  return ctx.modulo.aulas.flatMap((a) =>
    a.quiz.map((q) => ({ ...q, aulaId: a.id, aulaTitulo: a.titulo })),
  );
}
