"use client";

import { useRef, useState, useEffect, useMemo } from "react";

interface HeroVideoProps {
  className?: string;
}

/** IDs de vídeos premium do Mixkit: saúde + mulheres correndo/bebendo água */
const VIDEO_IDS = [6562, 17475, 29933, 38505, 32807, 52132, 4546] as const;
const CROSSFADE_MS = 7000; // 7s entre trocas

export function HeroVideo({ className = "" }: HeroVideoProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState<Record<number, boolean>>({});
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /** 15 shimmer particles deterministicas */
  const shimmerParticles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        left: `${(i * 7 + 3) % 100}%`,
        top: `${(i * 13 + 7) % 100}%`,
        delay: `${(i * 0.37) % 2}s`,
        size: 2 + (i % 3) * 1.5,
      })),
    [],
  );

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

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-0 overflow-hidden ${className}`}
      style={{
        opacity: mounted ? 1 : 0,
        transition: "opacity 1s ease-in-out",
      }}
    >
      {/* ── Vídeos com parallax + zoom cinematográfico ── */}
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
            onLoadedData={() => {
              if (!loaded) setLoaded(true);
            }}
            onError={() => setErrored((p) => ({ ...p, [id]: true }))}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
              idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            } ${loaded ? "" : "opacity-0"}`}
            style={{
              animation:
                idx === currentIndex
                  ? "hero-zoom 20s ease-out forwards"
                  : "none",
            }}
          >
            <source
              src={`https://assets.mixkit.co/videos/${id}/${id}-720.mp4`}
              type="video/mp4"
            />
          </video>
        ))}
      </div>

      {/* ── Overlay GRADIENT mais sutil (45% opacity max) ── */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#020617]/45 via-[#0f172a]/30 to-[#020617]/50" />
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#020617]/20 via-transparent to-[#020617]/20" />

      {/* ── Shimmer particles (15 deterministicas) ── */}
      {shimmerParticles.map((p, i) => (
        <div
          key={i}
          className="absolute z-30 rounded-full bg-white pointer-events-none"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `hero-shimmer ${3 + (i % 2)}s ease-in-out ${p.delay} infinite`,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* ── Grid pattern sutil ── */}
      <div
        className="pointer-events-none absolute inset-0 z-30 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Orbs flutuantes sutis ── */}
      <div className="absolute top-1/4 left-[15%] z-30 w-64 h-64 rounded-full bg-gradient-to-br from-orange-500/10 to-transparent pointer-events-none animate-[float-orb_8s_ease-in-out_infinite]" />
      <div
        className="absolute bottom-1/4 right-[10%] z-30 w-80 h-80 rounded-full bg-gradient-to-tl from-emerald-500/10 to-transparent pointer-events-none"
        style={{ animation: "float-orb 10s ease-in-out 1s infinite" }}
      />

      {/* ── Pulse glow sutil no centro ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[500px] h-[500px] rounded-full bg-orange-500/5 pointer-events-none animate-[pulse-glow_4s_ease-in-out_infinite]" />

      {/* ── Fallback gradiente ── */}
      {allFailed && (
        <div className="absolute inset-0 z-40 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617]" />
      )}
    </div>
  );
}
