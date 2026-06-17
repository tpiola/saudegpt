"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "./icons";

const beneficios = [
  {
    icone: "graduation" as const,
    titulo: "Trilhas Completas",
    desc: "Conteúdo organizado por área: medicamentos, perfumaria, operacional.",
    cor: "from-gold-500 to-gold-600",
  },
  {
    icone: "target" as const,
    titulo: "Jogos Interativos",
    desc: "Quiz, desafios de tarjas e simulações de balcão.",
    cor: "from-navy-600 to-gold-500",
  },
  {
    icone: "star" as const,
    titulo: "Gamificação",
    desc: "XP, níveis, streaks e badges exclusivos.",
    cor: "from-navy-700 to-gold-600",
  },
  {
    icone: "chart" as const,
    titulo: "Simulados",
    desc: "Teste seus conhecimentos com provas modulares.",
    cor: "from-emerald-600 to-navy-600",
  },
  {
    icone: "clock" as const,
    titulo: "No seu ritmo",
    desc: "100% online, acesso vitalício, mobile first.",
    cor: "from-gold-600 to-navy-700",
  },
  {
    icone: "award" as const,
    titulo: "Conquistas",
    desc: "Ganhe badges e reconhecimento ao progredir nas trilhas.",
    cor: "from-navy-600 to-gold-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 20, mass: 0.8 },
  },
};

export function SecaoBeneficios() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-surface py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Tudo que você precisa{" "}
            <span className="bg-gradient-to-r from-gold-500 to-gold-400 bg-clip-text text-transparent">
              para crescer
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
            Educação de qualidade com tecnologia para maximizar seu aprendizado.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {beneficios.map((beneficio) => (
            <motion.div
              key={beneficio.titulo}
              variants={cardVariants}
              className="card-hover-premium group relative overflow-hidden rounded-2xl border border-border bg-surface p-7"
            >
              {/* Subtle gold gradient overlay on hover */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-gold-500/0 via-transparent to-gold-500/0 opacity-0 transition-opacity duration-500 group-hover:from-gold-500/[0.03] group-hover:to-gold-500/[0.03] group-hover:opacity-100" />

              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${beneficio.cor} text-white shadow-lg`}
              >
                <Icon name={beneficio.icone} size={22} />
              </div>

              <h3 className="mt-4 font-bold text-foreground">{beneficio.titulo}</h3>
              <p className="mt-1 text-sm text-muted">{beneficio.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
