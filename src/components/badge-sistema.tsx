"use client";

import { useEffect, useCallback, useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProgresso, totalAulasCurso } from "@/lib/progress";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icons";

/* ───────────────────────────────────────────
   Tipos
   ─────────────────────────────────────────── */

export type NivelBadge = "bronze" | "prata" | "ouro" | "lendario";

export interface BadgeDef {
  id: string;
  nome: string;
  descricao: string;
  icone: string;
  categoria: "estudo" | "missoes" | "streak" | "quiz" | "tempo" | "social";
  nivel: NivelBadge;
  /** Função que recebe o progresso e retorna true se o badge estiver desbloqueado */
  condicao: (p: ProgressoParaBadge) => boolean;
}

export interface BadgeEstado extends BadgeDef {
  desbloqueado: boolean;
}

export interface ProgressoParaBadge {
  concluidas: number;
  totalAulas: number;
  xp: number;
  nivel: number;
  streak: number;
  missoesPontos: number;
  tentativasQuiz: number;
  tempoEstudoMinutos: number;
  favoritas: number;
}

/* ───────────────────────────────────────────
   Cores e metadados por nível
   ─────────────────────────────────────────── */

const CORES_NIVEL: Record<NivelBadge, { bg: string; border: string; text: string; glow: string; label: string }> = {
  bronze: {
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-400",
    text: "text-amber-700 dark:text-amber-300",
    glow: "shadow-amber-300/40",
    label: "Bronze",
  },
  prata: {
    bg: "bg-slate-100 dark:bg-slate-800/40",
    border: "border-slate-400",
    text: "text-slate-600 dark:text-slate-300",
    glow: "shadow-slate-300/40",
    label: "Prata",
  },
  ouro: {
    bg: "bg-yellow-50 dark:bg-yellow-950/30",
    border: "border-yellow-400",
    text: "text-yellow-700 dark:text-yellow-300",
    glow: "shadow-yellow-300/50",
    label: "Ouro",
  },
  lendario: {
    bg: "bg-purple-50 dark:bg-purple-950/30",
    border: "border-purple-500",
    text: "text-purple-700 dark:text-purple-300",
    glow: "shadow-purple-400/50",
    label: "Lendário",
  },
};

/* ───────────────────────────────────────────
   Definição dos 12 badges
   ─────────────────────────────────────────── */

export const BADGES: BadgeDef[] = [
  /* ── Estudo ── */
  {
    id: "aprendiz-farmacia",
    nome: "Aprendiz de Farmácia",
    descricao: "Conclua sua primeira aula",
    icone: "pill",
    categoria: "estudo",
    nivel: "bronze",
    condicao: (p) => p.concluidas >= 1,
  },
  {
    id: "estagiario-dedicado",
    nome: "Estagiário Dedicado",
    descricao: "Conclua 10 aulas",
    icone: "book",
    categoria: "estudo",
    nivel: "prata",
    condicao: (p) => p.concluidas >= 10,
  },
  {
    id: "farmaceutico-senior",
    nome: "Farmacêutico Sênior",
    descricao: "Conclua 30 aulas",
    icone: "graduation",
    categoria: "estudo",
    nivel: "ouro",
    condicao: (p) => p.concluidas >= 30,
  },
  {
    id: "mestre-farmaceutico",
    nome: "Mestre Farmacêutico",
    descricao: "Conclua 100% das aulas do curso",
    icone: "award",
    categoria: "estudo",
    nivel: "lendario",
    condicao: (p) => p.totalAulas > 0 && p.concluidas >= p.totalAulas,
  },

  /* ── Streak ── */
  {
    id: "primeiro-fogo",
    nome: "Primeiro Fogo",
    descricao: "Estude por 3 dias consecutivos",
    icone: "flame",
    categoria: "streak",
    nivel: "bronze",
    condicao: (p) => p.streak >= 3,
  },
  {
    id: "raio-de-fogo",
    nome: "Raio de Fogo",
    descricao: "Estude por 7 dias consecutivos",
    icone: "zap",
    categoria: "streak",
    nivel: "prata",
    condicao: (p) => p.streak >= 7,
  },

  /* ── Missões ── */
  {
    id: "faz-tudo",
    nome: "Faz-Tudo",
    descricao: "Acumule 50 pontos em missões",
    icone: "award",
    categoria: "missoes",
    nivel: "bronze",
    condicao: (p) => p.missoesPontos >= 50,
  },
  {
    id: "mestre-missoes",
    nome: "Mestre das Missões",
    descricao: "Acumule 200 pontos em missões",
    icone: "star",
    categoria: "missoes",
    nivel: "ouro",
    condicao: (p) => p.missoesPontos >= 200,
  },

  /* ── Quiz ── */
  {
    id: "teste-de-fogo",
    nome: "Teste de Fogo",
    descricao: "Responda seu primeiro quiz",
    icone: "clipboard",
    categoria: "quiz",
    nivel: "bronze",
    condicao: (p) => p.tentativasQuiz >= 1,
  },
  {
    id: "genio-quizzes",
    nome: "Gênio dos Quizzes",
    descricao: "Responda 20 quizzes",
    icone: "sparkles",
    categoria: "quiz",
    nivel: "ouro",
    condicao: (p) => p.tentativasQuiz >= 20,
  },

  /* ── Tempo ── */
  {
    id: "foco-total",
    nome: "Foco Total",
    descricao: "Acumule 2 horas de estudo",
    icone: "clock",
    categoria: "tempo",
    nivel: "prata",
    condicao: (p) => p.tempoEstudoMinutos >= 120,
  },
  {
    id: "guardiao-tempo",
    nome: "Guardião do Tempo",
    descricao: "Acumule 10 horas de estudo",
    icone: "moon",
    categoria: "tempo",
    nivel: "lendario",
    condicao: (p) => p.tempoEstudoMinutos >= 600,
  },
];

