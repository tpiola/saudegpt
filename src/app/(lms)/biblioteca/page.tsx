import type { Metadata } from "next";
import Image from "next/image";
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
      {/* Hero */}
      <div className="relative mb-10 overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <Image
            src="/imagens/hero_brain_model.png"
            alt="Estante de farmácia com medicamentos e livros de referência"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-900/85 via-midnight-900/60 to-transparent" />
        </div>
        <div className="relative px-6 py-14 sm:px-10 sm:py-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-sm">
            <Icon name="book" size={12} /> Hub ao vivo
          </span>
          <h1 className="mt-4 max-w-xl text-2xl font-black text-white sm:text-3xl">
            Biblioteca regulatória
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70">
            Substitui o raciocínio antigo de &apos;terminal de consulta&apos; estático. As normas mudam — o curso acompanha.
          </p>
        </div>
      </div>

      <Card className="mt-6 border-l-4 border-l-green-500 bg-surface-2/80">
        <p className="text-sm font-semibold text-green-700 dark:text-green-200">
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
          <Icon name="flame" size={18} className="text-orange-500" />
          <h2 className="text-lg font-bold">Atualizações críticas</h2>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {atualizadas.map((n) => (
            <Card key={n.id} className="border-l-4 border-l-orange-400">
              <div className="flex items-center justify-between">
                <Etiqueta tom="warning">Atualizado</Etiqueta>
                <span className="text-xs text-subtle">{n.categoria}</span>
              </div>
              <h3 className="mt-3 text-base font-bold">{n.titulo}</h3>
              <p className="mt-0.5 text-xs font-semibold text-green-600">
                {n.norma} · {n.orgao}
              </p>
              <p className="mt-2 text-sm text-muted">{n.resumo}</p>
              <ul className="mt-3 space-y-1.5">
                {n.pontosChave.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted">
                    <Icon name="check" size={14} className="mt-0.5 flex-none text-green-600" /> {p}
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
              <p className="mt-0.5 text-xs font-semibold text-green-600">{n.norma}</p>
              <p className="mt-2 text-sm text-muted">{n.resumo}</p>
              <ul className="mt-3 space-y-1.5">
                {n.pontosChave.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted">
                    <Icon name="check" size={14} className="mt-0.5 flex-none text-green-600" /> {p}
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
