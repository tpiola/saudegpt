"use client";

import { useEffect, useState, useRef } from "react";
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
      {/* Background */}
      <motion.div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/imagens/hero_pills.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/90 via-forest-800/80 to-forest-900/95" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </motion.div>

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
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Formação completa para{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
              atendentes de farmácia
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
            <TypewriterSubtitulo
              frases={[
                "Do zero ao certificado, no seu ritmo.",
                "Trilhas, quizzes, simulados e prática.",
                "Conteúdo que faz diferença no dia a dia.",
              ]}
            />
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="group relative inline-flex h-12 sm:h-14 items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 sm:px-8 text-sm sm:text-base font-bold text-white shadow-xl shadow-orange-500/25 transition-all hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10">Começar agora</span>
              <Icon name="arrow" size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex h-12 sm:h-14 items-center gap-2 rounded-2xl border border-white/20 px-6 sm:px-8 text-sm sm:text-base font-medium text-white/80 backdrop-blur-sm transition-all hover:border-white/40 hover:text-white"
            >
              <Icon name="play" size={18} />
              Ver plataforma
            </Link>
          </div>

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
