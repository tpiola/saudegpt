"use client";

import { useState } from "react";
import { missoes } from "@/content/missoes";
import { Card } from "./ui";
import { Icon } from "./icons";

// OSCE simplificado: reutiliza missões com rubrica explícita.
export function OsceSimulador() {
  const [idx, setIdx] = useState(0);
  const [notas, setNotas] = useState<number[]>([]);

  const caso = missoes[idx % missoes.length];
  const [escolha, setEscolha] = useState<number | null>(null);
  const [mostrar, setMostrar] = useState(false);

  const pontos = escolha != null ? caso.opcoes[escolha].pontos : 0;
  const max = Math.max(...caso.opcoes.map((o) => o.pontos));

  function avancar() {
    if (escolha == null) return;
    const nova = [...notas, pontos];
    setNotas(nova);
    setIdx((i) => i + 1);
    setEscolha(null);
    setMostrar(false);
  }

  if (notas.length >= 3) {
    const total = notas.reduce((a, b) => a + b, 0);
    const maxTotal = 3 * 10;
    const pct = Math.round((total / maxTotal) * 100);
    return (
      <Card>
        <h3 className="text-lg font-bold">Resultado OSCE</h3>
        <p className="mt-2 text-2xl font-bold text-green-600">{pct}%</p>
        <p className="text-sm text-muted">
          Triagem, segurança, ética e encaminhamento em 3 estações.
        </p>
        <button
          type="button"
          className="mt-4 text-sm font-semibold text-green-600"
          onClick={() => {
            setNotas([]);
            setIdx(0);
          }}
        >
          Reiniciar OSCE
        </button>
      </Card>
    );
  }

  return (
    <Card>
      <div className="text-sm text-subtle">Estação {notas.length + 1} de 3</div>
      <h3 className="mt-2 text-lg font-bold">{caso.titulo}</h3>
      <blockquote className="mt-3 rounded-xl bg-surface-2 p-4 text-sm italic text-muted">
        {caso.cliente}
      </blockquote>
      <div className="mt-4 space-y-2">
        {caso.opcoes.map((op, i) => (
          <button
            key={op.texto}
            type="button"
            disabled={mostrar}
            onClick={() => {
              setEscolha(i);
              setMostrar(true);
            }}
            className={`w-full rounded-xl border px-4 py-3 text-left text-sm ${
              mostrar && i === escolha
                ? op.pontos === max
                  ? "border-green-400 bg-green-50"
                  : "border-orange-300 bg-orange-50"
                : "border-border"
            }`}
          >
            {op.texto}
          </button>
        ))}
      </div>
      {mostrar && escolha != null && (
        <div className="mt-4">
          <p className="text-sm text-muted">
            <Icon name="sparkles" size={14} className="inline text-green-600" />{" "}
            {caso.opcoes[escolha].feedback} (+{pontos} pts)
          </p>
          <button
            type="button"
            onClick={avancar}
            className="mt-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-4 py-2.5 text-sm font-semibold text-white"
          >
            Próxima estação
          </button>
        </div>
      )}
    </Card>
  );
}
