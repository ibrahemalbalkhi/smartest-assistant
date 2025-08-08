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
  title: 'Data Processing Agreement | GDPR & CCPA Compliance | Smartest Assistant',
  description: 'Our data processing agreement outlines how Smartest Assistant handles, processes, and protects personal data in compliance with GDPR, CCPA, and other privacy regulations.',
  keywords: 'data processing agreement, GDPR compliance, CCPA compliance, data protection, privacy regulations',
  openGraph: {
    title: 'Data Processing Agreement | GDPR & CCPA Compliance',
    description: 'Comprehensive data processing agreement ensuring compliance with international privacy regulations.',
    url: 'https://smartestassistant.com/legal/data-processing',
  }
}

const processingPurposes = [
  {
    purpose: 'Service Delivery',
    description: 'Processing personal data to provide virtual assistant services as requested by clients',
    legalBasis: 'Contract performance',
    dataTypes: ['Contact information', 'Business requirements', 'Communication preferences', 'Task specifications'],
    retention: 'Duration of service agreement plus 2 years'
  },
  {
    purpose: 'Customer Support',
    description: 'Processing data necessary to provide customer support and resolve service issues',
    legalBasis: 'Legitimate interests',
    dataTypes: ['Support communications', 'Service usage data', 'Issue resolution records', 'Feedback data'],
    retention: '3 years from last customer interaction'
  },
  {
    purpose: 'Legal Compliance',
    description: 'Processing required to comply with legal obligations and regulatory requirements',
    legalBasis: 'Legal obligation',
    dataTypes: ['Financial records', 'Tax information', 'Regulatory filings', 'Compliance documentation'],
    retention: 'As required by applicable laws (typically 7 years)'
  },
  {
    purpose: 'Marketing Communications',
    description: 'Processing for marketing communications and business development (with consent)',
    legalBasis: 'Consent',
    dataTypes: ['Contact preferences', 'Marketing engagement data', 'Communication history', 'Interest indicators'],
    retention: 'Until consent is withdrawn or 2 years of inactivity'
  }
]

const dataRights = [
  {
    right: 'Right to Access',
    description: 'Request access to personal data we process about you',
    howToExercise: 'Email privacy@smartestassistant.com with verification of identity',
    responseTime: '30 days'
  },
  {
    right: 'Right to Rectification',
    description: 'Request correction of inaccurate or incomplete personal data',
    howToExercise: 'Contact us with the specific information that needs correction',
    responseTime: '30 days'
  },
  {
    right: 'Right to Erasure',
    description: 'Request deletion of personal data (subject to legal obligations)',
    howToExercise: 'Submit deletion request with reason and scope of deletion',
    responseTime: '30 days'
  },
  {
    right: 'Right to Portability',
    description: 'Request personal data in a structured, commonly used format',
    howToExercise: 'Email request specifying desired format and scope',
    responseTime: '30 days'
  },
  {
    right: 'Right to Object',
    description: 'Object to processing based on legitimate interests or direct marketing',
    howToExercise: 'Email objection with specific processing activities',
    responseTime: '30 days'
  },
  {
    right: 'Right to Restrict Processing',
    description: 'Request limitation of processing under certain circumstances',
    howToExercise: 'Contact us with specific restriction requirements',
    responseTime: '30 days'
  }
]

const securityMeasures = [
  {
    category: 'Technical Safeguards',
    measures: [
      'End-to-end encryption for data transmission',
      'AES-256 encryption for data at rest',
      'Multi-factor authentication for system access',
      'Regular security updates and patch management',
      'Intrusion detection and prevention systems',
      'Automated backup and disaster recovery systems'
    ]
  },
  {
    category: 'Administrative Safeguards',
    measures: [
      'Comprehensive privacy and security training',
      'Background checks for all personnel',
      'Role-based access controls and permissions',
      'Regular security audits and assessments',
      'Incident response and breach notification procedures',
      'Data retention and secure disposal policies'
    ]
  },
  {
    category: 'Physical Safeguards',
    measures: [
      'Secure data center facilities with biometric access',
      'Environmental controls and monitoring systems',
      'Redundant power and network infrastructure',
      '24/7 security monitoring and surveillance',
      'Secure destruction of physical storage media',
      'Visitor access controls and logging'
    ]
  }
]

const internationalTransfers = [
  {
    mechanism: 'Standard Contractual Clauses (SCCs)',
    description: 'EU Commission approved contractual clauses for transfers outside the EEA',
    scope: 'All transfers to countries without adequacy decisions',
    safeguards: 'Additional security measures and impact assessments'
  },
  {
    mechanism: 'Adequacy Decisions',
    description: 'Transfers to countries recognized by the EU as having adequate protection',
    scope: 'Transfers to UK, Canada, and other recognized countries',
    safeguards: 'Ongoing monitoring of adequacy status'
  },
  {
    mechanism: 'Binding Corporate Rules (BCRs)',
    description: 'Internal privacy rules for multinational corporate groups',
    scope: 'Internal data transfers within corporate group',
    safeguards: 'Comprehensive governance and accountability measures'
  }
]

