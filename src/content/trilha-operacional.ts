import type { Trilha } from "./types";
import { q } from "./_helpers";

// Trilha 3 — excelência operacional e vendas consultivas com ética.
export const trilhaOperacional: Trilha = {
  id: "operacional",
  numero: 3,
  titulo: "Excelência Operacional e Vendas Consultivas",
  subtitulo: "Padrão de atendimento 5 estrelas",
  descricao:
    "Acolhimento, escuta ativa, cross-sell ético, organização de loja, planograma e o padrão de encantamento — sem slogans, com excelência real.",
  nivelFaixa: "Todos os níveis",
  icone: "star",
  modulos: [
    {
      id: "atendimento-humano",
      titulo: "Atendimento Humano de Alto Padrão",
      descricao: "Acolhimento, escuta ativa e o roteiro de encantamento ético.",
      aulas: [
        {
          id: "acolhimento",
          titulo: "Acolhimento e primeira impressão",
          duracaoMin: 5,
          nivel: "basico",
          resumo: "Como receber o cliente com empatia, atenção e postura profissional.",
          resumoExecutivo: [
            "Contato visual, cumprimento e disponibilidade genuína criam confiança em segundos.",
            "Acolher quem chega ansioso ou constrangido (saúde) é parte do cuidado.",
          ],
          checklist: ["Cumprimentar e demonstrar disponibilidade.", "Reduzir a ansiedade do cliente."],
          quandoChamarFarmaceutico: ["Quando a demanda exigir orientação clínica."],
          errosComuns: ["Ignorar o cliente que aguarda.", "Demonstrar pressa ou desinteresse."],
          quiz: [
            q(
              "A primeira impressão no balcão é construída principalmente por:",
              ["Preço", "Acolhimento e disponibilidade genuína", "Tamanho da loja", "Quantidade de produtos"],
              1,
              "Empatia e disponibilidade criam confiança imediata.",
            ),
          ],
          xp: 40,
        },
        {
          id: "escuta-ativa",
          titulo: "Escuta ativa e triagem da necessidade",
          duracaoMin: 6,
          nivel: "intermediario",
          resumo: "Perguntar, repetir o problema com clareza e entender a real necessidade.",
          resumoExecutivo: [
            "Escutar mais do que falar; perguntas abertas revelam a necessidade real.",
            "Repetir o problema com clareza confirma o entendimento ('Então você precisa de...').",
          ],
          simulacao: {
            cliente: "Cliente: 'quero algo para a pele'.",
            falaBoa:
              "Para te indicar o ideal: é para o rosto ou corpo? Tem alguma sensibilidade ou está em tratamento? Assim acerto a textura certa para você.",
            falaEvitar: "Leva esse creme aqui.",
          },
          checklist: ["Fazer perguntas abertas.", "Repetir o problema para confirmar.", "Só então indicar."],
          quandoChamarFarmaceutico: ["Quando a triagem revelar sinais de alerta."],
          errosComuns: ["Indicar antes de entender a necessidade."],
          quiz: [
            q(
              "Escuta ativa significa, sobretudo:",
              ["Falar mais que o cliente", "Perguntar e confirmar a real necessidade", "Empurrar o mais vendido", "Apressar o atendimento"],
              1,
              "Escuta ativa é entender de verdade antes de indicar.",
            ),
          ],
          xp: 55,
        },
        {
          id: "encantamento",
          titulo: "Roteiro de encantamento ético",
          duracaoMin: 6,
          nivel: "intermediario",
          resumo: "Acolher, ouvir, orientar com segurança, sugerir valor real, checar entendimento e encaminhar.",
          resumoExecutivo: [
            "Padrão de excelência: acolher → ouvir → repetir o problema → orientar com segurança → sugerir valor real → checar entendimento → fechar com confiança → encaminhar quando cabível.",
            "Encantamento não é slogan: é cuidado, comunicação e uso racional.",
          ],
          checklist: ["Seguir as etapas do roteiro.", "Checar o entendimento ao final.", "Encaminhar ao farmacêutico quando cabível."],
          quandoChamarFarmaceutico: ["Quando a orientação ultrapassar o autocuidado."],
          errosComuns: ["Pular a checagem de entendimento."],
          quiz: [
            q(
              "Qual etapa NÃO faz parte do encantamento ético?",
              ["Acolher e ouvir", "Sugerir valor real", "Empurrar o item mais caro sem necessidade", "Checar entendimento"],
              2,
              "Empurrar produto sem necessidade contraria o padrão ético de encantamento.",
            ),
          ],
          xp: 60,
        },
        {
          id: "cross-sell",
          titulo: "Cross-sell ético e bundles de bem-estar",
          duracaoMin: 6,
          nivel: "avancado",
          resumo: "Sugerir itens complementares que fazem sentido — nunca empurrar.",
          resumoExecutivo: [
            "Cross-sell ético parte da necessidade: protetor solar + pós-sol, antibiótico + orientação de adesão.",
            "Bundles de bem-estar (rotina de pele, kit do bebê) agregam valor quando coerentes.",
            "Nunca condicionar a venda principal a um item extra.",
          ],
          simulacao: {
            cliente: "Cliente comprando fralda e pomada para o bebê.",
            falaBoa: "Posso sugerir um lenço sem álcool que combina com a rotina do bebê? Ajuda a prevenir assaduras junto com a pomada.",
            falaEvitar: "Leva mais 5 itens que estão em promoção.",
          },
          checklist: ["Sugerir complementos coerentes.", "Respeitar o 'não' do cliente."],
          quandoChamarFarmaceutico: ["Quando o complemento envolver decisão clínica."],
          errosComuns: ["Empurrar itens sem relação com a necessidade."],
          quiz: [
            q(
              "Cross-sell ético é:",
              ["Empurrar o máximo de itens", "Sugerir complementos que fazem sentido para a necessidade", "Condicionar a venda principal", "Vender o mais caro sempre"],
              1,
              "Cross-sell ético agrega valor real, partindo da necessidade do cliente.",
            ),
          ],
          xp: 70,
        },
      ],
    },
    {
      id: "operacao-loja",
      titulo: "Operação e Organização de Loja",
      descricao: "Rotina, planograma, exposição e gestão de picos sazonais.",
      aulas: [
        {
          id: "rotina-organizacao",
          titulo: "Rotina, pontualidade e organização",
          duracaoMin: 5,
          nivel: "basico",
          resumo: "Disciplina operacional: abertura, reposição, validade e limpeza.",
          resumoExecutivo: [
            "Rotina previsível reduz erros: conferência de validade (PVPS), reposição e limpeza.",
            "Pontualidade e trabalho em equipe sustentam o atendimento.",
          ],
          checklist: ["Conferir validades (primeiro a vencer, primeiro a sair).", "Manter reposição e limpeza."],
          quandoChamarFarmaceutico: ["Dúvidas de armazenamento de termolábeis e controlados."],
          errosComuns: ["Repor sem checar validade."],
          quiz: [
            q(
              "PVPS (primeiro a vencer, primeiro a sair) serve para:",
              ["Vender o mais novo primeiro", "Evitar perdas por vencimento", "Aumentar o preço", "Nada"],
              1,
              "PVPS prioriza a saída dos itens com validade mais próxima, reduzindo perdas.",
            ),
          ],
          xp: 40,
        },
        {
          id: "planograma",
          titulo: "Planograma e exposição",
          duracaoMin: 6,
          nivel: "intermediario",
          resumo: "Como organizar categorias e gôndolas para facilitar a jornada do cliente.",
          resumoExecutivo: [
            "Organização por categoria (medicamentos, beleza, higiene, mamãe e bebê, dermocosméticos) facilita o autosserviço assistido.",
            "Itens de maior giro e sazonais em destaque; controlados sempre em área restrita.",
          ],
          checklist: ["Agrupar por categoria lógica.", "Destacar sazonais.", "Manter controlados em área restrita."],
          quandoChamarFarmaceutico: ["Posicionamento de itens sob controle especial."],
          errosComuns: ["Expor controlados em área de autosserviço."],
          quiz: [
            q(
              "Onde devem ficar os medicamentos controlados?",
              ["Na vitrine de autosserviço", "Em área restrita/atrás do balcão", "Na entrada", "Misturados com MIP"],
              1,
              "Controlados ficam em área restrita, nunca em autosserviço.",
            ),
          ],
          xp: 55,
        },
        {
          id: "sazonalidade-equipe",
          titulo: "Picos sazonais e trabalho em equipe",
          duracaoMin: 5,
          nivel: "intermediario",
          resumo: "Antecipar demandas do calendário e atuar em equipe nos picos.",
          resumoExecutivo: [
            "Inverno: respiratórios e gripe; verão: fotoproteção e repelentes; campanhas de vacinação.",
            "Equipe alinhada distribui filas e mantém o padrão de atendimento.",
          ],
          checklist: ["Antecipar estoque sazonal.", "Dividir tarefas nos picos."],
          quandoChamarFarmaceutico: ["Campanhas de vacinação e serviços clínicos."],
          errosComuns: ["Ser pego de surpresa por sazonalidade previsível."],
          quiz: [
            q(
              "No inverno, aumenta a procura por:",
              ["Repelentes", "Sintomáticos respiratórios e gripe", "Protetor solar apenas", "Esmaltes"],
              1,
              "O inverno eleva a demanda por itens respiratórios e gripais.",
            ),
          ],
          xp: 45,
        },
      ],
    },
  ],
};
