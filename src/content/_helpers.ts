import type { QuizQuestao } from "./types";

// Atalho para declarar questões de quiz de forma enxuta.
export function q(
  pergunta: string,
  opcoes: string[],
  correta: number,
  explicacao: string,
): QuizQuestao {
  return { pergunta, opcoes, correta, explicacao };
}
