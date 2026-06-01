import { missoes, type Missao } from "@/content/missoes";

/** Número da semana ISO (1–53) para rotacionar missões em destaque. */
export function semanaISO(d = new Date()): number {
  const data = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dia = data.getUTCDay() || 7;
  data.setUTCDate(data.getUTCDate() + 4 - dia);
  const anoInicio = new Date(Date.UTC(data.getUTCFullYear(), 0, 1));
  return Math.ceil(((data.getTime() - anoInicio.getTime()) / 86400000 + 1) / 7);
}

/** Subconjunto de missões em destaque na semana (3 casos). */
export function missoesDaSemana(): Missao[] {
  if (missoes.length === 0) return [];
  const semana = semanaISO();
  const inicio = (semana * 3) % missoes.length;
  const selecionadas: Missao[] = [];
  for (let i = 0; i < Math.min(3, missoes.length); i++) {
    selecionadas.push(missoes[(inicio + i) % missoes.length]);
  }
  return selecionadas;
}

export function idsMissoesDaSemana(): Set<string> {
  return new Set(missoesDaSemana().map((m) => m.id));
}
