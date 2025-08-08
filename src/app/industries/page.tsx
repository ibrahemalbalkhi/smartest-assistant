import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Section, 
  SectionHeader,
  H2, 
  H3, 
  Paragraph, 
  Button,
  Container
} from '@/components/ui'
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Virtual Assistants by Industry | Specialized VAs for Every Sector | Smartest Assistant',
  description: 'Industry-specialized virtual assistants who understand your sector. Expert VAs for SaaS, e-commerce, real estate, healthcare, legal, consulting, and more.',
  keywords: 'virtual assistants by industry, specialized virtual assistant, industry specific VA, SaaS virtual assistant, healthcare virtual assistant, real estate virtual assistant',
  openGraph: {
    title: 'Virtual Assistants by Industry | Specialized VAs for Every Sector',
    description: 'Industry-specialized virtual assistants who understand your sector and speak your language.',
    url: 'https://smartestassistant.com/industries',
  }
}

const industries = [
  {
    name: 'SaaS & Startups',
    slug: 'saas-startups',
    icon: '🚀',
    description: 'VAs who understand rapid growth, product launches, user onboarding, and startup culture. Expert support for scaling technology companies.',
    features: ['Product Launch Support', 'User Onboarding', 'Growth Metrics Tracking', 'Investor Relations'],
    featured: true,
    color: 'from-blue-500 to-purple-600'
  },
  {
    name: 'E-commerce',
    slug: 'ecommerce',
    icon: '🛍️',
    description: 'Specialized support for online retail operations including inventory management, customer service, order processing, and marketplace optimization.',
    features: ['Inventory Management', 'Customer Service', 'Order Processing', 'Marketplace Optimization'],
    featured: true,
    color: 'from-green-500 to-teal-600'
  },
  {
    name: 'Real Estate',
    slug: 'real-estate',
    icon: '🏘️',
    description: 'Expert assistants for real estate professionals handling lead management, transaction coordination, client communications, and marketing.',
    features: ['Lead Management', 'Transaction Coordination', 'Client Communications', 'Marketing Campaigns'],
    featured: true,
    color: 'from-orange-500 to-red-600'
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    icon: '🏥',
    description: 'HIPAA-compliant support for medical practices, including patient scheduling, insurance verification, medical billing, and administrative tasks.',
    features: ['Patient Scheduling', 'Insurance Verification', 'Medical Billing', 'HIPAA Compliance'],
    featured: false,
    color: 'from-blue-600 to-indigo-700'
  },
  {
    name: 'Legal Services',
    slug: 'legal-services',
    icon: '⚖️',
    description: 'Professional support for law firms including case management, client intake, document preparation, and court scheduling.',
    features: ['Case Management', 'Client Intake', 'Document Preparation', 'Court Scheduling'],
    featured: false,
    color: 'from-gray-700 to-gray-900'
  },
  {
    name: 'Consulting',
    slug: 'consulting',
    icon: '💼',
    description: 'Strategic support for consultants including research, proposal writing, client management, and project coordination.',
    features: ['Research & Analysis', 'Proposal Writing', 'Client Management', 'Project Coordination'],
    featured: false,
    color: 'from-purple-600 to-pink-600'
  },
  {
    name: 'Finance',
    slug: 'finance',
    icon: '💰',
    description: 'Expert support for financial services including client onboarding, compliance documentation, report preparation, and administrative tasks.',
    features: ['Client Onboarding', 'Compliance Support', 'Report Preparation', 'Data Analysis'],
    featured: false,
    color: 'from-yellow-500 to-orange-600'
  },
  {
    name: 'Marketing Agencies',
    slug: 'marketing-agencies',
    icon: '📈',
    description: 'Specialized support for marketing agencies including campaign management, content creation, client reporting, and social media management.',
    features: ['Campaign Management', 'Content Creation', 'Client Reporting', 'Social Media Management'],
    featured: false,
    color: 'from-pink-500 to-rose-600'
  }
]

