import type { MetadataRoute } from "next";
import { trilhas } from "@/content/curriculo";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  const ESTATICAS: MetadataRoute.Sitemap = [
    { url: `${base}`, lastModified: new Date("2026-06-05"), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${base}/trilhas`, lastModified: new Date("2026-06-05"), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/dashboard`, lastModified: new Date("2026-06-05"), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/comando-diario`, lastModified: new Date("2026-06-03"), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${base}/missoes`, lastModified: new Date("2026-06-05"), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${base}/jogos`, lastModified: new Date("2026-06-01"), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${base}/biblioteca`, lastModified: new Date("2026-06-01"), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/bulas-receitas`, lastModified: new Date("2026-06-01"), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/ranking`, lastModified: new Date("2026-06-05"), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${base}/osce`, lastModified: new Date("2026-06-01"), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${base}/sobre`, lastModified: new Date("2026-06-01"), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/privacidade`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/termos`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/curiosidades`, lastModified: new Date("2026-06-05"), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${base}/pressao-arterial`, lastModified: new Date("2026-06-05"), changeFrequency: "monthly" as const, priority: 0.65 },
    { url: `${base}/diabetes`, lastModified: new Date("2026-06-01"), changeFrequency: "monthly" as const, priority: 0.65 },
    { url: `${base}/hormonios`, lastModified: new Date("2026-06-01"), changeFrequency: "monthly" as const, priority: 0.65 },
  ];

  const TRILHAS: MetadataRoute.Sitemap = trilhas.flatMap((t) => [
    {
      url: `${base}/trilhas/${t.id}`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    ...t.modulos.map((m) => ({
      url: `${base}/trilhas/${t.id}/${m.id}`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...t.modulos.flatMap((m) =>
      m.aulas.map((a) => ({
        url: `${base}/aula/${t.id}/${a.id}`,
        lastModified: new Date("2026-06-01"),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
    ),
    ...t.modulos.map((m) => ({
      url: `${base}/prova/${t.id}/${m.id}`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ]);

  const porUrl = new Map<string, MetadataRoute.Sitemap[0]>();
  for (const entry of [...ESTATICAS, ...TRILHAS]) {
    porUrl.set(entry.url, entry);
  }
  return [...porUrl.values()];
}
