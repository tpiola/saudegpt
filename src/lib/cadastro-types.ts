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

export interface CadastroRegistro {
  id: string;
  /** ID da página no Notion (quando sincronizado). */
  notionPageId?: string;
  nome: string;
  email: string;
  apelidoRanking?: string;
  status: StatusCadastro;
  criadoEm: string;
  aprovadoEm?: string;
  progresso: ProgressoSnapshot;
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