export default function IndustriesHub() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industries', current: true }
  ]

  const featuredIndustries = industries.filter(industry => industry.featured)
  const otherIndustries = industries.filter(industry => !industry.featured)

  return (
    <>
      <ServiceSchema 
        name="Virtual Assistants by Industry"
        description="Industry-specialized virtual assistants with deep sector knowledge and expertise. Professional VAs who understand your business language and challenges."
        url="https://smartestassistant.com/industries"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      
      {/* Hero Section */}
      <Section background="gradient" spacing="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-primary-blue text-sm font-semibold rounded-full mb-4">
                🎯 Industry Specialists
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              VAs Who{' '}
              <span className="text-primary-blue">Speak Your Industry</span>
            </h1>
            
            <Paragraph size="lg" className="mb-8 max-w-3xl mx-auto text-xl text-gray-600">
              Stop explaining your business to generic VAs. Get specialized virtual assistants who 
              understand your industry, know your tools, and anticipate your sector-specific needs.
            </Paragraph>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="link" href="/schedule-a-call" size="lg" className="text-lg px-8 py-4">
                Find Your Industry Expert
              </Button>
              <Button as="link" href="/resources/roi-calculator" variant="outline" size="lg" className="text-lg px-8 py-4">
                Calculate Your ROI
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Industries */}
      <Section spacing="lg">
        <Container>
          <SectionHeader
            title="Our Top Specializations"
            description="Industries where we have the deepest expertise and proven track records"
          />
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredIndustries.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-primary-blue">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">{industry.icon}</div>
                      <H3 className="group-hover:text-primary-blue transition-colors">
                        {industry.name}
                      </H3>
                    </div>
                    
                    <Paragraph className="text-gray-600 mb-6">
                      {industry.description}
                    </Paragraph>
                    
                    <div className="space-y-3 mb-6">
                      <div className="font-semibold text-gray-800 text-sm">Key Specializations:</div>
                      <div className="grid grid-cols-2 gap-2">
                        {industry.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <span className="text-primary-blue font-semibold group-hover:underline">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* All Industries Grid */}
      <Section background="gray" spacing="lg">
        <Container>
          <SectionHeader
            title="Additional Industry Expertise"
            description="More specialized sectors where our VAs deliver exceptional results"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {otherIndustries.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group">
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{industry.icon}</span>
                    <H3 className="text-lg group-hover:text-primary-blue transition-colors">
                      {industry.name}
                    </H3>
                  </div>
                  
                  <Paragraph className="text-gray-600 text-sm mb-4">
                    {industry.description}
                  </Paragraph>
                  
                  <div className="text-primary-blue text-sm font-medium group-hover:underline">
                    View Specialization →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Don't See Your Industry */}
          <div className="bg-primary-blue rounded-xl p-8 text-center text-white">
            <H3 className="mb-4">Don't See Your Industry?</H3>
            <Paragraph className="mb-6 text-blue-100">
              We work with businesses across all sectors. Our smart VAs adapt quickly to any industry, 
              learning your specific needs and terminology.
            </Paragraph>
            <Button as="link" href="/contact" variant="secondary" size="lg">
              Tell Us About Your Industry
            </Button>
          </div>
        </Container>
      </Section>

      {/* Why Industry Expertise Matters */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Why Industry-Specific VAs Outperform Generic Ones"
              description="The advantages of working with VAs who understand your sector"
              centered
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue text-2xl">🧠</span>
                </div>
                <H3 className="mb-3">Industry Knowledge</H3>
                <Paragraph className="text-gray-600">
                  Deep understanding of industry terminology, processes, regulations, 
                  and best practices saves training time and reduces errors.
                </Paragraph>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue text-2xl">🔧</span>
                </div>
                <H3 className="mb-3">Tool Proficiency</H3>
                <Paragraph className="text-gray-600">
                  Pre-existing expertise with industry-specific software, platforms, 
                  and tools means immediate productivity without learning curves.
                </Paragraph>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue text-2xl">🎯</span>
                </div>
                <H3 className="mb-3">Strategic Insights</H3>
                <Paragraph className="text-gray-600">
                  Industry-specific experience enables proactive suggestions and 
                  strategic thinking that generic VAs simply cannot provide.
                </Paragraph>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue text-2xl">⚡</span>
                </div>
                <H3 className="mb-3">Faster Onboarding</H3>
                <Paragraph className="text-gray-600">
                  Reduced training time and immediate value delivery because they 
                  already understand your business context and challenges.
                </Paragraph>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue text-2xl">📊</span>
                </div>
                <H3 className="mb-3">Better Results</H3>
                <Paragraph className="text-gray-600">
                  Industry expertise translates to higher quality output, better decision-making, 
                  and more valuable contributions to your business.
                </Paragraph>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue text-2xl">🤝</span>
                </div>
                <H3 className="mb-3">Professional Communication</H3>
                <Paragraph className="text-gray-600">
                  Ability to communicate professionally with your clients, partners, 
                  and stakeholders using appropriate industry language.
                </Paragraph>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Success Stories */}
      <Section background="primary" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <H2 className="mb-6 text-white">
              Proven Results Across Industries
            </H2>
            <Paragraph size="lg" className="mb-8 text-blue-100">
              Our industry-specialized VAs have helped hundreds of businesses achieve remarkable results. 
              See how sector expertise translates to business growth.
            </Paragraph>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">40%</div>
                <div className="text-blue-100 mb-2">Average Time Savings</div>
                <div className="text-sm text-blue-200">Across all industries</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-blue-100 mb-2">Client Retention Rate</div>
                <div className="text-sm text-blue-200">Industry specialists</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">30+</div>
                <div className="text-blue-100 mb-2">Industries Served</div>
                <div className="text-sm text-blue-200">Deep specializations</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="link" href="/resources/case-studies" variant="secondary" size="xl">
                View Case Studies
              </Button>
              <Button as="link" href="/schedule-a-call" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
                Find Your Specialist
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}