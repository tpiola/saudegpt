import Link from "next/link";
import { site } from "@/lib/site";
import { PillCap } from "./pill-cap";

export function SiteFooter() {
  const ano = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg">
                <PillCap size={18} className="text-white" />
              </div>
              <span className="text-sm font-bold">Saúde GPT</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Plataforma de formação para atendentes de farmácia. Conteúdo baseado em ANVISA, Ministério da Saúde e OMS.
            </p>
            <p className="mt-3 text-xs text-muted-foreground/80 leading-relaxed border-l-2 border-emerald-500/40 pl-3">
              {site.assinatura}
            </p>
          </div>

          {/* Plataforma */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Plataforma</h4>
            <ul className="space-y-2">
              <li><Link href="/trilhas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Trilhas</Link></li>
              <li><Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link></li>
              <li><Link href="/biblioteca" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Biblioteca</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacidade" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/termos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</Link></li>
              <li><Link href="/lgpd" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LGPD</Link></li>
            </ul>
          </div>

          {/* Patrocinadores */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Patrocinadores</h4>
            <ul className="space-y-3">
              {site.patrocinadores.map((p) => (
                <li key={p.nome}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-emerald-500/30 hover:bg-emerald-500/[0.04]"
                  >
                    <p className="text-sm font-bold text-foreground hover:text-emerald-400 transition-colors">
                      {p.nome}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{p.url.replace("https://www.", "")}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground">
              &copy; {ano} {site.nome}. Todos os direitos reservados.
            </p>
            <p className="mt-1 text-xs text-emerald-400/70 font-medium">
              Plataforma criada por{" "}
              <a
                href="https://www.reidasvendas.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Rei das Vendas
              </a>
            </p>
          </div>
          <p className="text-xs text-muted-foreground text-right">
            Este site não substitui consulta médica.<br />
            Em caso de emergência, ligue 192.
          </p>
        </div>
      </div>
    </footer>
  );
}
