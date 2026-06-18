import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ═══════════════════════════════════════════════════════════════
// Middleware de Acesso — Controle de rota baseado em matrícula
// ═══════════════════════════════════════════════════════════════

// Rotas protegidas (precisam de login + aprovação)
const ROTAS_PROTEGIDAS = [
  "/app",
  "/trilhas",
  "/dashboard",
  "/aula",
  "/jogos",
  "/biblioteca",
  "/bulas",
  "/forum",
  "/ranking",
  "/missoes",
  "/comando-diario",
  "/prova",
  "/osce",
  "/osce-pratico",
];

// Rotas públicas (acesso livre)
const ROTAS_PUBLICAS = [
  "/login",
  "/cadastro",
  "/recuperar-senha",
  "/admin",
  "/diretor",
  "/",
  "/sobre",
  "/contato",
  "/termos",
  "/privacidade",
  "/lgpd",
  "/api",
  "/_next",
  "/favicon",
  "/images",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Pula rotas públicas e assets estáticos
  if (ROTAS_PUBLICAS.some((rota) => pathname.startsWith(rota))) {
    return NextResponse.next();
  }

  // Pula se não é rota protegida
  if (!ROTAS_PROTEGIDAS.some((rota) => pathname.startsWith(rota))) {
    return NextResponse.next();
  }

  // ── Verifica autenticação via cookie ou localStorage (fallback) ──
  const sessionCookie = request.cookies.get("fap-session");
  const authHeader = request.headers.get("authorization");
  const isLoggedIn = !!sessionCookie || !!authHeader;

  if (!isLoggedIn) {
    // Verifica fallback — se o client enviou um header custom
    // (o client-side pode enviar via fetch, mas para navegação usamos cookie)
    const url = new URL("/login", request.url);
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  // ── Verifica status da matrícula ──
  const matriculaStatus = request.cookies.get("fap-status")?.value;

  if (matriculaStatus === "pendente") {
    return NextResponse.redirect(new URL("/aguardando-aprovacao", request.url));
  }

  if (matriculaStatus === "rejeitado") {
    return NextResponse.redirect(new URL("/login?rejeitado=true", request.url));
  }

  // Se não tem status ou não está aprovado, verifica se precisa de ficha cadastral
  if (matriculaStatus !== "aprovado") {
    const fichaPreenchida = request.cookies.get("fap-ficha-completa")?.value;
    if (fichaPreenchida !== "true") {
      return NextResponse.redirect(new URL("/ficha-cadastral", request.url));
    }
    // Se tem ficha mas não tem status aprovado, ainda está pendente
    return NextResponse.redirect(new URL("/aguardando-aprovacao", request.url));
  }

  // Aprovado → libera acesso
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all protected routes:
     * - /app/:path*
     * - /trilhas/:path*
     * - /dashboard/:path*
     * - /aula/:path*
     * - /jogos/:path*
     * - /biblioteca/:path*
     * - /bulas/:path*
     * - /forum/:path*
     * - /ranking/:path*
     * - /missoes/:path*
     * - /comando-diario/:path*
     * - /prova/:path*
     * - /osce/:path*
     * - /osce-pratico/:path*
     *
     * Except /api, /_next/static, /_next/image, /favicon.ico
     */
    "/((?!api|_next/static|_next/image|favicon\\.ico|images).*)",
  ],
};
