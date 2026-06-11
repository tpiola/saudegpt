// Sons leves de feedback (Web Audio API — sem arquivos, sem peso na rede).
// Tons suaves e curtos: recompensa sutil sem cansar o ouvido.

let ctx: AudioContext | null = null;

function audio(): AudioContext | null {
  if (typeof window === "undefined") return null;
  try {
    if (!ctx) {
      const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === "suspended") void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

function tom(freq: number, inicio: number, duracao: number, volume: number) {
  const ac = audio();
  if (!ac) return;
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = "sine";
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, ac.currentTime + inicio);
  gain.gain.linearRampToValueAtTime(volume, ac.currentTime + inicio + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + inicio + duracao);
  osc.connect(gain).connect(ac.destination);
  osc.start(ac.currentTime + inicio);
  osc.stop(ac.currentTime + inicio + duracao + 0.05);
}

/** Acerto / conclusão: arpejo suave ascendente (dó–mi–sol). */
export function somSucesso() {
  tom(523.25, 0, 0.18, 0.06);
  tom(659.25, 0.09, 0.18, 0.06);
  tom(783.99, 0.18, 0.28, 0.07);
}

/** Quase lá: tom único, neutro e gentil — nunca punitivo. */
export function somQuaseLa() {
  tom(392, 0, 0.22, 0.045);
}
