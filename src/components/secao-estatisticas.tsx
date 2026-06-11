"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const estatisticas = [
  { valor: "15+", label: "Trilhas completas" },
  { valor: "200+", label: "Aulas disponíveis" },
  { valor: "50+", label: "Jogos interativos" },
  { valor: "100%", label: "Online e mobile" },
];

function ContadorAnimado({ valor }: { valor: string }) {
  return (
    <span className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
      {valor}
    </span>
  );
}

export function SecaoEstatisticas() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="border-y border-border bg-surface-2" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {estatisticas.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="bg-gradient-to-r from-emerald-500 to-orange-500 bg-clip-text text-transparent">
                <ContadorAnimado valor={stat.valor} />
              </div>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
