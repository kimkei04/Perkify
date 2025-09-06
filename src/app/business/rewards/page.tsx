import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { businessData } from '@/lib/data';
import PageHeader from '@/components/page-header';
import { PlusCircle, Ticket, Milestone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function RewardsPage() {
  const rewards = businessData.rewardsProgram.rewards;

  return (
    <>
      <PageHeader
        title="Rewards Program"
        description="Create and manage your customer loyalty rewards."
      >
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Reward
        </Button>
      </PageHeader>
      <Card>
        <CardHeader>
          <CardTitle>Current Rewards</CardTitle>
          <CardDescription>
            These are the rewards your customers can earn.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {rewards.map((reward) => (
              <div
                key={reward.id}
                className="flex items-center justify-between space-x-4 rounded-lg border p-4"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    {reward.type === 'coupon' ? (
                      <Ticket className="h-6 w-6 text-primary" />
                    ) : (
                      <Milestone className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      {reward.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {reward.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline">
                    {reward.type === 'points'
                      ? `${reward.pointsRequired} pts`
                      : 'Coupon'}
                  </Badge>
                  <div className="mt-2">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
