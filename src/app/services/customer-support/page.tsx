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
  title: 'Customer Support Virtual Assistant Services | Expert VAs | Smartest Assistant',
  description: 'Professional customer support by smart VAs. Live chat, email support, ticket management, and customer success. 24/7 support coverage with personal touch.',
  keywords: 'customer support virtual assistant, customer service VA, live chat support, help desk virtual assistant, customer success virtual assistant',
  openGraph: {
    title: 'Customer Support Virtual Assistant Services | Expert VAs',
    description: 'Professional customer support by smart VAs. 24/7 support coverage with personal touch.',
    url: 'https://smartestassistant.com/services/customer-support',
  }
}

const serviceFeatures = [
  'Live chat and email support',
  'Ticket management and tracking',
  'Customer onboarding assistance',
  'FAQ and knowledge base management',
  'Customer success follow-ups',
  'Complaint resolution and escalation',
  'Multi-channel support coordination',
  'Customer satisfaction surveys',
  'CRM data entry and management',
  'Product support and troubleshooting'
]

const supportProcess = [
  {
    step: 1,
    title: 'Support System Setup',
    description: 'We configure your help desk, create response templates, and establish escalation protocols tailored to your business.'
  },
  {
    step: 2,
    title: 'Team Integration',
    description: 'Your VA learns your products, brand voice, and customer personas to provide authentic, knowledgeable support.'
  },
  {
    step: 3,
    title: 'Continuous Optimization',
    description: 'We monitor metrics, gather feedback, and continuously improve response times and customer satisfaction scores.'
  }
]

const faqs = [
  {
    question: 'How do you ensure consistent brand voice in customer communications?',
    answer: 'We create comprehensive brand voice guidelines and response templates. Your VA is trained on your specific tone, terminology, and communication style. All responses are reviewed initially to ensure consistency.'
  },
  {
    question: 'What happens when a customer issue requires escalation?',
    answer: 'We establish clear escalation protocols during onboarding. Complex technical issues, billing problems, or sensitive complaints are immediately escalated to your designated team members with full context and urgency indicators.'
  },
  {
    question: 'Can you handle support across multiple channels?',
    answer: 'Yes, our VAs can manage email, live chat, social media messages, and help desk tickets from a unified dashboard. We coordinate responses to ensure customers never receive conflicting information.'
  },
  {
    question: 'How quickly can you respond to customer inquiries?',
    answer: 'Standard response time is within 2 hours for emails and immediate for live chat during coverage hours. We can provide 24/7 coverage if needed, with response times outlined in your service agreement.'
  },
  {
    question: 'Do you provide customer support analytics and reporting?',
    answer: 'Absolutely. We track response times, resolution rates, customer satisfaction scores, and common issue patterns. Monthly reports help identify improvement opportunities and customer pain points.'
  }
]

const testimonial = {
  id: 'customer-support-testimonial-1',
  name: 'David Park',
  role: 'COO',
  company: 'TechStart Solutions',
  content: 'Our customer satisfaction scores increased from 3.2 to 4.8 after implementing smart VA support. They handle 90% of inquiries independently while maintaining our friendly, helpful brand voice. Best investment we\'ve made.',
  rating: 5,
  location: 'Austin, TX'
}

