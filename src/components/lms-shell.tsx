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
        className={`lms-sidebar fixed inset-y-0 left-0 z-50 flex w-[min(100%,280px)] flex-col border-r border-border bg-surface transition-transform duration-200 lg:static lg:z-auto lg:translate-x-0 ${
          menuAberto ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center gap-3 border-b border-border px-4">
          <Link
            href="/"
            className="flex min-w-0 flex-1 items-center gap-2.5"
            onClick={() => setMenuAberto(false)}
          >
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl gradient-brand text-white">
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

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {secoesNavLms.map((secao) => (
            <div key={secao.titulo} className="mb-6">
              <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-wider text-subtle">
                {secao.titulo}
              </p>
              <ul className="space-y-0.5">
                {secao.itens.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuAberto(false)}
                      className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                        ativo(item.href)
                          ? "bg-brand-600 text-white shadow-sm"
                          : "text-muted hover:bg-surface-2 hover:text-foreground"
                      }`}
                    >
                      <Icon name={item.icone} size={18} />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="border-t border-border p-4">
          {perfil ? (
            <div className="mb-3 rounded-xl bg-surface-2 px-3 py-2">
              <p className="truncate text-xs font-semibold">{perfil.nome}</p>
              <p className="truncate text-[10px] text-subtle">{perfil.email}</p>
            </div>
          ) : (
            <Botao href="/matriculas" className="mb-3 w-full" tamanho="sm">
              Entrar / matricular
            </Botao>
          )}
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-subtle">
            {linksLegais.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-brand-600">
                {l.label}
              </Link>
            ))}
            <Link href="/sobre" className="hover:text-brand-600">
              Sobre o curso
            </Link>
            <Link href="/admin" className="hover:text-brand-600">
              Admin
            </Link>
          </div>
        </div>
      </aside>

      {menuAberto && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          aria-label="Fechar menu"
          onClick={() => setMenuAberto(false)}
        />
      )}

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
