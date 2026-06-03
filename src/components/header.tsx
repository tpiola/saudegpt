"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navPrincipal } from "@/lib/site";
import { Icon } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { Botao } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);

  // Fecha o menu ao navegar
  useEffect(() => {
    setAberto(false);
  }, [pathname]);

  // Detecta se está na landing page (raiz) para header transparente
  const isLanding = pathname === "/";

  function ativo(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isLanding
          ? "border-b border-white/5 bg-forest-500/80 backdrop-blur-xl"
          : "border-b border-border glass"
      }`}
    >
      <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1 sm:flex-initial" onClick={() => setAberto(false)}>
          <span className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full ${
            isLanding
              ? "bg-orange-500 text-white shadow-md shadow-orange-500/25"
              : "bg-orange-500 text-white shadow-md shadow-orange-500/25"
          }`}>
            <Icon name="shield" size={18} />
          </span>
          <span className="hidden flex-col leading-tight sm:flex min-w-0">
            <span className={`truncate text-sm font-bold tracking-tight ${isLanding ? "text-white/90" : ""}`}>Atendentes</span>
            <span className={`text-[11px] ${isLanding ? "text-white/40" : "text-subtle"}`}>Formação em Farmácia</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navPrincipal.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                ativo(item.href)
                  ? isLanding
                    ? "text-white bg-white/10"
                    : "text-orange-600 bg-orange-50 dark:bg-orange-900/20"
                  : isLanding
                    ? "text-white/60 hover:text-white/90 hover:bg-white/5"
                    : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <Botao href="/" tamanho="sm" variante="primary" className={`hidden sm:inline-flex ${isLanding ? "bg-white text-forest-700 hover:bg-white/90 shadow-md" : ""}`}>
            Acessar
          </Botao>
          <button
            type="button"
            className={`inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border ${
              isLanding ? "border-white/20 text-white/60" : "border-border-strong text-muted"
            } lg:hidden`}
            onClick={() => setAberto((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={aberto}
          >
            <Icon name={aberto ? "close" : "menu"} size={18} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          aberto ? "max-h-96 border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className={isLanding ? "bg-forest-600" : "bg-surface"}>
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-3 py-3 sm:px-4">
            {navPrincipal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setAberto(false)}
                className={`rounded-full px-3 py-2.5 text-sm font-medium ${
                  ativo(item.href)
                    ? isLanding
                      ? "text-white bg-white/10"
                      : "text-orange-600 bg-orange-50 dark:bg-orange-900/20"
                    : isLanding
                      ? "text-white/60"
                      : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Botao href="/" className={`mt-2 ${isLanding ? "bg-white text-forest-700 hover:bg-white/90" : ""}`} onClick={() => setAberto(false)}>
              Fazer matrícula
            </Botao>
          </nav>
        </div>
      </div>
    </header>
  );
}
