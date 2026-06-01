/** Ilustração pedagógica por trilha (assets locais premium). */
export function imagemAula(trilhaId: string): string {
  const mapa: Record<string, string> = {
    perfumaria: "/ilustracoes/perfumaria.svg",
    medicamentos: "/ilustracoes/medicamentos.svg",
    operacional: "/ilustracoes/operacional.svg",
    carreira: "/ilustracoes/carreira.svg",
  };
  return mapa[trilhaId] ?? "/ilustracoes/geral.svg";
}
