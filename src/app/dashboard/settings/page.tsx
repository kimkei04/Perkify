import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="Manage your account and app settings."
      />
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Update your account information and password.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="alex.doe@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">New Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button>Save Changes</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Choose what you want to be notified about.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
                <Checkbox id="promo-notifications" defaultChecked />
                <Label htmlFor="promo-notifications" className="font-normal">
                    New promos from your subscribed stores
                </Label>
            </div>
             <div className="flex items-center space-x-2">
                <Checkbox id="reward-notifications" defaultChecked />
                <Label htmlFor="reward-notifications" className="font-normal">
                    When you earn a new reward
                </Label>
            </div>
             <div className="flex items-center space-x-2">
                <Checkbox id="expiry-notifications" />
                <Label htmlFor="expiry-notifications" className="font-normal">
                    When a reward is about to expire
                </Label>
            </div>
            <Separator />
            <Button>Save Preferences</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
