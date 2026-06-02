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

  function ativo(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border glass">
      <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1 sm:flex-initial" onClick={() => setAberto(false)}>
          <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--forest-600),var(--brand-600))] text-white shadow-md shadow-forest-500/25">
            <Icon name="shield" size={18} />
          </span>
          <span className="hidden flex-col leading-tight sm:flex min-w-0">
            <span className="truncate text-sm font-bold tracking-tight">Atendentes Premium</span>
            <span className="text-[11px] text-subtle">Formação em Farmácia</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navPrincipal.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                ativo(item.href)
                  ? "text-forest-600 bg-forest-50 dark:bg-forest-900/40"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <Botao href="/matriculas" tamanho="sm" className="hidden sm:inline-flex">
            Matricular
          </Botao>
          <button
            type="button"
            className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-border-strong text-muted lg:hidden"
            onClick={() => setAberto((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={aberto}
          >
            <Icon name={aberto ? "close" : "menu"} size={18} />
          </button>
        </div>
      </div>

      {/* Mobile menu com animação de altura */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          aberto ? "max-h-96 border-t border-border" : "max-h-0"
        }`}
      >
        <div className="bg-surface">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-3 py-3 sm:px-4">
            {navPrincipal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setAberto(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                  ativo(item.href)
                    ? "text-forest-600 bg-forest-50 dark:bg-forest-900/40"
                    : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Botao href="/matriculas" className="mt-2" onClick={() => setAberto(false)}>
              Fazer matrícula
            </Botao>
          </nav>
        </div>
      </div>
    </header>
  );
}
