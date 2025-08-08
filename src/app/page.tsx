import { HomeHero } from '@/components/sections'
import { 
  Container, 
  Section, 
  SectionHeader, 
  H2,
  H3, 
  Paragraph, 
  Button, 
  ServiceCard, 
  StatCard,
  TestimonialCarousel,
  FeatureCard
} from '@/components/ui'
import { OrganizationSchema } from '@/components/seo/StructuredData'
import { SERVICES } from '@/lib/constants'
import Link from 'next/link'
import Image from 'next/image'

// Mock testimonials data
const testimonials = [
  {
    id: '1',
    name: 'Jennifer Walsh',
    role: 'CEO',
    company: 'TechFlow Solutions',
    content: 'Our Smartest Assistant VA doesn\'t just follow instructions - they anticipate our needs and suggest improvements. We\'ve saved 35 hours per week and our productivity has tripled.',
    rating: 5,
    image: '/images/testimonial-jennifer-walsh.webp',
    location: 'San Francisco, CA'
  },
  {
    id: '2',
    name: 'Michael Thompson',
    role: 'Founder',
    company: 'GrowthLab Marketing',
    content: 'I was skeptical about virtual assistants until I tried Smartest Assistant. Their VA understood our marketing workflows from day one and now manages our entire social media strategy autonomously.',
    rating: 5,
    image: '/images/testimonial-michael-thompson.webp',
    location: 'New York, NY'
  },
  {
    id: '3',
    name: 'Patricia Rodriguez',
    role: 'VP Operations',
    company: 'InnovateCore',
    content: 'The difference is night and day. Previous VAs needed constant supervision, but our Smartest Assistant VA proactively manages our executive calendars and handles complex travel arrangements without any oversight.',
    rating: 5,
    image: '/images/testimonial-patricia-rodriguez.webp',
    location: 'Chicago, IL'
  }
]

