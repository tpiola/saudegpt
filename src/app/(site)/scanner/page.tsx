import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScannerFloatingButton } from "@/components/scanner-floating-button";

export const metadata: Metadata = {
  title: "Scanner de Produtos",
  description: "Tire uma foto de qualquer medicamento, cosmético ou produto de saúde e receba informações completas.",
};

export default function ScannerPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main className="py-16 sm:py-24 px-4">
        <div className="mx-auto max-w-7xl text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
            Scanner de Produtos
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Identifique medicamentos, cosméticos, perfumes e produtos de saúde com IA.
            Tire uma foto e obtenha informações completas instantaneamente.
          </p>
        </div>
        <ScannerFloatingButton />
      </main>
      <Footer />
    </div>
  );
}
