import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CookieConsent } from "@/components/CookieConsent";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { GuiaGPT } from "@/components/GuiaGPT";
import { trilhas } from "@/content/curriculo";

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden min-h-[90dvh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#020e0c] via-[#051f1a] to-[#0a352c]" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,153,0.3),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(251,146,60,0.15),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300 backdrop-blur-sm mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              Health Learning OS
            </div>

            <h1 className="text-[clamp(2rem,7vw,4rem)] font-extrabold leading-[1.05] tracking-tighter text-white mb-4">
              Formação que{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-300 bg-clip-text text-transparent">
                transforma
              </span>{" "}
              atendentes em{" "}
              <span className="bg-gradient-to-r from-orange-300 to-orange-400 bg-clip-text text-transparent">
                profissionais da saúde
              </span>
            </h1>

            <p className="text-sm sm:text-base text-white/60 max-w-lg mb-6 leading-relaxed">
              Trilhas curtas, práticas e baseadas em ANVISA, OMS e Ministério da Saúde.
              Estude no seu ritmo, ganhe XP, desbloqueie conquistas e transforme cada atendimento.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/trilhas"
                className="inline-flex h-12 sm:h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 sm:px-8 text-sm sm:text-base font-extrabold text-white shadow-[0_8px_32px_rgba(52,211,153,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(52,211,153,0.4)] active:scale-95"
              >
                Começar agora
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link
                href="/sobre"
                className="inline-flex h-12 sm:h-14 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 sm:px-7 text-sm sm:text-base font-bold text-white/80 backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-0.5"
              >
                Saiba mais
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 max-w-xs">
              {[
                [String(trilhas.length), "Trilhas"],
                [String(trilhas.reduce((acc, t) => acc + t.modulos.length, 0)), "Módulos"],
                ["2.450", "XP Total"],
              ].map(([valor, label]) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center backdrop-blur-sm">
                  <div className="text-lg sm:text-xl font-extrabold text-emerald-300">{valor}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-white/40">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl lg:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-600/10" />
              <div className="relative p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-2 w-2 rounded-full bg-red-400" />
                  <div className="h-2 w-2 rounded-full bg-yellow-400" />
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <span className="ml-2 text-[11px] text-white/40 font-mono">simulador — atendimento</span>
                </div>
                <div className="space-y-3">
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-xs text-white/60 mb-1">Cliente:</p>
                    <p className="text-sm text-white/90">&quot;Estou com dor de cabeça faz 3 dias. Qual remédio o senhor recomenda?&quot;</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="rounded-lg bg-emerald-500/20 border border-emerald-500/30 px-3 py-2 text-xs text-emerald-300">
                      Perguntar há quanto tempo
                    </span>
                    <span className="rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-xs text-white/60">
                      Recomendar
                    </span>
                  </div>
                  <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3">
                    <p className="text-xs text-emerald-300/80 mb-1">✅ Boa prática:</p>
                    <p className="text-xs text-white/80 leading-relaxed">
                      &quot;Não posso recomendar medicamentos, mas posso verificar se você já consultou um médico.
                      Para dor de cabeça persistente, é importante buscar avaliação profissional.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrilhasSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Sua jornada de aprendizagem
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            {trilhas.length} trilhas completas, cada uma com módulos práticos e quizzes para fixar o conteúdo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {trilhas.map((trilha) => (
            <Link
              key={trilha.id}
              href={`/trilhas/${trilha.id}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-card to-card/50 p-5 sm:p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-emerald-500/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{trilha.icone || "📚"}</span>
                <div>
                  <h3 className="font-bold text-sm sm:text-base group-hover:text-emerald-400 transition-colors">
                    {trilha.titulo}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {trilha.modulos?.length || 0} módulos
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {trilha.descricao}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Explorar trilha
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/trilhas"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 px-6 text-sm font-bold text-foreground hover:bg-accent/50 transition-colors"
          >
            Ver todas as trilhas
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ComoFuncionaSection() {
  const passos = [
    { icone: "📝", titulo: "Escolha sua trilha", desc: "Selecione entre 7 trilhas baseadas em ANVISA, OMS e Ministério da Saúde." },
    { icone: "🎬", titulo: "Assista às aulas", desc: "Vídeos curtos de 3 a 8 minutos com exemplos reais de balcão." },
    { icone: "🧠", titulo: "Pratique com quizzes", desc: "Questões interativas com feedback imediato para fixar o conteúdo." },
    { icone: "🏆", titulo: "Ganhe XP e badges", desc: "Cada aula concluída rende experiência. Suba de nível e desbloqueie conquistas." },
    { icone: "📊", titulo: "Acompanhe seu progresso", desc: "Dashboard completo com gráficos, streak, pontos fortes e áreas de melhoria." },
    { icone: "🎯", titulo: "Transforme seu atendimento", desc: "Aplique no dia a dia o que aprendeu e seja referência na sua farmácia." },
  ];

  return (
    <section className="py-20 sm:py-28 bg-accent/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Como funciona
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Uma jornada simples e estruturada para você evoluir todos os dias.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {passos.map((passo, i) => (
            <div key={i} className="relative rounded-2xl border border-white/10 bg-card p-5 sm:p-6">
              <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-bold text-white">
                {i + 1}
              </div>
              <span className="text-3xl mb-3 block">{passo.icone}</span>
              <h3 className="font-bold text-sm sm:text-base mb-2">{passo.titulo}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{passo.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GamificacaoSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              Aprendizagem que{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                engaja
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              Cada aula concluída rende XP. Suba de nível, acumule streaks, desbloqueie badges
              e veja sua evolução em gráficos claros no seu dashboard personalizado.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icone: "⚡", label: "XP por aula" },
                { icone: "📈", label: "Níveis" },
                { icone: "🔥", label: "Streak diário" },
                { icone: "🏅", label: "Badges" },
                { icone: "🎯", label: "Missões" },
                { icone: "📊", label: "Dashboard" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 rounded-xl border border-white/10 bg-card px-3 py-2.5">
                  <span>{item.icone}</span>
                  <span className="text-xs font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl lg:rounded-3xl border border-white/10 bg-gradient-to-br from-card to-card/50 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🏆</span>
                <div>
                  <h3 className="font-bold">Dashboard do Aluno</h3>
                  <p className="text-xs text-muted-foreground">Acompanhe sua evolução em tempo real</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-emerald-500/10 px-3 py-2">
                  <span className="text-xs text-muted-foreground">Nível Atual</span>
                  <span className="text-sm font-bold">5</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-accent/50 px-3 py-2">
                  <span className="text-xs text-muted-foreground">XP Total</span>
                  <span className="text-sm font-bold">1.250 XP</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-orange-500/10 px-3 py-2">
                  <span className="text-xs text-muted-foreground">Streak</span>
                  <span className="text-sm font-bold">🔥 7 dias</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-purple-500/10 px-3 py-2">
                  <span className="text-xs text-muted-foreground">Badges</span>
                  <span className="text-sm font-bold">8 / 12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-[#020e0c] via-[#051f1a] to-[#0a352c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">
          Pronto para transformar seu atendimento?
        </h2>
        <p className="text-sm sm:text-base text-white/60 max-w-lg mx-auto mb-8">
          Junte-se a centenas de atendentes que já estão evoluindo com a plataforma.
          Grátis. No seu ritmo. Com conteúdo que faz diferença.
        </p>
        <Link
          href="/trilhas"
          className="inline-flex h-12 sm:h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 sm:px-10 text-sm sm:text-base font-extrabold text-white shadow-[0_8px_32px_rgba(52,211,153,0.3)] transition-all hover:-translate-y-0.5 active:scale-95"
        >
          Começar agora
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </Link>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo-principal">
        <HeroSection />
        <TrilhasSection />
        <ComoFuncionaSection />
        <GamificacaoSection />
        <CtaSection />
      </main>
      <SiteFooter />
      <CookieConsent />
      <WhatsAppFloat />
      <GuiaGPT />
    </>
  );
}
