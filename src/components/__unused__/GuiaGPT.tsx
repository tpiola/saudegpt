"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, AlertTriangle } from "lucide-react";

interface Mensagem {
  tipo: "user" | "bot";
  texto: string;
}

const boasVindas = `Olá! Sou o **Guia SaúdeGPT** 🤖

Posso ajudar com:
- Dúvidas sobre as trilhas e aulas
- Explicar conceitos de farmácia
- Recomendar o que estudar
- Tirar dúvidas sobre os quizzes

Lembre-se: não realizo diagnósticos nem prescrevo medicamentos. Em caso de emergência, ligue 192.`;

export function GuiaGPT() {
  const [aberto, setAberto] = useState(false);
  const [mensagens, setMensagens] = useState<Mensagem[]>([{ tipo: "bot", texto: boasVindas }]);
  const [input, setInput] = useState("");
  const [carregando, setCarregando] = useState(false);
  const fimRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fimRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensagens]);

  const enviar = async () => {
    if (!input.trim() || carregando) return;
    const pergunta = input.trim();
    setInput("");
    setMensagens((prev) => [...prev, { tipo: "user", texto: pergunta }]);
    setCarregando(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mensagem: pergunta }),
      });
      const data = await res.json();
      setMensagens((prev) => [
        ...prev,
        { tipo: "bot", texto: data.resposta || "Desculpe, não consegui processar sua pergunta." },
      ]);
    } catch {
      setMensagens((prev) => [
        ...prev,
        {
          tipo: "bot",
          texto: "Não consegui me conectar ao servidor. Tente novamente mais tarde.",
        },
      ]);
    }
    setCarregando(false);
  };

  return (
    <>
      <button
        onClick={() => setAberto(true)}
        className="fixed bottom-6 left-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-500 to-gold-600 text-white shadow-[0_8px_32px_rgba(52,211,153,0.35)] transition-all hover:scale-110 active:scale-95"
        aria-label="Abrir Guia SaúdeGPT"
      >
        <Bot size={24} />
      </button>

      {aberto && (
        <div className="fixed bottom-24 left-4 right-4 sm:left-6 sm:right-auto sm:w-[380px] z-[100] rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 text-white">
                <Bot size={16} />
              </div>
              <div>
                <h3 className="text-sm font-bold">Guia SaúdeGPT</h3>
                <p className="text-[10px] text-muted-foreground">Assistente educacional</p>
              </div>
            </div>
            <button onClick={() => setAberto(false)} className="text-muted-foreground hover:text-foreground">
              <X size={18} />
            </button>
          </div>

          <div className="flex items-center gap-2 bg-amber-500/10 px-4 py-2">
            <AlertTriangle size={12} className="text-amber-500 shrink-0" />
            <p className="text-[10px] text-amber-600 dark:text-amber-400">
              Não realizo diagnósticos nem prescrevo medicamentos.
            </p>
          </div>

          <div className="h-[350px] overflow-y-auto px-4 py-3 space-y-3">
            {mensagens.map((msg, i) => (
              <div key={i} className={`flex ${msg.tipo === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.tipo === "user"
                      ? "bg-emerald-600 text-white rounded-br-md"
                      : "bg-accent/50 text-foreground rounded-bl-md"
                  }`}
                >
                  {msg.texto}
                </div>
              </div>
            ))}
            {carregando && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-accent/50 px-3.5 py-2.5">
                  <span className="animate-pulse text-sm">Pensando...</span>
                </div>
              </div>
            )}
            <div ref={fimRef} />
          </div>

          <div className="border-t border-white/10 p-3">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && enviar()}
                placeholder="Digite sua dúvida..."
                className="flex-1 rounded-xl border border-white/10 bg-accent/30 px-3.5 py-2.5 text-sm outline-none focus:border-gold-500/50 transition-colors"
                disabled={carregando}
              />
              <button
                onClick={enviar}
                disabled={carregando || !input.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white hover:bg-gold-500 disabled:opacity-40 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
