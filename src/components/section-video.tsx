"use client";

import { useEffect, useRef, useState } from "react";

interface SectionVideoProps {
  /** Padrão: usa vídeos de saúde/farmácia. Opcional: específico */
  videoIds?: number[];
  /** Opacidade do vídeo (0-1) */
  opacity?: number;
  /** Escurecimento extra */
  overlay?: string;
}

/* Health/wellness background videos */
const BG_VIDEOS = [34625, 33268, 35887, 16533];

export function SectionVideo({
  videoIds = BG_VIDEOS,
  opacity = 0.15,
  overlay = "from-transparent via-transparent to-transparent",
}: SectionVideoProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [inView, setInView] = useState(false);
  const [errored, setErrored] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  /* ── Só carrega quando entra na viewport ── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* ── Rotação apenas se estiver visível ── */
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setCurrentIdx((p) => (p + 1) % videoIds.length);
    }, 8000);
    return () => clearInterval(id);
  }, [inView, videoIds.length]);

  const allFailed = videoIds.every((id) => errored.has(id));
  if (!inView || allFailed) return <div ref={containerRef} className="pointer-events-none absolute inset-0 z-0 overflow-hidden" />;

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div style={{ opacity }}>
        {/* Renderiza apenas 2 vídeos por vez: o atual + próximo (crossfade mínimo) */}
        {[currentIdx, (currentIdx + 1) % videoIds.length].map((idx) => {
          const id = videoIds[idx];
          return (
            <video
              key={id}
              autoPlay
              muted
              loop
              playsInline
              preload={idx === currentIdx ? "auto" : "none"}
              onError={() => setErrored((prev) => new Set(prev).add(id))}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
                idx === currentIdx ? "opacity-100" : "opacity-0"
              }`}
            >
              <source src={`https://assets.mixkit.co/videos/${id}/${id}-720.mp4`} type="video/mp4" />
            </video>
          );
        })}
      </div>
      <div className={`absolute inset-0 bg-gradient-to-b ${overlay}`} />
    </div>
  );
}

/**
 * Section-specific video configurations
 */
export const SECTION_VIDEOS = {
  missao: {
    videos: [34625, 33268, 35887],
    opacity: 0.08,
    overlay: "from-green-950 via-emerald-950/90 to-forest-950",
  },
  cta: {
    videos: [16533, 34269, 33245],
    opacity: 0.06,
    overlay: "from-green-900/90 via-emerald-800/90 to-forest-900/90",
  },
  jornada: {
    videos: [5603, 5765, 5767],
    opacity: 0.04,
    overlay: "from-surface via-surface/95 to-surface",
  },
} as const;
