"use client";

import React from "react";
import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   SVG VECTORS — Ilustrações profissionais para cursos de saúde
   Não uso imagens stock/IA — vetores puros no design system
   ═══════════════════════════════════════════════════════════════ */

/* ── Farmácia: Cruz + DNA + Cápsulas ── */
export function FarmaciaVector({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 140" className={className} fill="none" aria-hidden>
      {/* Background circle */}
      <circle cx="100" cy="70" r="65" fill="url(#farmaBg)" opacity="0.15" />
      <defs>
        <radialGradient id="farmaBg">
          <stop offset="0%" stopColor="#00F5FF" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="farmaGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00F5FF" />
          <stop offset="100%" stopColor="#00A8B5" />
        </linearGradient>
      </defs>
      {/* Medical Cross */}
      <rect x="88" y="12" width="24" height="76" rx="4" fill="url(#farmaGrad)" opacity="0.9" />
      <rect x="62" y="38" width="76" height="24" rx="4" fill="url(#farmaGrad)" opacity="0.9" />
      {/* Capsule left */}
      <rect x="16" y="90" width="36" height="18" rx="9" fill="#00F5FF" opacity="0.4" />
      <rect x="16" y="90" width="18" height="18" rx="9" fill="#00F5FF" opacity="0.4" />
      {/* Capsule right */}
      <rect x="148" y="90" width="36" height="18" rx="9" fill="#00A8B5" opacity="0.4" />
      <rect x="166" y="90" width="18" height="18" rx="9" fill="#00A8B5" opacity="0.4" />
      {/* DNA helix dots */}
      {[0,1,2,3,4].map((i) => (
        <React.Fragment key={i}>
          <circle cx={170 + i*5} cy={20 + i*18} r="3" fill="#00F5FF" opacity="0.3" />
          <circle cx={30 - i*5} cy={20 + i*18} r="3" fill="#00A8B5" opacity="0.3" />
        </React.Fragment>
      ))}
    </svg>
  );
}

/* ── Nutrição: Maçã + Gráfico Nutricional ── */
export function NutricaoVector({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 140" className={className} fill="none" aria-hidden>
      <circle cx="100" cy="70" r="65" fill="url(#nutriBg)" opacity="0.15" />
      <defs>
        <radialGradient id="nutriBg">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* Apple body */}
      <path d="M100 30 C70 30 55 55 55 80 C55 105 75 120 100 120 C125 120 145 105 145 80 C145 55 130 30 100 30Z" fill="#F59E0B" opacity="0.7" />
      {/* Leaf */}
      <path d="M100 30 C105 15 120 10 125 20 C120 25 110 28 100 30Z" fill="#FBBF24" opacity="0.8" />
      {/* Stem */}
      <line x1="100" y1="30" x2="100" y2="18" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      {/* Nutrition chart bars */}
      <rect x="20" y="95" width="12" height="30" rx="3" fill="#F59E0B" opacity="0.3" />
      <rect x="36" y="85" width="12" height="40" rx="3" fill="#F59E0B" opacity="0.5" />
      <rect x="52" y="75" width="12" height="50" rx="3" fill="#F59E0B" opacity="0.4" />
      <rect x="68" y="90" width="12" height="35" rx="3" fill="#F59E0B" opacity="0.35" />
      {/* DNA helix on right */}
      {[0,1,2,3].map((i) => (
        <React.Fragment key={i}>
          <circle cx={160 + i*8} cy={35 + i*20} r="3" fill="#F59E0B" opacity="0.25" />
          <circle cx={175 - i*8} cy={35 + i*20} r="3" fill="#FBBF24" opacity="0.25" />
        </React.Fragment>
      ))}
    </svg>
  );
}

