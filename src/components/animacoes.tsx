"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

const CUBIC_BEZIER = "cubic-bezier(0.16, 1, 0.3, 1)";
const transformMap: Record<string, string> = {
  up: "translateY(40px)", down: "translateY(-40px)",
  left: "translateX(-40px)", right: "translateX(40px)",
  scale: "scale(0.9)", none: "none",
};

export function ScrollReveal({ children, className = "", delay = 0, direction = "up", duration = 700, threshold = 0.1, once = true }: {
  children: React.ReactNode; className?: string; delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  duration?: number; threshold?: number; once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) { if (reduced) setVisivel(true); return; }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisivel(true); if (once) obs.disconnect(); } else if (!once) setVisivel(false);
    }, { threshold, rootMargin: "0px 0px -60px 0px" });
    obs.observe(el); return () => obs.disconnect();
  }, [threshold, once, reduced]);
  const estilo: React.CSSProperties = {
    transition: `opacity ${duration}ms ${CUBIC_BEZIER}, transform ${duration}ms ${CUBIC_BEZIER}`,
    transitionDelay: `${delay}ms`, opacity: visivel ? 1 : 0,
    transform: visivel ? "none" : transformMap[direction] ?? transformMap.up,
    willChange: "opacity, transform",
  };
  return <div ref={ref} className={className} style={estilo}>{children}</div>;
}

export function ContadorAnimado({ valor, sufixo = "", prefixo = "", duracao = 2000, digits = 0 }: {
  valor: number; sufixo?: string; prefixo?: string; duracao?: number; digits?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visivel, setVisivel] = useState(false);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (reduced) { setVisivel(true); return; }
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisivel(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el); return () => obs.disconnect();
  }, [reduced]);
  useEffect(() => {
    if (!visivel) return;
    const el = ref.current; if (!el) return;
    if (reduced) { el.textContent = `${prefixo}${valor.toFixed(digits)}${sufixo}`; return; }
    let current = 0;
    const increment = valor / (duracao / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= valor) { current = valor; clearInterval(timer); }
      el!.textContent = `${prefixo}${current.toFixed(digits)}${sufixo}`;
    }, 16);
    return () => clearInterval(timer);
  }, [visivel, valor, sufixo, prefixo, duracao, digits, reduced]);
  return <span ref={ref}>{reduced ? `${prefixo}${valor.toFixed(digits)}${sufixo}` : `${prefixo}0${sufixo}`}</span>;
}

// Framer Motion variants
export const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 20 } };
export const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };
export const slideLeft = { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 } };
export const slideRight = { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 20 } };
export const staggerContainer = { initial: {}, animate: { transition: { staggerChildren: 0.1 } } };
export const staggerItem = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const animationVariants = { fadeUp, fadeIn, slideLeft, slideRight };

export function SectionAnimation({ children, className, variant }: {
  children: React.ReactNode; className?: string; variant: keyof typeof animationVariants;
}) {
  const reduced = usePrefersReducedMotion();
  const varKey = reduced ? "fadeIn" : variant;
  return <motion.div className={className} variants={animationVariants[varKey]} initial="initial" animate="animate" exit="exit">{children}</motion.div>;
}

export function CardHover({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <div className={`${className || ""} transition-colors`}>{children}</div>;
  return <motion.div className={className} whileHover={{ scale: 1.03, boxShadow: "0 20px 30px rgba(0,0,0,0.15)" }} transition={{ type: "spring", stiffness: 300 }}>{children}</motion.div>;
}
