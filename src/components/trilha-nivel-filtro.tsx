"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import type { Trilha, Nivel } from "@/content/types";
import { Card, NivelBadge } from "./ui";
import { Icon } from "./icons";
import { AulaStatusIcon } from "./progresso-cliente";

const niveis: { id: Nivel | "todos"; rotulo: string }[] = [
  { id: "todos", rotulo: "Todos" },
  { id: "basico", rotulo: "Básico" },
  { id: "intermediario", rotulo: "Intermediário" },
  { id: "avancado", rotulo: "Avançado" },
];

function RevealSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

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
      {/* Nível filter pills */}
      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar por nível">
        {niveis.map((n) => (
          <button
            key={n.id}
            type="button"
            role="tab"
            aria-selected={nivel === n.id}
            onClick={() => setNivel(n.id)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
              nivel === n.id
                ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/20 scale-105"
                : "border border-border bg-surface/80 backdrop-blur-sm text-muted hover:border-orange-400 hover:text-orange-500 hover:shadow-md"
            }`}
          >
            {n.rotulo}
          </button>
        ))}
      </div>

      {/* Module sections */}
      <div className="mt-10 space-y-16">
        {modulosFiltrados.map((modulo, idx) =>
          modulo.aulas.length === 0 ? null : (
            <RevealSection key={modulo.id}>
              <section className="relative overflow-hidden rounded-3xl">
                {/* Background image with overlay */}
                <div className="absolute inset-0">
                  {modulo.imagemHeroUrl ? (
                    <>
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-fixed scale-110"
                        style={{
                          backgroundImage: `url(${modulo.imagemHeroUrl})`,
                          filter: "brightness(0.35) saturate(0.8)",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/95 via-forest-900/60 to-forest-900/40" />
                      <div className="absolute inset-0 bg-gradient-to-r from-forest-900/40 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-90" />
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
                  {/* Module header */}
                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Module number */}
                    <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-2xl font-bold text-white shadow-xl">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <Link
                          href={`/trilhas/${trilha.id}/${modulo.id}`}
                          className="group"
                        >
                          <h2 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors drop-shadow-sm sm:text-3xl">
                            {modulo.titulo}
                          </h2>
                        </Link>
                        <Link
                          href={`/prova/${trilha.id}/${modulo.id}`}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur-sm hover:bg-white/20 hover:text-white transition-all"
                        >
                          <Icon name="target" size={12} />
                          Prova
                        </Link>
                      </div>
                      <p className="mt-2 max-w-2xl text-base text-white/70 leading-relaxed">
                        {modulo.descricao}
                      </p>

                      {/* Quick stats */}
                      <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
                        <span className="inline-flex items-center gap-1.5">
                          <Icon name="book" size={14} />
                          {modulo.aulas.length}{" "}
                          {modulo.aulas.length === 1 ? "aula" : "aulas"}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Icon name="clock" size={14} />
                          {modulo.aulas.reduce(
                            (s, a) => s + a.duracaoMin,
                            0
                          )}{" "}
                          min
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Icon name="star" size={14} />
                          {modulo.aulas.reduce((s, a) => s + a.xp, 0)} XP
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Aulas grid */}
                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {modulo.aulas.map((aula) => (
                      <Link key={aula.id} href={`/aula/${trilha.id}/${aula.id}`}>
                        <Card className="group/card h-full border-white/10 bg-white/5 backdrop-blur-md p-4 transition-all duration-300 hover:bg-white/15 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-1">
                          <div className="flex items-start gap-3">
                            <AulaStatusIcon trilhaId={trilha.id} aulaId={aula.id} />
                            <div className="min-w-0 flex-1">
                              <div className="truncate font-semibold text-white group-hover/card:text-orange-200 transition-colors">
                                {aula.titulo}
                              </div>
                              <p className="mt-1 line-clamp-2 text-sm text-white/60 group-hover/card:text-white/70">
                                {aula.resumo}
                              </p>
                              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-white/50">
                                <NivelBadge nivel={aula.nivel} />
                                <span className="inline-flex items-center gap-1">
                                  <Icon name="clock" size={10} />{" "}
                                  {aula.duracaoMin} min
                                </span>
                                {aula.videoUrl && (
                                  <span className="text-orange-400 font-medium">
                                    🎬 Vídeo
                                  </span>
                                )}
                              </div>
                            </div>
                            <Icon
                              name="arrow"
                              size={14}
                              className="flex-none text-white/30 group-hover/card:text-orange-400 transition-colors"
                            />
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            </RevealSection>
          )
        )}
      </div>
    </>
  );
}
