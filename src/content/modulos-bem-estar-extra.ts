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
        simulacao: {
          cliente: "Senhor de 78 anos, magro, 'perdeu o apetite' depois de uma cirurgia. Filha pergunta se 'esse leite em pó fortificado' ajuda.",
          falaBoa:
            "Entendo, depois de cirurgia é comum o apetite cair. Esse suplemento é calórico e proteico, então pode ajudar a manter o peso enquanto ele se recupera. Mas eu sugiro conversar com nosso farmacêutico — ele vai avaliar se a fórmula é a mais indicada para o caso, considerando os medicamentos e a condição clínica. Também posso preparar uma amostra para ele experimentar hoje.",
          falaEvitar: "Esse é o mais caro, então é o melhor. Pode comprar logo dois.",
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
        simulacao: {
          cliente: "Mãe de primeira viagem com bebê de 3 semanas. A fralda tamanho RN está apertando, mas ela não sabe se pode subir para P. O bebê está com assadura nas dobrinhas.",
          falaBoa:
            "É bem comum essa dúvida! Vamos ver pelo peso do bebê: se ele já passou de 4 kg, o tamanho P vai ficar melhor e evitar vazamentos. Sobre a assadura, posso sugerir uma pomada de barreira com óxido de zinco — ela protege a pele contra a umidade. Aplicar a cada troca, secando bem as dobrinhas antes. Se a assadura não melhorar em dois dias, vale o farmacêutico dar uma olhada.",
          falaEvitar: "Só compra a P que é maior, dura mais. E passa essa pomada genérica.",
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
        simulacao: {
          cliente: "Cliente jovem entra com vergonha, olhando para os absorventes. Fala baixinho: 'É que… meu fluxo está muito forte, fico preocupada'.",
          falaBoa:
            "Pode ficar tranquila, estou aqui pra ajudar. Fluxo intenso é mais comum do que parece. Posso sugerir um absorvente noturno com maior capacidade ou até a calcinha absorvente, dependendo do que você preferir. Se o fluxo vier com cólica forte, dor ou atraso, aí vale conversar com o farmacêutico. Por enquanto, quer ver as opções de absorção máxima que chegaram?",
          falaEvitar: "Isso é normal, compra esse pacotão. Próximo!",
        },
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
        errosComuns: [
          "Vender muitos produtos de uma vez.",
          "Indicar ácidos para iniciantes sem orientação de uso.",
        ],
        simulacao: {
          cliente: "Moça de 22 anos, nunca fez skincare, quer 'um creme de rosto para começar'. Pele oleosa, disse que já teve acne na adolescência.",
          falaBoa:
            "Que bom que você quer começar! O ideal é ir com calma — três passos simples: um sabonete suave para limpar, um hidratante oil-free e um protetor solar para usar de manhã. À noite, você repete a limpeza e o hidratante. Se quiser prevenir as manchas e a oleosidade, depois de algumas semanas a gente pode conversar sobre incluir um ativo como niacinamida. O mais importante é o protetor solar todo dia, combinado?",
          falaEvitar: "Vou montar um kit completo com cinco produtos e dois ácidos — você já usa em casa.",
        },
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
        simulacao: {
          cliente: "Senhora de 50+ anos, pele do braço e pernas muito ressecada no inverno. 'Parece casca de cobra, coça de noite'.",
          falaBoa: "Essa sensação de repuxamento e descamação é bem típica do frio. Para isso, um hidratante com manteiga de karité ou ureia vai repor a barreira da pele. Aplicar depois do banho, com a pele ainda úmida, ajuda a fixar melhor. Se a coceira atrapalhar o sono, pode ser um sinal de dermatite — sugiro passar com o farmacêutico para avaliar. Enquanto isso, quer sentir a textura desse creme aqui?",
          falaEvitar: "Só passar esse perfume que disfarça.",
        },

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
  // ════════════════════════════════════════════════
  // NOVOS MÓDULOS — Suplementos, Pés, Clean Beauty, Sono, Sazonais
  // ════════════════════════════════════════════════
  {
    id: "suplementos-vitaminas",
    titulo: "Suplementos Alimentares, Vitaminas e Minerais",
    descricao:
      "Polivitamínicos, whey protein, colágeno, ômega 3 e suplementos esportivos — orientação responsável no balcão.",
    aulas: [
      {
        id: "vitaminas-minerais",
        titulo: "Vitaminas, minerais e polivitamínicos",
        duracaoMin: 7,
        nivel: "intermediario",
        resumo:
          "Quando indicar polivitamínico, vitamina C, D, complexo B, ferro e cálcio — sem substituir prescrição médica.",
        resumoExecutivo: [
          "Polivitamínico é preventivo, não tratamento; não prometer 'cura' para nada.",
          "Vitamina D e cálcio andam juntas na saúde óssea; idosos e menopausa são público-chave.",
          "Ferro sem prescrição é vendido apenas como suplemento de baixa dosagem; anemia precisa de diagnóstico médico.",
          "Vitamina C em altas doses tem efeito antioxidante, não previne gripe isoladamente.",
        ],
        comparativo: {
          titulo: "Suplemento x Função principal",
          itens: [
            { nome: "Polivitamínico", quando: "Rotina, prevenção de carência leve." },
            { nome: "Vitamina D", quando: "Imunidade, ossos — deficiência comum em brasileiros." },
            { nome: "Complexo B", quando: "Energia, metabolismo — idosos e vegetarianos." },
            { nome: "Ferro (sulfato ferroso)", quando: "Prevenção e tratamento de anemia (com prescrição)." },
          ],
        },
        checklist: [
          "Perguntar sobre medicamentos em uso (interações).",
          "Reforçar que suplemento não substitui alimentação.",
          "Encaminhar ao farmacêutico se houver suspeita de deficiência grave.",
        ],
        quandoChamarFarmaceutico: [
          "Suspeita de anemia, carência grave, gestantes, polifarmácia.",
          "Cliente em tratamento oncológico ou com insuficiência renal.",
        ],
        errosComuns: [
          "Vender megadoses de vitamina sem orientação.",
          "Prometer disposição/energia como se fosse medicamento.",
        ],
        simulacao: {
          cliente: "Cliente se sente cansado e pede 'uma vitamina para dar energia'. Também menciona que tem dores nas pernas e já ouviu que pode ser falta de vitamina D.",
          falaBoa: "Cansaço pode ter várias causas — desde uma rotina pesada até deficiências nutricionais. Posso sugerir um polivitamínico como reforço, mas como você mencionou dores nas pernas e suspeita de vitamina D baixa, o ideal é conversar com o farmacêutico — ele pode avaliar se faz sentido solicitar um exame de sangue. A vitamina D é lipossolúvel e o excesso também faz mal, então o ideal é suplementar com base em exame. Enquanto isso, que tal começar com um polivitamínico suave e agendar uma conversa com o farmacêutico?",
          falaEvitar: "Compra essa vitamina D de 5000 UI que resolve tudo.",
        },

        quiz: [
          q(
            "Qual vitamina está mais associada à imunidade e saúde óssea?",
            ["Vitamina C", "Vitamina D", "Complexo B", "Ferro"],
            1,
            "A vitamina D atua na imunidade e na absorção de cálcio para os ossos.",
          ),
        ],
        xp: 60,
      },
      {
        id: "suplementos-proteina",
        titulo: "Whey protein, colágeno e suplementos esportivos",
        duracaoMin: 7,
        nivel: "intermediario",
        resumo:
          "Whey, colágeno hidrolisado, albumina, BCAA — para quem são e como orientar o consumo.",
        resumoExecutivo: [
          "Whey protein é complemento proteico; não substitui refeição sem orientação nutricional.",
          "Colágeno hidrolisado age na pele e articulações; associar à vitamina C melhora absorção.",
          "BCAA e termogênicos têm público específico; termogênico com cafeína exige cuidado com hipertensos.",
          "Sempre perguntar sobre objetivo e condições de saúde antes de indicar.",
        ],
        comparativo: {
          titulo: "Suplemento x Indicação principal",
          itens: [
            { nome: "Whey protein", quando: "Suplementação proteica, pós-treino ou idosos com sarcopenia." },
            { nome: "Colágeno hidrolisado", quando: "Pele, unhas, articulações — efeito visível em semanas." },
            { nome: "Albumina", quando: "Alternativa ao whey para intolerantes à lactose." },
            { nome: "BCAA", quando: "Treino de resistência; controverso na literatura recente." },
          ],
        },
        checklist: [
          "Perguntar sobre objetivo (emagrecer, ganhar massa, pele).",
          "Checar alergias e intolerâncias.",
          "Orientar consumo conforme a necessidade real.",
        ],
        quandoChamarFarmaceutico: [
          "Hipertensos querendo termogênico com cafeína.",
          "Dúvidas sobre interação com medicamentos.",
        ],
        errosComuns: [
          "Sugerir whey para emagrecer sem contexto de déficit calórico.",
          "Prometer resultados milagrosos com colágeno.",
        ],
        simulacao: {
          cliente: "Rapaz de 28 anos, treina musculação, pede 'um whey bom' mas nunca tomou. Orçamento limitado, dúvida se precisa de BCAA junto.",
          falaBoa: "Ótimo que você quer começar com suplementação! O whey protein é uma proteína prática para o pós-treino. Para iniciante, um whey concentrado de boa qualidade já atende bem. Sobre BCAA, a ciência atual mostra que se você já come proteína suficiente, o BCAA não faz diferença significativa. Sugiro começar só com o whey, ver como seu corpo responde, e depois avaliamos se precisa de algo a mais. Tem alguma restrição alimentar ou intolerância?",
          falaEvitar: "Leva o combo whey + BCAA + termogênico que você fica gigante em um mês.",
        },

        quiz: [
          q(
            "Para melhor absorção do colágeno hidrolisado, é recomendado associar:",
            ["Cafeína", "Vitamina C", "Ferro", "Cálcio"],
            1,
            "A vitamina C potencializa a síntese de colágeno no organismo.",
          ),
        ],
        xp: 60,
      },
    ],
  },
  {
    id: "cuidados-pes",
    titulo: "Cuidados com os Pés e Calçados",
    descricao:
      "Hidratação, calos, calosidades, palmilhas, meias e calçados ortopédicos — conforto e saúde dos pés no balcão.",
    aulas: [
      {
        id: "pes-hidratacao-calos",
        titulo: "Hidratação dos pés, calos e calosidades",
        duracaoMin: 5,
        nivel: "basico",
        resumo:
          "Cremes hidratantes específicos, lixas, pedras-pomes e produtos para calos e rachaduras.",
        resumoExecutivo: [
          "Calos e calosidades são mecanismos de proteção; não remover com lâmina sem orientação.",
          "Pés secos e rachados pedem cremes com ureia ou ceramidas, aplicação diária.",
          "Esfoliação semanal + hidratação noturna com meia de algodão potencializa o tratamento.",
          "Diabetes exige cuidado redobrado — nunca lixar os pés sem liberação médica.",
        ],
        checklist: [
          "Perguntar sobre diabetes e circulação.",
          "Orientar hidratação diária e esfoliação suave.",
          "Encaminhar ao farmacêutico se houver feridas ou infecção.",
        ],
        quandoChamarFarmaceutico: [
          "Paciente diabético com feridas, calos dolorosos ou alteração de cor.",
          "Rachaduras profundas com sangramento ou sinais de infecção.",
        ],
        errosComuns: [
          "Indicar lâmina ou bisturi para remover calos em diabéticos.",
          "Ignorar diferença entre calo (ósseo) e calosidade (pele).",
        ],
        simulacao: {
          cliente: "Senhor de 62 anos, diabético diagnosticado há 5 anos. Notou uma área mais grossa na sola do pé, 'acha que é calo'. Quer uma pedra-pomes para lixar.",
          falaBoa: "Seu cuidado é muito importante! Como você tem diabetes, a pele dos pés precisa de atenção redobrada — qualquer machucado pode demorar a cicatrizar. Em vez de lixar, o mais seguro é hidratar com um creme específico para pés, com ureia, aplicar todos os dias. E esse calo eu sugiro que o farmacêutico avalie — ele pode indicar se precisa de acompanhamento com um podólogo. Vou chamá-lo para dar uma olhada, ok?",
          falaEvitar: "Pode lixar à vontade, esse creme aqui resolve tudo.",
        },

        quiz: [
          q(
            "Paciente diabético com calo no pé: conduta correta?",
            [
              "Indicar lixamento imediato",
              "Orientar hidratação suave e encaminhar ao farmacêutico/médico",
              "Passar pomada e ignorar",
              "Dizer que é normal",
            ],
            1,
            "Pé diabético exige cuidado extremo; lixamento pode causar úlcera.",
          ),
        ],
        xp: 45,
      },
      {
        id: "calcados-palmilhas",
        titulo: "Palmilhas, meias e calçados ortopédicos",
        duracaoMin: 5,
        nivel: "basico",
        resumo:
          "Palmilhas de silicone, gel, ortopédicas, meias de compressão e calçados para conforto.",
        resumoExecutivo: [
          "Palmilha de gel/silicone alivia impacto; ortopédica exige avaliação profissional.",
          "Meia de compressão tem gradação (leve, média, alta) — não indicar grau alto sem prescrição.",
          "Calçados ortopédicos são para deformidades; palmilhas são para conforto e postura.",
        ],
        checklist: [
          "Perguntar se há prescrição ou recomendação médica.",
          "Orientar grau correto de compressão.",
          "Sugerir palmilha de gel para alívio imediato de cansaço.",
        ],
        quandoChamarFarmaceutico: [
          "Dores persistentes nos pés, joelhos ou coluna.",
          "Varizes intensas, inchaço, suspeita de trombose.",
        ],
        errosComuns: [
          "Indicar meia de compressão alta sem avaliação.",
          "Confundir palmilha de conforto com palmilha ortopédica sob medida.",
        ],
        simulacao: {
          cliente: "Profissional que passa o dia em pé (cabeleireira). 'Meus pés doem no fim do dia, minhas costas também'. Nunca usou palmilha.",
          falaBoa: "Passar o dia em pé sobrecarrega os pés e a coluna mesmo. Uma palmilha de gel ou silicone pode absorver o impacto e aliviar muito o cansaço. O ideal é uma palmilha que encaixe bem no tênis que você usa no trabalho. Se a dor nas costas persistir depois de algumas semanas usando a palmilha, vale uma avaliação com ortopedista. Quer experimentar a sensação de uma palmilha de gel aqui?",
          falaEvitar: "Compra essa palmilha ortopédica sob medida que custa 300 reais.",
        },

        quiz: [
          q(
            "Meias de compressão com grau elevado exigem:",
            ["Compra imediata", "Prescrição médica", "Uso só à noite", "Indicação do atendente"],
            1,
            "Compressão alta deve ser prescrita por profissional devido a riscos circulatórios.",
          ),
        ],
        xp: 40,
      },
    ],
  },
  {
    id: "clean-beauty",
    titulo: "Clean Beauty e Cosméticos Sustentáveis",
    descricao:
      "Cosméticos naturais, veganos, cruelty-free, sem parabenos — tendência crescente e como orientar o cliente consciente.",
    aulas: [
      {
        id: "cosmeticos-naturais",
        titulo: "Cosméticos naturais e veganos",
        duracaoMin: 6,
        nivel: "intermediario",
        resumo:
          "Diferença entre natural, vegano, orgânico e cruelty-free; selos e certificações; indicação correta.",
        resumoExecutivo: [
          "Vegano não significa hipoalergênico — ingredientes naturais também podem causar alergia.",
          "Cruelty-free não garante que o produto seja orgânico ou livre de sintéticos.",
          "Cliente que busca clean beauty geralmente valoriza transparência e sustentabilidade.",
          "Saber ler rótulos: 'sem parabenos', 'sem sulfatos', 'sem petrolatos' são alegações comuns.",
        ],
        comparativo: {
          titulo: "Conceito x Significado real",
          itens: [
            { nome: "Natural", quando: "Ingredientes de origem vegetal/mineral; pode conter conservantes suaves." },
            { nome: "Vegano", quando: "Sem ingredientes de origem animal; não necessariamente orgânico." },
            { nome: "Cruelty-free", quando: "Não testado em animais; não garante composição natural." },
            { nome: "Orgânico", quando: "Matéria-prima cultivada sem agrotóxicos; exige certificação." },
          ],
        },
        checklist: [
          "Perguntar o que o cliente busca: evitar crueldade, alergia, sustentabilidade?",
          "Explicar diferenças sem julgar a escolha do cliente.",
          "Mostrar opções disponíveis na gôndola com os selos corretos.",
        ],
        quandoChamarFarmaceutico: ["Reações alérgicas a cosméticos 'naturais'."],
        errosComuns: [
          "Afirmar que natural é sempre melhor ou mais seguro.",
          "Confundir vegano com hipoalergênico.",
        ],
        simulacao: {
          cliente: "Rapaz de 24 anos, cabelo cacheado, 'quer um shampoo natural porque viu no TikTok que sulfato faz mal'. Nunca usou produto profissional.",
          falaBoa: "Legal que você está buscando entender melhor os produtos! Shampoo sem sulfato realmente limpa de forma mais suave e preserva a oleosidade natural do cabelo — ótimo para cabelos crespos e cacheados. Mas 'natural' não significa que sirva para todo mundo. Alguns shampoos naturais têm óleos essenciais que podem irritar o couro cabeludo sensível. Posso te mostrar duas opções sem sulfato e com ingredientes suaves para você experimentar?",
          falaEvitar: "Tudo que é natural é melhor, leva esse e pronto.",
        },

        quiz: [
          q(
            "Um cosmético cruelty-free significa que:",
            [
              "É 100% orgânico",
              "Não foi testado em animais",
              "É vegano",
              "Não tem conservantes",
            ],
            1,
            "Cruelty-free se refere apenas a testes em animais; não garante composição vegana ou orgânica.",
          ),
        ],
        xp: 50,
      },
      {
        id: "sustentabilidade-beleza",
        titulo: "Sustentabilidade na beleza e refil",
        duracaoMin: 5,
        nivel: "basico",
        resumo:
          "Produtos refil, embalagens recicláveis, barras sólidas (shampoo, condicionador) e consumo consciente.",
        resumoExecutivo: [
          "Refil reduz embalagem; orientar o cliente a reutilizar o frasco original.",
          "Shampoo e condicionador sólidos são tendência — explicar modo de uso diferente do líquido.",
          "Maquiagem sustentável (barras, potes de vidro) atrai público jovem e engajado.",
          "Valorizar pequenas ações: consumidor que compra refil já é parte da mudança.",
        ],
        checklist: [
          "Apresentar opção refil sempre que disponível.",
          "Explicar uso de produtos sólidos (espumar, aplicar, conservar seco).",
          "Reforçar que sustentabilidade não abre mão de qualidade.",
        ],
        quandoChamarFarmaceutico: [
          "Clientes com dermatite de contato que buscam alternativas mais puras.",
        ],
        errosComuns: [
          "Menosprezar produtos sustentáveis como 'modinha'.",
          "Não saber explicar a diferença de uso de um shampoo sólido.",
        ],
        simulacao: {
          cliente: "Cliente ecoconsciente, 'só compro produto que não testa em animais'. Quer um shampoo sólido mas 'já tentou e não espuma'.",
          falaBoa: "Que bom que você se preocupa com isso! Sobre o shampoo sólido não espumar tanto quanto o líquido — isso é normal, porque ele não tem água e tem menos agentes espumantes. A técnica é: esfregar a barra entre as mãos molhadas ou diretão no cabelo molhado, massagear bem o couro cabeludo. Depois de alguns usos você pega o jeito. Quer ver aqui como ele funciona?",
          falaEvitar: "Esse é hipster, põe na sacola e tenta em casa.",
        },

        quiz: [
          q(
            "Qual a principal vantagem do formato refil?",
            [
              "Ser mais caro",
              "Reduzir embalagem e gerar menos resíduo",
              "Durar menos",
              "Ser mais perfumado",
            ],
            1,
            "Refil reduz resíduo de embalagem, mantendo a qualidade do produto.",
          ),
        ],
        xp: 40,
      },
    ],
  },
  {
    id: "bem-estar-sono",
    titulo: "Bem-Estar do Sono e Relaxamento",
    descricao:
      "Higiene do sono, melatonina (MIP), travesseiros ortopédicos, difusores, chás e velas — como o balcão pode ajudar no descanso.",
    aulas: [
      {
        id: "higiene-sono",
        titulo: "Higiene do sono e relaxamento",
        duracaoMin: 6,
        nivel: "basico",
        resumo:
          "Rotina noturna, melatonina (suplemento), chás calmantes, difusores e óleos essenciais para o sono.",
        resumoExecutivo: [
          "Melatonina é suplemento, não medicamento; auxilia na regulação do sono, mas não trata insônia crônica.",
          "Higiene do sono: horário fixo, telas desligadas 1h antes, ambiente escuro e fresco.",
          "Óleos essenciais (lavanda, camomila) em difusor criam ambiente propício ao relaxamento.",
          "Chás de camomila, melissa e maracujá têm efeito suave; não substituem tratamento medicamentoso.",
        ],
        comparativo: {
          titulo: "Abordagem para o sono",
          itens: [
            { nome: "Higiene do sono", quando: "Base para qualquer queixa; orientar sempre primeiro." },
            { nome: "Melatonina", quando: "Suplemento para regulação; 0,21–10 mg, tomar 30–60 min antes de deitar." },
            { nome: "Óleos essenciais/difusor", quando: "Complementar, cria ambiente; não trata insônia." },
            { nome: "Chás calmantes", quando: "Ritual noturno; efeito leve a moderado." },
          ],
        },
        checklist: [
          "Perguntar hábitos de sono (horário, telas, café).",
          "Orientar higiene do sono antes de qualquer suplemento.",
          "Encaminhar ao farmacêutico se insônia persistir por mais de 2 semanas.",
        ],
        quandoChamarFarmaceutico: [
          "Insônia crônica, uso de medicamentos para dormir, suspeita de apneia.",
          "Gestantes ou lactantes para uso de melatonina.",
        ],
        errosComuns: [
          "Vender melatonina como solução mágica sem orientar higiene do sono.",
          "Recomendar óleo essencial para ingestão oral (uso apenas difusor/ml tópico).",
        ],
        simulacao: {
          cliente: "Cliente de 35 anos, 'não consigo dormir, fico rolando na cama pensando no trabalho'. Já tentou chá, não funcionou. Ouviu falar de melatonina.",
          falaBoa: "Entendo, a mente acelerada atrapalha muito o descanso. Antes de pensar em melatonina — que é um suplemento regulador, não um indutor do sono — vale tentar ajustar a rotina: desligar telas uma hora antes, criar um ritual noturno (um chá, luz baixa, som calmo). Se isso não melhorar, a melatonina pode ajudar a regular o ciclo, em doses baixas (0,21 a 3 mg), 30 minutos antes de dormir. Mas se a insônia passar de 2 semanas, sugiro conversar com o farmacêutico para investigar causas mais profundas.",
          falaEvitar: "Toma 10 mg de melatonina que você apaga na hora.",
        },

        quiz: [
          q(
            "Antes de indicar melatonina, o atendente deve:",
            [
              "Vender a dosagem mais alta possível",
              "Orientar higiene do sono e perguntar sobre hábitos",
              "Ignorar outras causas",
              "Dizer que melatonina cura insônia",
            ],
            1,
            "Higiene do sono é a base; melatonina é coadjuvante, não tratamento principal.",
          ),
        ],
        xp: 55,
      },
      {
        id: "travesseiros-acessorios-sono",
        titulo: "Travesseiros, máscaras e acessórios do sono",
        duracaoMin: 5,
        nivel: "basico",
        resumo:
          "Travesseiros ortopédicos, máscaras noturnas, protetores auriculares, cobertores ponderados e almofadas ergonômicas.",
        resumoExecutivo: [
          "Travesseiro ortopédico alinha coluna cervical; perguntar se dorme de lado, costas ou barriga.",
          "Máscara noturna com bloqueio total de luz melhora qualidade do sono em ambientes claros.",
          "Cobertor ponderado (weighted blanket) tem evidência em ansiedade e autismo; peso sugerido é 10% do corporal.",
          "Protetor auricular é solução simples para ruído ambiente; não substitui tratamento de zumbido.",
        ],
        checklist: [
          "Perguntar posição de dormir para travesseiro.",
          "Sugerir máscara + protetor para ambientes claros/barulhentos.",
          "Orientar peso correto do cobertor ponderado.",
        ],
        quandoChamarFarmaceutico: [
          "Dor cervical persistente mesmo com travesseiro adequado.",
          "Zumbido, insônia grave, apneia do sono.",
        ],
        errosComuns: [
          "Indicar travesseiro ortopédico sem perguntar posição de dormir.",
          "Sugerir cobertor pesado para criança sem orientação de peso.",
        ],
        simulacao: {
          cliente: "Acorda com dor no pescoço toda manhã. 'Meu travesseiro é velho, acho que está na hora de trocar'. Dorme de lado.",
          falaBoa: "Dor no pescoço ao acordar é um sinal clássico de que o travesseiro não está dando o suporte adequado. Como você dorme de lado, o ideal é um travesseiro mais alto e firme para preencher o espaço entre o ombro e a cabeça, mantendo a coluna reta. Um travesseiro ortopédico com elevação lateral ou um modelo em pluma com altura ajustável pode resolver. Depois de escolher, dou um prazo de 3 a 5 noites para adaptação — se a dor persistir, vale uma avaliação.",
          falaEvitar: "Compra o mais caro que é ortopédico e pronto.",
        },

        quiz: [
          q(
            "Ao indicar um travesseiro ortopédico, o primeiro passo é:",
            [
              "Escolher o mais caro",
              "Perguntar a posição de dormir",
              "Não perguntar nada",
              "Indicar o mais firme",
            ],
            1,
            "A posição de dormir define a altura e firmeza ideal do travesseiro.",
          ),
        ],
        xp: 40,
      },
    ],
  },
  {
    id: "produtos-sazonais",
    titulo: "Produtos Sazonais e Estacionais",
    descricao:
      "Verão (protetor solar, repelente, pós-sol) e inverno (hidratante intensivo, lip balm, vitaminas de estação) — antecipar necessidades sazonais do cliente.",
    aulas: [
      {
        id: "sazonal-verao",
        titulo: "Kit verão: protetor solar, repelente e pós-sol",
        duracaoMin: 6,
        nivel: "basico",
        resumo:
          "Fotoproteção avançada, repelente de insetos, cuidados pós-exposição e hidratação intensiva no verão.",
        resumoExecutivo: [
          "Protetor solar com FPS 50+ para exposição direta; reaplicação a cada 2h é essencial.",
          "Repelente com DEET, Icaridina ou IR3535; não passar sobre protetor solar — aplicar por cima.",
          "Pós-sol com aloe vera ou calamina acalma a pele; hidratante noturno potencializa regeneração.",
          "Oferecer combo sazonal: protetor + repelente + pós-sol como kit inteligente.",
        ],
        comparativo: {
          titulo: "Cuidado sazonal — Verão",
          itens: [
            { nome: "Protetor solar (FPS 50+)", quando: "Dia a dia e exposição direta; reaplicar." },
            { nome: "Repelente", quando: "Áreas de mata, fim de tarde, regiões endêmicas." },
            { nome: "Pós-sol / Aloe vera", quando: "Após exposição; acalma e hidrata." },
            { nome: "Hidratante noturno leve", quando: "Reposição da barreira cutânea pós-sol." },
          ],
        },
        checklist: [
          "Oferecer protetor + repelente como combinação obrigatória.",
          "Orientar ordem de aplicação (protetor primeiro, repelente depois).",
          "Sugerir pós-sol se o cliente for passar o dia na praia/piscina.",
        ],
        quandoChamarFarmaceutico: [
          "Alergia a protetor solar ou repelente.",
          "Cliente com fotossensibilidade por medicamentos.",
        ],
        errosComuns: [
          "Indicar protetor FPS baixo para exposição direta.",
          "Não orientar reaplicação do protetor.",
        ],
        simulacao: {
          cliente: "Família vai para a praia passar o dia. Mãe com dois filhos pequenos, 'preciso de protetor, repelente, tudo'. Filhos têm pele sensível.",
          falaBoa: "Que delícia, viagem à praia! Vou montar um combo completo. Para as crianças, sugiro um protetor solar infantil FPS 60, resistente à água, em loção — mais fácil de espalhar. Para você, um FPS 50 toque seco. O repelente para todos, mas atenção: aplicar o protetor primeiro em todo o corpo, esperar secar, e depois passar o repelente por cima. Não esquecer de reaplicar o protetor a cada 2 horas e depois de entrar no mar. Para o pós-praia, levo um pós-sol com aloe vera para acalmar a pele de todos. Quer que eu monte o kit?",
          falaEvitar: "Pega três protetores FPS 15 que é tudo igual.",
        },

        quiz: [
          q(
            "A ordem correta de aplicação é:",
            [
              "Repelente → protetor",
              "Protetor → repelente",
              "Misturar os dois",
              "Só protetor é suficiente",
            ],
            1,
            "Protetor primeiro, depois repelente por cima para não reduzir a proteção.",
          ),
        ],
        xp: 50,
      },
      {
        id: "sazonal-inverno",
        titulo: "Kit inverno: hidratação intensiva, lábios e imunidade",
        duracaoMin: 6,
        nivel: "basico",
        resumo:
          "Hidratantes corporais ricos, lip balm, vitaminas de estação, umidificadores e cuidados com pele ressecada pelo frio.",
        resumoExecutivo: [
          "Frio resseca a pele: hidratante com manteigas (karité, cacau) ou ceramidas é mais eficaz que loção leve.",
          "Lábios rachados pedem balm com óleo de rícino, lanolina ou vaselina; evitar passar saliva.",
          "Vitamina C e zinco ajudam na imunidade; não prometer prevenção total de gripes.",
          "Umidificador de ambiente alivia ressecamento de pele e vias aéreas.",
        ],
        comparativo: {
          titulo: "Cuidado sazonal — Inverno",
          itens: [
            { nome: "Hidratante rico (manteigas)", quando: "Pele ressecada, áreas ásperas (cotovelos, joelhos)." },
            { nome: "Lip balm / protetor labial", quando: "Lábios rachados, uso diário no frio." },
            { nome: "Vitamina C + Zinco", quando: "Reforço imunológico sazonal." },
            { nome: "Umidificador de ar", quando: "Ambientes muito secos, rinite, pele ressecada." },
          ],
        },
        checklist: [
          "Oferecer hidratante intensivo + lip balm como dupla essencial.",
          "Sugerir vitamina C como preventivo sazonal.",
          "Perguntar sobre alergias respiratórias para indicar umidificador.",
        ],
        quandoChamarFarmaceutico: [
          "Pele com fissuras profundas, sinais de infecção.",
          "Sintomas gripais intensos (febre alta, falta de ar).",
        ],
        errosComuns: [
          "Indicar loção leve para pele ressecada pelo frio.",
          "Prometer que vitamina C previne gripe com certeza.",
        ],
        simulacao: {
          cliente: "Senhora de 45 anos, 'toda listrada de ressecada no inverno. Lábios rachados. Também quero prevenir gripe'.",
          falaBoa: "O inverno realmente exige cuidados extras! Para a pele, sugiro um hidratante com manteiga de karité ou ureia — use depois do banho, com a pele ainda úmida, que fixa melhor. Para os lábios, esse balm com óleo de rícino e manteiga de cacau é excelente — evite passar saliva, que resseca ainda mais. Sobre prevenir gripe, vitamina C e zinco podem dar um suporte para a imunidade, mas o mais importante é manter a alimentação equilibrada e se vacinar. Quer levar o hidratante, o balm e a vitamina C? Posso separar tudo.",
          falaEvitar: "Compra esse hidratante barato e vitamina C em alta dose — não pega gripe.",
        },

        quiz: [
          q(
            "No inverno, a pele ressecada pede hidratante com:",
            ["Loção oil-free", "Manteigas ou ceramidas", "Álcool", "Toque seco"],
            1,
            "Texturas ricas repõem lipídios da barreira cutânea, mais afetados no frio.",
          ),
        ],
        xp: 50,
      },
    ],
  },
];
