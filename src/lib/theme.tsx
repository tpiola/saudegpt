"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "dark";

interface ThemeContextValue {
  theme: Theme;
  isDark: true;
}

const ThemeCtx = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "saudegpt-theme";

// Script injected inline in <head> to prevent FOUC — always dark mode
export const scriptAntiFlash = `(function(){try{document.documentElement.classList.add('dark');localStorage.setItem('${STORAGE_KEY}','dark');}catch(e){}})();`;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    setMounted(true);
  }, []);

  return (
    <ThemeCtx.Provider value={{ theme: "dark", isDark: true }}>
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
  return { tema: "dark" as const, isDark: true };
}
