"use client";

import { useEffect, useState, useMemo } from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import { motion } from "framer-motion";
import {
  Brain,
  Target,
  Clock,
  TrendingUp,
  AlertTriangle,
  Award,
  BarChart3,
  LineChart,
} from "lucide-react";
import { useProgresso } from "@/lib/progress";
import { trilhas, listarAulas } from "@/content/curriculo";

/* ───────── helpers ───────── */

function formatHHMM(segundos: number): string {
  const h = Math.floor(segundos / 3600);
  const m = Math.floor((segundos % 3600) / 60);
  return `${String(h).padStart(2, "0")}h${String(m).padStart(2, "0")}m`;
}

function diasDaSemana(): { nome: string; iso: string }[] {
  const dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
  const hoje = new Date();
  const diaSem = hoje.getDay();
  const segunda = new Date(hoje);
  segunda.setDate(hoje.getDate() - ((diaSem + 6) % 7));
  return dias.map((nome, i) => {
    const d = new Date(segunda);
    d.setDate(segunda.getDate() + i);
    return { nome, iso: d.toISOString().slice(0, 10) };
  });
}

function getSemanaISO(d: Date): string {
  const inicio = new Date(d);
  const dia = inicio.getDay();
  const diff = inicio.getDate() - dia + (dia === 0 ? -6 : 1);
  inicio.setDate(diff);
  return inicio.toISOString().slice(0, 10);
}

function ultimasNSemanas(n: number): { label: string; inicio: string }[] {
  const result: { label: string; inicio: string }[] = [];
  const hoje = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(hoje);
    d.setDate(d.getDate() - i * 7);
    const inicio = getSemanaISO(d);
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    result.push({
      label: `${d.getDate()} ${meses[d.getMonth()]}`,
      inicio,
    });
  }
  return result;
}

/* ───────── tipos ───────── */

interface CompetenciaData {
  competencia: string;
  acertos: number;
}

interface EvolucaoSemana {
  semana: string;
  aulas: number;
  xp: number;
}

interface TrilhaAcerto {
  nome: string;
  acertos: number;
  total: number;
  pct: number;
}

interface TopicoErro {
  topico: string;
  erros: number;
  trilha: string;
}

/* ───────── dados mock ───────── */

const CHAVE_METRICAS = "fap-metricas-mock";

