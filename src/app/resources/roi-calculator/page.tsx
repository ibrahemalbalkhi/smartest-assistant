import { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import { Breadcrumbs } from '@/components/navigation/breadcrumbs'
import { ROICalculator } from '@/components/tools/roi-calculator'

export const metadata: Metadata = generateSEOMetadata({
  title: 'ROI Calculator: Calculate Your Virtual Assistant Savings',
  description: 'Discover how much time and money you can save with a smart virtual assistant. Free interactive ROI calculator with instant results and detailed analysis.',
  keywords: 'ROI calculator, virtual assistant savings, VA cost calculator, productivity calculator',
  canonical: '/resources/roi-calculator'
})

export default function ROICalculatorPage() {
  const breadcrumbs = [
    { label: 'Resources', href: '/resources' },
    { label: 'ROI Calculator', href: '/resources/roi-calculator' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Virtual Assistant ROI Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover exactly how much time and money you can save by hiring a smart virtual assistant. 
            Get instant results with our interactive calculator.
          </p>
        </div>

        {/* Calculator Component */}
        <ROICalculator />

        {/* Benefits Section */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Our ROI Calculator is Different
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Data-Based</h3>
              <p className="text-gray-600">
                Based on actual client data from 500+ businesses who've hired smart virtual assistants.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hidden Costs Included</h3>
              <p className="text-gray-600">
                Factors in hiring costs, training time, benefits, and opportunity costs of doing admin work yourself.
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
                Get immediate calculations with beautiful visualizations showing your potential savings.
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Start Saving?
          </h2>
          <p className="text-blue-100 mb-6 text-lg">
            Schedule a free consultation to discuss your specific needs and get matched with your perfect smart VA.
          </p>
          <div className="space-x-4">
            <a
              href="/schedule-call"
              className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Schedule Free Consultation
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}