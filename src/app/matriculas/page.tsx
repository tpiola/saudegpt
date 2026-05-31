import type { Metadata } from "next";
import { trilhas, totalAulas } from "@/content/curriculo";
import { MatriculaForm } from "@/components/matricula-form";
import { Card, Etiqueta } from "@/components/ui";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Matrículas",
  description: "Matricule-se na Formação para Atendentes Premium de Farmácia e comece agora.",
};

const beneficios = [
  "Acesso às 4 trilhas, do básico ao avançado",
  `${totalAulas()}+ microlições com vídeo, simulações e quizzes`,
  "Simulador de balcão com missões pontuadas",
  "Biblioteca regulatória sempre atualizada",
  "Gamificação com XP, níveis e badges",
  "Hub Power BI para leitura de indicadores",
  "Certificações internas por badge",
  "Modo claro e escuro, 100% responsivo",
];

export default function MatriculasPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <Etiqueta tom="brand">
            <Icon name="sparkles" size={14} /> Matrícula
          </Etiqueta>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Comece sua <span className="text-gradient">formação premium</span> hoje
          </h1>
          <p className="mt-4 text-muted">{site.descricao}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {beneficios.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-900/40">
                  <Icon name="check" size={13} />
                </span>
                <span className="text-sm text-muted">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {trilhas.slice(0, 3).map((t) => (
              <Card key={t.id} className="p-4">
                <Icon
                  name={t.icone as Parameters<typeof Icon>[0]["name"]}
                  size={20}
                  className="text-brand-600"
                />
                <div className="mt-2 text-xs font-semibold">{t.subtitulo}</div>
              </Card>
            ))}
          </div>
        </div>

        <MatriculaForm />
      </div>

      <p className="mt-10 text-center text-sm text-subtle">{site.assinatura}</p>
    </div>
  );
}
