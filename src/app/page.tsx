import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroVideo } from "@/components/hero-video";
import { Icon, type IconName } from "@/components/icons";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { trilhas, totalAulas, xpTotalDisponivel } from "@/content/curriculo";
import { ParticleBg, TypewriterPalavras } from "@/components/efeitos";

/* ── 4Ps do Cuidado Farmacêutico ── */
const quatroPs: Array<{ icon: IconName; title: string; text: string; items: string[]; emoji: string }> = [
  {
    icon: "heart", emoji: "🏥",
    title: "Primeira Atenção",
    text: "A farmácia como porta de entrada da saúde. Acolhimento, avaliação clínica, dispensação orientada e acompanhamento contínuo do paciente.",
    items: ["Acolhimento humanizado", "Avaliação clínica", "Dispensação orientada", "Acompanhamento contínuo"],
  },
  {
    icon: "zap", emoji: "🌱",
    title: "Promoção",
    text: "Construção de saúde com foco na qualidade de vida. Alimentação, atividade física e apoio emocional como pilares do bem-estar.",
    items: ["Alimentação saudável", "Atividade física", "Apoio emocional", "Qualidade de vida"],
  },
  {
    icon: "shield", emoji: "🛡️",
    title: "Proteção",
    text: "Segurança no uso de medicamentos. Monitoramento, farmacovigilância e protocolos que previnem interações e reações adversas.",
    items: ["Monitoramento de medicamentos", "Interações e reações", "Farmacovigilância", "Protocolos de segurança"],
  },
  {
    icon: "trending", emoji: "🔬",
    title: "Prevenção",
    text: "Antecipação de riscos com avaliação de histórico, tecnologia preditiva e intervenções precoces. Eduque o paciente a cuidar de si.",
    items: ["Avaliação de riscos", "Intervenções precoces", "Educação do paciente", "Tecnologia preditiva"],
  },
];

/* ── Estatísticas ── */
const estatisticas = [
  { valor: "7", label: "Trilhas completas", emoji: "📚" },
  { valor: "151+", label: "Aulas disponíveis", emoji: "🎓" },
  { valor: "9.305", label: "XP total", emoji: "⭐" },
];

/* ── Benefícios com emoji ── */
const beneficios = [
  { emoji: "🧠", titulo: "Conteúdo Verificado", texto: "Baseado em ANVISA, Ministério da Saúde e OMS. Tudo com respaldo científico." },
  { emoji: "⚡", titulo: "Aulas Rápidas", texto: "Trilhas de 3 a 8 minutos. Estude no intervalo, no transporte, onde couber." },
  { emoji: "🏆", titulo: "Evolução Visível", texto: "XP, missões, rankings e certificado. Cada aula te leva mais longe." },
  { emoji: "🩺", titulo: "Simulações Reais", texto: "Casos clínicos, OSCE, quizzes interativos. Aprenda praticando." },
  { emoji: "📱", titulo: "Mobile First", texto: "Plataforma feita pro celular. Estude quando e onde quiser." },
  { emoji: "💬", titulo: "IA no Balcão", texto: "Chatbot inteligente pra tirar dúvidas na hora do atendimento." },
];

