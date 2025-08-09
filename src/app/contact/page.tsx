import { Metadata } from 'next'
import { 
  Section, 
  SectionHeader,
  H2, 
  H3, 
  Paragraph, 
  Button
} from '@/components/ui'

export const metadata: Metadata = {
  title: 'Contact Smartest Assistant | Get In Touch With Our Team',
  description: 'Contact Smartest Assistant for virtual assistant services, support, partnerships, or general inquiries. Multiple ways to reach our team and get the help you need.',
  keywords: 'contact smartest assistant, virtual assistant contact, customer support, business inquiries, partnership opportunities',
  openGraph: {
    title: 'Contact Smartest Assistant | Get In Touch With Our Team',
    description: 'Contact our team for virtual assistant services, support, partnerships, or general inquiries. We\'re here to help.',
    url: 'https://smartestassistant.com/contact',
  }
}

const contactMethods = [
  {
    title: 'Schedule a Consultation',
    description: 'Book a free 15-minute consultation to discuss your virtual assistant needs and learn how we can help your business.',
    icon: '📅',
    action: 'Schedule Call',
    href: '/schedule-a-call',
    recommended: true
  },
  {
    title: 'Email Us',
    description: 'Send us an email with your questions or requirements. We typically respond within 2-4 hours during business days.',
    icon: '📧',
    action: 'hello@chiefnest.com',
    href: 'mailto:hello@chiefnest.com'
  },
]

const inquiryTypes = [
  {
    type: 'New Client Inquiries',
    description: 'Ready to get started with a virtual assistant? Schedule a consultation to discuss your needs.',
    contact: 'Schedule consultation or email hello@chiefnest.com',
    icon: '🚀'
  },
  {
    type: 'Current Client Support',
    description: 'Need help with your current VA partnership or have questions about services?',
    contact: 'Email support@chiefnest.com or use your client portal',
    icon: '🤝'
  },
  {
    type: 'Partnership Opportunities',
    description: 'Interested in partnering with us or exploring collaboration opportunities?',
    contact: 'Email partnerships@chiefnest.com',
    icon: '🤝'
  },
  {
    type: 'Career Inquiries',
    description: 'Want to join our team as a virtual assistant or in another capacity?',
    contact: 'Visit our careers page or email careers@chiefnest.com',
    icon: '💼'
  },
  {
    type: 'Media & Press',
    description: 'Media inquiries, interview requests, or press-related questions?',
    contact: 'Email press@chiefnest.com',
    icon: '📰'
  },
  {
    type: 'Technical Support',
    description: 'Having technical issues with our platform or need IT assistance?',
    contact: 'Email tech@chiefnest.com with detailed description',
    icon: '🔧'
  }
]

const offices = [
  {
    city: 'Virtual Headquarters',
    address: 'We operate as a fully remote company serving clients worldwide',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
    timezone: 'Eastern Time',
    description: 'Our distributed team provides 24/7 coverage across multiple time zones.'
  }
]

