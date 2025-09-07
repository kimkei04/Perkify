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
  User,
  BarChart3,
  Palette,
  Brain,
  DollarSign,
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
import { BusinessMobileNav } from '@/components/business/mobile-nav';
import { saasPlans, currentUserPlan } from '@/lib/data';

// Define navigation items with plan requirements
const allNavItems = [
  { href: '/business', icon: LayoutDashboard, label: 'Dashboard', plan: 'basic' },
  { href: '/business/customers', icon: Users, label: 'Customers', plan: 'basic' },
  { href: '/business/rewards', icon: Award, label: 'Rewards Program', plan: 'basic' },
  { href: '/business/analytics', icon: BarChart3, label: 'Analytics', plan: 'basic' },
  { href: '/business/notifications', icon: Bell, label: 'Notifications', plan: 'basic' },
  { href: '/business/pro-features', icon: Palette, label: 'Pro Features', plan: 'advanced' },
  { href: '/business/advanced-features', icon: Brain, label: 'Advanced', plan: 'pro' },
  { href: '/business/insights', icon: Sparkles, label: 'AI Insights', plan: 'advanced' },
  { href: '/business/profile', icon: Building, label: 'Profile', plan: 'basic' },
];

// Filter navigation items based on current plan
const getNavItemsForPlan = (plan: string) => {
  const planHierarchy = { basic: 0, advanced: 1, pro: 2 };
  const currentPlanLevel = planHierarchy[plan as keyof typeof planHierarchy] || 0;
  
  return allNavItems.filter(item => {
    const itemPlanLevel = planHierarchy[item.plan as keyof typeof planHierarchy] || 0;
    return itemPlanLevel <= currentPlanLevel;
  });
};

const navItems = getNavItemsForPlan(currentUserPlan);

export default function BusinessLayout({
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
            <Link href="/business" className="flex items-center gap-2 font-bold text-lg">
              <Icons.logo className="h-6 w-6 text-primary" />
              <span className="text-md">Perkify for Business</span>
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
                  <SidebarMenuButton asChild tooltip="Billing & Plans">
                    <Link href="/business/billing">
                      <DollarSign />
                      Billing & Plans
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Settings">
                    <Link href="/business/settings">
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
              <span className="font-bold text-lg">Perkify for Business</span>
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
          <BusinessMobileNav />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
