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
  TestimonialCard,
  FeatureCard
} from '@/components/ui'
import FAQAccordion from '@/components/ui/FAQ'
import { ServiceHero } from '@/components/sections'
import { ServiceSchema, FAQSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Executive Assistant Services | Strategic C-Suite Support | Smartest Assistant',
  description: 'Professional executive assistant services from smart VAs who think ahead. Complex calendar management, meeting prep, travel coordination, and strategic support.',
  keywords: 'executive assistant services, remote executive assistant, virtual executive assistant, C-suite assistant services, executive admin support, personal assistant services',
  openGraph: {
    title: 'Executive Assistant Services | Strategic C-Suite Support',
    description: 'Professional executive assistant services from smart VAs who think ahead. Strategic support for busy executives and entrepreneurs.',
    url: 'https://smartestassistant.com/services/executive-assistant',
  }
}

const serviceFeatures = [
  'Complex calendar management and optimization',
  'Meeting preparation, agenda creation, and notes',
  'Comprehensive travel planning and coordination',
  'Expense management and reporting',
  'Board meeting preparation and materials',
  'Stakeholder communication and follow-up',
  'Executive briefing preparation',
  'Event planning and coordination',
  'Document management and organization',
  'CRM and contact database management',
  'Personal task management',
  'Strategic project coordination'
]

const executiveProcess = [
  {
    step: 1,
    title: 'Executive Profile Creation',
    description: 'We conduct a detailed assessment of your role, responsibilities, preferences, and business priorities to create a comprehensive executive profile.'
  },
  {
    step: 2,
    title: 'Strategic System Setup',
    description: 'Your EA establishes optimized workflows, calendar structures, communication protocols, and task management systems tailored to your executive needs.'
  },
  {
    step: 3,
    title: 'Seamless Integration',
    description: 'Your EA begins managing your daily operations, anticipating needs, handling complex tasks, and ensuring everything runs smoothly behind the scenes.'
  }
]

const faqs = [
  {
    question: 'How do executive VAs handle confidential and sensitive information?',
    answer: 'Our executive VAs undergo extensive background checks and sign comprehensive NDAs. They\'re trained in corporate confidentiality protocols and use enterprise-grade security measures. All communications are encrypted and access is limited on a need-to-know basis.'
  },
  {
    question: 'Can your EAs work across different time zones for global executives?',
    answer: 'Absolutely. Our executive assistants are available across multiple time zones and can coordinate international travel, meetings, and communications. We match you with EAs whose schedules align with your business hours and global requirements.'
  },
  {
    question: 'What level of authority can I delegate to my executive assistant?',
    answer: 'We work with you to establish clear delegation parameters. EAs can handle routine decisions, scheduling, communications, and administrative tasks independently. For strategic or sensitive matters, they escalate appropriately based on your guidelines.'
  },
  {
    question: 'How do you ensure continuity if my regular EA is unavailable?',
    answer: 'Every executive client has backup coverage built-in. We maintain detailed handover documents and ensure secondary EAs are familiar with your preferences and ongoing projects. This guarantees uninterrupted support.'
  },
  {
    question: 'Do your EAs integrate with existing corporate systems and teams?',
    answer: 'Yes, our executive assistants seamlessly integrate with your existing tools (CRM, project management, communication platforms) and work collaboratively with your internal team while maintaining clear role boundaries.'
  }
]

const testimonial = {
  id: 'executive-assistant-testimonial-1',
  name: 'Marcus Thompson',
  role: 'CEO',
  company: 'InnovateCore Technologies',
  content: 'My Smartest Assistant EA doesn\'t just manage my calendar - they anticipate conflicts, prepare briefing materials, and coordinate complex international travel seamlessly. It\'s like having a strategic partner who handles everything so I can focus on big decisions.',
  rating: 5,
  location: 'New York, NY'
}

