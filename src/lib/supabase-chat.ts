"use client";

import { createClient, SupabaseClient } from "@supabase/supabase-js";

// ═══════════════════════════════════════════════════════════════
// Supabase Client — Chat History Store
// ═══════════════════════════════════════════════════════════════

let supabaseClient: SupabaseClient | null = null;

function getClient(): SupabaseClient | null {
  if (supabaseClient) return supabaseClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey || url === "https://placeholder.supabase.co") {
    return null; // Supabase não configurado ainda
  }

  supabaseClient = createClient(url, anonKey, {
    auth: { persistSession: false },
    db: { schema: "public" },
  });

  return supabaseClient;
}

// ═══════════════════════════════════════════════════════════════
// TIPOS
// ═══════════════════════════════════════════════════════════════

export interface ChatLogEntry {
  id?: string;
  created_at?: string;
  aluno: string;
  pergunta: string;
  resposta: string;
  turno: number;
}

// ═══════════════════════════════════════════════════════════════
// CHAT LOG — salvar conversa
// ═══════════════════════════════════════════════════════════════

export async function salvarConversaSupabase(
  entry: ChatLogEntry
): Promise<boolean> {
  const supabase = getClient();
  if (!supabase) return false;

  try {
    const { error } = await supabase.from("support_interactions").insert({
      aluno: entry.aluno,
      pergunta: entry.pergunta,
      resposta: entry.resposta,
      turno: entry.turno,
    });

    if (error) {
      console.error("[Supabase] Erro ao salvar conversa:", error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[Supabase] Erro:", err);
    return false;
  }
}

// ═══════════════════════════════════════════════════════════════
// CHAT LOG — buscar conversas (admin)
// ═══════════════════════════════════════════════════════════════

export async function buscarConversasSupabase(
  aluno?: string,
  limite: number = 100
): Promise<{
  conversas: Record<string, ChatLogEntry[]>;
  total: number;
  alunos: number;
}> {
  const supabase = getClient();
  if (!supabase) {
    return { conversas: {}, total: 0, alunos: 0 };
  }

  try {
    let query = supabase
      .from("support_interactions")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limite);

    if (aluno) {
      query = query.ilike("aluno", `%${aluno}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.error("[Supabase] Erro ao buscar conversas:", error.message);
      return { conversas: {}, total: 0, alunos: 0 };
    }

    const entries = (data || []) as ChatLogEntry[];

    // Agrupa por aluno
    const agrupado: Record<string, ChatLogEntry[]> = {};
    for (const c of entries) {
      if (!agrupado[c.aluno]) agrupado[c.aluno] = [];
      agrupado[c.aluno].push(c);
    }

    return {
      conversas: agrupado,
      total: entries.length,
      alunos: Object.keys(agrupado).length,
    };
  } catch (err) {
    console.error("[Supabase] Erro:", err);
    return { conversas: {}, total: 0, alunos: 0 };
  }
}

// ═══════════════════════════════════════════════════════════════
// MIGRATION SQL — para executar no SQL Editor do Supabase
// ═══════════════════════════════════════════════════════════════

export const MIGRATION_SQL = `
-- Tabela de conversas do chat (support_interactions)
CREATE TABLE IF NOT EXISTS support_interactions (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  aluno TEXT NOT NULL DEFAULT 'anonimo',
  pergunta TEXT NOT NULL,
  resposta TEXT NOT NULL,
  turno INT DEFAULT 1
);

-- Índice para busca por aluno
CREATE INDEX IF NOT EXISTS idx_support_aluno ON support_interactions(aluno);
CREATE INDEX IF NOT EXISTS idx_support_created ON support_interactions(created_at DESC);

-- RLS (opcional — pode desabilitar se for só admin)
ALTER TABLE support_interactions ENABLE ROW LEVEL SECURITY;

-- Admin vê tudo
CREATE POLICY IF NOT EXISTS admin_all ON support_interactions
  FOR ALL USING (auth.role() = 'service_role');

-- Aluno vê só as próprias conversas
CREATE POLICY IF NOT EXISTS aluno_self ON support_interactions
  FOR SELECT USING (auth.uid()::text = aluno);
`;

export { getClient };
