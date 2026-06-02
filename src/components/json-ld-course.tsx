import { site } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";
import { totalAulas } from "@/content/curriculo";

export function JsonLdCourse() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: site.nome,
    description: site.descricao,
    provider: {
      "@type": "Organization",
      name: "Formação para Atendentes Premium de Farmácia",
      description: "Curso profissional criado e revisado por farmacêutico CRF/SP 58.519",
    },
    inLanguage: "pt-BR",
    url,
    numberOfCredits: totalAulas(),
    educationalLevel: "Beginner to Advanced",
    teaches: [
      "Atendimento em farmácia e drogaria",
      "Perfumaria e autocuidado",
      "Medicamentos e segurança no balcão",
      "Leitura de bula e receitas",
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
