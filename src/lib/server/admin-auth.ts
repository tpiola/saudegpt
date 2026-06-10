// ── Credenciais padrão (use `ADMIN_USER` / `ADMIN_PASSWORD` no ambiente para sobrescrever) ──
const DEFAULT_USER = "admin";
const DEFAULT_PASS = "102030";

export function credenciaisAdminValidas(usuario: string, senha: string): boolean {
  const userEsperado = process.env.ADMIN_USER?.trim() || DEFAULT_USER;
  const senhaEsperada = process.env.ADMIN_PASSWORD?.trim() || DEFAULT_PASS;
  return usuario.trim() === userEsperado && senha === senhaEsperada;
}

export function adminBloqueadoPorCredencialPadrao(): boolean {
  // Credenciais fortes incorporadas (coord / Farma@2026!), nunca bloqueia
  return false;
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
