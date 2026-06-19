"use client";

import { useState } from "react";
import { useProgresso } from "@/lib/progress";
import { BarraProgresso } from "./ui";

const XP_POR_NIVEL = 250;

function formatarXp(xp: number): string {
  if (xp >= 1000) return `${(xp / 1000).toFixed(1)}k`;
  return String(xp);
}

export function GamificacaoRanking() {
  const { xp, nivel, carregado } = useProgresso();

  if (!carregado) return null;

  const xpNoNivel = xp % XP_POR_NIVEL;
  const xpParaProximo = XP_POR_NIVEL;
  const progressoPct = Math.round((xpNoNivel / XP_POR_NIVEL) * 100);

  return (
    <div className="space-y-6 mb-8">
      {/* 🎯 Status do Aluno */}
      <div className="ranking-status-card relative">
        <div className="flex items-center gap-4">
          <div className="ranking-status-level">{nivel}</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold">Lv. {nivel}</span>
              <span className="text-xs text-muted">
                — {formatarXp(xp)} / {nivel * XP_POR_NIVEL} XP
              </span>
            </div>
            <BarraProgresso pct={progressoPct} className="mt-2" height={8} />
            <p className="mt-1 text-xs text-subtle">
              Faltam {xpParaProximo - xpNoNivel} XP para o nível {nivel + 1}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
