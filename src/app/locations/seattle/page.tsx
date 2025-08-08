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
  title: 'Seattle Virtual Assistant Services | Smart VAs for Washington Businesses | Smartest Assistant',
  description: 'Professional virtual assistant services for Seattle businesses. Smart VAs who understand tech innovation, coffee culture, and Pacific Northwest business values.',
  keywords: 'virtual assistant seattle, seattle executive assistant, washington virtual assistant, bellevue virtual assistant, pacific northwest assistant services',
  openGraph: {
    title: 'Seattle Virtual Assistant Services | Smart VAs for Washington Businesses',
    description: 'Professional virtual assistant services for Seattle businesses. Smart VAs who understand innovation and sustainable business practices.',
    url: 'https://smartestassistant.com/locations/seattle',
  }
}

const seattleLocalFeatures = [
  'Deep understanding of Seattle\'s innovation-driven and environmentally-conscious business culture',
  'Experience with tech giants, startups, and the Pacific Northwest\'s unique work-life balance',
  'Pacific Time zone alignment for seamless West Coast business coordination',
  'Expertise in Seattle\'s key industries: technology, aerospace, healthcare, and sustainable business'
]

const seattleIndustries = [
  {
    name: 'Technology & Cloud Computing',
    description: 'Supporting Seattle\'s tech ecosystem with scalable administrative solutions',
    companies: 'Amazon, Microsoft, Google, Facebook, numerous tech startups and cloud companies'
  },
  {
    name: 'Aerospace & Aviation',
    description: 'Administrative support for the aerospace corridor and aviation industry',
    companies: 'Boeing, Blue Origin, aviation suppliers, aerospace engineering firms'
  },
  {
    name: 'Healthcare & Life Sciences',
    description: 'Supporting Seattle\'s world-class medical institutions and biotech companies',
    companies: 'Fred Hutchinson, Seattle Children\'s, UW Medicine, biotech research companies'
  },
  {
    name: 'Sustainable Business & Clean Tech',
    description: 'Executive support for environmentally-focused and sustainable businesses',
    companies: 'Clean energy companies, sustainable retail, environmental consulting firms'
  }
]

const seattleTestimonials = [
  {
    name: 'Jennifer Park',
    role: 'VP of Engineering',
    company: 'CloudScale Solutions',
    content: 'Seattle\'s tech scene moves fast but values thoughtful innovation. Our Smartest Assistant VA perfectly balances urgent project needs with our company\'s focus on sustainable growth and work-life balance. They get the Pacific Northwest mindset.',
    rating: 5,
    location: 'South Lake Union, Seattle'
  },
  {
    name: 'Michael Thompson',
    role: 'Operations Director',
    company: 'EverGreen Aerospace',
    content: 'Working in Seattle\'s aerospace industry requires precision and long-term thinking. Our VA manages everything from vendor relationships to regulatory documentation, understanding both the technical requirements and the collaborative culture that makes Seattle special.',
    rating: 5,
    location: 'Georgetown, Seattle'
  }
]

const faqs = [
  {
    question: 'Do your VAs understand Seattle\'s tech culture and innovation-focused business environment?',
    answer: 'Absolutely. Our Seattle VAs are specifically trained on the city\'s technology-driven business culture, including agile methodologies, cloud-first thinking, and the collaborative innovation approach that characterizes Pacific Northwest companies.'
  },
  {
    question: 'Can your VAs work with Pacific Time zone schedules for West Coast coordination?',
    answer: 'Yes, we have VAs who work Pacific Time to provide real-time support during your Seattle business hours. This is essential for coordinating with other West Coast partners and managing East Coast client relationships effectively.'
  },
  {
    question: 'Do you have experience with Seattle\'s aerospace and engineering industries?',
    answer: 'Our Seattle VAs have extensive experience with aerospace, engineering, and technical industries. They understand regulatory requirements, technical documentation processes, and the precision-focused culture of these sectors.'
  },
  {
    question: 'Can you support Seattle\'s emphasis on sustainability and corporate responsibility?',
    answer: 'Yes, our Seattle VAs understand the Pacific Northwest\'s strong focus on environmental sustainability and corporate social responsibility. They can help implement eco-friendly business practices and support your sustainability reporting and initiatives.'
  },
  {
    question: 'How do you handle Seattle\'s work-life balance culture and flexible work arrangements?',
    answer: 'Seattle businesses often prioritize work-life balance and offer flexible work arrangements. Our VAs are experienced in supporting distributed teams, managing flexible schedules, and maintaining productivity in remote-friendly business environments.'
  }
]

const seattleNeighborhoods = [
  'South Lake Union - Tech headquarters and innovation hub support',
  'Downtown Seattle - Corporate and financial services assistance',
  'Georgetown - Aerospace and manufacturing coordination',
  'Bellevue - Enterprise and consulting firm support',
  'Capitol Hill - Creative and startup business management',
  'Fremont - Sustainable business and local commerce support'
]

