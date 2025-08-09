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
  title: 'Project Management Virtual Assistant Services | Smart VAs | Smartest Assistant',
  description: 'Professional project management by smart VAs. Task coordination, timeline management, team communication, and project delivery. Keep projects on track and on budget.',
  keywords: 'project management virtual assistant, project coordinator VA, task management virtual assistant, project planning VA, team coordination virtual assistant',
  openGraph: {
    title: 'Project Management Virtual Assistant Services | Smart VAs',
    description: 'Professional project management by smart VAs. Keep projects on track and on budget.',
    url: 'https://smartestassistant.com/services/project-management',
  }
}

const serviceFeatures = [
  'Project planning and timeline creation',
  'Task coordination and assignment',
  'Progress tracking and reporting',
  'Team communication management',
  'Resource allocation and scheduling',
  'Risk assessment and mitigation',
  'Budget tracking and cost management',
  'Stakeholder communication',
  'Quality assurance and testing',
  'Project documentation and closure'
]

const projectTypes = [
  {
    type: 'Software Development',
    icon: '💻',
    description: 'Agile project management for development teams and product launches',
    features: ['Sprint planning', 'Backlog management', 'Release coordination', 'QA oversight']
  },
  {
    type: 'Marketing Campaigns',
    icon: '📈',
    description: 'End-to-end campaign management from strategy to execution',
    features: ['Campaign planning', 'Asset coordination', 'Timeline management', 'Performance tracking']
  },
  {
    type: 'Business Operations',
    icon: '⚙️',
    description: 'Process improvement and operational efficiency projects',
    features: ['Workflow optimization', 'System implementation', 'Team training', 'Process documentation']
  },
  {
    type: 'Event Management',
    icon: '🎪',
    description: 'Comprehensive event planning and execution management',
    features: ['Vendor coordination', 'Budget management', 'Timeline tracking', 'Day-of coordination']
  }
]

const pmMethodologies = [
  {
    name: 'Agile/Scrum',
    description: 'Iterative development with sprint planning, daily standups, and retrospectives',
    bestFor: 'Software development, product launches, iterative projects'
  },
  {
    name: 'Waterfall',
    description: 'Sequential project phases with clear deliverables and milestones',
    bestFor: 'Construction, manufacturing, projects with fixed requirements'
  },
  {
    name: 'Kanban',
    description: 'Visual workflow management with continuous delivery and improvement',
    bestFor: 'Support teams, maintenance projects, ongoing operations'
  },
  {
    name: 'Hybrid',
    description: 'Customized approach combining elements from multiple methodologies',
    bestFor: 'Complex projects with varying requirements and stakeholders'
  }
]

const faqs = [
  {
    question: 'What project management methodologies do your VAs use?',
    answer: 'Our VAs are trained in Agile, Scrum, Waterfall, Kanban, and hybrid methodologies. We select the best approach based on your project type, team structure, and business requirements.'
  },
  {
    question: 'Can your VAs work with our existing project management tools?',
    answer: 'Yes, our VAs are proficient with all major PM tools including Asana, Trello, Monday.com, Jira, Microsoft Project, Slack, and more. They can adapt to your existing workflow or recommend improvements.'
  },
  {
    question: 'How do you handle communication across different time zones?',
    answer: 'We establish clear communication protocols, use asynchronous updates, and ensure critical information is documented. Your VA can work within your time zone or provide 24/7 project monitoring as needed.'
  },
  {
    question: 'What level of project management experience do your VAs have?',
    answer: 'Our VAs have 3-10+ years of project management experience across various industries. Many hold PMP, Scrum Master, or equivalent certifications and are matched based on your project complexity and industry.'
  },
  {
    question: 'How do you ensure project deliverables meet quality standards?',
    answer: 'We implement quality checkpoints, peer reviews, and stakeholder approvals throughout the project lifecycle. Every deliverable goes through our quality assurance process before client delivery.'
  }
]

const testimonial = {
  id: 'project-management-testimonial-1',
  name: 'James Wilson',
  role: 'CTO',
  company: 'InnovateLab',
  content: 'Our product launches used to be chaotic with missed deadlines and scope creep. Since our Smartest Assistant PM joined, we\'ve delivered 8 projects on time and under budget. They don\'t just manage - they anticipate problems and solve them proactively.',
  rating: 5,
  location: 'Seattle, WA'
}

