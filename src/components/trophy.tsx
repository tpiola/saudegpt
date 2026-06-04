"use client";

interface TrophyProps {
  visivel: boolean;
  titulo?: string;
}

export function Trofeu({ visivel, titulo = "Módulo Completo!" }: TrophyProps) {
  if (!visivel) return null;

  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <div className="trofeu-container">
        <svg
          viewBox="0 0 100 100"
          className="trofeu-svg"
          width="120"
          height="120"
          aria-hidden="true"
        >
          {/* Taça */}
          <defs>
            <linearGradient id="trophy-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#FFA500" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
            <linearGradient id="trophy-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE55C" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.2" />
            </linearGradient>
            <filter id="trophy-shadow">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#FFD700" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Brilho de fundo */}
          <circle cx="50" cy="45" r="35" fill="url(#trophy-glow)" className="trofeu-glow" />

          {/* Corpo da taça */}
          <path
            d="M30 38 C30 30, 35 22, 45 20 L45 30 C40 32, 35 36, 35 42 Z"
            fill="url(#trophy-gold)"
            filter="url(#trophy-shadow)"
            className="trofeu-copo"
          />
          <path
            d="M55 20 C65 22, 70 30, 70 38 L65 42 C65 36, 60 32, 55 30 Z"
            fill="url(#trophy-gold)"
            filter="url(#trophy-shadow)"
            className="trofeu-copo"
          />
          <ellipse cx="50" cy="20" rx="12" ry="4" fill="url(#trophy-gold)" filter="url(#trophy-shadow)" />
          <ellipse cx="50" cy="42" rx="20" ry="6" fill="url(#trophy-gold)" filter="url(#trophy-shadow)" />

          {/* Haste */}
          <rect x="47" y="47" width="6" height="20" rx="2" fill="url(#trophy-gold)" filter="url(#trophy-shadow)" />

          {/* Base */}
          <ellipse cx="50" cy="70" rx="18" ry="5" fill="url(#trophy-gold)" filter="url(#trophy-shadow)" />

          {/* Alças */}
          <path
            d="M26 32 C18 32, 14 40, 18 48"
            fill="none"
            stroke="url(#trophy-gold)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#trophy-shadow)"
          />
          <path
            d="M74 32 C82 32, 86 40, 82 48"
            fill="none"
            stroke="url(#trophy-gold)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#trophy-shadow)"
          />

          {/* Estrela no centro */}
          <text x="50" y="38" textAnchor="middle" fontSize="16" fill="#8B4513" fontWeight="bold">
            ★
          </text>
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-amber-500 drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">
        🏆 {titulo}
      </h2>
      <p className="text-sm text-muted text-center max-w-sm">
        Parabéns! Você completou todas as aulas deste módulo.
      </p>
    </div>
  );
}
