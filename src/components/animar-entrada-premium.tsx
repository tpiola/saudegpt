"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type Direction = "fade-up" | "fade-left" | "fade-right" | "scale-in" | "slide-up";

interface AnimarEntradaPremiumProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  /** If true, applies stagger to direct children with .anim-reveal class */
  stagger?: boolean;
  /** Threshold for IntersectionObserver (0-1) */
  threshold?: number;
  /** Root margin for IntersectionObserver */
  rootMargin?: string;
  className?: string;
  /** If true, animation only plays once */
  once?: boolean;
}

/**
 * Premium Scroll Reveal Component
 * Uses IntersectionObserver + CSS transitions (no framer-motion).
 *
 * @example
 * <AnimarEntradaPremium direction="fade-up" delay={200}>
 *   <div>Content</div>
 * </AnimarEntradaPremium>
 *
 * @example with stagger
 * <AnimarEntradaPremium stagger>
 *   <div className="anim-reveal anim-fade-up">Item 1</div>
 *   <div className="anim-reveal anim-fade-up">Item 2</div>
 *   <div className="anim-reveal anim-fade-up">Item 3</div>
 * </AnimarEntradaPremium>
 */
export function AnimarEntradaPremium({
  children,
  direction = "fade-up",
  delay = 0,
  duration = 800,
  stagger = false,
  threshold = 0.1,
  rootMargin = "0px 0px -40px 0px",
  className = "",
  once = true,
}: AnimarEntradaPremiumProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (once && ref.current) {
          const observer = IntersectionObserverRegistry.get(ref.current);
          if (observer) {
            observer.unobserve(ref.current);
          }
        }
      } else if (!once) {
        setIsVisible(false);
      }
    },
    [once],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check for reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => handleIntersect(entries),
      { threshold, rootMargin },
    );

    observer.observe(el);
    IntersectionObserverRegistry.set(el, observer);

    return () => {
      observer.disconnect();
      IntersectionObserverRegistry.delete(el);
    };
  }, [handleIntersect, threshold, rootMargin]);

  const animClass = stagger
    ? "stagger-children"
    : `anim-reveal anim-${direction}`;

  return (
    <div
      ref={ref}
      className={`${animClass} ${isVisible ? (stagger ? "" : "anim-visible") : ""} ${className}`}
      style={{
        ...(stagger ? {} : { transitionDuration: `${duration}ms` }),
        ...(stagger ? {} : { transitionDelay: `${delay}ms` }),
      }}
    >
      {children}
    </div>
  );
}

/**
 * Singleton registry to avoid leaking IntersectionObservers
 */
const IntersectionObserverRegistry = new Map<
  HTMLElement,
  IntersectionObserver
>();

/**
 * Hook para usar magnetic hover em qualquer elemento.
 * Aplica CSS vars --mouse-x-rel e --mouse-y-rel (-1 to 1) via JS.
 *
 * @example
 * const magneticRef = useMagneticHover<HTMLDivElement>();
 * return <div ref={magneticRef} className="magnetic-hover">Card</div>;
 */
export function useMagneticHover<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0-1
      const y = (e.clientY - rect.top) / rect.height; // 0-1
      const xRel = (x - 0.5) * 2; // -1 to 1
      const yRel = (y - 0.5) * 2; // -1 to 1
      el.style.setProperty("--mouse-x-rel", String(xRel));
      el.style.setProperty("--mouse-y-rel", String(yRel));
    };

    const handleMouseLeave = () => {
      el.style.setProperty("--mouse-x-rel", "0");
      el.style.setProperty("--mouse-y-rel", "0");
    };

    el.addEventListener("mousemove", handleMouseMove, { passive: true });
    el.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return ref;
}
