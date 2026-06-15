"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icons";
import ProfessorAvatar from "@/components/ProfessorAvatar";

/* ─── Tipos ─── */
export interface ProfessorBannerProps {
  /** Título da aula */
  tituloAula?: string;
  /** Subtítulo / mini-bio */
  subtitulo?: string;
  /** Classes CSS extras */
  className?: string;
  /** Desabilitar animação de partículas */
  semParticulas?: boolean;
}

/* ═══════════════════════════════════════════════════
   ProfessorBanner
   Banner grande para topo das aulas EAD.
   ═══════════════════════════════════════════════════ */
export default function ProfessorBanner({
  tituloAula,
  subtitulo = "Seu professor virtual — conteúdo revisado por farmacêutico",
  className,
  semParticulas = false,
}: ProfessorBannerProps) {
  const [visivel, setVisivel] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  /* Animação de entrada na viewport */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={cn(
        "relative isolate overflow-hidden rounded-2xl",
        "bg-gradient-to-br from-forest-600 via-emerald-700 to-forest-700",
        "px-5 py-8 sm:px-8 sm:py-12",
        "transition-all duration-700 ease-out",
        visivel
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-8 scale-[0.97] opacity-0",
        className,
      )}
      aria-label="Banner do professor"
    >
      {/* ── Partículas sutis (CSS confetti) ── */}
      {!semParticulas && <Particulas />}

      {/* ── Grade de fundo sutil ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      {/* ── Conteúdo ── */}
      <div className="relative z-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
        {/* Avatar do professor */}
        <div
          className={cn(
            "flex-shrink-0 transition-all duration-700 delay-200",
            visivel ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-90 opacity-0",
          )}
        >
          <ProfessorAvatar size="lg" showName={false} />
        </div>

        {/* Texto */}
        <div
          className={cn(
            "flex-1 text-center sm:text-left",
            "transition-all duration-700 delay-300",
            visivel ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          <h2 className="text-xl font-extrabold text-white sm:text-2xl md:text-3xl">
            Prof. Thiago Piola
          </h2>
          <p className="mt-1 text-sm font-medium text-white/80">
            Farmacêutico CRF-SP 58.519
          </p>
          {tituloAula && (
            <p className="mt-3 text-lg font-bold text-white/95 sm:text-xl">
              {tituloAula}
            </p>
          )}
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-white/70">
            {subtitulo}
          </p>

          {/* Badges */}
          <div className="mt-4 flex flex-wrap items-center gap-2 justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Online agora
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
              <Icon name="award" size={11} /> 10+ anos
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
              <Icon name="book" size={11} /> Farmácia Clínica
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   Particulas — confete CSS sutil
   ═══════════════════════════════════════════════════ */
function Particulas() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {PARTICLE_STYLES.map((style, i) => (
        <span
          key={i}
          className="absolute animate-float-particle rounded-full"
          style={{
            width: `${style.size}px`,
            height: `${style.size}px`,
            left: `${style.left}%`,
            top: `${style.top}%`,
            background: style.color,
            opacity: style.opacity,
            animationDelay: `${style.delay}s`,
            animationDuration: `${style.duration}s`,
          }}
        />
      ))}

      {/* Keyframes via style tag */}
      <style jsx>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: var(--p-opacity, 0.4);
          }
          50% {
            transform: translateY(-80px) translateX(20px) scale(1.2);
          }
          90% {
            opacity: var(--p-opacity, 0.4);
          }
          100% {
            transform: translateY(-160px) translateX(-10px) scale(0.6);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

/* ─── Dados das partículas ─── */
const PARTICLE_STYLES = Array.from({ length: 20 }, (_, i) => ({
  size: Math.random() * 6 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  color: i % 3 === 0 ? "rgba(201, 168, 76, 0.6)" : i % 3 === 1 ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 87, 255, 0.3)",
  opacity: Math.random() * 0.3 + 0.1,
  delay: Math.random() * 5,
  duration: Math.random() * 4 + 3,
}));
