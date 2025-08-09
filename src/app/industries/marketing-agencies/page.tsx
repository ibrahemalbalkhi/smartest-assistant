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
  TestimonialCard
} from '@/components/ui'
import FAQAccordion from '@/components/ui/FAQ'
import { IndustryHero } from '@/components/sections'
import { ServiceSchema, FAQSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Virtual Assistants for Marketing Agencies | Creative VAs | Smartest Assistant',
  description: 'Specialized virtual assistant services for marketing agencies, digital marketing firms, and creative agencies. Professional VAs who understand marketing workflows and client campaigns.',
  keywords: 'marketing agency virtual assistant, digital marketing VA, creative agency assistant, marketing campaign support, social media agency VA, advertising agency assistant',
  openGraph: {
    title: 'Virtual Assistants for Marketing Agencies | Creative VAs',
    description: 'Specialized virtual assistant services for marketing agencies. Professional VAs who understand marketing workflows and creative campaigns.',
    url: 'https://smartestassistant.com/industries/marketing-agencies',
  }
}

const agencyChallenges = [
  {
    challenge: 'Client Campaign Management & Coordination',
    description: 'Multiple client campaigns running simultaneously with different timelines and deliverables',
    solution: 'Campaign-focused VAs who can manage multiple client workstreams and coordinate deliverables',
    impact: 'Improve campaign delivery speed by 50% and client satisfaction scores'
  },
  {
    challenge: 'Content Production & Asset Management',
    description: 'High-volume content creation, asset organization, and creative file management',
    solution: 'Creative-savvy VAs skilled in content tools and digital asset management systems',
    impact: 'Increase content output by 75% and reduce asset retrieval time significantly'
  },
  {
    challenge: 'Social Media Management & Scheduling',
    description: 'Managing multiple client social accounts, content calendars, and posting schedules',
    solution: 'Social media specialist VAs who understand platform best practices and scheduling tools',
    impact: 'Maintain consistent posting schedules and improve engagement rates by 40%'
  },
  {
    challenge: 'Client Reporting & Performance Analytics',
    description: 'Regular performance reports, ROI analysis, and campaign effectiveness measurement',
    solution: 'Analytics-focused VAs who can compile data and create professional client reports',
    impact: 'Reduce reporting time by 60% and provide more comprehensive campaign insights'
  }
]

const agencyServices = [
  {
    service: 'Campaign Management & Coordination',
    description: 'Multi-client campaign tracking, timeline management, deliverable coordination, client communication',
    tools: 'Monday.com, Asana, Basecamp, Slack, client portal systems, project management software'
  },
  {
    service: 'Content Creation & Management',
    description: 'Blog writing, social media content, email campaigns, graphic design support, video editing assistance',
    tools: 'Canva, Adobe Creative Suite, Buffer, Hootsuite, WordPress, video editing software'
  },
  {
    service: 'Social Media Management',
    description: 'Content scheduling, community management, hashtag research, engagement monitoring, trend analysis',
    tools: 'Buffer, Hootsuite, Sprout Social, Later, Facebook Creator Studio, Instagram tools'
  },
  {
    service: 'Analytics & Reporting',
    description: 'Performance tracking, ROI analysis, campaign reporting, data visualization, client dashboard creation',
    tools: 'Google Analytics, Facebook Analytics, SEMrush, Ahrefs, Data Studio, Tableau'
  },
  {
    service: 'Client Communication & Support',
    description: 'Client onboarding, regular updates, feedback collection, meeting coordination, account management',
    tools: 'CRM systems, email platforms, video conferencing, client communication tools'
  },
  {
    service: 'Lead Generation & Business Development',
    description: 'Prospect research, outreach campaigns, proposal support, competitive analysis, market research',
    tools: 'LinkedIn Sales Navigator, CRM platforms, proposal software, research databases'
  }
]

