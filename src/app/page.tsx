import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { trilhas, totalAulas } from "@/content/curriculo";
import { MatriculaForm } from "@/components/matricula-form";
import { MoleculesBackground } from "@/components/molecules-background";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Formação para Atendentes Premium de Farmácia",
  description:
    "A formação mais completa do Brasil para atendentes de drogaria e perfumaria. Acolhimento, cuidado humanizado e excelência profissional.",
  openGraph: {
    title: "Formação para Atendentes Premium de Farmácia",
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
         HERO CINEMATOGRÁFICO — MOLÉCULAS FLUTUANTES
         ════════════════════════════════════════════ */}
      <section className="hero-academic">
        {/* Imagem de fundo sutil */}
        <Image
          src="/hero-matricula.jpg"
          alt=""
          fill
          className="hero-bg"
          priority
          sizes="100vw"
        />

        {/* Canvas de moléculas interativas */}
        <MoleculesBackground />

        {/* Grid sutil */}
        <div className="pointer-events-none absolute inset-0 z-[2] opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Conteúdo */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse" />
              Formação gratuita
            </div>

            {/* Título principal */}
            <h1 className="text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold tracking-[-0.03em] leading-[1.05]">
              <span className="text-gradient-premium">
                Atendentes Premium
              </span>
              <br />
              <span className="text-white/90 font-light">
                de Farmácia
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-white/50 font-light">
              A formação que transforma atendentes em{" "}
              <span className="text-white/80 font-medium">profissionais de cuidado</span>
              {" "}— com acolhimento, técnica e excelência no balcão.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {[
                { value: "4", label: "trilhas" },
                { value: `${totalAulasContagem}+`, label: "aulas" },
                { value: "8", label: "badges" },
                { value: "100%", label: "gratuito" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-accent-400 tabular-nums">
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
                className="btn-premium text-sm px-8 py-4"
              >
                Quero me matricular
              </a>
              <a
                href="/trilhas"
                className="btn-premium-outline text-white/70 border-white/15 hover:border-accent-400/50 hover:text-accent-400"
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
         SEÇÃO DE MATRÍCULA — MINIMALISTA
         ════════════════════════════════════════════ */}
      <section id="matricular" className="relative py-20 sm:py-28 bg-surface">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Esquerda: Informações */}
            <div className="flex flex-col justify-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent-500">
                Matrícula gratuita
              </span>
              <h2 className="mt-3 text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] text-navy-800 dark:text-white">
                Comece sua jornada
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted max-w-lg">
                {site.descricao}
              </p>

              {/* Pilares */}
              <div className="mt-10 space-y-5">
                {[
                  { icon: "🎯", title: "Aprendizado ativo", desc: "Microlições, quizzes e simulações reais de balcão" },
                  { icon: "🧠", title: "Base científica", desc: "Conteúdo criado e revisado por farmacêutico" },
                  { icon: "🌟", title: "Cuidado humanizado", desc: "Acolhimento e empatia como pilares do atendimento" },
                ].map((p) => (
                  <div key={p.title} className="flex gap-4">
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-50 dark:bg-accent-900/20 text-lg">
                      {p.icon}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-navy-700 dark:text-white/90">{p.title}</h3>
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-100 dark:bg-accent-900/30">
                    <svg className="h-5 w-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
         TRILHAS — PREVIEW
         ════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent-500">
              Currículo
            </span>
            <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.2rem)] font-bold tracking-[-0.02em] text-navy-800 dark:text-white">
              Quatro trilhas, uma formação completa
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trilhas.map((t, idx) => (
              <Link
                key={t.id}
                href={`/trilhas/${t.id}`}
                className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent-300/50"
              >
                {/* Barra superior */}
                <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${
                  ["from-accent-400 to-accent-500", "from-sky-400 to-sky-500", "from-navy-400 to-navy-500", "from-accent-300 to-accent-400"][idx]
                }`} />

                <span className="mt-3 flex h-10 w-10 items-center justify-center rounded-lg text-xl">
                  {["💊", "🧪", "📋", "🤝"][idx]}
                </span>
                <h3 className="mt-4 text-sm font-bold text-foreground">
                  {t.titulo}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-subtle line-clamp-2">
                  {t.subtitulo || t.descricao}
                </p>
                <div className="mt-4 text-xs font-medium text-accent-500 group-hover:underline underline-offset-2">
                  {t.modulos.reduce((n, m) => n + m.aulas.length, 0)} aulas →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="/trilhas" className="btn-premium-outline text-sm">
              Explorar todas as trilhas
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
         FOOTER — MINIMAL
         ════════════════════════════════════════════ */}
      <footer className="border-t border-border bg-surface py-10">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-xs text-subtle leading-relaxed max-w-md">
              {site.assinatura}
            </p>
            <div className="divider-glow w-24" />
            <p className="text-[10px] text-subtle/60">
              Conteúdo educativo — não substitui orientação do farmacêutico ou médico.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
