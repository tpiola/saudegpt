"use client";

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
  return (
    <div className="flex aspect-video items-center justify-center rounded-2xl border border-border bg-gradient-to-r from-green-500 to-green-600 text-white">
      <div className="text-center">
        <p className="text-sm font-medium text-white/90">Vídeo principal · {duracaoMin} min</p>
        <p className="mt-1 text-xs text-white/60">
          Em breve: integração com YouTube/Vimeo ou HLS protegido
        </p>
      </div>
    </div>
  );
}
