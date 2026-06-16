"use client";

import { useEffect, useRef, useId } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Hook: parallax no hero ── */
export function useHeroParallax(
  ref: React.RefObject<HTMLElement | null>,
  { start = "top top", end = "bottom top" } = {},
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Video/background parallax
      gsap.to("[data-hero-bg]", {
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub: true,
        },
      });

      // Overlay opacity fade out on scroll
      gsap.fromTo(
        "[data-hero-overlay]",
        { opacity: 0.35 },
        {
          opacity: 0.6,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: true,
          },
        },
      );

      // Content opacity fade out on scroll
      gsap.to("[data-hero-content]", {
        opacity: 0,
        y: -60,
        scale: 0.95,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start,
          end: "center+=20% bottom",
          scrub: 1.2,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [ref, start, end]);
}

/* ── Hook: scroll reveal (fade-up + scale-in) ── */
export function useScrollReveal(
  triggers: { ref: React.RefObject<HTMLDivElement | null>; delay?: number }[],
  { threshold = 0.15, stagger = 0.1 } = {},
) {
  const id = useId();

  useEffect(() => {
    const ctx = gsap.context(() => {
      triggers.forEach(({ ref: triggerRef, delay = 0 }, i) => {
        const el = triggerRef.current;
        if (!el) return;

        // Find children marked for animation
        const items = el.querySelectorAll<HTMLElement>("[data-reveal]");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 40, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: stagger,
              delay,
              scrollTrigger: {
                trigger: el,
                start: `top+=${Math.round(threshold * 100)}% bottom`,
                end: "bottom top",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, stagger, triggers.map((t) => t.ref.current).join(",")]);
}

/* ── Hook: text reveal (character/word splitting) ── */
export function useTextReveal(
  ref: React.RefObject<HTMLDivElement | null>,
  { delay = 0, duration = 0.6, y = 30, scrub = false } = {},
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const targets = el.querySelectorAll<HTMLElement>("[data-text-reveal]");
      if (!targets.length) return;

      targets.forEach((target) => {
        // Wrap each word in a span for word-by-word reveal
        const text = target.textContent || "";
        const words = text.split(" ");
        target.textContent = "";

        const wrapper = document.createElement("span");
        wrapper.style.display = "inline-block";
        wrapper.style.overflow = "hidden";

        words.forEach((word, i) => {
          const span = document.createElement("span");
          span.textContent = word + (i < words.length - 1 ? "\u00A0" : "");
          span.style.display = "inline-block";
          span.style.transform = "translateY(100%)";
          span.style.opacity = "0";
          wrapper.appendChild(span);
        });

        target.appendChild(wrapper);

        const spans = wrapper.children;

        if (scrub) {
          gsap.to(spans, {
            y: 0,
            opacity: 1,
            duration,
            stagger: 0.04,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: target,
              start: "top 85%",
              end: "top 35%",
              scrub: 1,
            },
          });
        } else {
          gsap.to(spans, {
            y: 0,
            opacity: 1,
            duration,
            stagger: 0.04,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: target,
              start: "top 85%",
              end: "bottom top",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    }, el);

    return () => ctx.revert();
  }, [ref, delay, duration, y, scrub]);
}

/* ── Hook: animated gradient particles (GSAP-based) ── */
export function useAnimatedParticles(
  containerRef: React.RefObject<HTMLDivElement | null>,
  { count = 20, colors = ["rgba(16, 185, 129, 0.3)", "rgba(245, 158, 11, 0.2)", "rgba(255, 255, 255, 0.1)"] } = {},
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const particles: HTMLDivElement[] = [];

      for (let i = 0; i < count; i++) {
        const size = 2 + Math.random() * 6;
        const el = document.createElement("div");
        el.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          background: ${colors[i % colors.length]};
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          pointer-events: none;
        `;
        container.appendChild(el);
        particles.push(el);

        gsap.to(el, {
          y: -(30 + Math.random() * 60),
          x: (Math.random() - 0.5) * 30,
          opacity: 0.6,
          duration: 3 + Math.random() * 4,
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 5,
          ease: "sine.inOut",
        });
      }

      return () => {
        particles.forEach((p) => p.remove());
      };
    });

    return () => ctx.revert();
  }, [containerRef, count, colors]);
}