// Mock client logos
const clientLogos = [
  { name: 'TechCorp', src: '/logos/techcorp.svg' },
  { name: 'InnovateLabs', src: '/logos/innovatelabs.svg' },
  { name: 'GrowthPartners', src: '/logos/growthpartners.svg' },
  { name: 'ScaleUp', src: '/logos/scaleup.svg' },
  { name: 'VentureFlow', src: '/logos/ventureflow.svg' },
  { name: 'DataDriven', src: '/logos/datadriven.svg' }
]

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      
      {/* Hero Section */}
      <Section background="gradient" spacing="xl">
        <div className="relative max-w-7xl mx-auto">
          {/* Hero Image */}
          <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
            <Image
              src="/images/virtual-assistant-working.webp"
              alt="Smart virtual assistant working efficiently with modern tools"
              width={600}
              height={600}
              className="object-cover h-full w-full rounded-l-3xl opacity-90"
              priority
            />
          </div>
          
        <div className="max-w-5xl mx-auto text-center lg:text-left lg:max-w-3xl lg:pr-12">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-primary-blue text-sm font-semibold rounded-full mb-4">
              ✨ Join 500+ companies saving 40+ hours weekly
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
            Smart Virtual Assistants Who{' '}
            <span className="text-primary-blue">Think Like Partners</span>,{' '}
            <span className="text-accent-amber">Work Like Pros</span>
          </h1>
          
          <Paragraph size="lg" className="mb-8 max-w-3xl mx-auto text-xl lg:text-2xl text-gray-600">
            Stop drowning in tasks. Get a strategic VA who anticipates needs, leverages modern tools, 
            and works autonomously to 10x your productivity.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button as="link" href="/schedule-a-call" size="lg" className="text-lg px-8 py-4">
              Get Your Smart VA Match
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="lg" className="text-lg px-8 py-4">
              Calculate Your Savings
            </Button>
          </div>

          {/* Social Proof - Client Logos */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-600 text-sm mb-6">Trusted by innovative companies worldwide</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
              {clientLogos.map((logo) => (
                <div key={logo.name} className="flex items-center justify-center">
                  <div className="w-24 h-8 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-600">
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </Section>

      {/* Problem-Agitation Section */}
      <Section spacing="lg" background="white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <H2 className="mb-6 text-red-600">
            You&apos;re Bleeding Time, Money, and Opportunities Every Day
          </H2>
          <Paragraph size="lg" className="text-gray-700">
            While you&apos;re stuck in the weeds handling admin work, your competitors are scaling. 
            Every hour you spend on tasks a VA could handle is an hour you&apos;re not growing your business.
          </Paragraph>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">📧</div>
            <H3 className="mb-3 text-red-700">Email Prison</H3>
            <Paragraph className="text-gray-700">
              You&apos;re spending 2.6 hours daily in your inbox while critical business decisions wait. 
              Important emails get buried, follow-ups are forgotten, and opportunities slip away.
            </Paragraph>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">⏰</div>
            <H3 className="mb-3 text-red-700">Time Thief</H3>
            <Paragraph className="text-gray-700">
              Administrative tasks are stealing 40+ hours per week from strategic work. 
              You&apos;re working IN your business instead of ON it, limiting growth potential.
            </Paragraph>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">💸</div>
            <H3 className="mb-3 text-red-700">Revenue Leak</H3>
            <Paragraph className="text-gray-700">
              Every hour you spend on $15/hour tasks instead of $150/hour strategy work 
              costs you $135. That&apos;s $5,400 per week in lost opportunity.
            </Paragraph>
          </div>
        </div>

        <div className="text-center bg-gray-100 rounded-xl p-8">
          <H3 className="mb-4 text-red-700">The Hidden Cost: Burnout & Missed Growth</H3>
          <Paragraph className="max-w-3xl mx-auto">
            You&apos;re not just losing money – you&apos;re losing your sanity. Working 70+ hour weeks, 
            missing family time, and still feeling behind. Meanwhile, competitors with smart delegation 
            are scaling faster with less stress.
          </Paragraph>
        </div>
      </Section>

      {/* Solution Section */}
      <Section background="gray" spacing="lg">
        <div className="text-center mb-12">
          <H2 className="mb-6 text-green-600">
            Finally: VAs Who Actually Think Like Business Partners
          </H2>
          <Paragraph size="lg" className="max-w-4xl mx-auto">
            Stop settling for VAs who need constant hand-holding. Our smart VAs don&apos;t just execute tasks – 
            they understand your business, anticipate problems, and deliver solutions you didn&apos;t even know you needed.
          </Paragraph>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <FeatureCard
              icon={<span className="text-3xl">🧠</span>}
              title="Strategic Thinking, Not Just Task Execution"
              description="While other VAs wait for instructions, ours analyze patterns, spot inefficiencies, and suggest improvements. They think 3 steps ahead so you don't have to."
            />
            
            <FeatureCard
              icon={<span className="text-3xl">🤖</span>}
              title="AI-Powered Efficiency Experts"
              description="Our VAs leverage the latest productivity tools and AI to work smarter, not harder. They're always learning new ways to save you time and money."
            />
          </div>
          
          <div className="space-y-8">
            <FeatureCard
              icon={<span className="text-3xl">🎯</span>}
              title="Truly Autonomous Workers"
              description="No micromanaging required. They understand context, make intelligent decisions, and only escalate when truly necessary. It's like having a junior partner, not another employee to manage."
            />
            
            <FeatureCard
              icon={<span className="text-3xl">🚀</span>}
              title="Proactive Problem Solvers"
              description="They don't wait for problems to become crises. Our VAs identify potential issues early and present solutions, keeping your business running smoothly."
            />
          </div>
        </div>

        {/* Comparison */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <H3 className="text-center mb-8">Traditional VAs vs. Smartest Assistant VAs</H3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-red-600 mb-4">❌ Traditional VAs</h4>
              <div className="space-y-3 text-gray-600">
                <div>• Wait for detailed instructions</div>
                <div>• Need constant supervision</div>
                <div>• Follow processes blindly</div>
                <div>• React to problems after they occur</div>
                <div>• Limited to basic task execution</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-green-600 mb-4">✅ Smartest Assistant VAs</h4>
              <div className="space-y-3 text-gray-600">
                <div>• Understand context and make smart decisions</div>
                <div>• Work autonomously with minimal oversight</div>
                <div>• Optimize processes for better results</div>
                <div>• Anticipate and prevent issues</div>
                <div>• Deliver strategic insights and recommendations</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section spacing="lg">
        <SectionHeader
          title="Services That Scale With You"
          description="From email to executive support, we handle it all so you can focus on growth."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
          
          <ServiceCard 
            service={{
              id: 'calendar-management',
              name: 'Calendar Management',
              slug: 'calendar-management',
              description: 'Never double-book again. Smart scheduling that protects your time and priorities.',
              features: [],
              benefits: [],
              icon: '📅'
            }}
          />
          
          <Link href="/services" className="group">
            <div className="bg-primary-blue text-white rounded-xl p-8 h-full hover:bg-primary-dark transition-colors duration-300">
              <div className="text-3xl mb-4">✨</div>
              <H3 className="mb-3 text-white">15+ More Services</H3>
              <Paragraph className="text-blue-100 mb-4">
                Data entry, research, bookkeeping, customer support, and everything in between.
              </Paragraph>
              <span className="font-semibold group-hover:underline">
                View all services →
              </span>
            </div>
          </Link>
        </div>
      </Section>

      {/* ROI Section */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="The Numbers Speak for Themselves"
          description="Average results our clients experience with smart VAs"
          theme="dark"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <StatCard 
            value="42" 
            label="Hours saved per week"
            description="More time for strategic work"
            variant="dark"
          />
          <StatCard 
            value="$67K" 
            label="Saved per year"
            description="Average cost reduction"
            variant="dark"
          />
          <StatCard 
            value="3X" 
            label="Productivity increase"
            description="Measurable performance gains"
            variant="dark"
          />
        </div>
        
        <div className="text-center">
          <Button as="link" href="/resources/tools/roi-calculator" variant="secondary" size="lg">
            Calculate Your ROI
          </Button>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="What Our Clients Say"
          description="Don't just take our word for it. Here's what business leaders say about their Smartest Assistant VAs."
        />
        <TestimonialCarousel testimonials={testimonials} />
      </Section>

      {/* ROI Calculator Preview */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">See Your Potential Savings</H2>
            <Paragraph size="lg">
              Most clients save $50,000+ annually with our smart VAs. Calculate your specific ROI based on your current workload.
            </Paragraph>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Calculation Example:</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span>Your hourly value:</span>
                    <span className="font-semibold">$150/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Admin time per week:</span>
                    <span className="font-semibold">40 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekly opportunity cost:</span>
                    <span className="font-semibold text-red-600">$6,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Smart VA cost per week:</span>
                    <span className="font-semibold">$1,200</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Weekly savings:</span>
                    <span className="text-green-600">$4,800</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold">
                    <span>Annual savings:</span>
                    <span className="text-green-600">$249,600</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">ROI: 400%</div>
                  <Paragraph>Return on Investment</Paragraph>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="font-semibold text-green-800">✅ Time Recovered</div>
                    <div className="text-green-700">40 hours/week for strategic work</div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-semibold text-blue-800">✅ Stress Reduced</div>
                    <div className="text-blue-700">No more 70-hour workweeks</div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="font-semibold text-purple-800">✅ Growth Enabled</div>
                    <div className="text-purple-700">Focus on high-impact activities</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button as="link" href="/resources/tools/roi-calculator" size="lg">
                    Calculate Your Exact ROI
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="From Overwhelmed to Optimized in 48 Hours"
          description="Our streamlined onboarding gets you working with your perfect VA faster than any other service"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center relative">
            <div className="bg-accent-amber text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
              1
            </div>
            <H3 className="mb-4">Discovery Call (15 min)</H3>
            <Paragraph>
              We dive deep into your business challenges, current workflows, and growth goals. 
              No generic solutions – we understand your unique needs.
            </Paragraph>
            <div className="absolute -right-4 top-1/3 hidden md:block text-accent-amber">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="text-center relative">
            <div className="bg-primary-blue text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
              2
            </div>
            <H3 className="mb-4">Perfect VA Match (24 hrs)</H3>
            <Paragraph>
              Using our proprietary matching algorithm, we pair you with a VA who has the exact skills, 
              experience, and work style to complement your business.
            </Paragraph>
            <div className="absolute -right-4 top-1/3 hidden md:block text-primary-blue">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-green-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
              3
            </div>
            <H3 className="mb-4">Start Delegating (Same day)</H3>
            <Paragraph>
              Your VA begins with a strategic task to demonstrate their capabilities. 
              Watch as they exceed expectations and free up your time immediately.
            </Paragraph>
          </div>
        </div>

        {/* Process Benefits */}
        <div className="bg-green-50 rounded-xl p-8 text-center">
          <H3 className="mb-4 text-green-800">Why Our Process Works</H3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="font-semibold text-green-700">🎯 Precision Matching</div>
              <div className="text-green-600 text-sm">98% client-VA satisfaction rate</div>
            </div>
            <div>
              <div className="font-semibold text-green-700">⚡ Lightning Fast</div>
              <div className="text-green-600 text-sm">5x faster than competitors</div>
            </div>
            <div>
              <div className="font-semibold text-green-700">🛡️ Risk-Free</div>
              <div className="text-green-600 text-sm">30-day money-back guarantee</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section background="primary" spacing="xl">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">
            Stop Working 70-Hour Weeks. Start Working Smarter.
          </H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Every day you delay is another day of lost productivity, missed opportunities, and unnecessary stress. 
            Join the 500+ business leaders who&apos;ve already made the switch to smart delegation.
          </Paragraph>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div>
                <div className="text-3xl font-bold mb-2">$50K+</div>
                <div className="text-blue-100">Average Annual Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">48 hrs</div>
                <div className="text-blue-100">To Full Productivity</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl" className="text-xl px-12 py-4">
              Get Your Smart VA Match
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl" className="text-xl px-12 py-4 border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your ROI
            </Button>
          </div>
          
          <Paragraph className="text-blue-100 text-sm">
            ✅ Free consultation • ✅ No setup fees • ✅ 30-day money-back guarantee
          </Paragraph>
        </div>
      </Section>
    </>
  )
}