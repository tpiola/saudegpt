"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useProgresso } from "@/lib/progress";
import { listarAulas, trilhas } from "@/content/curriculo";
import { AlertTriangle, Target, Lightbulb, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

const CHAVE_MOCK = "fap-metricas-mock";

interface MetricasMock {
  topicosErro: { topico: string; erros: number; trilha: string }[];
  tempoDiario: number;
  tempoSemanal: number;
  metaTempoSemanal: number;
}

function gerarMockPadrao(): MetricasMock {
  return {
    topicosErro: [
      { topico: "Interações Medicamentosas", erros: 12, trilha: "Medicamentos" },
      { topico: "Cálculo de Dosagem", erros: 10, trilha: "Fundamentos" },
      { topico: "Lei 13.021/2014", erros: 8, trilha: "Operacional" },
      { topico: "Classificação de DEA/CDA", erros: 7, trilha: "Medicamentos" },
      { topico: "Reações Adversas", erros: 6, trilha: "Farmácia Clínica" },
    ],
    tempoDiario: 25,
    tempoSemanal: 175,
    metaTempoSemanal: 300,
  };
}

function carregarMetricas(): MetricasMock {
  if (typeof window === "undefined") return gerarMockPadrao();
  try {
    const bruto = localStorage.getItem(CHAVE_MOCK);
    if (bruto) {
      const parsed = JSON.parse(bruto) as MetricasMock;
      return parsed;
    }
    const padrao = gerarMockPadrao();
    localStorage.setItem(CHAVE_MOCK, JSON.stringify(padrao));
    return padrao;
  } catch {
    return gerarMockPadrao();
  }
}

const recomendacoesEstudo = [
  {
    icone: "📖",
    titulo: "Revise Farmacologia",
    descricao: "Interações medicamentosas é seu ponto mais fraco. Revise o módulo de Medicamentos.",
    trilhaId: "medicamentos",
  },
  {
    icone: "🧮",
    titulo: "Pratique Cálculos",
    descricao: "Treine cálculo de dosagem com os exercícios práticos da trilha Fundamentos.",
    trilhaId: "fundamentos",
  },
  {
    icone: "📋",
    titulo: "Legislação Farmacêutica",
    descricao: "Reveja a Lei 13.021/2014 e as normas da ANVISA na trilha Operacional.",
    trilhaId: "operacional",
  },
];

export function DashboardExtraSections() {
  const prog = useProgresso();
  const [metricas, setMetricas] = useState<MetricasMock | null>(null);

  useEffect(() => {
    setMetricas(carregarMetricas());
  }, []);

  const total = listarAulas().length;
  const concluidas = prog.concluidas.length;
  const pct = total ? Math.round((concluidas / total) * 100) : 0;

  const diasUnicos = Math.max(new Set(prog.diasEstudo).size, 1);
  const aulasPorDia = concluidas / diasUnicos;
  const restantes = total - concluidas;
  const diasRestantes = aulasPorDia > 0 ? Math.ceil(restantes / aulasPorDia) : 999;
  const dataPrevisao = new Date();
  dataPrevisao.setDate(dataPrevisao.getDate() + diasRestantes);

  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
  ];

  const cardGlass =
    "relative overflow-hidden rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-5 transition-all hover:shadow-md";

  if (!metricas) return null;

  return (
    <div className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-6 pb-8">
      <div className="grid gap-6 md:grid-cols-3">
        {/* ─── Tópicos com Dificuldade ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={cardGlass}
        >
          <h3 className="mb-1 flex items-center gap-1.5 text-sm font-bold tracking-tight">
            <AlertTriangle size={16} className="text-red-500" />
            Tópicos com Dificuldade
          </h3>
          <p className="mb-3 text-xs text-muted">
            Priorize a revisão desses conteúdos
          </p>
          <div className="space-y-2">
            {metricas.topicosErro.slice(0, 4).map((item, idx) => (
              <div
                key={item.topico}
                className="flex items-center gap-2.5 rounded-lg bg-red-50/50 dark:bg-red-950/20 p-2.5"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-red-100 text-[10px] font-bold text-red-600 dark:bg-red-900/40 dark:text-red-400">
                  {idx + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold truncate">{item.topico}</div>
                  <div className="text-[10px] text-muted">{item.trilha}</div>
                </div>
                <div className="text-xs font-bold text-red-500 shrink-0">
                  {item.erros}
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/desempenho"
            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold-600 dark:text-gold-400 hover:text-gold-700 transition-colors"
          >
            Ver dashboard completo
            <ArrowRight size={12} />
          </Link>
        </motion.div>

        {/* ─── Recomendações de Estudo ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={cardGlass}
        >
          <h3 className="mb-1 flex items-center gap-1.5 text-sm font-bold tracking-tight">
            <Lightbulb size={16} className="text-gold-500" />
            Recomendações de Estudo
          </h3>
          <p className="mb-3 text-xs text-muted">
            Baseadas nos seus erros e progresso
          </p>
          <div className="space-y-2.5">
            {recomendacoesEstudo.map((rec, idx) => (
              <div
                key={rec.titulo}
                className="rounded-lg bg-gold-50/50 dark:bg-gold-950/20 p-2.5 transition-colors"
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-base shrink-0 mt-0.5">{rec.icone}</span>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold">{rec.titulo}</div>
                    <div className="text-[10px] text-muted mt-0.5 leading-relaxed">
                      {rec.descricao}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/trilhas"
            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold-600 dark:text-gold-400 hover:text-gold-700 transition-colors"
          >
            Ir para trilhas
            <ArrowRight size={12} />
          </Link>
        </motion.div>

        {/* ─── Previsão de Conclusão ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={cardGlass}
        >
          <h3 className="mb-1 flex items-center gap-1.5 text-sm font-bold tracking-tight">
            <Target size={16} className="text-emerald-500" />
            Previsão de Conclusão
          </h3>
          <p className="mb-3 text-xs text-muted">
            Estimativa baseada no seu ritmo atual
          </p>

          {/* Anel de progresso */}
          <div className="flex justify-center mb-3">
            <div className="relative inline-flex items-center justify-center">
              <svg width="80" height="80" className="-rotate-90">
                <circle
                  cx="40" cy="40" r="34"
                  fill="none"
                  stroke="var(--surface-2)"
                  strokeWidth="6"
                />
                <motion.circle
                  cx="40" cy="40" r="34"
                  fill="none"
                  stroke="url(#goldGrad2)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 34}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 34 }}
                  animate={{
                    strokeDashoffset: 2 * Math.PI * 34 * (1 - pct / 100),
                  }}
                  transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as const }}
                />
                <defs>
                  <linearGradient id="goldGrad2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#D4A843" />
                    <stop offset="100%" stopColor="#f4c65e" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-lg font-bold">{pct}%</span>
              </div>
            </div>
          </div>

          <div className="space-y-1.5 text-center text-xs">
            <p className="text-muted">
              {concluidas} de {total} aulas
            </p>
            {diasRestantes < 999 && (
              <p className="font-semibold text-emerald-600 dark:text-emerald-400">
                Previsão: {dataPrevisao.getDate()} de{" "}
                {meses[dataPrevisao.getMonth()]} de{" "}
                {dataPrevisao.getFullYear()}
              </p>
            )}
            <p className="text-muted">
              {aulasPorDia.toFixed(1)} aula(s)/dia de média
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
