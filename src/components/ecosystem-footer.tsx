import Link from "next/link";
import { site } from "@/lib/site";
export function EcosystemFooter() {
  return (
    <footer className="eco-footer">
      <div className="eco-container">
        <div className="eco-footer-top">
          <div>
            <Link href="/" className="eco-footer-brand">
              Escola de Saúde - Franca J
            </Link>
            <p>
              Aprender para atender melhor.
              <br />
              Cuidar para fazer diferença.
            </p>
          </div>
          <nav aria-label="Links do rodapé">
            <Link href="/trilhas">Trilhas de aprendizado</Link>
            <Link href="/praticar">Exercícios de balcão</Link>
            <Link href="/biblioteca">Fontes e consultas</Link>
            <Link href="/suporte">Suporte</Link>
          </nav>
          <div>
            <p>Educação em saúde, com clareza e responsabilidade.</p>
            <p className="eco-footer-note">
              Conteúdo educativo. As orientações individualizadas e a avaliação
              da prescrição cabem ao farmacêutico e aos demais profissionais
              habilitados. Formação continuada para a rotina da drogaria.
            </p>
          </div>
        </div>
        <div className="eco-footer-bottom">
          <p>{site.assinatura}</p>
          <nav aria-label="Informações legais">
            <Link href="/privacidade">Privacidade</Link>
            <Link href="/termos">Termos de uso</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
