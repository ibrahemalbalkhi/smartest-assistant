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
  title: 'Data Entry & Research Virtual Assistant Services | Expert VAs | Smartest Assistant',
  description: 'Professional data entry and research by smart VAs. Lead research, data mining, CRM updates, market analysis, and administrative data tasks. 99.9% accuracy guaranteed.',
  keywords: 'data entry virtual assistant, research virtual assistant, lead research VA, data mining virtual assistant, market research VA, CRM data entry',
  openGraph: {
    title: 'Data Entry & Research Virtual Assistant Services | Expert VAs',
    description: 'Professional data entry and research by smart VAs. 99.9% accuracy guaranteed.',
    url: 'https://smartestassistant.com/services/data-entry-research',
  }
}

const serviceFeatures = [
  'Lead research and verification',
  'CRM data entry and updates',
  'Market research and analysis',
  'Contact list building and cleaning',
  'Product research and cataloging',
  'Financial data entry and reconciliation',
  'Survey data compilation',
  'Database creation and management',
  'Document digitization and indexing',
  'Competitive intelligence gathering'
]

const researchTypes = [
  {
    type: 'Lead Research',
    icon: '🎯',
    description: 'Comprehensive prospect research with verified contact information and company insights',
    deliverables: ['Contact verification', 'Company profiles', 'Decision maker identification', 'Industry insights']
  },
  {
    type: 'Market Research',
    icon: '📊',
    description: 'In-depth market analysis to inform strategic business decisions',
    deliverables: ['Market sizing', 'Competitor analysis', 'Industry trends', 'Customer insights']
  },
  {
    type: 'Data Mining',
    icon: '⛏️',
    description: 'Extract valuable insights from large datasets and online sources',
    deliverables: ['Pattern identification', 'Trend analysis', 'Data visualization', 'Report generation']
  },
  {
    type: 'Administrative Data',
    icon: '📋',
    description: 'Accurate and efficient handling of routine data entry tasks',
    deliverables: ['CRM updates', 'Invoice processing', 'Inventory management', 'Record maintenance']
  }
]

const accuracyProcess = [
  {
    step: 1,
    title: 'Double Data Verification',
    description: 'Every data point is verified against multiple sources and cross-referenced for accuracy before entry.'
  },
  {
    step: 2,
    title: 'Quality Control Checks',
    description: 'Automated and manual quality control processes ensure data consistency and completeness.'
  },
  {
    step: 3,
    title: 'Continuous Improvement',
    description: 'We track accuracy metrics and continuously refine our processes to maintain 99.9% accuracy standards.'
  }
]

const faqs = [
  {
    question: 'How do you ensure data accuracy and quality?',
    answer: 'We use a multi-layered quality control process including double verification, automated validation, and manual quality checks. Every data entry project maintains our 99.9% accuracy standard with detailed quality reports.'
  },
  {
    question: 'What types of research sources do you use?',
    answer: 'We access premium databases, industry reports, government sources, company websites, social media, and specialized research tools. Our VAs are trained in ethical research practices and data verification methods.'
  },
  {
    question: 'Can you handle sensitive or confidential data?',
    answer: 'Yes, we have strict security protocols including NDAs, encrypted data transfer, secure workstations, and limited access controls. Our VAs are trained in data privacy compliance including GDPR and HIPAA requirements.'
  },
  {
    question: 'How quickly can you complete large data entry projects?',
    answer: 'Turnaround depends on project complexity and volume. Typical projects: 1,000 records in 2-3 days, 5,000 records in 1 week, 10,000+ records in 2-3 weeks. We can scale teams for urgent deadlines.'
  },
  {
    question: 'What data formats and systems can you work with?',
    answer: 'We work with all major formats including Excel, CSV, Google Sheets, databases, CRMs (Salesforce, HubSpot), and custom systems. We can convert between formats and provide data in your preferred structure.'
  }
]

const testimonial = {
  id: 'data-entry-research-testimonial-1',
  name: 'Rachel Kim',
  role: 'Operations Manager',
  company: 'DataDriven Solutions',
  content: 'Our lead generation increased 300% after outsourcing research to Smartest Assistant. Their VAs don\'t just find contacts - they provide detailed company insights that help our sales team close more deals. The quality is consistently excellent.',
  rating: 5,
  location: 'Denver, CO'
}

