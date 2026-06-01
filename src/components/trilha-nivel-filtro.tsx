"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Trilha } from "@/content/types";
import type { Nivel } from "@/content/types";
import { Card, NivelBadge } from "./ui";
import { Icon } from "./icons";
import { AulaStatusIcon } from "./progresso-cliente";

const niveis: { id: Nivel | "todos"; rotulo: string }[] = [
  { id: "todos", rotulo: "Todos" },
  { id: "basico", rotulo: "Básico" },
  { id: "intermediario", rotulo: "Intermediário" },
  { id: "avancado", rotulo: "Avançado" },
];

export function TrilhaNivelFiltro({ trilha }: { trilha: Trilha }) {
  const [nivel, setNivel] = useState<Nivel | "todos">("todos");

  const modulosFiltrados = useMemo(() => {
    if (nivel === "todos") return trilha.modulos;
    return trilha.modulos.map((m) => ({
      ...m,
      aulas: m.aulas.filter((a) => a.nivel === nivel),
    }));
  }, [trilha.modulos, nivel]);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar por nível">
        {niveis.map((n) => (
          <button
            key={n.id}
            type="button"
            role="tab"
            aria-selected={nivel === n.id}
            onClick={() => setNivel(n.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              nivel === n.id
                ? "gradient-brand text-white shadow-card"
                : "border border-border bg-surface text-muted hover:border-brand-300"
            }`}
          >
            {n.rotulo}
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-8">
        {modulosFiltrados.map((modulo, idx) => (
          <section key={modulo.id}>
            {modulo.aulas.length === 0 ? null : (
              <>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-sm font-bold text-brand-700 dark:bg-brand-900/40 dark:text-brand-200">
                    {idx + 1}
                  </span>
                  <div className="flex-1">
                    <Link href={`/trilhas/${trilha.id}/${modulo.id}`} className="group">
                      <h2 className="text-lg font-bold group-hover:text-brand-600">
                        {modulo.titulo}
                      </h2>
                    </Link>
                    <p className="text-sm text-muted">{modulo.descricao}</p>
                  </div>
                  <Link
                    href={`/prova/${trilha.id}/${modulo.id}`}
                    className="text-xs font-semibold text-brand-600"
                  >
                    Prova do módulo
                  </Link>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {modulo.aulas.map((aula) => (
                    <Link key={aula.id} href={`/aula/${trilha.id}/${aula.id}`}>
                      <Card className="flex items-center gap-3 p-4 transition-all hover:border-brand-400">
                        <AulaStatusIcon trilhaId={trilha.id} aulaId={aula.id} />
                        <div className="min-w-0 flex-1">
                          <div className="truncate font-semibold">{aula.titulo}</div>
                          <p className="mt-0.5 line-clamp-2 text-sm text-muted">{aula.resumo}</p>
                          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-subtle">
                            <NivelBadge nivel={aula.nivel} />
                            <span className="inline-flex items-center gap-1">
                              <Icon name="clock" size={12} /> {aula.duracaoMin} min
                            </span>
                            {aula.videoUrl && <span className="text-brand-600">Vídeo</span>}
                          </div>
                        </div>
                        <Icon name="arrow" size={16} className="flex-none text-subtle" />
                      </Card>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </section>
        ))}
      </div>
    </>
  );
}
