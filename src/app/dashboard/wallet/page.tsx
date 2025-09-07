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
import { 
  Wallet, 
  Gift, 
  Ticket, 
  Award,
  Store,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Filter,
  Search
} from 'lucide-react';
import PageHeader from '@/components/page-header';
import { consumerData } from '@/lib/data';

// Progress Bar Component to avoid inline styles
function ProgressBar({ current, target }: { current: number; target: number }) {
  const percentage = Math.min((current / target) * 100, 100);
  
  // Determine which CSS class to use based on percentage
  const getProgressClass = () => {
    if (percentage >= 100) return 'progress-bar-100';
    if (percentage >= 75) return 'progress-bar-75';
    if (percentage >= 50) return 'progress-bar-50';
    if (percentage >= 25) return 'progress-bar-25';
    return 'progress-bar-25'; // Default to 25% for very low percentages
  };
  
  return (
    <div className="w-full bg-secondary rounded-full h-2 relative overflow-hidden">
      <div className={`progress-bar ${getProgressClass()}`}></div>
    </div>
  );
}

export default function RewardsWalletPage() {
  const rewards = consumerData.rewards;
  const subscribedStores = consumerData.subscribedStores;

  // Mock data for available rewards and coupons
  const availableRewards = [
    {
      id: 'reward1',
      storeName: 'The Daily Grind',
      title: 'Free Medium Coffee',
      description: 'Enjoy any medium coffee on us',
      type: 'reward',
      status: 'available',
      earnedDate: '2024-07-20',
      expiresDate: '2024-08-20',
      pointsUsed: 100
    },
    {
      id: 'reward2',
      storeName: 'Fresh Eats',
      title: 'Free Smoothie',
      description: 'Get a free smoothie with your next purchase',
      type: 'reward',
      status: 'available',
      earnedDate: '2024-07-17',
      expiresDate: '2024-08-17',
      pointsUsed: 50
    },
    {
      id: 'coupon1',
      storeName: 'Bookworm Haven',
      title: '$5 Off Your Next Purchase',
      description: 'Save $5 on any book purchase',
      type: 'coupon',
      status: 'available',
      earnedDate: '2024-07-18',
      expiresDate: '2024-08-18',
      discountAmount: 5
    },
    {
      id: 'reward3',
      storeName: 'The Daily Grind',
      title: '50% Off Any Pastry',
      description: 'Half price on your favorite treat',
      type: 'coupon',
      status: 'expired',
      earnedDate: '2024-06-15',
      expiresDate: '2024-07-15',
      discountAmount: 50
    }
  ];

  const expiredRewards = availableRewards.filter(r => r.status === 'expired');
  const activeRewards = availableRewards.filter(r => r.status === 'available');

  return (
    <>
      <PageHeader
        title="Rewards Wallet"
        description="Manage your rewards and coupons from all subscribed stores"
      />
      
      <div className="space-y-6">
        {/* Wallet Summary */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Rewards</CardTitle>
              <Gift className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeRewards.length}</div>
              <p className="text-xs text-muted-foreground">
                {expiredRewards.length} expired
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Value</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$47.50</div>
              <p className="text-xs text-muted-foreground">
                Available rewards value
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Points Balance</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">285</div>
              <p className="text-xs text-muted-foreground">
                Across all stores
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="available" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="available">Available</TabsTrigger>
            <TabsTrigger value="expired">Expired</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="available" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    All Stores
                  </Button>
                  <Button variant="outline" size="sm">
                    <Gift className="h-4 w-4 mr-2" />
                    Rewards Only
                  </Button>
                  <Button variant="outline" size="sm">
                    <Ticket className="h-4 w-4 mr-2" />
                    Coupons Only
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Expiring Soon
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Available Rewards */}
            <div className="space-y-4">
              {activeRewards.map((reward) => (
                <Card key={reward.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{reward.title}</h3>
                          <Badge variant={reward.type === 'reward' ? 'default' : 'secondary'}>
                            {reward.type === 'reward' ? 'Reward' : 'Coupon'}
                          </Badge>
                          <Badge variant="outline" className="text-green-600 border-green-200">
                            Available
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Store className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{reward.storeName}</span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">{reward.description}</p>
                        
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>Earned: {reward.earnedDate}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>Expires: {reward.expiresDate}</span>
                          </div>
                          {reward.pointsUsed && (
                            <div className="flex items-center gap-1">
                              <Award className="h-3 w-3" />
                              <span>{reward.pointsUsed} points</span>
                            </div>
                          )}
                          {reward.discountAmount && (
                            <div className="flex items-center gap-1">
                              <Ticket className="h-3 w-3" />
                              <span>${reward.discountAmount} off</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <Button>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Use Now
                        </Button>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="expired" className="space-y-6">
            {/* Expired Rewards */}
            <div className="space-y-4">
              {expiredRewards.map((reward) => (
                <Card key={reward.id} className="opacity-60">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{reward.title}</h3>
                          <Badge variant={reward.type === 'reward' ? 'default' : 'secondary'}>
                            {reward.type === 'reward' ? 'Reward' : 'Coupon'}
                          </Badge>
                          <Badge variant="destructive">
                            Expired
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Store className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{reward.storeName}</span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">{reward.description}</p>
                        
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>Earned: {reward.earnedDate}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            <span>Expired: {reward.expiresDate}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            {/* Progress Towards Rewards */}
            <div className="space-y-4">
              {rewards.map((reward) => (
                <Card key={reward.id}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{reward.title}</h3>
                            <Badge variant="outline">{reward.storeName}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Earn {reward.targetPoints} points to unlock this reward
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            {reward.currentPoints}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            / {reward.targetPoints} pts
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{Math.round((reward.currentPoints / reward.targetPoints) * 100)}%</span>
                        </div>
                        <ProgressBar 
                          current={reward.currentPoints} 
                          target={reward.targetPoints} 
                        />
                      </div>
                      
                      {reward.currentPoints >= reward.targetPoints && (
                        <div className="flex items-center gap-2 text-sm text-green-600 font-semibold bg-green-50 dark:bg-green-950/20 p-3 rounded-md">
                          <Gift className="h-4 w-4" />
                          <span>Reward Unlocked!</span>
                          <Button variant="link" size="sm" className="ml-auto text-green-600">
                            Claim Reward
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Manage your rewards and discover new opportunities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Gift className="h-6 w-6" />
                <span>Browse Rewards</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Store className="h-6 w-6" />
                <span>Find Stores</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Award className="h-6 w-6" />
                <span>Earn Points</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
