"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "./icons";

const beneficios = [
  {
    icone: "graduation" as const,
    titulo: "Trilhas Completas",
    desc: "Conteúdo organizado por área: medicamentos, perfumaria, operacional.",
    cor: "from-emerald-500 to-emerald-600",
  },
  {
    icone: "target" as const,
    titulo: "Jogos Interativos",
    desc: "Quiz, desafios de tarjas e simulações de balcão.",
    cor: "from-orange-500 to-orange-600",
  },
  {
    icone: "star" as const,
    titulo: "Gamificação",
    desc: "XP, níveis, streaks e badges exclusivos.",
    cor: "from-forest-500 to-emerald-600",
  },
  {
    icone: "chart" as const,
    titulo: "Simulados",
    desc: "Teste seus conhecimentos com provas modulares.",
    cor: "from-emerald-600 to-forest-500",
  },
  {
    icone: "clock" as const,
    titulo: "No seu ritmo",
    desc: "100% online, acesso vitalício, mobile first.",
    cor: "from-orange-600 to-forest-500",
  },
  {
    icone: "award" as const,
    titulo: "Certificado",
    desc: "Receba certificado ao concluir as trilhas.",
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Tudo que você precisa{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-forest-600 bg-clip-text text-transparent">
                para crescer
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
              Educação de qualidade com tecnologia para maximizar seu aprendizado.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((beneficio, idx) => (
            <ScrollReveal key={beneficio.titulo}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all hover:border-forest-200 hover:shadow-lg dark:hover:border-forest-700"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${beneficio.cor} text-white shadow-lg`}
                >
                  <Icon name={beneficio.icone} size={22} />
                </div>

                <h3 className="mt-4 font-bold text-foreground">{beneficio.titulo}</h3>
                <p className="mt-1 text-sm text-muted">{beneficio.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
