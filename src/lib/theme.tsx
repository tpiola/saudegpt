"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeCtx = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "saudegpt-theme";

// Script injected inline in <head> to prevent FOUC (flash of unstyled content).
// Reads localStorage synchronously before React hydration runs.
export const scriptAntiFlash = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}');if(t==='dark'){document.documentElement.classList.add('dark');}else if(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.classList.add('dark');}}catch(e){}})();`;

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark") return "dark";
    if (stored === "light") return "light";
  } catch {
    // localStorage unavailable (SSR, private browsing restrictions)
  }
  return getSystemTheme();
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Hydrate theme from what the anti-flash script already set on <html>
  useEffect(() => {
    const initial: Theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(initial);
    setMounted(true);
  }, []);

  // Listen for system preference changes when no stored preference exists
  useEffect(() => {
    if (!mounted) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      try {
        // Only auto-switch if user hasn't explicitly stored a preference
        if (!localStorage.getItem(STORAGE_KEY)) {
          const next = e.matches ? "dark" : "light";
          setTheme(next);
          document.documentElement.classList.toggle("dark", next === "dark");
        }
      } catch {
        // ignore
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [mounted]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  return (
    <ThemeCtx.Provider value={{ theme, toggleTheme, isDark: theme === "dark" }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}

// Alias in Portuguese for backward compatibility with existing components
export function useTema() {
  const { theme, toggleTheme, isDark } = useTheme();
  return { tema: theme, alternar: toggleTheme, isDark };
}
