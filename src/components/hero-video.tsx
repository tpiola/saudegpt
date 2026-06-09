"use client";

import { useRef, useState, useEffect } from "react";

const IMAGES = [
  { id: 21589, label: "📚 Biblioteca estudos" },
  { id: 5433,  label: "💊 Farmacêutica atendendo" },
  { id: 21598, label: "📚 Torre de livros" },
  { id: 34235, label: "💊 Farmácia interior" },
  { id: 4519,  label: "🎓 Campus universitário" },
  { id: 34625, label: "💊 Medicamentos close" },
  { id: 50109, label: "📝 Caderno anotações" },
  { id: 33268, label: "💊 Cuidados saúde" },
];

const CROSSFADE_MS = 6000;

/* Partículas shimmer — menos em mobile (4) */
const PARTICLES = Array.from({ length: 8 }, (_, i) => ({
  left: `${(i * 211 + 53) % 100}%`,
  top: `${(i * 73 + 17) % 100}%`,
  delay: `${(i * 0.6) % 5}s`,
  size: `${4 + (i % 2) * 4}px`,
  mobile: i < 4,
}));

interface HeroVideoProps {
  className?: string;
}

export function HeroVideo({ className = "" }: HeroVideoProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % IMAGES.length);
    }, CROSSFADE_MS);
    return () => clearInterval(id);
  }, []);

  const current = IMAGES[currentIndex];
  const next = IMAGES[(currentIndex + 1) % IMAGES.length];

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-0 overflow-hidden ${className}`}
      style={{
        opacity: mounted ? 1 : 0,
        transition: "opacity 1s ease-in-out",
      }}
    >
      {/* Shimmer particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-white/50 hero-shimmer-particle ${p.mobile ? '' : 'hidden sm:block'}`}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animation: `hero-shimmer ${3 + (i % 3)}s ${p.delay} ease-in-out infinite`,
            opacity: 0,
          }}
        />
      ))}

      {/* Poster AVIF com crossfade entre imagens — sem vídeo */}
      {[current, next].map((img) => (
        <img
          key={img.id}
          src={`/videos/${img.id}-poster.avif`}
          alt=""
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
            img.id === current.id ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ filter: "brightness(0.6)" }}
        />
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#020617]/50 via-[#0f172a]/40 to-[#020617]/70" />
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#020617]/40 via-transparent to-[#020617]/30" />

      {/* Label */}
      <div className="absolute bottom-6 right-6 z-30 hidden sm:block">
        <div className="flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] font-medium text-white/50 tracking-wide uppercase">
            {current.label}
          </span>
        </div>
      </div>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-30 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
