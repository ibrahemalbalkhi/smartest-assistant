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
  title: 'Boston Virtual Assistant Services | Smart VAs for Massachusetts Businesses | Smartest Assistant',
  description: 'Professional virtual assistant services for Boston businesses. Smart VAs who understand academic culture, biotech innovation, and New England business traditions.',
  keywords: 'virtual assistant boston, boston executive assistant, massachusetts virtual assistant, cambridge virtual assistant, boston biotech assistant services',
  openGraph: {
    title: 'Boston Virtual Assistant Services | Smart VAs for Massachusetts Businesses',
    description: 'Professional virtual assistant services for Boston businesses. Smart VAs who understand academic excellence and biotech innovation.',
    url: 'https://smartestassistant.com/locations/boston',
  }
}

const bostonLocalFeatures = [
  'Deep understanding of Boston\'s academic and research-driven business culture',
  'Experience with biotech, healthcare, and life sciences industry requirements',
  'Eastern Time zone alignment for seamless East Coast business collaboration',
  'Expertise in Boston\'s key sectors: education, healthcare, finance, and technology'
]

const bostonIndustries = [
  {
    name: 'Biotech & Life Sciences',
    description: 'Supporting Boston\'s world-leading biotech corridor with specialized assistance',
    companies: 'Biogen, Moderna, Genzyme, Boston Scientific, numerous biotech startups'
  },
  {
    name: 'Healthcare Systems',
    description: 'Administrative support for prestigious medical institutions and practices',
    companies: 'Massachusetts General, Brigham & Women\'s, Boston Children\'s, Partners'
  },
  {
    name: 'Higher Education',
    description: 'Supporting academic institutions, research programs, and educational services',
    companies: 'Harvard, MIT, BU, Northeastern, various research institutes'
  },
  {
    name: 'Financial Services',
    description: 'Executive support for investment firms, banks, and financial institutions',
    companies: 'Fidelity, State Street, Liberty Mutual, regional investment firms'
  }
]

const bostonTestimonials = [
  {
    id: 'boston-testimonial-1',
    name: 'Dr. Patricia Walsh',
    role: 'Research Director',
    company: 'BioInnovate Labs',
    content: 'In Boston\'s competitive biotech landscape, precision matters. Our Smartest Assistant VA understands regulatory compliance, research protocols, and the academic rigor that defines our industry. They\'ve been invaluable for grant applications and partnership coordination.',
    rating: 5,
    location: 'Cambridge, MA'
  },
  {
    id: 'boston-testimonial-2',
    name: 'Robert Kennedy',
    role: 'Managing Partner',
    company: 'Beacon Hill Advisors',
    content: 'Boston business operates on relationships and trust built over decades. Our VA gets this culture - they handle client communications with the professionalism and attention to detail that our financial services clients expect.',
    rating: 5,
    location: 'Back Bay, Boston'
  }
]

const faqs = [
  {
    question: 'Do your VAs understand Boston\'s academic and research-focused business environment?',
    answer: 'Absolutely. Our Boston VAs are specifically trained on the city\'s unique blend of academic rigor, research excellence, and innovation-driven business culture. They understand the importance of precision, documentation, and the collaborative nature of Boston\'s knowledge economy.'
  },
  {
    question: 'Can your VAs handle biotech and life sciences industry requirements?',
    answer: 'Yes, our Boston VAs have extensive experience with biotech companies, research institutions, and life sciences organizations. They understand regulatory compliance, research protocols, grant application processes, and the specialized terminology of these industries.'
  },
  {
    question: 'Do you work with Eastern Time zone schedules for seamless East Coast collaboration?',
    answer: 'Absolutely. We have VAs who work Eastern Time to provide real-time support during your business hours. This is especially important for Boston businesses that frequently collaborate with other East Coast markets and international partners.'
  },
  {
    question: 'Can you support both academic institutions and commercial businesses?',
    answer: 'Yes, our Boston VAs have experience with both sectors. Whether you\'re a university research department, a commercial biotech company, or a financial services firm, we understand the unique operational requirements and cultural nuances of each environment.'
  },
  {
    question: 'How do you handle the high standards and attention to detail Boston businesses require?',
    answer: 'Boston business culture values excellence, precision, and intellectual rigor. Our VAs are trained to meet these high standards with meticulous attention to detail, thorough documentation, and the professional excellence that Boston\'s reputation demands.'
  }
]

const bostonNeighborhoods = [
  'Back Bay - Financial and professional services support',
  'Cambridge - Academic and research institution assistance',
  'Kendall Square - Biotech and life sciences coordination',
  'Financial District - Banking and investment firm support',
  'South End - Healthcare and medical practice management',
  'Beacon Hill - Executive and high-net-worth client services'
]

