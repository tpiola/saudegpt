import type { Metadata } from "next";
import Image from "next/image";
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
    <div className="mx-auto max-w-4xl px-5 py-10 sm:px-6">
      {/* Hero */}
      <div className="relative mb-10 overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <Image
            src="/imagens/hero_surgeons.webp"
            alt="Equipe de farmácia unida atendendo pacientes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-900/85 via-midnight-900/60 to-transparent" />
        </div>
        <div className="relative px-6 py-14 sm:px-10 sm:py-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-sm">
            Institucional
          </span>
          <h1 className="mt-4 max-w-xl text-2xl font-black text-white sm:text-3xl">
            Formação para Atendentes de Farmácia
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70">
            {site.descricao}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-gold-600">{trilhas.length}</div>
          <div className="text-xs text-subtle">trilhas</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-gold-600">{totalAulas()}+</div>
          <div className="text-xs text-subtle">aulas</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-gold-600">3</div>
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

      {/* 🧑‍⚕️ Mensagens do farmacêutico */}
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        <div className="flex items-start gap-3 rounded-xl border border-gold-100 bg-gold-50/60 p-4 dark:border-gold-900/30 dark:bg-gold-900/10">
          <span className="mt-0.5 text-lg">🧑‍⚕️</span>
          <p className="text-xs leading-relaxed text-muted">
            <strong className="text-navy-700 dark:text-white">Sempre consulte</strong> o(a) farmacêutico(a) para orientação personalizada sobre medicamentos.
          </p>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-orange-100 bg-orange-50/60 p-4 dark:border-orange-900/30 dark:bg-orange-900/10">
          <span className="mt-0.5 text-lg">📝</span>
          <p className="text-xs leading-relaxed text-muted">
            <strong className="text-navy-700 dark:text-white">Solicite o segundo visto</strong> do farmacêutico(a) para prescrições.
          </p>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-gold-100 bg-gold-50/60 p-4 dark:border-gold-900/30 dark:bg-gold-900/10">
          <span className="mt-0.5 text-lg">🏷️</span>
          <p className="text-xs leading-relaxed text-muted">
            <strong className="text-navy-700 dark:text-white">Anote corretamente</strong> as informações na etiqueta de posologia.
          </p>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-subtle">{site.assinatura}</p>
      <div className="mt-6 flex justify-center">
        <Botao href="/" iconeFim="arrow">
          Explorar trilhas
        </Botao>
      </div>
      <p className="mt-4 text-center text-sm">
        <Link href="/dashboard" className="text-gold-600 hover:underline">
          Voltar ao ambiente de estudos
        </Link>
      </p>
    </div>
  );
}
