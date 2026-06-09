"use client";

import { useMemo, useEffect, useState, useRef } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { listarAulas, trilhas } from "@/content/curriculo";
import { chaveAula, useProgresso } from "@/lib/progress";
import { usePerfilAluno } from "@/lib/aluno";
import { Card, BarraProgresso, Skeleton } from "./ui";
import { CelebracaoModal } from "./celebracao-modal";
import { XpFloat } from "./xp-float";
import Link from "next/link";

/* ───────── helpers ───────── */

function formatHHMM(segundos: number): string {
  const h = Math.floor(segundos / 3600);
  const m = Math.floor((segundos % 3600) / 60);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function diasDaSemana(): { nome: string; iso: string }[] {
  const dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
  const hoje = new Date();
  const diaSem = hoje.getDay(); // 0=Dom
  const segunda = new Date(hoje);
  segunda.setDate(hoje.getDate() - ((diaSem + 6) % 7));
  return dias.map((nome, i) => {
    const d = new Date(segunda);
    d.setDate(segunda.getDate() + i);
    return { nome, iso: d.toISOString().slice(0, 10) };
  });
}

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

const BADGES: { icone: string; label: string; check: (ctx: CheckCtx) => boolean }[] = [
  { icone: "🎓", label: "Primeira aula", check: (c) => c.concluidas >= 1 },
  { icone: "⭐", label: "Nível 2", check: (c) => c.xp >= 250 },
  { icone: "🌟", label: "Nível 3", check: (c) => c.xp >= 500 },
  { icone: "💎", label: "Nível 5", check: (c) => c.xp >= 1000 },
  { icone: "🏅", label: "Nível 10", check: (c) => c.xp >= 2250 },
  { icone: "🔥", label: "Streak 7d", check: (c) => c.streak >= 7 },
  { icone: "📚", label: "10 aulas", check: (c) => c.concluidas >= 10 },
  { icone: "🎯", label: "Missões 30pts", check: (c) => c.missoesPontos >= 30 },
  { icone: "🏆", label: "Todas as trilhas", check: (c) => c.todasTrilhas },
  { icone: "⏱️", label: "1h estudo", check: (c) => c.tempoEstudo >= 3600 },
  { icone: "🕐", label: "5h estudo", check: (c) => c.tempoEstudo >= 18000 },
  { icone: "💯", label: "Nota 100%", check: (c) => c.notas.some((v) => v >= 100) },
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

  // Detecta mudança de XP e nível no dashboard
  useEffect(() => {
    if (!prog.carregado) return;
    // Quando XP aumenta (veio de outra página)
    if (xpAnterior.current > 0 && prog.xp > xpAnterior.current) {
      const diff = prog.xp - xpAnterior.current;
      xpGanhoRef.current = diff;
      setXpFloatAtivo(true);
      window.setTimeout(() => setXpFloatAtivo(false), 1500);
    }
    xpAnterior.current = prog.xp;

    // Detecta level up
    if (nivelAnterior.current > 0 && prog.nivel > nivelAnterior.current) {
      setMostrarCelebracao(true);
    }
    nivelAnterior.current = prog.nivel;
  }, [prog.xp, prog.nivel, prog.carregado]);

  if (!prog.carregado) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Skeleton className="h-32 rounded-2xl" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-40 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  /* ── dados derivados ── */

  const totalCurso = todas.length;
  const concluidasCount = prog.concluidas.length;
  const xpPctNivel = Math.round(((prog.xp % 250) / 250) * 100);
  const primeiroNome = perfil?.nome?.split(" ")[0];

  // Estatísticas
  const notas = Object.values(prog.notas);
  const mediaNotas = notas.length ? Math.round(notas.reduce((a, b) => a + b, 0) / notas.length) : null;
  const tentativasTotal = Object.values(prog.tentativasQuiz ?? {}).reduce((a, b) => a + b, 0);

  // Progresso por trilha
  const trilhasProgresso = trilhas.map((t) => ({
    ...t,
    ...prog.progressoTrilha(t.id),
  }));

  // Check se todas as trilhas estão concluídas
  const todasTrilhasCompletas = trilhasProgresso.every(
    (t) => t.total > 0 && t.feitas === t.total,
  );

  // Badges
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

  // Próximas aulas recomendadas (primeiras não concluídas, até 6)
  const recomendadas = todas
    .filter((i) => !prog.estaConcluida(i.trilha.id, i.aula.id))
    .slice(0, 6);

  // Gráfico semanal — XP por dia da semana
  const semana = diasDaSemana();
  const totalDiasEstudo = prog.diasEstudo.length || 1;
  const xpPorDia = Math.round(prog.xp / totalDiasEstudo);
  const dadosSemana = semana.map((d) => ({
    nome: d.nome,
    xp: prog.diasEstudo.includes(d.iso) ? xpPorDia : 0,
  }));

  return (
    <div className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-6 py-4 sm:py-8 lg:py-12">
      {/* Gamificação: Modal de celebração e XP float */}
      <CelebracaoModal
        aberto={mostrarCelebracao}
        onClose={() => setMostrarCelebracao(false)}
        xpGanho={xpGanhoRef.current}
        duracaoConfete={4000}
      />

      {/* ─── 1. XP TOTAL + NÍVEL ─── */}
      <Card className="mb-4 sm:mb-6 overflow-hidden bg-gradient-to-br from-forest-700 via-green-700 to-forest-800 p-4 sm:p-6 lg:p-8 text-white card-glow-anim">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="rounded-full bg-white/15 px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
                Nível {prog.nivel}
              </span>
              <span className="text-xs text-white/60">{prog.xp} XP total</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Olá{primeiroNome ? `, ${primeiroNome}` : ", Atendente"} 👋
            </h1>
            <p className="mt-1 text-sm text-white/70">
              {prog.estudouHoje
                ? "Você já estudou hoje. Continue assim! 🔥"
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
        <div className="mt-4 max-w-md">
          <div className="mb-1 flex items-center justify-between text-xs text-white/70">
            <span>Progresso para nível {prog.nivel + 1}</span>
            <span>{prog.xp % 250} / 250 XP</span>
          </div>
          <BarraProgresso
            pct={xpPctNivel}
            height={8}
            className="[&>div]:bg-white/20 [&>div>div]:!bg-gradient-to-r [&>div>div]:from-orange-400 [&>div>div]:to-green-300"
          />
          <p className="mt-1 text-xs text-white/50">
            Faltam {prog.xpProximoNivel} XP para subir de nível
          </p>
        </div>
      </Card>

      {/* ─── GRID PRINCIPAL 2-COL ─── */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {/* coluna esquerda */}
        <div className="flex flex-col gap-6">
          {/* ─── 2. GRÁFICO EVOLUÇÃO SEMANAL ─── */}
          <Card className="p-5 hover-glow">
            <h3 className="mb-1 text-sm font-bold tracking-tight">
              📈 Evolução Semanal
            </h3>
            <p className="mb-4 text-xs text-muted">
              XP estimado por dia de estudo
            </p>
            <div className="h-52" style={{ minWidth: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dadosSemana}>
                  <defs>
                    <linearGradient id="xpGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4ca15d" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="#4ca15d" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.4} />
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
                    stroke="#4ca15d"
                    strokeWidth={2}
                    fill="url(#xpGrad)"
                    dot={{ r: 3, fill: "#4ca15d", stroke: "#fff", strokeWidth: 2 }}
                    activeDot={{ r: 5, fill: "#4ca15d", stroke: "#fff", strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* ─── 3. STREAK ─── */}
          <Card className="relative overflow-hidden p-5 hover-glow">
            <div className="flex items-start gap-4">
              <motion.div
                className="shrink-0 text-5xl"
                animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.8 }}
              >
                {prog.estudouHoje ? "🔥" : "⏰"}
              </motion.div>
              <div className="flex-1">
                <h3 className="text-sm font-bold">Sequência de Estudos</h3>
                <p className="mt-0.5 text-xs text-muted">
                  {prog.estudouHoje
                    ? `Você está em uma sequência de ${prog.streak} dias!`
                    : "Estude hoje para não perder sua sequência"}
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
              </div>
            </div>
            {/* brasa decorativa */}
            {prog.streak >= 3 && (
              <motion.div
                className="pointer-events-none absolute -bottom-4 -right-4 text-7xl opacity-10"
                animate={{ opacity: [0.08, 0.18, 0.08], scale: [1, 1.05, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                🔥
              </motion.div>
            )}
          </Card>

          {/* ─── 4. AULAS CONCLUÍDAS / PROGRESSO POR TRILHA ─── */}
          <Card className="p-5 hover-glow">
            <h3 className="mb-1 text-sm font-bold tracking-tight">
              📚 Aulas Concluídas
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
          </Card>
        </div>

        {/* coluna direita */}
        <div className="flex flex-col gap-6">
          {/* ─── 5. TEMPO DE ESTUDO ─── */}
          <Card className="p-5 hover-glow">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-forest-500/20 to-green-400/10 text-3xl ring-1 ring-green-400/20">
                ⏱️
              </span>
              <div>
                <h3 className="text-sm font-bold">Tempo Total de Estudo</h3>
                <div className="mt-1 text-3xl font-extrabold tracking-tight text-green-600">
                  {formatHHMM(prog.tempoEstudoSegundos ?? 0)}
                </div>
                <p className="mt-0.5 text-xs text-muted">horas acumuladas</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <BarraProgresso
                pct={Math.min(
                  100,
                  ((prog.tempoEstudoSegundos ?? 0) / 36000) * 100,
                )}
                height={5}
              />
              <span className="text-[11px] text-subtle shrink-0">
                meta 10h
              </span>
            </div>
          </Card>

          {/* ─── 6. BADGES ─── */}
          <Card className="p-5 hover-glow">
            <h3 className="mb-1 text-sm font-bold tracking-tight">
              🏅 Badges Desbloqueados
            </h3>
            <p className="mb-4 text-xs text-muted">
              {badgesAtivos.filter((b) => b.ativo).length} de {badgesAtivos.length} conquistados
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
              {badgesAtivos.map((b) => (
                <div
                  key={b.label}
                  className={`flex flex-col items-center gap-1 rounded-xl p-2.5 text-center transition-all ${
                    b.ativo
                      ? "bg-gradient-to-b from-green-50 to-green-50/40 border border-green-200 dark:from-green-900/30 dark:to-green-900/20 dark:border-green-800"
                      : "bg-surface-2 border border-border opacity-40"
                  }`}
                >
                  <motion.span
                    className={`text-xl sm:text-2xl ${b.ativo ? "" : "grayscale"}`}
                    animate={b.ativo ? { scale: [1, 1.08, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    {b.icone}
                  </motion.span>
                  <span
                    className={`text-[10px] font-semibold leading-tight ${
                      b.ativo
                        ? "text-green-700 dark:text-green-300"
                        : "text-subtle"
                    }`}
                  >
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* ─── 7. PRÓXIMAS AULAS RECOMENDADAS ─── */}
          <Card className="p-5 hover-glow">
            <h3 className="mb-1 text-sm font-bold tracking-tight">
              📖 Próximas Aulas
            </h3>
            <p className="mb-4 text-xs text-muted">
              {recomendadas.length > 0
                ? "Continue de onde parou"
                : "Todas as aulas concluídas! 🎉"}
            </p>
            <div className="flex flex-col gap-2">
              {recomendadas.length === 0 ? (
                <div className="rounded-xl bg-green-50 p-4 text-center text-sm font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-300">
                  🎉 Você concluiu todas as aulas do curso!
                </div>
              ) : (
                recomendadas.map((item) => (
                  <Link
                    key={chaveAula(item.trilha.id, item.aula.id)}
                    href={`/aula/${item.trilha.id}/${item.aula.id}`}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-surface p-3 transition-all hover:border-green-300 hover:shadow-sm"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-50 text-xs text-green-600 dark:bg-green-900/30">
                      {item.trilha.numero}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-semibold group-hover:text-green-600 transition-colors">
                        {item.aula.titulo}
                      </div>
                      <div className="truncate text-[11px] text-subtle">
                        {item.trilha.titulo} · {item.modulo.titulo} ·{" "}
                        {item.aula.duracaoMin}min
                      </div>
                    </div>
                    <span className="shrink-0 text-xs text-subtle group-hover:text-green-500 transition-colors">
                      →
                    </span>
                  </Link>
                ))
              )}
            </div>
          </Card>

          {/* ─── 8. ESTATÍSTICAS ─── */}
          <Card className="p-5 hover-glow">
            <h3 className="mb-1 text-sm font-bold tracking-tight">
              📊 Estatísticas
            </h3>
            <p className="mb-4 text-xs text-muted">
              Seu desempenho geral na plataforma
            </p>
            <div className="grid-stats mt-4">
              <div className="rounded-xl bg-surface-2 p-3 text-center">
                <div className="text-xl font-extrabold text-green-600">
                  {mediaNotas != null ? `${mediaNotas}%` : "—"}
                </div>
                <div className="mt-0.5 text-[11px] text-subtle">
                  Média de notas
                </div>
              </div>
              <div className="rounded-xl bg-surface-2 p-3 text-center">
                <div className="text-xl font-extrabold text-orange-500">
                  {tentativasTotal}
                </div>
                <div className="mt-0.5 text-[11px] text-subtle">
                  Quizzes feitos
                </div>
              </div>
              <div className="rounded-xl bg-surface-2 p-3 text-center">
                <div className="text-xl font-extrabold text-forest-500">
                  {prog.missoesPontos}
                </div>
                <div className="mt-0.5 text-[11px] text-subtle">
                  Missões completadas
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
