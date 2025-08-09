import { Metadata } from 'next'
import { LocationHero, ServiceGrid, LocationCTA, TestimonialSection } from '@/components/sections'
import { FAQ, Section, SectionHeader, H2, H3, Paragraph, Button, StatCard, FeatureCard } from '@/components/ui'
import { generateSEOMetadata } from '@/lib/seo'
import { LocalBusinessSchema } from '@/components/seo/StructuredData'
import { Breadcrumbs } from '@/components/navigation/breadcrumbs'
import { RelatedLinks } from '@/components/navigation/related-links'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'London Virtual Assistant Services | Smart VAs for UK Businesses',
  description: 'Top-rated virtual assistant services in London. Smart VAs who understand UK business culture, work in GMT timezone, and deliver exceptional results for British companies.',
  keywords: 'virtual assistant London, London VA services, UK virtual assistant, British virtual assistant, London executive assistant',
  canonical: '/locations/london'
})

const testimonials = [
  {
    id: 'london-1',
    name: 'James Worthington',
    role: 'Managing Director',
    company: 'Fintech Solutions Ltd',
    content: 'Our Smartest Assistant VA has been instrumental in scaling our London operations. They understand UK business culture perfectly and handle our international clients with remarkable professionalism.',
    rating: 5,
    location: 'City of London',
    industry: 'Financial Services'
  },
  {
    id: 'london-2',
    name: 'Sarah Mitchell',
    role: 'Founder',
    company: 'Digital Marketing Agency',
    content: 'Working across time zones used to be a nightmare. Our VA manages our schedule brilliantly, coordinating between London, New York, and Singapore offices seamlessly.',
    rating: 5,
    location: 'Shoreditch',
    industry: 'Marketing'
  },
  {
    id: 'london-3',
    name: 'David Chen',
    role: 'CEO',
    company: 'PropTech Innovations',
    content: 'The quality of support is outstanding. Our VA handles everything from investor relations to property research with the attention to detail that\'s essential in the London market.',
    rating: 5,
    location: 'Canary Wharf',
    industry: 'Real Estate Technology'
  }
]

const londonFAQs = [
  {
    question: 'Do your virtual assistants work in UK business hours?',
    answer: 'Yes! We have VAs available during standard UK business hours (9 AM - 6 PM GMT/BST) and can also provide coverage for international operations across multiple time zones.'
  },
  {
    question: 'Are your VAs familiar with UK business practices and regulations?',
    answer: 'Absolutely. Our VAs serving London businesses are trained in UK business etiquette, understand British English conventions, and are familiar with UK-specific requirements like VAT, Companies House filings, and GDPR compliance.'
  },
  {
    question: 'Can VAs help with London-specific tasks like property searches or local vendor management?',
    answer: 'Yes! Our VAs can handle London-specific tasks including property research, coordinating with local suppliers, managing UK-based logistics, and understanding the nuances of different London boroughs and business districts.'
  },
  {
    question: 'How do you handle payments and invoicing for UK businesses?',
    answer: 'We offer flexible payment options for UK businesses including GBP invoicing, UK bank transfers, and can work with your preferred payment terms. All invoices are VAT-compliant for UK tax purposes.'
  },
  {
    question: 'What industries in London do you specialize in?',
    answer: 'We have extensive experience supporting London businesses in financial services, legal firms, tech startups, creative agencies, property companies, and professional services. Our VAs adapt to your specific industry requirements.'
  }
]

