"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Pré‑respostas modo DEV ── */
type RespostaChave =
  | "aulas"
  | "medicamentos"
  | "perfumaria"
  | "atendimento"
  | "legislacao"
  | "certificado"
  | "default";

const RESPOSTAS_DEV: Record<RespostaChave, string> = {
  aulas:
    "📚 **Estrutura do curso**\n\nO curso é dividido em módulos com videoaulas, materiais complementares e quizzes. Você pode acessar pelo menu lateral → **Aulas**. Cada módulo tem uma prova ao final para fixar o conteúdo.\n\nDica: use a seção *Trilhas* para um plano de estudos personalizado!",
  medicamentos:
    "💊 **Medicamentos & Farmacologia Básica**\n\nAbordamos classificação de medicamentos (referência, genérico, similar), formas farmacêuticas, vias de administração e interações medicamentosas.\n\n🚩 *Importante:* O atendente não substitui o farmacêutico — você orienta o cliente sobre uso correto e encaminha dúvidas clínicas ao responsável técnico.",
  perfumaria:
    "🧴 **Perfumaria & Cosméticos**\n\nVocê aprenderá sobre:\n• Principais categorias (perfumes, cremes, protetores solares, maquiagem)\n• Leitura de rótulos e ingredientes\n• Como orientar o cliente sobre o produto ideal\n• Cuidados com armazenamento e validade",
  atendimento:
    "🛒 **Atendimento ao Cliente**\n\nBoas práticas:\n• Acolhimento com cordialidade\n• Escuta ativa para entender a necessidade\n• Orientação clara sem termos técnicos\n• Encaminhamento ao farmacêutico quando necessário\n• Pós‑venda e fidelização\n\n📌 Lembre‑se: um bom atendimento transforma a experiência na farmácia!",
  legislacao:
    "⚖️ **Legislação ANVISA & Farmácia**\n\nTópicos essenciais:\n• RDC 44/2009 (dispensação de medicamentos)\n• Regras para venda de antibióticos (receita de controle especial)\n• Medicamentos isentos de prescrição (MIP)\n• Obrigações do atendente e responsabilidade técnica\n• Documentação e arquivamento de receitas",
  certificado:
    "🎓 **Certificado**\n\nPara obter seu certificado:\n1. Complete todos os módulos\n2. Atinga média mínima nas provas (≥ 7,0)\n3. Acesse a seção *Certificado* no menu\n\nO certificado é emitido digitalmente com validação por QR code. Você pode baixar ou compartilhar direto da plataforma.",
  default:
    "Olá! 😊 Sou o tutor virtual do **Curso de Formação para Atendentes de Farmácia**.\n\nPosso tirar dúvidas sobre:\n\n📚 **Aulas** — estrutura do curso, módulos, trilhas\n💊 **Medicamentos** — farmacologia, classes, genéricos\n🧴 **Perfumaria** — cosméticos, dermocosméticos\n🛒 **Atendimento** — boas práticas, abordagem ao cliente\n⚖️ **Legislação** — ANVISA, RDCs, receituário\n🎓 **Certificado** — requisitos e emissão\n\nDigite sua dúvida ou escolha um tópico acima! 👇",
};

function detectarChave(texto: string): RespostaChave {
  const t = texto.toLowerCase();
  if (/(aula|modulo|trilha|conteudo|matéria|módulo)/i.test(t)) return "aulas";
  if (/(medicamento|remedio|farmaco|droga|genérico|similar|bula|comprimido)/i.test(t))
    return "medicamentos";
  if (/(perfume|cosmético|creme|protetor|maquiagem|dermocosmético)/i.test(t))
    return "perfumaria";
  if (/(atendimento|cliente|orientação|como atender|abordagem|pós-venda)/i.test(t))
    return "atendimento";
  if (/(lei|legislação|anvisa|rdc|receita|regulamento|controle especial)/i.test(t))
    return "legislacao";
  if (/(certificado|conclusão|emitir|diploma|comprovante)/i.test(t))
    return "certificado";
  return "default";
}

/* ── System Prompt ── */
const SYSTEM_PROMPT =
  "Você é um tutor virtual do curso Formação para Atendentes de Farmácia. Responda dúvidas sobre: medicamentos, perfumaria, atendimento, legislação ANVISA, farmacologia básica. Seja didático e use linguagem simples.";

/* ── Tipos ── */
interface Mensagem {
  role: "user" | "assistant";
  content: string;
}

const STORAGE_KEY = "appfarmacia_chat";

/* ── Botão bolha SVG ── */
function ChatBubbleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
    >
      <path d="M21 12a9 9 0 1 1-16-6l-2 5 5-2a9 9 0 0 1 13-3Z" />
      <path d="M8 10h.01" />
      <path d="M12 10h.01" />
      <path d="M16 10h.01" />
    </svg>
  );
}

