"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const numero = "5511999999999";
  const mensagem = encodeURIComponent("Olá! Tenho dúvidas sobre o Health Learning OS.");

  return (
    <a
      href={`https://wa.me/${numero}?text=${mensagem}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_8px_32px_rgba(34,197,94,0.35)] transition-all hover:scale-110 hover:bg-green-400 active:scale-95"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
