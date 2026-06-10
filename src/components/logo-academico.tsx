interface LogoAcademicoProps {
  size?: number;
  className?: string;
}

export function LogoAcademico({ size = 32, className = "" }: LogoAcademicoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="SaudeGPT"
    >
      <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#sg-grad)" />
      <path d="M16 8.5l8 3.6-8 3.6-8-3.6 8-3.6z" fill="#ffffff" />
      <path d="M16 15.7v5.2" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M22 13.1v3.4c0 2.5-2.7 3.9-6 3.9" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <circle cx="22.4" cy="20.6" r="1.9" fill="#f08a1d" />
      <circle cx="22.4" cy="20.6" r="3.4" fill="#f08a1d" opacity="0.18" />
      <defs>
        <linearGradient id="sg-grad" x1="2" y1="2" x2="30" y2="30">
          <stop offset="0%" stopColor="#0f4339" />
          <stop offset="100%" stopColor="#1c7a5f" />
        </linearGradient>
      </defs>
    </svg>
  );
}
