import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Section, 
  SectionHeader,
  H2, 
  H3, 
  Paragraph, 
  Button,
  Container,
  StatCard
} from '@/components/ui'
import { ServiceSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Virtual Assistant Solutions by Business Size | Startups to Enterprise | Smartest Assistant',
  description: 'Tailored virtual assistant solutions for every business size. From solopreneurs to enterprises - find the perfect VA solution for your growth stage.',
  keywords: 'virtual assistant solutions, VA for entrepreneurs, small business virtual assistant, enterprise virtual assistant, agency virtual assistant solutions',
  openGraph: {
    title: 'Virtual Assistant Solutions by Business Size | Startups to Enterprise',
    description: 'Tailored virtual assistant solutions for every business size and growth stage.',
    url: 'https://smartestassistant.com/solutions',
  }
}

const solutions = [
  {
    name: 'For Entrepreneurs',
    slug: 'for-entrepreneurs',
    icon: '🚀',
    subtitle: 'Solopreneurs & Founders',
    description: 'Scale faster with strategic support. Get back to building while your VA handles everything else.',
    features: ['Personal productivity optimization', 'Business operations management', 'Growth strategy support', 'Flexible scaling options'],
    stats: { timeBack: '30+ hrs/week', costSavings: '$40K+ annually', growthBoost: '3x faster scaling' },
    featured: true,
    color: 'from-purple-500 to-pink-600'
  },
  {
    name: 'For Small Businesses',
    slug: 'for-small-businesses',
    icon: '🏢',
    subtitle: '2-50 Employees',
    description: 'Cost-effective scaling without the overhead. Professional support that grows with your business.',
    features: ['Team coordination support', 'Process optimization', 'Customer service excellence', 'Cost-effective scaling'],
    stats: { timeBack: '40+ hrs/week', costSavings: '$60K+ annually', efficiency: '2x productivity gain' },
    featured: true,
    color: 'from-blue-500 to-teal-600'
  },
  {
    name: 'For Enterprises',
    slug: 'for-enterprises',
    icon: '🏛️',
    subtitle: '50+ Employees',
    description: 'Managed teams and strategic partnerships. Enterprise-grade security and scalability.',
    features: ['Managed VA teams', 'Enterprise security compliance', 'Strategic partnership approach', 'Dedicated account management'],
    stats: { timeBack: '500+ hrs/month', costSavings: '$200K+ annually', teams: 'Managed teams of 5-20 VAs' },
    featured: true,
    color: 'from-indigo-600 to-purple-700'
  },
  {
    name: 'For Agencies',
    slug: 'for-agencies',
    icon: '🎯',
    subtitle: 'Marketing & Creative Agencies',
    description: 'White-label support and specialized agency services. Scale client delivery without hiring overhead.',
    features: ['White-label partnerships', 'Agency-specific expertise', 'Client delivery support', 'Scalable team model'],
    stats: { timeBack: '200+ hrs/month', costSavings: '$100K+ annually', capacity: '3x client capacity' },
    featured: true,
    color: 'from-green-500 to-blue-600'
  }
]

const businessStageGuide = [
  {
    stage: 'Startup',
    revenue: '$0-100K',
    teamSize: '1-3 people',
    recommendation: 'For Entrepreneurs',
    focus: 'Personal productivity, basic operations, growth foundations'
  },
  {
    stage: 'Growth',
    revenue: '$100K-1M',
    teamSize: '3-15 people',
    recommendation: 'For Small Businesses',
    focus: 'Team coordination, process optimization, customer service'
  },
  {
    stage: 'Scale',
    revenue: '$1M-10M+',
    teamSize: '15-100+ people',
    recommendation: 'For Enterprises',
    focus: 'Managed teams, strategic partnerships, enterprise security'
  },
  {
    stage: 'Specialized',
    revenue: 'Varies',
    teamSize: 'Varies',
    recommendation: 'For Agencies',
    focus: 'Industry-specific needs, white-label solutions, client delivery'
  }
]

