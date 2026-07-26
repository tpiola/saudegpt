"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light";

interface ThemeContextValue {
  theme: Theme;
  isDark: boolean;
}

const ThemeCtx = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "saudegpt-theme";

// Always light — health design requires clean white + navy
export const scriptAntiFlash = `(function(){try{document.documentElement.classList.add('light');document.documentElement.classList.remove('dark');localStorage.setItem('${STORAGE_KEY}','light');}catch(e){}})();`;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
    localStorage.setItem(STORAGE_KEY, "light");
    setMounted(true);
  }, []);

  return (
    <ThemeCtx.Provider value={{ theme: "light", isDark: false }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}

export function useTema() {
  return { tema: "light" as const, isDark: false };
}
