"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navPrincipal, site, verticais } from "@/lib/site";
import { Icon } from "./icons";
import { LogoSaudeGPT } from "./logo-saudegpt";
import { ThemeToggle } from "./theme-toggle";

const navLanding = [
  { href: "#trilhas", label: "Trilhas" },
  { href: "/nutricao", label: "Nutrição" },
  { href: "/fisioterapia", label: "Fisioterapia" },
  { href: "/psicologia", label: "Psicologia" },
  { href: "#matricula", label: "Matrícula" },
];

export function Header() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);
  const isLanding = pathname === "/";
  const itens = isLanding ? navLanding : navPrincipal.slice(0, 5);
  const ctaHref = isLanding ? "#matricula" : "/#matricula";

  useEffect(() => {
    setAberto(false);
  }, [pathname]);

  function ativo(href: string) {
    return !href.startsWith("#") && (pathname === href || pathname.startsWith(`${href}/`));
  }

  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/95 text-navy-800 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setAberto(false)}>
          <LogoSaudeGPT variant="dark" size="sm" showIcon={true} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {itens.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                ativo(item.href) ? "bg-navy-50 text-navy-800" : "text-navy-600 hover:bg-navy-50 hover:text-navy-800"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle className="border-navy-100 bg-navy-50 text-navy-700 !h-10 !w-10 sm:!h-10 sm:!w-10" />
          <a
            href="mailto:contato@thiagopiola.com.br"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-navy-200 px-3 text-xs sm:text-sm font-semibold text-navy-700 transition hover:border-navy-300 hover:bg-navy-50 sm:px-4"
          >
            Contato
          </a>
          <Link
            href={ctaHref}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-navy-800 px-3.5 sm:px-4 text-xs sm:text-sm font-extrabold text-white shadow-sm transition hover:bg-navy-700"
          >
            Entrar
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 text-navy-700 lg:hidden min-touch"
            onClick={() => setAberto((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={aberto}
          >
            <Icon name={aberto ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      <div className={`overflow-y-auto transition-[max-height] duration-300 lg:hidden ${aberto ? "max-h-[calc(100vh-3.5rem)]" : "max-h-0"}`}>
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 border-t border-navy-100 px-4 py-4 bg-white" aria-label="Menu mobile">
          {itens.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setAberto(false)}
              className="flex min-h-[48px] items-center rounded-xl px-4 py-3 text-sm font-semibold text-navy-700 hover:bg-navy-50 hover:text-navy-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          {!isLanding && (
            <>
              <div className="mt-2 px-4 text-[11px] font-bold uppercase tracking-wider text-navy-400">Verticais</div>
              {verticais.map((v) => (
                <Link
                  key={v.slug}
                  href={v.href}
                  onClick={() => setAberto(false)}
                  className="flex min-h-[48px] items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-navy-700 hover:bg-navy-50 hover:text-navy-900 transition-colors"
                >
                  <span aria-hidden>{v.icone}</span>
                  {v.label}
                </Link>
              ))}
            </>
          )}
          <Link
            href={ctaHref}
            onClick={() => setAberto(false)}
            className="mt-2 inline-flex min-h-[48px] items-center justify-center rounded-full bg-navy-800 px-5 text-sm font-extrabold text-white hover:bg-navy-700 transition-colors"
          >
            Fazer matrícula
          </Link>
        </nav>
      </div>
    </header>
  );
}
