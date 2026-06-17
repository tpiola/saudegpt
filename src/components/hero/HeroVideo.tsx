"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";

/* ── Mixkit video URL ── */
const VIDEO_MP4 =
  "https://assets.mixkit.co/videos/preview/mixkit-dark-tech-circuit-board-data-processing-43777-large.mp4";

/* ── Frases rotativas (sem typewriter, alterna suavemente) ── */
const FRASES = [
  "Do zero ao balcão, no seu ritmo.",
  "Trilhas, quizzes, simulados e prática de balcão.",
  "Conteúdo criado pelo farmacêutico Thiago Piola — CRF/SP 58.519.",
];

function FraseRotativa() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % FRASES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span
      key={idx}
      className="inline-block transition-opacity duration-700"
    >
      {FRASES[idx]}
    </span>
  );
}

export function HeroVideo() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Video Background ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          poster="/imagens/hero_pills.png"
        >
          <source src={VIDEO_MP4} type="video/mp4" />
        </video>

        {/* Gradient overlay layers — mais limpo */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/70 to-navy-950/90" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* ── Radial glow sutil ── */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] h-[500px] w-[500px] rounded-full bg-gold-500/8 blur-[140px]" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-4 py-1.5 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
          <span className="text-xs font-medium text-gold-300">
            Formação para atendentes de farmácia
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Formação completa para{" "}
          <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
            atendentes de farmácia
          </span>
        </h1>

        {/* Subtitle rotativo */}
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/60 sm:text-lg min-h-[2em]">
          <FraseRotativa />
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/trilhas"
            className="group relative inline-flex h-12 sm:h-14 items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 px-6 sm:px-8 text-sm sm:text-base font-bold text-white shadow-xl shadow-gold-500/25 transition-all hover:shadow-gold-500/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="relative z-10">Começar agora</span>
            <Icon
              name="arrow"
              size={18}
              className="relative z-10 transition-transform group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/dashboard"
            className="inline-flex h-12 sm:h-14 items-center gap-2 rounded-2xl border border-white/20 px-6 sm:px-8 text-sm sm:text-base font-medium text-white/80 backdrop-blur-sm transition-all hover:border-white/40 hover:text-white hover:bg-white/5"
          >
            <Icon name="play" size={18} />
            Ver plataforma
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 sm:gap-12">
          {[
            { valor: "7", label: "trilhas" },
            { valor: "159+", label: "aulas" },
            { valor: "100%", label: "online" },
            { valor: "39+", label: "módulos" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-extrabold text-white sm:text-3xl">
                {stat.valor}
              </div>
              <div className="text-xs text-white/40 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <p className="text-[11px] text-white/30 max-w-sm leading-relaxed">
            Este treinamento não substitui o que o(a) farmacêutico(a) ensina presencialmente.
          </p>
          <span className="text-xs text-white/30">Role para ver mais</span>
          <div className="flex h-6 w-4 justify-center rounded-full border border-white/20">
            <div className="mt-1 h-2 w-1 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