const agencyTestimonials = [
  {
    id: 'marketing-agency-testimonial-1',
    name: 'Rachel Thompson',
    role: 'Creative Director',
    company: 'Elevate Digital Marketing',
    content: 'Our agency VA has revolutionized our workflow. They manage 15+ client social accounts, coordinate all our content production, and handle client reporting. We\'ve doubled our client capacity without hiring additional full-time staff. They truly understand the agency hustle.',
    rating: 5,
    location: 'Portland, OR'
  },
  {
    id: 'marketing-agency-testimonial-2',
    name: 'Marcus Johnson',
    role: 'Agency Owner',
    company: 'Johnson Creative Studio',
    content: 'Managing creative timelines across multiple clients was killing our productivity. Our Smartest Assistant VA keeps every project on track, coordinates with our design team, and ensures nothing falls through the cracks. Our on-time delivery rate is now 98%.',
    rating: 5,
    location: 'Nashville, TN'
  }
]

const marketingPlatforms = [
  'Google Ads & Analytics platforms',
  'Facebook Ads Manager & Business Suite',
  'Instagram Creator Studio & Analytics',
  'LinkedIn Campaign Manager & Analytics',
  'Twitter Ads & Analytics Dashboard',
  'TikTok Business & Analytics',
  'YouTube Creator Studio & Analytics',
  'Pinterest Business & Analytics',
  'Snapchat Ads Manager',
  'Email marketing platforms (Mailchimp, Constant Contact)',
  'SEO tools (SEMrush, Ahrefs, Moz)',
  'Marketing automation (HubSpot, Marketo, Pardot)'
]

const faqs = [
  {
    question: 'Can your VAs manage multiple client campaigns simultaneously?',
    answer: 'Absolutely. Our marketing agency VAs are experienced in managing multiple client workstreams, coordinating different campaign timelines, and maintaining quality standards across all accounts. They use project management tools to ensure nothing falls through the cracks.'
  },
  {
    question: 'Do your VAs understand different social media platforms and their best practices?',
    answer: 'Yes, our VAs are trained on all major social media platforms including Facebook, Instagram, LinkedIn, Twitter, TikTok, and YouTube. They understand platform-specific content requirements, optimal posting times, hashtag strategies, and engagement best practices.'
  },
  {
    question: 'Can your VAs create content and manage creative assets?',
    answer: 'Our VAs can assist with content creation using tools like Canva and basic graphic design, write social media copy and blog posts, and manage digital asset libraries. For complex design work, they coordinate with your creative team and ensure proper file organization.'
  },
  {
    question: 'How do you handle client confidentiality and brand guidelines?',
    answer: 'We implement strict confidentiality protocols and ensure VAs understand and follow each client\'s specific brand guidelines. They receive training on maintaining brand consistency across all touchpoints and understand the importance of protecting client information.'
  },
  {
    question: 'Can your VAs help with analytics and client reporting?',
    answer: 'Yes, our VAs can compile performance data from various marketing platforms, create professional client reports, track KPIs, and provide insights on campaign performance. They understand the metrics that matter most to marketing agencies and their clients.'
  }
]

