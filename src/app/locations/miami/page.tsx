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
  title: 'Miami Virtual Assistant Services | Smart VAs for Florida Businesses | Smartest Assistant',
  description: 'Professional virtual assistant services for Miami businesses. Smart VAs who understand Latin American markets, hospitality industry, and international business culture.',
  keywords: 'virtual assistant miami, miami executive assistant, florida virtual assistant, south beach assistant services, coral gables virtual assistant',
  openGraph: {
    title: 'Miami Virtual Assistant Services | Smart VAs for Florida Businesses',
    description: 'Professional virtual assistant services for Miami businesses. Smart VAs who understand international markets and hospitality excellence.',
    url: 'https://smartestassistant.com/locations/miami',
  }
}

const miamiLocalFeatures = [
  'Deep understanding of Miami\'s international business culture and Latin American markets',
  'Experience with hospitality, real estate, finance, and trade industries',
  'Eastern Time zone with cultural fluency for Latin American business relationships',
  'Expertise in Miami\'s unique blend of luxury lifestyle and serious commerce'
]

const miamiIndustries = [
  {
    name: 'International Trade & Finance',
    description: 'Supporting Miami\'s role as the Gateway to Latin America with specialized services',
    companies: 'International banks, trading companies, import/export businesses, fintech firms'
  },
  {
    name: 'Hospitality & Tourism',
    description: 'Executive support for hotels, resorts, and tourism-related businesses',
    companies: 'Luxury hotels, cruise lines, tourism boards, event management companies'
  },
  {
    name: 'Real Estate & Development',
    description: 'Administrative support for Miami\'s dynamic luxury real estate market',
    companies: 'High-end residential brokers, commercial developers, property management firms'
  },
  {
    name: 'Healthcare & Wellness',
    description: 'Supporting Miami\'s growing medical tourism and wellness industry',
    companies: 'Medical centers, cosmetic surgery practices, wellness resorts, medical tourism'
  }
]

const miamiTestimonials = [
  {
    name: 'Carlos Rodriguez',
    role: 'Managing Director',
    company: 'Latin Bridge Capital',
    content: 'Miami business requires understanding both American efficiency and Latin American relationship-building. Our Smartest Assistant VA perfectly balances both cultures, handling our international client communications and cross-border transactions flawlessly.',
    rating: 5,
    location: 'Brickell, Miami'
  },
  {
    name: 'Isabella Santos',
    role: 'Resort Operations Manager',
    company: 'Ocean Vista Hospitality',
    content: 'In Miami\'s luxury hospitality market, every detail matters. Our VA manages guest relations, vendor coordination, and event planning with the attention to excellence our five-star guests expect. They understand the Miami standard.',
    rating: 5,
    location: 'South Beach, FL'
  }
]

const faqs = [
  {
    question: 'Do your VAs understand Miami\'s international business culture and Latin American markets?',
    answer: 'Absolutely. Our Miami VAs have extensive experience with international business practices, cross-border transactions, and Latin American market dynamics. They understand cultural nuances, business etiquette, and the relationship-focused approach that characterizes Miami commerce.'
  },
  {
    question: 'Can your VAs work with Eastern Time zone schedules for international coordination?',
    answer: 'Yes, we have VAs who work Eastern Time to provide real-time support during your Miami business hours. This is especially valuable for coordinating with Latin American partners and European clients while maintaining US business hour availability.'
  },
  {
    question: 'Do you have experience with Miami\'s luxury hospitality and real estate industries?',
    answer: 'Our Miami VAs have extensive experience with high-end hospitality, luxury real estate, and premium service industries. They understand the attention to detail, customer service excellence, and discretion required in these sectors.'
  },
  {
    question: 'Can your VAs handle multilingual communication and international business requirements?',
    answer: 'While all our VAs are fluent in English, we can match you with VAs who have experience in international business communications and understand the cultural context of working with Latin American, European, and global clients.'
  },
  {
    question: 'How do you support Miami\'s seasonal business patterns and event-driven economy?',
    answer: 'Miami businesses often experience seasonal peaks during winter months, Art Basel, and major events. Our VAs are experienced in scaling support during high-demand periods and managing the unique logistics of Miami\'s event-driven business cycle.'
  }
]

const miamiNeighborhoods = [
  'Brickell - International finance and corporate headquarters support',
  'South Beach - Hospitality and entertainment industry assistance',
  'Coral Gables - Professional services and luxury business coordination',
  'Downtown Miami - Government and civic organization support',
  'Aventura - High-end retail and service business management',
  'Key Biscayne - Executive and private client services'
]

