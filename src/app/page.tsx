import Link from "next/link";
import { trilhas, totalAulas, xpTotalDisponivel } from "@/content/curriculo";
import { bibliotecaRegulatoria } from "@/content/biblioteca";
import { Mandala } from "@/components/mandala";
import { ContinuarBotao } from "@/components/continuar";
import { Botao, Card, Etiqueta, TituloSecao } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { site } from "@/lib/site";

const recursos: { icone: IconName; titulo: string; texto: string }[] = [
  {
    icone: "play",
    titulo: "Microlições de 3 a 8 min",
    texto:
      "Vídeo, cards comparativos, simulações e checklists. Nada de páginas longas e cansativas.",
  },
  {
    icone: "target",
    titulo: "Missões de atendimento",
    texto: "Casos reais de balcão pontuados por triagem, segurança, ética e encaminhamento.",
  },
  {
    icone: "sparkles",
    titulo: "Gamificação elegante",
    texto: "XP, níveis, badges e missões — funcional, sem infantilizar o aprendizado.",
  },
  {
    icone: "book",
    titulo: "Biblioteca regulatória viva",
    texto: "RDC 471/2021, GLP-1 (IN 360/2025) e Farmácia Popular 2025 sempre atualizados.",
  },
  {
    icone: "shield",
    titulo: "Segurança sanitária",
    texto: "Saber o que orientar, o que evitar e quando chamar o farmacêutico.",
  },
  {
    icone: "chart",
    titulo: "Power BI para atendentes",
    texto: "Ler faturamento, ticket, conversão, ruptura, NPS e aderência terapêutica.",
  },
];

const niveis = [
  {
    nome: "Básico",
    texto:
      "O que é, para que serve, quando oferecer, quando não oferecer e quando chamar o farmacêutico.",
  },
  {
    nome: "Intermediário",
    texto:
      "Perguntas de triagem, associação de sintomas, sazonalidade, autocuidado e jornada do cliente.",
  },
  {
    nome: "Avançado",
    texto:
      "Adesão, risco sanitário, leitura de receita, condução ética de objeções e análise de resultado.",
  },
];

