"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { missoes } from "@/content/missoes";
import { idsMissoesDaSemana, semanaISO } from "@/lib/missao-semanal";
import { useProgresso } from "@/lib/progress";
import { Card, Etiqueta, NivelBadge, BarraProgresso } from "./ui";
import { Icon } from "./icons";

// ── Animação das missões ──
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function Simulador() {
  const { adicionarPontosMissao } = useProgresso();
  const [respostas, setRespostas] = useState<Record<string, number>>({});
  const [pontosSessao, setPontosSessao] = useState(0);
  const destaqueSemana = idsMissoesDaSemana();

  function responder(missaoId: string, opcaoIdx: number, pontos: number) {
    if (respostas[missaoId] != null) return; // já respondida
    setRespostas((r) => ({ ...r, [missaoId]: opcaoIdx }));
    setPontosSessao((p) => p + pontos);
    adicionarPontosMissao(pontos);
  }

  const respondidas = Object.keys(respostas).length;

  return (
    <div>
      {/* Banner da semana */}
      <Card className="mb-6 border-l-4 border-l-green-400 bg-green-50/40 dark:bg-green-900/20">
        <div className="flex items-center gap-2 text-sm font-semibold text-green-700 dark:text-green-200">
          <Icon name="flame" size={16} /> Missão da semana {semanaISO()}
        </div>
        <p className="mt-1 text-sm text-muted">
          Três casos em destaque esta semana — complete-os para maximizar pontos no simulador.
        </p>
      </Card>

      {/* Header sticky com progresso */}
      <div className="sticky top-16 z-10 -mx-4 mb-6 flex flex-col gap-2 border-b border-border glass px-4 py-3 sm:mx-0 sm:rounded-xl sm:border">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm">
            <Icon name="target" size={18} className="text-green-600" />
            <span className="font-semibold">
              {respondidas}/{missoes.length} missões
            </span>
          </div>
          <Etiqueta tom="green" className="shrink-0">
            <Icon name="sparkles" size={14} /> {pontosSessao} pts
          </Etiqueta>
        </div>
        {/* Barra de progresso linear */}
        <BarraProgresso
          pct={(respondidas / missoes.length) * 100}
          height={4}
        />
      </div>

      {/* Lista de missões */}
      <motion.div
        className="space-y-5"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
          },
        }}
      >
        {missoes.map((m) => {
          const respondida = respostas[m.id] != null;
          const semana = destaqueSemana.has(m.id);
          return (
            <motion.div key={m.id} variants={itemVariants} layout>
              <Card>
                {/* Cabeçalho da missão */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white shadow-sm">
                    <Icon name="user" size={20} />
                  </span>
                  <h3 className="text-base font-bold">{m.titulo}</h3>
                  <NivelBadge nivel={m.nivel} />
                  <Etiqueta tom="neutral">{m.contexto}</Etiqueta>
                  {semana && (
                    <Etiqueta tom="green">
                      <Icon name="flame" size={12} /> Semana
                    </Etiqueta>
                  )}
                  {respondida && (
                    <span className="text-green-500">
                      <Icon name="check" size={16} />
                    </span>
                  )}
                </div>

                {/* Citação do cliente */}
                <blockquote className="mt-4 rounded-xl border-l-4 border-l-green-400 bg-surface-2 px-4 py-3 text-sm italic text-muted">
                  {m.cliente}
                </blockquote>

                {/* Opções */}
                <div className="mt-4 space-y-3">
                  {m.opcoes.map((op, j) => {
                    const escolhida = respostas[m.id] === j;
                    const melhor =
                      op.pontos ===
                      Math.max(...m.opcoes.map((o) => o.pontos));
                    let estilo =
                      "border-border bg-surface hover:border-green-300 hover:bg-green-50/20 dark:hover:bg-green-900/10";
                    if (respondida) {
                      if (melhor)
                        estilo =
                          "border-green-400 bg-green-50/60 dark:bg-green-900/20 ring-1 ring-green-400/30";
                      else if (escolhida)
                        estilo =
                          "border-orange-400 bg-orange-50/60 dark:bg-orange-900/20 ring-1 ring-orange-400/30";
                      else estilo = "border-border opacity-60";
                    }

                    return (
                      <motion.div
                        key={j}
                        initial={respondida ? { opacity: 0 } : {}}
                        animate={{ opacity: 1 }}
                      >
                        <button
                          type="button"
                          disabled={respondida}
                          onClick={() => responder(m.id, j, op.pontos)}
                          className={`flex min-h-[3rem] w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${estilo}`}
                        >
                          {/* Círculo indicador */}
                          <span
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold ${
                              respondida && melhor
                                ? "border-transparent bg-gradient-to-r from-green-500 to-green-600 text-white shadow-sm"
                                : respondida && escolhida && !melhor
                                  ? "border-transparent bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-sm"
                                  : escolhida
                                    ? "border-green-400 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                                    : "border-border-strong text-subtle"
                            }`}
                          >
                            {respondida && melhor ? (
                              <Icon name="check" size={12} />
                            ) : respondida && escolhida && !melhor ? (
                              <Icon name="close" size={12} />
                            ) : (
                              OPCOES_LABEL[j]
                            )}
                          </span>

                          {/* Texto */}
                          <span className="flex-1 break-words leading-snug">
                            {op.texto}
                          </span>

                          {/* Pontos */}
                          {respondida && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className={`shrink-0 text-xs font-bold ${
                                melhor
                                  ? "text-green-600"
                                  : "text-subtle"
                              }`}
                            >
                              +{op.pontos}
                            </motion.span>
                          )}
                        </button>

                        {/* Feedback ao escolher */}
                        <AnimatePresence>
                          {respondida && escolhida && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-2 rounded-xl border border-green-400/20 bg-gradient-to-br from-green-500/10 to-emerald-400/5 px-4 py-3">
                                <div className="flex items-start gap-2">
                                  <span className="mt-0.5 shrink-0 text-base">
                                    💡
                                  </span>
                                  <p className="text-sm text-muted leading-relaxed">
                                    {op.feedback}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

const OPCOES_LABEL = ["A", "B", "C", "D", "E"];
