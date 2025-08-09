import { Metadata } from 'next'
import { 
  Section, 
  SectionHeader,
  H2, 
  H3, 
  Paragraph, 
  Button
} from '@/components/ui'

export const metadata: Metadata = {
  title: 'Terms of Service | Smartest Assistant Service Agreement',
  description: 'Review Smartest Assistant terms of service, user responsibilities, service limitations, and legal agreements for virtual assistant services.',
  keywords: 'terms of service, service agreement, user agreement, virtual assistant terms, legal agreement, service conditions',
  openGraph: {
    title: 'Terms of Service | Smartest Assistant Service Agreement',
    description: 'Complete terms of service and user agreement for Smartest Assistant virtual assistant services.',
    url: 'https://smartestassistant.com/terms',
  }
}

const serviceTerms = [
  {
    title: 'Service Description',
    content: [
      {
        subtitle: 'Virtual Assistant Services',
        description: 'Smartest Assistant provides virtual assistant services including but not limited to administrative support, email management, calendar management, research, content creation, and other business support tasks as agreed upon with clients.'
      },
      {
        subtitle: 'Service Customization',
        description: 'Services are customized based on client needs and requirements. Specific deliverables, timelines, and expectations are established during the consultation and onboarding process.'
      },
      {
        subtitle: 'Service Availability',
        description: 'Services are provided during agreed-upon business hours and time zones. Emergency support may be available for current clients as specified in individual service agreements.'
      }
    ]
  },
  {
    title: 'User Responsibilities',
    content: [
      {
        subtitle: 'Account Information',
        description: 'You are responsible for maintaining accurate account information, including contact details, billing information, and service preferences. Notify us promptly of any changes.'
      },
      {
        subtitle: 'Access and Credentials',
        description: 'You are responsible for providing necessary access, credentials, and information required for virtual assistants to complete assigned tasks effectively and securely.'
      },
      {
        subtitle: 'Communication and Feedback',
        description: 'Provide clear instructions, timely feedback, and reasonable response times to ensure effective service delivery. Communicate any concerns or changes in requirements promptly.'
      }
    ]
  },
  {
    title: 'Payment Terms',
    content: [
      {
        subtitle: 'Billing and Payment',
        description: 'Payment terms are specified in individual service agreements. Generally, payments are due within 15 days of invoice date. Late payments may result in service suspension or termination.'
      },
      {
        subtitle: 'Service Changes',
        description: 'Changes to service scope, hours, or requirements may affect pricing. We will discuss and agree upon any pricing changes before implementation.'
      },
      {
        subtitle: 'Refund Policy',
        description: 'Refunds are considered on a case-by-case basis for unsatisfactory service delivery. We aim to resolve service issues through remedial actions before considering refunds.'
      }
    ]
  }
]

