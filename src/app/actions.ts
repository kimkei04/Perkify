// src/app/actions.ts
'use server';

import {
  generatePurchaseInsights,
  type GeneratePurchaseInsightsInput,
  type GeneratePurchaseInsightsOutput,
} from '@/ai/flows/generate-purchase-insights';

export async function getAIInsights(
  input: GeneratePurchaseInsightsInput
): Promise<{ data?: GeneratePurchaseInsightsOutput; error?: string }> {
  try {
    const insights = await generatePurchaseInsights(input);
    return { data: insights };
  } catch (error) {
    console.error('Error generating AI insights:', error);
    return { error: 'Failed to generate AI insights. Please try again later.' };
  }
}
