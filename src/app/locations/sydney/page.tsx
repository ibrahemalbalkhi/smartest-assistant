import { Metadata } from 'next'
import { LocationHero, ServiceGrid, LocationCTA, TestimonialSection } from '@/components/sections'
import { FAQ, Section, SectionHeader, H2, H3, Paragraph, Button, StatCard, FeatureCard } from '@/components/ui'
import { generateSEOMetadata } from '@/lib/seo'
import { LocalBusinessSchema } from '@/components/seo/StructuredData'
import { Breadcrumbs } from '@/components/navigation/breadcrumbs'
import { RelatedLinks } from '@/components/navigation/related-links'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sydney Virtual Assistant Services | Smart VAs for Australian Businesses',
  description: 'Top-rated virtual assistant services in Sydney. Smart VAs who understand Australian business culture, work in AEDT timezone, and deliver exceptional results for ANZ companies.',
  keywords: 'virtual assistant Sydney, Sydney VA services, Australian virtual assistant, NSW virtual assistant, Sydney executive assistant',
  canonical: '/locations/sydney'
})

const testimonials = [
  {
    id: 'sydney-1',
    name: 'David Wilson',
    role: 'CEO',
    company: 'Sydney Tech Innovations',
    content: 'Our Smartest Assistant VA has been crucial in managing our operations across Australia and New Zealand. They understand the local business culture perfectly and handle everything from client communications to complex scheduling.',
    rating: 5,
    location: 'Sydney CBD',
    industry: 'Technology'
  },
  {
    id: 'sydney-2',
    name: 'Emma Thompson',
    role: 'Founder',
    company: 'Creative Digital Agency',
    content: 'The time zone alignment is perfect, and our VA\'s understanding of the Australian market has been invaluable. They manage our social media, client coordination, and even help with local market research.',
    rating: 5,
    location: 'Surry Hills',
    industry: 'Digital Marketing'
  },
  {
    id: 'sydney-3',
    name: 'Michael Chang',
    role: 'Managing Director',
    company: 'Pacific Trade Solutions',
    content: 'Having a VA who can work across Sydney business hours and coordinate with our Asian partners has transformed our efficiency. Professional, proactive, and perfectly aligned with Aussie business standards.',
    rating: 5,
    location: 'North Sydney',
    industry: 'International Trade'
  }
]

const sydneyFAQs = [
  {
    question: 'Do your virtual assistants work in Australian Eastern Time?',
    answer: 'Yes! We have VAs available during standard Sydney business hours (9 AM - 5 PM AEDT/AEST) and can also provide coverage for businesses operating across Australian time zones or with international operations.'
  },
  {
    question: 'Are your VAs familiar with Australian business practices?',
    answer: 'Absolutely. Our VAs serving Sydney businesses are trained in Australian business etiquette, understand local terminology (GST, ABN, ASIC requirements), and are familiar with the Australian approach to professional relationships.'
  },
  {
    question: 'Can VAs help with ANZ regional operations?',
    answer: 'Yes! Many Sydney businesses operate across Australia and New Zealand. Our VAs are experienced in coordinating across both markets, understanding regional differences, and managing trans-Tasman business relationships.'
  },
  {
    question: 'Do you understand Australian compliance requirements?',
    answer: 'Our VAs are familiar with Australian business compliance including GST, BAS statements, ABN requirements, and Fair Work regulations. They can support your administrative compliance needs effectively.'
  },
  {
    question: 'What payment options do you offer for Australian businesses?',
    answer: 'We provide flexible payment options for Australian businesses including AUD invoicing, Australian bank transfers, and GST-compliant invoices. All documentation meets ATO requirements for business expenses.'
  }
]

