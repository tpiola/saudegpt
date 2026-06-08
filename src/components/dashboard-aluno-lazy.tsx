"use client";

import dynamic from "next/dynamic";

export const DashboardAlunoLazy = dynamic(
  () => import("@/components/dashboard-aluno") as unknown as Promise<{ default: React.ComponentType<unknown> }>,
  {
    ssr: false,
    loading: () => (
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
    ),
  }
);
