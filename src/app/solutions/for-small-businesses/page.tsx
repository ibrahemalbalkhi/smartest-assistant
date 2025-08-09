import { Metadata } from 'next'
import Link from 'next/link'
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
  title: 'Virtual Assistants for Small Businesses | Scale Without Hiring | Smartest Assistant',
  description: 'Virtual assistant services designed for small businesses. Professional support to help you grow efficiently without the overhead of full-time employees.',
  keywords: 'virtual assistant for small business, small business VA, SMB virtual assistant, small business support, business efficiency',
  openGraph: {
    title: 'Virtual Assistants for Small Businesses | Scale Without Hiring',
    description: 'Professional virtual assistant services designed to help small businesses grow efficiently and cost-effectively.',
    url: 'https://smartestassistant.com/solutions/for-small-businesses',
  }
}

const smallBusinessChallenges = [
  {
    challenge: 'Limited Budget for Full-Time Staff',
    description: 'Need professional support but can\'t justify the cost and overhead of full-time employees',
    solution: 'Flexible VA services that provide professional support at a fraction of the cost of hiring employees',
    impact: 'Professional expertise at 50-70% less cost than full-time hires'
  },
  {
    challenge: 'Inconsistent Workload',
    description: 'Business demands fluctuate, making it difficult to maintain consistent staffing levels',
    solution: 'Scalable VA support that adjusts with your business needs - more during busy periods, less during slower times',
    impact: 'Pay only for support you need, when you need it'
  },
  {
    challenge: 'Jack-of-All-Trades Requirement',
    description: 'Small teams need people who can handle diverse tasks across different business functions',
    solution: 'Multi-skilled VAs trained in various business functions who can adapt to changing priorities',
    impact: 'One VA can replace multiple specialized hires'
  },
  {
    challenge: 'Growth Without Infrastructure',
    description: 'Want to grow but lack the systems and processes to handle increased business volume',
    solution: 'VAs help build scalable processes and systems while handling increased operational demands',
    impact: 'Smooth growth without operational bottlenecks'
  }
]

const businessTypeServices = [
  {
    businessType: 'Professional Services',
    examples: 'Consulting, Accounting, Legal, Marketing Agencies',
    services: [
      'Client communication and scheduling',
      'Proposal and contract management',
      'Project coordination and follow-up',
      'Research and analysis support',
      'Administrative and billing tasks'
    ],
    primaryBenefit: 'More billable hours, better client service'
  },
  {
    businessType: 'E-commerce & Retail',
    examples: 'Online stores, Physical retail, Product businesses',
    services: [
      'Inventory management and tracking',
      'Customer service and support',
      'Order processing and fulfillment',
      'Product research and listings',
      'Social media and marketing'
    ],
    primaryBenefit: 'Higher sales volume, improved customer satisfaction'
  },
  {
    businessType: 'Healthcare & Wellness',
    examples: 'Private practices, Clinics, Wellness centers',
    services: [
      'Patient scheduling and communication',
      'Insurance verification and billing',
      'Medical record organization',
      'Appointment reminders and follow-ups',
      'Administrative compliance tasks'
    ],
    primaryBenefit: 'More patient focus, reduced administrative burden'
  },
  {
    businessType: 'Real Estate',
    examples: 'Agents, Brokers, Property management',
    services: [
      'Lead generation and qualification',
      'Transaction coordination',
      'Market research and analysis',
      'Client communication and follow-up',
      'Marketing and listing management'
    ],
    primaryBenefit: 'More deals closed, better client relationships'
  },
  {
    businessType: 'Home Services',
    examples: 'Contractors, Repair services, Maintenance',
    services: [
      'Appointment scheduling and dispatching',
      'Customer inquiry management',
      'Quote and invoice preparation',
      'Follow-up and quality assurance',
      'Online reputation management'
    ],
    primaryBenefit: 'Higher booking rates, improved efficiency'
  },
  {
    businessType: 'Restaurants & Hospitality',
    examples: 'Restaurants, Hotels, Event venues',
    services: [
      'Reservation management',
      'Event coordination and planning',
      'Social media and marketing',
      'Vendor coordination',
      'Customer feedback management'
    ],
    primaryBenefit: 'Better guest experience, streamlined operations'
  }
]

