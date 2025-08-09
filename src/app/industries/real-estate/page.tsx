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
import { IndustryHero } from '@/components/sections'
import { ServiceSchema, FAQSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Virtual Assistants for Real Estate | Smart VAs for Realtors | Smartest Assistant',
  description: 'Specialized virtual assistant services for real estate professionals. Smart VAs who understand listings, transactions, client communication, and MLS systems.',
  keywords: 'real estate virtual assistant, realtor virtual assistant, property management VA, MLS listing assistant, real estate transaction coordinator, showing scheduling assistant',
  openGraph: {
    title: 'Virtual Assistants for Real Estate | Smart VAs for Realtors',
    description: 'Specialized virtual assistant services for real estate professionals. Smart VAs who understand listings, transactions, and client communication.',
    url: 'https://smartestassistant.com/industries/real-estate',
  }
}

const realEstateChallenges = [
  {
    challenge: 'Time-Sensitive Transactions',
    description: 'Deals can fall through if paperwork and deadlines aren\'t managed perfectly',
    solution: 'Dedicated transaction coordination and deadline tracking',
    impact: 'Increase deal closure rate by 25%'
  },
  {
    challenge: 'Client Communication Overload',
    description: 'Buyers, sellers, lenders, and agents all need constant updates',
    solution: 'Professional client communication and relationship management',
    impact: 'Improve client satisfaction scores by 40%'
  },
  {
    challenge: 'Listing Management',
    description: 'Photos, descriptions, MLS updates, and multi-platform syndication',
    solution: 'Professional listing optimization and market management',
    impact: 'Reduce average days on market by 30%'
  },
  {
    challenge: 'Administrative Burden',
    description: 'Contracts, disclosures, compliance docs consuming productive time',
    solution: 'Complete transaction paperwork and compliance management',
    impact: 'Reclaim 20+ hours weekly for client interaction'
  }
]

const realEstateServices = [
  {
    service: 'Transaction Coordination',
    description: 'End-to-end transaction management, deadline tracking, document coordination',
    systems: 'DocuSign, SkySlope, dotloop, Paperless Pipeline'
  },
  {
    service: 'Listing Management & Marketing',
    description: 'MLS listings, photography coordination, virtual tours, marketing materials',
    systems: 'MLS systems, Zillow, Realtor.com, social media platforms'
  },
  {
    service: 'Client Relationship Management',
    description: 'Lead nurturing, client communication, showing coordination, follow-up',
    systems: 'Top Producer, Wise Agent, Follow Up Boss, Chime'
  },
  {
    service: 'Lead Generation & Prospecting',
    description: 'Cold calling, email campaigns, social media outreach, sphere development',
    systems: 'Mojo, REI Network, Facebook Ads, Google Ads'
  },
  {
    service: 'Property Research & Analysis',
    description: 'Comparative market analysis, property history, neighborhood research',
    systems: 'MLS, PropertyRadar, BiggerPockets, local assessor records'
  },
  {
    service: 'Administrative Support',
    description: 'Contract preparation, compliance documentation, calendar management',
    systems: 'Brokerage-specific software, state compliance systems'
  }
]

const realEstateSpecializations = [
  { specialty: 'Residential Sales', focus: 'Buyer/seller representation, first-time homebuyers, luxury homes' },
  { specialty: 'Commercial Real Estate', focus: 'Investment properties, lease negotiations, market analysis' },
  { specialty: 'Property Management', focus: 'Tenant relations, maintenance coordination, rent collection' },
  { specialty: 'Real Estate Investment', focus: 'Deal analysis, investor relations, portfolio management' },
  { specialty: 'New Construction', focus: 'Builder relations, pre-sales, construction timeline management' },
  { specialty: 'Relocation Services', focus: 'Corporate relocations, out-of-state buyers, area orientation' }
]

const realEstateTestimonials = [
  {
    id: 'real-estate-testimonial-1',
    name: 'Linda Thompson',
    role: 'Top Producer',
    company: 'Premier Realty Group',
    content: 'Real estate is all about timing and relationships. My Smartest Assistant VA handles all my transaction coordination and client communication, so I can focus on what I do best - selling homes. Closed 40% more deals last year.',
    rating: 5,
    location: 'Phoenix, AZ'
  },
  {
    id: 'real-estate-testimonial-2',
    name: 'Carlos Rodriguez',
    role: 'Commercial Broker',
    company: 'Metro Commercial Properties',
    content: 'Commercial deals are complex with multiple stakeholders. My Smartest Assistant VA manages all the coordination, keeps everyone informed, and ensures nothing falls through the cracks. Professional and reliable.',
    rating: 5,
    location: 'Dallas, TX'
  }
]

