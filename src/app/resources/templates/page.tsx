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
  title: 'Free Virtual Assistant Templates | Delegation Templates & Checklists',
  description: 'Download free templates for virtual assistant management including delegation checklists, SOPs, onboarding guides, and communication frameworks.',
  keywords: 'virtual assistant templates, delegation templates, VA management templates, SOP templates, onboarding checklists',
  openGraph: {
    title: 'Free Virtual Assistant Templates | Delegation Templates & Checklists',
    description: 'Free downloadable templates to help you work more effectively with virtual assistants.',
    url: 'https://smartestassistant.com/resources/templates',
  }
}

const templateCategories = [
  {
    category: 'Delegation & Task Management',
    description: 'Templates for effective task delegation and management',
    icon: '📋',
    templates: [
      {
        name: 'Task Delegation Worksheet',
        description: 'Step-by-step template for clearly defining and delegating tasks to your VA',
        format: 'PDF + Excel',
        pages: '2 pages',
        includes: ['Task description framework', 'Success criteria checklist', 'Timeline template', 'Resource list'],
        downloadUrl: '/templates/task-delegation-worksheet.pdf',
        popular: true
      },
      {
        name: 'Weekly Task Planner',
        description: 'Organize and prioritize tasks for your virtual assistant each week',
        format: 'Excel + Google Sheets',
        pages: '1 page',
        includes: ['Priority matrix', 'Time estimates', 'Dependencies tracker', 'Status updates'],
        downloadUrl: '/templates/weekly-task-planner.xlsx',
        popular: false
      },
      {
        name: 'Project Handoff Template',
        description: 'Comprehensive template for transferring project ownership to your VA',
        format: 'PDF + Word',
        pages: '4 pages',
        includes: ['Project overview', 'Stakeholder contacts', 'Resource access', 'Success metrics'],
        downloadUrl: '/templates/project-handoff-template.pdf',
        popular: true
      }
    ]
  },
  {
    category: 'Communication & Reporting',
    description: 'Templates for clear communication and progress tracking',
    icon: '💬',
    templates: [
      {
        name: 'Daily Status Report Template',
        description: 'Standard format for VAs to report daily progress and updates',
        format: 'Word + Google Docs',
        pages: '1 page',
        includes: ['Tasks completed', 'Issues encountered', 'Next day priorities', 'Questions/needs'],
        downloadUrl: '/templates/daily-status-report.docx',
        popular: true
      },
      {
        name: 'Weekly Performance Review',
        description: 'Structured template for regular VA performance discussions',
        format: 'PDF + Word',
        pages: '3 pages',
        includes: ['Goal assessment', 'Quality metrics', 'Development areas', 'Action items'],
        downloadUrl: '/templates/weekly-performance-review.pdf',
        popular: false
      },
      {
        name: 'Communication Preferences Guide',
        description: 'Template to establish clear communication expectations and preferences',
        format: 'PDF',
        pages: '2 pages',
        includes: ['Channel preferences', 'Response time expectations', 'Meeting schedules', 'Emergency protocols'],
        downloadUrl: '/templates/communication-preferences-guide.pdf',
        popular: true
      }
    ]
  },
  {
    category: 'Onboarding & Training',
    description: 'Templates for smooth VA onboarding and skill development',
    icon: '🎓',
    templates: [
      {
        name: 'VA Onboarding Checklist',
        description: 'Complete checklist to ensure comprehensive virtual assistant onboarding',
        format: 'PDF + Excel',
        pages: '3 pages',
        includes: ['Pre-start setup', 'First week activities', 'Training modules', 'Access provisioning'],
        downloadUrl: '/templates/va-onboarding-checklist.pdf',
        popular: true
      },
      {
        name: 'Skills Assessment Matrix',
        description: 'Evaluate and track your VA\'s skills across different competency areas',
        format: 'Excel + Google Sheets',
        pages: '2 pages',
        includes: ['Technical skills', 'Soft skills', 'Industry knowledge', 'Development plan'],
        downloadUrl: '/templates/skills-assessment-matrix.xlsx',
        popular: false
      },
      {
        name: 'Training Plan Template',
        description: 'Structured approach to developing your VA\'s skills and knowledge',
        format: 'PDF + Word',
        pages: '4 pages',
        includes: ['Learning objectives', 'Training schedule', 'Resource links', 'Progress tracking'],
        downloadUrl: '/templates/training-plan-template.pdf',
        popular: true
      }
    ]
  },
  {
    category: 'Standard Operating Procedures (SOPs)',
    description: 'Ready-to-use SOP templates for common VA tasks',
    icon: '⚙️',
    templates: [
      {
        name: 'Email Management SOP',
        description: 'Detailed procedure for professional email management and response',
        format: 'PDF + Word',
        pages: '5 pages',
        includes: ['Sorting protocols', 'Response templates', 'Priority guidelines', 'Escalation rules'],
        downloadUrl: '/templates/email-management-sop.pdf',
        popular: true
      },
      {
        name: 'Calendar Management SOP',
        description: 'Step-by-step guide for effective calendar and meeting management',
        format: 'PDF + Word',
        pages: '4 pages',
        includes: ['Scheduling protocols', 'Meeting preparation', 'Conflict resolution', 'Reminder systems'],
        downloadUrl: '/templates/calendar-management-sop.pdf',
        popular: true
      },
      {
        name: 'Social Media Management SOP',
        description: 'Comprehensive guide for managing business social media accounts',
        format: 'PDF + Word',
        pages: '6 pages',
        includes: ['Content guidelines', 'Posting schedules', 'Engagement rules', 'Crisis management'],
        downloadUrl: '/templates/social-media-management-sop.pdf',
        popular: false
      },
      {
        name: 'Customer Service SOP',
        description: 'Professional customer service standards and response procedures',
        format: 'PDF + Word',
        pages: '5 pages',
        includes: ['Response templates', 'Escalation matrix', 'Quality standards', 'Follow-up protocols'],
        downloadUrl: '/templates/customer-service-sop.pdf',
        popular: true
      }
    ]
  },
  {
    category: 'Performance & Quality Assurance',
    description: 'Templates for monitoring and improving VA performance',
    icon: '📊',
    templates: [
      {
        name: 'Quality Control Checklist',
        description: 'Ensure consistent quality standards across all VA deliverables',
        format: 'Excel + Google Sheets',
        pages: '2 pages',
        includes: ['Quality criteria', 'Review process', 'Feedback forms', 'Improvement tracking'],
        downloadUrl: '/templates/quality-control-checklist.xlsx',
        popular: true
      },
      {
        name: 'Performance Metrics Dashboard',
        description: 'Track key performance indicators and productivity metrics for your VA',
        format: 'Excel + Google Sheets',
        pages: '3 pages',
        includes: ['Time tracking', 'Task completion rates', 'Quality scores', 'Goal progress'],
        downloadUrl: '/templates/performance-metrics-dashboard.xlsx',
        popular: false
      },
      {
        name: 'Monthly Review Template',
        description: 'Comprehensive monthly assessment and planning template',
        format: 'PDF + Word',
        pages: '3 pages',
        includes: ['Achievement summary', 'Challenge analysis', 'Next month goals', 'Development needs'],
        downloadUrl: '/templates/monthly-review-template.pdf',
        popular: true
      }
    ]
  }
]

