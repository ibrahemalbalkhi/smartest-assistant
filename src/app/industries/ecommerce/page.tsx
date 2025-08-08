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
import { IndustryHero } from '@/components/sections'
import { ServiceSchema, FAQSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Virtual Assistants for E-commerce | Smart VAs for Online Retail | Smartest Assistant',
  description: 'Specialized virtual assistant services for e-commerce businesses. Smart VAs who understand online retail, inventory management, and customer service at scale.',
  keywords: 'ecommerce virtual assistant, shopify virtual assistant, amazon FBA assistant, product listing VA, inventory management VA, customer service VA ecommerce',
  openGraph: {
    title: 'Virtual Assistants for E-commerce | Smart VAs for Online Retail',
    description: 'Specialized virtual assistant services for e-commerce businesses. Smart VAs who understand online retail and customer service.',
    url: 'https://smartestassistant.com/industries/ecommerce',
  }
}

const ecommerceChallenges = [
  {
    challenge: 'Order Management Complexity',
    description: 'Multiple sales channels creating operational chaos',
    solution: 'Centralized order processing and fulfillment coordination',
    impact: 'Reduce order processing errors by 90%'
  },
  {
    challenge: 'Customer Service Volume',
    description: 'Support requests growing faster than team capacity',
    solution: 'Trained e-commerce support specialists who know your products',
    impact: 'Maintain <2 hour response times during peak seasons'
  },
  {
    challenge: 'Inventory Tracking',
    description: 'Stock levels, reorders, and supplier coordination',
    solution: 'Proactive inventory management and supplier relations',
    impact: 'Eliminate stockouts and reduce carrying costs by 25%'
  },
  {
    challenge: 'Multi-Channel Management',
    description: 'Managing listings, pricing, and promotions across platforms',
    solution: 'Platform-specific optimization and coordinated campaigns',
    impact: 'Increase average order value by 30%'
  }
]

const ecommerceServices = [
  {
    service: 'Order Processing & Fulfillment',
    description: 'End-to-end order management, shipping coordination, tracking updates',
    platforms: 'Shopify, WooCommerce, Amazon, eBay, Etsy'
  },
  {
    service: 'Customer Service & Support',
    description: 'Product inquiries, returns, refunds, live chat support',
    platforms: 'Zendesk, Intercom, Gorgias, Freshdesk'
  },
  {
    service: 'Product Listing Optimization',
    description: 'SEO-optimized listings, photography coordination, A+ content',
    platforms: 'Amazon Seller Central, Shopify, Magento'
  },
  {
    service: 'Inventory Management',
    description: 'Stock tracking, reorder management, supplier coordination',
    platforms: 'TradeGecko, Cin7, inFlow, Orderhive'
  },
  {
    service: 'Marketing & Promotions',
    description: 'Email campaigns, social media, PPC management, influencer outreach',
    platforms: 'Mailchimp, Klaviyo, Facebook Ads, Google Ads'
  },
  {
    service: 'Analytics & Reporting',
    description: 'Sales reporting, performance analysis, competitor monitoring',
    platforms: 'Google Analytics, Shopify Analytics, Jungle Scout'
  }
]

const platformExpertise = [
  { platform: 'Shopify & Shopify Plus', specialization: 'Store setup, theme customization, app integration' },
  { platform: 'Amazon FBA', specialization: 'Seller Central management, PPC optimization, compliance' },
  { platform: 'WooCommerce', specialization: 'WordPress integration, payment gateways, plugins' },
  { platform: 'Magento', specialization: 'B2B e-commerce, complex catalogs, multi-store' },
  { platform: 'BigCommerce', specialization: 'Enterprise scaling, API integrations, headless commerce' },
  { platform: 'Etsy', specialization: 'Handmade products, SEO optimization, seasonal campaigns' }
]