export default function ExecutiveAssistantPage() {
  return (
    <>
      <ServiceSchema 
        name="Executive Assistant Services"
        description="Strategic executive assistant services from smart VAs who anticipate needs and manage complex administrative tasks with discretion and professionalism."
        url="https://smartestassistant.com/services/executive-assistant"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <ServiceHero
        title="Executive Assistant Services by Smart Virtual Assistants"
        subtitle="STRATEGIC C-SUITE SUPPORT"
        description="Get high-level administrative support from VAs who think ahead, manage complexity, and handle sensitive tasks with complete discretion and professionalism."
        features={[
          'Complex calendar and project management',
          'Strategic meeting and travel coordination',
          'Confidential document and communication handling',
          'Proactive problem-solving and decision support'
        ]}
      />

      {/* The Challenge */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-red-600">Executive Overwhelm Is Killing Your Strategic Impact</H2>
            <Paragraph size="lg">
              You're spending 60% of your time on administrative tasks instead of strategic leadership. 
              Complex scheduling, meeting prep, and operational details are drowning your ability to focus 
              on what truly moves the business forward.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">⚡ The Executive Trap</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• Managing complex calendars with multiple stakeholders</li>
                <li>• Preparing for back-to-back meetings without support</li>
                <li>• Coordinating international travel and logistics</li>
                <li>• Handling sensitive communications and documents</li>
                <li>• Juggling strategic projects with daily operations</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">💼 The Strategic Cost</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• $500K+ annual opportunity cost of misallocated time</li>
                <li>• Delayed strategic initiatives due to admin overload</li>
                <li>• Poor meeting outcomes from inadequate preparation</li>
                <li>• Burnout from managing both strategy and execution</li>
                <li>• Reduced leadership effectiveness and decision quality</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Solution */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-green-600">Executive Support That Actually Thinks Strategically</H2>
            <Paragraph size="lg">
              Our executive VAs don't just follow instructions – they understand the executive mindset, 
              anticipate needs, and proactively manage complexity so you can focus on leadership and growth.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              title="Strategic Thinking & Anticipation"
              description="Understand context, identify potential issues before they arise, and prepare solutions proactively"
              icon={<span className="text-3xl">🧠</span>}
            />
            
            <FeatureCard
              title="Executive-Level Discretion"
              description="Handle sensitive information, communications, and decisions with complete confidentiality and professionalism"
              icon={<span className="text-3xl">🔒</span>}
            />
            
            <FeatureCard
              title="Complex Project Coordination"
              description="Manage multi-stakeholder initiatives, coordinate across departments, and ensure seamless execution"
              icon={<span className="text-3xl">⚙️</span>}
            />
          </div>
          
          {/* Comparison */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <H3 className="text-center mb-8">Traditional EAs vs. Smart Executive VAs</H3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-red-600 mb-4">❌ Traditional Executive Assistants</h4>
                <ul className="space-y-3 text-gray-600">
                  <li>• Wait for instructions on every task</li>
                  <li>• Basic calendar management without optimization</li>
                  <li>• Limited ability to handle complex situations</li>
                  <li>• Require constant oversight and direction</li>
                  <li>• Focus only on immediate tactical tasks</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-600 mb-4">✅ Smartest Assistant Executive VAs</h4>
                <ul className="space-y-3 text-gray-600">
                  <li>• Anticipate needs and prepare solutions proactively</li>
                  <li>• Strategic calendar optimization and conflict resolution</li>
                  <li>• Navigate complex situations with sound judgment</li>
                  <li>• Work autonomously with minimal executive oversight</li>
                  <li>• Support both tactical execution and strategic initiatives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section spacing="lg">
        <SectionHeader
          title="Complete Executive Support Package"
          description="Everything a busy executive needs to maximize strategic impact and minimize operational friction"
        />
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <H3 className="mb-6">Administrative Excellence</H3>
            <ul className="space-y-4">
              {serviceFeatures.slice(0, 6).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <H3 className="mb-6">Strategic Coordination</H3>
            <ul className="space-y-4">
              {serviceFeatures.slice(6).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Executive Tools */}
        <div className="bg-gray-50 rounded-xl p-8">
          <H3 className="text-center mb-8">Executive Platforms & Systems We Master</H3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {['Salesforce', 'HubSpot', 'Microsoft 365', 'Google Workspace', 'Slack', 'Asana', 'Monday.com', 'Zoom', 'Calendly', 'DocuSign', 'Concur', 'NetSuite'].map((tool) => (
              <div key={tool} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-gray-700 text-sm">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="How Executive Support Integration Works"
          description="From onboarding to seamless daily operations in three strategic phases"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {executiveProcess.map((process) => (
            <div key={process.step} className="text-center">
              <div className="bg-accent-amber text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                {process.step}
              </div>
              <H3 className="mb-4 text-white">{process.title}</H3>
              <Paragraph className="text-blue-100">
                {process.description}
              </Paragraph>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button as="link" href="/schedule-a-call" variant="secondary" size="lg">
            Get Executive Support
          </Button>
        </div>
      </Section>

      {/* Results Section */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Executive Impact Metrics"
          description="Measurable improvements our executive clients experience with strategic VA support"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <StatCard 
            value="25+ hrs" 
            label="Reclaimed weekly"
            description="Focus on strategic leadership"
          />
          <StatCard 
            value="40%" 
            label="Better meeting outcomes"
            description="Improved preparation & follow-up"
          />
          <StatCard 
            value="3x" 
            label="Project completion rate"
            description="Enhanced coordination & tracking"
          />
        </div>
        
        <div className="text-center mb-12">
          <div className="bg-blue-50 rounded-xl p-8 max-w-3xl mx-auto">
            <H3 className="mb-4 text-primary-blue">Executive Success Guarantee</H3>
            <Paragraph>
              If your executive VA doesn't reclaim at least 20 hours of your time weekly for strategic work 
              within 60 days, we'll refund your entire investment and find a better solution.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Executive Success Story"
            description="How strategic EA support transformed this CEO's effectiveness"
            centered
          />
          <TestimonialCard testimonial={testimonial} />
        </div>
      </Section>

      {/* Service Tiers */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Executive Support Levels"
          description="Choose the right level of support for your executive needs"
        />
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <H3 className="mb-4 text-center">Executive Assistant</H3>
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-primary-blue">$3,200</div>
              <div className="text-gray-600">/month</div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">60 hours monthly</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Calendar & meeting management</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Travel coordination</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Document management</span>
              </li>
            </ul>
            <Button as="link" href="/schedule-a-call" variant="outline" size="lg" className="w-full">
              Get Started
            </Button>
          </div>
          
          <div className="bg-primary-blue text-white rounded-xl p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent-amber text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <H3 className="mb-4 text-center text-white">Senior Executive Assistant</H3>
            <div className="text-center mb-6">
              <div className="text-3xl font-bold">$4,800</div>
              <div className="text-blue-200">/month</div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">90 hours monthly</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">All Executive Assistant features</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Board meeting preparation</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Project coordination</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Priority response</span>
              </li>
            </ul>
            <Button as="link" href="/schedule-a-call" variant="secondary" size="lg" className="w-full">
              Get Started
            </Button>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <H3 className="mb-4 text-center">Chief of Staff Support</H3>
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-primary-blue">Custom</div>
              <div className="text-gray-600">pricing</div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Unlimited hours</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">All Senior EA features</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Strategic initiative management</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Cross-department coordination</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Dedicated account manager</span>
              </li>
            </ul>
            <Button as="link" href="/schedule-a-call" variant="outline" size="lg" className="w-full">
              Discuss Needs
            </Button>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Common questions about our executive assistant services"
            centered
          />
          
          <FAQAccordion 
            faqs={faqs}
            className="space-y-6"
          />
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready to Reclaim Your Executive Time?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Stop getting buried in administrative tasks. Get an executive VA who thinks strategically, 
            handles complexity, and enables you to focus on what only you can do.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Get Executive Support
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Executive ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free executive consultation</div>
            <div>✅ 60-day success guarantee</div>
            <div>✅ Immediate availability</div>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Complementary Executive Services"
            description="Maximize your executive effectiveness with these additional services"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/email-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📧</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Email Management</H3>
              <Paragraph className="text-gray-600">
                Strategic inbox management that ensures you never miss critical communications.
              </Paragraph>
            </Link>
            
            <Link href="/services/calendar-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📅</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Calendar Management</H3>
              <Paragraph className="text-gray-600">
                Intelligent scheduling optimization that protects your time and maximizes productivity.
              </Paragraph>
            </Link>
            
            <Link href="/services/cold-outreach" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🎯</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Strategic Outreach</H3>
              <Paragraph className="text-gray-600">
                Executive-level networking and relationship building through strategic communications.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}