export default function LondonPage() {
  const breadcrumbs = [
    { label: 'Locations', href: '/locations' },
    { label: 'London', href: '/locations/london' }
  ]

  return (
    <>
      <LocalBusinessSchema
        name="Smartest Assistant - London"
        address={{
          city: 'London',
          region: 'England',
          country: 'GB',
          postalCode: 'EC2A'
        }}
        coordinates={{
          latitude: 51.5074,
          longitude: -0.1278
        }}
      />

      {/* Hero Section */}
      <LocationHero
        city="London"
        state="UK"
        description="From the City to Canary Wharf, from Shoreditch startups to Mayfair firms, we provide smart virtual assistants who understand the pace and sophistication of London business."
        localFeatures={[
          'GMT/BST timezone alignment',
          'UK business culture expertise',
          'British English proficiency',
          'Understanding of London\'s diverse business districts'
        ]}
      />

      {/* Breadcrumbs */}
      <Section spacing="sm">
        <Breadcrumbs items={breadcrumbs} />
      </Section>

      {/* Why London Businesses Choose Us */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Why London's Leading Companies Choose Smartest Assistant"
          description="We understand what makes London business unique – from the fast pace of the City to the innovation of Tech City"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            icon={<span className="text-3xl">🏛️</span>}
            title="UK Business Expertise"
            description="VAs trained in British business etiquette, UK regulations, and London's unique professional culture."
          />
          
          <FeatureCard
            icon={<span className="text-3xl">🌍</span>}
            title="Global Connectivity"
            description="Perfect for London's international businesses, managing communications across Europe, Asia, and the Americas."
          />
          
          <FeatureCard
            icon={<span className="text-3xl">⚡</span>}
            title="24/7 Availability"
            description="Round-the-clock support for London's always-on business environment and global operations."
          />
        </div>

        {/* Local Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <StatCard 
            value="200+"
            label="London Businesses Served"
            description="From startups to FTSE companies"
          />
          <StatCard 
            value="GMT"
            label="Perfect Timezone Match"
            description="No lag in communication"
          />
          <StatCard 
            value="15+"
            label="Industries Supported"
            description="Finance to creative sectors"
          />
          <StatCard 
            value="99%"
            label="Client Retention"
            description="London businesses stay with us"
          />
        </div>
      </Section>

      {/* London-Specific Services */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Services Tailored for London Businesses"
          description="From managing City meetings to coordinating Mayfair events, we handle it all"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">📧</div>
            <H3 className="mb-3">Email & Diary Management</H3>
            <Paragraph className="mb-4">
              Managing complex calendars across time zones, coordinating with PA teams, and maintaining the professional standards expected in London business.
            </Paragraph>
            <Link href="/services/email-management" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">🏢</div>
            <H3 className="mb-3">Property & Vendor Coordination</H3>
            <Paragraph className="mb-4">
              Managing London property searches, coordinating with estate agents, handling supplier relationships, and navigating the complexities of London's business districts.
            </Paragraph>
            <Link href="/services/executive-assistant" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">✈️</div>
            <H3 className="mb-3">Travel & Event Coordination</H3>
            <Paragraph className="mb-4">
              Arranging business travel from Heathrow and City Airport, booking London venues, managing corporate hospitality, and coordinating international itineraries.
            </Paragraph>
            <Link href="/services/travel-coordination" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">💼</div>
            <H3 className="mb-3">Financial Admin Support</H3>
            <Paragraph className="mb-4">
              Expense management, VAT compliance, invoicing in GBP, coordinating with UK accountants, and managing financial documentation to UK standards.
            </Paragraph>
            <Link href="/services/bookkeeping" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">🎯</div>
            <H3 className="mb-3">Business Development</h3>
            <Paragraph className="mb-4">
              Research on UK markets, managing CRM systems, coordinating with London-based partners, and supporting expansion across the UK and Europe.
            </Paragraph>
            <Link href="/services/market-research" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">📱</div>
            <H3 className="mb-3">Digital Marketing Support</H3>
            <Paragraph className="mb-4">
              Managing social media for UK audiences, content creation with British English, coordinating with London agencies, and UK market research.
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
          title="Supporting London's Diverse Business Landscape"
          description="From traditional City firms to Tech City innovators"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/industries/finance" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🏦</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">Financial Services</h4>
              <p className="text-sm text-gray-600">Investment banks, hedge funds, fintech</p>
            </div>
          </Link>
          
          <Link href="/industries/legal" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">⚖️</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">Legal Firms</h4>
              <p className="text-sm text-gray-600">Magic Circle to boutique practices</p>
            </div>
          </Link>
          
          <Link href="/industries/saas-startups" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">💻</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">Tech & Startups</h4>
              <p className="text-sm text-gray-600">Shoreditch to King's Cross innovation</p>
            </div>
          </Link>
          
          <Link href="/industries/real-estate" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🏢</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">Property</h4>
              <p className="text-sm text-gray-600">Commercial and residential sectors</p>
            </div>
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <TestimonialSection 
        testimonials={testimonials}
        background="gray"
        title="London Success Stories"
        description="See how we've helped businesses across London achieve more"
      />

      {/* FAQ Section */}
      <Section spacing="lg">
        <SectionHeader
          title="Common Questions from London Businesses"
          centered
        />
        <div className="max-w-3xl mx-auto">
          <FAQ faqs={londonFAQs} />
        </div>
      </Section>

      {/* CTA Section */}
      <LocationCTA 
        city="London"
        description="Join 200+ London businesses that have transformed their operations with smart virtual assistants"
      />

      {/* Related Links */}
      <Section spacing="lg">
        <RelatedLinks 
          currentPage="/locations/london"
          pageType="location"
          cityName="London"
        />
      </Section>
    </>
  )
}