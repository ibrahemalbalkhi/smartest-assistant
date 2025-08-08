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
  title: 'Complete Delegation Guide | How to Delegate Tasks to Virtual Assistants',
  description: 'Master the art of delegation with our comprehensive guide. Learn how to effectively delegate tasks to virtual assistants for maximum productivity and results.',
  keywords: 'delegation guide, how to delegate, virtual assistant delegation, effective delegation, task delegation best practices',
  openGraph: {
    title: 'Complete Delegation Guide | How to Delegate Tasks to Virtual Assistants',
    description: 'Master the art of delegation with our step-by-step guide for working effectively with virtual assistants.',
    url: 'https://smartestassistant.com/resources/delegation-guide',
  }
}

const delegationSteps = [
  {
    step: 1,
    title: 'Task Assessment & Selection',
    description: 'Identify which tasks to delegate first for maximum impact',
    details: [
      'Audit your current task list and time allocation',
      'Identify repetitive, time-consuming administrative work',
      'Evaluate tasks that don\'t require your unique expertise',
      'Prioritize based on time saved vs. complexity of delegation'
    ],
    tools: ['Task audit worksheet', 'Time tracking template', 'Priority matrix'],
    timeframe: '1-2 hours'
  },
  {
    step: 2,
    title: 'Process Documentation',
    description: 'Create clear, detailed instructions for delegated tasks',
    details: [
      'Document step-by-step procedures for each task',
      'Include screenshots, examples, and expected outcomes',
      'Define quality standards and success metrics',
      'Create templates and checklists for consistency'
    ],
    tools: ['Process documentation template', 'SOP builder', 'Screen recording tools'],
    timeframe: '2-4 hours per task'
  },
  {
    step: 3,
    title: 'VA Selection & Onboarding',
    description: 'Find and prepare the right virtual assistant for success',
    details: [
      'Define required skills, experience, and working style',
      'Conduct thorough interviews and skill assessments',
      'Establish communication preferences and schedules',
      'Provide comprehensive onboarding and training'
    ],
    tools: ['Interview question bank', 'Skills assessment tests', 'Onboarding checklist'],
    timeframe: '1-2 weeks'
  },
  {
    step: 4,
    title: 'Communication Framework',
    description: 'Set up systems for effective ongoing collaboration',
    details: [
      'Choose primary communication channels and tools',
      'Establish regular check-in schedules and formats',
      'Create reporting templates and progress tracking',
      'Define escalation procedures for issues or questions'
    ],
    tools: ['Communication plan template', 'Project management tools', 'Reporting dashboards'],
    timeframe: '1 week'
  },
  {
    step: 5,
    title: 'Implementation & Monitoring',
    description: 'Launch delegation with proper oversight and adjustment',
    details: [
      'Start with smaller, lower-risk tasks to build confidence',
      'Provide regular feedback and course corrections',
      'Monitor quality, efficiency, and adherence to processes',
      'Gradually increase complexity and independence'
    ],
    tools: ['Quality checklists', 'Feedback forms', 'Performance metrics'],
    timeframe: 'Ongoing, 30 days initial'
  },
  {
    step: 6,
    title: 'Optimization & Scaling',
    description: 'Refine processes and expand delegation scope',
    details: [
      'Analyze results and identify improvement opportunities',
      'Streamline processes based on experience and feedback',
      'Expand task scope and increase VA autonomy',
      'Consider delegating additional task categories'
    ],
    tools: ['Performance analytics', 'Process improvement worksheets', 'Expansion planners'],
    timeframe: 'Quarterly reviews'
  }
]

const commonMistakes = [
  {
    mistake: 'Incomplete Instructions',
    description: 'Providing vague or incomplete task instructions',
    solution: 'Create detailed, step-by-step documentation with examples and expected outcomes',
    impact: 'Poor quality results, frequent back-and-forth, frustration'
  },
  {
    mistake: 'Micromanaging',
    description: 'Checking in too frequently or controlling every detail',
    solution: 'Set clear expectations upfront, then trust your VA to deliver results',
    impact: 'Reduced efficiency, decreased VA confidence, higher stress'
  },
  {
    mistake: 'Delegating Without Context',
    description: 'Assigning tasks without explaining their importance or business impact',
    solution: 'Provide business context and explain how tasks contribute to larger goals',
    impact: 'Lack of strategic thinking, missed improvement opportunities'
  },
  {
    mistake: 'No Feedback Loop',
    description: 'Failing to provide regular, constructive feedback',
    solution: 'Establish regular feedback sessions and performance discussions',
    impact: 'Repeated mistakes, missed optimization opportunities, poor relationships'
  },
  {
    mistake: 'Wrong Task Selection',
    description: 'Delegating tasks that require specialized knowledge or personal relationships',
    solution: 'Focus on administrative, repetitive, or well-documented tasks initially',
    impact: 'Poor results, client relationship issues, increased oversight needed'
  }
]

const delegationFrameworks = [
  {
    framework: 'RACI Matrix',
    description: 'Define who is Responsible, Accountable, Consulted, and Informed for each task',
    bestFor: 'Complex projects with multiple stakeholders',
    example: 'Email management: VA Responsible, You Accountable, Team Informed'
  },
  {
    framework: 'SMART Goals',
    description: 'Ensure delegated tasks are Specific, Measurable, Achievable, Relevant, Time-bound',
    bestFor: 'Goal-oriented projects and performance tracking',
    example: 'Process 50 email inquiries daily with 24-hour response time, 95% satisfaction'
  },
  {
    framework: 'The 4-D Method',
    description: 'Do, Delegate, Defer, or Delete each task based on importance and your unique skills',
    bestFor: 'Task prioritization and delegation decisions',
    example: 'Delete unnecessary meetings, Delegate email sorting, Do strategic planning'
  },
  {
    framework: 'Level of Authority',
    description: 'Define decision-making authority from "Wait for instruction" to "Act independently"',
    bestFor: 'Gradually increasing VA autonomy and responsibility',
    example: 'Level 1: Schedule meetings only with approval → Level 4: Handle scheduling independently'
  }
]

