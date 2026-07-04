import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

const base = getSiteUrl();

export const metadata: Metadata = {
  title: "Nutrição para Farmacêuticos | SaúdeGPT",
  description:
    "Curso de Nutrição aplicada à farmácia: suplementação, fitoterapia, interações medicamento-nutriente e nutrição esportiva. Certificado digital reconhecido.",
  keywords: [
    "curso de nutrição para farmacêutico",
    "suplementação farmácia",
    "fitoterapia",
    "interação medicamento nutriente",
    "nutrição esportiva",
    "SaúdeGPT Nutrição",
  ],
  alternates: { canonical: `${base}/nutricao` },
  openGraph: {
    title: "Nutrição para Farmacêuticos | SaúdeGPT",
    description:
      "Domine suplementação, fitoterapia e nutrição clínica aplicada ao balcão da farmácia. Curso online com certificado.",
    url: `${base}/nutricao`,
    siteName: "SaúdeGPT",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutrição para Farmacêuticos | SaúdeGPT",
    description:
      "Curso online completo de nutrição para o farmacêutico moderno.",
  },
};

export default function NutricaoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
