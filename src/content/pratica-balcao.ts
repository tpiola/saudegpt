import type { Trilha } from "./types";

export const fontesPratica = [
 {nome:"Ministério da Saúde · Segurança e notas técnicas de vacinação",url:"https://www.gov.br/saude/pt-br/vacinacao/esavi/notas-tecnicas"},
 {nome:"Anvisa · Prescrição e retenção de receita para GLP-1",url:"https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/entra-em-vigor-norma-que-preve-retencao-de-receita-para-medicamentos-agonistas-glp-1"},
  {
    nome: "Ministério da Saúde · Uso racional de medicamentos",
    url: "https://www.gov.br/saude/pt-br/composicao/sectics/daf/uso-racional-de-medicamentos",
  },
  {
    nome: "Anvisa · Bulário eletrônico",
    url: "https://consultas.anvisa.gov.br/#/bulario/",
  },
  {nome: "Anvisa · Cinco momentos para medicação segura", url:"https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/servicosdesaude/5-momentos-para-medicacao-segura-em-servicos-de-saude"},
  {nome: "Anvisa · Segurança no uso de agonistas de GLP-1", url:"https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2026/anvisa-emite-alerta-para-risco-de-pancreatite-aguda-associada-ao-uso-indevido-de-canetas-emagrecedoras"},
];
export const casosBalcao = [
  {
    id: "acolher",
    tema: "Acolhimento",
    titulo: "A conversa começa pela pessoa",
    cliente: "Uma cliente chega com pressa e parece preocupada. Como começar?",
    opcoes: [
      "Perguntar logo qual produto ela quer levar.",
      "Apresentar-se, perguntar como prefere ser chamada e ouvir sua necessidade.",
      "Oferecer o produto em promoção.",
    ],
    correta: 1,
    explicacao:
      "Apresente-se e pergunte como a pessoa prefere ser chamada. Ouça sem interromper e confirme o que entendeu. Use o nome com naturalidade, sem repetir em excesso.",
    acao: "Diga: Sou da equipe de atendimento. Como você prefere ser chamada? Como posso ajudar hoje?",
  },
  {
    id: "receita",
    tema: "Apoio ao Tratamento",
    titulo: "Toda receita é uma oportunidade de cuidar",
    cliente:
      "O cliente entrega uma receita e pede apenas o preço. Qual é o próximo passo?",
    opcoes: [
      "Informar o preço e encerrar.",
      "Indicar um medicamento diferente para economizar.",
      "Acolher, encaminhar a receita ao farmacêutico e realizar o Apoio ao Tratamento conforme o protocolo da unidade.",
    ],
    correta: 2,
    explicacao:
      "Em toda receita, faça o Apoio ao Tratamento: identifique dúvidas, dificuldades de acesso e de compreensão e envolva o farmacêutico. A equipe não altera dose, duração nem medicamento por conta própria.",
    acao: "Pergunte: Você já usa esse tratamento? Ficou alguma dúvida para conversarmos com o farmacêutico?",
  },
  {
    id: "rotina",
    tema: "Na Rotina",
    titulo: "Uso contínuo pede continuidade do cuidado",
    cliente:
      "Uma pessoa busca seu medicamento de uso contínuo. O que incluir no atendimento?",
    opcoes: [
      "Apresentar o Na Rotina, explicar a finalidade e ajudar a aderir somente se ela concordar, conforme as regras vigentes.",
      "Cadastrar automaticamente, porque todo uso contínuo exige adesão.",
      "Prometer descontos fixos e cura com os lembretes.",
    ],
    correta: 0,
    explicacao:
      "Em todo atendimento de uso contínuo, apresente o Na Rotina como apoio à organização do tratamento. A adesão depende da escolha do cliente e dos critérios vigentes. Confirme o fluxo no sistema ou aplicativo oficial; não prometa benefícios não verificados.",
    acao: "Diga: Você gostaria de conhecer o Na Rotina para apoiar a organização dos seus medicamentos?",
  },
  {
    id: "esquecimento",
    tema: "Adesão",
    titulo: "Esqueceu uma dose. E agora?",
    cliente: "Esqueci meu remédio ontem. Posso tomar dois hoje?",
    opcoes: [
      "Sim, sempre dobre a próxima dose.",
      "Não dê uma regra geral: peça ao farmacêutico para verificar o medicamento, a prescrição e a bula.",
      "Interrompa por três dias e recomece.",
    ],
    correta: 1,
    explicacao:
      "A conduta depende do medicamento e do tempo de atraso. O atendente não recomenda compensar doses. Acolha sem julgar e encaminhe ao farmacêutico; ele pode avaliar barreiras e medidas para evitar novos esquecimentos.",
    acao: "Pergunte: Qual medicamento e qual horário prescrito? Vou chamar o farmacêutico para orientar com segurança.",
  },
  {
    id: "pressao",
    tema: "Uso contínuo",
    titulo: "Sem sintomas não significa sem tratamento",
    cliente: "Minha pressão está boa. Posso parar o remédio?",
    opcoes: [
      "Sim, pressão boa significa cura.",
      "Use somente quando sentir dor de cabeça.",
      "Não recomende interromper: encaminhe ao farmacêutico e ao prescritor para avaliação.",
    ],
    correta: 2,
    explicacao:
      "Não ter sintomas não é motivo para mudar o tratamento. Ouça a dúvida, identifique dificuldade de uso e chame o farmacêutico. Apresente o Na Rotina com consentimento, sem substituir o acompanhamento clínico.",
    acao: "Diga: Vamos conversar com o farmacêutico antes de qualquer mudança no tratamento.",
  },
  {
    id: "antibiotico",
    tema: "Receita e segurança",
    titulo: "Antibiótico não é uma venda comum",
    cliente:
      "O cliente quer repetir um antibiótico antigo para um novo episódio de dor de garganta.",
    opcoes: [
      "Encaminhar ao farmacêutico para avaliar a situação e os requisitos da prescrição, sem incentivar automedicação.",
      "Vender o mesmo antibiótico porque já funcionou antes.",
      "Sugerir metade da duração anterior.",
    ],
    correta: 0,
    explicacao:
      "Um episódio novo precisa de avaliação. Não diagnostique nem indique antibiótico por experiência anterior. O farmacêutico verifica a prescrição e orienta a dispensação e o uso correto. Quando houver receita, realize o Apoio ao Tratamento.",
    acao: "Diga: Vou chamar o farmacêutico para verificar como podemos ajudar com segurança.",
  },
  {
    id: "interacao",
    tema: "Segurança",
    titulo: "O que mais essa pessoa usa?",
    cliente:
      "A pessoa usa vários medicamentos e quer acrescentar um produto natural.",
    opcoes: [
      "Natural nunca interage.",
      "Indicar o mais vendido.",
      "Perguntar sobre medicamentos e suplementos e pedir avaliação do farmacêutico antes da recomendação.",
    ],
    correta: 2,
    explicacao:
      "Produtos naturais também podem causar efeitos indesejados e interações. Não garanta segurança apenas pela origem. O farmacêutico avalia o conjunto do tratamento, incluindo suplementos e produtos sem receita.",
    acao: "Pergunte: Você usa outros medicamentos, chás ou suplementos? Vamos conferir com o farmacêutico.",
  },
  {
    id: "entendimento",
    tema: "Comunicação",
    titulo: "Confirmar entendimento sem constranger",
    cliente:
      "Depois da orientação farmacêutica, o cliente diz que entendeu, mas parece inseguro.",
    opcoes: [
      "Repetir tudo mais alto.",
      "Pedir, com respeito, que conte como vai seguir o tratamento em casa e retomar dúvidas com o farmacêutico.",
      "Perguntar somente entendeu? e encerrar.",
    ],
    correta: 1,
    explicacao:
      "Peça uma explicação com as próprias palavras, sem transformar a conversa em prova. Isso ajuda a revelar dúvidas. A confirmação de orientações clínicas e os ajustes cabem ao farmacêutico e ao prescritor.",
    acao: "Diga: Só para conferir se explicamos bem, como você vai organizar o uso em casa?",
  },
  {
    id: "acesso",
    tema: "Acesso ao tratamento",
    titulo: "Quando o preço vira uma barreira",
    cliente: "A pessoa conta que não consegue comprar todo o tratamento.",
    opcoes: [
      "Ouvir sem julgamento, verificar benefícios disponíveis e chamar o farmacêutico para avaliar alternativas permitidas.",
      "Mandar tomar em dias alternados para durar mais.",
      "Substituir qualquer item sem conferir a prescrição.",
    ],
    correta: 0,
    explicacao:
      "Não altere o esquema para reduzir custo. Verifique condições reais de benefícios e acesso, com transparência. O farmacêutico avalia as possibilidades legais de substituição e a necessidade de contato com o prescritor.",
    acao: "Pergunte: Qual parte ficou difícil de manter? Vamos verificar opções seguras com o farmacêutico.",
  },
  {
    id: "complementar",
    tema: "Oferta responsável",
    titulo: "Oferecer com sentido, respeitar a escolha",
    cliente:
      "Você identifica um produto de cuidado que pode atender à necessidade relatada.",
    opcoes: [
      "Dizer que é obrigatório comprar junto.",
      "Prometer que elimina qualquer efeito do tratamento.",
      "Pedir permissão, explicar o benefício real e o preço e respeitar a decisão; dúvidas clínicas vão ao farmacêutico.",
    ],
    correta: 2,
    explicacao:
      "Uma boa oferta responde a uma necessidade, tem explicação simples e não pressiona. Não prometa resultados garantidos nem crie medo. Serviços e produtos precisam de indicação adequada, transparência e liberdade de escolha.",
    acao: "Diga: Posso mostrar uma opção para a necessidade que você comentou? Ela custa este valor; você decide se faz sentido.",
  },
  {
    id: "privacidade",
    tema: "Privacidade",
    titulo: "Cuidado também é discrição",
    cliente:
      "Há fila e você precisa conversar sobre um medicamento de uso pessoal.",
    opcoes: [
      "Falar o diagnóstico em voz alta para agilizar.",
      "Convidar para uma conversa discreta e envolver o farmacêutico, sem expor informações à fila.",
      "Fotografar a receita no celular pessoal.",
    ],
    correta: 1,
    explicacao:
      "Preserve a privacidade. Use apenas os canais e sistemas autorizados, explique a finalidade de qualquer cadastro e siga o protocolo da unidade. Nunca exponha uma receita ou dados de saúde em dispositivos pessoais.",
    acao: "Diga: Podemos conversar com mais privacidade? Vou chamar o farmacêutico para acompanhar.",
  },
  {
    id: "reacao",
    tema: "Encaminhamento",
    titulo: "Suspeita de reação merece atenção",
    cliente:
      "A pessoa relata um mal-estar que começou após iniciar um medicamento.",
    opcoes: [
      "Acolher, chamar o farmacêutico e buscar atendimento de urgência diante de sinais graves, como falta de ar ou inchaço na face.",
      "Afirmar que é normal sem avaliar.",
      "Trocar a dose por conta própria.",
    ],
    correta: 0,
    explicacao:
      "Não minimize sintomas nem conclua a causa. O farmacêutico avalia o relato e orienta o encaminhamento. Sinais graves precisam de atendimento de urgência imediato; não atrase a assistência para concluir uma venda ou cadastro.",
    acao: "Diga: Vou chamar o farmacêutico agora para entender o que aconteceu e orientar o próximo passo.",
  },
];

