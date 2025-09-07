'use client';

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
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { 
  Check, 
  CreditCard, 
  DollarSign, 
  Crown, 
  Zap,
  Brain,
  Shield,
  Star,
  ArrowRight,
  Calendar,
  Users,
  BarChart3
} from 'lucide-react';
import PageHeader from '@/components/page-header';
import { saasPlans, currentUserPlan } from '@/lib/data';

export default function BillingPage() {
  const currentPlan = saasPlans[currentUserPlan as keyof typeof saasPlans];
  const availablePlans = Object.values(saasPlans);

  return (
    <>
      <PageHeader
        title="Billing & Plans"
        description="Manage your subscription and upgrade your plan"
      />
      
      <div className="space-y-6">
        {/* Current Plan */}
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Crown className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Current Plan: {currentPlan.name}</CardTitle>
                  <CardDescription>
                    {currentPlan.price === 0 ? 'Free plan' : `$${currentPlan.price}/${currentPlan.billing}`}
                  </CardDescription>
                </div>
              </div>
              <Badge variant="default" className="bg-primary">
                Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Plan Features</h4>
                <ul className="space-y-1 text-sm">
                  {currentPlan.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Usage</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Customers</span>
                    <span>47 / {currentPlan.id === 'basic' ? '100' : currentPlan.id === 'advanced' ? '1,000' : '∞'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Stores</span>
                    <span>1 / {currentPlan.id === 'pro' ? '∞' : '1'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Analytics</span>
                    <span>{currentPlan.id === 'basic' ? 'Basic' : 'Advanced'}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Plans */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Available Plans</h2>
            <Badge variant="outline" className="text-green-600 border-green-200">
              School Project - No Real Payment Required
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {availablePlans.map((plan) => {
              const isCurrentPlan = plan.id === currentUserPlan;
              const isUpgrade = plan.price > currentPlan.price;
              
              return (
                <Card 
                  key={plan.id} 
                  className={`relative ${isCurrentPlan ? 'border-primary/20 bg-primary/5' : isUpgrade ? 'border-green-200 hover:border-green-300' : ''}`}
                >
                  {isCurrentPlan && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary">Current Plan</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-2">
                      {plan.id === 'basic' && <Shield className="h-8 w-8 text-blue-500" />}
                      {plan.id === 'advanced' && <Zap className="h-8 w-8 text-purple-500" />}
                      {plan.id === 'pro' && <Brain className="h-8 w-8 text-orange-500" />}
                    </div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold">
                        {plan.price === 0 ? 'Free' : `$${plan.price}`}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {plan.price === 0 ? 'Forever' : `per ${plan.billing}`}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      {isCurrentPlan ? (
                        <Button className="w-full" disabled>
                          Current Plan
                        </Button>
                      ) : (
                        <Button 
                          className="w-full" 
                          variant={isUpgrade ? "default" : "outline"}
                          onClick={() => {
                            // Mock upgrade - for school project
                            alert(`Mock upgrade to ${plan.name} plan!\n\nIn a real application, this would:\n1. Redirect to payment processor\n2. Handle subscription creation\n3. Update user's plan\n4. Send confirmation email\n\nFor this school project, you can access all features regardless of plan.`);
                          }}
                        >
                          {isUpgrade ? 'Upgrade Plan' : 'Downgrade Plan'}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                      
                      {isUpgrade && (
                        <p className="text-xs text-center text-muted-foreground">
                          Upgrade instantly • Cancel anytime
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Payment Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Payment Information
            </CardTitle>
            <CardDescription>
              Manage your payment methods and billing details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Mock Payment Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">Payment Method</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">•••• •••• •••• 4242</div>
                      <div className="text-sm text-muted-foreground">Expires 12/25</div>
                    </div>
                    <Badge variant="outline" className="ml-auto">Default</Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    Update Payment Method
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium">Billing Address</h4>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="123 Main Street" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="New York" />
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" placeholder="10001" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h4 className="font-medium">Billing History</h4>
              <div className="space-y-2">
                {[
                  { date: 'Dec 1, 2024', amount: '$0.00', status: 'Paid', description: 'Basic Plan' },
                  { date: 'Nov 1, 2024', amount: '$0.00', status: 'Paid', description: 'Basic Plan' },
                  { date: 'Oct 1, 2024', amount: '$0.00', status: 'Paid', description: 'Basic Plan' },
                ].map((invoice, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{invoice.description}</div>
                        <div className="text-sm text-muted-foreground">{invoice.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="font-medium">{invoice.amount}</div>
                        <Badge variant="outline" className="text-green-600 border-green-200">
                          {invoice.status}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* School Project Notice */}
        <Card className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Star className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-800 dark:text-yellow-200">
                  School Project Notice
                </h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                  This is a demonstration application for educational purposes. All payment processing is simulated. 
                  You can explore all features regardless of your selected plan. In a real SaaS application, 
                  features would be restricted based on your subscription tier.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
