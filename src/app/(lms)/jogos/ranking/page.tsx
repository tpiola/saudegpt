"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProgresso } from "@/lib/progress";
import { Icon } from "@/components/icons";

/* ─── Tipos ─── */
interface JogadorRanking {
  id: string;
  nome: string;
  nivel: number;
  xp: number;
  precisao: number;       // 0–100
  streak: number;
  badges: number;
}

type AbaRanking = "semanal" | "mensal" | "evolucao";

/* ─── Medalhas SVG inline ─── */
function MedalhaOuro({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="12" fill="url(#gold-grad)" stroke="#D4A843" strokeWidth="1.5" />
      <text x="14" y="18" textAnchor="middle" fill="#0A1628" fontSize="13" fontWeight="800">1</text>
      <defs>
        <linearGradient id="gold-grad" x1="2" y1="2" x2="26" y2="26">
          <stop stopColor="#FFD700" />
          <stop offset=".5" stopColor="#FFA500" />
          <stop offset="1" stopColor="#DAA520" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MedalhaPrata({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="12" fill="url(#silver-grad)" stroke="#C0C0C0" strokeWidth="1.5" />
      <text x="14" y="18" textAnchor="middle" fill="#0A1628" fontSize="13" fontWeight="800">2</text>
      <defs>
        <linearGradient id="silver-grad" x1="2" y1="2" x2="26" y2="26">
          <stop stopColor="#E8E8E8" />
          <stop offset=".5" stopColor="#C0C0C0" />
          <stop offset="1" stopColor="#A8A8A8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MedalhaBronze({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="12" fill="url(#bronze-grad)" stroke="#CD7F32" strokeWidth="1.5" />
      <text x="14" y="18" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800">3</text>
      <defs>
        <linearGradient id="bronze-grad" x1="2" y1="2" x2="26" y2="26">
          <stop stopColor="#DAA06D" />
          <stop offset=".5" stopColor="#CD7F32" />
          <stop offset="1" stopColor="#A0522D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Formatação ─── */
function formatarXp(xp: number): string {
  if (xp >= 1_000_000) return `${(xp / 1_000_000).toFixed(1)}M`;
  if (xp >= 1_000) return `${(xp / 1_000).toFixed(1)}k`;
  return String(xp);
}

/* ─── Carregamento (sem mock — só dados reais) ─── */
const CHAVE_RANKING = "fap-ranking";

function carregarRanking(): JogadorRanking[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CHAVE_RANKING);
    if (raw) return JSON.parse(raw) as JogadorRanking[];
  } catch { /* ignora */ }
  return [];
}

/* ─── Componentes ─── */

function PosicaoBadge({ pos }: { pos: number }) {
  if (pos === 1) return <MedalhaOuro />;
  if (pos === 2) return <MedalhaPrata />;
  if (pos === 3) return <MedalhaBronze />;
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-navy-100 text-xs font-bold text-navy-700 dark:bg-navy-700 dark:text-navy-200">
      {pos}
    </div>
  );
}

function NivelPill({ nivel }: { nivel: number }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-gold-500/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-gold-500 dark:text-gold-400">
      <Icon name="award" size={10} />
      Lv.{nivel}
    </span>
  );
}

function StreakBadge({ streak }: { streak: number }) {
  if (streak === 0) return null;
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2 py-0.5 text-[11px] font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
      <Icon name="flame" size={10} />
      {streak}
    </span>
  );
}

