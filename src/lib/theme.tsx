"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Tema = "light" | "dark";

interface TemaContexto {
  tema: Tema;
  alternar: () => void;
}

const Ctx = createContext<TemaContexto | null>(null);

const CHAVE = "fap-tema";

// Script aplicado antes da hidratação para evitar "flash" de tema errado.
export const scriptAntiFlash = `(function(){try{var t=localStorage.getItem('${CHAVE}');var d=t? t==='dark' : true; if(d){document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [tema, setTema] = useState<Tema>("light");

  useEffect(() => {
    const inicial: Tema = document.documentElement.classList.contains("dark") ? "dark" : "light";
    // Sincroniza o estado React com o tema já aplicado pelo script anti-flash.
    setTema(inicial);
  }, []);

  function alternar() {
    setTema((atual) => {
      const novo = atual === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", novo === "dark");
      try {
        localStorage.setItem(CHAVE, novo);
      } catch {
        // ignora ambientes sem storage
      }
      return novo;
    });
  }

  return <Ctx.Provider value={{ tema, alternar }}>{children}</Ctx.Provider>;
}

export function useTema() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useTema deve ser usado dentro de ThemeProvider");
  return ctx;
}
