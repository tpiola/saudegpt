"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { QuestaoJogo } from "@/content/jogos";
import { Confetti } from "@/components/confetti";
import { Botao, Card, BarraProgresso } from "@/components/ui";
import { Icon } from "@/components/icons";
import { somSucesso, somQuaseLa } from "@/lib/som";

interface FatoOuFakeProps {
  titulo: string;
  questoes: QuestaoJogo[];
}

export function FatoOuFake({ titulo, questoes }: FatoOuFakeProps) {
  const [idx, setIdx] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const [fim, setFim] = useState(false);
  const [celebrar, setCelebrar] = useState(false);
  const [acertos, setAcertos] = useState(0);

  const q = questoes[idx];

  function responder(i: number) {
    if (escolha != null) return;
    setEscolha(i);
    if (i === q.correta) {
      setPontos((p) => p + 10);
      setAcertos((a) => a + 1);
      setCelebrar(true);
      somSucesso();
    } else {
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
                ? "bg-gradient-to-r from-violet-500 to-purple-600"
                : "bg-gradient-to-br from-orange-400 to-orange-600"
            }`}
          >
            <Icon name={pct >= 70 ? "award" : "target"} size={28} className="text-white" />
          </motion.span>
          <div>
            <h3 className="text-lg font-bold">{titulo} — resultado</h3>
            <p className="mt-1 text-2xl font-extrabold">
              {acertos}/{questoes.length} corretas
              <span className={`ml-2 text-sm ${pct >= 70 ? "text-violet-500" : "text-orange-500"}`}>
                ({pct}%)
              </span>
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
          }}
          icone="repeat"
          tamanho="lg"
        >
          Jogar de novo
        </Botao>
      </Card>
    );
  }

  return (
    <Card>
      <Confetti ativo={celebrar} duracao={2000} />
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-subtle">{titulo}</div>
          <span className="text-xs font-bold text-violet-600">{pontos} pts</span>
        </div>
        <BarraProgresso pct={((idx + 1) / questoes.length) * 100} height={3} />
        <p className="text-xs text-muted">
          Questão {idx + 1} de {questoes.length}
        </p>
      </div>

      <motion.div
        key={q.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="mt-4 text-base font-bold leading-snug">{q.pergunta}</h3>

        <div className="mt-4 space-y-3">
          {q.opcoes.map((op, i) => {
            let estilo = "border-border hover:border-violet-300 hover:bg-violet-50/20 dark:hover:bg-violet-900/10";
            if (escolha != null) {
              if (i === q.correta)
                estilo = "border-violet-400 bg-violet-50/60 dark:bg-violet-900/20 ring-1 ring-violet-400/30";
              else if (i === escolha)
                estilo = "border-orange-400 bg-orange-50/60 dark:bg-orange-900/20 ring-1 ring-orange-400/30";
            }
            return (
              <motion.button
                key={op}
                type="button"
                disabled={escolha != null}
                onClick={() => responder(i)}
                whileHover={escolha != null ? {} : { scale: 1.01 }}
                whileTap={escolha != null ? {} : { scale: 0.98 }}
                className={`flex min-h-[3.5rem] w-full items-center justify-center gap-3 rounded-xl border px-4 py-3 text-center text-sm font-semibold transition-all ${estilo}`}
              >
                {escolha != null && i === q.correta && (
                  <Icon name="check" size={18} className="text-violet-500" />
                )}
                {escolha != null && i === escolha && i !== q.correta && (
                  <Icon name="close" size={18} className="text-orange-500" />
                )}
                <span className="flex-1">{op}</span>
              </motion.button>
            );
          })}
        </div>

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
                    ? "border-violet-400/20 bg-gradient-to-br from-violet-500/10 to-violet-400/5"
                    : "border-orange-400/25 bg-gradient-to-br from-orange-500/10 to-amber-400/5"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base ${
                      acertou ? "bg-violet-100 dark:bg-violet-900/40" : "bg-orange-100 dark:bg-orange-900/40"
                    }`}
                  >
                    {acertou ? "✅" : "💡"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      {acertou ? "FATO! Você acertou!" : "FAKE! Veja o correto:"}
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
                {idx + 1 >= questoes.length ? "Ver resultado" : "Próxima questão"}
              </Botao>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Card>
  );
}
