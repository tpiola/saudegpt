"use client";

import { useEffect, useState } from "react";
import { Confete } from "./confete";

interface ConfettiProps {
  ativo: boolean;
  duracao?: number;
}

export function Confetti({ ativo, duracao = 3000 }: ConfettiProps) {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    if (!ativo) {
      setMostrar(false);
      return;
    }
    setMostrar(true);
    const timer = window.setTimeout(() => setMostrar(false), duracao);
    return () => window.clearTimeout(timer);
  }, [ativo, duracao]);

  return <Confete ativo={mostrar} />;
}
