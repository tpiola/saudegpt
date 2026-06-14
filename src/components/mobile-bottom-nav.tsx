"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, type IconName } from "@/components/icons";

const NAV_ITEMS = [
  { href: "/dashboard",  icon: "home" as IconName, label: "Início" },
  { href: "/trilhas",    icon: "book" as IconName, label: "Trilhas" },
  { href: "/missoes",    icon: "target" as IconName, label: "Missões" },
  { href: "/ranking",   icon: "award" as IconName, label: "Ranking" },
  { href: "/jogos",     icon: "zap" as IconName, label: "Jogos" },
];

/** Bottom navigation bar for mobile screens (<768px) */
export function MobileBottomNav() {
  const pathname = usePathname();

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
          className={`mobile-nav-item ${isActive(item.href) ? "active" : ""} min-h-[44px] min-w-[44px]`}
          aria-current={isActive(item.href) ? "page" : undefined}
        >
          <span className="flex items-center justify-center" aria-hidden="true">
            <Icon name={item.icon} size={18} />
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
