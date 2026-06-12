/** Categorias do Fórum da Farmácia — seed educativo. */

export interface ForumCategoria {
  id: string;
  nome: string;
  descricao: string;
  icone: string;
  cor: string; // tailwind color class
  ordem: number;
}

export interface ForumPost {
  id: string;
  categoriaId: string;
  titulo: string;
  conteudo: string;
  autorNome: string;
  autorId: string;
  criadoEm: string; // ISO
  curtidas: number;
  curtidoPor: string[]; // userIds
  denuncias: number;
  removido: boolean;
  replies: ForumReply[];
  repliesCount: number;
}

export interface ForumReply {
  id: string;
  postId: string;
  conteudo: string;
  autorNome: string;
  autorId: string;
  criadoEm: string;
  curtidas: number;
  curtidoPor: string[];
  denuncias: number;
  removido: boolean;
}

/** 11 categorias reais do universo farmacêutico. */
export const categoriasForum: ForumCategoria[] = [
  {
    id: "bem-vindo",
    nome: "Bem-vindo e Apresentações",
    descricao: "Apresente-se para a comunidade! Conte um pouco sobre sua trajetória na farmácia.",
    icone: "smile",
    cor: "text-green-500",
    ordem: 1,
  },
  {
    id: "duvidas-medicamentos",
    nome: "Dúvidas sobre Medicamentos",
    descricao: "Mecanismo de ação, posologia, interações, reações adversas e muito mais.",
    icone: "pill",
    cor: "text-blue-500",
    ordem: 2,
  },
  {
    id: "atendimento-cliente",
    nome: "Atendimento ao Cliente",
    descricao: "Técnicas de abordagem, escuta ativa, objeções e fidelização no balcão.",
    icone: "message",
    cor: "text-orange-500",
    ordem: 3,
  },
  {
    id: "legislacao-anvisa",
    nome: "Legislação e ANVISA",
    descricao: "RDCs, portarias, fiscalização, documentação obrigatória e boas práticas.",
    icone: "shield",
    cor: "text-red-500",
    ordem: 4,
  },
  {
    id: "casos-clinicos",
    nome: "Casos Clínicos e OSCE",
    descricao: "Compartilhe e discuta casos reais, simulações OSCE e protocolos clínicos.",
    icone: "heart",
    cor: "text-pink-500",
    ordem: 5,
  },
  {
    id: "dermocosmeticos",
    nome: "Dermocosméticos e Perfumaria",
    descricao: "Ativos cosméticos, rotinas de skincare, perfumaria e tendências do mercado.",
    icone: "sparkles",
    cor: "text-purple-500",
    ordem: 6,
  },
  {
    id: "receitas-controlados",
    nome: "Receitas e Controlados",
    descricao: "Medicamentos controlados, receituário azul/amarelo, antimicrobianos e psicotrópicos.",
    icone: "lock",
    cor: "text-yellow-600",
    ordem: 7,
  },
  {
    id: "carreira",
    nome: "Carreira em Farmácia",
    descricao: "Oportunidades, salários, especializações, concursos e empreendedorismo farmacêutico.",
    icone: "trending",
    cor: "text-cyan-500",
    ordem: 8,
  },
  {
    id: "dicas-estudo",
    nome: "Dicas e Materiais de Estudo",
    descricao: "Resumos, flashcards, mapas mentais, apps e técnicas de estudo para farmácia.",
    icone: "book",
    cor: "text-indigo-500",
    ordem: 9,
  },
  {
    id: "tecnologia-inovacao",
    nome: "Tecnologia e Inovação",
    descricao: "Farmácia digital, sistemas de gestão, telefarmácia, IA e automação.",
    icone: "zap",
    cor: "text-amber-500",
    ordem: 10,
  },
  {
    id: "off-topic",
    nome: "Off-Topic",
    descricao: "Assuntos gerais, descontração e conversas fora do expediente.",
    icone: "globe",
    cor: "text-gray-500",
    ordem: 11,
  },
];

