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
  title: 'Calendar Management Virtual Assistant | Smart Scheduling VAs | Smartest Assistant',
  description: 'Professional calendar management by smart VAs who optimize your schedule for maximum productivity. Never double-book again with intelligent scheduling.',
  keywords: 'calendar management virtual assistant, executive calendar management, smart scheduling assistant, appointment setting service, meeting coordination VA, schedule optimization',
  openGraph: {
    title: 'Calendar Management Virtual Assistant | Smart Scheduling VAs',
    description: 'Professional calendar management by smart VAs who optimize your schedule for maximum productivity. Never double-book again.',
    url: 'https://smartestassistant.com/services/calendar-management',
  }
}

const serviceFeatures = [
  'Intelligent scheduling optimization and conflict resolution',
  'Strategic meeting preparation and agenda creation',
  'Buffer time management and focus block protection',
  'Multi-timezone coordination for global teams',
  'Automated meeting reminders and follow-ups',
  'Calendar integration with productivity tools',
  'Travel time calculation and logistics coordination',
  'Meeting room and resource booking',
  'Priority-based scheduling and rescheduling',
  'Recurring meeting optimization and review',
  'Calendar analytics and productivity insights',
  'Emergency scheduling and urgent meeting coordination'
]

const calendarChallenges = [
  {
    problem: 'Double Bookings & Conflicts',
    solution: 'Smart conflict detection and resolution before they happen',
    impact: 'Save 5+ hours weekly resolving scheduling conflicts'
  },
  {
    problem: 'Back-to-Back Meeting Fatigue',
    solution: 'Strategic buffer time and focus block protection',
    impact: 'Improve decision quality and reduce burnout'
  },
  {
    problem: 'Time Zone Confusion',
    solution: 'Automated timezone coordination and conversion',
    impact: 'Eliminate missed meetings due to timezone errors'
  },
  {
    problem: 'Poor Meeting Preparation',
    solution: 'Proactive agenda creation and resource gathering',
    impact: 'Increase meeting effectiveness by 40%'
  }
]

const calendarProcess = [
  {
    step: 1,
    title: 'Schedule Analysis & Optimization',
    description: 'We analyze your current calendar patterns, identify inefficiencies, and create an optimized scheduling framework that protects your most productive hours.'
  },
  {
    step: 2,
    title: 'Smart Scheduling System Setup',
    description: 'Your VA implements intelligent scheduling rules, buffer times, and priority matrices that ensure every meeting serves your strategic goals.'
  },
  {
    step: 3,
    title: 'Proactive Calendar Management',
    description: 'Daily optimization, meeting preparation, and strategic adjustments to keep your schedule aligned with your priorities and energy levels.'
  }
]

const faqs = [
  {
    question: 'How do you handle last-minute meeting requests and changes?',
    answer: 'Our VAs are trained to assess urgency, find creative solutions for scheduling conflicts, and communicate professionally with all parties. We maintain backup options and can quickly reorganize schedules when priorities shift.'
  },
  {
    question: 'Can you integrate with our existing calendar and meeting tools?',
    answer: 'Yes, we work with all major calendar platforms (Google Calendar, Outlook, Apple Calendar) and meeting tools (Zoom, Teams, Calendly, etc.). We also integrate with CRM systems and project management tools for seamless workflow.'
  },
  {
    question: 'How do you prioritize meeting requests when my calendar is full?',
    answer: 'We work with you to establish clear priority criteria based on strategic importance, stakeholder relationships, and business impact. Our VAs make intelligent scheduling decisions using these guidelines while keeping you informed of significant changes.'
  },
  {
    question: 'What happens if there are technical issues with scheduling tools?',
    answer: 'Our VAs are trained on multiple platforms and have backup processes for all scenarios. We monitor for technical issues, have direct support contacts, and can quickly switch to alternative methods to ensure no meetings are missed.'
  },
  {
    question: 'How do you handle international scheduling across multiple time zones?',
    answer: 'We use advanced timezone management tools and maintain detailed profiles of all international contacts\' locations and preferences. All meeting invitations include multiple timezone references and clear instructions to avoid confusion.'
  }
]

const testimonial = {
  name: 'Alexandra Kim',
  role: 'VP of Operations',
  company: 'Global Dynamics Corp',
  content: 'My calendar went from chaotic nightmare to strategic advantage. My Smartest Assistant VA not only eliminated double-bookings but optimized my schedule so I have focused work blocks and proper prep time. My productivity has never been higher.',
  rating: 5,
  location: 'Seattle, WA'
}

