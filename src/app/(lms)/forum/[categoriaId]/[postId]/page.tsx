"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";
import { ThreadView } from "@/components/forum";
import { obterCategoria, obterPost } from "@/lib/forum";
import { categoriasForum } from "@/content/forum";
import { usePerfilAluno } from "@/lib/aluno";
import { useState, useEffect } from "react";

export default function PostThreadPage() {
  const params = useParams();
  const categoriaId = params.categoriaId as string;
  const postId = params.postId as string;
  const { perfil, carregado } = usePerfilAluno();

  const categoria = categoriasForum.find((c) => c.id === categoriaId) ?? null;

  const autorNome = perfil?.nome ?? "Visitante";
  const autorId = perfil?.email ?? "visitante";

  // Admin check (simples: email contendo "admin" ou "saudegpt")
  const isAdmin = perfil?.email?.includes("admin") || perfil?.email?.includes("saudegpt") || false;

  if (!carregado) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-orange-500 border-t-transparent" />
      </div>
    );
  }

  if (!categoria) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 text-center">
        <Icon name="close" size={40} className="mx-auto text-muted" />
        <h1 className="mt-4 text-lg font-bold">Categoria não encontrada</h1>
        <Link href="/forum" className="mt-4 inline-block text-sm text-orange-600 hover:text-orange-700 underline">
          Voltar ao Fórum
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-4 px-4 py-6 sm:px-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-muted">
        <Link href="/forum" className="hover:text-orange-600 transition-colors">
          Fórum
        </Link>
        <span>/</span>
        <Link
          href={`/forum/${categoriaId}`}
          className="hover:text-orange-600 transition-colors"
        >
          {categoria.nome}
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium truncate max-w-[160px]">
          Post
        </span>
      </nav>

      <ThreadView
        postId={postId}
        autorNome={autorNome}
        autorId={autorId}
        isAdmin={isAdmin}
      />
    </div>
  );
}
