"use client";

import { useEffect, useState, useRef } from "react";
import type { QuizQuestao } from "@/content/types";
import { useProgresso } from "@/lib/progress";
import { Botao, Card, Etiqueta } from "./ui";
import { Icon } from "./icons";
import { CelebracaoXp } from "./celebracao-xp";
import { CelebracaoModal } from "./celebracao-modal";
import { Confetti } from "./confetti";

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
    nivel,
    xpProximoNivel,
  } = useProgresso();

  const [respostas, setRespostas] = useState<Record<number, number>>({});
  const [enviado, setEnviado] = useState(false);
  const [celebrar, setCelebrar] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const nivelAnterior = useRef<number | null>(null);

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
    const nivelAntes = nivel;
    concluirAula(trilhaId, aulaId, xp, quiz.length ? nota : undefined);
    setCelebrar(true);
    window.setTimeout(() => setCelebrar(false), 3000);
    // Abre o modal de celebração com confete + frases
    setMostrarModal(true);
  }

  const favorita = carregado && ehFavorita(trilhaId, aulaId);

  // Detecta mudança de nível (level-up)
  useEffect(() => {
    if (nivelAnterior.current != null && nivel > nivelAnterior.current) {
      setMostrarModal(true);
    }
    if (nivelAnterior.current == null) {
      nivelAnterior.current = nivel;
    }
  }, [nivel]);

  useEffect(() => {
    if (mostrarModal) {
      nivelAnterior.current = nivel;
    }
  }, [mostrarModal, nivel]);

  return (
    <div className="space-y-6">
      <Confetti ativo={celebrar} duracao={3000} />
      <CelebracaoXp xp={xp} ativo={celebrar} />
      <CelebracaoModal
        aberto={mostrarModal}
        onClose={() => setMostrarModal(false)}
        xpGanho={xp}
        duracaoConfete={4000}
      />
      {/* Quiz */}
      {quiz.length > 0 && (
        <Card id="quiz" className="scroll-mt-24">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-600 dark:bg-green-900/40">
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
                    let estilo = "border-border bg-surface hover:border-green-300";
                    if (enviado) {
                      if (correta)
                        estilo = "border-green-400 bg-green-50 dark:bg-green-900/20";
                      else if (selecionada)
                        estilo = "border-orange-400 bg-orange-50 dark:bg-orange-900/20";
                      else estilo = "border-border opacity-70";
                    } else if (selecionada) {
                      estilo = "border-green-400 bg-green-50 dark:bg-green-900/30";
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
                              ? "border-transparent bg-gradient-to-r from-green-500 to-green-600 text-white"
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
                    <Icon name="sparkles" size={14} className="mr-1 inline text-green-600" />
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
                  nota >= 60 ? "bg-gradient-to-r from-green-500 to-green-600" : "bg-orange-500"
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
      <Card className="flex flex-col gap-4 sm:gap-6 md:gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          {concluida ? (
            <Etiqueta tom="green">
              <Icon name="check" size={14} /> Aula concluída · +{xp} XP
            </Etiqueta>
          ) : (
            <span className="text-sm text-muted">
              Conclua para ganhar <strong className="text-green-600">+{xp} XP</strong>
            </span>
          )}
          <button
            type="button"
            onClick={() => alternarFavorita(trilhaId, aulaId)}
            aria-pressed={favorita}
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm font-medium transition-colors ${
              favorita ? "text-orange-500" : "text-subtle hover:text-foreground"
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
            <Botao href="/" variante="secondary" iconeFim="arrow">
              Ir para o painel
            </Botao>
          )}
        </div>
      </Card>
    </div>
  );
}
