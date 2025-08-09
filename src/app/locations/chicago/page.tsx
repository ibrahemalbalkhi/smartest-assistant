import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Section, 
  SectionHeader,
  H2, 
  H3, 
  Paragraph, 
  Button, 
  TestimonialCard
} from '@/components/ui'
import FAQAccordion from '@/components/ui/FAQ'
import { LocationHero } from '@/components/sections'
import { LocalBusinessSchema, FAQSchema } from '@/components/seo/StructuredData'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Chicago Virtual Assistant Services | Smart VAs for Chicago Businesses | Smartest Assistant',
  description: 'Professional virtual assistant services for Chicago businesses. Smart VAs who bring Midwest work ethic and understand the diverse Chicago business landscape.',
  keywords: 'virtual assistant chicago, chicago executive assistant, loop virtual assistant, chicago VA services, illinois virtual assistant, midwest virtual assistant',
  openGraph: {
    title: 'Chicago Virtual Assistant Services | Smart VAs for Chicago Businesses',
    description: 'Professional virtual assistant services for Chicago businesses. Smart VAs with Midwest work ethic and big-city sophistication.',
    url: 'https://smartestassistant.com/locations/chicago',
  }
}

const chicagoLocalFeatures = [
  'Midwest work ethic combined with big-city business sophistication',
  'Deep understanding of Chicago\'s diverse economic landscape',
  'Central Time Zone alignment for optimal business collaboration',
  'Experience with key Chicago industries: manufacturing, finance, healthcare, logistics'
]

const chicagoIndustries = [
  {
    name: 'Manufacturing & Industrial',
    description: 'Supporting Chicago\'s industrial backbone with operational excellence',
    companies: 'Boeing, Caterpillar, Abbott Laboratories ecosystem'
  },
  {
    name: 'Financial Services',
    description: 'Comprehensive support for trading, banking, and financial firms',
    companies: 'CME Group, Northern Trust, financial district firms'
  },
  {
    name: 'Healthcare & Pharmaceuticals',
    description: 'Specialized support for medical and pharmaceutical organizations',
    companies: 'Northwestern Medicine, Rush University Medical Center network'
  },
  {
    name: 'Transportation & Logistics',
    description: 'Strategic support for America\'s transportation hub',
    companies: 'United Airlines, logistics and supply chain companies'
  }
]

const chicagoTestimonials = [
  {
    id: 'chicago-testimonial-1',
    name: 'Robert Johnson',
    role: 'Operations Director',
    company: 'Midwest Manufacturing Solutions',
    content: 'Chicago business requires both efficiency and relationship-building. Our Smartest Assistant VA handles complex vendor coordination, manages our supply chain communications, and maintains the personal touch our partners expect.',
    rating: 5,
    location: 'The Loop, Chicago'
  },
  {
    id: 'chicago-testimonial-2',
    name: 'Patricia Williams',
    role: 'Healthcare Administrator',
    company: 'Chicago Medical Group',
    content: 'Healthcare administration demands precision and compliance. My Smartest Assistant VA manages patient scheduling, coordinates with insurance providers, and handles sensitive communications with the care and accuracy healthcare requires.',
    rating: 5,
    location: 'River North, Chicago'
  }
]

const faqs = [
  {
    question: 'Do your VAs understand Chicago\'s business culture and work ethic?',
    answer: 'Absolutely. Our Chicago VAs embody the Midwest values of reliability, integrity, and hard work while understanding the sophistication of major urban business operations. They balance efficiency with relationship-building in true Chicago style.'
  },
  {
    question: 'Can your VAs work with Central Time zone schedules?',
    answer: 'Yes, we have VAs who work CST/CDT hours to provide seamless support during Chicago business hours. This central location also makes it easy to coordinate with both East and West Coast partners and clients.'
  },
  {
    question: 'Do you have experience with Chicago\'s diverse industry base?',
    answer: 'Our Chicago VAs have broad experience across manufacturing, healthcare, finance, and logistics - the key sectors that drive Chicago\'s economy. They understand industry-specific requirements and regulatory environments.'
  },
  {
    question: 'How do you balance efficiency with the relationship-building Chicago businesses value?',
    answer: 'Our VAs understand that Chicago business culture values both results and relationships. They communicate with warmth and authenticity while maintaining high efficiency and professional standards.'
  },
  {
    question: 'Can you support companies across the greater Chicagoland area?',
    answer: 'Yes, we serve businesses throughout the Chicago metropolitan area including the suburbs, northwest Indiana, and southeast Wisconsin - anywhere Chicago businesses operate.'
  }
]

const chicagoNeighborhoods = [
  'The Loop - Financial district and corporate headquarters',
  'River North - Healthcare and professional services', 
  'West Loop - Tech startups and modern businesses',
  'Magnificent Mile - Retail and hospitality',
  'Lincoln Park - Small business and consulting',
  'Millennium Park area - Cultural and event management'
]

