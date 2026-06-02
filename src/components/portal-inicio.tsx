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
   HERO CINEMATOGRÁFICO
   ═══════════════════════════════════════════════ */
function PortalConvidadoHero() {
  const totalAulasContagem = totalAulas();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Módulos de vendas para seção currículo
  const modulosVendas = trilhas
    .find((t) => t.id === "vendas")
    ?.modulos.slice(0, 3)
    .map((m) => ({
      id: m.id,
      titulo: m.titulo,
      descricao: m.descricao,
      aulasCount: m.aulas.length,
    })) ?? [];

  return (
    <div>
      {/* ════════════════════════════════════════════
          HERO — Cinematográfico, Full-Screen
          ════════════════════════════════════════════ */}
      <section className="hero-image-gradient relative min-h-[90vh] flex items-center">
        {/* Imagem de fundo cinematográfica */}
        <Image
          src="/pharmacy-hero.jpg"
          alt=""
          fill
          className="hero-bg scale-105"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />

        {/* Gradiente dramático adicional */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040812] via-transparent to-[#040812]/30" />

        {/* Grid sutil */}
        <div className="pointer-events-none absolute inset-0 z-0 grid-bg opacity-20" />

        {/* Orbs cinematográficos */}
        <div className="pointer-events-none absolute -left-48 -top-48 h-[500px] w-[500px] orb bg-brand-500/15" />
        <div className="pointer-events-none absolute -bottom-48 -right-48 h-[400px] w-[400px] orb bg-accent-cyan/10" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="max-w-4xl">
            {/* Tagline de autoridade — minimalista */}
            <ScrollReveal delay={0} direction="up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 animate-pulse-soft" />
                Criado por farmacêutico · CRF/SP 58.519 · 15+ anos de balcão
              </div>
            </ScrollReveal>

            {/* Título cinematográfico */}
            <ScrollReveal delay={150} direction="up">
              <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
                <span className="text-white">
                  O treinamento que transforma
                </span>
                <br />
                <span className="text-gradient-premium">
                  atendentes em cuidadores
                </span>
              </h1>
            </ScrollReveal>

            {/* Subtítulo de impacto */}
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

            {/* Stats cinematográficas com contadores animados */}
            <ScrollReveal delay={600} direction="up">
              <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {[
                  { valor: totalAulasContagem, label: "Microlições", sufixo: "+" },
                  { valor: 4, label: "Trilhas de formação", sufixo: "" },
                  { valor: 15, label: "Anos cuidando", sufixo: "+" },
                  { valor: 1, label: "Missão: cuidar bem", sufixo: "" },
                ].map((stat) => (
                  <div key={stat.label} className="border-l border-white/10 pl-4">
                    <div className="text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold tracking-tight text-white">
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
            <div className="h-8 w-[1px] bg-gradient-to-b from-white/30 to-transparent animate-float" />
          </div>
        </ScrollReveal>
      </section>

      {/* ════════════════════════════════════════════
          SEÇÃO 1 — O PROBLEMA (ANTES)
          ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/5 via-transparent to-surface pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-rose-400">
                  <span className="h-3 w-[2px] rounded-full bg-rose-500" />
                  A realidade
                </div>
                <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-tight leading-tight">
                  O balcão da farmácia{" "}
                  <span className="text-rose-400">precisa de cuidado</span>
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
                  { icone: "close", texto: "Atendente sem preparo para cuidar", cor: "rose" },
                  { icone: "close", texto: "Cliente que não se sente acolhido", cor: "rose" },
                  { icone: "close", texto: "Paciente que não volta", cor: "rose" },
                  { icone: "close", texto: "Cuidado que fica pela metade", cor: "rose" },
                ].map((item) => (
                  <div
                    key={item.texto}
                    className="flex items-center gap-3 rounded-xl border border-rose-200/50 bg-rose-50/30 px-4 py-3 dark:border-rose-900/20 dark:bg-rose-950/10"
                  >
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-rose-100 text-rose-500 dark:bg-rose-900/30">
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
          SEÇÃO 2 — A SOLUÇÃO (O TREINAMENTO)
          ════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-surface via-brand-950/[0.02] to-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-brand-500">
                <span className="h-3 w-[2px] rounded-full bg-brand-500" />
                A solução
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-tight leading-tight">
                Um treinamento que{" "}
                <span className="text-gradient">ensina a cuidar</span>
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Não é só farmácia. É técnica, acolhimento, comunicação e cuidado contínuo — 
                tudo que um atendente precisa para fazer a diferença na vida de quem chega ao balcão.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                numero: "01",
                titulo: "Técnica e segurança",
                descricao: "Medicamentos, receitas, classes terapêuticas, ANVISA. A base técnica para cuidar com segurança.",
                cor: "from-blue-500 to-blue-600",
              },
              {
                numero: "02",
                titulo: "Acolhimento que cura",
                descricao: "Como ouvir, acolher e fazer o cliente se sentir cuidado desde o primeiro contato.",
                cor: "from-emerald-500 to-emerald-600",
              },
              {
                numero: "03",
                titulo: "Comunicação de cuidado",
                descricao: "Escuta ativa, empatia, linguagem de acolhimento. A comunicação que transforma atendimento em cuidado.",
                cor: "from-violet-500 to-violet-600",
              },
              {
                numero: "04",
                titulo: "Cliente que volta",
                descricao: "Pós-atendimento, cuidado contínuo, como ser o profissional que o paciente confia e procura sempre.",
                cor: "from-amber-500 to-amber-600",
              },
            ].map((item, idx) => (
              <ScrollReveal key={item.titulo} delay={idx * 100} direction="up">
                <Card className="group relative overflow-hidden p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <div className={`absolute top-0 left-0 h-full w-1 rounded-l-xl bg-gradient-to-b ${item.cor} opacity-60 group-hover:opacity-100 transition-opacity`} />
                  <div className="pl-4">
                    <span className="font-mono text-[10px] font-bold tracking-widest text-brand-500">
                      {item.numero}
                    </span>
                    <h3 className="mt-2 text-lg font-bold leading-snug">{item.titulo}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.descricao}</p>
                  </div>
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
                  { icone: "check", texto: "Atendente que entende do cuidado", cor: "emerald" },
                  { icone: "check", texto: "Cliente que se sente acolhido", cor: "emerald" },
                  { icone: "check", texto: "Paciente que volta e confia", cor: "emerald" },
                  { icone: "check", texto: "Cuidado completo, do início ao fim", cor: "emerald" },
                ].map((item) => (
                  <div
                    key={item.texto}
                    className="flex items-center gap-3 rounded-xl border border-emerald-200/50 bg-emerald-50/30 px-4 py-3 dark:border-emerald-900/20 dark:bg-emerald-950/10"
                  >
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-emerald-100 text-emerald-500 dark:bg-emerald-900/30">
                      <Icon name={item.icone as IconName} size={16} />
                    </span>
                    <span className="text-sm font-medium text-muted">{item.texto}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-emerald-400">
                  <span className="h-3 w-[2px] rounded-full bg-emerald-500" />
                  A transformação
                </div>
                <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-tight leading-tight">
                  O profissional que o paciente{" "}
                  <span className="text-gradient">confia e volta</span>
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
          SEÇÃO 4 — CURRÍCULO (JORNADA, NÃO LISTA)
          ════════════════════════════════════════════ */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-brand-500">
                <span className="h-3 w-[2px] rounded-full bg-brand-500" />
                A jornada
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-tight leading-tight">
                O que você vai{" "}
                <span className="text-gradient">aprender</span>
              </h2>
              <p className="mt-6 text-lg text-muted">{totalAulasContagem} microlições em 4 trilhas</p>
            </ScrollReveal>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-4">
            {trilhas.map((t, idx) => {
              const totalModAulas = t.modulos.reduce((n, m) => n + m.aulas.length, 0);
              return (
                <ScrollReveal key={t.id} delay={idx * 80} direction="up">
                  <Card className="group relative overflow-hidden p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg min-h-[200px] flex flex-col">
                    <span className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${
                      idx === 0 ? "from-emerald-400 to-emerald-600" :
                      idx === 1 ? "from-blue-400 to-blue-600" :
                      idx === 2 ? "from-amber-400 to-rose-500" :
                      "from-violet-400 to-fuchsia-500"
                    } text-white`}>
                      <Icon name={t.icone as IconName} size={20} />
                    </span>
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-500">
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
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
              >
                Ver currículo completo <Icon name="arrow" size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SEÇÃO 5 — PATROCÍNIO
          ════════════════════════════════════════════ */}
      <section className="bg-surface py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <BannerPatrocinio />
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SEÇÃO 6 — CRIADOR
          ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/5 via-transparent to-surface pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div className="relative mx-auto max-w-[280px] lg:mx-0">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-cyan/20">
                  <Image
                    src="/health-professional.jpg"
                    alt="Thiago Piola — Farmacêutico"
                    width={560}
                    height={747}
                    className="h-full w-full object-cover opacity-80"
                  />
                </div>
                {/* Badge sobreposto */}
                <div className="absolute -bottom-3 -right-3 rounded-2xl gradient-brand px-4 py-3 text-white shadow-xl">
                  <div className="text-[10px] font-semibold uppercase tracking-wider opacity-80">CRF/SP</div>
                  <div className="text-lg font-bold">58.519</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200} className="lg:col-span-3">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-brand-500">
                  <span className="h-3 w-[2px] rounded-full bg-brand-500" />
                  Quem criou
                </div>
                <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold tracking-tight leading-tight">
                  Conteúdo de quem{" "}
                  <span className="text-gradient">vive o balcão</span>
                </h2>
                <p className="mt-4 text-lg text-muted leading-relaxed">
                  Thiago Biasoli Garcia Piola — farmacêutico CRF/SP 58.519 com mais de 15 anos 
                  de operação em drogarias, farmácia hospitalar e gestão. Pós-graduando em 
                  Engenharia de IA, Google GEAR, founder da Rei das Vendas.
                </p>
                <p className="mt-3 text-muted leading-relaxed">
                  Criou esta formação porque sabe o que falta no balcão: atendentes que 
                  dominam a técnica, a comunicação e a venda consultiva. Não é teoria — 
                  é o que ele ensina no dia a dia há 15 anos.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Droga Raia", "Hospital Unimed", "CRF/SP Ativo", "Pós IA + Google GEAR", "Rei das Vendas"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-2 px-3 py-1 text-[11px] font-semibold text-muted"
                      >
                        <span className="h-1 w-1 rounded-full bg-emerald-500" />
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SEÇÃO 7 — CTA FINAL IMPACTANTE
          ════════════════════════════════════════════ */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-brand-950/[0.03] to-surface" />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:pb-28">
          <ScrollReveal>
            <Card className="relative overflow-hidden border-2 border-brand-200/40 dark:border-brand-800/30">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-50/50 dark:from-brand-950 dark:via-brand-900/40 dark:to-brand-950" />
              <div className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full orb bg-brand-400/10 dark:bg-brand-300/5" />
              <div className="pointer-events-none absolute -bottom-32 -left-32 h-[300px] w-[300px] rounded-full orb bg-accent-cyan/10" />

              <div className="relative px-8 py-16 text-center sm:px-16 sm:py-20">
                <div className="mx-auto max-w-2xl">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                    <Icon name="sparkles" size={14} />
                    Comece agora
                  </div>
                  <h2 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-extrabold tracking-tight leading-tight">
                    Transforme seu atendimento{" "}
                    <span className="text-gradient">em cuidado</span>
                  </h2>
                  <p className="mx-auto mt-4 max-w-lg text-muted text-lg">
                    {totalAulasContagem} microlições. 4 trilhas. Simulador de atendimento real. 
                    Criado por farmacêutico com 15+ anos de balcão. Matrícula gratuita.
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
        <div className="h-48 animate-pulse rounded-2xl bg-surface-2" />
      </div>
    );
  }

  if (status === "rejeitado") {
    return (
      <div className="mx-auto max-w-lg px-4 py-16">
        <Card className="text-center">
          <Icon name="shield" size={40} className="mx-auto text-rose-500" />
          <h2 className="mt-4 text-xl font-bold">Matrícula não aprovada</h2>
          <p className="mt-2 text-sm text-muted">
            Entre em contato com a coordenação para mais informações.
          </p>
        </Card>
      </div>
    );
  }

  return <PainelAluno />;
}
