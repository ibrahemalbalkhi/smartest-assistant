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
  title: 'Austin Virtual Assistant Services | Smart VAs for Texas Businesses | Smartest Assistant',
  description: 'Professional virtual assistant services for Austin businesses. Smart VAs who understand tech culture, startup ecosystem, and the "Keep Austin Weird" innovative spirit.',
  keywords: 'virtual assistant austin, austin executive assistant, texas virtual assistant, austin startup virtual assistant, south by southwest assistant services',
  openGraph: {
    title: 'Austin Virtual Assistant Services | Smart VAs for Texas Businesses',
    description: 'Professional virtual assistant services for Austin businesses. Smart VAs who understand tech culture and innovative startup ecosystem.',
    url: 'https://smartestassistant.com/locations/austin',
  }
}

const austinLocalFeatures = [
  'Deep understanding of Austin\'s "Keep Austin Weird" innovative business culture',
  'Experience with South by Southwest (SXSW) event coordination and tech ecosystem',
  'Central Time zone alignment for seamless collaboration with Texas businesses',
  'Expertise in Austin\'s key industries: tech, music, healthcare, and clean energy'
]

const austinIndustries = [
  {
    name: 'Tech & SaaS Companies',
    description: 'Supporting Austin\'s thriving tech scene with scalable administrative solutions',
    companies: 'Dell, IBM, Facebook, Google, Indeed, Bumble ecosystem'
  },
  {
    name: 'Healthcare & Life Sciences',
    description: 'Specialized support for Austin\'s growing biotech and healthcare sector',
    companies: 'Ascension Seton, St. David\'s, medical device startups'
  },
  {
    name: 'Clean Energy & Sustainability',
    description: 'Administrative support for renewable energy and environmental companies',
    companies: 'Solar power companies, environmental consulting firms'
  },
  {
    name: 'Creative & Entertainment',
    description: 'Supporting music, film, and creative businesses that make Austin unique',
    companies: 'Music venues, production companies, creative agencies'
  }
]

const austinTestimonials = [
  {
    id: 'austin-testimonial-1',
    name: 'Jessica Martinez',
    role: 'Co-Founder',
    company: 'LiveMusic Tech',
    content: 'Austin moves to its own beat, and our Smartest Assistant VA gets that rhythm. They handle everything from SXSW logistics to investor relations with the perfect blend of Texas hospitality and tech efficiency.',
    rating: 5,
    location: 'South Austin, TX'
  },
  {
    id: 'austin-testimonial-2',
    name: 'David Thompson',
    role: 'CEO',
    company: 'GreenTech Solutions',
    content: 'Our VA understands both the innovative spirit of Austin and the practical needs of scaling a clean energy startup. They\'ve been instrumental in managing our rapid growth while keeping our Austin values intact.',
    rating: 5,
    location: 'Downtown Austin, TX'
  }
]

const faqs = [
  {
    question: 'Do your VAs understand Austin\'s unique business culture and "Keep Austin Weird" mentality?',
    answer: 'Absolutely. Our Austin VAs are specifically trained on the city\'s innovative, creative, and entrepreneurial culture. They understand the balance between maintaining Austin\'s unique character and driving serious business growth, especially in tech and creative industries.'
  },
  {
    question: 'Can your VAs help with SXSW and other Austin-specific events?',
    answer: 'Yes, our Austin VAs have extensive experience with major local events like SXSW, Austin City Limits, and other festivals. They can handle event coordination, vendor management, travel logistics, and networking support for these unique Austin opportunities.'
  },
  {
    question: 'Do you work with Central Time zone schedules?',
    answer: 'Absolutely. We have VAs who work Central Time to provide real-time support during your Austin business hours. We understand the importance of being available when your clients, partners, and team members need you most.'
  },
  {
    question: 'Can you support Austin\'s diverse industry mix from tech to music to clean energy?',
    answer: 'Yes, our Austin VAs have experience across the city\'s diverse economic landscape. Whether you\'re a tech startup, music venue, clean energy company, or healthcare organization, we match you with VAs who understand your specific industry needs.'
  },
  {
    question: 'How do you handle the rapid growth and scaling challenges Austin businesses face?',
    answer: 'Austin is one of the fastest-growing cities in the US, and our VAs are trained to support rapid scaling. They help with hiring coordination, vendor management, office expansion support, and all the administrative challenges that come with hypergrowth.'
  }
]

const austinNeighborhoods = [
  'Downtown Austin - Corporate and startup headquarters support',
  'South Austin - Creative and music industry assistance',
  'East Austin - Tech hub and co-working space coordination',
  'North Austin - Healthcare and life sciences support',
  'West Lake Hills - Executive and professional services',
  'Mueller - Sustainable business and green tech support'
]

