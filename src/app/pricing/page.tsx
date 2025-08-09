import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Section, 
  SectionHeader,
  H2, 
  H3, 
  Paragraph, 
  Button
} from '@/components/ui'
import { ServiceSchema, FAQSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Virtual Assistant Pricing | Transparent Rates | Smartest Assistant',
  description: 'Transparent pricing for virtual assistant services. Flexible plans designed for businesses of all sizes. No hidden fees, cancel anytime.',
  keywords: 'virtual assistant pricing, VA rates, virtual assistant cost, executive assistant pricing, smart VA pricing',
  openGraph: {
    title: 'Virtual Assistant Pricing | Transparent Rates',
    description: 'Transparent pricing for smart virtual assistant services. Flexible plans for every business need.',
    url: 'https://smartestassistant.com/pricing',
  }
}

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for entrepreneurs and small businesses getting started with delegation',
    monthlyPrice: 1200,
    hourlyRate: 25,
    hoursIncluded: 40,
    billingNote: 'Monthly commitment',
    features: [
      'Dedicated virtual assistant',
      'Email management and organization',
      'Calendar scheduling and coordination',
      'Basic administrative tasks',
      'Standard communication tools',
      'Weekly progress reports',
      'Business hours support (9AM-6PM EST)'
    ],
    limitations: [
      'Up to 40 hours per month',
      'Single VA assignment',
      'Standard turnaround times'
    ],
    popular: false,
    ctaText: 'Start with Starter',
    ctaLink: '/schedule-a-call?plan=starter'
  },
  {
    name: 'Professional',
    description: 'Most popular plan for growing businesses needing comprehensive support',
    monthlyPrice: 2400,
    hourlyRate: 24,
    hoursIncluded: 80,
    billingNote: 'Monthly commitment',
    features: [
      'Senior dedicated virtual assistant',
      'Advanced email management with automation',
      'Complex calendar and travel coordination',
      'Social media management',
      'Customer service and lead qualification',
      'Content creation and research',
      'Project coordination and management',
      'Extended hours support (7AM-9PM EST)',
      'Bi-weekly strategy calls',
      'Custom process development'
    ],
    limitations: [
      'Up to 80 hours per month',
      'Primary + backup VA available'
    ],
    popular: true,
    ctaText: 'Choose Professional',
    ctaLink: '/schedule-a-call?plan=professional'
  },
  {
    name: 'Executive',
    description: 'Premium support for executives and businesses requiring highest-level assistance',
    monthlyPrice: 4800,
    hourlyRate: 24,
    hoursIncluded: 160,
    billingNote: 'Monthly commitment',
    features: [
      'Executive-level virtual assistant team',
      'Strategic project management',
      'High-level stakeholder communication',
      'Advanced research and analysis',
      'Event planning and coordination',
      'Board meeting preparation',
      'Confidential document handling',
      '24/7 emergency support available',
      'Weekly strategy calls',
      'Custom workflow automation',
      'Dedicated account manager',
      'Priority task handling'
    ],
    limitations: [
      'Up to 160 hours per month',
      'Team of specialized VAs'
    ],
    popular: false,
    ctaText: 'Go Executive',
    ctaLink: '/schedule-a-call?plan=executive'
  }
]

const additionalServices = [
  {
    service: 'Additional Hours',
    description: 'Extra hours beyond your plan limit',
    pricing: '$28/hour',
    note: 'Billed monthly, no contracts'
  },
  {
    service: 'Rush Projects',
    description: 'Priority handling for urgent tasks',
    pricing: '50% premium',
    note: 'Same-day or next-day delivery'
  },
  {
    service: 'Specialized Skills',
    description: 'Industry-specific expertise (legal, medical, etc.)',
    pricing: '+$3-5/hour',
    note: 'Based on specialization level'
  },
  {
    service: 'Weekend Support',
    description: 'Saturday and Sunday availability',
    pricing: '+25% premium',
    note: 'Available for Professional and Executive plans'
  }
]

const faqs = [
  {
    question: 'How does billing work?',
    answer: 'We bill monthly in advance. Your hours reset each month and don\'t roll over. You can track usage through your client dashboard and receive detailed reports.'
  },
  {
    question: 'What if I don\'t use all my hours?',
    answer: 'Hours don\'t roll over to the next month. We recommend choosing a plan that matches your typical monthly needs. You can always upgrade or downgrade your plan with 30 days notice.'
  },
  {
    question: 'Can I change plans anytime?',
    answer: 'Yes, you can upgrade immediately or downgrade with 30 days notice. We\'ll prorate any differences and adjust your next billing cycle accordingly.'
  },
  {
    question: 'Are there any setup fees or hidden costs?',
    answer: 'No setup fees, no hidden costs. The monthly price includes everything listed in your plan. Additional hours and premium services are clearly priced and optional.'
  },
  {
    question: 'What happens if I go over my hours?',
    answer: 'Overage hours are automatically billed at $28/hour. We\'ll notify you when you reach 80% of your limit so you can decide whether to continue or pause tasks.'
  },
  {
    question: 'Do you offer discounts for annual payments?',
    answer: 'Yes, we offer a 10% discount for annual commitments paid in advance. This includes a 30-day money-back guarantee if you\'re not completely satisfied.'
  }
]

