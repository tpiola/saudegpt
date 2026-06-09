"use client";

import { useEffect, useState } from "react";

/**
 * XP Float Animation — mostra '+N XP' flutuando pra cima com fade out.
 * Usa CSS keyframes (não framer-motion) pra não aumentar bundle.
 *
 * @example
 * <XpFloat valor={50} cor="#4ca15d" />
 */
interface XpFloatProps {
  /** Quantidade de XP a exibir */
  valor: number;
  /** Cor do texto (default: verde do app) */
  cor?: string;
  /** Posição horizontal: "center" | "left" | "right" (default: center) */
  alinhamento?: "center" | "left" | "right";
  /** ID único para animação independente */
  id?: string;
}

export function XpFloat({
  valor,
  cor = "#4ca15d",
  alinhamento = "center",
  id,
}: XpFloatProps) {
  const [animando, setAnimando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnimando(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!animando) return null;

  const posMap = {
    center: "left-1/2 -translate-x-1/2",
    left: "left-4",
    right: "right-4",
  };

  return (
    <span
      key={id}
      className="xp-float-indicator"
      style={{ color: cor, textShadow: `0 0 10px ${cor}40` }}
      aria-hidden="true"
    >
      +{valor} XP
    </span>
  );
}

/**
 * Container que envolve filhos e posiciona o XP float relativo a eles.
 * Útil para acoplar o float a um card/botão específico.
 */
export function XpFloatWrapper({
  children,
  xp,
  ativo,
  cor,
  alinhamento,
}: {
  children: React.ReactNode;
  xp: number;
  ativo: boolean;
  cor?: string;
  alinhamento?: "center" | "left" | "right";
}) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (ativo) setKey((k) => k + 1);
  }, [ativo]);

  return (
    <div className="relative inline-block">
      {children}
      {ativo && (
        <XpFloat
          key={key}
          valor={xp}
          cor={cor}
          alinhamento={alinhamento}
          id={`xp-${key}`}
        />
      )}
    </div>
  );
}