export default function MiamiPage() {
  return (
    <>
      <LocalBusinessSchema 
        city="Miami"
        state="FL"
        url="https://smartestassistant.com/locations/miami"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <LocationHero
        city="Miami"
        state="FL"
        localFeatures={miamiLocalFeatures}
      />

      {/* Local Understanding Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">Gateway to Success, Bridge to Excellence</H2>
            <Paragraph size="lg">
              Miami operates at the crossroads of international commerce, luxury hospitality, and cultural diversity. 
              Our VAs understand this dynamic environment where relationship-building meets results-driven business execution.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <H3 className="mb-6">Why Miami Businesses Choose Us</H3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">International Business Acumen:</span>
                    <span className="text-gray-600"> Understanding of cross-border commerce and Latin American business culture</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Luxury Service Standards:</span>
                    <span className="text-gray-600"> Experience with high-end hospitality, real estate, and premium services</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Cultural Sensitivity:</span>
                    <span className="text-gray-600"> Appreciation for Miami's diverse international business relationships</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Event & Season Management:</span>
                    <span className="text-gray-600"> Expertise in managing Miami's event-driven and seasonal business cycles</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4">Miami Business Results</H3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">180+</div>
                  <div className="text-sm text-gray-600">Miami Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">$2.4M</div>
                  <div className="text-sm text-gray-600">Client Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">99%</div>
                  <div className="text-sm text-gray-600">Service Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">24hrs</div>
                  <div className="text-sm text-gray-600">Rapid Setup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services for Miami Businesses */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Services Tailored for Miami Businesses"
          description="International-caliber support designed for the Gateway to Latin America"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((service) => (
            <div key={service.id} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-3xl mb-4">
                {service.id === 'email-management' && '📧'}
                {service.id === 'social-media-management' && '📱'}
                {service.id === 'executive-assistant' && '👔'}
                {service.id === 'cold-outreach' && '📬'}
                {service.id === 'travel-coordination' && '✈️'}
                {service.id === 'customer-support' && '🎧'}
              </div>
              <H3 className="mb-3">{service.name}</H3>
              <Paragraph className="text-gray-600 mb-4">
                {service.description}
              </Paragraph>
              <div className="text-sm text-primary-blue font-medium mb-4">
                Miami Focus: {service.id === 'email-management' && 'International client communications'}
                {service.id === 'social-media-management' && 'Luxury lifestyle & hospitality content'}
                {service.id === 'executive-assistant' && 'Cross-border business coordination'}
                {service.id === 'cold-outreach' && 'Latin American market expansion'}
                {service.id === 'travel-coordination' && 'International travel & events'}
                {service.id === 'customer-support' && 'Premium guest relations'}
              </div>
              <Button as="link" href={`/services/${service.slug}`} variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Miami Industries */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Miami Industries We Serve"
          description="Deep expertise in the sectors that drive South Florida's international economy"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {miamiIndustries.map((industry, index) => (
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

      {/* Miami Success Stories */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Miami Success Stories"
          description="How international businesses achieve excellence with culturally-aware VA support"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {miamiTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* Coverage Areas */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">Serving Greater Miami</H2>
            <Paragraph size="lg">
              From Brickell's financial district to South Beach's hospitality scene, we provide premium VA services 
              throughout Miami-Dade County and the broader South Florida region.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <H3 className="mb-6">Miami Area Coverage</H3>
              <ul className="space-y-3">
                {miamiNeighborhoods.map((neighborhood, index) => (
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
              <H3 className="mb-6">South Florida Region</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Fort Lauderdale - Yacht services and luxury hospitality</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">West Palm Beach - Finance and professional services</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Florida Keys - Tourism and marine industry support</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Naples - High-end residential and wellness services</span>
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
            title="Miami VA Services FAQ"
            description="Common questions from South Florida business leaders"
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
          <H2 className="mb-6 text-white">Ready to Bridge Your Miami Business to Success?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Join the 180+ South Florida companies that trust Smartest Assistant for international-caliber support. 
            Get a VA who understands your market, your culture, and your excellence standards.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Book Miami Consultation
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your Florida ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free Miami consultation</div>
            <div>✅ Eastern Time support</div>
            <div>✅ Start within 24 hours</div>
          </div>
        </div>
      </Section>

      {/* Related Pages */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Explore Other Locations"
            description="We serve international businesses in major markets across the United States"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/locations/new-york-city" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏙️</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">New York City</H3>
              <Paragraph className="text-gray-600">
                Supporting NYC enterprises with VAs who understand international finance and commerce.
              </Paragraph>
            </Link>
            
            <Link href="/locations/los-angeles" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🌴</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Los Angeles</H3>
              <Paragraph className="text-gray-600">
                Serving LA businesses with VAs who appreciate entertainment culture and luxury services.
              </Paragraph>
            </Link>
            
            <Link href="/industries/hospitality" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏨</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Hospitality & Tourism</H3>
              <Paragraph className="text-gray-600">
                Specialized support for hotels, resorts, and tourism businesses worldwide.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}