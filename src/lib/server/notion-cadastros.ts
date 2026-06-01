import type { CadastroRegistro, ProgressoSnapshot, StatusCadastro } from "@/lib/cadastro-types";
import { PROGRESSO_VAZIO } from "@/lib/cadastro-types";
import { notionDatabaseCadastros, notionFetch, notionConfigurado } from "./notion-http";

/** IDs padrão criados no workspace (podem ser sobrescritos por env). */
export const NOTION_CADASTROS_PADRAO = {
  pageUrl: "https://www.notion.so/3728a2530044816fafe5de9ac4d903dc",
  databaseId: "e0b1a3dde89f47fbbe4c86fa7dfe9532",
  databaseUrl: "https://www.notion.so/e0b1a3dde89f47fbbe4c86fa7dfe9532",
} as const;

export function cadastrosUsamNotion(): boolean {
  return notionConfigurado() && Boolean(notionDatabaseCadastros());
}

function richText(content: string) {
  return [{ type: "text" as const, text: { content: content.slice(0, 2000) } }];
}

function lerTexto(prop: { rich_text?: { plain_text: string }[] } | undefined): string {
  return prop?.rich_text?.map((t) => t.plain_text).join("") ?? "";
}

function lerTitulo(prop: { title?: { plain_text: string }[] } | undefined): string {
  return prop?.title?.map((t) => t.plain_text).join("") ?? "";
}

function lerEmail(prop: { email?: string | null } | undefined): string {
  return prop?.email ?? "";
}

function lerSelect(prop: { select?: { name: string } | null } | undefined): StatusCadastro {
  const n = prop?.select?.name;
  if (n === "aprovado" || n === "rejeitado" || n === "pendente") return n;
  return "pendente";
}

function lerData(prop: { date?: { start: string } | null } | undefined): string | undefined {
  return prop?.date?.start;
}

function mediaNotas(notas: Record<string, number>) {
  const vals = Object.values(notas);
  if (!vals.length) return 0;
  return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
}

function totalTentativas(t: Record<string, number>) {
  return Object.values(t).reduce((a, b) => a + b, 0);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function paginaParaRegistro(page: any): CadastroRegistro {
  const p = page.properties ?? {};
  let progresso: ProgressoSnapshot = { ...PROGRESSO_VAZIO };
  try {
    const bruto = lerTexto(p["Progresso JSON"]);
    if (bruto) progresso = { ...PROGRESSO_VAZIO, ...JSON.parse(bruto) };
  } catch {
    // ignora JSON inválido
  }

  const idPlataforma = lerTexto(p["ID plataforma"]) || page.id;

  return {
    id: idPlataforma,
    notionPageId: page.id,
    nome: lerTitulo(p.Nome),
    email: lerEmail(p.Email).toLowerCase(),
    apelidoRanking: lerTexto(p.Apelido) || undefined,
    status: lerSelect(p.Status),
    criadoEm: lerData(p["Criado em"]) ?? page.created_time ?? new Date().toISOString(),
    aprovadoEm: lerData(p["Aprovado em"]),
    progresso,
  };
}

function registroParaPropriedades(reg: CadastroRegistro) {
  const p = reg.progresso;
  const notaMedia = mediaNotas(p.notas ?? {});
  const tentativas = totalTentativas(p.tentativasQuiz ?? {});
  const tempoMin = Math.round((p.tempoEstudoSegundos ?? 0) / 60);

  return {
    Nome: { title: richText(reg.nome) },
    Email: { email: reg.email },
    Apelido: { rich_text: richText(reg.apelidoRanking ?? "") },
    Status: { select: { name: reg.status } },
    "Criado em": { date: { start: reg.criadoEm.slice(0, 10) } },
    "Aprovado em": reg.aprovadoEm
      ? { date: { start: reg.aprovadoEm.slice(0, 10) } }
      : { date: null },
    XP: { number: p.xp ?? 0 },
    "Tempo estudo min": { number: tempoMin },
    "Aulas concluidas": { number: p.concluidas?.length ?? 0 },
    "Nota media": { number: notaMedia },
    "Tentativas quiz": { number: tentativas },
    "ID plataforma": { rich_text: richText(reg.id) },
    "Progresso JSON": {
      rich_text: richText(JSON.stringify(p).slice(0, 1990)),
    },
  };
}

export async function listarCadastrosNotion(): Promise<CadastroRegistro[]> {
  const db = notionDatabaseCadastros();
  if (!db) return [];

  const lista: CadastroRegistro[] = [];
  let cursor: string | undefined;

  do {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = await notionFetch(`/databases/${db}/query`, {
      method: "POST",
      body: JSON.stringify({
        start_cursor: cursor,
        page_size: 100,
        sorts: [{ property: "Criado em", direction: "descending" }],
      }),
    });
    for (const page of data.results ?? []) {
      lista.push(paginaParaRegistro(page));
    }
    cursor = data.has_more ? data.next_cursor : undefined;
  } while (cursor);

  return lista;
}

export async function obterPorEmailNotion(email: string): Promise<CadastroRegistro | undefined> {
  const db = notionDatabaseCadastros();
  if (!db) return undefined;
  const norm = email.trim().toLowerCase();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = await notionFetch(`/databases/${db}/query`, {
    method: "POST",
    body: JSON.stringify({
      page_size: 1,
      filter: { property: "Email", email: { equals: norm } },
    }),
  });

  const page = data.results?.[0];
  return page ? paginaParaRegistro(page) : undefined;
}

export async function criarCadastroNotion(reg: CadastroRegistro): Promise<CadastroRegistro> {
  const db = notionDatabaseCadastros();
  if (!db) throw new Error("NOTION_CADASTROS_DATABASE_ID ausente");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const page: any = await notionFetch("/pages", {
    method: "POST",
    body: JSON.stringify({
      parent: { database_id: db },
      properties: registroParaPropriedades(reg),
    }),
  });

  return paginaParaRegistro(page);
}

export async function atualizarCadastroNotion(reg: CadastroRegistro): Promise<CadastroRegistro> {
  const pageId = reg.notionPageId;
  if (!pageId) throw new Error("notionPageId ausente");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const page: any = await notionFetch(`/pages/${pageId}`, {
    method: "PATCH",
    body: JSON.stringify({ properties: registroParaPropriedades(reg) }),
  });

  return paginaParaRegistro(page);
}

export async function upsertCadastroNotion(reg: CadastroRegistro): Promise<CadastroRegistro> {
  const existente = await obterPorEmailNotion(reg.email);
  if (existente?.notionPageId) {
    return atualizarCadastroNotion({
      ...reg,
      id: existente.id,
      notionPageId: existente.notionPageId,
      criadoEm: existente.criadoEm,
    });
  }
  return criarCadastroNotion(reg);
}

export async function excluirCadastroNotion(notionPageId: string): Promise<void> {
  await notionFetch(`/pages/${notionPageId}`, {
    method: "PATCH",
    body: JSON.stringify({ archived: true }),
  });
}

export async function excluirCadastroNotionPorIdPlataforma(id: string): Promise<boolean> {
  const lista = await listarCadastrosNotion();
  const alvo = lista.find((c) => c.id === id);
  if (!alvo?.notionPageId) return false;
  await excluirCadastroNotion(alvo.notionPageId);
  return true;
}
