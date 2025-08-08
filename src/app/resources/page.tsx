import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Section, 
  SectionHeader,
  H2, 
  H3, 
  Paragraph, 
  Button,
  Container
} from '@/components/ui'
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Virtual Assistant Resources Hub | Guides, Tools & Insights | Smartest Assistant',
  description: 'Free resources for virtual assistant success. ROI calculators, hiring guides, templates, case studies, and expert insights for business delegation.',
  keywords: 'virtual assistant resources, VA hiring guide, delegation templates, ROI calculator, virtual assistant case studies, productivity tools',
  openGraph: {
    title: 'Virtual Assistant Resources Hub | Free Guides, Tools & Insights',
    description: 'Free resources for virtual assistant success. Calculators, guides, templates, and expert insights.',
    url: 'https://smartestassistant.com/resources',
  }
}

const resourceCategories = [
  {
    title: 'Tools & Calculators',
    description: 'Interactive tools to help you make informed decisions',
    icon: '🧮',
    resources: [
      {
        name: 'ROI Calculator',
        href: '/resources/roi-calculator',
        description: 'Calculate potential savings with a virtual assistant',
        type: 'Interactive Tool',
        featured: true
      },
      {
        name: 'Task Audit',
        href: '/resources/task-audit',
        description: 'Identify which tasks to delegate first',
        type: 'Assessment Tool',
        featured: true
      }
    ]
  },
  {
    title: 'Guides & How-Tos',
    description: 'Comprehensive guides for successful delegation',
    icon: '📚',
    resources: [
      {
        name: 'Virtual Assistant Hiring Guide',
        href: '/resources/guides/hiring-virtual-assistant',
        description: 'Complete guide to finding and hiring the right VA',
        type: 'Ultimate Guide',
        featured: true
      },
      {
        name: 'Delegation Best Practices',
        href: '/resources/guides/delegation-best-practices',
        description: 'How to delegate effectively for maximum results',
        type: 'Best Practices',
        featured: false
      },
      {
        name: 'Onboarding Your VA',
        href: '/resources/guides/va-onboarding',
        description: 'Step-by-step VA onboarding process',
        type: 'Process Guide',
        featured: false
      }
    ]
  },
  {
    title: 'Case Studies & Success Stories',
    description: 'Real results from real businesses',
    icon: '📊',
    resources: [
      {
        name: 'Case Studies Library',
        href: '/resources/case-studies',
        description: 'Detailed client success stories and results',
        type: 'Case Studies',
        featured: true
      },
      {
        name: 'Industry Success Stories',
        href: '/resources/case-studies/by-industry',
        description: 'Success stories organized by industry',
        type: 'Industry Stories',
        featured: false
      }
    ]
  },
  {
    title: 'Templates & Checklists',
    description: 'Ready-to-use resources for immediate implementation',
    icon: '📋',
    resources: [
      {
        name: 'Delegation Templates',
        href: '/resources/templates',
        description: 'Pre-built templates for common delegation scenarios',
        type: 'Templates',
        featured: true
      },
      {
        name: 'VA Interview Questions',
        href: '/resources/templates/interview-questions',
        description: 'Essential questions for VA interviews',
        type: 'Checklist',
        featured: false
      },
      {
        name: 'SOP Templates',
        href: '/resources/templates/sop-templates',
        description: 'Standard operating procedure templates',
        type: 'Templates',
        featured: false
      }
    ]
  },
  {
    title: 'Learning Center',
    description: 'Educational content and expert insights',
    icon: '🎓',
    resources: [
      {
        name: 'Blog',
        href: '/resources/blog',
        description: 'Latest insights on virtual assistance and delegation',
        type: 'Blog Articles',
        featured: true
      },
      {
        name: 'Webinars',
        href: '/resources/webinars',
        description: 'Live and recorded educational sessions',
        type: 'Webinars',
        featured: true
      },
      {
        name: 'Productivity Tips',
        href: '/resources/blog/category/productivity',
        description: 'Expert tips for maximizing productivity',
        type: 'Tips & Tricks',
        featured: false
      }
    ]
  },
  {
    title: 'Support & FAQ',
    description: 'Get answers to your questions',
    icon: '❓',
    resources: [
      {
        name: 'FAQ',
        href: '/faq',
        description: 'Frequently asked questions about our services',
        type: 'FAQ',
        featured: true
      },
      {
        name: 'Getting Started',
        href: '/resources/getting-started',
        description: 'Quick start guide for new clients',
        type: 'Quick Start',
        featured: false
      }
    ]
  }
]

