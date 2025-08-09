import { Metadata } from 'next'
import { LocationHero } from '@/components/sections'
import { FAQAccordion, TestimonialGrid, Section, SectionHeader, H2, H3, Paragraph, Button, CTAButton, StatCard, FeatureCard } from '@/components/ui'
import { generateSEOMetadata } from '@/lib/seo'
import { LocalBusinessSchema } from '@/components/seo/StructuredData'
import { Breadcrumbs } from '@/components/navigation/breadcrumbs'
import { RelatedLinks } from '@/components/navigation/related-links'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Singapore Virtual Assistant Services | Smart VAs for APAC Businesses',
  description: 'Top-rated virtual assistant services in Singapore. Smart VAs who excel in Asia-Pacific business, work in SGT timezone, and deliver exceptional results for regional headquarters.',
  keywords: 'virtual assistant Singapore, Singapore VA services, APAC virtual assistant, Asian virtual assistant, Singapore executive assistant',
  canonical: '/locations/singapore'
})

const testimonials = [
  {
    id: 'singapore-1',
    name: 'David Tan',
    role: 'Managing Director',
    company: 'APAC Financial Services',
    content: 'Our Smartest Assistant VA perfectly bridges our operations across Asia. Their understanding of regional business nuances and ability to work across multiple Asian markets is outstanding.',
    rating: 5,
    location: 'Raffles Place',
    industry: 'Financial Services'
  },
  {
    id: 'singapore-2',
    name: 'Jennifer Lee',
    role: 'Regional Head',
    company: 'Tech Innovations Asia',
    content: 'The efficiency and professionalism match Singapore\'s high standards perfectly. Our VA manages complex regional coordination with ease and cultural sensitivity.',
    rating: 5,
    location: 'One-North',
    industry: 'Technology'
  },
  {
    id: 'singapore-3',
    name: 'Raj Patel',
    role: 'CEO',
    company: 'Regional Trading Hub',
    content: 'Having a VA who understands ASEAN business dynamics has transformed our operations. They handle everything from compliance documentation to partner communications flawlessly.',
    rating: 5,
    location: 'Marina Bay',
    industry: 'International Trade'
  }
]

const singaporeFAQs = [
  {
    question: 'Do your virtual assistants understand Singapore business regulations?',
    answer: 'Yes! Our VAs serving Singapore businesses are familiar with local regulations including ACRA requirements, GST compliance, and MOM guidelines. They understand the importance of precision and compliance in Singapore\'s business environment.'
  },
  {
    question: 'Can VAs support regional operations across APAC?',
    answer: 'Absolutely. Many businesses use Singapore as their APAC hub, and our VAs are experienced in coordinating across multiple Asian markets, managing different time zones, and understanding diverse business cultures across the region.'
  },
  {
    question: 'Do you provide multilingual support for Singapore\'s diverse market?',
    answer: 'Yes, we offer VAs who can communicate in English, Mandarin, Malay, and other regional languages. This multilingual capability is essential for businesses operating in Singapore\'s multicultural environment.'
  },
  {
    question: 'How do VAs handle Singapore\'s fast-paced business environment?',
    answer: 'Our VAs are selected for their ability to work efficiently and accurately under pressure. They understand Singapore\'s culture of excellence and are trained to deliver high-quality work quickly while maintaining attention to detail.'
  },
  {
    question: 'What payment options do you offer for Singapore businesses?',
    answer: 'We provide flexible payment options including SGD invoicing, GIRO arrangements, and compliance with Singapore tax requirements. All invoices include proper GST documentation for Singapore-registered businesses.'
  }
]

