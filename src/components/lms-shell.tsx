"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { secoesNavLms } from "@/lib/navegacao-lms";
import { site, linksLegais } from "@/lib/site";
import { Icon } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { Botao } from "./ui";
import { usePerfilAluno } from "@/lib/aluno";
import { MobileBottomNav } from "./mobile-bottom-nav";
import dynamic from "next/dynamic";

/** Páginas que usam layout FULL WIDTH (sem sidebar) */
const FULL_WIDTH_ROUTES = new Set(["/sobre", "/"]);

function tituloPagina(pathname: string): string {
  if (pathname === "/") return "Matrícula";
  const flat = secoesNavLms.flatMap((s) => s.itens);
  const exato = flat.find((i) => i.href === pathname);
  if (exato) return exato.label;
  if (pathname.startsWith("/aula/")) return "Aula";
  if (pathname.startsWith("/prova/")) return "Prova do módulo";
  if (pathname.startsWith("/trilhas/")) return "Trilha";
  if (pathname === "/admin") return "Coordenação";
  return site.nomeCurto;
}

/* ── ScrollReveal inline ── */
export function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visivel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function LmsShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuAberto, setMenuAberto] = useState(false);
  const { perfil } = usePerfilAluno();

  /* ── FULL WIDTH: landing page sem sidebar ── */
  if (FULL_WIDTH_ROUTES.has(pathname)) {
    return <>{children}</>;
  }

  function ativo(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const titulo = tituloPagina(pathname);

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* ════════════════════════════════════════════
         SIDEBAR — RD SAÚDE STYLE
         ════════════════════════════════════════════ */}
      <aside
      className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-border bg-surface transition-transform duration-300 ease-in-out md:static md:z-auto md:translate-x-0 ${
        menuAberto ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ width: 288 }}
      >
        {/* Barra decorativa — forest green + orange */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-forest-500 via-orange-400 to-forest-500 opacity-80" />

        {/* Header: logo */}
        <div className="relative flex h-16 items-center gap-3 border-b border-border px-4">
          <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-forest-500/[0.04] to-transparent pointer-events-none" />
          <Link
            href="/dashboard"
            className="flex min-w-0 flex-1 items-center gap-2.5"
            onClick={() => setMenuAberto(false)}
          >
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-orange-500 text-white shadow-md">
              <Icon name="graduation" size={20} />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-sm font-bold">{site.nomeCurto}</span>
              <span className="block text-[10px] text-subtle dark:text-muted">Ambiente de estudos</span>
            </span>
          </Link>
          <button
            type="button"
            className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMenuAberto(false)}
            aria-label="Fechar menu"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        {/* Navegação */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          {secoesNavLms.map((secao, idx) => (
            <div key={secao.titulo} className={idx > 0 ? "mt-5 pt-5 relative" : ""}>
              {idx > 0 && (
                <div className="absolute inset-x-2 -top-px flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                  <span className="h-1 w-1 rounded-full bg-border shrink-0" />
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>
              )}

              <p className="mb-2.5 px-2 text-[10px] font-bold uppercase tracking-wider text-subtle dark:text-muted">
                {secao.titulo}
              </p>

              <ul className="space-y-0.5">
                {secao.itens.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuAberto(false)}
                      className={`group relative flex items-center gap-2.5 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
                        ativo(item.href)
                          ? "bg-gradient-to-r from-forest-500/[0.08] to-transparent text-foreground shadow-sm"
                          : "text-muted hover:bg-surface-2/50 hover:text-foreground"
                      }`}
                    >
                      {ativo(item.href) && (
                        <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-gradient-to-b from-orange-500 to-orange-400" />
                      )}

                      <Icon
                        name={item.icone}
                        size={18}
                        className={`shrink-0 transition-colors duration-200 ${
                          ativo(item.href)
                            ? "text-forest-600 dark:text-forest-400"
                            : "group-hover:text-foreground"
                        }`}
                      />

                      {item.label}

                      {item.href === "/missoes" && (
                        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                          Novo
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="relative border-t border-border px-4 pb-4 pt-3">
          <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-t from-forest-500/[0.03] to-transparent pointer-events-none" />

          {perfil ? (
            <div className="relative mb-3 rounded-xl bg-surface-2/80 px-3 py-2.5 backdrop-blur-sm border border-border">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold shadow-sm">
                  {perfil.nome.charAt(0).toUpperCase()}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold">{perfil.nome}</p>
                  <p className="truncate text-[10px] text-subtle dark:text-muted">{perfil.email}</p>
                </div>
              </div>
            </div>
          ) : (
            <Botao href="/dashboard" className="relative mb-3 w-full" tamanho="sm">
              Explorar curso
            </Botao>
          )}

          <div className="relative flex flex-wrap gap-x-3 gap-y-1 sm:gap-y-2 text-[10px] sm:text-xs text-subtle dark:text-muted">
            <div className="mb-1.5 flex w-full items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/[0.6] to-transparent" />
            </div>
            {linksLegais.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-orange-500 transition-colors min-h-[44px] inline-flex items-center">
                {l.label}
              </Link>
            ))}
            <Link href="/sobre" className="hover:text-orange-500 transition-colors min-h-[44px] inline-flex items-center">
              Sobre o curso
            </Link>
          </div>
        </div>
      </aside>

      {/* Overlay mobile */}
      {menuAberto && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          aria-label="Fechar menu"
          onClick={() => setMenuAberto(false)}
        />
      )}

      {/* ════════════════════════════════════════════
         CONTEÚDO PRINCIPAL
         ════════════════════════════════════════════ */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-12 sm:h-14 items-center justify-between gap-2 sm:gap-3 border-b border-border bg-surface/95 px-3 sm:px-6 backdrop-blur-md">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-border-strong text-muted md:hidden"
              onClick={() => setMenuAberto(true)}
              aria-label="Abrir menu"
            >
              <Icon name="menu" size={18} />
            </button>
            <span
              className="truncate text-sm font-bold sm:text-base sm:font-bold md:text-lg"
              aria-current="page"
            >
              {titulo}
            </span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <ThemeToggle />
            {!perfil && (
              <Botao href="/" tamanho="sm" className="hidden sm:inline-flex">
                Explorar trilhas
              </Botao>
            )}
          </div>
        </header>

        <div className="flex-1 bg-background">{children}</div>

        <footer className="has-bottom-nav border-t border-border bg-surface px-4 py-4 text-center text-[11px] text-subtle sm:px-6 pb-[env(safe-area-inset-bottom,16px)]">
          <p className="font-semibold">{site.assinatura}</p>
          <p className="mt-1">
            Conteúdo educativo — não substitui orientação do farmacêutico ou médico.
          </p>
          <a
            href="mailto:contato@thiagopiola.com.br"
            className="mt-1 inline-flex min-h-[44px] items-center gap-1 px-3 text-[11px] font-semibold text-green-600 hover:text-green-500 dark:text-green-400"
          >
            <Icon name="message" size={11} /> Contato
          </a>
        </footer>
      </div>

      <MobileBottomNav />
    </div>
  );
}
