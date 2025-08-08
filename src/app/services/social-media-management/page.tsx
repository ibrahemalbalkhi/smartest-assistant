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
  title: 'Social Media Management Virtual Assistant | Smart Social VAs | Smartest Assistant',
  description: 'Strategic social media management by smart VAs who grow your presence authentically. Content creation, scheduling, engagement, and analytics across all platforms.',
  keywords: 'social media virtual assistant, social media management VA, instagram virtual assistant, linkedin virtual assistant, facebook management assistant, social media scheduling assistant',
  openGraph: {
    title: 'Social Media Management Virtual Assistant | Smart Social VAs',
    description: 'Strategic social media management by smart VAs who grow your presence authentically. Content creation, scheduling, and community management.',
    url: 'https://smartestassistant.com/services/social-media-management',
  }
}

const serviceFeatures = [
  'Strategic content calendar creation and planning',
  'Multi-platform post scheduling and optimization',
  'Community management and audience engagement',
  'Visual content creation and graphic design',
  'Hashtag research and trend analysis',
  'Competitor monitoring and analysis',
  'Performance analytics and reporting',
  'Influencer outreach and collaboration',
  'Social media advertising coordination',
  'Brand voice development and consistency',
  'Crisis management and reputation monitoring',
  'Growth strategy development and execution'
]

const socialMediaPlatforms = [
  { name: 'LinkedIn', focus: 'Professional networking & B2B content' },
  { name: 'Instagram', focus: 'Visual storytelling & brand awareness' },
  { name: 'Facebook', focus: 'Community building & engagement' },
  { name: 'Twitter', focus: 'Real-time updates & thought leadership' },
  { name: 'TikTok', focus: 'Short-form video & trending content' },
  { name: 'YouTube', focus: 'Long-form video & educational content' }
]

const socialMediaProcess = [
  {
    step: 1,
    title: 'Brand & Audience Analysis',
    description: 'We analyze your brand voice, target audience, competitors, and current performance to create a strategic foundation.'
  },
  {
    step: 2,
    title: 'Content Strategy Development',
    description: 'Your VA creates a comprehensive content strategy, editorial calendar, and posting schedule optimized for each platform.'
  },
  {
    step: 3,
    title: 'Execution & Optimization',
    description: 'Daily content creation, posting, engagement, and performance tracking with continuous optimization based on analytics.'
  }
]

const faqs = [
  {
    question: 'How do you maintain consistent brand voice across platforms?',
    answer: 'We create comprehensive brand voice guidelines during onboarding and use content templates that maintain consistency while adapting to each platform\'s unique style. All content is reviewed against your brand standards before publishing.'
  },
  {
    question: 'Can you handle visual content creation and graphic design?',
    answer: 'Yes, our social media VAs are proficient with design tools like Canva, Adobe Creative Suite, and Figma. They create custom graphics, infographics, and visual content that aligns with your brand aesthetic and platform requirements.'
  },
  {
    question: 'How do you handle engagement and community management?',
    answer: 'We actively monitor all platforms for comments, messages, and mentions, responding promptly and authentically in your brand voice. We escalate sensitive issues appropriately and foster positive community interactions that build loyalty.'
  },
  {
    question: 'What analytics and reporting do you provide?',
    answer: 'We provide detailed monthly reports covering engagement rates, reach, growth metrics, top-performing content, and strategic recommendations. We track ROI and adjust strategies based on performance data.'
  },
  {
    question: 'How do you stay current with platform changes and trends?',
    answer: 'Our VAs continuously monitor platform updates, algorithm changes, and trending topics. They participate in ongoing training and use social listening tools to identify relevant trends and opportunities for your brand.'
  }
]

const testimonial = {
  name: 'Rachel Martinez',
  role: 'Founder',
  company: 'EcoGlow Skincare',
  content: 'My social media was an afterthought until I got my Smartest Assistant VA. They transformed my scattered posting into a strategic growth engine. Instagram followers grew 300%, engagement is up 5x, and I\'m actually getting quality leads from social now.',
  rating: 5,
  location: 'Los Angeles, CA'
}

