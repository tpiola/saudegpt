// Tipos da camada de conteúdo pedagógico da plataforma.

export type Nivel = "basico" | "intermediario" | "avancado";

export interface QuizQuestao {
  pergunta: string;
  opcoes: string[];
  correta: number; // índice da opção correta
  explicacao: string;
}

export interface Comparativo {
  titulo: string;
  itens: { nome: string; quando: string }[];
}

export interface Simulacao {
  cliente: string; // contexto/fala do cliente
  falaBoa: string; // atendimento consultivo recomendado
  falaEvitar: string; // antipadrão a evitar
}

export interface Aula {
  id: string;
  titulo: string;
  duracaoMin: number;
  nivel: Nivel;
  resumo: string;
  resumoExecutivo: string[];
  comparativo?: Comparativo;
  simulacao?: Simulacao;
  checklist: string[];
  quandoChamarFarmaceutico: string[];
  errosComuns: string[];
  quiz: QuizQuestao[];
  xp: number;
}

export interface Modulo {
  id: string;
  titulo: string;
  descricao: string;
  aulas: Aula[];
}

export interface Trilha {
  id: string;
  numero: number;
  titulo: string;
  subtitulo: string;
  descricao: string;
  nivelFaixa: string;
  icone: string;
  modulos: Modulo[];
}
