"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { listarAulas, trilhas } from "@/content/curriculo";
import { calcularStreak, hojeISO } from "@/lib/progress-extended";
import type { AulaLocalizada } from "@/content/curriculo";

// Chave composta que identifica uma aula globalmente.
export function chaveAula(trilhaId: string, aulaId: string) {
  return `${trilhaId}/${aulaId}`;
}

interface EstadoProgresso {
  concluidas: string[];
  xp: number;
  notas: Record<string, number>;
  tentativasQuiz: Record<string, number>;
  tempoEstudoSegundos: number;
  favoritas: string[];
  ultima?: { trilhaId: string; aulaId: string };
  missoesPontos: number;
  diasEstudo: string[]; // YYYY-MM-DD
}

const PADRAO: EstadoProgresso = {
  concluidas: [],
  xp: 0,
  notas: {},
  tentativasQuiz: {},
  tempoEstudoSegundos: 0,
  favoritas: [],
  missoesPontos: 0,
  diasEstudo: [],
};

const CHAVE = "fap-progresso";

interface ProgressoContexto extends EstadoProgresso {
  concluirAula: (trilhaId: string, aulaId: string, xp: number, nota?: number) => void;
  registrarVisita: (trilhaId: string, aulaId: string) => void;
  alternarFavorita: (trilhaId: string, aulaId: string) => void;
  adicionarPontosMissao: (pontos: number) => void;
  estaConcluida: (trilhaId: string, aulaId: string) => boolean;
  ehFavorita: (trilhaId: string, aulaId: string) => boolean;
  progressoTrilha: (trilhaId: string) => {
    feitas: number;
    total: number;
    pct: number;
  };
  nivel: number;
  xpProximoNivel: number;
  resetar: () => void;
  carregado: boolean;
  streak: number;
  estudouHoje: boolean;
  registrarDiaEstudo: () => void;
  aulasParaRevisao: () => AulaLocalizada[];
  registrarTentativaQuiz: (trilhaId: string, aulaId: string) => void;
  adicionarTempoEstudo: (segundos: number) => void;
}

const Ctx = createContext<ProgressoContexto | null>(null);

