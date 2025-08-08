import { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import { Breadcrumbs } from '@/components/navigation/breadcrumbs'
import { TaskAuditTool } from '@/components/tools/task-audit-tool'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Task Audit Tool: Identify Tasks to Delegate to Your VA',
  description: 'Free interactive task audit checklist to identify which tasks you should delegate to a virtual assistant. Get a personalized PDF report with recommendations.',
  keywords: 'task audit, delegation checklist, virtual assistant tasks, productivity assessment',
  canonical: '/resources/task-audit'
})

export default function TaskAuditPage() {
  const breadcrumbs = [
    { label: 'Resources', href: '/resources' },
    { label: 'Task Audit Tool', href: '/resources/task-audit' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Task Delegation Audit
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Identify exactly which tasks you should delegate to a virtual assistant. 
            Get a personalized report with specific recommendations for your business.
          </p>
        </div>

        {/* Tool Component */}
        <TaskAuditTool />

        {/* Benefits Section */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Use Our Task Audit Tool?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Assessment</h3>
              <p className="text-gray-600">
                Covers all business functions from administrative tasks to creative projects and strategic work.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Report</h3>
              <p className="text-gray-600">
                Get a detailed PDF report with task priorities, delegation strategies, and implementation timeline.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Results</h3>
              <p className="text-gray-600">
                Complete the audit in 5-10 minutes and get immediate insights into your delegation opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Common Tasks Preview */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Most Commonly Delegated Tasks
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Administrative</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Email management</li>
                <li>• Calendar scheduling</li>
                <li>• Data entry</li>
                <li>• Document organization</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Marketing</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Social media posting</li>
                <li>• Content creation</li>
                <li>• Lead research</li>
                <li>• Email campaigns</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Customer Service</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Live chat support</li>
                <li>• Order processing</li>
                <li>• Follow-up calls</li>
                <li>• Customer surveys</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Operations</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Project coordination</li>
                <li>• Vendor management</li>
                <li>• Reporting</li>
                <li>• Process documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}