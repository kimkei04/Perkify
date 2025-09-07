import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function BusinessProfilePage() {
  return (
    <>
      <PageHeader
        title="Business Profile"
        description="Manage your store's details and branding."
      />
      <Card>
        <CardHeader>
          <CardTitle>Store Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="business-name">Business Name</Label>
              <Input
                id="business-name"
                defaultValue="The Daily Grind"
              />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="business-description">Business Description</Label>
              <Textarea
                id="business-description"
                defaultValue="Your friendly neighborhood coffee shop."
                rows={4}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="logo">Logo</Label>
               <Input id="logo" type="file" />
            </div>
            <Button type="submit">Save Changes</Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
