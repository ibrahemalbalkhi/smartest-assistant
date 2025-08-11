import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Section, 
  SectionHeader,
  H2, 
  H3, 
  Paragraph, 
  Button, 
  StatCard,
  TestimonialCard,
  FeatureCard
} from '@/components/ui'
import FAQAccordion from '@/components/ui/FAQ'
import { ServiceHero } from '@/components/sections'
import { ServiceSchema, FAQSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Market Research Virtual Assistant Services | Research VAs | Smartest Assistant',
  description: 'Professional market research by smart VAs. Competitive analysis, industry reports, customer insights, market intelligence. Data-driven business decisions. Strategic insights.',
  keywords: 'market research virtual assistant, competitive analysis VA, industry research virtual assistant, market intelligence VA, business research assistant, market analysis VA',
  openGraph: {
    title: 'Market Research Virtual Assistant Services | Research VAs',
    description: 'Professional market research by smart VAs. Strategic insights for data-driven business decisions. Competitive analysis and market intelligence.',
    url: 'https://smartestassistant.com/services/market-research',
  }
}

const serviceFeatures = [
  'Comprehensive competitive landscape analysis',
  'Industry trends and market sizing reports',
  'Customer behavior and persona research',
  'Pricing analysis and optimization strategies',
  'Market entry and expansion research',
  'Brand positioning and perception studies',
  'Product market fit analysis',
  'Regulatory and compliance research',
  'Investment and funding landscape analysis',
  'Strategic intelligence reporting'
]

const marketResearchProcess = [
  {
    step: 1,
    title: 'Research Planning & Methodology',
    description: 'Define research objectives, identify key questions, and develop comprehensive methodology. Create detailed research framework and establish data collection strategies.'
  },
  {
    step: 2,
    title: 'Data Collection & Analysis',
    description: 'Execute multi-source research using primary and secondary data. Analyze competitors, industry reports, customer surveys, and market data using advanced analytical tools.'
  },
  {
    step: 3,
    title: 'Insights & Strategic Recommendations',
    description: 'Synthesize findings into actionable insights. Deliver comprehensive reports with strategic recommendations, market opportunities, and implementation roadmaps.'
  }
]

const faqs = [
  {
    question: 'What types of market research can your VAs conduct?',
    answer: 'Our VAs conduct competitive analysis, industry research, customer segmentation studies, pricing analysis, market sizing, brand perception research, product research, regulatory analysis, and investment landscape research. We adapt methodologies to your specific industry and business needs.'
  },
  {
    question: 'How do you ensure the accuracy and reliability of research data?',
    answer: 'We use multiple data sources including primary research, industry reports, government databases, and verified third-party sources. All findings are cross-referenced and validated. We maintain detailed source documentation and provide confidence levels for all insights.'
  },
  {
    question: 'What industries and markets do you research?',
    answer: 'Our VAs research all major industries including SaaS, fintech, healthcare, manufacturing, retail, professional services, and emerging technologies. We have experience with B2B and B2C markets across North America, Europe, and Asia-Pacific regions.'
  },
  {
    question: 'How long does a typical market research project take?',
    answer: 'Timeline depends on scope and complexity. Quick competitive analysis takes 3-5 days, comprehensive industry reports take 2-3 weeks, and full market entry studies take 4-6 weeks. We provide detailed timelines during project planning.'
  },
  {
    question: 'Can you help with ongoing market intelligence and monitoring?',
    answer: 'Yes, we provide ongoing market monitoring services including competitor tracking, industry news analysis, trend identification, and quarterly intelligence reports. This keeps you informed of market changes and emerging opportunities.'
  }
]

const testimonial = {
  id: 'market-research-testimonial-1',
  name: 'Sarah Mitchell',
  role: 'VP of Strategy',
  company: 'InnovateTech Partners',
  content: 'Our Smartest Assistant VA delivered market research that changed our entire go-to-market strategy. Their analysis identified an untapped segment worth $50M that our team completely missed. The insights directly contributed to our successful Series B raise.',
  rating: 5,
  location: 'Boston, MA'
}