interface MetricasMock {
  competencias: CompetenciaData[];
  evolucao: EvolucaoSemana[];
  trilhaAcertos: TrilhaAcerto[];
  topicosErro: TopicoErro[];
  tempoDiario: number;
  tempoSemanal: number;
  metaTempoSemanal: number;
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
    evolucao: ultimasNSemanas(4).map((s, i) => ({
      semana: s.label,
      aulas: [3, 5, 2, 6][i] ?? 3,
      xp: [75, 120, 50, 150][i] ?? 75,
    })),
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

function carregarMetricas(): MetricasMock {
  if (typeof window === "undefined") return gerarMockPadrao();
  try {
    const bruto = localStorage.getItem(CHAVE_METRICAS);
    if (bruto) return JSON.parse(bruto) as MetricasMock;
    const padrao = gerarMockPadrao();
    localStorage.setItem(CHAVE_METRICAS, JSON.stringify(padrao));
    return padrao;
  } catch {
    return gerarMockPadrao();
  }
}

/* ───────── Cards de Resumo ───────── */

function ResumoCard({
  icone: Icon,
  valor,
  rotulo,
  cor,
  delay,
}: {
  icone: React.ElementType;
  valor: string;
  rotulo: string;
  cor: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-5 transition-all hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${cor}15`, color: cor }}
        >
          <Icon size={22} />
        </div>
        <div className="min-w-0">
          <div className="text-2xl font-bold tracking-tight">{valor}</div>
          <div className="text-xs text-muted mt-0.5">{rotulo}</div>
        </div>
      </div>
    </motion.div>
  );
}

/* ───────── Gráfico Radar ───────── */

function RadarCompetencias({ data }: { data: CompetenciaData[] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-5 transition-all hover:shadow-md">
      <h3 className="mb-1 flex items-center gap-1.5 text-sm font-bold tracking-tight">
        <Brain size={16} className="text-emerald-500" />
        Acertos por Competência
      </h3>
      <p className="mb-2 text-xs text-muted">
        Desempenho relativo em cada área de conhecimento
      </p>
      <div className="h-64" style={{ minWidth: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid stroke="var(--border)" strokeOpacity={0.3} />
            <PolarAngleAxis
              dataKey="competencia"
              tick={{ fontSize: 10, fill: "var(--muted)" }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              tick={false}
              axisLine={false}
            />
            <Radar
              name="Acertos"
              dataKey="acertos"
              stroke="#D4A843"
              fill="#D4A843"
              fillOpacity={0.15}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ───────── Timeline de Evolução ───────── */

function TimelineEvolucao({ data }: { data: EvolucaoSemana[] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-5 transition-all hover:shadow-md">
      <h3 className="mb-1 flex items-center gap-1.5 text-sm font-bold tracking-tight">
        <LineChart size={16} className="text-emerald-500" />
        Timeline de Evolução
      </h3>
      <p className="mb-2 text-xs text-muted">
        Últimas 4 semanas de estudo
      </p>
      <div className="h-48" style={{ minWidth: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="evolGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D4A843" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#D4A843" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
            <XAxis
              dataKey="semana"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "var(--muted)" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "var(--muted)" }}
              width={30}
            />
            <Tooltip
              contentStyle={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                fontSize: "13px",
              }}
              labelStyle={{ fontWeight: 700 }}
            />
            <Area
              type="monotone"
              dataKey="xp"
              stroke="#D4A843"
              strokeWidth={2}
              fill="url(#evolGrad)"
              dot={{ r: 4, fill: "#D4A843", stroke: "var(--surface)", strokeWidth: 2 }}
              name="XP"
            />
            <Area
              type="monotone"
              dataKey="aulas"
              stroke="#10b981"
              strokeWidth={2}
              fill="none"
              strokeDasharray="4 3"
              dot={{ r: 3, fill: "#10b981", stroke: "var(--surface)", strokeWidth: 2 }}
              name="Aulas"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ───────── Gráfico de Barras: Acertos por Trilha ───────── */

function BarrasAcertosTrilha({ data }: { data: TrilhaAcerto[] }) {
  const sorted = [...data].sort((a, b) => b.pct - a.pct);
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-5 transition-all hover:shadow-md">
      <h3 className="mb-1 flex items-center gap-1.5 text-sm font-bold tracking-tight">
        <BarChart3 size={16} className="text-emerald-500" />
        Taxa de Acertos por Trilha
      </h3>
      <p className="mb-2 text-xs text-muted">
        Percentual de acertos em cada trilha de aprendizado
      </p>
      <div className="h-64" style={{ minWidth: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sorted} layout="vertical" margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
            <XAxis
              type="number"
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "var(--muted)" }}
            />
            <YAxis
              type="category"
              dataKey="nome"
              width={120}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "var(--muted)" }}
            />
            <Tooltip
              contentStyle={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                fontSize: "13px",
              }}
            />
            <Bar
              dataKey="pct"
              radius={[0, 6, 6, 0]}
              barSize={18}
            >
              {sorted.map((entry, idx) => (
                <Cell
                  key={idx}
                  fill={entry.pct >= 80 ? "#10b981" : entry.pct >= 60 ? "#D4A843" : "#ef4444"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ───────── Ranking: Tópicos com mais erros ───────── */

function RankingErros({ data }: { data: TopicoErro[] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-5 transition-all hover:shadow-md">
      <h3 className="mb-1 flex items-center gap-1.5 text-sm font-bold tracking-tight">
        <AlertTriangle size={16} className="text-red-500" />
        Tópicos com Mais Erros
      </h3>
      <p className="mb-3 text-xs text-muted">
        Priorize revisar esses conteúdos
      </p>
      <div className="space-y-2">
        {data.map((item, idx) => (
          <motion.div
            key={item.topico}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className="flex items-center gap-3 rounded-xl bg-red-50/50 dark:bg-red-950/20 p-3 transition-colors"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-xs font-bold text-red-600 dark:bg-red-900/40 dark:text-red-400">
              {idx + 1}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold truncate">{item.topico}</div>
              <div className="text-xs text-muted">{item.trilha}</div>
            </div>
            <div className="shrink-0 text-right">
              <div className="text-sm font-bold text-red-500">{item.erros}</div>
              <div className="text-[10px] text-muted">erros</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ───────── Tempo Médio de Estudo ───────── */

function TempoEstudo({
  diario,
  semanal,
  meta,
}: {
  diario: number;
  semanal: number;
  meta: number;
}) {
  const pctSemanal = Math.min(Math.round((semanal / meta) * 100), 100);
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-5 transition-all hover:shadow-md">
      <h3 className="mb-1 flex items-center gap-1.5 text-sm font-bold tracking-tight">
        <Clock size={16} className="text-blue-500" />
        Tempo Médio de Estudo
      </h3>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-blue-50/50 dark:bg-blue-950/20 p-4 text-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {formatHHMM(diario * 60)}
          </div>
          <div className="text-xs text-muted mt-1">Média Diária</div>
        </div>
        <div className="rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 p-4 text-center">
          <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
            {formatHHMM(semanal * 60)}
          </div>
          <div className="text-xs text-muted mt-1">Total Semanal</div>
        </div>
      </div>

      {/* Meta semanal bar */}
      <div className="mt-4">
        <div className="mb-1 flex items-center justify-between text-xs">
          <span className="text-muted">Meta semanal</span>
          <span className="font-semibold">
            {formatHHMM(semanal * 60)} / {formatHHMM(meta * 60)}
          </span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pctSemanal}%` }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="h-full rounded-full bg-gradient-to-r from-blue-400 to-emerald-400"
          />
        </div>
        <p className="mt-1 text-[11px] text-muted">
          {pctSemanal >= 100
            ? "Meta semanal atingida! 🎯"
            : `Faltam ${formatHHMM((meta - semanal) * 60)} para atingir a meta`}
        </p>
      </div>
    </div>
  );
}

