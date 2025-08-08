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
  title: 'Legal Disclaimer | Service Limitations & Disclaimers | Smartest Assistant',
  description: 'Legal disclaimers regarding virtual assistant services, including limitations of liability, service disclaimers, and important legal notices.',
  keywords: 'legal disclaimer, service limitations, liability disclaimer, virtual assistant disclaimer, legal notices',
  openGraph: {
    title: 'Legal Disclaimer | Service Limitations & Disclaimers',
    description: 'Important legal disclaimers and limitations regarding our virtual assistant services.',
    url: 'https://smartestassistant.com/legal/disclaimer',
  }
}

const serviceDisclaimers = [
  {
    category: 'Service Performance',
    disclaimers: [
      {
        title: 'No Guarantee of Results',
        content: 'While we strive to provide exceptional virtual assistant services, we cannot guarantee specific business outcomes, productivity improvements, or financial results. Individual results may vary based on factors beyond our control.'
      },
      {
        title: 'Service Availability',
        content: 'We aim to provide continuous service availability but do not guarantee uninterrupted access. Scheduled maintenance, technical issues, or unforeseen circumstances may temporarily affect service delivery.'
      },
      {
        title: 'Quality Variations',
        content: 'Service quality may vary between different virtual assistants and tasks. While we maintain high standards, individual VA performance and task complexity may impact delivery quality.'
      }
    ]
  },
  {
    category: 'Third-Party Services',
    disclaimers: [
      {
        title: 'External Tool Dependencies',
        content: 'Our services may rely on third-party tools, software, or platforms. We are not responsible for the availability, functionality, or security of these external services.'
      },
      {
        title: 'Integration Limitations',
        content: 'Integrations with client systems or third-party platforms may have technical limitations or compatibility issues that could affect service delivery.'
      },
      {
        title: 'Third-Party Content',
        content: 'We are not responsible for the accuracy, completeness, or reliability of information obtained from third-party sources during research or other tasks.'
      }
    ]
  },
  {
    category: 'Professional Services',
    disclaimers: [
      {
        title: 'Not Professional Advice',
        content: 'Our virtual assistants provide administrative and operational support but do not offer legal, financial, medical, or other professional advice. Consult qualified professionals for specialized guidance.'
      },
      {
        title: 'Industry Compliance',
        content: 'While we understand various industry requirements, clients are responsible for ensuring that delegated tasks comply with their specific regulatory and compliance obligations.'
      },
      {
        title: 'Decision Authority',
        content: 'Virtual assistants act under client direction and authority. We are not responsible for business decisions made by clients based on VA recommendations or research.'
      }
    ]
  }
]

const liabilityLimitations = [
  {
    type: 'Direct Damages',
    description: 'Limitation of liability for direct damages arising from service delivery',
    limitation: 'Maximum liability limited to fees paid for services in the 12 months prior to the claim',
    exclusions: [
      'Death or personal injury caused by negligence',
      'Fraud or fraudulent misrepresentation',
      'Violations of applicable law that cannot be limited'
    ]
  },
  {
    type: 'Indirect Damages',
    description: 'Exclusion of liability for consequential and indirect damages',
    limitation: 'We exclude liability for indirect, consequential, special, or punitive damages',
    exclusions: [
      'Loss of profits or business opportunities',
      'Loss of data or business interruption',
      'Reputational damage or business loss'
    ]
  },
  {
    type: 'Time Limitations',
    description: 'Time limits for bringing claims against Smartest Assistant',
    limitation: 'Claims must be brought within 12 months of the incident or when you reasonably should have known',
    exclusions: [
      'Statutory rights that cannot be limited',
      'Claims for personal injury or death',
      'Fraudulent concealment of claims'
    ]
  }
]

const intellectualProperty = [
  {
    area: 'Work Product Ownership',
    description: 'Ownership of work created by virtual assistants',
    details: [
      'Work product created specifically for clients belongs to the client',
      'Generic templates, processes, and methodologies remain our property',
      'Pre-existing intellectual property is not transferred to clients',
      'Clients grant us license to use work product for service delivery'
    ]
  },
  {
    area: 'Third-Party IP Rights',
    description: 'Responsibility for respecting third-party intellectual property',
    details: [
      'Clients are responsible for ensuring tasks do not infringe third-party rights',
      'We will not knowingly assist in intellectual property violations',
      'Clients must provide proper licenses for software and tools',
      'Copyright and trademark compliance is client responsibility'
    ]
  },
  {
    area: 'Confidential Information',
    description: 'Treatment of confidential and proprietary information',
    details: [
      'We maintain confidentiality of client information per our agreements',
      'Clients retain ownership of their confidential information',
      'We may use anonymized data for service improvement',
      'Confidentiality survives termination of service agreements'
    ]
  }
]

