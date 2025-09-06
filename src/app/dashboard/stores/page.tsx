import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { allStores, consumerData } from '@/lib/data';
import PageHeader from '@/components/page-header';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function StoresPage() {
  const subscribedStores = consumerData.subscribedStores;

  return (
    <>
      <PageHeader
        title="Find Stores"
        description="Search for businesses and manage your subscriptions."
      />
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search for stores..." className="pl-10 w-full max-w-lg" />
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Your Subscriptions</CardTitle>
            <CardDescription>
              Stores you are currently following.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {subscribedStores.map((store) => (
                <Card key={store.id} className="overflow-hidden">
                  <Image
                    src={store.imageUrl}
                    alt={store.name}
                    width={400}
                    height={200}
                    data-ai-hint={store.imageHint}
                    className="h-40 w-full object-cover"
                  />
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{store.name}</p>
                      <p className="text-sm text-muted-foreground">{store.category}</p>
                    </div>
                    <Button variant="secondary">Unsubscribe</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Discover New Stores</CardTitle>
            <CardDescription>
              Find new loyalty programs to join.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allStores.map((store) => (
                <Card key={store.id} className="overflow-hidden">
                  <Image
                    src={store.imageUrl}
                    alt={store.name}
                    width={400}
                    height={200}
                    data-ai-hint={store.imageHint}
                    className="h-40 w-full object-cover"
                  />
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{store.name}</p>
                      <p className="text-sm text-muted-foreground">{store.category}</p>
                    </div>
                    <Button>Subscribe</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