/* ───────────────────────────────────────────
   Hook: useBadges — avalia todos os badges
   ─────────────────────────────────────────── */

export function useBadges(): {
  badges: BadgeEstado[];
  desbloqueados: BadgeEstado[];
  bloqueados: BadgeEstado[];
  ultimoDesbloqueado: BadgeEstado | null;
  progresso: ProgressoParaBadge;
} {
  const prog = useProgresso();
  const totalAulas = totalAulasCurso();

  const progresso = useMemo<ProgressoParaBadge>(
    () => ({
      concluidas: prog.concluidas.length,
      totalAulas,
      xp: prog.xp,
      nivel: prog.nivel,
      streak: prog.streak,
      missoesPontos: prog.missoesPontos,
      tentativasQuiz: Object.keys(prog.tentativasQuiz ?? {}).length,
      tempoEstudoMinutos: Math.floor((prog.tempoEstudoSegundos ?? 0) / 60),
      favoritas: prog.favoritas.length,
    }),
    [
      prog.concluidas.length,
      totalAulas,
      prog.xp,
      prog.nivel,
      prog.streak,
      prog.missoesPontos,
      prog.tentativasQuiz,
      prog.tempoEstudoSegundos,
      prog.favoritas.length,
    ],
  );

  const badges = useMemo<BadgeEstado[]>(
    () =>
      BADGES.map((b) => ({
        ...b,
        desbloqueado: b.condicao(progresso),
      })),
    [progresso],
  );

  const desbloqueados = useMemo(() => badges.filter((b) => b.desbloqueado), [badges]);
  const bloqueados = useMemo(() => badges.filter((b) => !b.desbloqueado), [badges]);

  /* Detectar o badge recém-desbloqueado */
  const [ultimoDesbloqueado, setUltimoDesbloqueado] = useState<BadgeEstado | null>(null);
  const prevDesbloqueadosRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const atuais = new Set(desbloqueados.map((b) => b.id));
    const prev = prevDesbloqueadosRef.current;

    if (prev.size > 0) {
      for (const id of atuais) {
        if (!prev.has(id)) {
          const badge = desbloqueados.find((b) => b.id === id);
          if (badge) {
            setUltimoDesbloqueado(badge);
            break;
          }
        }
      }
    }

    prevDesbloqueadosRef.current = atuais;
  }, [desbloqueados]);

  return {
    badges,
    desbloqueados,
    bloqueados,
    ultimoDesbloqueado,
    progresso,
  };
}

