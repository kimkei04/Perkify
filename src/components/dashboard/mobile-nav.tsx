'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Store, History, UserCircle, Search, Receipt, Wallet, Bell, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavItem = {
    href: string;
    label: string;
    icon: LucideIcon;
};

const navItems: NavItem[] = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Home' },
  { href: '/dashboard/search', icon: Search, label: 'Search' },
  { href: '/dashboard/wallet', icon: Wallet, label: 'Wallet' },
  { href: '/dashboard/notifications', icon: Bell, label: 'Alerts' },
  { href: '/dashboard/chatbot', icon: Bot, label: 'AI' },
];

export function DashboardMobileNav() {
    const pathname = usePathname();

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-background/95 backdrop-blur border-t border-border z-50">
            <nav className="grid h-full grid-cols-5">
                {navItems.map(({ href, label, icon: Icon }) => (
                    <Link
                        key={href}
                        href={href}
                        className={cn(
                            "flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors px-2",
                            pathname === href
                                ? "text-primary bg-primary/10"
                                : "text-muted-foreground hover:text-primary hover:bg-accent"
                        )}
                    >
                        <Icon className="h-5 w-5" />
                        <span className="truncate">{label}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
}
