import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroVideo } from "@/components/hero-video";
import { Icon, type IconName } from "@/components/icons";
import { MatriculaForm } from "@/components/matricula-form";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { trilhas, totalAulas, xpTotalDisponivel } from "@/content/curriculo";
import { site } from "@/lib/site";

const pilares: Array<{ icon: IconName; title: string; text: string }> = [
  {
    icon: "shield",
    title: "Conteúdo seguro",
    text: "Baseado em ANVISA, Ministério da Saúde, OMS e boas práticas de dispensação.",
  },
  {
    icon: "zap",
    title: "Aulas curtas",
    text: "Trilhas objetivas para estudar no intervalo, revisar rápido e aplicar no balcão.",
  },
  {
    icon: "award",
    title: "Evolução visível",
    text: "XP, missões, ranking e certificado mantêm o aluno avançando sem perder foco.",
  },
];

const conteudos = [
  { href: "/pressao-arterial", title: "Pressão arterial", text: "Aferição, sinais de alerta e orientação responsável." },
  { href: "/diabetes", title: "Diabetes", text: "Conceitos essenciais para acolher e orientar com clareza." },
  { href: "/bulas-receitas", title: "Bulas e receitas", text: "Leitura, organização e cuidado com medicamentos controlados." },
];

export default function HomePage() {
  const total = totalAulas();
  const trilhasDestaque = trilhas.slice(0, 4);

  return (
    <div className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <Header />
      <main id="conteudo-principal">
        <section className="relative isolate overflow-hidden bg-[#020e0c] text-white">
          <HeroVideo />
          <div className="relative z-10 mx-auto grid min-h-[calc(100svh-3.5rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:min-h-[calc(100svh-4rem)] sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-green-200 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_18px_rgba(92,179,100,0.75)]" />
                Plataforma gratuita
              </div>
              <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-5xl lg:text-7xl">
                {site.nome} para atendentes que querem orientar melhor no balcão.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                Formação EAD enxuta, prática e segura para farmácias: trilhas, simulações, materiais essenciais e matrícula rápida.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#matricula"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-extrabold text-white shadow-[0_18px_48px_rgba(214,110,15,0.28)] transition hover:bg-orange-600"
                >
                  Quero começar grátis
                  <Icon name="arrow" size={18} />
                </Link>
                <Link
                  href="/trilhas"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/18 bg-white/8 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/12"
                >
                  Ver trilhas
                </Link>
              </div>
              <dl className="mt-9 grid max-w-2xl grid-cols-3 gap-3 text-center sm:text-left">
                {[
                  [String(trilhas.length), "trilhas"],
                  [`${total}+`, "aulas"],
                  [`${xpTotalDisponivel()} XP`, "gamificação"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/7 p-4 backdrop-blur">
                    <dt className="text-2xl font-extrabold text-green-200">{value}</dt>
                    <dd className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div id="matricula" className="scroll-mt-24 rounded-[2rem] border border-white/12 bg-white/[0.07] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6">
              <div className="rounded-3xl bg-white p-5 text-foreground shadow-xl dark:bg-surface sm:p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600">Matrícula rápida</p>
                    <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Entrar no SaúdeGPT</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">Preencha 3 campos e receba o acesso ao ambiente de estudos.</p>
                  </div>
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700 dark:bg-green-900/25 dark:text-green-200">Grátis</span>
                </div>
                <MatriculaForm />
              </div>
            </div>
          </div>
        </section>

        <section id="trilhas" className="bg-surface py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">Aprendizagem guiada</p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">O essencial para atender com segurança.</h2>
              </div>
              <Link href="/trilhas" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 text-sm font-bold hover:border-green-400">
                Todas as trilhas
                <Icon name="arrow" size={16} />
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trilhasDestaque.map((trilha) => {
                const aulas = trilha.modulos.reduce((sum, modulo) => sum + modulo.aulas.length, 0);
                return (
                  <Link
                    key={trilha.id}
                    href={`/trilhas/${trilha.id}`}
                    className="group rounded-2xl border border-border bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:border-green-400 hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-700 dark:bg-green-900/25 dark:text-green-200">
                      <Icon name="book" size={22} />
                    </div>
                    <h3 className="mt-4 text-lg font-extrabold tracking-tight">{trilha.titulo}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{trilha.descricao}</p>
                    <div className="mt-4 flex items-center justify-between text-xs font-bold text-subtle">
                      <span>{trilha.modulos.length} módulos</span>
                      <span>{aulas} aulas</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section id="conteudo" className="bg-background py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">UX de estudo</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Menos ruído. Mais ação.</h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                A tela inicial agora foca nos caminhos que realmente movem o aluno: começar, escolher trilha, revisar conteúdo essencial e confiar na fonte.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {conteudos.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-2xl border border-border bg-surface p-5 transition hover:border-orange-300 hover:shadow-md">
                  <h3 className="font-extrabold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="seguranca" className="bg-surface-2 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-3">
              {pilares.map((item) => (
                <article key={item.title} className="rounded-2xl border border-border bg-background p-6">
                  <Icon name={item.icon} size={24} className="text-green-600" />
                  <h3 className="mt-4 text-lg font-extrabold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-forest-500 py-14 text-white sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-200">Pronto para automação</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Cadastro simples, conteúdo preservado e jornada clara.</h2>
            </div>
            <div className="grid gap-3 text-sm text-white/72 sm:grid-cols-3">
              {[
                "Nome, e-mail e WhatsApp.",
                "Payload limpo para API, Supabase e n8n.",
                "Rotas internas e conteúdo do LMS preservados.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/7 p-4">
                  <Icon name="check" size={18} className="text-green-200" />
                  <p className="mt-3">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
