"use client";

import { cn } from "@/lib/utils";

interface LogoSaudeGPTProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  showText?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { icon: 28, text: "text-sm", tagline: "text-[10px]" },
  md: { icon: 36, text: "text-base", tagline: "text-[11px]" },
  lg: { icon: 44, text: "text-lg", tagline: "text-xs" },
};

export function LogoSaudeGPT({
  variant = "dark",
  size = "md",
  showIcon = true,
  showText = true,
  className,
}: LogoSaudeGPTProps) {
  const s = sizeMap[size];
  const navy = variant === "dark" ? "#0A2540" : "#FFFFFF";
  const teal = "#00C9A7";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 leading-none",
        className,
      )}
    >
      {/* Icon — pill + smart/AI element */}
      {showIcon && (
        <svg
          width={s.icon}
          height={s.icon}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="shrink-0"
        >
          {/* Circular background */}
          <circle cx="22" cy="22" r="22" fill={navy} />

          {/* Pill / Capsule body */}
          <rect
            x="12"
            y="16"
            width="20"
            height="14"
            rx="7"
            fill={teal}
            opacity="0.18"
          />
          <rect
            x="12"
            y="16"
            width="20"
            height="14"
            rx="7"
            stroke={teal}
            strokeWidth="1.4"
            opacity="0.7"
          />

          {/* Pill left half fill (teal) */}
          <rect
            x="12"
            y="16"
            width="10"
            height="14"
            rx="7"
            fill={teal}
          />

          {/* Pill right half fill (white/transparent) */}
          <rect
            x="22"
            y="16"
            width="10"
            height="14"
            rx="7"
            fill={navy}
            opacity="0.15"
          />

          {/* Pill divider line */}
          <line
            x1="22"
            y1="16"
            x2="22"
            y2="30"
            stroke={teal}
            strokeWidth="1"
            opacity="0.3"
          />

          {/* AI / Sparkle dot inside left pill half */}
          <circle cx="17" cy="23" r="1.8" fill={navy} opacity="0.9" />

          {/* Small circuit/AI pulse lines */}
          <path
            d="M27 20L29 22L27 24"
            stroke={teal}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
          <path
            d="M29 22H32"
            stroke={teal}
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Smart cap / graduation element on top */}
          <path
            d="M22 10L27 14L22 17L17 14L22 10Z"
            stroke={teal}
            strokeWidth="1.2"
            strokeLinejoin="round"
            opacity="0.5"
            fill="none"
          />
          <line
            x1="22"
            y1="14"
            x2="22"
            y2="17"
            stroke={teal}
            strokeWidth="1"
            opacity="0.4"
          />
        </svg>
      )}

      {/* Text */}
      {showText && (
        <span className="flex flex-col leading-tight">
          <span
            className={cn(
              "font-extrabold tracking-tight",
              s.text,
              variant === "dark" ? "text-[#0A2540]" : "text-white",
            )}
          >
            Saúde<span className="text-[#00C9A7]">GPT</span>
          </span>
          <span
            className={cn(
              "font-medium tracking-wide",
              s.tagline,
              variant === "dark" ? "text-[#4A5568]" : "text-white/55",
            )}
          >
            Farmácia, atendimento e segurança
          </span>
        </span>
      )}
    </span>
  );
}
