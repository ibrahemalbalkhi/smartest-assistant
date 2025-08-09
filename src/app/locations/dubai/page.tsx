import { Metadata } from 'next'
import { LocationHero } from '@/components/sections'
import { FAQAccordion, TestimonialGrid, Section, SectionHeader, H2, H3, Paragraph, Button, CTAButton, StatCard, FeatureCard } from '@/components/ui'
import { generateSEOMetadata } from '@/lib/seo'
import { LocalBusinessSchema } from '@/components/seo/StructuredData'
import { Breadcrumbs } from '@/components/navigation/breadcrumbs'
import { RelatedLinks } from '@/components/navigation/related-links'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Dubai Virtual Assistant Services | Smart VAs for UAE Businesses',
  description: 'Premium virtual assistant services in Dubai. Smart VAs who understand UAE business culture, work in GST timezone, and deliver exceptional results for Middle East companies.',
  keywords: 'virtual assistant Dubai, Dubai VA services, UAE virtual assistant, Middle East virtual assistant, Dubai executive assistant',
  canonical: '/locations/dubai'
})

const testimonials = [
  {
    id: 'dubai-1',
    name: 'Ahmed Al-Rashid',
    role: 'CEO',
    company: 'Dubai Tech Ventures',
    content: 'Our Smartest Assistant VA has been crucial in managing our international expansion. They understand the unique dynamics of doing business in Dubai and the wider GCC region.',
    rating: 5,
    location: 'Dubai Marina',
    industry: 'Technology'
  },
  {
    id: 'dubai-2',
    name: 'Fatima Hassan',
    role: 'Founder',
    company: 'Luxury Retail Group',
    content: 'The cultural awareness and professionalism of our VA is exceptional. They seamlessly manage communications with our partners across the Middle East, Europe, and Asia.',
    rating: 5,
    location: 'Downtown Dubai',
    industry: 'Retail'
  },
  {
    id: 'dubai-3',
    name: 'Michael Thompson',
    role: 'Regional Director',
    company: 'Global Consulting MENA',
    content: 'Having a VA who understands both Western and Middle Eastern business practices has been invaluable. They\'ve helped us navigate complex regional requirements effortlessly.',
    rating: 5,
    location: 'DIFC',
    industry: 'Consulting'
  }
]

const dubaiFAQs = [
  {
    question: 'Do your virtual assistants understand UAE business culture?',
    answer: 'Absolutely! Our VAs serving Dubai businesses are trained in UAE business etiquette, understand Arabic business terminology, and are familiar with regional business practices including the importance of relationship-building and respect for local customs.'
  },
  {
    question: 'Can VAs work during UAE business hours and Ramadan schedules?',
    answer: 'Yes! We provide VAs who work during UAE business hours (9 AM - 6 PM GST) and adapt to special schedules during Ramadan and local holidays. We ensure continuous support that aligns with your business needs.'
  },
  {
    question: 'Do you support businesses in Dubai free zones?',
    answer: 'Yes, we work with businesses across all Dubai free zones including DIFC, DMCC, Dubai Media City, Dubai Internet City, and others. Our VAs understand the unique requirements and advantages of free zone operations.'
  },
  {
    question: 'Can VAs help with Arabic and multilingual communications?',
    answer: 'Many of our VAs are multilingual and can assist with Arabic-English translations, manage communications in multiple languages, and help navigate the multicultural business environment of Dubai.'
  },
  {
    question: 'How do you handle payments for UAE businesses?',
    answer: 'We offer flexible payment options for UAE businesses including invoicing in AED, international bank transfers, and compliance with UAE tax regulations. All our services are structured to meet local compliance requirements.'
  }
]

