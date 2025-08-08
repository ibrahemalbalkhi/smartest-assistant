import { Metadata } from 'next'
import { 
  Section, 
  SectionHeader,
  H2, 
  H3, 
  Paragraph, 
  Button, 
  FeatureCard
} from '@/components/ui'
import { MinimalHero } from '@/components/sections'
import ROICalculator from '@/components/tools/ROICalculator'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'VA ROI Calculator | Calculate Virtual Assistant Return on Investment | Smartest Assistant',
  description: 'Calculate your potential ROI with a virtual assistant. See how much time and money you could save by delegating tasks to smart VAs. Free ROI analysis tool.',
  keywords: 'virtual assistant ROI calculator, VA cost calculator, virtual assistant savings calculator, business efficiency calculator, delegation ROI tool',
  openGraph: {
    title: 'VA ROI Calculator | Calculate Virtual Assistant Return on Investment',
    description: 'Calculate your potential ROI with a virtual assistant. See how much time and money you could save by delegating tasks to smart VAs.',
    url: 'https://smartestassistant.com/resources/tools/roi-calculator',
  }
}

const roiBenefits = [
  {
    title: 'Accurate Cost Analysis',
    description: 'See the true cost of doing admin work yourself vs. delegating to a VA',
    icon: '💰'
  },
  {
    title: 'Time Value Assessment',
    description: 'Understand the opportunity cost of spending time on low-value tasks',
    icon: '⏰'
  },
  {
    title: 'Growth Potential',
    description: 'Calculate how reclaimed time translates to business growth opportunities',
    icon: '📈'
  },
  {
    title: 'Investment Planning',
    description: 'Make informed decisions about VA investment based on real numbers',
    icon: '🎯'
  }
]

const commonScenarios = [
  {
    role: 'Entrepreneur/Founder',
    hourlyValue: '$200-500',
    adminHours: '20-30 hrs/week',
    potentialSavings: '$150K-300K annually',
    description: 'High-value strategic work while VA handles operations'
  },
  {
    role: 'Executive/C-Suite',
    hourlyValue: '$150-300',
    adminHours: '15-25 hrs/week',
    potentialSavings: '$100K-200K annually',
    description: 'Focus on leadership and decision-making'
  },
  {
    role: 'Sales Professional',
    hourlyValue: '$75-150',
    adminHours: '10-20 hrs/week',
    potentialSavings: '$40K-120K annually',
    description: 'More time for prospecting and closing deals'
  },
  {
    role: 'Consultant/Freelancer',
    hourlyValue: '$100-200',
    adminHours: '15-25 hrs/week',
    potentialSavings: '$60K-150K annually',
    description: 'Expand client capacity and service quality'
  }
]

