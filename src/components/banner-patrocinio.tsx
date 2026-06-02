import Link from "next/link";
import { Icon } from "./icons";

const PATROCINADORES = [
  {
    nome: "Thiago Piola",
    url: "https://www.thiagopiola.com.br",
    tagline: "Web design premium",
    cor: "from-forest-600 to-forest-500",
  },
  {
    nome: "Rei das Vendas",
    url: "https://www.reidasvendas.com.br",
    tagline: "Funil + CRM",
    cor: "from-terracota-500 to-terracota-600",
  },
];

export function BannerPatrocinio({ variante = "default" }: { variante?: "default" | "compacta" }) {
  if (variante === "compacta") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-3 rounded-xl border border-border bg-surface-2/50 px-4 py-3 text-xs">
        <span className="text-subtle">Patrocínio:</span>
        {PATROCINADORES.map((p) => (
          <Link
            key={p.nome}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-forest-600 transition-colors"
          >
            <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${p.cor}`} />
            {p.nome}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-surface to-surface-2">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--forest-500)/[0.04],transparent_50%,var(--terracota-500)/[0.03])] pointer-events-none" />
      <div className="relative px-6 py-5">
        <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-subtle">
          <Icon name="sparkles" size={12} />
          Plataforma patrocinada por
        </div>
        <div className="flex flex-wrap gap-4">
          {PATROCINADORES.map((p) => (
            <Link
              key={p.nome}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-1 items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-all hover:border-forest-300 hover:shadow-md min-w-[160px]"
            >
              <span className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br ${p.cor} text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform`}>
                {p.nome.charAt(0)}
              </span>
              <div>
                <div className="text-sm font-bold text-foreground group-hover:text-forest-600 transition-colors">
                  {p.nome}
                </div>
                <div className="text-[11px] text-subtle">{p.tagline}</div>
              </div>
              <Icon name="arrow" size={14} className="ml-auto flex-none text-subtle group-hover:text-forest-500 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
