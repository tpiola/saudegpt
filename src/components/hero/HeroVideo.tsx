"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { useHeroParallax, useAnimatedParticles } from "./hero-animations";

/* ── Mixkit video URL ── */
const VIDEO_MP4 =
  "https://assets.mixkit.co/videos/preview/mixkit-dark-tech-circuit-board-data-processing-43777-large.mp4";

/* ── Typewriter subtitles ── */
function TypewriterSubtitulo({
  frases,
  className = "",
}: {
  frases: string[];
  className?: string;
}) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const [deletando, setDeletando] = useState(false);

  useEffect(() => {
    const fraseAtual = frases[idx];
    const terminou = !deletando && sub === fraseAtual.length;
    const zerou = deletando && sub === 0;

    if (zerou) {
      setDeletando(false);
      setIdx((i) => (i + 1) % frases.length);
      return;
    }

    const timer = setTimeout(
      () => {
        if (terminou) {
          setTimeout(() => setDeletando(true), 2500);
          return;
        }
        setSub((s) => (deletando ? s - 1 : s + 1));
      },
      terminou ? 0 : deletando ? 30 : 60,
    );
    return () => clearTimeout(timer);
  }, [sub, idx, deletando, frases]);

  return (
    <span className={className}>
      {frases[idx].substring(0, sub)}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export function HeroVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  // GSAP ScrollTrigger parallax: background + content fade
  useHeroParallax(sectionRef);

  // GSAP animated floating particles
  useAnimatedParticles(particlesRef, { count: 30 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Video Background with parallax ── */}
      <div
        data-hero-bg
        className="absolute inset-0 z-0 will-change-transform"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          poster="/imagens/hero_pills.png"
        >
          <source src={VIDEO_MP4} type="video/mp4" />
        </video>

        {/* Gradient overlay layers */}
        <div
          data-hero-overlay
          className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-800/60 to-forest-900/85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* ── GSAP-animated particles ── */}
      <div
        ref={particlesRef}
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
        aria-hidden
      />

      {/* ── Radial glow ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[140px]" />

      {/* ── Content (fades out on scroll via GSAP) ── */}
      <div
        data-hero-content
        className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 mb-6 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-emerald-300">
            Formação para atendentes de farmácia
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Formação completa para{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-orange-400 bg-clip-text text-transparent">
            atendentes de farmácia
          </span>
        </h1>

        {/* Subtitle with typewriter */}
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/60 sm:text-lg min-h-[2em]">
          <TypewriterSubtitulo
            frases={[
              "Do zero ao certificado, no seu ritmo.",
              "Trilhas, quizzes, simulados e prática de balcão.",
              "Conteúdo criado por farmacêutico — CRF/SP 58.519.",
              "Aprenda, evolua e transforme sua carreira.",
            ]}
          />
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/trilhas"
            className="group relative inline-flex h-12 sm:h-14 items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 sm:px-8 text-sm sm:text-base font-bold text-white shadow-xl shadow-orange-500/25 transition-all hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98]"
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
        <div className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-12">
          {[
            { valor: "7", label: "trilhas" },
            { valor: "159+", label: "aulas" },
            { valor: "100%", label: "online" },
            { valor: "GRÁTIS", label: "acesso" },
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
        <div className="mt-10 flex flex-col items-center gap-2">
          <span className="text-xs text-white/30">Role para ver mais</span>
          <div className="flex h-6 w-4 justify-center rounded-full border border-white/20">
            <div className="mt-1 h-2 w-1 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
