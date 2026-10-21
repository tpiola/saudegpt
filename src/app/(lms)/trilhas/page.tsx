import type { Metadata } from "next";
import { trilhas, totalAulas } from "@/content/curriculo";
import { fotoTrilha } from "@/lib/ecossistema";
import { TrilhasCatalogo } from "@/components/trilhas-catalogo";
import { ApoioTratamento } from "@/components/apoio-tratamento";
export const metadata: Metadata = {
  title: "Trilhas de aprendizado",
  description:
    "Aprendizado em saúde para a rotina da drogaria: trilhas, situações de balcão e cuidado responsável.",
};
export default function Page() {
  return (
    <div className="eco-container eco-section">
      <p className="eco-kicker">Seu espaço de aprendizado</p>
      <h1 className="eco-title">
        Aprenda para
        <br />
        cuidar melhor.
      </h1>
      <p className="eco-lead">
        {trilhas.length} trilhas e {totalAulas()} aulas. Escolha um tema, avance
        no seu ritmo e pratique o que faz parte do dia a dia da drogaria.
      </p>
      <TrilhasCatalogo
        itens={trilhas.map((t) => ({
          id: t.id,
          titulo: t.titulo,
          descricao: t.descricao,
          foto: fotoTrilha(t.id),
          modulos: t.modulos.length,
          aulas: t.modulos.reduce((s, m) => s + m.aulas.length, 0),
        }))}
      />
      <ApoioTratamento />
    </div>
  );
}
