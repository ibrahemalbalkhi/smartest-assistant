import { Metadata } from 'next'
import { 
  Section, 
  SectionHeader,
  H2, 
  H3, 
  Paragraph, 
  Button
} from '@/components/ui'

export const metadata: Metadata = {
  title: 'Our Team | Smartest Assistant Leadership & Virtual Assistants',
  description: 'Meet the experienced team behind Smartest Assistant. Our leadership and virtual assistants are dedicated to providing strategic, professional support for your business.',
  keywords: 'smartest assistant team, virtual assistant team, VA leadership, professional virtual assistants, smart VA team',
  openGraph: {
    title: 'Our Team | Smartest Assistant Leadership & Virtual Assistants',
    description: 'Meet the experienced team behind Smartest Assistant, dedicated to providing strategic virtual assistant services.',
    url: 'https://smartestassistant.com/team',
  }
}

const leadership = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'Former McKinsey consultant and serial entrepreneur with 15 years of experience in operations and business development. Sarah founded Smartest Assistant after experiencing firsthand the limitations of traditional virtual assistant services.',
    expertise: ['Strategic Planning', 'Operations Management', 'Team Leadership'],
    image: '/team/sarah-johnson-ceo.jpg',
    linkedin: 'https://linkedin.com/in/sarah-johnson-smartest'
  },
  {
    name: 'Michael Chen',
    role: 'Chief Operations Officer',
    bio: 'Previously VP of Operations at a Fortune 500 company, Michael brings deep expertise in scaling service operations while maintaining quality standards. He oversees our VA training and quality assurance programs.',
    expertise: ['Operations Excellence', 'Quality Management', 'Process Optimization'],
    image: '/team/michael-chen-coo.jpg',
    linkedin: 'https://linkedin.com/in/michael-chen-operations'
  },
  {
    name: 'Dr. Rachel Martinez',
    role: 'Head of Training & Development',
    bio: 'Former Director of Corporate Learning at IBM with a Ph.D. in Organizational Psychology. Rachel designs our comprehensive training programs that develop strategic thinking and professional skills in our VAs.',
    expertise: ['Training Design', 'Organizational Psychology', 'Professional Development'],
    image: '/team/rachel-martinez-training.jpg',
    linkedin: 'https://linkedin.com/in/dr-rachel-martinez'
  },
  {
    name: 'David Park',
    role: 'VP of Client Success',
    bio: 'Previously led customer success teams at high-growth SaaS companies. David ensures every client receives exceptional service and achieves their business objectives through our VA partnerships.',
    expertise: ['Client Success', 'Relationship Management', 'Customer Experience'],
    image: '/team/david-park-client-success.jpg',
    linkedin: 'https://linkedin.com/in/david-park-client-success'
  }
]

const teamStats = [
  { value: '150+', label: 'Team Members', description: 'Across all roles and functions' },
  { value: '25+', label: 'Countries Represented', description: 'Global talent diversity' },
  { value: '8.5/10', label: 'Average Experience', description: 'Years of professional experience' },
  { value: '95%', label: 'Retention Rate', description: 'Team member satisfaction' }
]

