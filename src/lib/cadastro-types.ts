/** Snapshot de progresso enviado pelo aluno para o painel administrativo. */
export interface ProgressoSnapshot {
  concluidas: string[];
  xp: number;
  notas: Record<string, number>;
  tentativasQuiz: Record<string, number>;
  tempoEstudoSegundos: number;
  diasEstudo: string[];
  missoesPontos: number;
  /** Aulas marcadas como favoritas (indicador de interesse do aluno). */
  favoritas?: string[];
  /** Última aula visitada (onde o aluno parou). */
  ultima?: { trilhaId: string; aulaId: string };
  ultimaSincronizacao?: string;
}

export type StatusCadastro = "pendente" | "aprovado" | "rejeitado";

/** Ficha cadastral completa do aluno (preenchida durante matrícula) */
export interface FichaCadastral {
  nome: string;
  email: string;
  whatsapp: string;
  cpf: string;
  rg: string;
  endereco: string;
  selfieUrl: string;
  motivacao: string;
  objetivo: string;
  horasDia: string;
  diasDisponiveis: string[];
}

export interface CadastroRegistro {
  id: string;
  /** ID da página no Notion (quando sincronizado). */
  notionPageId?: string;
  nome: string;
  email: string;
  telefone?: string;
  whatsapp?: string;
  cargo?: string;
  apelidoRanking?: string;
  status: StatusCadastro;
  criadoEm?: string;
  dataCadastro?: string;
  aprovadoEm?: string;
  nivel?: number;
  xp?: number;
  progresso: ProgressoSnapshot;
  // Campos estendidos (Supabase + ficha cadastral)
  cidade?: string;
  estado?: string;
  comoConheceu?: string;
  experiencia?: string;
  motivacao?: string;
  objetivo?: string;
  avatar?: string;
  selfieUrl?: string;
  cpf?: string;
  rg?: string;
  endereco?: string;
  horasDia?: string;
  diasDisponiveis?: string[];
}

export const PROGRESSO_VAZIO: ProgressoSnapshot = {
  concluidas: [],
  xp: 0,
  notas: {},
  tentativasQuiz: {},
  tempoEstudoSegundos: 0,
  diasEstudo: [],
  missoesPontos: 0,
};
