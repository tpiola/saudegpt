"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LogoSaudeGPT } from "./logo-saudegpt";

/** SVG inline do logotipo Rei das Vendas (coroa + R) */
function ReiDasVendasLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Rei das Vendas"
    >
      <defs>
        <linearGradient id="rg-h" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F2D38A" />
          <stop offset="35%" stopColor="#D6A84F" />
          <stop offset="75%" stopColor="#C4953A" />
          <stop offset="100%" stopColor="#9A7209" />
        </linearGradient>
        <linearGradient id="rg2-h" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF8E7" />
          <stop offset="50%" stopColor="#F2D38A" />
          <stop offset="100%" stopColor="#C4953A" />
        </linearGradient>
        <linearGradient id="textg-h" x1="0" y1="0" x2="320" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F2D38A" />
          <stop offset="40%" stopColor="#D6A84F" />
          <stop offset="100%" stopColor="#B88932" />
        </linearGradient>
      </defs>
      <g transform="translate(0,8)">
        <path d="M10 20 L22 6 L34 20" stroke="url(#rg-h)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="22" cy="10" r="2.5" fill="url(#rg2-h)" />
        <circle cx="12" cy="17" r="2" fill="url(#rg-h)" />
        <circle cx="32" cy="17" r="2" fill="url(#rg-h)" />
        <path d="M17 18 L17 46" stroke="url(#rg-h)" strokeWidth="4" strokeLinecap="round" />
        <path d="M17 18 Q32 15 33 26 Q34 37 17 36" stroke="url(#rg-h)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M27 34 L38 45" stroke="url(#rg-h)" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M17 18 L17 46" stroke="url(#rg2-h)" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" transform="translate(-2,0)" />
        <path d="M19 19 Q30 17 30 26" stroke="url(#rg2-h)" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.3" />
      </g>
      <line x1="48" y1="32" x2="54" y2="32" stroke="url(#rg-h)" strokeWidth="1.2" opacity="0.5" />
      <text x="62" y="39" fill="url(#textg-h)" fontFamily="'Playfair Display', 'Cormorant Garamond', Georgia, serif" fontSize="26" fontWeight="700" letterSpacing="0.18em">REI DAS VENDAS</text>
    </svg>
  );
}

const links = [
  { href: "/", label: "Home" },
  { href: "/trilhas", label: "Trilhas" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/suporte", label: "Suporte" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5">
            <LogoSaudeGPT variant="dark" size="sm" />
          </Link>

          {/* Divider */}
          <div className="hidden sm:block h-6 w-px bg-border/50" />

          {/* Sponsor: Rei das Vendas */}
          <a
            href="https://www.reidasvendas.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 rounded-lg border border-amber-500/15 bg-amber-500/[0.04] px-2.5 py-1 transition-all hover:border-amber-500/30 hover:bg-amber-500/[0.08] group"
            title="Patrocinador: Rei das Vendas"
          >
            <ReiDasVendasLogo className="h-5 w-auto" />
          </a>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-gold-500/10 text-gold-400"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg hover:bg-accent/50 transition-colors"
            onClick={() => setAberto(!aberto)}
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          >
            {aberto ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {aberto && (
        <div className="md:hidden border-t border-white/10 bg-background backdrop-blur-xl shadow-lg shadow-black/20">
          <div className="space-y-1 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setAberto(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-gold-500/10 text-gold-400"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Sponsor link mobile */}
            <a
              href="https://www.reidasvendas.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-amber-500/80 hover:text-amber-400 hover:bg-amber-500/5 transition-colors"
            >
              <ReiDasVendasLogo className="h-4 w-auto" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
