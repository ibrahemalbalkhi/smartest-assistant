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
  title: 'Document Management Virtual Assistant Services | Document VAs | Smartest Assistant',
  description: 'Professional document management by smart VAs. File organization, digital archiving, document creation, and workflow automation. Save 15+ hours weekly on document tasks.',
  keywords: 'document management virtual assistant, file organization VA, digital archiving virtual assistant, document workflow VA, records management assistant, document control VA',
  openGraph: {
    title: 'Document Management Virtual Assistant Services | Document VAs',
    description: 'Professional document management by smart VAs. Organized, accessible, secure documents. Save 15+ hours weekly.',
    url: 'https://smartestassistant.com/services/document-management',
  }
}

const serviceFeatures = [
  'Digital file organization and naming systems',
  'Document scanning and digitization',
  'Cloud storage setup and management',
  'Version control and revision tracking',
  'Document template creation and management',
  'Automated workflow and approval processes',
  'Contract and agreement management',
  'Compliance documentation and tracking',
  'Archive management and retrieval',
  'Document security and access controls'
]

const documentManagementProcess = [
  {
    step: 1,
    title: 'Document Audit & Organization',
    description: 'We assess your current document systems, identify inefficiencies, and create a comprehensive organization strategy tailored to your business.'
  },
  {
    step: 2,
    title: 'System Implementation',
    description: 'Your VA implements file structures, naming conventions, cloud storage solutions, and automated workflows for maximum efficiency.'
  },
  {
    step: 3,
    title: 'Ongoing Management',
    description: 'Daily document processing, version control, compliance monitoring, and continuous optimization of your document workflows.'
  }
]

const faqs = [
  {
    question: 'How do you ensure document security and confidentiality?',
    answer: 'We implement enterprise-level security with encrypted storage, access controls, audit trails, and signed NDAs. Your VA only accesses documents necessary for their role, with all activities logged and monitored.'
  },
  {
    question: 'Can you help digitize our paper documents?',
    answer: 'Yes, we coordinate scanning services, implement OCR for searchability, organize digital files, and set up backup systems. We can manage the entire paper-to-digital transition process.'
  },
  {
    question: 'What document management systems do you work with?',
    answer: 'Our VAs are proficient with Google Drive, Dropbox, SharePoint, OneDrive, Box, and most enterprise document management systems. We also integrate with CRM and project management tools.'
  },
  {
    question: 'How quickly can you organize our document chaos?',
    answer: 'Initial organization typically takes 1-2 weeks depending on volume. Most clients see 75% improvement in document retrieval speed within the first week and full optimization within 30 days.'
  },
  {
    question: 'Can you handle compliance and regulatory documents?',
    answer: 'Yes, we manage compliance documentation, maintain audit trails, track expiration dates, and ensure regulatory requirements are met. We work with legal, financial, and healthcare compliance standards.'
  }
]

const testimonial = {
  id: 'document-management-testimonial-1',
  name: 'Robert Martinez',
  role: 'COO',
  company: 'FinanceHub Solutions',
  content: 'Our documents were scattered across emails, drives, and desktops. Our Smartest Assistant VA created a centralized system that reduced document search time by 90%. Compliance audits that took days now take hours.',
  rating: 5,
  location: 'New York, NY'
}

export default function DocumentManagementPage() {
  return (
    <>
      <ServiceSchema 
        name="Document Management Virtual Assistant Services"
        description="Professional document management services by smart virtual assistants. File organization, digital archiving, document creation, and automated workflow systems."
        url="https://smartestassistant.com/services/document-management"
      />
      
      <FAQSchema 
        faqs={faqs}
        pageUrl="https://smartestassistant.com/services/document-management"
      />
      
      <ServiceHero
        title="Document Management by Smart Virtual Assistants"
        subtitle="ORGANIZED, ACCESSIBLE, SECURE"
        description="Transform document chaos into organized, searchable systems. Our smart VAs create efficient document workflows that save time and ensure nothing gets lost."
        features={[
          'Digital file organization and archiving',
          '75% faster document retrieval',
          'Automated workflow systems',
          'Secure cloud storage management'
        ]}
      />

      {/* Problem Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Stop Drowning in Document Chaos"
            description="Every minute spent searching for documents is a minute lost from growing your business"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl mb-4">📁</div>
              <H3 className="mb-3 text-red-600">15+ Hours Weekly</H3>
              <Paragraph className="text-gray-600">
                Average time executives waste on document management tasks
              </Paragraph>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🔍</div>
              <H3 className="mb-3 text-red-600">20% of Workday</H3>
              <Paragraph className="text-gray-600">
                Time employees spend searching for information
              </Paragraph>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💸</div>
              <H3 className="mb-3 text-red-600">$20,000 Annual Loss</H3>
              <Paragraph className="text-gray-600">
                Per employee from document inefficiencies
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Complete Document Management Solutions"
          description="From organization to automation, we handle every aspect of your document workflows"
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
          title="From Chaos to Clarity in 3 Steps"
          description="Our proven process transforms your document management"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {documentManagementProcess.map((step) => (
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
          title="Measurable Document Management Results"
          description="Real improvements our clients experience"
          centered
          theme="dark"
        />
        
        <div className="grid md:grid-cols-4 gap-8">
          <StatCard 
            value="75%" 
            label="Faster Retrieval"
            description="Document search time reduction"
            variant="dark"
          />
          <StatCard 
            value="90%" 
            label="Less Duplication"
            description="Reduction in duplicate files"
            variant="dark"
          />
          <StatCard 
            value="15 hrs" 
            label="Weekly Savings"
            description="Time saved on document tasks"
            variant="dark"
          />
          <StatCard 
            value="100%" 
            label="Compliance"
            description="Audit readiness maintained"
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
          title="Document Management Tools We Master"
          description="Proficient with all major document management platforms"
          centered
        />
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {['Google Drive', 'Dropbox', 'SharePoint', 'OneDrive', 'Box', 'DocuSign'].map((tool) => (
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
            title="Document Management Questions Answered"
            description="Everything you need to know about our document management services"
            centered
          />
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6">Ready to Organize Your Document Chaos?</H2>
          <Paragraph size="lg" className="mb-8">
            Join hundreds of businesses that have transformed their document management with smart VAs. 
            Start saving 15+ hours weekly on document tasks.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/schedule-a-call" size="xl">
              Get Your Document VA
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl">
              Calculate Your Savings
            </Button>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Related Services"
          description="Other ways our smart VAs can support your business"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/services/data-entry-research" className="group">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">
                Data Entry & Research
              </H3>
              <Paragraph className="text-gray-600">
                Accurate data processing and comprehensive research services
              </Paragraph>
            </div>
          </Link>
          
          <Link href="/services/project-management" className="group">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">
                Project Management
              </H3>
              <Paragraph className="text-gray-600">
                Strategic project coordination and deadline management
              </Paragraph>
            </div>
          </Link>
          
          <Link href="/services/executive-assistant" className="group">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">
                Executive Assistant
              </H3>
              <Paragraph className="text-gray-600">
                High-level support for executives and business leaders
              </Paragraph>
            </div>
          </Link>
        </div>
      </Section>
    </>
  )
}