"use client";

import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LogoSaudeGPT } from "@/components/logo-saudegpt";

/* ─── Tipos ─── */
interface CarteirinhaProps {
  nome: string;
  selfieUrl?: string;
  matricula: string;
  validade: string;
  /** QR Code data URL (base64 SVG/PNG ou URL externa) */
  qrCodeUrl?: string;
  className?: string;
}

/* ══════════════════════════════════════════════════════════
   Carteirinha — ID Card 8.5cm × 5.4cm
   Design premium Navy + Gold, pronto para print/download
   ══════════════════════════════════════════════════════════ */
export function Carteirinha({
  nome,
  selfieUrl,
  matricula,
  validade,
  qrCodeUrl,
  className,
}: CarteirinhaProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={cn("flex justify-center", className)}>
      {/* ── Card físico ── */}
      <div
        ref={ref}
        id="carteirinha-aluno"
        className={cn(
          "relative isolate overflow-hidden",
          "print-card",
          /* Dimensões: 8.5cm × 5.4cm (CR80 standard) */
          "h-[5.4cm] w-[8.5cm]",
          /* Glassmorphism premium */
          "rounded-xl border border-gold-400/30",
          "bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950",
          /* Sombra */
          "shadow-[0_8px_32px_rgba(10,22,40,0.4),0_0_40px_rgba(212,168,67,0.08)]",
        )}
      >
        {/* ── Grid pattern background ── */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "8px 8px",
          }}
          aria-hidden
        />

        {/* ── Gold accent glow ── */}
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-20 blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(212,168,67,0.5), transparent 70%)" }}
          aria-hidden
        />

        {/* ── Conteúdo ── */}
        <div className="relative z-10 flex h-full flex-col p-3">
          {/* ── Topo: Logo + badge ── */}
          <div className="flex items-center justify-between">
            <LogoSaudeGPT variant="light" size="sm" showIcon={true} showText={false} />
            <span className="rounded-full border border-gold-400/20 bg-gold-500/10 px-2 py-0.5 text-[7px] font-semibold text-gold-400">
              ALUNO
            </span>
          </div>

          {/* ── Corpo: foto + dados ── */}
          <div className="mt-2 flex flex-1 gap-2.5">
            {/* Selfie / Avatar */}
            <div className="flex-shrink-0">
              {selfieUrl ? (
                <div className="h-14 w-14 overflow-hidden rounded-lg border border-white/10">
                  <img
                    src={selfieUrl}
                    alt="Selfie"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-white/10 bg-navy-700/50">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21a8 8 0 0 1 16 0" />
                  </svg>
                </div>
              )}
            </div>

            {/* Dados */}
            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <p className="truncate text-[9px] font-bold leading-tight text-white">
                {nome}
              </p>
              <p className="mt-0.5 text-[6px] leading-tight text-white/50">
                Formação para Atendentes de Farmácia
              </p>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-[6px] font-medium text-white/40">
                  #{matricula}
                </span>
                <span className="text-[6px] text-white/30">|</span>
                <span className="text-[6px] text-white/40">
                  Val: {validade}
                </span>
              </div>
            </div>
          </div>

          {/* ── Rodapé: QR Code + curso ── */}
          <div className="mt-auto flex items-end justify-between">
            {/* Curso */}
            <div className="max-w-[60%]">
              <p className="text-[5px] font-medium uppercase tracking-wider text-gold-400/70">
                SaúdeGPT
              </p>
              <p className="text-[5px] leading-tight text-white/30">
                farmácia, atendimento e segurança
              </p>
            </div>

            {/* QR Code */}
            {qrCodeUrl ? (
              <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-white/5 bg-white/5">
                <img
                  src={qrCodeUrl}
                  alt="QR de verificação"
                  className="h-full w-full object-contain p-0.5"
                />
              </div>
            ) : (
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="3" height="3" rx="0.5" />
                  <rect x="18" y="18" width="3" height="3" rx="0.5" />
                  <rect x="14" y="18" width="3" height="3" rx="0.5" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Estilos de impressão ── */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: visible !important;
          }
          #carteirinha-aluno {
            visibility: visible !important;
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            margin: 0 !important;
            /* Impressão em escala 1:1 */
            width: 8.5cm !important;
            height: 5.4cm !important;
            page-break-after: avoid;
            page-break-inside: avoid;
          }
          #carteirinha-aluno * {
            visibility: visible !important;
          }
          /* Remove estilos de fundo escuro que gastam tinta */
          .print-card {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }

        @page {
          size: 8.5cm 5.4cm;
          margin: 0;
        }
      `}</style>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   Botão de download (HTML → PNG)
   ══════════════════════════════════════════════════════════ */
export function baixarCarteirinha() {
  const el = document.getElementById("carteirinha-aluno");
  if (!el) return;

  // Tenta usar html2canvas se disponível, senão fallback para print
  import("html2canvas")
    .then((html2canvas) => {
      html2canvas.default(el, {
        scale: 4,
        useCORS: true,
        allowTaint: false,
        backgroundColor: null,
        logging: false,
      }).then((canvas) => {
        const link = document.createElement("a");
        link.download = "carteirinha-saudegpt.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    })
    .catch(() => {
      window.print();
    });
}
