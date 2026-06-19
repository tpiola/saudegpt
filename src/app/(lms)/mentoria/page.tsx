"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Calendar,
  Video,
  Sparkles,
} from "lucide-react";

/* ══════════════════════════════════════════════════════════
   PÁGINA PRINCIPAL
   ══════════════════════════════════════════════════════════ */
export default function MentoriaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-400/20 to-gold-500/10">
          <Sparkles className="h-9 w-9 text-gold-400" />
        </div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          Mentoria individual
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/50">
          Estamos preparando um programa de mentoria individual com farmacêuticos especialistas.
          Em breve você poderá agendar sessões personalizadas.
        </p>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500/10 px-5 py-2 text-xs font-medium text-gold-400">
          <span className="flex h-2 w-2 animate-pulse rounded-full bg-gold-500" />
          Em breve
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: User, label: "Farmacêuticos especialistas", desc: "Profissionais certificados" },
            { icon: Calendar, label: "Agendamento flexível", desc: "Escolha o melhor horário" },
            { icon: Video, label: "Online ou presencial", desc: "Vídeo, telefone ou presencial" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/5 bg-white/[0.03] p-5 text-center backdrop-blur-sm"
            >
              <item.icon className="mx-auto h-6 w-6 text-gold-400" />
              <p className="mt-3 text-sm font-semibold text-white">{item.label}</p>
              <p className="mt-1 text-xs text-white/40">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
