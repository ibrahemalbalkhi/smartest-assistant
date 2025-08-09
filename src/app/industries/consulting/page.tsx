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
  TestimonialCard
} from '@/components/ui'
import FAQAccordion from '@/components/ui/FAQ'
import { IndustryHero } from '@/components/sections'
import { ServiceSchema, FAQSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Virtual Assistants for Consulting Firms | Strategic VAs | Smartest Assistant',
  description: 'Specialized virtual assistant services for consulting firms, management consultants, and advisory practices. Professional VAs who understand client deliverables and strategic support.',
  keywords: 'consulting virtual assistant, management consulting VA, strategy consulting assistant, consulting firm support, advisory practice VA, consultant virtual assistant',
  openGraph: {
    title: 'Virtual Assistants for Consulting Firms | Strategic VAs',
    description: 'Specialized virtual assistant services for consulting firms. Professional VAs who understand client deliverables and strategic support.',
    url: 'https://smartestassistant.com/industries/consulting',
  }
}

const consultingChallenges = [
  {
    challenge: 'Research & Data Analysis Support',
    description: 'Complex market research, data synthesis, and analysis for client recommendations',
    solution: 'Research-specialized VAs who can gather, analyze, and synthesize data for strategic insights',
    impact: 'Accelerate research phase by 60% and improve data quality for client presentations'
  },
  {
    challenge: 'Client Presentation & Deliverable Preparation',
    description: 'Professional presentation creation, report formatting, and deliverable coordination',
    solution: 'VAs skilled in PowerPoint, data visualization, and professional document formatting',
    impact: 'Reduce presentation prep time by 70% and enhance visual impact of deliverables'
  },
  {
    challenge: 'Project Management & Client Coordination',
    description: 'Multiple client projects, timeline management, and stakeholder communication',
    solution: 'Project-focused VAs experienced with consulting workflows and client management',
    impact: 'Improve project delivery times by 40% and client satisfaction scores'
  },
  {
    challenge: 'Business Development & Proposal Support',
    description: 'RFP responses, capability presentations, and new business pursuit activities',
    solution: 'VAs trained in proposal writing, competitive analysis, and business development support',
    impact: 'Increase proposal win rate by 35% and reduce preparation time significantly'
  }
]

const consultingServices = [
  {
    service: 'Research & Analysis Support',
    description: 'Market research, competitive analysis, data synthesis, industry trend analysis',
    tools: 'IBISWorld, Statista, McKinsey Insights, BCG Publications, industry databases'
  },
  {
    service: 'Presentation & Deliverable Creation',
    description: 'PowerPoint presentations, executive summaries, client reports, data visualization',
    tools: 'PowerPoint, Keynote, Tableau, Excel, Adobe Creative Suite, Canva Pro'
  },
  {
    service: 'Project Management Support',
    description: 'Timeline tracking, milestone management, client communication, resource coordination',
    tools: 'Monday.com, Asana, Microsoft Project, Slack, Zoom, client portal systems'
  },
  {
    service: 'Business Development',
    description: 'RFP responses, proposal writing, capability presentations, competitive positioning',
    tools: 'Proposal software, CRM systems, competitive intelligence platforms'
  },
  {
    service: 'Client Relationship Management',
    description: 'Client onboarding, regular check-ins, feedback collection, relationship maintenance',
    tools: 'Salesforce, HubSpot, client relationship management platforms'
  },
  {
    service: 'Knowledge Management',
    description: 'Best practice documentation, case study development, methodology frameworks',
    tools: 'SharePoint, Notion, Confluence, document management systems'
  }
]

const consultingTestimonials = [
  {
    id: 'consulting-testimonial-1',
    name: 'Amanda Rodriguez',
    role: 'Managing Partner',
    company: 'Strategic Growth Advisors',
    content: 'Our consulting VA has become indispensable to our client delivery process. They handle all our research, presentation creation, and client coordination, allowing our consultants to focus purely on strategy and client relationships. Our utilization rates have increased 35%.',
    rating: 5,
    location: 'Dallas, TX'
  },
  {
    id: 'consulting-testimonial-2',
    name: 'David Park',
    role: 'Principal Consultant',
    company: 'Park Digital Strategy',
    content: 'As a solo consultant, I was spending 60% of my time on administrative tasks instead of consulting. My Smartest Assistant VA handles all research, presentation prep, and client communications, letting me focus on what clients pay me for - strategic thinking.',
    rating: 5,
    location: 'Seattle, WA'
  }
]

const deliverableTypes = [
  'Strategic recommendations and action plans',
  'Market analysis and competitive intelligence',
  'Executive presentations and board reports',
  'Process improvement recommendations',
  'Financial analysis and modeling support',
  'Change management planning',
  'Performance dashboards and KPI tracking',
  'Client workshops and training materials'
]

const faqs = [
  {
    question: 'Can your VAs handle complex research and analysis for consulting projects?',
    answer: 'Yes, our consulting VAs are trained in advanced research methodologies, data analysis, and synthesis. They can gather information from multiple sources, analyze trends, and prepare comprehensive research summaries to support your strategic recommendations.'
  },
  {
    question: 'Do your VAs understand consulting deliverables and presentation standards?',
    answer: 'Absolutely. Our consulting VAs understand the professional standards required for client deliverables, including executive-level presentation formatting, data visualization best practices, and the structured approach needed for consulting reports and recommendations.'
  },
  {
    question: 'Can your VAs support multiple client projects simultaneously?',
    answer: 'Yes, our consulting VAs are experienced in managing multiple client workstreams simultaneously. They use project management tools to track deliverables, deadlines, and priorities across different engagements while maintaining quality standards.'
  },
  {
    question: 'How do you ensure confidentiality for sensitive client information?',
    answer: 'We implement strict confidentiality protocols including non-disclosure agreements, secure data handling procedures, encrypted communications, and limited access controls. Our VAs understand the sensitive nature of consulting work and client confidentiality requirements.'
  },
  {
    question: 'Can your VAs help with business development and proposal writing?',
    answer: 'Yes, our consulting VAs can assist with RFP responses, capability presentations, competitive analysis, and proposal development. They understand the consulting sales process and can help position your firm effectively for new business opportunities.'
  }
]

