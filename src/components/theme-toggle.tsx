"use client";

import { useTheme } from "@/lib/theme";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className={`group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong bg-surface text-muted transition-colors hover:text-forest-500 dark:hover:text-green-400 ${className}`}
    >
      <span className="transition-transform duration-500 ease-in-out rotate-0 group-hover:scale-110">
        {isDark ? (
          <Sun
            size={18}
            className="transition-all duration-500 ease-in-out rotate-0 group-hover:rotate-90"
          />
        ) : (
          <Moon
            size={18}
            className="transition-all duration-500 ease-in-out rotate-0 group-hover:-rotate-12"
          />
        )}
      </span>
    </button>
  );
}