export default function ProjectManagementPage() {
  return (
    <>
      <ServiceSchema 
        name="Project Management Virtual Assistant Services"
        description="Professional project management services by smart virtual assistants. Task coordination, timeline management, team communication, and successful project delivery."
        url="https://smartestassistant.com/services/project-management"
      />
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section */}
      <ServiceHero
        title="Project Management by Smart Virtual Assistants"
        subtitle="PROJECTS DELIVERED ON TIME"
        description="Stop letting projects derail your business. Our smart VAs bring order to chaos, keeping your projects on track, on budget, and aligned with your strategic goals."
        features={[
          '95% on-time project delivery',
          '25% reduction in project costs',
          'Proactive risk management',
          'Real-time progress tracking'
        ]}
      />

      {/* The Challenge */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-red-600">Project Chaos Is Costing You Everything</H2>
            <Paragraph size="lg">
              Missed deadlines, scope creep, and poor communication turn simple projects into expensive disasters. 
              Every failed project doesn't just waste money – it damages your reputation and team morale.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">💸 The Cost of Poor PM</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• 70% of projects exceed original budget</li>
                <li>• Average project runs 27% over schedule</li>
                <li>• Scope creep increases costs by 50%+</li>
                <li>• Poor communication causes 57% of failures</li>
                <li>• Rushed deliverables require expensive fixes</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">⚡ The Ripple Effects</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• Team burnout from constantly being behind</li>
                <li>• Client relationships damaged by delays</li>
                <li>• Revenue delayed or lost entirely</li>
                <li>• Resources tied up in problem projects</li>
                <li>• Reputation damage from failed deliveries</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Solution */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-green-600">Strategic Project Management That Delivers</H2>
            <Paragraph size="lg">
              Our smart VAs don't just track tasks – they think strategically about your projects, 
              anticipate roadblocks, and proactively solve problems before they become crises.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              title="Proactive Risk Management"
              description="Identify potential issues early and implement mitigation strategies before they impact delivery"
              icon={<span className="text-3xl">🛡️</span>}
            />
            
            <FeatureCard
              title="Strategic Resource Optimization"
              description="Maximize team efficiency and resource utilization for better outcomes with lower costs"
              icon={<span className="text-3xl">⚙️</span>}
            />
            
            <FeatureCard
              title="Stakeholder Alignment"
              description="Keep all stakeholders informed and aligned with clear communication and regular updates"
              icon={<span className="text-3xl">🎯</span>}
            />
          </div>
        </div>
      </Section>

      {/* Project Types */}
      <Section spacing="lg">
        <SectionHeader
          title="Expert Management for Every Project Type"
          description="Specialized PM approaches tailored to your industry and project requirements"
        />
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projectTypes.map((project, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-blue">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{project.icon}</span>
                <H3>{project.type}</H3>
              </div>
              
              <Paragraph className="text-gray-600 mb-6">
                {project.description}
              </Paragraph>
              
              <div className="grid grid-cols-2 gap-4">
                {project.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PM Methodologies */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Flexible Project Management Methodologies"
          description="We adapt our approach to match your project needs and team culture"
        />
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {pmMethodologies.map((methodology, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
              <H3 className="mb-3 text-primary-blue">{methodology.name}</H3>
              <Paragraph className="text-gray-600 mb-4">
                {methodology.description}
              </Paragraph>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-semibold text-blue-800 text-sm mb-2">Best For:</div>
                <div className="text-blue-700 text-sm">{methodology.bestFor}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tools Integration */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <H3 className="text-center mb-8">Project Management Tools We Master</H3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {['Asana', 'Trello', 'Monday.com', 'Jira', 'Microsoft Project', 'Notion', 'ClickUp', 'Basecamp', 'Wrike', 'Smartsheet', 'Slack', 'Teams'].map((tool) => (
              <div key={tool} className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-700 text-sm">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section spacing="lg">
        <SectionHeader
          title="Complete Project Management Package"
          description="End-to-end project support from initiation to closure"
        />
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <H3 className="mb-6">Core PM Services</H3>
            <ul className="space-y-4">
              {serviceFeatures.slice(0, 5).map((feature, index) => (
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
            <H3 className="mb-6">Advanced Features</H3>
            <ul className="space-y-4">
              {serviceFeatures.slice(5).map((feature, index) => (
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
      </Section>

      {/* Results Section */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Results You Can Expect"
          description="Measurable improvements our clients experience with professional project management"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <StatCard 
            value="95%" 
            label="On-time delivery"
            description="Projects completed on schedule"
          />
          <StatCard 
            value="25%" 
            label="Cost reduction"
            description="Average budget savings"
          />
          <StatCard 
            value="40%" 
            label="Faster delivery"
            description="Improved project velocity"
          />
        </div>
        
        <div className="text-center mb-12">
          <div className="bg-green-50 rounded-xl p-8 max-w-3xl mx-auto">
            <H3 className="mb-4 text-green-800">Project Success Guarantee</H3>
            <Paragraph>
              We're so confident in our project management approach that we guarantee on-time delivery 
              and budget adherence for projects under our management. Your success is our commitment.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Client Success Story"
            description="See how strategic project management transformed this company's delivery capabilities"
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
            description="Common questions about our project management services"
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
          <H2 className="mb-6 text-white">Ready for Project Management That Actually Works?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Stop letting project chaos drain your resources and damage your reputation. 
            Get smart VAs who deliver projects on time, on budget, and aligned with your goals.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Start Smart PM
            </Button>
            <Button as="link" href="/resources/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ 95% on-time delivery</div>
            <div>✅ Proactive risk management</div>
            <div>✅ Start this week</div>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Services"
            description="Enhance your project success with these complementary services"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/executive-assistant" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">👔</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Executive Assistant</H3>
              <Paragraph className="text-gray-600">
                High-level coordination and communication support for complex projects and initiatives.
              </Paragraph>
            </Link>
            
            <Link href="/services/calendar-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📅</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Calendar Management</H3>
              <Paragraph className="text-gray-600">
                Coordinated scheduling and resource management for project teams and stakeholders.
              </Paragraph>
            </Link>
            
            <Link href="/services/email-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📧</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Email Management</H3>
              <Paragraph className="text-gray-600">
                Streamlined project communication and stakeholder correspondence management.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}