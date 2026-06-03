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
      aria-label="Logo acadêmico farmácia"
    >
      {/* Background circle */}
      <circle cx="16" cy="16" r="15.5" fill="url(#logo-grad)" stroke="#d66e0f" strokeWidth="0.5" />

      {/* Graduation cap */}
      <path
        d="M16 6l-10 5.5 10 5.5 10-5.5L16 6z"
        fill="white"
        opacity="0.95"
      />
      <path
        d="M16 6l-10 5.5 10 5.5 10-5.5L16 6z"
        fill="none"
        stroke="white"
        strokeWidth="0.3"
        opacity="0.5"
      />

      {/* Tassel */}
      <path
        d="M16 11.5l0 5"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <circle cx="16" cy="17" r="0.8" fill="#d66e0f" />

      {/* Cross/cruz */}
      <rect x="12.5" y="8" width="7" height="1.8" rx="0.5" fill="#d66e0f" opacity="0.9" />
      <rect x="14.7" y="6.2" width="2.6" height="5.4" rx="0.5" fill="#d66e0f" opacity="0.9" />

      {/* Book pages */}
      <rect x="9" y="18" width="14" height="2" rx="0.5" fill="white" opacity="0.25" />
      <rect x="10" y="20.5" width="12" height="1.5" rx="0.4" fill="white" opacity="0.18" />
      <rect x="11" y="22.8" width="10" height="1.2" rx="0.3" fill="white" opacity="0.12" />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d3a32" />
          <stop offset="100%" stopColor="#155a4a" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconeFavicon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#0d3a32" />
      <path
        d="M16 5l-10 5.5 10 5.5 10-5.5L16 5z"
        fill="white"
        opacity="0.95"
      />
      <rect x="12.5" y="7" width="7" height="1.8" rx="0.5" fill="#d66e0f" opacity="0.9" />
      <rect x="14.7" y="5.2" width="2.6" height="5.4" rx="0.5" fill="#d66e0f" opacity="0.9" />
      <rect x="9" y="17" width="14" height="2" rx="0.5" fill="white" opacity="0.25" />
      <rect x="10" y="19.5" width="12" height="1.5" rx="0.4" fill="white" opacity="0.18" />
      <rect x="11" y="21.8" width="10" height="1.2" rx="0.3" fill="white" opacity="0.12" />
    </svg>
  );
}
