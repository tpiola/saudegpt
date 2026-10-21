import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

const base = getSiteUrl();

export const metadata: Metadata = {
  title: "Nutrição para Farmacêuticos | Escola de Saúde - Franca J",
  description:
    "Curso de Nutrição aplicada à farmácia: suplementação, fitoterapia, interações medicamento-nutriente e nutrição esportiva. Conteúdo educativo e exercícios.",
  keywords: [
    "curso de nutrição para farmacêutico",
    "suplementação farmácia",
    "fitoterapia",
    "interação medicamento nutriente",
    "nutrição esportiva",
    "Escola de Saúde - Franca J Nutrição",
  ],
  alternates: { canonical: `${base}/nutricao` },
  openGraph: {
    title: "Nutrição para Farmacêuticos | Escola de Saúde - Franca J",
    description:
      "Domine suplementação, fitoterapia e nutrição clínica aplicada ao balcão da farmácia. Aprendizado gratuito e exercícios.",
    url: `${base}/nutricao`,
    siteName: "Escola de Saúde - Franca J",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutrição para Farmacêuticos | Escola de Saúde - Franca J",
    description:
      "Curso online completo de nutrição para o farmacêutico moderno.",
  },
};

export default function NutricaoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
