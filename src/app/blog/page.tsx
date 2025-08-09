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

export const metadata: Metadata = {
  title: 'Blog | Virtual Assistant Tips, Strategies & Business Growth',
  description: 'Discover actionable insights, virtual assistant strategies, and business growth tips from the Smartest Assistant team. Learn how to maximize productivity with professional VA support.',
  keywords: 'virtual assistant blog, VA tips, business productivity, delegation strategies, remote work, business growth tips',
  openGraph: {
    title: 'Blog | Virtual Assistant Tips & Business Growth Strategies',
    description: 'Expert insights and practical advice for working with virtual assistants and growing your business.',
    url: 'https://smartestassistant.com/blog',
  }
}

const featuredPosts = [
  {
    title: 'The Complete Guide to Delegating Strategic Tasks to Virtual Assistants',
    excerpt: 'Learn how to identify which tasks to delegate, how to communicate expectations effectively, and how to build trust with your virtual assistant for strategic work.',
    category: 'Strategy',
    readTime: '8 min read',
    date: 'January 15, 2024',
    slug: 'complete-guide-delegating-strategic-tasks',
    featured: true
  },
  {
    title: '10 Signs You\'re Ready to Hire a Virtual Assistant (And 3 Signs You\'re Not)',
    excerpt: 'Discover the key indicators that show you\'re ready to scale with virtual assistant support, plus common mistakes that suggest you should wait.',
    category: 'Getting Started',
    readTime: '6 min read',
    date: 'January 10, 2024',
    slug: '10-signs-ready-hire-virtual-assistant',
    featured: true
  },
  {
    title: 'ROI Calculator: How Much Money Can a Virtual Assistant Actually Save?',
    excerpt: 'Break down the real costs and savings of hiring a virtual assistant with our comprehensive ROI analysis and calculator.',
    category: 'ROI & Costs',
    readTime: '5 min read',
    date: 'January 8, 2024',
    slug: 'roi-calculator-virtual-assistant-savings',
    featured: true
  }
]

const recentPosts = [
  {
    title: 'Email Management Best Practices: How VAs Handle 200+ Emails Daily',
    excerpt: 'Behind-the-scenes look at how professional virtual assistants manage high-volume email accounts while maintaining quality and responsiveness.',
    category: 'Operations',
    readTime: '7 min read',
    date: 'January 12, 2024',
    slug: 'email-management-best-practices-vas'
  },
  {
    title: 'Social Media Management for Busy Entrepreneurs: A VA Partnership Guide',
    excerpt: 'Step-by-step framework for collaborating with virtual assistants on social media strategy, content creation, and community management.',
    category: 'Social Media',
    readTime: '9 min read',
    date: 'January 5, 2024',
    slug: 'social-media-management-va-partnership-guide'
  },
  {
    title: 'The Hidden Costs of DIY: What Entrepreneurs Lose by Not Delegating',
    excerpt: 'Analyze the opportunity costs, stress factors, and growth limitations that come from trying to do everything yourself.',
    category: 'Business Growth',
    readTime: '6 min read',
    date: 'January 3, 2024',
    slug: 'hidden-costs-diy-entrepreneurs-not-delegating'
  },
  {
    title: 'Building Remote Work Relationships: How to Connect with Your VA',
    excerpt: 'Practical strategies for building trust, communication, and partnership with virtual team members across different time zones.',
    category: 'Remote Work',
    readTime: '8 min read',
    date: 'December 28, 2023',
    slug: 'building-remote-work-relationships-with-va'
  },
  {
    title: 'Industry Spotlight: How SaaS Companies Scale with Strategic VAs',
    excerpt: 'Case studies and best practices from SaaS companies that have successfully integrated virtual assistants into their growth strategies.',
    category: 'Industry Focus',
    readTime: '10 min read',
    date: 'December 25, 2023',
    slug: 'saas-companies-scale-strategic-virtual-assistants'
  },
  {
    title: 'Calendar Management Mastery: Time-Blocking Strategies That Work',
    excerpt: 'Advanced calendar management techniques that VAs use to optimize executive schedules and maximize productive time.',
    category: 'Productivity',
    readTime: '5 min read',
    date: 'December 22, 2023',
    slug: 'calendar-management-mastery-time-blocking-strategies'
  }
]

