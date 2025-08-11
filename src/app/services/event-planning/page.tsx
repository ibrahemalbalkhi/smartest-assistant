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
  title: 'Event Planning Virtual Assistant Services | Event VAs | Smartest Assistant',
  description: 'Professional event planning by smart VAs. Corporate events, conferences, webinars, team meetings. End-to-end event management. Save 25+ hours per event.',
  keywords: 'event planning virtual assistant, conference planning VA, corporate event assistant, meeting planning virtual assistant, webinar coordination VA, event management VA',
  openGraph: {
    title: 'Event Planning Virtual Assistant Services | Event VAs',
    description: 'Professional event planning by smart VAs. Flawless corporate events from concept to execution. Save 25+ hours per event.',
    url: 'https://smartestassistant.com/services/event-planning',
  }
}

const serviceFeatures = [
  'End-to-end event planning and coordination',
  'Venue research, selection, and booking',
  'Vendor sourcing and contract negotiation',
  'Budget management and cost optimization',
  'Registration and attendee management',
  'Marketing and promotional campaigns',
  'Speaker coordination and logistics',
  'Catering and hospitality arrangements',
  'Technical setup and AV coordination',
  'Day-of event execution and support'
]

const eventPlanningProcess = [
  {
    step: 1,
    title: 'Event Strategy & Planning',
    description: 'We work with you to define objectives, budget, timeline, and key requirements. Your VA creates a comprehensive event plan and timeline for flawless execution.'
  },
  {
    step: 2,
    title: 'Coordination & Setup',
    description: 'Your VA manages all logistics including venue booking, vendor coordination, speaker arrangements, and promotional activities leading up to the event.'
  },
  {
    step: 3,
    title: 'Execution & Follow-up',
    description: 'On-site or virtual event support ensures everything runs smoothly. Post-event analysis and follow-up maximize ROI and inform future events.'
  }
]

const faqs = [
  {
    question: 'What types of events can your VAs plan and manage?',
    answer: 'Our VAs handle corporate conferences, team meetings, product launches, webinars, trade shows, company retreats, training sessions, and networking events. We adapt to any event size from intimate meetings to large-scale conferences.'
  },
  {
    question: 'How far in advance should we start planning an event?',
    answer: 'For optimal results, we recommend 8-12 weeks for major events and 4-6 weeks for smaller meetings. However, our VAs can work with shorter timelines when needed and have successfully delivered events with just 2 weeks notice.'
  },
  {
    question: 'Can you handle both virtual and in-person events?',
    answer: 'Yes, we specialize in hybrid events, virtual conferences, in-person gatherings, and seamless combinations. Our VAs are proficient with platforms like Zoom, WebEx, Hopin, and event management software.'
  },
  {
    question: 'How do you ensure events stay within budget?',
    answer: 'Your VA creates detailed budgets with 10-15% contingency, negotiates competitive rates with vendors, tracks expenses in real-time, and provides weekly budget reports. We typically save clients 15-20% through strategic vendor negotiations.'
  },
  {
    question: 'What happens if something goes wrong during the event?',
    answer: 'Your VA maintains detailed contingency plans and vendor backup lists. For major events, we provide on-site support or dedicated virtual monitoring. We solve problems quickly and keep events running smoothly.'
  }
]

const testimonial = {
  id: 'event-planning-testimonial-1',
  name: 'Jennifer Chen',
  role: 'Head of Marketing',
  company: 'TechForward Inc',
  content: 'Our annual conference was a logistical nightmare until we partnered with Smartest Assistant. Our VA handled everything from venue negotiations to day-of coordination. 400+ attendees, zero major issues, 30% cost savings.',
  rating: 5,
  location: 'Austin, TX'
}

