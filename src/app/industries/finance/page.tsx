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
  title: 'Virtual Assistants for Finance | Banking & Investment VAs | Smartest Assistant',
  description: 'Specialized virtual assistant services for financial services firms, banks, investment companies, and fintech startups. Compliance-aware VAs who understand financial operations.',
  keywords: 'finance virtual assistant, banking virtual assistant, investment VA, financial services assistant, fintech virtual assistant, compliance VA, wealth management assistant',
  openGraph: {
    title: 'Virtual Assistants for Finance | Banking & Investment VAs',
    description: 'Specialized virtual assistant services for financial services firms. Compliance-aware VAs who understand financial operations.',
    url: 'https://smartestassistant.com/industries/finance',
  }
}

const financeChallenges = [
  {
    challenge: 'Regulatory Compliance & Documentation',
    description: 'Complex compliance requirements and extensive documentation needs',
    solution: 'Compliance-trained VAs who understand financial regulations and documentation standards',
    impact: 'Ensure 100% compliance adherence and reduce audit preparation time by 60%'
  },
  {
    challenge: 'Client Onboarding & KYC Processes',
    description: 'Time-intensive client verification and account opening procedures',
    solution: 'VAs experienced with KYC/AML processes and client onboarding workflows',
    impact: 'Accelerate client onboarding by 50% while maintaining compliance standards'
  },
  {
    challenge: 'Investment Research & Analysis Support',
    description: 'Data gathering, report compilation, and research documentation',
    solution: 'Research-focused VAs who can compile financial data and create professional reports',
    impact: 'Increase research productivity by 75% and improve report quality'
  },
  {
    challenge: 'Client Communication & Relationship Management',
    description: 'Managing high-net-worth client expectations and communication needs',
    solution: 'Professional VAs trained in financial services communication and discretion',
    impact: 'Improve client satisfaction scores and reduce response times by 70%'
  }
]

const financeServices = [
  {
    service: 'Compliance & Documentation Support',
    description: 'Regulatory filing, compliance monitoring, audit preparation, documentation management',
    tools: 'Thomson Reuters, Bloomberg, Compliance.ai, RegTech platforms'
  },
  {
    service: 'Client Onboarding & KYC',
    description: 'Know Your Customer processes, account opening, verification procedures',
    tools: 'Jumio, Onfido, Trulioo, KYC platforms'
  },
  {
    service: 'Investment Research Support',
    description: 'Market research, data compilation, report creation, analysis documentation',
    tools: 'Bloomberg Terminal, FactSet, Morningstar, S&P Capital IQ'
  },
  {
    service: 'Client Relationship Management',
    description: 'Client communications, meeting coordination, portfolio updates, reporting',
    tools: 'Salesforce Financial Services, Redtail, AdvisorEngine'
  },
  {
    service: 'Financial Planning Support',
    description: 'Plan preparation, client presentation materials, proposal development',
    tools: 'eMoney, MoneyGuidePro, NaviPlan, RightCapital'
  },
  {
    service: 'Trading & Operations Support',
    description: 'Trade settlement, reconciliation, operational reporting, workflow management',
    tools: 'Trading platforms, clearing systems, reconciliation software'
  }
]

const financeTestimonials = [
  {
    id: 'finance-testimonial-1',
    name: 'James Patterson',
    role: 'Managing Partner',
    company: 'Patterson Wealth Management',
    content: 'Our VA handles all client onboarding, compliance documentation, and research support. They understand the sensitivity of financial data and maintain the professional standards our high-net-worth clients expect. Our efficiency has improved dramatically.',
    rating: 5,
    location: 'Greenwich, CT'
  },
  {
    id: 'finance-testimonial-2',
    name: 'Lisa Chen',
    role: 'VP of Operations',
    company: 'Metropolitan Investment Group',
    content: 'Managing compliance across multiple jurisdictions was overwhelming until we partnered with Smartest Assistant. Our VA keeps us ahead of regulatory requirements and has streamlined our entire documentation process.',
    rating: 5,
    location: 'New York, NY'
  }
]

const complianceAreas = [
  'SEC regulations and filings',
  'FINRA compliance requirements',
  'Anti-Money Laundering (AML) procedures',
  'Know Your Customer (KYC) processes',
  'GDPR and privacy regulations',
  'State securities regulations',
  'Investment adviser compliance',
  'Broker-dealer requirements'
]

