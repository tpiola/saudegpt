import type { Metadata } from "next";
import { PortalInicio } from "@/components/portal-inicio";
import { JsonLdCourse } from "@/components/json-ld-course";

export const metadata: Metadata = {
  title: "Meu Painel — Formação para Atendentes de Farmácia",
  description:
    "Ambiente de estudos da Formação para Atendentes de Farmácia — trilhas, simuladores e progresso.",
};

export default function DashboardPage() {
  return (
    <>
      <JsonLdCourse />
      <PortalInicio />
    </>
  );
}