export default function AustinPage() {
  return (
    <>
      <LocalBusinessSchema 
        city="Austin"
        state="TX"
        url="https://smartestassistant.com/locations/austin"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <LocationHero
        city="Austin"
        state="TX"
        localFeatures={austinLocalFeatures}
      />

      {/* Local Understanding Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">We Keep Austin Business Weird (And Profitable)</H2>
            <Paragraph size="lg">
              Austin businesses operate with a unique blend of innovation, creativity, and entrepreneurial spirit. 
              Our VAs don't just understand Austin's business landscape – they embody the city's values of authenticity and excellence.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <H3 className="mb-6">Why Austin Businesses Choose Us</H3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Cultural Fluency:</span>
                    <span className="text-gray-600"> Understanding of Austin's blend of tech innovation and creative authenticity</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Event Expertise:</span>
                    <span className="text-gray-600"> Specialized experience with SXSW, ACL, and other major Austin events</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Growth Management:</span>
                    <span className="text-gray-600"> Support for Austin's rapid business expansion and scaling challenges</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Central Time Alignment:</span>
                    <span className="text-gray-600"> Perfect timezone match for Texas business hours and national coordination</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4">Austin Business Impact</H3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">200+</div>
                  <div className="text-sm text-gray-600">Austin Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">$1.8M</div>
                  <div className="text-sm text-gray-600">Total Client Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">97%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">24hrs</div>
                  <div className="text-sm text-gray-600">Setup Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services for Austin Businesses */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Services Tailored for Austin Businesses"
          description="Strategic support designed for the unique needs of Texas companies"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((service) => (
            <div key={service.id} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-3xl mb-4">
                {service.id === 'email-management' && '📧'}
                {service.id === 'social-media-management' && '📱'}
                {service.id === 'executive-assistant' && '👔'}
                {service.id === 'cold-outreach' && '📬'}
                {service.id === 'calendar-management' && '📅'}
                {service.id === 'content-creation' && '✍️'}
              </div>
              <H3 className="mb-3">{service.name}</H3>
              <Paragraph className="text-gray-600 mb-4">
                {service.description}
              </Paragraph>
              <div className="text-sm text-primary-blue font-medium mb-4">
                Austin Focus: {service.id === 'email-management' && 'SXSW coordination & investor updates'}
                {service.id === 'social-media-management' && 'Music scene & festival marketing'}
                {service.id === 'executive-assistant' && 'Startup scaling & event management'}
                {service.id === 'cold-outreach' && 'Tech ecosystem networking'}
                {service.id === 'calendar-management' && 'Conference & festival scheduling'}
                {service.id === 'content-creation' && 'Music & tech industry content'}
              </div>
              <Button as="link" href={`/services/${service.slug}`} variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Austin Industries */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Austin Industries We Serve"
          description="Deep expertise in the sectors that drive the Texas capital's economy"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {austinIndustries.map((industry, index) => (
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

      {/* Austin Success Stories */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Austin Success Stories"
          description="How Texas businesses achieve more with strategic VA support"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {austinTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* Coverage Areas */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">Serving All of Austin</H2>
            <Paragraph size="lg">
              From downtown tech headquarters to South Austin creative spaces, we provide premium VA services 
              throughout Austin and the greater Central Texas region.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <H3 className="mb-6">Austin Neighborhoods</H3>
              <ul className="space-y-3">
                {austinNeighborhoods.map((neighborhood, index) => (
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
              <H3 className="mb-6">Central Texas Coverage</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">Greater Austin Metro - Cedar Park, Round Rock, Pflugerville</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Hill Country - Dripping Springs, Wimberley, Fredericksburg</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Central Texas - San Marcos, Kyle, Buda</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">University Corridor - UT Campus, Research Centers</span>
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
            title="Austin VA Services FAQ"
            description="Common questions from Texas business owners"
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
          <H2 className="mb-6 text-white">Ready to Keep Your Austin Business Weird and Profitable?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Join the 200+ Austin companies that trust Smartest Assistant to handle their most important tasks. 
            Get a VA who understands your innovative spirit and ambitious growth goals.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Book Austin Consultation
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your Texas ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free Austin business consultation</div>
            <div>✅ Central Time zone support</div>
            <div>✅ Start within 24 hours</div>
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
            <Link href="/locations/san-francisco" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🌉</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">San Francisco</H3>
              <Paragraph className="text-gray-600">
                Supporting Bay Area businesses with VAs who understand tech culture and Silicon Valley pace.
              </Paragraph>
            </Link>
            
            <Link href="/locations/new-york-city" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏙️</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">New York City</H3>
              <Paragraph className="text-gray-600">
                Serving NYC enterprises with VAs who match the energy of America's business capital.
              </Paragraph>
            </Link>
            
            <Link href="/industries/saas-startups" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🚀</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Tech & Startups</H3>
              <Paragraph className="text-gray-600">
                specialized support for tech companies and startups at every stage of growth.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}