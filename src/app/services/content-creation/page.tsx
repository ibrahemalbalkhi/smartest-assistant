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
  title: 'Content Creation Virtual Assistant Services | Expert Writers | Smartest Assistant',
  description: 'Professional content creation by smart VAs. Blog posts, social media, web copy, email campaigns, and marketing materials. High-quality content that converts.',
  keywords: 'content creation virtual assistant, copywriting VA, blog writing virtual assistant, social media content creation, marketing content VA',
  openGraph: {
    title: 'Content Creation Virtual Assistant Services | Expert Writers',
    description: 'Professional content creation by smart VAs. High-quality content that converts and engages.',
    url: 'https://smartestassistant.com/services/content-creation',
  }
}


const contentProcess = [
  {
    step: 1,
    title: 'Brand Voice Analysis',
    description: 'We study your existing content, brand guidelines, and target audience to develop a comprehensive content strategy aligned with your voice.'
  },
  {
    step: 2,
    title: 'Content Creation',
    description: 'Your VA creates high-quality content following your brand voice, SEO best practices, and conversion optimization principles.'
  },
  {
    step: 3,
    title: 'Review & Optimization',
    description: 'All content goes through quality review, SEO optimization, and performance tracking to continuously improve results.'
  }
]

const contentTypes = [
  {
    type: 'Blog Content',
    icon: '📝',
    description: 'SEO-optimized blog posts that drive organic traffic and establish thought leadership',
    deliverables: ['2,000+ word articles', 'Keyword optimization', 'Internal linking', 'Meta descriptions']
  },
  {
    type: 'Social Media',
    icon: '📱',
    description: 'Engaging social media content that builds community and drives engagement',
    deliverables: ['Platform-specific posts', 'Hashtag research', 'Visual content ideas', 'Posting schedules']
  },
  {
    type: 'Marketing Copy',
    icon: '🎯',
    description: 'High-converting copy for websites, emails, and marketing campaigns',
    deliverables: ['Landing page copy', 'Email sequences', 'Ad copy', 'Product descriptions']
  },
  {
    type: 'Long-Form Content',
    icon: '📚',
    description: 'Comprehensive guides, whitepapers, and case studies for lead generation',
    deliverables: ['Research reports', 'Case studies', 'Whitepapers', 'eBooks']
  }
]

const faqs = [
  {
    question: 'How do you ensure content matches our brand voice?',
    answer: 'We begin with a comprehensive brand voice analysis, reviewing your existing content, style guides, and target audience. Your VA is trained on your specific tone, terminology, and messaging approach before creating any content.'
  },
  {
    question: 'Can you handle technical or industry-specific content?',
    answer: 'Yes, our VAs are skilled researchers who can quickly learn industry terminology and technical concepts. We match you with VAs who have experience in your sector or similar technical fields for best results.'
  },
  {
    question: 'What\'s included in SEO optimization?',
    answer: 'We include keyword research, on-page optimization, meta descriptions, internal linking, and content structure optimization. We also track content performance and make data-driven improvements.'
  },
  {
    question: 'How do you handle content revisions?',
    answer: 'Each piece includes up to 2 rounds of revisions. We gather detailed feedback to improve future content creation and ensure every piece meets your exact requirements and brand standards.'
  },
  {
    question: 'Can you create content calendars and strategies?',
    answer: 'Absolutely. Our VAs can develop comprehensive content strategies, create editorial calendars, plan content series, and coordinate content across multiple channels for maximum impact.'
  }
]

const testimonial = {
  id: 'content-creation-testimonial-1',
  name: 'Maria Rodriguez',
  role: 'Marketing Director',
  company: 'GrowthTech Inc',
  content: 'Our content output increased 400% after partnering with Smartest Assistant. Their VA doesn\'t just write - they research, optimize, and strategize. Our organic traffic doubled in 6 months thanks to their SEO-optimized blog content.',
  rating: 5,
  location: 'Miami, FL'
}

