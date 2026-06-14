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

function ScrollReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function SecaoComoFunciona() {
  return (
    <section className="relative overflow-hidden bg-forest-900 py-20 sm:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Começar é{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
              simples e rápido
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/50">
            Em 4 passos você estuda e evolui na plataforma.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map((passo, idx) => (
              <ScrollReveal key={passo.etapa} delay={idx * 0.15}>
                <div className="group relative text-center">
                  <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-forest-600 shadow-xl shadow-emerald-500/20">
                    <span className="text-lg font-black text-white">{passo.etapa}</span>
                  </div>

                  <div className="mt-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/60">
                    <Icon name={passo.icone} size={16} />
                  </div>

                  <h3 className="mt-3 font-bold text-white">{passo.titulo}</h3>
                  <p className="mt-1 text-sm text-white/50">{passo.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
