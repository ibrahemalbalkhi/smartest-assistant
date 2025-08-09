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
  title: 'Getting Started with Virtual Assistants | Quick Start Guide',
  description: 'Complete beginner\'s guide to hiring and working with virtual assistants. Learn the basics, avoid common mistakes, and achieve success from day one.',
  keywords: 'getting started with virtual assistants, VA beginner guide, how to hire virtual assistant, virtual assistant basics',
  openGraph: {
    title: 'Getting Started with Virtual Assistants | Quick Start Guide',
    description: 'Your complete guide to successfully hiring and working with virtual assistants from day one.',
    url: 'https://smartestassistant.com/resources/getting-started',
  }
}

const quickStartSteps = [
  {
    day: 'Day 1',
    title: 'Define Your Needs',
    timeRequired: '1-2 hours',
    tasks: [
      'Complete our Task Audit to identify delegation opportunities',
      'List your top 5 most time-consuming tasks',
      'Determine your budget and preferred working hours',
      'Set clear goals for what you want to achieve'
    ],
    outcome: 'Clear understanding of what you need help with'
  },
  {
    day: 'Day 2-3',
    title: 'Schedule Consultation',
    timeRequired: '30 minutes',
    tasks: [
      'Book your free consultation with our team',
      'Prepare questions about your specific needs',
      'Discuss your business requirements and goals',
      'Learn about our VA matching process'
    ],
    outcome: 'Expert guidance on your VA requirements'
  },
  {
    day: 'Day 4-5',
    title: 'VA Matching & Introduction',
    timeRequired: '1 hour',
    tasks: [
      'Review VA profiles matched to your needs',
      'Participate in introduction call with your selected VA',
      'Discuss working preferences and communication style',
      'Finalize service agreement and start date'
    ],
    outcome: 'Perfect VA match ready to start working'
  },
  {
    day: 'Week 1',
    title: 'Onboarding & Initial Tasks',
    timeRequired: '3-4 hours',
    tasks: [
      'Provide system access and tool training',
      'Share company information and brand guidelines',
      'Start with 2-3 simple, well-defined tasks',
      'Establish communication routines and check-ins'
    ],
    outcome: 'VA successfully integrated and productive'
  },
  {
    day: 'Week 2-4',
    title: 'Expand & Optimize',
    timeRequired: '2 hours/week',
    tasks: [
      'Gradually add more complex tasks',
      'Provide feedback and process refinements',
      'Track time savings and quality improvements',
      'Identify additional delegation opportunities'
    ],
    outcome: 'Fully optimized partnership delivering results'
  }
]

const commonConcerns = [
  {
    concern: 'Will my VA understand my business?',
    answer: 'Our VAs are carefully selected and trained for your specific industry. During onboarding, we ensure they understand your business model, values, and quality standards. Most clients are surprised by how quickly their VA grasps their unique requirements.',
    icon: '🤔'
  },
  {
    concern: 'What if the work quality isn\'t good enough?',
    answer: 'We provide comprehensive quality assurance including initial training, regular check-ins, and performance monitoring. If quality issues arise, we address them immediately through additional training or VA replacement if necessary.',
    icon: '⚡'
  },
  {
    concern: 'How do I know my VA is actually working?',
    answer: 'We provide multiple tracking options including time tracking software, regular status updates, and deliverable-based reporting. You\'ll have complete visibility into work progress and time allocation.',
    icon: '👀'
  },
  {
    concern: 'What if I don\'t have enough work to justify a VA?',
    answer: 'Many clients start with just 10-15 hours per week and quickly find more tasks to delegate as they see the value. We offer flexible arrangements that can scale up or down based on your actual needs.',
    icon: '📈'
  },
  {
    concern: 'How do I communicate effectively with a remote worker?',
    answer: 'We help establish clear communication protocols using tools you\'re already familiar with. Our VAs are experienced in remote collaboration and proactive in their communication style.',
    icon: '💬'
  }
]

