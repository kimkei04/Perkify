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
  Receipt, 
  Camera, 
  Upload, 
  CheckCircle, 
  AlertCircle,
  Clock,
  Award,
  Store,
  Calendar,
  DollarSign,
  Plus
} from 'lucide-react';
import PageHeader from '@/components/page-header';
import { consumerData } from '@/lib/data';

export default function ReceiptEntryPage() {
  const recentReceipts = [
    {
      id: 'receipt1',
      storeName: 'The Daily Grind',
      date: '2024-07-20',
      amount: 8.50,
      pointsEarned: 9,
      status: 'verified',
      items: ['Latte', 'Croissant']
    },
    {
      id: 'receipt2',
      storeName: 'Bookworm Haven',
      date: '2024-07-18',
      amount: 15.99,
      pointsEarned: 16,
      status: 'verified',
      items: ['"The Final Chapter"']
    },
    {
      id: 'receipt3',
      storeName: 'Fresh Eats',
      date: '2024-07-17',
      amount: 12.00,
      pointsEarned: 12,
      status: 'pending',
      items: ['Avocado Toast', 'Orange Juice']
    }
  ];

  return (
    <>
      <PageHeader
        title="Receipt Entry"
        description="Submit receipts to earn points and unlock rewards"
      />
      
      <div className="space-y-6">
        {/* Quick Entry */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Receipt className="h-5 w-5" />
              Submit Receipt
            </CardTitle>
            <CardDescription>
              Enter your receipt code or upload a photo to earn points
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue="code" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="code">Receipt Code</TabsTrigger>
                <TabsTrigger value="photo">Photo Upload</TabsTrigger>
              </TabsList>

              <TabsContent value="code" className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Receipt Code</label>
                    <Input 
                      placeholder="Enter the receipt code from your purchase"
                      className="text-lg font-mono"
                    />
                    <p className="text-xs text-muted-foreground">
                      Find the receipt code on your printed receipt or digital receipt
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Store</label>
                    <select className="w-full p-2 border rounded-md" title="Select Store">
                      <option value="">Select a store</option>
                      {consumerData.subscribedStores.map((store) => (
                        <option key={store.id} value={store.id}>
                          {store.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button className="w-full">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Submit Receipt
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="photo" className="space-y-4">
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-medium mb-2">Upload Receipt Photo</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Take a clear photo of your receipt or upload from your device
                    </p>
                    <div className="flex gap-2 justify-center">
                      <Button variant="outline">
                        <Camera className="h-4 w-4 mr-2" />
                        Take Photo
                      </Button>
                      <Button variant="outline">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload File
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Store</label>
                    <select className="w-full p-2 border rounded-md" title="Select Store">
                      <option value="">Select a store</option>
                      {consumerData.subscribedStores.map((store) => (
                        <option key={store.id} value={store.id}>
                          {store.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button className="w-full">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Process Receipt
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Recent Receipts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Receipts
            </CardTitle>
            <CardDescription>
              Track your submitted receipts and earned points
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReceipts.map((receipt) => (
                <div key={receipt.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{receipt.storeName}</h4>
                        <Badge 
                          variant={receipt.status === 'verified' ? 'default' : 'secondary'}
                          className={receipt.status === 'verified' ? 'bg-green-100 text-green-800' : ''}
                        >
                          {receipt.status === 'verified' ? 'Verified' : 'Pending'}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{receipt.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          <span>${receipt.amount}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="h-3 w-3" />
                          <span>{receipt.pointsEarned} points</span>
                        </div>
                      </div>
                      
                      <div className="text-sm">
                        <span className="text-muted-foreground">Items: </span>
                        <span>{receipt.items.join(', ')}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      {receipt.status === 'verified' ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card>
          <CardHeader>
            <CardTitle>How Receipt Entry Works</CardTitle>
            <CardDescription>
              Learn how to earn points from your purchases
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-primary">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Make a Purchase</h4>
                  <p className="text-sm text-muted-foreground">
                    Shop at any of your subscribed stores and keep your receipt
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-primary">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Submit Receipt</h4>
                  <p className="text-sm text-muted-foreground">
                    Enter the receipt code or upload a photo of your receipt
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-primary">3</span>
                </div>
                <div>
                  <h4 className="font-medium">Earn Points</h4>
                  <p className="text-sm text-muted-foreground">
                    Points are automatically added to your account once verified
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-primary">4</span>
                </div>
                <div>
                  <h4 className="font-medium">Redeem Rewards</h4>
                  <p className="text-sm text-muted-foreground">
                    Use your points to unlock amazing rewards and discounts
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card>
          <CardHeader>
            <CardTitle>Tips for Successful Receipt Entry</CardTitle>
            <CardDescription>
              Get the most out of your receipt submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                  Make sure your receipt is clear and readable when taking photos
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                  Submit receipts within 7 days of purchase for best results
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                  Double-check the receipt code before submitting
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                  Contact support if you have issues with receipt verification
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
