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
  TestimonialCard,
  FeatureCard
} from '@/components/ui'
import FAQAccordion from '@/components/ui/FAQ'
import { IndustryHero } from '@/components/sections'
import { ServiceSchema, FAQSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Virtual Assistants for SaaS & Startups | Smart VAs Who Speak Startup | Smartest Assistant',
  description: 'Specialized virtual assistant services for SaaS companies and startups. Smart VAs who understand rapid scaling, product launches, and startup operational challenges.',
  keywords: 'SaaS virtual assistant, startup virtual assistant, tech company VA, software company assistant, product launch assistant, customer success VA, growth hacking VA',
  openGraph: {
    title: 'Virtual Assistants for SaaS & Startups | Smart VAs Who Speak Startup',
    description: 'Specialized virtual assistant services for SaaS companies and startups. Smart VAs who understand rapid scaling and startup challenges.',
    url: 'https://smartestassistant.com/industries/saas-startups',
  }
}

const startupChallenges = [
  {
    challenge: 'Rapid Scaling Demands',
    description: 'Need to scale operations faster than hiring allows',
    solution: 'Scalable VA teams that grow with your needs',
    impact: 'Scale operations 3x faster without full-time hiring costs'
  },
  {
    challenge: 'Customer Support Overflow',
    description: 'Support tickets growing faster than team capacity',
    solution: 'Customer success VAs who understand your product',
    impact: 'Maintain <2 hour response times during rapid growth'
  },
  {
    challenge: 'Product Launch Coordination',
    description: 'Complex launches requiring multi-channel coordination',
    solution: 'Launch-specialized VAs who manage every detail',
    impact: 'Increase successful launch rate by 40%'
  },
  {
    challenge: 'Fundraising & Investor Relations',
    description: 'Need professional support for funding processes',
    solution: 'VAs experienced with pitch decks, data rooms, investor comms',
    impact: 'Reduce fundraising prep time by 60%'
  }
]

const saasServices = [
  {
    service: 'Customer Success Support',
    description: 'Onboarding, support tickets, success metrics tracking',
    tools: 'Intercom, Zendesk, HubSpot, Mixpanel'
  },
  {
    service: 'Product Launch Management',
    description: 'Go-to-market coordination, beta testing, launch campaigns',
    tools: 'ProductHunt, Slack, Notion, Airtable'
  },
  {
    service: 'Sales Development',
    description: 'Lead qualification, demo scheduling, CRM management',
    tools: 'Salesforce, Outreach, Apollo, Calendly'
  },
  {
    service: 'Content & Marketing Operations',
    description: 'Blog management, social media, email campaigns, SEO',
    tools: 'WordPress, Buffer, Mailchimp, Semrush'
  },
  {
    service: 'Data Analysis & Reporting',
    description: 'KPI tracking, dashboard creation, investor reporting',
    tools: 'Google Analytics, Mixpanel, Tableau, DataStudio'
  },
  {
    service: 'Investor Relations Support',
    description: 'Pitch deck preparation, data room management, investor updates',
    tools: 'DocSend, Carta, PitchBook, Google Drive'
  }
]

const startupTestimonials = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    company: 'DataFlow Analytics',
    content: 'Scaling from 10 to 100 customers meant our support was drowning. Our Smartest Assistant VA learned our product inside-out, handles 80% of support tickets, and maintains our 98% satisfaction rate. They\'re basically our head of customer success.',
    rating: 5,
    location: 'Austin, TX'
  },
  {
    name: 'Sarah Kim',
    role: 'Co-founder',
    company: 'GrowthLabs SaaS',
    content: 'Product launches used to consume our entire team for weeks. Now our Smartest Assistant VA coordinates everything - from ProductHunt campaigns to user onboarding flows. Our last launch was our most successful yet.',
    rating: 5,
    location: 'San Francisco, CA'
  }
]

