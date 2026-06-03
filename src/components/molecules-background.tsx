"use client";

import { useEffect, useRef } from "react";

/** Floating molecules animation using Canvas — dark, elegant, academic */
export function MoleculesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    /* ── Particles ── */
    const COUNT = 60;
    const particles: {
      x: number; y: number; vx: number; vy: number;
      r: number; alpha: number; pulse: number; pulseSpeed: number;
      connected: number[]; hue: number;
    }[] = [];

    for (let i = 0; i < COUNT; i++) {
      const hue = 200 + Math.random() * 60; // blue-cyan range
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: 2 + Math.random() * 5,
        alpha: 0.15 + Math.random() * 0.35,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.005 + Math.random() * 0.015,
        connected: [],
        hue,
      });
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        // Wrap
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        const pulseAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
        const radius = p.r * (0.8 + 0.3 * Math.sin(p.pulse * 0.7));

        // Glow
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, radius * 2.5, 0, Math.PI * 2);
        ctx!.fillStyle = `hsla(${p.hue}, 60%, 60%, ${pulseAlpha * 0.08})`;
        ctx!.fill();

        // Core
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx!.fillStyle = `hsla(${p.hue}, 70%, 70%, ${pulseAlpha})`;
        ctx!.fill();

        // Inner bright spot
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, radius * 0.4, 0, Math.PI * 2);
        ctx!.fillStyle = `hsla(${p.hue}, 80%, 85%, ${pulseAlpha * 0.7})`;
        ctx!.fill();
      }

      // Connections
      const DIST = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < DIST) {
            const alpha = (1 - dist / DIST) * 0.15;
            const hue = (particles[i].hue + particles[j].hue) / 2;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `hsla(${hue}, 50%, 60%, ${alpha})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    function onResize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w;
      canvas!.height = h;
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