export default function BostonPage() {
  return (
    <>
      <LocalBusinessSchema 
        city="Boston"
        state="MA"
        url="https://smartestassistant.com/locations/boston"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <LocationHero
        city="Boston"
        state="MA"
        localFeatures={bostonLocalFeatures}
      />

      {/* Local Understanding Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">Excellence in Every Detail - The Boston Way</H2>
            <Paragraph size="lg">
              Boston business operates on a foundation of academic excellence, research innovation, and time-honored traditions. 
              Our VAs don't just work with Boston companies – they understand and embody the city's commitment to excellence.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <H3 className="mb-6">Why Boston Businesses Choose Us</H3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Academic Rigor:</span>
                    <span className="text-gray-600"> Understanding of research protocols, academic standards, and institutional requirements</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Industry Expertise:</span>
                    <span className="text-gray-600"> Specialized knowledge of biotech, healthcare, finance, and education sectors</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Professional Excellence:</span>
                    <span className="text-gray-600"> Attention to detail and quality standards that match Boston's reputation</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">East Coast Connectivity:</span>
                    <span className="text-gray-600"> Perfect timezone alignment for regional and international business coordination</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4">Boston Business Impact</H3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">150+</div>
                  <div className="text-sm text-gray-600">Boston Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">$2.2M</div>
                  <div className="text-sm text-gray-600">Total Client Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">98%</div>
                  <div className="text-sm text-gray-600">Quality Standards Met</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">48hrs</div>
                  <div className="text-sm text-gray-600">Average Setup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services for Boston Businesses */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Services Tailored for Boston Businesses"
          description="Precision support designed for New England's knowledge economy"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((service) => (
            <div key={service.id} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-3xl mb-4">
                {service.id === 'email-management' && '📧'}
                {service.id === 'social-media-management' && '📱'}
                {service.id === 'executive-assistant' && '👔'}
                {service.id === 'cold-outreach' && '📬'}
                {service.id === 'data-entry-research' && '📊'}
                {service.id === 'content-creation' && '✍️'}
              </div>
              <H3 className="mb-3">{service.name}</H3>
              <Paragraph className="text-gray-600 mb-4">
                {service.description}
              </Paragraph>
              <div className="text-sm text-primary-blue font-medium mb-4">
                Boston Focus: {service.id === 'email-management' && 'Academic & regulatory correspondence'}
                {service.id === 'social-media-management' && 'Research & thought leadership content'}
                {service.id === 'executive-assistant' && 'Board meetings & grant coordination'}
                {service.id === 'cold-outreach' && 'Academic & institutional partnerships'}
                {service.id === 'data-entry-research' && 'Clinical trial & research data'}
                {service.id === 'content-creation' && 'Academic & medical content'}
              </div>
              <Button as="link" href={`/services/${service.slug}`} variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Boston Industries */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Boston Industries We Serve"
          description="Deep expertise in the sectors that drive New England's economy"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {bostonIndustries.map((industry, index) => (
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

      {/* Boston Success Stories */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Boston Success Stories"
          description="How New England businesses achieve excellence with strategic VA support"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {bostonTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* Coverage Areas */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">Serving Greater Boston</H2>
            <Paragraph size="lg">
              From Cambridge's research corridors to Boston's financial district, we provide premium VA services 
              throughout Massachusetts and the broader New England region.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <H3 className="mb-6">Boston Area Neighborhoods</H3>
              <ul className="space-y-3">
                {bostonNeighborhoods.map((neighborhood, index) => (
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
              <H3 className="mb-6">Greater New England Coverage</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Greater Boston - Somerville, Brookline, Newton, Quincy</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">North Shore - Salem, Beverly, Gloucester, Newburyport</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">South Shore - Plymouth, Braintree, Hingham, Weymouth</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  <span className="text-gray-700">Route 128 Corridor - Waltham, Burlington, Woburn</span>
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
            title="Boston VA Services FAQ"
            description="Common questions from New England business leaders"
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
          <H2 className="mb-6 text-white">Ready to Achieve Boston-Level Excellence?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Join the 150+ Boston companies that trust Smartest Assistant for precision support. 
            Get a VA who matches your commitment to excellence and attention to detail.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Book Boston Consultation
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your New England ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free Boston consultation</div>
            <div>✅ Eastern Time support</div>
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
                Supporting NYC enterprises with VAs who match the energy of America's business capital.
              </Paragraph>
            </Link>
            
            <Link href="/locations/chicago" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏢</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Chicago</H3>
              <Paragraph className="text-gray-600">
                Serving Chicago businesses with VAs who bring Midwest values and metropolitan excellence.
              </Paragraph>
            </Link>
            
            <Link href="/industries/healthcare" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏥</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Healthcare & Biotech</H3>
              <Paragraph className="text-gray-600">
                Specialized support for healthcare institutions and life sciences companies.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}