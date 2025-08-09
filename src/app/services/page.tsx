import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Section, 
  SectionHeader,
  H2, 
  H3, 
  Paragraph, 
  Button, 
  ServiceCard,
  FeatureCard 
} from '@/components/ui'
import { ServiceHero } from '@/components/sections'
import { ServiceSchema } from '@/components/seo/StructuredData'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Virtual Assistant Services | Smart VAs for Every Business Need | Smartest Assistant',
  description: 'Comprehensive virtual assistant services from email management to executive support. Smart VAs who think strategically and work autonomously. Compare services and pricing.',
  keywords: 'virtual assistant services, smart VA, email management, social media management, executive assistant, cold outreach, calendar management',
  openGraph: {
    title: 'Virtual Assistant Services | Smart VAs for Every Business Need',
    description: 'Comprehensive virtual assistant services from email management to executive support. Smart VAs who think strategically and work autonomously.',
    url: 'https://smartestassistant.com/services',
  }
}

// Extended service data with additional services
const allServices = [
  ...SERVICES,
  {
    id: 'calendar-management',
    name: 'Calendar Management',
    slug: 'calendar-management',
    description: 'Strategic calendar management that protects your time and priorities. We optimize your schedule for maximum productivity.',
    features: [
      'Intelligent scheduling optimization',
      'Meeting preparation and follow-up',
      'Buffer time management',
      'Conflict resolution',
      'Time zone coordination',
      'Priority-based booking'
    ],
    benefits: [
      'Reclaim 15+ hours weekly',
      'Never double-book again',
      'Optimized daily flow',
      'Reduced meeting fatigue'
    ]
  },
  {
    id: 'data-entry',
    name: 'Data Entry & Research',
    slug: 'data-entry-research',
    description: 'Accurate, efficient data management and comprehensive research services. We turn information chaos into organized insights.',
    features: [
      'Data entry and cleaning',
      'Market research',
      'Lead generation research',
      'Competitor analysis',
      'Database management',
      'Report compilation'
    ],
    benefits: [
      'Error-free data',
      'Actionable insights',
      'Time savings',
      'Better decision making'
    ]
  },
  {
    id: 'customer-support',
    name: 'Customer Support',
    slug: 'customer-support',
    description: 'Professional customer service that builds loyalty and grows your business. We represent your brand with excellence.',
    features: [
      'Live chat support',
      'Email support',
      'Ticket management',
      'FAQ development',
      'Customer feedback analysis',
      'Support documentation'
    ],
    benefits: [
      'Improved satisfaction',
      'Faster response times',
      'Brand consistency',
      'Reduced churn'
    ]
  }
]

// Service comparison data
const serviceComparison = {
  basic: {
    name: 'Essential Support',
    price: '$1,200',
    period: '/month',
    description: 'Perfect for solopreneurs and small teams',
    features: [
      'Email management',
      'Calendar scheduling',
      'Basic research tasks',
      '40 hours monthly',
      'Single VA assignment',
      'Standard response time'
    ],
    popular: false
  },
  professional: {
    name: 'Business Growth',
    price: '$2,400',
    period: '/month',
    description: 'Ideal for growing businesses and busy executives',
    features: [
      'All Essential features',
      'Social media management',
      'Cold outreach campaigns',
      'Customer support',
      '80 hours monthly',
      'Dedicated VA team',
      'Priority support',
      'Monthly strategy calls'
    ],
    popular: true
  },
  enterprise: {
    name: 'Scale Operations',
    price: 'Custom',
    period: '',
    description: 'Comprehensive support for large organizations',
    features: [
      'All Professional features',
      'Executive assistant services',
      'Data analysis & reporting',
      'Project management',
      'Unlimited hours',
      'Multi-VA team',
      'Account manager',
      'Custom integrations',
      'SLA guarantee'
    ],
    popular: false
  }
}