export default function ChicagoPage() {
  return (
    <>
      <LocalBusinessSchema 
        city="Chicago"
        state="IL"
        url="https://smartestassistant.com/locations/chicago"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <LocationHero
        city="Chicago"
        state="IL"
        localFeatures={chicagoLocalFeatures}
      />

      {/* Local Understanding Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">We Embody Chicago Business Values</H2>
            <Paragraph size="lg">
              Chicago business culture blends Midwest integrity with big-city sophistication. 
              Our VAs understand this unique combination and deliver results with the reliability, 
              work ethic, and relationship focus that Chicago businesses expect.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <H3 className="mb-6">Why Chicago Businesses Trust Us</H3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Midwest Work Ethic:</span>
                    <span className="text-gray-600"> Reliability, integrity, and dedication that Chicago businesses depend on</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Relationship Focus:</span>
                    <span className="text-gray-600"> Understanding that Chicago business thrives on strong, authentic relationships</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Industry Diversity:</span>
                    <span className="text-gray-600"> Experience across manufacturing, healthcare, finance, and logistics sectors</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Central Hub Advantage:</span>
                    <span className="text-gray-600"> Perfect timezone positioning for coordinating nationwide operations</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4">Chicago Market Results</H3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">400+</div>
                  <div className="text-sm text-gray-600">Chicago Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">$1.8M</div>
                  <div className="text-sm text-gray-600">Average Client Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">96%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">36hrs</div>
                  <div className="text-sm text-gray-600">Setup Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services for Chicago Businesses */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Services Built for Chicago Businesses"
          description="Professional support that matches Chicago's unique blend of efficiency and relationship-building"
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
                Chicago Focus: {service.id === 'email-management' && 'Supply chain & vendor communications'}
                {service.id === 'social-media-management' && 'B2B manufacturing & healthcare content'}
                {service.id === 'executive-assistant' && 'Board meetings & regulatory coordination'}
                {service.id === 'cold-outreach' && 'Midwest market development & partnerships'}
              </div>
              <Button as="link" href={`/services/${service.slug}`} variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Chicago Industries */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Chicago Industries We Serve"
          description="Deep expertise in the diverse sectors that power the Chicago economy"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {chicagoIndustries.map((industry, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <H3 className="mb-4 text-primary-blue">{industry.name}</H3>
              <Paragraph className="mb-4 text-gray-700">
                {industry.description}
              </Paragraph>
              <div className="text-sm text-gray-600">
                <span className="font-medium">Major Players: </span>
                {industry.companies}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Chicago Success Stories */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Chicago Success Stories"
          description="How Chicago businesses achieve operational excellence with strategic VA support"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {chicagoTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* Coverage Areas */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">Serving Greater Chicagoland</H2>
            <Paragraph size="lg">
              From downtown Loop to suburban business districts, we provide comprehensive VA services 
              throughout Chicago and the entire metropolitan area.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <H3 className="mb-6">Chicago Neighborhoods</H3>
              <ul className="space-y-3">
                {chicagoNeighborhoods.map((neighborhood, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                    </svg>
                    <span className="text-gray-700">{neighborhood}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <H3 className="mb-6">Metropolitan Area</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">North Shore - Evanston, Skokie, Highland Park</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Western Suburbs - Oak Park, Naperville, Schaumburg</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Southern Suburbs - Orland Park, Tinley Park</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Northwest Indiana - Gary, Hammond business corridor</span>
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
            title="Chicago VA Services FAQ"
            description="Common questions from Chicago area businesses"
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
          <H2 className="mb-6 text-white">Ready to Grow Your Chicago Business?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Join the 400+ Chicago businesses that trust Smartest Assistant for reliable, relationship-focused support. 
            Get a VA who embodies Midwest values while delivering big-city results.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Book Chicago Consultation
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your Chicago ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free Chicago business assessment</div>
            <div>✅ Central Time zone advantage</div>
            <div>✅ Midwest reliability guarantee</div>
          </div>
        </div>
      </Section>

      {/* Related Pages */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Explore Other Markets & Industries"
            description="We serve businesses across major markets and key industry verticals"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/locations/san-francisco" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🌉</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">San Francisco</H3>
              <Paragraph className="text-gray-600">
                Supporting Bay Area tech companies with VAs who understand Silicon Valley innovation.
              </Paragraph>
            </Link>
            
            <Link href="/locations/new-york-city" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏙️</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">New York City</H3>
              <Paragraph className="text-gray-600">
                Serving NYC businesses with VAs who match the intensity of the world's business capital.
              </Paragraph>
            </Link>
            
            <Link href="/industries/saas-startups" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">⚕️</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Healthcare</H3>
              <Paragraph className="text-gray-600">
                Specialized support for Chicago's robust healthcare and pharmaceutical sector.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}