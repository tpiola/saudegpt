import Link from "next/link";
export function ApoioTratamento() {
  return (
    <aside className="eco-care-note" aria-label="Cuidado em cada atendimento">
      <h2>Da receita à rotina: complete o cuidado.</h2>
      <div>
        <p>
          <strong>Em toda receita</strong>
          <br />
          Realize o Apoio ao Tratamento conforme o protocolo da unidade: acolha,
          identifique dúvidas e envolva o farmacêutico na avaliação e
          orientação.
        </p>
        <p>
          <strong>Em todo uso contínuo</strong>
          <br />
          Apresente o Na Rotina para apoiar a organização. A adesão é uma
          escolha do cliente, com consentimento e conforme as regras vigentes.
        </p>
      </div>
      <Link className="eco-text-link" href="/praticar">
        Treinar essa conversa →
      </Link>
    </aside>
  );
}
