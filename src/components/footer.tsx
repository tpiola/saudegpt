import Link from "next/link";
import { linksLegais, navPrincipal, site } from "@/lib/site";
import { Icon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-forest-600/20 bg-forest-500 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand + Descrição */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white shadow-md">
                <Icon name="shield" size={20} />
              </span>
              <span className="text-sm font-bold text-white/90">{site.nomeCurto}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/50 leading-relaxed">
              {site.descricao}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#matricular"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-forest-700 transition-all hover:bg-white/90"
              >
                Matricule-se grátis
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h5 className="text-sm font-semibold" style={{ color: "#fffec7" }}>Navegação</h5>
            <ul className="mt-4 space-y-2.5">
              {navPrincipal.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aprendizado */}
          <div>
            <h5 className="text-sm font-semibold" style={{ color: "#fffec7" }}>Aprendizado</h5>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/trilhas" className="text-sm text-white/50 hover:text-white transition-colors">Perfumaria e Cosméticos</Link></li>
              <li><Link href="/trilhas" className="text-sm text-white/50 hover:text-white transition-colors">Capacitação em Medicamentos</Link></li>
              <li><Link href="/trilhas" className="text-sm text-white/50 hover:text-white transition-colors">Receitas e Legislação</Link></li>
              <li><Link href="/trilhas" className="text-sm text-white/50 hover:text-white transition-colors">Atendimento Humanizado</Link></li>
              <li><Link href="/comando-diario" className="text-sm text-white/50 hover:text-white transition-colors">Comando Diário</Link></li>
            </ul>
          </div>

          {/* Patrocínio */}
          <div>
            <h5 className="text-sm font-semibold" style={{ color: "#fffec7" }}>Patrocínio</h5>
            <ul className="mt-4 space-y-2.5">
              {site.patrocinio.map((p) => (
                <li key={p.url}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {p.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/40">
            {site.assinatura}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/30">
            {linksLegais.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white/60 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-4 text-xs text-white/25 leading-relaxed">
          Conteúdo educativo criado por farmacêutico. Não substitui a orientação do farmacêutico ou do médico. As decisões clínicas e a dispensação de medicamentos controlados são atos do profissional habilitado.
        </p>
      </div>
    </footer>
  );
}
