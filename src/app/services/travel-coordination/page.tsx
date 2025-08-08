import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Section, 
  SectionHeader,
  H2, 
  H3, 
  Paragraph, 
  Button, 
  StatCard,
  TestimonialCard,
  FeatureCard
} from '@/components/ui'
import FAQAccordion from '@/components/ui/FAQ'
import { ServiceHero } from '@/components/sections'
import { ServiceSchema, FAQSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Travel Coordination Virtual Assistant Services | Travel VAs | Smartest Assistant',
  description: 'Professional travel coordination by smart VAs. Flight booking, hotel reservations, itinerary management, and 24/7 travel support. Stress-free business travel.',
  keywords: 'travel coordination virtual assistant, travel planning VA, business travel assistant, trip planning virtual assistant, travel booking VA',
  openGraph: {
    title: 'Travel Coordination Virtual Assistant Services | Travel VAs',
    description: 'Professional travel coordination by smart VAs. Stress-free business travel management.',
    url: 'https://smartestassistant.com/services/travel-coordination',
  }
}

const serviceFeatures = [
  'Flight booking and seat selection',
  'Hotel reservations and upgrades',
  'Ground transportation coordination',
  'Detailed itinerary management',
  'Travel policy compliance',
  'Expense tracking and reporting',
  '24/7 travel support and changes',
  'Visa and documentation assistance',
  'Meeting and event coordination',
  'Emergency travel assistance'
]

const travelProcess = [
  {
    step: 1,
    title: 'Travel Planning',
    description: 'We understand your preferences, gather requirements, and create optimized travel plans that maximize productivity and comfort.'
  },
  {
    step: 2,
    title: 'Booking & Coordination',
    description: 'Handle all reservations, ensure policy compliance, and coordinate complex multi-city itineraries with precision.'
  },
  {
    step: 3,
    title: 'Support & Management',
    description: 'Provide real-time support during travel, handle changes, and manage any issues that arise.'
  }
]

const faqs = [
  {
    question: 'Can you handle complex international travel requirements?',
    answer: 'Yes, our VAs are experienced with international travel including visa requirements, passport validity, customs regulations, and multi-country itineraries. We handle all documentation and compliance needs.'
  },
  {
    question: 'What happens if flights are cancelled or delayed?',
    answer: 'We provide 24/7 travel support and immediately work to rebook flights, adjust accommodations, and notify all parties of changes. We proactively monitor your flights and make adjustments before issues impact your schedule.'
  },
  {
    question: 'Do you work with corporate travel policies?',
    answer: 'Absolutely. We learn your company travel policies and ensure all bookings comply with spending limits, preferred vendors, and approval processes. We can also help optimize your travel policy for better savings.'
  },
  {
    question: 'Can you coordinate group travel for teams or events?',
    answer: 'Yes, we specialize in complex group travel coordination including conferences, team retreats, and client meetings. We handle individual preferences while negotiating group rates and managing logistics.'
  },
  {
    question: 'How do you handle travel expenses and reporting?',
    answer: 'We track all travel expenses, organize receipts digitally, categorize expenses for accounting, and provide detailed reports that integrate with your expense management systems and accounting software.'
  }
]

const testimonial = {
  name: 'Alexandra Chen',
  role: 'VP Sales',
  company: 'Global Tech Solutions',
  content: 'Managing travel for our 15-person sales team was a nightmare until we partnered with Smartest Assistant. Their VA handles everything seamlessly - from complex international trips to last-minute changes. Our team travels stress-free and I save 10+ hours weekly.',
  rating: 5,
  location: 'San Jose, CA'
}

