/** Credenciais admin: padrão admin/admin; sobrescreva com ADMIN_USER e ADMIN_PASSWORD. */
export function credenciaisAdminValidas(usuario: string, senha: string): boolean {
  const userEsperado = process.env.ADMIN_USER?.trim() || "admin";
  const senhaEsperada = process.env.ADMIN_PASSWORD?.trim() || "admin";
  return usuario.trim() === userEsperado && senha === senhaEsperada;
}

/** Bloqueia painel admin em produção se ainda estiver com credencial padrão. */
export function adminBloqueadoPorCredencialPadrao(): boolean {
  const emProducao =
    process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production";
  if (!emProducao) return false;
  const user = process.env.ADMIN_USER?.trim() || "admin";
  const pass = process.env.ADMIN_PASSWORD?.trim() || "admin";
  return user === "admin" && pass === "admin";
}

export const MENSAGEM_ADMIN_BLOQUEADO =
  "Admin indisponível em produção: configure ADMIN_USER e ADMIN_PASSWORD fortes na Vercel.";

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
