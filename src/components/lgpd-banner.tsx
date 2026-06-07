"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function LgpdBanner() {
  const [consentido, setConsentido] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("lgpd-consent");
    if (stored !== "true") {
      setConsentido(false);
    }
  }, []);

  function aceitar() {
    localStorage.setItem("lgpd-consent", "true");
    setConsentido(true);
  }

  if (consentido) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-border/40 bg-surface/95 backdrop-blur-lg shadow-[0_-8px_40px_rgba(0,0,0,0.12)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-4 sm:flex-row sm:px-6">
        <p className="flex-1 text-xs leading-relaxed text-muted sm:text-sm">
          Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência.
          Ao continuar, você concorda com nossa{" "}
          <Link href="/privacidade" className="underline underline-offset-2 hover:text-foreground transition-colors min-h-[44px] inline-flex items-center">
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <Link
            href="/privacidade"
            className="rounded-xl border border-border bg-background px-4 py-3 text-xs font-medium text-foreground transition-colors hover:bg-accent min-h-[44px] inline-flex items-center"
          >
            Saiba mais
          </Link>
          <button
            onClick={aceitar}
            className="rounded-xl bg-emerald-600 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-emerald-500 min-h-[44px] inline-flex items-center"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
