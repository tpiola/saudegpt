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

function ChatBubbleIcon({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <img
        src="/imagens/suporte_robo.png"
        alt="Suporte"
        className="h-full w-full object-contain"
      />
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
    if (aberto) setTimeout(() => inputRef.current?.focus(), 300);
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
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Input oculto para scanner */}
      <input ref={scannerFileRef} type="file" accept="image/*" capture="environment" className="hidden" onChange={handleImageUpload} />

      {/* ─── PAINEL DO CHAT ─── */}
      <AnimatePresence>
        {aberto && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.92 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="glass-premium rounded-2xl border border-white/10 shadow-2xl w-[min(calc(100vw-2rem),24rem)] max-h-[40rem] flex flex-col overflow-hidden"
            style={{
              boxShadow: "0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(16,185,129,0.15)",
            }}
          >
            {/* ─── Header premium ─── */}
            <div className="relative flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-emerald-600/10 via-emerald-500/5 to-transparent px-4 py-3.5">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 opacity-60" />
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/30">
                <ChatBubbleIcon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white">Assistente SaúdeGPT</p>
                <p className="text-[10px] text-emerald-300/70 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online — Farmácia baseada em evidências
                </p>
              </div>
              <div className="flex gap-1">
                {mensagens.filter((m) => m.role === "assistant").length > 0 && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={ouvirUltima}
                    className="rounded-full bg-white/5 p-2 text-subtle hover:text-emerald-300 hover:bg-emerald-500/10 transition-all"
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
                  className="rounded-full bg-white/5 p-2 text-subtle hover:text-white hover:bg-white/10 transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* ─── Mensagens ─── */}
            <div ref={listaRef} className="flex-1 overflow-y-auto space-y-3 px-4 py-4 scroll-smooth text-sm bg-gradient-to-b from-transparent via-transparent to-emerald-500/[0.02]">
              {mensagens.length === 0 && !digitando && !modoScanner && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-10 space-y-4"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-400/20">
                    <ChatBubbleIcon className="h-8 w-8 text-emerald-400/60" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/80">👋 Olá! Como posso ajudar?</p>
                    <p className="text-xs text-muted mt-1 max-w-xs mx-auto">
                      Pergunte sobre medicamentos, legislação ANVISA, ou use o scanner para identificar produtos.
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
                      className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 leading-relaxed text-sm ${
                        m.role === "user"
                          ? "bg-gradient-to-br from-emerald-500/25 to-emerald-600/15 text-white rounded-br-md shadow-sm"
                          : "bg-white/[0.06] border border-white/[0.06] text-foreground rounded-bl-md backdrop-blur-sm"
                      }`}
                    >
                      {m.image && (
                        <img
                          src={m.image}
                          alt="Produto"
                          className="w-full rounded-xl mb-2.5 max-h-48 object-cover border border-white/5"
                        />
                      )}
                      <div className="whitespace-pre-wrap leading-relaxed">{m.content}</div>
                      {m.role === "assistant" && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          onClick={() =>
                            speak(m.content.replace(/[*#`>]/g, "").replace(/\n{2,}/g, ". "))
                          }
                          className="mt-2 text-[10px] text-emerald-400/60 hover:text-emerald-300 transition-colors flex items-center gap-1 rounded-full bg-white/[0.03] px-2 py-1"
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
                <div className="flex items-center gap-2 text-xs text-muted px-1">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-400/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                  <span>Assistente digitando...</span>
                </div>
              )}
            </div>

            {/* ─── Sugestões ─── */}
            {mostrarSugestoes && !modoScanner && (
              <div className="px-4 pb-2">
                <p className="text-[10px] text-muted mb-2 font-semibold uppercase tracking-wider">Sugestões</p>
                <div className="flex flex-wrap gap-1.5">
                  {SUGESTOES.map((s) => (
                    <motion.button
                      key={s}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => enviar(s)}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] text-muted hover:border-emerald-400/30 hover:text-emerald-300 hover:bg-emerald-500/8 transition-all backdrop-blur-sm"
                    >
                      {s}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* ─── Modo Scanner no Chat ─── */}
            <AnimatePresence>
              {modoScanner && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-3 space-y-2">
                    <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
                    <p className="text-[10px] text-emerald-400/60 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <span>📸</span> Scanner de Produto
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          scannerFileRef.current?.click();
                          setModoScanner(false);
                        }}
                        className="rounded-xl border border-dashed border-emerald-400/30 bg-emerald-500/8 p-4 text-center hover:bg-emerald-500/15 hover:border-emerald-400/50 transition-all"
                      >
                        <span className="text-2xl block mb-1">📷</span>
                        <span className="text-xs font-semibold text-emerald-300">Tirar Foto</span>
                        <span className="text-[10px] text-muted block mt-0.5">ou enviar imagem</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setModoScanner(false);
                          setInput("");
                          setTimeout(() => {
                            inputRef.current?.focus();
                            // Simula digitação de código de barras
                            setInput("Digite o código de barras (EAN) e pressione Enter...");
                            setTimeout(() => setInput(""), 100);
                          }, 100);
                        }}
                        className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center hover:bg-white/[0.06] hover:border-emerald-400/20 transition-all"
                      >
                        <span className="text-2xl block mb-1">🔢</span>
                        <span className="text-xs font-semibold text-white/80">Código de Barras</span>
                        <span className="text-[10px] text-muted block mt-0.5">digitar EAN-13</span>
                      </motion.button>
                    </div>
                    <button
                      onClick={() => setModoScanner(false)}
                      className="text-[10px] text-muted hover:text-white/70 transition-colors w-full text-center py-1"
                    >
                      ← Voltar ao chat
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ─── Input ─── */}
            <div className="border-t border-white/[0.06] bg-black/[0.08] px-3 py-3 flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => fileRef.current?.click()}
                className="rounded-full bg-white/[0.05] p-2.5 text-subtle hover:text-emerald-300 hover:bg-emerald-500/10 transition-all"
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
                className={`rounded-full p-2.5 transition-all ${
                  modoScanner
                    ? "bg-emerald-500/20 text-emerald-300"
                    : "bg-white/[0.05] text-subtle hover:text-emerald-300 hover:bg-emerald-500/10"
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
                placeholder="Digite sua dúvida..."
                className="flex-1 rounded-full bg-white/[0.05] px-3.5 py-2 text-xs outline-none placeholder:text-muted/50 border border-white/[0.05] focus:border-emerald-400/30 focus:bg-white/[0.08] transition-all"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => enviar(input)}
                disabled={!input.trim() || digitando}
                className="rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-emerald-600/30 hover:from-emerald-400 hover:to-emerald-500 disabled:opacity-30 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── BOTÃO FLUTUANTE PREMIUM ─── */}
      <AnimatePresence>
        {!aberto && mensagens.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-[calc(100%+8px)] right-0"
          >
            <div className="relative rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-400/20 backdrop-blur-sm px-3 py-2 text-xs text-white/80 shadow-lg">
              <span>💬 {mensagens.length} mensagens</span>
              <div className="absolute -bottom-1 right-6 h-2 w-2 rotate-45 bg-emerald-500/20 border-r border-b border-emerald-400/20" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        key="chat-button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setAberto(!aberto)}
        className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 text-white shadow-2xl transition-all hover:shadow-emerald-400/40 active:shadow-emerald-400/20"
        style={{
          boxShadow: "0 8px 32px rgba(16,185,129,0.35), 0 0 0 1px rgba(16,185,129,0.15)",
        }}
        aria-label={aberto ? "Fechar chat" : "Abrir chat IA"}
      >
        {/* Anel pulsante */}
        <span className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping opacity-20" style={{ animationDuration: "3s" }} />
        
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
            >
              <ChatBubbleIcon className="h-6 w-6 sm:h-7 sm:w-7" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
