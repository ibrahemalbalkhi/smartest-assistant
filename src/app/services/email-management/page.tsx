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
  title: 'Email Management Virtual Assistant Services | Smart VAs | Smartest Assistant',
  description: 'Professional email management by smart VAs who transform your inbox from chaos to clarity. Inbox zero maintenance, smart filtering, priority flagging. Save 10+ hours weekly.',
  keywords: 'email management virtual assistant, inbox management services, email organization service, outsource email handling, email automation virtual assistant, gmail management service',
  openGraph: {
    title: 'Email Management Virtual Assistant Services | Smart VAs',
    description: 'Professional email management by smart VAs who transform your inbox from chaos to clarity. Save 10+ hours weekly.',
    url: 'https://smartestassistant.com/services/email-management',
  }
}

const serviceFeatures = [
  'Inbox zero maintenance and organization',
  'Smart email filtering and labeling system',
  'Priority message flagging and escalation',
  'Template creation and management',
  'Follow-up tracking and reminders',
  'Email automation setup and optimization',
  'Unsubscribe and spam management',
  'Email response drafting and sending',
  'Newsletter and list management',
  'Integration with productivity tools'
]

const emailManagementProcess = [
  {
    step: 1,
    title: 'Email Audit & Setup',
    description: 'We analyze your current email patterns, set up smart filters, and create an organization system that works for your business.'
  },
  {
    step: 2,
    title: 'Daily Management',
    description: 'Your VA processes emails throughout the day, handling routine responses, flagging priorities, and maintaining organization.'
  },
  {
    step: 3,
    title: 'Strategic Optimization',
    description: 'We continuously improve your email workflow, create templates for common responses, and implement automation.'
  }
]

const faqs = [
  {
    question: 'How do you ensure email security and confidentiality?',
    answer: 'We use enterprise-grade security protocols, signed NDAs, and access controls. Your VA only accesses emails necessary for their role, and all communications are encrypted.'
  },
  {
    question: 'What types of emails will my VA handle vs. escalate?',
    answer: 'VAs handle routine inquiries, scheduling, follow-ups, and standard business communications. They escalate sensitive matters, urgent issues, complex decisions, and anything requiring your personal attention based on guidelines you set.'
  },
  {
    question: 'Can you work with any email platform?',
    answer: 'Yes, our VAs are proficient with Gmail, Outlook, Apple Mail, and most business email platforms. We also integrate with CRM systems, project management tools, and scheduling applications.'
  },
  {
    question: 'How quickly will I see results?',
    answer: 'Most clients achieve inbox zero within the first week and save 10+ hours weekly within 2 weeks. Full process optimization and automation typically takes 30 days.'
  },
  {
    question: 'What if I receive emails that need immediate attention?',
    answer: 'We set up priority flagging systems and can provide real-time notifications for urgent emails. Critical communications are escalated immediately via your preferred method (phone, Slack, SMS).'
  }
]

const testimonial = {
  id: 'email-management-testimonial-1',
  name: 'Jennifer Walsh',
  role: 'CEO',
  company: 'TechFlow Solutions',
  content: 'I was drowning in 200+ emails daily. Now my Smartest Assistant VA maintains perfect inbox organization, handles 80% of responses, and I only see what truly needs my attention. It\'s like having a personal email secretary who never sleeps.',
  rating: 5,
  location: 'San Francisco, CA'
}

