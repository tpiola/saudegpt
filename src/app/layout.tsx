import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { LmsShell } from "@/components/lms-shell";
import { ProgressProvider } from "@/lib/progress";
import { ProgressSync } from "@/components/progress-sync";
import { PwaRegister } from "@/components/pwa-register";
import { LgpdBanner } from "@/components/lgpd-banner";
import { ThemeProvider, scriptAntiFlash } from "@/lib/theme";
import { site } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const baseUrl = getSiteUrl();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020e0c" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Treinamento Atendente de Farmácia",
    template: `%s · Treinamento Atendente`,
  },
  description: "Curso profissional de Treinamento para Atendentes de Farmácia — com técnica, acolhimento, medicamentos, cuidado humanizado, legislação ANVISA e atendimento que encanta.",
  keywords: [
    "treinamento atendente farmácia",
    "curso atendente farmácia",
    "curso balconista farmácia",
    "curso dispensação medicamentos",
    "curso legislação farmácia ANVISA",
    "curso farmácia melhor que SENAC",
    "curso farmácia melhor que CEBRAC",
    "treinamento balcão farmácia",
    "atendimento farmacêutico consultivo",
    "curso receituário controlado portaria 344",
    "curso RDC 471 antimicrobianos",
    "farmacêutico CRF SP",
    "ABC Farma treinamento",
    "Conselho Federal Farmácia educação",
  ],
  authors: [{ name: "Formação para Atendentes de Farmácia" }],
  openGraph: {
    title: "Treinamento Atendente de Farmácia",
    description: "O treinamento mais completo para atendentes de farmácia do Brasil. Supera CEBRAC e SENAC.",
    locale: "pt_BR",
    type: "website",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Treinamento Atendente" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Treinamento Atendente de Farmácia",
    description: "O treinamento mais completo para atendentes de farmácia do Brasil.",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptAntiFlash }} />
        <script dangerouslySetInnerHTML={{ __html: `
document.addEventListener('contextmenu', function(e) {
  if (!e.target.closest('input, textarea, [contenteditable]')) {
    e.preventDefault();
  }
});
document.addEventListener('copy', function(e) {
  if (!e.target.closest('input, textarea, [contenteditable]')) {
    e.preventDefault();
  }
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'PrintScreen' || (e.ctrlKey && e.key === 'p') || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.shiftKey && e.key === 'J') || (e.ctrlKey && e.key === 'u')) {
    e.preventDefault();
  }
});
`}} />
        {/* Favicon / Icones do Site */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* SEO: Google Site Verification (substitua pelo código do Search Console) */}
        {/* <meta name="google-site-verification" content="SEU_CODIGO_AQUI" /> */}
        {/* Geo Tags */}
        <meta name="geo.region" content="BR" />
        <meta name="geo.placename" content="Brasil" />
        <meta name="geo.position" content="-14.2350;-51.9253" />
        <meta name="ICBM" content="-14.2350, -51.9253" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="flex min-h-full flex-col" style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-forest-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <ThemeProvider>
          <ProgressProvider>
            <ProgressSync />
            <PwaRegister />
            <LgpdBanner />
            <LmsShell>
              <main id="conteudo-principal">{children}</main>
            </LmsShell>
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
