"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { LogoSaudeGPT } from "@/components/logo-saudegpt";

/* ─── Dados do diretor ─── */
const DIRETOR = {
  nome: "Prof. Thiago B. G. Piola",
  badge: "CRF/SP 58.519",
  formacao: "Farmacêutico · Web Designer · Empreendedor",
  bio: [
    "Farmacêutico clínico com mais de 10 anos de experiência em farmácia comunitária e hospitalar. Especialista em atenção farmacêutica, unindo conhecimento científico à tecnologia para transformar a formação de atendentes.",
    "Como web designer e empreendedor digital, desenvolveu o método SaúdeGPT — uma plataforma educacional que integra inteligência artificial, gamificação e design instrucional para capacitar profissionais da farmácia com excelência e humanização.",
  ],
  visao:
    "Formar atendentes que cuidam de gente. Minha missão é elevar o padrão do atendimento nas farmácias brasileiras, preparando cada aluno para ser um profissional completo — técnico, ético e humano.",
  estatisticas: [
    { valor: "7", rotulo: "Trilhas" },
    { valor: "39", rotulo: "Módulos" },
    { valor: "159+", rotulo: "Aulas" },
    { valor: "9", rotulo: "Jogos" },
  ],
  credenciais: [
    { icone: "graduation", titulo: "Farmácia", descricao: "CRF/SP 58.519" },
    { icone: "award", titulo: "Pós-graduação", descricao: "Farmácia Clínica" },
    { icone: "globe", titulo: "Web Design", descricao: "UI/UX & Produto Digital" },
    { icone: "book", titulo: "Educador", descricao: "Metodologias Ativas" },
  ],
  orgaos: [
    { sigla: "CRF/SP", nome: "Conselho Regional de Farmácia de São Paulo", numero: "58.519" },
    { sigla: "CFF", nome: "Conselho Federal de Farmácia" },
    { sigla: "SBRAF", nome: "Sociedade Brasileira de Farmácia" },
  ],
};

