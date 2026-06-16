"use client";

import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { LogoSaudeGPT } from "./logo-saudegpt";

export function SiteFooter() {
  const ano = new Date().getFullYear();

  const links = [
    { href: "/trilhas", label: "Trilhas" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/biblioteca", label: "Biblioteca" },
    { href: "/jogos", label: "Jogos" },
    { href: "/ranking", label: "Ranking" },
  ];

  const legais = [
    { href: "/privacidade", label: "Privacidade" },
    { href: "/termos", label: "Termos" },
    { href: "/lgpd", label: "LGPD" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-850">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-gold-500/10 blur-[150px]" />
        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-gold-500/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Top grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand + QR */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <LogoSaudeGPT variant="light" size="sm" showText={false} />
              <div>
                <p className="text-sm font-extrabold tracking-tight text-white">{site.nomeCurto}</p>
                <p className="text-[11px] text-white/50">Formação para atendentes</p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/55">
              {site.descricao}
            </p>
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

            {/* Crédito do Farmacêutico */}
            <div className="rounded-xl border border-gold-500/15 bg-gold-500/[0.04] p-3.5">
              <p className="text-[11px] leading-relaxed text-gold-400/80">
                {site.assinatura}
              </p>
            </div>
          </div>

          {/* Plataforma */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400/80 mb-5">Plataforma</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/55 transition-all hover:text-gold-400 hover:translate-x-0.5 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400/80 mb-5">Legal</h4>
            <ul className="space-y-3">
              {legais.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/55 transition-all hover:text-gold-400 hover:translate-x-0.5 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patrocinadores */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400/80 mb-5">Patrocinadores</h4>
            <ul className="space-y-3">
              {site.patrocinadores?.map((p) => (
                <li key={p.nome}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-xl border border-white/8 bg-white/[0.03] p-3.5 transition-all hover:border-gold-500/25 hover:bg-gold-500/[0.05] hover:-translate-y-0.5"
                  >
                    <p className="text-sm font-bold text-white/80 transition-colors group-hover:text-gold-400">
                      {p.nome}
                    </p>
                    <p className="mt-0.5 text-xs text-white/40">{p.url.replace("https://www.", "")}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Brasão central — destaque visual */}
        <div className="mt-14 flex justify-center">
          <div className="group relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-500/30 to-gold-600/20 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-80" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-[#020e0c] shadow-xl shadow-gold-500/10 transition-all duration-500 group-hover:border-gold-400/40 group-hover:shadow-gold-400/20">
              <LogoSaudeGPT variant="light" size="sm" showText={false} />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/8 pt-6 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
          <div>
            <p className="text-xs text-white/40">
              &copy; {ano} {site.nome}. Todos os direitos reservados.
            </p>
            <p className="mt-1 text-xs text-gold-400/60">
              Plataforma criada por{" "}
              <a
                href="https://www.reidasvendas.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 underline underline-offset-2 transition-colors"
              >
                Rei das Vendas
              </a>
              {" · "}
              <span className="text-white/40">
                Conteúdo por Thiago Piola — CRF/SP 58.519
              </span>
            </p>
          </div>
          <p className="max-w-xs text-[11px] leading-relaxed text-white/35">
            Conteúdo educativo baseado em ANVISA, Ministério da Saúde e OMS. Não substitui consulta médica. Em caso de emergência, ligue 192.
          </p>
        </div>
      </div>
    </footer>
  );
}
