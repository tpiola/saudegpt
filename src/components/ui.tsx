import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./icons";

type Variante = "primary" | "secondary" | "ghost" | "soft" | "glass" | "premium";
type Tamanho = "sm" | "md" | "lg" | "xl";

const variantes: Record<Variante, string> = {
  primary:
    "gradient-brand text-white shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:brightness-110 hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)]",
  secondary:
    "bg-surface text-foreground border border-border-strong hover:border-brand-400 hover:text-brand-600 hover:shadow-sm",
  ghost: "text-muted hover:text-foreground hover:bg-surface-2",
  soft: "bg-brand-50 text-brand-700 hover:bg-brand-100 dark:bg-brand-900/40 dark:text-brand-200 dark:hover:bg-brand-900/60",
  glass:
    "glass-heavy text-foreground hover:border-brand-300 hover:shadow-lg",
  premium:
    "bg-[linear-gradient(135deg,var(--brand-600),var(--brand-400)60%,var(--accent-cyan))] text-white shadow-[0_4px_24px_rgba(37,99,235,0.35)] hover:brightness-110 hover:shadow-[0_8px_36px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 active:translate-y-0",
};

const tamanhos: Record<Tamanho, string> = {
  sm: "text-xs px-3 py-1.5 gap-1.5 rounded-lg",
  md: "text-sm px-4 py-2.5 gap-2 rounded-xl",
  lg: "text-base px-6 py-3 gap-2.5 rounded-xl",
  xl: "text-base px-8 py-3.5 gap-3 rounded-xl font-bold tracking-tight",
};

export function botaoClasses(variante: Variante = "primary", tamanho: Tamanho = "md") {
  return `inline-flex items-center justify-center font-semibold transition-all duration-200 ${variantes[variante]} ${tamanhos[tamanho]}`;
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
  children, href, variante = "primary", tamanho = "md", icone, iconeFim,
  className = "", onClick, type = "button", disabled,
}: BotaoProps) {
  const cls = `${botaoClasses(variante, tamanho)} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;
  const interior = (
    <>
      {icone && <Icon name={icone} size={tamanho === "lg" || tamanho === "xl" ? 20 : 18} />}
      {children}
      {iconeFim && <Icon name={iconeFim} size={tamanho === "lg" || tamanho === "xl" ? 20 : 18} />}
    </>
  );
  if (href) return <Link href={href} className={cls} onClick={onClick}>{interior}</Link>;
  return <button type={type} className={cls} onClick={onClick} disabled={disabled}>{interior}</button>;
}

type CardVariante = "default" | "elevated" | "glass" | "glow" | "hero" | "flat";

export function Card({
  children, className = "", id, as: As = "div", variante = "default",
}: {
  children: ReactNode; className?: string; id?: string; as?: "div" | "section" | "article"; variante?: CardVariante;
}) {
  const map: Record<CardVariante, string> = {
    default: "card",
    elevated: "card-elevated",
    glass: "card-glass",
    glow: "card-glow",
    hero: "card-hero",
    flat: "bg-surface border border-border rounded-xl",
  };
  return <As id={id} className={`${map[variante]} ${className}`}>{children}</As>;
}

const tonsBadge: Record<string, string> = {
  brand: "bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200 border border-brand-200/50 dark:border-brand-800",
  cyan: "bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-200 border border-cyan-200/50",
  success: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200 border border-emerald-200/50",
  warning: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-200 border border-amber-200/50",
  danger: "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-200 border border-rose-200/50",
  neutral: "bg-surface-2 text-muted border border-border",
  premium: "badge-brand",
};

export function Etiqueta({ children, tom = "brand", className = "", }: {
  children: ReactNode; tom?: keyof typeof tonsBadge; className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${tonsBadge[tom]} ${className}`}>
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

export function BarraProgresso({ pct, className = "", height = 6 }: { pct: number; className?: string; height?: number }) {
  return (
    <div className={`w-full overflow-hidden rounded-full bg-surface-2 ${className}`} role="progressbar"
      aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full gradient-brand transition-[width] duration-700 ease-out rounded-full"
        style={{ width: `${Math.min(pct, 100)}%`, height }} />
    </div>
  );
}

export function AnelProgresso({ pct, tamanho = 92, legenda, stroke = 6 }: {
  pct: number; tamanho?: number; legenda?: string; stroke?: number;
}) {
  const r = (tamanho - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  const off = circ - (Math.min(pct, 100) / 100) * circ;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: tamanho, height: tamanho }}>
      <svg width={tamanho} height={tamanho} className="-rotate-90">
        <circle cx={tamanho / 2} cy={tamanho / 2} r={r} fill="none" strokeWidth={stroke} className="stroke-surface-2" />
        <circle cx={tamanho / 2} cy={tamanho / 2} r={r} fill="none" strokeWidth={stroke} strokeLinecap="round"
          stroke="url(#grad-anel)" strokeDasharray={circ} strokeDashoffset={off}
          className="transition-[stroke-dashoffset] duration-700" />
        <defs>
          <linearGradient id="grad-anel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#1fb6c9" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-lg font-bold">{Math.min(pct, 100)}%</span>
        {legenda && <span className="text-[10px] text-subtle">{legenda}</span>}
      </div>
    </div>
  );
}

export function TituloSecao({ sobre, titulo, descricao, icone, centralizado = false }: {
  sobre?: string; titulo: string; descricao?: string; icone?: IconName; centralizado?: boolean;
}) {
  return (
    <div className={`${centralizado ? "text-center mx-auto" : ""} max-w-2xl`}>
      {sobre && (
        <div className={`mb-3 flex items-center gap-2 ${centralizado ? "justify-center" : ""}`}>
          <span className="badge-premium badge-brand">
            {icone && <Icon name={icone} size={12} />}
            {sobre}
          </span>
        </div>
      )}
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{titulo}</h2>
      {descricao && <p className="mt-3 text-muted leading-relaxed">{descricao}</p>}
    </div>
  );
}

export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`skeleton ${className}`} aria-hidden />;
}

export function DividerGlow({ className = "" }: { className?: string }) {
  return <div className={`divider-glow ${className}`} />;
}

export function StatCard({ icone, valor, rotulo, className = "" }: {
  icone: IconName; valor: string; rotulo: string; className?: string;
}) {
  return (
    <div className={`stat-card ${className}`}>
      <div className="flex items-center gap-3">
        <span className="stat-icon">
          <Icon name={icone} size={20} />
        </span>
        <div>
          <div className="text-lg font-bold tracking-tight">{valor}</div>
          <div className="text-xs text-subtle font-medium">{rotulo}</div>
        </div>
      </div>
    </div>
  );
}
