import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ChatBotIA } from "@/components/chatbot-ia";
import { HeroSection } from "@/components/hero-section";
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
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <FadeUp>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Escolha sua{" "}
              <span className="bg-gradient-to-r from-gold-600 to-gold-700 bg-clip-text text-transparent dark:from-gold-400 dark:to-gold-500">
                trilha de aprendizado
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
                className="group relative overflow-hidden rounded-2xl border border-white/10 glass-card p-5 sm:p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-gold-500/30 block"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold-500/20 to-gold-600/20 text-gold-600 dark:text-gold-400">
                    <Icon
                      name={(mapaIcones[trilha.icone || ""] || "book") as any}
                      size={18}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
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
                  <div className="h-full w-1/3 bg-gradient-to-r from-gold-600 to-gold-700 dark:from-gold-400 dark:to-gold-500 rounded-full animate-pulse" />
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-gold-600 dark:text-gold-400 font-medium opacity-70 sm:opacity-0 group-hover:opacity-100 transition-opacity">
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

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo-principal">
        <HeroSection />
        <TrilhasSection />
      </main>
      <SiteFooter />
      <ChatBotIA />
    </>
  );
}
