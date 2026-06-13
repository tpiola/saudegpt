"use client";

import dynamic from "next/dynamic";

const ChatBotIA = dynamic(() => import("@/components/chatbot-ia").then((m) => ({ default: m.ChatBotIA })), {
  ssr: false,
  loading: () => null,
});

export default function ChatWrapper() {
  return <ChatBotIA />;
}
