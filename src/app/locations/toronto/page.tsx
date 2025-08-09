import { Metadata } from 'next'
import { LocationHero, ServiceGrid, LocationCTA, TestimonialSection } from '@/components/sections'
import { FAQ, Section, SectionHeader, H2, H3, Paragraph, Button, StatCard, FeatureCard } from '@/components/ui'
import { generateSEOMetadata } from '@/lib/seo'
import { LocalBusinessSchema } from '@/components/seo/StructuredData'
import { Breadcrumbs } from '@/components/navigation/breadcrumbs'
import { RelatedLinks } from '@/components/navigation/related-links'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Toronto Virtual Assistant Services | Smart VAs for Canadian Businesses',
  description: 'Premium virtual assistant services in Toronto. Smart VAs who understand Canadian business culture, work in EST timezone, and deliver exceptional results for GTA companies.',
  keywords: 'virtual assistant Toronto, Toronto VA services, Canadian virtual assistant, Ontario virtual assistant, Toronto executive assistant',
  canonical: '/locations/toronto'
})

const testimonials = [
  {
    id: 'toronto-1',
    name: 'Sarah McKenzie',
    role: 'CEO',
    company: 'Toronto Tech Solutions',
    content: 'Our Smartest Assistant VA has been instrumental in scaling our operations across Canada. They understand the nuances of doing business in Toronto and handle our bilingual requirements perfectly.',
    rating: 5,
    location: 'Financial District',
    industry: 'Technology'
  },
  {
    id: 'toronto-2',
    name: 'Jean-Pierre Dubois',
    role: 'Managing Partner',
    company: 'Legal Associates LLP',
    content: 'The ability to work seamlessly in both English and French has been invaluable. Our VA manages complex scheduling across multiple time zones and jurisdictions with remarkable efficiency.',
    rating: 5,
    location: 'Bay Street',
    industry: 'Legal Services'
  },
  {
    id: 'toronto-3',
    name: 'Amanda Chen',
    role: 'Founder',
    company: 'GTA Marketing Agency',
    content: 'Having a VA who understands Toronto\'s diverse market and can coordinate with our clients from different cultural backgrounds has transformed how we operate.',
    rating: 5,
    location: 'Liberty Village',
    industry: 'Marketing'
  }
]

const torontoFAQs = [
  {
    question: 'Do your virtual assistants work in Eastern Time?',
    answer: 'Yes! We have VAs available during standard Toronto business hours (9 AM - 5 PM EST/EDT) and can also provide coverage for businesses that operate across Canadian time zones from Pacific to Atlantic.'
  },
  {
    question: 'Can VAs support bilingual English-French requirements?',
    answer: 'Absolutely. Many of our VAs are bilingual and can handle communications in both English and French, essential for businesses serving all of Canada or working with Quebec-based clients and partners.'
  },
  {
    question: 'Are your VAs familiar with Canadian business practices?',
    answer: 'Yes, our VAs serving Toronto businesses understand Canadian business etiquette, are familiar with provincial and federal regulations, and know how to navigate the Canadian business landscape effectively.'
  },
  {
    question: 'Can VAs help with cross-border US-Canada operations?',
    answer: 'Definitely! Toronto businesses often work closely with US partners. Our VAs are experienced in managing cross-border communications, understanding both Canadian and US business practices, and coordinating across both markets.'
  },
  {
    question: 'How do you handle payments for Canadian businesses?',
    answer: 'We offer flexible payment options for Canadian businesses including CAD invoicing, Canadian bank transfers, and proper HST/GST documentation for tax compliance. All invoices meet CRA requirements.'
  }
]

