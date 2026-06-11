"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "./icons";

const passos = [
  {
    etapa: "01",
    titulo: "Faça sua matrícula",
    desc: "Cadastre-se em segundos e tenha acesso imediato a todo o conteúdo da plataforma.",
    icone: "user" as const,
  },
  {
    etapa: "02",
    titulo: "Escolha sua trilha",
    desc: "Navegue pelas trilhas organizadas por área: medicamentos, perfumaria, operacional e mais.",
    icone: "compass" as const,
  },
  {
    etapa: "03",
    titulo: "Estude e pratique",
    desc: "Assista aulas, responda quizzes, jogue e participe de simulados modulares.",
    icone: "play" as const,
  },
  {
    etapa: "04",
    titulo: "Ganhe XP e suba de nível",
    desc: "Cada atividade concluída rende XP. Acumule pontos, suba no ranking e conquiste badges.",
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
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            Como funciona
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Começar é{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
              simples e rápido
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/50">
            Em 4 passos você estará estudando e evoluindo na plataforma.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Linha conectora (desktop) */}
          <div className="absolute left-1/2 top-12 hidden h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map((passo, idx) => (
              <ScrollReveal key={passo.etapa} delay={idx * 0.15}>
                <div className="group relative text-center">
                  {/* Número */}
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-forest-600 shadow-xl shadow-emerald-500/20">
                    <span className="text-xl font-black text-white">{passo.etapa}</span>
                  </div>

                  {/* Ícone */}
                  <div className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60">
                    <Icon name={passo.icone} size={18} />
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-white">{passo.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{passo.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
