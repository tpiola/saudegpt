// ═══════════════════════════════════════════════════════════════
// SOVEREIGN XP SYSTEM — Níveis, XP, Badges
// Persistência: localStorage
// ═══════════════════════════════════════════════════════════════

/* ─── Constantes ─── */

const STORAGE_KEY_XP = "sov_xp";
const STORAGE_KEY_BADGES = "sov_badges";
const STORAGE_KEY_LEVEL_HISTORY = "sov_level_history";

/* ─── Tipos ─── */

export enum NivelSoberano {
  Iniciante = 0,
  Praticante = 100,
  Estrategista = 300,
  Especialista = 700,
  Mestre = 1500,
  Elite = 3000,
  Guardiao = 6000,
  Soberano = 12000,
}

export interface NivelInfo {
  nome: string;
  xpMinimo: number;
  icone: string;
  cor: string;
  descricao: string;
}

export type CategoriaXp = "acerto" | "completar" | "streak" | "velocidade";

export interface Badge {
  id: string;
  nome: string;
  descricao: string;
  icone: string;
  condicao: (stats: XpStats) => boolean;
}

export interface XpStats {
  totalXp: number;
  nivel: NivelSoberano;
  badges: string[];
  streak: number;
  maiorStreak: number;
  totalAcertos: number;
  totalQuestoes: number;
  jogosCompletos: number;
  sessoesDia: string[];
}

export interface LevelUpEvent {
  nivelAntigo: number;
  nivelNovo: number;
  nomeAntigo: string;
  nomeNovo: string;
}

/* ─── Níveis config ─── */

export const NIVEIS: NivelInfo[] = [
  { nome: "Iniciante", xpMinimo: 0, icone: "🌱", cor: "#8b92a5", descricao: "Primeiros passos na jornada" },
  { nome: "Praticante", xpMinimo: 100, icone: "⚗️", cor: "#22d3ee", descricao: "Começando a dominar o ofício" },
  { nome: "Estrategista", xpMinimo: 300, icone: "🧠", cor: "#3b82f6", descricao: "Pensamento estratégico no balcão" },
  { nome: "Especialista", xpMinimo: 700, icone: "🎯", cor: "#8b5cf6", descricao: "Precisão e conhecimento técnico" },
  { nome: "Mestre", xpMinimo: 1500, icone: "⚡", cor: "#f59e0b", descricao: "Mestre do atendimento farmacêutico" },
  { nome: "Elite", xpMinimo: 3000, icone: "💎", cor: "#D4A843", descricao: "Elite dos atendentes de farmácia" },
  { nome: "Guardião", xpMinimo: 6000, icone: "🛡️", cor: "#10b981", descricao: "Guardião da saúde e segurança" },
  { nome: "Soberano", xpMinimo: 12000, icone: "👑", cor: "#D4A843", descricao: "Nível máximo — Soberano do balcão" },
];

/* ─── Badges ─── */

export const BADGES: Badge[] = [
  {
    id: "primeira-missao",
    nome: "Primeira Missão",
    descricao: "Complete seu primeiro jogo",
    icone: "🎖️",
    condicao: (s) => s.jogosCompletos >= 1,
  },
  {
    id: "sequencia-7-dias",
    nome: "Sequência de 7 Dias",
    descricao: "Estude por 7 dias consecutivos",
    icone: "🔥",
    condicao: (s) => s.maiorStreak >= 7,
  },
  {
    id: "precisao-80",
    nome: "Precisão 80%",
    descricao: "Mantenha 80% de acertos no total",
    icone: "🎯",
    condicao: (s) =>
      s.totalQuestoes > 0 && s.totalAcertos / s.totalQuestoes >= 0.8,
  },
  {
    id: "veterano",
    nome: "Veterano",
    descricao: "Acumule 1000 XP total",
    icone: "⚡",
    condicao: (s) => s.totalXp >= 1000,
  },
  {
    id: "mestre-dos-jogos",
    nome: "Mestre dos Jogos",
    descricao: "Complete 10 jogos",
    icone: "🏆",
    condicao: (s) => s.jogosCompletos >= 10,
  },
  {
    id: "estudante-dedicado",
    nome: "Estudante Dedicado",
    descricao: "Responda 100 questões no total",
    icone: "📚",
    condicao: (s) => s.totalQuestoes >= 100,
  },
  {
    id: "expert-em-farmacia",
    nome: "Expert em Farmácia",
    descricao: "Acumule 5000 XP total",
    icone: "💎",
    condicao: (s) => s.totalXp >= 5000,
  },
  {
    id: "lenda-viva",
    nome: "Lenda Viva",
    descricao: "Acumule 10000 XP total",
    icone: "👑",
    condicao: (s) => s.totalXp >= 10000,
  },
];

/* ─── Helpers internos ─── */

function hojeISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function carregarStats(): XpStats {
  if (typeof window === "undefined") {
    return {
      totalXp: 0,
      nivel: NivelSoberano.Iniciante,
      badges: [],
      streak: 0,
      maiorStreak: 0,
      totalAcertos: 0,
      totalQuestoes: 0,
      jogosCompletos: 0,
      sessoesDia: [],
    };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY_XP);
    if (!raw) return getDefaultStats();
    return JSON.parse(raw) as XpStats;
  } catch {
    return getDefaultStats();
  }
}

function getDefaultStats(): XpStats {
  return {
    totalXp: 0,
    nivel: NivelSoberano.Iniciante,
    badges: [],
    streak: 0,
    maiorStreak: 0,
    totalAcertos: 0,
    totalQuestoes: 0,
    jogosCompletos: 0,
    sessoesDia: [],
  };
}

function salvarStats(stats: XpStats): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY_XP, JSON.stringify(stats));
}

/* ─── Funções de Notificação (substituíveis via setOnLevelUp) ─── */

let onLevelUpCallback: ((event: LevelUpEvent) => void) | null = null;

/** Define callback chamado quando o jogador sobe de nível */
export function setOnLevelUp(cb: (event: LevelUpEvent) => void): void {
  onLevelUpCallback = cb;
}

/* ─── Função Principal: addXp ─── */

/**
 * Adiciona XP ao jogador e retorna evento de level-up (se houver).
 * @param amount Quantidade de XP a adicionar
 * @param category Categoria da ação (acerto, completar, streak, velocidade)
 * @returns LevelUpEvent | null se subiu de nível, ou null
 */
export function addXp(
  amount: number,
  _category?: CategoriaXp,
): LevelUpEvent | null {
  if (amount <= 0) return null;

  const stats = carregarStats();
  const nivelAntes = obterNivelAtual(stats.totalXp);

  stats.totalXp += amount;

  // Atualizar streak de dias
  const hoje = hojeISO();
  if (!stats.sessoesDia.includes(hoje)) {
    stats.sessoesDia.push(hoje);
    stats.sessoesDia.sort();
    // Calcular streak de dias
    stats.streak = calcularStreakDias(stats.sessoesDia);
    if (stats.streak > stats.maiorStreak) {
      stats.maiorStreak = stats.streak;
    }
  }

  // Verificar level up
  const nivelDepois = obterNivelAtual(stats.totalXp);
  let levelUpEvent: LevelUpEvent | null = null;

  if (nivelDepois > nivelAntes) {
    const nomeAntigo = NIVEIS.find((n) => n.xpMinimo <= stats.totalXp && obterNivelAtual(stats.totalXp - amount) === NIVEIS.indexOf(n))?.nome ?? "Iniciante";
    const nomeNovo = NIVEIS[nivelDepois].nome;
    levelUpEvent = {
      nivelAntigo: nivelAntes,
      nivelNovo: nivelDepois,
      nomeAntigo,
      nomeNovo,
    };
    // Salvar histórico de level up
    salvarLevelHistory(levelUpEvent);
  }

  stats.nivel = nivelDepois;

  // Verificar badges
  const badgesAnteriores = carregarBadges();
  const novasBadges: string[] = [];
  for (const badge of BADGES) {
    if (!badgesAnteriores.includes(badge.id) && badge.condicao(stats)) {
      novasBadges.push(badge.id);
    }
  }
  if (novasBadges.length > 0) {
    const todasBadges = [...badgesAnteriores, ...novasBadges];
    salvarBadges(todasBadges);
    stats.badges = todasBadges;
  } else {
    stats.badges = badgesAnteriores;
  }

  salvarStats(stats);

  // Notificar level up
  if (levelUpEvent && onLevelUpCallback) {
    // Usar setTimeout para não bloquear a UI
    setTimeout(() => onLevelUpCallback!(levelUpEvent!), 0);
  }

  return levelUpEvent;
}

/**
 * Registra um acerto de questão + bônus de streak opcional
 */
export function addXpAcerto(
  streakAtual: number,
  tempoRestante?: number,
  tempoMaximo?: number,
): LevelUpEvent | null {
  let xp = 10; // base

  // Dificuldade baseada no streak (multiplicador 1x a 3x)
  const multStreak = Math.min(streakAtual, 10);
  if (multStreak > 1) {
    xp += multStreak * 5; // +5 por nível de streak
  }

  // Bônus de velocidade (até +50% se respondeu rapidamente)
  if (tempoRestante != null && tempoMaximo != null && tempoMaximo > 0) {
    const pctRapido = tempoRestante / tempoMaximo;
    if (pctRapido > 0.5) {
      xp += Math.round(10 * pctRapido);
    }
  }

  const stats = carregarStats();
  stats.totalAcertos += 1;
  stats.totalQuestoes += 1;
  salvarStats(stats);

  return addXp(xp, "acerto");
}

