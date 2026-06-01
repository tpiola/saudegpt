import type { Metadata } from "next";
import Link from "next/link";
import { trilhas, totalAulas } from "@/content/curriculo";
import { Mandala } from "@/components/mandala";
import { Botao, Card, TituloSecao } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre o curso",
  description: site.descricao,
};

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <TituloSecao
        sobre="Institucional"
        icone="graduation"
        titulo="Formação para Atendentes Premium de Farmácia"
        descricao={site.descricao}
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-brand-600">{trilhas.length}</div>
          <div className="text-xs text-subtle">trilhas</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-brand-600">{totalAulas()}+</div>
          <div className="text-xs text-subtle">aulas</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-brand-600">3</div>
          <div className="text-xs text-subtle">níveis por módulo</div>
        </Card>
      </div>

      <div className="mt-12">
        <h2 className="text-lg font-bold">Mandala pedagógica</h2>
        <p className="mt-2 text-sm text-muted">
          Saúde integral no centro: pessoa, valores, responsabilidades e operação de loja.
        </p>
        <div className="mt-6 max-w-md mx-auto">
          <Mandala />
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-subtle">{site.assinatura}</p>
      <div className="mt-6 flex justify-center">
        <Botao href="/matriculas" iconeFim="arrow">
          Matricular-se
        </Botao>
      </div>
      <p className="mt-4 text-center text-sm">
        <Link href="/" className="text-brand-600 hover:underline">
          Voltar ao ambiente de estudos
        </Link>
      </p>
    </div>
  );
}
