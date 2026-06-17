"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { QuestaoJogo } from "@/content/jogos";
import { Confetti } from "@/components/confetti";
import { Botao, Card, BarraProgresso } from "@/components/ui";
import { Icon } from "@/components/icons";
import { somSucesso, somQuaseLa } from "@/lib/som";
import { addXpAcerto, addXpCompletarJogo } from "@/lib/sov-xp";
import "./game-design-tokens.css";

/* ─── Score Flutuante ─── */
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

interface CenarioBalcaoProps {
  titulo: string;
  questoes: QuestaoJogo[];
}

export function CenarioBalcao({ titulo, questoes }: CenarioBalcaoProps) {
  const [idx, setIdx] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const [fim, setFim] = useState(false);
  const [celebrar, setCelebrar] = useState(false);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [ultimoScore, setUltimoScore] = useState(0);
  const [animacaoIdx, setAnimacaoIdx] = useState<number | null>(null);
  const [animacaoTipo, setAnimacaoTipo] = useState<"correct" | "shake" | null>(null);

  const q = questoes[idx];

  function responder(i: number) {
    if (escolha != null) return;
    setEscolha(i);
    if (i === q.correta) {
      setPontos((p) => p + 10);
      setAcertos((a) => a + 1);
      setCelebrar(true);
      setUltimoScore(10);
      somSucesso();
      setAnimacaoIdx(i);
      setAnimacaoTipo("correct");
      // XP Sovereign
      addXpAcerto(0);
    } else {
      setErros((e) => e + 1);
      setUltimoScore(0);
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

  const acertou = escolha != null && escolha === q.correta;

  if (fim) {
    const pct = Math.round((pontos / (questoes.length * 10)) * 100);
    return (
      <Card>
        <div className="flex flex-col items-center gap-3 text-center">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className={`flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg ${
              pct >= 70
                ? "bg-gradient-to-r from-gold-500 to-gold-600"
                : "bg-gradient-to-br from-gold-600 to-gold-800"
            }`}
          >
            <Icon name={pct >= 70 ? "graduation" : "target"} size={28} className="text-white" />
          </motion.span>
          <div>
            <h3 className="text-lg font-bold text-foreground">{titulo} — resultados</h3>
            <p className="mt-1 text-2xl font-extrabold text-foreground">
              {acertos}/{questoes.length}
              <span className={`ml-2 text-sm ${pct >= 70 ? "text-gold-400" : "text-gold-400"}`}>
                ({pct}%)
              </span>
            </p>
            <p className="mt-1 text-sm text-muted">
              {erros > 0
                ? `${erros} ${erros === 1 ? "situação" : "situações"} para revisar`
                : "100% de acertos! Atendente nota 10!"}
            </p>
          </div>
        </div>
        <Botao
          className="mt-6 min-h-12 min-w-12"
          onClick={() => {
            setIdx(0);
            setPontos(0);
            setEscolha(null);
            setFim(false);
            setCelebrar(false);
            setAcertos(0);
            setErros(0);
            setUltimoScore(0);
          }}
          icone="repeat"
          tamanho="lg"
        >
          Simular de novo
        </Botao>
      </Card>
    );
  }

  return (
    <Card>
      <Confetti ativo={celebrar} duracao={2000} />
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/40">
              <Icon name="users" size={14} className="text-cyan-600 dark:text-cyan-400" />
            </span>
            <span className="text-sm font-medium text-subtle">{titulo}</span>
          </div>
          <span className="text-xs font-bold text-gold-400">{pontos} pts</span>
        </div>
        <BarraProgresso pct={((idx + 1) / questoes.length) * 100} height={3} />
        <p className="text-xs text-muted">
          Cenário {idx + 1} de {questoes.length}
        </p>
      </div>

      <motion.div
        key={q.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Simulação visual */}
        <div className="mt-4 rounded-xl border border-cyan-200/40 bg-gradient-to-br from-cyan-50/60 to-sky-50/60 p-4 dark:border-cyan-700/30 dark:from-cyan-900/10 dark:to-sky-900/10">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-800/50">
              <Icon name="message-circle" size={18} className="text-cyan-600 dark:text-cyan-400" />
            </span>
            <div>
              <p className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                Cliente no balcão
              </p>
              <p className="mt-1 text-sm font-semibold leading-snug text-foreground">
                {q.pergunta}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {q.opcoes.map((op, i) => {
            let estilo = "border-border hover:border-gold-300 hover:bg-gold-50/20 dark:hover:bg-gold-900/10";
            if (escolha != null) {
              if (i === q.correta)
                estilo = "border-gold-400 bg-gold-50/60 dark:bg-gold-900/20 ring-1 ring-gold-400/30";
              else if (i === escolha)
                estilo = "border-gold-400 bg-gold-50/60 dark:bg-gold-900/20 ring-1 ring-gold-400/30";
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
                whileHover={escolha != null ? {} : { scale: 1.01 }}
                whileTap={escolha != null ? {} : { scale: 0.98 }}
                className={`flex min-h-[3rem] w-full items-center gap-3 rounded-xl border px-4 py-2.5 text-left text-sm transition-all ${estilo} ${animClass}`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold ${
                    escolha != null && i === q.correta
                      ? "border-transparent bg-gradient-to-r from-gold-400 to-gold-500 text-white shadow-sm"
                      : escolha != null && i === escolha && i !== q.correta
                        ? "border-transparent bg-gradient-to-r from-gold-400 to-gold-500 text-white shadow-sm"
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
                <span className="flex-1 break-words leading-snug text-foreground">{op}</span>
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

        <AnimatePresence>
          {escolha != null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 space-y-4"
            >
              <div
                className={`rounded-xl border px-4 py-4 ${
                  acertou
                    ? "border-gold-400/20 bg-gradient-to-br from-gold-500/10 to-gold-400/5"
                    : "border-gold-400/25 bg-gradient-to-br from-gold-500/10 to-gold-400/5"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base ${
                      acertou ? "bg-gold-100 dark:bg-gold-900/40" : "bg-gold-100 dark:bg-gold-900/40"
                    }`}
                  >
                    {acertou ? "✅" : "💡"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      {acertou ? "Conduta correta!" : "Melhor conduta:"}
                    </p>
                    <p className="mt-1 text-sm text-muted leading-relaxed">{q.explicacao}</p>
                  </div>
                </div>
              </div>
              <Botao
                className="w-full min-h-12"
                onClick={proxima}
                iconeFim="arrow"
                tamanho="lg"
              >
                {idx + 1 >= questoes.length ? "Ver resultado" : "Próximo cenário"}
              </Botao>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Card>
  );
}
