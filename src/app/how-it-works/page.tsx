import { Metadata } from 'next'
import Image from 'next/image'
import { 
  Section, 
  SectionHeader,
  H2, 
  H3, 
  Paragraph, 
  Button,
  StatCard
} from '@/components/ui'
import { ServiceSchema, FAQSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'How It Works | Virtual Assistant Process | Smartest Assistant',
  description: 'Learn how our virtual assistant matching process works. From consultation to onboarding, see how we match you with the perfect smart VA in 48 hours.',
  keywords: 'how virtual assistant works, VA process, virtual assistant onboarding, smart VA matching process',
  openGraph: {
    title: 'How It Works | Virtual Assistant Process',
    description: 'Discover our simple 4-step process to get matched with your perfect virtual assistant in just 48 hours.',
    url: 'https://smartestassistant.com/how-it-works',
  }
}

const processSteps = [
  {
    step: '1',
    title: 'Free Consultation',
    duration: '15 minutes',
    description: 'We start with a brief consultation to understand your business needs, pain points, and goals.',
    details: [
      'Discuss your current challenges and time-consuming tasks',
      'Identify your priorities and delegation preferences', 
      'Understand your business culture and communication style',
      'Define success metrics and expectations'
    ],
    icon: '🗣️',
    timeline: 'Day 1'
  },
  {
    step: '2',
    title: 'Smart VA Matching',
    duration: '24-48 hours',
    description: 'Our expert team matches you with 2-3 pre-vetted virtual assistants based on your specific requirements.',
    details: [
      'Review 500+ skilled VAs in our network',
      'Match based on skills, experience, and personality fit',
      'Consider industry expertise and tool proficiency',
      'Verify availability and time zone alignment'
    ],
    icon: '🎯',
    timeline: 'Day 2'
  },
  {
    step: '3',
    title: 'Meet Your VA Options',
    duration: '30 minutes',
    description: 'Interview your matched virtual assistants to find the perfect fit for your business and working style.',
    details: [
      'Brief introduction calls with each candidate',
      'Discuss their background and expertise',
      'Test communication style and cultural fit',
      'Ask questions about your specific needs'
    ],
    icon: '👋',
    timeline: 'Day 3'
  },
  {
    step: '4',
    title: 'Onboarding & Launch',
    duration: '2-3 days',
    description: 'Once you choose your VA, we handle the complete onboarding process and get you started immediately.',
    details: [
      'Set up communication tools and project management systems',
      'Share relevant passwords, documents, and processes',
      'Establish workflows and reporting preferences',
      'Begin with small tasks to build trust and momentum'
    ],
    icon: '🚀',
    timeline: 'Day 4-5'
  }
]

const whatMakesUsDifferent = [
  {
    title: 'Rigorous Vetting Process',
    description: 'Only 3% of applicants make it through our comprehensive screening, skills testing, and background checks.',
    stats: '3% acceptance rate',
    icon: '🔍'
  },
  {
    title: 'Smart Matching Algorithm',
    description: 'Our proprietary matching system considers 50+ factors including skills, personality, and work style compatibility.',
    stats: '97% satisfaction rate',
    icon: '🧠'
  },
  {
    title: 'Ongoing Support',
    description: 'Dedicated account managers monitor your partnership and provide ongoing optimization and support.',
    stats: '24/7 backup available',
    icon: '🤝'
  },
  {
    title: 'Continuous Training',
    description: 'All VAs receive ongoing training in new tools, technologies, and best practices to stay ahead of the curve.',
    stats: '40+ hours monthly',
    icon: '📚'
  }
]

const onboardingDetails = [
  {
    phase: 'Week 1: Foundation',
    focus: 'Getting to know your business and establishing basic workflows',
    activities: [
      'Complete business overview and process documentation',
      'Set up all necessary tools and access permissions',
      'Begin with simple, low-risk tasks to build confidence',
      'Establish communication rhythms and reporting cadence'
    ]
  },
  {
    phase: 'Week 2-3: Expansion',
    focus: 'Taking on more complex tasks and optimizing processes',
    activities: [
      'Graduate to more strategic and complex assignments',
      'Identify process improvements and automation opportunities',
      'Develop custom workflows and standard operating procedures',
      'Begin proactive task management and anticipatory support'
    ]
  },
  {
    phase: 'Week 4+: Partnership',
    focus: 'Full strategic partnership and autonomous operation',
    activities: [
      'Operate with minimal supervision and full autonomy',
      'Proactively identify and solve problems before they escalate',
      'Suggest strategic improvements and business optimizations',
      'Serve as trusted advisor and strategic business partner'
    ]
  }
]

const qualityAssurance = [
  {
    metric: 'Regular Check-ins',
    description: 'Weekly performance reviews and monthly strategy sessions to ensure optimal partnership',
    frequency: 'Weekly'
  },
  {
    metric: 'Performance Monitoring',
    description: 'Continuous tracking of task completion, quality scores, and client satisfaction metrics',
    frequency: 'Daily'
  },
  {
    metric: 'Backup Support',
    description: 'Every client has access to backup VAs for coverage during vacations or peak periods',
    frequency: 'Always Available'
  },
  {
    metric: 'Account Management',
    description: 'Dedicated account managers ensure your VA partnership continues to evolve and improve',
    frequency: 'Monthly'
  }
]

