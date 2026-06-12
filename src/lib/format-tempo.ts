/** Formata segundos em texto legível (ex.: 2h 15min). */
export function formatarTempoEstudo(segundos: number): string {
  if (segundos < 60) return `${segundos}s`;
  const min = Math.floor(segundos / 60);
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m > 0 ? `${h}h ${m}min` : `${h}h`;
}

/** Formata data ISO string em texto relativo (ex.: "há 2h", "há 3 dias"). */
export function formatDataRelativa(iso: string): string {
  const agora = Date.now();
  const data = new Date(iso).getTime();
  const diffMs = agora - data;
  const diffSeg = Math.floor(diffMs / 1000);

  if (diffSeg < 60) return "agora";
  const diffMin = Math.floor(diffSeg / 60);
  if (diffMin < 60) return `há ${diffMin}min`;
  const diffH = Math.floor(diffMin / 60);
  if (diffH < 24) return `há ${diffH}h`;
  const diffD = Math.floor(diffH / 24);
  if (diffD < 30) return `há ${diffD}d`;
  const diffM = Math.floor(diffD / 30);
  if (diffM < 12) return `há ${diffM}m`;
  return `há ${Math.floor(diffM / 12)}a`;
}

/** Formata data ISO string em formato dd/mm/aaaa. */
export function formatDataBr(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