export default function ResourcesHub() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources', current: true }
  ]

  const featuredResources = resourceCategories.flatMap(category => 
    category.resources.filter(resource => resource.featured)
  )

  return (
    <>
      <ServiceSchema 
        name="Virtual Assistant Resources Hub"
        description="Comprehensive collection of free resources for virtual assistant success including calculators, guides, templates, case studies, and expert insights."
        url="https://smartestassistant.com/resources"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      
      {/* Hero Section */}
      <Section background="gradient" spacing="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-primary-blue text-sm font-semibold rounded-full mb-4">
                📚 Free Resources
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Everything You Need for{' '}
              <span className="text-primary-blue">Delegation Success</span>
            </h1>
            
            <Paragraph size="lg" className="mb-8 max-w-3xl mx-auto text-xl text-gray-600">
              Free tools, guides, templates, and insights to help you find, hire, and work 
              successfully with virtual assistants. Start your delegation journey today.
            </Paragraph>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="link" href="/resources/roi-calculator" size="lg" className="text-lg px-8 py-4">
                Calculate Your ROI
              </Button>
              <Button as="link" href="/resources/guides/hiring-virtual-assistant" variant="outline" size="lg" className="text-lg px-8 py-4">
                Read Hiring Guide
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Resources */}
      <Section spacing="lg">
        <Container>
          <SectionHeader
            title="Most Popular Resources"
            description="Our most valuable and frequently used resources for VA success"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredResources.map((resource) => (
              <Link key={resource.href} href={resource.href} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-primary-blue h-full">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-primary-blue text-xs font-medium rounded-full">
                        {resource.type}
                      </span>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    
                    <H3 className="mb-3 group-hover:text-primary-blue transition-colors">
                      {resource.name}
                    </H3>
                    
                    <Paragraph className="text-gray-600 mb-4">
                      {resource.description}
                    </Paragraph>
                    
                    <div className="flex items-center text-primary-blue font-semibold group-hover:underline">
                      <span>Access Resource</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Resource Categories */}
      <Section background="gray" spacing="lg">
        <Container>
          <SectionHeader
            title="Browse All Resources"
            description="Comprehensive collection organized by category"
          />
          
          <div className="space-y-12">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl">{category.icon}</div>
                  <div>
                    <H3 className="text-xl mb-1">{category.title}</H3>
                    <Paragraph className="text-gray-600">{category.description}</Paragraph>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <Link key={resourceIndex} href={resource.href} className="group">
                      <div className="p-6 border border-gray-200 rounded-lg hover:border-primary-blue hover:shadow-md transition-all duration-200">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                            {resource.type}
                          </span>
                          {resource.featured && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                              Popular
                            </span>
                          )}
                        </div>
                        
                        <h4 className="font-semibold text-gray-900 group-hover:text-primary-blue transition-colors mb-2">
                          {resource.name}
                        </h4>
                        
                        <Paragraph className="text-sm text-gray-600">
                          {resource.description}
                        </Paragraph>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quick Access Tools */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Quick Access Tools"
              description="Get immediate insights with our interactive tools"
              centered
            />
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 text-white">
                <div className="text-4xl mb-4">🧮</div>
                <H3 className="mb-4 text-white">ROI Calculator</H3>
                <Paragraph className="mb-6 text-blue-100">
                  Discover how much time and money you could save with a smart virtual assistant. 
                  Get personalized results in under 2 minutes.
                </Paragraph>
                <div className="space-y-3 mb-6 text-sm text-blue-100">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Calculate potential savings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Compare different scenarios</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Get detailed breakdown</span>
                  </div>
                </div>
                <Button as="link" href="/resources/roi-calculator" variant="secondary">
                  Start Calculator
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-8 text-white">
                <div className="text-4xl mb-4">📝</div>
                <H3 className="mb-4 text-white">Task Audit Tool</H3>
                <Paragraph className="mb-6 text-green-100">
                  Identify which tasks you should delegate first for maximum impact. 
                  Get a personalized delegation roadmap.
                </Paragraph>
                <div className="space-y-3 mb-6 text-sm text-green-100">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Analyze your current tasks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Prioritize delegation opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Download action plan</span>
                  </div>
                </div>
                <Button as="link" href="/resources/task-audit" variant="secondary">
                  Start Audit
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Newsletter Signup */}
      <Section background="primary" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <H2 className="mb-6 text-white">
              Stay Updated with New Resources
            </H2>
            <Paragraph size="lg" className="mb-8 text-blue-100">
              Get notified when we publish new guides, tools, and insights. 
              Join 5,000+ business leaders optimizing their delegation strategy.
            </Paragraph>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 max-w-lg mx-auto">
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-white/25"
                  required
                />
                <Button type="submit" variant="secondary" size="lg" className="w-full">
                  Get Free Resources
                </Button>
              </form>
              <p className="text-blue-200 text-sm mt-4">
                No spam, ever. Unsubscribe with one click.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="link" href="/schedule-a-call" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}