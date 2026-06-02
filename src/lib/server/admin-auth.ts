// ── Credenciais padrão (use `ADMIN_USER` / `ADMIN_PASSWORD` no ambiente para sobrescrever) ──
const DEFAULT_USER = "coord";
const DEFAULT_PASS = "Farma@2026!";

export function credenciaisAdminValidas(usuario: string, senha: string): boolean {
  const userEsperado = process.env.ADMIN_USER?.trim() || DEFAULT_USER;
  const senhaEsperada = process.env.ADMIN_PASSWORD?.trim() || DEFAULT_PASS;
  return usuario.trim() === userEsperado && senha === senhaEsperada;
}

/** Bloqueia painel admin em produção se ainda estiver com credencial padrão. */
export function adminBloqueadoPorCredencialPadrao(): boolean {
  const emProducao =
    process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production";
  if (!emProducao) return false;
  const user = process.env.ADMIN_USER?.trim() || DEFAULT_USER;
  const pass = process.env.ADMIN_PASSWORD?.trim() || DEFAULT_PASS;
  return user === DEFAULT_USER && pass === DEFAULT_PASS;
}

export const MENSAGEM_ADMIN_BLOQUEADO =
  "Admin bloqueado em produção: mantenha as credenciais seguras ou configure ADMIN_USER / ADMIN_PASSWORD.";

export function headerAdminAutorizado(request: Request): boolean {
  const auth = request.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) return false;
  try {
    const decoded = Buffer.from(auth.slice(6), "base64").toString("utf8");
    const [usuario, senha] = decoded.split(":");
    return credenciaisAdminValidas(usuario ?? "", senha ?? "");
  } catch {
    return false;
  }
}
