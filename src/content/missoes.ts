// Missões de atendimento (simulador de balcão) e indicadores do hub Power BI.

export interface OpcaoMissao {
  texto: string;
  pontos: number; // pontuação por triagem/segurança/ética
  feedback: string;
}

export interface Missao {
  id: string;
  titulo: string;
  contexto: string;
  cliente: string;
  nivel: "basico" | "intermediario" | "avancado";
  trilhaRelacionada: string;
  opcoes: OpcaoMissao[];
}

export const missoes: Missao[] = [
  {
    id: "rinite",
    titulo: "Cliente com rinite",
    contexto: "Sazonalidade e antialérgicos",
    cliente:
      "“Estou com o nariz entupido e espirrando muito faz dias, queria algo forte para resolver de vez.”",
    nivel: "intermediario",
    trilhaRelacionada: "medicamentos",
    opcoes: [
      {
        texto: "Indicar o descongestionante nasal mais potente para uso contínuo.",
        pontos: 0,
        feedback: "Descongestionantes nasais podem causar efeito rebote com uso prolongado. Evite.",
      },
      {
        texto:
          "Fazer triagem (tempo, febre, falta de ar), orientar antialérgico adequado e alertar sobre sonolência; encaminhar ao farmacêutico se persistir.",
        pontos: 10,
        feedback: "Triagem + orientação segura + encaminhamento: conduta ideal.",
      },
      {
        texto: "Dizer que é só alergia e vender qualquer coisa rápido.",
        pontos: 2,
        feedback: "Faltou triagem e cuidado com sinais de alerta.",
      },
    ],
  },
  {
    id: "mae-primeira-viagem",
    titulo: "Mãe de primeira viagem",
    contexto: "Universo infantil e acolhimento",
    cliente: "“Meu bebê está com a pele assada e eu não sei o que comprar, estou perdida.”",
    nivel: "basico",
    trilhaRelacionada: "perfumaria",
    opcoes: [
      {
        texto: "Acolher, indicar pomada de barreira (óxido de zinco) e lenços sem álcool, e orientar sinais de alerta.",
        pontos: 10,
        feedback: "Acolhimento + indicação correta + orientação de alerta. Excelente.",
      },
      {
        texto: "Mandar levar o bebê ao pronto-socorro imediatamente.",
        pontos: 3,
        feedback: "Assadura leve não é emergência; reserve o encaminhamento para sinais de gravidade.",
      },
      {
        texto: "Indicar talco perfumado em grande quantidade.",
        pontos: 0,
        feedback: "Não é a conduta recomendada para a pele do bebê.",
      },
    ],
  },
  {
    id: "barba-sensivel",
    titulo: "Homem com pele sensível para barbear",
    contexto: "Cuidados masculinos",
    cliente: "“Toda vez que faço a barba fico com a pele ardendo e vermelha.”",
    nivel: "basico",
    trilhaRelacionada: "perfumaria",
    opcoes: [
      {
        texto: "Investigar a rotina, sugerir lâmina nova, gel sem álcool e pós-barba calmante.",
        pontos: 10,
        feedback: "Investigação + produto calmante sem álcool: conduta ideal.",
      },
      {
        texto: "Indicar aftershave com álcool e perfume forte.",
        pontos: 0,
        feedback: "Álcool agrava a irritação. Evite.",
      },
    ],
  },
  {
    id: "generico-similar",
    titulo: "Paciente confuso entre genérico e similar",
    contexto: "Classificação de medicamentos",
    cliente: "“O genérico é mais fraco que o original? Tenho medo de não fazer efeito.”",
    nivel: "intermediario",
    trilhaRelacionada: "medicamentos",
    opcoes: [
      {
        texto: "Explicar que o genérico tem o mesmo princípio ativo e é bioequivalente; encaminhar a troca ao farmacêutico.",
        pontos: 10,
        feedback: "Informação correta e encaminhamento da substituição: perfeito.",
      },
      {
        texto: "Confirmar que sim, o genérico é mais fraco.",
        pontos: 0,
        feedback: "Informação incorreta: genérico é bioequivalente ao referência.",
      },
    ],
  },
  {
    id: "receita-retencao",
    titulo: "Receita com retenção",
    contexto: "Receituários e controlados",
    cliente: "Cliente apresenta receita de antibiótico e quer levar sem deixar a via.",
    nivel: "avancado",
    trilhaRelacionada: "medicamentos",
    opcoes: [
      {
        texto: "Conferir validade e dados, reter a via conforme exigido e encaminhar ao farmacêutico.",
        pontos: 10,
        feedback: "Conferência + retenção + encaminhamento: conduta correta e legal.",
      },
      {
        texto: "Vender sem reter a via para agilizar.",
        pontos: 0,
        feedback: "Antimicrobianos exigem retenção/registro (referência atual: RDC 471/2021).",
      },
    ],
  },
  {
    id: "glp1-enjoo",
    titulo: "Cliente com enjoo ao iniciar caneta injetável",
    contexto: "GLP-1 e adesão",
    cliente: "“Comecei a caneta e estou enjoado, será que paro?”",
    nivel: "avancado",
    trilhaRelacionada: "medicamentos",
    opcoes: [
      {
        texto: "Acolher, explicar que efeitos gastrointestinais iniciais são comuns e encaminhar ao farmacêutico para ajuste/orientação.",
        pontos: 10,
        feedback: "Acolhimento + informação + encaminhamento clínico: ideal.",
      },
      {
        texto: "Mandar dobrar a dose para 'acostumar mais rápido'.",
        pontos: 0,
        feedback: "Jamais oriente alteração de dose; encaminhe ao farmacêutico.",
      },
    ],
  },
  {
    id: "idoso-horarios",
    titulo: "Idoso preocupado em esquecer horários",
    contexto: "Adesão ao tratamento",
    cliente: "“Tomo vários remédios e sempre esqueço algum horário.”",
    nivel: "intermediario",
    trilhaRelacionada: "medicamentos",
    opcoes: [
      {
        texto: "Sugerir organizador semanal, associar doses a refeições e lembretes; oferecer apoio do farmacêutico.",
        pontos: 10,
        feedback: "Plano de adesão prático e humano: excelente.",
      },
      {
        texto: "Dizer para tomar tudo de uma vez para não esquecer.",
        pontos: 0,
        feedback: "Conduta insegura; horários existem por razões farmacológicas.",
      },
    ],
  },
];

