'use client';

import { useEffect, useState, useRef } from 'react';

interface AnimacaoCoracaoProps {
  /** Tamanho em pixels (largura/altura do SVG) */
  tamanho?: number;
  /** Cor principal (qualquer valor CSS válido) */
  cor?: string;
  /** Se ativo, o coração bate. Se false, fica parado. */
  ativo?: boolean;
  /** Título acessível */
  titulo?: string;
}

/**
 * Animação educacional de coração batendo.
 * SVG com CSS keyframes: pulsa em escala + opacidade.
 * Leve (~1KB), sem dependências externas.
 * Respeita prefers-reduced-motion.
 */
export default function AnimacaoCoracao({
  tamanho = 120,
  cor = '#ef4444',
  ativo = true,
  titulo = 'Coração batendo — ilustração educacional',
}: AnimacaoCoracaoProps) {
  const [reduced, setReduced] = useState(false);
  const styleId = useRef(`heart-style-${Math.random().toString(36).slice(2, 9)}`);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const shouldAnimate = ativo && !reduced;

  return (
    <figure
      className="flex flex-col items-center justify-center select-none"
      style={{ width: tamanho, height: tamanho + 28 }}
      role="img"
      aria-label={titulo}
    >
      <style>{`
        @keyframes pulse-coracao-${styleId.current} {
          0%, 100% {
            transform: scale(1);
            opacity: 0.85;
          }
          14% {
            transform: scale(1.25);
            opacity: 1;
          }
          28% {
            transform: scale(1.1);
            opacity: 0.9;
          }
          42% {
            transform: scale(1.2);
            opacity: 0.95;
          }
          56% {
            transform: scale(1);
            opacity: 0.85;
          }
          100% {
            transform: scale(1);
            opacity: 0.85;
          }
        }
        @keyframes brilho-coracao-${styleId.current} {
          0%, 100% { opacity: 0; }
          10%, 30% { opacity: 0.4; }
          50% { opacity: 0; }
        }
      `}</style>
      <svg
        width={tamanho}
        height={tamanho}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={
          shouldAnimate
            ? {
                animation: `pulse-coracao-${styleId.current} 1s ease-in-out infinite`,
                transformOrigin: 'center',
                transformBox: 'fill-box',
              }
            : undefined
        }
      >
        {/* Sombra */}
        <path
          d="M50 88C50 88 16 60 16 38C16 26 26 16 38 16C44 16 48 18 50 22C52 18 56 16 62 16C74 16 84 26 84 38C84 60 50 88 50 88Z"
          fill={cor}
          opacity={shouldAnimate ? 0.85 : 0.75}
        />

        {/* Brilho (pulse de luz) */}
        {shouldAnimate && (
          <path
            d="M50 82C50 82 22 56 22 38C22 28 30 20 38 20C44 20 48 23 50 28C52 23 56 20 62 20C70 20 78 28 78 38C78 56 50 82 50 82Z"
            fill={cor}
            opacity="0"
            style={{
              animation: `brilho-coracao-${styleId.current} 1s ease-in-out infinite`,
            }}
          />
        )}

        {/* Brilho central */}
        <ellipse
          cx="50"
          cy="42"
          rx="10"
          ry="8"
          fill="white"
          opacity={shouldAnimate ? 0.3 : 0.15}
        >
          {shouldAnimate && (
            <animate
              attributeName="opacity"
              values="0.3;0.15;0.3"
              dur="1s"
              repeatCount="indefinite"
            />
          )}
        </ellipse>
      </svg>

      <figcaption className="mt-2 text-[10px] text-muted font-medium text-center leading-tight">
        {ativo ? '❤️ Coração batendo' : '💓 Coração em repouso'}
      </figcaption>
    </figure>
  );
}