/* ── Componente Principal ── */
export function ChatBotIA() {
  const [aberto, setAberto] = useState(false);
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const [input, setInput] = useState("");
  const [digitando, setDigitando] = useState(false);
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
        }
      }
    } catch {
      /* ignorar */
    }
  }, []);

  /* Salvar no localStorage */
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mensagens));
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
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const ADICIONAR_MENSAGEM_BEM_VINDO = useCallback(() => {
    setMensagens([
      { role: "assistant", content: RESPOSTAS_DEV["default"] },
    ]);
  }, []);

  const ENVIAR = useCallback(async () => {
    const texto = input.trim();
    if (!texto || digitando) return;

    const userMsg: Mensagem = { role: "user", content: texto };
    const atualizadas = [...mensagens, userMsg];
    setMensagens(atualizadas);
    setInput("");
    setDigitando(true);

    try {
      const apiKey =
        typeof window !== "undefined"
          ? (window as any).__NEXT_PUBLIC_OPENAI_API_KEY
          : process.env.NEXT_PUBLIC_OPENAI_API_KEY;

      if (apiKey) {
        /* ── Modo OpenAI ── */
        const body = {
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...atualizadas.map((m) => ({ role: m.role, content: m.content })),
          ],
        };

        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify(body),
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        const reply = data.choices?.[0]?.message?.content;
        if (reply) {
          setMensagens((prev) => [
            ...prev,
            { role: "assistant", content: reply },
          ]);
        }
      } else {
        /* ── Modo DEV ── */
        await new Promise((r) => setTimeout(r, 600 + Math.random() * 800));
        const chave = detectarChave(texto);
        setMensagens((prev) => [
          ...prev,
          { role: "assistant", content: RESPOSTAS_DEV[chave] },
        ]);
      }
    } catch (err) {
      setMensagens((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "❌ Desculpe, ocorreu um erro ao buscar a resposta. Tente novamente.",
        },
      ]);
    } finally {
      setDigitando(false);
    }
  }, [input, digitando, mensagens]);

  return (
    <>
      {/* Botão flutuante — canto INFERIOR ESQUERDO */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 flex flex-col items-start gap-2 sm:gap-3">
        <AnimatePresence>
          {aberto && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="origin-bottom-left"
            >
              {/* Painel do chat */}
              <div
                className={`
                  flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl
                  dark:border-border-dark
                  ${/* Mobile: full screen */ "fixed inset-0 z-50 m-0 rounded-none sm:static sm:inset-auto sm:z-auto sm:rounded-2xl"}
                  sm:h-[560px] sm:w-[380px]
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
                      <p className="text-sm font-bold">Tutor IA</p>
                      <p className="text-[10px] opacity-80">Formação para Atendentes</p>
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
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="h-4 w-4"
                      >
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
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="h-4 w-4"
                      >
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
                  {mensagens.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center text-muted dark:text-muted-dark">
                      <ChatBubbleIcon className="h-10 w-10 mb-3 opacity-30" />
                      <p className="text-sm font-medium">Nenhuma conversa</p>
                      <p className="text-xs mt-1">
                        Comece perguntando algo sobre o curso!
                      </p>
                    </div>
                  )}

                  {mensagens.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: idx * 0.03 }}
                      className={`flex ${
                        msg.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-forest-500 text-white rounded-br-md"
                            : "bg-surface-2 text-foreground dark:bg-surface-dark dark:text-foreground-dark rounded-bl-md border border-border"
                        }`}
                      >
                        <span className="whitespace-pre-wrap">
                          {msg.content}
                        </span>
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
                          <span
                            className="h-2 w-2 animate-bounce rounded-full bg-forest-500"
                            style={{ animationDelay: "0.1s" }}
                          />
                          <span
                            className="h-2 w-2 animate-bounce rounded-full bg-forest-500"
                            style={{ animationDelay: "0.2s" }}
                          />
                        </span>
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
                      placeholder="Digite sua dúvida..."
                      disabled={digitando}
                      className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 dark:bg-background-dark dark:text-foreground-dark dark:placeholder:text-muted-dark"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || digitando}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-500 text-white transition hover:bg-forest-600 disabled:opacity-40 disabled:cursor-not-allowed"
                      aria-label="Enviar mensagem"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                      >
                        <path d="M22 2 11 13" />
                        <path d="M22 2 15 22 11 13 2 9l20-7Z" />
                      </svg>
                    </button>
                  </form>
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
          aria-label="Abrir chat com tutor IA"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {aberto ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="h-6 w-6 sm:h-7 sm:w-7"
            >
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
