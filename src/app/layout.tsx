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
    default: "SaúdeGPT | Cursos de Saúde Gamificados | 100% Grátis",
    template: `%s · SaúdeGPT`,
  },
  description:
    "Plataforma EAD #1 em saúde para Gen Z. Aprenda farmácia, nutrição, fisioterapia, saúde mental e cuidados com idosos jogando. Microaulas de 5-15min com gamificação.",
  keywords: [
    "cursos saúde gamificados",
    "ead saúde gen z",
    "curso farmácia online grátis",
    "curso nutrição gamificado",
    "plataforma saúde interativa",
    "microlearning saúde",
    "certificado saúde digital",
  ],
  authors: [{ name: site.nome }],
  openGraph: {
    title: "SaúdeGPT | Cursos de Saúde Gamificados | 100% Grátis",
    description:
      "Plataforma EAD #1 em saúde para Gen Z. Aprenda farmácia, nutrição, fisioterapia, saúde mental e cuidados com idosos jogando. Microaulas de 5-15min com gamificação.",
    locale: "pt_BR",
    type: "website",
    siteName: "SaúdeGPT",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "SaúdeGPT — Cursos de Saúde Gamificados para Gen Z" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaúdeGPT | Cursos de Saúde Gamificados | 100% Grátis",
    description:
      "Plataforma EAD #1 em saúde para Gen Z. Aprenda farmácia, nutrição, fisioterapia, saúde mental e cuidados com idosos jogando. Microaulas de 5-15min com gamificação.",
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
              "@graph": [
                {
                  "@type": "Organization",
                  name: "SaúdeGPT",
                  description:
                    "Plataforma EAD #1 em saúde para Gen Z. Cursos gamificados com microaulas de 5-15min. Farmácia, Nutrição, Fisioterapia, Saúde Mental e Cuidados com Idosos.",
                  url: baseUrl,
                  sameAs: ["https://www.thiagopiola.com.br"],
                  founder: {
                    "@type": "Person",
                    name: "Thiago Piola",
                    description: "Farmacêutico CRF/SP 58.519",
                    jobTitle: "Farmacêutico",
                  },
                },
                {
                  "@type": "Course",
                  name: "Farmácia — Atendente de Farmácia e Drogaria",
                  description:
                    "Formação completa em farmácia com gamificação: medicamentos, interações, legislação ANVISA, prática no balcão e atendimento humanizado. Microaulas de 5-15min.",
                  courseMode: "Online",
                  inLanguage: "pt-BR",
                  provider: { "@type": "Organization", name: "SaúdeGPT" },
                  educationalCredentialAwarded: "Certificado Digital SaúdeGPT",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "BRL",
                  },
                },
                {
                  "@type": "Course",
                  name: "Nutrição — Fundamentos e Dietoterapia",
                  description:
                    "Nutrição clínica gamificada: avaliação nutricional, dietoterapia, suplementação e prescrição de dietas. Aprenda jogando com microaulas interativas.",
                  courseMode: "Online",
                  inLanguage: "pt-BR",
                  provider: { "@type": "Organization", name: "SaúdeGPT" },
                  educationalCredentialAwarded: "Certificado Digital SaúdeGPT",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "BRL",
                  },
                },
                {
                  "@type": "Course",
                  name: "Fisioterapia — Reabilitação e Terapia Manual",
                  description:
                    "Fisioterapia prática e gamificada: anatomia, cinesiologia, reabilitação motora e terapia manual. Formato microlearning com quizzes e desafios.",
                  courseMode: "Online",
                  inLanguage: "pt-BR",
                  provider: { "@type": "Organization", name: "SaúdeGPT" },
                  educationalCredentialAwarded: "Certificado Digital SaúdeGPT",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "BRL",
                  },
                },
                {
                  "@type": "Course",
                  name: "Saúde Mental — Psicologia Clínica e TCC",
                  description:
                    "Saúde mental para Gen Z: psicologia clínica, terapia cognitivo-comportamental, psicopatologia e bem-estar emocional. Abordagem interativa e gamificada.",
                  courseMode: "Online",
                  inLanguage: "pt-BR",
                  provider: { "@type": "Organization", name: "SaúdeGPT" },
                  educationalCredentialAwarded: "Certificado Digital SaúdeGPT",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "BRL",
                  },
                },
                {
                  "@type": "Course",
                  name: "Cuidados com Idosos — Cuidador Humanizado",
                  description:
                    "Formação gamificada para cuidadores de idosos: mobilização, medicação, alimentação, prevenção de quedas e cuidado humanizado. Microaulas práticas de 5-15min.",
                  courseMode: "Online",
                  inLanguage: "pt-BR",
                  provider: { "@type": "Organization", name: "SaúdeGPT" },
                  educationalCredentialAwarded: "Certificado Digital SaúdeGPT",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "BRL",
                  },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Os cursos do SaúdeGPT são realmente gratuitos?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Sim! Todos os cursos do SaúdeGPT são 100% gratuitos. Você estuda no seu ritmo, joga quizzes interativos e recebe certificado digital ao concluir cada trilha — sem pagar nada.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Como funciona a gamificação nas aulas?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "A plataforma transforma o aprendizado em saúde em uma experiência de jogo: você ganha XP ao completar microaulas de 5-15min, sobe no ranking, desbloqueia badges e compete em desafios com outros alunos. Aprender vira um game!",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Quanto tempo dura cada curso?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Cada curso é dividido em microaulas de 5 a 15 minutos. Você pode estudar no ônibus, no intervalo do trabalho ou em qualquer momento livre. O formato microlearning foi pensado para a rotina acelerada da Gen Z.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Os certificados são válidos?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Sim! Emitimos certificado digital ao final de cada trilha concluída. Os cursos são supervisionados pelo farmacêutico Thiago Piola (CRF/SP 58.519) e o conteúdo é criado por profissionais registrados nos conselhos de classe.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Preciso de algum conhecimento prévio para começar?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Não! Nossos cursos foram desenhados para todos os níveis — do iniciante ao avançado. Você começa do zero e avança no seu ritmo. A plataforma se adapta ao seu nível com quizzes inteligentes e revisão espaçada.",
                      },
                    },
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "SaúdeGPT",
                      item: baseUrl,
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Cursos",
                      item: `${baseUrl}/trilhas`,
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: "Cursos de Saúde Gratuitos",
                      item: `${baseUrl}/trilhas`,
                    },
                  ],
                },
              ],
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
