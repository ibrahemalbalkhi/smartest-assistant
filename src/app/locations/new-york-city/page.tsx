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
  title: 'New York City Virtual Assistant Services | Smart VAs for NYC Businesses | Smartest Assistant',
  description: 'Professional virtual assistant services for New York City businesses. Smart VAs who understand the fast-paced financial capital and diverse business landscape.',
  keywords: 'virtual assistant NYC, manhattan executive assistant, new york virtual assistant, NYC virtual assistant agency, wall street virtual assistant',
  openGraph: {
    title: 'New York City Virtual Assistant Services | Smart VAs for NYC Businesses',
    description: 'Professional virtual assistant services for New York City businesses. Smart VAs who understand the fast-paced financial capital.',
    url: 'https://smartestassistant.com/locations/new-york-city',
  }
}

const nycLocalFeatures = [
  'Familiar with NYC business culture and Wall Street pace',
  'Understand diverse industry landscape from finance to media',
  'Aligned with EST/EDT time zones for seamless collaboration',
  'Experience with prominent NYC sectors: finance, real estate, media, law'
]

const nycIndustries = [
  {
    name: 'Financial Services & Fintech',
    description: 'Supporting investment firms, banks, and fintech startups',
    companies: 'Goldman Sachs, Morgan Stanley, Robinhood ecosystem'
  },
  {
    name: 'Real Estate & PropTech',
    description: 'Comprehensive support for real estate professionals',
    companies: 'CBRE, Compass, WeWork, major brokerages'
  },
  {
    name: 'Media & Entertainment',
    description: 'Creative industry support with tight deadline management',
    companies: 'NBCUniversal, Warner, Conde Nast network'
  },
  {
    name: 'Legal & Professional Services',
    description: 'Confidential support for law firms and consultancies',
    companies: 'Top-tier law firms and consulting practices'
  }
]

const nycTestimonials = [
  {
    name: 'James Morrison',
    role: 'Managing Director',
    company: 'Empire Capital Partners',
    content: 'In NYC finance, timing is everything. Our Smartest Assistant VA handles client communications, manages our complex schedules, and coordinates due diligence meetings flawlessly. They understand the stakes and never miss a beat.',
    rating: 5,
    location: 'Financial District, NYC'
  },
  {
    name: 'Maria Santos',
    role: 'Real Estate Broker',
    company: 'Manhattan Premier Properties',
    content: 'NYC real estate moves at breakneck speed. My Smartest Assistant VA manages showings, coordinates closings, and handles client communications with the urgency and professionalism this market demands. Game changer.',
    rating: 5,
    location: 'Upper East Side, NYC'
  }
]

const faqs = [
  {
    question: 'Do your VAs understand New York City\'s business intensity?',
    answer: 'Absolutely. Our NYC VAs are specifically trained on the city\'s fast-paced, high-stakes business environment. They understand Wall Street urgency, real estate deal timelines, and the 24/7 nature of NYC business culture.'
  },
  {
    question: 'Can your VAs work with Eastern Time zone schedules?',
    answer: 'Yes, we have VAs who work EST/EDT hours to provide real-time support during NYC business hours. We also offer extended coverage for international deals and after-hours client needs common in NYC markets.'
  },
  {
    question: 'Do you have experience with NYC-specific industries like finance and real estate?',
    answer: 'Our New York VAs have extensive experience with financial services, real estate, media, and legal industries. They understand regulatory requirements, market terminology, and the unique operational demands of NYC sectors.'
  },
  {
    question: 'How do you handle the high-pressure environment of NYC business?',
    answer: 'Our VAs are trained to thrive under pressure, prioritize urgent matters, and communicate with the directness and efficiency NYC professionals expect. They make quick decisions and escalate appropriately when stakes are high.'
  },
  {
    question: 'Can you support companies across the greater New York metropolitan area?',
    answer: 'Yes, we serve businesses throughout the NYC metro area including all five boroughs, Westchester County, Long Island, northern New Jersey, and southwestern Connecticut.'
  }
]

const nycBoroughs = [
  'Manhattan - Financial District, Midtown, SoHo business districts',
  'Brooklyn - DUMBO tech corridor and creative industries', 
  'Queens - Long Island City corporate offices',
  'Bronx - Healthcare and educational institutions',
  'Staten Island - Manufacturing and logistics companies'
]

