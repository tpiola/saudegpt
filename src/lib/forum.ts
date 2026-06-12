"use client";

import type { ForumCategoria, ForumPost, ForumReply } from "@/content/forum";
import { categoriasForum, seedPosts } from "@/content/forum";

/* ─── Tipos ─────────────────────────────────────── */

export interface ForumEstado {
  categorias: ForumCategoria[];
  posts: ForumPost[];
  ultimoPostCriado: number | null; // timestamp para anti-spam
  notificacoesReply: ReplyNotificacao[];
}

export interface ReplyNotificacao {
  id: string;
  postId: string;
  postTitulo: string;
  categoriaId: string;
  de: string;
  conteudoPreview: string;
  lida: boolean;
  criadoEm: string;
}

/* ─── Constantes ─────────────────────────────────── */

const CHAVE = "saudegpt-forum";
const XP_POST = 5;
const XP_REPLY = 2;
const COOLDOWN_MS = 30_000; // 30 segundos

/* ─── Helpers ────────────────────────────────────── */

function gerarId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function agoraISO(): string {
  return new Date().toISOString();
}

function carregarEstado(): ForumEstado {
  try {
    const raw = localStorage.getItem(CHAVE);
    if (raw) {
      const parsed = JSON.parse(raw) as ForumEstado;
      // Garante que categorias e posts seed existam
      if (!parsed.categorias || parsed.categorias.length === 0) {
        parsed.categorias = [...categoriasForum];
      }
      if (!parsed.posts || parsed.posts.length === 0) {
        parsed.posts = [...seedPosts];
      }
      if (!parsed.notificacoesReply) {
        parsed.notificacoesReply = [];
      }
      return parsed;
    }
  } catch {
    // ignora
  }
  return {
    categorias: [...categoriasForum],
    posts: [...seedPosts],
    ultimoPostCriado: null,
    notificacoesReply: [],
  };
}

function salvarEstado(estado: ForumEstado) {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(estado));
  } catch {
    // ignora
  }
}

/* ─── API Pública ────────────────────────────────── */

export function criarPost(
  titulo: string,
  conteudo: string,
  categoriaId: string,
  autorNome: string,
  autorId: string,
): { sucesso: boolean; erro?: string; xp?: number } {
  const estado = carregarEstado();

  // Anti-spam cooldown
  if (estado.ultimoPostCriado) {
    const diff = Date.now() - estado.ultimoPostCriado;
    if (diff < COOLDOWN_MS) {
      const restante = Math.ceil((COOLDOWN_MS - diff) / 1000);
      return { sucesso: false, erro: `Aguarde ${restante}s antes de criar outro post.` };
    }
  }

  const novo: ForumPost = {
    id: gerarId(),
    categoriaId,
    titulo: titulo.trim(),
    conteudo: conteudo.trim(),
    autorNome,
    autorId,
    criadoEm: agoraISO(),
    curtidas: 0,
    curtidoPor: [],
    denuncias: 0,
    removido: false,
    replies: [],
    repliesCount: 0,
  };

  estado.posts.push(novo);
  estado.ultimoPostCriado = Date.now();
  salvarEstado(estado);

  return { sucesso: true, xp: XP_POST };
}

export function responderPost(
  postId: string,
  conteudo: string,
  autorNome: string,
  autorId: string,
): { sucesso: boolean; erro?: string; xp?: number } {
  const estado = carregarEstado();
  const post = estado.posts.find((p) => p.id === postId);
  if (!post) return { sucesso: false, erro: "Post não encontrado." };
  if (post.removido) return { sucesso: false, erro: "Post removido pela moderação." };

  const reply: ForumReply = {
    id: gerarId(),
    postId,
    conteudo: conteudo.trim(),
    autorNome,
    autorId,
    criadoEm: agoraISO(),
    curtidas: 0,
    curtidoPor: [],
    denuncias: 0,
    removido: false,
  };

  post.replies.push(reply);
  post.repliesCount = post.replies.length;

  // Notificação para o autor do post (se não for o mesmo usuário)
  if (post.autorId !== autorId) {
    estado.notificacoesReply.push({
      id: gerarId(),
      postId,
      postTitulo: post.titulo,
      categoriaId: post.categoriaId,
      de: autorNome,
      conteudoPreview: conteudo.trim().slice(0, 80),
      lida: false,
      criadoEm: agoraISO(),
    });
  }

  salvarEstado(estado);
  return { sucesso: true, xp: XP_REPLY };
}

