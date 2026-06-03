"use client";

import { useRef, useState, useEffect } from "react";

interface HeroVideoProps {
  className?: string;
  videoId?: string;
  overlay?: "forest" | "dark";
}

/** IDs de vídeos de farmácia do Mixkit */
const VIDEO_IDS = [5433, 5407, 5769, 5763] as const;
const CROSSFADE_MS = 8000; // 8s entre trocas

/** Seeds determinísticos para partículas (evita Math.random no SSR) */
const SHIMMER_SEEDS = [
  { left: 8, top: 12, delay: 0, dur: 3.2 },
  { left: 22, top: 45, delay: 0.6, dur: 4.0 },
  { left: 35, top: 78, delay: 1.2, dur: 3.5 },
  { left: 48, top: 23, delay: 0.3, dur: 4.5 },
  { left: 60, top: 67, delay: 0.9, dur: 3.0 },
  { left: 72, top: 34, delay: 1.5, dur: 3.8 },
  { left: 85, top: 89, delay: 0.1, dur: 4.2 },
  { left: 15, top: 55, delay: 0.7, dur: 3.6 },
  { left: 42, top: 15, delay: 1.8, dur: 4.8 },
  { left: 55, top: 92, delay: 0.4, dur: 3.3 },
  { left: 68, top: 41, delay: 2.0, dur: 3.9 },
  { left: 92, top: 74, delay: 0.2, dur: 4.1 },
  { left: 30, top: 60, delay: 1.1, dur: 3.7 },
  { left: 78, top: 8, delay: 0.8, dur: 4.4 },
  { left: 50, top: 50, delay: 1.4, dur: 3.1 },
];

export function HeroVideo({
  className = "",
}: HeroVideoProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState<Record<number, boolean>>({});
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /* ── Fade-in inicial ── */
  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  /* ── Crossfade a cada 8s ── */
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % VIDEO_IDS.length);
    }, CROSSFADE_MS);
    return () => clearInterval(id);
  }, []);

  /* ── Parallax sutil via scroll ── */
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
      {/* ── Keyframe animations ── */}
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
        @keyframes hero-grid-rotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {/* ── Camada de vídeos com parallax ── */}
      <div
        className="absolute top-[-10%] left-0 w-full h-[120%]"
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
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
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

      {/* ── Gradient overlay a 45% de opacidade ── */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-forest-500/45 via-forest-500/25 to-forest-500/45" />

      {/* ── Grid pattern animado (opacity 15%) ── */}
      <div
        className="pointer-events-none absolute inset-0 z-30"
        style={{ opacity: 0.15 }}
      >
        <div
          className="h-full w-full pattern-grid"
          style={{
            animation: "hero-grid-rotate 180s linear infinite",
            transformOrigin: "center center",
          }}
        />
      </div>

      {/* ── Partículas shimmer ── */}
      <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
        {SHIMMER_SEEDS.map((s, i) => (
          <div
            key={i}
            className="absolute h-[3px] w-[3px] rounded-full bg-white/60"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              animation: `hero-shimmer ${s.dur}s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── Fallback quando todos os vídeos falham ── */}
      {allFailed && (
        <div className="absolute inset-0 z-40 bg-gradient-to-br from-forest-500 via-forest-600 to-forest-700">
          <div className="absolute inset-0 pattern-grid opacity-[0.08]" />
        </div>
      )}
    </div>
  );
}

export function HeroVideoAthlete({
  className = "",
  videoId = "4239",
}: {
  className?: string;
  videoId?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [carregado, setCarregado] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => setErro(true));
    }
  }, []);

  const videoUrl = `https://assets.mixkit.co/videos/${videoId}/${videoId}-720.mp4`;

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      {!erro && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setCarregado(true)}
          onError={() => setErro(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
            carregado ? "opacity-35" : "opacity-0"
          }`}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-500/80 via-forest-500/40 to-forest-500/85" />
      {erro && <div className="absolute inset-0 bg-forest-500" />}
    </div>
  );
}
