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
  title: 'Bookkeeping Virtual Assistant Services | Financial VAs | Smartest Assistant',
  description: 'Professional bookkeeping by smart VAs. QuickBooks, expense tracking, invoicing, financial reporting, and accounts reconciliation. Accurate financials, always.',
  keywords: 'bookkeeping virtual assistant, accounting VA, QuickBooks virtual assistant, financial virtual assistant, expense tracking VA, invoice management',
  openGraph: {
    title: 'Bookkeeping Virtual Assistant Services | Financial VAs',
    description: 'Professional bookkeeping by smart VAs. Accurate financials, always.',
    url: 'https://smartestassistant.com/services/bookkeeping',
  }
}

const serviceFeatures = [
  'QuickBooks setup and management',
  'Daily transaction recording',
  'Invoice creation and tracking',
  'Expense categorization and reporting',
  'Bank reconciliation',
  'Accounts payable and receivable',
  'Financial statement preparation',
  'Tax document organization',
  'Cash flow analysis',
  'Monthly financial reporting'
]

const bookkeepingProcess = [
  {
    step: 1,
    title: 'Financial System Setup',
    description: 'We audit your current setup, organize your chart of accounts, and establish efficient bookkeeping workflows.'
  },
  {
    step: 2,
    title: 'Daily Management',
    description: 'Your VA handles daily transactions, expense tracking, and maintains accurate, up-to-date financial records.'
  },
  {
    step: 3,
    title: 'Regular Reporting',
    description: 'Monthly financial reports, cash flow analysis, and insights to help you make informed business decisions.'
  }
]

const faqs = [
  {
    question: 'Are your VAs certified in accounting software?',
    answer: 'Yes, our bookkeeping VAs are certified in QuickBooks, Xero, and other major accounting platforms. They receive ongoing training to stay current with software updates and best practices.'
  },
  {
    question: 'How do you ensure accuracy in financial records?',
    answer: 'We use double-entry verification, monthly reconciliations, and quality control processes. All work is reviewed by senior bookkeepers before delivery to ensure accuracy and compliance.'
  },
  {
    question: 'Can you work with our existing accountant or CPA?',
    answer: 'Absolutely. We coordinate seamlessly with your existing accounting team, providing organized records and reports that make tax preparation and audits much more efficient.'
  },
  {
    question: 'What security measures protect our financial data?',
    answer: 'We use bank-level encryption, secure cloud access, VPN connections, and strict confidentiality agreements. All VAs are background-checked and trained in financial data security protocols.'
  },
  {
    question: 'How quickly can you catch up on backlogged books?',
    answer: 'Depending on the volume and complexity, we typically catch up 3-6 months of backlogged bookkeeping within 1-2 weeks. We provide a detailed timeline after assessing your specific situation.'
  }
]

const testimonial = {
  id: 'bookkeeping-testimonial-1',
  name: 'Thomas Anderson',
  role: 'Business Owner',
  company: 'Anderson Construction',
  content: 'Our books were a disaster before Smartest Assistant. Their VA not only caught up 8 months of backlogged receipts but also identified $15K in missed deductions. Now our financials are always current and tax season is stress-free.',
  rating: 5,
  location: 'Phoenix, AZ'
}

