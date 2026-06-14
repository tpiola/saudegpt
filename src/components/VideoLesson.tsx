"use client";

import {
  useRef,
  useState,
  useCallback,
  useEffect,
  type SyntheticEvent,
} from "react";
import { cn } from "@/lib/utils";

/* ─── Tipos ─── */
type VideoTipo = "youtube" | "local" | "hls";

export interface VideoLessonProps {
  /** URL do vídeo (YouTube embed, local path, ou HLS .m3u8) */
  videoSrc: string;
  /** Tipo de fonte */
  tipo: VideoTipo;
  /** Título da aula */
  titulo: string;
  /** Classes CSS extras */
  className?: string;
  /** Callback quando o vídeo termina */
  onEnded?: () => void;
  /** Callback com progresso 0-1 */
  onProgress?: (progress: number) => void;
  /** Poster (thumbnail) para vídeos locais */
  poster?: string;
}

/* ═══════════════════════════════════════════════════
   VideoLesson
   Player de vídeo premium com suporte YouTube + local + HLS.
   ═══════════════════════════════════════════════════ */
export default function VideoLesson({
  videoSrc,
  tipo,
  titulo,
  className,
  onEnded,
  onProgress,
  poster,
}: VideoLessonProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  let controlsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── YouTube embed URL ── */
  const youtubeEmbedUrl = useCallback(() => {
    if (tipo !== "youtube") return null;
    try {
      const u = new URL(videoSrc);
      const id =
        u.searchParams.get("v") ??
        (u.hostname.includes("youtu.be")
          ? u.pathname.slice(1)
          : u.pathname.split("/").pop());
      return id
        ? `https://www.youtube.com/embed/${id}?autoplay=0&rel=0&modestbranding=1`
        : null;
    } catch {
      return videoSrc.includes("youtube.com") || videoSrc.includes("youtu.be")
        ? videoSrc
        : null;
    }
  }, [videoSrc, tipo]);

  /* ── Eventos do vídeo local ── */
  const handleTimeUpdate = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    setCurrentTime(v.currentTime);
    if (v.duration) onProgress?.(v.currentTime / v.duration);
  }, [onProgress]);

  const handleLoadedMetadata = useCallback(() => {
    const v = videoRef.current;
    if (v && !isNaN(v.duration)) setDuration(v.duration);
  }, []);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.paused ? v.play().catch(() => {}) : v.pause();
  }, []);

  const handlePlay = useCallback(() => setPlaying(true), []);
  const handlePause = useCallback(() => setPlaying(false), []);
  const handleEnded = useCallback(() => {
    setPlaying(false);
    onEnded?.();
  }, [onEnded]);

  /* ── Volume ── */
  const handleVolumeChange = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const val = parseFloat(e.currentTarget.value);
    v.volume = val;
    setVolume(val);
    setMuted(val === 0);
  }, []);

  const toggleMute = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }, []);

  /* ── Seek ── */
  const seek = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const v = videoRef.current;
      const bar = progressRef.current;
      if (!v || !bar) return;
      const rect = bar.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      v.currentTime = ratio * (v.duration || 0);
      setCurrentTime(v.currentTime);
    },
    [],
  );

  /* ── Fullscreen ── */
  const toggleFullscreen = useCallback(async () => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      setFullscreen(false);
    } else {
      await el.requestFullscreen();
      setFullscreen(true);
    }
  }, []);

  useEffect(() => {
    const handler = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  /* ── Auto-hide controls ── */
  const showControlsTemp = useCallback(() => {
    setShowControls(true);
    if (controlsTimer.current) clearTimeout(controlsTimer.current);
    controlsTimer.current = setTimeout(() => {
      if (playing) setShowControls(false);
    }, 3000);
  }, [playing]);

  /* ── Formatação ── */
  const fmt = (s: number) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? currentTime / duration : 0;

  // YouTube embed
  const ytUrl = youtubeEmbedUrl();

  /* ═══════════════════════════════════════════════════
     YouTube
     ═══════════════════════════════════════════════════ */
  if (tipo === "youtube" && ytUrl) {
    return (
      <div
        ref={containerRef}
        className={cn(
          "relative aspect-video w-full overflow-hidden rounded-2xl",
          "border border-border bg-black shadow-lg",
          className,
        )}
      >
        <iframe
          src={ytUrl}
          title={titulo}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  /* ═══════════════════════════════════════════════════
     Local / HLS
     ═══════════════════════════════════════════════════ */
  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative aspect-video w-full overflow-hidden rounded-2xl",
        "border border-border bg-black shadow-lg",
        className,
      )}
      onMouseMove={showControlsTemp}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => playing && setShowControls(false)}
    >
      {/* ── Vídeo ── */}
      <video
        ref={videoRef}
        src={tipo === "local" ? videoSrc : undefined}
        poster={poster}
        className="h-full w-full object-contain"
        preload="metadata"
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
        onClick={togglePlay}
        aria-label={titulo}
      />

      {/* ── HLS será carregado via effect — já que hls.js está no projeto ── */}
      {tipo === "hls" && (
        <HlsLoader
          src={videoSrc}
          videoRef={videoRef}
          onDuration={(d) => setDuration(d)}
        />
      )}

      {/* ── Overlay de play (quando pausado e sem mostrar controles) ── */}
      {!playing && !showControls && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Reproduzir vídeo"
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            "bg-black/20 backdrop-blur-[2px]",
            "transition-opacity duration-300",
          )}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-transform hover:scale-110">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36A1 1 0 008 5.14z" />
            </svg>
          </span>
        </button>
      )}

      {/* ── Controles customizados ── */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0",
          "bg-gradient-to-t from-black/80 via-black/40 to-transparent",
          "px-4 pb-3 pt-10",
          "transition-all duration-300",
          showControls ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
        )}
      >
        {/* Barra de progresso */}
        <div
          ref={progressRef}
          onClick={seek}
          role="slider"
          tabIndex={0}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
          aria-label="Progresso do vídeo"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              seek(e as unknown as React.MouseEvent<HTMLDivElement>);
            }
          }}
          className="relative mb-3 h-1 cursor-pointer overflow-hidden rounded-full bg-white/20 hover:h-1.5 transition-all"
        >
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#0057FF] to-[#C9A84C] transition-all"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Botões inferiores */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Play/Pause */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? "Pausar" : "Reproduzir"}
              className="text-white/80 hover:text-white transition-colors"
            >
              {playing ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36A1 1 0 008 5.14z" />
                </svg>
              )}
            </button>

            {/* Volume */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Ativar som" : "Silenciar"}
                className="text-white/60 hover:text-white transition-colors"
              >
                {muted || volume === 0 ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
                  </svg>
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={muted ? 0 : volume}
                onChange={handleVolumeChange}
                aria-label="Volume"
                className="w-16 accent-[#C9A84C]"
              />
            </div>

            {/* Tempo */}
            <span className="text-xs text-white/60 tabular-nums">
              {fmt(currentTime)} / {fmt(duration)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Fullscreen */}
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={fullscreen ? "Sair da tela cheia" : "Tela cheia"}
              className="text-white/60 hover:text-white transition-colors"
            >
              {fullscreen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   HlsLoader — carrega HLS via hls.js
   ═══════════════════════════════════════════════════ */
function HlsLoader({
  src,
  videoRef,
  onDuration,
}: {
  src: string;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  onDuration: (d: number) => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let hlsInstance: any = null;

    const loadHls = async () => {
      const video = videoRef.current;
      if (!video) return;

      try {
        const HlsModule = await import("hls.js");
        const Hls = HlsModule.default;
        if (!Hls.isSupported()) {
          console.warn("[VideoLesson] HLS não é suportado neste navegador");
          return;
        }
        hlsInstance = new Hls();
        hlsInstance.attachMedia(video);
        hlsInstance.loadSource(src);
        hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
          onDuration(video.duration);
        });
      } catch (err) {
        console.warn("[VideoLesson] Erro ao carregar hls.js:", err);
      }
    };

    loadHls();

    return () => {
      if (hlsInstance) {
        try {
          hlsInstance.destroy();
        } catch {
          // ignore cleanup errors
        }
      }
    };
  }, [src, videoRef, onDuration]);

  return null;
}