const faqs = [
  {
    question: 'How quickly can I get started with a virtual assistant?',
    answer: 'Most clients are matched and working with their VA within 48-72 hours of the initial consultation. Our streamlined process and pre-vetted talent pool allows for rapid deployment.'
  },
  {
    question: 'What if the first VA isn\'t a perfect fit?',
    answer: 'While our matching accuracy is over 95%, we offer free replacements within the first 30 days. We\'ll quickly identify a better match and handle the transition seamlessly.'
  },
  {
    question: 'How do you ensure quality and accountability?',
    answer: 'We use a combination of regular check-ins, performance metrics, client feedback, and ongoing training. Every VA has performance goals and receives continuous coaching.'
  },
  {
    question: 'What happens during the consultation?',
    answer: 'The consultation is a 15-20 minute conversation where we learn about your business, current challenges, ideal working style, and specific tasks you want to delegate. It\'s completely free with no commitment.'
  },
  {
    question: 'Can I work with multiple VAs or switch between them?',
    answer: 'Yes, many clients work with specialized VAs for different functions, or scale up to a team as they grow. We can also arrange coverage and backup VAs as needed.'
  }
]

export default function HowItWorksPage() {
  return (
    <>
      <ServiceSchema 
        name="How Virtual Assistant Matching Works"
        description="Learn about our comprehensive process for matching businesses with perfect virtual assistants in 48 hours."
        url="https://smartestassistant.com/how-it-works"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-primary-blue text-sm font-semibold rounded-full mb-6">
            ⚡ Simple Process
          </div>
          
          <H2 className="mb-6">From Consultation to Partnership in 48 Hours</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600">
            Our proven 4-step process takes you from overwhelmed entrepreneur to supported business owner 
            in less than a week. Here's exactly how it works.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/schedule-a-call" variant="primary" size="lg">
              Start Your Journey Today
            </Button>
            <Button as="link" href="#process" variant="outline" size="lg">
              See The Process
            </Button>
          </div>
        </div>
      </Section>

      {/* Process Steps */}
      <Section background="gray" spacing="xl" id="process">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Our Proven 4-Step Process"
            description="From consultation to partnership, here's how we get you the perfect virtual assistant"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg relative">
                {/* Step Number */}
                <div className="absolute -top-4 left-8">
                  <div className="bg-primary-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                </div>
                
                {/* Timeline Badge */}
                <div className="absolute -top-4 right-8">
                  <div className="bg-accent-amber text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {step.timeline}
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <H3 className="text-xl mb-2">{step.title}</H3>
                  <div className="text-sm text-gray-500 font-medium">{step.duration}</div>
                </div>
                
                <Paragraph className="text-gray-600 text-sm mb-6 text-center">
                  {step.description}
                </Paragraph>
                
                <div>
                  <div className="font-semibold text-gray-800 text-sm mb-3">What We Do:</div>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <span className="text-primary-blue mt-1 flex-shrink-0">•</span>
                        <span className="text-gray-600 text-xs">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What Makes Us Different */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="What Makes Our Process Different"
            description="Why 97% of our clients are satisfied with their VA match on the first try"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {whatMakesUsDifferent.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-primary-blue/10 rounded-xl p-4 flex-shrink-0">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div>
                    <H3 className="mb-3">{item.title}</H3>
                    <Paragraph className="text-gray-600 text-sm mb-4">
                      {item.description}
                    </Paragraph>
                    <div className="bg-primary-blue/10 rounded-lg p-3 inline-block">
                      <div className="text-primary-blue font-bold text-sm">{item.stats}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Onboarding Timeline */}
      <Section background="primary" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Your First Month: Building the Partnership"
            description="How we transition you from introduction to full strategic partnership"
            centered
            theme="dark"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {onboardingDetails.map((phase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="bg-accent-amber text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {index + 1}
                  </div>
                  <H3 className="text-white mb-2">{phase.phase}</H3>
                  <div className="text-blue-200 text-sm">{phase.focus}</div>
                </div>
                
                <div>
                  <div className="font-semibold text-blue-200 text-sm mb-3">Key Activities:</div>
                  <ul className="space-y-3">
                    {phase.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start gap-3">
                        <span className="text-accent-amber mt-1 flex-shrink-0">✓</span>
                        <span className="text-blue-100 text-sm">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Quality Assurance */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Continuous Quality & Support"
            description="How we ensure your VA partnership continues to deliver exceptional value"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {qualityAssurance.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <H3 className="mb-3">{item.metric}</H3>
                    <Paragraph className="text-gray-600 text-sm">
                      {item.description}
                    </Paragraph>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold flex-shrink-0 ml-4">
                    {item.frequency}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Statistics */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Our Track Record"
            description="Numbers that demonstrate our commitment to exceptional virtual assistant partnerships"
            centered
          />
          
          <div className="grid md:grid-cols-4 gap-8">
            <StatCard 
              value="48hrs" 
              label="Average Matching Time"
              description="From consultation to working partnership"
            />
            <StatCard 
              value="97%" 
              label="First-Match Success Rate"
              description="Clients satisfied with initial VA match"
            />
            <StatCard 
              value="3%" 
              label="VA Acceptance Rate"
              description="Only the best make it through our screening"
            />
            <StatCard 
              value="24/7" 
              label="Support Availability"
              description="Account management and backup coverage"
            />
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Common questions about our virtual assistant matching and onboarding process"
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
          <H2 className="mb-6 text-white">Ready to Experience the Process?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Join thousands of successful entrepreneurs who've transformed their businesses with strategic 
            virtual assistant partnerships. Start with a free consultation today.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Book Free Consultation
            </Button>
            <Button as="link" href="/pricing" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              View Pricing Plans
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free consultation</div>
            <div>✅ No commitment required</div>
            <div>✅ 48-hour matching</div>
          </div>
        </div>
      </Section>
    </>
  )
}