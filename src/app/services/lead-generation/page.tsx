import { Metadata } from 'next'
import { ServiceHero } from '@/components/sections'
import { ServiceSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Lead Generation Virtual Assistant Services | Lead Gen VAs | Smartest Assistant',
  description: 'Professional lead generation by smart VAs. Prospect research, lead qualification, database building, and outreach campaigns. Fill your pipeline with quality leads.',
  keywords: 'lead generation virtual assistant, prospect research VA, lead qualification virtual assistant, B2B lead generation VA, sales prospecting assistant',
  openGraph: {
    title: 'Lead Generation Virtual Assistant Services | Lead Gen VAs',
    description: 'Professional lead generation by smart VAs. Fill your pipeline with quality leads.',
    url: 'https://smartestassistant.com/services/lead-generation',
  }
}

export default function LeadGenerationPage() {
  return (
    <>
      <ServiceSchema 
        name="Lead Generation Virtual Assistant Services"
        description="Professional lead generation services by smart virtual assistants. Prospect research, lead qualification, database building, and outreach campaigns."
        url="https://smartestassistant.com/services/lead-generation"
      />
      
      <ServiceHero
        title="Lead Generation by Smart Virtual Assistants"
        subtitle="QUALITY LEADS, CONSISTENT PIPELINE"
        description="Fill your sales pipeline with qualified prospects. Our smart VAs use advanced research and qualification techniques to deliver leads that convert into customers."
        features={[
          'Advanced prospect research and verification',
          '3x increase in qualified leads',
          'Multi-channel lead generation campaigns',
          'CRM integration and lead scoring'
        ]}
      />

      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
        <p className="text-xl text-gray-600 mb-8">
          We're developing our comprehensive Lead Generation service page. 
          Our smart VAs are already helping businesses fill their pipelines with qualified prospects.
        </p>
        <div className="space-y-4">
          <p className="text-gray-700">Our Lead Generation VAs provide:</p>
          <ul className="text-left max-w-md mx-auto space-y-2 text-gray-600">
            <li>• In-depth prospect research and verification</li>
            <li>• Lead qualification and scoring</li>
            <li>• Database building and management</li>
            <li>• Multi-channel outreach campaigns</li>
            <li>• CRM integration and pipeline management</li>
            <li>• Lead nurturing and follow-up sequences</li>
          </ul>
        </div>
        <div className="mt-8">
          <a 
            href="/schedule-a-call" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Start Generating Quality Leads
          </a>
        </div>
      </div>
    </>
  )
}