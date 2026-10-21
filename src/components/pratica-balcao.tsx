"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Check, RotateCcw } from "lucide-react";
import { casosBalcao } from "@/content/pratica-balcao";
const chave = "saudegpt-pratica-balcao-v1";
export function PraticaBalcao() {
  const [indice, setIndice] = useState(0),
    [resposta, setResposta] = useState<number | null>(null),
    [corrigido, setCorrigido] = useState(false),
    [feitos, setFeitos] = useState<string[]>([]);
  useEffect(() => {
    try {
      const v = JSON.parse(localStorage.getItem(chave) || "[]");
      if (Array.isArray(v))
        setFeitos(
          v.filter(
            (x) => typeof x === "string" && casosBalcao.some((c) => c.id === x),
          ),
        );
    } catch {}
  }, []);
  const caso = casosBalcao[indice];
  function corrigir() {
    setCorrigido(true);
    if (resposta === caso.correta) {
      const ids = [...new Set([...feitos, caso.id])];
      setFeitos(ids);
      try {
        localStorage.setItem(chave, JSON.stringify(ids));
      } catch {}
    }
  }
  function mudar(i: number) {
    setIndice(i);
    setResposta(null);
    setCorrigido(false);
  }
  return (
    <div className="eco-practice">
      <div className="eco-practice-progress">
        <span>
          {feitos.length} de {casosBalcao.length} situações resolvidas
        </span>
        <progress
          aria-label="Progresso dos exercícios"
          max={casosBalcao.length}
          value={feitos.length}
        />
      </div>
      <div
        className="eco-case-tabs"
        role="group"
        aria-label="Escolher exercício"
      >
        {casosBalcao.map((c, i) => (
          <button
            key={c.id}
            onClick={() => mudar(i)}
            aria-label={`Exercício ${i + 1}: ${c.titulo}`}
            aria-pressed={indice === i}
          >
            {feitos.includes(c.id) ? <Check size={16} /> : i + 1}
          </button>
        ))}
      </div>
      <div className="eco-case">
        <p className="eco-kicker">
          {caso.tema} · Situação {indice + 1}
        </p>
        <h2>{caso.titulo}</h2>
        <fieldset>
          <legend>{caso.cliente}</legend>
          <div className="eco-case-options">
            {caso.opcoes.map((op, i) => (
              <label
                key={op}
                className={`eco-case-option ${corrigido && i === caso.correta ? "is-correct" : ""} ${resposta === i ? "is-selected" : ""}`}
              >
                <input
                  type="radio"
                  name={`caso-${caso.id}`}
                  checked={resposta === i}
                  disabled={corrigido}
                  onChange={() => setResposta(i)}
                />
                <span>{op}</span>
              </label>
            ))}
          </div>
        </fieldset>
        {corrigido && (
          <div role="status" className="eco-case-feedback">
            <h3>
              {resposta === caso.correta
                ? "Boa decisão. Veja por quê."
                : "Vamos rever essa decisão."}
            </h3>
            <p>{caso.explicacao}</p>
            <p>
              <strong>Experimente esta fala:</strong> {caso.acao}
            </p>
          </div>
        )}
        <div className="eco-case-actions">
          {!corrigido ? (
            <button
              className="eco-button"
              onClick={corrigir}
              disabled={resposta === null}
            >
              Conferir resposta <ArrowRight size={18} />
            </button>
          ) : (
            <>
              <button
                className="eco-button"
                onClick={() => mudar((indice + 1) % casosBalcao.length)}
              >
                {indice === casosBalcao.length - 1
                  ? "Voltar ao primeiro"
                  : "Próxima situação"}{" "}
                <ArrowRight size={18} />
              </button>
              <button className="eco-text-link" onClick={() => mudar(indice)}>
                <RotateCcw size={16} /> Tentar novamente
              </button>
            </>
          )}
        </div>
      </div>
      <p className="eco-result">
        Seu progresso destes exercícios fica salvo neste navegador. Casos
        fictícios para treinamento; não insira dados de clientes.
      </p>
    </div>
  );
}