const faqs = [
  {
    question: 'Do your VAs understand SaaS metrics and startup terminology?',
    answer: 'Absolutely. Our startup VAs are fluent in SaaS metrics like MRR, churn, LTV, CAC, and ARR. They understand startup phases from pre-seed to Series B, and can communicate effectively with investors, developers, and customers using proper terminology.'
  },
  {
    question: 'Can your VAs handle technical customer support?',
    answer: 'Yes, our SaaS VAs are trained to handle technical inquiries, troubleshoot common issues, and escalate complex problems appropriately. They learn your product documentation and can provide first-level support that resolves 80% of customer inquiries.'
  },
  {
    question: 'How quickly can VAs adapt to our rapidly changing startup needs?',
    answer: 'Our VAs are specifically chosen for their adaptability and startup mindset. They thrive in fast-changing environments, can pivot quickly when priorities shift, and proactively suggest improvements based on their experience with other growing companies.'
  },
  {
    question: 'Do you have experience with startup tools and software?',
    answer: 'Our startup VAs are proficient with the entire startup tech stack including Slack, Notion, Airtable, Stripe, Intercom, Mixpanel, Salesforce, and many others. They can get up to speed on new tools quickly as your startup evolves.'
  },
  {
    question: 'Can VAs help with fundraising and investor relations?',
    answer: 'Yes, our VAs have extensive experience supporting fundraising efforts. They can help prepare pitch decks, organize data rooms, schedule investor meetings, create investor updates, and manage the entire fundraising workflow while maintaining confidentiality.'
  }
]

