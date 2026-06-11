"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Icon } from "./icons";

const faqs = [
  {
    q: "Preciso ter formação em farmácia para acessar?",
    r: "Não! A plataforma é feita para atendentes de todos os níveis, desde iniciantes até profissionais experientes que querem se atualizar.",
  },
  {
    q: "Quanto tempo tenho acesso?",
    r: "Acesso vitalício ao conteúdo. Você pode estudar no seu ritmo, revisar quantas vezes quiser.",
  },
  {
    q: "Tem certificado ao finalizar?",
    r: "Sim! Ao concluir as trilhas propostas, você recebe um certificado de formação profissional.",
  },
  {
    q: "Funciona no celular?",
    r: "Sim! A plataforma é 100% responsiva e otimizada para smartphones, tablets e desktop.",
  },
  {
    q: "Tem suporte para dúvidas?",
    r: "Sim! Você pode entrar em contato pelo WhatsApp diretamente pela plataforma.",
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
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            Dúvidas frequentes
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-orange-500 to-emerald-500 bg-clip-text text-transparent">
              respondidas
            </span>
          </h2>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <button
                onClick={() => setAberto(aberto === idx ? null : idx)}
                className="flex w-full items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-5 py-4 text-left transition-all hover:border-forest-200 hover:bg-surface-2/50"
                aria-expanded={aberto === idx}
              >
                <span className="text-sm font-semibold text-foreground sm:text-base">{faq.q}</span>
                <motion.div
                  animate={{ rotate: aberto === idx ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <Icon name="smile" size={18} className="text-muted" />
                </motion.div>
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
                    <p className="px-5 py-4 text-sm leading-relaxed text-muted">{faq.r}</p>
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
