/** Ilustração pedagógica por trilha (assets locais premium). */
export function imagemAula(trilhaId: string): string {
  const mapa: Record<string, string> = {
    // Unsplash pharmacy-related real photos (no branding)
    perfumaria: "https://images.unsplash.com/photo-1585386959984-a41552231658?auto=format&fit=crop&w=1200&q=80",
    medicamentos: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80",
    operacional: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1200&q=80",
    encantamento: "https://images.unsplash.com/photo-1588776814546-ec7e5f3a9a1d?auto=format&fit=crop&w=1200&q=80",
    fundamentos: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80",
    pratica: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1200&q=80",
    "servicos-cuidado": "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
  };
  return mapa[trilhaId] ?? "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80";
}