const valueProps = [
  {
    title: 'No Hidden Fees',
    description: 'Transparent pricing with no setup costs, cancellation fees, or surprise charges',
    icon: '💰'
  },
  {
    title: 'Flexible Scaling',
    description: 'Upgrade instantly or downgrade with 30-day notice as your needs change',
    icon: '📈'
  },
  {
    title: 'Quality Guarantee',
    description: '30-day money-back guarantee and free VA replacement if needed',
    icon: '🛡️'
  },
  {
    title: 'All-Inclusive',
    description: 'Communication tools, project management, and reporting included in every plan',
    icon: '📦'
  }
]

export default function PricingPage() {
  return (
    <>
      <ServiceSchema 
        name="Virtual Assistant Pricing Plans"
        description="Transparent pricing for professional virtual assistant services with flexible monthly plans for businesses of all sizes."
        url="https://smartestassistant.com/pricing"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 text-sm font-semibold rounded-full mb-6">
            💎 Transparent Pricing
          </div>
          
          <H2 className="mb-6">Simple, Transparent Pricing That Scales With You</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600">
            No hidden fees, no setup costs, no long-term contracts. Choose the plan that fits your needs 
            and upgrade or downgrade anytime. All plans include dedicated VAs, tools, and support.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button as="link" href="#plans" variant="primary" size="lg">
              View Pricing Plans
            </Button>
            <Button as="link" href="/schedule-a-call" variant="outline" size="lg">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </Section>

      {/* Value Props */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Why Choose Our Pricing Model"
            description="Built for transparency, flexibility, and value"
            centered
          />
          
          <div className="grid md:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl mb-4">{prop.icon}</div>
                <H3 className="mb-3 text-lg">{prop.title}</H3>
                <Paragraph className="text-gray-600 text-sm">
                  {prop.description}
                </Paragraph>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing Plans */}
      <Section background="white" spacing="xl" id="plans">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Choose Your Perfect Plan"
            description="All plans include dedicated virtual assistants, tools, and support. No contracts required."
            centered
          />
          
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-xl border-2 relative ${
                  plan.popular 
                    ? 'border-primary-blue ring-4 ring-primary-blue/10' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-blue text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <H3 className="text-2xl mb-3">{plan.name}</H3>
                    <Paragraph className="text-gray-600 mb-6 text-sm">
                      {plan.description}
                    </Paragraph>
                    
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        ${plan.monthlyPrice.toLocaleString()}
                        <span className="text-lg font-normal text-gray-500">/month</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        ${plan.hourlyRate}/hour • {plan.hoursIncluded} hours included
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {plan.billingNote}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="font-semibold text-gray-800 mb-4">What's Included:</div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <div className="font-semibold text-gray-800 mb-3">Plan Limits:</div>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="flex items-start gap-3">
                          <span className="text-amber-500 mt-0.5 flex-shrink-0">•</span>
                          <span className="text-gray-500 text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    as="link" 
                    href={plan.ctaLink}
                    variant={plan.popular ? "primary" : "outline"} 
                    fullWidth
                    size="lg"
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Paragraph className="text-gray-600 mb-4">
              Need something custom? We offer enterprise plans for teams and special requirements.
            </Paragraph>
            <Button as="link" href="/schedule-a-call" variant="outline" size="lg">
              Discuss Custom Pricing
            </Button>
          </div>
        </div>
      </Section>

      {/* Additional Services */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Additional Services & Add-ons"
            description="Optional services to extend your virtual assistant capabilities"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <H3 className="mb-2">{service.service}</H3>
                    <Paragraph className="text-gray-600 text-sm">
                      {service.description}
                    </Paragraph>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-blue">
                      {service.pricing}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-500 border-t border-gray-200 pt-4">
                  {service.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Pricing Questions & Answers"
            description="Everything you need to know about our pricing and billing"
            centered
          />
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <H3 className="mb-3 text-primary-blue">{faq.question}</H3>
                <Paragraph className="text-gray-600">{faq.answer}</Paragraph>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Money-Back Guarantee */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-6xl mb-6">🛡️</div>
            <H2 className="mb-6 text-white">30-Day Money-Back Guarantee</H2>
            <Paragraph size="lg" className="mb-8 text-blue-100">
              Try any plan risk-free for 30 days. If you're not completely satisfied with your virtual 
              assistant partnership, we'll refund your entire first month. No questions asked.
            </Paragraph>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
                Start Risk-Free Today
              </Button>
              <Button as="link" href="/contact" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
                Ask Questions First
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6">Ready to Get Started?</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600">
            Choose your plan and get matched with your perfect virtual assistant within 48 hours. 
            No setup fees, no contracts, just exceptional support that scales with your business.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="primary" size="xl">
              Schedule Free Consultation
            </Button>
            <Button as="link" href="/resources/roi-calculator" variant="outline" size="xl">
              Calculate Your ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-gray-500 text-sm">
            <div>✅ No setup fees</div>
            <div>✅ Cancel anytime</div>
            <div>✅ 30-day guarantee</div>
          </div>
        </div>
      </Section>
    </>
  )
}