// URL base do site (produção via env na Vercel).
export function getSiteUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://appfarmacia-thiagoso.vercel.app";
  return url.replace(/\/$/, "");
}