/**
 * Registra uma tentativa (mesmo que errada) para estatísticas
 */
export function addXpTentativa(): void {
  const stats = carregarStats();
  stats.totalQuestoes += 1;
  salvarStats(stats);
}

/**
 * Registra um jogo completo
 */
export function addXpCompletarJogo(totalQuestoes: number, acertos: number): LevelUpEvent | null {
  let xp = 50; // base por completar

  // Bônus de performance
  const pctAcerto = totalQuestoes > 0 ? acertos / totalQuestoes : 0;
  if (pctAcerto >= 0.9) xp += 40;
  else if (pctAcerto >= 0.7) xp += 20;
  else if (pctAcerto >= 0.5) xp += 10;

  const stats = carregarStats();
  stats.jogosCompletos += 1;
  salvarStats(stats);

  return addXp(xp, "completar");
}

/* ─── Consultas ─── */

/** Retorna XP total acumulado */
export function getXp(): number {
  return carregarStats().totalXp;
}

/** Retorna o índice do nível atual (0-7) */
export function getLevel(): number {
  return obterNivelAtual(getXp());
}

/** Retorna informações do nível atual */
export function getLevelInfo(): NivelInfo {
  const level = getLevel();
  return NIVEIS[level];
}

/** Retorna progresso para o próximo nível (0-100) */
export function getLevelProgress(): { atual: number; proximo: number; progresso: number; xpNoNivel: number; xpProximoNivel: number } {
  const xp = getXp();
  const level = getLevel();
  const nivelAtual = NIVEIS[level];
  const nivelProximo = level < NIVEIS.length - 1 ? NIVEIS[level + 1] : null;

  if (!nivelProximo) {
    // Nível máximo
    return {
      atual: xp,
      proximo: nivelAtual.xpMinimo,
      progresso: 100,
      xpNoNivel: xp - nivelAtual.xpMinimo,
      xpProximoNivel: 0,
    };
  }

  const xpNoNivel = xp - nivelAtual.xpMinimo;
  const xpNecessario = nivelProximo.xpMinimo - nivelAtual.xpMinimo;
  const progresso = Math.min(100, Math.round((xpNoNivel / xpNecessario) * 100));

  return {
    atual: xp,
    proximo: nivelProximo.xpMinimo,
    progresso,
    xpNoNivel,
    xpProximoNivel: xpNecessario,
  };
}

/** Retorna lista de badges desbloqueadas */
export function getBadges(): string[] {
  return carregarBadges();
}

/** Retorna lista de badges com detalhes (desbloqueadas ou não) */
export function getAllBadgesWithStatus(): { id: string; nome: string; descricao: string; icone: string; desbloqueada: boolean }[] {
  const desbloqueadas = getBadges();
  return BADGES.map((b) => ({
    id: b.id,
    nome: b.nome,
    descricao: b.descricao,
    icone: b.icone,
    desbloqueada: desbloqueadas.includes(b.id),
  }));
}

/** Retorna stats completos para debug */
export function getStats(): XpStats {
  return carregarStats();
}

/* ─── Level Up History ─── */

function salvarLevelHistory(event: LevelUpEvent): void {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LEVEL_HISTORY);
    const history: LevelUpEvent[] = raw ? JSON.parse(raw) : [];
    history.push(event);
    localStorage.setItem(STORAGE_KEY_LEVEL_HISTORY, JSON.stringify(history));
  } catch {
    // ignore
  }
}

export function getLevelHistory(): LevelUpEvent[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LEVEL_HISTORY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/* ─── Badges storage ─── */

function carregarBadges(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_BADGES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function salvarBadges(badges: string[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY_BADGES, JSON.stringify(badges));
}

/* ─── Internals ─── */

function obterNivelAtual(xp: number): number {
  for (let i = NIVEIS.length - 1; i >= 0; i--) {
    if (xp >= NIVEIS[i].xpMinimo) return i;
  }
  return 0;
}

function calcularStreakDias(dias: string[]): number {
  if (dias.length === 0) return 0;
  const hoje = hojeISO();
  const set = new Set(dias);
  let streak = 0;
  const d = new Date();
  // Se não estudou hoje, começa de ontem
  if (!set.has(hoje)) {
    d.setDate(d.getDate() - 1);
  }
  while (true) {
    const key = d.toISOString().slice(0, 10);
    if (!set.has(key)) break;
    streak += 1;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}

/* ─── Reset (apenas para debug/teste) ─── */

export function resetXp(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY_XP);
  localStorage.removeItem(STORAGE_KEY_BADGES);
  localStorage.removeItem(STORAGE_KEY_LEVEL_HISTORY);
}
