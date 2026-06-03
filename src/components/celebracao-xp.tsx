"use client";

import { Icon } from "./icons";

/** Feedback visual ao ganhar XP (gamificação). */
export function CelebracaoXp({ xp, ativo }: { xp: number; ativo: boolean }) {
  if (!ativo) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-20 z-50 flex justify-center px-4"
      role="status"
      aria-live="polite"
    >
      <div className="animate-xp-pop flex items-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 px-5 py-3 text-white shadow-lg">
        <Icon name="sparkles" size={22} />
        <span className="font-bold">+{xp} XP conquistados!</span>
      </div>
    </div>
  );
}
