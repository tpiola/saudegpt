import { timingSafeEqual } from "node:crypto";

const DEV_DEFAULT_USER = "admin";
const DEV_DEFAULT_PASS = "102030";

function emProducao(): boolean {
  return process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production";
}

function credenciaisConfiguradas(): { usuario?: string; senha?: string } {
  const usuario = process.env.ADMIN_USER?.trim();
  const senha = process.env.ADMIN_PASSWORD?.trim();
  return { usuario: usuario || undefined, senha: senha || undefined };
}

function compararSegredo(recebido: string, esperado: string): boolean {
  const recebidoBuffer = Buffer.from(recebido, "utf8");
  const esperadoBuffer = Buffer.from(esperado, "utf8");
  if (recebidoBuffer.length !== esperadoBuffer.length) return false;
  return timingSafeEqual(recebidoBuffer, esperadoBuffer);
}

export function adminBloqueadoPorCredencialPadrao(): boolean {
  if (!emProducao()) return false;

  const { usuario, senha } = credenciaisConfiguradas();
  return (
    !usuario ||
    !senha ||
    usuario === DEV_DEFAULT_USER ||
    senha === DEV_DEFAULT_PASS ||
    senha.length < 14
  );
}

export function credenciaisAdminValidas(usuario: string, senha: string): boolean {
  if (adminBloqueadoPorCredencialPadrao()) return false;

  const configuradas = credenciaisConfiguradas();
  const usuarioEsperado = configuradas.usuario ?? DEV_DEFAULT_USER;
  const senhaEsperada = configuradas.senha ?? DEV_DEFAULT_PASS;

  return (
    compararSegredo(usuario.trim(), usuarioEsperado) &&
    compararSegredo(senha, senhaEsperada)
  );
}

export const MENSAGEM_ADMIN_BLOQUEADO =
  "Admin bloqueado em produção: configure ADMIN_USER e ADMIN_PASSWORD com valores exclusivos. A senha deve ter pelo menos 14 caracteres.";

export function headerAdminAutorizado(request: Request): boolean {
  const auth = request.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) return false;

  try {
    const decoded = Buffer.from(auth.slice(6), "base64").toString("utf8");
    const separatorIndex = decoded.indexOf(":");
    if (separatorIndex < 1) return false;

    const usuario = decoded.slice(0, separatorIndex);
    const senha = decoded.slice(separatorIndex + 1);
    return credenciaisAdminValidas(usuario, senha);
  } catch {
    return false;
  }
}
