import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Bot, 
  Zap, 
  TrendingUp,
  Users,
  Target,
  Calendar,
  Send,
  BarChart3,
  MessageSquare,
  Settings,
  Play,
  Pause,
  CheckCircle,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import PageHeader from '@/components/page-header';
import { saasPlans, currentUserPlan } from '@/lib/data';

export default function BusinessAdvancedFeaturesPage() {
  const currentPlan = saasPlans[currentUserPlan as keyof typeof saasPlans];
  const hasAccess = currentUserPlan === 'pro';
  
  return (
    <>
      <PageHeader
        title="Advanced Features"
        description="AI-powered insights, automation, and advanced analytics for your business"
      />
      
      {/* Plan Access Notice */}
      {!hasAccess && (
        <Card className="border-red-200 bg-red-50 dark:bg-red-950/20 mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-full">
                  <Brain className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-red-800 dark:text-red-200">
                    Pro Plan Required
                  </h3>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Advanced Features require Pro plan. Upgrade to access AI-powered insights and automation.
                  </p>
                </div>
              </div>
              <Button asChild>
                <a href="/business/billing">
                  Upgrade to Pro
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      
      <div className="space-y-6">
        {/* Advanced Status Banner */}
        <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-full">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Perkify Advanced</h3>
                  <p className="text-sm text-muted-foreground">
                    Unlock AI-powered insights and marketing automation
                  </p>
                </div>
              </div>
              <Badge variant="default" className="bg-purple-600">
                <Brain className="h-3 w-3 mr-1" />
                Advanced Active
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="ai-insights" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
            <TabsTrigger value="ai-assistant">AI Assistant</TabsTrigger>
            <TabsTrigger value="automation">Marketing Automation</TabsTrigger>
          </TabsList>

          <TabsContent value="ai-insights" className="space-y-6">
            {/* AI Insights Dashboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI Insights Dashboard
                </CardTitle>
                <CardDescription>
                  Predictive analytics and intelligent recommendations for your business
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Key Insights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="border-green-200 bg-green-50 dark:bg-green-950/20">
                    <CardContent className="pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800 dark:text-green-200">Growth Opportunity</span>
                      </div>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Your coffee sales peak at 8-10 AM. Consider targeted promotions during this window.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                    <CardContent className="pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Customer Insight</span>
                      </div>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        23% of customers are at risk of churning. Focus retention efforts on this segment.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/20">
                    <CardContent className="pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-medium text-purple-800 dark:text-purple-200">Optimization</span>
                      </div>
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        Reducing reward threshold by 20 points could increase redemption rate by 15%.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Predictive Analytics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Revenue Forecast</CardTitle>
                      <CardDescription>AI-predicted revenue for next 3 months</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Next Month</span>
                          <span className="font-semibold">$12,450</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Month +2</span>
                          <span className="font-semibold">$13,200</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Month +3</span>
                          <span className="font-semibold">$14,100</span>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                        <p className="text-sm text-green-700 dark:text-green-300">
                          <strong>Trend:</strong> +8.5% growth expected with current strategies
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Customer Behavior</CardTitle>
                      <CardDescription>AI analysis of customer patterns</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm">High-value customers prefer morning visits</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm">Weekend customers spend 23% more</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm">Mobile app users redeem 40% more rewards</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* AI Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle>AI Recommendations</CardTitle>
                    <CardDescription>Actionable insights to improve your business</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Optimize Reward Timing",
                          description: "Send reward notifications on Tuesday mornings for 15% higher engagement",
                          priority: "High",
                          impact: "+12% engagement"
                        },
                        {
                          title: "Personalize Offers",
                          description: "Create targeted offers for customers who haven't visited in 2+ weeks",
                          priority: "Medium",
                          impact: "+8% retention"
                        },
                        {
                          title: "Expand Peak Hours",
                          description: "Consider extending morning hours to capture more coffee sales",
                          priority: "Low",
                          impact: "+5% revenue"
                        }
                      ].map((rec, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="text-sm font-semibold text-primary">{index + 1}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium">{rec.title}</h4>
                              <Badge variant={rec.priority === 'High' ? 'destructive' : rec.priority === 'Medium' ? 'default' : 'secondary'}>
                                {rec.priority}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{rec.description}</p>
                            <div className="flex items-center gap-4">
                              <span className="text-sm font-medium text-green-600">{rec.impact}</span>
                              <Button size="sm" variant="outline">Implement</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-assistant" className="space-y-6">
            {/* AI Business Assistant */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  AI Business Assistant
                </CardTitle>
                <CardDescription>
                  Your intelligent business advisor powered by AI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Chat Interface */}
                <div className="border rounded-lg p-4 h-96 overflow-y-auto bg-muted/20">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                          <p className="text-sm">Hello! I'm your AI business assistant. I can help you analyze your data, optimize your loyalty program, and answer questions about your business performance. What would you like to know?</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 justify-end">
                      <div className="flex-1 max-w-xs">
                        <div className="bg-primary text-primary-foreground rounded-lg p-3 shadow-sm">
                          <p className="text-sm">How can I increase customer retention?</p>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <span className="text-xs font-semibold">You</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                          <p className="text-sm">Based on your data, I recommend:</p>
                          <ul className="text-sm mt-2 space-y-1">
                            <li>• Implement a win-back campaign for inactive customers</li>
                            <li>• Create tiered rewards to encourage higher spending</li>
                            <li>• Send personalized offers based on purchase history</li>
                            <li>• Focus on your top 20% customers who drive 80% of revenue</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="flex gap-2">
                  <Input placeholder="Ask me anything about your business..." />
                  <Button>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                {/* Quick Actions */}
                <div>
                  <h4 className="font-medium mb-3">Quick Actions</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {[
                      "Analyze customer trends",
                      "Optimize reward program",
                      "Generate marketing ideas",
                      "Review performance metrics"
                    ].map((action) => (
                      <Button key={action} variant="outline" size="sm" className="text-xs">
                        {action}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Assistant Capabilities */}
            <Card>
              <CardHeader>
                <CardTitle>Assistant Capabilities</CardTitle>
                <CardDescription>
                  What your AI assistant can help you with
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: BarChart3, title: "Data Analysis", description: "Analyze customer behavior and sales patterns" },
                    { icon: Target, title: "Strategy Planning", description: "Develop marketing and retention strategies" },
                    { icon: Users, title: "Customer Insights", description: "Understand customer segments and preferences" },
                    { icon: TrendingUp, title: "Performance Optimization", description: "Identify opportunities for growth" },
                    { icon: MessageSquare, title: "Content Creation", description: "Generate marketing copy and messages" },
                    { icon: Settings, title: "Process Improvement", description: "Optimize business operations" }
                  ].map((capability) => (
                    <div key={capability.title} className="flex items-start gap-3 p-3 border rounded-lg">
                      <capability.icon className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm">{capability.title}</h4>
                        <p className="text-xs text-muted-foreground">{capability.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="automation" className="space-y-6">
            {/* Marketing Automation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Marketing Automation
                </CardTitle>
                <CardDescription>
                  Automate your marketing campaigns and customer communications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Active Campaigns */}
                <div>
                  <h4 className="font-medium mb-3">Active Campaigns</h4>
                  <div className="space-y-3">
                    {[
                      {
                        name: "Welcome Series",
                        status: "active",
                        description: "3-email sequence for new customers",
                        recipients: "45 customers",
                        performance: "78% open rate"
                      },
                      {
                        name: "Win-Back Campaign",
                        status: "active",
                        description: "Re-engage inactive customers",
                        recipients: "23 customers",
                        performance: "12% response rate"
                      },
                      {
                        name: "Birthday Offers",
                        status: "paused",
                        description: "Special offers on customer birthdays",
                        recipients: "8 customers this month",
                        performance: "65% redemption rate"
                      }
                    ].map((campaign, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            {campaign.status === 'active' ? (
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            ) : (
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            )}
                            <h5 className="font-medium">{campaign.name}</h5>
                          </div>
                          <Badge variant={campaign.status === 'active' ? 'default' : 'secondary'}>
                            {campaign.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right text-sm">
                            <div>{campaign.recipients}</div>
                            <div className="text-muted-foreground">{campaign.performance}</div>
                          </div>
                          <div className="flex gap-1">
                            {campaign.status === 'active' ? (
                              <Button size="sm" variant="outline">
                                <Pause className="h-3 w-3" />
                              </Button>
                            ) : (
                              <Button size="sm" variant="outline">
                                <Play className="h-3 w-3" />
                              </Button>
                            )}
                            <Button size="sm" variant="outline">Edit</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Automation Rules */}
                <div>
                  <h4 className="font-medium mb-3">Automation Rules</h4>
                  <div className="space-y-3">
                    {[
                      {
                        trigger: "Customer hasn't visited in 14 days",
                        action: "Send re-engagement email",
                        status: "enabled"
                      },
                      {
                        trigger: "Customer earns 100+ points",
                        action: "Send reward notification",
                        status: "enabled"
                      },
                      {
                        trigger: "Customer's birthday",
                        action: "Send birthday offer",
                        status: "enabled"
                      },
                      {
                        trigger: "New customer signs up",
                        action: "Send welcome series",
                        status: "enabled"
                      }
                    ].map((rule, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <div>
                              <div className="font-medium text-sm">{rule.trigger}</div>
                              <div className="text-xs text-muted-foreground">{rule.action}</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="default" className="bg-green-100 text-green-800">
                            {rule.status}
                          </Badge>
                          <Button size="sm" variant="outline">Edit</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Create New Campaign */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Create New Campaign</CardTitle>
                    <CardDescription>Set up automated marketing campaigns</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Campaign Type</label>
                        <select className="w-full p-2 border rounded-md" title="Campaign Type">
                          <option value="welcome">Welcome Series</option>
                          <option value="winback">Win-Back Campaign</option>
                          <option value="birthday">Birthday Offers</option>
                          <option value="anniversary">Anniversary</option>
                          <option value="custom">Custom Campaign</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Target Audience</label>
                        <select className="w-full p-2 border rounded-md" title="Target Audience">
                          <option value="new">New Customers</option>
                          <option value="inactive">Inactive Customers</option>
                          <option value="high-value">High-Value Customers</option>
                          <option value="all">All Customers</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Campaign Name</label>
                      <Input placeholder="Enter campaign name" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Description</label>
                      <Textarea placeholder="Describe your campaign..." rows={3} />
                    </div>
                    
                    <div className="flex gap-2">
                      <Button>
                        <Zap className="h-4 w-4 mr-2" />
                        Create Campaign
                      </Button>
                      <Button variant="outline">Save as Draft</Button>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
