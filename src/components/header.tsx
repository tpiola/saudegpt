"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navPrincipal } from "@/lib/site";
import { Icon } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { Botao } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);

  function ativo(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setAberto(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl gradient-brand text-white">
            <Icon name="shield" size={20} />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-bold tracking-tight">Atendentes Premium</span>
            <span className="text-[11px] text-subtle">Formação em Farmácia</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navPrincipal.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                ativo(item.href) ? "text-brand-600 bg-brand-50 dark:bg-brand-900/40" : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Botao href="/matriculas" tamanho="sm" className="hidden sm:inline-flex">
            Matricular
          </Botao>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border-strong text-muted lg:hidden"
            onClick={() => setAberto((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={aberto}
          >
            <Icon name={aberto ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {aberto && (
        <div className="border-t border-border bg-surface lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navPrincipal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setAberto(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                  ativo(item.href) ? "text-brand-600 bg-brand-50 dark:bg-brand-900/40" : "text-muted"
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
      )}
    </header>
  );
}