const faqs = [
  {
    question: 'Do your VAs understand real estate terminology and processes?',
    answer: 'Absolutely. Our real estate VAs are thoroughly trained in industry terminology, transaction processes, common forms and documents, and state-specific requirements. They understand the urgency and complexity of real estate transactions.'
  },
  {
    question: 'Can VAs handle confidential client information and transactions?',
    answer: 'Yes, our real estate VAs are trained in confidentiality protocols and data security specific to real estate. They sign comprehensive NDAs and follow strict guidelines for handling sensitive client and transaction information.'
  },
  {
    question: 'Are your VAs familiar with MLS systems and real estate software?',
    answer: 'Our VAs are trained on major MLS systems and popular real estate software including Top Producer, Wise Agent, SkySlope, dotloop, and others. They can adapt quickly to your specific brokerage systems and tools.'
  },
  {
    question: 'Can VAs help with compliance and regulatory requirements?',
    answer: 'Yes, our VAs understand basic compliance requirements and can help organize documentation, track deadlines, and ensure required forms are completed. However, they work under your supervision for regulatory compliance specific to your state and brokerage.'
  },
  {
    question: 'How do VAs handle urgent situations and time-sensitive deadlines?',
    answer: 'Real estate VAs are specifically trained to handle urgent situations and tight deadlines. They maintain detailed transaction timelines, set up automated reminders, and have protocols for escalating urgent matters to ensure nothing is missed.'
  }
]