const limitations = [
  {
    limitation: 'Service Limitations',
    description: 'Virtual assistants cannot perform tasks requiring physical presence, specialized professional licenses, or access to systems/locations they cannot reasonably access remotely.',
    icon: '⚠️'
  },
  {
    limitation: 'Confidentiality Boundaries',
    description: 'While we maintain strict confidentiality, clients should not share information that violates third-party confidentiality agreements or legal restrictions.',
    icon: '🔒'
  },
  {
    limitation: 'Legal and Compliance',
    description: 'Clients are responsible for ensuring requested tasks comply with applicable laws, regulations, and industry standards. We cannot provide legal advice or compliance services.',
    icon: '⚖️'
  },
  {
    limitation: 'Technical Dependencies',
    description: 'Service delivery depends on reliable internet connectivity, access to required systems, and functionality of third-party platforms and tools.',
    icon: '🔧'
  }
]

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto">
          <H2 className="mb-6 text-center">Terms of Service</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600 text-center">
            These terms govern your use of Smartest Assistant services. By engaging our services, 
            you agree to these terms and conditions. Please read them carefully.
          </Paragraph>
          
          <div className="bg-amber-50 rounded-xl p-8 mb-8 border border-amber-200">
            <div className="flex items-start gap-4">
              <div className="text-2xl">📋</div>
              <div>
                <H3 className="mb-3 text-amber-800">Important Notice</H3>
                <Paragraph className="text-amber-700">
                  These terms constitute a legal agreement between you and Smartest Assistant. 
                  If you do not agree to these terms, please do not use our services. 
                  Specific service agreements may include additional terms.
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

      {/* Terms Sections */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto space-y-12">
          {serviceTerms.map((section, index) => (
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

      {/* Service Limitations */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Service Limitations and Boundaries"
          description="Understanding the scope and limitations of virtual assistant services"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {limitations.map((limitation, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">{limitation.icon}</span>
                <div>
                  <H3 className="mb-3">{limitation.limitation}</H3>
                  <Paragraph className="text-gray-600">
                    {limitation.description}
                  </Paragraph>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Intellectual Property */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Intellectual Property Rights"
            description="Protecting both client and company intellectual property"
            centered
            theme="dark"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <H3 className="mb-4 text-white">Client Intellectual Property</H3>
              <Paragraph className="text-blue-100">
                You retain all rights to your intellectual property, including business information, 
                strategies, and materials provided to virtual assistants. We do not claim ownership 
                of your intellectual property and implement strict confidentiality measures.
              </Paragraph>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <H3 className="mb-4 text-white">Company Intellectual Property</H3>
              <Paragraph className="text-blue-100">
                Smartest Assistant retains rights to our methodologies, training materials, systems, 
                and proprietary processes. Clients may not reproduce or distribute our proprietary 
                methods without written permission.
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>

      {/* Liability and Disclaimers */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Liability and Disclaimers"
            description="Important limitations and disclaimers regarding service liability"
            centered
          />
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <H3 className="mb-4 text-red-700">Service Disclaimer</H3>
              <Paragraph className="text-gray-600 mb-4">
                Virtual assistant services are provided "as is" without warranties of any kind. 
                While we strive for excellence, we cannot guarantee specific outcomes or results 
                from our services. Service quality depends on various factors including client 
                communication, system availability, and external circumstances.
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <H3 className="mb-4 text-red-700">Limitation of Liability</H3>
              <Paragraph className="text-gray-600 mb-4">
                Our liability is limited to the amount paid for services in the preceding 30 days. 
                We are not liable for indirect, consequential, or punitive damages arising from 
                service use or delivery. This limitation applies to the fullest extent permitted by law.
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <H3 className="mb-4 text-green-700">Our Commitment</H3>
              <Paragraph className="text-gray-600 mb-4">
                Despite these necessary legal limitations, we are committed to providing excellent 
                service and addressing any issues promptly and professionally. We stand behind 
                our work and will work to resolve problems to your satisfaction.
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>

      {/* Termination and Changes */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Service Termination and Changes"
            description="Understanding termination procedures and service modifications"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4 text-primary-blue">Termination by Client</H3>
              <Paragraph className="text-gray-600 mb-4">
                Clients may terminate services with 30 days written notice. Final invoices will 
                include work completed through the termination date. We will provide transition 
                assistance as reasonably requested.
              </Paragraph>
              <div className="text-sm font-medium text-primary-blue">
                30-day notice required
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4 text-primary-blue">Termination by Company</H3>
              <Paragraph className="text-gray-600 mb-4">
                We may terminate services for non-payment, violation of terms, or if continuing 
                the relationship is not in the best interest of either party. We will provide 
                reasonable notice when possible.
              </Paragraph>
              <div className="text-sm font-medium text-primary-blue">
                Reasonable notice provided
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4 text-primary-blue">Terms Changes</H3>
              <Paragraph className="text-gray-600 mb-4">
                We may update these terms periodically to reflect service changes or legal 
                requirements. Significant changes will be communicated with reasonable advance notice.
              </Paragraph>
              <div className="text-sm font-medium text-primary-blue">
                Advance notice for changes
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact and Disputes */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Questions or Disputes?"
            description="We're committed to resolving any issues professionally and promptly"
            centered
            theme="dark"
          />
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <H3 className="mb-6 text-white">Contact Our Legal Team</H3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="font-semibold text-blue-100 mb-2">Terms Questions</div>
                <div className="text-white mb-1">legal@smartestassistant.com</div>
                <div className="text-blue-200 text-sm">Contract and terms clarification</div>
              </div>
              
              <div>
                <div className="font-semibold text-blue-100 mb-2">Service Disputes</div>
                <div className="text-white mb-1">disputes@smartestassistant.com</div>
                <div className="text-blue-200 text-sm">Service issues and resolution</div>
              </div>
            </div>
            
            <Paragraph className="text-blue-100">
              We believe in resolving disputes through direct communication and mutual understanding. 
              Most issues can be resolved quickly through our client success team.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6">Ready to Get Started?</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600">
            Now that you understand our terms of service, let's discuss how our virtual assistants 
            can help your business succeed. Schedule your consultation today.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/schedule-a-call" variant="primary" size="xl">
              Schedule Consultation
            </Button>
            <Button as="link" href="/contact" variant="outline" size="xl">
              Contact Legal Team
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}