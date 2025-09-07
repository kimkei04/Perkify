import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Star, 
  Users, 
  Award,
  Gift,
  Ticket,
  Calendar,
  Share2,
  Heart,
  ArrowLeft
} from 'lucide-react';
import PageHeader from '@/components/page-header';
import Image from 'next/image';
import Link from 'next/link';
import { businessData, consumerData } from '@/lib/data';

interface StorePageProps {
  params: {
    id: string;
  };
}

export default function StorePage({ params }: StorePageProps) {
  // In a real app, this would fetch store data based on the ID
  const store = businessData;
  const userRewards = consumerData.rewards.filter(reward => 
    reward.storeName === store.name
  );
  
  const isSubscribed = consumerData.subscribedStores.some(s => s.id === params.id);

  return (
    <>
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/search">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Search
          </Link>
        </Button>
      </div>

      <PageHeader
        title={store.name}
        description="Coffee shop with amazing loyalty rewards"
      />
      
      <div className="space-y-6">
        {/* Store Header */}
        <Card className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src="https://picsum.photos/800/300?random=coffee"
              alt={store.name}
              width={800}
              height={300}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-2xl font-bold">{store.name}</h1>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">4.5 (1.2k reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">1.2k subscribers</span>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              <Button size="sm" variant="ghost" className="bg-white/20 text-white hover:bg-white/30">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="bg-white/20 text-white hover:bg-white/30">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Store Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">123 Main St, Downtown</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Open 6 AM - 8 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">(555) 123-4567</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                {isSubscribed ? (
                  <Button className="w-full">
                    <Award className="h-4 w-4 mr-2" />
                    View My Rewards
                  </Button>
                ) : (
                  <Button className="w-full">
                    <Users className="h-4 w-4 mr-2" />
                    Subscribe to Rewards
                  </Button>
                )}
                <Button variant="outline" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Hours
                </Button>
              </div>

              {/* Stats */}
              <div className="space-y-3">
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">1,247</div>
                  <div className="text-sm text-muted-foreground">Total Points Earned</div>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">12</div>
                  <div className="text-sm text-muted-foreground">Rewards Redeemed</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="rewards" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="promotions">Promotions</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <TabsContent value="rewards" className="space-y-6">
            {/* My Progress */}
            {userRewards.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    My Progress
                  </CardTitle>
                  <CardDescription>
                    Track your progress towards rewards
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userRewards.map((reward) => (
                      <div key={reward.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">{reward.title}</h4>
                          <span className="text-sm text-muted-foreground">
                            {reward.currentPoints} / {reward.targetPoints} pts
                          </span>
                        </div>
                        <Progress value={(reward.currentPoints / reward.targetPoints) * 100} />
                        {reward.currentPoints >= reward.targetPoints && (
                          <div className="flex items-center gap-2 text-sm text-green-600 font-semibold bg-green-50 dark:bg-green-950/20 p-2 rounded-md">
                            <Gift className="h-4 w-4" />
                            <span>Reward Unlocked!</span>
                            <Button variant="link" size="sm" className="ml-auto text-green-600">
                              Redeem
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Available Rewards */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5" />
                  Available Rewards
                </CardTitle>
                <CardDescription>
                  Earn points and unlock amazing rewards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {store.rewardsProgram.rewards.map((reward) => (
                    <div key={reward.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{reward.title}</h4>
                            <Badge variant={reward.type === 'coupon' ? 'secondary' : 'default'}>
                              {reward.type === 'coupon' ? 'Coupon' : 'Points'}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{reward.description}</p>
                          {reward.type === 'points' && (
                            <div className="flex items-center gap-1 text-sm">
                              <Award className="h-3 w-3" />
                              <span>{reward.pointsRequired} points required</span>
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">
                            {reward.type === 'coupon' ? 'Available Now' : `${reward.pointsRequired} pts`}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* How to Earn Points */}
            <Card>
              <CardHeader>
                <CardTitle>How to Earn Points</CardTitle>
                <CardDescription>
                  Ways to earn points at {store.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Make a Purchase</h4>
                      <p className="text-sm text-muted-foreground">
                        Earn {store.rewardsProgram.pointsPerDollar} point per dollar spent
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Visit Daily</h4>
                      <p className="text-sm text-muted-foreground">
                        Earn bonus points for consecutive visits
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Refer Friends</h4>
                      <p className="text-sm text-muted-foreground">
                        Get 50 bonus points for each friend who joins
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="promotions" className="space-y-6">
            {/* Active Promotions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5" />
                  Active Promotions
                </CardTitle>
                <CardDescription>
                  Current deals and special offers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Happy Hour Special",
                      description: "50% off all drinks from 2-4 PM",
                      validUntil: "Dec 31, 2024",
                      type: "discount"
                    },
                    {
                      title: "Double Points Weekend",
                      description: "Earn 2x points on all purchases",
                      validUntil: "This weekend only",
                      type: "points"
                    },
                    {
                      title: "Free Pastry with Coffee",
                      description: "Get a free croissant with any large coffee",
                      validUntil: "While supplies last",
                      type: "free"
                    }
                  ].map((promo, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{promo.title}</h4>
                            <Badge variant="default" className="bg-green-100 text-green-800">
                              Active
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{promo.description}</p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>Valid until {promo.validUntil}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Use Offer
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about" className="space-y-6">
            {/* About Store */}
            <Card>
              <CardHeader>
                <CardTitle>About {store.name}</CardTitle>
                <CardDescription>
                  Learn more about this business
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Welcome to {store.name}, your neighborhood coffee shop serving premium coffee, 
                  fresh pastries, and a warm atmosphere. We're committed to providing exceptional 
                  service and quality products to our community.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium">What We Offer</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>Premium Coffee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>Fresh Pastries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>Free WiFi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>Outdoor Seating</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Store Hours</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>6:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>7:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
