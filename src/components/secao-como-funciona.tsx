"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "./icons";

const passos = [
  {
    etapa: "01",
    titulo: "Faça sua matrícula",
    desc: "Cadastre-se em segundos e tenha acesso imediato.",
    icone: "user" as const,
  },
  {
    etapa: "02",
    titulo: "Escolha sua trilha",
    desc: "Navegue por áreas: medicamentos, perfumaria, operacional.",
    icone: "compass" as const,
  },
  {
    etapa: "03",
    titulo: "Estude e pratique",
    desc: "Aulas, quizzes, jogos e simulados modulares.",
    icone: "play" as const,
  },
  {
    etapa: "04",
    titulo: "Ganhe XP e suba de nível",
    desc: "Cada atividade rende pontos. Acumule e suba no ranking.",
    icone: "star" as const,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20, mass: 0.8 },
  },
};

const lineVariants = {
  hidden: { scaleX: 0, scaleY: 0 },
  visible: {
    scaleX: 1,
    scaleY: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function SecaoComoFunciona() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-navy-900 py-24 sm:py-32"
    >
      {/* Background pattern sutil */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Começar é{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
              simples e rápido
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/50">
            Em 4 passos você estuda e evolui na plataforma.
          </p>
        </motion.div>

        <motion.div
          className="relative mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Connecting lines — visible on lg+ screens */}
          <div className="absolute left-1/2 top-[44px] hidden h-0.5 w-[calc(100%-6rem)] -translate-x-1/2 lg:block">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute top-0 h-full origin-left"
                style={{
                  left: `${(i / 3) * 100}%`,
                  width: `${100 / 3}%`,
                }}
                variants={lineVariants}
              >
                <div className="h-full w-full bg-gradient-to-r from-gold-500/40 to-gold-500/10" />
              </motion.div>
            ))}
          </div>

          {/* Connecting lines — mobile */}
          <div className="absolute left-7 top-14 hidden w-0.5 h-[calc(100%-4rem)] sm:block lg:hidden">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute left-0 w-full origin-top"
                style={{
                  top: `${(i / 3) * 100}%`,
                  height: `${100 / 3}%`,
                }}
                variants={lineVariants}
              >
                <div className="h-full w-full bg-gradient-to-b from-gold-500/40 to-gold-500/10" />
              </motion.div>
            ))}
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map((passo, idx) => (
              <motion.div
                key={passo.etapa}
                variants={stepVariants}
                className="group relative text-center"
              >
                {/* Step number badge */}
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500 to-navy-600 shadow-xl shadow-gold-500/10">
                  <motion.span
                    className="text-lg font-black text-white"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3 + idx * 0.2, type: "spring", stiffness: 400, damping: 15 }}
                  >
                    {passo.etapa}
                  </motion.span>

                  {/* Glow sutil gold */}
                  <motion.div
                    className="absolute -inset-1 rounded-2xl bg-gold-400/10 blur-sm"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: [0, 0.4, 0] } : {}}
                    transition={{ delay: 0.5 + idx * 0.2, duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                <div className="mt-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gold-400/60">
                  <Icon name={passo.icone} size={16} />
                </div>

                <h3 className="mt-3 font-bold text-white">{passo.titulo}</h3>
                <p className="mt-1 text-sm text-white/50">{passo.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