export default function MarketingAgenciesPage() {
  return (
    <>
      <ServiceSchema 
        name="Virtual Assistant Services for Marketing Agencies"
        description="Specialized virtual assistant services for marketing agencies, digital marketing firms, and creative agencies focused on campaign management and creative support."
        url="https://smartestassistant.com/industries/marketing-agencies"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <IndustryHero
        industry="Marketing & Creative Agencies"
        industryBenefits={[
          'Multi-client campaign management',
          'Creative tool proficiency',
          'Social media expertise',
          'Analytics & reporting skills'
        ]}
        image={{
          src: "/images/marketing-strategy-planning.webp",
          alt: "Marketing team planning strategy and creative campaigns",
          width: 1200,
          height: 600
        }}
      />

      {/* Agency Challenges */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Marketing Agency Challenges We Solve"
          description="Specialized support for the unique operational demands of marketing and creative agencies"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {agencyChallenges.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-red-100 rounded-full p-3">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <H3 className="mb-2 text-red-700">{item.challenge}</H3>
                  <Paragraph className="text-gray-600 mb-4">{item.description}</Paragraph>
                </div>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 mb-4">
                <div className="font-semibold text-green-800 mb-1">Our Solution:</div>
                <div className="text-gray-700">{item.solution}</div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-3">
                <div className="font-semibold text-green-800 text-sm">Expected Impact:</div>
                <div className="text-green-700 text-sm">{item.impact}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Agency Services */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Comprehensive Marketing Agency VA Services"
          description="Complete operational support tailored for marketing and creative agencies"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agencyServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-3xl mb-4">
                {index === 0 && '📋'}
                {index === 1 && '✨'}
                {index === 2 && '📱'}
                {index === 3 && '📊'}
                {index === 4 && '🤝'}
                {index === 5 && '🎯'}
              </div>
              <H3 className="mb-3">{service.service}</H3>
              <Paragraph className="text-gray-600 mb-4">
                {service.description}
              </Paragraph>
              <div className="text-sm text-primary-blue font-medium">
                Platform Expertise: {service.tools}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Marketing Platforms Section */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Marketing Platforms & Tools We Master"
          description="Comprehensive expertise across all major marketing and analytics platforms"
          theme="dark"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {marketingPlatforms.map((platform, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white font-medium text-sm">{platform}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto">
            <H3 className="mb-4 text-white">Marketing Technology Stack</H3>
            <Paragraph className="text-blue-100">
              Our VAs are continuously trained on the latest marketing platforms, tools, and best practices. 
              We stay current with platform updates, new features, and industry trends to keep your agency competitive.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Marketing Agency Results"
          description="Measurable improvements agencies experience with specialized marketing VA support"
        />
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <StatCard 
            value="75%" 
            label="Increased content output"
            description="More campaigns delivered"
          />
          <StatCard 
            value="50%" 
            label="Faster campaign delivery"
            description="Improved client satisfaction"
          />
          <StatCard 
            value="40%" 
            label="Better engagement rates"
            description="Consistent social presence"
          />
          <StatCard 
            value="60%" 
            label="Reduced reporting time"
            description="More strategic focus"
          />
        </div>
        
        <div className="text-center">
          <div className="bg-green-50 rounded-xl p-8 max-w-3xl mx-auto">
            <H3 className="mb-4 text-green-800">Agency Growth Promise</H3>
            <Paragraph>
              We help agencies scale without the overhead of additional full-time hires. 
              Our VAs integrate seamlessly into your team and adapt to your unique workflows and client requirements.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Success Stories */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Marketing Agency Success Stories"
          description="How agencies scale their operations and improve client delivery with creative VAs"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {agencyTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Marketing Agency VA Frequently Asked Questions"
            description="Common questions from agency owners and marketing professionals"
            centered
          />
          
          <FAQAccordion 
            faqs={faqs}
            className="space-y-6"
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready to Scale Your Marketing Agency?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Get creative VAs who understand marketing workflows, campaign management, and client deliverables. 
            Focus on strategy and creativity while we handle the execution and coordination.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Book Agency Consultation
            </Button>
            <Button as="link" href="/resources/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Agency ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Multi-platform expertise</div>
            <div>✅ Creative tool proficiency</div>
            <div>✅ Start within 48 hours</div>
          </div>
        </div>
      </Section>

      {/* Related Pages */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Marketing Services"
            description="Comprehensive support for marketing agencies and creative businesses"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/social-media-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📱</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Social Media Management</H3>
              <Paragraph className="text-gray-600">
                Comprehensive social media support across all platforms with content creation, scheduling, and engagement management.
              </Paragraph>
            </Link>
            
            <Link href="/services/content-creation" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">✨</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Content Creation</H3>
              <Paragraph className="text-gray-600">
                Professional content development including blog posts, social media content, and marketing copy that converts.
              </Paragraph>
            </Link>
            
            <Link href="/services/email-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📧</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Email Marketing</H3>
              <Paragraph className="text-gray-600">
                Complete email marketing support including campaign creation, list management, and performance analysis.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}