const firstWeekTasks = [
  {
    category: 'Email Management',
    difficulty: 'Easy',
    timeToDelegate: '30 minutes',
    tasks: [
      'Sort and prioritize daily emails',
      'Respond to routine inquiries using templates',
      'Schedule meetings and appointments',
      'Unsubscribe from unwanted lists'
    ],
    expectedResults: '2-3 hours saved daily, faster response times'
  },
  {
    category: 'Calendar Management',
    difficulty: 'Easy',
    timeToDelegate: '45 minutes',
    tasks: [
      'Schedule and reschedule meetings',
      'Send calendar invites and reminders',
      'Coordinate with multiple participants',
      'Block time for important activities'
    ],
    expectedResults: 'Reduced scheduling conflicts, better time management'
  },
  {
    category: 'Research & Data Entry',
    difficulty: 'Medium',
    timeToDelegate: '1 hour',
    tasks: [
      'Research potential clients or partners',
      'Update CRM with contact information',
      'Compile market research reports',
      'Organize digital files and documents'
    ],
    expectedResults: 'Better organized information, faster decision-making'
  },
  {
    category: 'Social Media & Content',
    difficulty: 'Medium',
    timeToDelegate: '1.5 hours',
    tasks: [
      'Schedule social media posts',
      'Engage with comments and messages',
      'Create content calendars',
      'Monitor brand mentions and hashtags'
    ],
    expectedResults: 'Consistent online presence, improved engagement'
  }
]

const successTips = [
  {
    tip: 'Start Small and Build Trust',
    description: 'Begin with simple, low-risk tasks that have clear success criteria. This builds confidence for both you and your VA.',
    example: 'Start with email sorting before moving to email responses'
  },
  {
    tip: 'Be Specific in Your Instructions',
    description: 'Provide detailed, step-by-step instructions with examples. What seems obvious to you may not be to someone new to your business.',
    example: 'Instead of "manage social media," specify posting schedule, content types, and engagement guidelines'
  },
  {
    tip: 'Establish Regular Check-ins',
    description: 'Schedule brief but regular communication to provide feedback, answer questions, and adjust processes as needed.',
    example: '15-minute daily check-ins for the first two weeks, then weekly meetings'
  },
  {
    tip: 'Document Processes as You Go',
    description: 'Create simple process documents for recurring tasks. This saves time on future training and ensures consistency.',
    example: 'Create a one-page guide for how you like emails prioritized and handled'
  },
  {
    tip: 'Celebrate Early Wins',
    description: 'Acknowledge good work and improvements early. Positive reinforcement builds motivation and partnership quality.',
    example: 'Recognize when your VA suggests a process improvement or catches an important detail'
  }
]

