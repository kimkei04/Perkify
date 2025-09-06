'use server';

/**
 * @fileOverview An AI agent for generating purchase insights for business owners.
 *
 * - generatePurchaseInsights - A function that generates insights based on customer purchase history and loyalty data.
 * - GeneratePurchaseInsightsInput - The input type for the generatePurchaseInsights function.
 * - GeneratePurchaseInsightsOutput - The return type for the generatePurchaseInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePurchaseInsightsInputSchema = z.object({
  customerPurchaseHistory: z
    .string()
    .describe('The purchase history of customers, including transaction dates, items purchased, and total spend.'),
  loyaltyData: z
    .string()
    .describe('Data related to customer loyalty, such as points earned, rewards redeemed, and subscription status.'),
});
export type GeneratePurchaseInsightsInput = z.infer<
  typeof GeneratePurchaseInsightsInputSchema
>;

const GeneratePurchaseInsightsOutputSchema = z.object({
  keyTrends: z
    .string()
    .describe(
      'A summary of key trends identified in the customer purchase history and loyalty data.'
    ),
  patternsIdentified: z
    .string()
    .describe(
      'Specific patterns observed in customer behavior, such as frequent purchases or popular product combinations.'
    ),
  recommendations: z
    .string()
    .describe(
      'Recommendations for improving the loyalty program and marketing efforts based on the identified trends and patterns.'
    ),
});
export type GeneratePurchaseInsightsOutput = z.infer<
  typeof GeneratePurchaseInsightsOutputSchema
>;

export async function generatePurchaseInsights(
  input: GeneratePurchaseInsightsInput
): Promise<GeneratePurchaseInsightsOutput> {
  return generatePurchaseInsightsFlow(input);
}

const purchaseInsightsPrompt = ai.definePrompt({
  name: 'purchaseInsightsPrompt',
  input: {schema: GeneratePurchaseInsightsInputSchema},
  output: {schema: GeneratePurchaseInsightsOutputSchema},
  prompt: `You are an AI assistant that analyzes customer purchase history and loyalty data to identify key trends and patterns for business owners.

  Analyze the following customer purchase history:
  {{{customerPurchaseHistory}}}

  And the following loyalty data:
  {{{loyaltyData}}}

  Based on this analysis, provide the following:

  1.  Key trends in customer behavior.
  2.  Specific patterns observed in customer behavior.
  3.  Recommendations for improving the loyalty program and marketing efforts.
  `,
});

const generatePurchaseInsightsFlow = ai.defineFlow(
  {
    name: 'generatePurchaseInsightsFlow',
    inputSchema: GeneratePurchaseInsightsInputSchema,
    outputSchema: GeneratePurchaseInsightsOutputSchema,
  },
  async input => {
    const {output} = await purchaseInsightsPrompt(input);
    return output!;
  }
);
