"use client";

import { useEffect, useRef } from "react";

interface Particula {
  x: number;
  y: number;
  vx: number;
  vy: number;
  cor: string;
  tamanho: number;
  vida: number;
  maxVida: number;
  formato: "rect" | "circle";
}

const CORES = ["#2563eb", "#1fb6c9", "#7c3aed", "#f59e0b", "#15a06b", "#d83a52", "#f5e8b0"];

export function Confete({ ativo, origemX = 0.5, origemY = 0.5 }: { ativo: boolean; origemX?: number; origemY?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particulasRef = useRef<Particula[]>([]);
  const animationId = useRef<number>(0);

  useEffect(() => {
    if (!ativo || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cx = canvas.width * origemX;
    const cy = canvas.height * origemY;

    // Criar 150 partículas
    particulasRef.current = Array.from({ length: 150 }, () => ({
      x: cx,
      y: cy,
      vx: (Math.random() - 0.5) * 16,
      vy: Math.random() * -14 - 4,
      cor: CORES[Math.floor(Math.random() * CORES.length)],
      tamanho: Math.random() * 8 + 4,
      vida: 0,
      maxVida: 60 + Math.random() * 40,
      formato: Math.random() > 0.5 ? "rect" : "circle",
    }));

    let frame = 0;

    function animar() {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particulasRef.current = particulasRef.current.filter((p) => p.vida < p.maxVida);

      for (const p of particulasRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravidade
        p.vx *= 0.99;
        p.vida++;
        p.vy += (Math.random() - 0.5) * 0.3; // turbulência

        ctx.globalAlpha = 1 - p.vida / p.maxVida;

        if (p.formato === "rect") {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(frame * 0.1 + p.vida);
          ctx.fillStyle = p.cor;
          ctx.fillRect(-p.tamanho / 2, -p.tamanho / 4, p.tamanho, p.tamanho / 2);
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.tamanho / 2, 0, Math.PI * 2);
          ctx.fillStyle = p.cor;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;

      if (particulasRef.current.length > 0) {
        animationId.current = requestAnimationFrame(animar);
      }
    }

    animationId.current = requestAnimationFrame(animar);

    return () => cancelAnimationFrame(animationId.current);
  }, [ativo, origemX, origemY]);

  if (!ativo) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[100]"
      aria-hidden="true"
    />
  );
}
