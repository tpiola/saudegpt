import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProgressProvider } from "@/lib/progress";
import { ProgressSync } from "@/components/progress-sync";
import { ThemeProvider, scriptAntiFlash } from "@/lib/theme";
import { site } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-humanist",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = getSiteUrl();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#060b16" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: site.nome,
    template: `%s · ${site.nomeCurto}`,
  },
  description: site.descricao,
  keywords: [
    "curso atendente de farmácia",
    "curso balconista de drogaria",
    "curso perfumaria e higiene",
    "curso leitura de receitas",
    "curso atendimento farmacêutico",
    "curso vendas consultivas em farmácia",
    "curso genéricos e similares",
    "curso farmácia popular",
    "curso GLP-1",
  ],
  authors: [{ name: "Thiago B. G. Piola" }],
  openGraph: {
    title: site.nome,
    description: site.descricao,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.nome }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.nome,
    description: site.descricao,
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptAntiFlash }} />
      </head>
      <body className="bg-clinical flex min-h-full flex-col">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <ThemeProvider>
          <ProgressProvider>
            <ProgressSync />
            <Header />
            <main id="conteudo-principal" className="flex-1">
              {children}
            </main>
            <Footer />
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
