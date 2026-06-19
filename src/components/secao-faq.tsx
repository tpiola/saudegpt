"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const faqs = [
  {
    q: "Preciso ter formação em farmácia?",
    r: "Não! A plataforma é para todos os níveis, do iniciante ao experiente.",
  },
  {
    q: "Quanto tempo tenho acesso?",
    r: "Acesso vitalício. Estude e revise quando quiser.",
  },
  {
    q: "Funciona no celular?",
    r: "Sim! 100% responsivo para smartphones, tablets e desktop.",
  },
  {
    q: "Tem suporte?",
    r: "Sim! Fale conosco pelo WhatsApp diretamente na plataforma.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 22, mass: 0.8 },
  },
};

export function SecaoFAQ() {
  const [aberto, setAberto] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-surface py-24 sm:py-32" ref={sectionRef}>
      <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
              frequentes
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="mt-12 space-y-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-platinum-300"
            >
              <button
                onClick={() => setAberto(aberto === idx ? null : idx)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={aberto === idx}
              >
                <span className="text-sm font-semibold text-foreground">{faq.q}</span>
                <motion.div
                  animate={{ rotate: aberto === idx ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="shrink-0"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {aberto === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { type: "spring", stiffness: 200, damping: 25 },
                        opacity: { duration: 0.25, delay: 0.08 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.15 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      className="px-6 pb-5 text-sm text-muted"
                      initial={{ y: -8 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] as const }}
                    >
                      {faq.r}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
