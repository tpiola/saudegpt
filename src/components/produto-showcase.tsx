"use client";

import Image from "next/image";
import type { MarcaMidia, ProdutoMidia } from "@/content/types";
import { Card } from "./ui";
import { AnimarEntrada } from "./animar-entrada";

export function ProdutoShowcase({
  produtos,
  marcas,
}: {
  produtos?: ProdutoMidia[];
  marcas?: MarcaMidia[];
}) {
  if (!produtos?.length && !marcas?.length) return null;

  return (
    <AnimarEntrada className="space-y-6">
      {marcas && marcas.length > 0 && (
        <Card className="p-5">
          <h2 className="text-sm font-bold uppercase tracking-wide text-subtle">
            Marcas de referência
          </h2>
          <p className="mt-1 text-xs text-muted">
            Reconhecimento visual no balcão — sem vínculo com rede varejista específica.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            {marcas.map((m) => (
              <div
                key={m.nome}
                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface-2 px-4 py-3 transition-transform hover:scale-105"
              >
                <div className="relative h-10 w-24">
                  <Image
                    src={m.logoUrl}
                    alt={`Logo ${m.nome}`}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <span className="text-[11px] font-medium text-muted">{m.nome}</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {produtos && produtos.length > 0 && (
        <div>
          <h2 className="text-lg font-bold">Vitrine da categoria</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {produtos.map((p, i) => (
              <AnimarEntrada key={p.nome} delay={i * 80}>
                <Card className="overflow-hidden p-0">
                  <div className="relative h-44 w-full">
                    <Image
                      src={p.imagemUrl}
                      alt={p.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                  </div>
                  <div className="p-4">
                    {p.categoria && (
                      <span className="text-xs font-semibold text-green-600">{p.categoria}</span>
                    )}
                    <p className="mt-1 font-semibold">{p.nome}</p>
                  </div>
                </Card>
              </AnimarEntrada>
            ))}
          </div>
        </div>
      )}
    </AnimarEntrada>
  );
}
