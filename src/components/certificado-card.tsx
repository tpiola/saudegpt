"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Download,
  RefreshCw,
  ShieldCheck,
  ShieldAlert,
  QrCode,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/* ─── Tipos ─── */
export interface Certificado {
  id: string;
  curso: string;
  dataEmissao: string;
  dataValidade: string;
  cargaHoraria: string;
  status: "valido" | "expirado" | "reciclagem";
  qrCodeUrl?: string;
  descricao?: string;
}

interface CertificadoCardProps {
  certificado: Certificado;
  onDownload?: (id: string) => void;
  onRenovar?: (id: string) => void;
  onImprimir?: (id: string) => void;
  className?: string;
}

/* ══════════════════════════════════════════════════════════
   CertificadoCard — Card com selo de validade
   Design glassmorphism Navy/Gold
   ══════════════════════════════════════════════════════════ */
export function CertificadoCard({
  certificado,
  onDownload,
  onRenovar,
  onImprimir,
  className,
}: CertificadoCardProps) {
  const isValido =
    certificado.status === "valido" || certificado.status === "reciclagem";
  const precisaReciclagem = certificado.status === "reciclagem";

  /* Calcular dias restantes */
  const diasRestantes = (() => {
    if (!isValido) return 0;
    const hoje = new Date();
    const val = new Date(certificado.dataValidade);
    return Math.max(0, Math.ceil((val.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24)));
  })();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "group relative isolate overflow-hidden rounded-2xl",
        "border",
        isValido ? "border-emerald-500/20" : "border-red-500/20",
        "bg-gradient-to-br from-navy-900/90 via-navy-800/80 to-navy-950/90",
        "backdrop-blur-xl shadow-[0_8px_32px_rgba(10,22,40,0.5)]",
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

      {/* Status glow */}
      <div
        className={cn(
          "pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full blur-3xl",
          isValido
            ? "opacity-10"
            : "opacity-15",
        )}
        style={{
          background: isValido
            ? "radial-gradient(circle, rgba(16,185,129,0.6), transparent 70%)"
            : "radial-gradient(circle, rgba(239,68,68,0.6), transparent 70%)",
        }}
        aria-hidden
      />

      {/* Conteúdo */}
      <div className="relative z-10 p-5">
        {/* Topo: Status badge + QR Code */}
        <div className="flex items-start justify-between">
          {/* Status badge */}
          <div className="flex items-center gap-2">
            {isValido ? (
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
            ) : (
              <ShieldAlert className="h-5 w-5 text-red-400" />
            )}
            <span
              className={cn(
                "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                isValido
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                  : "border-red-500/30 bg-red-500/10 text-red-400",
              )}
            >
              {precisaReciclagem
                ? "Reciclagem necessária"
                : isValido
                  ? "Válido"
                  : "Expirado"}
            </span>
          </div>

          {/* QR Code */}
          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-white/5 bg-white/5">
            {certificado.qrCodeUrl ? (
              <img
                src={certificado.qrCodeUrl}
                alt="QR de verificação"
                className="h-full w-full object-contain p-1"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <QrCode className="h-5 w-5 text-white/20" />
              </div>
            )}
          </div>
        </div>

        {/* Curso info */}
        <div className="mt-4">
          <h3 className="text-base font-bold text-white">
            {certificado.curso}
          </h3>
          {certificado.descricao && (
            <p className="mt-1 text-xs leading-relaxed text-white/40">
              {certificado.descricao}
            </p>
          )}
          <p className="mt-1.5 text-[10px] font-medium text-white/30">
            Carga horária: {certificado.cargaHoraria}
          </p>
        </div>

        {/* Datas */}
        <div className="mt-3 flex items-center gap-4">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-wider text-white/30">
              Emissão
            </p>
            <p className="text-xs font-medium text-white/60">
              {certificado.dataEmissao}
            </p>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div>
            <p className="text-[9px] font-medium uppercase tracking-wider text-white/30">
              Validade
            </p>
            <p className="text-xs font-medium text-white/60">
              {certificado.dataValidade}
            </p>
          </div>
        </div>

        {/* Progresso de validade (se válido) */}
        {isValido && (
          <div className="mt-3">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-medium text-white/30">
                {diasRestantes > 30
                  ? `${Math.floor(diasRestantes / 30)} meses restantes`
                  : `${diasRestantes} dias restantes`}
              </span>
              <span className="text-[9px] font-medium text-white/30">
                {certificado.status === "reciclagem" ? "Recicle agora" : "Válido"}
              </span>
            </div>
            <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-500",
                  precisaReciclagem
                    ? "bg-gold-500"
                    : diasRestantes < 60
                      ? "bg-red-500"
                      : "bg-emerald-500",
                )}
                style={{
                  width: `${Math.min(100, (1 - diasRestantes / 730) * 100)}%`,
                }}
              />
            </div>
          </div>
        )}

        {/* Badge de reciclagem */}
        {precisaReciclagem && (
          <div className="mt-3 rounded-lg border border-gold-500/20 bg-gold-500/5 px-3 py-2">
            <div className="flex items-center gap-2">
              <RefreshCw className="h-3.5 w-3.5 animate-spin text-gold-400" />
              <span className="text-[10px] font-medium text-gold-300">
        Realize a reciclagem para manter seu certificado ativo.
              </span>
            </div>
          </div>
        )}

        {/* Ações */}
        <div className="mt-4 flex items-center gap-2">
          {isValido && (
            <Button
              variant="default"
              size="sm"
              className="flex-1 gap-1.5 text-xs"
              onClick={() => onDownload?.(certificado.id)}
            >
              <Download className="h-3.5 w-3.5" />
              Download
            </Button>
          )}
          {isValido && (
            <Button
              variant="outline-white"
              size="sm"
              className="flex-1 gap-1.5 text-xs"
              onClick={() => onImprimir?.(certificado.id)}
            >
              <FileText className="h-3.5 w-3.5" />
              Imprimir
            </Button>
          )}
          {(precisaReciclagem || !isValido) && (
            <Button
              variant="default"
              size="sm"
              className="flex-1 gap-1.5 text-xs"
              onClick={() => onRenovar?.(certificado.id)}
            >
              <RefreshCw className="h-3.5 w-3.5" />
              {precisaReciclagem ? "Reciclar" : "Renovar"}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