const categories = [
  { name: 'Strategy', count: 12, description: 'High-level strategic thinking and planning' },
  { name: 'Getting Started', count: 8, description: 'First steps with virtual assistants' },
  { name: 'ROI & Costs', count: 6, description: 'Financial impact and cost analysis' },
  { name: 'Operations', count: 15, description: 'Operational efficiency and processes' },
  { name: 'Remote Work', count: 10, description: 'Remote collaboration best practices' },
  { name: 'Industry Focus', count: 9, description: 'Industry-specific insights and case studies' },
  { name: 'Productivity', count: 11, description: 'Time management and productivity tips' },
  { name: 'Business Growth', count: 7, description: 'Scaling and growth strategies' }
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6">Virtual Assistant Insights & Strategy</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600">
            Discover expert insights, practical strategies, and actionable tips for maximizing your productivity 
            and business growth through strategic virtual assistant partnerships.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/schedule-a-call" variant="primary" size="lg">
              Get Strategic VA Support
            </Button>
            <Button as="link" href="/resources" variant="outline" size="lg">
              Browse All Resources
            </Button>
          </div>
        </div>
      </Section>

      {/* Featured Posts */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Featured Articles"
          description="Our most popular and impactful content about virtual assistant partnerships"
          centered
          theme="dark"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 group hover:bg-white/20 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-accent-amber text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
                <span className="text-blue-200 text-sm">{post.readTime}</span>
              </div>
              
              <H3 className="mb-3 text-white group-hover:text-amber-200 transition-colors">
                {post.title}
              </H3>
              
              <Paragraph className="text-blue-100 mb-4 text-sm leading-relaxed">
                {post.excerpt}
              </Paragraph>
              
              <div className="flex items-center justify-between">
                <span className="text-blue-300 text-sm">{post.date}</span>
                <span className="text-amber-300 text-sm font-medium group-hover:text-amber-200 transition-colors">
                  Read More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Recent Posts */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Recent Articles"
          description="Latest insights and strategies from our virtual assistant experts"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg group hover:shadow-xl transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>
              
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">
                {post.title}
              </H3>
              
              <Paragraph className="text-gray-600 mb-4 text-sm leading-relaxed">
                {post.excerpt}
              </Paragraph>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">{post.date}</span>
                <span className="text-primary-blue text-sm font-medium group-hover:text-primary-dark transition-colors">
                  Read Article →
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Categories */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Browse by Category"
          description="Find content that matches your specific interests and needs"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer group">
              <div className="flex items-center justify-between mb-3">
                <H3 className="text-lg group-hover:text-primary-blue transition-colors">
                  {category.name}
                </H3>
                <span className="bg-primary-blue text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {category.count}
                </span>
              </div>
              <Paragraph className="text-gray-600 text-sm">
                {category.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Stay Updated with VA Insights"
            description="Get the latest virtual assistant strategies and business growth tips delivered to your inbox"
            centered
            theme="dark"
          />
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <H3 className="mb-4 text-white">Weekly VA Strategy Newsletter</H3>
            <Paragraph className="text-blue-100 mb-6">
              Join 5,000+ business owners who receive weekly insights on delegation strategies, 
              productivity tips, and virtual assistant best practices.
            </Paragraph>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-accent-amber"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
            
            <div className="text-blue-200 text-sm mt-4">
              No spam, unsubscribe anytime. Read by CEOs, founders, and executives.
            </div>
          </div>
        </div>
      </Section>

      {/* Popular Tags */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Popular Topics"
            description="Trending topics and frequently searched content"
            centered
          />
          
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'Email Management', 'Calendar Scheduling', 'Social Media', 'Content Creation',
              'Research', 'Data Entry', 'Customer Service', 'Project Management',
              'Lead Generation', 'Administrative Tasks', 'Strategic Planning', 'Process Optimization',
              'Remote Team Building', 'Productivity Hacks', 'Time Management', 'Business Growth'
            ].map((tag, index) => (
              <span key={index} className="bg-white px-4 py-2 rounded-full text-gray-700 hover:bg-primary-blue hover:text-white transition-colors cursor-pointer text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready to Implement These Strategies?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Reading about virtual assistant strategies is just the first step. Let's discuss how to implement 
            these insights with a strategic VA who understands your business needs.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Schedule Strategy Consultation
            </Button>
            <Button as="link" href="/resources/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Strategic VA matching</div>
            <div>✅ Custom implementation plan</div>
            <div>✅ Ongoing optimization support</div>
          </div>
        </div>
      </Section>

      {/* Related Resources */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="More Resources"
            description="Additional tools and guides to maximize your virtual assistant partnership"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/resources/roi-calculator" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">ROI Calculator</H3>
              <Paragraph className="text-gray-600">
                Calculate the potential return on investment from hiring a virtual assistant for your specific business needs.
              </Paragraph>
            </Link>
            
            <Link href="/resources/task-audit" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">✅</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Task Audit Tool</H3>
              <Paragraph className="text-gray-600">
                Identify which of your current tasks are perfect candidates for delegation to a virtual assistant.
              </Paragraph>
            </Link>
            
            <Link href="/resources/delegation-guide" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📋</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Delegation Guide</H3>
              <Paragraph className="text-gray-600">
                Step-by-step guide for effectively delegating tasks and building productive relationships with VAs.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}