const implementationPlan = [
  {
    phase: 'Assessment & Planning',
    duration: '1 week',
    activities: [
      'Business needs analysis and task audit',
      'Priority identification and ROI calculation',
      'VA requirements definition',
      'Integration planning with existing systems'
    ],
    outcome: 'Clear roadmap for VA implementation'
  },
  {
    phase: 'VA Matching & Onboarding',
    duration: '1 week',
    activities: [
      'VA selection based on business needs',
      'System access and tool training',
      'Process documentation and training',
      'Initial task assignment and testing'
    ],
    outcome: 'VA ready to handle core business tasks'
  },
  {
    phase: 'Initial Implementation',
    duration: '2 weeks',
    activities: [
      'Start with 2-3 high-impact tasks',
      'Establish communication and reporting routines',
      'Monitor quality and make adjustments',
      'Gather feedback and optimize processes'
    ],
    outcome: 'Proven value and smooth operations'
  },
  {
    phase: 'Expansion & Optimization',
    duration: 'Ongoing',
    activities: [
      'Gradually expand VA responsibilities',
      'Implement process improvements',
      'Scale hours based on business needs',
      'Explore additional VA services'
    ],
    outcome: 'Fully optimized business operations'
  }
]

const costComparison = [
  {
    scenario: 'Full-Time Administrative Assistant',
    monthlyCost: '$4,500 - $6,000',
    includes: ['Salary', 'Benefits (30%)', 'Taxes', 'Office space', 'Equipment', 'Training time'],
    limitations: ['40 hours/week only', 'Limited skill range', 'Vacation/sick days', 'Management overhead']
  },
  {
    scenario: 'Smart Virtual Assistant',
    monthlyCost: '$1,800 - $3,200',
    includes: ['Professional VA service', 'Multiple skill sets', 'Flexible hours', 'No overhead costs', 'Managed service'],
    limitations: ['Remote only', 'Requires clear communication']
  }
]

const successMetrics = [
  {
    category: 'Time Savings',
    metrics: [
      { metric: 'Administrative time reduced', value: '15-25 hours/week' },
      { metric: 'Response time improved', value: '60% faster' },
      { metric: 'Task completion speed', value: '40% increase' }
    ]
  },
  {
    category: 'Cost Benefits',
    metrics: [
      { metric: 'Cost vs full-time hire', value: '50-70% savings' },
      { metric: 'ROI timeline', value: '30-60 days' },
      { metric: 'Monthly cost predictability', value: '100% transparent' }
    ]
  },
  {
    category: 'Business Growth',
    metrics: [
      { metric: 'Capacity increase', value: '30-50%' },
      { metric: 'Customer satisfaction', value: '25% improvement' },
      { metric: 'Revenue focus time', value: '+20 hours/week' }
    ]
  }
]

const testimonials = [
  {
    id: 'small-business-testimonial-1',
    name: 'Jennifer Walsh',
    role: 'Owner',
    company: 'Walsh Marketing Solutions',
    content: 'Our VA handles all our client communication, project coordination, and research tasks. This freed me up to focus on business development and strategy. We\'ve grown from 5 to 12 clients in six months without any additional overhead.',
    rating: 5,
    image: '/images/testimonial-jennifer-walsh.webp',
    location: 'Denver, CO'
  },
  {
    id: 'small-business-testimonial-2',
    name: 'Robert Kim',
    role: 'Owner',
    company: 'Elite Home Repairs',
    content: 'My VA manages all our scheduling, customer follow-ups, and quote preparation. Our booking rate increased by 40% because we never miss a lead and always follow up professionally. Best investment I\'ve made in the business.',
    rating: 5,
    image: '/images/testimonial-robert-kim.webp',
    location: 'Phoenix, AZ'
  }
]

