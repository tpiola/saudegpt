"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal animado ao scroll com IntersectionObserver.
 * Usa fade-up + scale por padrão.
 */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 700,
  threshold = 0.1,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  duration?: number;
  threshold?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisivel(false);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);

  const transformMap: Record<string, string> = {
    up: "translateY(40px)",
    down: "translateY(-40px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
    scale: "scale(0.9)",
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visivel ? 1 : 0,
        transform: visivel ? "none" : transformMap[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Contador animado — do número inicial ao final ao entrar na viewport.
 */
export function ContadorAnimado({
  valor,
  sufixo = "",
  prefixo = "",
  duracao = 2000,
  digits = 0,
}: {
  valor: number;
  sufixo?: string;
  prefixo?: string;
  duracao?: number;
  digits?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visivel) return;
    const el = ref.current;
    if (!el) return;

    let start = 0;
    const increment = valor / (duracao / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= valor) {
        start = valor;
        clearInterval(timer);
      }
      el.textContent = `${prefixo}${start.toFixed(digits)}${sufixo}`;
    }, 16);

    return () => clearInterval(timer);
  }, [visivel, valor, prefixo, sufixo, duracao, digits]);

  return (
    <span ref={ref}>
      {prefixo}0{sufixo}
    </span>
  );
}

/**
 * Parallax sutil no scroll — ideal para hero images.
 */
export function Parallax({
  children,
  speed = 0.3,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      if (scrolled > -rect.height && scrolled < window.innerHeight + rect.height) {
        setOffset(scrolled * speed);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
}

/**
 * Texto que aparece letra por letra (typewriter).
 */
export function Typewriter({
  texto,
  velocidade = 40,
  delay = 0,
  className = "",
}: {
  texto: string;
  velocidade?: number;
  delay?: number;
  className?: string;
}) {
  const [mostrado, setMostrado] = useState("");
  const [iniciou, setIniciou] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIniciou(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!iniciou) return;
    if (mostrado.length >= texto.length) return;

    const timer = setTimeout(() => {
      setMostrado(texto.slice(0, mostrado.length + 1));
    }, velocidade);

    return () => clearTimeout(timer);
  }, [iniciou, mostrado, texto, velocidade]);

  return (
    <span className={className}>
      {mostrado}
      {mostrado.length < texto.length && (
        <span className="inline-block w-[2px] h-[1em] bg-current animate-pulse ml-0.5 align-middle" />
      )}
    </span>
  );
}
