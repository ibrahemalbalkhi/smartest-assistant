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
  title: 'Executive Virtual Assistants | C-Suite Support | Smartest Assistant',
  description: 'Premium virtual assistant services for executives, C-suite leaders, and senior managers. Strategic support that enhances leadership effectiveness.',
  keywords: 'executive virtual assistant, C-suite assistant, executive assistant services, senior executive support, leadership assistant',
  openGraph: {
    title: 'Executive Virtual Assistants | C-Suite Support',
    description: 'Premium virtual assistant services designed for executives who need strategic, high-level support.',
    url: 'https://smartestassistant.com/solutions/for-executives',
  }
}

const executiveChallenges = [
  {
    challenge: 'Information Overload & Prioritization',
    description: 'Executives receive hundreds of emails, requests, and information inputs daily, making prioritization difficult',
    solution: 'Strategic VA filters, prioritizes, and manages information flow, ensuring executives focus on high-impact decisions',
    impact: 'Executives spend 70% more time on strategic work vs administrative tasks'
  },
  {
    challenge: 'Complex Schedule Management',
    description: 'Multiple stakeholders, time zones, and priorities create scheduling conflicts and inefficiencies',
    solution: 'Professional calendar management with strategic time blocking and stakeholder coordination',
    impact: 'Reduce scheduling conflicts by 80% and optimize time allocation'
  },
  {
    challenge: 'Meeting Overload & Preparation',
    description: 'Back-to-back meetings with insufficient preparation time leads to reduced meeting effectiveness',
    solution: 'Meeting preparation, agenda management, follow-up coordination, and strategic meeting optimization',
    impact: '50% more productive meetings with better preparation and outcomes'
  },
  {
    challenge: 'Strategic Project Coordination',
    description: 'High-level initiatives require coordination across multiple teams and departments',
    solution: 'Project management support for strategic initiatives with stakeholder communication and progress tracking',
    impact: 'Strategic projects completed 40% faster with better stakeholder alignment'
  }
]

const executiveServices = [
  {
    service: 'Executive Calendar & Time Management',
    description: 'Strategic calendar management that protects your most valuable asset - time',
    capabilities: [
      'Strategic time blocking for deep work',
      'Multi-stakeholder meeting coordination',
      'Travel planning and logistics',
      'Calendar optimization and efficiency analysis'
    ],
    value: 'Reclaim 10-15 hours weekly for strategic work'
  },
  {
    service: 'Strategic Communication Management',
    description: 'Professional management of executive communications and correspondence',
    capabilities: [
      'Email prioritization and response drafting',
      'Stakeholder communication coordination',
      'Executive memo and report preparation',
      'Board and investor communication support'
    ],
    value: 'Maintain professional image while saving 8-12 hours weekly'
  },
  {
    service: 'Meeting & Event Coordination',
    description: 'End-to-end meeting management for maximum effectiveness',
    capabilities: [
      'Meeting preparation and agenda development',
      'Stakeholder coordination and logistics',
      'Follow-up and action item tracking',
      'Executive event planning and management'
    ],
    value: 'Increase meeting productivity by 50% with professional coordination'
  },
  {
    service: 'Research & Analysis Support',
    description: 'Strategic research and competitive intelligence for informed decision-making',
    capabilities: [
      'Market research and competitive analysis',
      'Industry trend monitoring and reporting',
      'Due diligence support for strategic decisions',
      'Executive briefing preparation'
    ],
    value: 'Better strategic decisions with comprehensive research support'
  },
  {
    service: 'Project & Initiative Management',
    description: 'Coordination and tracking of high-level strategic initiatives',
    capabilities: [
      'Cross-functional project coordination',
      'Strategic initiative tracking and reporting',
      'Stakeholder communication and updates',
      'Resource coordination and planning'
    ],
    value: 'Strategic projects delivered on time with full visibility'
  },
  {
    service: 'Executive Travel & Logistics',
    description: 'Comprehensive travel management and logistics coordination',
    capabilities: [
      'Complex multi-city travel planning',
      'Executive accommodation and transportation',
      'International travel and visa coordination',
      'Travel emergency support and changes'
    ],
    value: 'Stress-free travel with professional logistics management'
  }
]

