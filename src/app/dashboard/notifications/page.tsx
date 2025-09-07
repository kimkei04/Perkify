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
  Bell, 
  Gift, 
  Ticket, 
  AlertCircle,
  CheckCircle,
  Clock,
  Store,
  Calendar,
  Star,
  Award,
  MessageSquare,
  Settings
} from 'lucide-react';
import PageHeader from '@/components/page-header';

export default function NotificationsPage() {
  const notifications = [
    {
      id: 'notif1',
      type: 'reward',
      title: 'Reward Unlocked!',
      message: 'You\'ve earned enough points for a free medium coffee at The Daily Grind',
      storeName: 'The Daily Grind',
      timestamp: '2 hours ago',
      read: false,
      priority: 'high'
    },
    {
      id: 'notif2',
      type: 'promo',
      title: 'New Promotion Available',
      message: '50% off all drinks at Fresh Eats this weekend only!',
      storeName: 'Fresh Eats',
      timestamp: '5 hours ago',
      read: false,
      priority: 'medium'
    },
    {
      id: 'notif3',
      type: 'expiry',
      title: 'Reward Expiring Soon',
      message: 'Your $5 off coupon at Bookworm Haven expires in 3 days',
      storeName: 'Bookworm Haven',
      timestamp: '1 day ago',
      read: true,
      priority: 'high'
    },
    {
      id: 'notif4',
      type: 'points',
      title: 'Points Added',
      message: 'You earned 12 points from your purchase at The Daily Grind',
      storeName: 'The Daily Grind',
      timestamp: '2 days ago',
      read: true,
      priority: 'low'
    },
    {
      id: 'notif5',
      type: 'welcome',
      title: 'Welcome to Fresh Eats!',
      message: 'Thanks for subscribing! Check out our loyalty program.',
      storeName: 'Fresh Eats',
      timestamp: '3 days ago',
      read: true,
      priority: 'low'
    },
    {
      id: 'notif6',
      type: 'special',
      title: 'Birthday Special',
      message: 'Happy Birthday! Enjoy a free dessert at any of your subscribed stores',
      storeName: 'Perkify',
      timestamp: '1 week ago',
      read: true,
      priority: 'medium'
    }
  ];

  const unreadNotifications = notifications.filter(n => !n.read);
  const readNotifications = notifications.filter(n => n.read);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'reward':
        return <Gift className="h-4 w-4 text-green-500" />;
      case 'promo':
        return <Ticket className="h-4 w-4 text-blue-500" />;
      case 'expiry':
        return <AlertCircle className="h-4 w-4 text-orange-500" />;
      case 'points':
        return <Award className="h-4 w-4 text-purple-500" />;
      case 'welcome':
        return <Star className="h-4 w-4 text-yellow-500" />;
      case 'special':
        return <Bell className="h-4 w-4 text-pink-500" />;
      default:
        return <Bell className="h-4 w-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-red-200 bg-red-50 dark:bg-red-950/20';
      case 'medium':
        return 'border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20';
      case 'low':
        return 'border-blue-200 bg-blue-50 dark:bg-blue-950/20';
      default:
        return '';
    }
  };

  return (
    <>
      <PageHeader
        title="Notifications"
        description="Stay updated with your rewards, promotions, and store updates"
      />
      
      <div className="space-y-6">
        {/* Notification Summary */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unread</CardTitle>
              <Bell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{unreadNotifications.length}</div>
              <p className="text-xs text-muted-foreground">
                New notifications
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rewards</CardTitle>
              <Gift className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {notifications.filter(n => n.type === 'reward').length}
              </div>
              <p className="text-xs text-muted-foreground">
                Reward notifications
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Promotions</CardTitle>
              <Ticket className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {notifications.filter(n => n.type === 'promo').length}
              </div>
              <p className="text-xs text-muted-foreground">
                Promo notifications
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Notifications</TabsTrigger>
            <TabsTrigger value="unread">Unread ({unreadNotifications.length})</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {/* All Notifications */}
            <div className="space-y-3">
              {notifications.map((notification) => (
                <Card 
                  key={notification.id} 
                  className={`hover:shadow-md transition-shadow ${!notification.read ? 'border-primary/20' : ''} ${getPriorityColor(notification.priority)}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-sm">{notification.title}</h4>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                              )}
                              <Badge variant="outline" className="text-xs">
                                {notification.type}
                              </Badge>
                            </div>
                            
                            <p className="text-sm text-muted-foreground">
                              {notification.message}
                            </p>
                            
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Store className="h-3 w-3" />
                                <span>{notification.storeName}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                <span>{notification.timestamp}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-1">
                            {notification.type === 'reward' && (
                              <Button size="sm" className="text-xs">
                                Claim
                              </Button>
                            )}
                            {notification.type === 'promo' && (
                              <Button size="sm" variant="outline" className="text-xs">
                                View Offer
                              </Button>
                            )}
                            {notification.type === 'expiry' && (
                              <Button size="sm" variant="destructive" className="text-xs">
                                Use Now
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="unread" className="space-y-4">
            {/* Unread Notifications */}
            <div className="space-y-3">
              {unreadNotifications.map((notification) => (
                <Card 
                  key={notification.id} 
                  className={`hover:shadow-md transition-shadow border-primary/20 ${getPriorityColor(notification.priority)}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-sm">{notification.title}</h4>
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <Badge variant="outline" className="text-xs">
                                {notification.type}
                              </Badge>
                            </div>
                            
                            <p className="text-sm text-muted-foreground">
                              {notification.message}
                            </p>
                            
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Store className="h-3 w-3" />
                                <span>{notification.storeName}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                <span>{notification.timestamp}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-1">
                            {notification.type === 'reward' && (
                              <Button size="sm" className="text-xs">
                                Claim
                              </Button>
                            )}
                            {notification.type === 'promo' && (
                              <Button size="sm" variant="outline" className="text-xs">
                                View Offer
                              </Button>
                            )}
                            {notification.type === 'expiry' && (
                              <Button size="sm" variant="destructive" className="text-xs">
                                Use Now
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            {/* Notification Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>
                  Choose what notifications you want to receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Reward Notifications</h4>
                      <p className="text-sm text-muted-foreground">
                        Get notified when you unlock new rewards
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Promotion Alerts</h4>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications about new deals and offers
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Expiry Warnings</h4>
                      <p className="text-sm text-muted-foreground">
                        Get reminded before rewards expire
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Points Updates</h4>
                      <p className="text-sm text-muted-foreground">
                        Notifications when you earn points
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Disabled
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Store Updates</h4>
                      <p className="text-sm text-muted-foreground">
                        News and updates from subscribed stores
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notification Frequency */}
            <Card>
              <CardHeader>
                <CardTitle>Notification Frequency</CardTitle>
                <CardDescription>
                  How often you want to receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Real-time</h4>
                      <p className="text-sm text-muted-foreground">Get notifications immediately</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Selected
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Daily Digest</h4>
                      <p className="text-sm text-muted-foreground">One summary per day</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Select
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Weekly Summary</h4>
                      <p className="text-sm text-muted-foreground">Weekly notification summary</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Select
                    </Button>
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
