import { LmsShell } from "@/components/lms-shell";

export default function LmsLayout({ children }: { children: React.ReactNode }) {
  return <LmsShell><main id="conteudo-principal" className="overflow-x-clip">{children}</main></LmsShell>;
}
