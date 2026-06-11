"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Tipos ── */
interface Mensagem {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const STORAGE_KEY = "appfarmacia_chat";

/* ── Botão bolha SVG ── */
function ChatBubbleIcon({ className }: { className?: string }) {
  // Robô humanoide da farmácia — cabeça com antena e cruz da saúde no peito.
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <line x1="12" y1="2" x2="12" y2="4" />
      <circle cx="12" cy="2" r="0.6" fill="currentColor" />
      <rect x="6.5" y="4" width="11" height="8" rx="3" />
      <circle cx="10" cy="8" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14" cy="8" r="0.9" fill="currentColor" stroke="none" />
      <path d="M10.2 10.2c.5.5 1.2.8 1.8.8s1.3-.3 1.8-.8" />
      <rect x="8" y="13.5" width="8" height="7" rx="2.4" />
      <path d="M12 15.2v3.4M10.3 16.9h3.4" />
      <path d="M6.5 15.5H5a1 1 0 0 0-1 1v1.8" />
      <path d="M17.5 15.5H19a1 1 0 0 1 1 1v1.8" />
    </svg>
  );
}

/* ── Sugestões rápidas ── */
const SUGESTOES = [
  "O que diz a RDC 471 sobre antibióticos?",
  "Como atender um cliente com diabetes?",
  "Diferença entre MIP e controlados",
  "O que é Pharmaceutical Care?",
];

