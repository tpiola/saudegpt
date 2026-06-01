"use client";

import { useMemo, useState } from "react";
import type { QuizQuestao } from "@/content/types";
import { Botao, Card } from "./ui";
import { Icon } from "./icons";

function embaralhar<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function ProvaModulo({
  tituloModulo,
  questoes,
  trilhaId,
  moduloId,
}: {
  tituloModulo: string;
  questoes: (QuizQuestao & { aulaTitulo: string })[];
  trilhaId: string;
  moduloId: string;
}) {
  const selecionadas = useMemo(
    () => embaralhar(questoes).slice(0, Math.min(12, questoes.length)),
    [questoes],
  );

  const [respostas, setRespostas] = useState<Record<number, number>>({});
  const [enviado, setEnviado] = useState(false);

  const acertos = selecionadas.reduce((n, q, i) => (respostas[i] === q.correta ? n + 1 : n), 0);
  const nota = selecionadas.length ? Math.round((acertos / selecionadas.length) * 100) : 0;

  if (!selecionadas.length) {
    return (
      <Card>
        <p className="text-muted">Este módulo ainda não tem questões de quiz nas aulas.</p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-lg font-bold">Prova do módulo: {tituloModulo}</h2>
        <p className="mt-1 text-sm text-muted">
          {selecionadas.length} questões embaralhadas do módulo. Nota mínima sugerida: 60%.
        </p>
      </Card>

      {selecionadas.map((q, i) => (
        <Card key={`${trilhaId}-${moduloId}-${i}`}>
          <p className="text-xs text-brand-600">{q.aulaTitulo}</p>
          <p className="mt-1 font-semibold">
            {i + 1}. {q.pergunta}
          </p>
          <div className="mt-3 space-y-2">
            {q.opcoes.map((op, j) => (
              <button
                key={op}
                type="button"
                disabled={enviado}
                onClick={() => setRespostas((r) => ({ ...r, [i]: j }))}
                className={`w-full rounded-xl border px-3 py-2 text-left text-sm ${
                  respostas[i] === j
                    ? "border-brand-400 bg-brand-50 dark:bg-brand-900/30"
                    : "border-border"
                }`}
              >
                {op}
              </button>
            ))}
          </div>
          {enviado && (
            <p className="mt-2 text-sm text-muted">
              <Icon name="sparkles" size={14} className="inline text-brand-600" /> {q.explicacao}
            </p>
          )}
        </Card>
      ))}

      {!enviado ? (
        <Botao
          onClick={() => setEnviado(true)}
          disabled={selecionadas.some((_, i) => respostas[i] == null)}
        >
          Enviar prova
        </Botao>
      ) : (
        <Card>
          <p className="text-xl font-bold">
            Nota: {nota}% ({acertos}/{selecionadas.length})
          </p>
          <p className="mt-2 text-sm text-muted">
            {nota >= 60
              ? "Parabéns! Revise os erros e siga para a próxima aula."
              : "Revise as aulas do módulo e tente novamente."}
          </p>
        </Card>
      )}
    </div>
  );
}
