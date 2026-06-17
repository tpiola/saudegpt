"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

/** Fade-up animation on scroll using spring physics. Wraps children and animates in on first view. */
export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 22,
        mass: 0.8,
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
