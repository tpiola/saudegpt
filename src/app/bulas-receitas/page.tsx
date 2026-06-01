import Link from "next/link";
import type { Metadata } from "next";
import { Botao, Card, TituloSecao } from "@/components/ui";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Bulas e receitas",
  description:
    "Metodologia visual para leitura segura de bula e conferência de receitas no balcão de farmácia.",
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

      <Card className="mt-8">
        <h2 className="text-lg font-bold">Metodologia visual de bula</h2>
        <ol className="mt-4 space-y-4">
          {passosBula.map((p, i) => (
            <li key={p.titulo} className="flex gap-3">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg gradient-brand text-sm font-bold text-white">
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
    </div>
  );
}
