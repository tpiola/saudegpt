import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
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
  themeColor: "#050F0D",
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "SaúdeGPT | Formação para Atendentes de Farmácia",
    template: `%s · SaúdeGPT`,
  },
  description:
    "SaúdeGPT é a plataforma EAD que forma atendentes de farmácia preparados para acolher, orientar e cuidar com técnica, segurança e humanidade — gente que cuida de gente. Conteúdo criado pelo farmacêutico Thiago Piola — CRF/SP 58.519.",
  keywords: [
    "saudegpt",
    "curso atendente farmácia",
    "treinamento atendente farmácia",
    "curso balconista farmácia",
    "dispensação de medicamentos",
    "legislação farmácia ANVISA",
    "atendimento humanizado farmácia",
    "curso online farmácia gratuito",
    "formação atendente farmácia",
    "farmácia atendimento ao cliente",
    "medicamentos e saúde",
    "curso farmacêutico EAD",
    "anvisa medicamentos",
    "saúde pública farmácia",
  ],
  authors: [{ name: site.nome }],
  openGraph: {
    title: "SaúdeGPT | Formação para Atendentes de Farmácia",
    description: site.descricao,
    locale: "pt_BR",
    type: "website",
    siteName: "SaúdeGPT",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "SaúdeGPT — Formação para Atendentes de Farmácia" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaúdeGPT | Formação para Atendentes de Farmácia",
    description: site.descricao,
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
    "theme-color": "#0A2540",
    "msapplication-TileColor": "#0A2540",
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
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptAntiFlash }} />
        <link rel="icon" href="/icon-saudegpt.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icon-saudegpt.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.webp" />
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || ""} />
        <meta name="geo.region" content="BR" />
        <meta name="geo.placename" content="Brasil" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="pt-BR" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "SaúdeGPT — Formação para Atendentes de Farmácia",
              description: site.descricao,
              provider: {
                "@type": "Organization",
                name: site.nome,
                url: baseUrl,
                sameAs: site.social.map((item) => item.url),
              },
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: "Online",
                inLanguage: "pt-BR",
                location: { "@type": "VirtualLocation", url: baseUrl },
              },
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
