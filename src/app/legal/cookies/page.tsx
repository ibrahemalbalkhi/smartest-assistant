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
  title: 'Cookie Policy | How Smartest Assistant Uses Cookies',
  description: 'Learn about how Smartest Assistant uses cookies and similar technologies to improve your website experience and provide better services.',
  keywords: 'cookie policy, cookies, website tracking, privacy preferences, data collection',
  openGraph: {
    title: 'Cookie Policy | How Smartest Assistant Uses Cookies',
    description: 'Transparent information about our cookie usage and how you can control your preferences.',
    url: 'https://smartestassistant.com/legal/cookies',
  }
}

const cookieTypes = [
  {
    type: 'Essential Cookies',
    purpose: 'Required for basic website functionality',
    description: 'These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services.',
    examples: [
      'Authentication and login sessions',
      'Shopping cart and booking functionality', 
      'Security and fraud prevention',
      'Load balancing and site performance'
    ],
    canDisable: false
  },
  {
    type: 'Analytics Cookies',
    purpose: 'Help us understand website usage and performance',
    description: 'These cookies collect information about how visitors use our website, helping us improve our services and user experience.',
    examples: [
      'Google Analytics for website usage statistics',
      'Page view tracking and user behavior',
      'Performance monitoring and error tracking',
      'A/B testing and optimization metrics'
    ],
    canDisable: true
  },
  {
    type: 'Marketing Cookies',
    purpose: 'Personalize advertising and track marketing campaigns',
    description: 'These cookies track your browsing habits to provide relevant advertisements and measure the effectiveness of our marketing campaigns.',
    examples: [
      'Facebook Pixel for social media advertising',
      'Google Ads conversion tracking',
      'LinkedIn marketing and retargeting',
      'Email campaign effectiveness tracking'
    ],
    canDisable: true
  },
  {
    type: 'Functional Cookies',
    purpose: 'Enhance website functionality and user experience',
    description: 'These cookies remember your preferences and settings to provide a more personalized experience.',
    examples: [
      'Language and region preferences',
      'User interface customization',
      'Chat widget and support preferences',
      'Form auto-fill and user preferences'
    ],
    canDisable: true
  }
]

const thirdPartyServices = [
  {
    service: 'Google Analytics',
    purpose: 'Website analytics and user behavior tracking',
    cookies: '_ga, _gid, _gat',
    retention: '2 years',
    optOut: 'https://tools.google.com/dlpage/gaoptout'
  },
  {
    service: 'Google Ads',
    purpose: 'Advertising and conversion tracking',
    cookies: '_gcl_au, _gcl_dc',
    retention: '90 days',
    optOut: 'https://adssettings.google.com'
  },
  {
    service: 'Facebook Pixel',
    purpose: 'Social media advertising and retargeting',
    cookies: '_fbp, _fbc',
    retention: '90 days',
    optOut: 'https://www.facebook.com/settings?tab=ads'
  },
  {
    service: 'LinkedIn Insight Tag',
    purpose: 'Professional network advertising',
    cookies: '_linkedin_data_partner_id',
    retention: '180 days',
    optOut: 'https://www.linkedin.com/help/linkedin/answer/62931'
  },
  {
    service: 'Calendly',
    purpose: 'Appointment scheduling functionality',
    cookies: 'calendly_session',
    retention: 'Session only',
    optOut: 'Contact us to disable scheduling cookies'
  },
  {
    service: 'Microsoft Clarity',
    purpose: 'User session recording and heatmaps',
    cookies: '_clck, _clsk',
    retention: '1 year',
    optOut: 'https://clarity.microsoft.com/terms'
  }
]

