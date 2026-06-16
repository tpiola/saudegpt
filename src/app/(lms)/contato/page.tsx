import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato — Fale com a equipe",
  description: `Entre em contato com a equipe ${site.nome}. Tire dúvidas sobre o curso, suporte técnico ou parcerias.`,
};

const canais = [
  {
    titulo: "E-mail",
    descricao: "Resposta em até 24h úteis",
    href: "mailto:contato@thiagopiola.com.br",
    label: "contato@thiagopiola.com.br",
    icone: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    titulo: "WhatsApp",
    descricao: "Atendimento rápido — em breve",
    href: "#",
    label: "Em breve",
    icone: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    titulo: "Suporte",
    descricao: "Central de ajuda e perguntas frequentes",
    href: "/suporte",
    label: "Central de Suporte",
    icone: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

export default function ContatoPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      {/* Header */}
      <div className="mb-12 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-menta-100/10 px-3 py-1 text-[11px] font-medium text-menta-300">
          FALE CONOSCO
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Como podemos ajudar?
        </h1>
        <p className="mt-3 text-base text-white/60">
          Tire suas dúvidas diretamente com a equipe{" "}
          <strong className="text-white/80">{site.nome}</strong>.
        </p>
      </div>

      {/* Canais de contato */}
      <div className="mb-12 grid gap-4 sm:grid-cols-3">
        {canais.map((canal) => (
          <Link
            key={canal.titulo}
            href={canal.href}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-menta-500/30 hover:bg-white/[0.06]"
          >
            <div className="mb-3 inline-flex rounded-lg bg-menta-500/10 p-2.5 text-menta-400">
              {canal.icone}
            </div>
            <h3 className="mb-1 font-semibold text-white">{canal.titulo}</h3>
            <p className="text-sm text-white/50">{canal.descricao}</p>
            <p className="mt-2 text-sm font-medium text-menta-400 group-hover:text-menta-300">
              {canal.label} &rarr;
            </p>
          </Link>
        ))}
      </div>

      {/* Criador */}
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8 text-center">
        <h2 className="text-lg font-semibold text-white">Criado pelo Farmacêutico</h2>
        <p className="mt-2 text-white/60">
          <strong className="text-white/80">Thiago B. G. Piola</strong> — CRF/SP 58.519
        </p>
        <p className="mt-1 text-sm text-white/40">
          Farmácia • Tecnologia • Educação
        </p>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-white/30 max-w-md mx-auto leading-relaxed">
          Este treinamento não substitui o que o(a) farmacêutico(a) ensina presencialmente.
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link
            href="https://thiagopiola.com.br"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-menta-400 hover:text-menta-300"
          >
            thiagopiola.com.br
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