const executiveLevels = [
  {
    level: 'Senior Manager/Director',
    focus: 'Operational Excellence',
    challenges: ['Managing multiple teams', 'Cross-department coordination', 'Reporting to C-suite'],
    support: [
      'Team communication coordination',
      'Report preparation and analysis',
      'Meeting scheduling and preparation',
      'Project status tracking'
    ],
    timeCommitment: '15-25 hours/week',
    investment: '$1,200-2,000/month'
  },
  {
    level: 'VP/SVP Level',
    focus: 'Strategic Coordination',
    challenges: ['Strategic initiative management', 'Stakeholder alignment', 'Resource optimization'],
    support: [
      'Strategic project coordination',
      'Executive communication management',
      'Board presentation preparation',
      'Cross-functional team coordination'
    ],
    timeCommitment: '25-35 hours/week',
    investment: '$2,000-2,800/month'
  },
  {
    level: 'C-Suite Executive',
    focus: 'Strategic Leadership',
    challenges: ['Board governance', 'Investor relations', 'Strategic decision-making'],
    support: [
      'Executive calendar optimization',
      'Board and investor communication',
      'Strategic research and analysis',
      'High-level stakeholder management'
    ],
    timeCommitment: '35-45 hours/week',
    investment: '$2,800-3,600/month'
  },
  {
    level: 'CEO/President',
    focus: 'Vision & Leadership',
    challenges: ['Company vision execution', 'External relationships', 'Strategic positioning'],
    support: [
      'Executive office management',
      'Strategic initiative oversight',
      'External relationship coordination',
      'Leadership schedule optimization'
    ],
    timeCommitment: '40+ hours/week',
    investment: '$3,200+ /month'
  }
]

const confidentialityProtocols = [
  {
    protocol: 'Information Security',
    measures: [
      'Comprehensive NDAs and confidentiality agreements',
      'Secure communication channels and data handling',
      'Background checks and security clearance verification',
      'Regular security training and protocol updates'
    ]
  },
  {
    protocol: 'Access Management',
    measures: [
      'Role-based access control to systems and information',
      'Multi-factor authentication for all accounts',
      'Regular access reviews and permission audits',
      'Secure credential management and rotation'
    ]
  },
  {
    protocol: 'Communication Security',
    measures: [
      'Encrypted communication for sensitive information',
      'Secure document sharing and collaboration platforms',
      'Professional communication protocols and standards',
      'Clear escalation procedures for sensitive matters'
    ]
  }
]

const successStories = [
  {
    id: 'executive-testimonial-1',
    name: 'Michael Thompson',
    role: 'Chief Executive Officer',
    company: 'TechVision Industries',
    content: 'My executive VA has transformed how I operate as a CEO. They manage my complex schedule, prepare me for every meeting, and coordinate our strategic initiatives. I\'ve reclaimed 20 hours per week that I now spend on vision and strategy instead of administrative coordination.',
    rating: 5,
    image: '/images/testimonial-michael-thompson.webp',
    results: {
      timeSaved: '20 hours/week',
      meetingEfficiency: '60% improvement',
      strategicFocus: '200% increase'
    }
  },
  {
    id: 'executive-testimonial-2',
    name: 'Patricia Rodriguez',
    role: 'Chief Marketing Officer',
    company: 'Global Innovations Corp',
    content: 'Having an executive VA who understands the CMO role is invaluable. They coordinate with all our agency partners, manage our board reporting, and keep our marketing initiatives on track. Our campaign execution has never been more efficient.',
    rating: 5,
    image: '/images/testimonial-patricia-rodriguez.webp',
    results: {
      campaignEfficiency: '45% improvement',
      stakeholderAlignment: '80% better',
      strategicTime: '+15 hours/week'
    }
  }
]

