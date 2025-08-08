import { Metadata } from 'next'
import Link from 'next/link'
import { ServiceHero } from '@/components/sections'
import { ServiceSchema, FAQSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Event Planning Virtual Assistant Services | Event VAs | Smartest Assistant',
  description: 'Professional event planning by smart VAs. Corporate events, conferences, webinars, and team meetings. From concept to execution, we handle every detail.',
  keywords: 'event planning virtual assistant, conference planning VA, corporate event assistant, meeting planning virtual assistant, webinar coordination VA',
  openGraph: {
    title: 'Event Planning Virtual Assistant Services | Event VAs',
    description: 'Professional event planning by smart VAs. From concept to execution.',
    url: 'https://smartestassistant.com/services/event-planning',
  }
}

export default function EventPlanningPage() {
  return (
    <>
      <ServiceSchema 
        name="Event Planning Virtual Assistant Services"
        description="Professional event planning services by smart virtual assistants. Corporate events, conferences, webinars, and team meetings handled from concept to execution."
        url="https://smartestassistant.com/services/event-planning"
      />
      
      <ServiceHero
        title="Event Planning by Smart Virtual Assistants"
        subtitle="FLAWLESS EVENTS, EVERY TIME"
        description="Create memorable business events without the stress. Our smart VAs handle every detail from venue booking to day-of coordination, ensuring your events achieve their objectives."
        features={[
          'End-to-end event management',
          'Vendor coordination and negotiation',
          'Budget tracking and optimization',
          'Day-of event execution support'
        ]}
      />

      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
        <p className="text-xl text-gray-600 mb-8">
          We're putting the finishing touches on our comprehensive Event Planning service page. 
          In the meantime, our smart VAs are ready to help you plan and execute exceptional business events.
        </p>
        <div className="space-y-4">
          <p className="text-gray-700">Our Event Planning VAs handle:</p>
          <ul className="text-left max-w-md mx-auto space-y-2 text-gray-600">
            <li>• Corporate conferences and meetings</li>
            <li>• Team building events and retreats</li>
            <li>• Product launches and presentations</li>
            <li>• Webinars and virtual events</li>
            <li>• Vendor coordination and management</li>
            <li>• Budget tracking and cost optimization</li>
          </ul>
        </div>
        <div className="mt-8">
          <a 
            href="/schedule-a-call" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Discuss Your Event Planning Needs
          </a>
        </div>
      </div>
    </>
  )
}