"use client";

import { useEffect } from "react";

/** Registra service worker para cache leve (PWA). */
export function PwaRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    void navigator.serviceWorker.register("/sw.js").catch(() => {
      // ignora falha em HTTP local sem HTTPS
    });
  }, []);
  return null;
}
