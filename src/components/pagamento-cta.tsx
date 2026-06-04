"use client";

import { useState, useCallback } from "react";
import { PlanosModal } from "./planos-modal";

/**
 * Botão CTA que abre o modal de planos de pagamento.
 * Pode ser usado em qualquer lugar com onClick ou como link.
 */
export function PagamentoCta({
  children,
  className = "",
  variante = "primary",
}: {
  children?: React.ReactNode;
  className?: string;
  variante?: "primary" | "secondary" | "outline";
}) {
  const [aberto, setAberto] = useState(false);

  const abrir = useCallback(() => setAberto(true), []);
  const fechar = useCallback(() => setAberto(false), []);

  const baseCls =
    "inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]";

  const variantes = {
    primary:
      "bg-orange-500 text-white shadow-[0_8px_40px_rgba(214,110,15,0.35)] hover:bg-orange-600 hover:shadow-[0_12px_50px_rgba(214,110,15,0.5)]",
    secondary:
      "bg-green-600 text-white shadow-[0_8px_40px_rgba(76,161,93,0.35)] hover:bg-green-700 hover:shadow-[0_12px_50px_rgba(76,161,93,0.5)]",
    outline:
      "border-2 border-white/20 bg-white/5 text-white backdrop-blur-sm hover:border-orange-400/40 hover:bg-orange-500/10 hover:text-orange-300",
  };

  return (
    <>
      <button
        type="button"
        onClick={abrir}
        className={`${baseCls} ${variantes[variante]} ${className}`}
      >
        {children ?? "Ver Planos"}
      </button>

      <PlanosModal aberto={aberto} onFechar={fechar} />
    </>
  );
}
