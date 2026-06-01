"use client";

import { useCallback, useEffect, useState } from "react";
import { totalItensComando } from "@/content/comando-diario";

// Persistência separada do progresso de aulas (conforme plano).
const CHAVE = "fap-comando-diario";

interface EstadoComandoDiario {
  concluidos: string[]; // ids dos itens
  data: string; // YYYY-MM-DD do dia atual do checklist
}

function hojeISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function ler(): EstadoComandoDiario {
  const padrao: EstadoComandoDiario = { concluidos: [], data: hojeISO() };
  try {
    const bruto = localStorage.getItem(CHAVE);
    if (!bruto) return padrao;
    const parsed = JSON.parse(bruto) as EstadoComandoDiario;
    // Novo dia: zera checklist mantendo histórico apenas do dia
    if (parsed.data !== hojeISO()) {
      return { concluidos: [], data: hojeISO() };
    }
    return { ...padrao, ...parsed, data: hojeISO() };
  } catch {
    return padrao;
  }
}

function salvar(estado: EstadoComandoDiario) {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(estado));
  } catch {
    // ignora
  }
}

export function useComandoDiario() {
  const [estado, setEstado] = useState<EstadoComandoDiario>({
    concluidos: [],
    data: hojeISO(),
  });
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEstado(ler());
    setCarregado(true);
  }, []);

  const alternar = useCallback((itemId: string) => {
    setEstado((s) => {
      const concluidos = s.concluidos.includes(itemId)
        ? s.concluidos.filter((id) => id !== itemId)
        : [...s.concluidos, itemId];
      const novo = { concluidos, data: hojeISO() };
      salvar(novo);
      return novo;
    });
  }, []);

  const resetarDia = useCallback(() => {
    const novo = { concluidos: [], data: hojeISO() };
    salvar(novo);
    setEstado(novo);
  }, []);

  const total = totalItensComando();
  const feitos = estado.concluidos.length;
  const pct = total ? Math.round((feitos / total) * 100) : 0;

  return {
    carregado,
    concluidos: estado.concluidos,
    alternar,
    resetarDia,
    estaConcluido: (id: string) => estado.concluidos.includes(id),
    feitos,
    total,
    pct,
    data: estado.data,
  };
}