export default function HomePage() {
  const total = totalAulas();
  const trilhasDestaque = trilhas.slice(0, 4);
  const xpTotal = xpTotalDisponivel();

  return (
    <div className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <Header />

      <main id="conteudo-principal">

        {/* ════════════════════════════════════════════
            HERO — Farmácia como ponto de cuidado
            ════════════════════════════════════════════ */}
        <section className="relative isolate flex min-h-[90svh] items-center overflow-hidden bg-[#020e0c] text-white">
          <HeroVideo />
          <ParticleBg />

          {/* Overlay gradiente */}
          <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#020e0c]/95 via-[#020e0c]/60 to-[#0d3a32]/80" />
          <div className="absolute left-1/3 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px] z-[1]" />
          <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-500/8 blur-[100px] z-[1]" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="mx-auto max-w-4xl text-center">

              {/* Badge pulsante */}
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Formação para Atendentes de Farmácia
              </div>

              {/* Título hero */}
              <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold leading-[0.9] tracking-tighter">
                <span className="block text-white">Entregue saúde</span>
                <span className="block bg-gradient-to-r from-emerald-300 via-emerald-400 to-orange-300 bg-clip-text text-transparent">
                  em cada atendimento.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
                A plataforma que forma atendentes preparados para acolher, orientar e cuidar 
                — com técnica, segurança e humanidade.
                <br />
                <TypewriterPalavras
                  palavras={["🧑‍⚕️ Aprenda na prática.", "📚 Estude no seu ritmo.", "🏆 Evolua a cada aula.", "🩺 Transforme vidas."]}
                  className="mt-2 inline-block text-emerald-300 font-bold"
                />
              </p>

              {/* CTAs — sem grátis, sem matrícula */}
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/trilhas"
                  className="group relative inline-flex min-h-14 items-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 text-base font-bold text-white shadow-[0_8px_32px_rgba(16,185,129,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(16,185,129,0.45)] active:scale-[0.98]"
                >
                  <span className="relative z-10">Explorar trilhas</span>
                  <Icon name="arrow" size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-0 bg-gradient-to-r from-emerald-700 to-emerald-800" />
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex min-h-14 items-center gap-2 rounded-2xl border border-white/20 bg-white/8 px-8 text-base font-semibold text-white/90 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/12 hover:text-white"
                >
                  <Icon name="play" size={18} />
                  Acessar plataforma
                </Link>
              </div>

              {/* Estatísticas */}
              <div className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-4">
                {estatisticas.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-white/8 bg-white/5 p-4 text-center backdrop-blur-sm">
                    <div className="text-2xl">{s.emoji}</div>
                    <dt className="mt-1 text-2xl font-extrabold text-emerald-300">{s.valor}</dt>
                    <dd className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-white/40">{s.label}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            TRILHAS — Aprendizagem guiada
            ════════════════════════════════════════════ */}
        <section id="trilhas" className="bg-surface py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                🎯 Aprendizagem guiada
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                O essencial para{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-orange-500 bg-clip-text text-transparent">
                  atender com segurança
                </span>.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted">
                Conteúdo organizado em trilhas curtas, com aulas práticas e simulações reais do dia a dia da farmácia.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {trilhasDestaque.map((trilha, i) => {
                const aulas = trilha.modulos.reduce((s, m) => s + m.aulas.length, 0);
                const emojisTrilha = ["🧴", "💊", "📊", "❤️"];
                return (
                  <Link
                    key={trilha.id}
                    href={"/trilhas/" + trilha.id}
                    className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-400/50"
                  >
                    {/* Emoji decorativo no topo */}
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 text-2xl dark:from-emerald-900/40 dark:to-emerald-800/30">
                      {emojisTrilha[i % emojisTrilha.length]}
                    </div>
                    <h3 className="text-lg font-extrabold tracking-tight mb-2">{trilha.titulo}</h3>
                    <p className="text-sm leading-relaxed text-muted flex-1 line-clamp-3">{trilha.descricao}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-subtle">
                        📖 {trilha.modulos.length} módulos · {aulas} aulas
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-all group-hover:bg-emerald-100 group-hover:translate-x-1 dark:bg-emerald-900/30 dark:text-emerald-400">
                        <Icon name="arrow" size={14} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/trilhas"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border px-6 text-sm font-bold hover:border-emerald-400 transition-colors"
              >
                Ver todas as trilhas <Icon name="arrow" size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            BENEFÍCIOS — Por que a plataforma funciona
            ════════════════════════════════════════════ */}
        <section className="bg-surface-2 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                💡 Por que funciona
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Feito para{' '}
                <span className="bg-gradient-to-r from-orange-500 to-emerald-500 bg-clip-text text-transparent">
                  quem trabalha
                </span>.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {beneficios.map((b) => (
                <article
                  key={b.titulo}
                  className="group rounded-3xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-emerald-400/40"
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 text-3xl dark:from-emerald-900/30 dark:to-emerald-800/20">
                    {b.emoji}
                  </div>
                  <h3 className="text-xl font-extrabold tracking-tight mb-3">{b.titulo}</h3>
                  <p className="text-sm leading-relaxed text-muted">{b.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            4Ps DO CUIDADO FARMACÊUTICO
            ════════════════════════════════════════════ */}
        <section className="bg-surface py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                🏆 Os 4Ps do Cuidado
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Domine cada{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  pilar do cuidado
                </span>.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                A farmácia como ponto de cuidado integral: da <strong>Primeira Atenção</strong> à <strong>Prevenção</strong>, 
                passando pela <strong>Promoção</strong> da saúde e <strong>Proteção</strong> do paciente.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {quatroPs.map((item) => (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-background to-surface-2 p-8 transition-all hover:-translate-y-1.5 hover:shadow-xl hover:border-emerald-400/40"
                >
                  {/* Emoji grande decorativo */}
                  <div className="mb-5 text-4xl">{item.emoji}</div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/15 to-teal-500/10">
                    <Icon name={item.icon} size={22} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-extrabold tracking-tight mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted mb-4">{item.text}</p>
                  <ul className="space-y-1.5">
                    {item.items.map((sub) => (
                      <li key={sub} className="flex items-start gap-2 text-xs text-subtle">
                        <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            CTA FINAL — Foco no paciente
            ════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-forest-800 to-forest-900 py-20 sm:py-28 text-white">
          <div className="absolute inset-0 pattern-grid opacity-20 pointer-events-none" />
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <div className="mb-6 text-6xl">🩺</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Seu próximo paciente<br />
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-orange-300 bg-clip-text text-transparent">
                merece o seu melhor.
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/65 mb-10">
              Junte-se a milhares de atendentes que estão transformando o atendimento 
              nas farmácias do Brasil — com conhecimento, segurança e cuidado.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/trilhas"
                className="group relative inline-flex min-h-14 items-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 text-base font-bold text-white shadow-[0_8px_32px_rgba(16,185,129,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(16,185,129,0.5)] active:scale-[0.98]"
              >
                <span className="relative z-10">Começar agora</span>
                <Icon name="arrow" size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-0 bg-gradient-to-r from-emerald-600 to-emerald-700" />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex min-h-14 items-center gap-2 rounded-2xl border border-white/20 bg-white/8 px-8 text-base font-semibold text-white/90 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/12 hover:text-white"
              >
                <Icon name="play" size={18} />
                Explorar plataforma
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
