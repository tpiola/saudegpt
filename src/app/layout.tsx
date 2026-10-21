import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import "./ecosystem.css";
import "./campus.css";
import { ProgressProvider } from "@/lib/progress";
import { ProgressSync } from "@/components/progress-sync";
import { PwaRegister } from "@/components/pwa-register";
import { CookieConsent } from "@/components/CookieConsent";
import { ThemeProvider, scriptAntiFlash } from "@/lib/theme";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";
import ChatWrapper from "@/components/chat-wrapper";

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
  themeColor: "#FFFFFF",
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Escola de Saúde - Franca J | Conhecimento que cuida",
    template: `%s · Escola de Saúde - Franca J`,
  },
  description:
    "Aprendizado gratuito em saúde para a rotina da drogaria. Trilhas, exercícios de balcão e apoio ao tratamento, com clareza e responsabilidade.",

  keywords: [
    "escola profissional saúde",
    "cursos saúde gratuitos",
    "ead saúde",
    "curso farmácia online grátis",
    "curso nutrição gratuito",
    "plataforma saúde",
  ],
  authors: [{ name: site.nome }],
  alternates: {
    canonical: baseUrl,
    languages: {
      "pt-BR": baseUrl,
      "x-default": baseUrl,
    },
  },
  openGraph: {
    title: "Escola de Saúde - Franca J | Cursos de Saúde Gratuitos | Estude com Calma",
    description:
      "Plataforma EAD de cursos de saúde gratuitos. Aprenda farmácia, nutrição, reabilitação, saúde mental e cuidados com idosos no seu ritmo, com calma e qualidade.",
    locale: "pt_BR",
    type: "website",
    siteName: "Escola de Saúde - Franca J",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Escola de Saúde - Franca J — Cursos de Saúde Gratuitos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escola de Saúde - Franca J | Cursos de Saúde Gratuitos | Estude com Calma",
    description:
      "Plataforma EAD de cursos de saúde gratuitos. Aprenda farmácia, nutrição, reabilitação, saúde mental e cuidados com idosos no seu ritmo, com calma e qualidade.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/icon-saudegpt.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.webp" }],
  },
  other: {
    "theme-color": "#FFFFFF",
    "msapplication-TileColor": "#FFFFFF",
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
      className={`${dmSans.variable} ${inter.variable} h-full light`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptAntiFlash }} />
        <link rel="icon" href="/icon-saudegpt.svg" type="image/svg+xml" />
        <link
          rel="shortcut icon"
          href="/icon-saudegpt.svg"
          type="image/svg+xml"
        />
        <link rel="alternate icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.webp" />
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || ""}
        />
        <meta name="geo.region" content="BR" />
        <meta name="geo.placename" content="Brasil" />
        <meta name="geo.position" content="-14.2350;-51.9253" />
        <meta name="ICBM" content="-14.2350, -51.9253" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large"
        />
        <link rel="alternate" href={baseUrl} hrefLang="pt-BR" />
        <link rel="alternate" href={baseUrl} hrefLang="x-default" />
        <meta name="language" content="pt-BR" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Escola de Saúde - Franca J",
              url: baseUrl,
              description:
                "Ecossistema de aprendizado em saúde para a rotina da drogaria. Conteúdo educativo e exercícios de atendimento responsável.",
              areaServed: { "@type": "Country", name: "Brasil" },
            }),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        {/* Scroll Progress Bar — CSS-driven */}
        <div className="scroll-progress" aria-hidden="true" />
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <ThemeProvider>
          <ProgressProvider>
            <ProgressSync />
            <PwaRegister />
            <CookieConsent />
            {children}
            <SpeedInsights />
            <Analytics />
          </ProgressProvider>
        </ThemeProvider>

        {/* Assistente IA + Scanner — aparece em TODAS as páginas */}
        <ChatWrapper />
      </body>
    </html>
  );
}