const ecommerceTestimonials = [
  {
    name: 'Jennifer Martinez',
    role: 'E-commerce Director',
    company: 'Lifestyle Brands Co.',
    content: 'Managing 5 different sales channels was chaos until we got our Smartest Assistant VA team. They handle everything from inventory updates to customer service, and our order accuracy is now 99.8%. Best decision we ever made.',
    rating: 5,
    location: 'Miami, FL'
  },
  {
    name: 'David Park',
    role: 'Amazon FBA Seller',
    company: 'Peak Performance Products',
    content: 'My Amazon business was stuck because I was doing everything myself. My Smartest Assistant VA handles PPC optimization, inventory management, and customer service. Revenue increased 150% in 6 months.',
    rating: 5,
    location: 'Seattle, WA'
  }
]

const faqs = [
  {
    question: 'Do your VAs understand e-commerce platforms like Shopify and Amazon?',
    answer: 'Yes, our e-commerce VAs are thoroughly trained on all major platforms including Shopify, Amazon Seller Central, WooCommerce, BigCommerce, and more. They understand platform-specific requirements, policies, and optimization strategies.'
  },
  {
    question: 'Can VAs handle sensitive tasks like inventory management and order processing?',
    answer: 'Absolutely. Our e-commerce VAs are trained in inventory systems, order management workflows, and financial handling. They follow strict protocols for data security and accuracy, with built-in verification processes.'
  },
  {
    question: 'How do VAs handle peak seasons like Black Friday and holiday rushes?',
    answer: 'Our e-commerce VAs are experienced with seasonal fluctuations and can scale support during peak periods. We prepare contingency plans, extended hours coverage, and additional team members to handle increased volume.'
  },
  {
    question: 'Can VAs help with Amazon PPC and advertising optimization?',
    answer: 'Yes, our Amazon-specialized VAs are trained in PPC campaign management, keyword research, bid optimization, and performance analysis. They can manage your advertising spend and optimize for maximum ROI.'
  },
  {
    question: 'Do you provide customer service in multiple languages?',
    answer: 'Yes, we have multilingual VAs who can provide customer support in Spanish, French, German, and other languages depending on your market needs. This is especially valuable for international e-commerce businesses.'
  }
]