export default function SeattlePage() {
  return (
    <>
      <LocalBusinessSchema 
        city="Seattle"
        state="WA"
        url="https://smartestassistant.com/locations/seattle"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <LocationHero
        city="Seattle"
        state="WA"
        localFeatures={seattleLocalFeatures}
      />

      {/* Local Understanding Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">Innovation Meets Sustainability</H2>
            <Paragraph size="lg">
              Seattle businesses operate with a unique blend of technological innovation, environmental consciousness, and collaborative spirit. 
              Our VAs understand this distinctive Pacific Northwest approach where progress and sustainability go hand in hand.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <H3 className="mb-6">Why Seattle Businesses Choose Us</H3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Tech Innovation Focus:</span>
                    <span className="text-gray-600"> Understanding of cloud computing, agile methodologies, and startup scaling challenges</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Sustainability Mindset:</span>
                    <span className="text-gray-600"> Support for environmentally-conscious business practices and corporate responsibility</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Collaborative Culture:</span>
                    <span className="text-gray-600"> Experience with team-oriented, remote-friendly, and inclusive work environments</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Pacific Time Coordination:</span>
                    <span className="text-gray-600"> Optimal timezone alignment for West Coast partnerships and global business</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4">Seattle Business Results</H3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">140+</div>
                  <div className="text-sm text-gray-600">Seattle Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">$1.9M</div>
                  <div className="text-sm text-gray-600">Total Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">96%</div>
                  <div className="text-sm text-gray-600">Client Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">32hrs</div>
                  <div className="text-sm text-gray-600">Setup Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services for Seattle Businesses */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Services Tailored for Seattle Businesses"
          description="Innovation-focused support designed for the Pacific Northwest"
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
                {service.id === 'data-entry-research' && '📊'}
              </div>
              <H3 className="mb-3">{service.name}</H3>
              <Paragraph className="text-gray-600 mb-4">
                {service.description}
              </Paragraph>
              <div className="text-sm text-primary-blue font-medium mb-4">
                Seattle Focus: {service.id === 'email-management' && 'Tech partnership & vendor coordination'}
                {service.id === 'social-media-management' && 'Innovation & sustainability content'}
                {service.id === 'executive-assistant' && 'Remote team & project coordination'}
                {service.id === 'cold-outreach' && 'Pacific Northwest market expansion'}
                {service.id === 'project-management' && 'Agile & sprint coordination'}
                {service.id === 'data-entry-research' && 'Technical & market research'}
              </div>
              <Button as="link" href={`/services/${service.slug}`} variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Seattle Industries */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Seattle Industries We Serve"
          description="Deep expertise in the sectors that drive the Pacific Northwest economy"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {seattleIndustries.map((industry, index) => (
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

      {/* Seattle Success Stories */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Seattle Success Stories"
          description="How Pacific Northwest businesses innovate and scale with strategic VA support"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {seattleTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* Coverage Areas */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">Serving the Greater Seattle Area</H2>
            <Paragraph size="lg">
              From South Lake Union's tech corridor to Georgetown's aerospace hub, we provide premium VA services 
              throughout King County and the broader Puget Sound region.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <H3 className="mb-6">Seattle Metro Coverage</H3>
              <ul className="space-y-3">
                {seattleNeighborhoods.map((neighborhood, index) => (
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
              <H3 className="mb-6">Puget Sound Region</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Eastside - Bellevue, Redmond, Kirkland, Bothell</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">South Sound - Tacoma, Olympia, Federal Way</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">North Sound - Everett, Lynnwood, Mukilteo</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Peninsula - Bremerton, Port Townsend, Olympic Peninsula</span>
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
            title="Seattle VA Services FAQ"
            description="Common questions from Pacific Northwest business leaders"
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
          <H2 className="mb-6 text-white">Ready to Scale Your Seattle Business Sustainably?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Join the 140+ Pacific Northwest companies that trust Smartest Assistant for innovative support. 
            Get a VA who understands your values, your technology, and your commitment to sustainable growth.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Book Seattle Consultation
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your Washington ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free Seattle consultation</div>
            <div>✅ Pacific Time support</div>
            <div>✅ Start within 32 hours</div>
          </div>
        </div>
      </Section>

      {/* Related Pages */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Explore Other Locations"
            description="We serve innovative businesses in major markets across the United States"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/locations/san-francisco" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🌉</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">San Francisco</H3>
              <Paragraph className="text-gray-600">
                Supporting Bay Area businesses with VAs who understand Silicon Valley innovation and tech culture.
              </Paragraph>
            </Link>
            
            <Link href="/locations/denver" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏔️</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Denver</H3>
              <Paragraph className="text-gray-600">
                Serving Colorado businesses with VAs who appreciate mountain west values and outdoor culture.
              </Paragraph>
            </Link>
            
            <Link href="/industries/technology" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">💻</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Technology & Cloud</H3>
              <Paragraph className="text-gray-600">
                Specialized support for technology companies, cloud providers, and software businesses.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}