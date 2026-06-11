"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "./icons";

const beneficios = [
  {
    icone: "graduation" as const,
    titulo: "Trilhas Completas",
    desc: "Conteúdo organizado em trilhas por área: medicamentos, perfumaria, operacional e mais.",
    cor: "from-emerald-500 to-emerald-600",
  },
  {
    icone: "target" as const,
    titulo: "Jogos Interativos",
    desc: "Aprenda jogando com quizzes, desafios de tarjas e simulações de balcão.",
    cor: "from-orange-500 to-orange-600",
  },
  {
    icone: "star" as const,
    titulo: "Gamificação",
    desc: "Ganhe XP, suba de nível, mantenha streaks e conquiste badges exclusivos.",
    cor: "from-forest-500 to-emerald-600",
  },
  {
    icone: "chart" as const,
    titulo: "Simulados",
    desc: "Teste seus conhecimentos com provas modulares e veja seu ranking entre alunos.",
    cor: "from-emerald-600 to-forest-500",
  },
  {
    icone: "clock" as const,
    titulo: "No seu ritmo",
    desc: "Estude quando e onde quiser. 100% online, acesso vitalício, mobile first.",
    cor: "from-orange-600 to-forest-500",
  },
  {
    icone: "award" as const,
    titulo: "Certificado",
    desc: "Ao concluir as trilhas, receba certificado de formação profissional.",
    cor: "from-forest-500 to-orange-500",
  },
];

function ScrollReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function SecaoBeneficios() {
  return (
    <section className="relative bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              Por que escolher
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Tudo que você precisa{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-forest-600 bg-clip-text text-transparent">
                para crescer
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Uma plataforma completa que combina educação de qualidade com tecnologia
              para maximizar seu aprendizado.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((beneficio, idx) => (
            <ScrollReveal key={beneficio.titulo}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8 transition-all hover:border-forest-200 hover:shadow-lg hover:shadow-forest-500/5 dark:hover:border-forest-700"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Ícone com gradiente */}
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${beneficio.cor} text-white shadow-lg`}
                >
                  <Icon name={beneficio.icone} size={22} />
                </div>

                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {beneficio.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {beneficio.desc}
                </p>

                {/* Hover glow */}
                <div className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent" />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
