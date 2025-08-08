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
  title: 'DMCA Policy | Copyright Infringement Notice | Smartest Assistant',
  description: 'Our Digital Millennium Copyright Act (DMCA) policy for reporting copyright infringement and protecting intellectual property rights.',
  keywords: 'DMCA policy, copyright infringement, intellectual property, takedown notice, copyright protection',
  openGraph: {
    title: 'DMCA Policy | Copyright Infringement Notice',
    description: 'Learn about our DMCA policy and procedures for reporting copyright infringement.',
    url: 'https://smartestassistant.com/legal/dmca',
  }
}

const dmcaRequirements = [
  {
    requirement: 'Identification of Copyrighted Work',
    description: 'Clear identification of the copyrighted work claimed to have been infringed',
    details: [
      'Provide the title, author, and description of the work',
      'Include registration number if work is registered',
      'Specify the location of the original work',
      'Attach copies of the work if possible'
    ]
  },
  {
    requirement: 'Location of Infringing Material',
    description: 'Specific identification of the material that is claimed to be infringing',
    details: [
      'Provide specific URL(s) where infringing material is located',
      'Include page numbers, timestamps, or other specific identifiers',
      'Describe the infringing material in sufficient detail',
      'Explain how the material infringes your copyright'
    ]
  },
  {
    requirement: 'Contact Information',
    description: 'Your contact information for us to reach you regarding the notice',
    details: [
      'Full legal name of copyright owner or authorized agent',
      'Mailing address (P.O. Box not acceptable)',
      'Telephone number',
      'Email address'
    ]
  },
  {
    requirement: 'Good Faith Statement',
    description: 'Statement that you have a good faith belief that the use is not authorized',
    details: [
      'Include statement: "I have a good faith belief that use of the material is not authorized"',
      'Explain why you believe the use is not authorized',
      'Reference specific copyright protections',
      'State that the information is accurate'
    ]
  },
  {
    requirement: 'Accuracy Statement',
    description: 'Statement that the information in the notification is accurate',
    details: [
      'Include statement: "The information in this notification is accurate"',
      'State that you are the copyright owner or authorized to act',
      'Affirm under penalty of perjury',
      'Include physical or electronic signature'
    ]
  },
  {
    requirement: 'Signature',
    description: 'Physical or electronic signature of the copyright owner or authorized person',
    details: [
      'Handwritten signature on printed notice',
      'Electronic signature on digital submissions',
      'Type full name if electronic submission',
      'Include date of signature'
    ]
  }
]

const responseProcess = [
  {
    step: 'Notice Received',
    description: 'We receive a complete DMCA takedown notice',
    timeframe: 'Immediate',
    actions: [
      'Log and acknowledge receipt of notice',
      'Verify completeness of DMCA requirements',
      'Assign case number for tracking',
      'Begin initial review process'
    ]
  },
  {
    step: 'Initial Review',
    description: 'Review notice for completeness and validity',
    timeframe: 'Within 24 hours',
    actions: [
      'Verify all required elements are present',
      'Confirm signature and contact information',
      'Assess claimed copyright ownership',
      'Identify specific infringing material'
    ]
  },
  {
    step: 'Content Removal',
    description: 'Remove or disable access to allegedly infringing material',
    timeframe: '24-48 hours',
    actions: [
      'Locate and disable infringing content',
      'Document removal for records',
      'Notify content uploader of removal',
      'Provide information about counter-notice rights'
    ]
  },
  {
    step: 'User Notification',
    description: 'Notify the user who uploaded the content',
    timeframe: 'Within 48 hours',
    actions: [
      'Send takedown notification to user',
      'Explain reason for content removal',
      'Provide copy of DMCA notice (without personal info)',
      'Inform about counter-notice process'
    ]
  },
  {
    step: 'Counter-Notice Period',
    description: 'Allow time for user to submit counter-notice',
    timeframe: '10-14 business days',
    actions: [
      'Wait for potential counter-notice submission',
      'Review any counter-notices received',
      'Forward valid counter-notices to complainant',
      'Prepare for potential restoration'
    ]
  },
  {
    step: 'Resolution',
    description: 'Final resolution based on responses received',
    timeframe: 'Within 21 days',
    actions: [
      'Restore content if valid counter-notice and no court action',
      'Maintain removal if no counter-notice',
      'Coordinate with legal authorities if court action',
      'Document final resolution'
    ]
  }
]

const counterNoticeRequirements = [
  'Identification of the material that was removed or disabled',
  'Statement under penalty of perjury that removal was mistake or misidentification',
  'Your name, address, phone number, and email address',
  'Statement consenting to jurisdiction of federal court',
  'Statement that you will accept service of process from complainant',
  'Your physical or electronic signature'
]