export default function RealEstatePage() {
  return (
    <>
      <ServiceSchema 
        name="Virtual Assistants for Real Estate"
        description="Specialized virtual assistant services for real estate professionals. Smart VAs who understand transactions, client relations, listings, and the unique demands of real estate business."
        url="https://smartestassistant.com/industries/real-estate"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <IndustryHero
        industry="Real Estate"
        industryBenefits={[
          'Seamless transaction coordination and deadline management',
          'Professional client communication and relationship building',
          'Optimized listings and marketing campaigns',
          'Complete administrative support and compliance assistance'
        ]}
        image={{
          src: "/images/real-estate-industry.webp",
          alt: "Modern real estate development showcasing property management services",
          width: 1200,
          height: 600
        }}
      />

      {/* Real Estate Challenges */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-red-600">Real Estate's Time and Complexity Crisis</H2>
            <Paragraph size="lg">
              Real estate success depends on relationships and timing, but agents spend 70% of their time on paperwork 
              and administration instead of building client relationships and closing deals. Meanwhile, one missed deadline 
              or communication gap can kill a transaction.
            </Paragraph>
          </div>
          
          <div className="space-y-8">
            {realEstateChallenges.map((item, index) => (
              <div key={index} className="grid md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-xl">
                <div>
                  <H3 className="mb-3 text-red-700">🚨 {item.challenge}</H3>
                  <Paragraph className="text-gray-600">{item.description}</Paragraph>
                </div>
                <div>
                  <H3 className="mb-3 text-green-600">✅ Smart VA Solution</H3>
                  <Paragraph className="text-gray-700">{item.solution}</Paragraph>
                </div>
                <div>
                  <H3 className="mb-3 text-blue-600">📈 Measurable Impact</H3>
                  <Paragraph className="text-blue-700 font-medium">{item.impact}</Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Real Estate Services */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Complete Real Estate Support Services"
          description="End-to-end virtual assistant services designed specifically for real estate professionals"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realEstateServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <H3 className="mb-4 text-primary-blue">{service.service}</H3>
              <Paragraph className="mb-6 text-gray-600">
                {service.description}
              </Paragraph>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Systems:</span> {service.systems}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Real Estate Specializations */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Real Estate Specializations"
          description="Expertise across all real estate sectors and property types"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {realEstateSpecializations.map((specialty, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <H3 className="mb-4 text-primary-blue">{specialty.specialty}</H3>
              <Paragraph className="text-gray-700">
                {specialty.focus}
              </Paragraph>
            </div>
          ))}
        </div>
      </Section>

      {/* Transaction Lifecycle */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Complete Transaction Support"
          description="Professional support throughout the entire real estate transaction lifecycle"
        />
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-3">Pre-Listing</div>
            <ul className="text-sm text-left space-y-2">
              <li>• Market analysis preparation</li>
              <li>• Photography coordination</li>
              <li>• Marketing material creation</li>
              <li>• Listing documentation</li>
            </ul>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-green-600 mb-3">Active Listing</div>
            <ul className="text-sm text-left space-y-2">
              <li>• Showing coordination</li>
              <li>• Inquiry management</li>
              <li>• Feedback collection</li>
              <li>• Price adjustment analysis</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-3">Under Contract</div>
            <ul className="text-sm text-left space-y-2">
              <li>• Transaction coordination</li>
              <li>• Deadline tracking</li>
              <li>• Inspection coordination</li>
              <li>• Lender communication</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-3">Closing</div>
            <ul className="text-sm text-left space-y-2">
              <li>• Final walkthrough scheduling</li>
              <li>• Closing preparation</li>
              <li>• Document coordination</li>
              <li>• Post-closing follow-up</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Real Estate Tools */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Real Estate Tools & Systems We Master"
          description="Proficient with the complete real estate technology ecosystem"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            'MLS Systems', 'Top Producer', 'Wise Agent', 'Follow Up Boss', 'SkySlope', 'dotloop',
            'DocuSign', 'Paperless Pipeline', 'Chime', 'Mojo', 'REI Network', 'BoldLeads',
            'Zillow', 'Realtor.com', 'Trulia', 'LoopNet', 'PropertyRadar', 'BiggerPockets',
            'CoStar', 'RentSpree', 'Buildium', 'AppFolio', 'Yardi', 'RealPage',
            'Canva', 'Matterport', 'iGUIDE', 'Facebook Ads', 'Google Ads', 'MailChimp'
          ].map((tool) => (
            <div key={tool} className="bg-gray-50 rounded-lg p-4 shadow-sm text-center">
              <div className="font-semibold text-gray-700 text-sm">{tool}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Success Stories */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Real Estate Success Stories"
          description="How real estate professionals scale and optimize with smart VA support"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {realEstateTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* Real Estate ROI */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Real Estate ROI That Drives Results</H2>
          <Paragraph size="lg" className="mb-12 text-blue-100">
            Smart VAs deliver exceptional ROI for real estate professionals by handling administration 
            so you can focus on what you do best - building relationships and closing deals
          </Paragraph>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-3xl font-bold text-white mb-2">40%</div>
              <div className="text-blue-100 mb-4">More Deals Closed</div>
              <Paragraph className="text-sm text-blue-200">
                Through better time management and transaction coordination
              </Paragraph>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-3xl font-bold text-white mb-2">20+ hrs</div>
              <div className="text-blue-100 mb-4">Weekly Time Savings</div>
              <Paragraph className="text-sm text-blue-200">
                More time for prospecting, showings, and client relationships
              </Paragraph>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100 mb-4">Transaction Success Rate</div>
              <Paragraph className="text-sm text-blue-200">
                Improved deal closure through better coordination
              </Paragraph>
            </div>
          </div>
          
          <Button as="link" href="/resources/tools/roi-calculator" variant="secondary" size="lg">
            Calculate Real Estate ROI
          </Button>
        </div>
      </Section>

      {/* Market Expertise */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Market-Specific Expertise"
            description="Understanding of local markets and regional real estate practices"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4">High-Volume Markets</H3>
              <Paragraph className="text-gray-700 mb-4">
                Experience with fast-paced markets where speed and efficiency are critical.
              </Paragraph>
              <ul className="text-sm space-y-2">
                <li>• California markets (SF, LA, San Diego)</li>
                <li>• New York metro area</li>
                <li>• Florida markets (Miami, Tampa, Orlando)</li>
                <li>• Texas markets (Austin, Dallas, Houston)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4">Luxury & High-End</H3>
              <Paragraph className="text-gray-700 mb-4">
                Specialized support for luxury properties requiring white-glove service.
              </Paragraph>
              <ul className="text-sm space-y-2">
                <li>• Confidential client handling</li>
                <li>• Premium marketing coordination</li>
                <li>• Private showing management</li>
                <li>• International buyer support</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4">Investment & Commercial</H3>
              <Paragraph className="text-gray-700 mb-4">
                Complex transaction support for investment and commercial properties.
              </Paragraph>
              <ul className="text-sm space-y-2">
                <li>• Financial analysis support</li>
                <li>• Due diligence coordination</li>
                <li>• Investor communication</li>
                <li>• Portfolio management assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Real Estate VA FAQ"
            description="Common questions from real estate professionals"
            centered
          />
          
          <FAQAccordion 
            faqs={faqs}
            className="space-y-6"
          />
        </div>
      </Section>

      {/* Get Started */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready to Close More Deals and Reclaim Your Time?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Join 500+ real estate professionals that trust Smartest Assistant to handle their transactions and administration. 
            Get real estate VAs who understand your business, your clients, and your market.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Get Real Estate VA Team
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free real estate business audit</div>
            <div>✅ MLS and transaction system expertise</div>
            <div>✅ Confidentiality guaranteed</div>
          </div>
        </div>
      </Section>

      {/* Related Industries & Services */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Industries & Services"
            description="Explore our expertise in other industries and specialized services"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/locations/new-york-city" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏙️</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">NYC Real Estate</H3>
              <Paragraph className="text-gray-600">
                Specialized support for New York City real estate professionals and the unique NYC market.
              </Paragraph>
            </Link>
            
            <Link href="/services/calendar-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📅</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Showing Coordination</H3>
              <Paragraph className="text-gray-600">
                Professional calendar and showing management that maximizes your availability and minimizes conflicts.
              </Paragraph>
            </Link>
            
            <Link href="/services/cold-outreach" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📞</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Lead Generation</H3>
              <Paragraph className="text-gray-600">
                Strategic prospecting and lead generation to build your client base and referral network.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}