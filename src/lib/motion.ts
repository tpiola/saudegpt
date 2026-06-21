/**
 * Premium Framer Motion Animation Variants
 * SaúdeGPT — Navy + Gold Luxury Minimalista
 * Optimized for 60fps, accessibility-respectful, micro-interactions
 */

import { Variants } from 'framer-motion';

// Easing curves — premium, natural feel
export const easings = {
  premium: [0.23, 1, 0.32, 1],       // Apple-like
  elegant: [0.22, 1, 0.36, 1],
  snappy: [0.32, 0.72, 0, 1],
  gentle: [0.25, 0.1, 0.25, 1],
} as const;

// Fade + Scale (modal, popover, tooltip)
export const fadeScale: Variants = {
  initial: { opacity: 0, scale: 0.96, y: 8 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.2, ease: easings.premium },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 6,
    transition: { duration: 0.15, ease: easings.gentle },
  },
};

// Fade Only (toasts, banners)
export const fade: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.25, ease: easings.gentle } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

// Slide Up (drawers, bottom sheets)
export const slideUp: Variants = {
  initial: { y: '100%', opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: easings.premium },
  },
  exit: {
    y: '100%',
    opacity: 0,
    transition: { duration: 0.25, ease: easings.gentle },
  },
};

// Stagger Container (list of cards, testimonials)
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

// Premium item stagger (used with staggerContainer)
export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.985 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: easings.elegant },
  },
};

// Page transitions (App Router)
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easings.premium },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25, ease: easings.gentle },
  },
};

// Card hover (luxury micro-interaction)
export const cardHover: Variants = {
  initial: { y: 0, scale: 1, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' },
  hover: {
    y: -4,
    scale: 1.015,
    boxShadow: '0 20px 40px -15px rgba(0,0,0,0.18)',
    transition: { duration: 0.2, ease: easings.elegant },
  },
  tap: { scale: 0.985 },
};

// Button premium press
export const buttonTap: Variants = {
  initial: { scale: 1 },
  tap: { scale: 0.965, transition: { duration: 0.1 } },
};

// Shimmer loading skeleton (gold accent)
export const shimmer: Variants = {
  initial: { backgroundPosition: '-200% 0' },
  animate: {
    backgroundPosition: '200% 0',
    transition: {
      duration: 1.8,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Reveal on scroll (for sections)
export const revealOnScroll: Variants = {
  initial: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.elegant },
  },
};

// Navigation menu (mobile drawer)
export const navDrawer: Variants = {
  closed: { x: '-100%', opacity: 0 },
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: easings.premium },
  },
};

// Modal (with backdrop)
export const modal: Variants = {
  initial: { opacity: 0, scale: 0.92, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 15,
    transition: { duration: 0.2 },
  },
};

// Reduced motion helper (WCAG)
export const shouldReduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Utility: create variants that respect reduced motion
export const createAccessibleVariants = <T extends Variants>(variants: T): T => {
  if (shouldReduceMotion()) {
    const result: Record<string, any> = {};
    for (const key of Object.keys(variants)) {
      result[key] = { ...(variants as any)[key], transition: { duration: 0.01 } };
    }
    return result as T;
  }
  return variants;
};