const faqs = [
  {
    question: 'How much does a virtual assistant cost for a small business?',
    answer: 'Costs typically range from $1,800-$3,200 per month depending on hours and complexity of tasks. This is 50-70% less expensive than hiring a full-time employee when you factor in salary, benefits, and overhead costs.'
  },
  {
    question: 'What tasks can a VA handle for my small business?',
    answer: 'VAs can handle most administrative, customer service, marketing, and operational tasks. Common tasks include email management, scheduling, customer inquiries, data entry, social media, research, and basic bookkeeping support.'
  },
  {
    question: 'How quickly can I see results from hiring a VA?',
    answer: 'Most small businesses see immediate time savings within the first week and measurable business impact within 30 days. The key is starting with high-impact tasks that provide quick wins.'
  },
  {
    question: 'Can I scale up or down based on my business needs?',
    answer: 'Absolutely. Our flexible model allows you to adjust hours, tasks, and support level based on seasonal fluctuations, business growth, or changing priorities. No long-term contracts required.'
  },
  {
    question: 'How do you ensure quality when working remotely?',
    answer: 'We provide comprehensive training, regular quality checks, performance monitoring, and direct communication channels. You\'ll have full visibility into work progress and can provide feedback anytime.'
  }
]

export default function SmallBusinessesPage() {
  return (
    <>
      <ServiceSchema 
        name="Virtual Assistant Services for Small Businesses"
        description="Professional virtual assistant services designed specifically for small businesses looking to scale efficiently without the overhead of full-time employees."
        url="https://smartestassistant.com/solutions/for-small-businesses"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 text-sm font-semibold rounded-full mb-6">
            🏢 For Small Businesses
          </div>
          
          <H2 className="mb-6">Scale Your Small Business Without the Overhead</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600">
            Get professional support that grows with your business. Virtual assistants who understand small business 
            needs and provide flexible, cost-effective solutions to help you compete and grow.
          </Paragraph>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-8 border border-blue-200">
            <H3 className="mb-4 text-blue-800">The Small Business Advantage</H3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <div className="font-semibold text-blue-800 mb-3">Traditional Hiring Challenges:</div>
                <ul className="text-blue-700 text-sm space-y-2">
                  <li>• High cost of full-time employees</li>
                  <li>• Benefits and overhead expenses</li>
                  <li>• Limited skill sets per hire</li>
                  <li>• Difficulty finding qualified candidates</li>
                  <li>• Management and training time</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-blue-800 mb-3">VA Solution Benefits:</div>
                <ul className="text-blue-700 text-sm space-y-2">
                  <li>• 50-70% cost savings vs employees</li>
                  <li>• No benefits or overhead costs</li>
                  <li>• Multi-skilled professionals</li>
                  <li>• Pre-vetted, experienced talent</li>
                  <li>• Fully managed service</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/schedule-a-call" variant="primary" size="lg">
              Start Scaling Today
            </Button>
            <Button as="link" href="/resources/roi-calculator" variant="outline" size="lg">
              Calculate Your Savings
            </Button>
          </div>
        </div>
      </Section>

      {/* Small Business Challenges */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Common Small Business Challenges We Solve"
          description="Strategic solutions for the unique obstacles small businesses face when trying to grow"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {smallBusinessChallenges.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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

      {/* Business Type Services */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Tailored Support by Business Type"
          description="Specialized virtual assistant services designed for different types of small businesses"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessTypeServices.map((business, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <H3 className="mb-2">{business.businessType}</H3>
              <Paragraph className="text-gray-500 text-sm mb-4">{business.examples}</Paragraph>
              
              <div className="mb-6">
                <div className="font-semibold text-gray-800 mb-3">Common VA Tasks:</div>
                <ul className="space-y-2">
                  {business.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-primary-blue mt-0.5">•</span>
                      <span className="text-gray-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="font-semibold text-blue-800 text-sm">Primary Benefit:</div>
                <div className="text-blue-700 text-sm">{business.primaryBenefit}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Cost Comparison */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="The True Cost of Professional Support"
          description="Transparent comparison between traditional hiring and virtual assistant services"
          centered
          theme="dark"
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {costComparison.map((scenario, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <H3 className="text-white mb-2">{scenario.scenario}</H3>
                <div className="text-accent-amber font-bold text-3xl">{scenario.monthlyCost}</div>
                <div className="text-blue-200 text-sm">per month</div>
              </div>
              
              <div className="mb-6">
                <div className="font-semibold text-blue-200 mb-3">What's Included:</div>
                <ul className="space-y-2">
                  {scenario.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span className="text-blue-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="font-semibold text-blue-200 mb-3">Considerations:</div>
                <ul className="space-y-2">
                  {scenario.limitations.map((limitation, limitIndex) => (
                    <li key={limitIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-yellow-400 mt-0.5">•</span>
                      <span className="text-blue-100">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Implementation Plan */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Your 30-Day Implementation Plan"
          description="Proven process to successfully integrate VA support into your small business"
          centered
        />
        
        <div className="space-y-8">
          {implementationPlan.map((phase, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-primary-blue text-white w-16 h-16 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <H3 className="mb-3">{phase.phase}</H3>
                      <div className="text-sm text-gray-500 mb-4">
                        ⏱️ Duration: {phase.duration}
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <div className="font-semibold text-green-800 text-sm mb-2">Outcome:</div>
                        <div className="text-green-700 text-sm">{phase.outcome}</div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <div className="font-semibold text-gray-800 mb-3">Key Activities:</div>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-start gap-3">
                            <span className="text-primary-blue mt-1">•</span>
                            <span className="text-gray-600 text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Success Metrics */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Measurable Results for Small Businesses"
          description="Key performance indicators showing the impact of virtual assistant partnerships"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {successMetrics.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <H3 className="mb-6 text-center text-primary-blue">{category.category}</H3>
              <div className="space-y-4">
                {category.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">{metric.metric}</span>
                      <span className="font-bold text-green-600">{metric.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Success Stories */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Small Business Success Stories"
          description="Real results from small businesses that partnered with virtual assistants"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <StatCard 
            value="60%" 
            label="Cost Savings"
            description="vs full-time employee"
          />
          <StatCard 
            value="30%" 
            label="Capacity Increase"
            description="Handle more business"
          />
          <StatCard 
            value="25%" 
            label="Better Service"
            description="Customer satisfaction improvement"
          />
          <StatCard 
            value="45 days" 
            label="ROI Timeline"
            description="Average payback period"
          />
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Small Business FAQ"
            description="Common questions from small business owners about virtual assistant services"
            centered
          />
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
          <H2 className="mb-6 text-white">Ready to Scale Your Small Business Smart?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Stop letting administrative tasks limit your growth potential. Get professional support that scales 
            with your business needs and budget. Start your transformation today.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Book Free Business Assessment
            </Button>
            <Button as="link" href="/resources/case-studies" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              See Small Business Results
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Flexible pricing options</div>
            <div>✅ No long-term contracts</div>
            <div>✅ 30-day satisfaction guarantee</div>
          </div>
        </div>
      </Section>

      {/* Related Solutions */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Explore Related Solutions"
            description="Specialized VA services for different business needs and professional roles"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/solutions/for-entrepreneurs" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🚀</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">For Entrepreneurs</H3>
              <Paragraph className="text-gray-600">
                Strategic support for startup founders and entrepreneurs focused on rapid growth and scaling.
              </Paragraph>
            </Link>
            
            <Link href="/solutions/for-executives" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">👔</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">For Executives</H3>
              <Paragraph className="text-gray-600">
                Executive-level support for C-suite leaders and senior managers who need high-level assistance.
              </Paragraph>
            </Link>
            
            <Link href="/industries" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏭</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">By Industry</H3>
              <Paragraph className="text-gray-600">
                Industry-specific virtual assistant services tailored for healthcare, legal, real estate, and more.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}