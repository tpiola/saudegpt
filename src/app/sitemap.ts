import type { MetadataRoute } from "next";
import { listarAulas, trilhas } from "@/content/curriculo";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const estaticas: MetadataRoute.Sitemap = [
    "",
    "/trilhas",
    "/dashboard",
    "/comando-diario",
    "/missoes",
    "/jogos",
    "/biblioteca",
    "/indicadores",
    "/bulas-receitas",
    "/ranking",
    "/osce",
    "/sobre",
    "/privacidade",
    "/termos",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const trilhasUrls: MetadataRoute.Sitemap = trilhas.flatMap((t) => [
    {
      url: `${base}/trilhas/${t.id}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    ...t.modulos.map((m) => ({
      url: `${base}/trilhas/${t.id}/${m.id}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...t.modulos.flatMap((m) =>
      m.aulas.map((a) => ({
        url: `${base}/aula/${t.id}/${a.id}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
    ),
    ...t.modulos.map((m) => ({
      url: `${base}/prova/${t.id}/${m.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ]);

  // Garante aulas listadas mesmo se estrutura mudar
  const aulasUrls: MetadataRoute.Sitemap = listarAulas().map((i) => ({
    url: `${base}/aula/${i.trilha.id}/${i.aula.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const porUrl = new Map<string, MetadataRoute.Sitemap[0]>();
  for (const entry of [...estaticas, ...trilhasUrls, ...aulasUrls]) {
    porUrl.set(entry.url, entry);
  }
  return [...porUrl.values()];
}