export default function SaasStartupsPage() {
  return (
    <>
      <ServiceSchema 
        name="Virtual Assistants for SaaS & Startups"
        description="Specialized virtual assistant services for SaaS companies and startups. Smart VAs who understand rapid scaling, product launches, and the unique challenges of high-growth companies."
        url="https://smartestassistant.com/industries/saas-startups"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <IndustryHero
        industry="SaaS & Startups"
        industryBenefits={[
          'Scale operations without scaling headcount',
          'Expert support for product launches and fundraising',
          'Customer success that grows with your user base',
          'Data-driven insights and metrics tracking'
        ]}
        image={{
          src: "/images/tech-innovation-hero.webp",
          alt: "Tech startup team innovating with cutting-edge technology",
          width: 1200,
          height: 600
        }}
      />

      {/* Startup Challenges */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-red-600">The Startup Scaling Dilemma</H2>
            <Paragraph size="lg">
              You need to move fast and scale operations, but hiring full-time employees for every function 
              burns cash and slows velocity. Meanwhile, rapid growth is straining your existing team and 
              customer experience is suffering.
            </Paragraph>
          </div>
          
          <div className="space-y-8">
            {startupChallenges.map((item, index) => (
              <div key={index} className="grid md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-xl">
                <div>
                  <H3 className="mb-3 text-red-700">🚨 {item.challenge}</H3>
                  <Paragraph className="text-gray-600">{item.description}</Paragraph>
                </div>
                <div>
                  <H3 className="mb-3 text-green-600">✅ Smart VA Solution</H3>
                  <Paragraph className="text-gray-700">{item.solution}</Paragraph>
                </div>
                <div>
                  <H3 className="mb-3 text-blue-600">📈 Measurable Impact</H3>
                  <Paragraph className="text-blue-700 font-medium">{item.impact}</Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SaaS-Specific Services */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="SaaS & Startup Specialized Services"
          description="Services designed specifically for the unique needs of high-growth SaaS companies and startups"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {saasServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <H3 className="mb-4 text-primary-blue">{service.service}</H3>
              <Paragraph className="mb-6 text-gray-600">
                {service.description}
              </Paragraph>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Tools:</span> {service.tools}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Startup Growth Stages */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Support for Every Stage of Growth"
          description="Tailored VA support that evolves with your startup journey"
        />
        
        <div className="space-y-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">Pre-Seed</div>
              <Paragraph className="text-sm text-gray-600 mb-4">
                MVP development, initial customer feedback
              </Paragraph>
              <ul className="text-xs text-left space-y-1">
                <li>• Market research</li>
                <li>• Customer interviews</li>
                <li>• Basic admin support</li>
                <li>• Social media setup</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">Seed</div>
              <Paragraph className="text-sm text-gray-600 mb-4">
                Product-market fit, early customers
              </Paragraph>
              <ul className="text-xs text-left space-y-1">
                <li>• Customer onboarding</li>
                <li>• Support ticket handling</li>
                <li>• Content creation</li>
                <li>• Investor relations</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">Series A</div>
              <Paragraph className="text-sm text-gray-600 mb-4">
                Scaling operations, expanding team
              </Paragraph>
              <ul className="text-xs text-left space-y-1">
                <li>• Sales development</li>
                <li>• Customer success</li>
                <li>• Marketing automation</li>
                <li>• Data analysis</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">Series B+</div>
              <Paragraph className="text-sm text-gray-600 mb-4">
                Market expansion, optimization
              </Paragraph>
              <ul className="text-xs text-left space-y-1">
                <li>• Advanced analytics</li>
                <li>• Process optimization</li>
                <li>• Team coordination</li>
                <li>• Strategic projects</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Tools & Integrations */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Startup Tools We Master"
          description="Proficient with the entire modern startup technology stack"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            'Slack', 'Notion', 'Airtable', 'Stripe', 'Intercom', 'Zendesk', 
            'Salesforce', 'HubSpot', 'Mixpanel', 'Google Analytics', 'Mailchimp', 'Buffer',
            'GitHub', 'Figma', 'DocuSign', 'Calendly', 'Zoom', 'Loom',
            'ProductHunt', 'AngelList', 'Carta', 'PitchBook', 'Typeform', 'Zapier'
          ].map((tool) => (
            <div key={tool} className="bg-white rounded-lg p-4 shadow-sm text-center">
              <div className="font-semibold text-gray-700 text-sm">{tool}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Success Stories */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Startup Success Stories"
          description="How growing SaaS companies and startups scale with smart VA support"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {startupTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* ROI for Startups */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">The Startup ROI Advantage</H2>
          <Paragraph size="lg" className="mb-12 text-blue-100">
            Smart VAs deliver exceptional ROI for startups by providing senior-level support 
            at a fraction of full-time hiring costs
          </Paragraph>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-3xl font-bold text-white mb-2">70%</div>
              <div className="text-blue-100 mb-4">Cost Savings vs Full-Time</div>
              <Paragraph className="text-sm text-blue-200">
                Get senior-level support for 70% less than hiring full-time employees
              </Paragraph>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-3xl font-bold text-white mb-2">3x</div>
              <div className="text-blue-100 mb-4">Faster Scaling</div>
              <Paragraph className="text-sm text-blue-200">
                Scale operations 3x faster without the overhead of traditional hiring
              </Paragraph>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-3xl font-bold text-white mb-2">6mo</div>
              <div className="text-blue-100 mb-4">Runway Extension</div>
              <Paragraph className="text-sm text-blue-200">
                Extend runway by 6+ months through efficient resource allocation
              </Paragraph>
            </div>
          </div>
          
          <Button as="link" href="/resources/tools/roi-calculator" variant="secondary" size="lg">
            Calculate Startup ROI
          </Button>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="SaaS & Startup FAQ"
            description="Common questions from growing tech companies"
            centered
          />
          
          <FAQAccordion 
            faqs={faqs}
            className="space-y-6"
          />
        </div>
      </Section>

      {/* Get Started */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready to Scale Without the Overhead?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Join 200+ SaaS companies and startups that trust Smartest Assistant to scale their operations 
            efficiently. Get startup-savvy VAs who understand your velocity and growth challenges.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Get Startup VA Team
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free startup assessment</div>
            <div>✅ No long-term contracts</div>
            <div>✅ Scale up or down anytime</div>
          </div>
        </div>
      </Section>

      {/* Related Industries & Services */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Industries & Services"
            description="Explore our expertise in other industries and specialized services"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/industries/ecommerce" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🛒</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">E-commerce</H3>
              <Paragraph className="text-gray-600">
                Specialized support for online retail and e-commerce businesses scaling their operations.
              </Paragraph>
            </Link>
            
            <Link href="/services/customer-support" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">💬</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Customer Support</H3>
              <Paragraph className="text-gray-600">
                Professional customer support that scales with your user base and maintains satisfaction.
              </Paragraph>
            </Link>
            
            <Link href="/services/social-media-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📱</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Growth Marketing</H3>
              <Paragraph className="text-gray-600">
                Strategic marketing support to drive growth and customer acquisition for your startup.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}