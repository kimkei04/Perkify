"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getAIInsights } from '@/app/actions';
import type { GeneratePurchaseInsightsOutput } from '@/ai/flows/generate-purchase-insights';
import { businessData } from '@/lib/data';
import { Sparkles, Lightbulb, TrendingUp, ThumbsUp, LoaderCircle } from 'lucide-react';

export function InsightsGenerator() {
  const [purchaseHistory, setPurchaseHistory] = useState(businessData.aiData.customerPurchaseHistory.trim());
  const [loyaltyData, setLoyaltyData] = useState(businessData.aiData.loyaltyData.trim());
  const [insights, setInsights] = useState<GeneratePurchaseInsightsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setInsights(null);

    const result = await getAIInsights({ customerPurchaseHistory: purchaseHistory, loyaltyData });

    if (result.error) {
      setError(result.error);
    } else if (result.data){
      setInsights(result.data);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Generate Insights</CardTitle>
          <CardDescription>
            Input your customer data to generate AI-powered insights. We've pre-filled some sample data for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="purchase-history">Customer Purchase History</Label>
              <Textarea
                id="purchase-history"
                value={purchaseHistory}
                onChange={(e) => setPurchaseHistory(e.target.value)}
                rows={8}
                placeholder="Paste customer purchase history here..."
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="loyalty-data">Customer Loyalty Data</Label>
              <Textarea
                id="loyalty-data"
                value={loyaltyData}
                onChange={(e) => setLoyaltyData(e.target.value)}
                rows={8}
                placeholder="Paste customer loyalty data here..."
              />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
              {isLoading ? (
                <>
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Insights
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Card className="border-destructive bg-destructive/10">
          <CardHeader>
            <CardTitle className="text-destructive">An Error Occurred</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{error}</p>
          </CardContent>
        </Card>
      )}

      {insights && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Insights</CardTitle>
            <CardDescription>Here's what our AI found in your data.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center"><TrendingUp className="mr-2 h-5 w-5 text-primary" /> Key Trends</h3>
                <p className="text-muted-foreground bg-secondary p-4 rounded-md">{insights.keyTrends}</p>
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center"><Lightbulb className="mr-2 h-5 w-5 text-primary" /> Patterns Identified</h3>
                <p className="text-muted-foreground bg-secondary p-4 rounded-md">{insights.patternsIdentified}</p>
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center"><ThumbsUp className="mr-2 h-5 w-5 text-primary" /> Recommendations</h3>
                <p className="text-muted-foreground bg-secondary p-4 rounded-md">{insights.recommendations}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
