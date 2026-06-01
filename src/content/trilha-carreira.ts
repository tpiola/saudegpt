import type { Trilha } from "./types";
import { q } from "./_helpers";
import { videosPiloto } from "./videos-piloto";

// Trilha 4 — carreira, ética e leitura de indicadores (Power BI para atendentes).
export const trilhaCarreira: Trilha = {
  id: "carreira",
  numero: 4,
  titulo: "Carreira, Farmácia e Leitura de Dados",
  subtitulo: "Do balcão ao futuro farmacêutico",
  descricao:
    "O que faz um grande atendente, como evoluir do Premium I ao II, como se preparar para cursar Farmácia e como ler indicadores em Power BI sem perder o foco em saúde.",
  nivelFaixa: "Intermediário ao avançado",
  icone: "trending",
  modulos: [
    {
      id: "evolucao",
      titulo: "Evolução Profissional",
      descricao: "Da entrada ao atendimento técnico de alto nível, com ética e responsabilidade.",
      aulas: [
        {
          id: "premium-1-2",
          titulo: "Atendente Premium I e II",
          duracaoMin: 5,
          nivel: "intermediario",
          videoUrl: videosPiloto.carreiraIntro,
          resumo: "As duas etapas da formação e como avançar de uma para a outra.",
          resumoExecutivo: [
            "Premium I: acolhimento, perfumaria, higiene, beleza, infantil e autocuidado.",
            "Premium II: leitura de receitas, triagem segura, OTC/MIP, classes terapêuticas, adesão e encaminhamento.",
            "Evoluir é somar repertório técnico ao acolhimento, sempre dentro dos limites legais.",
          ],
          checklist: ["Dominar a base (Premium I).", "Avançar para a triagem segura (Premium II)."],
          quandoChamarFarmaceutico: ["Sempre que o caso exigir decisão clínica."],
          errosComuns: ["Pular a base e tentar atuar além do limite legal."],
          quiz: [
            q(
              "O foco do Atendente Premium II é:",
              [
                "Apenas perfumaria",
                "Triagem segura, receitas, adesão e encaminhamento",
                "Somente caixa",
                "Estoque apenas",
              ],
              1,
              "O Premium II aprofunda a atuação técnica segura no balcão de medicamentos.",
            ),
          ],
          xp: 50,
        },
        {
          id: "etica-postura",
          titulo: "Postura profissional, ética e responsabilidade",
          duracaoMin: 6,
          nivel: "intermediario",
          resumo: "Sigilo, limites legais, uso racional e o papel social da drogaria.",
          resumoExecutivo: [
            "Sigilo e respeito ao cliente; nunca dispensar além do permitido por lei.",
            "A drogaria orienta melhor a população e ajuda a evitar agravos que terminariam no SUS.",
            "As atribuições clínicas do farmacêutico (Resolução CFF 585/2013) e a prescrição farmacêutica (586/2013) orientam os limites da equipe.",
          ],
          checklist: ["Respeitar sigilo e limites legais.", "Promover o uso racional."],
          quandoChamarFarmaceutico: ["Toda decisão clínica e dispensação de controlados."],
          errosComuns: ["Quebrar sigilo ou atuar além do permitido."],
          quiz: [
            q(
              "As atribuições clínicas do farmacêutico são definidas pela:",
              ["RDC 20/2011", "Resolução CFF 585/2013", "Portaria 344/1998 apenas", "Nenhuma"],
              1,
              "A Resolução CFF 585/2013 define as atribuições clínicas do farmacêutico.",
            ),
          ],
          xp: 60,
        },
        {
          id: "estudar-farmacia",
          titulo: "Como se preparar para cursar Farmácia",
          duracaoMin: 5,
          nivel: "basico",
          resumo:
            "Disciplina, base de estudo e visão de cuidado para quem quer seguir na profissão.",
          resumoExecutivo: [
            "Bases úteis: fisiologia, farmacologia, legislação, comunicação e visão de cuidado.",
            "Pensar como futuro farmacêutico: ética, estudo contínuo e foco no paciente.",
          ],
          checklist: ["Criar rotina de estudo.", "Aprofundar fisiologia/farmacologia/legislação."],
          quandoChamarFarmaceutico: ["Para mentoria e orientação de carreira."],
          errosComuns: ["Estudar sem constância."],
          quiz: [
            q(
              "Uma base importante para quem quer cursar Farmácia é:",
              [
                "Apenas decorar preços",
                "Fisiologia, farmacologia e legislação",
                "Ignorar comunicação",
                "Evitar ética",
              ],
              1,
              "Fisiologia, farmacologia e legislação formam a base do raciocínio farmacêutico.",
            ),
          ],
          xp: 40,
        },
      ],
    },
    {
      id: "dados",
      titulo: "Leitura de Indicadores (Power BI)",
      descricao: "Entender o negócio sem abandonar o foco em saúde.",
      aulas: [
        {
          id: "power-bi",
          titulo: "Power BI para atendentes: lendo os números certos",
          duracaoMin: 8,
          nivel: "avancado",
          resumo:
            "Faturamento, ticket médio, conversão, mix, curva ABC, ruptura, NPS e aderência terapêutica — o que cada indicador conta.",
          resumoExecutivo: [
            "Faturamento e ticket médio mostram volume e valor por atendimento; conversão mede oportunidades aproveitadas.",
            "Curva ABC e mix revelam o que sustenta o resultado; ruptura é venda perdida por falta de estoque.",
            "NPS mede satisfação; aderência terapêutica liga dados a saúde (recompra no tempo certo).",
          ],
          comparativo: {
            titulo: "Indicador x O que conta",
            itens: [
              { nome: "Ticket médio", quando: "Valor médio por atendimento." },
              { nome: "Conversão", quando: "% de quem entra e compra." },
              {
                nome: "Curva ABC",
                quando: "Itens que mais pesam no resultado.",
              },
              {
                nome: "Ruptura",
                quando: "Venda perdida por falta de estoque.",
              },
              { nome: "NPS", quando: "Satisfação e recomendação do cliente." },
            ],
          },
          checklist: [
            "Ler o indicador certo para a pergunta certa.",
            "Conectar dados à melhoria do cuidado.",
          ],
          quandoChamarFarmaceutico: ["Indicadores de serviços clínicos e adesão."],
          errosComuns: ["Olhar só faturamento e ignorar ruptura e NPS."],
          quiz: [
            q(
              "Ruptura, em indicadores de loja, significa:",
              [
                "Cliente satisfeito",
                "Venda perdida por falta de estoque",
                "Ticket médio alto",
                "Promoção",
              ],
              1,
              "Ruptura é a indisponibilidade do item, gerando venda perdida.",
            ),
            q(
              "Qual indicador conecta dados a saúde?",
              [
                "Ticket médio",
                "Aderência terapêutica (recompra no tempo certo)",
                "Curva ABC",
                "Faturamento bruto",
              ],
              1,
              "A aderência terapêutica liga o desempenho ao cuidado e à continuidade do tratamento.",
            ),
          ],
          xp: 90,
        },
      ],
    },
  ],
};