export default function TorontoPage() {
  const breadcrumbs = [
    { label: 'Locations', href: '/locations' },
    { label: 'Toronto', href: '/locations/toronto' }
  ]

  return (
    <>
      <LocalBusinessSchema
        name="Smartest Assistant - Toronto"
        address={{
          city: 'Toronto',
          region: 'Ontario',
          country: 'CA',
          postalCode: 'M5V'
        }}
        coordinates={{
          latitude: 43.6532,
          longitude: -79.3832
        }}
      />

      {/* Hero Section */}
      <LocationHero
        city="Toronto"
        state="Ontario"
        description="From Bay Street to the Innovation Corridor, from established enterprises to thriving startups, we provide smart virtual assistants who understand Toronto's dynamic business environment and Canadian values."
        localFeatures={[
          'EST/EDT timezone coverage',
          'Canadian business expertise',
          'Bilingual support available',
          'US-Canada cross-border experience'
        ]}
      />

      {/* Breadcrumbs */}
      <Section spacing="sm">
        <Breadcrumbs items={breadcrumbs} />
      </Section>

      {/* Why Toronto Businesses Choose Us */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Why Toronto's Leading Companies Choose Smartest Assistant"
          description="We understand what makes Toronto business unique – from its multicultural advantage to its innovation ecosystem"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            icon={<span className="text-3xl">🍁</span>}
            title="Canadian Business Savvy"
            description="VAs who understand Canadian business culture, regulations, and the importance of building lasting professional relationships."
          />
          
          <FeatureCard
            icon={<span className="text-3xl">🌐</span>}
            title="Multicultural Excellence"
            description="Supporting Toronto's diverse business community with cultural awareness and multilingual capabilities."
          />
          
          <FeatureCard
            icon={<span className="text-3xl">🇺🇸</span>}
            title="Cross-Border Expertise"
            description="Seamlessly managing US-Canada business relationships and understanding both markets' requirements."
          />
        </div>

        {/* Local Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <StatCard 
            value="220+"
            label="GTA Businesses Served"
            description="From startups to TSX companies"
          />
          <StatCard 
            value="EST"
            label="Perfect Timezone"
            description="Real-time collaboration"
          />
          <StatCard 
            value="18+"
            label="Industries Supported"
            description="Diverse Toronto sectors"
          />
          <StatCard 
            value="97%"
            label="Client Retention"
            description="Long-term partnerships"
          />
        </div>
      </Section>

      {/* Toronto-Specific Services */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Services Tailored for Toronto Businesses"
          description="From managing Bay Street meetings to supporting Waterloo tech startups"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">📧</div>
            <H3 className="mb-3">Executive Support</H3>
            <Paragraph className="mb-4">
              Managing complex calendars, coordinating board meetings, handling confidential communications, and supporting C-suite executives in Canada's business capital.
            </Paragraph>
            <Link href="/services/executive-assistant" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">🏢</div>
            <H3 className="mb-3">Real Estate Support</H3>
            <Paragraph className="mb-4">
              Supporting Toronto's hot real estate market with MLS research, showing coordination, documentation management, and client communication in the GTA.
            </Paragraph>
            <Link href="/services/real-estate-support" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">💼</div>
            <H3 className="mb-3">Financial Services Admin</H3>
            <Paragraph className="mb-4">
              Supporting Bay Street firms with compliance documentation, client onboarding, report preparation, and coordinating with regulatory bodies.
            </Paragraph>
            <Link href="/services/bookkeeping" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">🚀</div>
            <H3 className="mb-3">Startup Operations</H3>
            <Paragraph className="mb-4">
              Supporting Toronto's thriving startup ecosystem with investor relations, grant applications, accelerator coordination, and scaling operations.
            </Paragraph>
            <Link href="/industries/saas-startups" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">🏥</div>
            <H3 className="mb-3">Healthcare Admin</H3>
            <Paragraph className="mb-4">
              Managing patient communications, OHIP documentation, appointment scheduling, and supporting healthcare practices across the GTA.
            </Paragraph>
            <Link href="/industries/healthcare" className="text-primary-blue font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <div className="text-3xl mb-4">📱</div>
            <H3 className="mb-3">Digital Marketing</H3>
            <Paragraph className="mb-4">
              Managing social media for Canadian audiences, content creation, influencer partnerships, and supporting digital campaigns across Canada.
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
          title="Supporting Toronto's Diverse Economy"
          description="From financial services to creative industries"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/industries/finance" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🏦</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">Financial Services</h4>
              <p className="text-sm text-gray-600">Bay Street & beyond</p>
            </div>
          </Link>
          
          <Link href="/industries/saas-startups" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">💻</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">Tech & Startups</h4>
              <p className="text-sm text-gray-600">Innovation ecosystem</p>
            </div>
          </Link>
          
          <Link href="/industries/real-estate" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🏘️</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">Real Estate</h4>
              <p className="text-sm text-gray-600">GTA property market</p>
            </div>
          </Link>
          
          <Link href="/industries/healthcare" className="group">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="font-semibold mb-2 group-hover:text-primary-blue transition-colors">Healthcare</h4>
              <p className="text-sm text-gray-600">Medical & wellness</p>
            </div>
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <TestimonialSection 
        testimonials={testimonials}
        background="gray"
        title="Toronto Success Stories"
        description="See how we've helped GTA businesses achieve more"
      />

      {/* FAQ Section */}
      <Section spacing="lg">
        <SectionHeader
          title="Common Questions from Toronto Businesses"
          centered
        />
        <div className="max-w-3xl mx-auto">
          <FAQ faqs={torontoFAQs} />
        </div>
      </Section>

      {/* CTA Section */}
      <LocationCTA 
        city="Toronto"
        description="Join 220+ Toronto businesses that have transformed their operations with smart virtual assistants"
      />

      {/* Related Links */}
      <Section spacing="lg">
        <RelatedLinks 
          currentPage="/locations/toronto"
          pageType="location"
          cityName="Toronto"
        />
      </Section>
    </>
  )
}