const faqs = [
  {
    question: 'How do you ensure confidentiality for executive-level information?',
    answer: 'We implement comprehensive confidentiality protocols including NDAs, security clearance, encrypted communication, and secure access controls. All executive VAs undergo extensive background checks and security training.'
  },
  {
    question: 'Can a virtual assistant handle board-level communications and materials?',
    answer: 'Yes, our executive VAs are experienced in board governance, investor relations, and C-suite communications. They can prepare board materials, coordinate meetings, and manage sensitive stakeholder communications.'
  },
  {
    question: 'How quickly can an executive VA understand our business and industry?',
    answer: 'Executive VAs are selected based on relevant industry experience and business acumen. Most can effectively support executive functions within 1-2 weeks, with full integration typically complete within 30 days.'
  },
  {
    question: 'What level of decision-making authority can I delegate to my executive VA?',
    answer: 'This depends on your comfort level and business requirements. Many executives delegate scheduling decisions, routine communications, and project coordination while maintaining authority over strategic and sensitive matters.'
  },
  {
    question: 'How do you match executive VAs with specific leadership styles and needs?',
    answer: 'We conduct detailed assessments of leadership style, industry requirements, communication preferences, and specific needs. Our matching process considers personality fit, experience relevance, and working style compatibility.'
  }
]

