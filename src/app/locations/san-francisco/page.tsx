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
  TestimonialCard,
  FeatureCard,
  ServiceCard
} from '@/components/ui'
import FAQAccordion from '@/components/ui/FAQ'
import { LocationHero } from '@/components/sections'
import { LocalBusinessSchema, FAQSchema } from '@/components/seo/StructuredData'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'San Francisco Virtual Assistant Services | Smart VAs for SF Businesses | Smartest Assistant',
  description: 'Professional virtual assistant services for San Francisco Bay Area businesses. Smart VAs who understand tech culture, startup pace, and Silicon Valley business needs.',
  keywords: 'virtual assistant san francisco, san francisco executive assistant, bay area virtual assistant, silicon valley assistant services, sf startup virtual assistant',
  openGraph: {
    title: 'San Francisco Virtual Assistant Services | Smart VAs for SF Businesses',
    description: 'Professional virtual assistant services for San Francisco Bay Area businesses. Smart VAs who understand tech culture and startup pace.',
    url: 'https://smartestassistant.com/locations/san-francisco',
  }
}

const sfLocalFeatures = [
  'Familiar with Bay Area tech ecosystem and startup culture',
  'Understand fast-paced Silicon Valley business environment',
  'Aligned with PST/PDT time zones for real-time collaboration',
  'Experience with prominent SF industries: SaaS, fintech, biotech'
]

const sfIndustries = [
  {
    name: 'Tech & SaaS Startups',
    description: 'Supporting rapid scaling with smart administrative solutions',
    companies: 'Salesforce, Uber, Airbnb, Stripe ecosystem'
  },
  {
    name: 'Financial Services',
    description: 'Compliant support for fintech and traditional finance firms',
    companies: 'Wells Fargo, Charles Schwab, Square, Plaid network'
  },
  {
    name: 'Biotech & Healthcare',
    description: 'Specialized support for research and healthcare organizations',
    companies: 'Genentech, UCSF, Kaiser Permanente partners'
  },
  {
    name: 'Professional Services',
    description: 'Executive support for law firms, consulting, and agencies',
    companies: 'Top-tier consulting and legal practices'
  }
]

const sfTestimonials = [
  {
    name: 'Michael Chen',
    role: 'Founder & CEO',
    company: 'TechFlow Dynamics',
    content: 'Operating in SF means moving at light speed. Our Smartest Assistant VA gets the pace, understands our tech stack, and keeps up with our rapid scaling. They\'re like having a strategic partner who never sleeps.',
    rating: 5,
    location: 'South of Market, SF'
  },
  {
    name: 'Sarah Rodriguez',
    role: 'VP Operations',
    company: 'BayTech Solutions',
    content: 'Finding a VA who understands both B2B SaaS and SF business culture was crucial. Our Smartest Assistant VA handles everything from customer success operations to board meeting prep with zero learning curve.',
    rating: 5,
    location: 'Financial District, SF'
  }
]

const faqs = [
  {
    question: 'Do your VAs understand San Francisco\'s unique business culture?',
    answer: 'Absolutely. Our San Francisco VAs are specifically trained on Bay Area business culture, including startup pace, tech terminology, and the collaborative yet fast-moving environment that defines SF businesses. They understand the urgency of product launches, funding cycles, and scaling challenges.'
  },
  {
    question: 'Can your VAs work with Pacific Time zone schedules?',
    answer: 'Yes, we have VAs who work PST/PDT hours to provide real-time support during your business day. For urgent needs, we also provide extended coverage that spans multiple time zones to ensure 24/7 availability when needed.'
  },
  {
    question: 'Do you have experience with SF-specific industries like SaaS and fintech?',
    answer: 'Our San Francisco VAs have extensive experience with tech startups, SaaS companies, fintech firms, and biotech organizations. They understand industry-specific tools, compliance requirements, and the unique operational challenges these sectors face.'
  },
  {
    question: 'How do you handle the fast pace of San Francisco startups?',
    answer: 'Our VAs are trained to match the rapid decision-making and execution pace of SF startups. They prioritize urgent tasks, make autonomous decisions within guidelines, and communicate efficiently to keep up with your business velocity.'
  },
  {
    question: 'Can you support companies across the broader Bay Area?',
    answer: 'Yes, we serve businesses throughout the San Francisco Bay Area including San Jose, Oakland, Palo Alto, Mountain View, and other Silicon Valley locations. Our VAs understand the unique characteristics of each sub-market.'
  }
]

const sfNeighborhoods = [
  'Financial District - Executive and corporate services',
  'South of Market (SOMA) - Startup and tech company support', 
  'Mission Bay - Biotech and life sciences assistance',
  'Presidio - Professional services and consulting support',
  'Union Square - Retail and hospitality coordination',
  'Chinatown - Multicultural business support'
]

