import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { trilhas, totalAulas } from "@/content/curriculo";
import { MatriculaForm } from "@/components/matricula-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Formação para Atendentes de Farmácia",
  description:
    "A formação mais completa do Brasil para atendentes de drogaria e perfumaria. Acolhimento, cuidado humanizado e excelência profissional.",
  openGraph: {
    title: "Formação para Atendentes de Farmácia",
    description:
      "A formação mais completa do Brasil para atendentes de drogaria e perfumaria.",
    url: "https://www.saudegpt.com",
    siteName: site.nome,
  },
};

export default function HomePage() {
  const totalAulasContagem = totalAulas();

  return (
    <div className="relative">
      {/* ════════════════════════════════════════════
         NAVEGAÇÃO SUPERIOR — LANDING PAGE (RD STYLE)
         ════════════════════════════════════════════ */}
      <nav className="fixed top-0 inset-x-0 z-50 h-14 sm:h-16 border-b border-white/5 bg-forest-500/80 backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-12">
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold shadow-lg shadow-orange-500/20">
              AP
            </span>
            <span className="hidden sm:block text-sm font-bold text-white/90">Atendentes</span>
          </a>
          <div className="flex items-center gap-3">
            <a href="/dashboard" className="text-xs text-white/50 hover:text-white/80 transition-colors font-medium">
              Entrar
            </a>
            <a href="#matricular" className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-orange-500/20">
              Matricular
            </a>
          </div>
        </div>
      </nav>

      {/* ════════════════════════════════════════════
         HERO — RD SAÚDE INSPIRED
         ════════════════════════════════════════════ */}
      <section className="hero-rd pt-14 sm:pt-16">
        {/* Imagem de fundo sutil */}
        <Image
          src="/hero-matricula.jpg"
          alt=""
          fill
          className="hero-bg"
          priority
          sizes="100vw"
        />

        {/* Grid pattern */}
        <div className="pointer-events-none absolute inset-0 z-[2] pattern-grid opacity-[0.04]" />

        {/* Conteúdo */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            {/* Badge */}
            <div className="badge-orange mb-6 inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              Formação gratuita
            </div>

            {/* Título principal */}
            <h1 className="text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold tracking-[-0.03em] leading-[1.05]">
              <span className="text-white">
                Atendentes
              </span>
              <br />
              <span className="text-white/80 font-light">
                de Farmácia
              </span>
            </h1>

            {/* Subtítulo — foco em saúde e atendimento encantador */}
            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-white/50 font-light">
              A formação que transforma atendentes em{" "}
              <span className="text-white/80 font-medium">profissionais de cuidado</span>
              {" "}— com acolhimento, técnica, {""}
              <span className="text-white/80 font-medium">atendimento encantador</span>
              {" "}e excelência no balcão.
            </p>

            {/* Stats minimalistas */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {[
                { value: "4", label: "trilhas" },
                { value: `${totalAulasContagem}+`, label: "aulas" },
                { value: "Do zero", label: "ao avançado" },
                { value: "100%", label: "gratuito" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-orange-400 tabular-nums">
                    {s.value}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.12em] text-white/40 font-medium">
                    {s.label}
                  </span>
                  <span className="hidden sm:block w-px h-4 bg-white/10 last:hidden" />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#matricular"
                className="btn-rd"
              >
                Quero me matricular
              </a>
              <a
                href="/trilhas"
                className="btn-rd-outline"
              >
                Ver trilhas
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[8px] uppercase tracking-[0.25em] text-white/15">Role</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
         JORNADA DE APRENDIZAGEM — DO ZERO AO AVANÇADO
         Perfumaria → Medicamentos → Receitas + Atendimento Encantador
         ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-forest-500 via-forest-600 to-forest-700 py-24 sm:py-32">
        {/* Grid sutil decorativa */}
        <div className="pointer-events-none absolute inset-0 pattern-grid opacity-[0.03]" />
        {/* Glow orbe */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          {/* Cabeçalho */}
          <div className="text-center fade-in-up">
            <span className="badge-orange inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              Sua evolução
            </span>
            <h2 className="mt-5 text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-[-0.03em] text-white">
              Jornada de{" "}
              <span className="text-gradient-forest">Aprendizagem</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/40">
              Do zero à excelência no balcão — uma progressão estruturada em três
              etapas. Comece com perfumaria, avance para medicamentos e domine o atendimento humanizado.
            </p>
          </div>

          {/* Roadmap */}
          <div className="relative mt-16 lg:mt-20">
            {/* Grid de etapas */}
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-5">

              {/* ─────────── 1. PERFUMARIA — BÁSICO ─────────── */}
              <div className="group relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-7 sm:p-8 transition-all duration-500 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/5 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/20 text-green-400 text-lg font-bold shadow-lg shadow-green-500/10">
                    1
                  </span>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-green-400/70">
                      Básico
                    </span>
                    <h3 className="mt-0.5 text-lg font-bold text-white">
                      Perfumaria e Cosméticos
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/40">
                  Domine as categorias de perfumaria, higiene e bem-estar. Aprenda a acolher cada cliente com atenção e cuidado — mesmo partindo do zero absoluto.
                </p>
                {/* O que você vai aprender */}
                <div className="mt-5 space-y-2.5 border-t border-white/[0.06] pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                    O que você vai aprender
                  </p>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-[10px] text-green-400">✓</span>
                    <span className="text-xs text-white/60">Categorias de perfumaria e cosméticos</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-[10px] text-green-400">✓</span>
                    <span className="text-xs text-white/60">Produtos de higiene e bem-estar</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-[10px] text-green-400">✓</span>
                    <span className="text-xs text-white/60">Atendimento acolhedor e encantador</span>
                  </div>
                </div>
                {/* Conector mobile */}
                <div className="mt-6 flex justify-center lg:hidden">
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-6 w-[2px] bg-gradient-to-b from-orange-500/40 to-transparent" />
                    <svg className="h-4 w-4 text-orange-400/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* ─────────── 2. MEDICAMENTOS — INTERMEDIÁRIO ─────────── */}
              <div className="group relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-7 sm:p-8 transition-all duration-500 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/5 hover:-translate-y-1 lg:mt-[-12px]">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 text-orange-400 text-lg font-bold shadow-lg shadow-orange-500/10">
                    2
                  </span>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-400/70">
                      Intermediário
                    </span>
                    <h3 className="mt-0.5 text-lg font-bold text-white">
                      Capacitação em Medicamentos
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/40">
                  Classes de medicamentos, legislação ANVISA e segurança sanitária. Aprofunde seus conhecimentos técnicos para atuar com responsabilidade e cuidado.
                </p>
                {/* O que você vai aprender */}
                <div className="mt-5 space-y-2.5 border-t border-white/[0.06] pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                    O que você vai aprender
                  </p>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-[10px] text-orange-400">✓</span>
                    <span className="text-xs text-white/60">Principais classes de medicamentos</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-[10px] text-orange-400">✓</span>
                    <span className="text-xs text-white/60">Legislação ANVISA e bulas</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-[10px] text-orange-400">✓</span>
                    <span className="text-xs text-white/60">Segurança e cuidado com o paciente</span>
                  </div>
                </div>
                {/* Conector mobile */}
                <div className="mt-6 flex justify-center lg:hidden">
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-6 w-[2px] bg-gradient-to-b from-orange-500/40 to-transparent" />
                    <svg className="h-4 w-4 text-orange-400/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* ─────────── 3. RECEITAS + ATENDIMENTO — AVANÇADO ─────────── */}
              <div className="group relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-7 sm:p-8 transition-all duration-500 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/5 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 text-orange-400 text-lg font-bold shadow-lg shadow-orange-500/10">
                    3
                  </span>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-400/70">
                      Avançado
                    </span>
                    <h3 className="mt-0.5 text-lg font-bold text-white">
                      Receitas e Atendimento Humanizado
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/40">
                  Receitas controladas, atendimento consultivo e cuidado humanizado. Transforme-se em um profissional de excelência que encanta e faz a diferença.
                </p>
                {/* O que você vai aprender */}
                <div className="mt-5 space-y-2.5 border-t border-white/[0.06] pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                    O que você vai aprender
                  </p>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-[10px] text-orange-400">✓</span>
                    <span className="text-xs text-white/60">Receitas e legislação sanitária</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-[10px] text-orange-400">✓</span>
                    <span className="text-xs text-white/60">Atendimento encantador e acolhedor</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-[10px] text-orange-400">✓</span>
                    <span className="text-xs text-white/60">Cuidado humanizado e empatia</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* CTA da jornada */}
          <div className="mt-12 text-center">
            <a href="/trilhas" className="btn-rd-white">
              Explorar todas as trilhas
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
         SEÇÃO DE MATRÍCULA — MINIMALISTA
         ════════════════════════════════════════════ */}
      <section id="matricular" className="relative py-20 sm:py-28 bg-surface">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Esquerda: Informações */}
            <div className="flex flex-col justify-center">
              <span className="badge-orange inline-flex w-fit">
                Matrícula gratuita
              </span>
              <h2 className="mt-4 text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] text-forest-700 dark:text-white">
                Comece sua jornada
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted max-w-lg">
                {site.descricao}
              </p>

              {/* Pilares */}
              <div className="mt-10 space-y-5">
                {[
                  { icon: "🎯", title: "Aprendizado ativo", desc: "Microlições, quizzes e simulações reais de balcão" },
                  { icon: "🧠", title: "Base científica", desc: "Conteúdo criado e revisado por farmacêutico" },
                  { icon: "🌟", title: "Atendimento encantador", desc: "Acolhimento, cuidado humanizado e empatia como pilares" },
                ].map((p) => (
                  <div key={p.title} className="flex gap-4">
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 dark:bg-orange-900/20 text-lg">
                      {p.icon}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-forest-700 dark:text-white/90">{p.title}</h3>
                      <p className="text-sm text-subtle leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direita: Formulário */}
            <div className="lg:pt-0">
              <div className="rounded-2xl border border-border bg-surface-2/50 p-6 sm:p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 dark:bg-orange-900/20">
                    <svg className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Cadastro</p>
                    <p className="text-xs text-subtle">Pré-requisito: maior de 18 anos</p>
                  </div>
                </div>
                <MatriculaForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
         TRILHAS — PREVIEW (saúde, cuidado — sem "vendas")
         ════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-surface-2">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="badge-green inline-flex">
              Currículo
            </span>
            <h2 className="mt-4 text-[clamp(1.5rem,3vw,2.2rem)] font-bold tracking-[-0.02em] text-forest-700 dark:text-white">
              Quatro trilhas, uma formação completa
            </h2>
            <p className="mt-3 text-muted max-w-xl mx-auto text-sm">
              De perfumaria a medicamentos, receitas e atendimento humanizado — uma jornada contínua de cuidado e excelência.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trilhas.map((t, idx) => (
              <Link
                key={t.id}
                href={`/trilhas/${t.id}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-orange-300/50"
              >
                {/* Barra superior */}
                <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl ${
                  ["bg-green-500", "bg-orange-500", "bg-forest-500", "bg-orange-400"][idx]
                }`} />

                <span className="mt-3 flex h-10 w-10 items-center justify-center rounded-full text-xl bg-surface-2">
                  {["🧴", "💊", "📋", "🤝"][idx]}
                </span>
                <h3 className="mt-4 text-sm font-bold text-foreground">
                  {t.titulo}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-subtle line-clamp-2">
                  {t.subtitulo || t.descricao}
                </p>
                <div className="mt-4 text-xs font-medium text-orange-500 group-hover:underline underline-offset-2">
                  {t.modulos.reduce((n, m) => n + m.aulas.length, 0)} aulas →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="/trilhas" className="btn-rd-outline !text-forest-600 !border-forest-300 hover:!border-orange-500 hover:!text-orange-600">
              Explorar todas as trilhas
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
         CTA FINAL — RD SAÚDE STYLE
         ════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-forest-500 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 pattern-grid opacity-[0.03]" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 text-center">
          <span className="badge-orange inline-flex">
            Gratuito
          </span>
          <h2 className="mt-5 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] text-white">
            Pronto para transformar seu atendimento?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/50">
            Junte-se a centenas de atendentes que já estão se capacitando com a formação mais completa do Brasil.
          </p>
          <div className="mt-8">
            <a href="#matricular" className="btn-rd-white text-base px-10 py-3">
              Quero me matricular
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