export default function ContentCreationPage() {
  return (
    <>
      <ServiceSchema 
        name="Content Creation Virtual Assistant Services"
        description="Professional content creation services by smart virtual assistants. Blog posts, social media, web copy, email campaigns, and marketing materials that convert."
        url="https://smartestassistant.com/services/content-creation"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <ServiceHero
        title="Content Creation by Smart Virtual Assistants"
        subtitle="HIGH-CONVERTING CONTENT"
        description="Stop struggling with content creation. Our smart VAs produce high-quality, on-brand content that engages your audience and drives conversions across all channels."
        features={[
          'SEO-optimized content that ranks',
          '4x increase in content output',
          'Brand voice consistency',
          'Multi-channel content strategy'
        ]}
      />

      {/* The Challenge */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-red-600">Content Creation Is Your Biggest Bottleneck</H2>
            <Paragraph size="lg">
              You know content drives growth, but creating quality content consistently is overwhelming. 
              You're either publishing mediocre content or missing deadlines entirely, both killing your marketing ROI.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">⏰ The Time Trap</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• Spending 6+ hours on a single blog post</li>
                <li>• Missing publication deadlines regularly</li>
                <li>• Inconsistent posting schedule hurts SEO</li>
                <li>• No time for content strategy or planning</li>
                <li>• Pulling team members from core work</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">📉 The Quality Dilemma</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• Generic content that doesn't convert</li>
                <li>• Poor SEO optimization hurts rankings</li>
                <li>• Inconsistent brand voice across channels</li>
                <li>• No content strategy or editorial calendar</li>
                <li>• Low engagement and conversion rates</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Solution */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-green-600">Strategic Content That Converts</H2>
            <Paragraph size="lg">
              Our smart VAs don't just write content – they research your audience, understand your goals, 
              and create strategic content that builds authority and drives measurable business results.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              title="Strategic Content Planning"
              description="Data-driven content strategies that align with your business goals and audience needs"
              icon={<span className="text-3xl">📊</span>}
            />
            
            <FeatureCard
              title="SEO Expertise"
              description="Every piece is optimized for search engines while maintaining readability and engagement"
              icon={<span className="text-3xl">🚀</span>}
            />
            
            <FeatureCard
              title="Brand Voice Mastery"
              description="Consistent, authentic brand voice across all content that builds trust and recognition"
              icon={<span className="text-3xl">🎯</span>}
            />
          </div>
        </div>
      </Section>

      {/* Content Types */}
      <Section spacing="lg">
        <SectionHeader
          title="Content That Drives Results"
          description="Comprehensive content services for every stage of your customer journey"
        />
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contentTypes.map((content, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-blue">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{content.icon}</span>
                <H3>{content.type}</H3>
              </div>
              
              <Paragraph className="text-gray-600 mb-6">
                {content.description}
              </Paragraph>
              
              <div className="space-y-2">
                <div className="font-semibold text-gray-800 text-sm mb-3">What You Get:</div>
                {content.deliverables.map((deliverable, deliverableIndex) => (
                  <div key={deliverableIndex} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Tools Integration */}
        <div className="bg-gray-50 rounded-xl p-8">
          <H3 className="text-center mb-8">Content & Marketing Tools We Master</H3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {['WordPress', 'HubSpot', 'Mailchimp', 'Canva', 'Ahrefs', 'SEMrush', 'Google Analytics', 'Buffer', 'Hootsuite', 'ConvertKit', 'Grammarly', 'BuzzSumo'].map((tool) => (
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
          title="How Our Content Creation Process Works"
          description="From strategy to publication, we handle every aspect of content creation"
          theme="dark"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contentProcess.map((process) => (
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
            Start Content Creation
          </Button>
        </div>
      </Section>

      {/* Results Section */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Results You Can Expect"
          description="Measurable improvements our clients experience with strategic content creation"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <StatCard 
            value="4x" 
            label="Content output"
            description="Increase in published content"
          />
          <StatCard 
            value="150%" 
            label="Organic traffic"
            description="Average traffic increase"
          />
          <StatCard 
            value="85%" 
            label="Time savings"
            description="More time for strategy"
          />
        </div>
        
        <div className="text-center mb-12">
          <div className="bg-green-50 rounded-xl p-8 max-w-3xl mx-auto">
            <H3 className="mb-4 text-green-800">Content Quality Guarantee</H3>
            <Paragraph>
              Every piece of content includes 2 rounds of revisions and must meet our quality standards 
              for SEO, readability, and brand alignment before delivery. Your satisfaction is guaranteed.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Client Success Story"
            description="See how strategic content creation transformed this company's marketing results"
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
            description="Common questions about our content creation services"
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
          <H2 className="mb-6 text-white">Ready to Scale Your Content Marketing?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Stop letting content creation slow down your marketing. Get smart VAs who create 
            strategic, high-converting content that drives real business results.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Start Creating Content
            </Button>
            <Button as="link" href="/resources/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ SEO-optimized content</div>
            <div>✅ Brand voice training</div>
            <div>✅ Start this week</div>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Services"
            description="Maximize your content marketing with these complementary services"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/social-media-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📱</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Social Media Management</H3>
              <Paragraph className="text-gray-600">
                Distribute and amplify your content across social media platforms for maximum reach.
              </Paragraph>
            </Link>
            
            <Link href="/services/email-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📧</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Email Marketing</H3>
              <Paragraph className="text-gray-600">
                Turn your content into effective email campaigns and nurture sequences.
              </Paragraph>
            </Link>
            
            <Link href="/services/cold-outreach" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🎯</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Cold Outreach</H3>
              <Paragraph className="text-gray-600">
                Use your content assets in targeted outreach campaigns for lead generation.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}