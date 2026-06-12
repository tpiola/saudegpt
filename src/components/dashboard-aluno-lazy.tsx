"use client";

import { Suspense, lazy } from "react";
import { ErrorBoundary } from "@/components/error-boundary";

const DashboardAluno = lazy(() =>
  import("@/components/dashboard-aluno").then((mod) => ({
    default: mod.DashboardAluno,
  }))
);

export function DashboardAlunoLazy() {
  return (
    <ErrorBoundary mensagem="Não foi possível carregar seu painel.">
      <Suspense
        fallback={
          <div className="grid gap-6 p-6 animate-pulse">
            <div className="h-8 w-48 rounded bg-muted" />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-24 rounded-xl bg-muted" />
              ))}
            </div>
            <div className="h-64 rounded-xl bg-muted" />
            <div className="h-48 rounded-xl bg-muted" />
          </div>
        }
      >
        <DashboardAluno />
      </Suspense>
    </ErrorBoundary>
  );
}