export default function Home() {
  const atualizacoes = bibliotecaRegulatoria.filter((n) => n.atualizado);

  return (
    <>
      {/* HERO cinematográfico */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="pointer-events-none absolute top-40 left-0 h-72 w-72 rounded-full bg-accent-cyan/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
          <div className="animate-fade-up">
            <Etiqueta tom="brand">
              <Icon name="sparkles" size={14} /> Plataforma-escola de saúde e atendimento
            </Etiqueta>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Formação para <span className="text-gradient">Atendentes Premium</span> de Farmácia
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Do iniciante absoluto ao nível avançado: saúde integral, atendimento humanizado,
              vendas consultivas, segurança sanitária e evolução de carreira até a graduação em
              Farmácia.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ContinuarBotao />
              <Botao href="/trilhas" variante="secondary" tamanho="lg" iconeFim="arrow">
                Ver trilhas
              </Botao>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                { v: `${trilhas.length}`, l: "trilhas" },
                { v: `${totalAulas()}+`, l: "aulas" },
                {
                  v: `${(xpTotalDisponivel() / 1000).toFixed(1)}k`,
                  l: "XP disponível",
                },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-bold text-brand-600">{s.v}</div>
                  <div className="text-xs text-subtle">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up">
            <Card className="glass animate-float">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl gradient-brand text-white">
                    <Icon name="graduation" size={22} />
                  </span>
                  <div>
                    <div className="text-sm font-bold">Trilha 1 · Perfumaria</div>
                    <div className="text-xs text-subtle">Atendente Premium I</div>
                  </div>
                </div>
                <Etiqueta tom="success">
                  <Icon name="play" size={12} /> Aula 6 min
                </Etiqueta>
              </div>
              <div className="mt-5 space-y-3">
                {["Pele e fotoproteção", "Dermocosméticos", "Universo infantil"].map((t, i) => (
                  <div key={t} className="flex items-center gap-3 rounded-xl bg-surface-2 p-3">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-lg text-white ${i === 0 ? "gradient-brand" : "bg-silver/60 text-graphite"}`}
                    >
                      {i === 0 ? <Icon name="play" size={16} /> : <Icon name="lock" size={16} />}
                    </span>
                    <span className="text-sm font-medium">{t}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="absolute -bottom-6 -left-2 w-44 animate-float [animation-delay:1s] sm:-left-6">
              <div className="flex items-center gap-2 text-brand-600">
                <Icon name="flame" size={18} />
                <span className="text-sm font-bold">Sequência 7 dias</span>
              </div>
              <div className="mt-1 text-xs text-subtle">+50 XP por aula concluída</div>
            </Card>
          </div>
        </div>
      </section>

      {/* TRILHAS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <TituloSecao
          sobre="Currículo completo"
          icone="book"
          titulo="Quatro trilhas, do balcão ao futuro farmacêutico"
          descricao="Perfumaria primeiro, medicamentos depois — preservando os manuais-base e reescritos em microlições com atualização regulatória total."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trilhas.map((t) => (
            <Link key={t.id} href={`/trilhas/${t.id}`} className="group">
              <Card className="h-full transition-all duration-200 hover:-translate-y-1 hover:border-brand-400">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl gradient-brand text-white">
                  <Icon name={t.icone as IconName} size={22} />
                </span>
                <div className="mt-4 text-xs font-semibold text-brand-600">Trilha {t.numero}</div>
                <h3 className="mt-1 text-base font-bold leading-snug">{t.titulo}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted">{t.descricao}</p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:gap-2.5 transition-all">
                  Explorar <Icon name="arrow" size={16} />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* MANDALA */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <TituloSecao
              sobre="Mandala pedagógica"
              icone="leaf"
              titulo="Saúde integral no centro de tudo"
              descricao="Une treinamento comercial, atenção em saúde e sustentabilidade numa única linguagem visual: no centro, a pessoa; ao redor, valores, responsabilidades, autocuidado e a operação de loja."
            />
            <ul className="mt-6 space-y-3">
              {[
                "Cuidar de gente, executar com foco e construir o futuro.",
                "Pessoas, negócio e planeta mais saudáveis.",
                "Alimentação, movimento, sono, equilíbrio e saúde.",
                "Balcão, perfumaria, medicamentos, serviços, adesão e dados.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-900/40">
                    <Icon name="check" size={14} />
                  </span>
                  <span className="text-sm text-muted">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <Mandala />
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <TituloSecao
          centralizado
          sobre="Experiência de aprendizagem"
          icone="sparkles"
          titulo="Sofisticada, mas leve de consumir"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recursos.map((r) => (
            <Card key={r.titulo} className="h-full">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-900/40">
                <Icon name={r.icone} size={22} />
              </span>
              <h3 className="mt-4 text-base font-bold">{r.titulo}</h3>
              <p className="mt-2 text-sm text-muted">{r.texto}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* NÍVEIS */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <TituloSecao
            sobre="Do iniciante ao avançado"
            icone="trending"
            titulo="Cada módulo em três profundidades"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {niveis.map((n, i) => (
              <Card key={n.nome} className="relative h-full overflow-hidden">
                <span className="absolute right-4 top-4 text-5xl font-black text-surface-2">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold text-brand-600">{n.nome}</h3>
                <p className="mt-3 text-sm text-muted">{n.texto}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* REGULATÓRIO */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <TituloSecao
          sobre="Base regulatória atualizada"
          icone="shield"
          titulo="O curso não ensina norma vencida"
          descricao="Atualizações críticas que muitos treinamentos ainda erram — prontas para uma aula ao vivo."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {atualizacoes.slice(0, 3).map((n) => (
            <Card key={n.id}>
              <div className="flex items-center justify-between">
                <Etiqueta tom="warning">Atualizado</Etiqueta>
                <span className="text-xs text-subtle">{n.orgao}</span>
              </div>
              <h3 className="mt-3 text-base font-bold">{n.titulo}</h3>
              <p className="mt-1 text-xs font-semibold text-brand-600">{n.norma}</p>
              <p className="mt-2 text-sm text-muted">{n.resumo}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Botao href="/biblioteca" variante="secondary" iconeFim="arrow">
            Abrir biblioteca regulatória
          </Botao>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl gradient-brand px-6 py-14 text-center text-white sm:px-12">
          <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(600px_200px_at_50%_0,white,transparent)]" />
          <h2 className="relative text-3xl font-extrabold tracking-tight sm:text-4xl">
            Transforme o balcão em um ponto de cuidado
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-white/85">
            Matricule-se e comece agora a jornada de Atendente Premium — com método, ética e saúde
            integral.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Botao href="/matriculas" variante="soft" tamanho="lg">
              Fazer matrícula gratuita
            </Botao>
            <ContinuarBotao />
          </div>
          <p className="relative mt-8 text-sm text-white/70">{site.assinatura}</p>
        </div>
      </section>
    </>
  );
}
