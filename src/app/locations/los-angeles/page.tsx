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
  title: 'Los Angeles Virtual Assistant Services | Smart VAs for California Businesses | Smartest Assistant',
  description: 'Professional virtual assistant services for Los Angeles businesses. Smart VAs who understand entertainment industry, tech innovation, and diverse LA business culture.',
  keywords: 'virtual assistant los angeles, LA executive assistant, california virtual assistant, hollywood assistant services, santa monica virtual assistant',
  openGraph: {
    title: 'Los Angeles Virtual Assistant Services | Smart VAs for California Businesses',
    description: 'Professional virtual assistant services for Los Angeles businesses. Smart VAs who understand entertainment culture and diverse business landscape.',
    url: 'https://smartestassistant.com/locations/los-angeles',
  }
}

const laLocalFeatures = [
  'Deep understanding of LA\'s entertainment industry and creative business culture',
  'Experience with diverse industries from tech to fashion to media production',
  'Pacific Time zone alignment for seamless West Coast business coordination',
  'Expertise in LA\'s sprawling business ecosystem from Downtown to Silicon Beach'
]

const laIndustries = [
  {
    name: 'Entertainment & Media',
    description: 'Supporting Hollywood\'s creative ecosystem with specialized industry knowledge',
    companies: 'Warner Bros, Disney, Netflix, Paramount, independent production companies'
  },
  {
    name: 'Technology & Startups',
    description: 'Administrative support for Silicon Beach and LA\'s growing tech scene',
    companies: 'Snapchat, SpaceX, Riot Games, Dollar Shave Club, various startups'
  },
  {
    name: 'Fashion & Lifestyle',
    description: 'Executive support for fashion brands, influencer businesses, and lifestyle companies',
    companies: 'Fashion designers, influencer agencies, lifestyle brands, beauty companies'
  },
  {
    name: 'Real Estate & Development',
    description: 'Supporting LA\'s dynamic real estate market and development projects',
    companies: 'Commercial developers, residential brokers, property management firms'
  }
]

const laTestimonials = [
  {
    id: 'los-angeles-testimonial-1',
    name: 'Alexandra Chen',
    role: 'Executive Producer',
    company: 'Sunset Studios',
    content: 'In LA\'s fast-paced entertainment industry, timing is everything. Our Smartest Assistant VA understands production schedules, talent coordination, and the unique demands of creative projects. They\'ve been essential for managing our multiple film productions.',
    rating: 5,
    location: 'West Hollywood, CA'
  },
  {
    id: 'los-angeles-testimonial-2',
    name: 'Marcus Williams',
    role: 'Co-Founder',
    company: 'BeachTech Innovations',
    content: 'Operating in Silicon Beach means balancing tech innovation with LA\'s creative energy. Our VA perfectly handles both our technical partnerships and entertainment industry outreach, understanding the unique blend that makes LA special.',
    rating: 5,
    location: 'Santa Monica, CA'
  }
]

const faqs = [
  {
    question: 'Do your VAs understand LA\'s entertainment industry and creative business culture?',
    answer: 'Absolutely. Our LA VAs have extensive experience with entertainment, media, and creative industries. They understand production schedules, talent management, project-based workflows, and the unique business practices of Hollywood and the broader creative economy.'
  },
  {
    question: 'Can your VAs work with Pacific Time zone schedules and LA\'s flexible work culture?',
    answer: 'Yes, we have VAs who work Pacific Time to provide real-time support during your LA business hours. They also understand LA\'s often flexible and project-driven work culture, adapting to irregular schedules and creative workflows.'
  },
  {
    question: 'Do you work with both established studios and emerging creative businesses?',
    answer: 'Our LA VAs support everything from major studios and production companies to independent creators, influencers, and emerging creative businesses. We understand the different operational needs and resource constraints of various business sizes.'
  },
  {
    question: 'Can you handle the diverse geographic and industry spread of LA businesses?',
    answer: 'Yes, our LA VAs are experienced with the city\'s diverse business landscape, from Downtown\'s corporate sector to West Side tech companies to Valley production facilities. They understand the unique characteristics and logistics of each area.'
  },
  {
    question: 'How do you support the project-based and seasonal nature of many LA businesses?',
    answer: 'Many LA businesses operate on project cycles, seasonal campaigns, or production schedules. Our VAs are experienced in scaling support up and down based on project demands, managing temporary team expansions, and maintaining efficiency during variable workloads.'
  }
]

const laNeighborhoods = [
  'Downtown LA - Corporate headquarters and financial services support',
  'West Hollywood - Entertainment and creative industry assistance',
  'Santa Monica/Venice - Tech startup and digital agency coordination',
  'Beverly Hills - High-end professional and luxury business services',
  'Culver City - Media production and post-production support',
  'Pasadena - Healthcare and research institution assistance'
]

