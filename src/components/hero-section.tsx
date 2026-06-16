"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "./icons";

/* ── Typewriter com espaçamento garantido ── */
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
      terminou ? 0 : deletando ? 30 : 60
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

/* ── Partículas flutuantes ── */
const PARTICLE_COUNT = 30;
const PARTICLE_COLORS = [
  "rgba(16, 185, 129, 0.4)",
  "rgba(245, 158, 11, 0.3)",
  "rgba(255, 255, 255, 0.15)",
];

function HeroParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
        const size = Math.random() * 6 + 2;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
            }}
            animate={{
              y: [0, -30 - Math.random() * 40, 0],
              x: [0, (Math.random() - 0.5) * 20, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0 z-0" style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]) }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/imagens/hero_pills.png')" }}
        />
        {/* Gradient overlay premium */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/85 via-navy-800/75 to-forest-900/92" />
        {/* Radial glow no centro */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gold-500/8 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </motion.div>

      {/* Partículas animadas */}
      <HeroParticles />

      {/* Conteúdo */}
      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Badge superior */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-4 py-1.5 mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-gold-300">
              Formação para atendentes de farmácia
            </span>
          </motion.div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Formação completa para{" "}
            <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-clip-text text-transparent">
              atendentes de farmácia
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-white/60 sm:text-lg min-h-[2em]">
            <TypewriterSubtitulo
              frases={[
                "Do zero ao certificado, no seu ritmo.",
                "Trilhas, quizzes, simulados e prática de balcão.",
                "Conteúdo criado pelo farmacêutico Thiago Piola — CRF/SP 58.519.",
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
              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <span className="relative z-10">Começar agora</span>
              <Icon name="arrow" size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
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
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { valor: "7", label: "trilhas" },
              { valor: "159+", label: "aulas" },
              { valor: "100%", label: "online" },
              { valor: "39+", label: "módulos" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-extrabold text-white sm:text-3xl">{stat.valor}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-10 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-xs text-white/30">Role para ver mais</span>
            <div className="flex h-6 w-4 justify-center rounded-full border border-white/20">
              <div className="mt-1 h-2 w-1 rounded-full bg-white/40 animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
