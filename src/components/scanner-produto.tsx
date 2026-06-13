"use client";
import React, { useState } from "react";
import { Icon } from "./icons";
import { analyzeProductImage, type ProductInfo } from "@/lib/scanner";

export function ScannerProduto() {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ProductInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) { setImage(e.target.files[0]); setError(null); setResult(null); }
  };
  const handleAnalyze = async () => {
    if (!image) return;
    setLoading(true); setError(null);
    try { setResult(await analyzeProductImage(image)); }
    catch { setError("Erro ao analisar. Tente novamente."); }
    finally { setLoading(false); }
  };
  const preview = image ? URL.createObjectURL(image) : null;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10">
        <h2 className="text-2xl font-extrabold mb-2">📸 Scanner de Produto</h2>
        <p className="text-sm text-muted mb-6 leading-relaxed">Tire foto ou envie imagem de medicamento, cosmético ou produto de saúde.</p>
        <div className="flex flex-col items-center gap-4">
          <label className="flex w-full cursor-pointer flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-emerald-400/40 bg-emerald-500/5 p-8 transition hover:border-emerald-400/70">
            <Icon name="camera" size={32} className="text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-300">{image ? "Trocar" : "Enviar foto"}</span>
            <input type="file" accept="image/*" capture="environment" onChange={handleUpload} className="hidden" />
          </label>
          {preview && <div className="relative w-full max-w-xs rounded-2xl overflow-hidden border border-white/10">
            <img src={preview} className="w-full h-48 object-cover" alt="" />
            <button onClick={handleAnalyze} disabled={loading}
              className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-6 py-2 text-sm font-bold text-white shadow-lg hover:bg-emerald-400 disabled:opacity-50">
              {loading ? "Analisando..." : "🔍 Analisar"}
            </button>
          </div>}
        </div>
        {loading && <div className="mt-6 space-y-3 animate-pulse"><div className="h-6 w-2/3 rounded-lg bg-white/10" /><div className="h-4 w-full rounded-lg bg-white/5" /><div className="h-4 w-4/5 rounded-lg bg-white/5" /></div>}
        {error && <div className="mt-6 rounded-2xl bg-red-500/10 border border-red-400/30 p-4 text-sm text-red-300">{error}</div>}
        {result && <div className="mt-6 space-y-4">
          <div className="rounded-2xl bg-emerald-500/10 border border-emerald-400/30 p-5">
            <h3 className="text-xl font-extrabold text-emerald-300">{result.nome}</h3>
            {result.categoria && <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 mt-2">{result.categoria}</span>}
          </div>
          <InfoCard title="💊 Para que serve" text={result.para_que_servir} />
          <InfoCard title="📋 Modo de usar" text={result.modo_de_usar} />
          <InfoCard title="⚠️ Efeitos colaterais" text={result.efeitos_colaterais} />
          <InfoCard title="🚫 Contraindicações" text={result.contra_indicacoes} />
          <InfoCard title="🔄 Interações" text={result.interacoes} />
          <p className="text-xs text-subtle italic mt-4">* Análise gerada por IA. Consulte sempre um profissional de saúde.</p>
        </div>}
      </div>
    </div>
  );
}
function InfoCard({ title, text }: { title: string; text: string }) {
  return <div className="glass rounded-2xl p-4 border border-white/5"><h4 className="text-sm font-bold text-emerald-300 mb-1">{title}</h4><p className="text-sm leading-relaxed text-muted">{text}</p></div>;
}
