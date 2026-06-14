interface PillCapProps {
  size?: number;
  className?: string;
}

export function PillCap({ size = 28, className = "" }: PillCapProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Pílula (comprimido) */}
      <rect x="6" y="11" width="16" height="10" rx="5" fill="currentColor" opacity="0.9" />
      <rect x="6" y="13" width="16" height="2" fill="white" opacity="0.15" />
      {/* Chapéu de estudante */}
      <path
        d="M14 3L3 10.5L14 18L25 10.5L14 3Z"
        fill="currentColor"
        opacity="0.95"
      />
      {/* Borla do chapéu */}
      <line x1="14" y1="10" x2="14" y2="18" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
      <circle cx="14" cy="18.5" r="1.2" fill="currentColor" opacity="0.8" />
      {/* Detalhe do chapéu */}
      <path d="M3 10.5V14" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M25 10.5V14" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}
