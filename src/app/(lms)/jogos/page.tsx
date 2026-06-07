import type { Metadata } from "next";
import { jogoReceita, jogoSintomaCategoria, jogoTarjas, jogosMeta } from "@/content/jogos";
import { JogoQuiz } from "@/components/jogo-quiz";
import { TituloSecao } from "@/components/ui";

export const metadata: Metadata = {
  title: "Jogos de balcão",
  description: jogosMeta.descricao,
};

export default function JogosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <TituloSecao
        sobre="Prática"
        icone="target"
        titulo={jogosMeta.titulo}
        descricao={jogosMeta.descricao}
      />
      <div className="mt-10 space-y-8">
        <JogoQuiz titulo="Leitura de tarjas" questoes={jogoTarjas} />
        <JogoQuiz titulo="Receita sem erro" questoes={jogoReceita} />
        <JogoQuiz titulo="Sintoma → categoria segura" questoes={jogoSintomaCategoria} />
      </div>
    </div>
  );
}
