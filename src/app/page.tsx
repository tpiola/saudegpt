     1|import type { Metadata } from "next";
     2|import Image from "next/image";
     3|import { trilhas, totalAulas } from "@/content/curriculo";
     4|import { MatriculaForm } from "@/components/matricula-form";
     5|import { Botao, Card, TituloSecao, DividerGlow } from "@/components/ui";
     6|import { Icon } from "@/components/icons";
     7|import { site } from "@/lib/site";
     8|
     9|export const metadata: Metadata = {
    10|<<<<<<< HEAD
    11|  title: "Home | Atendentes Premium de Farmácia",
    12|  description:
    13|    "A formação mais completa do Brasil para atendentes de drogaria e perfumaria — trilhas, simuladores, cuidado humanizado e atendimento de excelência.",
    14|=======
    15|  title: "Matrícula Gratuita — Formação para Atendentes de Farmácia",
    16|  description:
    17|    "Matricule-se na Formação para Atendentes Premium de Farmácia — com foco em acolhimento, cuidado humanizado, comunicação empática e encantamento no balcão.",
    18|  openGraph: {
    19|    title: "Matrícula Gratuita — Formação para Atendentes de Farmácia",
    20|    description:
    21|      "Matricule-se na Formação para Atendentes Premium de Farmácia — com foco em acolhimento, cuidado humanizado, comunicação empática e encantamento no balcão.",
    22|    url: "https://www.saudegpt.com",
    23|    siteName: site.nome,
    24|  },
    25|>>>>>>> 04633e0 (feat: matrícula vira raiz (/) e Portal do Aluno vai para /dashboard)
    26|};
    27|
    28|const beneficios = [
    29|  {
    30|    icone: "heart",
    31|    titulo: "Atendimento Humanizado",
    32|    descricao: "Acolhimento, escuta ativa e cuidado genuíno que faz o paciente confiar",
    33|  },
    34|  {
    35|    icone: "shield",
    36|    titulo: "Técnica e Segurança",
    37|    descricao: "Medicamentos, receitas, ANVISA — a base para cuidar com responsabilidade",
    38|  },
    39|  {
    40|    icone: "star",
    41|    titulo: "Comunicação de Cuidado",
    42|    descricao: "Empatia, linguagem de acolhimento e como transmitir segurança ao paciente",
    43|  },
    44|  {
    45|    icone: "sparkles",
    46|    titulo: "Encantamento no Atendimento",
    47|    descricao: "Pós-atendimento, cuidado contínuo e como ser o profissional que o paciente procura",
    48|  },
    49|  {
    50|    icone: "book",
    51|    titulo: `${totalAulas()}+ Microlições`,
    52|    descricao: "Vídeos, simulações reais de atendimento e quizzes de fixação",
    53|  },
    54|  {
    55|    icone: "target",
    56|    titulo: "Simulador de Atendimento",
    57|    descricao: "Situações reais de balcão — você escolhe a abordagem e recebe feedback",
    58|  },
    59|  {
    60|    icone: "award",
    61|    titulo: "4 Trilhas Completas",
    62|    descricao: "Perfumaria, Medicamentos, Operacional e Cuidado Humanizado",
    63|  },
    64|  {
    65|    icone: "trending",
    66|    titulo: "Gamificação de Estudos",
    67|    descricao: "XP, níveis, badges e ranking para acompanhar sua evolução no cuidado",
    68|  },
    69|];
    70|
    71|export default function HomePage() {
    72|  const totalAulasContagem = totalAulas();
    73|  const trilhaVendas = trilhas.find((t) => t.id === "encantamento");
    74|  const aulasVendas = trilhaVendas?.modulos.reduce((n, m) => n + m.aulas.length, 0) ?? 0;
    75|
    76|  return (
    77|    <div className="relative">
    78|      {/* ── Hero com imagem ── */}
    79|      <section className="hero-image-gradient relative overflow-hidden">
    80|        <Image
    81|          src="/customer-service.jpg"
    82|          alt="Atendimento ao cliente"
    83|          fill
    84|          className="hero-bg"
    85|          priority
    86|          sizes="100vw"
    87|        />
    88|        <div className="hero-overlay" />
    89|        <div className="pointer-events-none absolute inset-0 z-0 grid-bg opacity-20" />
    90|
    91|        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
    92|          <div className="mx-auto max-w-3xl text-center">
    93|            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/70 backdrop-blur-md">
    94|              <Icon
    95|                name="sparkles"
    96|                size={12}
    97|                className="text-accent-cyan"
    98|              />
    99|              Matrícula gratuita
   100|            </div>
   101|
   102|            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight leading-tight">
   103|              <span className="text-gradient-premium">
   104|                Comece sua formação
   105|              </span>
   106|              <br />
   107|              <span className="text-white">
   108|                em cuidado humanizado
   109|              </span>
   110|            </h1>
   111|            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
   112|              {site.descricao} Agora com foco em <strong className="text-white/90">acolhimento, cuidado genuíno, comunicação empática e encantamento</strong> — habilidades que transformam atendentes em profissionais de cuidado.
   113|            </p>
   114|
   115|            {/* Stats rápidas */}
   116|            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
   117|              <span className="inline-flex items-center gap-1.5">
   118|                <Icon name="book" size={16} className="text-accent-cyan" />
   119|                <span><strong className="text-white">4</strong> trilhas</span>
   120|              </span>
   121|              <span className="inline-flex items-center gap-1.5">
   122|                <Icon name="play" size={16} className="text-accent-cyan" />
   123|                <span><strong className="text-white">{totalAulasContagem}+</strong> aulas</span>
   124|              </span>
   125|              <span className="inline-flex items-center gap-1.5">
   126|                <Icon name="trending" size={16} className="text-accent-cyan" />
   127|                <span><strong className="text-white">{aulasVendas}</strong> aulas de cuidado</span>
   128|              </span>
   129|              <span className="inline-flex items-center gap-1.5">
   130|                <Icon name="award" size={16} className="text-accent-cyan" />
   131|                <span><strong className="text-white">8</strong> badges</span>
   132|              </span>
   133|            </div>
   134|          </div>
   135|        </div>
   136|      </section>
   137|
   138|      {/* ── Grid principal: Benefícios + Form ── */}
   139|      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
   140|        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2 lg:items-start">
   141|          {/* Coluna esquerda: Benefícios + Trilhas */}
   142|          <div>
   143|            <TituloSecao
   144|              sobre="Benefícios"
   145|              titulo="Tudo que você vai receber"
   146|              descricao="Uma formação completa para transformar sua carreira no balcão da farmácia — com habilidades de vendas que realmente funcionam."
   147|            />
   148|
   149|            {/* Benefícios em cards feature */}
   150|            <div className="mt-6 grid gap-4 sm:gap-6 sm:grid-cols-2">
   151|              {beneficios.map((b) => (
   152|                <Card
   153|                  key={b.titulo}
   154|                  variante="elevated"
   155|                  className="group p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
   156|                >
   157|                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100 dark:bg-brand-900/30 dark:group-hover:bg-brand-900/50">
   158|                    <Icon name={b.icone as Parameters<typeof Icon>[0]["name"]} size={20} />
   159|                  </span>
   160|                  <h3 className="text-sm font-semibold">{b.titulo}</h3>
   161|                  <p className="mt-1 text-xs leading-relaxed text-muted">{b.descricao}</p>
   162|                </Card>
   163|              ))}
   164|            </div>
   165|
   166|            {/* Trilhas preview */}
   167|            <DividerGlow className="my-10" />
   168|
   169|            <div>
   170|              <TituloSecao
   171|                sobre="Trilhas"
   172|                titulo="Conheça as trilhas da formação"
   173|                descricao="Cada trilha foi desenhada para cobrir todas as competências essenciais — da técnica à venda consultiva."
   174|              />
   175|
   176|              <div className="mt-6 grid gap-4 sm:gap-6 sm:grid-cols-2">
   177|                {trilhas.map((t) => (
   178|                  <Card
   179|                    key={t.id}
   180|                    variante="elevated"
   181|                    className="group p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
   182|                  >
   183|                    <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100 dark:bg-brand-900/30 dark:group-hover:bg-brand-900/50">
   184|                      <Icon name={t.icone as Parameters<typeof Icon>[0]["name"]} size={20} />
   185|                    </span>
   186|                    <div className="text-xs font-semibold text-brand-600">{t.subtitulo}</div>
   187|                    <p className="mt-0.5 text-sm font-bold">{t.titulo}</p>
   188|                    <p className="mt-1 text-[11px] leading-relaxed text-subtle line-clamp-2">
   189|                      {t.descricao}
   190|                    </p>
   191|                  </Card>
   192|                ))}
   193|              </div>
   194|
   195|              <div className="mt-4 text-center">
   196|                <Botao href="/trilhas" variante="ghost" tamanho="sm" iconeFim="arrow">
   197|                  Ver detalhes das trilhas
   198|                </Botao>
   199|              </div>
   200|            </div>
   201|          </div>
   202|
   203|          {/* Coluna direita: Formulário */}
   204|          <div className="lg:sticky lg:top-24">
   205|            <Card variante="glass" className="p-6 sm:p-8">
   206|              <div className="mb-2 flex items-center gap-2">
   207|                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200">
   208|                  <Icon name="graduation" size={16} />
   209|                </span>
   210|                <span className="text-xs font-semibold uppercase tracking-wider text-subtle">
   211|                  Matrícula
   212|                </span>
   213|              </div>
   214|              <MatriculaForm />
   215|            </Card>
   216|          </div>
   217|        </div>
   218|      </div>
   219|
   220|      {/* ── Selo de confiança ── */}
   221|      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
   222|        <DividerGlow className="mb-8" />
   223|        <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-subtle">
   224|          <span className="inline-flex items-center gap-1.5">
   225|            <Icon name="shield" size={14} className="text-emerald-500" />
   226|            Dados protegidos
   227|          </span>
   228|          <span className="inline-flex items-center gap-1.5">
   229|            <Icon name="lock" size={14} className="text-emerald-500" />
   230|            Cadastro seguro
   231|          </span>
   232|          <span className="inline-flex items-center gap-1.5">
   233|            <Icon name="heart" size={14} className="text-rose-500" />
   234|            Suporte humanizado
   235|          </span>
   236|        </div>
   237|
   238|        <DividerGlow className="my-8" />
   239|        <p className="text-center text-sm text-subtle">{site.assinatura}</p>
   240|      </div>
   241|    </div>
   242|  );
   243|}
   244|