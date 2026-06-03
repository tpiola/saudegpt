import type { Metadata } from "next";
import { PortalInicio } from "@/components/portal-inicio";
import { JsonLdCourse } from "@/components/json-ld-course";

export const metadata: Metadata = {
  title: "Home | Atendentes Premium de Farmácia",
  description:
    "A formação mais completa do Brasil para atendentes de drogaria e perfumaria — trilhas, simuladores, cuidado humanizado e atendimento de excelência.",
};

export default function Home() {
  return (
    <>
      <JsonLdCourse />
      <PortalInicio />
    </>
  );
}
