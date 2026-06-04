"use client";

import { useRef, useState, useEffect } from "react";

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
      <style>{`
        @keyframes hero-zoom {
          from { transform: scale(1); }
          to   { transform: scale(1.05); }
        }
        @keyframes hero-shimmer {
          0%   { opacity: 0; transform: translateY(0) scale(0); }
          40%  { opacity: 1; transform: translateY(-20px) scale(1.3); }
          100% { opacity: 0; transform: translateY(-50px) scale(0); }
        }
      `}</style>

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
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
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

      {/* ── Overlay escuro premium ── */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#020617]/85 via-[#0f172a]/60 to-[#020617]/90" />
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
