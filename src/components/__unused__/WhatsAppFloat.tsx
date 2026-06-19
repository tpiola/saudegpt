"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-white shadow-[0_8px_32px_rgba(34,197,94,0.35)] transition-all hover:scale-110 hover:bg-green-400 active:scale-95"
        aria-label="WhatsApp (em breve)"
      >
        <MessageCircle size={26} />
      </button>

      {showMessage && (
        <div className="fixed bottom-24 right-6 z-[90] animate-in slide-in-from-bottom-2 rounded-lg bg-green-600 px-4 py-2 text-sm text-white shadow-lg">
          WhatsApp em breve
        </div>
      )}
    </>
  );
}