export default function SolutionsHub() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions', current: true }
  ]

  return (
    <>
      <ServiceSchema 
        name="Virtual Assistant Solutions by Business Size"
        description="Tailored virtual assistant solutions for every business stage - from solopreneurs to enterprises. Find the perfect VA solution for your growth stage."
        url="https://smartestassistant.com/solutions"
      />
      
      {/* Hero Section */}
      <Section background="gradient" spacing="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-primary-blue text-sm font-semibold rounded-full mb-4">
                🎯 Tailored Solutions
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              The Right VA Solution for{' '}
              <span className="text-primary-blue">Every Business Stage</span>
            </h1>
            
            <Paragraph size="lg" className="mb-8 max-w-3xl mx-auto text-xl text-gray-600">
              Whether you're a solopreneur just starting out or an enterprise with complex needs, 
              we have the perfect virtual assistant solution designed for your business size and growth stage.
            </Paragraph>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="link" href="/schedule-a-call" size="lg" className="text-lg px-8 py-4">
                Find Your Solution
              </Button>
              <Button as="link" href="#business-stage-guide" variant="outline" size="lg" className="text-lg px-8 py-4">
                See Which Fits You
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Solutions Grid */}
      <Section spacing="xl">
        <Container>
          <SectionHeader
            title="Solutions Designed for Your Growth Stage"
            description="Each solution is specifically crafted for different business sizes and needs"
          />
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution) => (
              <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-t-4 border-primary-blue h-full">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">{solution.icon}</div>
                      <div>
                        <H3 className="group-hover:text-primary-blue transition-colors">
                          {solution.name}
                        </H3>
                        <div className="text-sm text-gray-500">{solution.subtitle}</div>
                      </div>
                    </div>
                    
                    <Paragraph className="text-gray-600 mb-6">
                      {solution.description}
                    </Paragraph>
                    
                    <div className="space-y-3 mb-6">
                      <div className="font-semibold text-gray-800 text-sm">Key Features:</div>
                      <div className="space-y-2">
                        {solution.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <div className="grid grid-cols-3 gap-4 text-center text-sm">
                        <div>
                          <div className="font-bold text-primary-blue">{solution.stats.timeBack}</div>
                          <div className="text-gray-600">Time Saved</div>
                        </div>
                        <div>
                          <div className="font-bold text-green-600">{solution.stats.costSavings}</div>
                          <div className="text-gray-600">Cost Savings</div>
                        </div>
                        <div>
                          <div className="font-bold text-purple-600">{solution.stats.growthBoost || solution.stats.efficiency || solution.stats.teams || solution.stats.capacity}</div>
                          <div className="text-gray-600">Growth</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-primary-blue font-semibold group-hover:underline">
                        Learn More →
                      </span>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Available Now
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Business Stage Guide */}
      <Section id="business-stage-guide" background="gray" spacing="lg">
        <Container>
          <SectionHeader
            title="Which Solution Is Right for You?"
            description="Find your perfect match based on business size, revenue, and growth stage"
          />
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Business Stage</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Annual Revenue</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Team Size</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Recommended Solution</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Primary Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {businessStageGuide.map((guide, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{guide.stage}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{guide.revenue}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{guide.teamSize}</td>
                    <td className="px-6 py-4">
                      <Link href={`/solutions/${guide.recommendation.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary-blue font-medium hover:underline">
                        {guide.recommendation}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{guide.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Not sure which solution fits your business?
            </p>
            <Button as="link" href="/schedule-a-call" size="lg">
              Get Personalized Recommendation
            </Button>
          </div>
        </Container>
      </Section>

      {/* Why Business Size Matters */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Why We Tailor Solutions to Business Size"
              description="Different growth stages require different approaches to virtual assistance"
              centered
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl">⚡</span>
                </div>
                <H3 className="mb-3">Startup Agility</H3>
                <Paragraph className="text-gray-600">
                  Early-stage businesses need flexible, multi-skilled VAs who can adapt 
                  quickly and handle diverse tasks as priorities shift.
                </Paragraph>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">📈</span>
                </div>
                <H3 className="mb-3">Growth Optimization</H3>
                <Paragraph className="text-gray-600">
                  Growing businesses need process-focused VAs who can systemize operations 
                  and coordinate with expanding teams.
                </Paragraph>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-indigo-600 text-2xl">🏛️</span>
                </div>
                <H3 className="mb-3">Enterprise Scale</H3>
                <Paragraph className="text-gray-600">
                  Large organizations require managed VA teams with enterprise security, 
                  compliance, and strategic account management.
                </Paragraph>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🎯</span>
                </div>
                <H3 className="mb-3">Specialized Needs</H3>
                <Paragraph className="text-gray-600">
                  Agencies and specialized businesses need industry-specific expertise 
                  and white-label capabilities for client delivery.
                </Paragraph>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Success Across All Sizes */}
      <Section background="primary" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <H2 className="mb-6 text-white">
              Proven Success Across All Business Sizes
            </H2>
            <Paragraph size="lg" className="mb-8 text-blue-100">
              From solo entrepreneurs to Fortune 500 companies, our tailored approach 
              delivers consistent results at every business stage.
            </Paragraph>
            
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">1,000+</div>
                <div className="text-blue-100">Entrepreneurs Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Small Businesses</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Enterprise Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-blue-100">Agency Partners</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="link" href="/resources/case-studies" variant="secondary" size="xl">
                View Success Stories
              </Button>
              <Button as="link" href="/schedule-a-call" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
                Find Your Solution
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}