const repeatInfringerPolicy = [
  {
    violation: 'First Offense',
    action: 'Content removal and warning notice',
    duration: 'Immediate',
    consequences: 'Account warning placed on file'
  },
  {
    violation: 'Second Offense',
    action: 'Content removal and temporary account restriction',
    duration: '30 days',
    consequences: 'Limited access to certain features'
  },
  {
    violation: 'Third Offense',
    action: 'Content removal and extended account suspension',
    duration: '90 days',
    consequences: 'Account review and probationary period'
  },
  {
    violation: 'Subsequent Offenses',
    action: 'Permanent account termination',
    duration: 'Permanent',
    consequences: 'All content removed, account permanently closed'
  }
]

export default function DMCAPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto">
          <H2 className="mb-6 text-center">DMCA Policy</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600 text-center">
            Smartest Assistant respects intellectual property rights and complies with the Digital Millennium Copyright Act (DMCA). 
            This policy outlines our procedures for addressing copyright infringement claims.
          </Paragraph>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-8 border border-blue-200">
            <div className="flex items-start gap-4">
              <div className="text-2xl">⚖️</div>
              <div>
                <H3 className="mb-3 text-blue-800">Copyright Respect</H3>
                <Paragraph className="text-blue-700 mb-4">
                  We take copyright infringement seriously and respond promptly to valid DMCA notices. 
                  Our goal is to balance protecting intellectual property rights while maintaining 
                  fair use and legitimate content sharing.
                </Paragraph>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-blue-800 mb-1">Response Time:</div>
                    <div className="text-blue-700">24-48 hours for valid notices</div>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-800 mb-1">Fair Process:</div>
                    <div className="text-blue-700">Counter-notice procedures available</div>
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

      {/* DMCA Notice Requirements */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="DMCA Takedown Notice Requirements"
          description="Essential elements that must be included in a valid DMCA takedown notice"
          centered
        />
        
        <div className="space-y-6">
          {dmcaRequirements.map((req, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <H3 className="text-red-700">{req.requirement}</H3>
                  </div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-800 mb-2">Description:</div>
                  <Paragraph className="text-gray-600 text-sm">
                    {req.description}
                  </Paragraph>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-800 mb-2">Required Details:</div>
                  <ul className="space-y-1">
                    {req.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-gray-600 text-sm">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Response Process */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Our DMCA Response Process"
          description="Step-by-step process for handling copyright infringement notices"
          centered
        />
        
        <div className="space-y-8">
          {responseProcess.map((step, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-primary-blue text-white w-16 h-16 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <H3 className="mb-3">{step.step}</H3>
                      <div className="text-sm text-gray-500 mb-3">
                        ⏱️ Timeframe: {step.timeframe}
                      </div>
                      <Paragraph className="text-gray-600 text-sm">
                        {step.description}
                      </Paragraph>
                    </div>
                    
                    <div className="md:col-span-2">
                      <div className="font-semibold text-gray-800 mb-3">Actions Taken:</div>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {step.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-start gap-2">
                            <span className="text-primary-blue mt-1">•</span>
                            <span className="text-gray-600 text-sm">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Counter-Notice Information */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Counter-Notice Procedures"
            description="If you believe your content was removed by mistake, you can submit a counter-notice"
            centered
            theme="dark"
          />
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <H3 className="mb-4 text-white">When to File a Counter-Notice</H3>
            <Paragraph className="text-blue-100 mb-6">
              You may file a counter-notice if you believe that your content was removed or disabled as a result of 
              mistake or misidentification of the material. This is a legal process with significant consequences.
            </Paragraph>
            
            <div className="bg-white/10 rounded-lg p-4 mb-6">
              <div className="font-semibold text-yellow-300 mb-2">⚠️ Important Legal Notice</div>
              <Paragraph className="text-blue-100 text-sm">
                Filing a counter-notice may result in legal proceedings between you and the complainant. 
                You may be liable for damages if you misrepresent that material was removed by mistake.
              </Paragraph>
            </div>
            
            <div>
              <div className="font-semibold text-blue-200 mb-3">Counter-Notice Requirements:</div>
              <ul className="space-y-2">
                {counterNoticeRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span className="text-blue-100 text-sm">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Repeat Infringer Policy */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Repeat Infringer Policy"
          description="Progressive enforcement measures for users who repeatedly infringe copyright"
          centered
        />
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <H3 className="mb-4 text-center">Three-Strike Policy</H3>
            <Paragraph className="text-gray-600 text-center mb-8">
              We maintain a policy for addressing repeat copyright infringers that includes escalating consequences 
              for continued violations of intellectual property rights.
            </Paragraph>
            
            <div className="space-y-4">
              {repeatInfringerPolicy.map((policy, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div className="text-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-white ${
                        index === 0 ? 'bg-yellow-500' :
                        index === 1 ? 'bg-orange-500' :
                        index === 2 ? 'bg-red-500' : 'bg-gray-800'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="font-semibold text-sm">{policy.violation}</div>
                    </div>
                    
                    <div>
                      <div className="font-semibold text-gray-800 text-sm mb-1">Action:</div>
                      <div className="text-gray-600 text-sm">{policy.action}</div>
                    </div>
                    
                    <div>
                      <div className="font-semibold text-gray-800 text-sm mb-1">Duration:</div>
                      <div className="text-gray-600 text-sm">{policy.duration}</div>
                    </div>
                    
                    <div>
                      <div className="font-semibold text-gray-800 text-sm mb-1">Consequences:</div>
                      <div className="text-gray-600 text-sm">{policy.consequences}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Information */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="DMCA Agent Contact Information"
            description="Designated agent for receiving DMCA notices and counter-notices"
            centered
          />
          
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <H3 className="mb-6 text-center">Designated Copyright Agent</H3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="font-semibold text-gray-800 mb-4">For DMCA Takedown Notices:</div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Email:</span> dmca@smartestassistant.com
                  </div>
                  <div>
                    <span className="font-medium">Subject Line:</span> DMCA Takedown Notice
                  </div>
                  <div>
                    <span className="font-medium">Mailing Address:</span><br />
                    DMCA Agent<br />
                    Smartest Assistant<br />
                    [Complete Address]<br />
                    [City, State, ZIP]
                  </div>
                </div>
              </div>
              
              <div>
                <div className="font-semibold text-gray-800 mb-4">For Counter-Notices:</div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Email:</span> counter-notice@smartestassistant.com
                  </div>
                  <div>
                    <span className="font-medium">Subject Line:</span> DMCA Counter-Notice
                  </div>
                  <div>
                    <span className="font-medium">Phone:</span> 1-800-XXX-XXXX
                  </div>
                  <div>
                    <span className="font-medium">Response Time:</span> Within 48 hours
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="font-semibold text-blue-800 mb-2">📧 Email Submission Requirements:</div>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Include "DMCA" in subject line</li>
                <li>• Attach all required documentation</li>
                <li>• Use plain text or PDF format</li>
                <li>• Include clear signature (physical or electronic)</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Legal Disclaimers */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Important Legal Information"
            description="Key legal considerations regarding DMCA notices and copyright claims"
            centered
            theme="dark"
          />
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <H3 className="mb-4 text-white">False Claims Warning</H3>
            <Paragraph className="text-blue-100 mb-6">
              Under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material 
              is infringing may be subject to liability for damages. Do not make false claims.
            </Paragraph>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="font-semibold text-yellow-300 mb-2">⚠️ For Copyright Owners:</div>
                <ul className="text-blue-100 text-sm space-y-1 text-left">
                  <li>• Ensure you own or control the copyright</li>
                  <li>• Verify the use is not authorized</li>
                  <li>• Consider fair use before filing</li>
                  <li>• Be prepared to defend your claim</li>
                </ul>
              </div>
              
              <div>
                <div className="font-semibold text-yellow-300 mb-2">⚠️ For Content Creators:</div>
                <ul className="text-blue-100 text-sm space-y-1 text-left">
                  <li>• Only file counter-notices if removal was mistake</li>
                  <li>• Understand legal risks of counter-notices</li>
                  <li>• Consider seeking legal counsel</li>
                  <li>• Maintain records of your original work</li>
                </ul>
              </div>
            </div>
          </div>
          
          <Button as="link" href="/contact" variant="secondary" size="lg">
            Contact Legal Team
          </Button>
        </div>
      </Section>

      {/* Related Legal Pages */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Legal Information"
            description="Additional policies and legal information that may be relevant"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/terms" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📄</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Terms of Service</H3>
              <Paragraph className="text-gray-600">
                Review our complete terms of service, including intellectual property provisions.
              </Paragraph>
            </Link>
            
            <Link href="/privacy" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🔒</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Privacy Policy</H3>
              <Paragraph className="text-gray-600">
                Understand how we handle personal information in DMCA proceedings.
              </Paragraph>
            </Link>
            
            <Link href="/contact" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">⚖️</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Legal Contact</H3>
              <Paragraph className="text-gray-600">
                Contact our legal team for questions about copyright and intellectual property.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}