const jurisdictionInformation = [
  {
    jurisdiction: 'Governing Law',
    details: 'These disclaimers and our services are governed by the laws of [State/Country], without regard to conflict of law principles.',
    implications: [
      'Legal disputes will be resolved under specified jurisdiction laws',
      'Local consumer protection laws may provide additional rights',
      'International clients may have additional protections'
    ]
  },
  {
    jurisdiction: 'Dispute Resolution',
    details: 'Disputes will be resolved through binding arbitration or in courts of competent jurisdiction in [Location].',
    implications: [
      'Arbitration may be required before court proceedings',
      'Class action waivers may apply where legally permitted',
      'Alternative dispute resolution options available'
    ]
  },
  {
    jurisdiction: 'International Considerations',
    details: 'International clients may have additional rights under their local laws that cannot be disclaimed.',
    implications: [
      'EU consumer protection laws may override certain limitations',
      'Local data protection laws apply to personal information',
      'Currency and tax implications vary by jurisdiction'
    ]
  }
]

export default function DisclaimerPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto">
          <H2 className="mb-6 text-center">Legal Disclaimer</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600 text-center">
            This disclaimer contains important legal information about the limitations and disclaimers applicable to 
            our virtual assistant services. Please read this information carefully before using our services.
          </Paragraph>
          
          <div className="bg-yellow-50 rounded-xl p-8 mb-8 border border-yellow-200">
            <div className="flex items-start gap-4">
              <div className="text-2xl">⚠️</div>
              <div>
                <H3 className="mb-3 text-yellow-800">Important Legal Notice</H3>
                <Paragraph className="text-yellow-700 mb-4">
                  These disclaimers form part of our Terms of Service and limit our liability in connection with 
                  our virtual assistant services. By using our services, you acknowledge and agree to these limitations.
                </Paragraph>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-yellow-800 mb-1">Legal Effect:</div>
                    <div className="text-yellow-700">These disclaimers have legal force and effect</div>
                  </div>
                  <div>
                    <div className="font-semibold text-yellow-800 mb-1">Acceptance:</div>
                    <div className="text-yellow-700">Use of services constitutes acceptance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-500">
            <div>Last updated: January 2024</div>
            <div>Effective date: January 1, 2024</div>
          </div>
        </div>
      </Section>

      {/* Service Disclaimers */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Service Disclaimers"
          description="Important disclaimers regarding the nature and limitations of our virtual assistant services"
          centered
        />
        
        <div className="space-y-12">
          {serviceDisclaimers.map((category, index) => (
            <div key={index}>
              <H3 className="mb-6 text-center text-primary-blue">{category.category}</H3>
              <div className="grid md:grid-cols-1 gap-6">
                {category.disclaimers.map((disclaimer, disclaimerIndex) => (
                  <div key={disclaimerIndex} className="bg-white rounded-xl p-8 shadow-lg">
                    <H3 className="mb-4 text-red-700">{disclaimer.title}</H3>
                    <Paragraph className="text-gray-600">
                      {disclaimer.content}
                    </Paragraph>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Liability Limitations */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Limitation of Liability"
          description="Legal limitations on our liability for damages arising from service delivery"
          centered
        />
        
        <div className="space-y-8">
          {liabilityLimitations.map((liability, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <H3 className="mb-3">{liability.type}</H3>
                  <Paragraph className="text-gray-600 text-sm">
                    {liability.description}
                  </Paragraph>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-800 mb-2">Limitation:</div>
                  <Paragraph className="text-gray-600 text-sm mb-4">
                    {liability.limitation}
                  </Paragraph>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-800 mb-2">Exceptions:</div>
                  <ul className="space-y-1">
                    {liability.exclusions.map((exclusion, exclusionIndex) => (
                      <li key={exclusionIndex} className="text-gray-600 text-sm">
                        • {exclusion}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Intellectual Property */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Intellectual Property Disclaimers"
          description="Important information about intellectual property rights and responsibilities"
          centered
          theme="dark"
        />
        
        <div className="grid md:grid-cols-1 gap-8">
          {intellectualProperty.map((ip, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <H3 className="mb-3 text-white">{ip.area}</H3>
                  <Paragraph className="text-blue-100 text-sm">
                    {ip.description}
                  </Paragraph>
                </div>
                
                <div className="md:col-span-2">
                  <div className="font-semibold text-blue-200 mb-3">Key Points:</div>
                  <ul className="space-y-2">
                    {ip.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <span className="text-green-400 mt-0.5">•</span>
                        <span className="text-blue-100 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Website and Content Disclaimers */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Website and Content Disclaimers"
            description="Important disclaimers regarding website content and information accuracy"
            centered
          />
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <H3 className="mb-4">Information Accuracy</H3>
              <Paragraph className="text-gray-600 mb-4">
                While we strive to provide accurate and up-to-date information on our website, we make no representations 
                or warranties about the completeness, accuracy, or reliability of any information, services, or products 
                available through our website.
              </Paragraph>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Pricing, features, and service descriptions may change without notice</li>
                <li>• Case studies and testimonials represent individual experiences</li>
                <li>• Industry statistics and data are provided for informational purposes</li>
                <li>• External links are provided for convenience but not endorsed</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <H3 className="mb-4">Website Availability</H3>
              <Paragraph className="text-gray-600 mb-4">
                We do not guarantee that our website will be available at all times or that it will be free from 
                viruses or other harmful components. We reserve the right to modify, suspend, or discontinue 
                any part of our website without notice.
              </Paragraph>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Scheduled maintenance may cause temporary unavailability</li>
                <li>• Technical issues may affect website performance</li>
                <li>• Content and features may be updated or removed</li>
                <li>• User-generated content is not reviewed or endorsed</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Jurisdiction and Legal Information */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Jurisdiction and Legal Framework"
          description="Legal jurisdiction and applicable laws governing these disclaimers"
          centered
        />
        
        <div className="space-y-6">
          {jurisdictionInformation.map((jurisdiction, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <H3 className="mb-3">{jurisdiction.jurisdiction}</H3>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-800 mb-2">Details:</div>
                  <Paragraph className="text-gray-600 text-sm">
                    {jurisdiction.details}
                  </Paragraph>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-800 mb-2">Implications:</div>
                  <ul className="space-y-1">
                    {jurisdiction.implications.map((implication, implicationIndex) => (
                      <li key={implicationIndex} className="text-gray-600 text-sm">
                        • {implication}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Consumer Rights */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Consumer Rights and Protections"
            description="Your rights as a consumer may not be affected by these disclaimers"
            centered
            theme="dark"
          />
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <H3 className="mb-4 text-white">Protected Rights</H3>
            <Paragraph className="text-blue-100 mb-6">
              These disclaimers do not affect your statutory consumer rights that cannot be waived or limited by contract. 
              Your rights under applicable consumer protection laws remain in full force and effect.
            </Paragraph>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="font-semibold text-blue-200 mb-2">Consumer Protection Laws:</div>
                <ul className="text-blue-100 text-sm space-y-1 text-left">
                  <li>• Rights to refunds for unsatisfactory services</li>
                  <li>• Protection against misleading or deceptive conduct</li>
                  <li>• Rights to fair contract terms</li>
                  <li>• Access to dispute resolution mechanisms</li>
                </ul>
              </div>
              
              <div>
                <div className="font-semibold text-blue-200 mb-2">International Rights:</div>
                <ul className="text-blue-100 text-sm space-y-1 text-left">
                  <li>• EU consumer directive protections</li>
                  <li>• Distance selling and cooling-off rights</li>
                  <li>• Data protection and privacy rights</li>
                  <li>• Local complaint and remedy procedures</li>
                </ul>
              </div>
            </div>
          </div>
          
          <Button as="link" href="/contact" variant="secondary" size="lg">
            Contact Legal Team
          </Button>
        </div>
      </Section>

      {/* Disclaimer Updates */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Disclaimer Updates and Changes"
            description="How we handle updates to these legal disclaimers"
            centered
          />
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <H3 className="mb-4">Policy Changes</H3>
            <Paragraph className="text-gray-600 mb-6">
              We reserve the right to modify these disclaimers at any time to reflect changes in our services, 
              legal requirements, or business practices. Material changes will be communicated to users through 
              appropriate channels.
            </Paragraph>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="font-semibold text-gray-800 mb-2">Notification Methods:</div>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Email notification to active clients</li>
                  <li>• Website banner notices for material changes</li>
                  <li>• Updated effective dates on legal pages</li>
                  <li>• Account dashboard notifications where applicable</li>
                </ul>
              </div>
              
              <div>
                <div className="font-semibold text-gray-800 mb-2">Your Options:</div>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Review changes before they take effect</li>
                  <li>• Contact us with questions about changes</li>
                  <li>• Terminate services if you disagree with changes</li>
                  <li>• Continue using services constitutes acceptance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Legal Pages */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Legal Information"
            description="Additional legal documents and policies that complement this disclaimer"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/terms" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-3xl mb-4">📄</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Terms of Service</H3>
              <Paragraph className="text-gray-600">
                Complete terms governing the use of our virtual assistant services and platform.
              </Paragraph>
            </Link>
            
            <Link href="/privacy" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-3xl mb-4">🔒</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Privacy Policy</H3>
              <Paragraph className="text-gray-600">
                Information about how we collect, use, and protect your personal information.
              </Paragraph>
            </Link>
            
            <Link href="/contact" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-3xl mb-4">📞</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Legal Inquiries</H3>
              <Paragraph className="text-gray-600">
                Contact our legal team for questions about disclaimers, liability, or legal matters.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}