export default function CookiesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto">
          <H2 className="mb-6 text-center">Cookie Policy</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600 text-center">
            This policy explains how Smartest Assistant uses cookies and similar technologies on our website. 
            We believe in transparency about our data practices and your control over your information.
          </Paragraph>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-8 border border-blue-200">
            <div className="flex items-start gap-4">
              <div className="text-2xl">🍪</div>
              <div>
                <H3 className="mb-3 text-blue-800">What Are Cookies?</H3>
                <Paragraph className="text-blue-700 mb-4">
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide a better user experience, remember your preferences, and understand 
                  how our website is being used.
                </Paragraph>
                <Paragraph className="text-blue-700">
                  Similar technologies include web beacons, pixels, and local storage, which serve similar 
                  purposes in enhancing your website experience.
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

      {/* Cookie Types */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Types of Cookies We Use"
          description="Different categories of cookies and their purposes on our website"
          centered
        />
        
        <div className="space-y-8">
          {cookieTypes.map((cookie, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <H3 className="mb-2">{cookie.type}</H3>
                  <div className="text-primary-blue font-medium text-sm">{cookie.purpose}</div>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  cookie.canDisable 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {cookie.canDisable ? 'Can Disable' : 'Always Active'}
                </div>
              </div>
              
              <Paragraph className="text-gray-600 mb-6">
                {cookie.description}
              </Paragraph>
              
              <div>
                <div className="font-semibold text-gray-800 mb-3">Examples:</div>
                <ul className="grid md:grid-cols-2 gap-2">
                  {cookie.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-start gap-2">
                      <span className="text-primary-blue mt-1">•</span>
                      <span className="text-gray-600 text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Third Party Services */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Third-Party Services and Cookies"
          description="External services we use and their cookie practices"
          centered
        />
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Service</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Purpose</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Cookies</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Retention</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Opt-Out</th>
              </tr>
            </thead>
            <tbody>
              {thirdPartyServices.map((service, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-800">{service.service}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-600 text-sm">{service.purpose}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-600 text-sm font-mono">{service.cookies}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-600 text-sm">{service.retention}</div>
                  </td>
                  <td className="px-6 py-4">
                    {service.optOut.startsWith('http') ? (
                      <a 
                        href={service.optOut} 
                        className="text-primary-blue text-sm hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Opt-out link
                      </a>
                    ) : (
                      <div className="text-gray-600 text-sm">{service.optOut}</div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Cookie Management */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Managing Your Cookie Preferences"
            description="How to control and manage cookies on your device"
            centered
            theme="dark"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <H3 className="mb-4 text-white">Browser Settings</H3>
              <Paragraph className="text-blue-100 mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </Paragraph>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• Block all cookies</li>
                <li>• Block third-party cookies only</li>
                <li>• Clear existing cookies</li>
                <li>• Set preferences for specific websites</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <H3 className="mb-4 text-white">Cookie Consent Tools</H3>
              <Paragraph className="text-blue-100 mb-4">
                We provide tools to help you manage your cookie preferences:
              </Paragraph>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• Cookie preference center</li>
                <li>• Granular category controls</li>
                <li>• Easy opt-out options</li>
                <li>• Preference persistence</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Browser Instructions */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Browser-Specific Cookie Controls"
            description="Step-by-step instructions for managing cookies in popular browsers"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <H3 className="mb-3 text-primary-blue">Chrome</H3>
              <Paragraph className="text-gray-600 text-sm">
                Settings → Privacy and security → Cookies and other site data → Manage cookies
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <H3 className="mb-3 text-primary-blue">Firefox</H3>
              <Paragraph className="text-gray-600 text-sm">
                Settings → Privacy & Security → Cookies and Site Data → Manage Data
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <H3 className="mb-3 text-primary-blue">Safari</H3>
              <Paragraph className="text-gray-600 text-sm">
                Preferences → Privacy → Manage Website Data → Remove or Remove All
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <H3 className="mb-3 text-primary-blue">Edge</H3>
              <Paragraph className="text-gray-600 text-sm">
                Settings → Cookies and site permissions → Cookies and site data → See all cookies
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>

      {/* Impact of Disabling */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Impact of Disabling Cookies"
            description="How disabling different types of cookies affects your website experience"
            centered
          />
          
          <div className="bg-yellow-50 rounded-xl p-8 border border-yellow-200">
            <H3 className="mb-4 text-yellow-800">Important Notice</H3>
            <Paragraph className="text-yellow-700 mb-6">
              While you can disable most cookies, please note that some cookies are essential for the website 
              to function properly. Disabling certain cookies may affect your user experience.
            </Paragraph>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="font-semibold text-yellow-800 mb-2">If you disable analytics cookies:</div>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• We can't improve our website based on usage data</li>
                  <li>• You may see less relevant content</li>
                  <li>• Performance issues may take longer to resolve</li>
                </ul>
              </div>
              
              <div>
                <div className="font-semibold text-yellow-800 mb-2">If you disable marketing cookies:</div>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• You may see less relevant advertisements</li>
                  <li>• Marketing campaign effectiveness decreases</li>
                  <li>• Retargeting features won't work</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact and Updates */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Questions About Our Cookie Policy?"
            description="Contact us for clarification or to exercise your cookie preferences"
            centered
            theme="dark"
          />
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <H3 className="mb-4 text-white">Get Help with Cookie Management</H3>
            <Paragraph className="text-blue-100 mb-6">
              If you need assistance managing your cookie preferences or have questions about our 
              cookie practices, our support team is here to help.
            </Paragraph>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="font-semibold text-blue-200 mb-1">Email Support</div>
                <div className="text-white">privacy@smartestassistant.com</div>
              </div>
              <div>
                <div className="font-semibold text-blue-200 mb-1">Response Time</div>
                <div className="text-white">Within 48 hours</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Paragraph className="text-blue-100 text-sm">
              <strong>Policy Updates:</strong> We may update this cookie policy periodically to reflect 
              changes in our practices or applicable laws. We will notify users of significant changes 
              via email or prominent website notices.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Related Legal Pages */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Legal Information"
            description="Additional policies and legal information you may find helpful"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/privacy" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🔒</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Privacy Policy</H3>
              <Paragraph className="text-gray-600">
                Learn how we collect, use, and protect your personal information and business data.
              </Paragraph>
            </Link>
            
            <Link href="/terms" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📄</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Terms of Service</H3>
              <Paragraph className="text-gray-600">
                Review our terms of service, user responsibilities, and service limitations.
              </Paragraph>
            </Link>
            
            <Link href="/contact" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📧</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Contact Us</H3>
              <Paragraph className="text-gray-600">
                Get in touch with questions about our policies or to exercise your rights.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}