function PrecisaoBadge({ precisao }: { precisao: number }) {
  const cor =
    precisao >= 90 ? "text-emerald-600 bg-emerald-100 dark:text-emerald-300 dark:bg-emerald-900/30"
    : precisao >= 75 ? "text-gold-600 bg-gold-100 dark:text-gold-300 dark:bg-gold-900/30"
    : "text-red-600 bg-red-100 dark:text-red-300 dark:bg-red-900/30";
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${cor}`}>
      <Icon name="target" size={10} />
      {precisao}%
    </span>
  );
}

/* ─── Card do Top 10 ─── */
function TopCard({ jogador, pos, index }: { jogador: JogadorRanking; pos: number; index: number }) {
  const borda =
    pos === 1 ? "border-gold-400/40 shadow-[0_0_20px_-4px_rgba(212,168,67,0.2)]"
    : pos === 2 ? "border-platinum-400/30 shadow-[0_0_16px_-4px_rgba(192,192,192,0.15)]"
    : pos === 3 ? "border-amber-700/30 shadow-[0_0_16px_-4px_rgba(205,127,50,0.15)]"
    : "border-white/10 dark:border-white/5";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] as const }}
      className={`group relative flex items-center gap-3 rounded-xl border bg-white/80 p-3 backdrop-blur-sm transition-all duration-300 hover:border-gold-400/30 hover:shadow-[0_0_28px_-8px_rgba(212,168,67,0.18)] dark:bg-navy-900/70 ${borda}`}
    >
      {/* Glow sutil no hover */}
      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold-400/5 via-transparent to-gold-400/5" />
      </div>

      <div className="relative z-10 flex shrink-0 items-center justify-center">
        <PosicaoBadge pos={pos} />
      </div>

      {/* Avatar placeholder */}
      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy-600 to-navy-700 text-sm font-bold text-white shadow-inner">
        {jogador.nome.charAt(0).toUpperCase()}
      </div>

      <div className="relative z-10 flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="truncate text-sm font-bold text-foreground">{jogador.nome}</span>
          <NivelPill nivel={jogador.nivel} />
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-navy-100 px-2 py-0.5 text-[10px] font-semibold text-navy-600 dark:bg-navy-800 dark:text-navy-300">
            <Icon name="zap" size={9} />
            {formatarXp(jogador.xp)} XP
          </span>
          <PrecisaoBadge precisao={jogador.precisao} />
          <StreakBadge streak={jogador.streak} />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Card "Sua Posição" ─── */
function SuaPosicaoCard({
  jogador,
  posicaoGlobal,
}: {
  jogador: JogadorRanking | null;
  posicaoGlobal: number;
}) {
  if (!jogador) {
    return (
      <div className="rounded-xl border border-dashed border-gold-400/30 bg-gold-500/5 p-6 text-center backdrop-blur-sm">
        <p className="text-sm text-muted">
          Complete aulas e jogue para aparecer no ranking!
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative overflow-hidden rounded-xl border border-gold-400/40 bg-gradient-to-br from-gold-500/8 via-navy-900/5 to-gold-500/5 p-5 shadow-[0_0_30px_-6px_rgba(212,168,67,0.25)] backdrop-blur-sm dark:from-gold-500/5 dark:via-navy-800/30 dark:to-gold-500/3"
    >
      {/* Glow animado */}
      <div className="pointer-events-none absolute -inset-[1px] rounded-xl opacity-50">
        <div className="absolute inset-0 animate-glow-pulse rounded-xl bg-gradient-to-br from-gold-400/10 via-transparent to-gold-400/5" />
      </div>

      <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {/* Posição */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-500 text-lg font-extrabold text-white shadow-lg shadow-gold-500/30">
            {posicaoGlobal > 10 ? `+${posicaoGlobal - 10}` : `#${posicaoGlobal}`}
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground">{jogador.nome}</span>
              <NivelPill nivel={jogador.nivel} />
            </div>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="text-xs text-muted">{formatarXp(jogador.xp)} XP</span>
              <span className="text-xs text-muted">•</span>
              <span className="text-xs text-muted">{jogador.precisao}% precisão</span>
              <span className="text-xs text-muted">•</span>
              <span className="inline-flex items-center gap-1 text-xs text-orange-500">
                <Icon name="flame" size={10} />
                {jogador.streak} dias
              </span>
            </div>
          </div>
        </div>

        {/* Label */}
        <div className="shrink-0">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-gold-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-500 dark:text-gold-400">
            <Icon name="star" size={12} />
            Sua posição
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Abas de navegação ─── */
const ABAS: { id: AbaRanking; label: string; icone: string }[] = [
  { id: "semanal", label: "Semanal", icone: "trending" },
  { id: "mensal", label: "Mensal", icone: "chart" },
  { id: "evolucao", label: "Evolução", icone: "graduation" },
];

function AbasRanking({
  ativa,
  onChange,
}: {
  ativa: AbaRanking;
  onChange: (aba: AbaRanking) => void;
}) {
  return (
    <div className="flex gap-1 rounded-xl bg-navy-100/60 p-1 dark:bg-navy-800/60">
      {ABAS.map((aba) => (
        <button
          key={aba.id}
          onClick={() => onChange(aba.id)}
          className={`relative flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-300 ${
            ativa === aba.id
              ? "bg-white text-navy-900 shadow-sm dark:bg-navy-700 dark:text-white"
              : "text-navy-500 hover:text-navy-700 dark:text-navy-400 dark:hover:text-navy-200"
          }`}
        >
          <Icon name={aba.icone} size={14} />
          <span className="hidden sm:inline">{aba.label}</span>
        </button>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   PÁGINA PRINCIPAL
   ══════════════════════════════════════════════════════════ */
export default function RankingPage() {
  const { xp, nivel, carregado, streak } = useProgresso();
  const [aba, setAba] = useState<AbaRanking>("semanal");
  const [jogadores, setJogadores] = useState<JogadorRanking[]>([]);
  const [jaCarregou, setJaCarregou] = useState(false);

  useEffect(() => {
    const dados = carregarRanking();
    setJogadores(dados);
    setJaCarregou(true);
  }, []);

  const top10 = useMemo(() => jogadores.slice(0, 10), [jogadores]);

  /* Usuário logado — monta o objeto do jogador atual */
  const usuarioJogador = useMemo<JogadorRanking | null>(() => {
    if (!carregado || !jaCarregou) return null;
    return {
      id: "usuario-atual",
      nome: "Você",
      nivel,
      xp,
      precisao: Math.floor(Math.random() * 15) + 78,
      streak,
      badges: Math.floor(nivel / 2) + 1,
    };
  }, [carregado, jaCarregou, xp, nivel, streak]);

  /* Posição do usuário no ranking */
  const posicaoUsuario = useMemo(() => {
    if (!usuarioJogador) return 0;
    const todos = [...jogadores, usuarioJogador].sort((a, b) => b.xp - a.xp);
    return todos.findIndex((j) => j.id === "usuario-atual") + 1;
  }, [usuarioJogador, jogadores]);

  if (!jaCarregou) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="flex items-center gap-3 text-muted">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-gold-400 border-t-transparent" />
          <span className="text-sm">Carregando ranking…</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* ════════════════════════════════════════════ */}
      {/* HERO                                    */}
      {/* ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-850 to-navy-800 pb-16 pt-12 sm:pb-20 sm:pt-16">
        {/* Background elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold-500/5 blur-3xl" />
          <div className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-gold-400/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-navy-700/30 blur-3xl" />
          <svg className="absolute inset-0 h-full w-full opacity-[0.03]" aria-hidden>
            <defs>
              <pattern id="ranking-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ranking-grid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/20 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold text-gold-300 backdrop-blur-sm">
              <Icon name="award" size={12} />
              Ranking de estudos
            </div>

            <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ranking{" "}
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 bg-clip-text text-transparent">
                Saudável
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">
              Sua evolução nos estudos e jogos em um ranking que valoriza consistência, 
              não apenas pontos. Top 10 + sua posição destacada.
            </p>
          </motion.div>

          {/* Stats hero */}
          {usuarioJogador && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4 sm:gap-6"
            >
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
                <Icon name="zap" size={16} className="text-gold-400" />
                <div>
                  <span className="text-lg font-bold text-white">{formatarXp(usuarioJogador.xp)}</span>
                  <span className="ml-1.5 text-xs text-navy-300">XP total</span>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
                <Icon name="award" size={16} className="text-gold-400" />
                <div>
                  <span className="text-lg font-bold text-white">Lv.{usuarioJogador.nivel}</span>
                  <span className="ml-1.5 text-xs text-navy-300">nível</span>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
                <Icon name="flame" size={16} className="text-gold-400" />
                <div>
                  <span className="text-lg font-bold text-white">{usuarioJogador.streak}</span>
                  <span className="ml-1.5 text-xs text-navy-300">dias streak</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="absolute -bottom-px left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* CONTEÚDO                                  */}
      {/* ════════════════════════════════════════════ */}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        {/* Abas */}
        <div className="relative -mt-6 mb-6">
          <AbasRanking ativa={aba} onChange={setAba} />
        </div>

        {/* Container animado por aba */}
        <AnimatePresence mode="wait">
          <motion.div
            key={aba}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {aba === "evolucao" ? (
              /* ═══ ABA EVOLUÇÃO — visual alternativo ═══ */
              <div className="rounded-xl border border-white/10 bg-white/60 p-6 backdrop-blur-sm dark:bg-navy-900/50">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-400/20 to-gold-500/10">
                    <Icon name="trending" size={28} className="text-gold-400" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Sua Evolução</h3>
                  <p className="max-w-md text-sm text-muted">
                    A cada aula concluída e jogo praticado, seu XP cresce e você sobe no ranking.
                    O foco é aprendizado consistente — não competição.
                  </p>

                  <div className="mt-4 grid w-full max-w-md grid-cols-3 gap-3">
                    <div className="rounded-lg border border-white/10 bg-white/50 p-3 dark:bg-navy-800/30">
                      <div className="text-2xl font-extrabold text-gold-400">{usuarioJogador?.nivel ?? "—"}</div>
                      <div className="mt-0.5 text-[11px] text-muted">Nível atual</div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/50 p-3 dark:bg-navy-800/30">
                      <div className="text-2xl font-extrabold text-emerald-400">{usuarioJogador?.badges ?? "—"}</div>
                      <div className="mt-0.5 text-[11px] text-muted">Badges</div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/50 p-3 dark:bg-navy-800/30">
                      <div className="text-2xl font-extrabold text-orange-400">{usuarioJogador?.streak ?? "—"}</div>
                      <div className="mt-0.5 text-[11px] text-muted">Streak dias</div>
                    </div>
                  </div>

                  <p className="mt-2 text-xs text-subtle">
                    Continue estudando para evoluir. Ranking atualizado em tempo real.
                  </p>
                </div>
              </div>
            ) : (
              /* ═══ ABA SEMANAL / MENSAL — Top 10 + Sua Posição ═══ */
              <div className="space-y-6">
                {/* Grid Top 10 / Placeholder */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="award" size={16} className="text-gold-400" />
                    <h2 className="text-sm font-bold uppercase tracking-wider text-muted">
                      Top 10 — {aba === "semanal" ? "Semanal" : "Mensal"}
                    </h2>
                  </div>
                  {jogadores.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-gold-400/20 bg-gold-500/3 p-10 text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-400/20 to-gold-500/10">
                        <span className="text-3xl">🏆</span>
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-2">
                        Ranking em breve
                      </h3>
                      <p className="mx-auto max-w-md text-sm text-muted leading-relaxed">
                        Convide colegas para ativar o ranking! 
                        Quando outros profissionais começarem a estudar, 
                        o ranking será populado automaticamente.
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold-500/10 px-4 py-1.5 text-xs font-medium text-gold-500">
                        <span className="flex h-2 w-2 rounded-full bg-gold-500 animate-pulse" />
                        Aguardando participantes
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {top10.map((jogador, i) => (
                        <TopCard key={jogador.id} jogador={jogador} pos={i + 1} index={i} />
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Sua Posição */}
                <div className="pt-2">
                  <SuaPosicaoCard jogador={usuarioJogador} posicaoGlobal={posicaoUsuario} />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-muted">
          Ranking focado em evolução saudável — aprenda no seu ritmo e veja seu progresso 🌱
        </p>
      </section>
    </div>
  );
}
