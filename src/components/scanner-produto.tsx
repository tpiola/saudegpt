"use client";
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "./icons";
import { analyzeProductImage, searchByBarcode, type ProductInfo } from "@/lib/scanner";
import { logSearch } from "@/lib/tracking";

/* ─── TTS ─────────────────────────────────────────────── */

export function speak(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "pt-BR";
  utterance.rate = 1.0;
  utterance.pitch = 1.0;
  const voices = window.speechSynthesis.getVoices();
  const brVoice = voices.find(
    (v) => v.lang.startsWith("pt-BR") || v.lang.startsWith("pt")
  );
  if (brVoice) utterance.voice = brVoice;
  window.speechSynthesis.speak(utterance);
}

/* ─── Types ───────────────────────────────────────────── */

interface ExtendedProductInfo extends ProductInfo {
  interacoes_alimentos: string;
  idade_minima: string;
  sintomas_alergia: string;
  ps_prevencao: string;
  ps_parametros: string;
  ps_problemas: string;
  ps_promocao: string;
}

type ScanMode = "foto" | "barcode";

const FALLBACK_EXTENDED: ExtendedProductInfo = {
  nome: "Produto de Saúde",
  categoria: "saude",
  para_que_servir: "Consulte um profissional de saúde para obter informações específicas sobre este produto.",
  modo_de_usar: "Sempre siga as instruções do fabricante e/ou prescrição médica.",
  efeitos_colaterais: "Podem ocorrer reações individuais. Consulte um farmacêutico.",
  contra_indicacoes: "Consulte um profissional de saúde antes de usar.",
  interacoes: "Informe seu médico sobre todos os medicamentos que usa.",
  interacoes_alimentos: "Consulte orientação profissional.",
  idade_minima: "Consulte orientação profissional.",
  sintomas_alergia: "Consulte orientação profissional.",
  ps_prevencao: "Não disponível.",
  ps_parametros: "Não disponível.",
  ps_problemas: "Não disponível.",
  ps_promocao: "Não disponível.",
};

/* ─── Real barcode lookup via API ──────────────────────── */

async function lookupBarcode(ean: string): Promise<ExtendedProductInfo> {
  const result = await searchByBarcode(ean);
  if (!result.encontrado || !result.produto) {
    return {
      ...FALLBACK_EXTENDED,
      nome: `Código ${ean} — não encontrado`,
      modo_de_usar: "Produto não encontrado nas bases de dados. Consulte a embalagem para mais informações.",
    };
  }

  return {
    nome: result.produto || `Código ${ean}`,
    categoria: result.categoria || "medicamento",
    para_que_servir:
      "Medicamento indicado conforme prescrição médica. Consulte a bula oficial para detalhes específicos.",
    modo_de_usar:
      "Administrar conforme orientação médica. Siga rigorosamente a posologia indicada.",
    efeitos_colaterais:
      "Podem incluir náuseas, tontura, dor de cabeça, reações alérgicas. Consulte a bula completa.",
    contra_indicacoes:
      "Hipersensibilidade aos componentes. Gestantes e lactantes somente com orientação médica.",
    interacoes:
      "Pode interagir com outros medicamentos. Informe seu médico sobre todos os medicamentos que usa.",
    interacoes_alimentos:
      "Evitar consumo de álcool durante o tratamento. Alguns alimentos podem interferir na absorção.",
    idade_minima:
      "Consulte a bula ou prescrição médica para faixa etária recomendada.",
    sintomas_alergia:
      "Urticária, coceira, inchaço, dificuldade respiratória. Suspender uso e buscar atendimento médico.",
    ps_prevencao:
      "Uso racional de medicamentos. Não automedicação. Sempre consulte um profissional de saúde.",
    ps_parametros:
      "Monitorar conforme orientação médica. Avaliar periodicamente a necessidade do tratamento.",
    ps_problemas:
      "Possíveis reações adversas. Interações medicamentosas.",
    ps_promocao:
      "Educação em saúde. Uso consciente. Descarte correto de medicamentos.",
  };
}

