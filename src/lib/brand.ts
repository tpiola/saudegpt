// ═══════════════════════════════════════════════════════════════
// BRAND — Design System do SaúdeGPT
// Paleta Navy Luxury: navy #0A1628 + gold #D4A843
// ═══════════════════════════════════════════════════════════════

export const brand = {
  /** Nome institucional */
  nome: "SaúdeGPT",
  nomeCurto: "SaúdeGPT",

  /** Assinatura do criador */
  assinatura: "Criado pelo Farmacêutico Thiago B. G. Piola · CRF-SP 58.519",


  // ── Paleta de Cores ──────────────────────────────────────

  colors: {
    // Gold (accent luxury)
    gold: {
      50: "#fef9ec",
      100: "#fcedc8",
      200: "#f9dc93",
      300: "#f4c65e",
      400: "#D4A843",
      500: "#b8922e",
      600: "#9a7825",
      700: "#7d5f1e",
      800: "#604817",
      900: "#423010",
    },

    // Navy (base luxury)
    navy: {
      50: "#eef2f8",
      100: "#d0d9e8",
      200: "#b0bdd4",
      300: "#8da0bd",
      400: "#7186a8",
      500: "#586d8f",
      600: "#435572",
      700: "#2f3f58",
      800: "#1c2a40",
      850: "#14202f",
      900: "#0A1628",
      950: "#060e1a",
    },

    // Platinum (neutral premium)
    platinum: {
      50: "#f8f9fb",
      100: "#eef0f5",
      200: "#dce0ea",
      300: "#c4c9d7",
      400: "#a8aec0",
      500: "#8b92a5",
      600: "#6f7689",
      700: "#555b6d",
      800: "#3d4352",
      900: "#272c38",
    },

    // Emerald Health (farmácia credibilidade)
    mint: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
    },

    // Dark mode navy
    dark: {
      bg: "#0A1628",
      surface: "#14202f",
      border: "#1c2a40",
    },

    // Light mode
    light: {
      bg: "#f8f9fb",
      surface: "#ffffff",
    },
  },

  // ── Gradientes ───────────────────────────────────────────

  gradients: {
    card: "bg-gradient-to-br from-white to-gold-50/50 dark:from-navy-800 dark:to-gold-950/20",
    hero: "bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900",
    accent: "bg-gradient-to-r from-gold-400 to-gold-500",
    trust: "bg-gradient-to-br from-blue-500 to-indigo-600",
    warm: "bg-gradient-to-br from-gold-500 to-gold-400",
  },

  // ── Tipografia ───────────────────────────────────────────

  fonts: {
    body: "'Inter', system-ui, sans-serif",
    display: "'DM Sans', 'Inter', system-ui, sans-serif",
  },
} as const;
