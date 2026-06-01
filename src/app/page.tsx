import type { Metadata } from "next";
import { PortalInicio } from "@/components/portal-inicio";
import { JsonLdCourse } from "@/components/json-ld-course";

export const metadata: Metadata = {
  title: "A formação mais completa para atendentes de farmácia",
  description:
    "Ambiente de estudos da Formação para Atendentes Premium de Farmácia — trilhas, simuladores e progresso.",
};

export default function Home() {
  return (
    <>
      <JsonLdCourse />
      <PortalInicio />
    </>
  );
}
