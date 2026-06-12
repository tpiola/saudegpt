"use client";

import { useState, useEffect } from "react";
import { Botao, Card } from "@/components/ui";
import { Icon } from "@/components/icons";
import { ForumCategoriasGrid, ForumStats, ForumSidebar, NovoPostForm, NotificacaoBell } from "@/components/forum";
import { usePerfilAluno } from "@/lib/aluno";

export default function ForumPage() {
  const { perfil, carregado } = usePerfilAluno();
  const [showNewPost, setShowNewPost] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Usuário padrão para demonstração se não houver perfil
  const autorNome = perfil?.nome ?? "Visitante";
  const autorId = perfil?.email ?? "visitante";

  const handlePostSuccess = () => {
    setShowNewPost(false);
    setRefreshKey((k) => k + 1);
  };

  if (!carregado) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-orange-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-6 sm:px-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Icon name="message" size={24} className="text-orange-500" />
            <h1 className="text-xl font-bold">Fórum da Farmácia</h1>
          </div>
          <p className="mt-1 text-sm text-muted">
            Tire dúvidas, compartilhe conhecimento e conecte-se com a comunidade.
          </p>
          <ForumStats key={`stats-${refreshKey}`} />
        </div>
        <div className="flex items-center gap-2">
          <NotificacaoBell />
          <Botao
            variante="primary"
            tamanho="sm"
            icone="message"
            onClick={() => setShowNewPost(!showNewPost)}
          >
            Novo post
          </Botao>
        </div>
      </div>

      {/* Novo post form */}
      {showNewPost && (
        <NovoPostForm
          autorNome={autorNome}
          autorId={autorId}
          onSuccess={handlePostSuccess}
          onCancel={() => setShowNewPost(false)}
        />
      )}

      {/* Grid de categorias */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_220px]">
        <div>
          <h2 className="mb-4 text-sm font-semibold text-subtle uppercase tracking-wider">
            Categorias
          </h2>
          <ForumCategoriasGrid />
        </div>
        <aside className="space-y-4">
          <ForumSidebar key={`sidebar-${refreshKey}`} />
        </aside>
      </div>
    </div>
  );
}
