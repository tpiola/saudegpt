import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroVideo } from "@/components/hero-video";
import { Icon, type IconName } from "@/components/icons";
import { MatriculaForm } from "@/components/matricula-form";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { trilhas, totalAulas, xpTotalDisponivel } from "@/content/curriculo";

// Pilares com imagem temática de fundo (assets locais otimizados).
const pilares: Array<{ icon: IconName; title: string; text: string; img: string }> = [
  {
    icon: "shield",
    title: "Conteúdo Verificado",
    text: "Baseado em ANVISA, Ministério da Saúde e OMS — revisado por farmacêutico.",
    img: "/hero/saude-cuidado.jpg",
  },
  {
    icon: "zap",
    title: "Aulas Rápidas",
    text: "Trilhas de 3 a 8 minutos. Estude no intervalo e evolua todos os dias.",
    img: "/hero/saude-bem-estar.jpg",
  },
  {
    icon: "award",
    title: "Evolução Visível",
    text: "XP, níveis, missões e ranking mostram a sua evolução real, trilha após trilha.",
    img: "/hero/vidas-saudaveis.jpg",
  },
];

// Imagem temática por trilha (capa do card na seção "essencial").
const capaTrilha: Record<string, string> = {
  perfumaria: "/trilha-perfumaria.jpg",
  medicamentos: "/trilha-medicamentos.jpg",
  operacional: "/trilha-operacional.jpg",
  encantamento: "/trilha-encantamento.jpg",
  fundamentos: "/health-professional.jpg",
  pratica: "/pharmacy-counter.jpg",
  "servicos-cuidado": "/hero/farmacia-atendimento.jpg",
};

const iconeTrilha: Record<string, IconName> = {
  perfumaria: "spa",
  medicamentos: "pill",
  operacional: "star",
  encantamento: "heart",
  fundamentos: "book",
  pratica: "target",
  "servicos-cuidado": "shield",
};

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
          <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#020e0c]/95 via-[#020e0c]/60 to-[#0d3a32]/80" />
          <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-emerald-500/8 blur-[80px] z-[1] pointer-events-none" />
          <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-orange-500/6 blur-[60px] z-[1] pointer-events-none" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid min-h-[calc(100svh-3.5rem)] lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
              <div className="flex flex-col justify-center max-w-3xl mx-auto lg:mx-0">
                <div className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-400/20 bg-emerald-400/8 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300 backdrop-blur-sm mb-6">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                  Health Learning OS
                </div>
                <h1 className="text-[clamp(2rem,6vw,4.4rem)] font-extrabold leading-[1.02] tracking-tighter mb-6">
                  <span className="block text-white">Formação para</span>
                  <span className="block text-gradient-premium">Atendentes</span>
                  <span className="block text-white/90">de Farmácia</span>
                </h1>
                <p className="text-base sm:text-lg leading-relaxed text-white/65 max-w-xl mb-8">
                  Trilhas curtas e práticas para você cuidar da saúde de cada cliente com segurança e confiança.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <Link href="#matricula" className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-2xl bg-orange-500 px-7 text-base font-extrabold text-white shadow-[0_8px_32px_rgba(249,115,22,0.35)] transition-all hover:bg-orange-400 hover:-translate-y-0.5 active:scale-95">Entrar <Icon name="arrow" size={18} /></Link>
                  <Link href="/trilhas" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/6 px-7 text-base font-bold text-white/90 backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-0.5">Ver trilhas</Link>
                </div>
                <dl className="grid max-w-lg grid-cols-3 gap-3">
                  {[[String(trilhas.length), "trilhas"], [String(total) + "+", "aulas"], [String(xpTotal) + " XP", "XP"]].map(([v, l]) => (
                    <div key={l} className="rounded-2xl border border-white/8 bg-white/5 p-4 text-center backdrop-blur-sm"><dt className="text-2xl font-extrabold text-emerald-300">{v}</dt><dd className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/40">{l}</dd></div>
                  ))}
                </dl>
              </div>
              <div id="matricula" className="scroll-mt-20 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                {/* Card de acesso com fundo verde + foto de farmacêutico entregando medicamento */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 p-1.5 shadow-2xl">
                  <Image
                    src="/hero/farmacia-atendimento.jpg"
                    alt="Farmacêutico entregando um medicamento ao paciente no balcão"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/92 via-emerald-800/88 to-[#06281f]/94" />
                  <div className="relative rounded-[1.4rem] bg-white/95 p-6 text-foreground shadow-xl backdrop-blur-sm dark:bg-surface/95">
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">Comece agora</p>
                    <h2 className="text-2xl font-extrabold tracking-tight mb-1.5">Entrar no SaúdeGPT</h2>
                    <p className="text-sm leading-relaxed text-muted mb-4">Preencha 3 campos e comece a evoluir no balcão.</p>
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
                const capa = capaTrilha[trilha.id] ?? "/hero/saude-cuidado.jpg";
                const ic = iconeTrilha[trilha.id] ?? "book";
                return (
                  <Link key={trilha.id} href={"/trilhas/" + trilha.id} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all hover:-translate-y-1.5 hover:shadow-xl hover:border-emerald-400/50">
                    <div className="relative h-32 w-full overflow-hidden">
                      <Image
                        src={capa}
                        alt={trilha.titulo}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020e0c]/85 via-[#020e0c]/30 to-transparent" />
                      <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-md">
                        <Icon name={ic} size={20} />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-extrabold tracking-tight mb-2">{trilha.titulo}</h3>
                      <p className="text-sm leading-relaxed text-muted flex-1 line-clamp-3">{trilha.descricao}</p>
                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-xs font-bold text-subtle">{trilha.modulos.length} módulos · {aulas} aulas</span>
                        <Icon name="arrow" size={14} className="text-muted transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
        <section id="seguranca" className="bg-gradient-to-b from-slate-50 to-emerald-50/40 py-16 sm:py-24 dark:from-slate-950 dark:to-emerald-950/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">Por que funciona</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Feito para quem trabalha.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {pilares.map((item) => (
                <article key={item.title} className="group overflow-hidden rounded-3xl border border-border bg-surface transition-all hover:-translate-y-1 hover:shadow-xl hover:border-emerald-400/40">
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image
                      src={item.img}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020e0c]/80 via-[#020e0c]/25 to-transparent" />
                    <div className="absolute left-5 bottom-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-md">
                      <Icon name={item.icon} size={24} />
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-extrabold tracking-tight mb-3">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0a3b2e] via-[#0d3a32] to-[#06281f] py-16 sm:py-24 text-white">
          <div className="absolute inset-0 pattern-grid opacity-20 pointer-events-none" />
          <div className="absolute top-0 right-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">Seu próximo paciente merece o seu melhor.</h2>
            <p className="text-lg text-white/65 max-w-2xl mx-auto mb-10">Junte-se a milhares transformando seu atendimento e cuidando da saúde de cada cliente.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="#matricula" className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-2xl bg-orange-500 px-8 text-base font-extrabold text-white shadow-[0_8px_32px_rgba(249,115,22,0.4)] transition-all hover:bg-orange-400 hover:-translate-y-0.5">Entrar <Icon name="arrow" size={18} /></Link>
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
