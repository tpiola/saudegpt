import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProgressProvider } from "@/lib/progress";
import { ThemeProvider, scriptAntiFlash } from "@/lib/theme";
import { site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-humanist",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://atendentes-premium-farmacia.vercel.app";

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
  },
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
        <ThemeProvider>
          <ProgressProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
