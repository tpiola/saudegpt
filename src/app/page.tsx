import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroVideo } from "@/components/hero-video";
import { Icon, type IconName } from "@/components/icons";
import { MatriculaForm } from "@/components/matricula-form";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { trilhas, totalAulas, xpTotalDisponivel } from "@/content/curriculo";
import { ParticleBg, TypewriterPalavras } from "@/components/efeitos";

/* ── 4Ps da Formação em Farmácia ── */
const quatroPs: Array<{ icon: IconName; title: string; text: string }> = [
  { icon: "shield", title: "🧪 Perícia", text: "Domine medicamentos, legislação ANVISA, portarias e boas práticas. Base técnica para atender com segurança." },
  { icon: "zap", title: "💊 Prática", text: "Receituário, dispensação, OTC/MIP, balcão seguro e simulações reais do dia a dia da farmácia." },
  { icon: "heart", title: "🤝 Pessoas", text: "Atendimento humanizado, escuta ativa, acolhimento e comunicação que fideliza o paciente." },
  { icon: "trending", title: "📈 Performance", text: "Vendas com ética, métricas de resultado, plano de carreira e evolução profissional contínua." },
];

export default function HomePage() {
  const total = totalAulas();
  const trilhasDestaque = trilhas.slice(0, 4);
  const xpTotal = xpTotalDisponivel();
  return (
    <div className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <Header />
      <main id="conteudo-principal">
        <section className="relative isolate overflow-hidden bg-[#020e0c] text-white min-h-[100svh]">
          <HeroVideo />
          <ParticleBg />
          <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#020e0c]/95 via-[#020e0c]/60 to-[#0d3a32]/80" />
          <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-emerald-500/8 blur-[80px] z-[1] pointer-events-none" />
          <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-orange-500/6 blur-[60px] z-[1] pointer-events-none" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid min-h-[calc(100svh-3.5rem)] lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
              <div className="flex flex-col justify-center max-w-3xl mx-auto lg:mx-0">
                <div className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-400/20 bg-emerald-400/8 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300 backdrop-blur-sm mb-6">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                  Plataforma 100% gratuita
                </div>
                <h1 className="text-[clamp(2.2rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-tighter mb-6">
                  <span className="block text-white">Domine o</span>
                  <span className="block text-gradient-premium">atendimento</span>
                  <span className="block text-white/90">na farmácia.</span>
                </h1>
                <p className="text-base sm:text-lg leading-relaxed text-white/65 max-w-xl mb-8">
                  Trilhas EAD curtas, simulações reais e IA no balcão.
                  <br />
                  <TypewriterPalavras
                    palavras={["atendente de farmácia", "profissional de saúde", "especialista em vendas", "referência no balcão"]}
                    className="text-emerald-300 font-bold"
                  />
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <Link href="#matricula" className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-2xl bg-orange-500 px-7 text-base font-extrabold text-white shadow-[0_8px_32px_rgba(249,115,22,0.35)] transition-all hover:bg-orange-400 hover:-translate-y-0.5 active:scale-95">Começar agora, grátis <Icon name="arrow" size={18} /></Link>
                  <Link href="/trilhas" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/6 px-7 text-base font-bold text-white/90 backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-0.5">Ver trilhas</Link>
                </div>
                <dl className="grid max-w-lg grid-cols-3 gap-3">
                  {[[String(trilhas.length), "trilhas"], [String(total) + "+", "aulas"], [String(xpTotal) + " XP", "XP"]].map(([v, l]) => (
                    <div key={l} className="rounded-2xl border border-white/8 bg-white/5 p-4 text-center backdrop-blur-sm"><dt className="text-2xl font-extrabold text-emerald-300">{v}</dt><dd className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/40">{l}</dd></div>
                  ))}
                </dl>
              </div>
              <div id="matricula" className="scroll-mt-20 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-1.5 shadow-2xl backdrop-blur-xl">
                  <div className="rounded-[1.4rem] bg-white p-6 text-foreground shadow-xl dark:bg-surface">
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">Acesso imediato</p>
                    <h2 className="text-2xl font-extrabold tracking-tight mb-1.5">Entrar no SaúdeGPT</h2>
                    <p className="text-sm leading-relaxed text-muted mb-4">Preencha 3 campos e acesse agora.</p>
                    <MatriculaForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="trilhas" className="bg-surface py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">Aprendizagem guiada</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">O essencial para atender com segurança.</h2>
              </div>
              <Link href="/trilhas" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-bold hover:border-emerald-400 transition-colors">Ver todas <Icon name="arrow" size={15} /></Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trilhasDestaque.map((trilha) => {
                const aulas = trilha.modulos.reduce((s, m) => s + m.aulas.length, 0);
                return (
                  <Link key={trilha.id} href={"/trilhas/" + trilha.id} className="group flex flex-col rounded-3xl border border-border bg-background p-6 transition-all hover:-translate-y-1.5 hover:shadow-xl hover:border-emerald-400/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 mb-5"><Icon name="book" size={22} /></div>
                    <h3 className="text-lg font-extrabold tracking-tight mb-2">{trilha.titulo}</h3>
                    <p className="text-sm leading-relaxed text-muted flex-1 line-clamp-3">{trilha.descricao}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs font-bold text-subtle">{trilha.modulos.length} módulos · {aulas} aulas</span>
                      <Icon name="arrow" size={14} className="text-muted" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
        <section id="seguranca" className="bg-surface-2 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">Os 4Ps da Farmácia</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Domine cada pilar.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {quatroPs.map((item) => (
                <article key={item.title} className="group rounded-3xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-emerald-400/40">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-500/15 to-teal-500/10 flex items-center justify-center mb-6"><Icon name={item.icon} size={26} className="text-emerald-600" /></div>
                  <h3 className="text-xl font-extrabold tracking-tight mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden bg-forest-500 py-16 sm:py-24 text-white">
          <div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">Seu próximo paciente merece o seu melhor.</h2>
            <p className="text-lg text-white/65 max-w-2xl mx-auto mb-10">Junte-se a milhares transformando seu atendimento.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="#matricula" className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-2xl bg-orange-500 px-8 text-base font-extrabold text-white shadow-[0_8px_32px_rgba(249,115,22,0.4)] transition-all hover:bg-orange-400 hover:-translate-y-0.5">Começar grátis <Icon name="arrow" size={18} /></Link>
              <Link href="/trilhas" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/8 px-8 text-base font-bold text-white backdrop-blur transition-all hover:bg-white/14 hover:-translate-y-0.5">Explorar trilhas</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