/* ───────── Previsão de Conclusão ───────── */

function PrevisaoConclusao({
  concluidas,
  total,
  diasEstudo,
}: {
  concluidas: number;
  total: number;
  diasEstudo: string[];
}) {
  const pct = total ? Math.round((concluidas / total) * 100) : 0;

  // Estimar dias restantes baseado no ritmo atual
  const diasUnicos = new Set(diasEstudo).size;
  const diasConsiderados = Math.max(diasUnicos, 1);
  const aulasPorDia = concluidas / diasConsiderados;
  const restantes = total - concluidas;
  const diasRestantes = aulasPorDia > 0 ? Math.ceil(restantes / aulasPorDia) : 999;

  const dataPrevisao = new Date();
  dataPrevisao.setDate(dataPrevisao.getDate() + diasRestantes);

  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-5 transition-all hover:shadow-md">
      <h3 className="mb-1 flex items-center gap-1.5 text-sm font-bold tracking-tight">
        <Target size={16} className="text-gold-500" />
        Previsão de Conclusão
      </h3>

      <div className="mt-4 text-center">
        <div className="relative inline-flex items-center justify-center">
          <svg width="100" height="100" className="-rotate-90">
            <circle
              cx="50" cy="50" r="42"
              fill="none"
              stroke="var(--surface-2)"
              strokeWidth="8"
            />
            <motion.circle
              cx="50" cy="50" r="42"
              fill="none"
              stroke="url(#goldGrad)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 42}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
              animate={{
                strokeDashoffset: 2 * Math.PI * 42 * (1 - pct / 100),
              }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as const }}
            />
            <defs>
              <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#D4A843" />
                <stop offset="100%" stopColor="#f4c65e" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold">{pct}%</span>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-center text-sm">
        <p className="text-muted">
          {concluidas} de {total} aulas concluídas
        </p>
        {diasRestantes < 999 && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-semibold text-gold-600 dark:text-gold-400"
          >
            Previsão: {meses[dataPrevisao.getMonth()]} de {dataPrevisao.getFullYear()}
          </motion.p>
        )}
        <p className="text-xs text-muted">
          Ritmo atual: ~{aulasPorDia.toFixed(1)} aula(s) por dia
        </p>
      </div>
    </div>
  );
}

