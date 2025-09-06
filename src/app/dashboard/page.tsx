import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Ticket } from 'lucide-react';
import { consumerData } from '@/lib/data';
import PageHeader from '@/components/page-header';
import Image from 'next/image';

export default function ConsumerDashboardPage() {
  const rewards = consumerData.rewards;
  const subscribedStores = consumerData.subscribedStores;

  return (
    <>
      <PageHeader
        title="Welcome back, Alex!"
        description="Here's a summary of your rewards and activity."
      />
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Your Active Rewards</CardTitle>
            <CardDescription>
              Keep track of your progress towards amazing rewards.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {rewards.map((reward) => (
                <div key={reward.id}>
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium">{reward.title} at {reward.storeName}</p>
                    <p className="text-sm text-muted-foreground">{reward.currentPoints} / {reward.targetPoints} pts</p>
                  </div>
                  <Progress value={(reward.currentPoints / reward.targetPoints) * 100} />
                  {reward.currentPoints >= reward.targetPoints && (
                     <div className='mt-2 flex items-center gap-2 text-sm text-accent-foreground font-semibold bg-accent/20 p-2 rounded-md'>
                        <Ticket className='h-4 w-4 text-accent'/>
                        <span>Reward Unlocked!</span>
                        <Button variant="link" size="sm" className='ml-auto text-accent'>Redeem</Button>
                     </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Your Subscribed Stores</CardTitle>
              <CardDescription>
                Businesses you follow.
              </CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/stores">
                    View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {subscribedStores.slice(0, 4).map((store) => (
                <Link key={store.id} href="#">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src={store.imageUrl}
                      alt={store.name}
                      width={400}
                      height={200}
                      data-ai-hint={store.imageHint}
                      className="h-32 w-full object-cover"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold">{store.name}</h3>
                        <p className="text-sm text-muted-foreground">{store.category}</p>
                    </div>
                </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
