// ═══════════════════════════════════════════════════════════════
// CONTEÚDO — Módulo: Leitura Rápida do Paciente
// Gerado via GPT-4o — Módulo Avançado para Atendentes de Farmácia
// ═══════════════════════════════════════════════════════════════

export interface PadraoPensamento {
  titulo: string;
  descricao: string;
  sinaisBalcao: string[];
  comoResponder: string[];
  oQueDizer: string;
  oQueEvitar: string;
}

export interface ExercicioPratico {
  titulo: string;
  contexto: string;
  falaCliente: string;
  pergunta: string;
  respostaEsperada: string;
  oQueObservar: string;
}

export interface ReferenciaCurricular {
  area: string;
  descricao: string;
}

export interface ConteudoLeituraRapida {
  objetivo: string;
  principiosEticos: {
    introducao: string;
    fraseObrigatoria: string;
    diretrizes: string[];
  };
  frameworkABC: {
    introducao: string;
    afeto: {
      titulo: string;
      descricao: string;
      sinais: string[];
      comoResponder: string[];
    };
    comportamento: {
      titulo: string;
      descricao: string;
      sinais: string[];
      comoResponder: string[];
    };
    cognicao: {
      titulo: string;
      descricao: string;
      sinais: string[];
      comoResponder: string[];
    };
  };
  padroesPensamento: PadraoPensamento[];
  exerciciosPraticos: ExercicioPratico[];
  checklist: {
    titulo: string;
    passos: string[];
  };
  referencias: {
    titulo: string;
    itens: ReferenciaCurricular[];
  };
}