export default function CustomerSupportPage() {
  return (
    <>
      <ServiceSchema 
        name="Customer Support Virtual Assistant Services"
        description="Professional customer support services by smart virtual assistants. Live chat, email support, ticket management, and customer success with 24/7 coverage."
        url="https://smartestassistant.com/services/customer-support"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <ServiceHero
        title="Customer Support by Smart Virtual Assistants"
        subtitle="EXCEPTIONAL CUSTOMER EXPERIENCE"
        description="Turn customer support from a cost center into a competitive advantage. Our smart VAs deliver fast, personal, and professional support that builds loyalty and drives growth."
        features={[
          '24/7 professional support coverage',
          '2-hour average response time',
          '95%+ customer satisfaction scores',
          'Multi-channel support coordination'
        ]}
      />

      {/* The Challenge */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-red-600">Poor Customer Support Is Killing Your Growth</H2>
            <Paragraph size="lg">
              Slow responses, inconsistent answers, and generic support create frustrated customers who leave negative reviews and never return. 
              Every bad support interaction costs you money and reputation.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">💸 The Cost of Bad Support</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• 89% of customers switch after poor service</li>
                <li>• Bad reviews damage brand reputation</li>
                <li>• Support tickets pile up and overwhelm staff</li>
                <li>• Inconsistent responses confuse customers</li>
                <li>• Long response times increase churn rates</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">⏰ Internal Team Struggles</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• Pulling developers from coding to answer tickets</li>
                <li>• Sales team distracted by support requests</li>
                <li>• No coverage during nights and weekends</li>
                <li>• Scaling support costs exponentially</li>
                <li>• High turnover in support roles</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Solution */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-green-600">Smart Customer Support That Scales</H2>
            <Paragraph size="lg">
              Our smart VAs don't just answer tickets – they understand your customers, represent your brand authentically, 
              and turn support interactions into opportunities for deeper customer relationships.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              title="Brand Voice Consistency"
              description="Trained on your specific communication style, they sound like part of your team, not outsourced support"
              icon={<span className="text-3xl">🎯</span>}
            />
            
            <FeatureCard
              title="Proactive Problem Solving"
              description="Don't just answer questions – identify patterns and suggest improvements to prevent future issues"
              icon={<span className="text-3xl">🧠</span>}
            />
            
            <FeatureCard
              title="Multi-Channel Excellence"
              description="Seamless support across email, chat, social media, and help desk with unified customer context"
              icon={<span className="text-3xl">🔄</span>}
            />
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section spacing="lg">
        <SectionHeader
          title="Complete Customer Support Package"
          description="Everything you need for world-class customer support"
        />
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <H3 className="mb-6">Core Support Services</H3>
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
          <H3 className="text-center mb-8">Support Tools & Platforms We Master</H3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {['Zendesk', 'Intercom', 'Freshdesk', 'Help Scout', 'Drift', 'LiveChat', 'Crisp', 'Zoho Desk', 'Front', 'Gorgias', 'Helpwise', 'Kayako'].map((tool) => (
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
          title="How Our Customer Support Process Works"
          description="From setup to optimization, we ensure exceptional customer experiences"
          theme="dark"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {supportProcess.map((process) => (
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
            Start Customer Support
          </Button>
        </div>
      </Section>

      {/* Results Section */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Results You Can Expect"
          description="Measurable improvements our clients experience with smart customer support"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <StatCard 
            value="4.8/5" 
            label="Customer satisfaction"
            description="Average rating improvement"
          />
          <StatCard 
            value="2 hrs" 
            label="Response time"
            description="Average first response"
          />
          <StatCard 
            value="90%" 
            label="Tickets resolved"
            description="Without escalation"
          />
        </div>
      </Section>

      {/* Testimonial */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Client Success Story"
            description="See how smart customer support transformed this company's customer relationships"
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
            description="Common questions about our customer support services"
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
          <H2 className="mb-6 text-white">Ready for Exceptional Customer Support?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Stop losing customers to poor support experiences. Get smart VAs who turn every interaction 
            into an opportunity to build stronger customer relationships.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Start Smart Support
            </Button>
            <Button as="link" href="/resources/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ 24/7 coverage available</div>
            <div>✅ Multi-channel support</div>
            <div>✅ Start this week</div>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Services"
            description="Enhance your customer experience with these complementary services"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/email-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📧</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Email Management</H3>
              <Paragraph className="text-gray-600">
                Professional email handling and organization to complement your customer support.
              </Paragraph>
            </Link>
            
            <Link href="/services/social-media-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📱</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Social Media Management</H3>
              <Paragraph className="text-gray-600">
                Monitor and respond to customer inquiries across all social media channels.
              </Paragraph>
            </Link>
            
            <Link href="/services/content-creation" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">✍️</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Content Creation</H3>
              <Paragraph className="text-gray-600">
                Create helpful content, FAQs, and knowledge base articles for better self-service.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}