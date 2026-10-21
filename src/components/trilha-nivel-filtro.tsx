"use client";
import { useState } from "react";
import Link from "next/link";
import type { Trilha } from "@/content/types";
import { AulaStatusIcon } from "./progresso-cliente";
export function TrilhaNivelFiltro({ trilha }: { trilha: Trilha }) {
  const [nivel, setNivel] = useState("todos");
  const modulos = trilha.modulos
    .map((m) => ({
      ...m,
      aulas: m.aulas.filter((a) => nivel === "todos" || a.nivel === nivel),
    }))
    .filter((m) => m.aulas.length > 0);
  return (
    <section aria-label="Módulos da trilha">
      <div className="eco-filters" role="group" aria-label="Filtrar por nível">
        {[
          ["todos", "Todos os níveis"],
          ["basico", "Básico"],
          ["intermediario", "Intermediário"],
          ["avancado", "Avançado"],
        ].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setNivel(id)}
            aria-pressed={nivel === id}
          >
            {label}
          </button>
        ))}
      </div>
      {modulos.length === 0 && (
        <p className="eco-empty" role="status">
          Esta trilha não tem aulas neste nível. Escolha outro filtro.
        </p>
      )}
      <div className="eco-modules">
        {modulos.map((m, i) => (
          <article key={m.id} className="eco-module">
            <div className="eco-module-title">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <Link href={`/trilhas/${trilha.id}/${m.id}`}>
                  <h2>{m.titulo}</h2>
                </Link>
                <p>{m.descricao}</p>
              </div>
            </div>
            <ol>
              {m.aulas.map((a) => (
                <li key={a.id}>
                  <Link href={`/aula/${trilha.id}/${a.id}`}>
                    <AulaStatusIcon trilhaId={trilha.id} aulaId={a.id} />
                    <span>
                      {a.titulo}
                      <small>
                        {a.duracaoMin} min ·{" "}
                        {a.nivel === "basico"
                          ? "Básico"
                          : a.nivel === "avancado"
                            ? "Avançado"
                            : "Intermediário"}
                      </small>
                    </span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ol>
            <Link
              className="eco-text-link"
              href={`/prova/${trilha.id}/${m.id}`}
            >
              Praticar o módulo →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
