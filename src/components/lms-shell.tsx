"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { secoesNavLms } from "@/lib/navegacao-lms";
import { site, linksLegais } from "@/lib/site";
import { Icon } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { Botao } from "./ui";
import { usePerfilAluno } from "@/lib/aluno";
import { WhatsAppButton } from "./whatsapp-button";

function tituloPagina(pathname: string): string {
  if (pathname === "/") return "Início";
  const flat = secoesNavLms.flatMap((s) => s.itens);
  const exato = flat.find((i) => i.href === pathname);
  if (exato) return exato.label;
  if (pathname.startsWith("/aula/")) return "Aula";
  if (pathname.startsWith("/prova/")) return "Prova do módulo";
  if (pathname.startsWith("/trilhas/")) return "Trilha";
  if (pathname === "/matriculas") return "Matrícula";
  if (pathname === "/admin") return "Coordenação";
  return site.nomeCurto;
}

export function LmsShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuAberto, setMenuAberto] = useState(false);
  const { perfil } = usePerfilAluno();

  function ativo(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const titulo = tituloPagina(pathname);

  return (
    <div className="flex min-h-[calc(100vh-0px)] flex-col lg:flex-row">
      {/* Sidebar — ambiente de estudos */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(100%,280px)] flex-col border-r border-border bg-surface transition-transform duration-200 lg:static lg:z-auto lg:translate-x-0 ${
          menuAberto ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Barra decorativa no topo — forest gradient */}
        <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(to_right,var(--forest-500),var(--sage-500),var(--terracota-500))] opacity-80" />

        {/* Header: logo + nome */}
        <div className="relative flex h-16 items-center gap-3 border-b border-border px-4">
          <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(to_bottom,var(--forest-500)/[0.06],transparent)] pointer-events-none" />
          <Link
            href="/"
            className="flex min-w-0 flex-1 items-center gap-2.5"
            onClick={() => setMenuAberto(false)}
          >
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--forest-600),var(--brand-600))] text-white shadow-md shadow-forest-500/25">
              <Icon name="graduation" size={20} />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-sm font-bold">{site.nomeCurto}</span>
              <span className="block text-[10px] text-subtle">Ambiente de estudos</span>
            </span>
          </Link>
          <button
            type="button"
            className="lg:hidden"
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
              {/* Separador decorativo */}
              {idx > 0 && (
                <div className="absolute inset-x-2 -top-px flex items-center gap-2">
                  <div className="h-px flex-1 bg-[linear-gradient(to_right,transparent,var(--border),transparent)]" />
                  <span className="h-1 w-1 rounded-full bg-border shrink-0" />
                  <div className="h-px flex-1 bg-[linear-gradient(to_right,transparent,var(--border),transparent)]" />
                </div>
              )}

              <p className="mb-2.5 px-2 text-[10px] font-bold uppercase tracking-wider text-subtle">
                {secao.titulo}
              </p>

              <ul className="space-y-0.5">
                {secao.itens.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuAberto(false)}
                      className={`group relative flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                        ativo(item.href)
                          ? "bg-[linear-gradient(to_right,var(--forest-500)/[0.10],transparent)] text-foreground shadow-sm"
                          : "text-muted hover:glass hover:text-foreground"
                      }`}
                    >
                      {/* Barra de destaque no item ativo */}
                      {ativo(item.href) && (
                        <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-[linear-gradient(to_bottom,var(--forest-500),var(--sage-500))]" />
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

                      {/* Badge de notificação - Missões */}
                      {item.href === "/missoes" && (
                        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-[linear-gradient(135deg,var(--forest-500),var(--brand-500))] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                          Novo
                        </span>
                      )}

                      {/* Indicador para trilha de cuidado humanizado */}
                      {item.href === "/trilhas/vendas" && (
                        <span className="ml-auto text-[9px] font-semibold uppercase tracking-wider text-sage-500">
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

        {/* Footer da sidebar */}
        <div className="relative border-t border-border px-4 pb-4 pt-3">
          <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(to_top,var(--forest-500)/[0.04],transparent)] pointer-events-none" />

          {perfil ? (
            <div className="relative mb-3 rounded-xl bg-surface-2/80 px-3 py-2.5 backdrop-blur-sm border border-border">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,var(--forest-600),var(--brand-600))] text-white text-xs font-bold shadow-sm">
                  {perfil.nome.charAt(0).toUpperCase()}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold">{perfil.nome}</p>
                  <p className="truncate text-[10px] text-subtle">{perfil.email}</p>
                </div>
              </div>
            </div>
          ) : (
            <Botao href="/matriculas" className="relative mb-3 w-full" tamanho="sm">
              Entrar / matricular
            </Botao>
          )}

          <div className="relative flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-subtle">
            <div className="mb-1.5 flex w-full items-center gap-2">
              <div className="h-px flex-1 bg-[linear-gradient(to_right,transparent,var(--border)/[0.6],transparent)]" />
            </div>
            {linksLegais.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-forest-600 transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href="/sobre" className="hover:text-forest-600 transition-colors">
              Sobre o curso
            </Link>
            <Link href="/admin" className="hover:text-forest-600 transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </aside>

      {/* Overlay mobile */}
      {menuAberto && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          aria-label="Fechar menu"
          onClick={() => setMenuAberto(false)}
        />
      )}

      {/* Conteúdo principal */}
      <div className="flex min-w-0 flex-1 flex-col lg:pl-0">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-3 border-b border-border bg-surface/95 px-4 backdrop-blur-md sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border-strong text-muted lg:hidden"
              onClick={() => setMenuAberto(true)}
              aria-label="Abrir menu"
            >
              <Icon name="menu" size={20} />
            </button>
            <span className="truncate text-base font-bold sm:text-lg" aria-current="page">
              {titulo}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {!perfil && (
              <Botao href="/matriculas" tamanho="sm" className="hidden sm:inline-flex">
                Matricular
              </Botao>
            )}
          </div>
        </header>

        <div className="flex-1 bg-background">{children}</div>

        <WhatsAppButton />

        <footer className="border-t border-border bg-surface px-4 py-4 text-center text-[11px] text-subtle sm:px-6">
          <p>{site.assinatura}</p>
          <p className="mt-1">
            Conteúdo educativo — não substitui orientação do farmacêutico ou médico.
          </p>
        </footer>
      </div>
    </div>
  );
}
