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
  title: 'Virtual Assistants for Law Firms | Legal VAs | Smartest Assistant',
  description: 'Specialized virtual assistant services for law firms, attorneys, and legal practices. Professional VAs who understand legal workflows, client confidentiality, and law practice management.',
  keywords: 'legal virtual assistant, law firm virtual assistant, attorney virtual assistant, legal practice management, paralegal assistant, legal research VA, law office assistant',
  openGraph: {
    title: 'Virtual Assistants for Law Firms | Legal VAs',
    description: 'Specialized virtual assistant services for law firms and attorneys. Professional VAs who understand legal workflows and client confidentiality.',
    url: 'https://smartestassistant.com/industries/legal',
  }
}

const legalChallenges = [
  {
    challenge: 'Document Management & Organization',
    description: 'Massive case files, discovery documents, and legal research requiring precise organization',
    solution: 'Legal VAs trained in document management systems and legal filing protocols',
    impact: 'Reduce document retrieval time by 70% and eliminate lost files'
  },
  {
    challenge: 'Client Communication & Case Updates',
    description: 'Maintaining regular client contact while managing attorney-client privilege',
    solution: 'Professional VAs trained in legal ethics and confidential communication protocols',
    impact: 'Improve client satisfaction scores and reduce response times by 65%'
  },
  {
    challenge: 'Legal Research & Case Preparation',
    description: 'Time-intensive research, cite checking, and case law compilation',
    solution: 'Research-focused VAs experienced with legal databases and citation standards',
    impact: 'Increase research efficiency by 80% and improve brief quality'
  },
  {
    challenge: 'Court Filing & Deadline Management',
    description: 'Complex court requirements, multiple deadlines, and jurisdiction-specific rules',
    solution: 'VAs trained in court procedures, e-filing systems, and deadline tracking',
    impact: 'Achieve 100% on-time filing rate and eliminate missed deadlines'
  }
]

const legalServices = [
  {
    service: 'Legal Research & Analysis',
    description: 'Case law research, legal precedent analysis, cite checking, brief preparation support',
    tools: 'Westlaw, LexisNexis, Bloomberg Law, Fastcase, Google Scholar'
  },
  {
    service: 'Document Management',
    description: 'Case file organization, discovery management, contract review support, document indexing',
    tools: 'iManage, NetDocuments, SharePoint, Relativity, Concordance'
  },
  {
    service: 'Client Communication',
    description: 'Client intake, case updates, appointment scheduling, confidential correspondence',
    tools: 'Clio, MyCase, PracticePanther, LawPay, secure communication platforms'
  },
  {
    service: 'Court Filing & Administration',
    description: 'E-filing preparation, court document formatting, deadline tracking, service coordination',
    tools: 'Electronic filing systems, court portals, calendar management software'
  },
  {
    service: 'Practice Management Support',
    description: 'Billing assistance, time tracking, case status updates, administrative coordination',
    tools: 'TimeSolv, Bill4Time, QuickBooks for Law Firms, PCLaw'
  },
  {
    service: 'Marketing & Business Development',
    description: 'Legal content creation, referral coordination, professional networking support',
    tools: 'Legal marketing platforms, CRM systems, professional networks'
  }
]

const legalTestimonials = [
  {
    id: 'legal-testimonial-1',
    name: 'Robert Mitchell',
    role: 'Managing Partner',
    company: 'Mitchell & Associates Law',
    content: 'Our legal VA has transformed our practice efficiency. They handle all research, document preparation, and client communications while maintaining absolute confidentiality. We can focus on legal strategy instead of administrative tasks.',
    rating: 5,
    location: 'Chicago, IL'
  },
  {
    id: 'legal-testimonial-2',
    name: 'Sarah Davidson',
    role: 'Solo Practitioner',
    company: 'Davidson Family Law',
    content: 'As a solo attorney, I was drowning in paperwork and client communications. My Smartest Assistant VA manages my entire practice administration, allowing me to take on 40% more cases while maintaining quality service.',
    rating: 5,
    location: 'Austin, TX'
  }
]

const ethicsCompliance = [
  'Attorney-client privilege protection',
  'Professional conduct rules adherence',
  'Confidentiality agreements and protocols',
  'Conflict of interest awareness',
  'Legal ethics training and certification',
  'State bar compliance requirements',
  'Document retention policies',
  'Secure communication standards'
]