/* ── Reabilitação: Movimento + Articulações ── */
export function ReabilitacaoVector({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 140" className={className} fill="none" aria-hidden>
      <circle cx="100" cy="70" r="65" fill="url(#reabBg)" opacity="0.15" />
      <defs>
        <radialGradient id="reabBg">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* Spine / Posture outline */}
      <path d="M100 25 C95 40 90 50 92 65 C94 80 91 90 93 105" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      {/* Motion arcs */}
      <path d="M70 90 Q55 60 80 45" stroke="#60A5FA" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.5" />
      <path d="M130 90 Q145 60 120 45" stroke="#60A5FA" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.5" />
      {/* Joint circles */}
      <circle cx="93" cy="105" r="6" fill="#3B82F6" opacity="0.5" />
      <circle cx="100" cy="25" r="6" fill="#3B82F6" opacity="0.5" />
      <circle cx="92" cy="65" r="6" fill="#60A5FA" opacity="0.4" />
      {/* Knee joints */}
      <circle cx="65" cy="105" r="8" fill="#3B82F6" opacity="0.35" />
      <circle cx="135" cy="105" r="8" fill="#3B82F6" opacity="0.35" />
      {/* Exercise bands */}
      <path d="M40 90 Q65 60 85 45" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M160 90 Q135 60 115 45" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

/* ── Saúde Mental: Cérebro + Ondas ── */
export function SaudeMentalVector({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 140" className={className} fill="none" aria-hidden>
      <circle cx="100" cy="70" r="65" fill="url(#mentalBg)" opacity="0.15" />
      <defs>
        <radialGradient id="mentalBg">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* Brain hemispheres */}
      <path d="M75 40 C65 30 50 35 50 55 C50 75 70 90 85 80" stroke="#C084FC" strokeWidth="3" fill="none" opacity="0.7" />
      <path d="M125 40 C135 30 150 35 150 55 C150 75 130 90 115 80" stroke="#A855F7" strokeWidth="3" fill="none" opacity="0.7" />
      {/* Neural connections */}
      {[0,1,2,3,4].map((i) => (
        <circle key={i} cx={85 + i*8} cy={60 + i*6} r="2.5" fill="#C084FC" opacity="0.5" />
      ))}
      {[0,1,2,3,4].map((i) => (
        <circle key={`r${i}`} cx={115 - i*8} cy={60 + i*6} r="2.5" fill="#A855F7" opacity="0.5" />
      ))}
      {/* Calm waves at bottom */}
      <path d="M30 110 Q55 95 80 110 Q105 125 130 110 Q155 95 170 110" stroke="#C084FC" strokeWidth="1.5" fill="none" opacity="0.3" />
      <path d="M30 118 Q55 103 80 118 Q105 133 130 118 Q155 103 170 118" stroke="#A855F7" strokeWidth="1.5" fill="none" opacity="0.2" />
      {/* Heart symbol */}
      <path d="M140 15 C140 8 133 5 128 10 C123 5 116 8 116 15 C116 25 128 32 128 32 C128 32 140 25 140 15Z" fill="#FF6B6B" opacity="0.4" />
    </svg>
  );
}

/* ── Cuidador: Mãos + Coração ── */
export function CuidadorVector({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 140" className={className} fill="none" aria-hidden>
      <circle cx="100" cy="70" r="65" fill="url(#cuidadorBg)" opacity="0.15" />
      <defs>
        <radialGradient id="cuidadorBg">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* Heart center */}
      <path d="M100 45 C100 35 91 25 82 30 C73 35 73 50 82 58 C91 66 100 70 100 70 C100 70 109 66 118 58 C127 50 127 35 118 30 C109 25 100 35 100 45Z" fill="#F97316" opacity="0.5" />
      {/* Hands cupping */}
      <path d="M50 75 C40 70 25 72 25 80 C25 88 40 95 55 92" stroke="#F97316" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M150 75 C160 70 175 72 175 80 C175 88 160 95 145 92" stroke="#F97316" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Protection shield */}
      <path d="M85 95 L100 82 L115 95 L105 112 L95 112 Z" stroke="#FB923C" strokeWidth="1.5" fill="none" opacity="0.35" />
      {/* Stars top */}
      {[70, 100, 130].map((x) => (
        <path key={x} d={`M${x} 15 L${x+2} 10 L${x+4} 15 L${x+2} 20 Z`} fill="#F97316" opacity="0.3" />
      ))}
    </svg>
  );
}