export default function SocialMediaManagementPage() {
  return (
    <>
      <ServiceSchema 
        name="Social Media Management Virtual Assistant Services"
        description="Strategic social media management from smart VAs who grow your presence authentically through content creation, community management, and data-driven optimization."
        url="https://smartestassistant.com/services/social-media-management"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <ServiceHero
        title="Social Media Management by Smart Virtual Assistants"
        subtitle="STRATEGIC SOCIAL GROWTH"
        description="Stop posting randomly and start growing strategically. Our smart VAs create authentic content, build engaged communities, and turn your social media into a growth engine."
        features={[
          'Strategic content planning and creation',
          'Authentic community building and engagement',
          'Data-driven optimization and growth',
          'Consistent brand presence across platforms'
        ]}
      />

      {/* The Challenge */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-red-600">Social Media Is Eating Your Time, Not Growing Your Business</H2>
            <Paragraph size="lg">
              You're spending hours creating content, posting randomly, and wondering why your social media 
              isn't generating leads. Meanwhile, competitors with strategic approaches are building engaged 
              communities and driving real business results.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">📱 The Social Media Hamster Wheel</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• Posting inconsistently without a clear strategy</li>
                <li>• Creating content that gets low engagement</li>
                <li>• Spending hours daily with minimal results</li>
                <li>• Struggling to stay current with platform changes</li>
                <li>• Missing opportunities to connect with your audience</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">💰 The Growth Opportunity Cost</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• $45,000+ annual lost opportunity from poor social ROI</li>
                <li>• Competitors gaining market share through better content</li>
                <li>• Brand reputation damage from inconsistent presence</li>
                <li>• Time spent on creation instead of strategy and growth</li>
                <li>• Missed leads from unoptimized social funnels</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Solution */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-green-600">Strategic Social Media That Actually Drives Business Growth</H2>
            <Paragraph size="lg">
              Our social media VAs don't just post content – they build strategic online communities, 
              create authentic brand connections, and optimize every interaction to drive measurable business results.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              title="Strategic Content Planning"
              description="Data-driven content strategies that align with your business goals and resonate with your target audience"
              icon={<span className="text-3xl">🎯</span>}
            />
            
            <FeatureCard
              title="Authentic Community Building"
              description="Genuine engagement that builds loyal followers who become customers and brand advocates"
              icon={<span className="text-3xl">👥</span>}
            />
            
            <FeatureCard
              title="Performance Optimization"
              description="Continuous testing, analysis, and optimization to maximize reach, engagement, and conversions"
              icon={<span className="text-3xl">📈</span>}
            />
          </div>
          
          {/* Comparison */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <H3 className="text-center mb-8">Traditional Social Media VAs vs. Smart Social VAs</H3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-red-600 mb-4">❌ Typical Social Media VAs</h4>
                <ul className="space-y-3 text-gray-600">
                  <li>• Basic posting and scheduling</li>
                  <li>• Generic content without strategy</li>
                  <li>• Limited engagement tactics</li>
                  <li>• Focus on vanity metrics only</li>
                  <li>• Reactive approach to trends and changes</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-600 mb-4">✅ Smartest Assistant Social VAs</h4>
                <ul className="space-y-3 text-gray-600">
                  <li>• Strategic content planning and creation</li>
                  <li>• Brand-aligned content that drives engagement</li>
                  <li>• Proactive community management and growth</li>
                  <li>• Focus on business metrics and ROI</li>
                  <li>• Strategic adaptation to platform evolution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Platform Coverage */}
      <Section spacing="lg">
        <SectionHeader
          title="Complete Platform Coverage"
          description="Strategic management across all social media platforms where your audience is active"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {socialMediaPlatforms.map((platform, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <H3 className="mb-4 text-center text-primary-blue">{platform.name}</H3>
              <Paragraph className="text-center text-gray-600">
                {platform.focus}
              </Paragraph>
            </div>
          ))}
        </div>
        
        {/* What's Included */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <H3 className="mb-6">Content & Strategy</H3>
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
            <H3 className="mb-6">Growth & Analytics</H3>
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
          <H3 className="text-center mb-8">Social Media Tools & Platforms We Master</H3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {['Hootsuite', 'Buffer', 'Later', 'Sprout Social', 'Canva', 'Adobe Creative', 'Figma', 'Meta Business', 'LinkedIn Ads', 'Google Analytics', 'Brandwatch', 'BuzzSumo'].map((tool) => (
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
          title="How Strategic Social Media Management Works"
          description="From brand analysis to growth optimization in three strategic phases"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {socialMediaProcess.map((process) => (
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
            Start Social Growth
          </Button>
        </div>
      </Section>

      {/* Results Section */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Social Media Growth Results"
          description="Measurable improvements our clients experience with strategic social media management"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <StatCard 
            value="250%" 
            label="Average follower growth"
            description="Quality audience building"
          />
          <StatCard 
            value="5x" 
            label="Engagement increase"
            description="Authentic community building"
          />
          <StatCard 
            value="40%" 
            label="Lead conversion improvement"
            description="Strategic content optimization"
          />
        </div>
        
        <div className="text-center mb-12">
          <div className="bg-green-50 rounded-xl p-8 max-w-3xl mx-auto">
            <H3 className="mb-4 text-green-800">Social Growth Guarantee</H3>
            <Paragraph>
              If you don't see measurable improvement in engagement and follower quality within 90 days, 
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
            description="How strategic social media management transformed this founder's brand presence"
            centered
          />
          <TestimonialCard testimonial={testimonial} />
        </div>
      </Section>

      {/* Service Packages */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Social Media Management Packages"
          description="Choose the right level of social media support for your growth goals"
        />
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <H3 className="mb-4 text-center">Essential Social</H3>
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-primary-blue">$1,800</div>
              <div className="text-gray-600">/month</div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>2 platforms management</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>15 posts per month per platform</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Basic content creation & scheduling</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Community management</span>
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
            <H3 className="mb-4 text-center text-white">Growth Social</H3>
            <div className="text-center mb-6">
              <div className="text-3xl font-bold">$2,800</div>
              <div className="text-blue-200">/month</div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>4 platforms management</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>25 posts per month per platform</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Strategic content planning</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Visual content creation</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Hashtag research & optimization</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Detailed analytics & reporting</span>
              </li>
            </ul>
            <Button as="link" href="/schedule-a-call" variant="secondary" size="lg" className="w-full">
              Get Started
            </Button>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <H3 className="mb-4 text-center">Enterprise Social</H3>
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-primary-blue">$4,200</div>
              <div className="text-gray-600">/month</div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>All platforms management</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited content creation</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Advanced video & graphic design</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Influencer outreach & partnerships</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Social advertising coordination</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Dedicated account manager</span>
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
            description="Common questions about our social media management services"
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
          <H2 className="mb-6 text-white">Ready to Turn Social Media Into a Growth Engine?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Stop wasting time on random posts that don't convert. Get strategic social media management 
            that builds communities, drives engagement, and generates real business results.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Start Social Growth
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Social ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free social media audit</div>
            <div>✅ 90-day growth guarantee</div>
            <div>✅ Start this week</div>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Complementary Marketing Services"
            description="Maximize your marketing impact with these integrated services"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/cold-outreach" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📬</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Cold Outreach</H3>
              <Paragraph className="text-gray-600">
                Strategic outreach campaigns that turn social connections into business opportunities.
              </Paragraph>
            </Link>
            
            <Link href="/services/email-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📧</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Email Management</H3>
              <Paragraph className="text-gray-600">
                Professional inbox management to handle the leads and inquiries your social media generates.
              </Paragraph>
            </Link>
            
            <Link href="/services/calendar-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📅</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Calendar Management</H3>
              <Paragraph className="text-gray-600">
                Intelligent scheduling for the calls and meetings your social media strategy generates.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}