import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  MapPin, 
  Star, 
  Users, 
  Heart,
  Filter,
  Grid3X3,
  List,
  Plus
} from 'lucide-react';
import PageHeader from '@/components/page-header';
import Image from 'next/image';
import { allStores, consumerData } from '@/lib/data';

export default function StoreSearchPage() {
  const subscribedStoreIds = consumerData.subscribedStores.map(store => store.id);
  const allAvailableStores = [...consumerData.subscribedStores, ...allStores];
  const uniqueStores = allAvailableStores.filter((store, index, self) => 
    index === self.findIndex(s => s.id === store.id)
  );

  const categories = [
    'All',
    'Coffee Shop',
    'Restaurant',
    'Bookstore',
    'Electronics',
    'Pet Supplies',
    'Gardening',
    'Arts & Crafts',
    'Fitness'
  ];

  return (
    <>
      <PageHeader
        title="Discover Stores"
        description="Find and subscribe to local businesses with amazing loyalty programs"
      />
      
      <div className="space-y-6">
        {/* Search and Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search for stores, restaurants, or services..." 
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <Button variant="outline" size="sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  Near Me
                </Button>
                <Button variant="outline" size="sm">
                  <Star className="h-4 w-4 mr-2" />
                  Top Rated
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Stores</TabsTrigger>
            <TabsTrigger value="subscribed">My Stores</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {/* View Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {uniqueStores.length} stores found
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="outline" size="sm">
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Store Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {uniqueStores.map((store) => {
                const isSubscribed = subscribedStoreIds.includes(store.id);
                
                return (
                  <Card key={store.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <Image
                        src={store.imageUrl}
                        alt={store.name}
                        width={400}
                        height={200}
                        data-ai-hint={store.imageHint}
                        className="h-32 w-full object-cover"
                      />
                      {isSubscribed && (
                        <Badge className="absolute top-2 left-2 bg-green-500">
                          Subscribed
                        </Badge>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 p-1 h-8 w-8"
                      >
                        <Heart className={`h-4 w-4 ${isSubscribed ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
                    </div>
                    
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-sm">{store.name}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-muted-foreground">4.5</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{store.category}</span>
                        </div>
                        
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Users className="h-3 w-3" />
                          <span>1.2k subscribers</span>
                        </div>
                        
                        <div className="flex gap-2 mt-3">
                          {isSubscribed ? (
                            <Button size="sm" variant="outline" className="flex-1">
                              View Store
                            </Button>
                          ) : (
                            <Button size="sm" className="flex-1">
                              <Plus className="h-3 w-3 mr-1" />
                              Subscribe
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="subscribed" className="space-y-6">
            {/* My Subscribed Stores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {consumerData.subscribedStores.map((store) => (
                <Card key={store.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={store.imageUrl}
                      alt={store.name}
                      width={400}
                      height={200}
                      data-ai-hint={store.imageHint}
                      className="h-32 w-full object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-green-500">
                      Subscribed
                    </Badge>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 p-1 h-8 w-8"
                    >
                      <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                    </Button>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-sm">{store.name}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-muted-foreground">4.5</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{store.category}</span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Users className="h-3 w-3" />
                        <span>1.2k subscribers</span>
                      </div>
                      
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" className="flex-1">
                          View Store
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            {/* Categories */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.slice(1).map((category) => (
                <Card key={category} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="space-y-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                        <span className="text-lg">🏪</span>
                      </div>
                      <h3 className="font-semibold text-sm">{category}</h3>
                      <p className="text-xs text-muted-foreground">
                        {Math.floor(Math.random() * 50) + 10} stores
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Featured Stores by Category */}
            <div className="space-y-4">
              <h3 className="font-semibold">Featured Stores</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {uniqueStores.slice(0, 6).map((store) => {
                  const isSubscribed = subscribedStoreIds.includes(store.id);
                  
                  return (
                    <Card key={store.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <Image
                          src={store.imageUrl}
                          alt={store.name}
                          width={400}
                          height={200}
                          data-ai-hint={store.imageHint}
                          className="h-24 w-full object-cover"
                        />
                        {isSubscribed && (
                          <Badge className="absolute top-2 left-2 bg-green-500 text-xs">
                            Subscribed
                          </Badge>
                        )}
                      </div>
                      
                      <CardContent className="p-3">
                        <div className="space-y-1">
                          <div className="flex items-start justify-between">
                            <h4 className="font-semibold text-sm">{store.name}</h4>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs text-muted-foreground">4.5</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{store.category}</span>
                          </div>
                          
                          <div className="flex gap-2 mt-2">
                            {isSubscribed ? (
                              <Button size="sm" variant="outline" className="flex-1 text-xs">
                                View Store
                              </Button>
                            ) : (
                              <Button size="sm" className="flex-1 text-xs">
                                <Plus className="h-3 w-3 mr-1" />
                                Subscribe
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
