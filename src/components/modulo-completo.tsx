"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icons";
import { Confete } from "./confete";

interface Props {
  moduloTitulo: string;
  xpGanho: number;
  notaMedia: number;
  ativo: boolean;
  onFechar: () => void;
}

export function ModuloCompleto({ moduloTitulo, xpGanho, notaMedia, ativo, onFechar }: Props) {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    if (ativo) {
      setMostrar(true);
      const t = setTimeout(() => setMostrar(false), 6000);
      return () => clearTimeout(t);
    }
  }, [ativo]);

  if (!mostrar) return null;

  return (
    <>
      <Confete ativo={true} origemX={0.5} origemY={0.3} />
      <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-sm px-4">
        <div className="celebrate-modal relative mx-auto max-w-md w-full overflow-hidden rounded-3xl border border-green-300/30 dark:border-green-700/40 bg-gradient-to-br from-forest-800 via-forest-700 to-forest-800 p-8 text-center shadow-2xl shadow-green-500/20">
          {/* Orbs decorativos */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full orb bg-green-500/20" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full orb bg-green-500/15" />

          <div className="relative">
            {/* Ícone de troféu com pulse */}
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-600 shadow-xl shadow-green-500/30 celebrate-pulse">
              <Icon name="award" size={36} className="text-white" />
            </div>

            <h2 className="text-2xl font-extrabold text-white">
              Módulo completo! 🎉
            </h2>
            <p className="mt-2 text-green-300 font-semibold">
              {moduloTitulo}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/10 px-4 py-3">
                <div className="text-2xl font-bold text-green-300">+{xpGanho}</div>
                <div className="text-xs text-slate-400">XP ganhos</div>
              </div>
              <div className="rounded-xl bg-white/10 px-4 py-3">
                <div className={`text-2xl font-bold ${notaMedia >= 80 ? "text-green-300" : "text-orange-300"}`}>
                  {notaMedia}%
                </div>
                <div className="text-xs text-slate-400">Nota média</div>
              </div>
            </div>

            {notaMedia >= 80 && (
              <p className="mt-4 text-sm text-green-200/80">
                ★ Desempenho excelente! Você está dominando o conteúdo.
              </p>
            )}

            <button
              type="button"
              onClick={() => { setMostrar(false); onFechar(); }}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/15 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/25"
            >
              Continuar estudando
              <Icon name="arrow" size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
