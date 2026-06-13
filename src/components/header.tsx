"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navPrincipal, site } from "@/lib/site";
import { Icon } from "./icons";
import { LogoAcademico } from "./logo-academico";
import { ThemeToggle } from "./theme-toggle";

const navLanding = [
  { href: "#trilhas", label: "Trilhas" },
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#seguranca", label: "Segurança" },
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
    <header className="sticky top-0 z-40 border-b border-white/10 bg-forest-500/88 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setAberto(false)}>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
            <LogoAcademico size={30} />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-extrabold tracking-tight sm:text-base">{site.nomeCurto}</span>
            <span className="hidden text-[11px] font-medium text-white/55 sm:block">Farmácia, atendimento e segurança</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {itens.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                ativo(item.href) ? "bg-white/12 text-white" : "text-white/66 hover:bg-white/8 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle className="border-white/15 bg-white text-forest-700 hover:text-forest-700 !h-10 !w-10 sm:!h-10 sm:!w-10" />
          <a
            href="mailto:contato@thiagopiola.com.br"
            className="inline-flex min-h-[40px] items-center justify-center rounded-full border border-white/20 px-3 text-xs sm:text-sm font-semibold text-white/85 transition hover:border-white/40 hover:text-white sm:px-4"
          >
            Contato
          </a>
          <Link
            href={ctaHref}
            className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-white px-3.5 sm:px-4 text-xs sm:text-sm font-extrabold text-forest-700 shadow-sm transition hover:bg-white/90"
          >
            Entrar
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/75 lg:hidden"
            onClick={() => setAberto((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={aberto}
          >
            <Icon name={aberto ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      <div className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${aberto ? "max-h-[30rem]" : "max-h-0"}`}>
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 border-t border-white/10 px-4 py-4" aria-label="Menu mobile">
          {itens.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setAberto(false)}
              className="flex min-h-[48px] items-center rounded-xl px-4 py-3 text-sm font-semibold text-white/78 hover:bg-white/8 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            onClick={() => setAberto(false)}
            className="mt-2 inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-5 text-sm font-extrabold text-forest-700 hover:bg-white/90 transition-colors"
          >
            Fazer matrícula
          </Link>
        </nav>
      </div>
    </header>
  );
}
