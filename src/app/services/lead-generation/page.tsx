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
  title: 'Lead Generation Virtual Assistant Services | Lead Gen VAs | Smartest Assistant',
  description: 'Professional lead generation by smart VAs. Prospect research, lead qualification, database building, outreach campaigns. Fill your pipeline with quality leads. 3x more qualified leads.',
  keywords: 'lead generation virtual assistant, prospect research VA, lead qualification virtual assistant, B2B lead generation VA, sales prospecting assistant, lead gen VA',
  openGraph: {
    title: 'Lead Generation Virtual Assistant Services | Lead Gen VAs',
    description: 'Professional lead generation by smart VAs. Fill your pipeline with quality leads. 3x increase in qualified prospects.',
    url: 'https://smartestassistant.com/services/lead-generation',
  }
}

const serviceFeatures = [
  'Advanced prospect research and verification',
  'Multi-channel lead generation campaigns',
  'Lead scoring and qualification systems',
  'CRM integration and pipeline management',
  'Email and LinkedIn outreach sequences',
  'Lead nurturing and follow-up automation',
  'Competitor prospect analysis',
  'Industry-specific database building',
  'A/B testing for outreach optimization',
  'Real-time lead tracking and reporting'
]

const leadGenerationProcess = [
  {
    step: 1,
    title: 'Strategy & Research',
    description: 'Define ideal customer profiles, research target markets, and identify high-value prospects using advanced tools and databases. Create comprehensive lead scoring criteria.'
  },
  {
    step: 2,
    title: 'Outreach & Qualification',
    description: 'Execute multi-channel campaigns across email, LinkedIn, and phone. Qualify leads based on budget, authority, need, and timeline. Nurture prospects through strategic follow-ups.'
  },
  {
    step: 3,
    title: 'Pipeline Management',
    description: 'Organize qualified leads in your CRM, schedule meetings for your sales team, and provide detailed prospect intelligence. Continuously optimize campaigns for better results.'
  }
]

const faqs = [
  {
    question: 'What types of leads can your VAs generate for our business?',
    answer: 'Our VAs generate B2B leads across all industries including SaaS, consulting, professional services, manufacturing, and ecommerce. We focus on decision-makers, C-suite executives, department heads, and procurement managers who match your ideal customer profile.'
  },
  {
    question: 'How do you ensure lead quality and accuracy?',
    answer: 'We use advanced verification tools, multi-source research, and strict qualification criteria. Every lead is verified for accuracy, scored based on your criteria, and researched for buying signals before entering your pipeline. We maintain 95%+ data accuracy.'
  },
  {
    question: 'What tools and platforms do you use for lead generation?',
    answer: 'Our VAs are proficient with LinkedIn Sales Navigator, ZoomInfo, Apollo, HubSpot, Salesforce, Outreach, Mailchimp, and industry-specific databases. We adapt to your existing tech stack and recommend optimal tools for your needs.'
  },
  {
    question: 'How quickly can you start generating leads for our business?',
    answer: 'Initial lead generation typically begins within 3-5 days of onboarding. You\'ll see the first qualified leads within the first week, with full campaign optimization achieved by week 3. Average clients see 3x lead increase within 30 days.'
  },
  {
    question: 'Can you integrate with our existing CRM and sales process?',
    answer: 'Yes, our VAs seamlessly integrate with all major CRMs including Salesforce, HubSpot, Pipedrive, and custom systems. We maintain your existing workflows, lead scoring, and handoff processes to your sales team.'
  }
]

const testimonial = {
  id: 'lead-generation-testimonial-1',
  name: 'Michael Rodriguez',
  role: 'VP of Sales',
  company: 'CloudSync Solutions',
  content: 'Our lead pipeline was inconsistent until we partnered with Smartest Assistant. Our VA increased our qualified leads by 300% in just 6 weeks. The lead quality is exceptional - 80% of meetings actually show up and 40% convert to opportunities.',
  rating: 5,
  location: 'Denver, CO'
}