export default function GettingStartedPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6">Getting Started with Virtual Assistants</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600">
            Your complete guide to successfully hiring and working with virtual assistants. 
            Learn the proven process to go from overwhelmed to optimized in just 30 days.
          </Paragraph>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <H3 className="mb-4 text-primary-blue">What You'll Achieve</H3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="font-semibold text-gray-800 mb-2">Week 1:</div>
                <Paragraph className="text-gray-600 text-sm">
                  Save 10+ hours and establish smooth working relationship
                </Paragraph>
              </div>
              <div>
                <div className="font-semibold text-gray-800 mb-2">Week 2-3:</div>
                <Paragraph className="text-gray-600 text-sm">
                  Delegate complex tasks and optimize processes for efficiency
                </Paragraph>
              </div>
              <div>
                <div className="font-semibold text-gray-800 mb-2">Week 4+:</div>
                <Paragraph className="text-gray-600 text-sm">
                  Focus on strategic work while VA handles operations independently
                </Paragraph>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/schedule-a-call" variant="primary" size="lg">
              Start Your Journey
            </Button>
            <Button as="link" href="/resources/task-audit" variant="outline" size="lg">
              Audit Your Tasks First
            </Button>
          </div>
        </div>
      </Section>

      {/* 30-Day Quick Start Plan */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Your 30-Day Quick Start Plan"
          description="Proven step-by-step timeline to virtual assistant success"
          centered
        />
        
        <div className="space-y-8">
          {quickStartSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-primary-blue text-white w-20 h-20 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-sm font-bold">{step.day}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <H3 className="mb-3">{step.title}</H3>
                      <div className="text-sm text-gray-500 mb-4">
                        ⏱️ Time Required: {step.timeRequired}
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <div className="font-semibold text-green-800 text-sm mb-2">Expected Outcome:</div>
                        <div className="text-green-700 text-sm">{step.outcome}</div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <div className="font-semibold text-gray-800 mb-3">Key Tasks:</div>
                      <ul className="space-y-2">
                        {step.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-3">
                            <div className="bg-blue-100 text-primary-blue w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-bold">{taskIndex + 1}</span>
                            </div>
                            <span className="text-gray-600 text-sm">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Perfect First Week Tasks */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Perfect First Week Tasks"
          description="Ideal tasks to start with that build confidence and deliver quick wins"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {firstWeekTasks.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <H3>{category.category}</H3>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${category.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {category.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-1">Time to delegate: {category.timeToDelegate}</div>
                <div className="text-sm font-medium text-primary-blue">{category.expectedResults}</div>
              </div>
              
              <ul className="space-y-2">
                {category.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-1">•</span>
                    <span className="text-gray-600">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Common Concerns */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Addressing Common Concerns"
          description="Honest answers to the questions most first-time VA employers ask"
          centered
          theme="dark"
        />
        
        <div className="space-y-6">
          {commonConcerns.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <H3 className="mb-3 text-white">{item.concern}</H3>
                  <Paragraph className="text-blue-100">
                    {item.answer}
                  </Paragraph>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Success Tips */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="5 Tips for First-Week Success"
          description="Proven strategies from clients who achieved great results immediately"
          centered
        />
        
        <div className="space-y-8">
          {successTips.map((tip, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-accent-amber text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 flex-1">
                  <div>
                    <H3 className="mb-3">{tip.tip}</H3>
                  </div>
                  
                  <div>
                    <Paragraph className="text-gray-600 text-sm">
                      {tip.description}
                    </Paragraph>
                  </div>
                  
                  <div>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="font-semibold text-blue-800 text-sm mb-2">Example:</div>
                      <div className="text-blue-700 text-sm italic">{tip.example}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What to Expect Timeline */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="What to Expect: Realistic Timeline"
            description="Set proper expectations for how the partnership evolves over time"
            centered
          />
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-blue font-bold">W1</span>
              </div>
              <H3 className="mb-3 text-lg">Week 1</H3>
              <Paragraph className="text-gray-600 text-sm">
                <strong>Learning Phase:</strong> VA gets familiar with your business, tools, and preferences. Expect more communication and guidance needed.
              </Paragraph>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-blue font-bold">W2</span>
              </div>
              <H3 className="mb-3 text-lg">Week 2</H3>
              <Paragraph className="text-gray-600 text-sm">
                <strong>Rhythm Building:</strong> Tasks start flowing smoothly, communication becomes more efficient. You'll see first significant time savings.
              </Paragraph>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">W3-4</span>
              </div>
              <H3 className="mb-3 text-lg">Weeks 3-4</H3>
              <Paragraph className="text-gray-600 text-sm">
                <strong>Optimization:</strong> VA starts suggesting improvements, handling complex tasks independently. Major productivity gains become evident.
              </Paragraph>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">M2+</span>
              </div>
              <H3 className="mb-3 text-lg">Month 2+</H3>
              <Paragraph className="text-gray-600 text-sm">
                <strong>Strategic Partnership:</strong> VA works independently, anticipates needs, contributes strategic insights. You focus on high-value work only.
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready to Get Started?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            You now have the roadmap to virtual assistant success. The next step is finding the right VA who can 
            execute this plan with you. Let us handle the matching and onboarding so you can focus on results.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Schedule Free Consultation
            </Button>
            <Button as="link" href="/resources/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Potential Savings
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Expert VA matching</div>
            <div>✅ Guided onboarding</div>
            <div>✅ 30-day success guarantee</div>
          </div>
        </div>
      </Section>

      {/* Next Steps Resources */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Continue Your Journey"
            description="Additional resources to ensure your virtual assistant success"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/resources/delegation-guide" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📋</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Advanced Delegation Guide</H3>
              <Paragraph className="text-gray-600">
                Master advanced delegation techniques for maximum productivity and partnership success.
              </Paragraph>
            </Link>
            
            <Link href="/resources/templates" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📄</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Free Templates</H3>
              <Paragraph className="text-gray-600">
                Download ready-to-use templates for onboarding, communication, and performance tracking.
              </Paragraph>
            </Link>
            
            <Link href="/resources/case-studies" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Success Stories</H3>
              <Paragraph className="text-gray-600">
                Learn from detailed case studies of businesses that achieved remarkable results.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}