const faqs = [
  {
    question: 'Do your legal VAs understand attorney-client privilege and legal confidentiality?',
    answer: 'Yes, all our legal VAs receive comprehensive training on attorney-client privilege, legal ethics, and confidentiality requirements. They sign strict confidentiality agreements and understand the professional conduct rules governing legal practice.'
  },
  {
    question: 'Can your VAs perform legal research and cite checking?',
    answer: 'Absolutely. Our legal VAs are trained on major legal research platforms including Westlaw, LexisNexis, and Bloomberg Law. They can perform case law research, cite checking, and help prepare legal briefs and memoranda.'
  },
  {
    question: 'How do you ensure compliance with state bar regulations?',
    answer: 'We stay current with state bar rules and regulations across jurisdictions. Our VAs are trained on professional conduct requirements and understand the limitations of their role to ensure compliance with unauthorized practice of law regulations.'
  },
  {
    question: 'Can your VAs work with legal practice management software?',
    answer: 'Yes, our legal VAs are experienced with major practice management systems including Clio, MyCase, PracticePanther, and document management systems like iManage and NetDocuments. They can quickly adapt to your firm\'s specific software and workflows.'
  },
  {
    question: 'Do you work with both large firms and solo practitioners?',
    answer: 'We serve legal practices of all sizes, from large law firms to solo practitioners. Our VAs adapt to your specific practice needs, whether you need support with complex litigation or general practice administration.'
  }
]

export default function LegalPage() {
  return (
    <>
      <ServiceSchema 
        name="Virtual Assistant Services for Legal Practices"
        description="Specialized virtual assistant services for law firms, attorneys, and legal practices with expertise in legal workflows and client confidentiality."
        url="https://smartestassistant.com/industries/legal"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <IndustryHero
        industry="Legal & Law Firms"
        industryBenefits={[
          'Attorney-client privilege trained',
          'Legal research expertise',
          'Court filing proficiency',
          'Practice management knowledge'
        ]}
      />

      {/* Legal Challenges */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Legal Practice Challenges We Solve"
          description="Specialized support for the unique operational demands of law firms and attorneys"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {legalChallenges.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-red-100 rounded-full p-3">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
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

      {/* Legal Services */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Comprehensive Legal VA Services"
          description="Complete practice support tailored for law firms and legal professionals"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {legalServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-3xl mb-4">
                {index === 0 && '📚'}
                {index === 1 && '📁'}
                {index === 2 && '💼'}
                {index === 3 && '⚖️'}
                {index === 4 && '📊'}
                {index === 5 && '🤝'}
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

      {/* Ethics & Compliance Section */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Legal Ethics & Professional Standards"
          description="Your client confidentiality and professional compliance are our highest priorities"
          theme="dark"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ethicsCompliance.map((standard, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-white font-medium text-sm">{standard}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto">
            <H3 className="mb-4 text-white">Professional Conduct Standards</H3>
            <Paragraph className="text-blue-100">
              Every legal VA receives comprehensive training on professional conduct rules, attorney-client privilege, 
              and legal ethics. We maintain strict confidentiality protocols and compliance with state bar regulations.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Legal Practice Results"
          description="Measurable improvements law firms experience with specialized legal VA support"
        />
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <StatCard 
            value="70%" 
            label="Faster document retrieval"
            description="Improved file organization"
          />
          <StatCard 
            value="80%" 
            label="Research efficiency gain"
            description="Faster case preparation"
          />
          <StatCard 
            value="65%" 
            label="Improved response times"
            description="Better client satisfaction"
          />
          <StatCard 
            value="100%" 
            label="On-time court filings"
            description="Zero missed deadlines"
          />
        </div>
        
        <div className="text-center">
          <div className="bg-green-50 rounded-xl p-8 max-w-3xl mx-auto">
            <H3 className="mb-4 text-green-800">Ethics & Confidentiality Guarantee</H3>
            <Paragraph>
              We guarantee strict adherence to attorney-client privilege and legal ethics standards. 
              Our VAs are bound by comprehensive confidentiality agreements and professional conduct protocols.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Success Stories */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Legal Practice Success Stories"
          description="How law firms improve efficiency and client service with specialized legal VAs"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {legalTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Legal VA Frequently Asked Questions"
            description="Common questions from attorneys and law firm administrators"
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
          <H2 className="mb-6 text-white">Ready to Scale Your Legal Practice?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Get legal VAs who understand attorney-client privilege, legal research, and practice management. 
            Focus on legal strategy while we handle the administration with complete confidentiality.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Book Legal Consultation
            </Button>
            <Button as="link" href="/resources/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Practice ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Attorney-client privilege trained</div>
            <div>✅ Legal research expertise</div>
            <div>✅ Start within 48 hours</div>
          </div>
        </div>
      </Section>

      {/* Related Pages */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Legal Services"
            description="Comprehensive support for legal professionals and law firms"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/data-entry-research" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📚</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Legal Research</H3>
              <Paragraph className="text-gray-600">
                Comprehensive legal research support including case law analysis, cite checking, and brief preparation.
              </Paragraph>
            </Link>
            
            <Link href="/services/executive-assistant" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">⚖️</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Legal Administration</H3>
              <Paragraph className="text-gray-600">
                High-level administrative support for partners and senior attorneys, including client coordination and case management.
              </Paragraph>
            </Link>
            
            <Link href="/services/calendar-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📅</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Legal Scheduling</H3>
              <Paragraph className="text-gray-600">
                Professional scheduling coordination for court dates, client meetings, depositions, and legal deadlines.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}