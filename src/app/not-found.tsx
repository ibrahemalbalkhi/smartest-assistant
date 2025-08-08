import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Section, 
  SectionHeader,
  H2, 
  H3, 
  Paragraph, 
  Button,
  FeatureCard
} from '@/components/ui'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Smartest Assistant',
  description: 'The page you are looking for could not be found. Find virtual assistant services, resources, and solutions that help your business grow.',
  robots: 'noindex, follow'
}

const popularPages = [
  {
    title: 'Virtual Assistant Services',
    description: 'Explore our comprehensive range of VA services',
    href: '/services',
    icon: '💼'
  },
  {
    title: 'Schedule a Call',
    description: 'Book a free consultation with our experts',
    href: '/schedule-a-call',
    icon: '📞'
  },
  {
    title: 'ROI Calculator',
    description: 'Calculate your potential savings with a VA',
    href: '/resources/roi-calculator',
    icon: '💰'
  },
  {
    title: 'About Us',
    description: 'Learn more about our mission and team',
    href: '/about',
    icon: '🏢'
  }
]

const popularServices = [
  {
    name: 'Email Management',
    href: '/services/email-management',
    description: 'Inbox organization and communication'
  },
  {
    name: 'Calendar Management',
    href: '/services/calendar-management',
    description: 'Scheduling and time optimization'
  },
  {
    name: 'Social Media Management',
    href: '/services/social-media-management',
    description: 'Content creation and engagement'
  },
  {
    name: 'Executive Assistant',
    href: '/services/executive-assistant',
    description: 'High-level strategic support'
  }
]

export default function NotFound() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" spacing="xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-8xl mb-6">🔍</div>
          <H2 className="mb-4">Oops! Page Not Found</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600">
            We couldn't find the page you're looking for. It might have been moved, renamed, or doesn't exist.
            Let's help you find what you need.
          </Paragraph>
          
          {/* Search Form */}
          <div className="max-w-xl mx-auto mb-8">
            <form action="/search" method="GET" className="relative">
              <input
                type="search"
                name="q"
                placeholder="Search for services, resources, or information..."
                className="w-full px-6 py-4 pr-12 text-gray-900 bg-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                aria-label="Search"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-primary-blue hover:text-primary-dark transition-colors"
                aria-label="Submit search"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/" size="lg">
              Go to Homepage
            </Button>
            <Button as="link" href="/contact" variant="outline" size="lg">
              Contact Support
            </Button>
          </div>
        </div>
      </Section>

      {/* Popular Pages */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Popular Pages"
          description="Here are some pages you might be looking for"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularPages.map((page, index) => (
            <Link key={index} href={page.href} className="group">
              <FeatureCard
                icon={<span className="text-3xl">{page.icon}</span>}
                title={page.title}
                description={page.description}
                className="h-full transition-transform group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </Section>

      {/* Popular Services */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Popular Services"
          description="Explore our most requested virtual assistant services"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <H3 className="mb-2 text-lg group-hover:text-primary-blue transition-colors">
                {service.name}
              </H3>
              <Paragraph className="text-gray-600 text-sm">
                {service.description}
              </Paragraph>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button as="link" href="/services" variant="primary" size="lg">
            View All Services
          </Button>
        </div>
      </Section>

      {/* Quick Links */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Quick Links"
            description="Find what you need quickly"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <H3 className="mb-4 text-primary-blue">Solutions</H3>
              <ul className="space-y-2">
                <li>
                  <Link href="/solutions/for-entrepreneurs" className="text-gray-600 hover:text-primary-blue transition-colors">
                    For Entrepreneurs
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/for-small-businesses" className="text-gray-600 hover:text-primary-blue transition-colors">
                    For Small Businesses
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/for-executives" className="text-gray-600 hover:text-primary-blue transition-colors">
                    For Executives
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <H3 className="mb-4 text-primary-blue">Industries</H3>
              <ul className="space-y-2">
                <li>
                  <Link href="/industries/saas-startups" className="text-gray-600 hover:text-primary-blue transition-colors">
                    SaaS & Startups
                  </Link>
                </li>
                <li>
                  <Link href="/industries/healthcare" className="text-gray-600 hover:text-primary-blue transition-colors">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="/industries/real-estate" className="text-gray-600 hover:text-primary-blue transition-colors">
                    Real Estate
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <H3 className="mb-4 text-primary-blue">Resources</H3>
              <ul className="space-y-2">
                <li>
                  <Link href="/resources/roi-calculator" className="text-gray-600 hover:text-primary-blue transition-colors">
                    ROI Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/resources/case-studies" className="text-gray-600 hover:text-primary-blue transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-primary-blue transition-colors">
                    Blog & Resources
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Help Section */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Still Can't Find What You're Looking For?"
            description="Our team is here to help you find the right solution"
            centered
            theme="dark"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-3xl mb-4">💬</div>
              <H3 className="mb-3 text-white">Live Chat Support</H3>
              <Paragraph className="text-blue-100 mb-4">
                Chat with our team for immediate assistance
              </Paragraph>
              <Button variant="secondary" size="base">
                Start Chat
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-3xl mb-4">📧</div>
              <H3 className="mb-3 text-white">Email Support</H3>
              <Paragraph className="text-blue-100 mb-4">
                Send us an email and we'll respond within 24 hours
              </Paragraph>
              <Button as="link" href="mailto:support@smartestassistant.com" variant="secondary" size="base">
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}