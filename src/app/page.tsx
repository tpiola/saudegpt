import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ChatBotIA } from "@/components/chatbot-ia";
import { HeroSection } from "@/components/hero-section";
import { SecaoBeneficios } from "@/components/secao-beneficios";
import { SecaoComoFunciona } from "@/components/secao-como-funciona";
import { SecaoFAQ } from "@/components/secao-faq";
import { trilhas } from "@/content/curriculo";
import { Icon } from "@/components/icons";

import { FadeUp } from "@/components/fade-up";

function TrilhasSection() {
  const mapaIcones: Record<string, string> = {
    spa: "spa",
    pill: "pill",
    star: "star",
    trending: "trending",
    book: "book",
    stethoscope: "heart",
    heart: "heart",
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Sua{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                jornada de aprendizado
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              {trilhas.length} trilhas, {trilhas.reduce((a, t) => a + t.modulos.length, 0)} módulos, quizzes e prática de balcão.
            </p>
          </div>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {trilhas.map((trilha, idx) => (
            <FadeUp key={trilha.id} delay={idx * 80}>
              <Link
                href={`/trilhas/${trilha.id}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 glass-card p-5 sm:p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-emerald-500/30 block"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-600/20 text-emerald-400">
                    <Icon
                      name={(mapaIcones[trilha.icone || ""] || "book") as any}
                      size={18}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base group-hover:text-emerald-400 transition-colors">
                      {trilha.titulo}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {trilha.modulos?.length || 0} módulos
                    </p>
                  </div>
                </div>
                <p className="relative text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {trilha.descricao}
                </p>
                <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-pulse" />
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Explorar trilha
                  <Icon name="arrow" size={12} />
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/trilhas"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 px-6 text-sm font-bold text-foreground hover:bg-accent/50 transition-colors"
          >
            Ver todas
            <Icon name="arrow" size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function GamificacaoSection() {
  const itens = [
    { icone: "star" as const, label: "XP por aula", cor: "from-emerald-500 to-green-600" },
    { icone: "trending" as const, label: "Níveis", cor: "from-blue-500 to-indigo-600" },
    { icone: "award" as const, label: "Streak diário", cor: "from-orange-500 to-red-500" },
    { icone: "target" as const, label: "Badges", cor: "from-purple-500 to-pink-500" },
    { icone: "compass" as const, label: "Missões", cor: "from-cyan-500 to-teal-500" },
    { icone: "chart" as const, label: "Dashboard", cor: "from-forest-500 to-emerald-600" },
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-gradient-to-br from-[#020e0c] via-[#051f1a] to-[#0a352c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <FadeUp>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Aprendizagem que{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                  engaja
                </span>
              </h2>
              <p className="mt-3 text-sm text-white/60 max-w-lg">
                Cada aula rende XP. Suba de nível, acumule streaks, desbloqueie badges e acompanhe sua evolução.
              </p>
            </FadeUp>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {itens.map((item) => (
                <FadeUp key={item.label} delay={80}>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-2.5 transition hover:bg-white/10 hover:-translate-y-0.5">
                    <div className={`inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${item.cor} shadow-lg`}>
                      <Icon name={item.icone} size={15} className="text-white" />
                    </div>
                    <span className="text-xs font-medium text-white/80">{item.label}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <div className="relative">
            <FadeUp delay={100}>
              <div className="rounded-2xl lg:rounded-3xl border border-white/10 glass-card p-6 sm:p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 shadow-lg">
                    <Icon name="award" size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Dashboard do Aluno</h3>
                    <p className="text-xs text-white/50">Evolução em tempo real</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Nível Atual", valor: "5", cor: "bg-emerald-500/10 text-emerald-300" },
                    { label: "XP Total", valor: "1.250 XP", cor: "bg-white/5 text-white" },
                    { label: "Streak", valor: "7 dias", cor: "bg-orange-500/10 text-orange-300" },
                    { label: "Badges", valor: "8 / 12", cor: "bg-purple-500/10 text-purple-300" },
                  ].map((item) => (
                    <div key={item.label} className={`flex items-center justify-between rounded-xl ${item.cor} px-3 py-2.5 transition hover:scale-[1.02]`}>
                      <span className="text-xs text-white/60">{item.label}</span>
                      <span className="text-sm font-bold">{item.valor}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-white/40 mb-2">
                    <span>Próximo nível: 2.000 XP</span>
                    <span>62%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-emerald-400 to-green-500 animate-pulse" />
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#020e0c] via-[#051f1a] to-[#0a352c]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(52,211,153,0.15)_0%,transparent_50%)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Pronto para{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              transformar seu atendimento
            </span>
            ?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/60">
            Gratuito. No seu ritmo. Conteúdo que faz diferença no dia a dia.
          </p>
        </FadeUp>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/trilhas"
            className="group relative inline-flex h-12 sm:h-14 items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 sm:px-8 text-sm sm:text-base font-bold text-white shadow-xl shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10">Começar agora</span>
            <Icon name="arrow" size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-0 bg-gradient-to-r from-emerald-600 to-green-700" />
          </Link>
          <Link
            href="/sobre"
            className="inline-flex h-12 sm:h-14 items-center gap-2 rounded-2xl border border-white/20 px-6 sm:px-8 text-sm sm:text-base font-medium text-white/80 backdrop-blur-sm transition-all hover:border-white/40 hover:text-white hover:bg-white/5"
          >
            Saiba mais
            <Icon name="arrow" size={16} />
          </Link>
        </div>
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
        <SecaoBeneficios />
        <TrilhasSection />
        <SecaoComoFunciona />
        <GamificacaoSection />
        <SecaoFAQ />
        <CtaSection />
      </main>
      <SiteFooter />
      <ChatBotIA />
    </>
  );
}