const AGORA = "2025-06-12T10:00:00.000Z";
const AUTOR_SISTEMA = { nome: "Equipe SaúdeGPT", id: "sistema" };

/** Seed posts educativos: 2-3 por categoria, com replies simuladas. */
export const seedPosts: ForumPost[] = [
  // --- Bem-vindo ---
  {
    id: "s-bv-1",
    categoriaId: "bem-vindo",
    titulo: "👋 Olá, comunidade! Chegou o nosso fórum",
    conteudo:
      "Sejam bem-vindos ao Fórum da Farmácia! 🎉 Este espaço é nosso — para trocar experiências, tirar dúvidas, compartilhar casos e crescer juntos na profissão. Apresentem-se nos comentários: qual seu nome, há quanto tempo trabalha na farmácia e o que espera aprender aqui?",
    autorNome: AUTOR_SISTEMA.nome,
    autorId: AUTOR_SISTEMA.id,
    criadoEm: AGORA,
    curtidas: 12,
    curtidoPor: ["sistema"],
    denuncias: 0,
    removido: false,
    replies: [
      {
        id: "r-bv-1a",
        postId: "s-bv-1",
        conteudo:
          "Olá! Sou a Carla, atendo balcão há 3 anos. Estou aqui para me atualizar sobre lançamentos de dermocosméticos e melhorar meu atendimento. 😊",
        autorNome: "Carla Mendes",
        autorId: "carla-m",
        criadoEm: "2025-06-12T10:15:00.000Z",
        curtidas: 5,
        curtidoPor: [],
        denuncias: 0,
        removido: false,
      },
      {
        id: "r-bv-1b",
        postId: "s-bv-1",
        conteudo:
          "Oi! Sou o Roberto, farmacêutico recém-formado. Ansioso para aprender com os mais experientes!",
        autorNome: "Roberto Lima",
        autorId: "roberto-l",
        criadoEm: "2025-06-12T10:30:00.000Z",
        curtidas: 3,
        curtidoPor: [],
        denuncias: 0,
        removido: false,
      },
    ],
    repliesCount: 2,
  },
  // --- Dúvidas Medicamentos ---
  {
    id: "s-dm-1",
    categoriaId: "duvidas-medicamentos",
    titulo: "💊 Omeprazol: como orientar o paciente corretamente?",
    conteudo:
      "Galera, qual a melhor forma de orientar o uso do omeprazol? Muita gente acha que pode tomar junto com a comida, mas sabemos que o ideal é 30-60min antes do café. Além disso, o uso prolongado (mais de 8 semanas) merece atenção — pode causar deficiência de B12 e magnésio. Como vocês abordam isso no balcão?",
    autorNome: "Dra. Juliana F.",
    autorId: "juliana-f",
    criadoEm: "2025-06-11T14:00:00.000Z",
    curtidas: 8,
    curtidoPor: [],
    denuncias: 0,
    removido: false,
    replies: [
      {
        id: "r-dm-1a",
        postId: "s-dm-1",
        conteudo:
          "Eu sempre pergunto: 'O sr(a) vai tomar agora ou depois de comer?'. Explico que o remédio funciona melhor de estômago vazio. E para uso prolongado, recomendo suplementação de B12 sob orientação médica.",
        autorNome: "Carlos André",
        autorId: "carlos-a",
        criadoEm: "2025-06-11T15:20:00.000Z",
        curtidas: 6,
        curtidoPor: [],
        denuncias: 0,
        removido: false,
      },
    ],
    repliesCount: 1,
  },
  {
    id: "s-dm-2",
    categoriaId: "duvidas-medicamentos",
    titulo: "🤔 Interação: anticoncepcional + antibiótico — mito ou verdade?",
    conteudo:
      "Sempre surgem dúvidas sobre a interação entre anticoncepcionais orais e antibióticos (principalmente amoxicilina, rifampicina). A literatura mostra que a maioria dos antibióticos de amplo espectro NÃO reduz a eficácia contraceptiva — com exceção da rifampicina/rifabutina. Mesmo assim, muitas bulas trazem a ressalva. Qual a conduta de vocês?",
    autorNome: "Farmacêutica Elisa",
    autorId: "elisa-r",
    criadoEm: "2025-06-10T09:30:00.000Z",
    curtidas: 15,
    curtidoPor: [],
    denuncias: 0,
    removido: false,
    replies: [
      {
        id: "r-dm-2a",
        postId: "s-dm-2",
        conteudo:
          "Ótimo tópico! Na minha conduta, oriento usar método de barreira adicional durante o tratamento e por 7 dias após. Mesmo que o risco seja baixo, a segurança da paciente vem primeiro.",
        autorNome: "Paulo Henrique",
        autorId: "paulo-h",
        criadoEm: "2025-06-10T11:00:00.000Z",
        curtidas: 9,
        curtidoPor: [],
        denuncias: 0,
        removido: false,
      },
      {
        id: "r-dm-2b",
        postId: "s-dm-2",
        conteudo:
          "Complementando: a rifampicina é indutora enzimática potente (CYP3A4), daí a interação real. Para amoxicilina, o que ocorre é a alteração da flora intestinal, que pode reduzir a recirculação entero-hepática dos estrógenos — mas o impacto clínico é pequeno.",
        autorNome: "Dr. Marcos T.",
        autorId: "marcos-t",
        criadoEm: "2025-06-10T14:45:00.000Z",
        curtidas: 12,
        curtidoPor: [],
        denuncias: 0,
        removido: false,
      },
    ],
    repliesCount: 2,
  },
  // --- Atendimento ao Cliente ---
  {
    id: "s-ac-1",
    categoriaId: "atendimento-cliente",
    titulo: "🗣️ Como lidar com cliente irritado no balcão?",
    conteudo:
      "Situação clássica: cliente chega estressado porque o medicamento está em falta, o plano não cobriu ou demorou muito. Qual a abordagem de vocês? Eu uso a técnica do A.C.E.N.D.E.: Acolher, Compreender, Explicar, Negociar, Demonstrar e Encantar. Funciona bem!",
    autorNome: "Carla Mendes",
    autorId: "carla-m",
    criadoEm: "2025-06-09T16:00:00.000Z",
    curtidas: 10,
    curtidoPor: [],
    denuncias: 0,
    removido: false,
    replies: [
      {
        id: "r-ac-1a",
        postId: "s-ac-1",
        conteudo:
          "Essa técnica é excelente! Acrescento: nunca leve para o lado pessoal. O cliente não está bravo com você, está bravo com a situação. Manter a calma e a escuta ativa resolve 90%.",
        autorNome: "Roberto Lima",
        autorId: "roberto-l",
        criadoEm: "2025-06-09T17:30:00.000Z",
        curtidas: 7,
        curtidoPor: [],
        denuncias: 0,
        removido: false,
      },
    ],
    repliesCount: 1,
  },
  // --- Legislação e ANVISA ---
  {
    id: "s-lg-1",
    categoriaId: "legislacao-anvisa",
    titulo: "📋 RDC 44/2009 — Dispensação de medicamentos sem retenção de receita",
    conteudo:
      "Pessoal, uma dúvida que sempre aparece: a RDC 44/2009 dispõe sobre boas práticas farmacêuticas para o controle de antimicrobianos. A receita deve ser retida? Depende: a receita de antimicrobianos deve ser retida na farmácia/drogaria (a 2ª via), enquanto a 1ª via fica com o paciente. E para outros controlados (portaria 344/98), o procedimento varia conforme a lista. Querem que eu detalhe as listas?",
    autorNome: "Dr. Marcos T.",
    autorId: "marcos-t",
    criadoEm: "2025-06-08T08:00:00.000Z",
    curtidas: 20,
    curtidoPor: [],
    denuncias: 0,
    removido: false,
    replies: [
      {
        id: "r-lg-1a",
        postId: "s-lg-1",
        conteudo:
          "Detalha sim! É sempre confuso saber o que retem ou não. Listas A1, A2, A3, B1, B2... cada uma tem regra diferente.",
        autorNome: "Carla Mendes",
        autorId: "carla-m",
        criadoEm: "2025-06-08T10:00:00.000Z",
        curtidas: 4,
        curtidoPor: [],
        denuncias: 0,
        removido: false,
      },
      {
        id: "r-lg-1b",
        postId: "s-lg-1",
        conteudo:
          "RDC 44/2009 foi um marco! Mas vale lembrar que desde 2021 temos a RDC 469/2021 que atualizou algumas regras de prescrição eletrônica. Importante ficar de olho nas atualizações.",
        autorNome: "Farmacêutica Elisa",
        autorId: "elisa-r",
        criadoEm: "2025-06-08T14:00:00.000Z",
        curtidas: 8,
        curtidoPor: [],
        denuncias: 0,
        removido: false,
      },
    ],
    repliesCount: 2,
  },
  // --- Casos Clínicos e OSCE ---
  {
    id: "s-cc-1",
    categoriaId: "casos-clinicos",
    titulo: "🩺 OSCE: paciente com rinite alérgica — qual conduta?",
    conteudo:
      "Preparei um caso para treinarmos: Uma paciente de 32 anos chega ao balcão com queixa de espirros frequentes, coriza e coceira no nariz há 3 dias. Relata que já usou loratadina mas não melhorou totalmente. Não tem outras condições de saúde. Qual a conduta de vocês? O que perguntar? Que opções oferecer? Vamos simular!",
    autorNome: "Paulo Henrique",
    autorId: "paulo-h",
    criadoEm: "2025-06-07T11:00:00.000Z",
    curtidas: 14,
    curtidoPor: [],
    denuncias: 0,
    removido: false,
    replies: [
      {
        id: "r-cc-1a",
        postId: "s-cc-1",
        conteudo:
          "Primeiro eu perguntaria: há quanto tempo usa loratadina? Se for uso recente (1-2 dias), pode não ter feito efeito pleno ainda. Perguntaria também se tem secreção amarelada (sinal de infecção). Opções: trocar para desloratadina ou levocetirizina (2ª geração), associar corticóide nasal (triancinolona) se for recorrente.",
        autorNome: "Dra. Juliana F.",
        autorId: "juliana-f",
        criadoEm: "2025-06-07T14:00:00.000Z",
        curtidas: 6,
        curtidoPor: [],
        denuncias: 0,
        removido: false,
      },
    ],
    repliesCount: 1,
  },
  // --- Dermocosméticos e Perfumaria ---
  {
    id: "s-dc-1",
    categoriaId: "dermocosmeticos",
    titulo: "🧴 Protetor solar: o que mudou com os lançamentos de 2025?",
    conteudo:
      "Os lançamentos de protetores solares estão cada vez mais sofisticados! Texturas oil-free, toque seco, com cor, antioleosidade… E a grande novidade são os filtros solares biológicos (com enzimas reparadoras). Como vocês orientam a escolha? FPS 30 é suficiente para uso diário?",
    autorNome: "Carla Mendes",
    autorId: "carla-m",
    criadoEm: "2025-06-06T13:00:00.000Z",
    curtidas: 9,
    curtidoPor: [],
    denuncias: 0,
    removido: false,
    replies: [
      {
        id: "r-dc-1a",
        postId: "s-dc-1",
        conteudo:
          "Sempre oriento FPS 30 ou superior para uso diário. E o mais importante: aplicar 2mg/cm² (a famosa 'colher de chá' para o rosto) e reaplicar a cada 2h. Muita gente compra protetor mas aplica errado!",
        autorNome: "Farmacêutica Elisa",
        autorId: "elisa-r",
        criadoEm: "2025-06-06T15:30:00.000Z",
        curtidas: 11,
        curtidoPor: [],
        denuncias: 0,
        removido: false,
      },
    ],
    repliesCount: 1,
  },
  // --- Receitas e Controlados ---
  {
    id: "s-rc-1",
    categoriaId: "receitas-controlados",
    titulo: "📄 Notificação de Receita A (amarela): prazo de validade",
    conteudo:
      "Pessoal, reforçando: a Notificação de Receita A (amarela — para entorpecentes) tem validade de 30 dias a partir da emissão, e apenas para 1 (um) paciente. Já a Notificação de Receita B (azul — para psicotrópicos) vale 60 dias. E a receita de antimicrobianos (RDC 44) vale 10 dias. Erros comuns de preenchimento que invalidam a receita: data ilegível, rasuras e ausência de endereço do paciente.",
    autorNome: "Dr. Marcos T.",
    autorId: "marcos-t",
    criadoEm: "2025-06-05T08:30:00.000Z",
    curtidas: 18,
    curtidoPor: [],
    denuncias: 0,
    removido: false,
    replies: [
      {
        id: "r-rc-1a",
        postId: "s-rc-1",
        conteudo:
          "Excelente resumo! Outro ponto: a receita de controle especial (lista C1) vale 180 dias. Importante conferir também se o CRM do médico está legível e dentro da validade!",
        autorNome: "Paulo Henrique",
        autorId: "paulo-h",
        criadoEm: "2025-06-05T10:00:00.000Z",
        curtidas: 7,
        curtidoPor: [],
        denuncias: 0,
        removido: false,
      },
    ],
    repliesCount: 1,
  },
  // --- Carreira ---
  {
    id: "s-ca-1",
    categoriaId: "carreira",
    titulo: "🚀 Transição de carreira: do balcão para a gestão farmacêutica",
    conteudo:
      "Compartilhando minha experiência: comecei como atendente de balcão, depois me formei em farmácia e hoje sou gerente de uma rede. Pra quem quer crescer na carreira: invista em conhecimento de gestão (estoque, finanças, liderança), busque mentoria e esteja sempre atualizado. O mercado farmacêutico está aquecido! Alguém mais fez essa transição?",
    autorNome: "Roberto Lima",
    autorId: "roberto-l",
    criadoEm: "2025-06-04T09:00:00.000Z",
    curtidas: 22,
    curtidoPor: [],
    denuncias: 0,
    removido: false,
    replies: [
      {
        id: "r-ca-1a",
        postId: "s-ca-1",
        conteudo:
          "Que inspiração! Estou no 3º período de farmácia e trabalho como auxiliar. Uma dica: cursos de gestão de farmácia hospitalar x comercial — as competências são bem diferentes!",
        autorNome: "Carlos André",
        autorId: "carlos-a",
        criadoEm: "2025-06-04T11:00:00.000Z",
        curtidas: 5,
        curtidoPor: [],
        denuncias: 0,
        removido: false,
      },
    ],
    repliesCount: 1,
  },
  // --- Dicas de Estudo ---
  {
    id: "s-de-1",
    categoriaId: "dicas-estudo",
    titulo: "📚 Flashcards para farmacologia: meu método de estudo",
    conteudo:
      "Montei um baralho de flashcards no Anki com os principais fármacos por classe: anti-hipertensivos, antidiabéticos, AINEs, antibióticos. Para cada fármaco: mecanismo, posologia, reações adversas e interações. Estou disponibilizando o deck pra comunidade! Já usei pra revisar para a prova e funcionou muito bem. Alguém mais usa métodos de repetição espaçada?",
    autorNome: "Paulo Henrique",
    autorId: "paulo-h",
    criadoEm: "2025-06-03T10:00:00.000Z",
    curtidas: 25,
    curtidoPor: [],
    denuncias: 0,
    removido: false,
    replies: [
      {
        id: "r-de-1a",
        postId: "s-de-1",
        conteudo:
          "Usaranki com mapas mentais é a combinação mais poderosa! Eu complemento com questões de provas anteriores. Super interesse no deck!",
        autorNome: "Dra. Juliana F.",
        autorId: "juliana-f",
        criadoEm: "2025-06-03T14:00:00.000Z",
        curtidas: 10,
        curtidoPor: [],
        denuncias: 0,
        removido: false,
      },
    ],
    repliesCount: 1,
  },
  // --- Tecnologia e Inovação ---
  {
    id: "s-ti-1",
    categoriaId: "tecnologia-inovacao",
    titulo: "🤖 IA na farmácia: como usamos no SaúdeGPT",
    conteudo:
      "Vocês sabiam que a plataforma SaúdeGPT usa inteligência artificial para personalizar o aprendizado? Cada aula, cada questão é adaptada ao seu ritmo. E agora com o fórum, queremos usar IA para sugerir respostas para dúvidas frequentes e conectar alunos com temas similares. O que vocês acham — a IA pode substituir o farmacêutico no atendimento?",
    autorNome: AUTOR_SISTEMA.nome,
    autorId: AUTOR_SISTEMA.id,
    criadoEm: "2025-06-02T08:00:00.000Z",
    curtidas: 16,
    curtidoPor: [],
    denuncias: 0,
    removido: false,
    replies: [
      {
        id: "r-ti-1a",
        postId: "s-ti-1",
        conteudo:
          "IA é ferramenta, não substituta! O toque humano na farmácia — a empatia, o acolhimento — é insubstituível. Mas a IA pode otimizar o tempo e melhorar a precisão das orientações.",
        autorNome: "Farmacêutica Elisa",
        autorId: "elisa-r",
        criadoEm: "2025-06-02T10:00:00.000Z",
        curtidas: 14,
        curtidoPor: [],
        denuncias: 0,
        removido: false,
      },
    ],
    repliesCount: 1,
  },
  // --- Off-Topic ---
  {
    id: "s-ot-1",
    categoriaId: "off-topic",
    titulo: "☕ Café da farmácia: qual o melhor horário?",
    conteudo:
      "Sabemos que o ritmo da farmácia é puxado! Qual o melhor horário pra pausa do café? Manhã cedo antes do movimento pesado, ou tarde depois do almoço? E o cafezinho da farmácia — passado na hora ou de máquina? 😂",
    autorNome: "Carlos André",
    autorId: "carlos-a",
    criadoEm: "2025-06-01T07:00:00.000Z",
    curtidas: 30,
    curtidoPor: [],
    denuncias: 0,
    removido: false,
    replies: [
      {
        id: "r-ot-1a",
        postId: "s-ot-1",
        conteudo:
          "Café passado na hora, sem dúvida! E o melhor horário é 9h, antes do pico das 10h-12h. Mas confesso: tomo um às 15h também pra sobreviver 😅",
        autorNome: "Carla Mendes",
        autorId: "carla-m",
        criadoEm: "2025-06-01T09:00:00.000Z",
        curtidas: 8,
        curtidoPor: [],
        denuncias: 0,
        removido: false,
      },
      {
        id: "r-ot-1b",
        postId: "s-ot-1",
        conteudo:
          "Aqui na farmácia temos o 'café do conhecimento' — todo dia 10h reunimos a equipe por 10 min pra discutir um assunto rápido. Melhorou muito o entrosamento!",
        autorNome: "Roberto Lima",
        autorId: "roberto-l",
        criadoEm: "2025-06-01T10:00:00.000Z",
        curtidas: 12,
        curtidoPor: [],
        denuncias: 0,
        removido: false,
      },
    ],
    repliesCount: 2,
  },
  {
    id: "s-ot-2",
    categoriaId: "off-topic",
    titulo: "🎵 Música ambiente na farmácia — qual toca?",
    conteudo:
      "Qual estilo musical vocês acham melhor pra farmácia? Música ambiente relaxante, MPB, pop internacional? Aqui colocamos uma playlist de lo-fi e os clientes adoram. Dizem que dá vontade de ficar mais tempo na loja!",
    autorNome: "Paulo Henrique",
    autorId: "paulo-h",
    criadoEm: "2025-06-01T16:00:00.000Z",
    curtidas: 7,
    curtidoPor: [],
    denuncias: 0,
    removido: false,
    repliesCount: 0,
    replies: [],
  },
];
