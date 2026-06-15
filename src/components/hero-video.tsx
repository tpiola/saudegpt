"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  className?: string;
}

export function HeroVideo({ className = "" }: HeroVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.load();
    }
  }, [shouldLoad]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Background color while loading */}
      <div className="absolute inset-0 bg-[#020e0c]" />

      {/* Video element with lazy loading */}
      {shouldLoad && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/imagens/hero_surgeons.webp"
          preload="none"
          className="absolute inset-0 h-full w-full object-cover hero-video-zoom"
        >
          <source src="/videos/hero-pills.mp4" type="video/mp4" />
        </video>
      )}

      {/* Overlay gradient escuro — from #020e0c/95 via /75 to /90 */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020e0c]/95 via-[#020e0c]/75 to-[#020e0c]/90" />

      {/* Radial pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Blur orbs */}
      <div className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-[#1c7a5f]/25 blur-[120px]" />
      <div className="absolute -bottom-24 right-0 h-[400px] w-[500px] rounded-full bg-[#f08a1d]/15 blur-[100px]" />

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#020e0c] to-transparent" />

      {/* Left gradient fade */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#020e0c]/50 to-transparent" />

      {/* Slow zoom animation keyframes */}
      <style jsx>{`
        .hero-video-zoom {
          animation: slowZoom 10s ease-out forwards;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