export default function EmailManagementPage() {
  return (
    <>
      <ServiceSchema 
        name="Email Management Virtual Assistant Services"
        description="Smart virtual assistants who transform your inbox from chaos to clarity. Professional email management, organization, and automation services."
        url="https://smartestassistant.com/services/email-management"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <ServiceHero
        title="Email Management by Smart Virtual Assistants"
        subtitle="INBOX FREEDOM"
        description="Stop drowning in emails. Our smart VAs transform your inbox from chaos to clarity, handling organization, responses, and automation so you can focus on what matters."
        features={[
          'Achieve and maintain inbox zero',
          'Save 10+ hours per week',
          'Never miss important emails again',
          'Professional email responses'
        ]}
      />

      {/* The Challenge */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-red-600">The Email Avalanche Is Crushing Your Productivity</H2>
            <Paragraph size="lg">
              You're spending 2.6 hours daily battling your inbox while critical business decisions wait. 
              Important emails get buried, opportunities slip through cracks, and you're constantly behind.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">😵 The Daily Struggle</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• 150+ emails daily flooding your inbox</li>
                <li>• Important messages buried in spam and newsletters</li>
                <li>• Forgetting to follow up on critical communications</li>
                <li>• Wasting time on routine, repetitive responses</li>
                <li>• Missing opportunities due to delayed responses</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">💸 The Hidden Costs</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• $67,000 annual cost of email inefficiency</li>
                <li>• Lost deals from delayed responses</li>
                <li>• Damaged relationships from missed communications</li>
                <li>• Constant stress and decision fatigue</li>
                <li>• Working evenings just to catch up</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Solution */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-green-600">Finally: Email Management That Actually Works</H2>
            <Paragraph size="lg">
              Our smart VAs don't just organize emails – they think strategically about your communication flow, 
              anticipate needs, and create systems that scale with your business.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              title="Strategic Email Triage"
              description="Smart prioritization based on sender importance, content urgency, and your business goals"
              icon={<span className="text-3xl">🎯</span>}
            />
            
            <FeatureCard
              title="Intelligent Automation"
              description="Set up filters, templates, and workflows that handle routine communications automatically"
              icon={<span className="text-3xl">🤖</span>}
            />
            
            <FeatureCard
              title="Professional Responses"
              description="Well-crafted replies that maintain your voice and build stronger business relationships"
              icon={<span className="text-3xl">✍️</span>}
            />
          </div>
          
          {/* Comparison */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <H3 className="text-center mb-8">Traditional Email Management vs. Smart VA Approach</H3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-red-600 mb-4">❌ Typical Email VAs</h4>
                <ul className="space-y-3 text-gray-600">
                  <li>• Basic sorting and filing</li>
                  <li>• Wait for instructions on every email</li>
                  <li>• Generic, template responses</li>
                  <li>• No strategic thinking or optimization</li>
                  <li>• Require constant supervision</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-600 mb-4">✅ Smartest Assistant VAs</h4>
                <ul className="space-y-3 text-gray-600">
                  <li>• Intelligent prioritization and routing</li>
                  <li>• Proactive email management and follow-up</li>
                  <li>• Personalized responses in your voice</li>
                  <li>• Continuous workflow optimization</li>
                  <li>• Autonomous operation with smart escalation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section spacing="lg">
        <SectionHeader
          title="Complete Email Management Package"
          description="Everything you need to achieve inbox freedom and email efficiency"
        />
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <H3 className="mb-6">Core Services</H3>
            <ul className="space-y-4">
              {serviceFeatures.slice(0, 5).map((feature, index) => (
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
            <H3 className="mb-6">Advanced Features</H3>
            <ul className="space-y-4">
              {serviceFeatures.slice(5).map((feature, index) => (
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
        
        {/* Tools Integration */}
        <div className="bg-gray-50 rounded-xl p-8">
          <H3 className="text-center mb-8">Email Platforms & Tools We Master</H3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {['Gmail', 'Outlook', 'Apple Mail', 'Yahoo Mail', 'Salesforce', 'HubSpot', 'Mailchimp', 'ConvertKit', 'ActiveCampaign', 'Calendly', 'Slack', 'Trello'].map((tool) => (
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
          title="How Our Email Management Process Works"
          description="From chaos to clarity in just a few simple steps"
          theme="dark"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {emailManagementProcess.map((process) => (
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
            Start Email Management
          </Button>
        </div>
      </Section>

      {/* Results Section */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Results You Can Expect"
          description="Measurable improvements our clients experience with smart email management"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <StatCard 
            value="10+ hrs" 
            label="Saved weekly"
            description="More time for strategic work"
          />
          <StatCard 
            value="98%" 
            label="Important emails caught"
            description="Never miss opportunities"
          />
          <StatCard 
            value="4x" 
            label="Faster responses"
            description="Improved relationship building"
          />
        </div>
        
        <div className="text-center mb-12">
          <div className="bg-green-50 rounded-xl p-8 max-w-3xl mx-auto">
            <H3 className="mb-4 text-green-800">30-Day Results Guarantee</H3>
            <Paragraph>
              If you don't save at least 10 hours per week and achieve inbox zero within 30 days, 
              we'll refund your entire investment. No questions asked.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Client Success Story"
            description="See how smart email management transformed this CEO's productivity"
            centered
          />
          <TestimonialCard testimonial={testimonial} />
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Common questions about our email management services"
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
          <H2 className="mb-6 text-white">Ready to Achieve Inbox Freedom?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Stop letting email control your day. Get a smart VA who transforms your inbox 
            from a source of stress into a productivity engine.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Start Email Management
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your Savings
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free 15-min consultation</div>
            <div>✅ 30-day results guarantee</div>
            <div>✅ Start this week</div>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Services"
            description="Maximize your productivity with these complementary services"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/calendar-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📅</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Calendar Management</H3>
              <Paragraph className="text-gray-600">
                Intelligent scheduling that protects your time and optimizes your daily flow.
              </Paragraph>
            </Link>
            
            <Link href="/services/executive-assistant" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">👔</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Executive Assistant</H3>
              <Paragraph className="text-gray-600">
                High-level support for complex administrative tasks and strategic coordination.
              </Paragraph>
            </Link>
            
            <Link href="/services/cold-outreach" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📧</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Cold Outreach</H3>
              <Paragraph className="text-gray-600">
                Strategic email campaigns that generate quality leads and business opportunities.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}