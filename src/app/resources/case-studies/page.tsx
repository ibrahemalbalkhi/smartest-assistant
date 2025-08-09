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
  title: 'Virtual Assistant Case Studies | Real Client Success Stories',
  description: 'Read detailed case studies showcasing real results from virtual assistant partnerships. See how businesses save time, reduce costs, and scale operations.',
  keywords: 'virtual assistant case studies, VA success stories, client results, business case studies, virtual assistant ROI results',
  openGraph: {
    title: 'Virtual Assistant Case Studies | Real Client Success Stories',
    description: 'Detailed success stories showing real results from strategic virtual assistant partnerships.',
    url: 'https://smartestassistant.com/resources/case-studies',
  }
}

const featuredCaseStudies = [
  {
    clientName: 'TechFlow Solutions',
    industry: 'SaaS Startup',
    location: 'San Francisco, CA',
    companySize: '15 employees',
    challenge: 'CEO spending 30 hours/week on admin tasks, hindering product development focus',
    solution: 'Strategic executive assistant handling email management, calendar coordination, and customer onboarding',
    results: {
      timeSaved: '25 hours/week',
      costSavings: '$8,500/month',
      productivityIncrease: '60%',
      additionalMetric: '3x faster customer onboarding'
    },
    testimonial: "Our VA transformed how we operate. I went from drowning in emails to focusing on product strategy. We launched two major features ahead of schedule because I could finally think strategically.",
    clientTitle: 'CEO & Founder',
    duration: '18 months',
    featured: true
  },
  {
    clientName: 'Heritage Law Group',
    industry: 'Legal Services',
    location: 'Boston, MA',
    companySize: '8 attorneys',
    challenge: 'Attorneys spending billable time on administrative work, reducing firm profitability',
    solution: 'Legal-specialized VA handling client intake, document preparation, and case management',
    results: {
      timeSaved: '120 billable hours/month',
      costSavings: '$45,000/month',
      productivityIncrease: '40%',
      additionalMetric: '25% increase in billable hours'
    },
    testimonial: "The ROI was immediate. Our VA understands legal workflows and maintains our quality standards. We're now taking on 30% more clients without hiring additional attorneys.",
    clientTitle: 'Managing Partner',
    duration: '12 months',
    featured: true
  },
  {
    clientName: 'Wellness Warriors',
    industry: 'Health Coaching',
    location: 'Austin, TX',
    companySize: 'Solo entrepreneur',
    challenge: 'Coach overwhelmed with social media, client scheduling, and program management',
    solution: 'Multi-skilled VA managing social media, client communications, and program delivery',
    results: {
      timeSaved: '20 hours/week',
      costSavings: '$4,200/month',
      productivityIncrease: '150%',
      additionalMetric: '200% increase in social media engagement'
    },
    testimonial: "I went from working 70-hour weeks to having time for strategic planning and personal life. My VA doesn't just execute tasks - they suggest improvements and spot opportunities I miss.",
    clientTitle: 'Founder & Head Coach',
    duration: '24 months',
    featured: true
  }
]

const allCaseStudies = [
  {
    clientName: 'Digital Marketing Pro',
    industry: 'Marketing Agency',
    challenge: 'Managing multiple client campaigns and social media accounts',
    result: 'Doubled client capacity without additional overhead',
    timeSaved: '35 hours/week',
    roi: '380%'
  },
  {
    clientName: 'Property Solutions Inc',
    industry: 'Real Estate',
    challenge: 'Lead qualification and transaction coordination bottlenecks',
    result: '50% more deals closed per quarter',
    timeSaved: '28 hours/week',
    roi: '420%'
  },
  {
    clientName: 'FinTech Innovations',
    industry: 'Financial Services',
    challenge: 'Compliance documentation and client onboarding delays',
    result: '75% faster client onboarding process',
    timeSaved: '18 hours/week',
    roi: '290%'
  },
  {
    clientName: 'E-commerce Empire',
    industry: 'Online Retail',
    challenge: 'Inventory management and customer service overload',
    result: '40% improvement in customer satisfaction',
    timeSaved: '22 hours/week',
    roi: '350%'
  },
  {
    clientName: 'Consulting Collective',
    industry: 'Management Consulting',
    challenge: 'Proposal writing and client research consuming billable time',
    result: '60% increase in proposal win rate',
    timeSaved: '30 hours/week',
    roi: '450%'
  },
  {
    clientName: 'Healthcare Partners',
    industry: 'Medical Practice',
    challenge: 'Patient scheduling and insurance verification bottlenecks',
    result: '90% reduction in scheduling conflicts',
    timeSaved: '25 hours/week',
    roi: '320%'
  }
]