export default function EcommercePage() {
  return (
    <>
      <ServiceSchema 
        name="Virtual Assistants for E-commerce"
        description="Specialized virtual assistant services for e-commerce businesses. Smart VAs who understand online retail, inventory management, customer service, and multi-channel operations."
        url="https://smartestassistant.com/industries/ecommerce"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <IndustryHero
        industry="E-commerce"
        industryBenefits={[
          'Streamlined multi-channel operations',
          'Professional customer service that builds loyalty',
          'Proactive inventory and supply chain management',
          'Optimized listings and marketing campaigns'
        ]}
      />

      {/* E-commerce Challenges */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-red-600">E-commerce Operational Overwhelm</H2>
            <Paragraph size="lg">
              Running an online business means juggling inventory, orders, customer service, marketing, and multiple platforms 
              simultaneously. One mistake can damage reviews and revenue, but hiring specialists for every function isn't feasible.
            </Paragraph>
          </div>
          
          <div className="space-y-8">
            {ecommerceChallenges.map((item, index) => (
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

      {/* E-commerce Services */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Complete E-commerce Support Services"
          description="End-to-end virtual assistant services designed specifically for online retail businesses"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecommerceServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <H3 className="mb-4 text-primary-blue">{service.service}</H3>
              <Paragraph className="mb-6 text-gray-600">
                {service.description}
              </Paragraph>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Platforms:</span> {service.platforms}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Platform Expertise */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="E-commerce Platform Expertise"
          description="Deep knowledge and certification in all major e-commerce platforms"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {platformExpertise.map((platform, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <H3 className="mb-4 text-primary-blue">{platform.platform}</H3>
              <Paragraph className="text-gray-700">
                {platform.specialization}
              </Paragraph>
            </div>
          ))}
        </div>
      </Section>

      {/* E-commerce Tools */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="E-commerce Tools We Master"
          description="Proficient with the complete e-commerce technology ecosystem"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            'Shopify', 'Amazon Seller Central', 'WooCommerce', 'BigCommerce', 'Magento', 'Etsy',
            'eBay', 'Facebook Shop', 'Instagram Shop', 'Google Shopping', 'Walmart Marketplace', 'Rakuten',
            'Klaviyo', 'Mailchimp', 'Gorgias', 'Zendesk', 'Intercom', 'LiveChat',
            'TradeGecko', 'Cin7', 'Orderhive', 'Shipstation', 'Easyship', 'Printful',
            'Google Analytics', 'Hotjar', 'Triple Whale', 'Jungle Scout', 'Helium 10', 'AMZScout'
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
          title="E-commerce Success Stories"
          description="How online retailers scale and optimize with smart VA support"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ecommerceTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* E-commerce ROI */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">E-commerce ROI That Drives Growth</H2>
          <Paragraph size="lg" className="mb-12 text-blue-100">
            Smart VAs deliver exceptional ROI for e-commerce businesses by optimizing operations 
            and enabling focus on growth and strategy
          </Paragraph>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-3xl font-bold text-white mb-2">35%</div>
              <div className="text-blue-100 mb-4">Average Revenue Increase</div>
              <Paragraph className="text-sm text-blue-200">
                Through optimized operations and better customer service
              </Paragraph>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-3xl font-bold text-white mb-2">60%</div>
              <div className="text-blue-100 mb-4">Time Savings</div>
              <Paragraph className="text-sm text-blue-200">
                More time for strategy, product development, and growth
              </Paragraph>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-3xl font-bold text-white mb-2">25%</div>
              <div className="text-blue-100 mb-4">Cost Reduction</div>
              <Paragraph className="text-sm text-blue-200">
                Lower operational costs through efficient processes
              </Paragraph>
            </div>
          </div>
          
          <Button as="link" href="/resources/tools/roi-calculator" variant="secondary" size="lg">
            Calculate E-commerce ROI
          </Button>
        </div>
      </Section>

      {/* Seasonal Support */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Peak Season & Holiday Support"
            description="Scalable support for high-volume periods that make or break e-commerce businesses"
          />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <H3 className="mb-6">High-Volume Period Preparation</H3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Pre-season inventory planning and stock management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Extended customer service hours and coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Campaign coordination across all channels</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Real-time monitoring and issue resolution</span>
                </li>
              </ul>
            </div>
            
            <div>
              <H3 className="mb-6">Peak Season Success Metrics</H3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="font-semibold text-green-800">99.5% Order Accuracy</div>
                  <div className="text-green-700 text-sm">During Black Friday/Cyber Monday</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="font-semibold text-blue-800">&lt; 1 Hour Response</div>
                  <div className="text-blue-700 text-sm">Customer service during peak times</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="font-semibold text-purple-800">40% Revenue Increase</div>
                  <div className="text-purple-700 text-sm">Average holiday season performance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="E-commerce VA FAQ"
            description="Common questions from online retail businesses"
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
          <H2 className="mb-6 text-white">Ready to Scale Your E-commerce Operations?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Join 300+ online retailers that trust Smartest Assistant to handle their operations. 
            Get e-commerce VAs who understand your platform, your products, and your customers.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Get E-commerce VA Team
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free e-commerce audit</div>
            <div>✅ Platform-specific expertise</div>
            <div>✅ Peak season support guaranteed</div>
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
            <Link href="/industries/saas-startups" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🚀</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">SaaS & Startups</H3>
              <Paragraph className="text-gray-600">
                Specialized support for tech companies and high-growth SaaS businesses.
              </Paragraph>
            </Link>
            
            <Link href="/services/customer-support" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">💬</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Customer Support</H3>
              <Paragraph className="text-gray-600">
                Professional customer service that builds loyalty and drives repeat purchases.
              </Paragraph>
            </Link>
            
            <Link href="/services/social-media-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📱</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">E-commerce Marketing</H3>
              <Paragraph className="text-gray-600">
                Strategic marketing support to drive traffic and conversions for your online store.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}