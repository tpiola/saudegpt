"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* ─── Tipos ─── */
type AvatarSize = "sm" | "md" | "lg";

export interface ProfessorAvatarProps {
  /** sm=60px, md=80px, lg=120px (mobile-first: sm reduz em telas <640px) */
  size?: AvatarSize;
  /** Exibir nome + legenda abaixo do avatar */
  showName?: boolean;
  /** Classes CSS extras */
  className?: string;
  /** URL personalizada da imagem (usa default do projeto se omitida) */
  src?: string;
  /** Nome customizado */
  nome?: string;
  /** Legenda customizada */
  legenda?: string;
}

/* ─── Mapa de tamanhos ─── */
const SIZE_MAP: Record<AvatarSize, { avatar: number; desktop: number }> = {
  sm: { avatar: 48, desktop: 60 },
  md: { avatar: 64, desktop: 80 },
  lg: { avatar: 96, desktop: 120 },
};

/* ─── Dados padrão do professor ─── */
const PROFESSOR_NOME = "Prof. Thiago Piola";
const PROFESSOR_LEGENDA = "Farmacêutico CRF-SP 58.519";
const PROFESSOR_SRC = "/images/professor-avatar.svg";
const PROFESSOR_BIO =
  "Farmacêutico clínico e educador. Especialista em atenção farmacêutica, " +
  "com mais de 10 anos de experiência em farmácia comunitária e hospitalar. " +
  "Criador do método SaúdeGPT de formação de atendentes de farmácia.";

/* ═══════════════════════════════════════════════════
   ProfessorAvatar
   ═══════════════════════════════════════════════════ */
export default function ProfessorAvatar({
  size = "md",
  showName = true,
  className,
  src = PROFESSOR_SRC,
  nome = PROFESSOR_NOME,
  legenda = PROFESSOR_LEGENDA,
}: ProfessorAvatarProps) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const dims = SIZE_MAP[size];

  const toggleTooltip = useCallback(() => setTooltipOpen((v) => !v), []);
  const closeTooltip = useCallback(() => setTooltipOpen(false), []);

  return (
    <div
      className={cn("inline-flex flex-col items-center gap-1.5", className)}
    >
      {/* ── Avatar com glow animado ── */}
      <button
        type="button"
        onClick={toggleTooltip}
        onBlur={closeTooltip}
        aria-label={`${nome} — clique para ver biografia`}
        className={cn(
          "group relative block cursor-pointer rounded-full",
          "outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2",
          "transition-transform duration-300 hover:scale-105 active:scale-95",
        )}
        style={{ width: dims.avatar, height: dims.avatar }}
      >
        {/* Anel de glow animado (pulse) */}
        <span
          className={cn(
            "absolute inset-[-3px] rounded-full",
            "bg-gradient-to-br from-[#C9A84C] via-[#0057FF] to-[#C9A84C]",
            "animate-pulse opacity-40",
            "group-hover:opacity-70 transition-opacity duration-500",
          )}
          aria-hidden
        />

        {/* Glassmorphism interno */}
        <span className="absolute inset-[2px] rounded-full bg-black/10 backdrop-blur-[1px]" aria-hidden />

        {/* Imagem */}
        <Image
          src={src}
          alt={nome}
          width={dims.desktop}
          height={dims.desktop}
          className="relative rounded-full object-cover"
          priority
        />

        {/* Halo sutil no hover */}
        <span
          className={cn(
            "absolute inset-0 rounded-full opacity-0 transition-opacity duration-300",
            "bg-gradient-to-tr from-white/20 to-transparent",
            "group-hover:opacity-100",
          )}
          aria-hidden
        />
      </button>

      {/* ── Nome + legenda ── */}
      {showName && (
        <div className="text-center">
          <p className="text-[13px] font-bold leading-tight text-foreground sm:text-sm">
            {nome}
          </p>
          <p className="text-[10px] leading-tight text-subtle sm:text-[11px]">
            {legenda}
          </p>
        </div>
      )}

      {/* ── Tooltip com bio ── */}
      {tooltipOpen && (
        <div
          role="tooltip"
          className={cn(
            "absolute z-50 mt-2 w-64 rounded-xl border border-border bg-surface p-4",
            "shadow-lg backdrop-blur-md",
            "text-left text-sm leading-relaxed text-muted",
            "animate-in fade-in slide-in-from-top-2 duration-200",
          )}
          style={{ marginTop: dims.avatar + 16 }}
        >
          <p className="font-semibold text-foreground">{nome}</p>
          <p className="mt-1 text-xs text-subtle">{PROFESSOR_BIO}</p>
          <div className="mt-2 flex items-center gap-2 text-[11px] text-subtle">
            <span className="inline-flex items-center gap-1 rounded-full bg-gold-50 px-2 py-0.5 text-gold-700 dark:bg-gold-900/30 dark:text-gold-300">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              Disponível
            </span>
          </div>
        </div>
      )}

      {/* Overlay para fechar tooltip em mobile */}
      {tooltipOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeTooltip}
          aria-hidden
        />
      )}
    </div>
  );
}
