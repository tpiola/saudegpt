"use client";

import Link from "next/link";
import Image from "next/image";
import { linksLegais, navPrincipal, site } from "@/lib/site";
import { LogoSaudeGPT } from "./logo-saudegpt";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#020e0c] via-[#051f1a] to-[#0a2b24]">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-gold-500/10 blur-[150px]" />
        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-gold-500/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Top grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand + QR */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <LogoSaudeGPT variant="light" size="sm" showText={false} />
              <div>
                <p className="text-sm font-extrabold tracking-tight text-white">{site.nomeCurto}</p>
                <p className="text-[11px] text-white/50">Formação de excelência para atendentes de farmácia</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/55">{site.descricao}</p>
            {/* QR Code */}
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-sm">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white p-1.5">
                <Image
                  src="/imagens/qr-saudegpt.png"
                  alt="QR Code saudegpt.com"
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-white/80">Acesse a plataforma</p>
                <p className="mt-0.5 text-[11px] text-white/40">saudegpt.com</p>
              </div>
            </div>
          </div>

          {/* Produto */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400/80 mb-5">Produto</h4>
            <ul className="space-y-3">
              {navPrincipal.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/55 transition-all hover:text-gold-400 hover:translate-x-0.5 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patrocinadores */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400/80 mb-5">Patrocinadores</h4>
            <p className="mt-1 text-xs leading-relaxed text-white/45 mb-4">
              A SaúdeGPT conta com o apoio de iniciativas comprometidas com tecnologia, educação e evolução profissional em saúde.
            </p>
            <ul className="space-y-3">
              {site.patrocinadores?.map((p) => (
                <li key={p.nome}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-xl border border-white/8 bg-white/[0.03] p-3 transition-all hover:border-gold-500/25 hover:bg-gold-500/[0.05] hover:-translate-y-0.5"
                  >
                    <p className="text-sm font-bold text-white/80 transition-colors group-hover:text-gold-400">
                      {p.nome}
                    </p>
                    <p className="mt-0.5 text-xs text-white/40">{p.descricao}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato rápido */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400/80 mb-5">Acesso</h4>
            <div className="space-y-3">
              <Link
                href="/#matricula"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                Entrar
              </Link>
              <Link
                href="/contato"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/80 transition-all hover:border-white/40 hover:text-white"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>

        {/* Brasão central */}
        <div className="mt-14 flex justify-center">
          <div className="group relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-500/30 to-green-600/20 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-80" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-[#020e0c] shadow-xl shadow-emerald-500/10 transition-all duration-500 group-hover:border-teal-400/40 group-hover:shadow-teal-400/20">
              <LogoSaudeGPT variant="light" size="sm" showText={false} />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mt-1 text-xs leading-relaxed text-white/40">{site.assinatura}</p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/40">
            {linksLegais.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-white/70">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-white/40">
          Criado por{" "}
          <a
            href="https://reidasvendas.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal-300/80 underline underline-offset-2 transition-colors hover:text-teal-200"
          >
            reidasvendas.com.br
          </a>
        </p>

        <p className="mt-4 text-xs leading-relaxed text-white/30">
          Conteúdo educativo. Não substitui consulta médica nem orientação do farmacêutico responsável. Em caso de emergência, ligue 192.
        </p>
      </div>
    </footer>
  );
}