/* ───────────────────────────────────────────
   Componente: BadgeCard
   ─────────────────────────────────────────── */

function BadgeCard({
  badge,
  className,
}: {
  badge: BadgeEstado;
  className?: string;
}) {
  const cor = CORES_NIVEL[badge.nivel];
  const desbloqueado = badge.desbloqueado;

  return (
    <div
      className={cn(
        "group relative flex flex-col items-center gap-2 rounded-2xl border-2 p-4 text-center transition-all duration-300",
        desbloqueado
          ? cn(cor.bg, cor.border, cor.glow, "shadow-md hover:scale-[1.03] hover:shadow-lg")
          : "border-midnight-200/30 bg-midnight-50/30 opacity-55 grayscale",
        className,
      )}
    >
      {/* Nível tag */}
      <span
        className={cn(
          "absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
          desbloqueado
            ? cn(cor.bg, cor.text, cor.border, "border")
            : "bg-midnight-100 text-midnight-400 dark:bg-midnight-800 dark:text-midnight-500",
        )}
      >
        {cor.label}
      </span>

      {/* Ícone */}
      <span className="mt-1 text-4xl leading-none flex items-center justify-center">
        <Icon name={badge.icone} size={36} />
      </span>

      {/* Nome */}
      <strong
        className={cn(
          "text-xs font-semibold leading-tight",
          desbloqueado ? "text-midnight-900 dark:text-white" : "text-midnight-500",
        )}
      >
        {badge.nome}
      </strong>

      {/* Descrição */}
      <p className="text-[10px] leading-tight text-midnight-400 dark:text-midnight-500">
        {badge.descricao}
      </p>

      {/* Categoria tag */}
      <span className="mt-auto rounded-md bg-midnight-100 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-midnight-500 dark:bg-midnight-800 dark:text-midnight-400">
        {badge.categoria}
      </span>
    </div>
  );
}

/* ───────────────────────────────────────────
   Componente: CelebracaoBadge
   ─────────────────────────────────────────── */

interface CelebracaoBadgeProps {
  badge: BadgeEstado | null;
  onClose?: () => void;
  duracao?: number;
}

