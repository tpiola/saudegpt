"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── Hook: prefers-reduced-motion ───────────────────────────────────────────

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

// ─── Helpers de movimento ───────────────────────────────────────────────────

const CUBIC_BEZIER = "cubic-bezier(0.16, 1, 0.3, 1)";

const transformMap: Record<string, string> = {
  up: "translateY(40px)",
  down: "translateY(-40px)",
  left: "translateX(-40px)",
  right: "translateX(40px)",
  scale: "scale(0.9)",
  none: "none",
};

// ─── ScrollReveal ───────────────────────────────────────────────────────────

/**
 * Reveal animado ao scroll com IntersectionObserver.
 * Respeita prefers-reduced-motion: desativa animações se o usuário preferir.
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
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced) {
      setVisivel(true);
      return;
    }

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
  }, [threshold, once, reduced]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: reduced || visivel ? 1 : 0,
        transform: reduced || visivel ? "none" : transformMap[direction],
        transition:
          reduced
            ? "none"
            : `opacity ${duration}ms ${CUBIC_BEZIER}, transform ${duration}ms ${CUBIC_BEZIER}`,
        transitionDelay: reduced ? "0ms" : `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── ScrollRevealStagger ────────────────────────────────────────────────────

/**
 * Stagger reveals: aplica ScrollReveal com delays progressivos em cada filho.
 *
 * @example
 * <ScrollRevealStagger baseDelay={100} staggerDelay={150} direction="up">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </ScrollRevealStagger>
 */
export function ScrollRevealStagger({
  children,
  className = "",
  baseDelay = 0,
  staggerDelay = 100,
  direction = "up",
  duration = 600,
  threshold = 0.1,
  once = true,
  wrapperClassName = "",
}: {
  children: React.ReactNode;
  className?: string;
  baseDelay?: number;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  duration?: number;
  threshold?: number;
  once?: boolean;
  wrapperClassName?: string;
}) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <div className={className}>
      {items.map((child, i) =>
        child != null ? (
          <ScrollReveal
            key={i}
            delay={baseDelay + i * staggerDelay}
            direction={direction}
            duration={duration}
            threshold={threshold}
            once={once}
            className={wrapperClassName}
          >
            {child}
          </ScrollReveal>
        ) : null,
      )}
    </div>
  );
}

// ─── ContadorAnimado ────────────────────────────────────────────────────────

/**
 * Contador animado — do número inicial ao final ao entrar na viewport.
 * Respeita prefers-reduced-motion: mostra o valor final imediatamente.
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
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced) {
      setVisivel(true);
      return;
    }

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
  }, [reduced]);

  useEffect(() => {
    if (!visivel) return;
    const el = ref.current;
    if (!el) return;

    if (reduced) {
      el.textContent = `${prefixo}${valor.toFixed(digits)}${sufixo}`;
      return;
    }

    let current = 0;
    const increment = valor / (duracao / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= valor) {
        current = valor;
        clearInterval(timer);
      }
      el.textContent = `${prefixo}${current.toFixed(digits)}${sufixo}`;
    }, 16);

    return () => clearInterval(timer);
  }, [visivel, valor, prefixo, sufixo, duracao, digits, reduced]);

  return (
    <span ref={ref}>
      {reduced ? `${prefixo}${valor.toFixed(digits)}${sufixo}` : `${prefixo}0${sufixo}`}
    </span>
  );
}

// ─── Parallax ───────────────────────────────────────────────────────────────

/**
 * Parallax sutil no scroll — ideal para hero images.
 * Respeita prefers-reduced-motion: desativa o parallax.
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
  const reduced = usePrefersReducedMotion();

  const handleScroll = useCallback(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const scrolled = window.innerHeight - rect.top;
    if (scrolled > -rect.height && scrolled < window.innerHeight + rect.height) {
      setOffset(scrolled * speed);
    }
  }, [speed, reduced]);

  useEffect(() => {
    if (reduced) {
      setOffset(0);
      return;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, reduced]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: reduced ? "none" : `translateY(${offset}px)`,
        willChange: reduced ? "auto" : "transform",
      }}
    >
      {children}
    </div>
  );
}

// ─── Typewriter ─────────────────────────────────────────────────────────────

/**
 * Texto que aparece letra por letra (typewriter).
 * Respeita prefers-reduced-motion: mostra o texto completo imediatamente.
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
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) {
      setIniciou(true);
      setMostrado(texto);
      return;
    }
    const t = setTimeout(() => setIniciou(true), delay);
    return () => clearTimeout(t);
  }, [delay, texto, reduced]);

  useEffect(() => {
    if (!iniciou || reduced) return;
    if (mostrado.length >= texto.length) return;

    const timer = setTimeout(() => {
      setMostrado(texto.slice(0, mostrado.length + 1));
    }, velocidade);

    return () => clearTimeout(timer);
  }, [iniciou, mostrado, texto, velocidade, reduced]);

  return (
    <span className={className}>
      {mostrado}
      {!reduced && mostrado.length < texto.length && (
        <span className="inline-block w-[2px] h-[1em] bg-current animate-pulse ml-0.5 align-middle" />
      )}
    </span>
  );
}
