import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BusinessChart } from '@/components/business/charts';
import { 
  TrendingUp, 
  Users, 
  Award, 
  DollarSign,
  Eye,
  MousePointer,
  Calendar,
  Download
} from 'lucide-react';
import PageHeader from '@/components/page-header';
import { businessAnalyticsData } from '@/lib/data';
import type { ChartConfig } from '@/components/ui/chart';

const engagementChartConfig = {
  engagement: {
    label: 'Engagement Rate',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

const redemptionChartConfig = {
  redemptions: {
    label: 'Redemptions',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

const customerGrowthConfig = {
  customers: {
    label: 'New Customers',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;

export default function BusinessAnalyticsPage() {
  const analytics = businessAnalyticsData;

  return (
    <>
      <PageHeader
        title="Analytics Dashboard"
        description="Comprehensive insights into your business performance and customer engagement"
      />
      
      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.totalCustomers}</div>
            <p className="text-xs text-muted-foreground">
              +{analytics.customerGrowth}% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.engagementRate}%</div>
            <p className="text-xs text-muted-foreground">
              +{analytics.engagementGrowth}% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Redemption Rate</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.redemptionRate}%</div>
            <p className="text-xs text-muted-foreground">
              +{analytics.redemptionGrowth}% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue Impact</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${analytics.revenueImpact}</div>
            <p className="text-xs text-muted-foreground">
              +{analytics.revenueGrowth}% from loyalty program
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="redemptions">Redemptions</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Customer Growth</CardTitle>
                <CardDescription>Monthly new customer acquisition</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <BusinessChart 
                  data={analytics.customerGrowthData} 
                  config={customerGrowthConfig} 
                  type="bar" 
                  dataKey="customers" 
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Trends</CardTitle>
                <CardDescription>Monthly revenue from loyalty program</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <BusinessChart 
                  data={analytics.revenueData} 
                  config={engagementChartConfig} 
                  type="line" 
                  dataKey="revenue" 
                />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Top Performing Rewards</CardTitle>
              <CardDescription>Most popular rewards by redemption count</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analytics.topRewards.map((reward, index) => (
                  <div key={reward.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">#{index + 1}</Badge>
                      <div>
                        <h4 className="font-medium">{reward.title}</h4>
                        <p className="text-sm text-muted-foreground">{reward.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{reward.redemptions} redemptions</div>
                      <div className="text-sm text-muted-foreground">{reward.conversionRate}% conversion</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Engagement Trends</CardTitle>
                <CardDescription>Daily engagement rates over time</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <BusinessChart 
                  data={analytics.engagementData} 
                  config={engagementChartConfig} 
                  type="line" 
                  dataKey="engagement" 
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engagement by Channel</CardTitle>
                <CardDescription>Where customers engage most</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <BusinessChart 
                  data={analytics.engagementByChannel} 
                  config={engagementChartConfig} 
                  type="pie" 
                  dataKey="value" 
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="redemptions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Redemption Trends</CardTitle>
              <CardDescription>Monthly reward redemptions</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <BusinessChart 
                data={analytics.redemptionData} 
                config={redemptionChartConfig} 
                type="bar" 
                dataKey="redemptions" 
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Customer Segments</CardTitle>
                <CardDescription>Breakdown of customer types</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <BusinessChart 
                  data={analytics.customerSegments} 
                  config={customerGrowthConfig} 
                  type="pie" 
                  dataKey="value" 
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Lifetime Value</CardTitle>
                <CardDescription>Average customer value over time</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <BusinessChart 
                  data={analytics.customerLifetimeValue} 
                  config={customerGrowthConfig} 
                  type="line" 
                  dataKey="value" 
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end mt-6">
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>
    </>
  );
}