/* ── Componente Principal ── */
export function ChatBotIA() {
  const [aberto, setAberto] = useState(false);
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const [input, setInput] = useState("");
  const [digitando, setDigitando] = useState(false);
  const [mostrarSugestoes, setMostrarSugestoes] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const listaRef = useRef<HTMLDivElement>(null);

  /* Carregar do localStorage */
  useEffect(() => {
    try {
      const salvo = localStorage.getItem(STORAGE_KEY);
      if (salvo) {
        const parsed: Mensagem[] = JSON.parse(salvo);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMensagens(parsed);
          setMostrarSugestoes(false);
        }
      }
    } catch {
      /* ignorar */
    }
  }, []);

  /* Salvar no localStorage (limite de 50 mensagens) */
  useEffect(() => {
    try {
      const limitadas = mensagens.slice(-50);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(limitadas));
    } catch {
      /* ignorar */
    }
  }, [mensagens]);

  /* Scroll p/ baixo */
  useEffect(() => {
    if (listaRef.current) {
      listaRef.current.scrollTop = listaRef.current.scrollHeight;
    }
  }, [mensagens, digitando]);

  /* Foco no input ao abrir */
  useEffect(() => {
    if (aberto && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [aberto]);

  const LIMPAR_CONVERSA = useCallback(() => {
    setMensagens([]);
    setMostrarSugestoes(true);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const ENVIAR = useCallback(async (textoOverride?: string) => {
    const texto = (textoOverride || input).trim();
    if (!texto || digitando) return;

    const userMsg: Mensagem = { id: crypto.randomUUID(), role: "user", content: texto };
    const atualizadas = [...mensagens, userMsg];
    setMensagens(atualizadas);
    setInput("");
    setDigitando(true);
    setMostrarSugestoes(false);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: atualizadas.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content;
      if (reply) {
        setMensagens((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content: reply }]);
      }
    } catch (err) {
      console.error("ChatBot error:", err);
      setMensagens((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "❌ Não consegui consultar minha base agora. Pode tentar de novo? 😊",
        },
      ]);
    } finally {
      setDigitando(false);
    }
  }, [input, digitando, mensagens]);

  return (
    <>
      {/* Botão flutuante — canto INFERIOR ESQUERDO */}
      <div className="fixed bottom-4 right-[4.75rem] sm:bottom-6 sm:right-24 z-[60] flex flex-col items-end gap-2 sm:gap-3">
        <AnimatePresence>
          {aberto && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="origin-bottom-right"
            >
              <div
                className={`
                  flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl
                  dark:border-border-dark
                  ${"fixed inset-0 z-50 m-0 rounded-none sm:static sm:inset-auto sm:z-auto sm:rounded-2xl"}
                  sm:h-[600px] sm:w-[400px]
                `}
              >
                {/* Overlay de fechar no mobile */}
                <div
                  className="fixed inset-0 -z-10 bg-black/30 backdrop-blur-sm sm:hidden"
                  onClick={() => setAberto(false)}
                />

                {/* Header */}
                <div className="flex items-center justify-between border-b border-border bg-gradient-to-r from-forest-600 to-forest-500 px-4 py-3 text-white dark:from-forest-700 dark:to-forest-600">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                      <ChatBubbleIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-bold">Tutor IA — Anvisa & Saúde</p>
                      <p className="text-[10px] opacity-80">Referências científicas · Respostas completas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={LIMPAR_CONVERSA}
                      className="flex h-7 w-7 items-center justify-center rounded-full text-white/80 transition hover:bg-white/20 hover:text-white"
                      aria-label="Limpar conversa"
                      title="Limpar conversa"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                        <path d="M3 6h18" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => setAberto(false)}
                      className="flex h-7 w-7 items-center justify-center rounded-full text-white/80 transition hover:bg-white/20 hover:text-white"
                      aria-label="Fechar chat"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                        <path d="M18 6 6 18" />
                        <path d="M6 6 18 18" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Mensagens */}
                <div
                  ref={listaRef}
                  className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth"
                >
                  {/* Estado vazio + sugestões */}
                  {mostrarSugestoes && mensagens.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-400/10 ring-1 ring-green-400/20">
                        <ChatBubbleIcon className="h-7 w-7 text-green-500" />
                      </div>
                      <p className="text-sm font-semibold text-foreground">
                        Robô da Saúde — seu tutor 24h
                      </p>
                      <p className="text-xs text-muted mt-1 max-w-[260px]">
                        Tire qualquer dúvida com referências da ANVISA, OMS, Ministério da Saúde e mais.
                      </p>
                      <div className="mt-5 flex flex-wrap justify-center gap-2">
                        {SUGESTOES.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => ENVIAR(s)}
                            className="rounded-full border border-border bg-muted/20 px-3.5 py-1.5 text-xs font-medium text-muted transition-all hover:border-green-400/30 hover:bg-green-500/5 hover:text-green-600 dark:hover:text-green-400 active:scale-95"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {mensagens.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: idx * 0.03 }}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-forest-500 text-white rounded-br-md"
                            : "bg-surface-2 text-foreground dark:bg-surface-dark dark:text-foreground-dark rounded-bl-md border border-border"
                        }`}
                      >
                        <span className="whitespace-pre-wrap">{msg.content}</span>
                      </div>
                    </motion.div>
                  ))}

                  {digitando && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-surface-2 px-4 py-3 border border-border dark:bg-surface-dark">
                        <span className="flex items-center gap-1">
                          <span className="h-2 w-2 animate-bounce rounded-full bg-forest-500" />
                          <span className="h-2 w-2 animate-bounce rounded-full bg-forest-500" style={{ animationDelay: "0.1s" }} />
                          <span className="h-2 w-2 animate-bounce rounded-full bg-forest-500" style={{ animationDelay: "0.2s" }} />
                        </span>
                        <span className="ml-2 text-[10px] text-muted">Consultando ANVISA + referências...</span>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Input */}
                <div className="border-t border-border px-4 py-3 dark:border-border-dark">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      ENVIAR();
                    }}
                    className="flex items-center gap-2"
                  >
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Pergunte sobre ANVISA, medicamentos, saúde..."
                      disabled={digitando}
                      className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 dark:bg-background-dark dark:text-foreground-dark dark:placeholder:text-muted-dark"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || digitando}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-500 text-white transition hover:bg-forest-600 disabled:opacity-40 disabled:cursor-not-allowed"
                      aria-label="Enviar mensagem"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                        <path d="M22 2 11 13" />
                        <path d="M22 2 15 22 11 13 2 9l20-7Z" />
                      </svg>
                    </button>
                  </form>
                  <p className="mt-1.5 text-[10px] text-muted/60 text-center">
                    O Tutor IA consulta ANVISA, OMS, Ministério da Saúde e literatura científica
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botão flutuante */}
        <motion.button
          type="button"
          onClick={() => setAberto((v) => !v)}
          className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-forest-500 text-white shadow-xl shadow-forest-500/30 transition-all hover:bg-forest-400 hover:scale-105 active:scale-95"
          aria-label="Abrir chat com o Robô da Saúde"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {aberto ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6 sm:h-7 sm:w-7">
              <path d="M18 6 6 18" />
              <path d="M6 6 18 18" />
            </svg>
          ) : (
            <ChatBubbleIcon className="h-6 w-6 sm:h-7 sm:w-7" />
          )}
        </motion.button>
      </div>
    </>
  );
}
