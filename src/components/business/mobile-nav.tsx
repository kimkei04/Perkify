'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Users, Award, BarChart3, Bell, Palette, Brain, Sparkles, Building, DollarSign } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavItem = {
    href: string;
    label: string;
    icon: LucideIcon;
};

// Basic plan navigation items (for mobile, show most important features)
const navItems: NavItem[] = [
  { href: '/business', icon: LayoutDashboard, label: 'Home' },
  { href: '/business/customers', icon: Users, label: 'Customers' },
  { href: '/business/rewards', icon: Award, label: 'Rewards' },
  { href: '/business/billing', icon: DollarSign, label: 'Billing' },
  { href: '/business/profile', icon: Building, label: 'Profile' },
];

export function BusinessMobileNav() {
    const pathname = usePathname();

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-background border-t z-50">
            <nav className="grid h-full grid-cols-5 overflow-x-auto">
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
