import { redirect } from "next/navigation";
import { AdminPainel } from "@/components/admin-painel";

export const metadata = {
  title: "Dashboard Admin · Treinamento Atendente",
};

export default function AdminDashboardPage() {
  // Note: Client-side auth check is handled inside AdminPainel
  return <AdminPainel />;
}