export default function BookkeepingPage() {
  return (
    <>
      <ServiceSchema 
        name="Bookkeeping Virtual Assistant Services"
        description="Professional bookkeeping services by smart virtual assistants. QuickBooks management, expense tracking, invoicing, financial reporting, and accurate record keeping."
        url="https://smartestassistant.com/services/bookkeeping"
      />
      <FAQSchema faqs={faqs} />
      
      <ServiceHero
        title="Bookkeeping by Smart Virtual Assistants"
        subtitle="ACCURATE FINANCIALS, ALWAYS"
        description="Keep your books organized and compliant without the overhead. Our smart VAs handle all your bookkeeping needs so you can focus on growing your business with confidence."
        features={[
          'Daily transaction recording',
          '100% QuickBooks certified VAs',
          'Monthly financial reports',
          'Tax-ready organization'
        ]}
      />

      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-red-600">Messy Books Are Costing You Money</H2>
            <Paragraph size="lg">
              Disorganized finances lead to missed deductions, compliance issues, and poor business decisions. 
              Every day without proper bookkeeping costs you time, money, and peace of mind.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">💸 Financial Chaos</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• Missed tax deductions worth thousands</li>
                <li>• Late payment penalties and fees</li>
                <li>• No visibility into cash flow</li>
                <li>• Expensive CPA hours for organization</li>
                <li>• Compliance risks and potential audits</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">⏰ Time Drain</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• Hours spent hunting for receipts</li>
                <li>• Stress during tax season</li>
                <li>• Can't make informed decisions quickly</li>
                <li>• Backlogged paperwork piling up</li>
                <li>• No time for strategic financial planning</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-green-600">Professional Bookkeeping That Scales</H2>
            <Paragraph size="lg">
              Our smart VAs don't just record transactions – they organize your finances strategically, 
              identify opportunities, and keep you compliant and audit-ready.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Strategic Organization"
              description="Chart of accounts optimized for your industry and tax situation"
              icon={<span className="text-3xl">📊</span>}
            />
            
            <FeatureCard
              title="Proactive Insights"
              description="Monthly analysis and insights that inform better business decisions"
              icon={<span className="text-3xl">💡</span>}
            />
            
            <FeatureCard
              title="Compliance Ready"
              description="Always audit-ready with organized records and proper documentation"
              icon={<span className="text-3xl">✅</span>}
            />
          </div>
        </div>
      </Section>

      <Section spacing="lg">
        <SectionHeader
          title="Complete Bookkeeping Package"
          description="Everything you need for organized, compliant financial records"
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
        
        <div className="bg-gray-50 rounded-xl p-8">
          <H3 className="text-center mb-8">Accounting Software We Master</H3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {['QuickBooks', 'Xero', 'FreshBooks', 'Wave', 'Sage', 'NetSuite', 'Zoho Books', 'Bench', 'Receipt Bank', 'Expensify', 'Bill.com', 'A2X'].map((tool) => (
              <div key={tool} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-gray-700 text-sm">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="primary" spacing="lg">
        <SectionHeader
          title="How Our Bookkeeping Process Works"
          description="From setup to ongoing management, we keep your books organized and current"
          theme="dark"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {bookkeepingProcess.map((process) => (
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

      <Section background="white" spacing="lg">
        <SectionHeader
          title="Results You Can Expect"
          description="Measurable improvements our clients experience with professional bookkeeping"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <StatCard 
            value="$15K+" 
            label="Average tax savings"
            description="From better organization"
          />
          <StatCard 
            value="20+ hrs" 
            label="Time saved monthly"
            description="On financial management"
          />
          <StatCard 
            value="100%" 
            label="Audit ready"
            description="Organized documentation"
          />
        </div>
      </Section>

      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Client Success Story"
            description="See how professional bookkeeping transformed this business owner's finances"
            centered
          />
          <TestimonialCard testimonial={testimonial} />
        </div>
      </Section>

      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Common questions about our bookkeeping services"
            centered
          />
          
          <FAQAccordion 
            faqs={faqs}
            className="space-y-6"
          />
        </div>
      </Section>

      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready for Organized, Compliant Books?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Stop losing money to disorganized finances. Get smart VAs who keep your books 
            accurate, compliant, and ready for tax time – all year round.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Start Bookkeeping
            </Button>
            <Button as="link" href="/resources/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Savings
            </Button>
          </div>
        </div>
      </Section>

      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Services"
            description="Enhance your financial management with these complementary services"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/data-entry-research" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Data Entry & Research</H3>
              <Paragraph className="text-gray-600">
                Organize and digitize your financial documents for better bookkeeping efficiency.
              </Paragraph>
            </Link>
            
            <Link href="/services/executive-assistant" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">👔</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Executive Assistant</H3>
              <Paragraph className="text-gray-600">
                High-level financial coordination and strategic business support services.
              </Paragraph>
            </Link>
            
            <Link href="/services/email-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📧</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Email Management</H3>
              <Paragraph className="text-gray-600">
                Organize financial correspondence and vendor communications efficiently.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}