import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Section, 
  SectionHeader,
  H2, 
  H3, 
  Paragraph, 
  Button,
  StatCard,
  TestimonialCard
} from '@/components/ui'
import { ServiceSchema, FAQSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Virtual Assistants for Entrepreneurs | Scale Your Startup | Smartest Assistant',
  description: 'Specialized virtual assistant services for entrepreneurs and startup founders. Strategic VAs who understand the entrepreneurial journey and help you scale efficiently.',
  keywords: 'virtual assistant for entrepreneurs, startup virtual assistant, entrepreneur VA, founder assistant, startup support',
  openGraph: {
    title: 'Virtual Assistants for Entrepreneurs | Scale Your Startup',
    description: 'Strategic virtual assistants designed for entrepreneurs who need to focus on growth while delegating operational tasks.',
    url: 'https://smartestassistant.com/solutions/for-entrepreneurs',
  }
}

const entrepreneurChallenges = [
  {
    challenge: 'Wearing Too Many Hats',
    description: 'Entrepreneurs often handle everything from strategy to admin work, preventing focus on high-value activities',
    solution: 'Strategic VA takes over operational tasks, allowing you to focus on vision, strategy, and growth initiatives',
    impact: 'Reclaim 20+ hours weekly for strategic work and business development'
  },
  {
    challenge: 'Limited Resources & Budget',
    description: 'Need professional support but can\'t afford full-time employees with benefits and overhead',
    solution: 'Flexible VA services that scale with your needs and budget, no overhead costs or long-term commitments',
    impact: 'Professional support at 60% less cost than hiring full-time employees'
  },
  {
    challenge: 'Rapid Growth Demands',
    description: 'Business growing faster than your ability to handle increased operational demands',
    solution: 'Scalable VA support that grows with your business, handling increased volume seamlessly',
    impact: 'Scale operations without hiring delays or training bottlenecks'
  },
  {
    challenge: 'Work-Life Imbalance',
    description: 'Working 70+ hour weeks with no time for personal life or strategic thinking',
    solution: 'VAs handle routine tasks and operations, giving you time for life balance and creative thinking',
    impact: 'Reduce working hours by 30% while maintaining business momentum'
  }
]

const entrepreneurServices = [
  {
    service: 'Executive Support',
    description: 'High-level support for busy founders including calendar management, travel coordination, and strategic project assistance',
    tasks: ['Executive calendar management', 'Travel planning and booking', 'Meeting preparation and follow-up', 'Stakeholder communication'],
    ideal: 'Founders spending 10+ hours/week on administrative coordination'
  },
  {
    service: 'Business Operations',
    description: 'Backend operations management to keep your business running smoothly while you focus on growth',
    tasks: ['Process documentation', 'Vendor management', 'System setup and optimization', 'Performance reporting'],
    ideal: 'Entrepreneurs managing multiple operational aspects simultaneously'
  },
  {
    service: 'Customer & Lead Management',
    description: 'Professional customer service and lead nurturing to maintain relationships while you scale',
    tasks: ['Customer inquiry management', 'Lead qualification and nurturing', 'CRM management and updates', 'Follow-up campaigns'],
    ideal: 'Growing businesses with increasing customer and lead volume'
  },
  {
    service: 'Content & Marketing Support',
    description: 'Marketing execution and content creation to maintain brand presence and growth momentum',
    tasks: ['Social media management', 'Content creation and scheduling', 'Email marketing campaigns', 'Market research'],
    ideal: 'Founders who know marketing strategy but lack execution bandwidth'
  },
  {
    service: 'Research & Analysis',
    description: 'Strategic research and competitive analysis to inform your business decisions',
    tasks: ['Market research and analysis', 'Competitive intelligence', 'Investment opportunity research', 'Industry trend monitoring'],
    ideal: 'Data-driven entrepreneurs needing research support for strategic decisions'
  },
  {
    service: 'Project Coordination',
    description: 'Project management and coordination to keep initiatives moving forward efficiently',
    tasks: ['Project timeline management', 'Team coordination and communication', 'Progress tracking and reporting', 'Resource allocation'],
    ideal: 'Entrepreneurs managing multiple projects and initiatives simultaneously'
  }
]

