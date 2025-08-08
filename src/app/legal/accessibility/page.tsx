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
  title: 'Accessibility Statement | Web Accessibility Commitment | Smartest Assistant',
  description: 'Our commitment to web accessibility and making our virtual assistant services accessible to all users, including those with disabilities.',
  keywords: 'accessibility statement, web accessibility, WCAG compliance, ADA compliance, inclusive design',
  openGraph: {
    title: 'Accessibility Statement | Web Accessibility Commitment',
    description: 'Learn about our commitment to providing accessible digital experiences for all users.',
    url: 'https://smartestassistant.com/legal/accessibility',
  }
}

const accessibilityFeatures = [
  {
    category: 'Navigation & Structure',
    features: [
      'Consistent navigation structure across all pages',
      'Clear page headings and logical content hierarchy',
      'Skip navigation links for keyboard users',
      'Breadcrumb navigation where applicable',
      'Descriptive page titles and meta descriptions'
    ]
  },
  {
    category: 'Visual Design & Content',
    features: [
      'High contrast color combinations (4.5:1 minimum ratio)',
      'Scalable text that can be enlarged up to 200% without loss of functionality',
      'Clear, readable fonts with appropriate sizing',
      'Meaningful alternative text for all images',
      'Visual focus indicators for interactive elements'
    ]
  },
  {
    category: 'Keyboard & Interaction',
    features: [
      'Full keyboard navigation support for all interactive elements',
      'Logical tab order throughout the website',
      'Visible focus indicators for all focusable elements',
      'No keyboard traps or inaccessible content',
      'Appropriate touch target sizes (minimum 44x44 pixels)'
    ]
  },
  {
    category: 'Screen Reader Compatibility',
    features: [
      'Semantic HTML markup for proper screen reader interpretation',
      'ARIA labels and descriptions where needed',
      'Proper heading structure (H1, H2, H3, etc.)',
      'Form labels associated with their corresponding inputs',
      'Alternative text for decorative and informative images'
    ]
  }
]

const complianceStandards = [
  {
    standard: 'WCAG 2.1 Level AA',
    description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
    status: 'Target Compliance',
    details: 'We strive to meet or exceed WCAG 2.1 Level AA standards across all website content and functionality.'
  },
  {
    standard: 'Section 508',
    description: 'U.S. federal accessibility requirements for electronic content',
    status: 'Compliant',
    details: 'Our website meets Section 508 standards for federal accessibility requirements.'
  },
  {
    standard: 'ADA Guidelines',
    description: 'Americans with Disabilities Act digital accessibility principles',
    status: 'Aligned',
    details: 'Website design and functionality align with ADA digital accessibility best practices.'
  },
  {
    standard: 'EN 301 549',
    description: 'European accessibility standard for ICT products and services',
    status: 'Compatible',
    details: 'Our accessibility measures are compatible with European EN 301 549 standards.'
  }
]

const assistiveTechnologies = [
  {
    technology: 'Screen Readers',
    examples: ['NVDA', 'JAWS', 'VoiceOver', 'TalkBack'],
    support: 'Fully supported with semantic HTML and ARIA labels'
  },
  {
    technology: 'Voice Recognition Software',
    examples: ['Dragon NaturallySpeaking', 'Windows Speech Recognition'],
    support: 'Compatible with voice commands and navigation'
  },
  {
    technology: 'Keyboard Navigation',
    examples: ['Tab navigation', 'Arrow key navigation', 'Enter/Space activation'],
    support: 'Complete keyboard accessibility without mouse dependency'
  },
  {
    technology: 'Magnification Software',
    examples: ['ZoomText', 'MAGic', 'Built-in browser zoom'],
    support: 'Responsive design supports up to 400% magnification'
  }
]

const reportingProcess = [
  {
    step: 'Identify Issue',
    description: 'Notice an accessibility barrier or difficulty using our website',
    timeframe: 'Immediate'
  },
  {
    step: 'Report Issue',
    description: 'Contact us via email, phone, or accessibility feedback form',
    timeframe: 'As needed'
  },
  {
    step: 'Initial Response',
    description: 'We acknowledge receipt and begin investigation',
    timeframe: 'Within 48 hours'
  },
  {
    step: 'Assessment',
    description: 'Technical team evaluates the reported accessibility issue',
    timeframe: '3-5 business days'
  },
  {
    step: 'Resolution',
    description: 'Implement fix and provide feedback to reporter',
    timeframe: '5-10 business days'
  },
  {
    step: 'Follow-up',
    description: 'Confirm resolution and prevent similar issues',
    timeframe: 'Within 2 weeks'
  }
]