export interface Indicador {
  id: string;
  nome: string;
  descricao: string;
  comoLer: string;
  valorDemo: string;
  tendencia: "up" | "down" | "flat";
}

// Indicadores demonstrativos do hub "Power BI para atendentes".
export const indicadores: Indicador[] = [
  { id: "faturamento", nome: "Faturamento", descricao: "Receita total no período.", comoLer: "Volume de vendas; analise junto ao mix.", valorDemo: "R$ 184,2 mil", tendencia: "up" },
  { id: "ticket", nome: "Ticket médio", descricao: "Valor médio por atendimento.", comoLer: "Cresce com cross-sell ético e mix.", valorDemo: "R$ 47,80", tendencia: "up" },
  { id: "conversao", nome: "Conversão", descricao: "% de quem entra e compra.", comoLer: "Mede oportunidades aproveitadas no balcão.", valorDemo: "63%", tendencia: "flat" },
  { id: "abc", nome: "Curva ABC", descricao: "Itens que mais pesam no resultado.", comoLer: "Classe A: poucos itens, muito impacto.", valorDemo: "A: 22% itens / 71% receita", tendencia: "flat" },
  { id: "ruptura", nome: "Ruptura", descricao: "Venda perdida por falta de estoque.", comoLer: "Quanto menor, melhor; impacta NPS.", valorDemo: "4,1%", tendencia: "down" },
  { id: "nps", nome: "NPS", descricao: "Satisfação e recomendação.", comoLer: "Acima de 70 é excelente no varejo de saúde.", valorDemo: "78", tendencia: "up" },
  { id: "adesao", nome: "Aderência terapêutica", descricao: "Recompra no tempo certo.", comoLer: "Liga dados a saúde e continuidade do tratamento.", valorDemo: "69%", tendencia: "up" },
  { id: "servicos", nome: "Serviços realizados", descricao: "Vacinas, aferições e orientações.", comoLer: "Mede a farmácia como ponto de cuidado.", valorDemo: "412/mês", tendencia: "up" },
];
