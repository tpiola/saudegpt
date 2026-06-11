"use client";

import { useState } from "react";
import type { QuestaoJogo } from "@/content/jogos";
import { Confetti } from "./confetti";
import { Botao, Card } from "./ui";
import { Icon } from "./icons";

export function JogoQuiz({ titulo, questoes }: { titulo: string; questoes: QuestaoJogo[] }) {
  const [idx, setIdx] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const [fim, setFim] = useState(false);
  const [celebrar, setCelebrar] = useState(false);

  const q = questoes[idx];

  function responder(i: number) {
    if (escolha != null) return;
    setEscolha(i);
    if (i === q.correta) {
      setPontos((p) => p + 10);
      setCelebrar(true);
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
    return (
      <Card>
        <h3 className="text-lg font-bold">{titulo} — resultado</h3>
        <p className="mt-2 text-muted">
          Você fez {pontos} de {questoes.length * 10} pontos.
        </p>
        <Botao
          className="mt-4"
          onClick={() => {
            setIdx(0);
            setPontos(0);
            setEscolha(null);
            setFim(false);
            setCelebrar(false);
          }}
        >
          Jogar novamente
        </Botao>
      </Card>
    );
  }

  return (
    <Card>
      <Confetti ativo={celebrar} duracao={3000} />
      <div className="text-sm text-subtle">
        Questão {idx + 1} de {questoes.length}
      </div>
      <h3 className="mt-2 text-lg font-bold">{q.pergunta}</h3>
      <div className="mt-4 space-y-2">
        {q.opcoes.map((op, i) => {
          let estilo = "border-border hover:border-green-300";
          if (escolha != null) {
            if (i === q.correta) estilo = "border-green-400 bg-green-50 dark:bg-green-900/20";
            else if (i === escolha) estilo = "border-red-400 bg-red-50 dark:bg-red-900/20";
          }
          return (
            <button
              key={op}
              type="button"
              disabled={escolha != null}
              onClick={() => responder(i)}
              className={`w-full rounded-xl border px-4 py-3 text-left text-sm ${estilo}`}
            >
              {op}
            </button>
          );
        })}
      </div>
      {escolha != null && (
        <>
          {acertou ? (
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-green-700 dark:text-green-400">
              <span className="text-lg">🎉✅</span>
              <span>Resposta correta!</span>
            </p>
          ) : (
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-red-700 dark:text-red-400">
              <span className="text-lg">✖️</span>
              <span>Resposta incorreta</span>
            </p>
          )}
          <p className="mt-2 text-sm text-muted">
            <Icon name="sparkles" size={14} className="mr-1 inline text-green-600" />
            {q.explicacao}
          </p>
          <Botao className="mt-4" onClick={proxima} iconeFim="arrow">
            {idx + 1 >= questoes.length ? "Ver resultado" : "Próxima"}
          </Botao>
        </>
      )}
    </Card>
  );
}
