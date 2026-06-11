"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "./icons";

const depoimentos = [
  {
    nome: "Ana C.",
    cargo: "Atendente há 3 anos",
    texto: "A plataforma mudou minha forma de atender no balcão. Me sinto muito mais segura para orientar os clientes.",
    nota: 5,
    icone: "user" as const,
  },
  {
    nome: "Rafael M.",
    cargo: "Farmacêutico responsável",
    texto: "Implementei o treinamento para minha equipe. O resultado em vendas e qualidade do atendimento melhorou visivelmente.",
    nota: 5,
    icone: "user" as const,
  },
  {
    nome: "Juliana S.",
    cargo: "Atendente — farmácia independente",
    texto: "Os jogos e simulados são viciantes! Aprendi mais em 1 mês do que em 2 anos de balcão.",
    nota: 5,
    icone: "user" as const,
  },
];

function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        {children}
      </motion.div>
    </div>
  );
}

export function SecaoDepoimentos() {
  return (
    <section className="bg-surface-2 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Quem já está{" "}
              <span className="bg-gradient-to-r from-orange-500 to-emerald-500 bg-clip-text text-transparent">
                transformando
              </span>{" "}
              o atendimento
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((dep, idx) => (
            <ScrollReveal key={idx}>
              <motion.div
                className="relative rounded-2xl border border-border bg-surface p-6 shadow-sm"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Estrelas */}
                <div className="flex gap-1">
                  {Array.from({ length: dep.nota }).map((_, i) => (
                    <span key={i} className="text-orange-400 text-sm">★</span>
                  ))}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted">"{dep.texto}"</p>

                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-forest-500 to-emerald-600 text-white text-sm font-bold">
                    {dep.nome.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{dep.nome}</p>
                    <p className="text-xs text-muted">{dep.cargo}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
