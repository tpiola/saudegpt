import type { Metadata } from "next";
import { PortalInicio } from "@/components/portal-inicio";
import { JsonLdCourse } from "@/components/json-ld-course";

export const metadata: Metadata = {
  title: "Formação para Atendentes de Farmácia",
  description:
    "A formação mais completa do Brasil para atendentes de drogaria e perfumaria. Acolhimento, cuidado humanizado e excelência profissional.",
  openGraph: {
    title: "Formação para Atendentes de Farmácia",
    description:
      "A formação mais completa do Brasil para atendentes de drogaria e perfumaria.",
    url: "https://www.saudegpt.com",
    siteName: "Formação para Atendentes de Farmácia",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLdCourse />
      <PortalInicio />
    </>
  );
}
