import { Metadata } from 'next'
import Image from 'next/image'
import { 
  Section, 
  SectionHeader,
  H2, 
  H3, 
  Paragraph, 
  Button, 
  StatCard
} from '@/components/ui'

export const metadata: Metadata = {
  title: 'About Smartest Assistant | Our Mission & Team | Smart Virtual Assistant Company',
  description: 'Learn about Smartest Assistant\'s mission to provide strategic virtual assistants who think like partners. Discover our story, values, and commitment to exceptional service.',
  keywords: 'about smartest assistant, virtual assistant company, smart VA team, virtual assistant mission, professional VA services',
  openGraph: {
    title: 'About Smartest Assistant | Our Mission & Team',
    description: 'Learn about our mission to provide strategic virtual assistants who think like partners and work like pros.',
    url: 'https://smartestassistant.com/about',
  }
}

const companyStats = [
  { value: '2,500+', label: 'Clients Served', description: 'Across all industries' },
  { value: '50,000+', label: 'Hours Delivered', description: 'Of professional VA services' },
  { value: '98%', label: 'Client Satisfaction', description: 'Consistently rated' },
  { value: '3 Years', label: 'Average Partnership', description: 'Client relationship length' }
]

const coreValues = [
  {
    value: 'Strategic Thinking',
    description: 'Our VAs don\'t just execute tasks - they think strategically about your business goals and proactively suggest improvements.',
    icon: '🧠'
  },
  {
    value: 'Autonomy & Initiative',
    description: 'We hire VAs who can work independently, make smart decisions, and take initiative without constant supervision.',
    icon: '🚀'
  },
  {
    value: 'Continuous Learning',
    description: 'Our team stays current with the latest tools, technologies, and best practices to deliver cutting-edge support.',
    icon: '📚'
  },
  {
    value: 'Partnership Mindset',
    description: 'We see ourselves as extensions of your team, invested in your success and committed to long-term relationships.',
    icon: '🤝'
  }
]

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Started with a vision to redefine virtual assistance by focusing on strategic thinking and proactive support.'
  },
  {
    year: '2021',
    title: 'First 100 Clients',
    description: 'Reached our first major milestone by serving 100 businesses across various industries and establishing our reputation.'
  },
  {
    year: '2022',
    title: 'Industry Specialization',
    description: 'Developed specialized expertise in key industries including SaaS, healthcare, finance, and legal services.'
  },
  {
    year: '2023',
    title: 'Nationwide Expansion',
    description: 'Expanded to serve clients in major markets across the United States with location-specific expertise.'
  },
  {
    year: '2024',
    title: '2,500+ Clients Served',
    description: 'Achieved significant scale while maintaining our commitment to personalized, high-quality service.'
  }
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6">We Believe Virtual Assistants Should Think Like Partners</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600">
            At Smartest Assistant, we don't provide task executors - we provide strategic partners who think 
            ahead, solve problems proactively, and help you achieve your most ambitious business goals.
          </Paragraph>
          
          <div className="bg-primary-blue text-white rounded-xl p-8 mb-12">
            <H3 className="mb-4">Our Mission</H3>
            <Paragraph size="lg">
              To revolutionize the virtual assistant industry by providing smart, strategic VAs who don't just 
              work FOR you - they work WITH you as true business partners.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Company Stats */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Our Impact by the Numbers"
          description="The measurable difference we've made for businesses worldwide"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyStats.map((stat, index) => (
            <StatCard 
              key={index}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </Section>

      {/* Our Story */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <H2 className="mb-6">Our Story: From Frustration to Innovation</H2>
              <div className="space-y-4 text-gray-600">
                <Paragraph>
                  Like many business owners, our founder experienced the frustration of hiring virtual assistants 
                  who could only handle basic tasks. Despite clear instructions, these VAs lacked the strategic 
                  thinking needed to truly help scale a business.
                </Paragraph>
                <Paragraph>
                  The breakthrough came when we realized the problem wasn't with virtual assistance as a concept - 
                  it was with how VAs were selected, trained, and positioned. What if we could find VAs who could 
                  think strategically, anticipate needs, and work as true business partners?
                </Paragraph>
                <Paragraph>
                  That vision became Smartest Assistant. We developed rigorous selection criteria, comprehensive 
                  training programs, and ongoing development systems to create a new category of virtual assistant - 
                  one that thinks like an entrepreneur and executes like a professional.
                </Paragraph>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-8">
              <H3 className="mb-4 text-primary-blue">What Makes Us Different</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We hire for strategic thinking, not just task execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Our VAs proactively identify improvements and solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We focus on long-term partnerships, not short-term tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We invest in continuous training and skill development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Our Core Values"
          description="The principles that guide every interaction and decision we make"
          centered
          theme="dark"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{value.icon}</span>
                <H3 className="text-white">{value.value}</H3>
              </div>
              <Paragraph className="text-blue-100">
                {value.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </Section>

      {/* Company Timeline */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Our Journey & Milestones"
          description="Key moments in our mission to revolutionize virtual assistance"
          centered
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-primary-blue text-white w-16 h-16 rounded-full flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="pt-2">
                  <H3 className="mb-2">{milestone.title}</H3>
                  <Paragraph className="text-gray-600">{milestone.description}</Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Leadership Team Preview */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Meet Our Leadership Team"
            description="Experienced professionals dedicated to your success"
            centered
          />
          
          <div className="mb-12">
            <Image
              src="/images/team-collaboration-meeting.webp"
              alt="Smartest Assistant leadership team in a collaborative meeting"
              width={800}
              height={400}
              className="rounded-xl shadow-lg mb-8"
            />
            <div className="bg-gray-50 rounded-xl p-8">
              <H3 className="mb-4">Building Excellence Through Leadership</H3>
              <Paragraph className="mb-6">
                Our leadership team brings decades of combined experience in business operations, 
                technology, and customer success to ensure every client receives exceptional service.
              </Paragraph>
              <Button as="link" href="/team" variant="primary">
                Meet the Full Team
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Client Success Focus */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6">Your Success Is Our Success</H2>
            <Paragraph size="lg" className="text-gray-600">
              We measure our success by your success. Every process, system, and decision is designed 
              around one goal: helping you achieve more than you thought possible.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-3xl mb-4">🎯</div>
              <H3 className="mb-3">Results-Focused</H3>
              <Paragraph className="text-gray-600">
                We don't just measure hours worked - we measure outcomes achieved and value delivered to your business.
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-3xl mb-4">🔄</div>
              <H3 className="mb-3">Continuous Improvement</H3>
              <Paragraph className="text-gray-600">
                We regularly assess and refine our processes to ensure we're always delivering the highest quality service.
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-3xl mb-4">📞</div>
              <H3 className="mb-3">Always Available</H3>
              <Paragraph className="text-gray-600">
                Our commitment to your success means we're here when you need us, with responsive support and clear communication.
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready to Experience the Difference?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Join the thousands of businesses who have discovered what it's like to work with VAs 
            who think like partners and work like pros.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Start Your Partnership
            </Button>
            <Button as="link" href="/services" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Explore Our Services
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free consultation</div>
            <div>✅ Custom VA matching</div>
            <div>✅ Start within 48 hours</div>
          </div>
        </div>
      </Section>
    </>
  )
}