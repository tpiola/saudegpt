import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { trilhas, totalAulas } from "@/content/curriculo";
import { Botao, DividerGlow } from "@/components/ui";
import { Icon } from "@/components/icons";
import { ProgressoTrilhaBadge } from "@/components/progresso-cliente";

export const metadata: Metadata = {
  title: "Trilhas da Formação",
  description:
    "Explore as trilhas da formação completa para atendentes de farmácia — da perfumaria aos medicamentos, serviços farmacêuticos, excelência operacional e atendimento humanizado.",
};

// Imagens de trilha disponíveis em /public/
const trilhaImagens = [
  "/imagens/trilha_perfumaria.webp",
  "/imagens/trilha_medicamentos.webp",
  "/imagens/trilha_operacional.webp",
  "/imagens/trilha_encantamento.webp",
];

const coresTrilha = [
  { barra: "bg-gradient-to-r from-green-400 to-green-500", badge: "green" },
  { barra: "bg-gradient-to-r from-orange-400 to-orange-500", badge: "orange" },
  { barra: "bg-gradient-to-r from-forest-400 to-green-400", badge: "green" },
  { barra: "bg-gradient-to-r from-orange-400 to-orange-500", badge: "orange" },
];

// Cards de sabia que? sobre saúde preventiva + 4Ps
const sabiaQueCards = [
  {
    icone: "moon" as const,
    titulo: "Qualidade do sono e saúde",
    texto:
      "Dormir bem regula o sistema imunológico, melhora a memória e reduz o estresse. Na farmácia, perguntar sobre o sono do cliente pode revelar necessidades de suplementos ou fitoterápicos.",
    badge: "Saúde preventiva",
    bgImg: "/imagens/sleep_quality.webp",
  },
  {
    icone: "droplet" as const,
    titulo: "A importância da hidratação",
    texto:
      "Beber água suficiente melhora a absorção de medicamentos, a elasticidade da pele e o funcionamento dos rins. Lembre os clientes: 2 litros por dia é a meta mínima.",
    badge: "Bem-estar",
    bgImg: "/imagens/hydration_water.webp",
  },
  {
    icone: "ruler" as const,
    titulo: "Bioimpedância na farmácia",
    texto:
      "A bioimpedância avalia composição corporal — gordura, massa magra e hidratação. É um serviço farmacêutico que agrega valor e fideliza clientes (Produto + Serviço).",
    badge: "Inovação",
    bgImg: "/imagens/hero_pills.webp",
  },
  {
    icone: "heart" as const,
    titulo: "Higienização do sono",
    texto:
      "Criar uma rotina noturna consistente — sem telas 1h antes, quarto escuro e fresco — melhora a qualidade do sono. Ofereça dicas + produtos como melatonina (com orientação).",
    badge: "Sleep hygiene",
    bgImg: "/imagens/sleep_hygiene.webp",
  },
];

