import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  const ano = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 text-white text-xs font-extrabold">
                H
              </div>
              <span className="text-sm font-bold">Health Learning OS</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Plataforma de formação para atendentes de farmácia. Conteúdo baseado em ANVISA, Ministério da Saúde e OMS.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Plataforma</h4>
            <ul className="space-y-2">
              <li><Link href="/trilhas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Trilhas</Link></li>
              <li><Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link></li>
              <li><Link href="/biblioteca" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Biblioteca</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacidade" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/termos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</Link></li>
              <li><Link href="/lgpd" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LGPD</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Contato</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-muted-foreground">CRF/SP 58.519</span></li>
              <li><a href="mailto:contato@saudegpt.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">contato@saudegpt.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {ano} {site.nome}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Este site não substitui consulta médica. Em caso de emergência, ligue 192.
          </p>
        </div>
      </div>
    </footer>
  );
}
