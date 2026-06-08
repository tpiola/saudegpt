/**
 * SM-2 Spaced Repetition Algorithm
 * Baseado no algoritmo SuperMemo SM-2 de Piotr Wozniak
 * 
 * Cada item de revisão tem:
 * - repeticoes: número de vezes que acertou consecutivamente
 * - intervalo: dias até a próxima revisão
 * - facilidade: fator de facilidade (mínimo 1.3)
 * - proximaRevisao: data da próxima revisão (ISO string)
 */

export interface ItemRevisao {
  aulaId: string;
  trilhaId: string;
  repeticoes: number;
  intervalo: number;
  facilidade: number;
  proximaRevisao: string; // ISO date
  ultimaResposta: "correto" | "incorreto" | null;
}

const CHAVE = "fap-spaced-repetition";

function hojeISO(): string {
  return new Date().toISOString().split("T")[0];
}

export function carregarRevisoes(): ItemRevisao[] {
  try {
    const raw = localStorage.getItem(CHAVE);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function salvarRevisoes(itens: ItemRevisao[]) {
  localStorage.setItem(CHAVE, JSON.stringify(itens));
}

/**
 * Processa uma resposta do quiz usando SM-2.
 * - quality: 0 (errou) a 5 (perfeito)
 * - Se quality < 3: reinicia repeticoes para 0
 * - Se quality >= 3: aumenta intervalo
 */
export function processarResposta(
  trilhaId: string,
  aulaId: string,
  quality: number // 0-5
): ItemRevisao {
  const revisoes = carregarRevisoes();
  let item = revisoes.find((r) => r.aulaId === aulaId && r.trilhaId === trilhaId);

  if (!item) {
    item = {
      aulaId,
      trilhaId,
      repeticoes: 0,
      intervalo: 1,
      facilidade: 2.5,
      proximaRevisao: "",
      ultimaResposta: null,
    };
    revisoes.push(item);
  }

  if (quality >= 3) {
    // Resposta correta
    item.ultimaResposta = "correto";
    if (item.repeticoes === 0) {
      item.intervalo = 1;
    } else if (item.repeticoes === 1) {
      item.intervalo = 6;
    } else {
      item.intervalo = Math.round(item.intervalo * item.facilidade);
    }
    item.repeticoes += 1;
  } else {
    // Resposta incorreta — reinicia
    item.ultimaResposta = "incorreto";
    item.repeticoes = 0;
    item.intervalo = 1;
  }

  // Atualiza facilidade (mínimo 1.3)
  item.facilidade = Math.max(
    1.3,
    item.facilidade + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  // Próxima revisão
  const prox = new Date();
  prox.setDate(prox.getDate() + item.intervalo);
  item.proximaRevisao = prox.toISOString().split("T")[0];

  salvarRevisoes(revisoes);
  return item;
}

/**
 * Retorna aulas que precisam ser revisadas hoje.
 */
export function revisoesDoDia(): ItemRevisao[] {
  const hoje = hojeISO();
  return carregarRevisoes().filter(
    (r) => r.proximaRevisao <= hoje && r.repeticoes > 0
  );
}

/**
 * Retorna aulas pendentes de revisão (nunca revisadas ou com baixa facilidade).
 */
export function aulasParaRevisaoPrioritaria(): ItemRevisao[] {
  return carregarRevisoes()
    .filter((r) => r.facilidade < 2.0 || r.ultimaResposta === "incorreto")
    .sort((a, b) => a.facilidade - b.facilidade)
    .slice(0, 5);
}

/**
 * Estatísticas de revisão para o dashboard.
 */
export function estatisticasRevisao() {
  const revisoes = carregarRevisoes();
  const hoje = hojeISO();
  return {
    total: revisoes.length,
    pendentesHoje: revisoes.filter((r) => r.proximaRevisao <= hoje).length,
    dominadas: revisoes.filter((r) => r.repeticoes >= 5).length,
    precisamPratica: revisoes.filter((r) => r.facilidade < 2.0).length,
  };
}