export default function LosAngelesPage() {
  return (
    <>
      <LocalBusinessSchema 
        city="Los Angeles"
        state="CA"
        url="https://smartestassistant.com/locations/los-angeles"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <LocationHero
        city="Los Angeles"
        state="CA"
        localFeatures={laLocalFeatures}
      />

      {/* Local Understanding Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">Where Dreams Meet Business Excellence</H2>
            <Paragraph size="lg">
              Los Angeles operates at the intersection of creativity, innovation, and entrepreneurial ambition. 
              Our VAs understand this unique ecosystem where entertainment meets technology, and artistic vision drives business success.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <H3 className="mb-6">Why LA Businesses Choose Us</H3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Creative Industry Expertise:</span>
                    <span className="text-gray-600"> Deep understanding of entertainment, media, and creative business workflows</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Multi-Industry Fluency:</span>
                    <span className="text-gray-600"> Experience across tech, entertainment, fashion, and traditional business sectors</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Project-Based Adaptability:</span>
                    <span className="text-gray-600"> Flexibility to scale with production schedules and campaign cycles</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">West Coast Connectivity:</span>
                    <span className="text-gray-600"> Pacific Time alignment for seamless collaboration across California and beyond</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4">LA Business Impact</H3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">300+</div>
                  <div className="text-sm text-gray-600">LA Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">$3.1M</div>
                  <div className="text-sm text-gray-600">Total Client Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">96%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">24hrs</div>
                  <div className="text-sm text-gray-600">Average Setup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services for LA Businesses */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Services Tailored for Los Angeles Businesses"
          description="Creative and strategic support designed for the entertainment capital"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((service) => (
            <div key={service.id} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-3xl mb-4">
                {service.id === 'email-management' && '📧'}
                {service.id === 'social-media-management' && '📱'}
                {service.id === 'executive-assistant' && '👔'}
                {service.id === 'cold-outreach' && '📬'}
                {service.id === 'content-creation' && '✍️'}
                {service.id === 'project-management' && '📋'}
              </div>
              <H3 className="mb-3">{service.name}</H3>
              <Paragraph className="text-gray-600 mb-4">
                {service.description}
              </Paragraph>
              <div className="text-sm text-primary-blue font-medium mb-4">
                LA Focus: {service.id === 'email-management' && 'Talent & production coordination'}
                {service.id === 'social-media-management' && 'Entertainment & lifestyle content'}
                {service.id === 'executive-assistant' && 'Creative project management'}
                {service.id === 'cold-outreach' && 'Industry networking & partnerships'}
                {service.id === 'content-creation' && 'Creative & marketing content'}
                {service.id === 'project-management' && 'Production & campaign management'}
              </div>
              <Button as="link" href={`/services/${service.slug}`} variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* LA Industries */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Los Angeles Industries We Serve"
          description="Deep expertise in the diverse sectors that drive Southern California's economy"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {laIndustries.map((industry, index) => (
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

      {/* LA Success Stories */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Los Angeles Success Stories"
          description="How creative and innovative LA businesses thrive with strategic VA support"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {laTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* Coverage Areas */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">Serving Greater Los Angeles</H2>
            <Paragraph size="lg">
              From Hollywood studios to Silicon Beach startups, we provide premium VA services 
              throughout Los Angeles County and the broader Southern California region.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <H3 className="mb-6">LA Area Coverage</H3>
              <ul className="space-y-3">
                {laNeighborhoods.map((neighborhood, index) => (
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
              <H3 className="mb-6">Southern California Region</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">San Fernando Valley - Burbank, Sherman Oaks, Encino</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Orange County - Irvine, Newport Beach, Anaheim</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">South Bay - Redondo Beach, Manhattan Beach, Torrance</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Inland Empire - Riverside, San Bernardino</span>
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
            title="Los Angeles VA Services FAQ"
            description="Common questions from Southern California business owners"
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
          <H2 className="mb-6 text-white">Ready to Make Your LA Business Dreams Reality?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Join the 300+ Los Angeles companies that trust Smartest Assistant to handle their creative and business operations. 
            Get a VA who understands your industry, your vision, and your ambition.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Book LA Consultation
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your California ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free LA business consultation</div>
            <div>✅ Pacific Time support</div>
            <div>✅ Start within 24 hours</div>
          </div>
        </div>
      </Section>

      {/* Related Pages */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Explore Other Locations"
            description="We serve creative and innovative businesses in major markets nationwide"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/locations/san-francisco" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🌉</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">San Francisco</H3>
              <Paragraph className="text-gray-600">
                Supporting Bay Area businesses with VAs who understand tech culture and innovation pace.
              </Paragraph>
            </Link>
            
            <Link href="/locations/austin" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🎸</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Austin</H3>
              <Paragraph className="text-gray-600">
                Serving Texas businesses with VAs who appreciate creative culture and rapid growth.
              </Paragraph>
            </Link>
            
            <Link href="/industries/media-entertainment" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🎬</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Media & Entertainment</H3>
              <Paragraph className="text-gray-600">
                Specialized support for entertainment, media, and creative industry businesses.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}