export default function DataEntryResearchPage() {
  return (
    <>
      <ServiceSchema 
        name="Data Entry & Research Virtual Assistant Services"
        description="Professional data entry and research services by smart virtual assistants. Lead research, data mining, CRM updates, market analysis with 99.9% accuracy guarantee."
        url="https://smartestassistant.com/services/data-entry-research"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <ServiceHero
        title="Data Entry & Research by Smart Virtual Assistants"
        subtitle="ACCURATE DATA, ACTIONABLE INSIGHTS"
        description="Transform raw information into strategic business intelligence. Our smart VAs deliver accurate data entry and comprehensive research that fuels your growth and decision-making."
        features={[
          '99.9% data accuracy guaranteed',
          '50% faster than internal teams',
          'Comprehensive quality controls',
          'Strategic insights, not just data'
        ]}
      />

      {/* The Challenge */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-red-600">Data Tasks Are Drowning Your Productive Team</H2>
            <Paragraph size="lg">
              Your talented team is stuck doing mind-numbing data entry instead of strategic work. 
              Meanwhile, critical business decisions are delayed because you lack the research insights to move forward.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">⏰ Time Waste</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• High-paid staff doing $15/hour data entry</li>
                <li>• 20+ hours weekly on manual data tasks</li>
                <li>• Research backlogs delaying decisions</li>
                <li>• Data quality issues causing errors</li>
                <li>• No time for data analysis or insights</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">💸 Hidden Costs</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• Missed opportunities from delayed research</li>
                <li>• Bad decisions from incomplete data</li>
                <li>• CRM systems full of outdated information</li>
                <li>• Sales teams with poor quality leads</li>
                <li>• Compliance risks from data errors</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Solution */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-green-600">Data Intelligence, Not Just Data Entry</H2>
            <Paragraph size="lg">
              Our smart VAs don't just input data – they research strategically, verify thoroughly, 
              and deliver insights that drive business growth and improve decision-making speed.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              title="Research Intelligence"
              description="Strategic research that uncovers opportunities and competitive advantages"
              icon={<span className="text-3xl">🧠</span>}
            />
            
            <FeatureCard
              title="Quality Assurance"
              description="Multi-layer verification process ensuring 99.9% accuracy on every project"
              icon={<span className="text-3xl">✅</span>}
            />
            
            <FeatureCard
              title="Actionable Insights"
              description="Data analysis and reporting that turns information into business intelligence"
              icon={<span className="text-3xl">📈</span>}
            />
          </div>
        </div>
      </Section>

      {/* Research Types */}
      <Section spacing="lg">
        <SectionHeader
          title="Comprehensive Data & Research Services"
          description="From lead research to market intelligence, we handle all your data needs"
        />
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {researchTypes.map((research, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-blue">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{research.icon}</span>
                <H3>{research.type}</H3>
              </div>
              
              <Paragraph className="text-gray-600 mb-6">
                {research.description}
              </Paragraph>
              
              <div className="space-y-2">
                <div className="font-semibold text-gray-800 text-sm mb-3">Deliverables:</div>
                {research.deliverables.map((deliverable, deliverableIndex) => (
                  <div key={deliverableIndex} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Accuracy Process */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Our 99.9% Accuracy Process"
          description="Multiple quality control layers ensure exceptional data integrity"
          theme="dark"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {accuracyProcess.map((process) => (
            <div key={process.step} className="text-center">
              <div className="bg-accent-amber text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                {process.step}
              </div>
              <H3 className="mb-4 text-white">{process.title}</H3>
              <Paragraph className="text-blue-100">
                {process.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </Section>

      {/* What's Included */}
      <Section spacing="lg">
        <SectionHeader
          title="Complete Data & Research Package"
          description="Everything you need for accurate data and actionable insights"
        />
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <H3 className="mb-6">Core Services</H3>
            <ul className="space-y-4">
              {serviceFeatures.slice(0, 5).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <H3 className="mb-6">Advanced Features</H3>
            <ul className="space-y-4">
              {serviceFeatures.slice(5).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Tools Integration */}
        <div className="bg-gray-50 rounded-xl p-8">
          <H3 className="text-center mb-8">Data Tools & Platforms We Master</H3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {['Excel', 'Google Sheets', 'Salesforce', 'HubSpot', 'Airtable', 'Zapier', 'LinkedIn Sales Navigator', 'ZoomInfo', 'Apollo', 'Clearbit', 'Hunter.io', 'Tableau'].map((tool) => (
              <div key={tool} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-gray-700 text-sm">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Results You Can Expect"
          description="Measurable improvements our clients experience with professional data services"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <StatCard 
            value="99.9%" 
            label="Data accuracy"
            description="Verified and quality-controlled"
          />
          <StatCard 
            value="50%" 
            label="Faster delivery"
            description="Than internal teams"
          />
          <StatCard 
            value="70%" 
            label="Cost savings"
            description="Vs. hiring full-time staff"
          />
        </div>
        
        <div className="text-center mb-12">
          <div className="bg-green-50 rounded-xl p-8 max-w-3xl mx-auto">
            <H3 className="mb-4 text-green-800">Accuracy Guarantee</H3>
            <Paragraph>
              We guarantee 99.9% accuracy on all data entry projects. If accuracy falls below our standard, 
              we'll correct all errors at no charge and provide additional quality measures for future work.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Client Success Story"
            description="See how strategic data services transformed this company's lead generation"
            centered
          />
          <TestimonialCard testimonial={testimonial} />
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Common questions about our data entry and research services"
            centered
          />
          
          <FAQAccordion 
            faqs={faqs}
            className="space-y-6"
          />
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready for Data That Drives Decisions?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Stop wasting your team's talent on data entry. Get smart VAs who deliver accurate data 
            and strategic insights that accelerate your business growth.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Start Data Services
            </Button>
            <Button as="link" href="/resources/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your Savings
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ 99.9% accuracy guaranteed</div>
            <div>✅ Secure data handling</div>
            <div>✅ Start this week</div>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Services"
            description="Maximize your data capabilities with these complementary services"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/cold-outreach" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🎯</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Cold Outreach</H3>
              <Paragraph className="text-gray-600">
                Turn your research data into targeted outreach campaigns that generate qualified leads.
              </Paragraph>
            </Link>
            
            <Link href="/services/email-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📧</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Email Management</H3>
              <Paragraph className="text-gray-600">
                Organize and manage the responses from your data-driven outreach campaigns.
              </Paragraph>
            </Link>
            
            <Link href="/services/executive-assistant" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">👔</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Executive Assistant</H3>
              <Paragraph className="text-gray-600">
                Strategic support for data-driven decision making and business intelligence analysis.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}