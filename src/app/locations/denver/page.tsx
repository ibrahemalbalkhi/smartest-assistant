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
  title: 'Denver Virtual Assistant Services | Smart VAs for Colorado Businesses | Smartest Assistant',
  description: 'Professional virtual assistant services for Denver businesses. Smart VAs who understand outdoor lifestyle, tech innovation, and Rocky Mountain business culture.',
  keywords: 'virtual assistant denver, denver executive assistant, colorado virtual assistant, boulder virtual assistant, denver tech assistant services',
  openGraph: {
    title: 'Denver Virtual Assistant Services | Smart VAs for Colorado Businesses',
    description: 'Professional virtual assistant services for Denver businesses. Smart VAs who understand outdoor culture and mountain west innovation.',
    url: 'https://smartestassistant.com/locations/denver',
  }
}

const denverLocalFeatures = [
  'Understanding of Denver\'s outdoor lifestyle and work-life balance priorities',
  'Experience with Colorado\'s growing tech scene and startup ecosystem',
  'Mountain Time zone alignment for western region business coordination',
  'Expertise in Denver\'s key industries: aerospace, energy, healthcare, and technology'
]

const denverIndustries = [
  {
    name: 'Aerospace & Defense',
    description: 'Supporting Colorado\'s aerospace corridor with specialized administrative services',
    companies: 'Lockheed Martin, Boeing, Ball Aerospace, United Launch Alliance'
  },
  {
    name: 'Energy & Sustainability',
    description: 'Administrative support for renewable energy and traditional energy companies',
    companies: 'Xcel Energy, National Renewable Energy Lab, clean energy startups'
  },
  {
    name: 'Healthcare & Wellness',
    description: 'Supporting Denver\'s health-focused businesses and medical institutions',
    companies: 'National Jewish Health, Denver Health, wellness and fitness companies'
  },
  {
    name: 'Tech & Innovation',
    description: 'Executive support for Denver\'s growing technology and startup community',
    companies: 'SendGrid, Ibotta, HomeAdvisor, various tech startups'
  }
]

const denverTestimonials = [
  {
    id: 'denver-testimonial-1',
    name: 'Mark Stevens',
    role: 'Founder & CEO',
    company: 'Peak Performance Tech',
    content: 'Denver businesses value authenticity and work-life balance. Our Smartest Assistant VA gets this culture perfectly - they handle our scaling challenges while respecting our team\'s outdoor lifestyle and flexible work approach.',
    rating: 5,
    location: 'LoDo, Denver'
  },
  {
    id: 'denver-testimonial-2',
    name: 'Sarah Mountain',
    role: 'Operations Director',
    company: 'Rocky Mountain Renewables',
    content: 'Working in Colorado\'s energy sector requires understanding both traditional energy and clean tech. Our VA seamlessly manages everything from regulatory compliance to investor relations, letting us focus on innovation.',
    rating: 5,
    location: 'Golden, CO'
  }
]

const faqs = [
  {
    question: 'Do your VAs understand Denver\'s outdoor lifestyle and work-life balance culture?',
    answer: 'Absolutely. Our Denver VAs understand that Colorado businesses often prioritize work-life balance, outdoor activities, and flexible work arrangements. They can adapt to your company\'s unique culture while maintaining professional excellence and meeting all business objectives.'
  },
  {
    question: 'Can your VAs work with Mountain Time zone schedules?',
    answer: 'Yes, we have VAs who work Mountain Time to provide real-time support during your Denver business hours. This is especially important for coordinating with West Coast partners and managing East Coast client relationships.'
  },
  {
    question: 'Do you have experience with Denver\'s aerospace and energy industries?',
    answer: 'Our Denver VAs have extensive experience with both traditional industries like aerospace and energy, as well as emerging sectors like clean tech and renewable energy. They understand industry-specific regulations, terminology, and operational requirements.'
  },
  {
    question: 'Can you support both established corporations and growing startups in Denver?',
    answer: 'Yes, our Denver VAs work with everything from Fortune 500 aerospace companies to early-stage tech startups. We understand the different operational needs, communication styles, and growth challenges of both established enterprises and emerging businesses.'
  },
  {
    question: 'How do you handle the seasonal business patterns common in Colorado?',
    answer: 'Many Colorado businesses experience seasonal fluctuations due to tourism, outdoor activities, and weather patterns. Our VAs are experienced in managing these cyclical demands, scaling support during busy seasons, and maintaining efficiency year-round.'
  }
]

const denverNeighborhoods = [
  'Downtown Denver (LoDo) - Corporate headquarters and startup support',
  'Tech Center - Technology and aerospace company assistance',
  'RiNo - Creative and innovation district coordination',
  'Cherry Creek - Professional services and high-end business support',
  'Boulder - University and tech startup ecosystem assistance',
  'Golden - Energy and research institution support'
]