const faqs = [
  {
    question: 'What\'s the best way to get started?',
    answer: 'Schedule a free 15-minute consultation where we\'ll discuss your needs and explain how our virtual assistants can help your business.'
  },
  {
    question: 'How quickly can you respond to inquiries?',
    answer: 'We typically respond to emails within 2-4 hours during business days. For urgent matters, please call or use live chat.'
  },
  {
    question: 'Do you offer support outside business hours?',
    answer: 'While our main support hours are 9 AM - 6 PM EST, our virtual assistants provide coverage across multiple time zones for current clients.'
  },
  {
    question: 'Can I speak with someone before committing to services?',
    answer: 'Absolutely! We encourage potential clients to schedule a consultation to discuss their needs and learn about our services before making any commitments.'
  }
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6">Get In Touch With Our Team</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600">
            Ready to transform your business with a strategic virtual assistant? Have questions about our services? 
            We're here to help and would love to hear from you.
          </Paragraph>
        </div>
      </Section>

      {/* Contact Methods */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="How Would You Like to Connect?"
          description="Choose the contact method that works best for you"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <div key={index} className={`bg-white rounded-xl p-8 shadow-lg relative ${method.recommended ? 'ring-2 ring-primary-blue' : ''}`}>
              {method.recommended && (
                <div className="absolute -top-3 left-6 bg-primary-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{method.icon}</span>
                <H3>{method.title}</H3>
              </div>
              
              <Paragraph className="text-gray-600 mb-6">
                {method.description}
              </Paragraph>
              
              <Button 
                as="link"
                href={method.href}
                variant={method.recommended ? 'primary' : 'outline'}
                fullWidth
              >
                {method.action}
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Inquiry Types */}
      <Section background="white" spacing="lg">
        <SectionHeader
          title="What Can We Help You With?"
          description="Find the right contact for your specific needs"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inquiryTypes.map((inquiry, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{inquiry.icon}</span>
                <H3 className="text-lg">{inquiry.type}</H3>
              </div>
              
              <Paragraph className="text-gray-600 mb-4 text-sm">
                {inquiry.description}
              </Paragraph>
              
              <div className="text-sm font-medium text-primary-blue">
                {inquiry.contact}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Office Information */}
      <Section background="primary" spacing="lg">
        <SectionHeader
          title="Our Office"
          description="Learn about our remote-first approach to serving clients worldwide"
          centered
          theme="dark"
        />
        
        <div className="max-w-4xl mx-auto">
          {offices.map((office, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <H3 className="text-white mb-4">{office.city}</H3>
                  <div className="space-y-3 text-blue-100">
                    <div className="flex items-start gap-3">
                      <span>📍</span>
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span>⏰</span>
                      <span>{office.hours}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span>🌍</span>
                      <span>{office.timezone}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <H3 className="text-white mb-4">Global Coverage</H3>
                  <Paragraph className="text-blue-100">
                    {office.description}
                  </Paragraph>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Response Time & Expectations */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="What to Expect When You Contact Us"
            description="Our commitment to responsive, helpful communication"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-3xl mb-4">⚡</div>
              <H3 className="mb-3">Quick Response</H3>
              <Paragraph className="text-gray-600">
                Email responses within 2-4 hours during business days. Urgent matters handled immediately via phone or chat.
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-3xl mb-4">🎯</div>
              <H3 className="mb-3">Personalized Attention</H3>
              <Paragraph className="text-gray-600">
                Every inquiry receives personal attention. We take time to understand your specific needs and provide tailored solutions.
              </Paragraph>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-3xl mb-4">🤝</div>
              <H3 className="mb-3">Follow-Through</H3>
              <Paragraph className="text-gray-600">
                We follow up to ensure your questions are answered and you have everything needed to make informed decisions.
              </Paragraph>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Quick answers to common contact and inquiry questions"
            centered
          />
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <H3 className="mb-3 text-primary-blue">{faq.question}</H3>
                <Paragraph className="text-gray-600">{faq.answer}</Paragraph>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Emergency Contact */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-xl p-8 border border-red-200">
            <H3 className="mb-4 text-red-700">Current Client Emergency Contact</H3>
            <Paragraph className="text-gray-600 mb-6">
              If you're a current client experiencing an urgent issue that requires immediate attention outside of business hours, 
              please use your dedicated client emergency contact information provided during onboarding.
            </Paragraph>
            <div className="text-sm text-gray-500">
              Emergency contacts are available 24/7 for current clients only
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready to Get Started?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            The best way to understand how we can help your business is through a personal conversation. 
            Schedule your free consultation today.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Schedule Free Consultation
            </Button>
            <Button as="link" href="/services" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Explore Our Services
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ No commitment required</div>
            <div>✅ 15-minute consultation</div>
            <div>✅ Custom solution discussion</div>
          </div>
        </div>
      </Section>
    </>
  )
}