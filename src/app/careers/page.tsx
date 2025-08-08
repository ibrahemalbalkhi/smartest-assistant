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
  title: 'Careers at Smartest Assistant | Join Our Virtual Assistant Team',
  description: 'Join the Smartest Assistant team and help revolutionize virtual assistance. We\'re hiring strategic virtual assistants, operations professionals, and client success specialists.',
  keywords: 'smartest assistant careers, virtual assistant jobs, remote work opportunities, VA careers, client success jobs',
  openGraph: {
    title: 'Careers at Smartest Assistant | Join Our Virtual Assistant Team',
    description: 'Join our team and help revolutionize virtual assistance. Remote opportunities for strategic virtual assistants and operations professionals.',
    url: 'https://smartestassistant.com/careers',
  }
}

const benefits = [
  {
    title: 'Competitive Compensation',
    description: 'Above-market rates with performance bonuses and regular salary reviews based on client feedback and growth.',
    icon: '💰'
  },
  {
    title: 'Professional Development',
    description: 'Ongoing training, skill development opportunities, and career advancement paths within our growing organization.',
    icon: '📚'
  },
  {
    title: 'Flexible Work Environment',
    description: 'Fully remote work with flexible scheduling that allows for work-life balance and location independence.',
    icon: '🏡'
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health benefits, wellness stipends, and mental health support for all team members.',
    icon: '🏥'
  },
  {
    title: 'Technology & Equipment',
    description: 'Latest technology, premium software licenses, and home office setup stipends to ensure productivity.',
    icon: '💻'
  },
  {
    title: 'Team Culture',
    description: 'Collaborative, supportive team environment with regular virtual events and professional networking opportunities.',
    icon: '🤝'
  }
]

const openPositions = [
  {
    title: 'Strategic Virtual Assistant',
    department: 'Client Services',
    type: 'Full-time',
    location: 'Remote',
    description: 'Join our team of strategic VAs providing executive-level support to growing businesses. Perfect for experienced professionals who want to be true business partners.',
    requirements: [
      '3+ years of executive assistant or business support experience',
      'Excellent written and verbal communication skills',
      'Proficiency with modern business tools and software',
      'Strategic thinking and problem-solving abilities',
      'Bachelor\'s degree or equivalent experience'
    ]
  },
  {
    title: 'Client Success Manager',
    department: 'Client Success',
    type: 'Full-time',
    location: 'Remote',
    description: 'Manage client relationships and ensure exceptional service delivery. Lead account management for our fastest-growing client segments.',
    requirements: [
      '5+ years in client success or account management',
      'Experience with SaaS or service business models',
      'Strong relationship building and communication skills',
      'Data-driven approach to client satisfaction',
      'Experience managing remote teams'
    ]
  },
  {
    title: 'Operations Coordinator',
    department: 'Operations',
    type: 'Full-time',
    location: 'Remote',
    description: 'Support our operations team in quality assurance, training coordination, and process improvement initiatives.',
    requirements: [
      '2+ years in operations or project management',
      'Experience with quality management systems',
      'Strong organizational and analytical skills',
      'Familiarity with training and development processes',
      'Process improvement mindset'
    ]
  },
  {
    title: 'Marketing Specialist',
    department: 'Marketing',
    type: 'Part-time/Contract',
    location: 'Remote',
    description: 'Help grow our brand through content marketing, social media management, and lead generation campaigns.',
    requirements: [
      '3+ years in digital marketing',
      'Content creation and social media expertise',
      'Experience with marketing automation tools',
      'SEO and analytics knowledge',
      'B2B marketing experience preferred'
    ]
  }
]

