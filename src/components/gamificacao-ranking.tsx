"use client";

import { useProgresso } from "@/lib/progress";
import { BarraProgresso } from "./ui";

interface AlunoMock {
  nome: string;
  nivel: number;
  xp: number;
  badges: string[];
  avatar: string;
}

const ALUNOS_MOCK: AlunoMock[] = [
  { nome: "Ana Beatriz", nivel: 8, xp: 1950, badges: ["🔥", "⭐", "🏅", "📚"], avatar: "A" },
  { nome: "Carlos Eduardo", nivel: 6, xp: 1420, badges: ["⭐", "🏅"], avatar: "C" },
  { nome: "Mariana Silva", nivel: 5, xp: 1180, badges: ["🔥", "📚"], avatar: "M" },
  { nome: "Pedro Henrique", nivel: 4, xp: 890, badges: ["⭐"], avatar: "P" },
  { nome: "Juliana Costa", nivel: 3, xp: 620, badges: ["📚"], avatar: "J" },
  { nome: "Rafael Oliveira", nivel: 2, xp: 410, badges: [], avatar: "R" },
  { nome: "Fernanda Lima", nivel: 1, xp: 180, badges: [], avatar: "F" },
  { nome: "Lucas Santos", nivel: 1, xp: 95, badges: [], avatar: "L" },
];

const XP_POR_NIVEL = 250;

function formatarXp(xp: number): string {
  if (xp >= 1000) return `${(xp / 1000).toFixed(1)}k`;
  return String(xp);
}

export function GamificacaoRanking() {
  const { xp, nivel, carregado } = useProgresso();

  if (!carregado) return null;

  const xpNoNivel = xp % XP_POR_NIVEL;
  const xpParaProximo = XP_POR_NIVEL;
  const progressoPct = Math.round((xpNoNivel / XP_POR_NIVEL) * 100);

  const POSICOES: Record<number, string> = { 0: "🥇", 1: "🥈", 2: "🥉" };
  const CLASSES_POS: Record<number, string> = {
    0: "ranking-table-row gold",
    1: "ranking-table-row silver",
    2: "ranking-table-row bronze",
  };
  const CLASSES_CIRCLE: Record<number, string> = {
    0: "ranking-pos top1",
    1: "ranking-pos top2",
    2: "ranking-pos top3",
  };

  return (
    <div className="space-y-6 mb-8">
      {/* 🎯 Status do Aluno */}
      <div className="ranking-status-card">
        <div className="flex items-center gap-4">
          <div className="ranking-status-level">{nivel}</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold">Lv. {nivel}</span>
              <span className="text-xs text-muted">
                — {formatarXp(xp)} / {nivel * XP_POR_NIVEL} XP
              </span>
            </div>
            <BarraProgresso pct={progressoPct} className="mt-2" height={8} />
            <p className="mt-1 text-xs text-subtle">
              Faltam {xpParaProximo - xpNoNivel} XP para o nível {nivel + 1}
            </p>
          </div>
        </div>
      </div>

      {/* 🏅 Ranking Gamificado — Alunos Mockados */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">🏅</span>
          <h2 className="font-bold text-base">Ranking de Alunos</h2>
        </div>

        {/* Header */}
        <div className="hidden sm:grid sm:grid-cols-[36px_1fr_60px_80px_80px_auto] gap-2 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-subtle mb-1">
          <span>#</span>
          <span>Nome</span>
          <span className="text-center">Nível</span>
          <span className="text-right">XP</span>
          <span className="text-right">Prog.</span>
          <span>Badges</span>
        </div>

        <div className="space-y-1">
          {ALUNOS_MOCK.map((aluno, i) => {
            const ehTop3 = i < 3;
            const xpNoNivelAluno = aluno.xp % XP_POR_NIVEL;
            const pctAluno = Math.round((xpNoNivelAluno / XP_POR_NIVEL) * 100);

            return (
              <div key={aluno.nome}>
                {/* Desktop */}
                <div
                  className={`hidden sm:grid sm:grid-cols-[36px_1fr_60px_80px_80px_auto] gap-2 items-center rounded-xl px-3 py-2.5 transition-all ${
                    ehTop3 ? CLASSES_POS[i] : "hover:bg-surface-2"
                  }`}
                >
                  <span className={ehTop3 ? CLASSES_CIRCLE[i] : "ranking-pos"}>
                    {ehTop3 ? POSICOES[i] : i + 1}
                  </span>
                  <span className="font-semibold text-sm flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-[10px] font-bold text-green-700 dark:bg-green-900/30 dark:text-green-300">
                      {aluno.avatar}
                    </span>
                    {aluno.nome}
                    {i === 0 && <span className="text-xs">👑</span>}
                  </span>
                  <span className="text-center text-xs font-bold text-amber-600 dark:text-amber-400">
                    {aluno.nivel}
                  </span>
                  <span className="text-right text-xs font-bold text-green-600 dark:text-green-400">
                    {formatarXp(aluno.xp)}
                  </span>
                  <div className="flex justify-end">
                    <div className="ranking-progress-small">
                      <div
                        className="ranking-progress-small-fill"
                        style={{ width: `${pctAluno}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {aluno.badges.length > 0 ? (
                      aluno.badges.map((b, bi) => (
                        <span
                          key={bi}
                          className="ranking-badge"
                          title={
                            b === "🔥"
                              ? "Ofensiva de estudos"
                              : b === "⭐"
                              ? "Destaque do mês"
                              : b === "🏅"
                              ? "Quiz perfeito"
                              : b === "📚"
                              ? "Leitor assíduo"
                              : ""
                          }
                        >
                          {b}
                        </span>
                      ))
                    ) : (
                      <span className="text-[10px] text-subtle">—</span>
                    )}
                  </div>
                </div>

                {/* Mobile */}
                <div className="ranking-mobile-gamificado sm:hidden">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold bg-surface-2 text-muted">
                      {ehTop3 ? POSICOES[i] : i + 1}
                    </span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-[9px] font-bold text-green-700 dark:bg-green-900/30 dark:text-green-300">
                      {aluno.avatar}
                    </span>
                    <span className="font-semibold text-sm flex-1 truncate">
                      {aluno.nome}
                    </span>
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                      Lv.{aluno.nivel}
                    </span>
                    <span className="text-xs font-bold text-green-600 dark:text-green-400">
                      {formatarXp(aluno.xp)}
                    </span>
                    <div className="flex gap-0.5">
                      {aluno.badges.map((b, bi) => (
                        <span key={bi} className="text-xs">{b}</span>
                      ))}
                    </div>
                  </div>
                  <div className="ranking-progress-small mt-1.5 ml-9">
                    <div
                      className="ranking-progress-small-fill"
                      style={{ width: `${pctAluno}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
