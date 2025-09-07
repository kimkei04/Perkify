import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Palette, 
  Bot, 
  Crown, 
  CheckCircle,
  Settings,
  Upload,
  Download,
  Eye,
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import PageHeader from '@/components/page-header';
import { saasPlans, currentUserPlan } from '@/lib/data';

export default function BusinessProFeaturesPage() {
  const currentPlan = saasPlans[currentUserPlan as keyof typeof saasPlans];
  const hasAccess = currentUserPlan === 'advanced' || currentUserPlan === 'pro';
  
  return (
    <>
      <PageHeader
        title="Pro Features"
        description="Unlock advanced features to enhance your loyalty program"
      />
      
      {/* Plan Access Notice */}
      {!hasAccess && (
        <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20 mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-full">
                  <Crown className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-orange-800 dark:text-orange-200">
                    Upgrade Required
                  </h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Pro Features require Advanced or Pro plan. Upgrade to unlock these powerful tools.
                  </p>
                </div>
              </div>
              <Button asChild>
                <a href="/business/billing">
                  Upgrade Plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      
      <div className="space-y-6">
        {/* Pro Status Banner */}
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Crown className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Perkify Pro</h3>
                  <p className="text-sm text-muted-foreground">
                    You're currently on the Pro plan with access to all premium features
                  </p>
                </div>
              </div>
              <Badge variant="default" className="bg-primary">
                <Crown className="h-3 w-3 mr-1" />
                Pro Active
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="branding" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="branding">Branded Coupons</TabsTrigger>
            <TabsTrigger value="chatbot">AI Chatbot</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="branding" className="space-y-6">
            {/* Branded Coupon Designer */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Branded Coupon Designer
                </CardTitle>
                <CardDescription>
                  Create custom branded coupons and promotional materials
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Design Tools */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Design Tools</h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Upload Logo</label>
                        <Button size="sm" variant="outline">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload
                        </Button>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Brand Colors</label>
                        <div className="flex gap-2">
                          <div className="w-8 h-8 bg-primary rounded border"></div>
                          <div className="w-8 h-8 bg-secondary rounded border"></div>
                          <div className="w-8 h-8 bg-accent rounded border"></div>
                          <Button size="sm" variant="outline">Customize</Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Coupon Template</label>
                        <select className="w-full p-2 border rounded-md" title="Coupon Template">
                          <option value="classic">Classic Design</option>
                          <option value="modern">Modern Design</option>
                          <option value="minimal">Minimal Design</option>
                          <option value="bold">Bold Design</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Preview */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Preview</h4>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
                        <div className="text-center space-y-3">
                          <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                            <Crown className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="font-bold text-lg">The Daily Grind</h3>
                          <div className="bg-white rounded-lg p-4 shadow-sm">
                            <div className="text-2xl font-bold text-primary">20% OFF</div>
                            <p className="text-sm text-muted-foreground">Your next purchase</p>
                            <div className="text-xs text-muted-foreground mt-2">
                              Valid until Dec 31, 2024
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coupon Templates */}
            <Card>
              <CardHeader>
                <CardTitle>Coupon Templates</CardTitle>
                <CardDescription>
                  Choose from pre-designed templates or create your own
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: 'Discount Coupon', type: 'discount', active: true },
                    { name: 'Free Item', type: 'free', active: false },
                    { name: 'Buy One Get One', type: 'bogo', active: false },
                    { name: 'Points Multiplier', type: 'points', active: false },
                    { name: 'Birthday Special', type: 'birthday', active: false },
                    { name: 'Loyalty Bonus', type: 'bonus', active: false },
                  ].map((template) => (
                    <div key={template.type} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{template.name}</h4>
                        <Switch checked={template.active} />
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {template.type === 'discount' && 'Percentage or fixed amount discount'}
                        {template.type === 'free' && 'Free item with purchase'}
                        {template.type === 'bogo' && 'Buy one get one free offer'}
                        {template.type === 'points' && 'Earn extra points on purchases'}
                        {template.type === 'birthday' && 'Special birthday offer'}
                        {template.type === 'bonus' && 'Bonus reward for loyal customers'}
                      </p>
                      <Button size="sm" variant="outline" className="w-full">
                        Customize
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chatbot" className="space-y-6">
            {/* AI Chatbot Setup */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  AI Customer Service Chatbot
                </CardTitle>
                <CardDescription>
                  Set up an intelligent chatbot to help your customers 24/7
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Enable AI Chatbot</h4>
                    <p className="text-sm text-muted-foreground">
                      Automatically answer customer questions about rewards and store info
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Chatbot Personality</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { name: 'Friendly', description: 'Warm and welcoming tone', active: true },
                      { name: 'Professional', description: 'Formal and business-like', active: false },
                      { name: 'Casual', description: 'Relaxed and conversational', active: false },
                    ].map((personality) => (
                      <div key={personality.name} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium">{personality.name}</h5>
                          <Switch checked={personality.active} />
                        </div>
                        <p className="text-sm text-muted-foreground">{personality.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Knowledge Base</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Store hours and location</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Reward program details</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Current promotions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">FAQ responses</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Custom Responses</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium">Welcome Message</label>
                      <Textarea 
                        placeholder="Hi! I'm here to help with your questions about our rewards program..."
                        rows={3}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Fallback Message</label>
                      <Textarea 
                        placeholder="I'm not sure about that. Let me connect you with our team..."
                        rows={2}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chatbot Analytics */}
            <Card>
              <CardHeader>
                <CardTitle>Chatbot Performance</CardTitle>
                <CardDescription>
                  Track how your chatbot is helping customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">1,247</div>
                    <div className="text-sm text-muted-foreground">Total Conversations</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-500">89%</div>
                    <div className="text-sm text-muted-foreground">Resolution Rate</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-500">4.2s</div>
                    <div className="text-sm text-muted-foreground">Avg Response Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            {/* Pro Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Pro Settings
                </CardTitle>
                <CardDescription>
                  Configure your Pro features and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Advanced Analytics</h4>
                      <p className="text-sm text-muted-foreground">
                        Access detailed customer insights and behavior analytics
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Priority Support</h4>
                      <p className="text-sm text-muted-foreground">
                        Get faster response times and dedicated support
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">White-label Options</h4>
                      <p className="text-sm text-muted-foreground">
                        Remove Perkify branding from customer-facing elements
                      </p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">API Access</h4>
                      <p className="text-sm text-muted-foreground">
                        Integrate with your existing systems via REST API
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Usage Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Usage Statistics</CardTitle>
                <CardDescription>
                  Track your Pro feature usage this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Branded Coupons Created</span>
                      <span className="text-sm font-medium">24 / 100</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Chatbot Conversations</span>
                      <span className="text-sm font-medium">1,247 / 5,000</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-1/4"></div>
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