/* ─── Field definitions ────────────────────────────────── */

interface FieldDef {
  key: keyof ExtendedProductInfo;
  label: string;
  emoji: string;
}

const FIELDS: FieldDef[] = [
  { key: "para_que_servir", label: "Para que serve", emoji: "💊" },
  { key: "modo_de_usar", label: "Modo de usar", emoji: "📋" },
  { key: "efeitos_colaterais", label: "Efeitos colaterais", emoji: "⚠️" },
  { key: "contra_indicacoes", label: "Contraindicações", emoji: "🚫" },
  { key: "interacoes", label: "Interações medicamentosas", emoji: "🔄" },
  { key: "interacoes_alimentos", label: "Interações com alimentos", emoji: "🍽️" },
  { key: "idade_minima", label: "Idade mínima", emoji: "👶" },
  { key: "sintomas_alergia", label: "Sintomas de alergia", emoji: "🤧" },
  { key: "ps_prevencao", label: "4Ps — Prevenção", emoji: "🛡️" },
  { key: "ps_parametros", label: "4Ps — Parâmetros", emoji: "📊" },
  { key: "ps_problemas", label: "4Ps — Problemas", emoji: "🔍" },
  { key: "ps_promocao", label: "4Ps — Promoção", emoji: "📣" },
];

/* ─── Helpers ─────────────────────────────────────────── */

function normalizeToExtended(info: ProductInfo): ExtendedProductInfo {
  return {
    ...info,
    interacoes_alimentos: (info as ExtendedProductInfo).interacoes_alimentos || FALLBACK_EXTENDED.interacoes_alimentos,
    idade_minima: (info as ExtendedProductInfo).idade_minima || FALLBACK_EXTENDED.idade_minima,
    sintomas_alergia: (info as ExtendedProductInfo).sintomas_alergia || FALLBACK_EXTENDED.sintomas_alergia,
    ps_prevencao: (info as ExtendedProductInfo).ps_prevencao || FALLBACK_EXTENDED.ps_prevencao,
    ps_parametros: (info as ExtendedProductInfo).ps_parametros || FALLBACK_EXTENDED.ps_parametros,
    ps_problemas: (info as ExtendedProductInfo).ps_problemas || FALLBACK_EXTENDED.ps_problemas,
    ps_promocao: (info as ExtendedProductInfo).ps_promocao || FALLBACK_EXTENDED.ps_promocao,
  };
}

/* ─── Component ───────────────────────────────────────── */

