interface SectionVideoProps {
  /** Escurecimento extra */
  overlay?: string;
}

export function SectionVideo({
  overlay = "from-transparent via-transparent to-transparent",
}: SectionVideoProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-b ${overlay}`} />
    </div>
  );
}

/**
 * Section-specific video configurations
 */
export const SECTION_VIDEOS = {
  missao: {
    videos: [34625, 33268, 35887],
    opacity: 0.08,
    overlay: "from-green-950 via-emerald-950/90 to-forest-950",
  },
  cta: {
    videos: [16533, 34269, 33245],
    opacity: 0.06,
    overlay: "from-green-900/90 via-emerald-800/90 to-forest-900/90",
  },
  jornada: {
    videos: [5603, 5765, 5767],
    opacity: 0.04,
    overlay: "from-surface via-surface/95 to-surface",
  },
} as const;