export default function AccessibilityPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto">
          <H2 className="mb-6 text-center">Accessibility Statement</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600 text-center">
            Smartest Assistant is committed to ensuring digital accessibility for all users, including those with disabilities. 
            We strive to provide an inclusive experience that enables everyone to access our services and information.
          </Paragraph>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-8 border border-blue-200">
            <div className="flex items-start gap-4">
              <div className="text-2xl">♿</div>
              <div>
                <H3 className="mb-3 text-blue-800">Our Commitment</H3>
                <Paragraph className="text-blue-700 mb-4">
                  We believe that everyone should have equal access to information and functionality on the web. 
                  This commitment extends beyond compliance to creating genuinely inclusive digital experiences.
                </Paragraph>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-blue-800 mb-1">Ongoing Effort:</div>
                    <div className="text-blue-700">Regular accessibility audits and improvements</div>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-800 mb-1">User-Centered:</div>
                    <div className="text-blue-700">Designed with diverse user needs in mind</div>
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

      {/* Accessibility Features */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Accessibility Features"
          description="Key accessibility features implemented throughout our website"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {accessibilityFeatures.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <H3 className="text-primary-blue">{category.category}</H3>
              </div>
              
              <ul className="space-y-3">
                {category.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Compliance Standards */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Compliance Standards"
          description="Accessibility standards and guidelines we follow to ensure inclusive design"
          centered
        />
        
        <div className="space-y-6">
          {complianceStandards.map((standard, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <H3 className="mb-2">{standard.standard}</H3>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    standard.status === 'Target Compliance' ? 'bg-blue-100 text-blue-700' :
                    standard.status === 'Compliant' ? 'bg-green-100 text-green-700' :
                    standard.status === 'Aligned' ? 'bg-purple-100 text-purple-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {standard.status}
                  </div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-800 mb-2">Description:</div>
                  <Paragraph className="text-gray-600 text-sm">
                    {standard.description}
                  </Paragraph>
                </div>
                
                <div className="md:col-span-2">
                  <div className="font-semibold text-gray-800 mb-2">Implementation Details:</div>
                  <Paragraph className="text-gray-600 text-sm">
                    {standard.details}
                  </Paragraph>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Assistive Technology Support */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Assistive Technology Support"
          description="Compatible with various assistive technologies and adaptive tools"
          centered
          theme="dark"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {assistiveTechnologies.map((tech, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <H3 className="mb-4 text-white">{tech.technology}</H3>
              <div className="mb-4">
                <div className="font-semibold text-blue-200 mb-2">Examples:</div>
                <div className="flex flex-wrap gap-2">
                  {tech.examples.map((example, exampleIndex) => (
                    <span key={exampleIndex} className="bg-white/20 text-blue-100 px-2 py-1 rounded text-sm">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-semibold text-blue-200 mb-2">Support Level:</div>
                <Paragraph className="text-blue-100 text-sm">
                  {tech.support}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Accessibility Feedback Process */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Report Accessibility Issues"
          description="Help us improve by reporting accessibility barriers or difficulties"
          centered
        />
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <H3 className="mb-4 text-center">How to Report Issues</H3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-primary-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  📧
                </div>
                <div className="font-semibold mb-1">Email</div>
                <div className="text-gray-600 text-sm">accessibility@smartestassistant.com</div>
              </div>
              
              <div>
                <div className="bg-primary-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  📞
                </div>
                <div className="font-semibold mb-1">Phone</div>
                <div className="text-gray-600 text-sm">1-800-XXX-XXXX</div>
              </div>
              
              <div>
                <div className="bg-primary-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  📝
                </div>
                <div className="font-semibold mb-1">Online Form</div>
                <div className="text-gray-600 text-sm">Accessibility Feedback Form</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <H3 className="text-center mb-6">Our Response Process</H3>
            <div className="grid md:grid-cols-6 gap-4">
              {reportingProcess.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-lg text-center">
                  <div className="bg-accent-amber text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="font-semibold text-sm mb-2">{step.step}</div>
                  <div className="text-gray-600 text-xs mb-2">{step.description}</div>
                  <div className="text-primary-blue text-xs font-medium">{step.timeframe}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Alternative Access Methods */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Alternative Access Methods"
            description="Additional ways to access our services if you encounter accessibility barriers"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <H3 className="mb-4">Phone Support</H3>
              <Paragraph className="text-gray-600 mb-4">
                Our customer service team is available to provide information about our services, 
                schedule consultations, and assist with any accessibility needs.
              </Paragraph>
              <div className="text-primary-blue font-semibold">1-800-XXX-XXXX</div>
              <div className="text-gray-500 text-sm">Monday-Friday, 9 AM - 6 PM EST</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <H3 className="mb-4">Email Assistance</H3>
              <Paragraph className="text-gray-600 mb-4">
                Send us detailed questions about our services or request information in alternative formats. 
                We can provide materials in large print, audio, or other accessible formats.
              </Paragraph>
              <div className="text-primary-blue font-semibold">support@smartestassistant.com</div>
              <div className="text-gray-500 text-sm">Response within 24 hours</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Ongoing Commitment */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Our Ongoing Commitment"
            description="Accessibility is not a one-time effort but a continuous journey of improvement"
            centered
            theme="dark"
          />
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <H3 className="mb-4 text-white">Continuous Improvement</H3>
            <Paragraph className="text-blue-100 mb-6">
              We regularly review and update our accessibility practices, conduct user testing with assistive technology users, 
              and stay current with evolving accessibility standards and best practices.
            </Paragraph>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="font-semibold text-blue-200 mb-1">Regular Audits</div>
                <div className="text-white text-sm">Quarterly accessibility reviews</div>
              </div>
              <div>
                <div className="font-semibold text-blue-200 mb-1">User Testing</div>
                <div className="text-white text-sm">Testing with real users and assistive technology</div>
              </div>
              <div>
                <div className="font-semibold text-blue-200 mb-1">Training</div>
                <div className="text-white text-sm">Team education on accessibility best practices</div>
              </div>
            </div>
          </div>
          
          <Button as="link" href="/contact" variant="secondary" size="lg">
            Contact Accessibility Team
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
            <Link href="/privacy" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🔒</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Privacy Policy</H3>
              <Paragraph className="text-gray-600">
                Learn how we protect your personal information and respect your privacy rights.
              </Paragraph>
            </Link>
            
            <Link href="/terms" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📄</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Terms of Service</H3>
              <Paragraph className="text-gray-600">
                Review our service terms, including accessibility-related provisions and user responsibilities.
              </Paragraph>
            </Link>
            
            <Link href="/contact" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📞</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Contact Us</H3>
              <Paragraph className="text-gray-600">
                Get in touch with our accessibility team or request alternative formats for information.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}