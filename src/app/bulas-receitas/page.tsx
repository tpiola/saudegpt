import type { Metadata } from "next";
import { Botao, Card, TituloSecao } from "@/components/ui";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Bulas e receitas",
  description:
    "Metodologia visual para leitura segura de bula e conferência de receitas no balcão de farmácia. Link oficial ANVISA Bulário Eletrônico.",
};

const passosBula = [
  { titulo: "O que o médico quer tratar", texto: "Indicações e objetivo terapêutico." },
  { titulo: "Como o produto age", texto: "Mecanismo e tempo esperado de efeito." },
  { titulo: "Como usar", texto: "Posologia, via e duração do tratamento." },
  { titulo: "O que não pode fazer", texto: "Contraindicações e interações." },
  { titulo: "Sinais de alerta", texto: "Reações adversas e quando retornar ao médico." },
  {
    titulo: "Quando chamar o farmacêutico",
    texto: "Dúvidas clínicas, gestação, crianças, controlados.",
  },
];

const checklistReceita = [
  "Dados do prescritor e do paciente legíveis e completos",
  "Data e validade dentro do prazo (atenção a controlados e GLP-1: 90 dias)",
  "Medicamento prescrito compatível com a queixa",
  "Retenção de via quando exigido (antimicrobianos, tarja preta, GLP-1)",
  "Encaminhar ao farmacêutico em divergências ou ilegibilidade",
];

export default function BulasReceitasPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <TituloSecao
        sobre="Hub de leitura segura"
        icone="book"
        titulo="Bulas e receitas"
        descricao="Roteiro prático para orientar o cliente e operar o balcão com segurança sanitária."
      />

      {/* ── Link oficial ANVISA ── */}
      <Card className="mt-6 border-accent-200 bg-gradient-to-br from-accent-50 to-white dark:from-accent-900/10 dark:to-navy-900">
        <div className="flex items-start gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-100 text-accent-600 dark:bg-accent-900/30">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="text-base font-bold text-navy-800 dark:text-white">
              Bulário Eletrônico — ANVISA
            </h2>
            <p className="mt-1 text-sm text-muted">
              Consulte a bula oficial de qualquer medicamento registrado no Brasil diretamente no sistema da ANVISA.
              Base de dados atualizada com bulas padrão e bulas de medicamentos específicos.
            </p>
            <a
              href="https://www.gov.br/anvisa/pt-br/sistemas/bulario-eletronico"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-accent-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-accent-600"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Acessar Bulário Eletrônico
            </a>
          </div>
        </div>
      </Card>

      <Card className="mt-6">
        <h2 className="text-lg font-bold">Metodologia visual de bula</h2>
        <ol className="mt-4 space-y-4">
          {passosBula.map((p, i) => (
            <li key={p.titulo} className="flex gap-3">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-navy-600 to-brand-500 text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <div className="font-semibold">{p.titulo}</div>
                <p className="text-sm text-muted">{p.texto}</p>
              </div>
            </li>
          ))}
        </ol>
        <Botao
          href="/aula/medicamentos/bula"
          className="mt-6"
          variante="secondary"
          iconeFim="arrow"
        >
          Aula completa sobre bula
        </Botao>
      </Card>

      <Card className="mt-6">
        <h2 className="text-lg font-bold">Checklist de receita no balcão</h2>
        <ul className="mt-4 space-y-2">
          {checklistReceita.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-muted">
              <Icon name="check" size={16} className="mt-0.5 flex-none text-brand-600" />
              {c}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Botao href="/aula/medicamentos/receituarios" variante="secondary" iconeFim="arrow">
            Receituários e controlados
          </Botao>
          <Botao href="/biblioteca" variante="ghost" iconeFim="arrow">
            Biblioteca regulatória
          </Botao>
          <Botao href="/jogos" variante="ghost" iconeFim="arrow">
            Jogo: receita sem erro
          </Botao>
        </div>
      </Card>

      {/* ── Footer: consulta ANVISA ── */}
      <div className="mt-8 rounded-xl border border-border bg-surface-2/50 p-5 text-center">
        <p className="text-xs text-subtle leading-relaxed">
          Em caso de dúvida sobre medicamentos, consulte o{" "}
          <a
            href="https://www.gov.br/anvisa/pt-br/sistemas/bulario-eletronico"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent-500 underline underline-offset-2 hover:text-accent-600"
          >
            Bulário Eletrônico da ANVISA
          </a>
          {" "}ou encaminhe o cliente ao farmacêutico responsável.
        </p>
      </div>
    </div>
  );
}
