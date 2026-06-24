"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  isDark: boolean;
}

const ThemeCtx = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "saudegpt-theme";

// Script injected inline in <head> to prevent FOUC — default light mode
export const scriptAntiFlash = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}')||'light';document.documentElement.classList.add(t);}catch(e){}})();`;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) || "light";
    document.documentElement.classList.add(stored);
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
