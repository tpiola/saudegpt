"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Icon } from "./icons";

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
    q: "Tem certificado?",
    r: "Sim! Ao concluir as trilhas, você recebe certificado profissional.",
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

export function SecaoFAQ() {
  const [aberto, setAberto] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-surface py-20 sm:py-28" ref={ref}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-orange-500 to-emerald-500 bg-clip-text text-transparent">
              frequentes
            </span>
          </h2>
        </motion.div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <button
                onClick={() => setAberto(aberto === idx ? null : idx)}
                className="flex w-full items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-5 py-4 text-left transition-all hover:border-forest-200"
                aria-expanded={aberto === idx}
              >
                <span className="text-sm font-semibold text-foreground">{faq.q}</span>
                <Icon name="smile" size={18} className="shrink-0 text-muted transition-transform" />
              </button>
              <AnimatePresence>
                {aberto === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 py-3 text-sm text-muted">{faq.r}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
