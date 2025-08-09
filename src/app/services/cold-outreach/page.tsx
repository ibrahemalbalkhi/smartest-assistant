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
  title: 'Cold Outreach Virtual Assistant | B2B Lead Generation VA | Smartest Assistant',
  description: 'Professional cold outreach services from smart VAs who research, personalize, and execute campaigns that get responses. LinkedIn outreach, email prospecting, appointment setting.',
  keywords: 'cold email virtual assistant, B2B lead generation VA, sales prospecting assistant, linkedin outreach service, appointment setting service, email prospecting service, outbound sales assistant',
  openGraph: {
    title: 'Cold Outreach Virtual Assistant | B2B Lead Generation VA',
    description: 'Professional cold outreach services from smart VAs who research, personalize, and execute campaigns that get responses.',
    url: 'https://smartestassistant.com/services/cold-outreach',
  }
}

const serviceFeatures = [
  'Strategic prospect research and qualification',
  'Personalized multi-channel outreach sequences',
  'LinkedIn connection requests and messaging',
  'Email campaign creation and execution',
  'Follow-up automation and tracking',
  'CRM integration and lead management',
  'Response handling and appointment setting',
  'A/B testing and optimization',
  'Competitor and industry analysis',
  'Message personalization at scale',
  'Performance analytics and reporting',
  'List building and data enrichment'
]

const outreachChannels = [
  { 
    name: 'LinkedIn Outreach', 
    description: 'Professional networking and relationship building',
    response: '15-25% response rate'
  },
  { 
    name: 'Email Sequences', 
    description: 'Multi-touch email campaigns with smart follow-up',
    response: '8-15% response rate'
  },
  { 
    name: 'Cold Calling', 
    description: 'Strategic phone outreach for high-value prospects',
    response: '5-10% connection rate'
  },
  { 
    name: 'Social Selling', 
    description: 'Twitter, Instagram, and platform-specific outreach',
    response: '10-20% engagement rate'
  }
]

const outreachProcess = [
  {
    step: 1,
    title: 'Strategic Research & Planning',
    description: 'We analyze your ICP, research prospects, and create personalized outreach strategies that resonate with your target audience.'
  },
  {
    step: 2,
    title: 'Multi-Channel Campaign Execution',
    description: 'Your VA executes coordinated outreach across LinkedIn, email, and other channels with personalized messaging and strategic timing.'
  },
  {
    step: 3,
    title: 'Response Management & Optimization',
    description: 'We handle responses, set appointments, update your CRM, and continuously optimize campaigns based on performance data.'
  }
]

const faqs = [
  {
    question: 'How do you ensure outreach messages don\'t sound generic or spammy?',
    answer: 'Our VAs research each prospect individually, referencing specific company news, achievements, or pain points. We create multiple message variations and personalize based on industry, role, and company size. Every message is crafted to provide value, not just ask for something.'
  },
  {
    question: 'What response rates can I expect from cold outreach campaigns?',
    answer: 'Response rates vary by industry and target audience, but our clients typically see 15-25% response rates on LinkedIn, 8-15% on email, and 20-30% meeting acceptance rates. We focus on quality conversations over quantity of contacts.'
  },
  {
    question: 'How do you handle objections and negative responses?',
    answer: 'Our VAs are trained to handle common objections professionally and turn neutral or negative responses into opportunities. They follow proven scripts while maintaining authentic, helpful communication that preserves your brand reputation.'
  },
  {
    question: 'Can you integrate with our existing CRM and sales tools?',
    answer: 'Yes, we integrate with all major CRM systems including Salesforce, HubSpot, Pipedrive, and others. We track all interactions, update lead status, and ensure seamless handoffs to your sales team with complete campaign history.'
  },
  {
    question: 'How do you ensure compliance with anti-spam and data protection laws?',
    answer: 'We strictly follow CAN-SPAM, GDPR, and platform-specific guidelines. We only contact business prospects with legitimate business purposes, provide clear opt-out options, and maintain detailed compliance records for all campaigns.'
  }
]

const testimonial = {
  id: 'cold-outreach-testimonial-1',
  name: 'David Chen',
  role: 'Sales Director',
  company: 'TechScale Solutions',
  content: 'Our Smartest Assistant VA transformed our outbound sales. They research prospects thoroughly, craft personalized messages that get responses, and book 15+ qualified meetings per month. Our sales pipeline has never been stronger.',
  rating: 5,
  location: 'Austin, TX'
}

