import type { Metadata } from "next";
import { trilhas, totalAulas } from "@/content/curriculo";
import { MatriculaForm } from "@/components/matricula-form";
import { Botao, Card, Etiqueta, TituloSecao, DividerGlow } from "@/components/ui";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Matrículas",
  description: "Matricule-se na Formação para Atendentes Premium de Farmácia e comece agora.",
};

const beneficios = [
  {
    icone: "graduation",
    titulo: "4 Trilhas Completas",
    descricao: "Do básico ao avançado, com percursos pedagógicos estruturados",
  },
  {
    icone: "play",
    titulo: `${totalAulas()}+ Microlições`,
    descricao: "Vídeos, simulações interativas e quizzes de fixação",
  },
  {
    icone: "target",
    titulo: "Simulador de Balcão",
    descricao: "Missões pontuadas com cenários reais do dia a dia",
  },
  {
    icone: "book",
    titulo: "Biblioteca Regulatória",
    descricao: "Sempre atualizada com as normas da ANVISA e vigilância sanitária",
  },
  {
    icone: "award",
    titulo: "Gamificação Completa",
    descricao: "XP, níveis, badges e ranking para motivar seus estudos",
  },
  {
    icone: "chart",
    titulo: "Hub Power BI",
    descricao: "Leitura de indicadores e dashboard de desempenho pessoal",
  },
  {
    icone: "shield",
    titulo: "Certificações Internas",
    descricao: "Badges por competência validados ao longo da formação",
  },
  {
    icone: "sparkles",
    titulo: "Design Adaptável",
    descricao: "Modo claro e escuro, 100% responsivo em qualquer dispositivo",
  },
];

const depoimentosPlaceholder = [
  { nome: "—", cargo: "—", texto: "Espaço reservado para depoimentos reais dos alunos." },
];

export default function MatriculasPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      {/* ── Hero ── */}
      <div className="relative mb-16 text-center">
        {/* Badge Premium decorativo */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <Etiqueta tom="premium" className="px-3 py-1.5 text-xs uppercase tracking-wider">
            <Icon name="sparkles" size={12} />
            Premium
          </Etiqueta>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Comece sua{" "}
          <span className="text-gradient">formação premium</span> hoje
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {site.descricao}
        </p>

        {/* Indicadores rápidos */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-subtle">
          <span className="inline-flex items-center gap-1.5">
            <Icon name="graduation" size={16} className="text-brand-500" />
            <span><strong className="text-foreground">4</strong> trilhas</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="play" size={16} className="text-brand-500" />
            <span><strong className="text-foreground">{totalAulas()}+</strong> aulas</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="clock" size={16} className="text-brand-500" />
            <span><strong className="text-foreground">120h+</strong> de conteúdo</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="award" size={16} className="text-brand-500" />
            <span><strong className="text-foreground">8</strong> badges</span>
          </span>
        </div>
      </div>

      {/* ── Grid principal: Benefícios + Form ── */}
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* Coluna esquerda: Benefícios + Trilhas */}
        <div>
          <TituloSecao
            sobre="Benefícios"
            titulo="Tudo que você vai receber"
            descricao="Uma formação completa para transformar sua carreira no balcão da farmácia."
          />

          {/* Benefícios em cards elevados com hover */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
              descricao="Cada trilha foi desenhada por especialistas para cobrir todas as competências essenciais."
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {trilhas.slice(0, 3).map((t) => (
                <Card
                  key={t.id}
                  variante="elevated"
                  className="group p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100 dark:bg-brand-900/30 dark:group-hover:bg-brand-900/50">
                    <Icon
                      name={t.icone as Parameters<typeof Icon>[0]["name"]}
                      size={20}
                    />
                  </span>
                  <div className="text-xs font-semibold">{t.subtitulo}</div>
                  <p className="mt-1 text-[11px] leading-relaxed text-subtle line-clamp-2">
                    {t.descricao}
                  </p>
                </Card>
              ))}
            </div>

            <div className="mt-4 text-center">
              <Botao href="/trilhas" variante="ghost" tamanho="sm" iconeFim="arrow">
                Ver todas as trilhas
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

      {/* ── Seção de depoimentos / confiança ── */}
      <DividerGlow className="my-16" />

      <section className="text-center">
        <TituloSecao
          centralizado
          sobre="Depoimentos"
          titulo="O que dizem os alunos"
          descricao="Em breve — depoimentos reais de alunos que transformaram suas carreiras com a formação."
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {depoimentosPlaceholder.map((d, i) => (
            <Card
              key={i}
              variante="glass"
              className="p-6 text-left opacity-60"
            >
              <div className="mb-3 flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Icon key={j} name="star" size={14} />
                ))}
              </div>
              <p className="text-sm italic leading-relaxed text-muted">
                &ldquo;{d.texto}&rdquo;
              </p>
              <div className="mt-4 border-t border-border pt-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 text-xs font-bold text-muted">
                    ?
                  </span>
                  <div>
                    <div className="text-xs font-semibold">{d.nome}</div>
                    <div className="text-[10px] text-subtle">{d.cargo}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Selo de confiança ── */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-subtle">
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

      {/* ── Footer ── */}
      <DividerGlow className="my-10" />
      <p className="text-center text-sm text-subtle">{site.assinatura}</p>
    </div>
  );
}
