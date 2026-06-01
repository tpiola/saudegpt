"use client";

import { useEffect, useState } from "react";

/** Revela conteúdo com animação suave (respeita prefers-reduced-motion). */
export function AnimarEntrada({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setVisivel(true), delay);
    return () => window.clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`${className} transition-all duration-500 ease-out motion-reduce:transition-none ${
        visivel ? "animate-slide-up opacity-100" : "opacity-0 translate-y-3"
      }`}
      style={{ animationDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