export default function SingaporePage() {
  const breadcrumbs = [
    { label: 'Locations', href: '/locations' },
    { label: 'Singapore', href: '/locations/singapore' }
  ]

  return (
    <>
      <LocalBusinessSchema
        name="Smartest Assistant - Singapore"
        address={{
          city: 'Singapore',
          region: 'Singapore',
          country: 'SG',
          postalCode: '018989'
        }}
        coordinates={{
          latitude: 1.2897,
          longitude: 103.8501
        }}
      />

      {/* Hero Section */}
      <LocationHero
        city="Singapore"
        state="Singapore"
        description="From Raffles Place to Jurong, from regional headquarters to local SMEs, we provide smart virtual assistants who match Singapore's world-class standards and understand APAC business dynamics."
        localFeatures={[
          'SGT timezone alignment',
          'APAC business expertise',
          'Multilingual capabilities',
          'Regional coordination experience'
        ]}
      />

      {/* Breadcrumbs */}
      <Section spacing="sm">
        <Breadcrumbs items={breadcrumbs} />
      </Section>

      {/* Why Singapore Businesses Choose Us */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Why Singapore's Top Companies Choose Smartest Assistant"
          description="We deliver the efficiency and excellence that Singapore businesses expect"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            icon={<span className="text-3xl">🌏</span>}
            title="APAC Hub Expertise"
            description="VAs experienced in managing regional operations, understanding ASEAN dynamics, and coordinating across Asian markets."
          />
          
          <FeatureCard
            icon={<span className="text-3xl">⚡</span>}
            title="Efficiency Excellence"
            description="Matching Singapore's productivity standards with VAs who work smart, fast, and accurately without compromising quality."
          />
          
          <FeatureCard
            icon={<span className="text-3xl">🎯</span>}
            title="Precision & Compliance"
            description="Understanding Singapore's regulatory environment and delivering work that meets strict compliance and quality standards."
          />
        </div>

        {/* Local Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <StatCard 
            value="180+"
            label="Singapore Businesses"
            description="MNCs to startups"
          />
          <StatCard 
            value="SGT"
            label="Perfect Timezone"
            description="No communication delays"
          />
          <StatCard 
            value="25+"
            label="Industries Covered"
            description="Diverse expertise"
          />
          <StatCard 
            value="4.9/5"
            label="Client Rating"
            description="Consistent excellence"
          />
        </div>
      </Section>

      {/* Singapore-Specific Services */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Services Designed for Singapore Businesses"
          description="From managing regional operations to supporting local compliance"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">🌐</div>
            <H3 className="mb-3">Regional Coordination</H3>
            <Paragraph className="mb-4">
              Managing APAC operations, coordinating across time zones, handling multi-country communications, and supporting regional expansion strategies.
            </Paragraph>
            <Link href="/services/executive-assistant" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">📋</div>
            <H3 className="mb-3">Compliance & Admin</H3>
            <Paragraph className="mb-4">
              ACRA filings, work permit coordination, GST compliance, corporate secretarial support, and managing regulatory documentation efficiently.
            </Paragraph>
            <Link href="/services/business-administration" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">💼</div>
            <H3 className="mb-3">Financial Operations</H3>
            <Paragraph className="mb-4">
              Managing invoicing, expense tracking, financial reporting, coordinating with CPAs, and ensuring compliance with Singapore financial regulations.
            </Paragraph>
            <Link href="/services/bookkeeping" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">🚢</div>
            <H3 className="mb-3">Trade & Logistics</H3>
            <Paragraph className="mb-4">
              Supporting import/export operations, managing shipping documentation, coordinating with freight forwarders, and handling customs requirements.
            </Paragraph>
            <Link href="/services/operations-support" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">🎯</div>
            <H3 className="mb-3">Business Development</H3>
            <Paragraph className="mb-4">
              Market research across ASEAN, partner identification, trade show coordination, and supporting expansion into new Asian markets.
            </Paragraph>
            <Link href="/services/market-research" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">🌟</div>
            <H3 className="mb-3">Event Management</H3>
            <Paragraph className="mb-4">
              Coordinating conferences, managing webinars across time zones, organizing networking events, and handling logistics for regional meetings.
            </Paragraph>
            <Link href="/services/event-coordination" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
        </div>
      </Section>

      {/* Industries We Serve */}
      <Section spacing="lg">
        <SectionHeader
          title="Supporting Singapore's Key Industries"
          description="From fintech to logistics, we understand your sector"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/industries/finance" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🏦</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">Financial Services</h4>
              <p className="text-sm text-gray-600">Banking, fintech, insurance</p>
            </div>
          </Link>
          
          <Link href="/industries/saas-startups" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">💻</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">Technology</h4>
              <p className="text-sm text-gray-600">Software, AI, biotech</p>
            </div>
          </Link>
          
          <Link href="/industries/logistics" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">📦</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">Logistics</h4>
              <p className="text-sm text-gray-600">Shipping & supply chain</p>
            </div>
          </Link>
          
          <Link href="/industries/healthcare" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">Healthcare</h4>
              <p className="text-sm text-gray-600">Medical & pharmaceuticals</p>
            </div>
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Singapore Success Stories"
          description="How we help businesses excel in Asia's business hub"
          centered
        />
        <TestimonialGrid testimonials={testimonials} />
      </Section>

      {/* FAQ Section */}
      <Section spacing="lg">
        <SectionHeader
          title="Questions from Singapore Businesses"
          centered
        />
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={singaporeFAQs} />
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" spacing="lg">
        <div className="text-center text-white">
          <H2 className="text-white mb-4">Ready to Excel in Asia-Pacific?</H2>
          <Paragraph className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join 180+ Singapore businesses achieving more with smart virtual assistants
          </Paragraph>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/schedule-call" size="lg" variant="secondary" text="Schedule Free Consultation" />
            <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Explore Services
            </Button>
          </div>
        </div>
      </Section>

      {/* Related Links */}
      <Section spacing="lg">
        <RelatedLinks 
          currentPage="/locations/singapore"
          pageType="location"
          cityName="Singapore"
        />
      </Section>
    </>
  )
}