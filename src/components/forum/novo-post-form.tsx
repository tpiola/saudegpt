"use client";

import { useState } from "react";
import { Card, Botao } from "@/components/ui";
import { Icon } from "@/components/icons";
import { categoriasForum } from "@/content/forum";
import { criarPost } from "@/lib/forum";

interface NovoPostFormProps {
  autorNome: string;
  autorId: string;
  onSuccess: () => void;
  onCancel?: () => void;
}

export function NovoPostForm({ autorNome, autorId, onSuccess, onCancel }: NovoPostFormProps) {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [categoriaId, setCategoriaId] = useState(categoriasForum[0]?.id ?? "");
  const [erro, setErro] = useState("");
  const [xp, setXp] = useState<number | null>(null);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");

    if (!titulo.trim()) {
      setErro("O título é obrigatório.");
      return;
    }
    if (!conteudo.trim()) {
      setErro("O conteúdo é obrigatório.");
      return;
    }
    if (!categoriaId) {
      setErro("Selecione uma categoria.");
      return;
    }

    setEnviando(true);
    const result = criarPost(titulo, conteudo, categoriaId, autorNome, autorId);
    setEnviando(false);

    if (!result.sucesso) {
      setErro(result.erro ?? "Erro ao criar post.");
      return;
    }

    if (result.xp) setXp(result.xp);
    setTimeout(() => onSuccess(), 1000);
  };

  return (
    <Card className="border border-border p-5">
      <h3 className="mb-4 text-base font-semibold">Criar novo post</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="categoria" className="mb-1 block text-xs font-medium text-subtle">
            Categoria
          </label>
          <select
            id="categoria"
            value={categoriaId}
            onChange={(e) => setCategoriaId(e.target.value)}
            className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400"
          >
            {categoriasForum.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nome}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="titulo" className="mb-1 block text-xs font-medium text-subtle">
            Título
          </label>
          <input
            id="titulo"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ex.: Dúvida sobre interação medicamentosa"
            className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm placeholder:text-muted focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400"
            maxLength={120}
          />
          <span className="mt-0.5 block text-right text-xs text-subtle">{titulo.length}/120</span>
        </div>

        <div>
          <label htmlFor="conteudo" className="mb-1 block text-xs font-medium text-subtle">
            Conteúdo
          </label>
          <textarea
            id="conteudo"
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
            placeholder="Compartilhe sua dúvida, experiência ou conhecimento..."
            rows={5}
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
            Post criado! +{xp} XP
          </div>
        )}

        <div className="flex items-center gap-3">
          <Botao type="submit" variante="primary" tamanho="sm" disabled={enviando} icone="message">
            {enviando ? "Publicando..." : "Publicar"}
          </Botao>
          {onCancel && (
            <Botao type="button" variante="ghost" tamanho="sm" onClick={onCancel}>
              Cancelar
            </Botao>
          )}
        </div>
      </form>
    </Card>
  );
}