export default function SanFranciscoPage() {
  return (
    <>
      <LocalBusinessSchema 
        city="San Francisco"
        state="CA"
        url="https://smartestassistant.com/locations/san-francisco"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <LocationHero
        city="San Francisco"
        state="CA"
        localFeatures={sfLocalFeatures}
      />

      {/* Local Understanding Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">We Know San Francisco Business</H2>
            <Paragraph size="lg">
              Operating in San Francisco means understanding the unique blend of innovation, urgency, and ambition 
              that drives Bay Area businesses. Our VAs don't just work with SF companies – they understand the culture.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <H3 className="mb-6">Why SF Businesses Choose Us</H3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Tech Ecosystem Fluency:</span>
                    <span className="text-gray-600"> Native understanding of SaaS metrics, agile workflows, and startup terminology</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Silicon Valley Pace:</span>
                    <span className="text-gray-600"> Match the rapid decision-making and execution speed SF businesses demand</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Innovation Mindset:</span>
                    <span className="text-gray-600"> Proactive problem-solving that fits SF's culture of continuous improvement</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Pacific Time Alignment:</span>
                    <span className="text-gray-600"> Real-time collaboration during your business hours with extended availability</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4">SF Business Statistics</H3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">500+</div>
                  <div className="text-sm text-gray-600">SF Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">$2.5M</div>
                  <div className="text-sm text-gray-600">Average Client Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">95%</div>
                  <div className="text-sm text-gray-600">Client Retention Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">48hrs</div>
                  <div className="text-sm text-gray-600">Average Onboarding</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services for SF Businesses */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Services Tailored for San Francisco Businesses"
          description="Strategic support designed for the unique needs of Bay Area companies"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-3xl mb-4">
                {service.id === 'email-management' && '📧'}
                {service.id === 'social-media-management' && '📱'}
                {service.id === 'executive-assistant' && '👔'}
                {service.id === 'cold-outreach' && '📬'}
              </div>
              <H3 className="mb-3">{service.name}</H3>
              <Paragraph className="text-gray-600 mb-4">
                {service.description}
              </Paragraph>
              <div className="text-sm text-primary-blue font-medium mb-4">
                SF Specialization: {service.id === 'email-management' && 'Investor communication & funding updates'}
                {service.id === 'social-media-management' && 'Tech thought leadership & product launches'}
                {service.id === 'executive-assistant' && 'Board meetings & VC coordination'}
                {service.id === 'cold-outreach' && 'Enterprise sales & partnership outreach'}
              </div>
              <Button as="link" href={`/services/${service.slug}`} variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* SF Industries */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="San Francisco Industries We Serve"
          description="Deep expertise in the sectors that drive the Bay Area economy"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {sfIndustries.map((industry, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <H3 className="mb-4 text-primary-blue">{industry.name}</H3>
              <Paragraph className="mb-4 text-gray-700">
                {industry.description}
              </Paragraph>
              <div className="text-sm text-gray-600">
                <span className="font-medium">Client Examples: </span>
                {industry.companies}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SF Success Stories */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="San Francisco Success Stories"
          description="How Bay Area businesses achieve more with strategic VA support"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sfTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* Coverage Areas */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">Serving All of San Francisco</H2>
            <Paragraph size="lg">
              From the Financial District to SOMA, we provide premium VA services throughout 
              San Francisco and the broader Bay Area.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <H3 className="mb-6">San Francisco Neighborhoods</H3>
              <ul className="space-y-3">
                {sfNeighborhoods.map((neighborhood, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700">{neighborhood}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <H3 className="mb-6">Broader Bay Area Coverage</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">Silicon Valley - Palo Alto, Mountain View, Sunnyvale</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">East Bay - Oakland, Berkeley, Fremont</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">South Bay - San Jose, Santa Clara, Cupertino</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">North Bay - Marin County, Napa Valley</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="San Francisco VA Services FAQ"
            description="Common questions from Bay Area businesses"
            centered
          />
          
          <FAQAccordion 
            faqs={faqs}
            className="space-y-6"
          />
        </div>
      </Section>

      {/* Get Started Section */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready to Scale Your San Francisco Business?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Join the 500+ Bay Area companies that trust Smartest Assistant to handle their most important tasks. 
            Get a VA who understands your pace, your culture, and your ambition.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Book San Francisco Consultation
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your Bay Area ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free SF business consultation</div>
            <div>✅ Pacific Time zone alignment</div>
            <div>✅ Start within 48 hours</div>
          </div>
        </div>
      </Section>

      {/* Related Pages */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Explore Other Locations"
            description="We serve businesses in major markets across the United States"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/locations/new-york-city" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏙️</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">New York City</H3>
              <Paragraph className="text-gray-600">
                Supporting NYC businesses with VAs who understand the fast-paced financial and media capital.
              </Paragraph>
            </Link>
            
            <Link href="/locations/chicago" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏢</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Chicago</H3>
              <Paragraph className="text-gray-600">
                Serving Chicago enterprises with VAs who bring Midwest work ethic and big-city sophistication.
              </Paragraph>
            </Link>
            
            <Link href="/industries/saas-startups" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🚀</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">SaaS & Startups</H3>
              <Paragraph className="text-gray-600">
                Specialized support for tech startups and SaaS companies at every stage of growth.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}