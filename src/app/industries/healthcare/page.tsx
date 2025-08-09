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
  title: 'Virtual Assistants for Healthcare | HIPAA-Compliant Medical VAs | Smartest Assistant',
  description: 'Specialized virtual assistant services for healthcare providers, medical practices, and health tech companies. HIPAA-compliant VAs who understand medical workflows and patient care.',
  keywords: 'healthcare virtual assistant, medical virtual assistant, HIPAA compliant VA, healthcare practice management, medical office assistant, patient coordination VA',
  openGraph: {
    title: 'Virtual Assistants for Healthcare | HIPAA-Compliant Medical VAs',
    description: 'Specialized virtual assistant services for healthcare providers. HIPAA-compliant VAs who understand medical workflows.',
    url: 'https://smartestassistant.com/industries/healthcare',
  }
}

const healthcareChallenges = [
  {
    challenge: 'Patient Scheduling & Coordination',
    description: 'Complex appointment scheduling with multiple providers and insurance verification',
    solution: 'Medical VAs trained in practice management systems and insurance processes',
    impact: 'Reduce scheduling errors by 75% and improve patient satisfaction'
  },
  {
    challenge: 'Insurance & Billing Administration',
    description: 'Time-consuming prior authorizations and insurance claim processing',
    solution: 'VAs experienced with medical billing, coding, and insurance workflows',
    impact: 'Accelerate claims processing and reduce denials by 40%'
  },
  {
    challenge: 'Patient Communication & Follow-up',
    description: 'Ensuring timely patient communication while maintaining HIPAA compliance',
    solution: 'HIPAA-trained VAs who manage patient communications professionally',
    impact: 'Improve patient engagement and reduce no-show rates by 30%'
  },
  {
    challenge: 'Medical Documentation & Records',
    description: 'Maintaining accurate patient records and documentation requirements',
    solution: 'VAs trained in medical terminology and EHR systems',
    impact: 'Ensure 100% documentation compliance and reduce administrative burden'
  }
]

const healthcareServices = [
  {
    service: 'Patient Scheduling & Coordination',
    description: 'Appointment scheduling, insurance verification, patient reminders',
    tools: 'Epic, Cerner, Athena, SimplePractice, Kareo'
  },
  {
    service: 'Medical Billing Support',
    description: 'Claims processing, prior authorization, payment posting, denial management',
    tools: 'Epic, AdvancedMD, DrChrono, ClearGage'
  },
  {
    service: 'Patient Communication',
    description: 'Appointment confirmations, test result notifications, follow-up calls',
    tools: 'HIPAA-compliant communication platforms'
  },
  {
    service: 'Medical Documentation',
    description: 'Chart review, documentation assistance, referral coordination',
    tools: 'EHR systems, medical dictation software'
  },
  {
    service: 'Healthcare Marketing',
    description: 'Patient education content, social media, reputation management',
    tools: 'Healthcare-compliant marketing platforms'
  },
  {
    service: 'Telemedicine Support',
    description: 'Virtual visit coordination, technical support, patient onboarding',
    tools: 'Zoom Healthcare, Doxy.me, Teladoc platforms'
  }
]

const healthcareTestimonials = [
  {
    id: 'healthcare-testimonial-1',
    name: 'Dr. Patricia Williams',
    role: 'Family Medicine Physician',
    company: 'Williams Family Practice',
    content: 'Our VA has transformed our practice efficiency. They handle all patient scheduling, insurance verification, and follow-up calls while maintaining perfect HIPAA compliance. I can focus on patient care instead of administrative tasks.',
    rating: 5,
    location: 'Phoenix, AZ'
  },
  {
    id: 'healthcare-testimonial-2',
    name: 'Michael Rodriguez',
    role: 'Practice Administrator',
    company: 'Central Valley Medical Group',
    content: 'Managing a 12-provider practice was overwhelming until we got our Smartest Assistant VA. They coordinate schedules across multiple locations, handle complex insurance issues, and maintain our patient satisfaction scores above 95%.',
    rating: 5,
    location: 'Fresno, CA'
  }
]

const complianceFeatures = [
  'HIPAA compliance training and certification',
  'Secure, encrypted communication channels',
  'Signed Business Associate Agreements (BAAs)',
  'Regular compliance audits and monitoring',
  'HITECH Act adherence',
  'State-specific healthcare regulations knowledge'
]