export default function EventPlanningPage() {
  return (
    <>
      <ServiceSchema 
        name="Event Planning Virtual Assistant Services"
        description="Professional event planning services by smart virtual assistants. Corporate events, conferences, webinars, and team meetings handled from concept to execution."
        url="https://smartestassistant.com/services/event-planning"
      />
      
      <FAQSchema 
        faqs={faqs}
        pageUrl="https://smartestassistant.com/services/event-planning"
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

      {/* Problem Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Event Planning Shouldn't Consume Your Life"
            description="Focus on your business while we handle the complex logistics of creating exceptional events"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl mb-4">⏰</div>
              <H3 className="mb-3 text-red-600">40+ Hours Per Event</H3>
              <Paragraph className="text-gray-600">
                Average time executives spend on event planning tasks
              </Paragraph>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💸</div>
              <H3 className="mb-3 text-red-600">25% Budget Overrun</H3>
              <Paragraph className="text-gray-600">
                Typical cost overrun from poor vendor negotiation
              </Paragraph>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">😰</div>
              <H3 className="mb-3 text-red-600">High Stress</H3>
              <Paragraph className="text-gray-600">
                From juggling multiple vendors and last-minute issues
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Complete Event Management Solutions"
          description="From initial concept to final wrap-up, we handle every aspect of your events"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={<span className="text-2xl">✓</span>}
              title={feature}
              description=""
            />
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="From Concept to Celebration in 3 Phases"
          description="Our proven methodology ensures flawless event execution"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {eventPlanningProcess.map((step) => (
            <div key={step.step} className="text-center">
              <div className="bg-primary-blue text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                {step.step}
              </div>
              <H3 className="mb-4">{step.title}</H3>
              <Paragraph className="text-gray-600">
                {step.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </Section>

      {/* Results Section */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Exceptional Event Results"
          description="Real outcomes our clients achieve with professional event planning"
          centered
          theme="dark"
        />
        
        <div className="grid md:grid-cols-4 gap-8">
          <StatCard 
            value="25 hrs" 
            label="Time Saved"
            description="Per event planning cycle"
            variant="dark"
          />
          <StatCard 
            value="20%" 
            label="Cost Savings"
            description="Through strategic negotiations"
            variant="dark"
          />
          <StatCard 
            value="95%" 
            label="Success Rate"
            description="Events delivered on time/budget"
            variant="dark"
          />
          <StatCard 
            value="4.8/5" 
            label="Attendee Rating"
            description="Average event satisfaction score"
            variant="dark"
          />
        </div>
      </Section>

      {/* Testimonial Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <TestimonialCard testimonial={testimonial} featured />
        </div>
      </Section>

      {/* Tools Section */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Event Management Tools We Master"
          description="Proficient with all major event planning and management platforms"
          centered
        />
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {['Eventbrite', 'Zoom', 'WebEx', 'Hopin', 'Cvent', 'Airtable'].map((tool) => (
            <div key={tool} className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <span className="text-sm font-medium text-gray-700">{tool}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Event Planning Questions Answered"
            description="Everything you need to know about our event planning services"
            centered
          />
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6">Ready to Create Unforgettable Events?</H2>
          <Paragraph size="lg" className="mb-8">
            Join hundreds of companies that trust our smart VAs to deliver exceptional events. 
            Focus on your business while we handle the logistics.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/schedule-a-call" size="xl">
              Get Your Event Planning VA
            </Button>
            <Button as="link" href="/resources/tools/roi-calculator" variant="outline" size="xl">
              Calculate Event ROI
            </Button>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="Related Services"
          description="Other ways our smart VAs can support your business events"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/services/social-media-management" className="group">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">
                Social Media Management
              </H3>
              <Paragraph className="text-gray-600">
                Promote your events across social platforms for maximum attendance
              </Paragraph>
            </div>
          </Link>
          
          <Link href="/services/project-management" className="group">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">
                Project Management
              </H3>
              <Paragraph className="text-gray-600">
                Strategic project coordination for complex initiatives
              </Paragraph>
            </div>
          </Link>
          
          <Link href="/services/lead-generation" className="group">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">
                Lead Generation
              </H3>
              <Paragraph className="text-gray-600">
                Turn event attendees into qualified sales prospects
              </Paragraph>
            </div>
          </Link>
        </div>
      </Section>
    </>
  )
}