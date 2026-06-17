/* ─── Dados para os jogos de balcão ─── */

/* ══════════════════════════════════════════════════════════
   SPEED CHALLENGE — Perguntas cronometradas com streak
   ══════════════════════════════════════════════════════════ */
export const questoesSpeed = [
  {
    id: "sc1",
    pergunta: "Qual a principal via de administração de um corticóide tópico?",
    opcoes: ["Oral", "Tópica (pele)", "Intravenosa", "Sublingual"],
    correta: 1,
    explicacao:
      "Corticóides tópicos são formulados para aplicação direta na pele, agindo localmente com mínima absorção sistêmica.",
  },
  {
    id: "sc2",
    pergunta: "Antibiótico de tarja vermelha sem retenção: o que fazer?",
    opcoes: [
      "Vender livremente",
      "Exigir receita, mas não reter a via",
      "Reter a receita obrigatoriamente",
      "Recusar atendimento",
    ],
    correta: 1,
    explicacao:
      "Tarja vermelha sem retenção exige receita válida, mas a via fica com o paciente. Apenas antimicrobianos controlados (RDC 20/2011) têm retenção.",
  },
  {
    id: "sc3",
    pergunta: "Cliente pede omeprazol 20mg sem receita. Conduta:",
    opcoes: [
      "Vender sem questionar",
      "Orientar sobre uso seguro e perguntar sintomas",
      "Recusar sempre",
      "Indicar outro medicamento",
    ],
    correta: 1,
    explicacao:
      "Omeprazol é MIP mas exige triagem: uso prolongado sem orientação pode mascarar sintomas graves como úlcera ou câncer gástrico.",
  },
  {
    id: "sc4",
    pergunta:
      "Qual o prazo de validade de uma receita de antimicrobiano (RDC 20/2011)?",
    opcoes: ["30 dias", "10 dias", "90 dias", "180 dias"],
    correta: 1,
    explicacao:
      "Receitas de antimicrobianos têm validade de 10 dias a partir da emissão, conforme RDC 20/2011 da ANVISA.",
  },
  {
    id: "sc5",
    pergunta:
      "Paciente hipertenso quer comprar diclofenaco. Qual a orientação?",
    opcoes: [
      "Vender sem restrição",
      "Alertar sobre risco cardiovascular e preferir paracetamol",
      "Dobrar a dose do anti-hipertensivo",
      "Ignorar a interação",
    ],
    correta: 1,
    explicacao:
      "AINEs como diclofenaco podem elevar a pressão arterial e antagonizar anti-hipertensivos. Preferir paracetamol ou orientar consulta médica.",
  },
  {
    id: "sc6",
    pergunta: "O que significa 'MIP' no contexto farmacêutico?",
    opcoes: [
      "Medicamento Isento de Prescrição",
      "Medicamento de Investigação Profunda",
      "Ministério da Indústria Farmacêutica",
      "Medicamento de Injeção Padrão",
    ],
    correta: 0,
    explicacao:
      "MIP = Medicamento Isento de Prescrição (OTC - Over The Counter). Podem ser dispensados sem receita, mas com orientação responsável.",
  },
  {
    id: "sc7",
    pergunta:
      "Cliente relata tosse seca há 5 dias, sem febre. Qual a melhor conduta?",
    opcoes: [
      "Antibiótico de amplo espectro",
      "Antitussígeno e orientação sobre sinais de alarme",
      "Encaminhar direto ao hospital",
      "Nada, pois é normal",
    ],
    correta: 1,
    explicacao:
      "Tosse seca sem sinais de alarme pode ser tratada com antitussígenos MIP. Orientar retorno se piorar ou surgir febre/ falta de ar.",
  },
  {
    id: "sc8",
    pergunta:
      "Qual medicamento abaixo NÃO pode ser vendido sem receita?",
    opcoes: [
      "Paracetamol 750mg",
      "Ibuprofeno 600mg",
      "Losartana 50mg",
      "Loratadina 10mg",
    ],
    correta: 2,
    explicacao:
      "Losartana é anti-hipertensivo de uso contínuo, exige receita médica. Os demais são MIP (dentro das dosagens permitidas).",
  },
  {
    id: "sc9",
    pergunta:
      "Receita de insulina NPH vencida há 15 dias. Pode dispensar?",
    opcoes: [
      "Sim, insulina tem validade estendida",
      "Não, receita vencida invalida a dispensação",
      "Sim, se for paciente conhecido",
      "Sim, desde que não seja fracionada",
    ],
    correta: 1,
    explicacao:
      "Toda receita vencida perde a validade legal para dispensação, inclusive de insulinas. Orientar retorno ao médico para nova prescrição.",
  },
  {
    id: "sc10",
    pergunta:
      "Cliente quer ingerir álcool enquanto usa metronidazol. O que dizer?",
    opcoes: [
      "Não há problema",
      "Evitar totalmente — risco de dissulfiram (náuseas, taquicardia, rubor)",
      "Apenas cerveja sem álcool",
      "Pode beber após 2h do comprimido",
    ],
    correta: 1,
    explicacao:
      "Metronidazol + álcool causa reação dissulfiram-like: náuseas intensas, vômitos, rubor facial e taquicardia. Contraindicado durante e até 48h após o término.",
  },
];

