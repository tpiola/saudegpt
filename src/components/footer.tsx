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
                <p className="text-xs text-white/55">Formação de excelência para atendentes de farmácia</p>
              </div>
            </div>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/64">{site.descricao}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/#matricula"
                className="inline-flex min-h-11 items-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-forest-700 transition hover:bg-white/90"
              >
                Entrar
              </Link>
              <a
                href="mailto:contato@thiagopiola.com.br"
                className="inline-flex min-h-11 items-center rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white/85 transition hover:border-white/50 hover:text-white"
              >
                Contato
              </a>
            </div>
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
            <h5 className="text-sm font-bold text-[#fffec7]">Patrocinadores</h5>
            <p className="mt-3 text-xs leading-relaxed text-white/55">
              A SaúdeGPT conta com o apoio de iniciativas comprometidas com tecnologia, educação e
              evolução profissional em saúde.
            </p>
            <ul className="mt-4 grid gap-3">
              {site.patrocinadores.map((p) => (
                <li key={p.nome}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-2xl border border-white/12 bg-white/[0.04] p-4 transition hover:border-white/25 hover:bg-white/[0.07]"
                  >
                    <p className="text-sm font-bold text-white/90 transition-colors group-hover:text-white">
                      {p.nome}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-white/55">{p.descricao}</p>
                    <p className="mt-2 text-xs font-semibold text-[#fffec7]/90">
                      {p.url.replace("https://", "")}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold text-white/70">
              Plataforma Construída por:{" "}
              <a
                href="https://www.reidasvendas.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fffec7] underline-offset-2 hover:underline"
              >
                reidasvendas.com.br
              </a>
            </p>
            <p className="mt-1 text-xs leading-relaxed text-white/52">{site.assinatura}</p>
          </div>
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
      </div>
    </footer>
  );
}