const successStories = [
  {
    id: 'entrepreneur-testimonial-1',
    name: 'Marcus Chen',
    role: 'SaaS Founder',
    company: 'DataFlow Analytics',
    content: 'My VA transformed how I work as a founder. They handle all my operational tasks, customer onboarding, and even basic product research. I went from working 80-hour weeks to focusing purely on product development and fundraising. We closed our Series A two months ahead of schedule.',
    rating: 5,
    results: {
      timeSaved: '25 hours/week',
      focusIncrease: '200%',
      growthImpact: 'Series A closed early'
    }
  },
  {
    id: 'entrepreneur-testimonial-2',
    name: 'Sarah Rodriguez',
    role: 'E-commerce Entrepreneur',
    company: 'Sustainable Style Co.',
    content: 'As a solo founder, I was drowning in customer service, inventory management, and marketing tasks. My VA handles all the operational work while I focus on product development and partnerships. Revenue doubled in 6 months because I could finally work ON the business instead of IN it.',
    rating: 5,
    results: {
      timeSaved: '30 hours/week',
      revenueGrowth: '100%',
      stressReduction: '70%'
    }
  }
]

const growthStages = [
  {
    stage: 'Pre-Revenue/MVP',
    focus: 'Validation & Foundation',
    vaSupport: [
      'Market research and customer interviews',
      'Administrative setup and documentation',
      'Social media presence building',
      'Basic operational processes'
    ],
    hours: '10-15 hours/week',
    investment: '$800-1,200/month'
  },
  {
    stage: 'Early Traction',
    focus: 'Growth & Optimization',
    vaSupport: [
      'Customer service and support',
      'Content creation and marketing',
      'CRM management and lead nurturing',
      'Process optimization'
    ],
    hours: '20-30 hours/week',
    investment: '$1,600-2,400/month'
  },
  {
    stage: 'Scaling',
    focus: 'Systems & Expansion',
    vaSupport: [
      'Team coordination and management',
      'Advanced project management',
      'Strategic research and analysis',
      'Partnership and vendor management'
    ],
    hours: '30-40 hours/week',
    investment: '$2,400-3,200/month'
  },
  {
    stage: 'Mature Growth',
    focus: 'Strategic Leadership',
    vaSupport: [
      'Executive assistant functions',
      'Strategic initiative coordination',
      'Advanced analytics and reporting',
      'High-level stakeholder management'
    ],
    hours: '40+ hours/week',
    investment: '$3,200+ /month'
  }
]

const faqs = [
  {
    question: 'How quickly can a VA start helping with my startup?',
    answer: 'Most entrepreneurs see immediate impact within the first week. We focus on quick wins like email management and calendar coordination first, then gradually expand to more complex tasks as the partnership develops.'
  },
  {
    question: 'Can a VA handle customer-facing tasks for my business?',
    answer: 'Absolutely. Our VAs are trained in professional customer service and can handle inquiries, support requests, and even sales follow-up. We ensure they understand your brand voice and customer service standards.'
  },
  {
    question: 'What if my business needs change rapidly as we grow?',
    answer: 'Our VAs are adaptable and our service model is flexible. We can quickly adjust task priorities, increase hours, or even switch VA specializations as your business evolves and needs change.'
  },
  {
    question: 'How do you ensure my VA understands the entrepreneurial mindset?',
    answer: 'We specifically select VAs who have worked with entrepreneurs and startups. They understand the pace, uncertainty, and resource constraints of entrepreneurial ventures, and can adapt accordingly.'
  },
  {
    question: 'Can I start small and scale up as my business grows?',
    answer: 'Yes, that\'s exactly how most entrepreneurs work with us. Start with 10-15 hours per week handling basic tasks, then scale up hours and complexity as you see the value and your business grows.'
  }
]