export default function DenverPage() {
  return (
    <>
      <LocalBusinessSchema 
        city="Denver"
        state="CO"
        url="https://smartestassistant.com/locations/denver"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <LocationHero
        city="Denver"
        state="CO"
        localFeatures={denverLocalFeatures}
      />

      {/* Local Understanding Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">Mile-High Standards, Mountain-West Values</H2>
            <Paragraph size="lg">
              Denver businesses operate with a unique blend of outdoor lifestyle, innovative thinking, and professional excellence. 
              Our VAs understand this distinctive Colorado culture where performance matters as much as work-life balance.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <H3 className="mb-6">Why Denver Businesses Choose Us</H3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Cultural Alignment:</span>
                    <span className="text-gray-600"> Understanding of Colorado's work-life balance and outdoor lifestyle priorities</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Industry Expertise:</span>
                    <span className="text-gray-600"> Experience with aerospace, energy, tech, and healthcare sectors</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Flexibility Focus:</span>
                    <span className="text-gray-600"> Support for flexible work arrangements and seasonal business patterns</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Mountain Time Coordination:</span>
                    <span className="text-gray-600"> Perfect for managing both East and West Coast business relationships</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4">Denver Business Results</H3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">120+</div>
                  <div className="text-sm text-gray-600">Denver Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">$1.5M</div>
                  <div className="text-sm text-gray-600">Total Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">94%</div>
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

      {/* Services for Denver Businesses */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Services Tailored for Denver Businesses"
          description="Strategic support designed for the unique needs of Colorado companies"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((service) => (
            <div key={service.id} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-3xl mb-4">
                {service.id === 'email-management' && '📧'}
                {service.id === 'social-media-management' && '📱'}
                {service.id === 'executive-assistant' && '👔'}
                {service.id === 'cold-outreach' && '📬'}
                {service.id === 'project-management' && '📋'}
                {service.id === 'travel-coordination' && '✈️'}
              </div>
              <H3 className="mb-3">{service.name}</H3>
              <Paragraph className="text-gray-600 mb-4">
                {service.description}
              </Paragraph>
              <div className="text-sm text-primary-blue font-medium mb-4">
                Denver Focus: {service.id === 'email-management' && 'Aerospace & energy communications'}
                {service.id === 'social-media-management' && 'Outdoor lifestyle & tech content'}
                {service.id === 'executive-assistant' && 'Multi-timezone coordination'}
                {service.id === 'cold-outreach' && 'Mountain West market expansion'}
                {service.id === 'project-management' && 'Remote team coordination'}
                {service.id === 'travel-coordination' && 'Mountain region logistics'}
              </div>
              <Button as="link" href={`/services/${service.slug}`} variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Denver Industries */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Denver Industries We Serve"
          description="Deep expertise in the sectors that drive Colorado's economy"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {denverIndustries.map((industry, index) => (
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

      {/* Denver Success Stories */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Denver Success Stories"
          description="How Colorado businesses achieve peak performance with strategic VA support"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {denverTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* Coverage Areas */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">Serving the Front Range and Beyond</H2>
            <Paragraph size="lg">
              From downtown Denver to Boulder's tech corridor, we provide premium VA services 
              throughout Colorado and the broader Mountain West region.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <H3 className="mb-6">Denver Metro Area</H3>
              <ul className="space-y-3">
                {denverNeighborhoods.map((neighborhood, index) => (
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
              <H3 className="mb-6">Colorado Front Range</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Boulder County - Boulder, Louisville, Lafayette, Longmont</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">South Metro - Littleton, Centennial, Highlands Ranch</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Northern Colorado - Fort Collins, Greeley, Loveland</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Colorado Springs - Tech and aerospace corridor</span>
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
            title="Denver VA Services FAQ"
            description="Common questions from Colorado business owners"
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
          <H2 className="mb-6 text-white">Ready to Reach New Heights with Your Denver Business?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Join the 120+ Colorado companies that trust Smartest Assistant to handle their most important tasks. 
            Get a VA who understands your mountain west values and ambitious business goals.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Book Denver Consultation
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your Colorado ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free Colorado consultation</div>
            <div>✅ Mountain Time support</div>
            <div>✅ Start within 36 hours</div>
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
            <Link href="/locations/austin" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🎸</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Austin</H3>
              <Paragraph className="text-gray-600">
                Supporting Texas businesses with VAs who understand innovation and creative culture.
              </Paragraph>
            </Link>
            
            <Link href="/locations/seattle" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🌲</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Seattle</H3>
              <Paragraph className="text-gray-600">
                Serving Pacific Northwest businesses with VAs who match the region's innovation spirit.
              </Paragraph>
            </Link>
            
            <Link href="/industries/energy" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">⚡</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Energy & Aerospace</H3>
              <Paragraph className="text-gray-600">
                Specialized support for energy companies and aerospace organizations.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}