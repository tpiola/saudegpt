import { NextResponse } from "next/server";

export const revalidate = 3600;

// Sync opcional do Comando Diário a partir do Notion (page ID padrão do workspace).
export async function GET() {
  const token = process.env.NOTION_TOKEN;
  const pageId = process.env.NOTION_PAGE_ID ?? "fc04a73391594bc18972efcf1f1ec91e";

  if (!token) {
    return NextResponse.json(
      {
        ok: false,
        motivo: "NOTION_TOKEN não configurado",
        usarEstatico: true,
      },
      { status: 503 },
    );
  }

  const id = pageId.replace(/-/g, "");
  const res = await fetch(`https://api.notion.com/v1/blocks/${id}/children?page_size=50`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": "2022-06-28",
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return NextResponse.json(
      { ok: false, motivo: `Notion API ${res.status}`, usarEstatico: true },
      { status: 502 },
    );
  }

  const data = await res.json();
  return NextResponse.json({ ok: true, blocks: data.results });
}
