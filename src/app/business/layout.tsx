import React from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Users,
  Award,
  Sparkles,
  Building,
  Bell,
  Settings,
} from 'lucide-react';

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { UserNav } from '@/components/user-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { Icons } from '@/components/icons';
import { MobileNav } from '@/components/mobile-nav';

const navItems = [
  { href: '/business', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/business/customers', icon: Users, label: 'Customers' },
  { href: '/business/rewards', icon: Award, label: 'Rewards Program' },
  { href: '/business/insights', icon: Sparkles, label: 'AI Insights' },
  { href: '#', icon: Building, label: 'Profile' },
];

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <Link href="/business" className="flex items-center gap-2 font-bold text-lg">
              <Icons.logo className="h-6 w-6 text-primary" />
              <span className="text-md">Perkify for Business</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton href={item.href} tooltip={item.label}>
                    <item.icon />
                    {item.label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
             <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton href="#" tooltip="Settings">
                    <Settings />
                    Settings
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-14 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30">
            <div className="flex items-center gap-2 md:hidden">
                <SidebarTrigger />
            </div>
            <div className="w-full flex-1">
              {/* Can add search bar here if needed */}
            </div>
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
            <div className='hidden md:block'>
              <UserNav />
            </div>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
          </main>
           <MobileNav navItems={navItems} />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
