import { Metadata } from 'next'
import { ServiceHero } from '@/components/sections'
import { ServiceSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Market Research Virtual Assistant Services | Research VAs | Smartest Assistant',
  description: 'Professional market research by smart VAs. Competitive analysis, industry reports, customer insights, and market intelligence. Data-driven business decisions.',
  keywords: 'market research virtual assistant, competitive analysis VA, industry research virtual assistant, market intelligence VA, business research assistant',
  openGraph: {
    title: 'Market Research Virtual Assistant Services | Research VAs',
    description: 'Professional market research by smart VAs. Data-driven business insights.',
    url: 'https://smartestassistant.com/services/market-research',
  }
}

export default function MarketResearchPage() {
  return (
    <>
      <ServiceSchema 
        name="Market Research Virtual Assistant Services"
        description="Professional market research services by smart virtual assistants. Competitive analysis, industry reports, customer insights, and strategic market intelligence."
        url="https://smartestassistant.com/services/market-research"
      />
      
      <ServiceHero
        title="Market Research by Smart Virtual Assistants"
        subtitle="STRATEGIC INSIGHTS, SMARTER DECISIONS"
        description="Make informed business decisions with comprehensive market intelligence. Our smart VAs deliver deep research and analysis that reveals opportunities and competitive advantages."
        features={[
          'Comprehensive competitive analysis',
          'Industry trends and market sizing',
          'Customer behavior insights',
          'Actionable strategic recommendations'
        ]}
      />

      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
        <p className="text-xl text-gray-600 mb-8">
          We're crafting our detailed Market Research service page. 
          Our smart VAs are already providing businesses with the insights they need to compete and win.
        </p>
        <div className="space-y-4">
          <p className="text-gray-700">Our Market Research VAs deliver:</p>
          <ul className="text-left max-w-md mx-auto space-y-2 text-gray-600">
            <li>• Comprehensive competitive landscape analysis</li>
            <li>• Industry trends and market sizing reports</li>
            <li>• Customer persona and behavior research</li>
            <li>• Pricing analysis and optimization</li>
            <li>• Market entry and expansion strategies</li>
            <li>• Regular market intelligence updates</li>
          </ul>
        </div>
        <div className="mt-8">
          <a 
            href="/schedule-a-call" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Get Market Intelligence
          </a>
        </div>
      </div>
    </>
  )
}