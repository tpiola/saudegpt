"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Star, Award, User, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/* ─── Tipos ─── */
export interface Mentor {
  id: string;
  nome: string;
  especialidade: string;
  rating: number;
  bio: string;
  horarios: string[];
  avatarUrl?: string;
}

interface MentoriaCardProps {
  mentor: Mentor;
  onAgendar: (mentorId: string) => void;
  className?: string;
}

/* ══════════════════════════════════════════════════════════
   MentoriaCard — Card de mentor disponível
   Design glassmorphism Navy/Gold
   ══════════════════════════════════════════════════════════ */
export function MentoriaCard({
  mentor,
  onAgendar,
  className,
}: MentoriaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "group relative isolate overflow-hidden rounded-2xl",
        "border border-gold-400/20",
        "bg-gradient-to-br from-navy-900/90 via-navy-800/80 to-navy-950/90",
        "backdrop-blur-xl shadow-[0_8px_32px_rgba(10,22,40,0.5)]",
        "hover:border-gold-400/40 hover:shadow-[0_8px_32px_rgba(212,168,67,0.12)]",
        "transition-all duration-500",
        className,
      )}
    >
      {/* Grid pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
        aria-hidden
      />

      {/* Gold accent glow */}
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(212,168,67,0.6), transparent 70%)" }}
        aria-hidden
      />

      {/* Conteúdo */}
      <div className="relative z-10 p-5">
        {/* Header: Avatar + Info */}
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gold-400/20 bg-navy-700/50">
            {mentor.avatarUrl ? (
              <img
                src={mentor.avatarUrl}
                alt={mentor.nome}
                className="h-full w-full object-cover"
              />
            ) : (
              <User className="h-6 w-6 text-gold-400/60" />
            )}
          </div>

          {/* Dados */}
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-bold text-white">
              {mentor.nome}
            </h3>
            <div className="mt-0.5 flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-gold-400" />
              <span className="text-xs text-gold-300/80">
                {mentor.especialidade}
              </span>
            </div>
            {/* Rating */}
            <div className="mt-1.5 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-3.5 w-3.5",
                    i < Math.round(mentor.rating)
                      ? "fill-gold-400 text-gold-400"
                      : "text-white/20",
                  )}
                />
              ))}
              <span className="ml-1.5 text-xs font-medium text-white/50">
                {mentor.rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-3 text-xs leading-relaxed text-white/40 line-clamp-2">
          {mentor.bio}
        </p>

        {/* Horários */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-gold-400/60" />
            <span className="text-xs font-medium text-white/50">
              Horários disponíveis
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {mentor.horarios.map((h) => (
              <span
                key={h}
                className="rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/60"
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Botão agendar */}
        <div className="mt-5 flex items-center gap-3">
          <Button
            variant="default"
            size="sm"
            className="flex-1 gap-1.5 text-xs"
            onClick={() => onAgendar(mentor.id)}
          >
            <Calendar className="h-3.5 w-3.5" />
            Agendar mentoria
          </Button>
          <Button
            variant="outline-white"
            size="sm"
            className="gap-1.5 text-xs"
            onClick={() => onAgendar(mentor.id)}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Perfil
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
