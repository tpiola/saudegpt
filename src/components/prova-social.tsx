"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { FadeUp } from "./fade-up";
import { ContadorAnimado } from "./animacoes";

// ─── Depoimentos ───────────────────────────────────────────────
const depoimentos = [
  {
    nome: "Ana Carolina Silva",
    cargo: "Atendente de Farmácia",
    cidade: "Franca, SP",
    texto:
      "O SaúdeGPT transformou meu atendimento no balcão. Aprendi sobre interações medicamentosas que uso todo dia. Em 2 semanas já senti diferença no meu trabalho.",
    estrelas: 5,
  },
  {
    nome: "Marcos Oliveira",
    cargo: "Auxiliar de Farmácia",
    cidade: "Ribeirão Preto, SP",
    texto:
      "As simulações de balcão são muito reais. Passei a lidar melhor com clientes difíceis e a entender as necessidades de cada um. Recomendo demais!",
    estrelas: 5,
  },
  {
    nome: "Juliana Costa",
    cargo: "Farmacêutica Responsável",
    cidade: "Belo Horizonte, MG",
    texto:
      "Uso o SaúdeGPT para treinar minha equipe. O conteúdo é atualizado com ANVISA e as trilhas são completas. Gamificação mantém os meninos engajados.",
    estrelas: 5,
  },
  {
    nome: "Pedro Henrique Santos",
    cargo: "Atendente — Drogaria SP",
    cidade: "São Paulo, SP",
    texto:
      "Curso gratuito com qualidade de plataforma paga! Os badges e ranking me motivam a estudar todo dia. Já estou no nível 8 e não pretendo parar.",
    estrelas: 5,
  },
];

// ─── Estrelas ──────────────────────────────────────────────────
function Estrelas({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 fill-yellow-400 text-yellow-400"
          viewBox="0 0 24 24"
        >
          <path d="m12 3 2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.9 6.8 19l1-5.8-4.2-4.1 5.8-.8L12 3Z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Métrica individual ────────────────────────────────────────
function Metrica({
  valor,
  prefixo,
  sufixo,
  label,
}: {
  valor: number;
  prefixo: string;
  sufixo: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 text-center sm:py-10 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent">
      <div className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl lg:text-5xl">
        <ContadorAnimado
          valor={valor}
          prefixo={prefixo}
          sufixo={sufixo}
          digits={0}
        />
      </div>
      <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
        {label}
      </p>
    </div>
  );
}

// ─── ProvaSocial (depoimentos carrossel + métricas) ────────────
export function ProvaSocial() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = depoimentos.length;

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % total);
      }, 5000);
    }
  }, [isPaused, total]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoPlay]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      setCurrent((prev) => (prev + 1) % total);
    } else if (info.offset.x > threshold) {
      setCurrent((prev) => (prev - 1 + total) % total);
    }
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Gradiente de fundo sutil */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Título ── */}
        <FadeUp>
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Quem já está{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                transformando
              </span>{" "}
              o atendimento
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Depoimentos reais de alunos que usam o SaúdeGPT no dia a dia.
            </p>
          </div>
        </FadeUp>

        {/* ── Carrossel ── */}
        <div
          className="relative mx-auto max-w-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="cursor-grab select-none border border-white/10 p-6 glass-card active:cursor-grabbing sm:p-8 md:p-10"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragEnd={handleDragEnd}
              >
                {/* Estrelas */}
                <Estrelas count={depoimentos[current].estrelas} />

                {/* Texto */}
                <p className="mt-5 text-sm italic leading-relaxed text-foreground/80 sm:text-base">
                  &ldquo;{depoimentos[current].texto}&rdquo;
                </p>

                {/* Autor */}
                <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-sm font-bold text-white shadow-lg shadow-emerald-500/20">
                    {depoimentos[current].nome.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {depoimentos[current].nome}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {depoimentos[current].cargo} —{" "}
                      {depoimentos[current].cidade}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bolinhas de navegação */}
          <div className="mt-6 flex justify-center gap-2">
            {depoimentos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === current
                    ? "w-8 bg-gradient-to-r from-emerald-400 to-green-500"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Depoimento ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Métricas de impacto ── */}
        <div className="mt-16 sm:mt-20">
          <FadeUp delay={100}>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-4">
              <Metrica
                valor={2400}
                prefixo="+"
                sufixo=""
                label="atendentes capacitados"
              />
              <Metrica valor={7} prefixo="" sufixo="" label="trilhas completas" />
              <Metrica valor={159} prefixo="" sufixo="+" label="aulas" />
              <Metrica
                valor={100}
                prefixo=""
                sufixo="%"
                label="gratuito"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
