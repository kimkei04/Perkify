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

export default function BusinessSettingsPage() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="Manage your account and notification settings."
      />
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Update your account information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="owner@dailygrind.com" />
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
              Choose how you want to be notified.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="flex items-center space-x-2">
                <Checkbox id="email-notifications" defaultChecked />
                <Label htmlFor="email-notifications" className="font-normal">
                    Email notifications for new subscribers and reward redemptions.
                </Label>
            </div>
             <div className="flex items-center space-x-2">
                <Checkbox id="push-notifications" />
                <Label htmlFor="push-notifications" className="font-normal">
                    Push notifications for important account activity.
                </Label>
            </div>
             <Button>Save Preferences</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