export default function DataProcessingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto">
          <H2 className="mb-6 text-center">Data Processing Agreement</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600 text-center">
            This Data Processing Agreement (DPA) outlines how Smartest Assistant processes personal data 
            in compliance with GDPR, CCPA, and other applicable privacy regulations.
          </Paragraph>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-8 border border-blue-200">
            <div className="flex items-start gap-4">
              <div className="text-2xl">📋</div>
              <div>
                <H3 className="mb-3 text-blue-800">Our Commitment to Data Protection</H3>
                <Paragraph className="text-blue-700 mb-4">
                  We are committed to protecting personal data and ensuring compliance with all applicable 
                  data protection laws and regulations. This agreement establishes the framework for 
                  responsible data processing in our business relationship.
                </Paragraph>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-blue-800 mb-1">Compliant With:</div>
                    <div className="text-blue-700">GDPR, CCPA, PIPEDA, LGPD</div>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-800 mb-1">Regular Updates:</div>
                    <div className="text-blue-700">Reviewed annually and updated as needed</div>
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

      {/* Processing Purposes */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Data Processing Purposes and Legal Basis"
          description="How and why we process personal data in our business operations"
          centered
        />
        
        <div className="space-y-8">
          {processingPurposes.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <H3 className="mb-3 text-primary-blue">{item.purpose}</H3>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                    {item.legalBasis}
                  </div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-800 mb-2">Description:</div>
                  <Paragraph className="text-gray-600 text-sm">
                    {item.description}
                  </Paragraph>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-800 mb-2">Data Types:</div>
                  <ul className="space-y-1">
                    {item.dataTypes.map((type, typeIndex) => (
                      <li key={typeIndex} className="text-gray-600 text-sm">
                        • {type}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-800 mb-2">Retention Period:</div>
                  <div className="text-gray-600 text-sm">{item.retention}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Data Subject Rights */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Your Data Protection Rights"
          description="Understanding your rights under data protection regulations and how to exercise them"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataRights.map((right, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <H3 className="mb-3 text-primary-blue text-lg">{right.right}</H3>
              <Paragraph className="text-gray-600 text-sm mb-4">
                {right.description}
              </Paragraph>
              
              <div className="space-y-3">
                <div>
                  <div className="font-semibold text-gray-800 text-sm">How to Exercise:</div>
                  <div className="text-gray-600 text-sm">{right.howToExercise}</div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <div className="font-semibold text-blue-800 text-sm">Response Time:</div>
                  <div className="text-blue-700 text-sm">{right.responseTime}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Security Measures */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Data Security Measures"
          description="Comprehensive security controls protecting personal data throughout its lifecycle"
          centered
          theme="dark"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {securityMeasures.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <H3 className="mb-4 text-white">{category.category}</H3>
              <ul className="space-y-3">
                {category.measures.map((measure, measureIndex) => (
                  <li key={measureIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-blue-100 text-sm">{measure}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* International Transfers */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="International Data Transfers"
          description="How we ensure adequate protection when transferring personal data across borders"
          centered
        />
        
        <div className="space-y-8">
          {internationalTransfers.map((transfer, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <H3 className="mb-2">{transfer.mechanism}</H3>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-800 mb-2">Description:</div>
                  <Paragraph className="text-gray-600 text-sm">
                    {transfer.description}
                  </Paragraph>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-800 mb-2">Scope:</div>
                  <div className="text-gray-600 text-sm">{transfer.scope}</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-800 mb-2">Additional Safeguards:</div>
                  <div className="text-gray-600 text-sm">{transfer.safeguards}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Breach Notification */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Data Breach Response"
            description="Our procedures for handling and notifying data breaches in compliance with regulations"
            centered
          />
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl">🚨</span>
              </div>
              <H3 className="mb-3">Detection</H3>
              <Paragraph className="text-gray-600 text-sm">
                Immediate identification and assessment of potential data breaches through automated monitoring and reporting systems.
              </Paragraph>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">📋</span>
              </div>
              <H3 className="mb-3">Assessment</H3>
              <Paragraph className="text-gray-600 text-sm">
                Rapid evaluation of breach scope, affected data, potential risks, and required notification obligations within 24 hours.
              </Paragraph>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">📢</span>
              </div>
              <H3 className="mb-3">Notification</H3>
              <Paragraph className="text-gray-600 text-sm">
                Notification to supervisory authorities within 72 hours and affected individuals without undue delay when required.
              </Paragraph>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🔧</span>
              </div>
              <H3 className="mb-3">Remediation</H3>
              <Paragraph className="text-gray-600 text-sm">
                Implementation of containment measures, system repairs, and preventive actions to avoid future incidents.
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact and Compliance */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Data Protection Contact"
            description="Get in touch with our data protection team for questions or to exercise your rights"
            centered
            theme="dark"
          />
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <H3 className="mb-4 text-white">Data Protection Officer</H3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="font-semibold text-blue-200 mb-1">Email</div>
                <div className="text-white">dpo@smartestassistant.com</div>
              </div>
              <div>
                <div className="font-semibold text-blue-200 mb-1">Response Time</div>
                <div className="text-white">Within 30 days</div>
              </div>
            </div>
            
            <Paragraph className="text-blue-100 mt-6">
              Our Data Protection Officer is available to assist with privacy inquiries, rights requests, 
              and compliance questions. All communications are handled confidentially and professionally.
            </Paragraph>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Paragraph className="text-blue-100 text-sm">
              <strong>Supervisory Authority:</strong> If you believe your data protection rights have been violated, 
              you have the right to lodge a complaint with your local supervisory authority. We are committed to 
              working cooperatively with authorities to resolve any concerns.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Related Legal Pages */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Legal Information"
            description="Additional policies and agreements that complement our data processing practices"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/privacy" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🔒</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Privacy Policy</H3>
              <Paragraph className="text-gray-600">
                Comprehensive privacy policy detailing our information collection and usage practices.
              </Paragraph>
            </Link>
            
            <Link href="/legal/cookies" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🍪</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Cookie Policy</H3>
              <Paragraph className="text-gray-600">
                Detailed information about our cookie usage and how to manage your preferences.
              </Paragraph>
            </Link>
            
            <Link href="/terms" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📄</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Terms of Service</H3>
              <Paragraph className="text-gray-600">
                Service terms and conditions that govern our business relationship and data processing.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}