"use client";

import { Heart } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-surface text-emerald-400 ${className}`}
      title="Modo escuro — saúde visual"
    >
      <Heart size={16} className="animate-pulse-soft" />
    </div>
  );
}