const industryResults = [
  {
    industry: 'Technology & SaaS',
    averageSavings: '$12,500/month',
    commonTasks: 'Customer onboarding, technical documentation, lead qualification',
    averageROI: '380%',
    timeReclaimed: '22 hours/week'
  },
  {
    industry: 'Professional Services',
    averageSavings: '$18,000/month',
    commonTasks: 'Client intake, proposal writing, project coordination',
    averageROI: '420%',
    timeReclaimed: '28 hours/week'
  },
  {
    industry: 'Healthcare',
    averageSavings: '$8,500/month',
    commonTasks: 'Patient scheduling, insurance verification, medical records',
    averageROI: '340%',
    timeReclaimed: '20 hours/week'
  },
  {
    industry: 'Real Estate',
    averageSavings: '$6,800/month',
    commonTasks: 'Lead nurturing, transaction coordination, market research',
    averageROI: '360%',
    timeReclaimed: '18 hours/week'
  }
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6">Real Results from Real Businesses</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600">
            Discover how businesses across industries have transformed their operations, saved time, 
            and accelerated growth through strategic virtual assistant partnerships.
          </Paragraph>
          
          <div className="bg-green-50 rounded-xl p-8 mb-8 border border-green-200">
            <H3 className="mb-4 text-green-800">Collective Impact</H3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">500+</div>
                <div className="text-green-600 text-sm">Businesses Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">50,000+</div>
                <div className="text-green-600 text-sm">Hours Reclaimed</div>
              </div>
              <div className="text-2xl font-bold text-green-700 text-center">
                <div className="text-2xl font-bold text-green-700">$2.5M+</div>
                <div className="text-green-600 text-sm">Total Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">385%</div>
                <div className="text-green-600 text-sm">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Case Studies */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Featured Success Stories"
          description="In-depth case studies showing transformational results"
          centered
        />
        
        <div className="space-y-12">
          {featuredCaseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Client Info */}
                <div>
                  <div className="bg-primary-blue text-white rounded-lg p-6 mb-6">
                    <H3 className="text-white mb-2">{study.clientName}</H3>
                    <div className="space-y-2 text-blue-100 text-sm">
                      <div><strong>Industry:</strong> {study.industry}</div>
                      <div><strong>Location:</strong> {study.location}</div>
                      <div><strong>Size:</strong> {study.companySize}</div>
                      <div><strong>Partnership:</strong> {study.duration}</div>
                    </div>
                  </div>
                </div>
                
                {/* Challenge & Solution */}
                <div>
                  <div className="mb-6">
                    <H3 className="mb-3 text-red-600">The Challenge</H3>
                    <Paragraph className="text-gray-600 text-sm">
                      {study.challenge}
                    </Paragraph>
                  </div>
                  
                  <div>
                    <H3 className="mb-3 text-blue-600">Our Solution</H3>
                    <Paragraph className="text-gray-600 text-sm">
                      {study.solution}
                    </Paragraph>
                  </div>
                </div>
                
                {/* Results */}
                <div>
                  <H3 className="mb-4 text-green-600">Results Achieved</H3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center bg-green-50 rounded-lg p-3">
                      <span className="text-sm text-gray-700">Time Saved</span>
                      <span className="font-bold text-green-700">{study.results.timeSaved}</span>
                    </div>
                    <div className="flex justify-between items-center bg-green-50 rounded-lg p-3">
                      <span className="text-sm text-gray-700">Cost Savings</span>
                      <span className="font-bold text-green-700">{study.results.costSavings}</span>
                    </div>
                    <div className="flex justify-between items-center bg-green-50 rounded-lg p-3">
                      <span className="text-sm text-gray-700">Productivity</span>
                      <span className="font-bold text-green-700">+{study.results.productivityIncrease}</span>
                    </div>
                    <div className="flex justify-between items-center bg-green-50 rounded-lg p-3">
                      <span className="text-sm text-gray-700">Bonus Impact</span>
                      <span className="font-bold text-green-700">{study.results.additionalMetric}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="border-t pt-6 mt-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="text-primary-blue text-4xl mb-4">"</div>
                  <Paragraph className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                    {study.testimonial}
                  </Paragraph>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold">
                      {study.clientName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{study.clientTitle}</div>
                      <div className="text-gray-600 text-sm">{study.clientName}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* All Case Studies Grid */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="More Success Stories"
          description="Quick overview of additional client transformations"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCaseStudies.map((study, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {study.clientName.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <H3 className="text-lg">{study.clientName}</H3>
                  <div className="text-primary-blue text-sm font-medium">{study.industry}</div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="font-semibold text-gray-800 mb-2">Challenge:</div>
                <Paragraph className="text-gray-600 text-sm mb-4">
                  {study.challenge}
                </Paragraph>
                
                <div className="font-semibold text-green-800 mb-2">Result:</div>
                <Paragraph className="text-green-700 text-sm font-medium">
                  {study.result}
                </Paragraph>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-blue-50 rounded-lg p-3">
                  <div className="font-bold text-primary-blue">{study.timeSaved}</div>
                  <div className="text-gray-600 text-xs">Time Saved</div>
                </div>
                <div className="text-center bg-green-50 rounded-lg p-3">
                  <div className="font-bold text-green-600">{study.roi}</div>
                  <div className="text-gray-600 text-xs">ROI</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Industry Results */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Results by Industry"
          description="See how different industries benefit from virtual assistant partnerships"
          centered
          theme="dark"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {industryResults.map((industry, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <H3 className="mb-4 text-white">{industry.industry}</H3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="font-bold text-accent-amber">{industry.averageSavings}</div>
                  <div className="text-blue-200 text-xs">Avg Monthly Savings</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="font-bold text-accent-amber">{industry.averageROI}</div>
                  <div className="text-blue-200 text-xs">Average ROI</div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-blue-200 text-sm font-semibold mb-2">Time Reclaimed:</div>
                <div className="text-white font-bold">{industry.timeReclaimed}</div>
              </div>
              
              <div>
                <div className="text-blue-200 text-sm font-semibold mb-2">Common Tasks Delegated:</div>
                <div className="text-blue-100 text-sm">{industry.commonTasks}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Success Factors */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="What Makes These Partnerships Successful?"
            description="Common elements across all successful virtual assistant relationships"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-3xl mb-4">🎯</div>
              <H3 className="mb-4">Clear Expectations</H3>
              <Paragraph className="text-gray-600 text-sm">
                Successful clients define clear goals, success metrics, and communication preferences from day one. 
                This eliminates confusion and ensures alignment.
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-3xl mb-4">🤝</div>
              <H3 className="mb-4">Trust & Autonomy</H3>
              <Paragraph className="text-gray-600 text-sm">
                The best results come when clients provide proper training initially, then trust their VA 
                to make decisions and suggest improvements.
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-3xl mb-4">📈</div>
              <H3 className="mb-4">Gradual Scaling</H3>
              <Paragraph className="text-gray-600 text-sm">
                Starting with basic tasks and gradually expanding scope allows both client and VA to build 
                confidence and refine processes.
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready to Write Your Success Story?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Join hundreds of businesses that have transformed their operations through strategic virtual assistant 
            partnerships. Your success story could be next.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Start Your Transformation
            </Button>
            <Button as="link" href="/resources/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your Potential ROI
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Free consultation</div>
            <div>✅ Custom strategy</div>
            <div>✅ Proven results</div>
          </div>
        </div>
      </Section>

      {/* Related Resources */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Learn More About VA Success"
            description="Additional resources to help you achieve similar results"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/resources/delegation-guide" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📋</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Delegation Guide</H3>
              <Paragraph className="text-gray-600">
                Learn the exact delegation framework used by our most successful clients.
              </Paragraph>
            </Link>
            
            <Link href="/industries" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏢</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Industry Solutions</H3>
              <Paragraph className="text-gray-600">
                Explore specialized VA services tailored for your specific industry needs.
              </Paragraph>
            </Link>
            
            <Link href="/blog" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">💡</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Success Insights</H3>
              <Paragraph className="text-gray-600">
                Read detailed analysis and strategies from real virtual assistant partnerships.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}