"use client";

import { Heart } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border border-navy-100 bg-navy-50 text-navy-600 ${className}`}
      title="SaúdeGPT — design claro para saúde"
    >
      <Heart size={16} className="animate-pulse-soft" />
    </div>
  );
}