export default function NewYorkCityPage() {
  return (
    <>
      <LocalBusinessSchema 
        city="New York City"
        state="NY"
        url="https://smartestassistant.com/locations/new-york-city"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <LocationHero
        city="New York City"
        state="NY"
        localFeatures={nycLocalFeatures}
        image={{
          src: "/images/new-york-city-skyline.webp",
          alt: "New York City skyline with Manhattan business district",
          width: 1200,
          height: 600
        }}
      />

      {/* Local Understanding Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">We Understand New York Business</H2>
            <Paragraph size="lg">
              Operating in New York City means matching the intensity, sophistication, and relentless pace 
              that defines the world's business capital. Our VAs don't just work with NYC companies – they embody the hustle.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <H3 className="mb-6">Why NYC Businesses Choose Us</H3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Wall Street Intensity:</span>
                    <span className="text-gray-600"> Match the urgency and precision NYC financial markets demand</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Direct Communication:</span>
                    <span className="text-gray-600"> No-nonsense, efficient communication style that NYC professionals appreciate</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Industry Expertise:</span>
                    <span className="text-gray-600"> Deep knowledge of finance, real estate, media, and legal sectors</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">24/7 Availability:</span>
                    <span className="text-gray-600"> Extended hours support for international deals and after-hours client needs</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4">NYC Business Impact</H3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">750+</div>
                  <div className="text-sm text-gray-600">NYC Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">$3.2M</div>
                  <div className="text-sm text-gray-600">Average Client Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">97%</div>
                  <div className="text-sm text-gray-600">Client Retention Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">24hrs</div>
                  <div className="text-sm text-gray-600">Emergency Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services for NYC Businesses */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Services Designed for New York City Businesses"
          description="High-performance support tailored for the world's most demanding business environment"
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
                NYC Specialization: {service.id === 'email-management' && 'Client communications & deal flow management'}
                {service.id === 'social-media-management' && 'Financial thought leadership & compliance'}
                {service.id === 'executive-assistant' && 'C-suite scheduling & board coordination'}
                {service.id === 'cold-outreach' && 'Investment banking & institutional outreach'}
              </div>
              <Button as="link" href={`/services/${service.slug}`} variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* NYC Industries */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="New York City Industries We Serve"
          description="Specialized expertise in the sectors that power the world's business capital"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {nycIndustries.map((industry, index) => (
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

      {/* NYC Success Stories */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="New York City Success Stories"
          description="How NYC businesses achieve excellence with strategic VA support"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {nycTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* Coverage Areas */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">Serving All of New York City</H2>
            <Paragraph size="lg">
              From Wall Street to Silicon Alley, we provide premium VA services throughout 
              all five boroughs and the greater NYC metropolitan area.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <H3 className="mb-6">Five Borough Coverage</H3>
              <ul className="space-y-3">
                {nycBoroughs.map((borough, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700">{borough}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <H3 className="mb-6">Greater NYC Metro Area</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">Westchester County - White Plains, Yonkers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Long Island - Nassau and Suffolk Counties</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Northern New Jersey - Jersey City, Newark, Hoboken</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Connecticut - Fairfield County, Stamford</span>
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
            title="NYC VA Services FAQ"
            description="Common questions from New York City businesses"
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
          <H2 className="mb-6 text-white">Ready to Dominate Your NYC Market?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Join the 750+ New York businesses that trust Smartest Assistant to handle their most critical tasks. 
            Get a VA who matches your intensity, understands your market, and delivers results.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Book NYC Consultation
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your NYC ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free NYC business assessment</div>
            <div>✅ Eastern Time zone coverage</div>
            <div>✅ 24-hour emergency response</div>
          </div>
        </div>
      </Section>

      {/* Related Pages */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Explore Other Major Markets"
            description="We serve businesses in key metropolitan areas across the United States"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/locations/san-francisco" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🌉</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">San Francisco</H3>
              <Paragraph className="text-gray-600">
                Supporting Bay Area tech companies and startups with VAs who understand Silicon Valley pace.
              </Paragraph>
            </Link>
            
            <Link href="/locations/chicago" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏢</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Chicago</H3>
              <Paragraph className="text-gray-600">
                Serving Chicago enterprises with VAs who combine Midwest values with big-city expertise.
              </Paragraph>
            </Link>
            
            <Link href="/industries/real-estate" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏠</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Real Estate</H3>
              <Paragraph className="text-gray-600">
                Specialized support for NYC real estate professionals and property management companies.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}