const templateBundles = [
  {
    name: 'Complete VA Management Bundle',
    description: 'All templates you need for successful virtual assistant management',
    includes: '25+ templates across all categories',
    value: '$297 value',
    price: 'Free',
    downloadUrl: '/bundles/complete-va-management-bundle.zip'
  },
  {
    name: 'Quick Start Essentials',
    description: 'Essential templates to get started with your VA in the first week',
    includes: '8 most popular templates',
    value: '$127 value',
    price: 'Free',
    downloadUrl: '/bundles/quick-start-essentials.zip'
  },
  {
    name: 'SOP Library',
    description: 'Complete library of standard operating procedures for common tasks',
    includes: '12 detailed SOP templates',
    value: '$197 value',
    price: 'Free',
    downloadUrl: '/bundles/sop-library.zip'
  }
]

export default function TemplatesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6">Free Virtual Assistant Templates</H2>
          <Paragraph size="xl" className="mb-8 text-gray-600">
            Download professionally designed templates to streamline your virtual assistant management, 
            improve delegation effectiveness, and ensure consistent quality results.
          </Paragraph>
          
          <div className="bg-green-50 rounded-xl p-8 mb-8 border border-green-200">
            <H3 className="mb-4 text-green-800">Why Use Our Templates?</H3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-green-500">✓</span>
                  <span className="font-semibold">Proven Effectiveness</span>
                </div>
                <Paragraph className="text-green-700 text-sm">
                  Based on successful partnerships with 500+ businesses
                </Paragraph>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-green-500">✓</span>
                  <span className="font-semibold">Time-Saving</span>
                </div>
                <Paragraph className="text-green-700 text-sm">
                  Skip the trial and error - use templates that work immediately
                </Paragraph>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-green-500">✓</span>
                  <span className="font-semibold">Fully Customizable</span>
                </div>
                <Paragraph className="text-green-700 text-sm">
                  Adapt templates to match your specific business needs
                </Paragraph>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="#bundles" variant="primary" size="lg">
              Download Bundle
            </Button>
            <Button as="link" href="#templates" variant="outline" size="lg">
              Browse Individual Templates
            </Button>
          </div>
        </div>
      </Section>

      {/* Template Bundles */}
      <Section background="primary" spacing="lg" id="bundles">
        <SectionHeader
          title="Template Bundles"
          description="Complete collections of templates for different needs and experience levels"
          centered
          theme="dark"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {templateBundles.map((bundle, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <H3 className="mb-4 text-white">{bundle.name}</H3>
              <Paragraph className="text-blue-100 mb-6 text-sm">
                {bundle.description}
              </Paragraph>
              
              <div className="mb-6">
                <div className="text-accent-amber font-bold text-2xl mb-2">{bundle.price}</div>
                <div className="text-blue-200 text-sm line-through">{bundle.value}</div>
                <div className="text-blue-100 text-sm mt-2">{bundle.includes}</div>
              </div>
              
              <Button variant="secondary" fullWidth>
                Download Bundle
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Individual Templates */}
      <Section background="gray" spacing="lg" id="templates">
        <SectionHeader
          title="Browse Individual Templates"
          description="Find specific templates for your virtual assistant management needs"
          centered
        />
        
        <div className="space-y-12">
          {templateCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <div>
                  <H3 className="mb-1">{category.category}</H3>
                  <Paragraph className="text-gray-600">{category.description}</Paragraph>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.templates.map((template, templateIndex) => (
                  <div key={templateIndex} className={`bg-gray-50 rounded-xl p-6 border ${template.popular ? 'border-primary-blue ring-2 ring-primary-blue/20' : 'border-gray-200'} relative`}>
                    {template.popular && (
                      <div className="absolute -top-3 left-6 bg-primary-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </div>
                    )}
                    
                    <H3 className="mb-3 text-lg">{template.name}</H3>
                    <Paragraph className="text-gray-600 text-sm mb-4">
                      {template.description}
                    </Paragraph>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Format:</span>
                        <span className="font-medium">{template.format}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Pages:</span>
                        <span className="font-medium">{template.pages}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="font-semibold text-gray-800 mb-2 text-sm">Includes:</div>
                      <ul className="space-y-1">
                        {template.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 mt-0.5">•</span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button variant={template.popular ? 'primary' : 'outline'} size="sm" fullWidth>
                      Download Template
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How to Use Templates */}
      <Section background="white" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="How to Use These Templates Effectively"
            description="Best practices for implementing templates in your virtual assistant partnership"
            centered
          />
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-primary-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <H3 className="mb-3">Choose & Customize</H3>
              <Paragraph className="text-gray-600 text-sm">
                Select templates that match your needs and customize them to reflect your business requirements and preferences.
              </Paragraph>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 text-primary-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <H3 className="mb-3">Share & Train</H3>
              <Paragraph className="text-gray-600 text-sm">
                Share templates with your VA during onboarding and provide training on how to use them effectively in your workflows.
              </Paragraph>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 text-primary-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <H3 className="mb-3">Implement & Monitor</H3>
              <Paragraph className="text-gray-600 text-sm">
                Start using templates in your daily operations and monitor their effectiveness in improving communication and results.
              </Paragraph>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 text-primary-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <H3 className="mb-3">Refine & Optimize</H3>
              <Paragraph className="text-gray-600 text-sm">
                Gather feedback from your VA and continuously refine templates to improve efficiency and effectiveness over time.
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>

      {/* Success Story */}
      <Section background="green-50" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-green-200">
            <div className="text-green-600 text-4xl mb-4">"</div>
            <Paragraph size="lg" className="text-gray-700 italic mb-6 leading-relaxed">
              These templates transformed how we work with our virtual assistant. What used to take hours of 
              back-and-forth communication now happens seamlessly. Our VA knows exactly what's expected, 
              and we've seen a 40% improvement in task completion quality.
            </Paragraph>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                SM
              </div>
              <div>
                <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                <div className="text-gray-600 text-sm">CEO, Digital Marketing Pro</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready to Streamline Your VA Partnership?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Download our templates and start building more effective, efficient relationships with virtual assistants. 
            Plus, get expert guidance on implementation with a free consultation.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="secondary" size="xl">
              Download Complete Bundle
            </Button>
            <Button as="link" href="/schedule-a-call" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Get Implementation Help
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ Instant downloads</div>
            <div>✅ Multiple file formats</div>
            <div>✅ Expert support available</div>
          </div>
        </div>
      </Section>

      {/* Related Resources */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="More VA Management Resources"
            description="Additional tools and guides to maximize your virtual assistant partnership success"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/resources/delegation-guide" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📚</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Delegation Guide</H3>
              <Paragraph className="text-gray-600">
                Complete step-by-step guide for effective task delegation and virtual assistant management.
              </Paragraph>
            </Link>
            
            <Link href="/resources/case-studies" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Success Stories</H3>
              <Paragraph className="text-gray-600">
                Real case studies showing how businesses achieve dramatic results with virtual assistants.
              </Paragraph>
            </Link>
            
            <Link href="/blog" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">💡</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Expert Insights</H3>
              <Paragraph className="text-gray-600">
                Advanced strategies, tips, and insights from virtual assistant experts and successful clients.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}