"use client";

import { useRef, useState, useEffect } from "react";

const VIDEOS = [
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

/* 8 partículas shimmer */
const PARTICLES = Array.from({ length: 8 }, (_, i) => ({
  left: `${(i * 211 + 53) % 100}%`,
  top: `${(i * 73 + 17) % 100}%`,
  delay: `${(i * 0.6) % 5}s`,
  size: `${4 + (i % 2) * 4}px`,
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
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % VIDEOS.length);
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
  const allFailed = VIDEOS.every((v) => errored[v.id]);
  const current = VIDEOS[currentIndex];
  const next = VIDEOS[(currentIndex + 1) % VIDEOS.length];

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

      {/* Poster AVIF — carrega INSTANTANEAMENTE (4-13KB) */}
      <img
        src={`/videos/${current.id}-poster.avif`}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover z-0"
        style={{ filter: "brightness(0.6)" }}
      />

      {/* Vídeos — só no desktop, 1 por vez com poster nativo */}
      {!isMobile && (
        <div
          className="absolute -top-[10%] left-0 h-[120%] w-full"
          style={{
            transform: `translateY(${-parallaxOffset}px)`,
            willChange: "transform",
          }}
        >
          {[current, next].map((v) => (
            <video
              key={v.id}
              autoPlay
              muted
              loop
              playsInline
              preload={v.id === current.id ? "auto" : "none"}
              poster={`/videos/${v.id}-poster.avif`}
              onLoadedData={() => { if (!loaded) setLoaded(true); }}
              onError={() => setErrored((p) => ({ ...p, [v.id]: true }))}
              className={`absolute inset-0 h-full w-full object-cover hero-zoom-video transition-opacity duration-[1200ms] ease-in-out ${
                v.id === current.id ? "opacity-100 z-10" : "opacity-0 z-0"
              } ${loaded ? "" : "opacity-0"}`}
              style={{
                animation: v.id === current.id ? "hero-zoom 20s ease-out forwards" : "none",
              }}
            >
              <source src={`https://assets.mixkit.co/videos/${v.id}/${v.id}-720.mp4`} type="video/mp4" />
            </video>
          ))}
        </div>
      )}

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

      {allFailed && (
        <div className="absolute inset-0 z-40 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617]" />
      )}
    </div>
  );
}
