"use client";

import { useState } from "react";
import { missoes } from "@/content/missoes";
import { idsMissoesDaSemana, semanaISO } from "@/lib/missao-semanal";
import { useProgresso } from "@/lib/progress";
import { Card, Etiqueta, NivelBadge } from "./ui";
import { Icon } from "./icons";

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
      <Card className="mb-6 border-l-4 border-l-green-400 bg-green-50/40 dark:bg-green-900/20">
        <div className="flex items-center gap-2 text-sm font-semibold text-green-700 dark:text-green-200">
          <Icon name="flame" size={16} /> Missão da semana {semanaISO()}
        </div>
        <p className="mt-1 text-sm text-muted">
          Três casos em destaque esta semana — complete-os para maximizar pontos no simulador.
        </p>
      </Card>

      <div className="sticky top-16 z-10 -mx-4 mb-6 flex items-center justify-between gap-3 border-b border-border glass px-4 py-3 sm:mx-0 sm:rounded-xl sm:border">
        <div className="flex items-center gap-2 text-sm">
          <Icon name="target" size={18} className="text-green-600" />
          <span className="font-semibold">
            {respondidas}/{missoes.length} missões
          </span>
        </div>
        <Etiqueta tom="green">
          <Icon name="sparkles" size={14} /> {pontosSessao} pts nesta sessão
        </Etiqueta>
      </div>

      <div className="space-y-5">
        {missoes.map((m) => {
          const respondida = respostas[m.id] != null;
          const semana = destaqueSemana.has(m.id);
          return (
            <Card key={m.id}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <Icon name="user" size={18} />
                </span>
                <h3 className="text-base font-bold">{m.titulo}</h3>
                <NivelBadge nivel={m.nivel} />
                <Etiqueta tom="neutral">{m.contexto}</Etiqueta>
                {semana && (
                  <Etiqueta tom="green">
                    <Icon name="flame" size={12} /> Semana
                  </Etiqueta>
                )}
              </div>

              <blockquote className="mt-4 rounded-xl border-l-4 border-l-green-400 bg-surface-2 px-4 py-3 text-sm italic text-muted">
                {m.cliente}
              </blockquote>

              <div className="mt-4 space-y-2">
                {m.opcoes.map((op, j) => {
                  const escolhida = respostas[m.id] === j;
                  const melhor = op.pontos === Math.max(...m.opcoes.map((o) => o.pontos));
                  let estilo = "border-border bg-surface hover:border-green-300";
                  if (respondida) {
                    if (melhor) estilo = "border-green-400 bg-green-50 dark:bg-green-900/20";
                    else if (escolhida) estilo = "border-orange-400 bg-orange-50 dark:bg-orange-900/20";
                    else estilo = "border-border opacity-70";
                  }
                  return (
                    <div key={j}>
                      <button
                        type="button"
                        disabled={respondida}
                        onClick={() => responder(m.id, j, op.pontos)}
                        className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition-all ${estilo}`}
                      >
                        <span className="flex items-center justify-between gap-3">
                          <span>{op.texto}</span>
                          {respondida && (
                            <span
                              className={`flex-none text-xs font-bold ${melhor ? "text-green-600" : "text-subtle"}`}
                            >
                              +{op.pontos}
                            </span>
                          )}
                        </span>
                      </button>
                      {respondida && escolhida && (
                        <p className="mt-1.5 px-1 text-sm text-muted">
                          <Icon name="sparkles" size={14} className="mr-1 inline text-green-600" />
                          {op.feedback}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