// 250 XP por nível (curva simples e previsível).
const XP_NIVEL = 250;

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [estado, setEstado] = useState<EstadoProgresso>(PADRAO);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    try {
      const bruto = localStorage.getItem(CHAVE);
      // Hidratação do progresso a partir do armazenamento local (apenas no cliente).
        if (bruto) setEstado({ ...PADRAO, ...JSON.parse(bruto) });
    } catch {
      // ignora
    }
    setCarregado(true);
  }, []);

  useEffect(() => {
    if (!carregado) return;
    try {
      localStorage.setItem(CHAVE, JSON.stringify(estado));
    } catch {
      // ignora
    }
  }, [estado, carregado]);

  const marcarDia = (dias: string[]) => {
    const hoje = hojeISO();
    if (dias.includes(hoje)) return dias;
    return [...dias, hoje];
  };

  const concluirAula = useCallback(
    (trilhaId: string, aulaId: string, xp: number, nota?: number) => {
      const chave = chaveAula(trilhaId, aulaId);
      setEstado((s) => {
        const jaFeita = s.concluidas.includes(chave);
        return {
          ...s,
          concluidas: jaFeita ? s.concluidas : [...s.concluidas, chave],
          xp: jaFeita ? s.xp : s.xp + xp,
          notas: nota != null ? { ...s.notas, [chave]: nota } : s.notas,
          ultima: { trilhaId, aulaId },
          diasEstudo: marcarDia(s.diasEstudo ?? []),
        };
      });
    },
    [],
  );

  const registrarVisita = useCallback((trilhaId: string, aulaId: string) => {
    setEstado((s) => ({
      ...s,
      ultima: { trilhaId, aulaId },
      diasEstudo: marcarDia(s.diasEstudo ?? []),
    }));
  }, []);

  const registrarDiaEstudo = useCallback(() => {
    setEstado((s) => ({ ...s, diasEstudo: marcarDia(s.diasEstudo ?? []) }));
  }, []);

  const registrarTentativaQuiz = useCallback((trilhaId: string, aulaId: string) => {
    const chave = chaveAula(trilhaId, aulaId);
    setEstado((s) => ({
      ...s,
      tentativasQuiz: {
        ...(s.tentativasQuiz ?? {}),
        [chave]: (s.tentativasQuiz?.[chave] ?? 0) + 1,
      },
    }));
  }, []);

  const adicionarTempoEstudo = useCallback((segundos: number) => {
    if (segundos <= 0) return;
    setEstado((s) => ({
      ...s,
      tempoEstudoSegundos: (s.tempoEstudoSegundos ?? 0) + segundos,
      diasEstudo: marcarDia(s.diasEstudo ?? []),
    }));
  }, []);

  const alternarFavorita = useCallback((trilhaId: string, aulaId: string) => {
    const chave = chaveAula(trilhaId, aulaId);
    setEstado((s) => ({
      ...s,
      favoritas: s.favoritas.includes(chave)
        ? s.favoritas.filter((f) => f !== chave)
        : [...s.favoritas, chave],
    }));
  }, []);

  const adicionarPontosMissao = useCallback((pontos: number) => {
    setEstado((s) => ({
      ...s,
      missoesPontos: s.missoesPontos + pontos,
      xp: s.xp + pontos,
    }));
  }, []);

  const estaConcluida = useCallback(
    (trilhaId: string, aulaId: string) => estado.concluidas.includes(chaveAula(trilhaId, aulaId)),
    [estado.concluidas],
  );

  const ehFavorita = useCallback(
    (trilhaId: string, aulaId: string) => estado.favoritas.includes(chaveAula(trilhaId, aulaId)),
    [estado.favoritas],
  );

  const progressoTrilha = useCallback(
    (trilhaId: string) => {
      const trilha = trilhas.find((t) => t.id === trilhaId);
      const total = trilha ? trilha.modulos.reduce((n, m) => n + m.aulas.length, 0) : 0;
      const feitas = estado.concluidas.filter((c) => c.startsWith(`${trilhaId}/`)).length;
      return {
        feitas,
        total,
        pct: total ? Math.round((feitas / total) * 100) : 0,
      };
    },
    [estado.concluidas],
  );

  const resetar = useCallback(() => setEstado(PADRAO), []);

  const aulasParaRevisao = useCallback((): AulaLocalizada[] => {
    return listarAulas().filter((i) => {
      const chave = chaveAula(i.trilha.id, i.aula.id);
      const nota = estado.notas[chave];
      return nota != null && nota < 60;
    });
  }, [estado.notas]);

  const { streak, estudouHoje } = calcularStreak(estado.diasEstudo ?? []);

  const valor = useMemo<ProgressoContexto>(() => {
    const nivel = Math.floor(estado.xp / XP_NIVEL) + 1;
    const xpProximoNivel = nivel * XP_NIVEL - estado.xp;
    return {
      ...estado,
      concluirAula,
      registrarVisita,
      alternarFavorita,
      adicionarPontosMissao,
      estaConcluida,
      ehFavorita,
      progressoTrilha,
      nivel,
      xpProximoNivel,
      resetar,
      carregado,
      streak,
      estudouHoje,
      registrarDiaEstudo,
      aulasParaRevisao,
      registrarTentativaQuiz,
      adicionarTempoEstudo,
    };
  }, [
    estado,
    concluirAula,
    registrarVisita,
    alternarFavorita,
    adicionarPontosMissao,
    estaConcluida,
    ehFavorita,
    progressoTrilha,
    resetar,
    carregado,
    streak,
    estudouHoje,
    registrarDiaEstudo,
    aulasParaRevisao,
    registrarTentativaQuiz,
    adicionarTempoEstudo,
  ]);

  return <Ctx.Provider value={valor}>{children}</Ctx.Provider>;
}

export function useProgresso() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useProgresso deve ser usado dentro de ProgressProvider");
  return ctx;
}

// Total de aulas do curso (reexport conveniente para componentes).
export function totalAulasCurso() {
  return listarAulas().length;
}
