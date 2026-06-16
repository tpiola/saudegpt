"use client";

import { useState, useEffect } from "react";

// Player responsivo para YouTube, Vimeo ou iframe genérico.
function embedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com") || u.hostname.includes("youtu.be")) {
      const id =
        u.searchParams.get("v") ??
        (u.hostname === "youtu.be" ? u.pathname.slice(1) : u.pathname.split("/").pop());
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname.includes("vimeo.com")) {
      const id = u.pathname.split("/").filter(Boolean).pop();
      if (id) return `https://player.vimeo.com/video/${id}`;
    }
    return url;
  } catch {
    return null;
  }
}

export function VideoPlayer({ url, titulo }: { url: string; titulo: string }) {
  const embed = embedUrl(url);
  if (!embed) return null;

  return (
    <div className="aspect-video overflow-hidden rounded-2xl border border-border shadow-card">
      <iframe
        src={embed}
        title={titulo}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export function VideoPlaceholder({ duracaoMin }: { duracaoMin: number }) {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const dots = ".".repeat(dotCount);

  return (
    <div className="flex aspect-video items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950/30 dark:to-teal-900/20">
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Loader animado */}
        <div className="relative flex items-center justify-center">
          <div className="h-16 w-16 animate-pulse rounded-full bg-emerald-200 dark:bg-emerald-800" />
          <svg
            className="absolute h-8 w-8 text-emerald-600 dark:text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
          {/* Anel giratório */}
          <div className="absolute h-20 w-20 animate-spin rounded-full border-2 border-emerald-400 border-t-transparent" />
        </div>

        <div>
          <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
            Vídeo principal · {duracaoMin} min
          </p>
          <p className="mt-1 text-xs text-emerald-500 dark:text-emerald-400">
            Preparando vídeo{dots}
          </p>
        </div>
      </div>
    </div>
  );
}
