import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bell, 
  Send, 
  Users, 
  Calendar, 
  Target,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import PageHeader from '@/components/page-header';
import { businessNotifications } from '@/lib/data';

export default function BusinessNotificationsPage() {
  const notifications = businessNotifications;

  return (
    <>
      <PageHeader
        title="Notifications Center"
        description="Send alerts and promotions to your subscribers"
      />
      
      <div className="grid gap-6">
        {/* Send New Notification */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="h-5 w-5" />
              Send New Notification
            </CardTitle>
            <CardDescription>
              Create and send notifications to your subscribers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Notification Type</label>
                <select className="w-full p-2 border rounded-md" title="Notification Type">
                  <option value="promo">Promotion</option>
                  <option value="alert">Alert</option>
                  <option value="reward">Reward Available</option>
                  <option value="general">General</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Target Audience</label>
                <select className="w-full p-2 border rounded-md" title="Target Audience">
                  <option value="all">All Subscribers</option>
                  <option value="active">Active Customers</option>
                  <option value="inactive">Inactive Customers</option>
                  <option value="high-value">High-Value Customers</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <Input placeholder="Enter notification subject" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea 
                placeholder="Enter your message here..."
                rows={4}
              />
            </div>
            
            <div className="flex gap-2">
              <Button>
                <Send className="h-4 w-4 mr-2" />
                Send Now
              </Button>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notification History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notification History
            </CardTitle>
            <CardDescription>
              View all sent notifications and their performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="recent" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                <TabsTrigger value="drafts">Drafts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="recent" className="space-y-4">
                {notifications.recent.map((notification) => (
                  <div key={notification.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{notification.title}</h3>
                          <Badge variant={notification.status === 'sent' ? 'default' : 'secondary'}>
                            {notification.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {notification.recipients} recipients
                          </span>
                          <span className="flex items-center gap-1">
                            <Target className="h-3 w-3" />
                            {notification.openRate}% open rate
                          </span>
                          <span>{notification.sentAt}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {notification.status === 'sent' ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : notification.status === 'scheduled' ? (
                          <Clock className="h-4 w-4 text-yellow-500" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-red-500" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="scheduled" className="space-y-4">
                {notifications.scheduled.map((notification) => (
                  <div key={notification.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{notification.title}</h3>
                          <Badge variant="secondary">Scheduled</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Scheduled for {notification.scheduledFor}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {notification.recipients} recipients
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Edit</Button>
                        <Button size="sm" variant="destructive">Cancel</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="drafts" className="space-y-4">
                {notifications.drafts.map((notification) => (
                  <div key={notification.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{notification.title}</h3>
                          <Badge variant="outline">Draft</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <div className="text-xs text-muted-foreground">
                          Last modified: {notification.lastModified}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Edit</Button>
                        <Button size="sm">Send</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
