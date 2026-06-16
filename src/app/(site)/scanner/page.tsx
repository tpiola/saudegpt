import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScannerProduto } from "@/components/scanner-produto";

export const metadata: Metadata = {
  title: "Scanner de Produtos",
  description: "Tire uma foto de qualquer medicamento, cosmético ou produto de saúde e receba informações completas com IA.",
};

export default function ScannerPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main className="py-16 sm:py-24 px-4">
        <div className="mx-auto max-w-7xl text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent">
            📸 Scanner de Produtos
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Identifique medicamentos, cosméticos, perfumes e produtos de saúde com IA.
            Tire uma foto ou digite o código de barras e obtenha informações completas.
          </p>
        </div>
        <ScannerProduto />
      </main>
      <Footer />
    </div>
  );
}
