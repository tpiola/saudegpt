"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Icon } from "./icons";

/* ── Typewriter com cursor piscante ── */
function Typewriter({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const isDone = !deleting && subIndex === words[index].length;
    const shouldDelete = deleting && subIndex === 0;

    if (shouldDelete) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        if (isDone) {
          setTimeout(() => setDeleting(true), 2000);
          return;
        }
        setSubIndex((s) => (deleting ? s - 1 : s + 1));
      },
      isDone ? 0 : deleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words]);

  useEffect(() => {
    const interval = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={className}>
      {words[index].substring(0, subIndex)}
      <span className={`${blink ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
    </span>
  );
}

/* ── Partículas de fundo ── */
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.4 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.a})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

/* ── Hero Section ── */
export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const palavras = [
    "atendente de farmácia",
    "profissional de saúde",
    "especialista em vendas",
    "referência no balcão",
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image com overlay gradiente */}
      <motion.div className="absolute inset-0 z-0" style={{ scale }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-dashboard.jpg')" }}
        />
        {/* Overlay gradiente multi-camada */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/90 via-forest-800/80 to-forest-900/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 via-transparent to-orange-900/20" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </motion.div>

      {/* Partículas */}
      <ParticleBackground />

      {/* Conteúdo */}
      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6"
        style={{ opacity, y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Plataforma EAD Premium
          </motion.div>

          {/* Título principal */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Transforme-se no{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              melhor
            </span>{" "}
            <br className="hidden sm:block" />
            <Typewriter
              words={palavras}
              className="text-orange-400"
            />
          </h1>

          {/* Descrição */}
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base text-white/60 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Formação completa para atendentes de farmácia com trilhas interativas,
            jogos educacionais, simulados e gamificação. Estude no seu ritmo.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/"
              className="group relative inline-flex h-12 sm:h-14 items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 sm:px-8 text-sm sm:text-base font-bold text-white shadow-xl shadow-orange-500/25 transition-all hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10">Começar agora</span>
              <Icon name="arrow" size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-0 bg-gradient-to-r from-orange-600 to-orange-700" />
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex h-12 sm:h-14 items-center gap-2 rounded-2xl border border-white/20 px-6 sm:px-8 text-sm sm:text-base font-medium text-white/80 backdrop-blur-sm transition-all hover:border-white/40 hover:text-white hover:bg-white/5"
            >
              <Icon name="play" size={18} />
              Ver plataforma
            </Link>
          </motion.div>

          {/* Indicador de scroll */}
          <motion.div
            className="mt-12 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-xs text-white/30">Role para explorar</span>
            <motion.div
              className="flex h-8 w-5 justify-center rounded-full border border-white/20"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div className="mt-1.5 h-2 w-1 rounded-full bg-white/40" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
