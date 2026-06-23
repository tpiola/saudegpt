import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ═══════════════════════════════════════════════════════════════
// Middleware — Acesso público liberado
// ═══════════════════════════════════════════════════════════════

export function middleware(request: NextRequest) {
  // Acesso público — sem bloqueio de autenticação
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
