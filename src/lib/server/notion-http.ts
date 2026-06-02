const NOTION_VERSION = "2022-06-28";

// Database padrão: Alunos — Matrículas EAD
const DEFAULT_DATABASE_ID = "e0b1a3dd-e89f-47fb-be4c-86fa7dfe9532";

export function notionConfigurado(): boolean {
  return Boolean(process.env.NOTION_TOKEN?.trim());
}

export function notionDatabaseCadastros(): string | null {
  return process.env.NOTION_CADASTROS_DATABASE_ID?.trim() || DEFAULT_DATABASE_ID;
}

export async function notionFetch(path: string, init?: RequestInit) {
  const token = process.env.NOTION_TOKEN?.trim();
  if (!token) throw new Error("NOTION_TOKEN não configurado");

  const res = await fetch(`https://api.notion.com/v1${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg =
      typeof body === "object" && body && "message" in body
        ? String((body as { message: string }).message)
        : res.statusText;
    throw new Error(`Notion API ${res.status}: ${msg}`);
  }
  return body;
}
