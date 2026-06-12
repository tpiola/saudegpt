"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { missoes } from "@/content/missoes";
import { Card, Botao, BarraProgresso } from "./ui";
import { Icon } from "./icons";
import type { Missao, OpcaoMissao } from "@/content/missoes";

const TEMPO_POR_ESTACAO = 120; // 2 minutos em segundos

// ── Indicador de estações (bolinhas) ──
function IndicadorEstacoes({
  total,
  atual,
  concluidas,
}: {
  total: number;
  atual: number;
  concluidas: number[];
}) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }, (_, i) => {
        const concluida = concluidas.includes(i);
        const ativa = i === atual;
        return (
          <div key={i} className="flex items-center gap-1">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-300 ${
                concluida
                  ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                  : ativa
                    ? "scale-110 bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md"
                    : "bg-surface-2 text-muted"
              }`}
            >
              {concluida ? (
                <Icon name="check" size={14} />
              ) : (
                i + 1
              )}
            </div>
            {i < total - 1 && (
              <div
                className={`h-0.5 w-3 rounded-full transition-colors ${
                  concluida
                    ? "bg-green-400"
                    : "bg-surface-2"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Timer regressivo por estação ──
function TimerEstacao({
  tempo,
  critico,
}: {
  tempo: number;
  critico: boolean;
}) {
  const min = Math.floor(tempo / 60);
  const seg = String(tempo % 60).padStart(2, "0");
  return (
    <div
      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-mono font-bold transition-all ${
        critico
          ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300 animate-pulse"
          : "bg-surface-2 text-foreground"
      }`}
    >
      <Icon name="clock" size={16} />
      {min}:{seg}
    </div>
  );
}

// ── Breakdown de critérios para o resultado ──
interface CriterioNota {
  estacao: number;
  titulo: string;
  pontos: number;
  maxPontos: number;
  feedback: string;
}

export function OsceSimulador() {
  const [idx, setIdx] = useState(0);
  const [notas, setNotas] = useState<number[]>([]);
  const [criterios, setCriterios] = useState<CriterioNota[]>([]);
  const [tempoRestante, setTempoRestante] = useState(TEMPO_POR_ESTACAO);
  const [tempoAcabou, setTempoAcabou] = useState(false);

  const caso = missoes[idx % missoes.length] as Missao | undefined;
  const [escolha, setEscolha] = useState<number | null>(null);
  const [mostrar, setMostrar] = useState(false);

  const pontos = escolha != null && caso ? caso.opcoes[escolha].pontos : 0;
  const max = caso ? Math.max(...caso.opcoes.map((o) => o.pontos)) : 0;
  const critico = tempoRestante <= 20; // últimos 20s

  // Timer regressivo por estação
  useEffect(() => {
    if (mostrar || notas.length >= 3) return;
    setTempoRestante(TEMPO_POR_ESTACAO);
    setTempoAcabou(false);
  }, [idx, mostrar, notas.length]);

  useEffect(() => {
    if (mostrar || notas.length >= 3 || tempoAcabou) return;
    const interval = setInterval(() => {
      setTempoRestante((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setTempoAcabou(true);
          if (escolha == null && caso) {
            // Auto-escolha da melhor opção? Não, só força mostrar
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [mostrar, notas.length, tempoAcabou, escolha, caso]);

  const avancar = useCallback(() => {
    if (escolha == null || !caso) return;
    const nova = [...notas, pontos];
    const novoCriterio: CriterioNota = {
      estacao: notas.length + 1,
      titulo: caso.titulo,
      pontos,
      maxPontos: max,
      feedback: caso.opcoes[escolha].feedback,
    };
    setCriterios((c) => [...c, novoCriterio]);
    setNotas(nova);
    setIdx((i) => i + 1);
    setEscolha(null);
    setMostrar(false);
    setTempoRestante(TEMPO_POR_ESTACAO);
    setTempoAcabou(false);
  }, [escolha, caso, notas, pontos, max]);

  // Seleciona melhor opção se tempo acabar
  useEffect(() => {
    if (tempoAcabou && escolha == null && caso) {
      const melhorIdx = caso.opcoes.findIndex(
        (o) => o.pontos === Math.max(...caso.opcoes.map((x) => x.pontos)),
      );
      setEscolha(melhorIdx);
      setMostrar(true);
    }
  }, [tempoAcabou, escolha, caso]);

  // ── Tela de resultado final ──
  if (notas.length >= 3) {
    const total = notas.reduce((a, b) => a + b, 0);
    const maxTotal = 3 * 10;
    const pct = Math.round((total / maxTotal) * 100);
    const aprovado = pct >= 70;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {/* Card principal de resultado */}
        <Card
          className={`${aprovado ? "border-green-300" : "border-orange-300"}`}
        >
          <div className="flex flex-col items-center gap-4 text-center">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className={`flex h-20 w-20 items-center justify-center rounded-2xl shadow-lg ${
                aprovado
                  ? "bg-gradient-to-r from-green-500 to-green-600"
                  : "bg-gradient-to-br from-orange-400 to-orange-600"
              }`}
            >
              <Icon
                name={aprovado ? "graduation" : "target"}
                size={36}
                className="text-white"
              />
            </motion.span>
            <div>
              <div className="text-3xl font-extrabold">
                {pct}% — OSCE
                {aprovado && (
                  <span className="ml-2 text-green-500">✅ Aprovado</span>
                )}
                {!aprovado && (
                  <span className="ml-2 text-orange-500">
                    ❌ Abaixo de 70%
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted max-w-md mx-auto">
                {aprovado
                  ? "Parabéns! Você demonstrou competência em triagem, segurança, ética e encaminhamento."
                  : "Reveja os critérios abaixo e treine novamente para melhorar seu desempenho."}
              </p>
            </div>
          </div>

          {/* Breakdown por critério */}
          <div className="mt-6 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wide text-muted">
              Detalhamento por estação
            </h4>
            {criterios.map((c) => {
              const pctCriterio = Math.round((c.pontos / c.maxPontos) * 100);
              return (
                <div
                  key={c.estacao}
                  className="rounded-xl border border-border bg-surface-2/50 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-[10px] font-bold text-white">
                          {c.estacao}
                        </span>
                        <span className="text-sm font-semibold truncate">
                          {c.titulo}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted">{c.feedback}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span
                        className={`text-lg font-bold ${
                          pctCriterio >= 70
                            ? "text-green-600"
                            : "text-orange-500"
                        }`}
                      >
                        {c.pontos}/{c.maxPontos}
                      </span>
                    </div>
                  </div>
                  <BarraProgresso
                    pct={pctCriterio}
                    height={4}
                    className="mt-2"
                  />
                </div>
              );
            })}
          </div>

          {/* Botões */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Botao
              onClick={() => {
                setNotas([]);
                setCriterios([]);
                setIdx(0);
                setEscolha(null);
                setMostrar(false);
                setTempoRestante(TEMPO_POR_ESTACAO);
                setTempoAcabou(false);
              }}
              variante="secondary"
              icone="repeat"
              tamanho="lg"
              className="min-h-12 min-w-12"
            >
              Treinar OSCE de novo
            </Botao>
            <Botao
              href="/trilhas"
              variante="ghost"
              iconeFim="arrow"
              tamanho="lg"
              className="min-h-12 min-w-12"
            >
              Voltar para trilhas
            </Botao>
          </div>
        </Card>
      </motion.div>
    );
  }

  if (!caso) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <Card>
        {/* Header com indicador de estação e timer */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <div className="text-xs font-medium uppercase tracking-wide text-subtle">
              OSCE — Estação {notas.length + 1} de 3
            </div>
            <IndicadorEstacoes
              total={3}
              atual={notas.length}
              concluidas={notas.map((_, i) => i)}
            />
          </div>
          {!mostrar && (
            <TimerEstacao tempo={tempoRestante} critico={critico} />
          )}
        </div>

        {/* Caso clínico */}
        <h3 className="mt-4 text-lg font-bold">{caso.titulo}</h3>
        <blockquote className="mt-3 rounded-xl border-l-4 border-l-green-400 bg-surface-2 p-4 text-sm italic text-muted">
          {caso.cliente}
        </blockquote>

        {/* Opções */}
        <div className="mt-4 space-y-3">
          {caso.opcoes.map((op, i) => {
            const selecionada = escolha === i;
            const melhor = op.pontos === max;
            let estilo = "border-border hover:border-green-300 hover:bg-green-50/20 dark:hover:bg-green-900/10";

            if (mostrar) {
              if (melhor)
                estilo =
                  "border-green-400 bg-green-50/60 dark:bg-green-900/20 ring-1 ring-green-400/30";
              else if (selecionada)
                estilo =
                  "border-orange-300 bg-orange-50/60 dark:bg-orange-900/20 ring-1 ring-orange-400/30";
            } else if (selecionada) {
              estilo =
                "border-green-400 bg-green-50/60 dark:bg-green-900/25 ring-1 ring-green-400/30";
            }

            return (
              <motion.button
                key={op.texto}
                type="button"
                disabled={mostrar}
                onClick={() => {
                  setEscolha(i);
                  setMostrar(true);
                }}
                whileHover={mostrar ? {} : { scale: 1.01 }}
                whileTap={mostrar ? {} : { scale: 0.98 }}
                className={`flex min-h-[3rem] w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${estilo}`}
              >
                {/* Indicador visual */}
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold ${
                    mostrar && melhor
                      ? "border-transparent bg-gradient-to-r from-green-500 to-green-600 text-white shadow-sm"
                      : mostrar && selecionada && !melhor
                        ? "border-transparent bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-sm"
                        : "border-border-strong text-subtle"
                  }`}
                >
                  {OPCOES_LABEL[i]}
                </span>
                <span className="flex-1 break-words leading-snug">
                  {op.texto}
                </span>
                {mostrar && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="shrink-0"
                  >
                    <Icon
                      name={melhor ? "check" : "close"}
                      size={20}
                      className={
                        melhor ? "text-green-500" : "text-orange-500"
                      }
                    />
                  </motion.span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Feedback + Próxima estação */}
        <AnimatePresence>
          {mostrar && escolha != null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-4 space-y-4"
            >
              {/* Card de feedback */}
              <div className="rounded-xl border border-green-400/20 bg-gradient-to-br from-green-500/10 to-emerald-400/5 px-4 py-4">
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base ${
                      pontos === max
                        ? "bg-green-100 dark:bg-green-900/40"
                        : "bg-orange-100 dark:bg-orange-900/40"
                    }`}
                  >
                    {pontos === max ? "✅" : "💡"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      {pontos === max
                        ? "Conduta recomendada"
                        : "Conduta pode ser melhorada"}
                    </p>
                    <p className="mt-1 text-sm text-muted leading-relaxed">
                      {caso.opcoes[escolha].feedback}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                          pontos === max
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                            : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                        }`}
                      >
                        +{pontos} / {max} pts
                      </span>
                      {tempoAcabou && (
                        <span className="text-[11px] font-medium text-orange-500">
                          ⏱ Tempo esgotado
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Botão próxima estação - mais visível */}
              <Botao
                onClick={avancar}
                iconeFim="arrow"
                tamanho="xl"
                className="w-full min-h-14"
              >
                {notas.length + 1 >= 3
                  ? "Ver resultado final"
                  : `Próxima estação ${notas.length + 2}/3`}
              </Botao>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}

const OPCOES_LABEL = ["A", "B", "C", "D", "E"];
