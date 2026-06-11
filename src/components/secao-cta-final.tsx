"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export function SecaoCTAFinal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden bg-forest-900 py-20 sm:py-28" ref={ref}>
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            🚀 Comece agora
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Pronto para{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent">
              transformar
            </span>{" "}
            seu atendimento?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Junte-se a dezenas de atendentes que já estão elevando o nível do atendimento
            nas farmácias do Brasil.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex h-12 sm:h-14 items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 text-sm sm:text-base font-bold text-white shadow-xl shadow-orange-500/25 transition-all hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              Quero me inscrever
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex h-12 sm:h-14 items-center gap-2 rounded-2xl border border-white/20 px-8 text-sm sm:text-base font-medium text-white/80 backdrop-blur-sm transition-all hover:border-white/40 hover:text-white"
            >
              Ver conteúdo grátis
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
