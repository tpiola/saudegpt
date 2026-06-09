"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProgresso } from "@/lib/progress";

const NAV_ITEMS = [
  { href: "/dashboard",  icon: "🏠", label: "Início" },
  { href: "/trilhas",    icon: "📚", label: "Trilhas" },
  { href: "/missoes",    icon: "🎯", label: "Missões" },
  { href: "/ranking",   icon: "🏆", label: "Ranking" },
  { href: "/jogos",     icon: "🎮", label: "Jogos" },
];

/** Bottom navigation bar for mobile screens (<768px) */
export function MobileBottomNav() {
  const pathname = usePathname();
  const { xp, nivel, streak } = useProgresso();

  function isActive(href: string) {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  }

  return (
    <nav
      className="mobile-bottom-nav"
      role="navigation"
      aria-label="Navegação principal mobile"
    >
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`mobile-nav-item ${isActive(item.href) ? "active" : ""}`}
          aria-current={isActive(item.href) ? "page" : undefined}
        >
          <span className="text-lg leading-none" aria-hidden="true">
            {item.icon}
          </span>
          <span>{item.label}</span>
          {item.href === "/missoes" && (
            <span className="gamification-dot" aria-hidden="true" />
          )}
        </Link>
      ))}
    </nav>
  );
}