const applicationProcess = [
  {
    step: 1,
    title: 'Submit Application',
    description: 'Complete our online application with your resume, cover letter, and portfolio of relevant work.'
  },
  {
    step: 2,
    title: 'Initial Screening',
    description: 'Phone or video call to discuss your experience, career goals, and fit with our company culture.'
  },
  {
    step: 3,
    title: 'Skills Assessment',
    description: 'Complete practical assessments relevant to your role, including strategic thinking and problem-solving exercises.'
  },
  {
    step: 4,
    title: 'Team Interviews',
    description: 'Meet with potential colleagues and managers to discuss collaboration, working styles, and mutual expectations.'
  },
  {
    step: 5,
    title: 'Final Decision',
    description: 'Reference checks, offer negotiation, and onboarding preparation for successful candidates.'
  }
]

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6">Join the Team That's Revolutionizing Virtual Assistance</H2>
          <Paragraph size="xl" className="mb-8 text-gray-600">
            Be part of a company that values strategic thinking, professional excellence, and meaningful partnerships. 
            Help us redefine what virtual assistance can achieve for businesses worldwide.
          </Paragraph>
          
          <div className="bg-primary-blue text-white rounded-xl p-8 mb-12">
            <H3 className="mb-4">Why Work at Smartest Assistant?</H3>
            <Paragraph size="lg">
              We're not just another VA company. We're building the future of strategic business support, 
              where every team member contributes to client success and professional growth.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Benefits & Perks */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Benefits & Perks"
          description="We invest in our team members' success, growth, and well-being"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{benefit.icon}</span>
                <H3>{benefit.title}</H3>
              </div>
              <Paragraph className="text-gray-600">
                {benefit.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </Section>

      {/* Open Positions */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Open Positions"
          description="Current opportunities to join our growing team"
          centered
        />
        
        <div className="max-w-4xl mx-auto space-y-8">
          {openPositions.map((position, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <H3 className="mb-2">{position.title}</H3>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>📁 {position.department}</span>
                    <span>⏰ {position.type}</span>
                    <span>📍 {position.location}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Apply Now
                </Button>
              </div>
              
              <Paragraph className="text-gray-700 mb-6">
                {position.description}
              </Paragraph>
              
              <div>
                <div className="font-semibold text-gray-800 mb-3">Key Requirements:</div>
                <ul className="space-y-2">
                  {position.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Application Process */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Our Application Process"
          description="What to expect when you apply to join our team"
          centered
          theme="dark"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {applicationProcess.map((step) => (
              <div key={step.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-accent-amber text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="pt-2">
                  <H3 className="mb-2 text-white">{step.title}</H3>
                  <Paragraph className="text-blue-100">{step.description}</Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Company Culture */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Our Company Culture"
            description="What it's really like to work at Smartest Assistant"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-3xl mb-4">🚀</div>
              <H3 className="mb-3">Growth Mindset</H3>
              <Paragraph className="text-gray-600">
                We encourage continuous learning, skill development, and career advancement. Every team member has a growth plan.
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-3xl mb-4">🌟</div>
              <H3 className="mb-3">Excellence Standards</H3>
              <Paragraph className="text-gray-600">
                We maintain high standards in everything we do, from client service to internal processes, while supporting each other's success.
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-3xl mb-4">🤝</div>
              <H3 className="mb-3">Collaborative Spirit</H3>
              <Paragraph className="text-gray-600">
                Despite being fully remote, we maintain strong connections through regular communication, virtual events, and mutual support.
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>

      {/* Employee Testimonials */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="What Our Team Says"
          description="Hear from current team members about their experience"
          centered
        />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold">
                JM
              </div>
              <div>
                <div className="font-semibold">Jessica M.</div>
                <div className="text-sm text-gray-600">Strategic Virtual Assistant</div>
              </div>
            </div>
            <Paragraph className="text-gray-600">
              "Working at Smartest Assistant has transformed my career. I'm not just completing tasks - I'm truly partnering with clients to solve business challenges and drive growth. The professional development opportunities are incredible."
            </Paragraph>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold">
                RK
              </div>
              <div>
                <div className="font-semibold">Robert K.</div>
                <div className="text-sm text-gray-600">Client Success Manager</div>
              </div>
            </div>
            <Paragraph className="text-gray-600">
              "The company culture here is amazing. Leadership genuinely cares about employee growth and client success. I love that we're building something innovative that makes a real difference for businesses."
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Don't See Your Role? */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Don't See Your Perfect Role?"
            description="We're always interested in exceptional talent"
            centered
          />
          
          <div className="bg-white rounded-xl p-8">
            <H3 className="mb-4">We Want to Hear From You</H3>
            <Paragraph className="mb-6">
              If you're passionate about strategic business support, client success, or operational excellence, 
              we'd love to learn about your background and explore potential opportunities.
            </Paragraph>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Send Us Your Resume
              </Button>
              <Button as="link" href="/team" variant="outline" size="lg">
                Learn About Our Team
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready to Join Our Mission?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Help us revolutionize virtual assistance and build meaningful partnerships with businesses worldwide. 
            Your next career opportunity is waiting.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="secondary" size="xl">
              Browse All Positions
            </Button>
            <Button as="link" href="/about" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Learn About Our Company
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Remote-first culture</div>
            <div>✅ Professional development</div>
            <div>✅ Competitive benefits</div>
          </div>
        </div>
      </Section>
    </>
  )
}