"use client";

import { useEffect, useRef, useState } from "react";

/* ── Partículas de fundo ── */
export function ParticleBg() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let id: number;
    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const pts = Array.from({ length: 40 }, () => ({
      x: Math.random() * c.width, y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 2 + 0.5, a: Math.random() * 0.3 + 0.05,
    }));
    const animate = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > c.width) p.vx *= -1;
        if (p.y < 0 || p.y > c.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.a})`;
        ctx.fill();
      });
      id = requestAnimationFrame(animate);
    };
    animate();
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={ref} className="pointer-events-none absolute inset-0 z-0" aria-hidden />;
}

/* ── Typewriter ── */
export function TypewriterPalavras({ palavras, className = "" }: { palavras: string[]; className?: string }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const done = !del && sub === palavras[idx].length;
    const shouldDel = del && sub === 0;
    if (shouldDel) { setDel(false); setIdx((i) => (i + 1) % palavras.length); return; }
    const t = setTimeout(() => {
      if (done) { setTimeout(() => setDel(true), 2000); return; }
      setSub((s) => (del ? s - 1 : s + 1));
    }, done ? 0 : del ? 40 : 80);
    return () => clearTimeout(t);
  }, [sub, idx, del, palavras]);

  return (
    <span className={className}>
      {palavras[idx].substring(0, sub)}
      <span className="animate-pulse">|</span>
    </span>
  );
}