const vaQualities = [
  {
    quality: 'Strategic Thinkers',
    description: 'Our VAs are selected for their ability to think strategically about business challenges and proactively suggest solutions.',
    icon: '🧠'
  },
  {
    quality: 'Continuous Learners',
    description: 'Every team member commits to ongoing skill development and stays current with industry best practices and new technologies.',
    icon: '📚'
  },
  {
    quality: 'Professional Communicators',
    description: 'Clear, professional communication is essential. Our VAs excel at both written and verbal communication across all business contexts.',
    icon: '💬'
  },
  {
    quality: 'Results-Oriented',
    description: 'We focus on outcomes, not just activities. Our team members are driven by delivering measurable value to client businesses.',
    icon: '🎯'
  },
  {
    quality: 'Technology Proficient',
    description: 'Expertise in modern business tools and platforms, with the ability to quickly learn and adapt to new technologies.',
    icon: '💻'
  },
  {
    quality: 'Cultural Intelligence',
    description: 'Understanding of diverse business cultures and the ability to adapt communication and work styles to different client needs.',
    icon: '🌍'
  }
]

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6">Meet the Team Behind Your Success</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600">
            Our experienced leadership team and carefully selected virtual assistants are united by one mission: 
            helping you achieve more than you thought possible through strategic partnership and professional excellence.
          </Paragraph>
        </div>
      </Section>

      {/* Team Stats */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Our Team by the Numbers"
          description="The diverse, experienced professionals who make up Smartest Assistant"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-primary-blue mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Leadership Team */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Our Leadership Team"
          description="Experienced executives dedicated to delivering exceptional virtual assistant services"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {leadership.map((leader, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <H3 className="mb-1">{leader.name}</H3>
                  <div className="text-primary-blue font-semibold">{leader.role}</div>
                </div>
              </div>
              
              <Paragraph className="text-gray-600 mb-6">
                {leader.bio}
              </Paragraph>
              
              <div className="mb-4">
                <div className="font-semibold text-gray-800 mb-2">Key Expertise:</div>
                <div className="flex flex-wrap gap-2">
                  {leader.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-blue-100 text-primary-blue px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* VA Team Qualities */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="What Makes Our Virtual Assistants Different"
          description="The key qualities and characteristics that define our exceptional VA team"
          centered
          theme="dark"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vaQualities.map((quality, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{quality.icon}</span>
                <H3 className="text-white">{quality.quality}</H3>
              </div>
              <Paragraph className="text-blue-100">
                {quality.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </Section>

      {/* Selection Process */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Our Rigorous Selection Process"
            description="How we identify and develop the world's smartest virtual assistants"
            centered
          />
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <H3 className="mb-3">Strategic Assessment</H3>
              <Paragraph className="text-gray-600">
                We test for strategic thinking abilities, problem-solving skills, and business acumen - not just technical skills.
              </Paragraph>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <H3 className="mb-3">Skills Verification</H3>
              <Paragraph className="text-gray-600">
                Comprehensive testing of technical skills, tool proficiency, and industry-specific knowledge relevant to client needs.
              </Paragraph>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <H3 className="mb-3">Cultural Fit Evaluation</H3>
              <Paragraph className="text-gray-600">
                Assessment of communication style, work ethic, and alignment with our values of proactive partnership and excellence.
              </Paragraph>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <H3 className="mb-3">Ongoing Development</H3>
              <Paragraph className="text-gray-600">
                Continuous training, skill development, and performance coaching to ensure every VA grows with your business needs.
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>

      {/* Career Opportunities */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Join Our Growing Team"
            description="Be part of the team that's revolutionizing virtual assistance"
            centered
          />
          
          <div className="bg-gray-50 rounded-xl p-8">
            <H3 className="mb-4">We're Always Looking for Exceptional Talent</H3>
            <Paragraph className="mb-6">
              Whether you're a strategic virtual assistant, operations professional, or business development expert, 
              we want to hear from you. Join a team that values excellence, innovation, and client success.
            </Paragraph>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow">
                <H3 className="mb-3 text-primary-blue">Virtual Assistants</H3>
                <Paragraph className="text-gray-600">
                  Strategic thinkers who want to be true business partners, not just task executors.
                </Paragraph>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow">
                <H3 className="mb-3 text-primary-blue">Operations Team</H3>
                <Paragraph className="text-gray-600">
                  Quality-focused professionals who help scale our operations while maintaining excellence.
                </Paragraph>
              </div>
            </div>
            
            <Button as="link" href="/careers" variant="primary" size="lg">
              View Open Positions
            </Button>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready to Meet Your Perfect VA Match?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Our experienced team is ready to understand your needs and match you with a VA who will become 
            an invaluable partner in your business success.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Schedule Your Consultation
            </Button>
            <Button as="link" href="/about" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Learn About Our Company
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Meet your dedicated VA</div>
            <div>✅ Discuss your specific needs</div>
            <div>✅ Start partnership planning</div>
          </div>
        </div>
      </Section>
    </>
  )
}