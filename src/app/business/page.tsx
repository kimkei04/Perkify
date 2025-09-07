import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Users, Award, Ticket, ArrowUpRight } from 'lucide-react';
import { businessAnalytics } from '@/lib/data';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { BusinessChart } from '@/components/business/charts';
import type { ChartConfig } from '@/components/ui/chart';
import { saasPlans, currentUserPlan } from '@/lib/data';

const chartData = businessAnalytics.monthlySignups;
const lineChartData = businessAnalytics.revenue;

const chartConfig = {
  signups: {
    label: 'Signups',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

const lineChartConfig = {
  revenue: {
    label: 'Revenue',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export default function BusinessDashboardPage() {
  const currentPlan = saasPlans[currentUserPlan as keyof typeof saasPlans];
  
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Here's an overview of your business performance."
      />
      
      {/* Plan Status Banner */}
      <Card className="border-primary/20 bg-primary/5 mb-6">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Current Plan: {currentPlan.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentPlan.price === 0 ? 'Free plan' : `$${currentPlan.price}/${currentPlan.billing}`}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="/business/billing">Manage Plan</a>
              </Button>
              {currentUserPlan !== 'pro' && (
                <Button size="sm" asChild>
                  <a href="/business/billing">Upgrade</a>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <span className="text-muted-foreground">
              <Award className="h-4 w-4" />
            </span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              New Subscribers
            </CardTitle>
            <span className="text-muted-foreground">
              <Users className="h-4 w-4" />
            </span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rewards Redeemed</CardTitle>
            <span className="text-muted-foreground">
              <Ticket className="h-4 w-4" />
            </span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <span className="text-muted-foreground">
              <Users className="h-4 w-4" />
            </span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Monthly subscriber signups.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <BusinessChart 
              data={chartData} 
              config={chartConfig} 
              type="bar" 
              dataKey="signups" 
            />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Revenue Growth</CardTitle>
            <CardDescription>Revenue trends over the last 6 months.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <BusinessChart 
              data={lineChartData} 
              config={lineChartConfig} 
              type="line" 
              dataKey="revenue" 
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