const faqs = [
  {
    question: 'Are your healthcare VAs HIPAA compliant?',
    answer: 'Yes, all our healthcare VAs receive comprehensive HIPAA compliance training and certification. We maintain signed Business Associate Agreements (BAAs), use only HIPAA-compliant communication channels, and conduct regular compliance audits to ensure patient data protection.'
  },
  {
    question: 'What EHR and practice management systems do your VAs work with?',
    answer: 'Our healthcare VAs are trained on major EHR systems including Epic, Cerner, Athena, SimplePractice, Kareo, AdvancedMD, and DrChrono. They can quickly adapt to your specific practice management software and workflows.'
  },
  {
    question: 'Can your VAs handle medical billing and insurance processes?',
    answer: 'Absolutely. Our healthcare VAs are experienced with medical billing, CPT/ICD-10 coding, prior authorization processes, claims processing, and insurance verification. They understand the complexity of healthcare reimbursement and can help reduce claim denials.'
  },
  {
    question: 'How do you ensure patient privacy and data security?',
    answer: 'We implement multiple layers of security including encrypted communications, secure workstations, VPN access, multi-factor authentication, and strict access controls. All VAs sign confidentiality agreements and receive ongoing security training.'
  },
  {
    question: 'Can your VAs support telemedicine and virtual care initiatives?',
    answer: 'Yes, our VAs are experienced with telemedicine platforms and virtual care coordination. They can help with patient onboarding for virtual visits, technical support, appointment scheduling, and follow-up communications for telehealth services.'
  }
]

export default function HealthcarePage() {
  return (
    <>
      <ServiceSchema 
        name="Virtual Assistant Services for Healthcare"
        description="HIPAA-compliant virtual assistant services for healthcare providers, medical practices, and health technology companies."
        url="https://smartestassistant.com/industries/healthcare"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <IndustryHero
        industry="Healthcare"
        industryBenefits={[
          'HIPAA-compliant operations',
          'Medical terminology expertise',
          'EHR system proficiency',
          'Patient-first approach'
        ]}
      />

      {/* Healthcare Challenges */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Healthcare Administrative Challenges We Solve"
          description="Specialized support for the unique operational demands of healthcare providers"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {healthcareChallenges.map((item, index) => (
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

      {/* Healthcare Services */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Comprehensive Healthcare VA Services"
          description="Complete administrative support tailored for medical practices and healthcare organizations"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {healthcareServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-3xl mb-4">
                {index === 0 && '📅'}
                {index === 1 && '💳'}
                {index === 2 && '💬'}
                {index === 3 && '📋'}
                {index === 4 && '📱'}
                {index === 5 && '💻'}
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

      {/* HIPAA Compliance Section */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="HIPAA Compliance & Security Standards"
          description="Your patient data security is our top priority with comprehensive compliance measures"
          theme="dark"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {complianceFeatures.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-white font-medium">{feature}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto">
            <H3 className="mb-4 text-white">100% HIPAA Compliant Operations</H3>
            <Paragraph className="text-blue-100">
              Every VA undergoes comprehensive HIPAA training and certification. We maintain strict compliance protocols, 
              signed Business Associate Agreements, and regular audits to ensure your patient data remains secure.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Healthcare Practice Results"
          description="Measurable improvements healthcare providers experience with specialized VA support"
        />
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <StatCard 
            value="75%" 
            label="Fewer scheduling errors"
            description="Improved patient satisfaction"
          />
          <StatCard 
            value="40%" 
            label="Faster claims processing"
            description="Reduced billing delays"
          />
          <StatCard 
            value="30%" 
            label="Reduced no-shows"
            description="Better patient engagement"
          />
          <StatCard 
            value="100%" 
            label="HIPAA compliance"
            description="Zero compliance issues"
          />
        </div>
      </Section>

      {/* Success Stories */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Healthcare Success Stories"
          description="How medical practices improve patient care and operational efficiency"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {healthcareTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Healthcare VA Frequently Asked Questions"
            description="Common questions from healthcare providers and administrators"
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
          <H2 className="mb-6 text-white">Ready to Transform Your Healthcare Practice?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Get HIPAA-compliant VAs who understand healthcare workflows and put patient care first. 
            Reduce administrative burden while maintaining the highest standards of medical practice.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Book Healthcare Consultation
            </Button>
            <Button as="link" href="/resources/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Practice Savings
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ HIPAA-compliant operations</div>
            <div>✅ Medical terminology expertise</div>
            <div>✅ Start within 48 hours</div>
          </div>
        </div>
      </Section>

      {/* Related Pages */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Healthcare Services"
            description="Comprehensive support for healthcare organizations and medical practices"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/customer-support" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🎧</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Patient Support</H3>
              <Paragraph className="text-gray-600">
                Dedicated patient communication and support services that maintain healthcare standards.
              </Paragraph>
            </Link>
            
            <Link href="/services/data-entry-research" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Medical Data Entry</H3>
              <Paragraph className="text-gray-600">
                Accurate medical data entry and research services with HIPAA compliance and medical terminology expertise.
              </Paragraph>
            </Link>
            
            <Link href="/services/calendar-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📅</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Medical Scheduling</H3>
              <Paragraph className="text-gray-600">
                Professional appointment scheduling and coordination services for medical practices and healthcare providers.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}