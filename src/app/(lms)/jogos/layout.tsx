import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Jogos Interativos | SaúdeGPT",
  description:
    "Domine o atendimento de balcão com jogos educativos: quizzes de tarjas, speed challenge, fatos científicos, modo sobrevivência e simulações reais de farmácia. Treinamento gamificado para atendentes.",
  keywords: [
    "jogos farmácia",
    "quiz tarjas",
    "speed challenge farmácia",
    "atendimento balcão",
    "treinamento farmacêutico",
    "educação farmácia",
    "SaúdeGPT",
    "jogos educativos farmácia",
  ],
  openGraph: {
    title: "Jogos Interativos — SaúdeGPT",
    description:
      "Treine atendimento de farmácia com jogos: quizzes, speed challenge, modo sobrevivência e simulações de balcão.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function JogosLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
