// ═══════════════════════════════════════════════════════════════
// BRAND — Design System do SaúdeGPT
// Paleta farmácia/saúde: verde menta, azul confiança, branco clínico
// ═══════════════════════════════════════════════════════════════

export const brand = {
  /** Nome institucional */
  nome: "SaúdeGPT",
  nomeCurto: "SaúdeGPT",

  /** Assinatura do criador */
  assinatura: "Criado pelo Farmacêutico Thiago B. G. Piola · CRF-SP 58.519",

  /** Sponsor */
  sponsor: "Rei das Vendas",
  sponsorUrl: "https://www.reidasvendas.com.br",

  // ── Paleta de Cores ──────────────────────────────────────

  colors: {
    // Verde Menta (saúde/farmácia)
    mint: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#4ADE80",
      500: "#22C55E",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
    },

    // Azul Confiança
    trust: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3B82F6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },

    // Branco Clínico
    clinical: {
      50: "#F8FAFC",
      100: "#f1f5f9",
      200: "#e2e8f0",
    },

    // Dark mode OLED-friendly
    dark: {
      bg: "#0F172A",
      surface: "#1e293b",
      border: "#334155",
    },

    // Light mode clínico
    light: {
      bg: "#F8FAFC",
      surface: "#ffffff",
    },
  },

  // ── Gradientes ───────────────────────────────────────────

  gradients: {
    card: "bg-gradient-to-br from-white to-emerald-50/50 dark:from-midnight-800 dark:to-emerald-950/20",
    hero: "bg-gradient-to-br from-emerald-500 via-emerald-600 to-forest-600",
    accent: "bg-gradient-to-r from-emerald-400 to-green-500",
    trust: "bg-gradient-to-br from-blue-500 to-indigo-600",
    warm: "bg-gradient-to-br from-orange-500 to-yellow-500",
  },

  // ── Tipografia ───────────────────────────────────────────

  fonts: {
    body: "'Inter', system-ui, sans-serif",
    display: "'DM Sans', 'Inter', system-ui, sans-serif",
  },
} as const;
