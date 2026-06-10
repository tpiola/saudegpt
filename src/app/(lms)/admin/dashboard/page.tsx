import type { Metadata } from "next";
import { AdminCrm } from "@/components/admin-crm";

export const metadata: Metadata = {
  title: "Painel do Diretor",
  robots: { index: false, follow: false },
};

export default function AdminDashboardPage() {
  return <AdminCrm />;
}
