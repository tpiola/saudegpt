import type { Metadata } from "next";
import Image from "next/image";
import { trilhas, totalAulas } from "@/content/curriculo";
import { MatriculaForm } from "@/components/matricula-form";
import { Botao, Card, TituloSecao, DividerGlow } from "@/components/ui";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Matrículas",
  description:
    "Matricule-se na Formação para Atendentes Premium de Farmácia — com foco em acolhimento, cuidado humanizado, comunicação empática e encantamento no balcão.",
};

const beneficios = [
  {
    icone: "heart",
    titulo: "Atendimento Humanizado",
    descricao: "Acolhimento, escuta ativa e cuidado genuíno que faz o paciente confiar",
  },
  {
    icone: "shield",
    titulo: "Técnica e Segurança",
    descricao: "Medicamentos, receitas, ANVISA — a base para cuidar com responsabilidade",
  },
  {
    icone: "star",
    titulo: "Comunicação de Cuidado",
    descricao: "Empatia, linguagem de acolhimento e como transmitir segurança ao paciente",
  },
  {
    icone: "sparkles",
    titulo: "Encantamento no Atendimento",
    descricao: "Pós-atendimento, cuidado contínuo e como ser o profissional que o paciente procura",
  },
  {
    icone: "book",
    titulo: `${totalAulas()}+ Microlições`,
    descricao: "Vídeos, simulações reais de atendimento e quizzes de fixação",
  },
  {
    icone: "target",
    titulo: "Simulador de Atendimento",
    descricao: "Situações reais de balcão — você escolhe a abordagem e recebe feedback",
  },
  {
    icone: "award",
    titulo: "4 Trilhas Completas",
    descricao: "Perfumaria, Medicamentos, Operacional e Cuidado Humanizado",
  },
  {
    icone: "trending",
    titulo: "Gamificação de Estudos",
    descricao: "XP, níveis, badges e ranking para acompanhar sua evolução no cuidado",
  },
];

export default function MatriculasPage() {
  const totalAulasContagem = totalAulas();
  const trilhaVendas = trilhas.find((t) => t.id === "encantamento");
  const aulasVendas = trilhaVendas?.modulos.reduce((n, m) => n + m.aulas.length, 0) ?? 0;

  return (
    <div className="relative">
      {/* ── Hero com imagem ── */}
      <section className="hero-image-gradient relative overflow-hidden">
        <Image
          src="/customer-service.jpg"
          alt="Atendimento ao cliente"
          fill
          className="hero-bg"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="pointer-events-none absolute inset-0 z-0 grid-bg opacity-20" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/70 backdrop-blur-md">
              <Icon
                name="sparkles"
                size={12}
                className="text-accent-cyan"
              />
              Matrícula gratuita
            </div>

            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight leading-tight">
              <span className="text-gradient-premium">
                Comece sua formação
              </span>
              <br />
              <span className="text-white">
                em cuidado humanizado
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              {site.descricao} Agora com foco em <strong className="text-white/90">acolhimento, cuidado genuíno, comunicação empática e encantamento</strong> — habilidades que transformam atendentes em profissionais de cuidado.
            </p>

            {/* Stats rápidas */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
              <span className="inline-flex items-center gap-1.5">
                <Icon name="book" size={16} className="text-accent-cyan" />
                <span><strong className="text-white">4</strong> trilhas</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="play" size={16} className="text-accent-cyan" />
                <span><strong className="text-white">{totalAulasContagem}+</strong> aulas</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="trending" size={16} className="text-accent-cyan" />
                <span><strong className="text-white">{aulasVendas}</strong> aulas de cuidado</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="award" size={16} className="text-accent-cyan" />
                <span><strong className="text-white">8</strong> badges</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Grid principal: Benefícios + Form ── */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2 lg:items-start">
          {/* Coluna esquerda: Benefícios + Trilhas */}
          <div>
            <TituloSecao
              sobre="Benefícios"
              titulo="Tudo que você vai receber"
              descricao="Uma formação completa para transformar sua carreira no balcão da farmácia — com habilidades de vendas que realmente funcionam."
            />

            {/* Benefícios em cards feature */}
            <div className="mt-6 grid gap-4 sm:gap-6 sm:grid-cols-2">
              {beneficios.map((b) => (
                <Card
                  key={b.titulo}
                  variante="elevated"
                  className="group p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100 dark:bg-brand-900/30 dark:group-hover:bg-brand-900/50">
                    <Icon name={b.icone as Parameters<typeof Icon>[0]["name"]} size={20} />
                  </span>
                  <h3 className="text-sm font-semibold">{b.titulo}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{b.descricao}</p>
                </Card>
              ))}
            </div>

            {/* Trilhas preview */}
            <DividerGlow className="my-10" />

            <div>
              <TituloSecao
                sobre="Trilhas"
                titulo="Conheça as trilhas da formação"
                descricao="Cada trilha foi desenhada para cobrir todas as competências essenciais — da técnica à venda consultiva."
              />

              <div className="mt-6 grid gap-4 sm:gap-6 sm:grid-cols-2">
                {trilhas.map((t) => (
                  <Card
                    key={t.id}
                    variante="elevated"
                    className="group p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100 dark:bg-brand-900/30 dark:group-hover:bg-brand-900/50">
                      <Icon name={t.icone as Parameters<typeof Icon>[0]["name"]} size={20} />
                    </span>
                    <div className="text-xs font-semibold text-brand-600">{t.subtitulo}</div>
                    <p className="mt-0.5 text-sm font-bold">{t.titulo}</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-subtle line-clamp-2">
                      {t.descricao}
                    </p>
                  </Card>
                ))}
              </div>

              <div className="mt-4 text-center">
                <Botao href="/trilhas" variante="ghost" tamanho="sm" iconeFim="arrow">
                  Ver detalhes das trilhas
                </Botao>
              </div>
            </div>
          </div>

          {/* Coluna direita: Formulário */}
          <div className="lg:sticky lg:top-24">
            <Card variante="glass" className="p-6 sm:p-8">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200">
                  <Icon name="graduation" size={16} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-subtle">
                  Matrícula
                </span>
              </div>
              <MatriculaForm />
            </Card>
          </div>
        </div>
      </div>

      {/* ── Selo de confiança ── */}
      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <DividerGlow className="mb-8" />
        <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-subtle">
          <span className="inline-flex items-center gap-1.5">
            <Icon name="shield" size={14} className="text-emerald-500" />
            Dados protegidos
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="lock" size={14} className="text-emerald-500" />
            Cadastro seguro
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="heart" size={14} className="text-rose-500" />
            Suporte humanizado
          </span>
        </div>

        <DividerGlow className="my-8" />
        <p className="text-center text-sm text-subtle">{site.assinatura}</p>
      </div>
    </div>
  );
}
