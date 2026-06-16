"use client";

import Link from "next/link";
import {
  atalhosComando,
  comandoDiarioMeta,
  rotuloDaCategoria,
  secoesComando,
  type CategoriaComando,
} from "@/content/comando-diario";
import { useComandoDiario } from "@/lib/comando-diario";
import { Icon } from "./icons";
import { BarraProgresso, Botao, Card, Etiqueta, TituloSecao } from "./ui";

const tomCategoria: Record<CategoriaComando, "green" | "orange" | "neutral"> =
  {
    abertura: "green",
    balcao: "orange",
    estoque: "green",
    dados: "orange",
    fechamento: "neutral",
    formacao: "green",
  };

export function ComandoDiarioChecklist() {
  const { carregado, alternar, estaConcluido, feitos, total, pct, resetarDia, data } =
    useComandoDiario();

  if (!carregado) {
    return (
      <div className="space-y-4">
        <div className="h-32 animate-pulse rounded-2xl bg-surface-2" />
        <div className="h-64 animate-pulse rounded-2xl bg-surface-2" />
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <Card className="overflow-hidden">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Etiqueta tom="green">
              <Icon name="clock" size={12} /> {data}
            </Etiqueta>
            <h2 className="mt-2 text-lg font-bold">Progresso do dia</h2>
            <p className="text-sm text-muted">
              {feitos} de {total} itens · {pct}% concluído
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Botao href="/trilhas/operacional" variante="secondary" tamanho="sm" iconeFim="arrow">
              Trilha operacional
            </Botao>
            <button
              type="button"
              onClick={() => {
                if (confirm("Zerar o checklist de hoje?")) resetarDia();
              }}
              className="rounded-xl border border-border-strong px-3 py-2 text-sm text-subtle hover:text-orange-500"
            >
              Reiniciar dia
            </button>
          </div>
        </div>
        <BarraProgresso pct={pct} className="mt-4" />
      </Card>

      <p className="text-sm text-subtle">{comandoDiarioMeta.fonteNotion}</p>

      {secoesComando.map((secao) => (
        <section key={secao.id}>
          <h3 className="text-xl font-bold">{secao.titulo}</h3>
          {secao.descricao && <p className="mt-1 text-sm text-muted">{secao.descricao}</p>}
          <ul className="mt-4 space-y-2">
            {secao.itens.map((item) => {
              const feito = estaConcluido(item.id);
              return (
                <li key={item.id}>
                  <label
                    className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all ${
                      feito
                        ? "border-gold-300 bg-gold-50/80 dark:bg-gold-900/25"
                        : "border-border bg-surface hover:border-gold-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={feito}
                      onChange={() => alternar(item.id)}
                      className="mt-1 h-4 w-4 rounded border-border-strong text-gold-600 focus:ring-green-500"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <Etiqueta tom={tomCategoria[item.categoria]}>
                          {rotuloDaCategoria(item.categoria)}
                        </Etiqueta>
                        {feito && (
                          <Etiqueta tom="success">
                            <Icon name="check" size={12} /> Feito
                          </Etiqueta>
                        )}
                      </span>
                      <span
                        className={`mt-2 block text-sm ${feito ? "text-muted line-through" : "text-foreground"}`}
                      >
                        {item.texto}
                      </span>
                      {item.aulaHref && (
                        <Link
                          href={item.aulaHref}
                          onClick={(e) => e.stopPropagation()}
                          className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-gold-600 hover:underline"
                        >
                          Aprofundar na aula <Icon name="arrow" size={12} />
                        </Link>
                      )}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <section>
        <TituloSecao sobre="Atalhos" icone="sparkles" titulo="Recursos da plataforma" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {atalhosComando.map((a) => (
            <Link key={a.href} href={a.href}>
              <Card className="h-full transition-all hover:border-gold-400 hover:-translate-y-0.5">
                <h4 className="font-bold text-gold-600">{a.titulo}</h4>
                <p className="mt-1 text-sm text-muted">{a.descricao}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold-600">
                  Abrir <Icon name="arrow" size={14} />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
