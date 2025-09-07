'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Store, History, UserCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavItem = {
    href: string;
    label: string;
    icon: LucideIcon;
};

const navItems: NavItem[] = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/dashboard/stores', icon: Store, label: 'Stores' },
  { href: '/dashboard/history', icon: History, label: 'History' },
  { href: '#', icon: UserCircle, label: 'Profile' },
];

export function DashboardMobileNav() {
    const pathname = usePathname();

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-background border-t z-50">
            <nav className="grid h-full grid-cols-4">
                {navItems.map(({ href, label, icon: Icon }) => (
                    <Link
                        key={href}
                        href={href}
                        className={cn(
                            "flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors",
                            pathname === href
                                ? "text-primary"
                                : "text-muted-foreground hover:text-primary"
                        )}
                    >
                        <Icon className="h-5 w-5" />
                        <span>{label}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
}
