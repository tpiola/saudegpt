"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { speak } from "./scanner-produto";

interface Mensagem {
  id: string;
  role: "user" | "assistant";
  content: string;
  image?: string;
}

const STORAGE_KEY = "appfarmacia_chat";

/* ── Ícone Robô (SVG premium) ── */
function ChatBubbleIcon({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <img
        src="/imagens/suporte_robo.webp"
        alt="Suporte"
        className="h-full w-full object-contain drop-shadow-lg"
      />
    </div>
  );
}

/* ── Partículas de fundo ── */
function ParticleBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-emerald-400/20"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

const SUGESTOES = [
  "📸 Analisar foto de medicamento",
  "🔍 Buscar bula de medicamento",
  "O que diz a RDC 471 sobre antibióticos?",
  "Como atender um cliente com diabetes?",
  "Diferença entre MIP e controlados",
];

export function ChatBotIA() {
  const [aberto, setAberto] = useState(false);
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const [input, setInput] = useState("");
  const [digitando, setDigitando] = useState(false);
  const [mostrarSugestoes, setMostrarSugestoes] = useState(true);
  const [modoScanner, setModoScanner] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listaRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const scannerFileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const salvo = localStorage.getItem(STORAGE_KEY);
      if (salvo) {
        const p: Mensagem[] = JSON.parse(salvo);
        if (Array.isArray(p) && p.length > 0) {
          setMensagens(p);
          setMostrarSugestoes(false);
        }
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (mensagens.length > 0) localStorage.setItem(STORAGE_KEY, JSON.stringify(mensagens));
  }, [mensagens]);

  useEffect(() => {
    if (aberto) setTimeout(() => inputRef.current?.focus(), 400);
  }, [aberto]);

  useEffect(() => {
    if (listaRef.current) {
      listaRef.current.scrollTop = listaRef.current.scrollHeight;
    }
  }, [mensagens, digitando]);

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      if (e.detail?.texto) enviar(e.detail.texto);
    };
    window.addEventListener("scanner:send-to-chat", handler as EventListener);
    return () => window.removeEventListener("scanner:send-to-chat", handler as EventListener);
  }, [digitando]);

  const enviar = useCallback(async (texto: string) => {
    if (!texto.trim() || digitando) return;

    if (texto.includes("📸 Analisar foto")) {
      setModoScanner(true);
      setTimeout(() => scannerFileRef.current?.click(), 300);
      return;
    }
    if (texto.includes("🔍 Buscar bula")) {
      setModoScanner(true);
      return;
    }

    const userMsg: Mensagem = { id: Date.now().toString(), role: "user", content: texto };
    setMensagens((p) => [...p, userMsg]);
    setInput("");
    setMostrarSugestoes(false);
    setDigitando(true);

    try {
      const matricula =
        typeof window !== "undefined"
          ? localStorage.getItem("appfarmacia_matricula") || ""
          : "";

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...mensagens.slice(-10), userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          matricula,
        }),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      const resposta =
        data.choices?.[0]?.message?.content ||
        "Desculpe, não consegui processar sua pergunta. Tente reformular.";

      const assistente: Mensagem = { id: (Date.now() + 1).toString(), role: "assistant", content: resposta };
      setMensagens((p) => [...p, assistente]);
    } catch (err) {
      console.error("[chat] Erro:", err);
      setMensagens((p) => [
        ...p,
        { id: (Date.now() + 1).toString(), role: "assistant", content: "⚠️ Não consegui conectar ao assistente agora. Tente novamente em instantes." },
      ]);
    } finally {
      setDigitando(false);
    }
  }, [digitando, mensagens]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    const msg: Mensagem = { id: Date.now().toString(), role: "user", content: "📸 Analisar produto", image: url };
    setMensagens((p) => [...p, msg]);
    setMostrarSugestoes(false);
    setDigitando(true);
    setModoScanner(false);

    try {
      const { analyzeProductImage } = await import("@/lib/scanner");
      const result = await analyzeProductImage(file);

      const resposta = [
        `**🔍 Análise do Produto: ${result.nome}**\n`,
        `💊 **Para que serve:**\n${result.para_que_servir}\n`,
        `📋 **Modo de usar:**\n${result.modo_de_usar}\n`,
        `⚠️ **Efeitos colaterais:**\n${result.efeitos_colaterais}\n`,
        `🚫 **Contraindicações:**\n${result.contra_indicacoes}\n`,
        `🔄 **Interações:**\n${result.interacoes}\n`,
        `---\n📢 *Quer ouvir? Clique no ícone de áudio abaixo.*`,
      ].join("\n");

      const assistente: Mensagem = { id: (Date.now() + 1).toString(), role: "assistant", content: resposta };
      setMensagens((p) => [...p, assistente]);
    } catch {
      setMensagens((p) => [
        ...p,
        { id: (Date.now() + 1).toString(), role: "assistant", content: "❌ Erro ao analisar a imagem. Tente novamente com uma foto mais nítida." },
      ]);
    } finally {
      setDigitando(false);
    }
  };

  const ouvirUltima = () => {
    const ultima = [...mensagens].reverse().find((m) => m.role === "assistant");
    if (ultima) {
      const texto = ultima.content.replace(/[*#`>]/g, "").replace(/\n{2,}/g, ". ").trim();
      speak(texto);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col items-end justify-end p-0 sm:bottom-5 sm:right-5">
      {/* Input oculto para scanner */}
      <input ref={scannerFileRef} type="file" accept="image/*" capture="environment" className="hidden" onChange={handleImageUpload} />

      {/* ─── PAINEL DO CHAT ─── */}
      <AnimatePresence>
        {aberto && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: "spring", damping: 25, stiffness: 260 }}
            className="
              w-full h-full sm:w-[420px] sm:h-[600px] sm:max-h-[85vh] sm:rounded-2xl sm:mb-4 sm:mr-0
              flex flex-col overflow-hidden
              bg-[#0a0f0e]/95 backdrop-blur-2xl
              border-t border-emerald-500/20 sm:border sm:border-emerald-500/20
              shadow-[0_0_60px_rgba(16,185,129,0.12),0_25px_80px_rgba(0,0,0,0.5)]
              sm:shadow-[0_0_80px_rgba(16,185,129,0.15),0_30px_100px_rgba(0,0,0,0.6)]
            "
          >
            {/* Gradiente decorativo superior */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 via-50% to-transparent opacity-80" />

            {/* ─── HEADER PREMIUM ─── */}
            <div className="relative shrink-0 px-4 sm:px-5 pt-4 sm:pt-5 pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                {/* Avatar robô com glow */}
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-md animate-pulse-slow" />
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/30 to-emerald-600/20 ring-1 ring-emerald-400/30 overflow-hidden">
                    <ChatBubbleIcon className="h-6 w-6" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-bold text-white tracking-tight">Assistente IA</h2>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold text-emerald-300 border border-emerald-400/15">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      online
                    </span>
                  </div>
                  <p className="text-[11px] text-white/40 truncate mt-0.5">Farmácia & Saúde • Baseado em evidências</p>
                </div>

                <div className="flex items-center gap-1">
                  {mensagens.filter((m) => m.role === "assistant").length > 0 && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={ouvirUltima}
                      className="rounded-full bg-white/[0.04] p-2 text-white/40 hover:text-emerald-300 hover:bg-emerald-500/10 transition-all border border-white/[0.04]"
                      title="Ouvir última resposta"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1="12" y1="19" x2="12" y2="23" />
                        <line x1="8" y1="23" x2="16" y2="23" />
                      </svg>
                    </motion.button>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setAberto(false)}
                    className="rounded-full bg-white/[0.04] p-2 text-white/40 hover:text-white hover:bg-white/10 transition-all border border-white/[0.04]"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* ─── MENSAGENS ─── */}
            <div
              ref={listaRef}
              className="flex-1 overflow-y-auto overscroll-contain scroll-smooth px-4 sm:px-5 py-4 space-y-3"
              style={{
                background: "radial-gradient(ellipse at top, rgba(16,185,129,0.03), transparent 60%)",
              }}
            >
              {mensagens.length === 0 && !digitando && !modoScanner && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-12 sm:py-16 space-y-5"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-emerald-400/10 blur-xl" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-400/20 shadow-lg">
                      <ChatBubbleIcon className="h-10 w-10" />
                    </div>
                  </div>
                  <div className="text-center max-w-[240px]">
                    <p className="text-sm font-semibold text-white/90">👋 Olá! Como posso ajudar?</p>
                    <p className="text-xs text-white/40 mt-2 leading-relaxed">
                      Pergunte sobre medicamentos, legislação ANVISA, ou escaneie produtos para análise completa.
                    </p>
                  </div>
                </motion.div>
              )}

              <AnimatePresence>
                {mensagens.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 12, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] sm:max-w-[78%] rounded-2xl px-4 py-3 leading-relaxed text-sm ${
                        m.role === "user"
                          ? "bg-gradient-to-br from-emerald-500/20 to-emerald-600/15 text-white/90 rounded-br-sm shadow-[0_2px_12px_rgba(16,185,129,0.1)] border border-emerald-400/10"
                          : "bg-white/[0.04] text-white/80 rounded-bl-sm border border-white/[0.04] shadow-sm backdrop-blur-sm"
                      }`}
                    >
                      {m.image && (
                        <img
                          src={m.image}
                          alt="Produto"
                          className="w-full rounded-xl mb-3 max-h-48 object-cover border border-white/5 shadow-md"
                        />
                      )}
                      <div className="whitespace-pre-wrap leading-relaxed text-[13px] sm:text-sm">{m.content}</div>
                      {m.role === "assistant" && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          onClick={() =>
                            speak(m.content.replace(/[*#`>]/g, "").replace(/\n{2,}/g, ". "))
                          }
                          className="mt-2 text-[10px] text-emerald-400/50 hover:text-emerald-300 transition-colors flex items-center gap-1.5 rounded-full bg-white/[0.02] border border-white/[0.03] px-2.5 py-1"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-3 w-3">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                            <line x1="12" y1="19" x2="12" y2="23" />
                          </svg>
                          Ouvir
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {digitando && (
                <div className="flex items-center gap-3 px-1 py-1">
                  <div className="flex items-center gap-1.5 rounded-full bg-white/[0.04] px-4 py-2.5 border border-white/[0.04]">
                    <span className="h-2 w-2 rounded-full bg-emerald-400/70 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/70 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/70 animate-bounce" style={{ animationDelay: "300ms" }} />
                    <span className="ml-2 text-[11px] text-white/30 font-medium">Assistente pensando...</span>
                  </div>
                </div>
              )}
            </div>

            {/* ─── SUGESTÕES ─── */}
            {mostrarSugestoes && !modoScanner && (
              <div className="shrink-0 px-4 sm:px-5 pb-2">
                <p className="text-[9px] text-white/25 font-bold uppercase tracking-[0.2em] mb-2.5">Sugestões rápidas</p>
                <div className="flex flex-wrap gap-1.5">
                  {SUGESTOES.map((s) => (
                    <motion.button
                      key={s}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => enviar(s)}
                      className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[11px] text-white/50 hover:text-emerald-300 hover:border-emerald-400/25 hover:bg-emerald-500/8 transition-all backdrop-blur-sm"
                    >
                      {s}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* ─── MODO SCANNER ─── */}
            <AnimatePresence>
              {modoScanner && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden shrink-0"
                >
                  <div className="px-4 sm:px-5 pb-3 space-y-2">
                    <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
                    <p className="text-[10px] text-emerald-400/50 font-bold uppercase tracking-[0.15em] flex items-center gap-1.5">
                      📸 Scanner de Produto
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => { scannerFileRef.current?.click(); setModoScanner(false); }}
                        className="rounded-xl border border-dashed border-emerald-400/25 bg-emerald-500/8 p-4 text-center hover:bg-emerald-500/15 hover:border-emerald-400/40 transition-all"
                      >
                        <span className="text-2xl block mb-1">📷</span>
                        <span className="text-xs font-semibold text-emerald-300/90">Tirar Foto</span>
                        <span className="text-[10px] text-white/30 block mt-0.5">ou enviar imagem</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => { setModoScanner(false); setInput(""); setTimeout(() => inputRef.current?.focus(), 100); }}
                        className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center hover:bg-white/[0.05] hover:border-emerald-400/15 transition-all"
                      >
                        <span className="text-2xl block mb-1">🔢</span>
                        <span className="text-xs font-semibold text-white/70">Código de Barras</span>
                        <span className="text-[10px] text-white/30 block mt-0.5">digitar EAN-13</span>
                      </motion.button>
                    </div>
                    <button onClick={() => setModoScanner(false)} className="text-[10px] text-white/30 hover:text-white/60 transition-colors w-full text-center py-1">
                      ← Voltar ao chat
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ─── INPUT PREMIUM ─── */}
            <div className="shrink-0 border-t border-white/[0.04] bg-black/[0.15] px-3 sm:px-4 py-3 pb-5 sm:pb-3">
              <div className="flex items-center gap-2 bg-white/[0.03] rounded-2xl border border-white/[0.05] px-3 py-1.5 focus-within:border-emerald-400/25 focus-within:bg-white/[0.05] transition-all duration-300">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => fileRef.current?.click()}
                  className="rounded-full p-2 text-white/35 hover:text-emerald-300 hover:bg-emerald-500/10 transition-all"
                  title="Enviar foto"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </motion.button>
                <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setModoScanner(!modoScanner)}
                  className={`rounded-full p-2 transition-all ${
                    modoScanner ? "bg-emerald-500/15 text-emerald-300" : "text-white/35 hover:text-emerald-300 hover:bg-emerald-500/10"
                  }`}
                  title="Scanner de Produto"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                    <path d="M2 8V5a3 3 0 0 1 3-3h3M22 8V5a3 3 0 0 0-3-3h-3M2 16v3a3 3 0 0 0 3 3h3M22 16v3a3 3 0 0 1-3 3h-3" />
                    <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.3" />
                  </svg>
                </motion.button>

                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && enviar(input)}
                  placeholder="Digite sua dúvida sobre saúde..."
                  className="flex-1 bg-transparent px-2 py-2 text-xs sm:text-sm text-white/80 outline-none placeholder:text-white/20"
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => enviar(input)}
                  disabled={!input.trim() || digitando}
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-3.5 py-2 text-xs font-bold text-white shadow-lg shadow-emerald-600/20 hover:from-emerald-400 hover:to-emerald-500 disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── INDICADOR DE MENSAGENS ─── */}
      <AnimatePresence>
        {!aberto && mensagens.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="mb-2 mr-2 sm:mr-0 sm:mb-1"
          >
            <div className="relative rounded-xl bg-gradient-to-br from-emerald-500/15 to-emerald-600/8 border border-emerald-400/15 backdrop-blur-md px-3 py-2 text-[11px] text-white/70 shadow-lg">
              <span>💬 {mensagens.length} mensagens</span>
              <div className="absolute -bottom-1 right-5 h-2 w-2 rotate-45 bg-emerald-500/15 border-r border-b border-emerald-400/15" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── BOTÃO FLUTUANTE PREMIUM ─── */}
      <motion.button
        key="chat-button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setAberto(!aberto)}
        className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full text-white shadow-2xl transition-all active:shadow-emerald-400/20 m-3 sm:m-0 sm:mb-0"
        style={{
          background: "linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)",
          boxShadow: "0 8px 32px rgba(16,185,129,0.35), 0 0 0 1px rgba(16,185,129,0.15)",
        }}
        aria-label={aberto ? "Fechar chat" : "Abrir chat IA"}
      >
        {/* Anéis concêntricos */}
        <span className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping opacity-25" style={{ animationDuration: "3s" }} />
        <span className="absolute -inset-2 rounded-full border border-emerald-400/10 animate-pulse-slow" />
        
        <AnimatePresence mode="wait">
          {aberto ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-6 w-6 sm:h-7 sm:w-7"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </motion.svg>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="relative"
            >
              <ChatBubbleIcon className="h-7 w-7 sm:h-8 sm:w-8" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