export default function DelegationGuidePage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6">The Complete Delegation Guide</H2>
          <Paragraph size="xl" className="mb-8 text-gray-600">
            Master the art of effective delegation with our comprehensive, step-by-step guide. 
            Transform how you work with virtual assistants and unlock your business potential.
          </Paragraph>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <H3 className="mb-4 text-primary-blue">What You'll Learn</H3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>How to identify the right tasks to delegate</span>
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Step-by-step delegation process</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Communication frameworks that work</span>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Common mistakes to avoid</span>
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Performance monitoring strategies</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Scaling delegation across your business</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6-Step Process */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="The 6-Step Delegation Framework"
          description="Our proven methodology for successful virtual assistant delegation"
          centered
        />
        
        <div className="space-y-8">
          {delegationSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-primary-blue text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <H3 className="mb-3">{step.title}</H3>
                      <Paragraph className="text-gray-600 mb-4">
                        {step.description}
                      </Paragraph>
                      <div className="text-sm font-medium text-primary-blue">
                        ⏱️ Time Investment: {step.timeframe}
                      </div>
                    </div>
                    
                    <div>
                      <div className="font-semibold text-gray-800 mb-3">Key Activities:</div>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 mt-1">•</span>
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="font-semibold text-gray-800 mb-3">Helpful Tools:</div>
                      <div className="space-y-2">
                        {step.tools.map((tool, toolIndex) => (
                          <div key={toolIndex} className="bg-blue-50 text-primary-blue px-3 py-1 rounded-full text-sm">
                            {tool}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Common Delegation Mistakes */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Avoid These Common Delegation Mistakes"
          description="Learn from others' experiences and avoid costly delegation errors"
          centered
        />
        
        <div className="space-y-8">
          {commonMistakes.map((mistake, index) => (
            <div key={index} className="bg-red-50 border border-red-200 rounded-xl p-8">
              <div className="grid md:grid-cols-4 gap-6 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      ⚠️
                    </div>
                    <H3 className="text-red-700">{mistake.mistake}</H3>
                  </div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-800 mb-2">The Problem:</div>
                  <Paragraph className="text-gray-600 text-sm">
                    {mistake.description}
                  </Paragraph>
                </div>
                
                <div>
                  <div className="font-semibold text-green-800 mb-2">The Solution:</div>
                  <Paragraph className="text-gray-700 text-sm">
                    {mistake.solution}
                  </Paragraph>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-800 mb-2">Impact if Ignored:</div>
                  <Paragraph className="text-gray-600 text-sm italic">
                    {mistake.impact}
                  </Paragraph>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Delegation Frameworks */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Proven Delegation Frameworks"
          description="Time-tested methodologies for effective task delegation and management"
          centered
          theme="dark"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {delegationFrameworks.map((framework, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <H3 className="mb-4 text-white">{framework.framework}</H3>
              <Paragraph className="text-blue-100 mb-4">
                {framework.description}
              </Paragraph>
              
              <div className="mb-4">
                <div className="text-sm font-semibold text-blue-200 mb-1">Best For:</div>
                <div className="text-sm text-blue-100">{framework.bestFor}</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                <div className="text-sm font-semibold text-blue-200 mb-2">Example:</div>
                <div className="text-sm text-blue-100 italic">{framework.example}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Success Metrics */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Measuring Delegation Success"
            description="Key metrics to track the effectiveness of your delegation efforts"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <H3 className="mb-4 text-green-600">Time Metrics</H3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Hours saved per week</span>
                  <span className="font-semibold">15-25</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Task completion time</span>
                  <span className="font-semibold">-40%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Response time improvement</span>
                  <span className="font-semibold">-60%</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <H3 className="mb-4 text-blue-600">Quality Metrics</H3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Accuracy rate</span>
                  <span className="font-semibold">95%+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Revision requests</span>
                  <span className="font-semibold">&lt;10%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Client satisfaction</span>
                  <span className="font-semibold">4.8/5</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <H3 className="mb-4 text-purple-600">Business Metrics</H3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Revenue focus increase</span>
                  <span className="font-semibold">+30%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Stress level reduction</span>
                  <span className="font-semibold">-50%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Strategic time increase</span>
                  <span className="font-semibold">+200%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready to Master Delegation?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Put these delegation strategies into practice with a strategic virtual assistant who understands 
            how to work as your true business partner.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Get Delegation Coaching
            </Button>
            <Button as="link" href="/resources/task-audit" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Start with Task Audit
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Expert guidance included</div>
            <div>✅ Custom delegation plan</div>
            <div>✅ Ongoing optimization support</div>
          </div>
        </div>
      </Section>

      {/* Related Resources */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Continue Your Delegation Journey"
            description="Additional resources to help you succeed with virtual assistants"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/resources/roi-calculator" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">💰</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">ROI Calculator</H3>
              <Paragraph className="text-gray-600">
                Calculate the financial impact of effective delegation and virtual assistant partnerships.
              </Paragraph>
            </Link>
            
            <Link href="/resources/task-audit" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">✅</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Task Audit Tool</H3>
              <Paragraph className="text-gray-600">
                Identify your highest-impact delegation opportunities with our interactive assessment tool.
              </Paragraph>
            </Link>
            
            <Link href="/blog" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📚</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Delegation Blog</H3>
              <Paragraph className="text-gray-600">
                Advanced delegation strategies, case studies, and expert insights from successful partnerships.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}