export default function ConsultingPage() {
  return (
    <>
      <ServiceSchema 
        name="Virtual Assistant Services for Consulting Firms"
        description="Specialized virtual assistant services for consulting firms, management consultants, and advisory practices focused on strategic support and client deliverables."
        url="https://smartestassistant.com/industries/consulting"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <IndustryHero
        industry="Consulting & Advisory"
        industryBenefits={[
          'Research & analysis expertise',
          'Professional presentation skills',
          'Client confidentiality protocols',
          'Strategic thinking support'
        ]}
      />

      {/* Consulting Challenges */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Consulting Practice Challenges We Solve"
          description="Specialized support for the unique demands of consulting and advisory services"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {consultingChallenges.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-red-100 rounded-full p-3">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <H3 className="mb-2 text-red-700">{item.challenge}</H3>
                  <Paragraph className="text-gray-600 mb-4">{item.description}</Paragraph>
                </div>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 mb-4">
                <div className="font-semibold text-green-800 mb-1">Our Solution:</div>
                <div className="text-gray-700">{item.solution}</div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-3">
                <div className="font-semibold text-green-800 text-sm">Expected Impact:</div>
                <div className="text-green-700 text-sm">{item.impact}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Consulting Services */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Comprehensive Consulting VA Services"
          description="Complete operational support tailored for consulting firms and advisory practices"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consultingServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-3xl mb-4">
                {index === 0 && '🔍'}
                {index === 1 && '📊'}
                {index === 2 && '📋'}
                {index === 3 && '📈'}
                {index === 4 && '🤝'}
                {index === 5 && '📚'}
              </div>
              <H3 className="mb-3">{service.service}</H3>
              <Paragraph className="text-gray-600 mb-4">
                {service.description}
              </Paragraph>
              <div className="text-sm text-primary-blue font-medium">
                Tools & Platforms: {service.tools}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Deliverable Excellence Section */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Client Deliverable Excellence"
          description="Professional standards that exceed client expectations across all consulting engagements"
          theme="dark"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {deliverableTypes.map((deliverable, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white font-medium text-sm">{deliverable}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto">
            <H3 className="mb-4 text-white">Executive-Quality Standards</H3>
            <Paragraph className="text-blue-100">
              Every deliverable meets the rigorous professional standards expected by C-suite executives and board members. 
              Our VAs understand that consulting work requires precision, clarity, and strategic insight in every document.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Consulting Practice Results"
          description="Measurable improvements consulting firms experience with specialized VA support"
        />
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <StatCard 
            value="60%" 
            label="Faster research cycles"
            description="Accelerated project delivery"
          />
          <StatCard 
            value="70%" 
            label="Reduced prep time"
            description="More client-facing hours"
          />
          <StatCard 
            value="35%" 
            label="Higher win rates"
            description="Improved proposals"
          />
          <StatCard 
            value="40%" 
            label="Better delivery times"
            description="Enhanced client satisfaction"
          />
        </div>
        
        <div className="text-center">
          <div className="bg-green-50 rounded-xl p-8 max-w-3xl mx-auto">
            <H3 className="mb-4 text-green-800">Quality Assurance Promise</H3>
            <Paragraph>
              We guarantee professional-grade deliverables that meet consulting industry standards. 
              Every research report, presentation, and analysis undergoes quality review to ensure excellence.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Success Stories */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Consulting Success Stories"
          description="How consulting firms enhance their practice and client delivery with strategic VAs"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {consultingTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Consulting VA Frequently Asked Questions"
            description="Common questions from consulting professionals and firm leaders"
            centered
          />
          
          <FAQAccordion 
            faqs={faqs}
            className="space-y-6"
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready to Elevate Your Consulting Practice?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Get strategic VAs who understand consulting deliverables, research rigor, and client expectations. 
            Focus on strategy and client relationships while we handle the operational excellence.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Book Consulting Consultation
            </Button>
            <Button as="link" href="/resources/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Consulting ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Research & analysis expertise</div>
            <div>✅ Executive presentation skills</div>
            <div>✅ Start within 48 hours</div>
          </div>
        </div>
      </Section>

      {/* Related Pages */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Consulting Services"
            description="Comprehensive support for consulting firms and advisory practices"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/data-entry-research" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🔍</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Strategic Research</H3>
              <Paragraph className="text-gray-600">
                Comprehensive market research, competitive analysis, and data synthesis for strategic insights and recommendations.
              </Paragraph>
            </Link>
            
            <Link href="/services/content-creation" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Presentation Creation</H3>
              <Paragraph className="text-gray-600">
                Professional presentation development, data visualization, and executive-level deliverable creation.
              </Paragraph>
            </Link>
            
            <Link href="/services/project-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📋</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Project Coordination</H3>
              <Paragraph className="text-gray-600">
                Complete project management support for consulting engagements, timelines, and client deliverables.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}