export default function MarketResearchPage() {
  return (
    <>
      <ServiceSchema 
        name="Market Research Virtual Assistant Services"
        description="Professional market research services by smart virtual assistants. Competitive analysis, industry reports, customer insights, and strategic market intelligence."
        url="https://smartestassistant.com/services/market-research"
      />
      
      <FAQSchema 
        faqs={faqs}
        pageUrl="https://smartestassistant.com/services/market-research"
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

      {/* Problem Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Stop Making Decisions in the Dark"
            description="Strategic business decisions require comprehensive market intelligence and competitive insights"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl mb-4">❓</div>
              <H3 className="mb-3 text-red-600">70% Gut Decisions</H3>
              <Paragraph className="text-gray-600">
                Business decisions made without proper market research
              </Paragraph>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💸</div>
              <H3 className="mb-3 text-red-600">$100K+ Mistakes</H3>
              <Paragraph className="text-gray-600">
                Average cost of strategic missteps from poor market intelligence
              </Paragraph>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⏳</div>
              <H3 className="mb-3 text-red-600">6 Months Behind</H3>
              <Paragraph className="text-gray-600">
                Time to market delay from inadequate competitive analysis
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Complete Market Intelligence Solutions"
          description="From competitive analysis to strategic recommendations, we provide the insights you need"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={<span className="text-2xl">✓</span>}
              title={feature}
              description=""
            />
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="From Questions to Answers in 3 Phases"
          description="Our systematic approach delivers actionable market intelligence"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {marketResearchProcess.map((step) => (
            <div key={step.step} className="text-center">
              <div className="bg-primary-blue text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                {step.step}
              </div>
              <H3 className="mb-4">{step.title}</H3>
              <Paragraph className="text-gray-600">
                {step.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </Section>

      {/* Results Section */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Strategic Research Impact"
          description="Real business outcomes from comprehensive market intelligence"
          centered
          theme="dark"
        />
        
        <div className="grid md:grid-cols-4 gap-8">
          <StatCard 
            value="85%" 
            label="Better Decisions"
            description="Improvement in strategic decision quality"
            variant="dark"
          />
          <StatCard 
            value="3x" 
            label="Faster Market Entry"
            description="Reduced time to market with insights"
            variant="dark"
          />
          <StatCard 
            value="40%" 
            label="Competitive Advantage"
            description="Increased market positioning strength"
            variant="dark"
          />
          <StatCard 
            value="200%" 
            label="ROI on Research"
            description="Average return from strategic insights"
            variant="dark"
          />
        </div>
      </Section>

      {/* Testimonial Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <TestimonialCard testimonial={testimonial} featured />
        </div>
      </Section>

      {/* Tools Section */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Research Tools & Data Sources We Master"
          description="Access to comprehensive databases and analytical platforms"
          centered
        />
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {['IBISWorld', 'Statista', 'CB Insights', 'SimilarWeb', 'SEMrush', 'Crunchbase'].map((tool) => (
            <div key={tool} className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <span className="text-sm font-medium text-gray-700">{tool}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Market Research Questions Answered"
            description="Everything you need to know about our market research services"
            centered
          />
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6">Ready to Make Data-Driven Decisions?</H2>
          <Paragraph size="lg" className="mb-8">
            Join forward-thinking companies that rely on our market research for strategic advantage. 
            Stop guessing and start knowing your market inside and out.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/schedule-a-call" size="xl">
              Get Your Research VA
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl">
              Calculate Research ROI
            </Button>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Related Services"
          description="Other ways our smart VAs can support your business intelligence needs"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/services/lead-generation" className="group">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">
                Lead Generation
              </H3>
              <Paragraph className="text-gray-600">
                Turn market insights into qualified sales prospects
              </Paragraph>
            </div>
          </Link>
          
          <Link href="/services/data-entry-research" className="group">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">
                Data Entry & Research
              </H3>
              <Paragraph className="text-gray-600">
                Accurate data processing and comprehensive research support
              </Paragraph>
            </div>
          </Link>
          
          <Link href="/services/content-creation" className="group">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">
                Content Creation
              </H3>
              <Paragraph className="text-gray-600">
                Transform research insights into compelling marketing content
              </Paragraph>
            </div>
          </Link>
        </div>
      </Section>
    </>
  )
}