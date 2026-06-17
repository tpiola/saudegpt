"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/icons";
import { Card, Botao, BarraProgresso } from "@/components/ui";
import { Confetti } from "@/components/confetti";
import { somSucesso, somQuaseLa } from "@/lib/som";
import { addXpAcerto, addXpCompletarJogo } from "@/lib/sov-xp";
import "./game-design-tokens.css";

/* ─── Tipos ─── */
interface QuestaoRapida {
  id: string;
  pergunta: string;
  opcoes: string[];
  correta: number;
  explicacao: string;
}

interface SpeedChallengeProps {
  titulo: string;
  questoes: QuestaoRapida[];
  tempoPorQuestao?: number; // segundos
}

/* ─── Score Flutuante (Framer Motion) ─── */
function ScoreFloat({
  valor,
  cor = "var(--gold-400)",
  id,
}: {
  valor: number;
  cor?: string;
  id: string | number;
}) {
  return (
    <motion.span
      key={id}
      initial={{ opacity: 1, y: 0, scale: 0.5 }}
      animate={{ opacity: 0, y: -60, scale: 1.3 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="pointer-events-none absolute right-0 top-0 z-50 font-extrabold text-lg"
      style={{ color: cor, textShadow: `0 0 12px ${cor}60` }}
      aria-hidden
    >
      +{valor}
    </motion.span>
  );
}

/* ─── Timer Circular Animado ─── */
function TimerRing({
  pct,
  tamanho = 48,
  stroke = 4,
}: {
  pct: number;
  tamanho?: number;
  stroke?: number;
}) {
  const r = (tamanho - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  const off = circ - (pct / 100) * circ;
  const urgente = pct < 25;
  return (
    <svg
      width={tamanho}
      height={tamanho}
      className="-rotate-90 shrink-0"
      aria-hidden
    >
      <circle
        cx={tamanho / 2}
        cy={tamanho / 2}
        r={r}
        fill="none"
        strokeWidth={stroke}
        className="stroke-navy-800/30"
      />
      <motion.circle
        cx={tamanho / 2}
        cy={tamanho / 2}
        r={r}
        fill="none"
        strokeWidth={stroke}
        strokeLinecap="round"
        stroke={urgente ? "#ef4444" : "var(--gold-400)"}
        strokeDasharray={circ}
        strokeDashoffset={off}
        initial={false}
        animate={{ strokeDashoffset: off }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="drop-shadow-[0_0_6px_rgba(212,168,67,0.3)]"
      />
    </svg>
  );
}

/* ─── Indicador de Streak ─── */
function StreakBadge({ streak }: { streak: number }) {
  return (
    <motion.div
      key={streak}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 12 }}
      className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
        streak >= 5
          ? "bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-lg shadow-gold-500/30"
          : streak >= 3
            ? "bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-300"
            : "bg-surface-2 text-muted"
      }`}
    >
      <Icon name="flame" size={14} />
      <span>STREAK x{streak}</span>
    </motion.div>
  );
}

/* ─── Componente Principal ─── */
export function SpeedChallenge({
  titulo,
  questoes,
  tempoPorQuestao = 10,
}: SpeedChallengeProps) {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const [tempoRestante, setTempoRestante] = useState(tempoPorQuestao);
  const [fim, setFim] = useState(false);
  const [celebrar, setCelebrar] = useState(false);
  const [ultimoScore, setUltimoScore] = useState(0);
  const [ultimoAcerto, setUltimoAcerto] = useState(false);
  const [acertos, setAcertos] = useState(0);
  const [animacaoIdx, setAnimacaoIdx] = useState<number | null>(null);
  const [animacaoTipo, setAnimacaoTipo] = useState<"correct" | "shake" | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const q = questoes[idx];

  /* Timer regressivo */
  useEffect(() => {
    if (escolha != null || fim) return;
    setTempoRestante(tempoPorQuestao);
    timerRef.current = setInterval(() => {
      setTempoRestante((t) => {
        if (t <= 1) return 0;
        return t - 0.1;
      });
    }, 100);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [idx, escolha, fim, tempoPorQuestao]);

  /* Tempo esgotou = erro automático */
  useEffect(() => {
    if (tempoRestante <= 0 && escolha == null && !fim) {
      setEscolha(-1);
      setStreak(0);
      setUltimoAcerto(false);
      setUltimoScore(0);
      somQuaseLa();
    }
  }, [tempoRestante, escolha, fim]);

  function responder(i: number) {
    if (escolha != null) return;
    setEscolha(i);
    if (timerRef.current) clearInterval(timerRef.current);

    const acertou = i === q.correta;
    if (acertou) {
      const novoStreak = streak + 1;
      const multiplicador = Math.min(novoStreak, 10);
      const pts = Math.round(10 * multiplicador * (1 + tempoRestante / tempoPorQuestao * 0.5));
      setScore((s) => s + pts);
      setStreak(novoStreak);
      setUltimoScore(pts);
      setUltimoAcerto(true);
      setAcertos((a) => a + 1);
      setCelebrar(true);
      somSucesso();
      // XP Sovereign
      addXpAcerto(streak, tempoRestante, tempoPorQuestao);
      setAnimacaoIdx(i);
      setAnimacaoTipo("correct");
    } else {
      setStreak(0);
      setUltimoScore(0);
      setUltimoAcerto(false);
      somQuaseLa();
      setAnimacaoIdx(i);
      setAnimacaoTipo("shake");
    }
    setTimeout(() => {
      setAnimacaoIdx(null);
      setAnimacaoTipo(null);
    }, 600);
  }

  function proxima() {
    setEscolha(null);
    setCelebrar(false);
    setUltimoScore(0);
    if (idx + 1 >= questoes.length) {
      // Jogo completo — registrar XP
      addXpCompletarJogo(questoes.length, acertos);
      setFim(true);
      return;
    }
    setIdx((i) => i + 1);
  }

  const pctTempo = (tempoRestante / tempoPorQuestao) * 100;

  /* ─── Tela Final ─── */
  if (fim) {
    const pctAcerto = Math.round((acertos / questoes.length) * 100);
    return (
      <Card>
        <Confetti ativo={celebrar} duracao={4000} />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <motion.span
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.1 }}
            className={`flex h-20 w-20 items-center justify-center rounded-2xl shadow-xl ${
              pctAcerto >= 70
                ? "bg-gradient-to-br from-gold-500 via-gold-400 to-gold-700"
                : "bg-gradient-to-br from-navy-600 to-navy-800"
            }`}
          >
            <Icon
              name={pctAcerto >= 70 ? "award" : "target"}
              size={32}
              className="text-white"
            />
          </motion.span>
          <div>
            <h3 className="text-xl font-bold text-foreground">{titulo} — Speed Result</h3>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.3 }}
              className="mt-2 text-3xl font-extrabold text-gold-400"
            >
              {score} pts
            </motion.p>
            <p className="mt-1 text-sm text-muted">
              {acertos}/{questoes.length} corretas ({pctAcerto}%)
              {streak >= 3 && ` · Best streak x${streak}`}
            </p>
          </div>
        </motion.div>
        <div className="mt-6 rounded-xl border border-border bg-surface-2 p-4">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-2xl font-bold text-gold-400">{score}</div>
              <div className="text-xs text-muted">Pontos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">{acertos}</div>
              <div className="text-xs text-muted">Acertos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gold-400">
                x{streak}
              </div>
              <div className="text-xs text-muted">Max Streak</div>
            </div>
          </div>
        </div>
        <Botao
          className="mt-6 w-full"
          onClick={() => {
            setIdx(0);
            setScore(0);
            setStreak(0);
            setEscolha(null);
            setFim(false);
            setCelebrar(false);
            setUltimoScore(0);
            setAcertos(0);
          }}
          icone="repeat"
          tamanho="lg"
        >
          Jogar de novo
        </Botao>
      </Card>
    );
  }

  if (!q) return null;

  return (
    <Card>
      <Confetti ativo={celebrar} duracao={2000} />

      {/* Header: score + streak + timer */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gold-400">{score} pts</span>
          {streak >= 2 && <StreakBadge streak={streak} />}
        </div>
        <div className="relative flex items-center gap-2">
          <TimerRing
            pct={pctTempo}
            tamanho={44}
            stroke={4}
          />
          <span
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold tabular-nums ${
              tempoRestante < 3 ? "text-red-400" : "text-foreground"
            }`}
          >
            {Math.ceil(tempoRestante)}s
          </span>
        </div>
      </div>

      {/* Progresso */}
      <div className="mt-3">
        <BarraProgresso
          pct={((idx + 1) / questoes.length) * 100}
          height={3}
        />
        <p className="mt-1 text-xs text-muted">
          Questão {idx + 1} de {questoes.length}
        </p>
      </div>

      {/* Pergunta */}
      <motion.div
        key={q.id}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <h3 className="mt-4 text-base font-bold leading-snug text-foreground">
          {q.pergunta}
        </h3>

        {/* Opções */}
        <div className="mt-4 space-y-2.5">
          {q.opcoes.map((op, i) => {
            let estilo =
              "border-border hover:border-gold-300 hover:bg-gold-50/20 dark:hover:bg-gold-900/10";
            if (escolha != null) {
              if (i === q.correta)
                estilo =
                  "border-gold-400 bg-gold-50/60 dark:bg-gold-900/20 ring-1 ring-gold-400/30";
              else if (i === escolha)
                estilo =
                  "border-gold-400 bg-gold-50/60 dark:bg-gold-900/20 ring-1 ring-gold-400/30";
            }
            const isAnimating = animacaoIdx === i;
            const animClass = isAnimating
              ? animacaoTipo === "correct"
                ? "animate-correct-pulse"
                : "animate-shake"
              : "";
            return (
              <motion.button
                key={op}
                type="button"
                disabled={escolha != null}
                onClick={() => responder(i)}
                whileHover={
                  escolha != null ? {} : { scale: 1.01, x: 4 }
                }
                whileTap={escolha != null ? {} : { scale: 0.97 }}
                className={`flex min-h-[2.8rem] w-full items-center gap-3 rounded-xl border px-4 py-2.5 text-left text-sm transition-all ${estilo} ${animClass}`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold ${
                    escolha != null && i === q.correta
                      ? "border-transparent bg-gold-400 text-white shadow-sm"
                      : escolha != null && i === escolha && i !== q.correta
                        ? "border-transparent bg-gold-400 text-white shadow-sm"
                        : "border-border-strong text-subtle"
                  }`}
                >
                  {escolha != null && i === q.correta ? (
                    <Icon name="check" size={12} />
                  ) : escolha != null && i === escolha && i !== q.correta ? (
                    <Icon name="close" size={12} />
                  ) : (
                    String.fromCharCode(65 + i)
                  )}
                </span>
                <span className="flex-1 break-words leading-snug text-foreground">
                  {op}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Score Float */}
        <AnimatePresence>
          {ultimoScore > 0 && (
            <ScoreFloat
              valor={ultimoScore}
              cor="var(--gold-400)"
              id={`score-${idx}`}
            />
          )}
        </AnimatePresence>

        {/* Feedback */}
        <AnimatePresence>
          {escolha != null && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="mt-4 space-y-3"
            >
              <div
                className={`rounded-xl border px-4 py-3 ${
                  ultimoAcerto
                    ? "border-gold-400/20 bg-gradient-to-br from-gold-500/10 to-gold-400/5"
                    : "border-gold-400/25 bg-gradient-to-br from-gold-500/10 to-gold-400/5"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base ${
                      ultimoAcerto
                        ? "bg-gold-100 dark:bg-gold-900/40"
                        : "bg-gold-100 dark:bg-gold-900/40"
                    }`}
                  >
                    {ultimoAcerto ? "⚡" : "💡"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      {ultimoAcerto
                        ? `Correto! +${Math.round(ultimoScore)} pts${
                            streak >= 2 ? ` (x${streak} streak)` : ""
                          }`
                        : tempoRestante <= 0
                          ? "Tempo esgotado!"
                          : "Resposta incorreta"}
                    </p>
                    <p className="mt-0.5 text-sm text-muted leading-relaxed">
                      {q.explicacao}
                    </p>
                  </div>
                </div>
              </div>
              <Botao
                className="w-full"
                onClick={proxima}
                iconeFim="arrow"
                tamanho="lg"
              >
                {idx + 1 >= questoes.length
                  ? "Ver resultado"
                  : "Próxima"}
              </Botao>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Card>
  );
}
