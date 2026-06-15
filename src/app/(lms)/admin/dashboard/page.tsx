import type { Metadata } from "next";
import { AdminCrm } from "@/components/admin-crm";
import { ChatLogViewer } from "@/components/chat-log-viewer";

export const metadata: Metadata = {
  title: "Painel do Diretor",
  robots: { index: false, follow: false },
};

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <AdminCrm />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <ChatLogViewer />
      </div>
    </div>
  );
}