export const conteudoLeituraRapida: ConteudoLeituraRapida = {
  objetivo:
    "O módulo 'Leitura Rápida do Paciente' tem como objetivo capacitar os atendentes de farmácia a identificar rapidamente o estado emocional, comportamental e cognitivo dos clientes em apenas 30 segundos. Essa habilidade é crucial para adaptar a comunicação de forma eficaz, garantindo que o cliente se sinta acolhido e compreendido, enquanto o atendente se mantém dentro dos limites éticos e profissionais. Ao final deste módulo, você estará apto a observar sinais sutis que podem indicar o estado mental do cliente, permitindo que você ofereça um atendimento mais personalizado e eficaz, sempre encaminhando ao farmacêutico quando necessário.",
  principiosEticos: {
    introducao:
      "O atendente de farmácia deve atuar dentro de um escopo bem definido, focando na orientação básica e no encaminhamento ao farmacêutico para questões mais complexas ou para a avaliação clínica. É essencial respeitar a privacidade do cliente e agir com empatia e profissionalismo.",
    fraseObrigatoria:
      "Com base no que você me conta, recomendo que o farmacêutico avalie pessoalmente",
    diretrizes: [
      "Mantenha sempre a confidencialidade das informações dos clientes.",
      "Nunca ofereça diagnósticos ou prescreva medicamentos.",
      "Encaminhe ao farmacêutico se o cliente apresentar sinais de angústia ou dúvidas complexas.",
      "Seja sempre respeitoso e empático, reconhecendo as limitações do seu papel.",
      "Mantenha-se atualizado sobre as políticas de saúde e diretrizes éticas.",
      "Evite julgamentos pessoais ou preconceitos nas interações com os clientes.",
    ],
  },
  frameworkABC: {
    introducao:
      "O framework ABC é uma ferramenta adaptada para o ambiente da farmácia que ajuda a avaliar rapidamente o estado do cliente. Ele se concentra em três áreas principais: Afeto (estado emocional), Comportamento (ações e atitudes) e Cognição (pensamentos e crenças). Ao dominar esses três pilares, você consegue fazer uma leitura completa do paciente em segundos.",
    afeto: {
      titulo: "A — Afeto (Estado Emocional)",
      descricao:
        "Avaliar o estado emocional do paciente pode ajudar a entender melhor suas necessidades e preocupações. Observe expressões faciais, tom de voz e postura. Um cliente ansioso, triste ou irritado precisa de uma abordagem diferente de um cliente calmo e confiante.",
      sinais: [
        "Expressão facial tensa ou preocupada",
        "Tom de voz hesitante ou trêmulo",
        "Postura corporal fechada ou retraída",
        "Olhar fixo ou evitativo",
        "Respiração ofegante ou suspiros frequentes",
        "Mãos tremendo ou inquietação nas pernas",
      ],
      comoResponder: [
        "Use um tom de voz calmo e acolhedor",
        "Faça contato visual de forma respeitosa",
        "Ofereça um sorriso gentil para transmitir segurança",
        "Use frases que demonstrem empatia e compreensão",
        "Dê espaço para o cliente expressar suas emoções sem pressa",
      ],
    },
    comportamento: {
      titulo: "B — Comportamento (Ações e Atitudes)",
      descricao:
        "Observar o comportamento do cliente pode fornecer pistas sobre seu estado mental e como ele está lidando com a situação. Gestos, postura e padrões de fala revelam muito sobre o nível de compreensão e abertura para orientações.",
      sinais: [
        "Movimentos agitados ou repetitivos",
        "Falta de atenção ou distração constante",
        "Interrupção frequente na fala",
        "Respostas evasivas ou inconsistentes",
        "Olhar para os lados sem foco",
        "Dificuldade em ficar parado no balcão",
      ],
      comoResponder: [
        "Dê tempo para o cliente processar a informação",
        "Evite interromper enquanto ele fala",
        "Reforce as informações importantes de forma clara",
        "Ofereça ajuda para esclarecer dúvidas",
        "Use gestos suaves e postura aberta para transmitir confiança",
      ],
    },
    cognicao: {
      titulo: "C — Cognição (Pensamentos e Crenças)",
      descricao:
        "Identificar os padrões de pensamento do cliente pode ajudar a adaptar sua abordagem e garantir que a comunicação seja eficaz. Muitas vezes o cliente chega com ideias pré-concebidas ou informações incorretas que precisam ser gentilmente corrigidas.",
      sinais: [
        "Perguntas repetitivas sobre o mesmo tópico",
        "Confusão sobre informações básicas",
        "Crenças errôneas sobre medicamentos",
        "Preocupações excessivas com efeitos colaterais",
        "Falas que indicam desinformação ('vi na internet que...')",
        "Dificuldade em entender termos médicos simples",
      ],
      comoResponder: [
        "Forneça informações claras e concisas",
        "Use exemplos práticos para explicar conceitos",
        "Corrija gentilmente concepções erradas",
        "Tranquilize o cliente sobre preocupações comuns",
        "Ofereça materiais de apoio escritos para consulta em casa",
      ],
    },
  },
  padroesPensamento: [
    {
      titulo: "Medo do desconhecido",
      descricao:
        "O medo do desconhecido se manifesta quando o cliente está preocupado com novos medicamentos, diagnósticos desconhecidos ou procedimentos que nunca experimentou. Esse medo pode paralisar o cliente ou fazê-lo buscar informações em fontes não confiáveis. O papel do atendente é acolher essa insegurança e direcionar para a orientação profissional correta.",
      sinaisBalcao: [
        "Nunca tomei isso antes, é seguro?",
        "Estou com medo dos efeitos colaterais.",
        "Será que isso vai mesmo funcionar?",
        "Li na internet que esse remédio faz mal.",
      ],
      comoResponder: [
        "Escute atentamente as preocupações do cliente sem minimizá-las.",
        "Explique como o medicamento funciona de forma simples e acessível.",
        "Reforce a segurança e eficácia com base em orientações do farmacêutico.",
        "Encaminhe ao farmacêutico para uma explicação mais detalhada.",
      ],
      oQueDizer:
        "Entendo que você esteja preocupado, é natural ter dúvidas sobre algo novo. Esse medicamento é utilizado há anos com segurança. Vou chamar o farmacêutico para explicar melhor como ele age no seu organismo.",
      oQueEvitar:
        "Não se preocupe, é só tomar e vai ficar tudo bem. (minimiza a preocupação legítima do cliente)",
    },
    {
      titulo: "Negação / Minimização",
      descricao:
        "A negação ou minimização ocorre quando o cliente tenta reduzir a importância de um sintoma, diagnóstico ou tratamento. É um mecanismo de defesa comum que pode atrasar o cuidado adequado. O atendente precisa validar sem reforçar a negação, orientando com delicadeza sobre a importância do tratamento.",
      sinaisBalcao: [
        "Ah, não é nada demais.",
        "Eu não acho que preciso disso.",
        "Isso é só um resfriadinho.",
        "É exagero do médico, como sempre.",
      ],
      comoResponder: [
        "Valide os sentimentos do cliente sem julgar.",
        "Explique a importância de seguir as orientações médicas de forma positiva.",
        "Ofereça informações sobre os riscos de não tratar adequadamente.",
        "Encaminhe ao farmacêutico para uma avaliação mais detalhada.",
      ],
      oQueDizer:
        "Entendo que você se sinta assim, e é bom que esteja se cuidando. O médico passou esse tratamento justamente para prevenir que algo simples se torne mais sério. Que tal conversarmos com o farmacêutico para esclarecer melhor?",
      oQueEvitar:
        "Você está errado, isso é grave, precisa tratar. (abordagem confrontadora que gera resistência)",
    },
    {
      titulo: "Sobrecarga de Informação",
      descricao:
        "A sobrecarga de informação acontece quando o cliente recebe muitas instruções de uma só vez — seja do médico, da bula ou de familiares — e não consegue processar tudo adequadamente. Isso gera confusão, ansiedade e pode levar a erros no tratamento. O atendente precisa simplificar e priorizar.",
      sinaisBalcao: [
        "Isso é muita informação para processar.",
        "Não sei por onde começar.",
        "Estou confuso com tudo isso.",
        "O médico explicou, mas não entendi direito.",
      ],
      comoResponder: [
        "Divida a informação em partes menores e mais gerenciáveis.",
        "Pergunte ao cliente qual é a maior dúvida dele no momento.",
        "Reitere informações importantes de forma clara e concisa.",
        "Ofereça folhetos ou materiais escritos que o cliente possa levar.",
      ],
      oQueDizer:
        "Vamos por partes. Primeiro, vamos ver como tomar esse medicamento — quantas vezes ao dia e qual a dose. Depois que isso estiver claro, a gente olha os outros. Pode ser?",
      oQueEvitar:
        "É simples, é só seguir as instruções da bula. (desconsidera a dificuldade real do cliente)",
    },
    {
      titulo: "Baixo Letramento em Saúde / Crenças Culturais",
      descricao:
        "Clientes com baixo letramento em saúde têm dificuldade em compreender informações médicas, bulas e orientações técnicas. Além disso, crenças culturais e familiares sobre saúde podem influenciar fortemente suas decisões. O respeito a essas crenças é fundamental, mas deve vir acompanhado de informações claras e baseadas em evidências.",
      sinaisBalcao: [
        "Não sei ler direito essas instruções.",
        "Na minha família, usamos remédios naturais.",
        "Não acredito em medicamentos industriais.",
        "Prefiro tomar chá que esse remédio.",
      ],
      comoResponder: [
        "Adapte a linguagem para ser mais acessível — palavras simples e frases curtas.",
        "Respeite as crenças culturais, mas ofereça informações baseadas em evidências.",
        "Use analogias simples para explicar conceitos complexos.",
        "Encaminhe ao farmacêutico para uma abordagem mais personalizada.",
      ],
      oQueDizer:
        "Respeito completamente a sua forma de cuidar da saúde. Vou explicar de um jeito simples como este medicamento age e, juntos, podemos ver a melhor forma de encaixá-lo na sua rotina. Que tal conversarmos com o farmacêutico?",
      oQueEvitar:
        "Isso que você acredita não tem fundamento científico. (desrespeita a vivência e crenças do cliente)",
    },
  ],
  exerciciosPraticos: [
    {
      titulo: "Cliente Preocupado com Novo Diagnóstico",
      contexto:
        "Uma senhora de aproximadamente 60 anos chega à farmácia com uma receita recém-emitida. Ela está visivelmente tensa, aperta a receita com as duas mãos e olha para os lados com frequência.",
      falaCliente:
        "Doutor falou que meu colesterol está alto. Eu nunca tomei remédio pra isso... será que é perigoso?",
      pergunta:
        "Usando o framework ABC, o que o atendente deve observar e como deve responder?",
      respostaEsperada:
        "O atendente deve primeiro acolher a preocupação (Afeto — ansiedade visível), validar o sentimento com empatia, explicar de forma simples que o medicamento é seguro e amplamente utilizado, e encaminhar ao farmacêutico para orientação completa sobre horários, alimentação e acompanhamento. A frase obrigatória deve ser usada ao final.",
      oQueObservar:
        "Afeto: Tensão nas mãos, olhar evitativo, fala hesitante. Comportamento: Aperta a receita, movimentos rígidos. Cognição: Preocupação com o novo, possíveis crenças sobre medicamentos de uso contínuo.",
    },
    {
      titulo: "Cliente em Negação sobre Sintomas",
      contexto:
        "Um homem de 45 anos chega para comprar um anti-inflamatório sem receita, mas ao conversar, ele menciona que sente dores no peito ao fazer esforço há algumas semanas. Ele ri enquanto fala e minimiza os sintomas.",
      falaCliente:
        "É bobagem, deve ser má postura. Essas dores no peito são frescura de quem não malha. Só quero um anti-inflamatório pra passar.",
      pergunta:
        "Como o atendente deve abordar esse caso, considerando os sinais de alerta e a negação do cliente?",
      respostaEsperada:
        "O atendente nunca deve vender o anti-inflamatório sem antes abordar os sinais de alerta. Deve validar a percepção do cliente (Afeto — negação como mecanismo de defesa), mas explicar com seriedade e delicadeza que dores no peito ao esforço merecem avaliação médica. Deve chamar o farmacêutico imediatamente, que poderá orientar sobre a necessidade de avaliação cardiológica.",
      oQueObservar:
        "Afeto: Riso como defesa, tom casual que contrasta com a gravidade. Comportamento: Busca automedicação, evita aprofundar o assunto. Cognição: Negação de sintomas potencialmente graves. ALERTA: Dor no peito é sinal de alerta absoluto.",
    },
    {
      titulo: "Mãe de Primeira Viagem com Sobrecarga de Informação",
      contexto:
        "Uma jovem mãe chega ao balcão segurando um bebê de 3 meses e uma sacola com três medicamentos diferentes: uma suspensão antibiótica, um antitérmico e um probiótico. Ela parece exausta e confusa.",
      falaCliente:
        "O pediatra passou esses três remédios para minha filha, mas eu já não sei mais o que é de manhã e o que é de noite. Estou perdida, são muitas informações.",
      pergunta:
        "Qual a melhor abordagem do atendente para ajudar essa mãe sem sobrecarregá-la ainda mais?",
      respostaEsperada:
        "O atendente deve primeiro acolher o cansaço da mãe com empatia (Afeto — exaustão visível). Depois, deve organizar as informações de forma visual e simples: separar cada medicamento, explicar UM de cada vez (horário, dose, cuidados), usar a própria receita marcar com caneta os horários, e oferecer uma tabela escrita simples. Deve encaminhar ao farmacêutico para confirmar a orientação da suspensão reconstituída e o prazo de validade após preparo.",
      oQueObservar:
        "Afeto: Cansaço evidente, olheiras, tom de voz cansado. Comportamento: Segura o bebê com dificuldade, olha para os medicamentos sem saber por onde começar. Cognição: Sobrecarga de informação — incapaz de processar tudo de uma vez.",
    },
  ],
  checklist: {
    titulo: "Checklist Rápido (30 segundos) para usar no Balcão",
    passos: [
      "Observe a expressão facial e o tom de voz do cliente — eles revelam o estado emocional.",
      "Identifique comportamentos como agitação, distração ou inquietação.",
      "Escute ativamente para compreender preocupações e dúvidas reais.",
      "Use linguagem simples e clara — adapte ao nível de entendimento do cliente.",
      "Avalie se há sinais de alerta que exigem encaminhamento imediato ao farmacêutico.",
      "Ofereça material escrito quando perceber sobrecarga de informação.",
      "Mantenha postura acolhedora: olho no olho, sorriso gentil, sem pressa.",
      "Sempre encerre com a frase de encaminhamento quando o caso fugir do seu escopo.",
    ],
  },
  referencias: {
    titulo: "Referências Curriculares",
    itens: [
      {
        area: "Técnico em Farmácia",
        descricao:
          "Competências de comunicação e atendimento ao cliente em farmácias, conforme diretrizes do Catálogo Nacional de Cursos Técnicos (CNCT) — MEC. Habilidade de identificar necessidades do paciente e orientar dentro do escopo de atuação do atendente.",
      },
      {
        area: "Psicologia Aplicada à Saúde",
        descricao:
          "Estudos sobre comunicação interpessoal, escuta ativa e compreensão emocional no atendimento ao paciente. Baseado nos princípios da Psicologia da Saúde (OMS) e nas técnicas de entrevista motivacional e empatia no cuidado.",
      },
      {
        area: "Legislação e Ética (CRF)",
        descricao:
          "Normas do Conselho Federal e Regionais de Farmácia sobre o exercício profissional, limites de atuação de atendentes e técnicos, e a obrigatoriedade da supervisão farmacêutica em todos os atos de dispensação e orientação.",
      },
    ],
  },
};