/* ══════════════════════════════════════════════════════════
   FATO OU FAKE — Afirmações para swipe
   ══════════════════════════════════════════════════════════ */
export const afirmacoesFatoOuFake = [
  {
    id: "ff1",
    texto:
      "Hidroxicloroquina é um medicamento aprovado para prevenção da COVID-19.",
    eFato: false,
    explicacao:
      "FAKE. Estudos robustos mostraram que hidroxicloroquina NÃO previne nem trata COVID-19. A ANVISA e OMS retiraram qualquer autorização de uso para essa finalidade.",
  },
  {
    id: "ff2",
    texto:
      "O uso de dipirona é contraindicado em crianças menores de 3 meses.",
    eFato: true,
    explicacao:
      "FATO. A dipirona é contraindicada em lactentes menores de 3 meses ou com peso inferior a 5 kg devido ao risco de hipotensão e reações hematológicas.",
  },
  {
    id: "ff3",
    texto:
      "Anti-inflamatórios como ibuprofeno podem ser tomados em jejum sem problema.",
    eFato: false,
    explicacao:
      "FAKE. AINEs como ibuprofeno devem ser tomados COM alimentos para reduzir o risco de irritação gástrica, úlcera e sangramento digestivo.",
  },
  {
    id: "ff4",
    texto:
      "A apresentação genérica de um medicamento tem a mesma substância ativa que o referência.",
    eFato: true,
    explicacao:
      "FATO. Medicamentos genéricos (Lei 9.787/99) têm a mesma substância ativa, dose e forma farmacêutica que o medicamento de referência, com bioequivalência comprovada pela ANVISA.",
  },
  {
    id: "ff5",
    texto:
      "Anticoncepcional hormonal perde o efeito se tomado com suco de laranja.",
    eFato: false,
    explicacao:
      "FAKE. Suco de laranja não interfere com anticoncepcionais hormonais. Quem interfere é a erva-de-são-joão (hipérico) e alguns antibióticos (rifampicina).",
  },
  {
    id: "ff6",
    texto:
      "Tarja preta significa que o medicamento pode causar dependência física ou psíquica.",
    eFato: true,
    explicacao:
      "FATO. A tarja preta (Portaria 344/98) identifica substâncias sujeitas a controle especial com potencial de abuso e dependência, como benzodiazepínicos e opioides.",
  },
  {
    id: "ff7",
    texto:
      "Vitamina C em altas doses (acima de 2g/dia) previne resfriados.",
    eFato: false,
    explicacao:
      "FAKE. Altas doses de vitamina C não previnem resfriados. Megadoses podem causar diarreia, náuseas e risco de cálculo renal. A dose máxima segura é 2g/dia.",
  },
  {
    id: "ff8",
    texto:
      "Pacientes com insuficiência renal não devem tomar anti-inflamatórios como naproxeno.",
    eFato: true,
    explicacao:
      "FATO. AINEs reduzem o fluxo sanguíneo renal e podem piorar a função dos rins. São contraindicados em insuficiência renal moderada a grave.",
  },
  {
    id: "ff9",
    texto:
      "É seguro armazenar medicamentos no banheiro, dentro do armário.",
    eFato: false,
    explicacao:
      "FAKE. Calor e umidade do banheiro degradam medicamentos. O ideal é armazenar em local fresco (15-30°C) e seco, fora do banheiro e da cozinha.",
  },
  {
    id: "ff10",
    texto:
      "Sinvastatina deve ser tomada à noite para maior eficácia.",
    eFato: true,
    explicacao:
      "FATO. A sinvastatina tem meia-vida curta e a síntese de colesterol é maior à noite. Tomar ao deitar aumenta a eficácia na redução do LDL.",
  },
];

/* ══════════════════════════════════════════════════════════
   MODO SOBREVIVÊNCIA — 3 vidas, dificuldade progressiva
   ══════════════════════════════════════════════════════════ */
