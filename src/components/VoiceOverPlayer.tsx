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
export interface VoiceOverPlayerProps {
  /** URL do arquivo de áudio */
  src: string;
  /** Nome da narração/exibição */
  title: string;
  /** Classes CSS extras */
  className?: string;
  /** Callback quando a narração terminar */
  onEnded?: () => void;
  /** Callback com progresso 0-1 */
  onProgress?: (progress: number) => void;
}

type Velocidade = 0.5 | 1 | 1.5 | 2;

const VELOCIDADES: Velocidade[] = [0.5, 1, 1.5, 2];

/* ═══════════════════════════════════════════════════
   VoiceOverPlayer
   Player de áudio premium com visual wave animado.
   ═══════════════════════════════════════════════════ */
export default function VoiceOverPlayer({
  src,
  title,
  className,
  onEnded,
  onProgress,
}: VoiceOverPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [velocidade, setVelocidade] = useState<Velocidade>(1);
  const [speedOpen, setSpeedOpen] = useState(false);

  /* ── Atualizar time / duration ── */
  const handleTimeUpdate = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTime(audio.currentTime);
    if (audio.duration && !isNaN(audio.duration)) {
      const p = audio.currentTime / audio.duration;
      onProgress?.(p);
    }
  }, [onProgress]);

  const handleLoadedMetadata = useCallback(() => {
    const audio = audioRef.current;
    if (audio && !isNaN(audio.duration)) {
      setDuration(audio.duration);
    }
  }, []);

  /* ── Play / Pause ── */
  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, []);

  const handlePlay = useCallback(() => setPlaying(true), []);
  const handlePause = useCallback(() => setPlaying(false), []);
  const handleEnded = useCallback(() => {
    setPlaying(false);
    setCurrentTime(0);
    onEnded?.();
  }, [onEnded]);

  /* ── Velocidade ── */
  const changeSpeed = useCallback((v: Velocidade) => {
    const audio = audioRef.current;
    if (audio) audio.playbackRate = v;
    setVelocidade(v);
    setSpeedOpen(false);
  }, []);

  /* ── Clique na barra de progresso ── */
  const seek = useCallback(
    (e: SyntheticEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
      const audio = audioRef.current;
      const bar = progressRef.current;
      if (!audio || !bar) return;
      const rect = bar.getBoundingClientRect();
      const x = (e as React.MouseEvent).clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, x / rect.width));
      audio.currentTime = ratio * (audio.duration || 0);
      setCurrentTime(audio.currentTime);
    },
    [],
  );

  /* ── Formatação de tempo ── */
  const fmt = (s: number) => {
    const min = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? currentTime / duration : 0;

  /* ── Fechar speed selector ao clicar fora ── */
  useEffect(() => {
    if (!speedOpen) return;
    const handler = () => setSpeedOpen(false);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [speedOpen]);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl",
        "border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]",
        "backdrop-blur-xl",
        "p-4 sm:p-5",
        "transition-all duration-300 hover:border-white/20",
        className,
      )}
      role="region"
      aria-label={`Player de narração: ${title}`}
    >
      {/* ── Gradiente sutil de fundo ── */}
      <div
        className="pointer-events-none absolute -inset-20 opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, rgba(0,87,255,0.12), transparent 60%), radial-gradient(circle at 70% 50%, rgba(201,168,76,0.08), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative z-10">
        {/* ── Header ── */}
        <div className="mb-3 flex items-center gap-3">
          {/* Ícone de onda (animada quando tocando) */}
          <span
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg",
              playing
                ? "bg-gold-500/20 text-gold-400"
                : "bg-white/10 text-white/50",
              "transition-colors duration-300",
            )}
            aria-hidden
          >
            <OndaIcon active={playing} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">
              {title}
            </p>
            <p className="text-xs text-white/50">
              {playing ? "Tocando agora" : "Narração disponível"}
            </p>
          </div>
        </div>

        {/* ── Wave animada ── */}
        <div className="mb-3 flex h-10 items-end gap-[2px]" aria-hidden>
          {Array.from({ length: 32 }).map((_, i) => {
            const h = Math.sin((i / 32) * Math.PI * 2) * 10 + 14;
            return (
              <span
                key={i}
                className={cn(
                  "w-[3px] rounded-t-full transition-all duration-200",
                  playing ? "bg-gold-400/80" : "bg-white/15",
                )}
                style={{
                  height: `${h}px`,
                  animation: playing
                    ? `wave-bounce ${0.3 + Math.random() * 0.4}s ease-in-out infinite`
                    : "none",
                  animationDelay: `${i * 0.03}s`,
                }}
              />
            );
          })}
        </div>

        <style jsx>{`
          @keyframes wave-bounce {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(1.6); }
          }
        `}</style>

        {/* ── Barra de progresso clicável ── */}
        <div
          ref={progressRef}
          onClick={seek}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              seek(e as unknown as React.MouseEvent<HTMLDivElement>);
            }
          }}
          role="slider"
          tabIndex={0}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
          aria-label={`Progresso da narração: ${Math.round(progress * 100)}%`}
          className={cn(
            "relative h-2 cursor-pointer overflow-hidden rounded-full",
            "bg-white/10",
            "transition-colors hover:bg-white/15",
          )}
        >
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#0057FF] to-[#C9A84C] transition-all duration-150"
            style={{ width: `${progress * 100}%` }}
          />
          <div
            className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow-md transition-all duration-150"
            style={{ left: `calc(${progress * 100}% - 6px)` }}
          />
        </div>

        {/* ── Time display ── */}
        <div className="mt-1 flex items-center justify-between text-[11px] text-white/40">
          <span>{fmt(currentTime)}</span>
          <span>{fmt(duration)}</span>
        </div>

        {/* ── Controls ── */}
        <div className="mt-3 flex items-center justify-between">
          {/* Play/Pause */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pausar narração" : "Reproduzir narração"}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full",
              "bg-white/10 text-white backdrop-blur-sm",
              "transition-all duration-200",
              "hover:bg-white/20 hover:scale-105",
              "active:scale-95",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]",
            )}
          >
            {playing ? (
              <PauseIcon />
            ) : (
              <PlayIcon />
            )}
          </button>

          {/* Velocidade */}
          <div className="relative">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSpeedOpen((v) => !v);
              }}
              aria-label={`Velocidade atual: ${velocidade}x. Clique para alterar.`}
              aria-haspopup="listbox"
              aria-expanded={speedOpen}
              className={cn(
                "flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium tracking-wide",
                "bg-white/10 text-white/70 backdrop-blur-sm",
                "transition-all duration-200",
                "hover:bg-white/20 hover:text-white",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]",
              )}
            >
              <SpeedIcon />
              {velocidade}x
            </button>

            {speedOpen && (
              <div
                role="listbox"
                aria-label="Selecionar velocidade"
                className={cn(
                  "absolute bottom-full right-0 mb-2 overflow-hidden rounded-lg",
                  "border border-white/10 bg-black/90 backdrop-blur-xl",
                  "shadow-xl",
                )}
              >
                {VELOCIDADES.map((v) => (
                  <button
                    key={v}
                    type="button"
                    role="option"
                    aria-selected={v === velocidade}
                    onClick={(e) => {
                      e.stopPropagation();
                      changeSpeed(v);
                    }}
                    className={cn(
                      "block w-full px-4 py-2 text-left text-xs font-medium transition-colors",
                      v === velocidade
                        ? "bg-[#0057FF]/30 text-white"
                        : "text-white/60 hover:bg-white/10 hover:text-white",
                    )}
                  >
                    {v}x
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Audio element oculto ── */}
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
        className="hidden"
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Ícones SVG inline (evita dependência de lucide no audio player)
   ═══════════════════════════════════════════════════ */

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36A1 1 0 008 5.14z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function OndaIcon({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h2" {...(active ? { className: "animate-pulse" } : {})} />
      <path d="M6 8v8" {...(active ? { className: "animate-pulse" } : {})} style={active ? { animationDelay: "0.1s" } : undefined} />
      <path d="M10 5v14" {...(active ? { className: "animate-pulse" } : {})} style={active ? { animationDelay: "0.2s" } : undefined} />
      <path d="M14 8v8" {...(active ? { className: "animate-pulse" } : {})} style={active ? { animationDelay: "0.15s" } : undefined} />
      <path d="M18 3v18" {...(active ? { className: "animate-pulse" } : {})} style={active ? { animationDelay: "0.25s" } : undefined} />
      <path d="M22 12h2" {...(active ? { className: "animate-pulse" } : {})} style={active ? { animationDelay: "0.1s" } : undefined} />
    </svg>
  );
}
