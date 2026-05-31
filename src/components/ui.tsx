import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./icons";

type Variante = "primary" | "secondary" | "ghost" | "soft";
type Tamanho = "sm" | "md" | "lg";

const variantes: Record<Variante, string> = {
  primary:
    "gradient-brand text-white shadow-[0_8px_24px_rgba(29,78,216,0.35)] hover:brightness-110",
  secondary:
    "bg-surface text-foreground border border-border-strong hover:border-brand-400 hover:text-brand-600",
  ghost: "text-muted hover:text-brand-600 hover:bg-surface-2",
  soft: "bg-brand-50 text-brand-700 hover:bg-brand-100 dark:bg-brand-900/40 dark:text-brand-200",
};

const tamanhos: Record<Tamanho, string> = {
  sm: "text-sm px-3 py-1.5 gap-1.5",
  md: "text-sm px-4 py-2.5 gap-2",
  lg: "text-base px-6 py-3 gap-2.5",
};

export function botaoClasses(variante: Variante = "primary", tamanho: Tamanho = "md") {
  return `inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 ${variantes[variante]} ${tamanhos[tamanho]}`;
}

interface BotaoProps {
  children: ReactNode;
  href?: string;
  variante?: Variante;
  tamanho?: Tamanho;
  icone?: IconName;
  iconeFim?: IconName;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Botao({
  children,
  href,
  variante = "primary",
  tamanho = "md",
  icone,
  iconeFim,
  className = "",
  onClick,
  type = "button",
  disabled,
}: BotaoProps) {
  const cls = `${botaoClasses(variante, tamanho)} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;
  const interior = (
    <>
      {icone && <Icon name={icone} size={tamanho === "lg" ? 20 : 18} />}
      {children}
      {iconeFim && <Icon name={iconeFim} size={tamanho === "lg" ? 20 : 18} />}
    </>
  );
  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {interior}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {interior}
    </button>
  );
}

export function Card({
  children,
  className = "",
  id,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "section" | "article";
}) {
  return (
    <As id={id} className={`card p-6 ${className}`}>
      {children}
    </As>
  );
}

const tonsBadge: Record<string, string> = {
  brand: "bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200",
  cyan: "bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-200",
  success: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200",
  warning: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-200",
  danger: "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-200",
  neutral: "bg-surface-2 text-muted",
};

export function Etiqueta({
  children,
  tom = "brand",
  className = "",
}: {
  children: ReactNode;
  tom?: keyof typeof tonsBadge;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${tonsBadge[tom]} ${className}`}
    >
      {children}
    </span>
  );
}

const rotuloNivel: Record<string, { texto: string; tom: keyof typeof tonsBadge }> = {
  basico: { texto: "Básico", tom: "success" },
  intermediario: { texto: "Intermediário", tom: "brand" },
  avancado: { texto: "Avançado", tom: "warning" },
};

export function NivelBadge({ nivel }: { nivel: string }) {
  const r = rotuloNivel[nivel] ?? rotuloNivel.basico;
  return <Etiqueta tom={r.tom}>{r.texto}</Etiqueta>;
}

export function BarraProgresso({ pct, className = "" }: { pct: number; className?: string }) {
  return (
    <div
      className={`h-2 w-full overflow-hidden rounded-full bg-surface-2 ${className}`}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="h-full gradient-brand transition-[width] duration-500" style={{ width: `${pct}%` }} />
    </div>
  );
}

export function AnelProgresso({
  pct,
  tamanho = 92,
  legenda,
}: {
  pct: number;
  tamanho?: number;
  legenda?: string;
}) {
  const r = (tamanho - 12) / 2;
  const circ = 2 * Math.PI * r;
  const off = circ - (pct / 100) * circ;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: tamanho, height: tamanho }}>
      <svg width={tamanho} height={tamanho} className="-rotate-90">
        <circle cx={tamanho / 2} cy={tamanho / 2} r={r} fill="none" strokeWidth={8} className="stroke-surface-2" />
        <circle
          cx={tamanho / 2}
          cy={tamanho / 2}
          r={r}
          fill="none"
          strokeWidth={8}
          strokeLinecap="round"
          stroke="url(#grad-anel)"
          strokeDasharray={circ}
          strokeDashoffset={off}
          className="transition-[stroke-dashoffset] duration-700"
        />
        <defs>
          <linearGradient id="grad-anel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#1fb6c9" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-lg font-bold">{pct}%</span>
        {legenda && <span className="text-[10px] text-subtle">{legenda}</span>}
      </div>
    </div>
  );
}

export function TituloSecao({
  sobre,
  titulo,
  descricao,
  icone,
  centralizado = false,
}: {
  sobre?: string;
  titulo: string;
  descricao?: string;
  icone?: IconName;
  centralizado?: boolean;
}) {
  return (
    <div className={`${centralizado ? "text-center mx-auto" : ""} max-w-2xl`}>
      {sobre && (
        <div className={`mb-2 flex items-center gap-2 text-sm font-semibold text-brand-600 ${centralizado ? "justify-center" : ""}`}>
          {icone && <Icon name={icone} size={18} />}
          {sobre}
        </div>
      )}
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{titulo}</h2>
      {descricao && <p className="mt-3 text-muted">{descricao}</p>}
    </div>
  );
}