export default function DubaiPage() {
  const breadcrumbs = [
    { label: 'Locations', href: '/locations' },
    { label: 'Dubai', href: '/locations/dubai' }
  ]

  return (
    <>
      <LocalBusinessSchema
        name="Smartest Assistant - Dubai"
        address={{
          city: 'Dubai',
          region: 'Dubai',
          country: 'AE',
          postalCode: '00000'
        }}
        coordinates={{
          latitude: 25.2048,
          longitude: 55.2708
        }}
      />

      {/* Hero Section */}
      <LocationHero
        city="Dubai"
        state="UAE"
        description="From DIFC to Dubai Marina, from tech startups to luxury brands, we provide smart virtual assistants who understand the ambition and pace of Dubai's dynamic business environment."
        localFeatures={[
          'GST timezone coverage',
          'UAE business culture expertise',
          'Arabic-English bilingual support',
          'Understanding of GCC business dynamics'
        ]}
      />

      {/* Breadcrumbs */}
      <Section spacing="sm">
        <Breadcrumbs items={breadcrumbs} />
      </Section>

      {/* Why Dubai Businesses Choose Us */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Why Dubai's Leading Companies Choose Smartest Assistant"
          description="We understand what makes Dubai business unique – from the international outlook to the pursuit of excellence"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            icon={<span className="text-3xl">🌍</span>}
            title="Global Business Hub Support"
            description="VAs experienced in managing international partnerships, cross-border transactions, and multicultural communications."
          />
          
          <FeatureCard
            icon={<span className="text-3xl">🏗️</span>}
            title="Growth-Focused"
            description="Perfect for Dubai's ambitious businesses, supporting rapid scaling, new ventures, and innovation initiatives."
          />
          
          <FeatureCard
            icon={<span className="text-3xl">⭐</span>}
            title="Premium Service Standards"
            description="Matching Dubai's expectations for excellence with VAs who deliver five-star service quality consistently."
          />
        </div>

        {/* Local Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <StatCard 
            value="150+"
            label="Dubai Businesses Served"
            description="From SMEs to multinationals"
          />
          <StatCard 
            value="GST+4"
            label="Time Zone Coverage"
            description="Supporting global operations"
          />
          <StatCard 
            value="20+"
            label="Industries Supported"
            description="Diverse sector expertise"
          />
          <StatCard 
            value="98%"
            label="Client Satisfaction"
            description="Excellence as standard"
          />
        </div>
      </Section>

      {/* Dubai-Specific Services */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Services Tailored for Dubai Businesses"
          description="From managing DIFC meetings to coordinating luxury events, we understand Dubai's unique needs"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">🌐</div>
            <H3 className="mb-3">International Business Support</H3>
            <Paragraph className="mb-4">
              Managing communications across time zones, coordinating with global partners, handling multicultural client relationships, and supporting international expansion efforts.
            </Paragraph>
            <Link href="/services/executive-assistant" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">📊</div>
            <H3 className="mb-3">Trade & Commerce Support</H3>
            <Paragraph className="mb-4">
              Managing import/export documentation, coordinating with free zone authorities, handling trade license renewals, and supporting e-commerce operations.
            </Paragraph>
            <Link href="/services/business-administration" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">🏢</div>
            <H3 className="mb-3">Real Estate & Property</H3>
            <Paragraph className="mb-4">
              Property research and management, coordinating with RERA, managing tenant relations, supporting property investment activities across Dubai's dynamic market.
            </Paragraph>
            <Link href="/services/real-estate-support" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">✨</div>
            <H3 className="mb-3">Luxury & Hospitality</H3>
            <Paragraph className="mb-4">
              Supporting luxury brands, coordinating high-end events, managing VIP communications, and ensuring premium service standards that match Dubai's excellence.
            </Paragraph>
            <Link href="/services/event-coordination" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">💻</div>
            <H3 className="mb-3">Tech & Startup Support</H3>
            <Paragraph className="mb-4">
              Supporting Dubai's thriving tech ecosystem, managing accelerator applications, coordinating with investors, and handling startup operations efficiently.
            </Paragraph>
            <Link href="/industries/saas-startups" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">📱</div>
            <H3 className="mb-3">Digital Marketing</H3>
            <Paragraph className="mb-4">
              Managing social media for MENA audiences, content creation in Arabic and English, influencer coordination, and digital campaign management.
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
          title="Supporting Dubai's Diverse Business Sectors"
          description="From traditional trading to cutting-edge technology"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/industries/real-estate" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🏗️</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">Real Estate</h4>
              <p className="text-sm text-gray-600">Property development & investment</p>
            </div>
          </Link>
          
          <Link href="/industries/ecommerce" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🛍️</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">E-commerce</h4>
              <p className="text-sm text-gray-600">Online retail & marketplaces</p>
            </div>
          </Link>
          
          <Link href="/industries/finance" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">Finance</h4>
              <p className="text-sm text-gray-600">Banking & financial services</p>
            </div>
          </Link>
          
          <Link href="/industries/hospitality" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🏨</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">Hospitality</h4>
              <p className="text-sm text-gray-600">Hotels & tourism</p>
            </div>
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Dubai Success Stories"
          description="See how we've helped businesses across the UAE achieve more"
          centered
        />
        <TestimonialGrid testimonials={testimonials} />
      </Section>

      {/* FAQ Section */}
      <Section spacing="lg">
        <SectionHeader
          title="Common Questions from Dubai Businesses"
          centered
        />
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={dubaiFAQs} />
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" spacing="lg">
        <div className="text-center text-white">
          <H2 className="text-white mb-4">Ready to Scale Your Dubai Business?</H2>
          <Paragraph className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join 150+ Dubai businesses that have accelerated their growth with smart virtual assistants
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
          currentPage="/locations/dubai"
          pageType="location"
          cityName="Dubai"
        />
      </Section>
    </>
  )
}