export default function ExecutivesPage() {
  return (
    <>
      <ServiceSchema 
        name="Executive Virtual Assistant Services"
        description="Premium virtual assistant services designed for executives, C-suite leaders, and senior managers who need strategic, high-level administrative support."
        url="https://smartestassistant.com/solutions/for-executives"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="relative max-w-7xl mx-auto">
          {/* Hero Image */}
          <div className="absolute left-0 top-0 w-1/2 h-full hidden lg:block">
            <Image
              src="/images/executive-ceo-portrait.webp"
              alt="Professional executive in modern office setting"
              width={600}
              height={600}
              className="object-cover h-full w-full rounded-r-3xl opacity-90"
              priority
            />
          </div>
          
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:ml-auto lg:pl-12">
          <div className="inline-flex items-center px-4 py-2 bg-purple-50 text-purple-700 text-sm font-semibold rounded-full mb-6">
            👔 For Executives & Leaders
          </div>
          
          <H2 className="mb-6">Executive Support That Elevates Leadership</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600">
            Strategic virtual assistants who understand executive demands and C-suite responsibilities. 
            Professional support that enhances your leadership effectiveness and maximizes your strategic impact.
          </Paragraph>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-8 border border-gray-200">
            <H3 className="mb-4 text-gray-800">The Executive Reality</H3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">67%</div>
                <div className="text-gray-600 text-sm">of executive time spent on administration vs strategic work</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">23</div>
                <div className="text-gray-600 text-sm">hours per week managing email and scheduling</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">40%</div>
                <div className="text-gray-600 text-sm">of meetings lack proper preparation and follow-up</div>
              </div>
            </div>
            <Paragraph className="text-gray-700 mt-6">
              <strong>The Solution:</strong> Strategic virtual assistants who handle the complexity so you can focus on leadership, 
              vision, and high-impact decision making.
            </Paragraph>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/schedule-a-call" variant="primary" size="lg">
              Get Executive Support
            </Button>
            <Button as="link" href="/resources/case-studies" variant="outline" size="lg">
              See Executive Results
            </Button>
          </div>
        </div>
        </div>
      </Section>

      {/* Executive Challenges */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Executive Leadership Challenges We Solve"
          description="Common obstacles that prevent leaders from maximizing their strategic impact"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {executiveChallenges.map((item, index) => (
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

      {/* Executive Services */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Premium Executive Services"
          description="Comprehensive virtual assistant services designed for executive-level needs and responsibilities"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executiveServices.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="text-3xl mb-4">
                {index === 0 && '⏰'}
                {index === 1 && '💼'}
                {index === 2 && '🤝'}
                {index === 3 && '📊'}
                {index === 4 && '🎯'}
                {index === 5 && '✈️'}
              </div>
              <H3 className="mb-3">{service.service}</H3>
              <Paragraph className="text-gray-600 text-sm mb-4">
                {service.description}
              </Paragraph>
              
              <div className="mb-4">
                <div className="font-semibold text-gray-800 text-sm mb-2">Key Capabilities:</div>
                <ul className="space-y-1">
                  {service.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-primary-blue mt-0.5">•</span>
                      <span className="text-gray-600">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                <div className="font-semibold text-purple-800 text-sm">Executive Value:</div>
                <div className="text-purple-700 text-sm">{service.value}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Executive Level Support */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Support Tailored to Your Executive Level"
          description="Scalable virtual assistant services that match your leadership responsibilities and scope"
          centered
          theme="dark"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {executiveLevels.map((level, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center mb-4">
                <div className="bg-accent-amber text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  {index + 1}
                </div>
                <H3 className="text-white text-lg">{level.level}</H3>
                <div className="text-blue-200 text-sm">{level.focus}</div>
              </div>
              
              <div className="mb-4">
                <div className="font-semibold text-blue-200 text-sm mb-2">Common Challenges:</div>
                <ul className="space-y-1">
                  {level.challenges.map((challenge, challengeIndex) => (
                    <li key={challengeIndex} className="text-blue-100 text-xs">
                      • {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <div className="font-semibold text-blue-200 text-sm mb-2">VA Support:</div>
                <ul className="space-y-1">
                  {level.support.map((support, supportIndex) => (
                    <li key={supportIndex} className="text-blue-100 text-xs">
                      • {support}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="border-t border-white/20 pt-4">
                <div className="text-center">
                  <div className="text-accent-amber font-bold text-sm">{level.timeCommitment}</div>
                  <div className="text-blue-200 text-xs mb-2">Weekly Hours</div>
                  <div className="text-white font-semibold text-sm">{level.investment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Confidentiality & Security */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Executive-Level Confidentiality & Security"
          description="Comprehensive security protocols to protect sensitive executive information and communications"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {confidentialityProtocols.map((protocol, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue text-2xl">
                    {index === 0 && '🔒'}
                    {index === 1 && '🔑'}
                    {index === 2 && '🛡️'}
                  </span>
                </div>
                <H3>{protocol.protocol}</H3>
              </div>
              
              <ul className="space-y-3">
                {protocol.measures.map((measure, measureIndex) => (
                  <li key={measureIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">{measure}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Success Stories */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Executive Success Stories"
          description="Real results from C-suite leaders who partnered with executive virtual assistants"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {successStories.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <StatCard 
            value="20+" 
            label="Hours Saved Weekly"
            description="Average time reclaimed by executives"
          />
          <StatCard 
            value="60%" 
            label="Meeting Efficiency"
            description="Improvement in meeting preparation"
          />
          <StatCard 
            value="80%" 
            label="Schedule Optimization"
            description="Reduction in scheduling conflicts"
          />
          <StatCard 
            value="200%" 
            label="Strategic Focus"
            description="Increase in strategic work time"
          />
        </div>
      </Section>

      {/* Executive Benefits */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Why Executives Choose Smartest Assistant"
            description="The unique advantages that make the difference for executive-level partnerships"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🎓</span>
              </div>
              <H3 className="mb-3">Executive Experience</H3>
              <Paragraph className="text-gray-600 text-sm">
                Our VAs have extensive experience supporting C-suite executives and understand the unique demands of executive leadership.
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🏆</span>
              </div>
              <H3 className="mb-3">Premium Service Standards</H3>
              <Paragraph className="text-gray-600 text-sm">
                White-glove service with dedicated account management, priority support, and executive-level quality standards.
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🔐</span>
              </div>
              <H3 className="mb-3">Confidentiality Assurance</H3>
              <Paragraph className="text-gray-600 text-sm">
                Comprehensive security protocols and confidentiality measures designed for executive-level sensitive information.
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Executive FAQ"
            description="Common questions from executives about premium virtual assistant services"
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
          <H2 className="mb-6 text-white">Elevate Your Executive Effectiveness</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Stop letting administrative complexity limit your leadership impact. Get premium virtual assistant support 
            that matches your executive standards and maximizes your strategic focus.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Schedule Executive Consultation
            </Button>
            <Button as="link" href="/resources/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Executive ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Premium executive matching</div>
            <div>✅ Confidentiality guaranteed</div>
            <div>✅ White-glove service standards</div>
          </div>
        </div>
      </Section>

      {/* Related Solutions */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Explore Related Solutions"
            description="Specialized VA services for different business contexts and professional needs"
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
            
            <Link href="/solutions/for-small-businesses" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏢</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">For Small Businesses</H3>
              <Paragraph className="text-gray-600">
                Cost-effective virtual assistant solutions designed for small business owners and established companies.
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