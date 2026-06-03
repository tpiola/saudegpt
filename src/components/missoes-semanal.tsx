"use client";

import { useProgresso } from "@/lib/progress";
import { Card, BarraProgresso, Etiqueta } from "./ui";
import { Icon } from "./icons";
import { semanaISO, idsMissoesDaSemana } from "@/lib/missao-semanal";
import { missoes } from "@/content/missoes";

export function MissoesSemanal() {
  const prog = useProgresso();
  const semana = semanaISO();
  const destaques = idsMissoesDaSemana();
  const missoesDaSemana = missoes.filter((m) => destaques.has(m.id));
  const totalSemana = missoesDaSemana.length;

  return (
    <div className="mt-6">
      <Card className="border-l-4 border-l-green-400 bg-green-50/40 dark:bg-green-900/20 overflow-hidden">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white">
              <Icon name="flame" size={20} />
            </span>
            <div>
              <h3 className="text-sm font-bold text-green-700 dark:text-green-300">
                Missão da semana
              </h3>
              <p className="text-xs text-muted">
                Semana {semana} · {totalSemana} {totalSemana === 1 ? "missão em destaque" : "missões em destaque"}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <Etiqueta tom="green">
                  <Icon name="sparkles" size={10} /> +10 pts bônus cada
                </Etiqueta>
                <span className="text-xs text-subtle">
                  Total de pontos em missões: {prog.missoesPontos}
                </span>
              </div>
              <div className="mt-2 max-w-[200px]">
                <div className="flex items-center justify-between text-[10px] text-muted mb-1">
                  <span>Progresso semanal</span>
                  <span>{missoesDaSemana.length > 0 ? "0/3" : "—"}</span>
                </div>
                <BarraProgresso pct={0} height={5} />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {missoesDaSemana.slice(0, 3).map((m) => (
              <span
                key={m.id}
                className="inline-flex items-center gap-1 rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 py-1 text-[10px] font-medium text-green-700 dark:text-green-300"
              >
                {m.titulo.slice(0, 18)}{m.titulo.length > 18 ? "…" : ""}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
