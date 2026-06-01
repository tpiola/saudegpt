import type { Modulo } from "./types";
import { q } from "./_helpers";
import { imagensCategoria, marcasHigiene, marcasNutricao } from "./midia-catalogo";
import { videosEducativos } from "./videos-educativos";

/** Módulos adicionais: nutrição, fraldas e vitrine premium de bem-estar. */
export const modulosBemEstarExtra: Modulo[] = [
  {
    id: "nutricao-infantil-adulto",
    titulo: "Nutrição Infantil e Adulto no Balcão",
    descricao:
      "Fórmulas infantis, leites de seguimento, suplementos para adultos e idosos — triagem segura e encaminhamento.",
    aulas: [
      {
        id: "leite-infantil",
        titulo: "Leites infantis e fórmulas",
        duracaoMin: 8,
        nivel: "intermediario",
        videoUrl: videosEducativos.higieneBebe,
        imagemHeroUrl: imagensCategoria.formula,
        marcas: marcasNutricao,
        resumo:
          "Tipos de fórmula (partida, seguimento, especial), preparo higiênico e quando encaminhar ao farmacêutico.",
        resumoExecutivo: [
          "Fórmula de partida até 6 meses; seguimento conforme faixa etária indicada na lata.",
          "Água fervida e resfriada para diluição; medida nivelada do scoop — nunca “a olho”.",
          "Fórmulas especiais (AR, HA, prematuro) exigem prescrição e orientação profissional.",
          "Não substituir leite materno sem avaliação — reforçar aleitamento quando possível.",
        ],
        comparativo: {
          titulo: "Tipo de fórmula",
          itens: [
            { nome: "Partida", quando: "0–6 meses, base da alimentação quando indicada." },
            { nome: "Seguimento", quando: "Após 6 meses, nutrientes para fase de introdução alimentar." },
            { nome: "Especial", quando: "Alergia, refluxo, prematuridade — só com orientação." },
          ],
        },
        simulacao: {
          cliente: "Mãe pede ‘o leite mais forte’ para o bebê de 2 meses ganhar peso.",
          falaBoa:
            "Entendo sua preocupação. Para essa idade, o mais importante é a fórmula de partida correta e a medida certa na mamadeira. Posso te mostrar como preparar com segurança? Se a dúvida for ganho de peso, nosso farmacêutico pode orientar junto com o pediatra.",
          falaEvitar: "Esse aqui é o mais caro, então é o melhor para engordar.",
        },
        checklist: [
          "Confirmar idade e se há prescrição médica.",
          "Ensinar preparo e higiene da mamadeira.",
          "Não prometer ganho de peso com troca de marca.",
        ],
        quandoChamarFarmaceutico: [
          "Fórmula especial, alergia, vômitos frequentes, baixo ganho ponderal.",
          "Dúvida sobre compatibilidade com medicamentos.",
        ],
        errosComuns: [
          "Indicar seguimento para recém-nascido sem critério.",
          "Alterar diluição para ‘fortalecer’ a fórmula.",
        ],
        quiz: [
          q(
            "Bebê de 3 meses precisa de fórmula. Qual passo é obrigatório?",
            [
              "Usar água da torneira sem ferver",
              "Medida correta do pó e água conforme a lata",
              "Adicionar mais colheres para nutrir melhor",
              "Misturar com suco",
            ],
            1,
            "A diluição correta garante segurança; alterar a concentração pode prejudicar o bebê.",
          ),
        ],
        xp: 70,
      },
      {
        id: "leite-adulto",
        titulo: "Leite e suplementos para adultos",
        duracaoMin: 7,
        nivel: "intermediario",
        imagemHeroUrl: imagensCategoria.leitePo,
        marcas: marcasNutricao,
        resumo:
          "Suplementos nutricionais, leites instantâneos e necessidades de idosos, convalescentes e restrições.",
        resumoExecutivo: [
          "Suplemento hipercalórico ou proteico pode apoiar idosos com baixa ingestão — avaliar com profissional.",
          "Intolerância à lactose: opções sem lactose ou vegetais.",
          "Diabetes: atenção a carboidratos e orientação nutricional.",
          "Não substituir refeição completa sem indicação.",
        ],
        comparativo: {
          titulo: "Necessidade x Produto",
          itens: [
            { nome: "Baixo peso / convalescença", quando: "Suplemento calórico-proteico orientado." },
            { nome: "Lactose", quando: "Leite zero lactose ou vegetal." },
            { nome: "Dia a dia", quando: "Leite UHT ou em pó conforme preferência." },
          ],
        },
        checklist: [
          "Perguntar idade, patologias e objetivo (ganho, manutenção).",
          "Verificar lactose e diabetes.",
          "Encaminhar dúvidas clínicas.",
        ],
        quandoChamarFarmaceutico: [
          "Câncer, renal, hepático, gestação ou polifarmácia.",
          "Uso prolongado de suplemento como única alimentação.",
        ],
        errosComuns: [
          "Vender suplemento caro como ‘tratamento’ sem avaliação.",
          "Ignorar interação com medicamentos.",
        ],
        quiz: [
          q(
            "Idoso com pouco apetite busca suplemento. Melhor conduta inicial:",
            [
              "Oferecer o mais doce",
              "Entender histórico e chamar o farmacêutico",
              "Garantir emagrecimento rápido",
              "Substituir todas as refeições",
            ],
            1,
            "Suplementação em idosos exige contexto clínico e orientação profissional.",
          ),
        ],
        xp: 65,
      },
    ],
  },
  {
    id: "fraldas-absorventes",
    titulo: "Fraldas, Absorventes e Cuidados Íntimos",
    descricao: "Tamanhos, absorção, assaduras e atendimento discreto e respeitoso.",
    aulas: [
      {
        id: "fraldas",
        titulo: "Fraldas: tamanho, tipo e assadura",
        duracaoMin: 7,
        nivel: "basico",
        videoUrl: videosEducativos.higieneBebe,
        imagemHeroUrl: imagensCategoria.fralda,
        marcas: marcasHigiene.filter((m) => ["Pampers", "Huggies"].includes(m.nome)),
        resumo: "Escolha por peso do bebê, fralda noturna, pants e prevenção de assadura.",
        resumoExecutivo: [
          "Tabela de peso na embalagem — tamanho errado vaza e irrita.",
          "Troca frequente e pele seca reduzem assadura.",
          "Pomada com óxido de zinco como barreira preventiva.",
          "Fralda noturna ou pants para maior absorção à noite ou na desfralde.",
        ],
        comparativo: {
          titulo: "Formato",
          itens: [
            { nome: "Fralda aberta", quando: "Recém-nascidos e uso comum." },
            { nome: "Pants", quando: "Bebê ativo / fase de desfralde." },
            { nome: "Noturna", quando: "Maior absorção para dormir." },
          ],
        },
        checklist: [
          "Perguntar peso aproximado do bebê.",
          "Orientar barreira preventiva.",
          "Atender com discrição e sem julgamento.",
        ],
        quandoChamarFarmaceutico: [
          "Assadura com ferida, sangue ou sem melhora em 48–72 h.",
          "Suspeita de alergia ao material da fralda.",
        ],
        errosComuns: [
          "Tamanho maior ‘para durar mais’ com bebê pequeno.",
          "Esquecer orientação de barreira.",
        ],
        quiz: [
          q(
            "Como escolher o tamanho da fralda?",
            [
              "Pela idade em meses apenas",
              "Pelo peso indicado na embalagem",
              "Sempre tamanho G",
              "Pelo preço",
            ],
            1,
            "O peso do bebê na embalagem é o critério principal para vedação e conforto.",
          ),
        ],
        xp: 60,
      },
      {
        id: "absorventes-cuidado",
        titulo: "Absorventes e cuidado íntimo feminino",
        duracaoMin: 6,
        nivel: "basico",
        imagemHeroUrl: imagensCategoria.absorvente,
        resumo: "Fluxo, tipos (noturno, com abas, calcinha absorvente) e quando orientar médico.",
        resumoExecutivo: [
          "Fluxo leve, moderado e intenso pedem absorção diferente.",
          "Coletor menstrual e calcinha absorvente são alternativas válidas.",
          "Odor forte, coceira ou dor exigem avaliação — não mascarar só com produto.",
        ],
        checklist: ["Discrição no balcão.", "Oferecer opções sem constranger."],
        quandoChamarFarmaceutico: [
          "Sintomas de infecção, atraso menstrual com dúvida, sangramento anormal.",
        ],
        errosComuns: ["Pressionar marca sem perguntar preferência de formato."],
        quiz: [
          q(
            "Postura correta na venda de absorventes:",
            [
              "Falar alto para a fila ouvir",
              "Discrição e perguntas objetivas sobre fluxo e formato",
              "Só oferecer o pacote maior",
              "Evitar contato visual",
            ],
            1,
            "Discrição e escuta ativa respeitam a cliente e melhoram a indicação.",
          ),
        ],
        xp: 55,
      },
    ],
  },
  {
    id: "vitrine-dermo-cosmetica",
    titulo: "Vitrine Dermocosmética e Cosmética",
    descricao: "Reconhecimento visual de categorias, ativos e rotina de pele no balcão.",
    aulas: [
      {
        id: "rotina-pele-balcao",
        titulo: "Rotina de pele no balcão",
        duracaoMin: 8,
        nivel: "intermediario",
        videoUrl: videosEducativos.skincareAtivos,
        imagemHeroUrl: imagensCategoria.dermocosmetico,
        marcas: marcasHigiene.filter((m) =>
          ["La Roche-Posay", "Vichy", "Nivea"].includes(m.nome),
        ),
        resumo: "Limpeza, tratamento e proteção — como montar kit simples para o cliente.",
        resumoExecutivo: [
          "Manhã: limpeza suave + antioxidante (vitamina C) + FPS.",
          "Noite: limpeza + hidratante; ativos potentes com orientação.",
          "Pele oleosa: texturas gel; seca: cremes mais ricos.",
        ],
        checklist: [
          "Três passos no máximo para iniciantes.",
          "Reforçar FPS de manhã.",
          "Encaminhar combinações com ácidos.",
        ],
        quandoChamarFarmaceutico: [
          "Gestação, acne severa, rosácea ou uso de receita dermatológica.",
        ],
        errosComuns: ["Vender muitos produtos de uma vez."],
        quiz: [
          q(
            "Qual passo não pode faltar de manhã?",
            ["Esfoliante", "Protetor solar", "Óleo corporal", "Máscara"],
            1,
            "Fotoproteção é essencial na rotina diária.",
          ),
        ],
        xp: 75,
      },
      {
        id: "cosmeticos-corporais",
        titulo: "Cosméticos corporais e perfumaria",
        duracaoMin: 6,
        nivel: "basico",
        imagemHeroUrl: imagensCategoria.cosmeticos,
        resumo: "Hidratantes corporais, óleos, desodorantes e combinação com perfumaria.",
        resumoExecutivo: [
          "Pele ressecada: manteigas e cremes; pele oleosa: loções leves.",
          "Não aplicar perfume direto sobre pele irritada.",
          "Cross-sell ético: combinar higiene + hidratação + fragrância leve.",
        ],
        checklist: ["Identificar queixa principal.", "Sugerir textura adequada."],
        quandoChamarFarmaceutico: ["Dermatite, alergia a fragrância intensa."],
        errosComuns: ["Perfume em excesso em pele sensibilizada."],
        quiz: [
          q(
            "Pele muito ressecada no corpo pede:",
            [
              "Loção alcoólica",
              "Creme ou manteiga hidratante",
              "Apenas perfume",
              "Nada",
            ],
            1,
            "Texturas ricas repõem lipídios da barreira cutânea.",
          ),
        ],
        xp: 55,
      },
    ],
  },
];
