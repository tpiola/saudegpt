"use client";

import { useProgresso } from "@/lib/progress";
import { Trofeu } from "./trophy";

interface ModuloProgressProps {
  trilhaId: string;
  moduloId: string;
  aulasIds: string[];
}

export function ModuloProgress({ trilhaId, moduloId, aulasIds }: ModuloProgressProps) {
  const { estaConcluida, carregado } = useProgresso();

  if (!carregado) return null;

  const todasCompletas = aulasIds.every((aulaId) => estaConcluida(trilhaId, aulaId));

  if (!todasCompletas) return null;

  return (
    <div className="my-8 rounded-2xl border border-amber-200/50 bg-gradient-to-br from-amber-50 to-white p-6 dark:from-amber-900/10 dark:to-navy-800 dark:border-amber-800/30">
      <Trofeu visivel={true} titulo="Módulo Completo!" />
    </div>
  );
}
