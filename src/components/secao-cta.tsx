"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "./icons";
import { FadeUp } from "./fade-up";

export function CtaSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Parallax background layers */}
      <motion.div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-br from-[#020e0c] via-[#051f1a] to-[#0a352c]"
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.05 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 4, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(52,211,153,0.15)_0%,transparent_50%)]"
        initial={{ scale: 1, opacity: 0.8 }}
        whileInView={{ scale: 1.1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 5, ease: "easeOut" }}
      />
      {/* Second radial glow that shifts */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(52,211,153,0.08)_0%,transparent_50%)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 3, delay: 0.5 }}
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Pronto para{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              transformar seu atendimento
            </span>
            ?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/60">
            Gratuito. No seu ritmo. Conteúdo que faz diferença no dia a dia.
          </p>
        </FadeUp>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/trilhas"
            className="group relative inline-flex h-12 sm:h-14 items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 sm:px-8 text-sm sm:text-base font-bold text-white shadow-xl shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40 active:scale-[0.98] animate-float-cta"
          >
            <span className="relative z-10">Começar agora</span>
            <Icon name="arrow" size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-0 bg-gradient-to-r from-emerald-600 to-green-700" />
          </Link>
          <Link
            href="/sobre"
            className="inline-flex h-12 sm:h-14 items-center gap-2 rounded-2xl border border-white/20 px-6 sm:px-8 text-sm sm:text-base font-medium text-white/80 backdrop-blur-sm transition-all hover:border-white/40 hover:text-white hover:bg-white/5"
          >
            Saiba mais
            <Icon name="arrow" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