export default function ColdOutreachPage() {
  return (
    <>
      <ServiceSchema 
        name="Cold Outreach Virtual Assistant Services"
        description="Strategic cold outreach and lead generation services from smart VAs who research prospects, personalize messaging, and execute campaigns that generate quality business conversations."
        url="https://smartestassistant.com/services/cold-outreach"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <ServiceHero
        title="Cold Outreach by Smart Virtual Assistants"
        subtitle="STRATEGIC LEAD GENERATION"
        description="Stop sending generic messages that get ignored. Our smart VAs research prospects thoroughly, craft personalized outreach that gets responses, and turn cold contacts into warm business opportunities."
        features={[
          'Strategic prospect research and qualification',
          'Personalized multi-channel outreach campaigns',
          'Professional relationship building and nurturing',
          'Data-driven optimization and performance tracking'
        ]}
      />

      {/* The Challenge */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-red-600">Generic Outreach Is Killing Your Lead Generation</H2>
            <Paragraph size="lg">
              You're sending hundreds of template messages that get ignored, deleted, or marked as spam. 
              Meanwhile, competitors with strategic, personalized outreach are building relationships and 
              filling their sales pipelines with qualified leads.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">📧 The Generic Outreach Trap</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• Sending the same message to everyone</li>
                <li>• Low response rates (under 2%)</li>
                <li>• Getting marked as spam or blocked</li>
                <li>• No follow-up strategy or nurturing</li>
                <li>• Damaging your brand reputation with poor messaging</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">💼 The Business Impact</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• $85,000+ annual cost of ineffective outreach</li>
                <li>• Missed opportunities from poor first impressions</li>
                <li>• Sales team wasting time on unqualified leads</li>
                <li>• Slow pipeline growth and revenue stagnation</li>
                <li>• Competitive disadvantage in market outreach</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Solution */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-green-600">Strategic Outreach That Opens Doors and Builds Relationships</H2>
            <Paragraph size="lg">
              Our cold outreach VAs don't just send messages – they research prospects, understand their challenges, 
              and craft personalized communications that start genuine business conversations and build lasting relationships.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              title="Deep Prospect Research"
              description="Thorough research on each prospect's business, challenges, recent news, and potential pain points"
              icon={<span className="text-3xl">🔍</span>}
            />
            
            <FeatureCard
              title="Personalized Messaging"
              description="Custom messages that reference specific details and provide genuine value to each prospect"
              icon={<span className="text-3xl">✍️</span>}
            />
            
            <FeatureCard
              title="Relationship Building"
              description="Strategic follow-up sequences that nurture prospects and build trust over time"
              icon={<span className="text-3xl">🤝</span>}
            />
          </div>
          
          {/* Comparison */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <H3 className="text-center mb-8">Generic Outreach vs. Smart Strategic Outreach</H3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-red-600 mb-4">❌ Typical Cold Outreach</h4>
                <ul className="space-y-3 text-gray-600">
                  <li>• Mass template messages to everyone</li>
                  <li>• Generic value propositions</li>
                  <li>• No research or personalization</li>
                  <li>• One-size-fits-all approach</li>
                  <li>• Focus on selling, not helping</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-600 mb-4">✅ Smartest Assistant Cold Outreach</h4>
                <ul className="space-y-3 text-gray-600">
                  <li>• Individually researched and personalized messages</li>
                  <li>• Industry and role-specific value propositions</li>
                  <li>• Deep prospect research and context</li>
                  <li>• Multi-channel, coordinated approach</li>
                  <li>• Focus on providing value and building relationships</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Outreach Channels */}
      <Section spacing="lg">
        <SectionHeader
          title="Multi-Channel Outreach Strategy"
          description="Strategic coordination across all channels where your prospects are most receptive"
        />
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {outreachChannels.map((channel, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <H3 className="mb-4 text-primary-blue">{channel.name}</H3>
              <Paragraph className="mb-4 text-gray-600">
                {channel.description}
              </Paragraph>
              <div className="bg-green-50 rounded-lg p-3">
                <span className="text-green-700 font-semibold">Avg. {channel.response}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* What's Included */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <H3 className="mb-6">Research & Strategy</H3>
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
            <H3 className="mb-6">Execution & Optimization</H3>
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
        
        {/* Tools Integration */}
        <div className="bg-gray-50 rounded-xl p-8 mt-16">
          <H3 className="text-center mb-8">Outreach Tools & Platforms We Master</H3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {['LinkedIn Sales Navigator', 'Apollo', 'ZoomInfo', 'Outreach.io', 'Salesforce', 'HubSpot', 'Pipedrive', 'Clay', 'Lemlist', 'Reply.io', 'Woodpecker', 'Hunter.io'].map((tool) => (
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
          title="How Strategic Cold Outreach Works"
          description="From prospect research to qualified appointments in three systematic phases"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {outreachProcess.map((process) => (
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
            Start Outreach Campaign
          </Button>
        </div>
      </Section>

      {/* Results Section */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Cold Outreach Performance Metrics"
          description="Measurable results our clients achieve with strategic cold outreach campaigns"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <StatCard 
            value="18%" 
            label="Average response rate"
            description="Quality prospect engagement"
          />
          <StatCard 
            value="25+" 
            label="Qualified meetings monthly"
            description="Pipeline building results"
          />
          <StatCard 
            value="12x" 
            label="ROI improvement"
            description="Compared to generic outreach"
          />
        </div>
        
        <div className="text-center mb-12">
          <div className="bg-blue-50 rounded-xl p-8 max-w-3xl mx-auto">
            <H3 className="mb-4 text-primary-blue">Results Guarantee</H3>
            <Paragraph>
              If your outreach campaign doesn't generate at least 10 qualified meetings in the first 60 days, 
              we'll optimize your strategy at no additional cost until you achieve results.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Client Success Story"
            description="How strategic cold outreach transformed this company's sales pipeline"
            centered
          />
          <TestimonialCard testimonial={testimonial} />
        </div>
      </Section>

      {/* Service Packages */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Cold Outreach Packages"
          description="Choose the right level of outreach support for your lead generation goals"
        />
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <H3 className="mb-4 text-center">Starter Outreach</H3>
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-primary-blue">$2,200</div>
              <div className="text-gray-600">/month</div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>200 prospects monthly</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>LinkedIn + Email outreach</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Basic prospect research</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>CRM integration & tracking</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Monthly performance report</span>
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
            <H3 className="mb-4 text-center text-white">Growth Outreach</H3>
            <div className="text-center mb-6">
              <div className="text-3xl font-bold">$3,800</div>
              <div className="text-blue-200">/month</div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>500 prospects monthly</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Multi-channel outreach</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Deep prospect research</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>A/B testing & optimization</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Appointment setting</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Weekly strategy calls</span>
              </li>
            </ul>
            <Button as="link" href="/schedule-a-call" variant="secondary" size="lg" className="w-full">
              Get Started
            </Button>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <H3 className="mb-4 text-center">Enterprise Outreach</H3>
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-primary-blue">$5,500</div>
              <div className="text-gray-600">/month</div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>1000+ prospects monthly</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>All Growth features</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Dedicated outreach team</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Advanced analytics & reporting</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom integrations</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Account manager</span>
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
            description="Common questions about our cold outreach services"
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
          <H2 className="mb-6 text-white">Ready to Fill Your Pipeline with Qualified Leads?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Stop wasting time on generic outreach that gets ignored. Get strategic, personalized campaigns 
            that start genuine business conversations and generate qualified meetings.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Start Outreach Campaign
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Outreach ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free campaign strategy session</div>
            <div>✅ 60-day results guarantee</div>
            <div>✅ Launch within 1 week</div>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Complementary Sales Services"
            description="Maximize your sales effectiveness with these integrated services"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/email-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📧</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Email Management</H3>
              <Paragraph className="text-gray-600">
                Professional inbox management to handle the responses your outreach campaigns generate.
              </Paragraph>
            </Link>
            
            <Link href="/services/calendar-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📅</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Calendar Management</H3>
              <Paragraph className="text-gray-600">
                Intelligent scheduling for the meetings and calls your outreach campaigns book.
              </Paragraph>
            </Link>
            
            <Link href="/services/social-media-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📱</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Social Media Management</H3>
              <Paragraph className="text-gray-600">
                Strategic social presence that supports your outreach efforts and builds credibility.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}