export default function LeadGenerationPage() {
  return (
    <>
      <ServiceSchema 
        name="Lead Generation Virtual Assistant Services"
        description="Professional lead generation services by smart virtual assistants. Prospect research, lead qualification, database building, and outreach campaigns."
        url="https://smartestassistant.com/services/lead-generation"
      />
      
      <FAQSchema 
        faqs={faqs}
        pageUrl="https://smartestassistant.com/services/lead-generation"
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

      {/* Problem Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Stop Struggling with Empty Sales Pipelines"
            description="Consistent lead generation is the lifeblood of sustainable business growth"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl mb-4">📉</div>
              <H3 className="mb-3 text-red-600">60% Pipeline Gap</H3>
              <Paragraph className="text-gray-600">
                Average shortfall in sales pipeline for growing businesses
              </Paragraph>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⏰</div>
              <H3 className="mb-3 text-red-600">18 Hours Weekly</H3>
              <Paragraph className="text-gray-600">
                Time sales reps spend on prospecting instead of closing
              </Paragraph>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💸</div>
              <H3 className="mb-3 text-red-600">$50,000 Lost Revenue</H3>
              <Paragraph className="text-gray-600">
                Annual revenue loss from insufficient lead generation
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Complete Lead Generation Solutions"
          description="From prospect research to qualified handoffs, we build your sales pipeline"
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
          title="From Prospects to Pipeline in 3 Stages"
          description="Our systematic approach delivers consistent, high-quality leads"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {leadGenerationProcess.map((step) => (
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
          title="Proven Lead Generation Results"
          description="Real pipeline growth our clients achieve with strategic lead generation"
          centered
          theme="dark"
        />
        
        <div className="grid md:grid-cols-4 gap-8">
          <StatCard 
            value="3x" 
            label="More Qualified Leads"
            description="Average increase in qualified pipeline"
            variant="dark"
          />
          <StatCard 
            value="95%" 
            label="Data Accuracy"
            description="Verified contact information rate"
            variant="dark"
          />
          <StatCard 
            value="40%" 
            label="Meeting Show Rate"
            description="Qualified prospects attend meetings"
            variant="dark"
          />
          <StatCard 
            value="25%" 
            label="Lead to Opportunity"
            description="Conversion rate from qualified leads"
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
          title="Lead Generation Tools We Master"
          description="Proficient with all major lead generation and sales intelligence platforms"
          centered
        />
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {['LinkedIn Sales Nav', 'ZoomInfo', 'Apollo', 'HubSpot', 'Salesforce', 'Outreach'].map((tool) => (
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
            title="Lead Generation Questions Answered"
            description="Everything you need to know about our lead generation services"
            centered
          />
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6">Ready to Fill Your Sales Pipeline?</H2>
          <Paragraph size="lg" className="mb-8">
            Join hundreds of companies that rely on our smart VAs for consistent lead generation. 
            Stop worrying about pipeline gaps and focus on closing deals.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/schedule-a-call" size="xl">
              Get Your Lead Generation VA
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl">
              Calculate Pipeline ROI
            </Button>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Related Services"
          description="Other ways our smart VAs can accelerate your sales process"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/services/cold-outreach" className="group">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">
                Cold Outreach
              </H3>
              <Paragraph className="text-gray-600">
                Strategic cold email and LinkedIn outreach campaigns
              </Paragraph>
            </div>
          </Link>
          
          <Link href="/services/market-research" className="group">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">
                Market Research
              </H3>
              <Paragraph className="text-gray-600">
                Deep market intelligence to identify ideal prospects
              </Paragraph>
            </div>
          </Link>
          
          <Link href="/services/data-entry-research" className="group">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">
                Data Entry & Research
              </H3>
              <Paragraph className="text-gray-600">
                Accurate data processing and prospect intelligence
              </Paragraph>
            </div>
          </Link>
        </div>
      </Section>
    </>
  )
}