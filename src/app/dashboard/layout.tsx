import React from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Store,
  History,
  UserCircle,
  Bell,
  Settings,
  Search,
  Receipt,
  Wallet,
  Bot,
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
import { DashboardMobileNav } from '@/components/dashboard/mobile-nav';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/dashboard/search', icon: Search, label: 'Find Stores' },
  { href: '/dashboard/stores', icon: Store, label: 'My Stores' },
  { href: '/dashboard/receipts', icon: Receipt, label: 'Receipts' },
  { href: '/dashboard/wallet', icon: Wallet, label: 'Rewards Wallet' },
  { href: '/dashboard/notifications', icon: Bell, label: 'Notifications' },
  { href: '/dashboard/chatbot', icon: Bot, label: 'AI Assistant' },
  { href: '/dashboard/history', icon: History, label: 'Purchase History' },
  { href: '/dashboard/profile', icon: UserCircle, label: 'Profile' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Desktop Sidebar - Hidden on mobile */}
        <Sidebar className="hidden md:flex">
          <SidebarHeader>
            <Link href="/dashboard" className="flex items-center gap-2 font-bold text-lg">
              <Icons.logo className="h-6 w-6 text-primary" />
              <span className="text-md">Perkify</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild tooltip={item.label}>
                    <Link href={item.href}>
                      <item.icon />
                      {item.label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Settings">
                  <Link href="/dashboard/settings">
                    <Settings />
                    Settings
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset className="flex-1">
          {/* Mobile Header */}
          <header className="flex h-14 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30">
            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <SidebarTrigger />
            </div>
            
            {/* Mobile Logo */}
            <div className="md:hidden flex items-center gap-2">
              <Icons.logo className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Perkify</span>
            </div>
            
            {/* Desktop Logo */}
            <div className="hidden md:flex items-center gap-2">
              <Icons.logo className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Perkify</span>
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
          
          {/* Main Content */}
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 pb-20 md:pb-6">
            {children}
          </main>
          
          {/* Mobile Navigation - Fixed at bottom */}
          <DashboardMobileNav />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
