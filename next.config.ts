import type { NextConfig } from "next";

// ── Security Headers (OWASP recomendados) ────────────────────────────────────
const securityHeaders = [
  { key: "X-DNS-Prefetch-Control",  value: "on" },
  { key: "X-Frame-Options",         value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options",  value: "nosniff" },
  { key: "Referrer-Policy",         value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy",      value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  {
        key: "Content-Security-Policy",
        value: [
                "default-src 'self'",
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://va.vercel-scripts.com",
                "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                "font-src 'self' https://fonts.gstatic.com",
                "img-src 'self' https: data: blob:",
                "media-src 'self' https: data: blob:",
                "connect-src 'self' https: wss:",
                "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com https://vercel.live",
                "object-src 'none'",
                "base-uri 'self'",
                "form-action 'self'",
                "upgrade-insecure-requests",
              ].join("; "),
  },
  ];

let nextConfig: NextConfig = {
    // ── Output ─────────────────────────────────────────────────────────────────
    // ── Performance ────────────────────────────────────────────────────────────
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,

    // ── Imagens ───────────────────────────────────────────────────────────────
    images: {
          remotePatterns: [
            { protocol: "https", hostname: "images.unsplash.com",  pathname: "/**" },
            { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/**" },
            { protocol: "https", hostname: "i.ytimg.com",          pathname: "/**" },
            { protocol: "https", hostname: "assets.mixkit.co",     pathname: "/**" },
                ],
          formats: ["image/avif", "image/webp"],
          minimumCacheTTL: 3600,
          deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
          imageSizes: [16, 32, 48, 64, 96, 128, 256],
    },

    // ── Headers de segurança e cache ──────────────────────────────────────────
    async headers() {
          return [
            {
                      source: "/(.*)",
                      headers: securityHeaders,
            },
            {
                      // Cache agressivo para assets estáticos
                    source: "/_next/static/(.*)",
                      headers: [
                        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
                                ],
            },
            {
                      // Cache para fontes
                    source: "/fonts/(.*)",
                      headers: [
                        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
                                ],
            },
            {
                      // Cache para videos/posters
                    source: "/videos/(.*)",
                      headers: [
                        { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=3600" },
                                ],
            },
            {
                      // API routes sem cache
                    source: "/api/(.*)",
                      headers: [
                        { key: "Cache-Control", value: "no-store, no-cache, must-revalidate" },
                                ],
            },
                ];
    },

    // ── Redirects ─────────────────────────────────────────────────────────────
    async redirects() {
          return [
            { source: "/matriculas", destination: "/", permanent: true },
            { source: "/cadastro",   destination: "/", permanent: true },
                ];
    },
};
// // ── Bundle Analyzer (ANALYZE=true npm run analyze) ────────────────────────────
if (process.env.ANALYZE === "true") {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
  const withBundleAnalyzer = require("@next/bundle-analyzer")({ enabled: true });
    nextConfig = withBundleAnalyzer(nextConfig);
}

export default nextConfig;
