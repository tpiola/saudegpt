/**
 * Streak Freeze — proteção de sequência de estudos (Duolingo-style)
 * 
 * O aluno ganha 1 freeze a cada 7 dias de streak.
 * Pode usar 1 freeze por dia para não perder a streak.
 */

const CHAVE_FREEZES = "fap-streak-freezes";
const CHAVE_USADO = "fap-streak-freeze-usado";

export interface StreakFreezeState {
  disponiveis: number;
  usadosHoje: boolean;
  dataUltimoUso: string | null;
}

function hojeISO(): string {
  return new Date().toISOString().split("T")[0];
}

export function carregarFreezes(): StreakFreezeState {
  try {
    const raw = localStorage.getItem(CHAVE_FREEZES);
    return raw ? JSON.parse(raw) : { disponiveis: 0, usadosHoje: false, dataUltimoUso: null };
  } catch {
    return { disponiveis: 0, usadosHoje: false, dataUltimoUso: null };
  }
}

function salvarFreezes(state: StreakFreezeState) {
  localStorage.setItem(CHAVE_FREEZES, JSON.stringify(state));
}

/**
 * Ganha um freeze (chamado quando streak atinge 7, 14, 21... dias).
 */
export function ganharFreeze() {
  const state = carregarFreezes();
  state.disponiveis = Math.min(state.disponiveis + 1, 7); // max 7 freezes
  salvarFreezes(state);
}

/**
 * Usa um freeze para proteger a streak de hoje.
 * Retorna true se conseguiu usar, false se não tem freezes.
 */
export function usarFreeze(): boolean {
  const state = carregarFreezes();
  const hoje = hojeISO();

  if (state.usadosHoje || state.disponiveis <= 0) return false;

  state.disponiveis -= 1;
  state.usadosHoje = true;
  state.dataUltimoUso = hoje;
  salvarFreezes(state);
  return true;
}

/**
 * Verifica se o freeze já foi usado hoje.
 */
export function freezeUsadoHoje(): boolean {
  const state = carregarFreezes();
  const hoje = hojeISO();
  return state.usadosHoje && state.dataUltimoUso === hoje;
}

/**
 * Reseta o uso diário (chamado todo dia à meia-noite).
 */
export function resetarUsoDiario() {
  const state = carregarFreezes();
  const hoje = hojeISO();
  if (state.dataUltimoUso !== hoje) {
    state.usadosHoje = false;
    salvarFreezes(state);
  }
}
