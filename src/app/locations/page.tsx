import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Section, 
  SectionHeader,
  H2, 
  H3, 
  Paragraph, 
  Button,
  Container
} from '@/components/ui'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Virtual Assistant Services by Location | Smart VAs Nationwide | Smartest Assistant',
  description: 'Find smart virtual assistant services in your city. Local expertise with global standards. Serving San Francisco, NYC, Chicago, Los Angeles, and nationwide.',
  keywords: 'virtual assistant services by location, local virtual assistant, nationwide VA services, virtual assistant San Francisco, virtual assistant NYC, virtual assistant Chicago',
  openGraph: {
    title: 'Virtual Assistant Services by Location | Smart VAs Nationwide',
    description: 'Find smart virtual assistant services in your city. Local expertise with global standards.',
    url: 'https://smartestassistant.com/locations',
  }
}

const locations = [
  {
    name: 'San Francisco',
    slug: 'san-francisco',
    state: 'California',
    description: 'Premier virtual assistant services for San Francisco Bay Area businesses. Expert support for tech startups, SaaS companies, and innovative enterprises.',
    image: '/images/locations/san-francisco-smartest-assistant.webp',
    featured: true,
    highlights: ['Tech Industry Expertise', 'SaaS Specialization', 'Startup Culture Understanding']
  },
  {
    name: 'New York City',
    slug: 'new-york-city', 
    state: 'New York',
    description: 'Smart virtual assistants for NYC businesses. From Wall Street finance to Brooklyn startups, we understand the fast-paced New York business environment.',
    image: '/images/locations/new-york-city-smartest-assistant.webp',
    featured: true,
    highlights: ['Finance Expertise', 'Fast-Paced Environment', 'Executive Support']
  },
  {
    name: 'Chicago',
    slug: 'chicago',
    state: 'Illinois',
    description: 'Virtual assistant services for Chicago businesses. Combining Midwest values with cutting-edge efficiency for manufacturing, finance, and consulting companies.',
    image: '/images/locations/chicago-smartest-assistant.webp',
    featured: true,
    highlights: ['Manufacturing Focus', 'Consulting Support', 'Midwest Values']
  },
  {
    name: 'Los Angeles',
    slug: 'los-angeles',
    state: 'California', 
    description: 'Creative and entertainment industry virtual assistants. Expert support for LA-based media, entertainment, and creative agencies.',
    image: '/images/locations/los-angeles-smartest-assistant.webp',
    featured: false,
    highlights: ['Entertainment Industry', 'Creative Agencies', 'Media Production']
  },
  {
    name: 'Miami',
    slug: 'miami',
    state: 'Florida',
    description: 'Bilingual virtual assistant services for Miami businesses. Expert support for international trade, real estate, and hospitality companies.',
    image: '/images/locations/miami-smartest-assistant.webp',
    featured: false,
    highlights: ['Bilingual Support', 'International Trade', 'Real Estate Focus']
  },
  {
    name: 'Austin',
    slug: 'austin',
    state: 'Texas',
    description: 'Tech-savvy virtual assistants for Austin businesses. Supporting the vibrant startup ecosystem and established tech companies in Silicon Hills.',
    image: '/images/locations/austin-smartest-assistant.webp',
    featured: false,
    highlights: ['Tech Startup Support', 'Innovation Focus', 'Growth Companies']
  },
  {
    name: 'Seattle',
    slug: 'seattle',
    state: 'Washington',
    description: 'Virtual assistant services for Seattle businesses. Expert support for technology, aerospace, and e-commerce companies in the Pacific Northwest.',
    image: '/images/locations/seattle-smartest-assistant.webp',
    featured: false,
    highlights: ['Tech Giants Support', 'E-commerce Expertise', 'Aerospace Industry']
  },
  {
    name: 'Boston',
    slug: 'boston',
    state: 'Massachusetts',
    description: 'Smart virtual assistants for Boston businesses. Supporting biotech, healthcare, education, and financial services in New England\'s innovation hub.',
    image: '/images/locations/boston-smartest-assistant.webp',
    featured: false,
    highlights: ['Biotech Specialization', 'Healthcare Support', 'Education Sector']
  }
]

