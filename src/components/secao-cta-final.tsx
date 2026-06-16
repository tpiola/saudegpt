"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export function SecaoCTAFinal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-28" ref={ref}>
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Pronto para{" "}
            <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-clip-text text-transparent">
              transformar
            </span>{" "}
            seu atendimento?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/50">
            Conteúdo criado por farmacêutico especialista. Gratuito e no seu ritmo.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