const faqs = [
  {
    question: 'Do your VAs understand financial regulations and compliance requirements?',
    answer: 'Yes, our finance VAs receive comprehensive training on key financial regulations including SEC rules, FINRA requirements, AML/KYC procedures, and investment adviser compliance. They understand the importance of regulatory adherence and documentation standards.'
  },
  {
    question: 'Can your VAs work with financial software and trading platforms?',
    answer: 'Absolutely. Our finance VAs are trained on major financial platforms including Bloomberg Terminal, FactSet, Morningstar, Salesforce Financial Services, and various CRM and portfolio management systems used in the industry.'
  },
  {
    question: 'How do you ensure confidentiality and data security for sensitive financial information?',
    answer: 'We implement bank-level security measures including encrypted communications, secure workstations, multi-factor authentication, and strict confidentiality agreements. All VAs undergo background checks and receive ongoing security training.'
  },
  {
    question: 'Can your VAs support investment research and analysis tasks?',
    answer: 'Yes, our VAs can assist with market research, data compilation, report creation, and analysis documentation. While they don\'t provide investment advice, they can efficiently gather and organize information to support your decision-making process.'
  },
  {
    question: 'Do you work with both large institutions and independent advisors?',
    answer: 'We serve financial organizations of all sizes, from large investment firms and banks to independent RIAs and solo practitioners. Our VAs adapt to your specific operational needs and compliance requirements regardless of firm size.'
  }
]

export default function FinancePage() {
  return (
    <>
      <ServiceSchema 
        name="Virtual Assistant Services for Finance"
        description="Specialized virtual assistant services for financial services firms, banks, investment companies, and wealth management practices."
        url="https://smartestassistant.com/industries/finance"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <IndustryHero
        industry="Finance & Investment Services"
        industryBenefits={[
          'Regulatory compliance expertise',
          'Financial software proficiency',
          'Client discretion & professionalism',
          'Securities industry knowledge'
        ]}
      />

      {/* Finance Challenges */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Financial Services Challenges We Solve"
          description="Specialized support for the complex operational demands of financial institutions"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {financeChallenges.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-red-100 rounded-full p-3">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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

      {/* Finance Services */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Comprehensive Financial Services VA Support"
          description="Complete operational support tailored for financial institutions and investment firms"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {financeServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-3xl mb-4">
                {index === 0 && '📋'}
                {index === 1 && '🔍'}
                {index === 2 && '📊'}
                {index === 3 && '🤝'}
                {index === 4 && '💼'}
                {index === 5 && '📈'}
              </div>
              <H3 className="mb-3">{service.service}</H3>
              <Paragraph className="text-gray-600 mb-4">
                {service.description}
              </Paragraph>
              <div className="text-sm text-primary-blue font-medium">
                Platform Expertise: {service.tools}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Compliance Section */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Regulatory Compliance & Security Standards"
          description="Your regulatory adherence and client confidentiality are our top priorities"
          theme="dark"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {complianceAreas.map((area, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-white font-medium text-sm">{area}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto">
            <H3 className="mb-4 text-white">Bank-Level Security & Compliance</H3>
            <Paragraph className="text-blue-100">
              Every finance VA undergoes comprehensive compliance training and security protocols. We maintain 
              strict confidentiality standards, regulatory documentation, and audit trails to support your compliance requirements.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Financial Services Results"
          description="Measurable improvements financial firms experience with specialized VA support"
        />
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <StatCard 
            value="60%" 
            label="Faster compliance prep"
            description="Reduced audit preparation time"
          />
          <StatCard 
            value="50%" 
            label="Quicker client onboarding"
            description="Accelerated KYC processes"
          />
          <StatCard 
            value="75%" 
            label="Research productivity gain"
            description="Improved analysis efficiency"
          />
          <StatCard 
            value="100%" 
            label="Regulatory compliance"
            description="Zero compliance violations"
          />
        </div>
        
        <div className="text-center">
          <div className="bg-green-50 rounded-xl p-8 max-w-3xl mx-auto">
            <H3 className="mb-4 text-green-800">Compliance Guarantee</H3>
            <Paragraph>
              We guarantee adherence to all relevant financial regulations and compliance standards. 
              Our VAs are trained on current requirements and receive ongoing regulatory updates to ensure your operations remain compliant.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Success Stories */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Financial Services Success Stories"
          description="How financial firms improve operations and client service with specialized VAs"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {financeTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Finance VA Frequently Asked Questions"
            description="Common questions from financial services professionals and institutions"
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
          <H2 className="mb-6 text-white">Ready to Scale Your Financial Services Operations?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Get compliance-aware VAs who understand financial regulations and client discretion. 
            Enhance your operational efficiency while maintaining the highest industry standards.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Book Finance Consultation
            </Button>
            <Button as="link" href="/resources/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Financial ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Regulatory compliance expertise</div>
            <div>✅ Financial software proficiency</div>
            <div>✅ Start within 48 hours</div>
          </div>
        </div>
      </Section>

      {/* Related Pages */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Financial Services"
            description="Comprehensive support for financial institutions and investment firms"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/data-entry-research" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Investment Research</H3>
              <Paragraph className="text-gray-600">
                Comprehensive research support for investment analysis, market data compilation, and report creation.
              </Paragraph>
            </Link>
            
            <Link href="/services/executive-assistant" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">👔</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Executive Support</H3>
              <Paragraph className="text-gray-600">
                High-level executive assistance for financial services leaders, including board coordination and client management.
              </Paragraph>
            </Link>
            
            <Link href="/services/bookkeeping" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">💰</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Financial Operations</H3>
              <Paragraph className="text-gray-600">
                Professional bookkeeping and financial operations support with compliance and accuracy standards.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}