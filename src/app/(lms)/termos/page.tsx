import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de uso",
  description: "Termos de uso da plataforma de formação.",
};

export default function TermosPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Termos de uso</h1>
      <p className="text-muted mt-4">
        Ao utilizar {site.nome}, você concorda que o conteúdo é <strong>educativo</strong> e não
        substitui a orientação do farmacêutico ou do médico.
      </p>
      <h2 className="text-xl font-semibold mt-8">Responsabilidade profissional</h2>
      <p className="text-muted">
        A dispensação de medicamentos, especialmente controlados e antimicrobianos, é ato do
        profissional habilitado. O atendente deve respeitar os limites legais de orientação de MIP.
      </p>
      <h2 className="text-xl font-semibold mt-8">Propriedade intelectual</h2>
      <p className="text-muted">
        O currículo, textos e identidade visual são protegidos. É vedada a reprodução comercial sem
        autorização.
      </p>
      <p className="text-sm text-subtle mt-8">{site.assinatura}</p>
    </article>
  );
}