export default function CalendarManagementPage() {
  return (
    <>
      <ServiceSchema 
        name="Calendar Management Virtual Assistant Services"
        description="Professional calendar management from smart VAs who optimize your schedule for maximum productivity, eliminate conflicts, and ensure every meeting serves your strategic goals."
        url="https://smartestassistant.com/services/calendar-management"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <ServiceHero
        title="Calendar Management by Smart Virtual Assistants"
        subtitle="INTELLIGENT SCHEDULING"
        description="Transform your chaotic schedule into a strategic advantage. Our smart VAs don't just book meetings – they optimize your time, protect your priorities, and ensure every appointment drives your goals forward."
        features={[
          'Strategic schedule optimization and conflict prevention',
          'Intelligent buffer time and focus block protection',
          'Proactive meeting preparation and coordination',
          'Multi-timezone and global team scheduling expertise'
        ]}
      />

      {/* The Challenge */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-red-600">Your Calendar Is Controlling You Instead of Serving You</H2>
            <Paragraph size="lg">
              You're trapped in back-to-back meetings with no prep time, constantly dealing with scheduling conflicts, 
              and watching your most productive hours get fragmented by poorly planned appointments. Meanwhile, 
              strategic work gets pushed to evenings and weekends.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">📅 The Calendar Chaos</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• Double-bookings and constant rescheduling</li>
                <li>• Back-to-back meetings without prep time</li>
                <li>• Important work squeezed into evenings</li>
                <li>• Time zone confusion and missed international calls</li>
                <li>• No protected time for strategic thinking</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">⏱️ The Productivity Penalty</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• $125,000+ annual cost of poor time management</li>
                <li>• Decision fatigue from constant context switching</li>
                <li>• Reduced meeting quality due to poor preparation</li>
                <li>• Burnout from unsustainable scheduling patterns</li>
                <li>• Strategic initiatives delayed by operational overload</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Solution */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-green-600">Strategic Calendar Management That Multiplies Your Impact</H2>
            <Paragraph size="lg">
              Our calendar management VAs don't just book appointments – they architect your time for maximum impact, 
              protect your energy cycles, and ensure every meeting serves your strategic priorities.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              title="Intelligent Schedule Architecture"
              description="Strategic time blocking that protects focused work, builds in prep time, and aligns with your energy patterns"
              icon={<span className="text-3xl">🧠</span>}
            />
            
            <FeatureCard
              title="Proactive Conflict Prevention"
              description="Advanced planning that prevents double-bookings and scheduling conflicts before they happen"
              icon={<span className="text-3xl">🛡️</span>}
            />
            
            <FeatureCard
              title="Meeting Optimization"
              description="Strategic meeting preparation, agenda creation, and follow-up coordination that maximizes outcomes"
              icon={<span className="text-3xl">⚡</span>}
            />
          </div>
          
          {/* Problem-Solution Matrix */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <H3 className="text-center mb-8">Common Calendar Problems vs. Smart Solutions</H3>
            <div className="space-y-6">
              {calendarChallenges.map((challenge, index) => (
                <div key={index} className="grid md:grid-cols-3 gap-4 p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">❌ {challenge.problem}</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">✅ {challenge.solution}</h4>
                  </div>
                  <div>
                    <div className="text-blue-600 font-medium">{challenge.impact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section spacing="lg">
        <SectionHeader
          title="Complete Calendar Management Package"
          description="Everything you need to transform your schedule from chaos to strategic advantage"
        />
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <H3 className="mb-6">Strategic Scheduling</H3>
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
            <H3 className="mb-6">Advanced Coordination</H3>
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
        
        {/* Calendar Tools */}
        <div className="bg-gray-50 rounded-xl p-8">
          <H3 className="text-center mb-8">Calendar & Scheduling Tools We Master</H3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {['Google Calendar', 'Outlook Calendar', 'Apple Calendar', 'Calendly', 'Acuity Scheduling', 'Book Like A Boss', 'Zoom', 'Microsoft Teams', 'Webex', 'GoToMeeting', 'Doodle', 'When2meet'].map((tool) => (
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
          title="How Strategic Calendar Management Works"
          description="From schedule analysis to optimized productivity in three systematic phases"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {calendarProcess.map((process) => (
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
            Optimize My Calendar
          </Button>
        </div>
      </Section>

      {/* Results Section */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Calendar Optimization Results"
          description="Measurable productivity improvements our clients achieve with strategic calendar management"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <StatCard 
            value="15+ hrs" 
            label="Reclaimed weekly"
            description="Protected focus time for strategic work"
          />
          <StatCard 
            value="Zero" 
            label="Double bookings"
            description="Conflicts prevented before they happen"
          />
          <StatCard 
            value="40%" 
            label="Meeting effectiveness increase"
            description="Better preparation and outcomes"
          />
        </div>
        
        <div className="text-center mb-12">
          <div className="bg-green-50 rounded-xl p-8 max-w-3xl mx-auto">
            <H3 className="mb-4 text-green-800">Schedule Optimization Guarantee</H3>
            <Paragraph>
              If we don't reclaim at least 10 hours of focused work time weekly and eliminate scheduling 
              conflicts within 30 days, we'll continue optimizing your calendar at no charge.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Client Success Story"
            description="How strategic calendar management transformed this executive's productivity"
            centered
          />
          <TestimonialCard testimonial={testimonial} />
        </div>
      </Section>

      {/* Calendar Management Types */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Calendar Management Specializations"
          description="Tailored approaches for different professional needs and industries"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
            <div className="text-3xl mb-4">👔</div>
            <H3 className="mb-4 text-primary-blue">Executive Calendar Management</H3>
            <ul className="space-y-3 text-sm text-gray-700 mb-6">
              <li>• C-suite scheduling optimization</li>
              <li>• Board meeting coordination</li>
              <li>• Stakeholder relationship management</li>
              <li>• Strategic time blocking</li>
              <li>• International travel coordination</li>
            </ul>
            <Button as="link" href="/schedule-a-call" variant="outline" size="sm">
              Learn More
            </Button>
          </div>
          
          <div className="bg-green-50 rounded-xl p-8 border border-green-200">
            <div className="text-3xl mb-4">💼</div>
            <H3 className="mb-4 text-green-600">Sales Team Calendar Management</H3>
            <ul className="space-y-3 text-sm text-gray-700 mb-6">
              <li>• Prospect meeting coordination</li>
              <li>• Demo scheduling optimization</li>
              <li>• Follow-up automation</li>
              <li>• Territory-based scheduling</li>
              <li>• CRM integration and tracking</li>
            </ul>
            <Button as="link" href="/schedule-a-call" variant="outline" size="sm">
              Learn More
            </Button>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-8 border border-purple-200">
            <div className="text-3xl mb-4">🏢</div>
            <H3 className="mb-4 text-purple-600">Team Calendar Coordination</H3>
            <ul className="space-y-3 text-sm text-gray-700 mb-6">
              <li>• Multi-person meeting scheduling</li>
              <li>• Resource and room booking</li>
              <li>• Cross-department coordination</li>
              <li>• Recurring meeting optimization</li>
              <li>• Team availability management</li>
            </ul>
            <Button as="link" href="/schedule-a-call" variant="outline" size="sm">
              Learn More
            </Button>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Common questions about our calendar management services"
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
          <H2 className="mb-6 text-white">Ready to Transform Your Schedule Into a Strategic Advantage?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Stop letting a chaotic calendar control your productivity. Get intelligent schedule management 
            that protects your time, prevents conflicts, and ensures every meeting serves your goals.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Optimize My Calendar
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Time Savings
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free calendar audit</div>
            <div>✅ 30-day optimization guarantee</div>
            <div>✅ Start immediately</div>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Complementary Productivity Services"
            description="Maximize your productivity with these integrated services"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/executive-assistant" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">👔</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Executive Assistant</H3>
              <Paragraph className="text-gray-600">
                Complete executive support including meeting preparation, travel coordination, and strategic task management.
              </Paragraph>
            </Link>
            
            <Link href="/services/email-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📧</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Email Management</H3>
              <Paragraph className="text-gray-600">
                Professional inbox management that complements your optimized calendar with streamlined communications.
              </Paragraph>
            </Link>
            
            <Link href="/services/cold-outreach" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📞</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Meeting Coordination</H3>
              <Paragraph className="text-gray-600">
                Strategic outreach and appointment setting that fills your optimized calendar with high-value meetings.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}