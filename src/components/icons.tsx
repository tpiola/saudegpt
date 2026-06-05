import type { SVGProps } from "react";

// Conjunto de ícones finos (stroke) usados na plataforma.
const paths: Record<string, React.ReactNode> = {
  spa: (
    <>
      <path d="M12 21c-3-3-7-4.5-7-9a7 7 0 0 1 14 0c0 4.5-4 6-7 9Z" />
      <path d="M12 12c0-3 1.5-5 4-6" />
      <path d="M12 12c0-3-1.5-5-4-6" />
    </>
  ),
  pill: (
    <>
      <rect x="3" y="8" width="18" height="8" rx="4" />
      <path d="M12 8v8" />
    </>
  ),
  star: <path d="m12 3 2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.9 6.8 19l1-5.8-4.2-4.1 5.8-.8L12 3Z" />,
  trending: (
    <>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M17 7h4v4" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
    </>
  ),
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />,
  check: <path d="m5 12 5 5 9-11" />,
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  play: <path d="M7 5v14l11-7L7 5Z" />,
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  book: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z" />
      <path d="M19 19H6a2 2 0 0 0-2 2" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" />
    </>
  ),
  chart: (
    <>
      <path d="M4 4v16h16" />
      <path d="M8 16v-4M12 16V8M16 16v-6" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 4l1.5 4.5L18 10l-4.5 1.5L12 16l-1.5-4.5L6 10l4.5-1.5L12 4Z" />
      <path d="M19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  heart: <path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.4-7 10-7 10Z" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  flame: (
    <path d="M12 3c1 3 4 4 4 8a4 4 0 0 1-8 0c0-1.5.5-2.5 1-3 .3 1 1 1.5 1.5 1.5C10 8 11 5 12 3Z" />
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14l-2 7 5-3 5 3-2-7" />
    </>
  ),
  graduation: (
    <>
      <path d="M3 9l9-4 9 4-9 4-9-4Z" />
      <path d="M7 11v4c0 1.5 2.2 3 5 3s5-1.5 5-3v-4" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 6-13 14-13 0 8-6 13-14 13Z" />
      <path d="M5 19c3-4 6-6 9-7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  home: (
    <>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M8 12c0 2 1.8 4 4 4s4-2 4-4" />
      <path d="M9 9h.01" />
      <path d="M15 9h.01" />
    </>
  ),
  zap: (
    <>
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
    </>
  ),
  gift: (
    <>
      <rect x="4" y="10" width="16" height="12" rx="2" />
      <path d="M4 10V8a2 2 0 0 1 2-2h1a4 4 0 0 1 4 4" />
      <path d="M20 10V8a2 2 0 0 0-2-2h-1a4 4 0 0 0-4 4" />
      <path d="M12 6v16" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M2 12h20" />
      <path d="M12 2a14 14 0 0 0 0 20 14 14 0 0 0 0-20Z" />
    </>
  ),
  message: (
    <>
      <path d="M21 12a9 9 0 1 1-16-6l-2 5 5-2a9 9 0 0 1 13-3Z" />
    </>
  ),
  repeat: (
    <>
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="m14.5 12-5-2.5L12 12l2.5 5 2.5-5-5-2.5 5 2.5Z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="7" r="4" />
      <path d="M3 17c0-2 2.5-5 6-5s6 3 6 5" />
      <path d="M17 8c2 0 4 1.5 4 3.5" />
      <path d="M21 17c0-1.5-1-3-2.5-3.5" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export function Icon({
  name,
  size = 20,
  "sm-size": smSize,
  className,
  ...props
}: { name: IconName; size?: number; "sm-size"?: number; className?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`${smSize ? `sm:w-[${smSize}px] sm:h-[${smSize}px]` : ""} ${className || ""}`}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
