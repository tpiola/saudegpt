"use client";

import { useRef, useState, useEffect } from "react";

interface HeroVideoProps {
  className?: string;
}

/** IDs de vídeos premium do Mixkit: educação, aprendizado e conhecimento */
const VIDEO_IDS = [21589, 21598, 4519, 50109, 50111, 4763, 4616] as const;
const CROSSFADE_MS = 7000; // 7s entre trocas

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
      setCurrentIndex((p) => (p + 1) % VIDEO_IDS.length);
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
  const allFailed = VIDEO_IDS.every((id) => errored[id]);

  // 15 shimmer particles determinísticas para profundidade cinematográfica
  const PARTICLES = Array.from({ length: 15 }, (_, i) => ({
    left: `${(i * 137 + 53) % 100}%`,
    top: `${(i * 89 + 17) % 100}%`,
    delay: `${(i * 0.7) % 5}s`,
    size: `${4 + (i % 3) * 3}px`,
  }));

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-0 overflow-hidden ${className}`}
      style={{
        opacity: mounted ? 1 : 0,
        transition: "opacity 1s ease-in-out",
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes hero-shimmer {
          0%, 100% { opacity: 0; transform: translateY(0) scale(0); }
          50% { opacity: 0.6; transform: translateY(-50px) scale(1); }
        }
        @keyframes hero-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.05); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-shimmer-particle { animation: none !important; opacity: 0 !important; }
          .hero-zoom-video { animation: none !important; }
        }
      `}</style>
      {/* Shimmer particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/60 hero-shimmer-particle"
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
{/* ── Vídeos com parallax ── */}
      <div
        className="absolute -top-[10%] left-0 h-[120%] w-full"
        style={{
          transform: `translateY(${-parallaxOffset}px)`,
          willChange: "transform",
        }}
      >
        {VIDEO_IDS.map((id, idx) => (
          <video
            key={id}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => { if (!loaded) setLoaded(true); }}
            onError={() => setErrored((p) => ({ ...p, [id]: true }))}
            className={`absolute inset-0 h-full w-full object-cover hero-zoom-video transition-opacity duration-[1200ms] ease-in-out ${
              idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            } ${loaded ? "" : "opacity-0"}`}
            style={{
              animation: idx === currentIndex ? "hero-zoom 20s ease-out forwards" : "none",
            }}
          >
            <source
              src={`https://assets.mixkit.co/videos/${id}/${id}-720.mp4`}
              type="video/mp4"
            />
          </video>
        ))}
      </div>

      {/* ── Overlay escuro premium (reduzido para 45% — mais leve e moderno) ── */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#020617]/45 via-[#0f172a]/40 to-[#020617]/60" />
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#020617]/40 via-transparent to-[#020617]/40" />

      {/* ── Grid pattern ── */}
      <div
        className="pointer-events-none absolute inset-0 z-30 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Fallback ── */}
      {allFailed && (
        <div className="absolute inset-0 z-40 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617]" />
      )}
    </div>
  );
}