export default function TrilhasPage() {
  const totalGeral = totalAulas();

  return (
    <div className="relative">
      {/* ════════════════════════════════════════════
          HERO — Forest + Emerald Gradient
          ════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-forest-500 via-forest-600 to-forest-700">
        <Image
          src="/imagens/hero_pills.webp"
          alt="Equipe de farmácia atendendo com cuidado e dedicação"
          fill
          className="hero-bg"
          priority
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 z-[2] pattern-grid opacity-[0.04]" />

        {/* Glow orbe */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="badge-orange mb-6 inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              Formação completa
            </div>

            <h1 className="text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold tracking-[-0.03em] leading-[1.05]">
              <span className="text-white">Trilhas da</span>
              <br />
              <span className="text-white/70 font-light">Formação</span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-white/50 font-light">
              Da perfumaria aos medicamentos, da excelência operacional ao{" "}
              <span className="text-white/80 font-medium">atendimento humanizado</span>
              {" "}— uma progressão leve e estruturada do básico ao avançado.
            </p>

            {/* Stats minimalistas */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {[
                { value: trilhas.length.toString(), label: trilhas.length === 1 ? "trilha" : "trilhas" },
                { value: `${totalGeral}+`, label: totalGeral === 1 ? "aula" : "aulas" },
                { value: "Do zero", label: "ao avançado" },
                { value: "100%", label: "online" },
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
            <div className="mt-10">
              <a href="#trilhas-lista" className="btn-rd-outline">
                Explorar trilhas
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[8px] uppercase tracking-[0.25em] text-white/15">Navegar</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SABIA QUE? — Saúde preventiva + 4Ps
          ════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 bg-surface-2">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="text-center fade-in-up">
            <span className="badge-green inline-flex">
              <Icon name="sparkles" size={12} />
              Sabia que?
            </span>
            <h2 className="mt-4 text-[clamp(1.5rem,3vw,2.2rem)] font-bold tracking-[-0.02em] text-forest-600 dark:text-white">
              Saúde e bem-estar no dia a dia
            </h2>
            <p className="mt-3 text-muted max-w-xl mx-auto text-sm">
              Pequenos hábitos transformam a saúde — e o atendente de farmácia pode fazer toda diferença na orientação.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sabiaQueCards.map((card) => (
              <div
                key={card.titulo}
                className="card-stripe group relative rounded-2xl border border-border bg-surface p-6 transition-all duration-500 overflow-hidden"
              >
                {/* Background image sutil */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10 scale-110 transition-transform duration-500 group-hover:scale-125"
                  style={{ backgroundImage: `url(${card.bgImg})` }}
                />
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-green-400 to-orange-400" />
                <span className="mt-2 block text-3xl relative z-10"><Icon name={card.icone} size={28} /></span>
                <span className="mt-2 inline-block badge-premium text-[10px] relative z-10">{card.badge}</span>
                <h3 className="mt-3 text-sm font-bold text-foreground font-display relative z-10">
                  {card.titulo}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-subtle relative z-10">
                  {card.texto}
                </p>
              </div>
            ))}
          </div>

          {/* 💊 Mensagem do farmacêutico */}
          <div className="mt-8 relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-50 to-green-50 border border-orange-200/50 p-5 dark:from-orange-900/10 dark:to-forest-800">
            {/* Background image sutil */}
            <div
              className="absolute right-0 top-0 bottom-0 w-1/3 bg-cover bg-center opacity-[0.08]"
              style={{ backgroundImage: "url(/imagens/trilha_medicamentos.png)" }}
            />
            <div className="flex items-start gap-3 relative z-10">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-lg dark:bg-orange-900/30">
                🧑‍⚕️
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-orange-600 dark:text-orange-400">
                  Sempre consulte o(a) farmacêutico(a)
                </p>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  Para orientação personalizada sobre medicamentos, suplementos e cuidados com a saúde, 
                  solicite o segundo visto do farmacêutico(a) — ele(a) é o profissional habilitado para 
                  avaliar cada caso com segurança e responsabilidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          LISTA DE TRILHAS — Premium Cards
          ════════════════════════════════════════════ */}
      <section id="trilhas-lista" className="relative py-20 sm:py-28 bg-surface">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="text-center fade-in-up">
            <span className="badge-orange inline-flex">
              <Icon name="book" size={12} />
              Currículo completo
            </span>
            <h2 className="mt-4 text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] text-forest-600 dark:text-white">
              Escolha sua trilha
            </h2>
            <p className="mt-3 text-muted max-w-xl mx-auto text-sm">
              Quatro jornadas de aprendizado que se complementam — estude no seu ritmo, do zero à excelência.
            </p>
          </div>

          <DividerGlow className="my-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trilhas.map((t, idx) => {
              const totalAulasTrilha = t.modulos.reduce((n, m) => n + m.aulas.length, 0);
              const cor = coresTrilha[idx % coresTrilha.length];
              const img = trilhaImagens[idx % trilhaImagens.length];

              return (
                <div
                  key={t.id}
                  className="card-vercel group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-2"
                >
                  {/* Imagem top */}
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={img}
                      alt={`Imagem da trilha ${t.titulo}`}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-600/60 via-transparent to-transparent" />
                    {/* Badge de nível - pill com gradiente */}
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex items-center gap-1 rounded-full px-3 py-0.5 text-[10px] font-semibold tracking-wider ${
                        cor.badge === "green"
                          ? "badge-premium"
                          : "bg-gradient-to-r from-orange-500/20 to-orange-400/10 text-orange-600 dark:text-orange-400 border border-orange-400/20"
                      }`}>
                        Trilha {t.numero}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="badge-premium text-[10px]">{t.nivelFaixa}</span>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors font-display">
                      {t.titulo}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-2">
                      {t.descricao}
                    </p>

                    {/* Stats */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-1 text-[10px] font-medium text-subtle ring-1 ring-border-strong/30">
                        <Icon name="book" size={12} />
                        {t.modulos.length} {t.modulos.length === 1 ? "módulo" : "módulos"}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-1 text-[10px] font-medium text-subtle ring-1 ring-border-strong/30">
                        <Icon name="play" size={12} />
                        {totalAulasTrilha} {totalAulasTrilha === 1 ? "aula" : "aulas"}
                      </span>
                    </div>

                    {/* Ação */}
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <ProgressoTrilhaBadge trilhaId={t.id} />
                      <Botao
                        href={`/trilhas/${t.id}`}
                        variante="primary"
                        tamanho="sm"
                        iconeFim="arrow"
                      >
                        Acessar
                      </Botao>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Card de sabia que? — Bioimpedância e hidratação */}
          <div className="mt-10 rounded-2xl border border-green-200/50 bg-gradient-to-br from-green-50 to-white p-6 dark:from-green-900/10 dark:to-forest-800 glow-border">
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl dark:bg-green-900/30">
                <Icon name="sparkles" size={20} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-600 dark:text-green-400">
                  Sabia que? A bioimpedância virou serviço de farmácia
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  A bioimpedância avalia composição corporal (massa magra, gordura e hidratação). 
                  Cada vez mais farmácias oferecem o serviço como diferencial — é o <strong>Produto</strong> 
                  (serviço agregado) que fortalece a <strong>Praça</strong> (a farmácia como centro de saúde) 
                  e gera <strong>Promoção</strong> boca a boca. E o melhor de tudo: incentiva o cliente a 
                  cuidar da saúde preventivamente. Beba água, durma bem e meça sua composição regularmente!
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
                    <Icon name="check" size={12} /> Qualidade do sono
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-orange-600 dark:text-orange-400">
                    <Icon name="droplet" size={12} /> Hidratação
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
                    <Icon name="chart" size={12} /> Bioimpedância
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-orange-600 dark:text-orange-400">
                    <Icon name="heart" size={12} /> Higienização do sono
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CTA FINAL
          ════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-forest-500 via-forest-600 to-forest-700 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 pattern-grid opacity-[0.03]" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 text-center">
          <span className="badge-orange inline-flex">
            Acesse agora
          </span>
          <h2 className="mt-5 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] text-white">
          Pronto para transformar seu atendimento?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/50">
            Transforme seu atendimento e sua carreira com a formação mais completa para atendentes de farmácia.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-rd-white text-base px-10 py-3">
              Quero começar
            </Link>
            <Link href="/curiosidades" className="btn-rd-outline text-base px-8 py-3">
              Ver curiosidades
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