export const questoesSobrevivencia = [
  {
    id: "sv1",
    pergunta: "O que significa a sigla ANVISA?",
    opcoes: [
      "Agência Nacional de Vigilância Sanitária",
      "Associação Nacional de Vigilância Industrial",
      "Autoridade Nacional de Vendas e Inspeção",
      "Agência de Normas e Vigilância Sanitária Internacional",
    ],
    correta: 0,
    explicacao: "ANVISA é a Agência Nacional de Vigilância Sanitária, responsável pela regulação de medicamentos no Brasil.",
    nivel: "facil" as const,
  },
  {
    id: "sv2",
    pergunta: "Qual a temperatura ideal de armazenamento da maioria dos medicamentos?",
    opcoes: [
      "Entre -10°C e 0°C",
      "Entre 15°C e 30°C",
      "Acima de 40°C",
      "Qualquer temperatura",
    ],
    correta: 1,
    explicacao: "A maioria dos medicamentos deve ser armazenada em temperatura ambiente controlada entre 15°C e 30°C.",
    nivel: "facil" as const,
  },
  {
    id: "sv3",
    pergunta: "Receita de controle especial (tarja preta) tem validade de:",
    opcoes: ["10 dias", "30 dias", "60 dias", "90 dias"],
    correta: 1,
    explicacao: "Receitas de tarja preta (Portaria 344/98) têm validade de 30 dias a partir da emissão.",
    nivel: "medio" as const,
  },
  {
    id: "sv4",
    pergunta:
      "Cliente idoso (75 anos) quer comprar um AINE para dor nas articulações. Qual a preocupação principal?",
    opcoes: [
      "Custo do medicamento",
      "Risco de sangramento gastrointestinal e piora da função renal",
      "Cor do comprimido",
      "Quantidade de comprimidos por caixa",
    ],
    correta: 1,
    explicacao: "Idosos têm maior risco de sangramento GI e IRA com AINEs. Preferir paracetamol e orientar avaliação médica.",
    nivel: "medio" as const,
  },
  {
    id: "sv5",
    pergunta:
      "Qual a interação medicamentosa grave entre varfarina e antibióticos?",
    opcoes: [
      "Redução do efeito anticoagulante",
      "Aumento do risco de sangramento",
      "Não há interação",
      "Aumento da pressão arterial",
    ],
    correta: 1,
    explicacao: "Antibióticos (especialmente cefalosporinas, macrolídeos e quinolonas) potencializam a varfarina, aumentando risco de sangramento. Monitorar INR.",
    nivel: "medio" as const,
  },
  {
    id: "sv6",
    pergunta:
      "Paciente em uso de lítio apresenta náuseas, tremor fino e confusão mental. Qual a hipótese principal?",
    opcoes: [
      "Intoxicação por lítio",
      "Reação alérgica comum",
      "Efeito colateral esperado",
      "Gripe comum",
    ],
    correta: 0,
    explicacao: "Náuseas + tremor fino + confusão são sinais clássicos de intoxicação por lítio. Solicitar litemia imediatamente.",
    nivel: "dificil" as const,
  },
  {
    id: "sv7",
    pergunta:
      "Gestante no primeiro trimestre chega com prescrição de isotretinoína para acne. Qual a conduta?",
    opcoes: [
      "Dispensar normalmente",
      "Não dispensar — isotretinoína é teratogênica",
      "Reduzir a dose",
      "Trocar por outro medicamento sem orientação",
    ],
    correta: 1,
    explicacao: "Isotretinoína é altamente teratogênica (categoria X). É ABSOLUTAMENTE contraindicada na gestação. Encaminhar ao médico.",
    nivel: "dificil" as const,
  },
  {
    id: "sv8",
    pergunta:
      "Qual a conduta ao identificar erro de dispensação (medicamento trocado) após o cliente sair da farmácia?",
    opcoes: [
      "Ignorar se não houver reclamação",
      "Registrar no sistema, contatar o cliente imediatamente e notificar ao farmacêutico",
      "Esperar o cliente perceber",
      "Descartar a ocorrência",
    ],
    correta: 1,
    explicacao: "Erro de dispensação é um incidente grave. Deve ser registrado, o cliente contatado imediatamente e o farmacêutico responsável notificado (RDC 44/2009).",
    nivel: "dificil" as const,
  },
  {
    id: "sv9",
    pergunta:
      "Paciente pede sibutramina. Qual a documentação exigida?",
    opcoes: [
      "Receita simples",
      "Receita de controle especial (B2) em 2 vias",
      "Notificação de Receita (receita azul)",
      "Não precisa de receita",
    ],
    correta: 1,
    explicacao: "Sibutramina (anorexígeno) exige Receita de Controle Especial (formulário B2) em 2 vias, com validade de 30 dias.",
    nivel: "dificil" as const,
  },
  {
    id: "sv10",
    pergunta:
      "Após dispensar um medicamento, você nota que a receita estava falsificada. O que fazer?",
    opcoes: [
      "Nada, já foi vendido",
      "Comunicar imediatamente à vigilância sanitária e registrar ocorrência",
      "Anotar no sistema e seguir",
      "Apenas conversar com o cliente",
    ],
    correta: 1,
    explicacao: "Suspeita de receita falsificada: reter o documento, não dispensar, comunicar à Vigilância Sanitária local e registrar a ocorrência.",
    nivel: "dificil" as const,
  },
];

