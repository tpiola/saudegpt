// Mini-jogos educativos do balcão (client-side).

export interface QuestaoJogo {
  id: string;
  pergunta: string;
  opcoes: string[];
  correta: number;
  explicacao: string;
}

export const jogoTarjas: QuestaoJogo[] = [
  {
    id: "t1",
    pergunta: "Medicamento de tarja preta exige:",
    opcoes: [
      "Venda livre",
      "Retenção obrigatória de receita",
      "Apenas orientação verbal",
      "Receita opcional",
    ],
    correta: 1,
    explicacao: "Tarja preta: controle especial com retenção obrigatória.",
  },
  {
    id: "t2",
    pergunta: "MIP/OTC (sem tarja) pode ser orientado no balcão com:",
    opcoes: [
      "Triagem responsável e limites do autocuidado",
      "Qualquer dose",
      "Sem perguntas",
      "Substituição de receita",
    ],
    correta: 0,
    explicacao:
      "MIP exige orientação e triagem; não substitui avaliação clínica quando necessário.",
  },
  {
    id: "t3",
    pergunta: "Tarja vermelha sem retenção:",
    opcoes: [
      "Não precisa de receita",
      "Exige receita, mas não retém a via",
      "É venda livre",
      "Só para veterinários",
    ],
    correta: 1,
    explicacao: "Tarja vermelha simples: receita obrigatória, sem retenção da via.",
  },
];

export const jogoReceita: QuestaoJogo[] = [
  {
    id: "r1",
    pergunta: "Receita de antibiótico vencida. Conduta:",
    opcoes: [
      "Dispensar mesmo assim",
      "Não dispensar; orientar nova consulta",
      "Dobrar a dose",
      "Vender genérico sem receita",
    ],
    correta: 1,
    explicacao: "Receita vencida não autoriza dispensação de antimicrobiano.",
  },
  {
    id: "r2",
    pergunta: "Cliente quer GLP-1 sem receita:",
    opcoes: [
      "Vender se tiver estoque",
      "Não dispensar; encaminhar ao farmacêutico (retenção desde 2025)",
      "Dar amostra grátis",
      "Ignorar",
    ],
    correta: 1,
    explicacao: "GLP-1 da IN 360/2025 exige retenção de receita válida.",
  },
  {
    id: "r3",
    pergunta: "Receita ilegível no nome do paciente:",
    opcoes: [
      "Adivinhar o nome",
      "Chamar o farmacêutico e não dispensar até esclarecer",
      "Copiar de outra receita",
      "Dispensar rápido",
    ],
    correta: 1,
    explicacao: "Ilegibilidade ou dados incompletos exigem esclarecimento com o farmacêutico.",
  },
];

export const jogoSintomaCategoria: QuestaoJogo[] = [
  {
    id: "s1",
    pergunta: "Cliente com tosse com catarro há 3 dias, sem febre:",
    opcoes: [
      "Antitussígeno para secar",
      "Expectorante/mucolítico com orientação",
      "Antibiótico de venda livre",
      "Não perguntar nada",
    ],
    correta: 1,
    explicacao:
      "Tosse produtiva pede expectorante e triagem; antibiótico exige receita e critério médico.",
  },
  {
    id: "s2",
    pergunta: "Idoso com dor no peito ao esforço pede analgésico forte:",
    opcoes: [
      "Vender o mais forte da prateleira",
      "Encaminhar imediatamente ao farmacêutico/médico",
      "Indicar vitamina C",
      "Ignorar",
    ],
    correta: 1,
    explicacao: "Dor torácica é sinal de alerta — encaminhamento urgente.",
  },
  {
    id: "s3",
    pergunta: "Mãe busca antitérmico para bebê de 2 meses com febre:",
    opcoes: [
      "Dipirona adulto fracionada",
      "Não orientar dose sem farmacêutico/pediatra",
      "Qualquer MIP serve",
      "Aspirina",
    ],
    correta: 1,
    explicacao: "Lactentes exigem avaliação profissional — não improvisar dose.",
  },
];

export const jogosMeta = {
  titulo: "Jogos de balcão",
  descricao:
    "Pratique leitura de tarjas, conferência de receitas e associação sintoma → conduta segura.",
};
