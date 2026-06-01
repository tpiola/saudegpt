import type { Metadata } from "next";
import { bibliotecaRegulatoria, ultimaAtualizacaoBiblioteca } from "@/content/biblioteca";
import { Card, Etiqueta, TituloSecao } from "@/components/ui";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Biblioteca regulatória",
  description:
    "Núcleo regulatório vivo: RDC 471/2021, GLP-1 (IN 360/2025), Farmácia Popular 2025, Boas Práticas, atribuições do farmacêutico e mais.",
};

export default function BibliotecaPage() {
  const atualizadas = bibliotecaRegulatoria.filter((n) => n.atualizado);
  const demais = bibliotecaRegulatoria.filter((n) => !n.atualizado);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <TituloSecao
        sobre="Hub ao vivo"
        icone="book"
        titulo="Biblioteca regulatória"
        descricao="Substitui o raciocínio antigo de 'terminal de consulta' estático. As normas mudam — o curso acompanha."
      />

      <Card className="mt-6 border-l-4 border-l-cyan-500 bg-surface-2/80">
        <p className="text-sm font-semibold text-brand-700 dark:text-brand-200">
          Última revisão pedagógica do hub:{" "}
          {ultimaAtualizacaoBiblioteca()
            ? new Date(ultimaAtualizacaoBiblioteca() + "T12:00:00").toLocaleDateString("pt-BR")
            : "—"}
        </p>
        <p className="mt-1 text-xs text-muted">
          Consulte sempre a consolidação oficial na Anvisa/MS para alterações posteriores.
        </p>
      </Card>

      <section className="mt-10">
        <div className="flex items-center gap-2">
          <Icon name="flame" size={18} className="text-amber-500" />
          <h2 className="text-lg font-bold">Atualizações críticas</h2>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {atualizadas.map((n) => (
            <Card key={n.id} className="border-l-4 border-l-amber-400">
              <div className="flex items-center justify-between">
                <Etiqueta tom="warning">Atualizado</Etiqueta>
                <span className="text-xs text-subtle">{n.categoria}</span>
              </div>
              <h3 className="mt-3 text-base font-bold">{n.titulo}</h3>
              <p className="mt-0.5 text-xs font-semibold text-brand-600">
                {n.norma} · {n.orgao}
              </p>
              <p className="mt-2 text-sm text-muted">{n.resumo}</p>
              <ul className="mt-3 space-y-1.5">
                {n.pontosChave.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted">
                    <Icon name="check" size={14} className="mt-0.5 flex-none text-brand-600" /> {p}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold">Núcleo regulatório</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {demais.map((n) => (
            <Card key={n.id}>
              <div className="flex items-center justify-between">
                <Etiqueta tom="neutral">{n.categoria}</Etiqueta>
                <span className="text-xs text-subtle">{n.orgao}</span>
              </div>
              <h3 className="mt-3 text-base font-bold">{n.titulo}</h3>
              <p className="mt-0.5 text-xs font-semibold text-brand-600">{n.norma}</p>
              <p className="mt-2 text-sm text-muted">{n.resumo}</p>
              <ul className="mt-3 space-y-1.5">
                {n.pontosChave.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted">
                    <Icon name="check" size={14} className="mt-0.5 flex-none text-brand-600" /> {p}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <p className="mt-10 rounded-xl bg-surface-2 p-4 text-xs text-subtle">
        Conteúdo educativo de apoio. A interpretação e aplicação das normas devem ser confirmadas
        nas fontes oficiais (Anvisa, Ministério da Saúde e CFF) e sob responsabilidade do
        farmacêutico.
      </p>
    </div>
  );
}
