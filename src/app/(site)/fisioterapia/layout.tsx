import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

const base = getSiteUrl();

export const metadata: Metadata = {
  title: "Fisioterapia para Farmacêuticos | Escola de Saúde - Franca J",
  description:
    "Curso de Fisioterapia aplicada à farmácia: equipamentos ortopédicos, reabilitação básica, prevenção de quedas e produtos para bem-estar físico. Conteúdo educativo e exercícios.",
  keywords: [
    "curso de fisioterapia para farmacêutico",
    "equipamentos ortopédicos farmácia",
    "reabilitação básica",
    "prevenção de quedas",
    "Escola de Saúde - Franca J Fisioterapia",
  ],
  alternates: { canonical: `${base}/fisioterapia` },
  openGraph: {
    title: "Fisioterapia para Farmacêuticos | Escola de Saúde - Franca J",
    description:
      "Aprenda a orientar sobre órteses, coletes, reabilitação e produtos ortopédicos no balcão da farmácia.",
    url: `${base}/fisioterapia`,
    siteName: "Escola de Saúde - Franca J",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fisioterapia para Farmacêuticos | Escola de Saúde - Franca J",
    description:
      "Curso online de fisioterapia aplicada à farmácia — órteses, coletes, reabilitação.",
  },
};

export default function FisioterapiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