export default function ServicesPage() {
  return (
    <>
      <ServiceSchema 
        name="Virtual Assistant Services"
        description="Comprehensive virtual assistant services from email management to executive support. Smart VAs who think strategically and work autonomously."
        url="https://smartestassistant.com/services"
      />
      
      {/* Hero Section */}
      <ServiceHero
        title="Complete Virtual Assistant Services"
        subtitle="SMART VA SOLUTIONS"
        description="From email management to executive support, our smart VAs handle everything so you can focus on growth. Strategic thinking, autonomous work, measurable results."
        features={[
          'Strategic thinkers, not just task executors',
          'Modern tools and AI proficiency',
          'Autonomous workers requiring minimal supervision',
          'Proactive problem-solvers who anticipate needs'
        ]}
      />

      {/* Service Comparison Table */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Choose Your Perfect Support Level"
          description="All plans include smart VAs who think strategically and work autonomously"
        />
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(serviceComparison).map(([key, plan]) => (
            <div 
              key={key} 
              className={`bg-white rounded-xl p-8 shadow-lg relative ${plan.popular ? 'ring-2 ring-primary-blue' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <H3 className="mb-2">{plan.name}</H3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary-blue">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <Paragraph className="text-gray-600">{plan.description}</Paragraph>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                as="link" 
                href="/schedule-a-call" 
                variant={plan.popular ? 'primary' : 'outline'}
                size="lg" 
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Paragraph className="mb-6">
            All plans include 30-day money-back guarantee • No setup fees • Cancel anytime
          </Paragraph>
          <Button as="link" href="/schedule-a-call" size="lg">
            Schedule Free Consultation
          </Button>
        </div>
      </Section>

      {/* Core Services Grid */}
      <Section spacing="lg">
        <SectionHeader
          title="Our Core Services"
          description="Smart VAs who master the skills that matter most to your business"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {allServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-blue-50 rounded-xl p-8 max-w-3xl mx-auto">
            <H3 className="mb-4 text-primary-blue">Need Something Different?</H3>
            <Paragraph className="mb-6">
              We offer 15+ specialized services including bookkeeping, content creation, 
              project management, and more. If you have a task, we have a smart VA who can handle it.
            </Paragraph>
            <Button as="link" href="/schedule-a-call" variant="outline">
              Discuss Custom Needs
            </Button>
          </div>
        </div>
      </Section>

      {/* Service Categories */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Services by Category"
          description="Explore our full range of capabilities organized by business function"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="text-3xl mb-4">📧</div>
            <H3 className="mb-4">Communication & Admin</H3>
            <ul className="space-y-2 mb-6">
              <li><Link href="/services/email-management" className="text-primary-blue hover:underline">Email Management</Link></li>
              <li><Link href="/services/calendar-management" className="text-primary-blue hover:underline">Calendar Management</Link></li>
              <li><Link href="/services/customer-support" className="text-primary-blue hover:underline">Customer Support</Link></li>
              <li>Travel Coordination</li>
              <li>Document Management</li>
            </ul>
            <Button as="link" href="/schedule-a-call" variant="outline" size="sm">
              Get Started
            </Button>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="text-3xl mb-4">📈</div>
            <H3 className="mb-4">Marketing & Sales</H3>
            <ul className="space-y-2 mb-6">
              <li><Link href="/services/social-media-management" className="text-primary-blue hover:underline">Social Media Management</Link></li>
              <li><Link href="/services/cold-outreach" className="text-primary-blue hover:underline">Cold Outreach</Link></li>
              <li>Content Creation</li>
              <li>Lead Generation</li>
              <li>CRM Management</li>
            </ul>
            <Button as="link" href="/schedule-a-call" variant="outline" size="sm">
              Get Started
            </Button>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="text-3xl mb-4">👔</div>
            <H3 className="mb-4">Executive & Strategic</H3>
            <ul className="space-y-2 mb-6">
              <li><Link href="/services/executive-assistant" className="text-primary-blue hover:underline">Executive Assistant</Link></li>
              <li>Project Management</li>
              <li>Meeting Preparation</li>
              <li>Board Support</li>
              <li>Strategic Research</li>
            </ul>
            <Button as="link" href="/schedule-a-call" variant="outline" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="primary" spacing="lg">
        <div className="text-center mb-12">
          <H2 className="mb-6 text-white">How Our Smart VAs Work</H2>
          <Paragraph size="lg" className="text-blue-100 max-w-3xl mx-auto">
            Unlike traditional VAs who wait for instructions, our smart VAs think ahead, 
            solve problems proactively, and deliver results that exceed expectations.
          </Paragraph>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Strategic Assessment"
            description="We analyze your workflows to identify inefficiencies and optimization opportunities before starting any task."
            icon={<span className="text-3xl">🔍</span>}
            variant="dark"
          />
          
          <FeatureCard
            title="Intelligent Execution"
            description="Our VAs use modern tools, AI assistance, and proven processes to complete tasks faster and more accurately."
            icon={<span className="text-3xl">⚡</span>}
            variant="dark"
          />
          
          <FeatureCard
            title="Continuous Improvement"
            description="We provide insights and recommendations to help you optimize processes and achieve better results over time."
            icon={<span className="text-3xl">📈</span>}
            variant="dark"
          />
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Get answers to common questions about our smart VA services"
            centered
          />
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8">
              <H3 className="mb-4">How are your VAs different from other services?</H3>
              <Paragraph>
                Our VAs are trained to think strategically, not just execute tasks. They understand context, 
                anticipate problems, and suggest improvements. Most importantly, they work autonomously with 
                minimal supervision, unlike traditional VAs who need constant hand-holding.
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-8">
              <H3 className="mb-4">What qualifications do your VAs have?</H3>
              <Paragraph>
                All our VAs have college degrees and 3+ years of professional experience. They're also trained 
                on modern productivity tools, AI assistance, and our proprietary strategic thinking methodology. 
                We match VAs based on industry experience and skill specialization.
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-8">
              <H3 className="mb-4">Can I switch services or scale up/down?</H3>
              <Paragraph>
                Absolutely. Our flexible engagement model allows you to adjust services, hours, and team size 
                based on your needs. Most changes can be implemented within 48 hours, and there are no 
                penalties for scaling.
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-8">
              <H3 className="mb-4">How do you ensure quality and reliability?</H3>
              <Paragraph>
                We have multiple quality assurance layers including ongoing training, regular performance reviews, 
                backup VA coverage, and dedicated account management. All work is reviewed before delivery, 
                and we maintain 99.5% task completion reliability.
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6">Ready to Experience Smart VA Support?</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600">
            Stop settling for basic task execution. Get VAs who think strategically, 
            work autonomously, and deliver exceptional results.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" size="xl">
              Schedule Free Consultation
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl">
              Calculate Your ROI
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No setup fees
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              30-day guarantee
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Cancel anytime
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}