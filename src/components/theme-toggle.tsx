"use client";

import { useTema } from "@/lib/theme";
import { Icon } from "./icons";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { tema, alternar } = useTema();
  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={tema === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border-strong bg-surface text-muted transition-colors hover:text-forest-500 dark:hover:text-green-400 ${className}`}
    >
      <Icon name={tema === "dark" ? "sun" : "moon"} size={18} />
    </button>
  );
}
