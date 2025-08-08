import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Section, 
  SectionHeader,
  H2, 
  H3, 
  Paragraph, 
  Button
} from '@/components/ui'

export const metadata: Metadata = {
  title: 'Privacy Policy | Smartest Assistant Data Protection & Security',
  description: 'Learn how Smartest Assistant protects your personal information and business data. Our comprehensive privacy policy outlines data collection, usage, and security practices.',
  keywords: 'privacy policy, data protection, information security, confidentiality, virtual assistant privacy',
  openGraph: {
    title: 'Privacy Policy | Smartest Assistant Data Protection',
    description: 'Comprehensive privacy policy outlining how we protect your personal and business information.',
    url: 'https://smartestassistant.com/privacy',
  }
}

const privacySections = [
  {
    title: 'Information We Collect',
    content: [
      {
        subtitle: 'Personal Information',
        description: 'We collect information you provide directly to us, such as when you create an account, request a consultation, or communicate with our team. This may include your name, email address, phone number, company information, and communication preferences.'
      },
      {
        subtitle: 'Business Information', 
        description: 'To provide virtual assistant services, we may collect information about your business operations, processes, and requirements. This information is used solely to match you with appropriate VAs and deliver requested services.'
      },
      {
        subtitle: 'Usage Information',
        description: 'We collect information about how you use our website and services, including pages visited, features used, and interaction patterns. This helps us improve our services and user experience.'
      }
    ]
  },
  {
    title: 'How We Use Your Information',
    content: [
      {
        subtitle: 'Service Delivery',
        description: 'We use your information to provide virtual assistant services, match you with appropriate VAs, and ensure service quality and effectiveness.'
      },
      {
        subtitle: 'Communication',
        description: 'We may use your contact information to send service updates, respond to inquiries, and provide customer support. You can opt out of promotional communications at any time.'
      },
      {
        subtitle: 'Improvement and Analytics',
        description: 'We analyze usage patterns and feedback to improve our services, develop new features, and enhance user experience. This analysis uses aggregated, non-personally identifiable data.'
      }
    ]
  },
  {
    title: 'Information Sharing and Disclosure',
    content: [
      {
        subtitle: 'Virtual Assistants',
        description: 'We share relevant business information with assigned virtual assistants to enable them to provide requested services effectively. All VAs are bound by strict confidentiality agreements.'
      },
      {
        subtitle: 'Service Providers',
        description: 'We may share information with trusted third-party service providers who assist in delivering our services, such as technology platforms, payment processors, and communication tools. These providers are contractually obligated to protect your information.'
      },
      {
        subtitle: 'Legal Requirements',
        description: 'We may disclose information when required by law, legal process, or to protect the rights, property, or safety of Smartest Assistant, our users, or others.'
      }
    ]
  }
]

const dataSecurity = [
  {
    measure: 'Encryption',
    description: 'All data transmission is encrypted using industry-standard SSL/TLS protocols. Sensitive data is encrypted at rest using advanced encryption standards.'
  },
  {
    measure: 'Access Controls',
    description: 'We implement role-based access controls ensuring only authorized personnel can access your information on a need-to-know basis.'
  },
  {
    measure: 'Regular Audits',
    description: 'Our security practices are regularly reviewed and audited to ensure compliance with industry standards and best practices.'
  },
  {
    measure: 'Staff Training',
    description: 'All team members receive comprehensive training on data protection, confidentiality, and security best practices.'
  }
]

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto">
          <H2 className="mb-6 text-center">Privacy Policy</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600 text-center">
            Your privacy and data security are fundamental to everything we do. This policy explains how we collect, 
            use, and protect your information when you use Smartest Assistant services.
          </Paragraph>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-2xl">🛡️</div>
              <div>
                <H3 className="mb-3 text-primary-blue">Our Commitment to Your Privacy</H3>
                <Paragraph>
                  We are committed to protecting your personal and business information with the highest standards 
                  of security and confidentiality. This privacy policy is designed to be transparent about our 
                  data practices and your rights.
                </Paragraph>
              </div>
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-500">
            <div>Last updated: January 2024</div>
            <div>Effective date: January 1, 2024</div>
          </div>
        </div>
      </Section>

      {/* Privacy Sections */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto space-y-12">
          {privacySections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <H2 className="mb-8 text-primary-blue">{section.title}</H2>
              <div className="space-y-6">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <H3 className="mb-3">{item.subtitle}</H3>
                    <Paragraph className="text-gray-600 leading-relaxed">
                      {item.description}
                    </Paragraph>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Data Security */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Data Security Measures"
          description="Comprehensive security practices to protect your information"
          centered
          theme="dark"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {dataSecurity.map((measure, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-accent-amber text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <H3 className="text-white">{measure.measure}</H3>
              </div>
              <Paragraph className="text-blue-100">
                {measure.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </Section>

      {/* Your Rights */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Your Rights and Choices"
            description="You have control over your personal information and how it's used"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4 text-primary-blue">Access and Correction</H3>
              <Paragraph className="text-gray-600 mb-4">
                You have the right to access, update, or correct your personal information. Contact us to review 
                or modify your information at any time.
              </Paragraph>
              <div className="text-sm font-medium text-primary-blue">
                Email: privacy@smartestassistant.com
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4 text-primary-blue">Data Deletion</H3>
              <Paragraph className="text-gray-600 mb-4">
                You can request deletion of your personal information, subject to legal and contractual 
                obligations. We will respond to deletion requests within 30 days.
              </Paragraph>
              <div className="text-sm font-medium text-primary-blue">
                Subject to service agreements
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4 text-primary-blue">Communication Preferences</H3>
              <Paragraph className="text-gray-600 mb-4">
                You can opt out of promotional communications at any time by using unsubscribe links 
                or contacting us directly. Service-related communications may continue as necessary.
              </Paragraph>
              <div className="text-sm font-medium text-primary-blue">
                Manage preferences anytime
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4 text-primary-blue">Data Portability</H3>
              <Paragraph className="text-gray-600 mb-4">
                Upon request, we can provide your personal information in a structured, commonly used format 
                to facilitate transfer to other service providers.
              </Paragraph>
              <div className="text-sm font-medium text-primary-blue">
                Available in standard formats
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Information */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Questions About Our Privacy Policy?"
            description="We're here to help clarify any privacy concerns or questions you may have"
            centered
          />
          
          <div className="bg-white rounded-xl p-8">
            <H3 className="mb-6">Contact Our Privacy Team</H3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="font-semibold text-gray-800 mb-2">Privacy Officer</div>
                <div className="text-gray-600 mb-1">privacy@smartestassistant.com</div>
                <div className="text-gray-500 text-sm">Response within 48 hours</div>
              </div>
              
              <div>
                <div className="font-semibold text-gray-800 mb-2">General Inquiries</div>
                <div className="text-gray-600 mb-1">hello@smartestassistant.com</div>
                <div className="text-gray-500 text-sm">General privacy questions</div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <Paragraph className="text-gray-700">
                <strong>Policy Updates:</strong> We may update this privacy policy periodically to reflect 
                changes in our practices or applicable laws. We will notify users of significant changes 
                via email or prominent website notices.
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready to Work with a Privacy-First VA Service?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Experience peace of mind knowing your business information is protected with industry-leading 
            security measures and transparent privacy practices.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Schedule Secure Consultation
            </Button>
            <Button as="link" href="/contact" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Contact Privacy Team
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}