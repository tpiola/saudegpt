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
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden>
    <line x1="12" y1="2" x2="12" y2="4" /><circle cx="12" cy="2" r="0.6" fill="currentColor" />
    <rect x="6.5" y="4" width="11" height="8" rx="3" /><circle cx="10" cy="8" r="0.9" fill="currentColor" stroke="none" />
    <circle cx="14" cy="8" r="0.9" fill="currentColor" stroke="none" /><path d="M10.2 10.2c.5.5 1.2.8 1.8.8s1.3-.3 1.8-.8" />
    <rect x="8" y="13.5" width="8" height="7" rx="2.4" /><path d="M12 15.2v3.4M10.3 16.9h3.4" /><path d="M6.5 15.5H5a1 1 0 0 0-1 1v1.8" /><path d="M17.5 15.5H19a1 1 0 0 1 1 1v1.8" />
  </svg>;
}

const SUGESTOES = [
  "📸 Analisar foto de medicamento",
  "O que diz a RDC 471 sobre antibióticos?",
  "Como atender um cliente com diabetes?",
  "Diferença entre MIP e controlados",
  "🔍 Buscar bula de medicamento",
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

  // Carregar histórico
  useEffect(() => {
    try { const salvo = localStorage.getItem(STORAGE_KEY); if (salvo) { const p: Mensagem[] = JSON.parse(salvo); if (Array.isArray(p) && p.length > 0) { setMensagens(p); setMostrarSugestoes(false); } } } catch {}
  }, []);

  useEffect(() => { if (mensagens.length > 0) localStorage.setItem(STORAGE_KEY, JSON.stringify(mensagens)); }, [mensagens]);
  useEffect(() => { if (aberto) setTimeout(() => inputRef.current?.focus(), 300); }, [aberto]);

  // Scroll automático
  useEffect(() => {
    if (listaRef.current) {
      listaRef.current.scrollTop = listaRef.current.scrollHeight;
    }
  }, [mensagens, digitando]);

  // Escutar evento do scanner
  useEffect(() => {
    const handler = (e: CustomEvent) => {
      if (e.detail?.texto) {
        enviar(e.detail.texto);
      }
    };
    window.addEventListener("scanner:send-to-chat", handler as EventListener);
    return () => window.removeEventListener("scanner:send-to-chat", handler as EventListener);
  }, [digitando]);

  // Enviar mensagem para a API
  const enviar = useCallback(async (texto: string) => {
    if (!texto.trim() || digitando) return;

    // Se for comando de scanner
    if (texto.includes("📸 Analisar foto") || texto.includes("🔍 Buscar bula")) {
      if (texto.includes("📸 Analisar foto")) {
        setModoScanner(true);
        setTimeout(() => scannerFileRef.current?.click(), 300);
      } else {
        setModoScanner(true);
      }
      return;
    }

    const userMsg: Mensagem = { id: Date.now().toString(), role: "user", content: texto };
    setMensagens(p => [...p, userMsg]);
    setInput("");
    setMostrarSugestoes(false);
    setDigitando(true);

    try {
      // Busca matrícula do aluno logado
      const matricula = typeof window !== "undefined"
        ? localStorage.getItem("appfarmacia_matricula") || ""
        : "";

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: [...mensagens.slice(-10), userMsg].map(m => ({
            role: m.role,
            content: m.content
          })),
          matricula
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      const resposta = data.choices?.[0]?.message?.content || "Desculpe, não consegui processar sua pergunta. Tente reformular.";

      const assistente: Mensagem = { id: (Date.now() + 1).toString(), role: "assistant", content: resposta };
      setMensagens(p => [...p, assistente]);
    } catch (err) {
      console.error("[chat] Erro:", err);
      const fallback = "⚠️ Não consegui conectar ao assistente agora. Tente novamente em instantes.";
      setMensagens(p => [...p, { id: (Date.now() + 1).toString(), role: "assistant", content: fallback }]);
    } finally {
      setDigitando(false);
    }
  }, [digitando, mensagens]);

  // Upload de imagem para scanner via chat
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    const msg: Mensagem = { id: Date.now().toString(), role: "user", content: "📸 Analisar produto", image: url };
    setMensagens(p => [...p, msg]);
    setMostrarSugestoes(false);
    setDigitando(true);
    setModoScanner(false);

    try {
      // Usa a API de scanner
      const { analyzeProductImage } = await import("@/lib/scanner");
      const result = await analyzeProductImage(file);

      const resposta = [
        `**🔍 Análise do Produto**\n`,
        `**💊 Para que serve:**\n${result.para_que_servir}\n`,
        `**📋 Modo de usar:**\n${result.modo_de_usar}\n`,
        `**⚠️ Efeitos colaterais:**\n${result.efeitos_colaterais}\n`,
        `**🚫 Contraindicações:**\n${result.contra_indicacoes}\n`,
        `**🔄 Interações:**\n${result.interacoes}\n`,
        `---\n📢 Quer que eu leia em voz alta? Fale "ouvir" ou clique no botão de áudio.`,
      ].join("\n");

      const assistente: Mensagem = { id: (Date.now() + 1).toString(), role: "assistant", content: resposta };
      setMensagens(p => [...p, assistente]);
    } catch {
      setMensagens(p => [...p, { id: (Date.now() + 1).toString(), role: "assistant", content: "❌ Erro ao analisar a imagem. Tente novamente com uma foto mais nítida." }]);
    } finally {
      setDigitando(false);
    }
  };

  // Ouvir última resposta
  const ouvirUltima = () => {
    const ultima = [...mensagens].reverse().find(m => m.role === "assistant");
    if (ultima) {
      const texto = ultima.content.replace(/[*#`>]/g, "").replace(/\n{2,}/g, ". ").trim();
      speak(texto);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col items-start gap-2 sm:gap-3">
      {/* Input oculto para scanner */}
      <input ref={scannerFileRef} type="file" accept="image/*" capture="environment" className="hidden" onChange={handleImageUpload} />

      {aberto && (
        <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="glass-dark rounded-2xl border border-white/10 shadow-2xl w-[min(calc(100vw-2rem),22rem)] max-h-[36rem] flex flex-col">
          
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400"><ChatBubbleIcon className="h-4 w-4" /></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold">Assistente SaúdeGPT</p>
              <p className="text-xs text-emerald-400/60">Farmácia baseada em evidências</p>
            </div>
            <div className="flex gap-1">
              {mensagens.filter(m => m.role === "assistant").length > 0 && (
                <button onClick={ouvirUltima} className="text-subtle hover:text-emerald-300 transition-colors p-1" title="Ouvir resposta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                    <line x1="8" y1="23" x2="16" y2="23" />
                  </svg>
                </button>
              )}
              <button onClick={() => setAberto(false)} className="text-subtle hover:text-white transition-colors p-1">✕</button>
            </div>
          </div>

          {/* Mensagens */}
          <div ref={listaRef} className="flex-1 overflow-y-auto space-y-3 px-4 py-3 scroll-smooth text-sm">
            {mensagens.length === 0 && !digitando && !modoScanner && (
              <div className="text-center py-6 space-y-3">
                <p className="text-xs text-subtle">💬 Pergunte sobre medicamentos, atendimento ou legislação.</p>
              </div>
            )}
            <AnimatePresence>
              {mensagens.map(m => (
                <motion.div key={m.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-3 py-2 leading-relaxed ${m.role === "user" ? "bg-emerald-500/20 text-white rounded-br-md" : "glass border border-white/5 rounded-bl-md"}`}>
                    {m.image && <img src={m.image} alt="Produto" className="w-full rounded-lg mb-2 max-h-48 object-cover" />}
                    <div className="whitespace-pre-wrap text-readable">{m.content}</div>
                    {m.role === "assistant" && (
                      <button onClick={() => speak(m.content.replace(/[*#`>]/g, "").replace(/\n{2,}/g, ". "))} 
                        className="mt-2 text-[10px] text-emerald-400/70 hover:text-emerald-300 transition-colors flex items-center gap-1">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-3 w-3">
                          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                          <line x1="12" y1="19" x2="12" y2="23" />
                        </svg>
                        Ouvir
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {digitando && <div className="flex gap-1 text-subtle text-xs"><span className="animate-bounce">●</span><span className="animate-bounce animation-delay-150">●</span><span className="animate-bounce animation-delay-300">●</span></div>}
          </div>

          {/* Sugestões + Modo Scanner */}
          {mostrarSugestoes && !modoScanner && (
            <div className="px-4 pb-2">
              <p className="text-[10px] text-subtle mb-1.5">Sugestões:</p>
              <div className="flex flex-wrap gap-1.5">
                {SUGESTOES.map(s => (
                  <button key={s} onClick={() => enviar(s)} 
                    className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-muted hover:border-emerald-400/40 hover:text-emerald-300 transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Modo Scanner no chat */}
          {modoScanner && (
            <div className="px-4 pb-3 space-y-2">
              <p className="text-[10px] text-subtle">📸 Scanner de Produto:</p>
              <div className="flex gap-2">
                <button onClick={() => { scannerFileRef.current?.click(); setModoScanner(false); }}
                  className="flex-1 rounded-xl border border-dashed border-emerald-400/40 bg-emerald-500/10 p-3 text-center text-xs text-emerald-300 hover:bg-emerald-500/20 transition">
                  📷 Tirar / Enviar foto
                </button>
                <button onClick={() => { setModoScanner(false); setInput(""); setTimeout(() => inputRef.current?.focus(), 100); }}
                  className="flex-1 rounded-xl border border-white/10 p-3 text-center text-xs text-muted hover:border-emerald-400/40 transition">
                  🔢 Digitar código
                </button>
              </div>
              <button onClick={() => setModoScanner(false)} className="text-[10px] text-subtle hover:text-white transition">
                Voltar ao chat
              </button>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-white/10 p-3 flex gap-2">
            <button onClick={() => fileRef.current?.click()} className="text-subtle hover:text-emerald-300 transition-colors" title="Enviar foto">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </button>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            
            <button onClick={() => setModoScanner(!modoScanner)} className="text-subtle hover:text-emerald-300 transition-colors" title="Scanner">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                <path d="M2 8V5a3 3 0 0 1 3-3h3M22 8V5a3 3 0 0 0-3-3h-3M2 16v3a3 3 0 0 0 3 3h3M22 16v3a3 3 0 0 1-3 3h-3"/>
                <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.3"/>
              </svg>
            </button>

            <input ref={inputRef} type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && enviar(input)}
              placeholder="Digite sua dúvida..." className="flex-1 rounded-full bg-white/5 px-3 py-1.5 text-xs outline-none placeholder:text-subtle border border-white/5 focus:border-emerald-400/40 text-readable" />
            
            <button onClick={() => enviar(input)} disabled={!input.trim() || digitando} 
              className="rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-400 disabled:opacity-30 transition">
              Enviar
            </button>
          </div>
        </motion.div>
      )}

      {/* Botão flutuante do chat */}
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
        onClick={() => setAberto(!aberto)}
        className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-forest-600 text-white shadow-xl shadow-emerald-600/30 transition-all hover:shadow-emerald-500/50"
        aria-label="Chat IA">
        <ChatBubbleIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      </motion.button>
    </div>
  );
}
