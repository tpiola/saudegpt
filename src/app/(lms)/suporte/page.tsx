import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Suporte | Escola de Saúde - Franca J",
  description: "Tire suas dúvidas sobre a plataforma, trilhas, progresso e conteúdo educativo.",
};

const duvidas = [
  {
    pergunta: "Como começar a estudar?",
    resposta: "Vá até a página Trilhas e módulos, escolha uma trilha e clique no primeiro módulo. Dentro de cada módulo você encontra as aulas organizadas por ordem pedagógica. As aulas têm explicações, ilustrações e exercícios com retorno. No Meu campus, você também treina conversas em três níveis.",
  },
  {
    pergunta: "Como funciona o progresso?",
    resposta: "Seu progresso é salvo automaticamente no navegador. Cada aula concluída rende XP, que acumula para subir de nível. Você também ganha streaks (dias consecutivos estudando) e badges ao atingir marcos.",
  },
  {
    pergunta: "O que sao os 4 Ps?",
    resposta: "O método dos 4 Ps (Proteção, Prevenção, Promoção e Primeira Atenção) é a base do atendimento consultivo que ensinamos na plataforma. Cada aula traz uma dica prática de um dos 4 Ps para aplicar no balcão.",
  },
  {
    pergunta: "Como funciona o quiz?",
    resposta: "Ao final da aula, responda ao quiz e alcance pelo menos 60% para concluir. Se precisar, reveja a explicação e tente novamente. No campus, avance após compreender cada decisão.",
  },
  {
    pergunta: "Como entro em contato com o professor?",
    resposta: "A Escola de Saúde - Franca J é um ambiente de aprendizado em saúde. Para dúvidas específicas sobre o conteúdo, consulte o farmacêutico responsável da sua farmácia ou o CRF da sua região.",
  },
  {
    pergunta: "Meus dados estao seguros?",
    resposta: "O progresso das atividades fica neste navegador. Não insira dados de clientes, receitas ou outras informações de saúde nos exercícios. Consulte a Política de Privacidade para entender os recursos e tratamentos de dados da plataforma.",
  },
  {
    pergunta: "Preciso pagar para usar?",
    resposta: "O acesso às trilhas, aulas e atividades educativas é gratuito. Use o botão Iniciar ou entre no Meu campus.",
  },
];

export default function SuportePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 sm:py-16">
      {/* Cabecalho */}
      <div className="text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 text-white shadow-lg">
          <Icon name="message-circle" size={30} />
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Suporte
        </h1>
        <p className="mt-2 text-base sm:text-lg text-muted max-w-xl mx-auto">
          Tire suas dúvidas sobre a plataforma, trilhas, progresso e conteúdo educativo.
        </p>
      </div>

      {/* Cards de duvidas */}
      <div className="mt-10 space-y-4">
        {duvidas.map((item) => (
          <details
            key={item.pergunta}
            className="group rounded-2xl border border-border bg-surface p-5 transition-all hover:border-gold-200 hover:shadow-sm open:border-gold-200 open:shadow-sm dark:hover:border-emerald-800 dark:open:border-emerald-800"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
              <h3 className="text-sm font-semibold text-foreground sm:text-base">
                {item.pergunta}
              </h3>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-2 text-subtle transition-transform group-open:rotate-180">
                <Icon name="arrow" size={14} />
              </span>
            </summary>
            <div className="mt-4 border-t border-border pt-4">
              <p className="text-sm leading-relaxed text-muted">{item.resposta}</p>
            </div>
          </details>
        ))}
      </div>

      {/* Contato direto */}
      <div className="mt-12 rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-6 dark:border-orange-900/30 dark:from-orange-900/10 dark:to-navy-800/50">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">

          <div>
            <h3 className="font-bold text-foreground">Suporte da Escola de Saúde - Franca J</h3>

            <p className="mt-1 text-xs text-muted/70">
              Para questões técnicas sobre a plataforma ou sobre o conteúdo, entre em contato pelo site:{" "}
              <a
                href="https://www.thiagopiola.com.br"
                className="text-gold-600 hover:text-gold-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                thiagopiola.com.br
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Navegacao */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/trilhas"
          className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-emerald-600 hover:shadow-md"
        >
          <Icon name="book" size={16} />
          Explorar trilhas
        </Link>
        <Link
          href="/privacidade"
          className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent/50"
        >
          Politica de privacidade
        </Link>
      </div>
    </div>
  );
}