export function curtirPost(postId: string, userId: string): boolean {
  const estado = carregarEstado();
  const post = estado.posts.find((p) => p.id === postId);
  if (!post || post.removido) return false;

  if (post.curtidoPor.includes(userId)) {
    post.curtidas = Math.max(0, post.curtidas - 1);
    post.curtidoPor = post.curtidoPor.filter((id) => id !== userId);
  } else {
    post.curtidas += 1;
    post.curtidoPor.push(userId);
  }
  salvarEstado(estado);
  return true;
}

export function curtirReply(postId: string, replyId: string, userId: string): boolean {
  const estado = carregarEstado();
  const post = estado.posts.find((p) => p.id === postId);
  if (!post) return false;

  const reply = post.replies.find((r) => r.id === replyId);
  if (!reply || reply.removido) return false;

  if (reply.curtidoPor.includes(userId)) {
    reply.curtidas = Math.max(0, reply.curtidas - 1);
    reply.curtidoPor = reply.curtidoPor.filter((id) => id !== userId);
  } else {
    reply.curtidas += 1;
    reply.curtidoPor.push(userId);
  }
  salvarEstado(estado);
  return true;
}

export function denunciarPost(postId: string): boolean {
  const estado = carregarEstado();
  const post = estado.posts.find((p) => p.id === postId);
  if (!post) return false;

  post.denuncias += 1;
  salvarEstado(estado);
  return true;
}

export function denunciarReply(postId: string, replyId: string): boolean {
  const estado = carregarEstado();
  const post = estado.posts.find((p) => p.id === postId);
  if (!post) return false;

  const reply = post.replies.find((r) => r.id === replyId);
  if (!reply) return false;

  reply.denuncias += 1;
  salvarEstado(estado);
  return true;
}

// Moderação: remover post ou reply (admin)
export function removerPost(postId: string): boolean {
  const estado = carregarEstado();
  const post = estado.posts.find((p) => p.id === postId);
  if (!post) return false;

  post.removido = true;
  salvarEstado(estado);
  return true;
}

export function removerReply(postId: string, replyId: string): boolean {
  const estado = carregarEstado();
  const post = estado.posts.find((p) => p.id === postId);
  if (!post) return false;

  const reply = post.replies.find((r) => r.id === replyId);
  if (!reply) return false;

  reply.removido = true;
  salvarEstado(estado);
  return true;
}

/* ─── Leitura ────────────────────────────────────── */

export function listarCategorias(): ForumCategoria[] {
  return carregarEstado().categorias;
}

export function obterCategoria(id: string): ForumCategoria | undefined {
  return carregarEstado().categorias.find((c) => c.id === id);
}

export function listarPosts(categoriaId: string): ForumPost[] {
  const estado = carregarEstado();
  return estado.posts
    .filter((p) => p.categoriaId === categoriaId)
    .sort((a, b) => new Date(b.criadoEm).getTime() - new Date(a.criadoEm).getTime());
}

export function obterPost(postId: string): ForumPost | undefined {
  const estado = carregarEstado();
  return estado.posts.find((p) => p.id === postId);
}

export function totalPosts(): number {
  return carregarEstado().posts.length;
}

export function totalReplies(): number {
  return carregarEstado().posts.reduce((acc, p) => acc + (p.replies?.length || 0), 0);
}

export function obterPostsRecentes(limite = 5): ForumPost[] {
  const estado = carregarEstado();
  return [...estado.posts]
    .filter((p) => !p.removido)
    .sort((a, b) => new Date(b.criadoEm).getTime() - new Date(a.criadoEm).getTime())
    .slice(0, limite);
}

export function postsPorCategoriaCount(categoriaId: string): number {
  return carregarEstado().posts.filter((p) => p.categoriaId === categoriaId && !p.removido).length;
}

/* ─── Notificações ───────────────────────────────── */

export function listarNotificacoes(): ReplyNotificacao[] {
  return carregarEstado().notificacoesReply;
}

export function notificacoesNaoLidas(): number {
  return carregarEstado().notificacoesReply.filter((n) => !n.lida).length;
}

export function marcarNotificacaoLida(id: string) {
  const estado = carregarEstado();
  const notif = estado.notificacoesReply.find((n) => n.id === id);
  if (notif) {
    notif.lida = true;
    salvarEstado(estado);
  }
}

export function marcarTodasNotificacoesLidas() {
  const estado = carregarEstado();
  estado.notificacoesReply.forEach((n) => (n.lida = true));
  salvarEstado(estado);
}

/* ─── XP ─────────────────────────────────────────── */

export { XP_POST, XP_REPLY };
