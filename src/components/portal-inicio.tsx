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

type StatusMatricula = "verificando" | "pendente" | "rejeitado" | "aprovado";

export function PortalInicio() {
  const { perfil, carregado: perfilOk } = usePerfilAluno();

  if (!perfilOk) return <PortalConvidadoHero />;
  if (!perfil?.email) return <PortalConvidadoHero />;

  return <PortalMatriculadoFluxo perfil={perfil} />;
}

/* ═══════════════════════════════════════════════
   VIDEO BACKGROUND HERO — DROGARIA
═══════════════════════════════════════════════ */
function VideoBanner() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: "340px" }}>
      {/* Fundo com imagem + gradiente animado */}
      <div className="absolute inset-0 bg-forest-500">
        <Image
          src="/imagens/hero_pills.webp"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        {/* Gradiente pulsante sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-500/60 via-forest-600/40 to-orange-900/20 animate-pulse-slow" />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Overlay gradiente */}
      <div className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(4,11,13,0.82) 0%, rgba(15,27,46,0.45) 40%, rgba(4,11,13,0.88) 100%)",
        }}
      />

      {/* Conteúdo do banner de vídeo */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: "#6db860", boxShadow: "0 0 8px #6db860" }}
          />
          <span
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Formação para Atendentes de Farmácia
          </span>
        </div>

        <h2
          style={{
            fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            maxWidth: "640px",
          }}
        >
          O cuidado começa{" "}
          <span style={{ color: "#ef9145" }}>no balcão</span>
        </h2>
        <p
          style={{
            marginTop: "12px",
            fontSize: "clamp(0.85rem, 1.8vw, 1rem)",
            color: "rgba(255,255,255,0.55)",
            maxWidth: "480px",
            lineHeight: 1.55,
          }}
        >
          Uma drogaria que cuida começa com um atendente que sabe cuidar.
          Esse é o propósito desta formação.
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   HERO CINEMATOGRÁFICO — SEM MATRÍCULA
═══════════════════════════════════════════════ */
function PortalConvidadoHero() {
  const totalAulasContagem = totalAulas();

  const pilares = [
    { icone: "heart", titulo: "Acolhimento", desc: "Receber com excelência desde o primeiro contato", cor: "from-forest-500 to-green-400" },
    { icone: "shield", titulo: "Cuidado Técnico", desc: "Medicamentos, segurança, ANVISA — a base para cuidar bem", cor: "from-forest-600 to-forest-400" },
    { icone: "message", titulo: "Comunicação Empática", desc: "Ouvir, acolher, transmitir segurança em cada palavra", cor: "from-green-400 to-green-400" },
    { icone: "sparkles", titulo: "Encantamento", desc: "Surpreender, criar experiências que o paciente lembra", cor: "from-orange-500 to-orange-400" },
    { icone: "trending", titulo: "Apoio ao Tratamento", desc: "Acompanhamento contínuo que transforma vidas", cor: "from-forest-400 to-orange-500" },
  ];

  return (
    <div>
      {/* ═════ VÍDEO BANNER ACIMA DO HERO ═════ */}
      <VideoBanner />

      {/* ═════ HERO PRINCIPAL ═════ */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "78vh",
          display: "flex",
          alignItems: "center",
          background: "var(--forest-900)",
        }}
      >
        <Image
          src="/imagens/hero_pills.webp"
          alt=""
          fill
          className="hero-bg scale-105"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="pointer-events-none absolute inset-0 z-0 grid-bg opacity-15" />

        {/* Orbs ambientais */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] orb bg-forest-500/15" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[320px] w-[320px] orb bg-orange-500/12" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full py-16 sm:py-20">
          <div className="max-w-4xl">
            <ScrollReveal delay={0} direction="up">
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                style={{
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full animate-pulse-soft"
                  style={{ background: "#6db860", boxShadow: "0 0 6px #6db860" }}
                />
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  Formação profissional para atendentes de farmácia
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} direction="up">
              <h1
                style={{
                  fontSize: "clamp(2.4rem,7vw,5rem)",
                  fontWeight: 800,
                  lineHeight: 1.02,
                  letterSpacing: "-0.03em",
                }}
              >
                <span style={{ color: "#fff" }}>O treinamento que transforma</span>
                <br />
                <span className="text-gradient-forest">atendentes em cuidadores</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={300} direction="up">
              <p
                style={{
                  marginTop: "24px",
                  maxWidth: "600px",
                  fontSize: "clamp(0.95rem,2vw,1.12rem)",
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.58)",
                }}
              >
                Do acolhimento ao cuidado contínuo. Da perfumaria aos medicamentos.
                O único treinamento do Brasil que forma atendentes completos —
                com técnica, empatia e amor pelo que fazem.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={450} direction="up">
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Botao
                  href="/trilhas"
                  tamanho="xl"
                  variante="primary"
                  iconeFim="arrow"
                  className="w-full sm:w-auto shadow-glow-strong text-base"
                >
                  Ver as trilhas
                </Botao>
                <ContinuarBotao />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600} direction="up">
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { valor: totalAulasContagem, label: "Microlições", sufixo: "+" },
                  { valor: 4, label: "Trilhas de formação", sufixo: "" },
                  { valor: 8, label: "Badges de conquista", sufixo: "" },
                ].map((stat) => (
                  <div key={stat.label} style={{ borderLeft: "1px solid rgba(255,255,255,0.10)", paddingLeft: "16px" }}>
                    <div
                      style={{
                        fontSize: "clamp(1.5rem,3vw,2.5rem)",
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        color: "#fff",
                      }}
                    >
                      <ContadorAnimado valor={stat.valor} sufixo={stat.sufixo} duracao={2500} />
                    </div>
                    <div
                      style={{
                        marginTop: "4px",
                        fontSize: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "rgba(255,255,255,0.38)",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "rgba(255,255,255,0.25)" }}>
          <span style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.2em" }}>Role</span>
          <div className="h-8 w-px animate-float" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
        </div>
      </section>

      {/* ═════ SEÇÃO: O PROBLEMA ═════ */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="left">
              <div>
                <div
                  className="mb-4 inline-flex items-center gap-2"
                  style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--orange-500)" }}
                >
                  <span style={{ width: "2px", height: "12px", borderRadius: "2px", background: "var(--orange-500)", display: "inline-block" }} />
                  A realidade do balcão
                </div>
                <h2
                  style={{
                    fontSize: "clamp(1.8rem,4vw,3rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  O balcão da farmácia{" "}
                  <span style={{ color: "var(--orange-500)" }}>precisa de mais</span>
                </h2>
                <div className="mt-6 space-y-4 leading-relaxed" style={{ color: "var(--muted)" }}>
                  <p style={{ fontSize: "1.05rem" }}>
                    Atendentes são jogados no balcão sem preparo. Sabem o preço,
                    mas não sabem ouvir. Sabem o produto, mas não sabem cuidar.
                  </p>
                  <p>
                    Clientes saem insatisfeitos. Oportunidades de cuidado viram
                    venda perdida. O atendente se frustra, e o paciente vai embora
                    sem a atenção que merece.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="grid gap-4">
                {[
                  "Atendente sem preparo para cuidar",
                  "Cliente que não se sente acolhido",
                  "Paciente que não volta",
                  "Cuidado que fica pela metade",
                ].map((texto) => (
                  <div
                    key={texto}
                    className="flex items-center gap-3 rounded-xl px-4 py-3"
                    style={{
                      border: "1px solid rgba(var(--orange-500-rgb,214,110,15),0.2)",
                      background: "rgba(253,242,234,0.25)",
                    }}
                  >
                    <span
                      className="flex h-8 w-8 flex-none items-center justify-center rounded-lg"
                      style={{ background: "rgba(253,228,210,0.6)", color: "var(--orange-500)" }}
                    >
                      <Icon name="close" size={16} />
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--muted)" }}>{texto}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═════ SEÇÃO: OS 5 PILARES ═════ */}
      <section style={{ background: "linear-gradient(to bottom, var(--surface), rgba(13,43,46,0.03), var(--surface))" }}>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <div
                className="mb-4 inline-flex items-center gap-2"
                style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--forest-500)" }}
              >
                <span style={{ width: "2px", height: "12px", borderRadius: "2px", background: "var(--forest-500)", display: "inline-block" }} />
                A solução
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.8rem,4vw,3rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Um treinamento que{" "}
                <span className="text-bg-gradient-to-r from-green-500 to-green-600">ensina a cuidar</span>
              </h2>
              <p className="mt-6" style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.65 }}>
                Não é só farmácia. É técnica, acolhimento, comunicação e cuidado contínuo —
                tudo que um atendente precisa para fazer a diferença na vida de quem chega ao balcão.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {pilares.map((pilar, idx) => (
              <ScrollReveal key={pilar.titulo} delay={idx * 80} direction="up">
                <Card
                  className="group relative overflow-hidden p-6 h-full text-center transition-all duration-400"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${pilar.cor} opacity-60 transition-opacity duration-300`}
                  />
                  <span
                    className={`mx-auto mb-4 mt-1 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${pilar.cor} text-white shadow-lg`}
                    style={{ transition: "transform 0.3s" }}
                  >
                    <Icon name={pilar.icone as IconName} size={24} />
                  </span>
                  <h3 style={{ fontSize: "13px", fontWeight: 700, lineHeight: 1.3 }}>{pilar.titulo}</h3>
                  <p style={{ marginTop: "8px", fontSize: "12px", lineHeight: 1.55, color: "var(--muted)" }}>{pilar.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═════ SEÇÃO: A TRANSFORMAÇÃO ═════ */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="left" delay={200}>
              <div className="grid gap-4">
                {[
                  "Atendente que entende do cuidado",
                  "Cliente que se sente acolhido",
                  "Paciente que volta e confia",
                  "Cuidado completo, do início ao fim",
                ].map((texto) => (
                  <div
                    key={texto}
                    className="flex items-center gap-3 rounded-xl px-4 py-3"
                    style={{
                      border: "1px solid rgba(109,184,96,0.2)",
                      background: "rgba(238,247,236,0.25)",
                    }}
                  >
                    <span
                      className="flex h-8 w-8 flex-none items-center justify-center rounded-lg"
                      style={{ background: "rgba(221,239,218,0.7)", color: "var(--green-600)" }}
                    >
                      <Icon name="check" size={16} />
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--muted)" }}>{texto}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div
                  className="mb-4 inline-flex items-center gap-2"
                  style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--green-400)" }}
                >
                  <span style={{ width: "2px", height: "12px", borderRadius: "2px", background: "var(--green-400)", display: "inline-block" }} />
                  A transformação
                </div>
                <h2
                  style={{
                    fontSize: "clamp(1.8rem,4vw,3rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  O profissional que o paciente{" "}
                  <span className="text-bg-gradient-to-r from-green-500 to-green-600">confia e volta</span>
                </h2>
                <div className="mt-6 space-y-4 leading-relaxed" style={{ color: "var(--muted)" }}>
                  <p style={{ fontSize: "1.05rem" }}>
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

      {/* ═════ SEÇÃO: TRILHAS ═════ */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <div
                className="mb-4 inline-flex items-center gap-2"
                style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--forest-500)" }}
              >
                <span style={{ width: "2px", height: "12px", borderRadius: "2px", background: "var(--forest-500)", display: "inline-block" }} />
                A jornada
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.8rem,4vw,3rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                O que você vai{" "}
                <span className="text-bg-gradient-to-r from-green-500 to-green-600">aprender</span>
              </h2>
              <p className="mt-5" style={{ fontSize: "1.05rem", color: "var(--muted)" }}>
                {totalAulasContagem} microlições em {trilhas.length} trilhas — do iniciante ao profissional de referência
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-4">
            {trilhas.map((t, idx) => {
              const totalModAulas = t.modulos.reduce((n, m) => n + m.aulas.length, 0);
              const gradientMap = [
                "from-forest-400 to-green-400",
                "from-forest-500 to-forest-400",
                "from-forest-500 to-orange-500",
                "from-green-400 to-forest-500",
              ];
              return (
                <ScrollReveal key={t.id} delay={idx * 80} direction="up">
                  <Card
                    className="group relative overflow-hidden p-5 flex flex-col min-h-[200px] transition-all duration-300"
                  >
                    <span
                      className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradientMap[idx]} text-white`}
                    >
                      <Icon name={t.icone as IconName} size={20} />
                    </span>
                    <div                    style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--forest-500)" }}
                    className="dark:text-forest-300"
                  >
                      Trilha {t.numero}
                    </div>
                    <h3 style={{ marginTop: "2px", fontWeight: 700, lineHeight: 1.25 }}>{t.titulo}</h3>
                    <p style={{ marginTop: "4px", fontSize: "12px", lineHeight: 1.5, color: "var(--muted)", flex: 1 }} className="line-clamp-2">{t.subtitulo}</p>
                    <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "8px", fontSize: "10px", color: "var(--subtle)" }}>
                      <span>{t.modulos.length} módulos</span>
                      <span style={{ width: "1px", height: "12px", background: "var(--border)" }} />
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
                className="inline-flex items-center gap-1.5 transition-colors dark:text-forest-300"
                style={{ fontSize: "14px", fontWeight: 600, color: "var(--forest-600)" }}
              >
                Ver currículo completo <Icon name="arrow" size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═════ SEÇÃO: PARA CADA FAIXA ═════ */}
      <section style={{ background: "linear-gradient(to bottom, var(--surface), rgba(13,43,46,0.03), var(--surface))" }}>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <div
                className="mb-4 inline-flex items-center gap-2"
                style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--forest-500)" }}
              >
                <span style={{ width: "2px", height: "12px", borderRadius: "2px", background: "var(--forest-500)", display: "inline-block" }} />
                Para cada idade, um cuidado
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.8rem,4vw,3rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Como atender bem{" "}
                <span className="text-bg-gradient-to-r from-green-500 to-green-600">cada fase da vida</span>
              </h2>
              <p className="mt-5" style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.65 }}>
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
                bg: "from-forest-500 to-green-400",
                dicas: ["Linguagem simples e sem julgamento", "Respeito à timidez e vergonha", "Acne, anticoncepcional, saúde íntima", "Atendimento rápido e discreto", "Orientação sem alarmismo"],
              },
              {
                faixa: "Adultos",
                icone: "trending",
                bg: "from-forest-600 to-orange-500",
                dicas: ["Escuta ativa das queixas do dia a dia", "Produtos para rotina corrida", "Cuidado com automedicação", "Oferta de serviços complementares", "Fidelização pelo cuidado genuíno"],
              },
              {
                faixa: "Idosos",
                icone: "shield",
                bg: "from-green-400 to-forest-600",
                dicas: ["Paciência e tom de voz adequado", "Polifarmácia e interações medicamentosas", "Letra grande nos materiais", "Acompanhamento do tratamento", "Acolhimento com respeito e dignidade"],
              },
            ].map((f, idx) => (
              <ScrollReveal key={f.faixa} delay={idx * 100} direction="up">
                <Card className="group h-full overflow-hidden p-6 transition-all duration-500">
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${f.bg} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon name={f.icone as IconName} size={24} />
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>{f.faixa}</h3>
                  <ul className="mt-4 space-y-2">
                    {f.dicas.map((dica) => (
                      <li key={dica} className="flex items-start gap-2" style={{ fontSize: "14px", color: "var(--muted)" }}>
                        <span style={{ marginTop: "6px", width: "6px", height: "6px", borderRadius: "50%", background: "var(--forest-400)", flexShrink: 0 }} />
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

      {/* ═════ CTA FINAL ═════ */}
      <section className="relative">
        <div className="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:pb-28">
          <ScrollReveal>
            <Card
               className="relative overflow-hidden border-2 border-[rgba(13,43,46,0.15)]"
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, var(--forest-50), #fff, rgba(238,247,236,0.5))",
                }}
              />
              <div
                className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full"
                style={{ background: "rgba(77,133,53,0.07)", filter: "blur(80px)" }}
              />
              <div
                className="pointer-events-none absolute -bottom-32 -left-32 h-[300px] w-[300px] rounded-full"
                style={{ background: "rgba(214,110,15,0.07)", filter: "blur(60px)" }}
              />

              <div className="relative px-6 py-12 text-center sm:px-16 sm:py-20">
                <div className="mx-auto max-w-2xl">
                  <div
                    className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 dark:bg-forest-800 dark:text-forest-200"
                    style={{ background: "var(--forest-100)", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--forest-700)" }}
                  >
                    <Icon name="sparkles" size={14} />
                    Comece agora
                  </div>
                  <h2
                    style={{
                      fontSize: "clamp(1.8rem,4.5vw,3.5rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.1,
                    }}
                  >
                    Transforme seu atendimento{" "}
                    <span className="text-bg-gradient-to-r from-green-500 to-green-600">em cuidado</span>
                  </h2>
                  <p
                    className="mx-auto mt-4"
                    style={{ maxWidth: "500px", fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.6 }}
                  >
                    {totalAulasContagem} microlições. {trilhas.length} trilhas. Simulador de atendimento real.
                    Acesso completo.
                  </p>
                  <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Botao
                      href="/trilhas"
                      tamanho="xl"
                      variante="primary"
                      iconeFim="arrow"
                      className="w-full sm:w-auto shadow-glow-strong text-base"
                    >
                      Acessar as trilhas
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
        else router.replace("/dashboard");
      })
      .catch(() => router.replace("/dashboard"));
  }, [perfil.email, router, status]);

  if (status === "verificando") {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="h-48 skeleton rounded-2xl" />
      </div>
    );
  }

  if (status === "rejeitado") {
    router.replace("/dashboard");
    return null;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <PainelAluno />
    </div>
  );
}
