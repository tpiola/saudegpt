"use client";

import { useRef, useState, useEffect } from "react";

/* ── Vídeos reduzidos: 8 no pool, só 2 no DOM ── */
const VIDEO_POOL = [
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

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 157 + 53) % 100}%`,
  top: `${(i * 89 + 17) % 100}%`,
  delay: `${(i * 0.6) % 5}s`,
  size: `${4 + (i % 3) * 3}px`,
}));

interface HeroVideoProps {
  className?: string;
}

export function HeroVideo({ className = "" }: HeroVideoProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState<Record<number, boolean>>({});
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % VIDEO_POOL.length);
    }, CROSSFADE_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = Math.min(scrollY * 0.3, 80);
  const allFailed = VIDEO_POOL.every((v) => errored[v.id]);

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
          className="absolute rounded-full bg-white/50 hero-shimmer-particle"
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

      {/* Vídeos — só 2 no DOM (current + next) */}
      <div
        className="absolute -top-[10%] left-0 h-[120%] w-full"
        style={{
          transform: `translateY(${-parallaxOffset}px)`,
          willChange: "transform",
        }}
      >
        {VIDEO_POOL.filter((_, idx) =>
          idx === currentIndex || idx === (currentIndex + 1) % VIDEO_POOL.length
        ).map(({ id }) => (
          <video
            key={id}
            autoPlay
            muted
            loop
            playsInline
            preload={id === VIDEO_POOL[currentIndex].id ? "auto" : "none"}
            onLoadedData={() => { if (!loaded) setLoaded(true); }}
            onError={() => setErrored((p) => ({ ...p, [id]: true }))}
            className={`absolute inset-0 h-full w-full object-cover hero-zoom-video transition-opacity duration-[1200ms] ease-in-out ${
              id === VIDEO_POOL[currentIndex].id ? "opacity-100 z-10" : "opacity-0 z-0"
            } ${loaded ? "" : "opacity-0"}`}
            style={{
              animation: id === VIDEO_POOL[currentIndex].id ? "hero-zoom 20s ease-out forwards" : "none",
            }}
          >
            <source src={`https://assets.mixkit.co/videos/${id}/${id}-720.mp4`} type="video/mp4" />
          </video>
        ))}
      </div>

      {/* Gradiente overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#020617]/50 via-[#0f172a]/40 to-[#020617]/70" />
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#020617]/40 via-transparent to-[#020617]/30" />

      {/* Label do vídeo atual */}
      <div className="absolute bottom-6 right-6 z-30 hidden sm:block">
        <div className="flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] font-medium text-white/50 tracking-wide uppercase">
            {VIDEO_POOL[currentIndex].label}
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

      {allFailed && (
        <div className="absolute inset-0 z-40 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617]" />
      )}
    </div>
  );
}