export default function LocationsHub() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations', current: true }
  ]

  return (
    <>
      <ServiceSchema 
        name="Virtual Assistant Services by Location"
        description="Smart virtual assistant services available nationwide with local expertise and global standards. Serving major cities across the United States."
        url="https://smartestassistant.com/locations"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      
      {/* Hero Section */}
      <Section background="gradient" spacing="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-primary-blue text-sm font-semibold rounded-full mb-4">
                🌎 Serving Businesses Nationwide
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Smart Virtual Assistants{' '}
              <span className="text-primary-blue">Wherever You Are</span>
            </h1>
            
            <Paragraph size="lg" className="mb-8 max-w-3xl mx-auto text-xl text-gray-600">
              Local expertise meets global standards. Our smart VAs understand your market, 
              your time zone, and your business culture while delivering world-class results.
            </Paragraph>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="link" href="/schedule-a-call" size="lg" className="text-lg px-8 py-4">
                Find Your Local VA
              </Button>
              <Button as="link" href="/services" variant="outline" size="lg" className="text-lg px-8 py-4">
                View All Services
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Locations */}
      <Section spacing="lg">
        <Container>
          <SectionHeader
            title="Premier Markets We Serve"
            description="Major metropolitan areas where we provide specialized virtual assistant services"
          />
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {locations.filter(location => location.featured).map((location) => (
              <Link key={location.slug} href={`/locations/${location.slug}`} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">{location.name} Image</span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <H3 className="group-hover:text-primary-blue transition-colors">
                        {location.name}
                      </H3>
                      <span className="text-gray-500 text-sm">{location.state}</span>
                    </div>
                    
                    <Paragraph className="text-gray-600 mb-4">
                      {location.description}
                    </Paragraph>
                    
                    <div className="space-y-2">
                      {location.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <span className="text-primary-blue font-semibold group-hover:underline">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* All Locations Grid */}
      <Section background="gray" spacing="lg">
        <Container>
          <SectionHeader
            title="All Service Locations"
            description="Professional virtual assistant services available nationwide"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.filter(location => !location.featured).map((location) => (
              <Link key={location.slug} href={`/locations/${location.slug}`} className="group">
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-primary-blue rounded-full"></div>
                    <H3 className="text-lg group-hover:text-primary-blue transition-colors">
                      {location.name}
                    </H3>
                  </div>
                  
                  <Paragraph className="text-gray-600 text-sm mb-3">
                    {location.description}
                  </Paragraph>
                  
                  <div className="text-primary-blue text-sm font-medium group-hover:underline">
                    View Services →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Location Matters */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Why Location-Specific Service Matters"
              description="Local understanding combined with global best practices"
              centered
            />
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-blue text-xl">🏢</span>
                  </div>
                  <div>
                    <H3 className="mb-2">Business Culture Understanding</H3>
                    <Paragraph className="text-gray-600">
                      Our VAs understand regional business cultures, from Silicon Valley's fast-paced innovation 
                      to Midwest's relationship-focused approach.
                    </Paragraph>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-blue text-xl">🕒</span>
                  </div>
                  <div>
                    <H3 className="mb-2">Time Zone Alignment</H3>
                    <Paragraph className="text-gray-600">
                      Perfect scheduling coordination and real-time support during your business hours, 
                      no matter where you're located.
                    </Paragraph>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-blue text-xl">🏭</span>
                  </div>
                  <div>
                    <H3 className="mb-2">Industry Specialization</H3>
                    <Paragraph className="text-gray-600">
                      Specialized knowledge of dominant local industries, from NYC finance 
                      to Austin tech to Miami international trade.
                    </Paragraph>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-blue text-xl">🤝</span>
                  </div>
                  <div>
                    <H3 className="mb-2">Local Network Access</H3>
                    <Paragraph className="text-gray-600">
                      Connections with local service providers, vendors, and business communities 
                      to better support your operations.
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Nationwide Coverage */}
      <Section background="primary" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <H2 className="mb-6 text-white">
              Not in a Featured City? We Still Serve You.
            </H2>
            <Paragraph size="lg" className="mb-8 text-blue-100">
              While we highlight our major markets, we provide smart virtual assistant services 
              to businesses nationwide. Wherever you are, we have the right VA for your needs.
            </Paragraph>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-white">
                <div>
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-blue-100">Cities Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-blue-100">Support Coverage</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-blue-100">US-Based Team</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
                Get Started Today
              </Button>
              <Button as="link" href="/contact" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}