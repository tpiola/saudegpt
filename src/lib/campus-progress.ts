import { casosCampus, memoriaCampus } from "@/content/campus";
export const CAMPUS_KEY = "franca-j-campus-v1";
export const CAMPUS_EVENT = "franca-j-campus-update";
export interface CampusProgress {
  concluidos: string[];
  revisar: string[];
  cartoes: string[];
}
export const CAMPUS_EMPTY: CampusProgress = {
  concluidos: [],
  revisar: [],
  cartoes: [],
};
export function normalizarCampus(raw: unknown): CampusProgress {
  if (!raw || typeof raw !== "object") return { ...CAMPUS_EMPTY };
  const r = raw as Record<string, unknown>;
  const ids = (v: unknown, validos: Set<string>) =>
    Array.isArray(v)
      ? [
          ...new Set(
            v.filter(
              (s): s is string => typeof s === "string" && validos.has(s),
            ),
          ),
        ]
      : [];
  const casos = new Set(casosCampus.map((c) => c.id));
  return {
    concluidos: ids(r.concluidos, casos),
    revisar: ids(r.revisar, casos),
    cartoes: ids(r.cartoes, new Set(memoriaCampus.map((c) => c.id))),
  };
}
export function pontosCampus(p: CampusProgress) {
  return casosCampus.reduce(
    (s, c) =>
      s +
      (p.concluidos.includes(c.id)
        ? c.nivel === "basico"
          ? 30
          : c.nivel === "intermediario"
            ? 45
            : 60
        : 0),
    0,
  );
}
export function lerCampus(): CampusProgress {
  try {
    const atual = localStorage.getItem(CAMPUS_KEY);
    if (atual) return normalizarCampus(JSON.parse(atual));
    return normalizarCampus({
      concluidos: JSON.parse(
        localStorage.getItem("saudegpt-pratica-balcao-v1") || "[]",
      ),
    });
  } catch {
    return { ...CAMPUS_EMPTY };
  }
}
export function salvarCampus(p: CampusProgress) {
  try {
    localStorage.setItem(CAMPUS_KEY, JSON.stringify(normalizarCampus(p)));
    window.dispatchEvent(new Event(CAMPUS_EVENT));
  } catch {}
}
