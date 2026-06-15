import { createClient } from "@supabase/supabase-js";
import type { CadastroRegistro } from "@/lib/cadastro-types";

// ═══════════════════════════════════════════════════════════════
// Supabase Cadastros Store — Alunos/Matrículas
// ═══════════════════════════════════════════════════════════════

function getClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key || url === "https://placeholder.supabase.co") {
    return null;
  }

  return createClient(url, key, {
    auth: { persistSession: false },
    db: { schema: "public" },
  });
}

export function cadastrosUsamSupabase(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  return !!url && !url.includes("placeholder");
}

// ═══════════════════════════════════════════════════════════════
// CRUD — Cadastros (profiles)
// ═══════════════════════════════════════════════════════════════

export async function listarCadastrosSupabase(): Promise<CadastroRegistro[]> {
  const supabase = getClient();
  if (!supabase) throw new Error("Supabase não configurado");

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .order("data_cadastro", { ascending: false });

  if (error) throw new Error(error.message);

  return (data || []).map((p: any) => ({
    id: p.id,
    nome: p.nome || "",
    email: p.email || "",
    telefone: p.telefone || "",
    cargo: p.cargo_farmacia || "",
    status: p.status || "pendente",
    dataCadastro: p.data_cadastro || p.created_at,
    aprovadoEm: p.aprovado_em || null,
    nivel: p.nivel_atual || 1,
    xp: p.xp_total || 0,
    progresso: p.progresso || {},
    // Mapeamento de campos opcionais
    cidade: p.cidade || "",
    estado: p.estado || "",
    comoConheceu: p.como_conheceu || "",
    experiencia: p.experiencia || "",
    motivacao: p.motivacao || "",
    notionPageId: p.notion_page_id || "",
  }));
}

export async function upsertCadastroSupabase(
  registro: CadastroRegistro
): Promise<CadastroRegistro> {
  const supabase = getClient();
  if (!supabase) throw new Error("Supabase não configurado");

  const payload: Record<string, any> = {
    nome: registro.nome,
    email: registro.email,
    telefone: registro.telefone || "",
    cargo_farmacia: registro.cargo || "",
    status: registro.status || "pendente",
    nivel_atual: registro.nivel || 1,
    xp_total: registro.xp || 0,
    progresso: registro.progresso || {},
    cidade: registro.cidade || "",
    estado: registro.estado || "",
    como_conheceu: registro.comoConheceu || "",
    experiencia: registro.experiencia || "",
    motivacao: registro.motivacao || "",
    notion_page_id: registro.notionPageId || "",
  };

  if (registro.status === "aprovado" && !registro.aprovadoEm) {
    payload.aprovado_em = new Date().toISOString();
  } else if (registro.aprovadoEm) {
    payload.aprovado_em = registro.aprovadoEm;
  }

  // Tenta atualizar ou inserir
  const { data: existing } = await supabase
    .from("profiles")
    .select("id")
    .eq("email", registro.email)
    .maybeSingle();

  if (existing) {
    const { data, error } = await supabase
      .from("profiles")
      .update(payload)
      .eq("id", existing.id)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return { ...registro, id: data.id };
  } else {
    const { data, error } = await supabase
      .from("profiles")
      .insert(payload)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return { ...registro, id: data.id };
  }
}

export async function excluirCadastroSupabase(
  id: string
): Promise<boolean> {
  const supabase = getClient();
  if (!supabase) throw new Error("Supabase não configurado");

  const { error } = await supabase.from("profiles").delete().eq("id", id);
  return !error;
}

export async function obterPorEmailSupabase(
  email: string
): Promise<CadastroRegistro | undefined> {
  const supabase = getClient();
  if (!supabase) return undefined;

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("email", email.toLowerCase())
    .maybeSingle();

  if (error || !data) return undefined;

  return {
    id: data.id,
    nome: data.nome || "",
    email: data.email || "",
    telefone: data.telefone || "",
    cargo: data.cargo_farmacia || "",
    status: data.status || "pendente",
    dataCadastro: data.data_cadastro,
    aprovadoEm: data.aprovado_em,
    nivel: data.nivel_atual || 1,
    xp: data.xp_total || 0,
    progresso: data.progresso || {},
    cidade: data.cidade || "",
    estado: data.estado || "",
    notionPageId: data.notion_page_id || "",
  };
}

// ═══════════════════════════════════════════════════════════════
// Migration SQL para tabela profiles
// ═══════════════════════════════════════════════════════════════

export const PROFILES_MIGRATION_SQL = `
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  nome TEXT NOT NULL DEFAULT '',
  email TEXT UNIQUE NOT NULL,
  telefone TEXT DEFAULT '',
  cargo_farmacia TEXT DEFAULT '',
  status TEXT DEFAULT 'pendente' CHECK (status IN ('pendente','aprovado','rejeitado')),
  data_cadastro TIMESTAMPTZ DEFAULT NOW(),
  aprovado_em TIMESTAMPTZ,
  nivel_atual INT DEFAULT 1,
  xp_total INT DEFAULT 0,
  progresso JSONB DEFAULT '{}',
  cidade TEXT DEFAULT '',
  estado TEXT DEFAULT '',
  como_conheceu TEXT DEFAULT '',
  experiencia TEXT DEFAULT '',
  motivacao TEXT DEFAULT '',
  notion_page_id TEXT DEFAULT '',
  avatar TEXT DEFAULT '',
  current_streak INT DEFAULT 0,
  best_streak INT DEFAULT 0,
  badges_unlocked TEXT[] DEFAULT '{}'
);

CREATE INDEX IF NOT EXISTS idx_profiles_email ON profiles(email);
CREATE INDEX IF NOT EXISTS idx_profiles_status ON profiles(status);
`;
