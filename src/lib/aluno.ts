"use client";

import { useEffect, useState } from "react";

const CHAVE = "fap-aluno";

export interface PerfilAluno {
  nome: string;
  email: string;
  apelidoRanking?: string;
}

export function lerPerfilAluno(): PerfilAluno | null {
  try {
    const bruto = localStorage.getItem(CHAVE);
    if (!bruto) return null;
    return JSON.parse(bruto) as PerfilAluno;
  } catch {
    return null;
  }
}

export function salvarPerfilAluno(perfil: PerfilAluno) {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(perfil));
  } catch {
    // ignora
  }
}

export function usePerfilAluno() {
  const [perfil, setPerfil] = useState<PerfilAluno | null>(null);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setPerfil(lerPerfilAluno());
    setCarregado(true);
  }, []);

  return { perfil, carregado, atualizar: setPerfil };
}