export default function TravelCoordinationPage() {
  return (
    <>
      <ServiceSchema 
        name="Travel Coordination Virtual Assistant Services"
        description="Professional travel coordination services by smart virtual assistants. Flight booking, hotel reservations, itinerary management, and 24/7 travel support."
        url="https://smartestassistant.com/services/travel-coordination"
      />
      <FAQSchema faqs={faqs} />
      
      <ServiceHero
        title="Travel Coordination by Smart Virtual Assistants"
        subtitle="STRESS-FREE BUSINESS TRAVEL"
        description="Transform chaotic travel planning into seamless journeys. Our smart VAs handle every detail so you can focus on business success, not travel logistics."
        features={[
          '24/7 travel support and changes',
          '40% average savings on travel costs',
          'Policy compliant bookings',
          'Proactive travel monitoring'
        ]}
      />

      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-red-600">Travel Chaos Is Killing Your Productivity</H2>
            <Paragraph size="lg">
              Hours spent on travel booking, constant flight changes, and travel emergencies drain your time and energy. 
              Poor travel coordination costs money and damages business relationships.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">⏰ Time Waste</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• 3+ hours per trip on booking and coordination</li>
                <li>• Constantly monitoring flights and changes</li>
                <li>• Stressed executives missing meetings</li>
                <li>• Last-minute booking premium costs</li>
                <li>• Complex itineraries causing confusion</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <H3 className="mb-4 text-red-700">💸 Hidden Costs</H3>
              <ul className="space-y-3 text-gray-700">
                <li>• Overpaying for flights and hotels</li>
                <li>• Missed meetings due to travel issues</li>
                <li>• Team productivity lost to travel stress</li>
                <li>• Emergency rebooking fees</li>
                <li>• Non-refundable cancellations</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2 className="mb-6 text-green-600">Strategic Travel That Maximizes ROI</H2>
            <Paragraph size="lg">
              Our smart VAs don't just book travel – they optimize every trip for productivity, cost savings, 
              and seamless execution while providing 24/7 support when you need it most.
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Intelligent Optimization"
              description="Route optimization, timing analysis, and cost comparisons for maximum efficiency"
              icon={<span className="text-3xl">🧠</span>}
            />
            
            <FeatureCard
              title="Proactive Monitoring"
              description="Real-time flight tracking with automatic rebooking before you're even aware of issues"
              icon={<span className="text-3xl">📱</span>}
            />
            
            <FeatureCard
              title="24/7 Support"
              description="Round-the-clock assistance for changes, emergencies, and travel support worldwide"
              icon={<span className="text-3xl">🌍</span>}
            />
          </div>
        </div>
      </Section>

      <Section spacing="lg">
        <SectionHeader
          title="Complete Travel Management Package"
          description="End-to-end travel coordination for seamless business trips"
        />
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <H3 className="mb-6">Core Services</H3>
            <ul className="space-y-4">
              {serviceFeatures.slice(0, 5).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <H3 className="mb-6">Advanced Features</H3>
            <ul className="space-y-4">
              {serviceFeatures.slice(5).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section background="primary" spacing="lg">
        <SectionHeader
          title="How Our Travel Coordination Works"
          description="From planning to support, we handle every aspect of your business travel"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {travelProcess.map((process) => (
            <div key={process.step} className="text-center">
              <div className="bg-accent-amber text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                {process.step}
              </div>
              <H3 className="mb-4 text-white">{process.title}</H3>
              <Paragraph className="text-blue-100">
                {process.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </Section>

      <Section background="white" spacing="lg">
        <SectionHeader
          title="Results You Can Expect"
          description="Measurable improvements our clients experience with professional travel coordination"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <StatCard 
            value="40%" 
            label="Cost savings"
            description="On travel expenses"
          />
          <StatCard 
            value="10+ hrs" 
            label="Time saved"
            description="Per month per traveler"
          />
          <StatCard 
            value="95%" 
            label="On-time arrivals"
            description="Even with flight changes"
          />
        </div>
      </Section>

      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <TestimonialCard testimonial={testimonial} />
        </div>
      </Section>

      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <FAQAccordion 
            faqs={faqs}
            className="space-y-6"
          />
        </div>
      </Section>

      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready for Stress-Free Business Travel?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Stop wasting time on travel logistics. Get smart VAs who handle every detail 
            and provide 24/7 support so you can focus on business success.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Start Travel Coordination
            </Button>
          </div>
        </div>
      </Section>

      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Related Services"
            description="Enhance your travel experience with these complementary services"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/calendar-management" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📅</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Calendar Management</H3>
              <Paragraph className="text-gray-600">
                Coordinate travel schedules with your calendar for optimal trip planning.
              </Paragraph>
            </Link>
            
            <Link href="/services/executive-assistant" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">👔</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Executive Assistant</H3>
              <Paragraph className="text-gray-600">
                High-level coordination for complex business travel and meeting arrangements.
              </Paragraph>
            </Link>
            
            <Link href="/services/event-planning" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🎪</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Event Planning</H3>
              <Paragraph className="text-gray-600">
                Coordinate travel with business events, conferences, and company meetings.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}