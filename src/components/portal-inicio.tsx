     1|"use client";
     2|
     3|import { useEffect, useState, useRef } from "react";
     4|import Image from "next/image";
     5|import Link from "next/link";
     6|import { useRouter } from "next/navigation";
     7|import { trilhas, totalAulas } from "@/content/curriculo";
     8|import { usePerfilAluno, type PerfilAluno } from "@/lib/aluno";
     9|import { lerStatusLocal, salvarStatusLocal } from "@/lib/cadastro-client";
    10|import { PainelAluno } from "./painel-aluno";
    11|import { ContinuarBotao } from "./continuar";
    12|import { Botao, Card } from "./ui";
    13|import { Icon, type IconName } from "./icons";
    14|import { ScrollReveal, ContadorAnimado } from "./animacoes";
    15|
    16|type StatusMatricula = "verificando" | "pendente" | "rejeitado" | "aprovado";
    17|
    18|export function PortalInicio() {
    19|  const { perfil, carregado: perfilOk } = usePerfilAluno();
    20|
    21|  if (!perfilOk) return <PortalConvidadoHero />;
    22|  if (!perfil?.email) return <PortalConvidadoHero />;
    23|
    24|  return <PortalMatriculadoFluxo perfil={perfil} />;
    25|}
    26|
    27|/* ═══════════════════════════════════════════════
    28|   VIDEO BACKGROUND HERO — DROGARIA
    29|═══════════════════════════════════════════════ */
    30|function VideoBanner() {
    31|  return (
    32|    <div className="relative w-full overflow-hidden" style={{ height: "340px" }}>
    33|      {/* Vídeo de drogaria passando ao fundo */}
    34|      <video
    35|        autoPlay
    36|        muted
    37|        loop
    38|        playsInline
    39|        className="absolute inset-0 w-full h-full object-cover"
    40|        style={{ filter: "brightness(0.55) saturate(1.1)" }}
    41|        poster="/pharmacy-hero.jpg"
    42|      >
    43|        <source src="https://cdn.pixabay.com/video/2022/09/19/132267-751668805_large.mp4" type="video/mp4" />
    44|        <source src="https://www.pexels.com/download/video/5794730/" type="video/mp4" />
    45|        {/* Fallback image */}
    46|      </video>
    47|
    48|      {/* Overlay gradiente institucional */}
    49|      <div
    50|        className="absolute inset-0 z-10"
    51|        style={{
    52|          background:
    53|            "linear-gradient(to bottom, rgba(4,11,13,0.82) 0%, rgba(13,43,46,0.45) 40%, rgba(4,11,13,0.88) 100%)",
    54|        }}
    55|      />
    56|
    57|      {/* Conteúdo do banner de vídeo */}
    58|      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
    59|        <div
    60|          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
    61|          style={{
    62|            background: "rgba(255,255,255,0.07)",
    63|            border: "1px solid rgba(255,255,255,0.12)",
    64|            backdropFilter: "blur(8px)",
    65|          }}
    66|        >
    67|          <span
    68|            className="h-2 w-2 rounded-full"
    69|            style={{ background: "#6db860", boxShadow: "0 0 8px #6db860" }}
    70|          />
    71|          <span
    72|            style={{
    73|              fontSize: "10px",
    74|              fontWeight: 700,
    75|              letterSpacing: "0.16em",
    76|              textTransform: "uppercase",
    77|              color: "rgba(255,255,255,0.65)",
    78|            }}
    79|          >
    80|            Formação profissional — Atendentes Premium de Farmácia
    81|          </span>
    82|        </div>
    83|
    84|        <h2
    85|          style={{
    86|            fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)",
    87|            fontWeight: 800,
    88|            color: "#fff",
    89|            letterSpacing: "-0.02em",
    90|            lineHeight: 1.1,
    91|            maxWidth: "640px",
    92|          }}
    93|        >
    94|          O cuidado começa{" "}
    95|          <span style={{ color: "#ef9145" }}>no balcão</span>
    96|        </h2>
    97|        <p
    98|          style={{
    99|            marginTop: "12px",
   100|            fontSize: "clamp(0.85rem, 1.8vw, 1rem)",
   101|            color: "rgba(255,255,255,0.55)",
   102|            maxWidth: "480px",
   103|            lineHeight: 1.55,
   104|          }}
   105|        >
   106|          Uma drogaria que cuida começa com um atendente que sabe cuidar.
   107|          Esse é o propósito desta formação.
   108|        </p>
   109|      </div>
   110|    </div>
   111|  );
   112|}
   113|
   114|/* ═══════════════════════════════════════════════
   115|   HERO CINEMATOGRÁFICO — SEM MATRÍCULA
   116|═══════════════════════════════════════════════ */
   117|function PortalConvidadoHero() {
   118|  const totalAulasContagem = totalAulas();
   119|
   120|  const pilares = [
   121|    { icone: "heart", titulo: "Acolhimento", desc: "Receber com excelência desde o primeiro contato", cor: "from-forest-500 to-sage-500" },
   122|    { icone: "shield", titulo: "Cuidado Técnico", desc: "Medicamentos, segurança, ANVISA — a base para cuidar bem", cor: "from-forest-600 to-forest-400" },
   123|    { icone: "message", titulo: "Comunicação Empática", desc: "Ouvir, acolher, transmitir segurança em cada palavra", cor: "from-sage-500 to-sage-400" },
   124|    { icone: "sparkles", titulo: "Encantamento", desc: "Surpreender, criar experiências que o paciente lembra", cor: "from-terracota-500 to-terracota-400" },
   125|    { icone: "trending", titulo: "Apoio ao Tratamento", desc: "Acompanhamento contínuo que transforma vidas", cor: "from-forest-400 to-terracota-500" },
   126|  ];
   127|
   128|  return (
   129|    <div>
   130|      {/* ═════ VÍDEO BANNER ACIMA DO HERO ═════ */}
   131|      <VideoBanner />
   132|
   133|      {/* ═════ HERO PRINCIPAL ═════ */}
   134|      <section
   135|        className="relative overflow-hidden"
   136|        style={{
   137|          minHeight: "78vh",
   138|          display: "flex",
   139|          alignItems: "center",
   140|          background: "var(--forest-900)",
   141|        }}
   142|      >
   143|        <Image
   144|          src="/pharmacy-hero.jpg"
   145|          alt=""
   146|          fill
   147|          className="hero-bg scale-105"
   148|          priority
   149|          sizes="100vw"
   150|        />
   151|        <div className="hero-overlay" />
   152|        <div className="pointer-events-none absolute inset-0 z-0 grid-bg opacity-15" />
   153|
   154|        {/* Orbs ambientais */}
   155|        <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] orb bg-forest-500/15" />
   156|        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[320px] w-[320px] orb bg-terracota-500/12" />
   157|
   158|        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full py-16 sm:py-20">
   159|          <div className="max-w-4xl">
   160|            <ScrollReveal delay={0} direction="up">
   161|              <div
   162|                className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
   163|                style={{
   164|                  border: "1px solid rgba(255,255,255,0.10)",
   165|                  background: "rgba(255,255,255,0.05)",
   166|                  backdropFilter: "blur(10px)",
   167|                }}
   168|              >
   169|                <span
   170|                  className="h-1.5 w-1.5 rounded-full animate-pulse-soft"
   171|                  style={{ background: "#6db860", boxShadow: "0 0 6px #6db860" }}
   172|                />
   173|                <span
   174|                  style={{
   175|                    fontSize: "10px",
   176|                    fontWeight: 700,
   177|                    letterSpacing: "0.15em",
   178|                    textTransform: "uppercase",
   179|                    color: "rgba(255,255,255,0.55)",
   180|                  }}
   181|                >
   182|                  Formação profissional para atendentes de farmácia
   183|                </span>
   184|              </div>
   185|            </ScrollReveal>
   186|
   187|            <ScrollReveal delay={150} direction="up">
   188|              <h1
   189|                style={{
   190|                  fontSize: "clamp(2.4rem,7vw,5rem)",
   191|                  fontWeight: 800,
   192|                  lineHeight: 1.02,
   193|                  letterSpacing: "-0.03em",
   194|                }}
   195|              >
   196|                <span style={{ color: "#fff" }}>O treinamento que transforma</span>
   197|                <br />
   198|                <span className="text-gradient-premium">atendentes em cuidadores</span>
   199|              </h1>
   200|            </ScrollReveal>
   201|
   202|            <ScrollReveal delay={300} direction="up">
   203|              <p
   204|                style={{
   205|                  marginTop: "24px",
   206|                  maxWidth: "600px",
   207|                  fontSize: "clamp(0.95rem,2vw,1.12rem)",
   208|                  lineHeight: 1.65,
   209|                  color: "rgba(255,255,255,0.58)",
   210|                }}
   211|              >
   212|                Do acolhimento ao cuidado contínuo. Da perfumaria aos medicamentos.
   213|                O único treinamento do Brasil que forma atendentes completos —
   214|                com técnica, empatia e amor pelo que fazem.
   215|              </p>
   216|            </ScrollReveal>
   217|
   218|            <ScrollReveal delay={450} direction="up">
   219|              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
   220|                <Botao
   221|<<<<<<< HEAD
   222|                  href="/trilhas"
   223|=======
   224|                  href="/"
   225|>>>>>>> 04633e0 (feat: matrícula vira raiz (/) e Portal do Aluno vai para /dashboard)
   226|                  tamanho="xl"
   227|                  variante="premium"
   228|                  iconeFim="arrow"
   229|                  className="w-full sm:w-auto shadow-glow-strong text-base"
   230|                >
   231|                  Ver as trilhas
   232|                </Botao>
   233|                <ContinuarBotao />
   234|              </div>
   235|            </ScrollReveal>
   236|
   237|            <ScrollReveal delay={600} direction="up">
   238|              <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
   239|                {[
   240|                  { valor: totalAulasContagem, label: "Microlições", sufixo: "+" },
   241|                  { valor: 4, label: "Trilhas de formação", sufixo: "" },
   242|                  { valor: 8, label: "Badges de conquista", sufixo: "" },
   243|                ].map((stat) => (
   244|                  <div key={stat.label} style={{ borderLeft: "1px solid rgba(255,255,255,0.10)", paddingLeft: "16px" }}>
   245|                    <div
   246|                      style={{
   247|                        fontSize: "clamp(1.5rem,3vw,2.5rem)",
   248|                        fontWeight: 800,
   249|                        letterSpacing: "-0.02em",
   250|                        color: "#fff",
   251|                      }}
   252|                    >
   253|                      <ContadorAnimado valor={stat.valor} sufixo={stat.sufixo} duracao={2500} />
   254|                    </div>
   255|                    <div
   256|                      style={{
   257|                        marginTop: "4px",
   258|                        fontSize: "10px",
   259|                        textTransform: "uppercase",
   260|                        letterSpacing: "0.12em",
   261|                        color: "rgba(255,255,255,0.38)",
   262|                      }}
   263|                    >
   264|                      {stat.label}
   265|                    </div>
   266|                  </div>
   267|                ))}
   268|              </div>
   269|            </ScrollReveal>
   270|          </div>
   271|        </div>
   272|
   273|        {/* Scroll indicator */}
   274|        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "rgba(255,255,255,0.25)" }}>
   275|          <span style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.2em" }}>Role</span>
   276|          <div className="h-8 w-px animate-float" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
   277|        </div>
   278|      </section>
   279|
   280|      {/* ═════ SEÇÃO: O PROBLEMA ═════ */}
   281|      <section className="relative overflow-hidden">
   282|        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
   283|          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
   284|            <ScrollReveal direction="left">
   285|              <div>
   286|                <div
   287|                  className="mb-4 inline-flex items-center gap-2"
   288|                  style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--terracota-500)" }}
   289|                >
   290|                  <span style={{ width: "2px", height: "12px", borderRadius: "2px", background: "var(--terracota-500)", display: "inline-block" }} />
   291|                  A realidade do balcão
   292|                </div>
   293|                <h2
   294|                  style={{
   295|                    fontSize: "clamp(1.8rem,4vw,3rem)",
   296|                    fontWeight: 700,
   297|                    letterSpacing: "-0.02em",
   298|                    lineHeight: 1.1,
   299|                  }}
   300|                >
   301|                  O balcão da farmácia{" "}
   302|                  <span style={{ color: "var(--terracota-500)" }}>precisa de mais</span>
   303|                </h2>
   304|                <div className="mt-6 space-y-4 leading-relaxed" style={{ color: "var(--muted)" }}>
   305|                  <p style={{ fontSize: "1.05rem" }}>
   306|                    Atendentes são jogados no balcão sem preparo. Sabem o preço,
   307|                    mas não sabem ouvir. Sabem o produto, mas não sabem cuidar.
   308|                  </p>
   309|                  <p>
   310|                    Clientes saem insatisfeitos. Oportunidades de cuidado viram
   311|                    venda perdida. O atendente se frustra, e o paciente vai embora
   312|                    sem a atenção que merece.
   313|                  </p>
   314|                </div>
   315|              </div>
   316|            </ScrollReveal>
   317|
   318|            <ScrollReveal direction="right" delay={200}>
   319|              <div className="grid gap-4">
   320|                {[
   321|                  "Atendente sem preparo para cuidar",
   322|                  "Cliente que não se sente acolhido",
   323|                  "Paciente que não volta",
   324|                  "Cuidado que fica pela metade",
   325|                ].map((texto) => (
   326|                  <div
   327|                    key={texto}
   328|                    className="flex items-center gap-3 rounded-xl px-4 py-3"
   329|                    style={{
   330|                      border: "1px solid rgba(var(--terracota-500-rgb,214,110,15),0.2)",
   331|                      background: "rgba(253,242,234,0.25)",
   332|                    }}
   333|                  >
   334|                    <span
   335|                      className="flex h-8 w-8 flex-none items-center justify-center rounded-lg"
   336|                      style={{ background: "rgba(253,228,210,0.6)", color: "var(--terracota-500)" }}
   337|                    >
   338|                      <Icon name="close" size={16} />
   339|                    </span>
   340|                    <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--muted)" }}>{texto}</span>
   341|                  </div>
   342|                ))}
   343|              </div>
   344|            </ScrollReveal>
   345|          </div>
   346|        </div>
   347|      </section>
   348|
   349|      {/* ═════ SEÇÃO: OS 5 PILARES ═════ */}
   350|      <section style={{ background: "linear-gradient(to bottom, var(--surface), rgba(13,43,46,0.03), var(--surface))" }}>
   351|        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
   352|          <div className="mx-auto max-w-3xl text-center">
   353|            <ScrollReveal>
   354|              <div
   355|                className="mb-4 inline-flex items-center gap-2"
   356|                style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--forest-500)" }}
   357|              >
   358|                <span style={{ width: "2px", height: "12px", borderRadius: "2px", background: "var(--forest-500)", display: "inline-block" }} />
   359|                A solução
   360|              </div>
   361|              <h2
   362|                style={{
   363|                  fontSize: "clamp(1.8rem,4vw,3rem)",
   364|                  fontWeight: 700,
   365|                  letterSpacing: "-0.02em",
   366|                  lineHeight: 1.1,
   367|                }}
   368|              >
   369|                Um treinamento que{" "}
   370|                <span className="text-gradient-brand">ensina a cuidar</span>
   371|              </h2>
   372|              <p className="mt-6" style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.65 }}>
   373|                Não é só farmácia. É técnica, acolhimento, comunicação e cuidado contínuo —
   374|                tudo que um atendente precisa para fazer a diferença na vida de quem chega ao balcão.
   375|              </p>
   376|            </ScrollReveal>
   377|          </div>
   378|
   379|          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
   380|            {pilares.map((pilar, idx) => (
   381|              <ScrollReveal key={pilar.titulo} delay={idx * 80} direction="up">
   382|                <Card
   383|                  className="group relative overflow-hidden p-6 h-full text-center"
   384|                  style={{ transition: "all 0.4s ease" }}
   385|                >
   386|                  <div
   387|                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${pilar.cor}`}
   388|                    style={{ opacity: 0.6, transition: "opacity 0.3s" }}
   389|                  />
   390|                  <span
   391|                    className={`mx-auto mb-4 mt-1 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${pilar.cor} text-white shadow-lg`}
   392|                    style={{ transition: "transform 0.3s" }}
   393|                  >
   394|                    <Icon name={pilar.icone as IconName} size={24} />
   395|                  </span>
   396|                  <h3 style={{ fontSize: "13px", fontWeight: 700, lineHeight: 1.3 }}>{pilar.titulo}</h3>
   397|                  <p style={{ marginTop: "8px", fontSize: "12px", lineHeight: 1.55, color: "var(--muted)" }}>{pilar.desc}</p>
   398|                </Card>
   399|              </ScrollReveal>
   400|            ))}
   401|          </div>
   402|        </div>
   403|      </section>
   404|
   405|      {/* ═════ SEÇÃO: A TRANSFORMAÇÃO ═════ */}
   406|      <section className="relative overflow-hidden">
   407|        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
   408|          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
   409|            <ScrollReveal direction="left" delay={200}>
   410|              <div className="grid gap-4">
   411|                {[
   412|                  "Atendente que entende do cuidado",
   413|                  "Cliente que se sente acolhido",
   414|                  "Paciente que volta e confia",
   415|                  "Cuidado completo, do início ao fim",
   416|                ].map((texto) => (
   417|                  <div
   418|                    key={texto}
   419|                    className="flex items-center gap-3 rounded-xl px-4 py-3"
   420|                    style={{
   421|                      border: "1px solid rgba(109,184,96,0.2)",
   422|                      background: "rgba(238,247,236,0.25)",
   423|                    }}
   424|                  >
   425|                    <span
   426|                      className="flex h-8 w-8 flex-none items-center justify-center rounded-lg"
   427|                      style={{ background: "rgba(221,239,218,0.7)", color: "var(--sage-600)" }}
   428|                    >
   429|                      <Icon name="check" size={16} />
   430|                    </span>
   431|                    <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--muted)" }}>{texto}</span>
   432|                  </div>
   433|                ))}
   434|              </div>
   435|            </ScrollReveal>
   436|
   437|            <ScrollReveal direction="right">
   438|              <div>
   439|                <div
   440|                  className="mb-4 inline-flex items-center gap-2"
   441|                  style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--sage-500)" }}
   442|                >
   443|                  <span style={{ width: "2px", height: "12px", borderRadius: "2px", background: "var(--sage-500)", display: "inline-block" }} />
   444|                  A transformação
   445|                </div>
   446|                <h2
   447|                  style={{
   448|                    fontSize: "clamp(1.8rem,4vw,3rem)",
   449|                    fontWeight: 700,
   450|                    letterSpacing: "-0.02em",
   451|                    lineHeight: 1.1,
   452|                  }}
   453|                >
   454|                  O profissional que o paciente{" "}
   455|                  <span className="text-gradient-brand">confia e volta</span>
   456|                </h2>
   457|                <div className="mt-6 space-y-4 leading-relaxed" style={{ color: "var(--muted)" }}>
   458|                  <p style={{ fontSize: "1.05rem" }}>
   459|                    Depois do treinamento, o atendente não é mais o mesmo.
   460|                    Ele entende de pele, de medicamento, de receita — e também
   461|                    de gente. Sabe ouvir, acolher, se importar.
   462|                  </p>
   463|                  <p>
   464|                    Cliente que se sente cuidado volta. Volta e traz a família.
   465|                    Vira paciente fiel. É assim que o balcão deixa de ser um
   466|                    ponto de passagem e se transforma em um lugar de cuidado.
   467|                  </p>
   468|                </div>
   469|              </div>
   470|            </ScrollReveal>
   471|          </div>
   472|        </div>
   473|      </section>
   474|
   475|      {/* ═════ SEÇÃO: TRILHAS ═════ */}
   476|      <section>
   477|        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
   478|          <div className="mx-auto max-w-3xl text-center">
   479|            <ScrollReveal>
   480|              <div
   481|                className="mb-4 inline-flex items-center gap-2"
   482|                style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--forest-500)" }}
   483|              >
   484|                <span style={{ width: "2px", height: "12px", borderRadius: "2px", background: "var(--forest-500)", display: "inline-block" }} />
   485|                A jornada
   486|              </div>
   487|              <h2
   488|                style={{
   489|                  fontSize: "clamp(1.8rem,4vw,3rem)",
   490|                  fontWeight: 700,
   491|                  letterSpacing: "-0.02em",
   492|                  lineHeight: 1.1,
   493|                }}
   494|              >
   495|                O que você vai{" "}
   496|                <span className="text-gradient-brand">aprender</span>
   497|              </h2>
   498|              <p className="mt-5" style={{ fontSize: "1.05rem", color: "var(--muted)" }}>
   499|                {totalAulasContagem} microlições em 4 trilhas — do iniciante ao profissional de referência
   500|              </p>
   501|