export const trilhaBalcao: Trilha = {
  id: "cuidado-no-balcao",
  numero: 12,
  titulo: "Cuidado no balcão",
  subtitulo: "Da conversa à continuidade",
  descricao:
    "Acolher, apoiar cada receita, apresentar o Na Rotina no uso contínuo e agir com segurança. Situações reais em linguagem simples.",
  nivelFaixa: "Básico ao intermediário",
  icone: "heart",
  modulos: [
    "Acolher e apoiar",
    "Tratamento com segurança",
    "Entender e manter",
    "Cuidar com responsabilidade",
  ].map((titulo, i) => ({
    id: `balcao-${i + 1}`,
    titulo,
    descricao:
      "Leia a situação, treine a conversa e confira a explicação. Use o protocolo da sua unidade e conte com o farmacêutico.",
    aulas: casosBalcao.slice(i * 3, i * 3 + 3).map((c) => ({
      id: c.id,
      titulo: c.titulo,
      duracaoMin: 5,
      nivel: "basico",
      resumo: c.cliente,
      resumoExecutivo: [c.explicacao, c.acao],
      simulacao: {
        cliente: c.cliente,
        falaBoa: c.acao,
        falaEvitar: c.opcoes[(c.correta + 1) % c.opcoes.length],
      },
      checklist: [
        "Acolher e confirmar a necessidade, sem julgar.",
        "Em toda receita, realizar o Apoio ao Tratamento conforme o protocolo da unidade.",
        "Em todo uso contínuo, apresentar o Na Rotina; adesão com consentimento e conforme regras vigentes.",
        "Confirmar a compreensão e encaminhar orientações clínicas ao farmacêutico.",
      ],
      quandoChamarFarmaceutico: [
        "Dúvida sobre medicamento, prescrição, dose, interação ou reação.",
        "Dificuldade para seguir ou manter o tratamento.",
      ],
      errosComuns: [
        "Alterar a prescrição por conta própria.",
        "Cadastrar sem consentimento ou prometer benefícios não confirmados.",
      ],
      quiz: [
        {
          pergunta: c.cliente,
          opcoes: c.opcoes,
          correta: c.correta,
          explicacao: c.explicacao,
        },
      ],
      xp: 30,
    })),
  })),
};
