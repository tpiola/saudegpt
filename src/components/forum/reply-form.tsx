"use client";

import { useState } from "react";
import { Botao } from "@/components/ui";
import { Icon } from "@/components/icons";
import { responderPost } from "@/lib/forum";

interface ReplyFormProps {
  postId: string;
  autorNome: string;
  autorId: string;
  onSuccess: () => void;
}

export function ReplyForm({ postId, autorNome, autorId, onSuccess }: ReplyFormProps) {
  const [conteudo, setConteudo] = useState("");
  const [erro, setErro] = useState("");
  const [xp, setXp] = useState<number | null>(null);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");

    if (!conteudo.trim()) {
      setErro("Escreva uma resposta.");
      return;
    }

    setEnviando(true);
    const result = responderPost(postId, conteudo, autorNome, autorId);
    setEnviando(false);

    if (!result.sucesso) {
      setErro(result.erro ?? "Erro ao responder.");
      return;
    }

    if (result.xp) setXp(result.xp);
    setConteudo("");

    setTimeout(() => {
      setXp(null);
      onSuccess();
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label htmlFor="reply-conteudo" className="mb-1 block text-xs font-medium text-subtle">
          Sua resposta
        </label>
        <textarea
          id="reply-conteudo"
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          placeholder="Escreva sua resposta..."
          rows={3}
          className="w-full resize-y rounded-lg border border-border bg-surface px-3 py-2 text-sm placeholder:text-muted focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400"
        />
      </div>

      {erro && (
        <div className="rounded-lg bg-red-50 dark:bg-red-900/20 px-3 py-2 text-xs text-red-600 dark:text-red-400">
          {erro}
        </div>
      )}

      {xp !== null && (
        <div className="rounded-lg bg-gold-50 dark:bg-gold-900/20 px-3 py-2 text-xs text-gold-600 dark:text-gold-400 flex items-center gap-2">
          <Icon name="zap" size={14} />
          Resposta enviada! +{xp} XP
        </div>
      )}

      <Botao type="submit" variante="primary" tamanho="sm" disabled={enviando} icone="message">
        {enviando ? "Enviando..." : "Responder"}
      </Botao>
    </form>
  );
}
