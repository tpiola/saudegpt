"use client";
import { useState } from "react";
export function VideoPlayer({ url, titulo }: { url: string; titulo: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  if (!url.startsWith("/videos/")) return null;
  return (
    <video
      className="w-full rounded-2xl"
      controls
      preload="none"
      aria-label={titulo}
      onError={() => setFailed(true)}
    >
      <source src={url} type="video/mp4" />
    </video>
  );
}
export function VideoPlaceholder(_props: { duracaoMin: number }) {
  return null;
}
