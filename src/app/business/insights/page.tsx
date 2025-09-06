import PageHeader from '@/components/page-header';
import { InsightsGenerator } from '@/components/business/insights-generator';

export default function AiInsightsPage() {
  return (
    <>
      <PageHeader
        title="AI-Powered Purchase Insights"
        description="Generate deeper insights into customer purchase trends and loyalty behavior. Available for Advanced and Pro plans."
      />
      <div className="max-w-4xl mx-auto">
        <InsightsGenerator />
      </div>
    </>
  );
}
