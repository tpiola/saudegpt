import Link from "next/link";
import { linksLegais, navPrincipal, site } from "@/lib/site";
import { LogoAcademico } from "./logo-academico";

export function Footer() {
  return (
    <footer className="border-t border-forest-600/20 bg-forest-500 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                <LogoAcademico size={26} />
              </span>
              <div>
                <p className="text-sm font-extrabold tracking-tight">{site.nomeCurto}</p>
                <p className="text-xs text-white/55">Formação para atendentes de farmácia</p>
              </div>
            </div>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/64">{site.descricao}</p>
            <Link
              href="/trilhas"
              className="mt-5 inline-flex min-h-11 items-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-forest-700 transition hover:bg-white/90"
            >
              Explorar trilhas
            </Link>
          </div>

          <div>
            <h5 className="text-sm font-bold text-[#fffec7]">Produto</h5>
            <ul className="mt-4 grid gap-2.5">
              {navPrincipal.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/68 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold text-[#fffec7]">Canais</h5>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.social.map((item) => (
                <li key={item.nome}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center rounded-full border border-white/12 px-3 text-xs font-semibold text-white/70 transition hover:border-white/25 hover:text-white"
                  >
                    {item.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-white/52">{site.assinatura}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/52">
            {linksLegais.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-white/85">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-white/38">
          Conteúdo educativo. Não substitui consulta médica nem orientação do farmacêutico responsável.
        </p>
        <p className="mt-3 text-[11px] leading-relaxed text-white/30 border-t border-white/5 pt-3 text-center sm:text-left">
          Conteúdo criado e revisado pelo farmacêutico <strong className="text-white/50">Thiago Biasoli Garcia Piola</strong> — CRF/SP 58.519
        </p>
      </div>
    </footer>
  );
}
