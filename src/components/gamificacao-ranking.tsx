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

      {/* 🏅 Ranking — Em breve */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">🏅</span>
          <h2 className="font-bold text-base">Ranking de Alunos</h2>
        </div>

        <div className="card-gradient-mint p-8 sm:p-10 text-center">
          <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-400/20 to-gold-500/10">
            <span className="text-4xl">🚀</span>
            <div className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-500 text-[10px] font-bold text-white shadow-lg">
              NOVO
            </div>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">
            Ranking em breve!
          </h3>
          <p className="mx-auto max-w-md text-sm text-muted leading-relaxed">
            Estamos preparando um ranking de estudos com privacidade total, 
            gamificação e recompensas para quem se dedica. 
            Ative as notificações para saber quando lançar.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-100 px-3 py-1 text-xs font-medium text-gold-700 dark:bg-gold-900/30 dark:text-gold-300">
              🔒 Privacidade total
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              🏆 Gamificação
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
              ⭐ Recompensas
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
