import { Metadata } from 'next'
import Script from 'next/script'
import { Section, SectionHeader, H3, Paragraph, FeatureCard } from '@/components/ui'
import { MinimalHero } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Schedule a Call - Free VA Consultation | Smartest Assistant',
  description: 'Book a free consultation with our experts. We understand your business and match you with the smartest virtual assistant for your needs.',
  openGraph: {
    title: 'Schedule a Call - Free VA Consultation | Smartest Assistant',
    description: 'Book a free consultation with our experts. We understand your business and match you with the smartest virtual assistant for your needs.',
  }
}

export default function ScheduleCallPage() {
  return (
    <>
      {/* Calendly CSS */}
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      
      <MinimalHero
        title="Schedule Your Free Consultation"
        description="Let's discuss your needs and find the perfect smart virtual assistant for your business."
      />

      <Section spacing="lg">
        <div className="max-w-4xl mx-auto">
          {/* Two-Phase Process */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <H3 className="mb-4">Discovery Call</H3>
              <Paragraph>
                We meet with our experts for free to understand your business, challenges, and specific requirements. 
                This consultation helps us identify exactly what type of support will deliver the biggest impact.
              </Paragraph>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-amber text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <H3 className="mb-4">Perfect Match</H3>
              <Paragraph>
                Based on our discovery session, we match you with the best and smartest virtual assistant 
                who has the exact skills, experience, and work style to complement your business needs.
              </Paragraph>
            </div>
          </div>

          {/* What to Expect */}
          <div className="mb-16">
            <SectionHeader
              title="What to Expect in Your Call"
              description="Our consultations are focused, efficient, and valuable"
              centered
            />

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                title="Business Assessment"
                description="We'll discuss your current workflows, pain points, and growth objectives"
                icon={<span className="text-2xl">🔍</span>}
              />
              
              <FeatureCard
                title="Needs Analysis"
                description="Identify which tasks to delegate and what skills your VA should have"
                icon={<span className="text-2xl">📋</span>}
              />
              
              <FeatureCard
                title="Custom Recommendations"
                description="Get personalized suggestions on VA services and engagement models"
                icon={<span className="text-2xl">💡</span>}
              />
            </div>
          </div>

          {/* Benefits */}
          <div className="text-center mb-12">
            <H3 className="mb-8">Why Schedule a Consultation?</H3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div className="text-left">
                  <div className="font-semibold">No Risk, All Insight</div>
                  <div className="text-gray-600 text-sm">Free consultation with zero commitment required</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div className="text-left">
                  <div className="font-semibold">Expert Guidance</div>
                  <div className="text-gray-600 text-sm">Get advice from VA specialists with 10+ years experience</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div className="text-left">
                  <div className="font-semibold">Perfect Matching</div>
                  <div className="text-gray-600 text-sm">Find the ideal VA based on your specific industry and needs</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div className="text-left">
                  <div className="font-semibold">Quick Implementation</div>
                  <div className="text-gray-600 text-sm">Start working with your matched VA within 48 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Calendly Inline Widget */}
      <Section spacing="lg" background="gray">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Book Your Free Consultation"
            description="Choose a time that works best for your schedule"
            centered
          />
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Calendly inline widget */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/ibrahim-a-chiefnest/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
              style={{minWidth: '320px', height: '700px'}}
            ></div>
          </div>
        </div>
      </Section>

      {/* Calendly Scripts */}
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="afterInteractive"
      />
      <Script 
        id="calendly-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.onload = function() { 
              if (window.Calendly) {
                Calendly.initBadgeWidget({ 
                  url: 'https://calendly.com/ibrahim-a-chiefnest/30min', 
                  text: 'Schedule time with me', 
                  color: '#0069ff', 
                  textColor: '#ffffff', 
                  branding: true 
                });
              }
            }
          `
        }}
      />
    </>
  )
}