export function CelebracaoBadge({ badge, onClose, duracao = 4000 }: CelebracaoBadgeProps) {
  const [visivel, setVisivel] = useState(false);
  const cor = badge ? CORES_NIVEL[badge.nivel] : null;

  useEffect(() => {
    if (badge) {
      setVisivel(true);
      const timer = setTimeout(() => {
        setVisivel(false);
        onClose?.();
      }, duracao);
      return () => clearTimeout(timer);
    }
  }, [badge, duracao, onClose]);

  return (
    <AnimatePresence>
      {visivel && badge && cor && (
        <motion.div
          key={badge.id}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Conteúdo central */}
          <motion.div
            className="flex flex-col items-center gap-4 rounded-3xl border-2 border-white/20 bg-white/95 px-10 py-10 shadow-2xl dark:bg-midnight-900/95"
            initial={{ scale: 0.2, rotate: -10, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
          >
            {/* Partículas ao redor */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.span
                key={i}
                className={cn(
                  "pointer-events-none absolute text-lg",
                  i % 2 === 0 ? "text-yellow-400" : "text-purple-400",
                )}
                initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                animate={{
                  x: Math.cos((i * Math.PI * 2) / 8) * (80 + Math.random() * 40),
                  y: Math.sin((i * Math.PI * 2) / 8) * (80 + Math.random() * 40),
                  scale: [0, 1.5, 0],
                  opacity: [1, 0.8, 0],
                }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              >
                {["✨", "⭐", "💫", "🌟", "✨", "⭐", "💫", "🌟"][i]}
              </motion.span>
            ))}

            {/* Título */}
            <motion.p
              className="text-sm font-bold uppercase tracking-widest text-midnight-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Icon name="sparkles" size={14} /> Novo Badge Desbloqueado!
            </motion.p>

            {/* Nível tag */}
            <motion.span
              className={cn(
                "rounded-full border px-3 py-0.5 text-xs font-bold uppercase tracking-wider",
                cor.bg,
                cor.border,
                cor.text,
              )}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
            >
              {cor.label}
            </motion.span>

            {/* Ícone grande */}
            <motion.span
              className="text-7xl leading-none flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 }}
            >
              <Icon name={badge.icone} size={56} />
            </motion.span>

            {/* Nome */}
            <motion.h2
              className="text-2xl font-bold text-midnight-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {badge.nome}
            </motion.h2>

            {/* Descrição */}
            <motion.p
              className="max-w-xs text-center text-sm text-midnight-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {badge.descricao}
            </motion.p>

            {/* Botão fechar */}
            <motion.button
              className="mt-2 rounded-full bg-midnight-900 px-8 py-2 text-sm font-semibold text-white transition-colors hover:bg-midnight-700 dark:bg-white dark:text-midnight-900 dark:hover:bg-midnight-100"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              onClick={() => {
                setVisivel(false);
                onClose?.();
              }}
            >
              Continuar
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ───────────────────────────────────────────
   Componente: BadgeSistema (principal)
   ─────────────────────────────────────────── */

interface BadgeSistemaProps {
  /** Se true, fecha automaticamente a celebração e chama onBadgeClose */
  autoClose?: boolean;
  onBadgeClose?: () => void;
  /** Filtro opcional de categoria */
  categoria?: string;
  className?: string;
}

export function BadgeSistema({
  autoClose = true,
  onBadgeClose,
  categoria,
  className,
}: BadgeSistemaProps) {
  const { badges, desbloqueados, bloqueados, ultimoDesbloqueado, progresso } = useBadges();

  const [celebrar, setCelebrar] = useState<BadgeEstado | null>(null);

  useEffect(() => {
    if (ultimoDesbloqueado) {
      setCelebrar(ultimoDesbloqueado);
    }
  }, [ultimoDesbloqueado]);

  const handleClose = useCallback(() => {
    setCelebrar(null);
    onBadgeClose?.();
  }, [onBadgeClose]);

  const filtrados = useMemo(
    () => (categoria ? badges.filter((b) => b.categoria === categoria) : badges),
    [badges, categoria],
  );

  const totalAulas = totalAulasCurso();

  return (
    <>
      <CelebracaoBadge badge={celebrar} onClose={autoClose ? handleClose : undefined} />

      <div className={cn("space-y-6", className)}>
        {/* Cabeçalho com resumo */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-midnight-900 dark:text-white flex items-center gap-2">
              <Icon name="award" size={20} /> Conquistas
            </h2>
            <p className="text-sm text-midnight-400">
              {desbloqueados.length} de {badges.length} badges desbloqueados
              {categoria && ` • Categoria: ${categoria}`}
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs text-midnight-400">
            <span className="inline-flex items-center gap-1">
              <Icon name="book" size={12} /> {progresso.concluidas}/{totalAulas} aulas
            </span>
            <span className="inline-flex items-center gap-1">
              <Icon name="flame" size={12} /> streak de {progresso.streak}
            </span>
            <span className="inline-flex items-center gap-1">
              <Icon name="clock" size={12} /> {progresso.tempoEstudoMinutos} min
            </span>
          </div>
        </div>

        {/* Barra de progresso geral */}
        <div className="h-2 w-full overflow-hidden rounded-full bg-midnight-100 dark:bg-midnight-800">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-purple-500"
            initial={{ width: 0 }}
            animate={{
              width: `${badges.length > 0 ? (desbloqueados.length / badges.length) * 100 : 0}%`,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Grid de badges */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {filtrados.map((badge) => (
            <motion.div
              key={badge.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <BadgeCard badge={badge} />
            </motion.div>
          ))}
        </div>

        {/* Seção de badges bloqueados (se não houver filtro) */}
        {!categoria && bloqueados.length > 0 && (
          <details className="group">
            <summary className="cursor-pointer text-sm font-medium text-midnight-400 hover:text-midnight-600 dark:hover:text-midnight-300 flex items-center gap-1">
              <Icon name="lock" size={14} /> Badges bloqueados ({bloqueados.length})
            </summary>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {bloqueados.map((badge) => (
                <motion.div
                  key={badge.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <BadgeCard badge={badge} />
                </motion.div>
              ))}
            </div>
          </details>
        )}
      </div>
    </>
  );
}
