"use client";
import { useState } from "react";
import { ScannerProduto } from "./scanner-produto";

export function ScannerFloatingButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-forest-600 text-white shadow-xl shadow-emerald-600/30 transition-all hover:scale-110 hover:shadow-emerald-500/50 animate-pulse-slow"
        aria-label="Scanner de Produto">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
          <path d="M2 8V5a3 3 0 0 1 3-3h3M22 8V5a3 3 0 0 0-3-3h-3M2 16v3a3 3 0 0 0 3 3h3M22 16v3a3 3 0 0 1-3 3h-3"/>
          <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.3"/>
        </svg>
      </button>
      {open && <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setOpen(false)}>
        <div className="max-h-[90vh] overflow-y-auto w-full max-w-2xl" onClick={e => e.stopPropagation()}>
          <div className="relative">
            <button onClick={() => setOpen(false)} className="absolute -top-2 -right-2 z-10 h-8 w-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20">✕</button>
            <ScannerProduto />
          </div>
        </div>
      </div>}
    </>
  );
}
