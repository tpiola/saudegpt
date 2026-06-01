import type { Metadata } from "next";
import { AdminPainel } from "@/components/admin-painel";

export const metadata: Metadata = {
  title: "Admin",
  description: "Painel administrativo da plataforma.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminPainel />;
}
