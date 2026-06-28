import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
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
          950: "#022c22",
        },
        navy: {
          50: "#E8ECF2",
          100: "#D0D9E5",
          200: "#A0B3CB",
          300: "#708DB1",
          400: "#406797",
          500: "#0A2540",
          600: "#081E33",
          700: "#061726",
          800: "#04101A",
        },
        gold: {
          100: "#F8F2E8",
          200: "#F0E5D0",
          300: "#E8D0A0",
          400: "#D4B880",
          500: "#C4A97D",
          600: "#B09860",
        },
        surface: {
          DEFAULT: "#F8F9FB",
          alt: "#F0F2F5",
          card: "#FFFFFF",
        },
        text: {
          primary: "#1A1A2E",
          secondary: "#4A4A5E",
          muted: "#8A8A9E",
        },
      },
      fontFamily: {
        display: ["DM Sans", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "18px",
        "2xl": "24px",
        full: "9999px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(10, 37, 64, 0.04)",
        sm: "0 2px 8px rgba(10, 37, 64, 0.06)",
        md: "0 4px 16px rgba(10, 37, 64, 0.08)",
        lg: "0 8px 32px rgba(10, 37, 64, 0.10)",
        xl: "0 16px 48px rgba(10, 37, 64, 0.12)",
        navy: "0 4px 24px rgba(10, 37, 64, 0.15)",
        gold: "0 4px 20px rgba(196, 169, 125, 0.15)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.8" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        marquee: "marquee 35s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        breathe: "breathe 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