export default function SydneyPage() {
  const breadcrumbs = [
    { label: 'Locations', href: '/locations' },
    { label: 'Sydney', href: '/locations/sydney' }
  ]

  return (
    <>
      <LocalBusinessSchema
        name="Smartest Assistant - Sydney"
        address={{
          city: 'Sydney',
          region: 'New South Wales',
          country: 'AU',
          postalCode: '2000'
        }}
        coordinates={{
          latitude: -33.8688,
          longitude: 151.2093
        }}
      />

      {/* Hero Section */}
      <LocationHero
        city="Sydney"
        state="Australia"
        description="From the Sydney CBD to Parramatta, from established corporations to innovative startups, we provide smart virtual assistants who match Sydney's world-class business standards and entrepreneurial spirit."
        localFeatures={[
          'AEDT/AEST timezone perfect match',
          'Australian business culture expertise',
          'ANZ market understanding',
          'Local compliance knowledge'
        ]}
      />

      {/* Breadcrumbs */}
      <Section spacing="sm">
        <Breadcrumbs items={breadcrumbs} />
      </Section>

      {/* Why Sydney Businesses Choose Us */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Why Sydney's Top Companies Choose Smartest Assistant"
          description="We deliver the professionalism and efficiency that Sydney businesses expect"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            icon={<span className="text-3xl">🇦🇺</span>}
            title="Australian Business Expertise"
            description="VAs who understand Aussie business culture, communication styles, and the importance of straightforward, results-focused service."
          />
          
          <FeatureCard
            icon={<span className="text-3xl">🌏</span>}
            title="Asia-Pacific Connectivity"
            description="Perfect for Sydney's role as an APAC hub, managing relationships across Australia, New Zealand, and Asian markets."
          />
          
          <FeatureCard
            icon={<span className="text-3xl">⚡</span>}
            title="No Lag, Real-Time Support"
            description="Working in your timezone means instant communication, real-time collaboration, and no delays in critical business operations."
          />
        </div>

        {/* Local Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <StatCard 
            value="170+"
            label="Sydney Businesses Served"
            description="From SMEs to ASX-listed"
          />
          <StatCard 
            value="AEDT"
            label="Perfect Timezone Match"
            description="Real-time collaboration"
          />
          <StatCard 
            value="22+"
            label="Industries Covered"
            description="Diverse sector expertise"
          />
          <StatCard 
            value="96%"
            label="Client Retention Rate"
            description="Long-term partnerships"
          />
        </div>
      </Section>

      {/* Sydney-Specific Services */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Services Tailored for Sydney Businesses"
          description="From Circular Quay boardrooms to Pyrmont tech hubs, we've got you covered"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">🏢</div>
            <H3 className="mb-3">Corporate Support</H3>
            <Paragraph className="mb-4">
              Executive assistance for Sydney's corporate sector, managing complex calendars, coordinating with ASX-listed companies, and handling high-level administrative tasks.
            </Paragraph>
            <Link href="/services/executive-assistant" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">🌐</div>
            <H3 className="mb-3">ANZ Market Coordination</H3>
            <Paragraph className="mb-4">
              Managing operations across Australia and New Zealand, coordinating with partners in Melbourne, Brisbane, Auckland, and beyond.
            </Paragraph>
            <Link href="/services/business-administration" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">💼</div>
            <H3 className="mb-3">Professional Services Support</H3>
            <Paragraph className="mb-4">
              Supporting Sydney's thriving professional services sector - law firms, accounting practices, consulting firms - with specialized administrative expertise.
            </Paragraph>
            <Link href="/industries/consulting" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">🏗️</div>
            <H3 className="mb-3">Property & Construction</H3>
            <Paragraph className="mb-4">
              Supporting Sydney's booming property sector with development coordination, tender management, compliance documentation, and stakeholder communications.
            </Paragraph>
            <Link href="/industries/real-estate" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">🚀</div>
            <H3 className="mb-3">Startup & Innovation</H3>
            <Paragraph className="mb-4">
              Supporting Sydney's startup ecosystem with scalable admin support, investor relations assistance, and operational efficiency for rapid growth.
            </Paragraph>
            <Link href="/industries/saas-startups" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">📱</div>
            <H3 className="mb-3">Digital Marketing</H3>
            <Paragraph className="mb-4">
              Managing social media for Australian audiences, content creation with local flair, and digital campaign coordination across ANZ markets.
            </Paragraph>
            <Link href="/services/social-media-management" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
        </div>
      </Section>

      {/* Industries We Serve */}
      <Section spacing="lg">
        <SectionHeader
          title="Supporting Sydney's Diverse Business Landscape"
          description="From finance to fintech, property to professional services"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/industries/finance" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🏦</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">Financial Services</h4>
              <p className="text-sm text-gray-600">Banks, funds, fintech</p>
            </div>
          </Link>
          
          <Link href="/industries/real-estate" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🏗️</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">Property</h4>
              <p className="text-sm text-gray-600">Development & real estate</p>
            </div>
          </Link>
          
          <Link href="/industries/saas-startups" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">💻</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">Technology</h4>
              <p className="text-sm text-gray-600">Tech startups & SaaS</p>
            </div>
          </Link>
          
          <Link href="/industries/consulting" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">Professional Services</h4>
              <p className="text-sm text-gray-600">Consulting & advisory</p>
            </div>
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <TestimonialSection 
        testimonials={testimonials}
        background="gray"
        title="Sydney Success Stories"
        description="See how we've helped businesses across Sydney and Australia achieve more"
      />

      {/* FAQ Section */}
      <Section spacing="lg">
        <SectionHeader
          title="Common Questions from Sydney Businesses"
          centered
        />
        <div className="max-w-3xl mx-auto">
          <FAQ faqs={sydneyFAQs} />
        </div>
      </Section>

      {/* CTA Section */}
      <LocationCTA 
        city="Sydney"
        description="Join 170+ Sydney businesses that have transformed their operations with smart virtual assistants"
      />

      {/* Related Links */}
      <Section spacing="lg">
        <RelatedLinks 
          currentPage="/locations/sydney"
          pageType="location"
          cityName="Sydney"
        />
      </Section>
    </>
  )
}