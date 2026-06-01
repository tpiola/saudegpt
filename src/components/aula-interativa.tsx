"use client";

import { useEffect, useState } from "react";
import type { QuizQuestao } from "@/content/types";
import { useProgresso } from "@/lib/progress";
import { Botao, Card, Etiqueta } from "./ui";
import { Icon } from "./icons";

interface ProximaInfo {
  trilhaId: string;
  aulaId: string;
  titulo: string;
}

interface Props {
  trilhaId: string;
  aulaId: string;
  xp: number;
  quiz: QuizQuestao[];
  proxima: ProximaInfo | null;
}

export function AulaInterativa({ trilhaId, aulaId, xp, quiz, proxima }: Props) {
  const {
    registrarVisita,
    concluirAula,
    estaConcluida,
    alternarFavorita,
    ehFavorita,
    carregado,
    adicionarTempoEstudo,
    registrarTentativaQuiz,
  } = useProgresso();

  const [respostas, setRespostas] = useState<Record<number, number>>({});
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    registrarVisita(trilhaId, aulaId);
  }, [registrarVisita, trilhaId, aulaId]);

  useEffect(() => {
    const inicio = Date.now();
    return () => {
      const segundos = Math.round((Date.now() - inicio) / 1000);
      if (segundos >= 10) adicionarTempoEstudo(segundos);
    };
  }, [adicionarTempoEstudo, trilhaId, aulaId]);

  // Derivado do contexto: ao concluir, o provider atualiza e isto reflete sozinho.
  const concluida = carregado && estaConcluida(trilhaId, aulaId);

  const acertos = quiz.reduce((n, q, i) => (respostas[i] === q.correta ? n + 1 : n), 0);
  const nota = quiz.length ? Math.round((acertos / quiz.length) * 100) : 100;
  const todasRespondidas = quiz.every((_, i) => respostas[i] != null);

  function enviar() {
    registrarTentativaQuiz(trilhaId, aulaId);
    setEnviado(true);
  }

  function concluir() {
    concluirAula(trilhaId, aulaId, xp, quiz.length ? nota : undefined);
  }

  const favorita = carregado && ehFavorita(trilhaId, aulaId);

  return (
    <div className="space-y-6">
      {/* Quiz */}
      {quiz.length > 0 && (
        <Card id="quiz" className="scroll-mt-24">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-900/40">
              <Icon name="target" size={18} />
            </span>
            <h2 className="text-lg font-bold">Quiz rápido</h2>
          </div>

          <div className="mt-5 space-y-6">
            {quiz.map((q, i) => (
              <fieldset key={i} className="space-y-2">
                <legend className="font-semibold">
                  {i + 1}. {q.pergunta}
                </legend>
                <div className="grid gap-2">
                  {q.opcoes.map((op, j) => {
                    const selecionada = respostas[i] === j;
                    const correta = j === q.correta;
                    let estilo = "border-border bg-surface hover:border-brand-300";
                    if (enviado) {
                      if (correta)
                        estilo = "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20";
                      else if (selecionada)
                        estilo = "border-rose-400 bg-rose-50 dark:bg-rose-900/20";
                      else estilo = "border-border opacity-70";
                    } else if (selecionada) {
                      estilo = "border-brand-400 bg-brand-50 dark:bg-brand-900/30";
                    }
                    return (
                      <button
                        key={j}
                        type="button"
                        disabled={enviado}
                        onClick={() => setRespostas((r) => ({ ...r, [i]: j }))}
                        className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${estilo}`}
                      >
                        <span
                          className={`flex h-5 w-5 flex-none items-center justify-center rounded-full border text-[11px] font-bold ${
                            selecionada || (enviado && correta)
                              ? "border-transparent gradient-brand text-white"
                              : "border-border-strong text-subtle"
                          }`}
                        >
                          {String.fromCharCode(65 + j)}
                        </span>
                        {op}
                      </button>
                    );
                  })}
                </div>
                {enviado && (
                  <p className="rounded-lg bg-surface-2 px-3 py-2 text-sm text-muted">
                    <Icon name="sparkles" size={14} className="mr-1 inline text-brand-600" />
                    {q.explicacao}
                  </p>
                )}
              </fieldset>
            ))}
          </div>

          {!enviado ? (
            <Botao className="mt-6" onClick={enviar} disabled={!todasRespondidas} iconeFim="arrow">
              Corrigir quiz
            </Botao>
          ) : (
            <div className="mt-6 flex items-center gap-3 rounded-xl bg-surface-2 p-4">
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl text-white ${
                  nota >= 60 ? "gradient-brand" : "bg-rose-500"
                }`}
              >
                <Icon name={nota >= 60 ? "award" : "target"} size={22} />
              </span>
              <div>
                <div className="font-bold">
                  Você acertou {acertos} de {quiz.length} ({nota}%)
                </div>
                <div className="text-sm text-subtle">
                  {nota >= 60
                    ? "Muito bem! Pode concluir a aula."
                    : "Revise os pontos acima e tente de novo."}
                </div>
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Ações: concluir / favoritar / continuar */}
      <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          {concluida ? (
            <Etiqueta tom="success">
              <Icon name="check" size={14} /> Aula concluída · +{xp} XP
            </Etiqueta>
          ) : (
            <span className="text-sm text-muted">
              Conclua para ganhar <strong className="text-brand-600">+{xp} XP</strong>
            </span>
          )}
          <button
            type="button"
            onClick={() => alternarFavorita(trilhaId, aulaId)}
            aria-pressed={favorita}
            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors ${
              favorita ? "text-rose-500" : "text-subtle hover:text-foreground"
            }`}
          >
            <Icon name="heart" size={16} /> {favorita ? "Favorita" : "Favoritar"}
          </button>
        </div>

        <div className="flex flex-wrap gap-3">
          {!concluida && (
            <Botao
              onClick={concluir}
              icone="check"
              variante={quiz.length && !enviado ? "secondary" : "primary"}
            >
              Marcar como concluída
            </Botao>
          )}
          {proxima ? (
            <Botao
              href={`/aula/${proxima.trilhaId}/${proxima.aulaId}`}
              variante={concluida ? "primary" : "secondary"}
              iconeFim="arrow"
            >
              Próxima aula
            </Botao>
          ) : (
            <Botao href="/dashboard" variante="secondary" iconeFim="arrow">
              Ir para o painel
            </Botao>
          )}
        </div>
      </Card>
    </div>
  );
}
