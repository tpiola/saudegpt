import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

const base = getSiteUrl();

export const metadata: Metadata = {
  title: "Psicologia para Farmacêuticos | Escola de Saúde - Franca J",
  description:
    "Curso de Saúde Mental aplicada à farmácia: transtornos mentais comuns, psicofármacos, ansiedade, depressão e atendimento humanizado. Conteúdo educativo e exercícios.",
  keywords: [
    "curso de psicologia para farmacêutico",
    "saúde mental farmácia",
    "psicofármacos",
    "ansiedade depressão farmácia",
    "atendimento humanizado",
    "Escola de Saúde - Franca J Psicologia",
  ],
  alternates: { canonical: `${base}/psicologia` },
  openGraph: {
    title: "Psicologia para Farmacêuticos | Escola de Saúde - Franca J",
    description:
      "Formação em saúde mental para o farmacêutico: acolhimento, orientação sobre psicofármacos e cuidado humanizado.",
    url: `${base}/psicologia`,
    siteName: "Escola de Saúde - Franca J",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicologia para Farmacêuticos | Escola de Saúde - Franca J",
    description:
      "Curso online de saúde mental aplicada à farmácia — acolhimento e psicofármacos.",
  },
};

export default function PsicologiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
