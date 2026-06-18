"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useProgresso } from "@/lib/progress";
import { usePerfilAluno } from "@/lib/aluno";
import { listarAulas, trilhas } from "@/content/curriculo";
import { BarChart3, BookOpen, TrendingUp, CalendarDays, ArrowLeft } from "lucide-react";
import Link from "next/link";

import {
  MetricasDesempenho,
  BarrasAcertosTrilha,
  RankingErros,
  TempoEstudo,
  PrevisaoConclusao,
  ComparativoTurma,
} from "@/components/metricas-desempenho";

// Dados mock para tópicos de erro e tempo (carregados do localStorage)
const CHAVE_MOCK = "fap-metricas-mock";

interface MetricasMock {
  competencias: { competencia: string; acertos: number }[];
  evolucao: { semana: string; aulas: number; xp: number }[];
  trilhaAcertos: { nome: string; acertos: number; total: number; pct: number }[];
  topicosErro: { topico: string; erros: number; trilha: string }[];
  tempoDiario: number;
  tempoSemanal: number;
  metaTempoSemanal: number;
}

function carregarMetricas(): MetricasMock {
  if (typeof window === "undefined")
    return gerarMockPadrao();
  try {
    const bruto = localStorage.getItem(CHAVE_MOCK);
    if (bruto) return JSON.parse(bruto) as MetricasMock;
    const padrao = gerarMockPadrao();
    localStorage.setItem(CHAVE_MOCK, JSON.stringify(padrao));
    return padrao;
  } catch {
    return gerarMockPadrao();
  }
}

function gerarMockPadrao(): MetricasMock {
  const trilhasNomes = trilhas.map((t) => t.titulo);
  return {
    competencias: [
      { competencia: "Farmacologia", acertos: 82 },
      { competencia: "Atendimento", acertos: 74 },
      { competencia: "Legislação", acertos: 65 },
      { competencia: "Cosmetologia", acertos: 88 },
      { competencia: "Operacional", acertos: 71 },
      { competencia: "Cuidado", acertos: 79 },
    ],
    evolucao: [
      { semana: "25 Mai", aulas: 3, xp: 75 },
      { semana: "01 Jun", aulas: 5, xp: 120 },
      { semana: "08 Jun", aulas: 2, xp: 50 },
      { semana: "15 Jun", aulas: 6, xp: 150 },
    ],
    trilhaAcertos: trilhasNomes.map((nome) => {
      const pct = Math.floor(Math.random() * 30) + 60;
      return { nome, acertos: pct, total: 100, pct };
    }),
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

function saudacaoPorHorario(primeiroNome?: string): string {
  const hora = new Date().getHours();
  let saudacao: string;
  if (hora >= 5 && hora < 12) saudacao = "Bom dia";
  else if (hora >= 12 && hora < 18) saudacao = "Boa tarde";
  else saudacao = "Boa noite";
  return `${saudacao}${primeiroNome ? `, ${primeiroNome}` : ""}`;
}

export function DesempenhoClient() {
  const prog = useProgresso();
  const { perfil } = usePerfilAluno();
  const [metricas, setMetricas] = useState<MetricasMock | null>(null);

  useEffect(() => {
    setMetricas(carregarMetricas());
  }, []);

  const { total, concluidas } = useMemo(() => {
    const t = listarAulas().length;
    return { total: t, concluidas: prog.concluidas.length };
  }, [prog.concluidas]);

  const primeiroNome = perfil?.nome?.split(" ")[0];
  const msgSaudacao = saudacaoPorHorario(primeiroNome);

  if (!metricas) {
    return (
      <div className="mx-auto max-w-6xl px-3 py-4 sm:px-4 sm:py-8 lg:px-6 lg:py-12">
        <div className="h-32 animate-pulse rounded-2xl bg-surface-2" />
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-64 animate-pulse rounded-2xl bg-surface-2" />
          ))}
        </div>
      </div>
    );
  }

  const gradForest =
    "bg-gradient-to-br from-forest-700 via-gold-700 to-navy-800";

  return (
    <div className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-6 py-4 sm:py-8 lg:py-12">
      {/* Cabeçalho */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 overflow-hidden rounded-2xl ${gradForest} p-4 sm:p-6 lg:p-8 text-white shadow-xl`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-[100px]" />

        <div className="relative z-10">
          <Link
            href="/dashboard"
            className="mb-3 inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white/90 transition-colors"
          >
            <ArrowLeft size={14} />
            Voltar ao Dashboard
          </Link>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <span className="rounded-full bg-white/15 px-3 py-0.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                  <BarChart3 size={12} className="inline mr-1" />
                  Desempenho
                </span>
                <span className="text-xs text-white/60">
                  Nível {prog.nivel} · {prog.xp} XP
                </span>
              </div>
              <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Dashboard de Métricas Avançadas
              </h1>
              <p className="mt-1 text-sm text-white/70">{msgSaudacao}</p>
            </div>
            <div className="shrink-0 text-right">
              <div className="text-3xl font-extrabold tracking-tight">
                {concluidas}/{total}
              </div>
              <div className="text-xs text-white/60">aulas concluídas</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Métricas de resumo + Radar + Timeline */}
      <MetricasDesempenho />

      {/* Segunda linha: Barras + Ranking + Tempo */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <BarrasAcertosTrilha data={metricas.trilhaAcertos} />
        </div>
        <RankingErros data={metricas.topicosErro} />
      </div>

      {/* Terceira linha: Tempo + Previsão + Comparativo */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <TempoEstudo
          diario={metricas.tempoDiario}
          semanal={metricas.tempoSemanal}
          meta={metricas.metaTempoSemanal}
        />
        <PrevisaoConclusao
          concluidas={concluidas}
          total={total}
          diasEstudo={prog.diasEstudo}
        />
        <ComparativoTurma
          pctAluno={total ? Math.round((concluidas / total) * 100) : 0}
        />
      </div>

      {/* Resumo textual */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-5"
      >
        <div className="flex flex-wrap items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-100 text-gold-600 dark:bg-gold-900/40 dark:text-gold-300">
            <TrendingUp size={22} />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-bold">Resumo de Desempenho</h3>
            <p className="mt-1 text-sm text-muted leading-relaxed">
              Você concluiu <strong>{concluidas}</strong> de{" "}
              <strong>{total}</strong> aulas ({total ? Math.round((concluidas / total) * 100) : 0}%).
              Seu nível atual é <strong>{prog.nivel}</strong> com{" "}
              <strong>{prog.xp}</strong> XP acumulados.
              {prog.streak > 0 &&
                ` Você está em uma sequência de ${prog.streak} dias de estudo.`}
              {metricas.topicosErro.length > 0 &&
                ` Priorize revisar "${metricas.topicosErro[0].topico}" — é o tópico com mais erros.`}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