export default function DiretorPage() {
  const [visivel, setVisivel] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-5 py-10 sm:px-6">
      {/* ═══ HERO HEADER ═══ */}
      <div
        ref={ref}
        className={`relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 p-8 sm:p-12 transition-all duration-700 ease-out ${
          visivel ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-[0.97] opacity-0"
        }`}
      >
        {/* Particle grid bg */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden
        />
        {/* Glow radial */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(212,168,67,0.4), transparent 70%)" }}
          aria-hidden
        />

        <div className="relative z-10 flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
          {/* Foto placeholder */}
          <div className="relative flex-shrink-0">
            <div className="h-28 w-28 overflow-hidden rounded-2xl border-2 border-gold-400/30 bg-navy-700 sm:h-36 sm:w-36">
              <div className="flex h-full w-full items-center justify-center">
                <Icon name="user" size={56} className="text-gold-400/40" />
              </div>
            </div>
            {/* Glow ring */}
            <span
              className="absolute -inset-1 rounded-2xl opacity-30 blur-sm"
              style={{ background: "linear-gradient(135deg, #D4A843, transparent 60%)" }}
              aria-hidden
            />
          </div>

          {/* Texto */}
          <div className="flex-1 text-center sm:text-left">
            <div className="mb-2 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              <h1 className="text-2xl font-black text-white sm:text-3xl">
                Diretor Pedagógico
              </h1>
              <span className="inline-flex items-center gap-1 rounded-full border border-gold-400/30 bg-gold-500/10 px-3 py-0.5 text-[11px] font-semibold text-gold-400">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                {DIRETOR.badge}
              </span>
            </div>
            <p className="text-lg font-bold text-white/90">{DIRETOR.nome}</p>
            <p className="mt-1 text-sm text-white/60">{DIRETOR.formacao}</p>
          </div>
        </div>
      </div>

      {/* ═══ BIO ═══ */}
      <section className="mb-12">
        <h2 className="mb-4 text-lg font-bold text-navy-900 dark:text-white">
          <Icon name="user" size={18} className="inline-block text-gold-500" />{" "}
          Sobre
        </h2>
        <div className="space-y-4 rounded-2xl border border-gold-100/50 bg-white/80 p-6 backdrop-blur-sm dark:border-navy-700 dark:bg-navy-800/60">
          {DIRETOR.bio.map((paragrafo, i) => (
            <p key={i} className="text-sm leading-relaxed text-muted">
              {paragrafo}
            </p>
          ))}
        </div>
      </section>

      {/* ═══ VISÃO ═══ */}
      <section className="mb-12">
        <h2 className="mb-4 text-lg font-bold text-navy-900 dark:text-white">
          <Icon name="target" size={18} className="inline-block text-gold-500" />{" "}
          Visão do Curso
        </h2>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gold-500/10 via-gold-400/5 to-navy-900/5 p-6 backdrop-blur-sm dark:from-gold-500/5 dark:via-navy-800/30 dark:to-navy-900/30">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              background:
                "radial-gradient(400px 200px at 50% 0%, rgba(212,168,67,0.3), transparent 70%)",
            }}
            aria-hidden
          />
          <p className="relative text-lg font-semibold italic leading-relaxed text-navy-800 dark:text-gold-300">
            &ldquo;{DIRETOR.visao}&rdquo;
          </p>
        </div>
      </section>

      {/* ═══ ESTATÍSTICAS ═══ */}
      <section className="mb-12">
        <h2 className="mb-4 text-lg font-bold text-navy-900 dark:text-white">
          <Icon name="chart" size={18} className="inline-block text-gold-500" />{" "}
          O Curso em Números
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {DIRETOR.estatisticas.map((stat, i) => (
            <div
              key={i}
              className="card-glass rounded-xl p-5 text-center"
            >
              <div className="text-3xl font-black text-gold-500">{stat.valor}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
                {stat.rotulo}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CREDENCIAIS ═══ */}
      <section className="mb-12">
        <h2 className="mb-4 text-lg font-bold text-navy-900 dark:text-white">
          <Icon name="shield" size={18} className="inline-block text-gold-500" />{" "}
          Credenciais
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {DIRETOR.credenciais.map((cred, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl border border-navy-100/50 bg-white/60 p-4 backdrop-blur-sm dark:border-navy-700 dark:bg-navy-800/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-50 text-gold-600 dark:bg-gold-900/20 dark:text-gold-400">
                <Icon name={cred.icone as any} size={22} />
              </span>
              <div>
                <div className="text-sm font-bold text-navy-800 dark:text-white">
                  {cred.titulo}
                </div>
                <div className="text-xs text-muted">{cred.descricao}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ ÓRGÃOS PROFISSIONAIS ═══ */}
      <section className="mb-12">
        <h2 className="mb-4 text-lg font-bold text-navy-900 dark:text-white">
          <Icon name="globe" size={18} className="inline-block text-gold-500" />{" "}
          Órgãos Profissionais
        </h2>
        <div className="space-y-2">
          {DIRETOR.orgaos.map((orgao, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-navy-100/30 bg-white/50 px-5 py-3 backdrop-blur-sm dark:border-navy-700 dark:bg-navy-800/30"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 text-xs font-black text-navy-700 dark:bg-navy-700 dark:text-navy-200">
                {orgao.sigla}
              </span>
              <div className="flex-1">
                <div className="text-sm font-medium text-navy-800 dark:text-white">
                  {orgao.nome}
                </div>
                {orgao.numero && (
                  <div className="text-xs text-gold-600 dark:text-gold-400">
                    Registro: {orgao.numero}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FOOTER / ASSINATURA ═══ */}
      <div className="border-t border-navy-100 pt-6 text-center dark:border-navy-700">
        <LogoSaudeGPT variant="dark" size="sm" className="mx-auto justify-center" />
        <p className="mt-3 text-xs text-subtle">
          Criado pelo Farmacêutico Thiago B. G. Piola &middot; CRF-SP 58.519
        </p>
      </div>
    </div>
  );
}