/* ══════════════════════════════════════════════════════════
   CENÁRIO BALCÃO — Narrativa com escolhas
   ══════════════════════════════════════════════════════════ */
export const cenarioBalcao = {
  titulo: "Atendimento no Balcão",
  cenaInicial: "chegada-cliente",
  cenas: {
    "chegada-cliente": {
      id: "chegada-cliente",
      narrador: "Balcão da farmácia",
      personagem: "Seu José (cliente)",
      descricao:
        "São 10h da manhã. Seu José, 68 anos, aparentando cansaço, chega ao balcão com uma receita amassada na mão. Ele parece um pouco confuso. 'Moço/a, o médico me passou esses remédios mas eu não entendi direito como tomar. E tô com uma dor no peito que vai e volta.'",
      escolhas: [
        {
          texto:
            "Perguntar detalhadamente sobre a dor no peito e chamar o farmacêutico",
          destinoId: "sintoma-grave",
          feedback:
            "Excelente! Dor no peito em idoso pode ser angina ou infarto. Você acertou em envolver o farmacêutico imediatamente.",
          acao: "certo",
        },
        {
          texto:
            "Ignorar a dor e focar só nos medicamentos da receita",
          destinoId: "ignorou-sintoma",
          feedback:
            "Ignorar uma queixa de dor torácica é muito perigoso. Sempre investigue sinais de alarme antes de focar na receita.",
          acao: "errado",
        },
        {
          texto:
            "Explicar rapidamente os medicamentos e despachar o cliente",
          destinoId: "despachou-cliente",
          feedback:
            "Atendimento apressado pode esconder problemas graves. Um cliente com dor no peito merece atenção total.",
          acao: "errado",
        },
      ],
    },
    "sintoma-grave": {
      id: "sintoma-grave",
      narrador: "Farmacêutica Dra. Carla",
      personagem: "Dra. Carla (farmacêutica)",
      descricao:
        "A farmacêutica Dra. Carla agradece sua iniciativa e assume o atendimento. Ela pergunta sobre o histórico de Seu José: ele é hipertenso e diabético, fuma há 40 anos e está com a pressão descontrolada. A receita traz: Enalapril 10mg, Metformina 850mg e sinvastatina 20mg. 'A dor no peito merece avaliação médica hoje mesmo', diz Dra. Carla. Ela orienta Seu José a ir à UPA e sugere que você prepare os medicamentos para quando ele voltar com alta. 'Quer assumir a orientação dos medicamentos?'",
      escolhas: [
        {
          texto:
            "Sim! Explicar cada medicamento e verificar se ele entendeu",
          destinoId: "orientou-correto",
          feedback:
            "Perfeito! Você mostra segurança e cuidado. Orientação farmacêutica de qualidade reduz erros de medicação.",
          acao: "certo",
        },
        {
          texto:
            "Só entregar os medicamentos — ele que leia a bula",
          destinoId: "sem-orientacao",
          feedback:
            "Entregar medicamentos sem orientação é uma oportunidade perdida de cuidado. Muitos pacientes idosos têm dificuldade com a bula.",
          acao: "errado",
        },
      ],
      xp: 15,
    },
    "orientou-correto": {
      id: "orientou-correto",
      narrador: "Final do atendimento",
      personagem: "Dra. Carla (farmacêutica)",
      descricao:
        "Você explicou que o Enalapril controla a pressão e deve ser tomado de manhã; a Metformina durante as refeições para evitar desconforto; e a sinvastatina à noite. Mostrou como usar o organizador semanal de doses. Seu José saiu agradecido e mais seguro. Dra. Carla comenta: 'Ótimo trabalho! Você identificou um sinal de alarme, envolveu o profissional certo e fez uma orientação de excelência. Isso é atendimento de alto nível.'",
      escolhas: [
        {
          texto:
            "Finalizar atendimento — missão cumprida! 🎉",
          destinoId: "final-feliz",
          feedback: "",
          acao: "certo",
        },
      ],
      eFinal: true,
      conclusao:
        "Parabéns! Você completou o cenário com excelência: identificou um sinal de alarme (dor torácica), envolveu a farmacêutica e fez uma orientação completa. Seu José saiu mais seguro e a farmácia cumpriu seu papel de cuidado à saúde.",
      xp: 25,
    },
    "ignorou-sintoma": {
      id: "ignorou-sintoma",
      narrador: "Consequência",
      personagem: "Narrador",
      descricao:
        "Você ignorou a queixa de dor no peito e focou apenas nos medicamentos. Seu José sai da farmácia sem orientação adequada. Duas horas depois, ele dá entrada no pronto-socorro com infarto agudo do miocárdio. A família entra em contato com a farmácia questionando o atendimento.",
      escolhas: [
        {
          texto: "Entender o erro e aprender com ele",
          destinoId: "final-aprendizado",
          feedback:
            "Todo erro é uma oportunidade de aprendizado. Nunca ignore sintomas de alarme: dor no peito, falta de ar súbita, desmaio. Nestes casos: pare, chame o farmacêutico, oriente ida ao médico.",
          acao: "errado",
        },
      ],
      eFinal: true,
      conclusao:
        "Infelizmente, ignorar a dor no peito foi um erro grave. Em atendimentos futuros, lembre-se: todo cliente que menciona sintomas de alarme merece atenção imediata do farmacêutico e encaminhamento médico.",
      xp: 5,
    },
    "despachou-cliente": {
      id: "despachou-cliente",
      narrador: "Consequência",
      personagem: "Narrador",
      descricao:
        "O atendimento foi rápido, mas superficial. Seu José voltou à farmácia no dia seguinte: 'Moço/a, eu não entendi nada. Tomei os comprimidos todos juntos e passei mal a noite inteira. E a dor no peito voltou mais forte.' Além do erro de orientação, a dor torácica não foi investigada.",
      escolhas: [
        {
          texto: "Assumir o erro e oferecer atendimento completo agora",
          destinoId: "final-aprendizado",
          feedback:
            "Assumir o erro é profissional. A pressa no balcão nunca deve comprometer a segurança do paciente. Na dúvida, sempre chame o farmacêutico.",
          acao: "errado",
        },
      ],
      eFinal: true,
      conclusao:
        "Atendimentos apressados geram riscos. Sempre reserve tempo para ouvir o cliente e orientar cada medicamento. A pressa é inimiga do cuidado seguro.",
      xp: 5,
    },
    "sem-orientacao": {
      id: "sem-orientacao",
      narrador: "Consequência",
      personagem: "Dra. Carla",
      descricao:
        "Dra. Carla percebe que você entregou os medicamentos sem orientação. Ela chama você para uma conversa: 'O cliente é idoso, tem três medicamentos novos e saiu da UPA confuso. Orientar cada um é tão importante quanto dispensar. Vamos fazer juntos da próxima vez?'",
      escolhas: [
        {
          texto: "Aceitar o feedback e se comprometer a melhorar",
          destinoId: "final-feedback",
          feedback:
            "Feedback é presente! Aceitar críticas construtivas é o que separa profissionais medianos dos excelentes.",
          acao: "certo",
        },
      ],
      eFinal: true,
      conclusao:
        "Você errou ao não orientar, mas acertou ao receber o feedback com humildade. Lembre-se: orientação farmacêutica reduz em até 50% os erros de medicação em idosos. Faça sempre!",
      xp: 10,
    },
    "final-feliz": {
      id: "final-feliz",
      narrador: "Fim",
      personagem: "Narrador",
      descricao: "",
      escolhas: [],
      eFinal: true,
      conclusao:
        "Parabéns! Você completou o cenário com excelência.",
      xp: 0,
    },
    "final-aprendizado": {
      id: "final-aprendizado",
      narrador: "Fim",
      personagem: "Narrador",
      descricao: "",
      escolhas: [],
      eFinal: true,
      conclusao: "Aprendizado concluído. Cada erro é um degrau para a excelência.",
      xp: 0,
    },
    "final-feedback": {
      id: "final-feedback",
      narrador: "Fim",
      personagem: "Narrador",
      descricao: "",
      escolhas: [],
      eFinal: true,
      conclusao: "Feedbacks são combustível do crescimento profissional.",
      xp: 0,
    },
  },
};