/* ───────── Comparativo com Média da Turma ───────── */

function ComparativoTurma({ pctAluno }: { pctAluno: number }) {
  const mediaTurma = 68; // mock
  const melhorTurma = 95; // mock
  const diferenca = pctAluno - mediaTurma;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-5 transition-all hover:shadow-md">
      <h3 className="mb-1 flex items-center gap-1.5 text-sm font-bold tracking-tight">
        <TrendingUp size={16} className="text-purple-500" />
        Comparativo com a Turma
      </h3>

      <div className="mt-4 space-y-4">
        {/* Barras comparativas */}
        <div className="space-y-3">
          {[
            { label: "Você", valor: pctAluno, cor: "#D4A843" },
            { label: "Média da Turma", valor: mediaTurma, cor: "#8b92a5" },
            { label: "Melhor da Turma", valor: melhorTurma, cor: "#10b981" },
          ].map((item) => (
            <div key={item.label}>
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="font-medium">{item.label}</span>
                <span className="font-bold" style={{ color: item.cor }}>
                  {item.valor}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.valor}%` }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: item.cor }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Status */}
        <div
          className={`rounded-xl p-3 text-center text-sm font-semibold ${
            diferenca >= 0
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400"
              : "bg-red-50 text-red-700 dark:bg-red-950/20 dark:text-red-400"
          }`}
        >
          {diferenca >= 0
            ? `🎉 Você está ${diferenca}% acima da média da turma!`
            : `📚 Você está ${Math.abs(diferenca)}% abaixo da média. Foco nos estudos!`}
        </div>
      </div>
    </div>
  );
}

/* ───────── Componente Principal ───────── */

export function MetricasDesempenho() {
  const prog = useProgresso();
  const [metricas, setMetricas] = useState<MetricasMock | null>(null);

  useEffect(() => {
    setMetricas(carregarMetricas());
  }, []);

  const resumo = useMemo(() => {
    if (!metricas) return null;
    const total = listarAulas().length;
    const pct = total ? Math.round((prog.concluidas.length / total) * 100) : 0;
    return { total, pct };
  }, [prog.concluidas.length, metricas]);

  if (!metricas || !resumo) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-24 animate-pulse rounded-2xl bg-surface-2" />
        ))}
      </div>
    );
  }

  const cardClass =
    "relative overflow-hidden rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-5 transition-all hover:shadow-md";

  return (
    <div className="space-y-6">
      {/* Cards de Resumo */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ResumoCard
          icone={Brain}
          valor={`${resumo.pct}%`}
          rotulo="Progresso Geral"
          cor="#10b981"
          delay={0}
        />
        <ResumoCard
          icone={Award}
          valor={`${prog.nivel}`}
          rotulo={`Nível Atual · ${prog.xp} XP`}
          cor="#D4A843"
          delay={0.1}
        />
        <ResumoCard
          icone={Clock}
          valor={formatHHMM(prog.tempoEstudoSegundos ?? 0)}
          rotulo="Tempo Total de Estudo"
          cor="#3b82f6"
          delay={0.2}
        />
        <ResumoCard
          icone={Target}
          valor={`${prog.streak}`}
          rotulo={`Dias de Sequência · ${prog.concluidas.length} aulas`}
          cor="#f59e0b"
          delay={0.3}
        />
      </div>

      {/* Radar + Timeline */}
      <div className="grid gap-6 lg:grid-cols-2">
        <RadarCompetencias data={metricas.competencias} />
        <TimelineEvolucao data={metricas.evolucao} />
      </div>
    </div>
  );
}

/* ───────── Export extra para páginas usarem sub-componentes avulsos ───────── */

export {
  BarrasAcertosTrilha,
  RankingErros,
  TempoEstudo,
  PrevisaoConclusao,
  ComparativoTurma,
};
