"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { QuestaoJogo } from "@/content/jogos";
import { Confetti } from "./confetti";
import { Botao, Card, BarraProgresso } from "./ui";
import { Icon } from "./icons";
import { somSucesso, somQuaseLa } from "@/lib/som";

const OPCOES_LABEL = ["A", "B", "C", "D", "E"];

function IndicadorQuestoes({
  total,
  atual,
}: {
  total: number;
  atual: number;
}) {
  return (
    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition-all duration-200 ${
            i === atual
              ? "scale-110 bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-sm"
              : i < atual
                ? "bg-gold-100 text-gold-700 dark:bg-green-900/40 dark:text-gold-300"
                : "bg-surface-2 text-muted"
          }`}
        >
          {i < atual ? <Icon name="check" size={10} /> : i + 1}
        </div>
      ))}
    </div>
  );
}

export function JogoQuiz({ titulo, questoes }: { titulo: string; questoes: QuestaoJogo[] }) {
  const [idx, setIdx] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const [fim, setFim] = useState(false);
  const [celebrar, setCelebrar] = useState(false);
  // Guarda as questões erradas para a tela final ("o que revisar").
  const [revisar, setRevisar] = useState<QuestaoJogo[]>([]);

  const q = questoes[idx];

  function responder(i: number) {
    if (escolha != null) return;
    setEscolha(i);
    if (i === q.correta) {
      setPontos((p) => p + 10);
      setCelebrar(true);
      somSucesso();
    } else {
      setRevisar((r) => (r.some((x) => x.id === q.id) ? r : [...r, q]));
      somQuaseLa();
    }
  }

  function proxima() {
    setEscolha(null);
    setCelebrar(false);
    if (idx + 1 >= questoes.length) {
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
                : "bg-gradient-to-br from-orange-400 to-orange-600"
            }`}
          >
            <Icon name={pct >= 70 ? "award" : "target"} size={28} className="text-white" />
          </motion.span>
          <div>
            <h3 className="text-lg font-bold">{titulo} — resultado</h3>
            <p className="mt-1 text-2xl font-extrabold">
              {pontos}/{questoes.length * 10} pts
              <span className={`ml-2 text-sm ${pct >= 70 ? "text-gold-500" : "text-orange-500"}`}>
                ({pct}%)
              </span>
            </p>
            <p className="mt-1 text-sm text-muted">
              {pct >= 70
                ? "Mandou bem! Continue praticando."
                : "Errou? Perfeito. Agora você sabe exatamente o que revisar."}
            </p>
          </div>
        </div>

        {revisar.length > 0 && (
          <div className="mt-6 rounded-2xl border border-orange-300/40 bg-orange-50/60 p-4 dark:border-orange-700/40 dark:bg-orange-900/15">
            <p className="flex items-center gap-2 text-sm font-bold text-orange-700 dark:text-orange-300">
              <Icon name="target" size={15} /> O que revisar ({revisar.length})
            </p>
            <ul className="mt-3 space-y-3">
              {revisar.map((item) => (
                <li key={item.id} className="text-sm">
                  <p className="font-semibold text-foreground">{item.pergunta}</p>
                  <p className="mt-0.5 text-muted leading-relaxed">
                    <span className="font-medium text-gold-600 dark:text-gold-400">
                      Resposta: {item.opcoes[item.correta]}.
                    </span>{" "}
                    {item.explicacao}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Botao
          className="mt-6 min-h-12 min-w-12"
          onClick={() => {
            setIdx(0);
            setPontos(0);
            setEscolha(null);
            setFim(false);
            setCelebrar(false);
            setRevisar([]);
          }}
          icone="repeat"
          tamanho="lg"
        >
          Treinar de novo
        </Botao>
      </Card>
    );
  }

  return (
    <Card>
      <Confetti ativo={celebrar} duracao={3000} />
      {/* Progresso */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-subtle">
            {titulo}
          </div>
          <span className="text-xs font-bold text-gold-600">
            {pontos} pts
          </span>
        </div>
        <IndicadorQuestoes total={questoes.length} atual={idx} />
        <BarraProgresso pct={((idx + 1) / questoes.length) * 100} height={3} />
      </div>

      {/* Pergunta */}
      <motion.div
        key={q.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="mt-4 text-base font-bold leading-snug">{q.pergunta}</h3>

        {/* Opções */}
        <div className="mt-4 space-y-3">
          {q.opcoes.map((op, i) => {
            let estilo = "border-border hover:border-gold-300 hover:bg-gold-50/20 dark:hover:bg-gold-900/10";
            if (escolha != null) {
              if (i === q.correta)
                estilo = "border-gold-400 bg-gold-50/60 dark:bg-gold-900/20 ring-1 ring-gold-400/30";
              else if (i === escolha)
                estilo = "border-orange-400 bg-orange-50/60 dark:bg-orange-900/20 ring-1 ring-orange-400/30";
            } else if (i === escolha) {
              estilo = "border-gold-400 bg-gold-50/60 dark:bg-gold-900/25";
            }
            return (
              <motion.button
                key={op}
                type="button"
                disabled={escolha != null}
                onClick={() => responder(i)}
                whileHover={escolha != null ? {} : { scale: 1.01 }}
                whileTap={escolha != null ? {} : { scale: 0.98 }}
                className={`flex min-h-[3rem] w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${estilo}`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold ${
                    escolha != null && i === q.correta
                      ? "border-transparent bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-sm"
                      : escolha != null && i === escolha && i !== q.correta
                        ? "border-transparent bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-sm"
                        : "border-border-strong text-subtle"
                  }`}
                >
                  {escolha != null && i === q.correta ? (
                    <Icon name="check" size={12} />
                  ) : escolha != null && i === escolha && i !== q.correta ? (
                    <Icon name="close" size={12} />
                  ) : (
                    OPCOES_LABEL[i]
                  )}
                </span>
                <span className="flex-1 break-words leading-snug">{op}</span>
                {escolha != null && (i === q.correta || i === escolha) && (
                  <motion.span
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="shrink-0"
                  >
                    <Icon
                      name={i === q.correta ? "check" : "close"}
                      size={20}
                      className={i === q.correta ? "text-gold-500" : "text-orange-500"}
                    />
                  </motion.span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Feedback */}
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
                    : "border-orange-400/25 bg-gradient-to-br from-orange-500/10 to-amber-400/5"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base ${
                      acertou ? "bg-gold-100 dark:bg-green-900/40" : "bg-orange-100 dark:bg-orange-900/40"
                    }`}
                  >
                    {acertou ? "✅" : "💡"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      {acertou ? "Resposta correta!" : "Quase lá! Veja o porquê:"}
                    </p>
                    <p className="mt-1 text-sm text-muted leading-relaxed">
                      {q.explicacao}
                    </p>
                  </div>
                </div>
              </div>

              <Botao
                className="w-full min-h-12"
                onClick={proxima}
                iconeFim="arrow"
                tamanho="lg"
              >
                {idx + 1 >= questoes.length ? "Ver resultado" : "Próxima questão"}
              </Botao>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Card>
  );
}
