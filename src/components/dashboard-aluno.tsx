"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { listarAulas, trilhas } from "@/content/curriculo";
import { chaveAula, useProgresso } from "@/lib/progress";
import { usePerfilAluno } from "@/lib/aluno";
import { Card, BarraProgresso, Skeleton } from "./ui";
import { CelebracaoModal } from "./celebracao-modal";
import { XpFloat } from "./xp-float";
import Link from "next/link";
import { Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";
import { Icon, type IconName } from "@/components/icons";

/* ───────── helpers ───────── */

function formatHHMM(segundos: number): string {
  const h = Math.floor(segundos / 3600);
  const m = Math.floor((segundos % 3600) / 60);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function diasDaSemana(): { nome: string; iso: string }[] {
  const dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "S\u00e1b", "Dom"];
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

function saudacaoPorHorario(primeiroNome?: string): string {
  const hora = new Date().getHours();
  let saudacao: string;
  if (hora >= 5 && hora < 12) saudacao = "Bom dia";
  else if (hora >= 12 && hora < 18) saudacao = "Boa tarde";
  else saudacao = "Boa noite";
  return `${saudacao}${primeiroNome ? `, ${primeiroNome}` : ", Atendente"}`;
}

/* ───────── dicas "Você Sabia?" ───────── */

const DICAS_SAUDE = [
  "O nome 'farmácia' vem do grego 'pharmakon', que significa remédio ou veneno — mostrando que a dosagem correta é essencial.",
  "A pele é o maior órgão do corpo humano. Por isso, produtos tópicos precisam de atenção redobrada na aplicação.",
  "Anti-inflamatórios não esteroidais (AINEs) como ibuprofeno atuam inibindo enzimas COX, reduzindo dor e inflamação.",
  "Atendentes de farmácia são a primeira linha de orientação — um sorriso e uma escuta ativa podem transformar a experiência do paciente.",
  "A Organização Mundial da Saúde (OMS) define saúde como 'um estado de completo bem-estar físico, mental e social'.",
  "Antibióticos não tratam infecções virais como gripes e resfriados. Seu uso incorreto contribui para a resistência bacteriana.",
  "A Lei 13.021/2014 reconhece a farmácia como um estabelecimento de saúde — não apenas um comércio.",
  "Cerca de 30% das consultas médicas resultam em prescrições com erros ou dúvidas de interpretação — sua orientação faz diferença.",
  "O termo 'genérico' significa que o medicamento tem a mesma substância ativa, dose e efeito que o referência, porém custa até 60% menos.",
  "A automedicação é responsável por cerca de 20 mil internações anuais no Brasil — orientar o paciente é um ato de cuidado.",
];

/* ───────── badges predefinidos ───────── */

interface CheckCtx {
  concluidas: number;
  xp: number;
  streak: number;
  missoesPontos: number;
  todasTrilhas: boolean;
  tempoEstudo: number;
  notas: number[];
}

const BADGES: { icone: IconName; label: string; descricao: string; check: (ctx: CheckCtx) => boolean }[] = [
  { icone: "graduation", label: "Primeira aula", descricao: "Complete sua primeira aula", check: (c) => c.concluidas >= 1 },
  { icone: "star", label: "N\u00edvel 2", descricao: "Acumule 250 XP", check: (c) => c.xp >= 250 },
  { icone: "sparkles", label: "N\u00edvel 3", descricao: "Acumule 500 XP", check: (c) => c.xp >= 500 },
  { icone: "star", label: "N\u00edvel 5", descricao: "Acumule 1.000 XP", check: (c) => c.xp >= 1000 },
  { icone: "award", label: "N\u00edvel 10", descricao: "Acumule 2.250 XP", check: (c) => c.xp >= 2250 },
  { icone: "flame", label: "Streak 7d", descricao: "Estude por 7 dias consecutivos", check: (c) => c.streak >= 7 },
  { icone: "book", label: "10 aulas", descricao: "Complete 10 aulas", check: (c) => c.concluidas >= 10 },
  { icone: "target", label: "Miss\u00f5es 30pts", descricao: "Acumule 30 pontos em miss\u00f5es", check: (c) => c.missoesPontos >= 30 },
  { icone: "award", label: "Todas as trilhas", descricao: "Complete todas as trilhas da forma\u00e7\u00e3o", check: (c) => c.todasTrilhas },
  { icone: "clock", label: "1h estudo", descricao: "Estude por 1 hora acumulada", check: (c) => c.tempoEstudo >= 3600 },
  { icone: "clock", label: "5h estudo", descricao: "Estude por 5 horas acumuladas", check: (c) => c.tempoEstudo >= 18000 },
  { icone: "star", label: "Nota 100%", descricao: "Tire nota m\u00e1xima em um quiz", check: (c) => c.notas.some((v) => v >= 100) },
];

/* ───────── componente principal ───────── */

export function DashboardAluno() {
  const prog = useProgresso();
  const { perfil } = usePerfilAluno();
  const todas = listarAulas();

  const [mostrarCelebracao, setMostrarCelebracao] = useState(false);
  const [xpFloatAtivo, setXpFloatAtivo] = useState(false);
  const xpAnterior = useRef(0);
  const nivelAnterior = useRef(prog.nivel);
  const xpGanhoRef = useRef(0);

  const [indiceDica, setIndiceDica] = useState(0);
  const [direcaoDica, setDirecaoDica] = useState<1 | -1>(1);

  const avancarDica = useCallback(() => {
    setDirecaoDica(1);
    setIndiceDica((prev) => (prev + 1) % DICAS_SAUDE.length);
  }, []);

  const recuarDica = useCallback(() => {
    setDirecaoDica(-1);
    setIndiceDica((prev) => (prev - 1 + DICAS_SAUDE.length) % DICAS_SAUDE.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(avancarDica, 15000);
    return () => clearInterval(timer);
  }, [avancarDica]);

  useEffect(() => {
    if (!prog.carregado) return;
    if (xpAnterior.current > 0 && prog.xp > xpAnterior.current) {
      const diff = prog.xp - xpAnterior.current;
      xpGanhoRef.current = diff;
      setXpFloatAtivo(true);
      window.setTimeout(() => setXpFloatAtivo(false), 1500);
    }
    xpAnterior.current = prog.xp;
    if (nivelAnterior.current > 0 && prog.nivel > nivelAnterior.current) {
      setMostrarCelebracao(true);
    }
    nivelAnterior.current = prog.nivel;
  }, [prog.xp, prog.nivel, prog.carregado]);

  if (!prog.carregado) {
    return (
      <div className="mx-auto max-w-6xl px-3 py-4 sm:px-4 sm:py-8 lg:px-6 lg:py-12">
        <Skeleton className="h-32 rounded-2xl" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-40 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  const totalCurso = todas.length;
  const concluidasCount = prog.concluidas.length;
  const xpPctNivel = Math.round(((prog.xp % 250) / 250) * 100);
  const primeiroNome = perfil?.nome?.split(" ")[0];

  const notas = Object.values(prog.notas);
  const mediaNotas = notas.length ? Math.round(notas.reduce((a, b) => a + b, 0) / notas.length) : null;
  const tentativasTotal = Object.values(prog.tentativasQuiz ?? {}).reduce((a, b) => a + b, 0);

  const trilhasProgresso = trilhas.map((t) => ({
    ...t,
    ...prog.progressoTrilha(t.id),
  }));

  const todasTrilhasCompletas = trilhasProgresso.every(
    (t) => t.total > 0 && t.feitas === t.total,
  );

  const badgesAtivos = BADGES.map((b) => ({
    ...b,
    ativo: b.check({
      concluidas: concluidasCount,
      xp: prog.xp,
      streak: prog.streak,
      missoesPontos: prog.missoesPontos,
      todasTrilhas: todasTrilhasCompletas,
      tempoEstudo: prog.tempoEstudoSegundos ?? 0,
      notas,
    }),
  }));

  const aulasConcluidas = prog.concluidas;
  const ultimasConcluidas = aulasConcluidas
    .map((chave) => {
      const [trilhaId, aulaId] = chave.split("/");
      const aulaInfo = todas.find(
        (a) => a.trilha.id === trilhaId && a.aula.id === aulaId,
      );
      if (!aulaInfo) return null;
      const nota = prog.notas[chave] ?? null;
      return { ...aulaInfo, chave, nota };
    })
    .filter(Boolean)
    .slice(-5)
    .reverse();

  const recomendadas = todas
    .filter((i) => !prog.estaConcluida(i.trilha.id, i.aula.id))
    .slice(0, 6);

  const semana = diasDaSemana();
  const totalDiasEstudo = prog.diasEstudo.length || 1;
  const xpPorDia = Math.round(prog.xp / totalDiasEstudo);
  const dadosSemana = semana.map((d) => ({
    nome: d.nome,
    xp: prog.diasEstudo.includes(d.iso) ? xpPorDia : 0,
  }));

  /* ── Classes reutilizáveis de card ── */
  const cardGlass = "relative overflow-hidden rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-5 transition-all hover:shadow-md hover:border-emerald-500/20";
  const gradForest = "bg-gradient-to-br from-forest-700 via-emerald-700 to-forest-800";

  return (
    <div className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-6 py-4 sm:py-8 lg:py-12">
      {/* Gamificação */}
      <CelebracaoModal
        aberto={mostrarCelebracao}
        onClose={() => setMostrarCelebracao(false)}
        xpGanho={xpGanhoRef.current}
        duracaoConfete={4000}
      />

      {/* ─── 1. CABEÇALHO — Saudação + XP + Progresso ─── */}
      <div className={`mb-4 sm:mb-6 overflow-hidden rounded-2xl ${gradForest} p-4 sm:p-6 lg:p-8 text-white shadow-xl`}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-[100px]" />

        <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="rounded-full bg-white/15 px-3 py-0.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                N\u00edvel {prog.nivel}
              </span>
              <span className="text-xs text-white/60">{prog.xp} XP total</span>
            </div>
            <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight sm:text-3xl">
              {saudacaoPorHorario(primeiroNome)}
              <Icon name="user" size={28} aria-hidden="true" />
            </h1>
            <p className="mt-1 text-sm text-white/70">
              {prog.estudouHoje
                ? <><Icon name="flame" size={14} className="inline" aria-hidden="true" /> Voc\u00ea j\u00e1 estudou hoje. Continue assim!</>
                : "Que tal estudar um pouco hoje?"}
            </p>
          </div>
          <div className="shrink-0 text-right relative">
            <div className="text-4xl font-extrabold tracking-tight">
              {prog.xp}
            </div>
            <div className="text-xs text-white/60">XP total</div>
            {xpFloatAtivo && (
              <XpFloat valor={xpGanhoRef.current} cor="#85c88b" alinhamento="right" />
            )}
          </div>
        </div>

        {/* Barra de progresso do nível */}
        <div className="relative z-10 mt-4 max-w-md">
          <div className="mb-1 flex items-center justify-between text-xs text-white/70">
            <span>Progresso para n\u00edvel {prog.nivel + 1}</span>
            <span>{prog.xp % 250} / 250 XP</span>
          </div>
          <BarraProgresso
            pct={xpPctNivel}
            height={8}
            className="[&>div]:bg-white/20 [&>div>div]:!bg-gradient-to-r [&>div>div]:from-orange-400 [&>div>div]:to-emerald-300"
          />
          <p className="mt-1 text-xs text-white/50">
            Faltam {prog.xpProximoNivel} XP para subir de n\u00edvel
          </p>
        </div>

        {/* Barra de progresso GLOBAL */}
        <div className="relative z-10 mt-3 border-t border-white/10 pt-3">
          <div className="mb-1 flex items-center justify-between text-xs text-white/60">
            <span><Icon name="book" size={12} className="inline mr-1" aria-hidden="true" />Progresso geral do curso</span>
            <span>{concluidasCount} de {totalCurso} aulas</span>
          </div>
          <BarraProgresso
            pct={totalCurso ? Math.round((concluidasCount / totalCurso) * 100) : 0}
            height={8}
            className="[&>div]:bg-white/10 [&>div>div]:!bg-gradient-to-r [&>div>div]:from-emerald-400 [&>div>div]:to-emerald-300"
          />
          <p className="mt-1 text-xs text-white/40">
            Faltam {totalCurso - concluidasCount} aulas para concluir a forma\u00e7\u00e3o
          </p>
        </div>
      </div>

      {/* ─── VOCÊ SABIA? ─── */}
      <div className={`mb-4 sm:mb-6 ${cardGlass}`}>
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300">
            <Icon name="sparkles" size={20} />
          </span>
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
                Você Sabia?
              </h3>
              <span className="text-[11px] text-emerald-400 dark:text-emerald-500">
                {indiceDica + 1}/{DICAS_SAUDE.length}
              </span>
            </div>
            <div className="relative min-h-[3.5rem]">
              <AnimatePresence mode="wait" custom={direcaoDica}>
                <motion.p
                  key={indiceDica}
                  custom={direcaoDica}
                  initial={{ opacity: 0, x: direcaoDica * 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direcaoDica * -30 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="text-sm leading-relaxed text-foreground"
                >
                  {DICAS_SAUDE[indiceDica]}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="mt-2 flex items-center gap-1">
              <button
                onClick={recuarDica}
                className="flex h-7 w-7 items-center justify-center rounded-full text-emerald-500 transition hover:bg-emerald-100 hover:text-emerald-700 dark:hover:bg-emerald-900/40"
                aria-label="Dica anterior"
              >
                <ChevronLeft size={14} />
              </button>
              <div className="flex gap-1">
                {DICAS_SAUDE.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirecaoDica(i > indiceDica ? 1 : -1);
                      setIndiceDica(i);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      i === indiceDica
                        ? "w-5 bg-emerald-500"
                        : "w-2 bg-emerald-300/50 dark:bg-emerald-600/30"
                    }`}
                    aria-label={`Ir para dica ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={avancarDica}
                className="flex h-7 w-7 items-center justify-center rounded-full text-emerald-500 transition hover:bg-emerald-100 hover:text-emerald-700 dark:hover:bg-emerald-900/40"
                aria-label="Pr\u00f3xima dica"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── GRID PRINCIPAL 2-COL ─── */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {/* coluna esquerda */}
        <div className="flex flex-col gap-4 sm:gap-6">

          {/* ─── 2. GRÁFICO EVOLUÇÃO SEMANAL ─── */}
          <div className={cardGlass}>
            <h3 className="mb-1 flex items-center gap-1.5 text-sm font-bold tracking-tight">
              <Icon name="chart" size={16} className="text-emerald-500" />
              Evolu\u00e7\u00e3o Semanal
            </h3>
            <p className="mb-4 text-xs text-muted">
              XP estimado por dia de estudo
            </p>
            <div className="h-52" style={{ minWidth: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dadosSemana}>
                  <defs>
                    <linearGradient id="xpGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#059669" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="#059669" stopOpacity={0.04} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
                  <XAxis
                    dataKey="nome"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "var(--muted)" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11, fill: "var(--muted)" }}
                    width={32}
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
                    stroke="#059669"
                    strokeWidth={2}
                    fill="url(#xpGrad)"
                    dot={{ r: 3, fill: "#059669", stroke: "var(--surface)", strokeWidth: 2 }}
                    activeDot={{ r: 5, fill: "#059669", stroke: "var(--surface)", strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* ─── 3. STREAK ─── */}
          <div className={cardGlass}>
            <div className="flex items-start gap-4">
              <motion.div
                className="shrink-0"
                animate={{ scale: [1, 1.12, 1], rotate: [0, -3, 3, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.8 }}
              >
                {prog.estudouHoje
                  ? <Icon name="flame" size={44} className="text-orange-500" />
                  : <Icon name="clock" size={44} className="text-muted" />}
              </motion.div>
              <div className="flex-1">
                <h3 className="text-sm font-bold">Sequ\u00eancia de Estudos</h3>
                <p className="mt-0.5 text-xs text-muted">
                  {prog.estudouHoje
                    ? `Voc\u00ea est\u00e1 em uma sequ\u00eancia de ${prog.streak} dias!`
                    : "Estude hoje para n\u00e3o perder sua sequ\u00eancia"}
                </p>
                <div className="mt-3 flex items-center gap-1.5">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div
                      key={i}
                      className={`flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold transition-all ${
                        i < prog.streak
                          ? "bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-md"
                          : "bg-surface-2 text-subtle"
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
                {/* Metas de streak — SVG icons no lugar de emojis */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {[
                    { dias: 7, icone: "flame" as IconName, label: "7 dias" },
                    { dias: 14, icone: "zap" as IconName, label: "14 dias" },
                    { dias: 30, icone: "award" as IconName, label: "30 dias" },
                  ].map((meta) => {
                    const alcancada = prog.streak >= meta.dias;
                    return (
                      <span
                        key={meta.dias}
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                          alcancada
                            ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-sm"
                            : "bg-surface-2 text-subtle opacity-60"
                        }`}
                        title={alcancada ? `Meta de ${meta.dias} dias alcançada!` : `Meta: ${meta.dias} dias`}
                      >
                        <Icon name={meta.icone} size={10} /> {meta.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            {prog.streak >= 3 && (
              <motion.div
                className="pointer-events-none absolute -bottom-4 -right-4 opacity-8"
                animate={{ opacity: [0.06, 0.14, 0.06], scale: [1, 1.05, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Icon name="flame" size={64} className="text-orange-500" />
              </motion.div>
            )}
          </div>

          {/* ─── 4. AULAS CONCLUÍDAS ─── */}
          <div className={cardGlass}>
            <h3 className="mb-1 flex items-center gap-1.5 text-sm font-bold tracking-tight">
              <Icon name="book" size={16} className="text-emerald-500" />
              Aulas Conclu\u00eddas
            </h3>
            <p className="mb-4 text-xs text-muted">
              {concluidasCount} de {totalCurso} aulas ·{" "}
              {totalCurso ? Math.round((concluidasCount / totalCurso) * 100) : 0}%
            </p>
            <div className="flex flex-col gap-4">
              {trilhasProgresso.map((t) => (
                <div key={t.id}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="font-semibold truncate pr-2">
                      {t.titulo.length > 28 ? t.titulo.slice(0, 28) + "…" : t.titulo}
                    </span>
                    <span className="text-subtle shrink-0">
                      {t.feitas}/{t.total}
                    </span>
                  </div>
                  <BarraProgresso pct={t.pct} height={6} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* coluna direita */}
        <div className="flex flex-col gap-4 sm:gap-6">

          {/* ─── 5. TEMPO DE ESTUDO ─── */}
          <div className={cardGlass}>
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 ring-1 ring-emerald-500/20">
                <Icon name="clock" size={28} className="text-emerald-500" />
              </span>
              <div>
                <h3 className="text-sm font-bold">Tempo Total de Estudo</h3>
                <div className="mt-1 text-3xl font-extrabold tracking-tight text-emerald-500">
                  {formatHHMM(prog.tempoEstudoSegundos ?? 0)}
                </div>
                <p className="mt-0.5 text-xs text-muted">horas acumuladas</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <BarraProgresso
                pct={Math.min(100, ((prog.tempoEstudoSegundos ?? 0) / 36000) * 100)}
                height={5}
              />
              <span className="text-[11px] text-subtle shrink-0">meta 10h</span>
            </div>
          </div>

          {/* ─── 6. BADGES ─── */}
          <div className={cardGlass}>
            <h3 className="mb-1 flex items-center gap-1.5 text-sm font-bold tracking-tight">
              <Icon name="award" size={16} className="text-emerald-500" />
              Badges Desbloqueados
            </h3>
            <p className="mb-4 text-xs text-muted">
              {badgesAtivos.filter((b) => b.ativo).length} de {badgesAtivos.length} conquistados
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
              {badgesAtivos.map((b) => (
                <div
                  key={b.label}
                  title={b.descricao}
                  className={`flex flex-col items-center gap-1 rounded-xl p-2.5 text-center transition-all ${
                    b.ativo
                      ? "bg-gradient-to-b from-emerald-50 to-emerald-50/40 border border-emerald-200 dark:from-emerald-900/30 dark:to-emerald-900/20 dark:border-emerald-800 shadow-sm"
                      : "bg-surface-2 border border-border opacity-40"
                  }`}
                >
                  <motion.span
                    className={`flex items-center justify-center ${b.ativo ? "" : "opacity-40 grayscale"}`}
                    animate={b.ativo ? { scale: [1, 1.08, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <Icon name={b.icone} size={24} />
                  </motion.span>
                  <span
                    className={`text-[10px] font-semibold leading-tight ${
                      b.ativo
                        ? "text-emerald-700 dark:text-emerald-300"
                        : "text-subtle"
                    }`}
                  >
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── 7. REVISÃO RÁPIDA ─── */}
          <div className={cardGlass}>
            <h3 className="mb-1 flex items-center gap-2 text-sm font-bold tracking-tight">
              <Icon name="refresh" size={15} className="text-emerald-500" />
              Revis\u00e3o R\u00e1pida
            </h3>
            <p className="mb-4 text-xs text-muted">
              {ultimasConcluidas.length > 0
                ? "Suas \u00faltimas aulas conclu\u00eddas — clique para revisar"
                : "Conclua uma aula para v\u00ea-la aqui"}
            </p>
            <div className="flex flex-col gap-2">
              {ultimasConcluidas.length === 0 ? (
                <div className="rounded-xl bg-emerald-50/50 p-4 text-center text-sm font-semibold text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-300">
                  <Icon name="target" size={16} className="inline mr-1" />
                  Nenhuma aula conclu\u00edda ainda
                </div>
              ) : (
                ultimasConcluidas.map((item) => {
                  if (!item) return null;
                  return (
                    <Link
                      key={item.chave}
                      href={`/aula/${item.trilha.id}/${item.aula.id}`}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-surface/60 p-3 transition-all hover:border-emerald-300 hover:shadow-sm hover:bg-emerald-50/30 dark:hover:bg-emerald-900/10"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-xs text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300">
                        {item.trilha.numero}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-semibold group-hover:text-emerald-600 transition-colors">
                          {item.aula.titulo}
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-subtle">
                          <span className="truncate">
                            {item.trilha.titulo} · {item.modulo.titulo}
                          </span>
                          {item.nota != null && (
                            <span
                              className={`shrink-0 font-bold ${
                                item.nota >= 80
                                  ? "text-emerald-500"
                                  : item.nota >= 60
                                    ? "text-orange-500"
                                    : "text-red-500"
                              }`}
                            >
                              {item.nota}%
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="shrink-0 rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 transition-colors group-hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                        Revisar →
                      </span>
                    </Link>
                  );
                })
              )}
            </div>
          </div>

          {/* ─── 8. PRÓXIMAS AULAS ─── */}
          <div className={cardGlass}>
            <h3 className="mb-1 flex items-center gap-1.5 text-sm font-bold tracking-tight">
              <Icon name="book" size={16} className="text-emerald-500" />
              Pr\u00f3ximas Aulas
            </h3>
            <p className="mb-4 text-xs text-muted">
              {recomendadas.length > 0
                ? "Continue de onde parou"
                : <><Icon name="sparkles" size={14} className="inline text-emerald-500" /> Todas as aulas conclu\u00eddas!</>}
            </p>
            <div className="flex flex-col gap-2">
              {recomendadas.length === 0 ? (
                <div className="rounded-xl bg-emerald-50/50 p-4 text-center text-sm font-semibold text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-300">
                  <Icon name="sparkles" size={16} className="inline mr-1" />
                  Voc\u00ea concluiu todas as aulas do curso!
                </div>
              ) : (
                recomendadas.map((item) => (
                  <Link
                    key={chaveAula(item.trilha.id, item.aula.id)}
                    href={`/aula/${item.trilha.id}/${item.aula.id}`}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-surface/60 p-3 transition-all hover:border-emerald-300 hover:shadow-sm hover:bg-emerald-50/30 dark:hover:bg-emerald-900/10"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-xs text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300">
                      {item.trilha.numero}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-semibold group-hover:text-emerald-600 transition-colors">
                        {item.aula.titulo}
                      </div>
                      <div className="truncate text-[11px] text-subtle">
                        {item.trilha.titulo} · {item.modulo.titulo} ·{" "}
                        {item.aula.duracaoMin}min
                      </div>
                    </div>
                    <span className="shrink-0 text-xs text-subtle group-hover:text-emerald-500 transition-colors">
                      →
                    </span>
                  </Link>
                ))
              )}
            </div>
          </div>

          {/* ─── 9. ESTATÍSTICAS ─── */}
          <div className={cardGlass}>
            <h3 className="mb-1 flex items-center gap-1.5 text-sm font-bold tracking-tight">
              <Icon name="chart" size={16} className="text-emerald-500" />
              Estat\u00edsticas
            </h3>
            <p className="mb-4 text-xs text-muted">
              Seu desempenho geral na plataforma
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/10 p-3 text-center">
                <div className="text-xl font-extrabold text-emerald-500">
                  {mediaNotas != null ? `${mediaNotas}%` : "—"}
                </div>
                <div className="mt-0.5 text-[11px] text-muted">
                  M\u00e9dia de notas
                </div>
              </div>
              <div className="rounded-xl bg-orange-500/5 border border-orange-500/10 p-3 text-center">
                <div className="text-xl font-extrabold text-orange-500">
                  {tentativasTotal}
                </div>
                <div className="mt-0.5 text-[11px] text-muted">
                  Quizzes feitos
                </div>
              </div>
              <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/10 p-3 text-center">
                <div className="text-xl font-extrabold text-emerald-600">
                  {prog.missoesPontos}
                </div>
                <div className="mt-0.5 text-[11px] text-muted">
                  Miss\u00f5es completadas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
