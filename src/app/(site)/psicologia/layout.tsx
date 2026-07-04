import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

const base = getSiteUrl();

export const metadata: Metadata = {
  title: "Psicologia para Farmacêuticos | SaúdeGPT",
  description:
    "Curso de Saúde Mental aplicada à farmácia: transtornos mentais comuns, psicofármacos, ansiedade, depressão e atendimento humanizado. Certificado digital.",
  keywords: [
    "curso de psicologia para farmacêutico",
    "saúde mental farmácia",
    "psicofármacos",
    "ansiedade depressão farmácia",
    "atendimento humanizado",
    "SaúdeGPT Psicologia",
  ],
  alternates: { canonical: `${base}/psicologia` },
  openGraph: {
    title: "Psicologia para Farmacêuticos | SaúdeGPT",
    description:
      "Formação em saúde mental para o farmacêutico: acolhimento, orientação sobre psicofármacos e cuidado humanizado.",
    url: `${base}/psicologia`,
    siteName: "SaúdeGPT",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicologia para Farmacêuticos | SaúdeGPT",
    description:
      "Curso online de saúde mental aplicada à farmácia — acolhimento e psicofármacos.",
  },
};

export default function PsicologiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
