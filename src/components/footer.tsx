import Link from "next/link";
import { linksLegais, navPrincipal, site } from "@/lib/site";
import { Icon } from "./icons";

const linksCoordenacao = [{ href: "/admin", label: "Coordenação (admin)" }];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--forest-600),var(--brand-600))] text-white">
                <Icon name="shield" size={20} />
              </span>
              <span className="text-sm font-bold">{site.nomeCurto}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted leading-relaxed">{site.descricao}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Navegação</h3>
            <ul className="mt-3 space-y-2">
              {navPrincipal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted hover:text-forest-600 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Patrocínio</h3>
            <ul className="mt-3 space-y-2">
              {site.patrocinio.map((p) => (
                <li key={p.url}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-forest-600 transition-colors"
                  >
                    {p.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium text-muted">{site.assinatura}</p>
          <p>
            Patrocinado por{" "}
            {site.patrocinio.map((p, i) => (
              <span key={p.url}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-forest-600 transition-colors">
                  {p.url.replace("https://", "")}
                </a>
                {i < site.patrocinio.length - 1 ? " e " : ""}
              </span>
            ))}
          </p>
        </div>
        <p className="mt-4 flex flex-wrap gap-4 text-xs text-subtle">
          {linksLegais.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-forest-600 transition-colors">
              {l.label}
            </Link>
          ))}
          {linksCoordenacao.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-forest-600 transition-colors">
              {l.label}
            </Link>
          ))}
        </p>
        <p className="mt-2 text-xs text-subtle leading-relaxed">
          Conteúdo educativo. Não substitui a orientação do farmacêutico ou do médico. As decisões
          clínicas e a dispensação de medicamentos controlados são atos do profissional habilitado.
        </p>
      </div>
    </footer>
  );
}