export default function EntrepreneursPage() {
  return (
    <>
      <ServiceSchema 
        name="Virtual Assistant Services for Entrepreneurs"
        description="Specialized virtual assistant services designed for entrepreneurs and startup founders who need strategic support to scale their businesses efficiently."
        url="https://smartestassistant.com/solutions/for-entrepreneurs"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-primary-blue text-sm font-semibold rounded-full mb-6">
            🚀 For Entrepreneurs & Founders
          </div>
          
          <H2 className="mb-6">Stop Working IN Your Business. Start Working ON It.</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600">
            Strategic virtual assistants who understand the entrepreneurial journey. Delegate operations, 
            reclaim your time, and focus on what only you can do: vision, strategy, and growth.
          </Paragraph>
          
          <div className="bg-green-50 rounded-xl p-8 mb-8 border border-green-200">
            <H3 className="mb-4 text-green-800">The Entrepreneur's Dilemma</H3>
            <Paragraph className="text-green-700 mb-4">
              You started your business to pursue your vision and create impact. But instead, you're spending 
              70% of your time on tasks that don't require your unique skills and expertise.
            </Paragraph>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <div className="font-semibold text-green-800 mb-2">What you're doing now:</div>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Managing emails and calendars</li>
                  <li>• Handling customer service inquiries</li>
                  <li>• Creating content and social media</li>
                  <li>• Administrative and operational tasks</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-green-800 mb-2">What you should be doing:</div>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Developing strategy and vision</li>
                  <li>• Building key relationships</li>
                  <li>• Raising capital and partnerships</li>
                  <li>• Innovating and creating value</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/schedule-a-call" variant="primary" size="lg">
              Reclaim Your Time
            </Button>
            <Button as="link" href="/resources/roi-calculator" variant="outline" size="lg">
              Calculate Your ROI
            </Button>
          </div>
            </div>
            
            {/* Hero Image */}
            <div className="order-1 lg:order-2">
              <Image
                src="/images/entrepreneur-working.webp"
                alt="Entrepreneur working on strategic business growth"
                width={600}
                height={600}
                className="object-cover w-full h-96 lg:h-full rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Entrepreneur Challenges */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Challenges Every Entrepreneur Faces"
          description="Common obstacles that prevent founders from reaching their full potential"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {entrepreneurChallenges.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <H3 className="mb-3 text-red-700">{item.challenge}</H3>
                  <Paragraph className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </Paragraph>
                </div>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6 mb-4">
                <div className="font-semibold text-green-800 mb-2">Our Solution:</div>
                <Paragraph className="text-gray-700 text-sm mb-3">
                  {item.solution}
                </Paragraph>
                
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <div className="font-semibold text-green-800 text-sm">Expected Impact:</div>
                  <div className="text-green-700 text-sm">{item.impact}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Services for Entrepreneurs */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Virtual Assistant Services Built for Entrepreneurs"
          description="Specialized support designed around the unique needs of founders and business builders"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {entrepreneurServices.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="text-3xl mb-4">
                {index === 0 && '👑'}
                {index === 1 && '⚙️'}
                {index === 2 && '🤝'}
                {index === 3 && '📱'}
                {index === 4 && '🔍'}
                {index === 5 && '📋'}
              </div>
              <H3 className="mb-3">{service.service}</H3>
              <Paragraph className="text-gray-600 text-sm mb-4">
                {service.description}
              </Paragraph>
              
              <div className="mb-4">
                <div className="font-semibold text-gray-800 text-sm mb-2">Key Tasks:</div>
                <ul className="space-y-1">
                  {service.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-primary-blue mt-0.5">•</span>
                      <span className="text-gray-600">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <div className="font-semibold text-blue-800 text-sm">Ideal For:</div>
                <div className="text-blue-700 text-sm">{service.ideal}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Growth Stage Solutions */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="VA Support for Every Stage of Growth"
          description="Scalable virtual assistant solutions that evolve with your business journey"
          centered
          theme="dark"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {growthStages.map((stage, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center mb-4">
                <div className="bg-accent-amber text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  {index + 1}
                </div>
                <H3 className="text-white text-lg">{stage.stage}</H3>
                <div className="text-blue-200 text-sm">{stage.focus}</div>
              </div>
              
              <div className="mb-4">
                <div className="font-semibold text-blue-200 text-sm mb-2">VA Support:</div>
                <ul className="space-y-1">
                  {stage.vaSupport.map((support, supportIndex) => (
                    <li key={supportIndex} className="text-blue-100 text-xs">
                      • {support}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="border-t border-white/20 pt-4">
                <div className="text-center">
                  <div className="text-accent-amber font-bold">{stage.hours}</div>
                  <div className="text-blue-200 text-xs mb-2">Weekly Hours</div>
                  <div className="text-white font-semibold text-sm">{stage.investment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Success Stories */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Entrepreneur Success Stories"
          description="Real results from founders who partnered with strategic virtual assistants"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {successStories.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <StatCard 
            value="25+" 
            label="Hours Saved Weekly"
            description="Average time reclaimed by entrepreneurs"
          />
          <StatCard 
            value="200%" 
            label="Focus Increase"
            description="More time for strategic work"
          />
          <StatCard 
            value="60%" 
            label="Cost Savings"
            description="vs hiring full-time employees"
          />
          <StatCard 
            value="3x" 
            label="Faster Growth"
            description="Accelerated business development"
          />
        </div>
      </Section>

      {/* Why Entrepreneurs Choose Us */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Why Entrepreneurs Choose Smartest Assistant"
            description="Understanding what makes the difference for founders and business builders"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-blue text-2xl">🧠</span>
              </div>
              <H3 className="mb-3">Entrepreneurial Mindset</H3>
              <Paragraph className="text-gray-600 text-sm">
                Our VAs understand startup culture, rapid change, and resource constraints. They think like entrepreneurs, not just employees.
              </Paragraph>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-blue text-2xl">⚡</span>
              </div>
              <H3 className="mb-3">Speed & Agility</H3>
              <Paragraph className="text-gray-600 text-sm">
                Quick onboarding, rapid task execution, and ability to pivot quickly as your business needs change and evolve.
              </Paragraph>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-blue text-2xl">📈</span>
              </div>
              <H3 className="mb-3">Growth-Oriented</H3>
              <Paragraph className="text-gray-600 text-sm">
                Focus on activities that drive growth and value creation, not just task completion. Your VA becomes a growth partner.
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Common questions from entrepreneurs about virtual assistant partnerships"
            centered
          />
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <H3 className="mb-3 text-primary-blue">{faq.question}</H3>
                <Paragraph className="text-gray-600">{faq.answer}</Paragraph>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready to Scale Like a Strategic Entrepreneur?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Stop letting operational tasks consume your entrepreneurial energy. Get a strategic VA who understands 
            your journey and helps you focus on building the business of your dreams.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Schedule Free Strategy Call
            </Button>
            <Button as="link" href="/resources/case-studies" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              See Entrepreneur Success Stories
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Entrepreneur-focused matching</div>
            <div>✅ Flexible scaling options</div>
            <div>✅ Start within 48 hours</div>
          </div>
        </div>
      </Section>

      {/* Related Solutions */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Explore Related Solutions"
            description="Specialized VA services for different business needs and growth stages"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/solutions/for-small-businesses" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏢</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">For Small Businesses</H3>
              <Paragraph className="text-gray-600">
                Established small businesses looking to optimize operations and improve efficiency with strategic VA support.
              </Paragraph>
            </Link>
            
            <Link href="/solutions/for-executives" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">👔</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">For Executives</H3>
              <Paragraph className="text-gray-600">
                C-suite executives and senior leaders who need high-level administrative and strategic support.
              </Paragraph>
            </Link>
            
            <Link href="/industries" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🎯</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Industry-Specific</H3>
              <Paragraph className="text-gray-600">
                Specialized virtual assistant services tailored for specific industries and their unique requirements.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}