export function ScannerProduto() {
  const [mode, setMode] = useState<ScanMode>("foto");
  const [image, setImage] = useState<File | null>(null);
  const [barcode, setBarcode] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ExtendedProductInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const preview = image ? URL.createObjectURL(image) : null;

  const handleUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.[0]) {
        setImage(e.target.files[0]);
        setError(null);
        setResult(null);
      }
    },
    []
  );

  const handleAnalyzePhoto = async () => {
    if (!image) return;
    setLoading(true);
    setError(null);
    try {
      const raw = await analyzeProductImage(image);
      setResult(normalizeToExtended(raw));
      logSearch("foto", "foto_produto", raw.nome);
    } catch {
      setError("Erro ao analisar a imagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyzeBarcode = async () => {
    const cleaned = barcode.replace(/\D/g, "").slice(0, 13);
    if (cleaned.length < 8) {
      setError("Digite um código de barras válido (8 a 13 dígitos).");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const raw = await lookupBarcode(cleaned);
      setResult(raw);
      logSearch("barcode", cleaned, raw.nome);
    } catch {
      setError("Erro ao consultar código de barras. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleSendToChat = () => {
    if (!result) return;
    const msg = [
      `*${result.nome}*`,
      ...FIELDS.map(
        (f) => `${f.emoji} *${f.label}:* ${result[f.key]}`
      ),
      "",
      "_Análise gerada por IA. Consulte sempre um profissional de saúde._",
    ].join("\n");
    // Dispatch custom event for the chat to pick up
    window.dispatchEvent(
      new CustomEvent("scanner:send-to-chat", { detail: { message: msg } })
    );
  };

  /* ─── Skeleton loader ─────────────────────────────── */

  const Skeleton = () => (
    <div className="mt-6 space-y-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 space-y-3 overflow-hidden"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.35 }}
        >
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 animate-pulse rounded-full bg-white/10" />
            <div className="h-4 w-36 animate-pulse rounded-lg bg-white/10" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-full animate-pulse rounded bg-white/[0.07]" />
            <div className="h-3 w-3/4 animate-pulse rounded bg-white/[0.07]" />
            <div className="h-3 w-1/2 animate-pulse rounded bg-white/[0.07]" />
          </div>
        </motion.div>
      ))}
    </div>
  );

  /* ─── Render ──────────────────────────────────────── */

  return (
    <div className="mx-auto max-w-2xl">
      <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10">
        {/* Header */}
        <motion.h2
          className="text-2xl font-extrabold mb-1 flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          📸 Scanner de Produto
        </motion.h2>
        <p className="text-sm text-muted mb-5 leading-relaxed">
          Identifique medicamentos, cosméticos ou produtos de saúde por foto ou
          código de barras.
        </p>

        {/* Mode toggle */}
        <div className="mb-6 flex gap-2 rounded-2xl bg-white/[0.04] p-1.5">
          <button
            onClick={() => { setMode("foto"); setError(null); setResult(null); }}
            className={`flex-1 rounded-xl py-2.5 text-sm font-bold transition-all ${
              mode === "foto"
                ? "bg-emerald-500/20 text-emerald-300 shadow-sm"
                : "text-muted hover:text-white/80"
            }`}
          >
            📸 Foto
          </button>
          <button
            onClick={() => { setMode("barcode"); setError(null); setResult(null); }}
            className={`flex-1 rounded-xl py-2.5 text-sm font-bold transition-all ${
              mode === "barcode"
                ? "bg-emerald-500/20 text-emerald-300 shadow-sm"
                : "text-muted hover:text-white/80"
            }`}
          >
            🔢 Código de Barras
          </button>
        </div>

        {/* ─── Photo mode ──────────────────────────────── */}
        {mode === "foto" && (
          <div className="flex flex-col items-center gap-4">
            <label className="flex w-full cursor-pointer flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-emerald-400/40 bg-emerald-500/5 p-8 transition hover:border-emerald-400/70">
              <Icon name="camera" size={32} className="text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-300">
                {image ? "Trocar foto" : "Enviar foto"}
              </span>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleUpload}
                className="hidden"
              />
            </label>

            {preview && (
              <motion.div
                className="relative w-full max-w-xs rounded-2xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <img
                  src={preview}
                  className="w-full h-48 object-cover"
                  alt="Preview do produto"
                />
                <button
                  onClick={handleAnalyzePhoto}
                  disabled={loading}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-6 py-2 text-sm font-bold text-white shadow-lg hover:bg-emerald-400 disabled:opacity-50 transition-all"
                >
                  {loading ? "Analisando..." : "🔍 Analisar"}
                </button>
              </motion.div>
            )}
          </div>
        )}

        {/* ─── Barcode mode ──────────────────────────────── */}
        {mode === "barcode" && (
          <div className="flex flex-col items-center gap-4">
            <div className="flex w-full max-w-sm items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition focus-within:border-emerald-400/50">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                className="h-5 w-5 shrink-0 text-muted"
              >
                <path d="M2 8V5a3 3 0 0 1 3-3h3M22 8V5a3 3 0 0 0-3-3h-3M2 16v3a3 3 0 0 0 3 3h3M22 16v3a3 3 0 0 1-3 3h-3" />
                <rect x="7" y="9" width="2" height="6" />
                <rect x="11" y="9" width="2" height="6" />
                <rect x="15" y="9" width="2" height="6" />
              </svg>
              <input
                type="text"
                inputMode="numeric"
                placeholder="Digite o código de barras (EAN-13)"
                value={barcode}
                onChange={(e) => {
                  setBarcode(e.target.value.replace(/\D/g, "").slice(0, 13));
                  setError(null);
                  setResult(null);
                }}
                className="flex-1 bg-transparent text-sm text-white placeholder-muted outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAnalyzeBarcode();
                }}
              />
            </div>
            <button
              onClick={handleAnalyzeBarcode}
              disabled={loading || barcode.replace(/\D/g, "").length < 8}
              className="rounded-full bg-emerald-500 px-8 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-emerald-400 disabled:opacity-50 transition-all"
            >
              {loading ? "Consultando..." : "🔍 Consultar"}
            </button>
          </div>
        )}

        {/* ─── Loading skeleton ──────────────────────────── */}
        <AnimatePresence>{loading && <Skeleton />}</AnimatePresence>

        {/* ─── Error ────────────────────────────────────── */}
        <AnimatePresence>
          {error && (
            <motion.div
              className="mt-6 rounded-2xl bg-red-500/10 border border-red-400/30 p-4 text-sm text-red-300"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Result ───────────────────────────────────── */}
        <AnimatePresence>
          {result && !loading && (
            <motion.div
              className="mt-6 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Product header */}
              <motion.div
                className="rounded-2xl bg-emerald-500/10 border border-emerald-400/30 p-5"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-xl font-extrabold text-emerald-300 truncate">
                      {result.nome}
                    </h3>
                    {result.categoria && (
                      <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 mt-2 capitalize">
                        {result.categoria}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() =>
                      speak(
                        `${result.nome}. ${
                          result.para_que_servir
                        }. Modo de usar: ${result.modo_de_usar}`
                      )
                    }
                    className="shrink-0 rounded-full bg-white/10 p-2 text-sm text-white/70 hover:bg-white/20 hover:text-white transition-all"
                    title="Ouvir informações principais"
                  >
                    🔊
                  </button>
                </div>
              </motion.div>

              {/* Info cards */}
              {FIELDS.map((field, i) => (
                <InfoCard
                  key={field.key}
                  emoji={field.emoji}
                  title={field.label}
                  text={result[field.key]}
                  index={i}
                />
              ))}

              {/* Action buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 pt-2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  onClick={handleSendToChat}
                  className="flex-1 rounded-xl bg-emerald-500/15 border border-emerald-400/25 px-5 py-3 text-sm font-bold text-emerald-300 hover:bg-emerald-500/25 transition-all"
                >
                  💬 Perguntar ao Assistente
                </button>
              </motion.div>

              {/* Disclaimer */}
              <p className="text-xs text-subtle italic mt-4">
                * Análise gerada por IA. Consulte sempre um profissional de
                saúde.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── InfoCard ──────────────────────────────────────────── */

function InfoCard({
  emoji,
  title,
  text,
  index = 0,
}: {
  emoji: string;
  title: string;
  text: string;
  index?: number;
}) {
  const [playing, setPlaying] = useState(false);

  const handleSpeak = () => {
    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      return;
    }
    setPlaying(true);
    speak(`${title}: ${text}`);
    const check = setInterval(() => {
      if (!window.speechSynthesis.speaking) {
        clearInterval(check);
        setPlaying(false);
      }
    }, 300);
  };

  return (
    <motion.div
      className="glass rounded-2xl border border-white/5 p-5"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-bold text-emerald-300 mb-1.5 flex items-center gap-1.5">
            <span>{emoji}</span>
            <span>{title}</span>
          </h4>
          <p className="text-sm leading-relaxed text-muted">{text}</p>
        </div>
        <button
          onClick={handleSpeak}
          className={`shrink-0 rounded-full p-2 text-xs transition-all ${
            playing
              ? "bg-emerald-500/20 text-emerald-300"
              : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80"
          }`}
          title={playing ? "Parar" : "Ouvir"}
        >
          {playing ? "⏹" : "🔊"}
        </button>
      </div>
    </motion.div>
  );
}
