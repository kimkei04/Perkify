import PageHeader from '@/components/page-header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ProfilePage() {
  return (
    <>
      <PageHeader
        title="Profile"
        description="Manage your personal information."
      />
      <Card>
        <CardHeader>
          <CardTitle>Your Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="flex items-center gap-4">
               <Avatar className="h-20 w-20">
                <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="@user" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <Input id="picture" type="file" className="max-w-xs" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" defaultValue="Alex" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" defaultValue="Doe" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="alex.doe@example.com" />
            </div>
            <Button type="submit">Save Changes</Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
