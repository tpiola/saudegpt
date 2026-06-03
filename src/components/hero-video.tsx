"use client";

import { useRef, useState, useEffect } from "react";

interface HeroVideoProps {
  className?: string;
  videoId?: string;
  overlay?: "forest" | "dark";
}

export function HeroVideo({
  className = "",
  videoId = "4122",
  overlay = "forest",
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [carregado, setCarregado] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => setErro(true));
    }
  }, []);

  const videoUrl = `https://assets.mixkit.co/videos/${videoId}/${videoId}-720.mp4`;

  const overlayGrad =
    overlay === "forest"
      ? "from-forest-500/85 via-forest-500/50 to-forest-500/90"
      : "from-forest-500/80 via-forest-600/40 to-forest-500/85";

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      {!erro && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setCarregado(true)}
          onError={() => setErro(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 scale-[1.02] ${
            carregado ? "opacity-45" : "opacity-0"
          }`}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
      {/* Gradient overlay cinematográfico */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${overlayGrad} transition-opacity duration-1000 ${
          carregado ? "opacity-100" : "opacity-100"
        }`}
      />
      {/* Fallback quando o vídeo não carrega */}
      {erro && <div className="absolute inset-0 bg-forest-500" />}
    </div>
  );
}

export function HeroVideoAthlete({
  className = "",
  videoId = "4239",
}: {
  className?: string;
  videoId?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [carregado, setCarregado] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => setErro(true));
    }
  }, []);

  const videoUrl = `https://assets.mixkit.co/videos/${videoId}/${videoId}-720.mp4`;

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      {!erro && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setCarregado(true)}
          onError={() => setErro(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
            carregado ? "opacity-35" : "opacity-0"
          }`}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-500/80 via-forest-500/40 to-forest-500/85" />
      {erro && <div className="absolute inset-0 bg-forest-500" />}
    </div>
  );
}
