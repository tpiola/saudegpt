"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function CookieConsent() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const consentido = localStorage.getItem("cookie-consent");
    if (!consentido) setVisivel(true);
  }, []);

  const aceitar = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisivel(false);
  };

  if (!visivel) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6">
      <div className="mx-auto max-w-lg rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl p-5 shadow-2xl">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-sm font-bold mb-1">🍪 Cookies & Privacidade</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa{" "}
              <a href="/privacidade" className="underline hover:text-emerald-400">Política de Privacidade</a>.
            </p>
          </div>
          <button onClick={() => setVisivel(false)} className="shrink-0 text-muted-foreground hover:text-foreground">
            <X size={16} />
          </button>
        </div>
        <div className="mt-3 flex gap-2">
          <button
            onClick={aceitar}
            className="flex-1 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 transition-colors"
          >
            Aceitar todos
          </button>
          <button
            onClick={() => setVisivel(false)}
            className="rounded-xl border border-white/10 px-4 py-2.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
}
