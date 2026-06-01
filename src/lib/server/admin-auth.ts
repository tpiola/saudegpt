/** Credenciais admin: padrão admin/admin; sobrescreva com ADMIN_USER e ADMIN_PASSWORD. */
export function credenciaisAdminValidas(usuario: string, senha: string): boolean {
  const userEsperado = process.env.ADMIN_USER?.trim() || "admin";
  const senhaEsperada = process.env.ADMIN_PASSWORD?.trim() || "admin";
  return usuario.trim() === userEsperado && senha === senhaEsperada;
}

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
