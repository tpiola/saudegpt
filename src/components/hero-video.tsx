"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

/** Mixkit IDs: cinematográficos de saúde, estudo e cuidado humano */
const VIDEOS = [
  { id: 6562, label: "Médico ouvindo batimentos" },
  { id: 29933, label: "Médico com paciente" },
  { id: 32807, label: "Corrida feminina ao ar livre" },
  { id: 52132, label: "Hidratação pós-corrida" },
  { id: 17475, label: "Prescrição médica" },
  { id: 38505, label: "Verificação de soro" },
  { id: 4546, label: "Bem-estar e hidratação" },
] as const;

const CROSSFADE_MS = 7000;
const SHIMMER_COUNT = 24;

export function HeroVideoBackground({
  className,
}: {
  className?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const shimmerSeeds = useRef(
    Array.from({ length: SHIMMER_COUNT }, (_, i) => ({
      left: 3 + (i * 4.1) % 94,
      top: 5 + (i * 7.3 + 2.7) % 90,
      delay: (i * 0.18) % 3.5,
      dur: 2.8 + (i % 3) * 0.6,
      size: 2 + (i % 4),
    }))
  );

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const id = setInterval(
      () => setCurrentIndex((p) => (p + 1) % VIDEOS.length),
      CROSSFADE_MS
    );
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

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 z-0 overflow-hidden bg-midnight-900",
        className
      )}
      style={{ opacity: mounted ? 1 : 0, transition: "opacity 1s ease" }}
    >
      {/* ── Keyframes ── */}
      <style>{`
        @keyframes hero-shimmer {
          0%   { opacity: 0; transform: translateY(0) scale(0); }
          35%  { opacity: 1; transform: translateY(-15px) scale(1.4); }
          100% { opacity: 0; transform: translateY(-40px) scale(0); }
        }
        @keyframes hero-grid-rotate {
          from { transform: rotate(0deg) scale(1); }
          to   { transform: rotate(360deg) scale(1); }
        }
      `}</style>

      {/* ── Camada de vídeos com parallax ── */}
      <div
        className="absolute -top-[10%] left-0 h-[120%] w-full"
        style={{
          transform: `translateY(${-parallaxOffset}px)`,
          willChange: "transform",
        }}
      >
        {VIDEOS.map((video, idx) => (
          <video
            key={video.id}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() =>
              setLoaded((p) => ({ ...p, [video.id]: true }))
            }
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out",
              idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <source
              src={`https://assets.mixkit.co/videos/${video.id}/${video.id}-720.mp4`}
              type="video/mp4"
            />
          </video>
        ))}
      </div>

      {/* ── Overlay gradiente escuro ── */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-midnight-900/80 via-midnight-900/50 to-midnight-900/85" />
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-midnight-900/40 via-transparent to-midnight-900/40" />

      {/* ── Grid pattern sutil ── */}
      <div
        className="pointer-events-none absolute inset-0 z-30 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "hero-grid-rotate 240s linear infinite",
          transformOrigin: "center center",
        }}
      />

      {/* ── Partículas shimmer ── */}
      <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
        {shimmerSeeds.current.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-emerald-400/30"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animation: `hero-shimmer ${s.dur}s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── Sobreposição de conteúdo ── */}
      <div className="absolute inset-0 z-40 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-3xl"
            >
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium tracking-wider text-emerald-300 backdrop-blur-md shadow-[0_0_24px_rgba(16,185,129,0.12)]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
                Formação completa para Atendentes
              </div>

              <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold leading-[1.0] tracking-[-0.04em] text-white">
                Atendentes de{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-200 bg-clip-text text-transparent">
                  Farmácia
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed tracking-wide text-white/50 sm:text-xl">
                A formação que transforma atendentes em profissionais de cuidado
                — com técnica, acolhimento e excelência no balcão da farmácia.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  size="xl"
                  className="shadow-[0_8px_40px_rgba(16,185,129,0.35)] hover:shadow-[0_12px_50px_rgba(16,185,129,0.5)]"
                >
                  Quero me matricular
                </Button>
                <Button variant="outline-white" size="xl">
                  Ver trilhas
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 flex flex-wrap gap-8"
          >
            {[
              { value: "4", label: "TRILHAS" },
              { value: "81+", label: "AULAS" },
              { value: "∞", label: "DO ZERO AO AVANÇADO" },
              { value: "100%", label: "ONLINE" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="text-2xl font-bold text-emerald-400 tabular-nums">
                  {stat.value}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/35">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-50 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/25">
          Explore
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce text-white/30" />
      </motion.div>
    </div>
  );
}
