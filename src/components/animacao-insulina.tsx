'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface GlucoseParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  inside: boolean;
}

interface AnimacaoInsulinaProps {
  /** Largura do canvas em pixels */
  largura?: number;
  /** Altura do canvas em pixels */
  altura?: number;
}

/**
 * Animação educacional de glicose entrando na célula.
 * Canvas API pura — ~30 partículas animadas com requestAnimationFrame.
 * Toggle: "Com insulina" (portas abertas) vs "Sem insulina" (portas fechadas).
 * <5KB, sem dependências externas.
 * Respeita prefers-reduced-motion.
 */
export default function AnimacaoInsulina({
  largura = 400,
  altura = 300,
}: AnimacaoInsulinaProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<GlucoseParticle[]>([]);
  const [comInsulina, setComInsulina] = useState(true);
  const [reduced, setReduced] = useState(false);

  // Preferência de movimento reduzido
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Inicializar partículas
  const initParticles = useCallback(() => {
    const particles: GlucoseParticle[] = [];
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 20 + Math.random() * 80;
      particles.push({
        x: 90 + Math.cos(angle) * radius,
        y: 150 + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: 3 + Math.random() * 3,
        alpha: 0.5 + Math.random() * 0.5,
        inside: false,
      });
    }
    particlesRef.current = particles;
  }, []);

  // Desenho do frame
  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      const dpr = window.devicePixelRatio || 1;
      const isOpen = comInsulina;

      // Clear
      ctx.clearRect(0, 0, w, h);

      // ── Fundo ──
      ctx.fillStyle = '#f5f7f6';
      ctx.beginPath();
      ctx.roundRect(0, 0, w, h, 16);
      ctx.fill();

      // ── Título ──
      ctx.fillStyle = '#212121';
      ctx.font = 'bold 12px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText(
        isOpen ? '✅ Com Insulina — Glicose entrando na célula' : '❌ Sem Insulina — Glicose acumulada no sangue',
        w / 2,
        10,
      );

      // ── Célula ──
      const cx = 200;
      const cy = 155;
      const rx = 85;
      const ry = 65;

      ctx.fillStyle = isOpen
        ? 'rgba(76, 161, 93, 0.10)'
        : 'rgba(214, 110, 15, 0.08)';
      ctx.strokeStyle = isOpen ? '#4ca15d' : '#d66e0f';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Núcleo
      ctx.fillStyle = isOpen
        ? 'rgba(76, 161, 93, 0.18)'
        : 'rgba(214, 110, 15, 0.15)';
      ctx.beginPath();
      ctx.ellipse(cx, cy, 25, 20, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#4a4a4a';
      ctx.font = '9px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Núcleo', cx, cy);

      // ── Portas (abertas ou fechadas) ──
      ctx.strokeStyle = isOpen ? '#4ca15d' : '#d66e0f';
      ctx.lineWidth = isOpen ? 2 : 3;

      if (isOpen) {
        // Porta superior (aberta)
        ctx.fillStyle = 'rgba(76, 161, 93, 0.15)';
        ctx.fillRect(cx - 6, cy - 68, 12, 12);
        ctx.strokeRect(cx - 6, cy - 68, 12, 12);
        // Porta inferior (aberta)
        ctx.fillRect(cx - 6, cy + 56, 12, 12);
        ctx.strokeRect(cx - 6, cy + 56, 12, 12);
        // Sinal de "+"
        ctx.fillStyle = '#4ca15d';
        ctx.font = 'bold 11px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('+', cx, cy - 62);
        ctx.fillText('+', cx, cy + 62);
      } else {
        // Porta superior (fechada — X)
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx - 5, cy - 67);
        ctx.lineTo(cx + 5, cy - 57);
        ctx.moveTo(cx + 5, cy - 67);
        ctx.lineTo(cx - 5, cy - 57);
        ctx.stroke();
        // Porta inferior (fechada — X)
        ctx.beginPath();
        ctx.moveTo(cx - 5, cy + 57);
        ctx.lineTo(cx + 5, cy + 67);
        ctx.moveTo(cx + 5, cy + 57);
        ctx.lineTo(cx - 5, cy + 67);
        ctx.stroke();
        ctx.lineCap = 'butt';
      }

      // ── Ícone de insulina ──
      if (isOpen) {
        ctx.fillStyle = 'rgba(76, 161, 93, 0.15)';
        ctx.beginPath();
        ctx.arc(285, 100, 12, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#4ca15d';
        ctx.font = 'bold 10px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('I', 285, 100);

        ctx.fillStyle = '#4ca15d';
        ctx.font = '8px Inter, system-ui, sans-serif';
        ctx.textBaseline = 'top';
        ctx.fillText('Insulina', 285, 113);
      } else {
        ctx.fillStyle = 'rgba(214, 110, 15, 0.15)';
        ctx.beginPath();
        ctx.arc(285, 100, 12, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#d66e0f';
        ctx.font = 'bold 10px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('✕', 285, 100);

        ctx.fillStyle = '#d66e0f';
        ctx.font = '8px Inter, system-ui, sans-serif';
        ctx.textBaseline = 'top';
        ctx.fillText('Sem Insulina', 285, 113);
      }

      // ── Atualizar e desenhar partículas ──
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!reduced) {
          // Movimento browniano
          p.vx += (Math.random() - 0.5) * 0.15;
          p.vy += (Math.random() - 0.5) * 0.15;

          // Amortecimento
          p.vx *= 0.98;
          p.vy *= 0.98;

          // Velocidade máxima
          const maxSpeed = 0.8;
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (speed > maxSpeed) {
            p.vx = (p.vx / speed) * maxSpeed;
            p.vy = (p.vy / speed) * maxSpeed;
          }

          // Verificar se está na região da célula
          const dx = p.x - cx;
          const dy = p.y - cy;
          const insideCell = (dx * dx) / (rx * rx) + (dy * dy) / (ry * ry) < 1;

          if (isOpen) {
            // Com insulina: partículas entram na célula
            if (!p.inside && insideCell) {
              p.inside = true;
            }
            // Se está fora e próximo da célula, puxar para dentro
            if (!p.inside && !insideCell) {
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < rx + 30) {
                const pull = 0.03;
                p.vx -= (dx / dist) * pull;
                p.vy -= (dy / dist) * pull;
              }
            }
            // Se está dentro, empurrar suavemente para o centro
            if (p.inside) {
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist > 10) {
                p.vx -= (dx / dist) * 0.02;
                p.vy -= (dy / dist) * 0.02;
              }
              // Escapar de dentro da célulo ocasionalmente
              if (dist > rx * 0.7 || dist < 5) {
                p.vx += (Math.random() - 0.5) * 0.2;
                p.vy += (Math.random() - 0.5) * 0.2;
              }
            } else {
              // Empurrar para fora se estiver colidindo com a borda
              if (insideCell) {
                const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                p.vx += (dx / dist) * 0.1;
                p.vy += (dy / dist) * 0.1;
              }
            }
          } else {
            // Sem insulina: repelir da célula
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            if (dist < rx + 20) {
              const repel = (rx + 20 - dist) / (rx + 20) * 0.08;
              p.vx += (dx / dist) * repel;
              p.vy += (dy / dist) * repel;
            }
            p.inside = false;
          }

          // Movimento
          p.x += p.vx;
          p.y += p.vy;

          // Limites — manter partículas dentro da área visível
          const margin = 20;
          if (p.x < margin) { p.x = margin; p.vx = Math.abs(p.vx) * 0.5; }
          if (p.x > w - margin) { p.x = w - margin; p.vx = -Math.abs(p.vx) * 0.5; }
          if (p.y < 35) { p.y = 35; p.vy = Math.abs(p.vy) * 0.5; }
          if (p.y > h - margin) { p.y = h - margin; p.vy = -Math.abs(p.vy) * 0.5; }
        }

        // Desenhar partícula (glicose)
        const dx = p.x - cx;
        const dy = p.y - cy;
        const insideCell =
          (dx * dx) / (rx * rx) + (dy * dy) / (ry * ry) < 1;

        // Gradiente radial para cada partícula
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        if (insideCell && isOpen) {
          grad.addColorStop(0, `rgba(76, 161, 93, ${p.alpha})`);
          grad.addColorStop(1, `rgba(76, 161, 93, ${p.alpha * 0.3})`);
        } else {
          grad.addColorStop(0, `rgba(244, 155, 68, ${p.alpha})`);
          grad.addColorStop(1, `rgba(214, 110, 15, ${p.alpha * 0.3})`);
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // Brilho/glow sutil
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.15})`;
        ctx.beginPath();
        ctx.arc(p.x - p.r * 0.25, p.y - p.r * 0.25, p.r * 0.35, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Legenda ──
      ctx.fillStyle = '#4a4a4a';
      ctx.font = '9px Inter, system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'bottom';
      const dentroCount = particles.filter((p) => p.inside).length;
      ctx.fillText(`Partículas: ${particles.length}  •  Dentro: ${dentroCount}`, 15, h - 8);

      // Legenda glicose
      ctx.beginPath();
      ctx.arc(w - 120, h - 14, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#f49b44';
      ctx.fill();
      ctx.fillStyle = '#4a4a4a';
      ctx.font = '8px Inter, system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText('Glicose', w - 112, h - 14);
    },
    [comInsulina, reduced],
  );

  // Loop de animação
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = largura;
    const h = altura;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    initParticles();

    if (reduced) {
      // Apenas um frame estático
      draw(ctx, w, h);
      return;
    }

    let running = true;
    const loop = () => {
      if (!running) return;
      draw(ctx, w, h);
      animRef.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      running = false;
      cancelAnimationFrame(animRef.current);
    };
  }, [largura, altura, draw, initParticles, reduced]);

  return (
    <figure className="flex flex-col items-center w-full max-w-md mx-auto my-6 select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-auto rounded-2xl shadow-sm border border-border"
        role="img"
        aria-label={
          comInsulina
            ? 'Animação: com insulina, partículas de glicose entram na célula'
            : 'Animação: sem insulina, partículas de glicose ficam acumuladas fora da célula'
        }
      />

      {/* Botão toggle */}
      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={() => setComInsulina(true)}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
            comInsulina
              ? 'bg-green-500 text-white shadow-md shadow-green-500/20'
              : 'bg-surface-2 text-muted hover:bg-green-50 hover:text-green-600'
          }`}
          aria-pressed={comInsulina}
        >
          💉 Com Insulina
        </button>
        <button
          onClick={() => setComInsulina(false)}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
            !comInsulina
              ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
              : 'bg-surface-2 text-muted hover:bg-orange-50 hover:text-orange-600'
          }`}
          aria-pressed={!comInsulina}
        >
          🚫 Sem Insulina
        </button>
      </div>

      <figcaption className="mt-3 text-xs text-center text-muted leading-relaxed px-4">
        <strong className="text-foreground">
          {comInsulina
            ? 'Com insulina, a glicose entra na célula e é usada como energia.'
            : 'Sem insulina, a glicose fica acumulada no sangue — é o que acontece no diabetes.'}
        </strong>{' '}
        Use o toggle acima para comparar.
      </figcaption>
    </figure>
  );
}
