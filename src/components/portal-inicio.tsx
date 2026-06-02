"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { trilhas, totalAulas } from "@/content/curriculo";
import { usePerfilAluno, type PerfilAluno } from "@/lib/aluno";
import { lerStatusLocal, salvarStatusLocal } from "@/lib/cadastro-client";
import { PainelAluno } from "./painel-aluno";
import { ContinuarBotao } from "./continuar";
import { Botao, Card } from "./ui";
import { Icon, type IconName } from "./icons";
import { ScrollReveal, ContadorAnimado } from "./animacoes";
import { BannerPatrocinio } from "./banner-patrocinio";

type StatusMatricula = "verificando" | "pendente" | "rejeitado" | "aprovado";

export function PortalInicio() {
  const { perfil, carregado: perfilOk } = usePerfilAluno();

  if (!perfilOk) return <PortalConvidadoHero />;
  if (!perfil?.email) return <PortalConvidadoHero />;

  return <PortalMatriculadoFluxo perfil={perfil} />;
}

/* ═══════════════════════════════════════════════
   HERO CINEMATOGRÁFICO — RD SAÚDE INSPIRED
   ═══════════════════════════════════════════════ */
function PortalConvidadoHero() {
  const totalAulasContagem = totalAulas();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mandala dos 5 Pilares
  const pilares = [
    { icone: "heart", titulo: "Acolhimento", desc: "Receber com excelência desde o primeiro contato", cor: "from-forest-500 to-sage-500" },
    { icone: "shield", titulo: "Cuidado Técnico", desc: "Medicamentos, segurança, ANVISA — a base para cuidar bem", cor: "from-forest-600 to-forest-400" },
    { icone: "message", titulo: "Comunicação Empática", desc: "Ouvir, acolher, transmitir segurança em cada palavra", cor: "from-sage-500 to-sage-400" },
    { icone: "sparkles", titulo: "Encantamento", desc: "Surpreender, criar experiências que o paciente lembra", cor: "from-terracota-500 to-terracota-400" },
    { icone: "trending", titulo: "Apoio ao Tratamento", desc: "Acompanhamento contínuo que transforma vidas", cor: "from-forest-400 to-terracota-500" },
  ];

  return (
    <div>
      {/* ════════════════════════════════════════════
          HERO CINEMATOGRÁFICO
          ════════════════════════════════════════════ */}
      <section className="hero-image-gradient relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Imagem de fundo */}
        <Image
          src="/pharmacy-hero.jpg"
          alt=""
          fill
          className="hero-bg scale-105"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />

        {/* Gradiente adicional — forest + terracota */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--forest-900),transparent_40%,var(--forest-900)/[0.3])]" />

        {/* Grid sutil */}
        <div className="pointer-events-none absolute inset-0 z-0 grid-bg opacity-15" />

        {/* Orbs cinematográficos */}
        <div className="pointer-events-none absolute -left-48 -top-48 h-[500px] w-[500px] orb bg-forest-500/20" />
        <div className="pointer-events-none absolute -bottom-48 -right-48 h-[400px] w-[400px] orb bg-terracota-500/15" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="max-w-4xl">
            {/* Tagline de autoridade */}
            <ScrollReveal delay={0} direction="up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-sage-400 shadow-lg shadow-sage-400/50 animate-pulse-soft" />
                Formação profissional para atendentes de farmácia
              </div>
            </ScrollReveal>

            {/* Título cinematográfico */}
            <ScrollReveal delay={150} direction="up">
              <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-[800] leading-[1.02] tracking-[-0.03em]">
                <span className="text-white">
                  O treinamento que transforma
                </span>
                <br />
                <span className="text-gradient-premium">
                  atendentes em cuidadores
                </span>
              </h1>
            </ScrollReveal>

            {/* Subtítulo */}
            <ScrollReveal delay={300} direction="up">
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg sm:leading-relaxed">
                Do acolhimento ao cuidado contínuo. Da perfumaria aos medicamentos. 
                O único treinamento do Brasil que forma atendentes completos — 
                com técnica, empatia e amor pelo que fazem.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={450} direction="up">
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Botao
                  href="/matriculas"
                  tamanho="xl"
                  variante="premium"
                  iconeFim="arrow"
                  className="w-full sm:w-auto shadow-glow-strong text-base"
                >
                  Começar treinamento
                </Botao>
                <ContinuarBotao />
              </div>
            </ScrollReveal>

            {/* Stats com contadores */}
            <ScrollReveal delay={600} direction="up">
              <div className="mt-14 grid grid-cols-3 gap-6 sm:grid-cols-3">
                {[
                  { valor: totalAulasContagem, label: "Microlições", sufixo: "+" },
                  { valor: 4, label: "Trilhas de formação", sufixo: "" },
                  { valor: 1, label: "Missão: cuidar bem", sufixo: "" },
                ].map((stat) => (
                  <div key={stat.label} className="border-l border-white/10 pl-4">
                    <div className="text-[clamp(1.5rem,3vw,2.5rem)] font-[800] tracking-tight text-white">
                      <ContadorAnimado
                        valor={stat.valor}
                        sufixo={stat.sufixo}
                        duracao={2500}
                      />
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[0.12em] text-white/40">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <ScrollReveal delay={1000} direction="up">
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
            <span className="text-[9px] uppercase tracking-[0.2em]">Role</span>
            <div className="h-8 w-[1px] bg-[linear-gradient(to_bottom,white/[0.3],transparent)] animate-float" />
          </div>
        </ScrollReveal>
      </section>

      {/* ════════════════════════════════════════════
          SEÇÃO 1 — O PROBLEMA (ANTES)
          ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--forest-900)/[0.05],transparent)] pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-terracota-400">
                  <span className="h-3 w-[2px] rounded-full bg-terracota-500" />
                  A realidade
                </div>
                <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-[700] tracking-tight leading-tight">
                  O balcão da farmácia{" "}
                  <span className="text-terracota-500">precisa de cuidado</span>
                </h2>
                <div className="mt-6 space-y-4 text-muted leading-relaxed">
                  <p className="text-lg">
                    Atendentes são jogados no balcão sem preparo. Sabem o preço, 
                    mas não sabem ouvir. Sabem o produto, mas não sabem cuidar.
                  </p>
                  <p>
                    Clientes saem insatisfeitos. Oportunidades de cuidado viram 
                    venda perdida. O atendente se frustra, e o paciente vai 
                    embora sem a atenção que merece.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="grid gap-4">
                {[
                  { icone: "close", texto: "Atendente sem preparo para cuidar", cor: "terracota" },
                  { icone: "close", texto: "Cliente que não se sente acolhido", cor: "terracota" },
                  { icone: "close", texto: "Paciente que não volta", cor: "terracota" },
                  { icone: "close", texto: "Cuidado que fica pela metade", cor: "terracota" },
                ].map((item) => (
                  <div
                    key={item.texto}
                    className="flex items-center gap-3 rounded-xl border border-terracota-200/50 bg-terracota-50/30 px-4 py-3 dark:border-terracota-900/20 dark:bg-terracota-950/10"
                  >
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-terracota-100 text-terracota-500 dark:bg-terracota-900/30">
                      <Icon name={item.icone as IconName} size={16} />
                    </span>
                    <span className="text-sm font-medium text-muted">{item.texto}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SEÇÃO 2 — A SOLUÇÃO: MANDALA DOS 5 PILARES
          ════════════════════════════════════════════ */}
      <section className="relative bg-[linear-gradient(to_bottom,var(--surface),var(--forest-900)/[0.03],var(--surface))]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-forest-500">
                <span className="h-3 w-[2px] rounded-full bg-forest-500" />
                A solução
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-[700] tracking-tight leading-tight">
                Um treinamento que{" "}
                <span className="text-gradient-brand">ensina a cuidar</span>
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Não é só farmácia. É técnica, acolhimento, comunicação e cuidado contínuo — 
                tudo que um atendente precisa para fazer a diferença na vida de quem chega ao balcão.
              </p>
            </ScrollReveal>
          </div>

          {/* Mandala dos 5 Pilares */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {pilares.map((pilar, idx) => (
              <ScrollReveal key={pilar.titulo} delay={idx * 80} direction="up">
                <Card className="group relative overflow-hidden p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl text-center h-full">
                  {/* Top gradient bar */}
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${pilar.cor} opacity-60 group-hover:opacity-100 transition-opacity`} />
                  
                  {/* Icon circle */}
                  <span className={`mx-auto mb-4 mt-1 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${pilar.cor} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={pilar.icone as IconName} size={24} />
                  </span>
                  
                  <h3 className="text-sm font-bold leading-snug">{pilar.titulo}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{pilar.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SEÇÃO 3 — A TRANSFORMAÇÃO (DEPOIS)
          ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="left" delay={200}>
              <div className="grid gap-4">
                {[
                  { icone: "check", texto: "Atendente que entende do cuidado", cor: "sage" },
                  { icone: "check", texto: "Cliente que se sente acolhido", cor: "sage" },
                  { icone: "check", texto: "Paciente que volta e confia", cor: "sage" },
                  { icone: "check", texto: "Cuidado completo, do início ao fim", cor: "sage" },
                ].map((item) => (
                  <div
                    key={item.texto}
                    className="flex items-center gap-3 rounded-xl border border-sage-200/50 bg-sage-50/30 px-4 py-3 dark:border-sage-900/20 dark:bg-sage-950/10"
                  >
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-sage-100 text-sage-600 dark:bg-sage-900/30">
                      <Icon name={item.icone as IconName} size={16} />
                    </span>
                    <span className="text-sm font-medium text-muted">{item.texto}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-sage-500">
                  <span className="h-3 w-[2px] rounded-full bg-sage-500" />
                  A transformação
                </div>
                <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-[700] tracking-tight leading-tight">
                  O profissional que o paciente{" "}
                  <span className="text-gradient-brand">confia e volta</span>
                </h2>
                <div className="mt-6 space-y-4 text-muted leading-relaxed">
                  <p className="text-lg">
                    Depois do treinamento, o atendente não é mais o mesmo. 
                    Ele entende de pele, de medicamento, de receita — e também 
                    de gente. Sabe ouvir, acolher, se importar.
                  </p>
                  <p>
                    Cliente que se sente cuidado volta. Volta e traz a família. 
                    Vira paciente fiel. É assim que o balcão deixa de ser um 
                    ponto de passagem e se transforma em um lugar de cuidado.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SEÇÃO 4 — CURRÍCULO (JORNADA)
          ════════════════════════════════════════════ */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-forest-500">
                <span className="h-3 w-[2px] rounded-full bg-forest-500" />
                A jornada
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-[700] tracking-tight leading-tight">
                O que você vai{" "}
                <span className="text-gradient-brand">aprender</span>
              </h2>
              <p className="mt-6 text-lg text-muted">{totalAulasContagem} microlições em 4 trilhas</p>
            </ScrollReveal>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-4">
            {trilhas.map((t, idx) => {
              const totalModAulas = t.modulos.reduce((n, m) => n + m.aulas.length, 0);
              const gradientMap = [
                "from-forest-400 to-sage-500",
                "from-forest-500 to-forest-400",
                "from-forest-500 to-terracota-500",
                "from-sage-500 to-forest-500",
              ];
              return (
                <ScrollReveal key={t.id} delay={idx * 80} direction="up">
                  <Card className="group relative overflow-hidden p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg min-h-[200px] flex flex-col">
                    <span className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradientMap[idx]} text-white`}>
                      <Icon name={t.icone as IconName} size={20} />
                    </span>
                    <div className="text-xs font-bold uppercase tracking-wider text-forest-500">
                      Trilha {t.numero}
                    </div>
                    <h3 className="mt-0.5 font-bold leading-snug">{t.titulo}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted line-clamp-2 flex-1">{t.subtitulo}</p>
                    <div className="mt-3 flex items-center gap-2 text-[10px] text-subtle">
                      <span>{t.modulos.length} módulos</span>
                      <span className="h-3 w-px bg-border" />
                      <span>{totalModAulas} aulas</span>
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-10 text-center">
              <Link
                href="/trilhas"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-600 hover:text-forest-700 transition-colors"
              >
                Ver currículo completo <Icon name="arrow" size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SEÇÃO 5 — DICAS POR FAIXA ETÁRIA
          ════════════════════════════════════════════ */}
      <section className="relative bg-[linear-gradient(to_bottom,var(--surface),var(--forest-900)/[0.03],var(--surface))]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-forest-500">
                <span className="h-3 w-[2px] rounded-full bg-forest-500" />
                Para cada idade, um cuidado
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-[700] tracking-tight leading-tight">
                Como atender bem{" "}
                <span className="text-gradient-brand">cada fase da vida</span>
              </h2>
              <p className="mt-6 text-lg text-muted">
                Adolescente, adulto ou idoso — cada um chega ao balcão com uma história, 
                uma necessidade e um jeito de ser acolhido.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                faixa: "Adolescentes",
                icone: "heart",
                bg: "from-forest-500 to-sage-500",
                dicas: [
                  "Linguagem simples e sem julgamento",
                  "Respeito à timidez e vergonha",
                  "Acne, anticoncepcional, saúde íntima",
                  "Atendimento rápido e discreto",
                  "Orientação sem alarmismo",
                ]
              },
              {
                faixa: "Adultos",
                icone: "trending",
                bg: "from-forest-600 to-terracota-500",
                dicas: [
                  "Escuta ativa das queixas do dia a dia",
                  "Produtos para rotina corrida",
                  "Cuidado com automedicação",
                  "Oferta de serviços complementares",
                  "Fidelização pelo cuidado genuíno",
                ]
              },
              {
                faixa: "Idosos",
                icone: "shield",
                bg: "from-sage-500 to-forest-600",
                dicas: [
                  "Paciência e tom de voz adequado",
                  "Polifarmácia e interações medicamentosas",
                  "Letra grande nos materiais",
                  "Acompanhamento do tratamento",
                  "Acolhimento com respeito e dignidade",
                ]
              },
            ].map((f, idx) => (
              <ScrollReveal key={f.faixa} delay={idx * 100} direction="up">
                <Card className="group h-full overflow-hidden p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${f.bg} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon name={f.icone as IconName} size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{f.faixa}</h3>
                  <ul className="mt-4 space-y-2">
                    {f.dicas.map((dica) => (
                      <li key={dica} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-400" />
                        {dica}
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SEÇÃO 6 — PATROCÍNIO
          ════════════════════════════════════════════ */}
      <section className="bg-surface py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <BannerPatrocinio />
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SEÇÃO 7 — CTA FINAL
          ════════════════════════════════════════════ */}
      <section className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--surface),var(--forest-900)/[0.04],var(--surface))]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:pb-28">
          <ScrollReveal>
            <Card className="relative overflow-hidden border-2 border-forest-200/40 dark:border-forest-800/30">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,var(--forest-50),white,var(--sage-50)/[0.5])] dark:bg-[linear-gradient(135deg,var(--forest-950),var(--forest-900)/[0.4],var(--forest-950))]" />
              <div className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full orb bg-forest-400/10 dark:bg-forest-300/5" />
              <div className="pointer-events-none absolute -bottom-32 -left-32 h-[300px] w-[300px] rounded-full orb bg-terracota-500/10" />

              <div className="relative px-8 py-16 text-center sm:px-16 sm:py-20">
                <div className="mx-auto max-w-2xl">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-forest-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-forest-700 dark:bg-forest-900/40 dark:text-forest-300">
                    <Icon name="sparkles" size={14} />
                    Comece agora
                  </div>
                  <h2 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-[700] tracking-tight leading-tight">
                    Transforme seu atendimento{" "}
                    <span className="text-gradient-brand">em cuidado</span>
                  </h2>
                  <p className="mx-auto mt-4 max-w-lg text-muted text-lg">
                    {totalAulasContagem} microlições. 4 trilhas. Simulador de atendimento real. 
                    Matrícula gratuita.
                  </p>
                  <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Botao
                      href="/matriculas"
                      tamanho="xl"
                      variante="premium"
                      iconeFim="arrow"
                      className="w-full sm:w-auto shadow-glow-strong text-base"
                    >
                      Quero me matricular
                    </Botao>
                    <ContinuarBotao />
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   FLUXO — Aluno matriculado
   ═══════════════════════════════════════════════ */
function PortalMatriculadoFluxo({ perfil }: { perfil: PerfilAluno }) {
  const router = useRouter();
  const [status, setStatus] = useState<StatusMatricula>(() => {
    if (typeof window === "undefined") return "verificando";
    const local = lerStatusLocal();
    if (local === "aprovado") return "aprovado";
    if (local === "rejeitado") return "rejeitado";
    if (local === "pendente") return "pendente";
    return "verificando";
  });

  useEffect(() => {
    if (status === "aprovado" || status === "rejeitado") return;
    if (status === "pendente") {
      router.replace("/aguardando-aprovacao");
      return;
    }

    fetch(`/api/cadastros/status?email=${encodeURIComponent(perfil.email)}`)
      .then((r) => r.json())
      .then((j: { status?: string }) => {
        if (j.status === "aprovado") {
          salvarStatusLocal("aprovado");
          setStatus("aprovado");
        } else if (j.status === "rejeitado") setStatus("rejeitado");
        else if (j.status === "pendente") router.replace("/aguardando-aprovacao");
        else router.replace("/matriculas");
      })
      .catch(() => router.replace("/matriculas"));
  }, [perfil.email, router, status]);

  if (status === "verificando") {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="h-48 skeleton rounded-2xl" />
      </div>
    );
  }

  if (status === "rejeitado") {
    router.replace("/matriculas");
    return null;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <PainelAluno />
    </div>
  );
}
