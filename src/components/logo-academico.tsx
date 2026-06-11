interface LogoAcademicoProps {
    size?: number;
    className?: string;
}

export function LogoAcademico({ size = 32, className = "" }: LogoAcademicoProps) {
    return (
          <svg
                  width={size}
                  height={size}
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={className}
                  role="img"
                  aria-label="SaudeGPT"
                >
                <defs>
                        <linearGradient id="sg-bg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                                  <stop offset="0%" stopColor="#0a3d35" />
                                  <stop offset="60%" stopColor="#0f5c48" />
                                  <stop offset="100%" stopColor="#1a7a5f" />
                        </linearGradient>linearGradient>
                        <linearGradient id="sg-cross" x1="0" y1="0" x2="1" y2="1">
                                  <stop offset="0%" stopColor="#ffffff" />
                                  <stop offset="100%" stopColor="#e0f2e9" />
                        </linearGradient>linearGradient>
                        <linearGradient id="sg-pulse" x1="0" y1="0" x2="1" y2="0">
                                  <stop offset="0%" stopColor="#f97316" />
                                  <stop offset="100%" stopColor="#fbbf24" />
                        </linearGradient>linearGradient>
                        <filter id="sg-glow" x="-20%" y="-20%" width="140%" height="140%">
                                  <feGaussianBlur stdDeviation="1" result="blur" />
                                  <feMerge>
                                              <feMergeNode in="blur" />
                                              <feMergeNode in="SourceGraphic" />
                                  </feMerge>feMerge>
                        </filter>filter>
                </defs>defs>
                <rect width="40" height="40" rx="11" fill="url(#sg-bg)" />
                <rect x="1" y="1" width="38" height="20" rx="10" fill="white" fillOpacity="0.05" />
                <rect x="17" y="9" width="6" height="22" rx="2.5" fill="url(#sg-cross)" />
                <rect x="9" y="17" width="22" height="6" rx="2.5" fill="url(#sg-cross)" />
                <path
                          d="M4 33 L9 33 L12 28 L15 36 L18 25 L21 34 L24 31 L27 33 L36 33"
                          stroke="url(#sg-pulse)"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          filter="url(#sg-glow)"
                        />
          </svg>svg>
        );
}</svg>
