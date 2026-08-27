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
    <footer className="relative overflow-hidden border-t border-emerald-500/10 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-emerald-500/8 blur-[150px]" />
        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-emerald-500/6 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Top grid - adaptável landscape */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand + QR */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <LogoSaudeGPT variant="light" size="sm" showText={false} />
              <div>
                <p className="text-sm font-extrabold tracking-tight text-emerald-50">{site.nomeCurto}</p>
                <p className="text-[11px] text-emerald-50/60">Formação para atendentes</p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-emerald-50/65">
              {site.descricao}
            </p>
            {/* QR Code */}
            <div className="inline-flex items-center gap-3 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.03] p-3 backdrop-blur-sm">
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
                <p className="text-xs font-semibold text-emerald-50/80">Acesse a plataforma</p>
                <p className="mt-0.5 text-[11px] text-emerald-50/55">saudegpt.com</p>
              </div>
            </div>

            {/* Crédito do Farmacêutico */}
            <div className="rounded-xl border border-emerald-500/12 bg-emerald-500/[0.04] p-3.5">
              <p className="text-[11px] leading-relaxed text-emerald-400/80">
                {site.assinatura}
              </p>
            </div>
          </div>

          {/* Plataforma */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400/80 mb-5">Plataforma</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-emerald-50/65 transition-all hover:text-emerald-400 hover:translate-x-0.5 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400/80 mb-5">Legal</h4>
            <ul className="space-y-3">
              {legais.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-emerald-50/65 transition-all hover:text-emerald-400 hover:translate-x-0.5 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patrocinadores */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400/80 mb-5">Patrocinadores</h4>
            <ul className="space-y-3">
              {site.patrocinadores?.map((p) => (
                <li key={p.nome}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-xl border border-emerald-500/8 bg-emerald-500/[0.03] p-3.5 transition-all hover:border-emerald-500/25 hover:bg-emerald-500/[0.05] hover:-translate-y-0.5"
                  >
                    <p className="text-sm font-bold text-emerald-50/80 transition-colors group-hover:text-emerald-400">
                      {p.nome}
                    </p>
                    <p className="mt-0.5 text-xs text-emerald-50/55">{p.descricao}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Brasão central */}
        <div className="mt-14 flex justify-center">
          <div className="group relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/30 to-emerald-600/20 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-80" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-emerald-500/15 bg-[#050F0D] shadow-xl shadow-emerald-500/10 transition-all duration-500 group-hover:border-emerald-400/40 group-hover:shadow-emerald-400/20">
              <LogoSaudeGPT variant="light" size="sm" showText={false} />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-emerald-500/8 pt-6 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
          <div>
            <p className="text-xs text-emerald-50/55">
              &copy; {ano} {site.nome}. Todos os direitos reservados. · Construído por Hermes Agent
            </p>
            <p className="mt-1 text-xs text-emerald-400/60">
              Criado por{" "}
              <span className="text-emerald-300 font-medium">
                Thiago Piola
              </span>
              {" — "}
              <span className="text-emerald-50/55">
                CRF/SP 58.519
              </span>
            </p>
          </div>
          <p className="max-w-xs text-[11px] leading-relaxed text-emerald-50/45">
            Conteúdo educativo baseado em ANVISA, Ministério da Saúde e OMS. Não substitui consulta médica. Em caso de emergência, ligue 192.
          </p>
        </div>
      </div>
    </footer>
  );
}