export default function ROICalculatorPage() {
  return (
    <>
      {/* Hero Section */}
      <MinimalHero
        title="Virtual Assistant ROI Calculator"
        description="Calculate your potential return on investment with a smart virtual assistant. See exactly how much time and money you could save."
      />

      {/* Calculator Section */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <ROICalculator />
        </div>
      </Section>

      {/* Why Calculate ROI */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Why Calculate Your VA ROI?"
          description="Make data-driven decisions about your virtual assistant investment"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roiBenefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={<span className="text-3xl">{benefit.icon}</span>}
            />
          ))}
        </div>
      </Section>

      {/* Common Scenarios */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Common ROI Scenarios"
          description="See how professionals in different roles benefit from virtual assistant support"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {commonScenarios.map((scenario, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <H3 className="mb-4 text-primary-blue">{scenario.role}</H3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Hourly Value:</span>
                  <span className="font-semibold">{scenario.hourlyValue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Admin Time:</span>
                  <span className="font-semibold">{scenario.adminHours}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Potential Savings:</span>
                  <span className="font-semibold text-green-600">{scenario.potentialSavings}</span>
                </div>
              </div>
              <Paragraph className="text-sm text-gray-600">
                {scenario.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </Section>

      {/* ROI Factors */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Factors That Impact Your ROI"
            description="Understanding what drives the highest returns from virtual assistant investment"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <H3 className="mb-6 text-green-600">ROI Maximizers</H3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">High Hourly Value:</span>
                    <span className="text-gray-600"> The more you earn per hour, the greater the opportunity cost of admin work</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Clear Task Delegation:</span>
                    <span className="text-gray-600"> Well-defined processes that VAs can execute independently</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Growth Opportunities:</span>
                    <span className="text-gray-600"> Ability to use reclaimed time for revenue-generating activities</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Smart VA Selection:</span>
                    <span className="text-gray-600"> VAs who think strategically and require minimal supervision</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <H3 className="mb-6 text-red-600">ROI Limiters</H3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <span className="font-semibold">Micromanagement:</span>
                    <span className="text-gray-600"> Spending too much time overseeing VA work negates time savings</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <span className="font-semibold">Unclear Processes:</span>
                    <span className="text-gray-600"> Lack of documented procedures leads to inefficiency and errors</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <span className="font-semibold">Wrong VA Match:</span>
                    <span className="text-gray-600"> VAs without proper skills or experience for your specific needs</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <span className="font-semibold">Underutilization:</span>
                    <span className="text-gray-600"> Not delegating enough tasks or using VA for low-impact work</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Beyond the Numbers */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">ROI Beyond the Numbers</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            While financial ROI is important, the true value of a smart virtual assistant 
            extends far beyond monetary savings
          </Paragraph>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-4">🧠</div>
              <H3 className="mb-3 text-white">Mental Clarity</H3>
              <Paragraph className="text-blue-100 text-sm">
                Reduced cognitive load from managing multiple admin tasks
              </Paragraph>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-4">⚖️</div>
              <H3 className="mb-3 text-white">Work-Life Balance</H3>
              <Paragraph className="text-blue-100 text-sm">
                More time for family, health, and personal interests
              </Paragraph>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-4">🚀</div>
              <H3 className="mb-3 text-white">Strategic Focus</H3>
              <Paragraph className="text-blue-100 text-sm">
                Ability to focus on high-impact activities that drive growth
              </Paragraph>
            </div>
          </div>
          
          <Button as="link" href="/schedule-a-call" variant="secondary" size="lg">
            Discuss Your ROI Potential
          </Button>
        </div>
      </Section>

      {/* Next Steps */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Ready to Achieve These Results?"
            description="Take the next step toward maximizing your ROI with a smart virtual assistant"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-primary-blue mb-2">1</div>
              <H3 className="mb-3">Free Consultation</H3>
              <Paragraph className="text-sm text-gray-600">
                Discuss your specific needs and ROI goals with our VA specialists
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-primary-blue mb-2">2</div>
              <H3 className="mb-3">VA Matching</H3>
              <Paragraph className="text-sm text-gray-600">
                Get matched with smart VAs who have the exact skills you need
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-primary-blue mb-2">3</div>
              <H3 className="mb-3">Start Saving</H3>
              <Paragraph className="text-sm text-gray-600">
                Begin realizing ROI immediately as your VA takes over admin tasks
              </Paragraph>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/schedule-a-call" size="xl">
              Schedule Free Consultation
            </Button>
            <Button as="link" href="/services" variant="outline" size="xl">
              Explore VA Services
            </Button>
          </div>
        </div>
      </Section>

      {/* Related Tools */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Resources"
            description="Additional tools and resources to help optimize your business"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/resources/tools/task-audit" className="group bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📋</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Task Audit Tool</H3>
              <Paragraph className="text-gray-600">
                Identify which of your current tasks are best suited for VA delegation.
              </Paragraph>
            </Link>
            
            <Link href="/resources/blog" className="group bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📚</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">ROI Case Studies</H3>
              <Paragraph className="text-gray-600">
                Read real client stories and ROI achievements from businesses like yours.
              </Paragraph>
            </Link>
            
            <Link href="/schedule-a-call" className="group bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">💬</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Personal Consultation</H3>
              <Paragraph className="text-gray-600">
                Get a customized ROI analysis based on your specific business needs.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}