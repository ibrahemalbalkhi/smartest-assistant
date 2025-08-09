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
import FAQAccordion from '@/components/ui/FAQ'
import { FAQSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions About Virtual Assistant Services',
  description: 'Get answers to common questions about Smartest Assistant virtual assistant services, pricing, processes, and getting started with professional VA support.',
  keywords: 'virtual assistant FAQ, VA questions, virtual assistant help, VA services questions, smartest assistant help',
  openGraph: {
    title: 'FAQ | Virtual Assistant Services Questions Answered',
    description: 'Find answers to frequently asked questions about professional virtual assistant services and getting started.',
    url: 'https://smartestassistant.com/faq',
  }
}

const faqCategories = [
  {
    category: 'Getting Started',
    faqs: [
      {
        question: 'How quickly can I get started with a virtual assistant?',
        answer: 'Most clients are matched with a virtual assistant and can begin working together within 48-72 hours of their consultation. The exact timeline depends on your specific requirements and VA availability.'
      },
      {
        question: 'What information do I need to provide to get started?',
        answer: 'We\ll need information about your business, the types of tasks you want help with, your preferred communication style, and any specific tools or systems your VA will need to use. We gather this information during your consultation.'
      },
      {
        question: 'Do I need to sign a long-term contract?',
        answer: 'We offer flexible engagement options including month-to-month arrangements. While longer commitments can provide better rates and VA continuity, we understand businesses need flexibility.'
      },
      {
        question: 'How do you match me with the right virtual assistant?',
        answer: 'Our matching process considers your industry, required skills, communication preferences, time zone, and working style. We review multiple VA profiles and select the best match for your specific needs.'
      }
    ]
  },
  {
    category: 'Services & Capabilities',
    faqs: [
      {
        question: 'What types of tasks can virtual assistants handle?',
        answer: 'Our VAs handle a wide range of tasks including email management, calendar scheduling, research, data entry, social media management, content creation, customer service, project coordination, and many other administrative and strategic tasks.'
      },
      {
        question: 'Can virtual assistants work with my existing tools and software?',
        answer: 'Yes, our VAs are proficient with popular business tools including Microsoft Office, Google Workspace, CRM systems, project management tools, social media platforms, and many industry-specific applications. We can train VAs on specialized tools as needed.'
      },
      {
        question: 'Do you provide virtual assistants for specific industries?',
        answer: 'Absolutely. We have VAs with specialized experience in healthcare, finance, legal services, real estate, SaaS, marketing agencies, consulting, and many other industries. Industry expertise ensures better understanding of your business needs.'
      },
      {
        question: 'What if my virtual assistant doesn\t have experience with a specific task?',
        answer: 'Our VAs are chosen for their ability to learn quickly and adapt to new challenges. We provide additional training when needed, and our support team ensures your VA has the resources to handle new tasks effectively.'
      }
    ]
  },
  {
    category: 'Working with Your VA',
    faqs: [
      {
        question: 'How do I communicate with my virtual assistant?',
        answer: 'Communication methods are flexible and based on your preferences. Common options include email, Slack, Microsoft Teams, video calls, phone calls, and project management platforms. We establish communication protocols during onboarding.'
      },
      {
        question: 'What time zones do your virtual assistants work in?',
        answer: 'We have VAs working across multiple time zones to provide coverage that matches your business hours. During matching, we consider time zone compatibility to ensure effective collaboration.'
      },
      {
        question: 'How do I provide feedback or request changes?',
        answer: 'We encourage regular feedback and have established processes for addressing concerns or requesting changes. You can provide feedback directly to your VA or through your dedicated client success manager.'
      },
      {
        question: 'What happens if my assigned VA is unavailable?',
        answer: 'We provide backup coverage for planned absences and have protocols for handling unexpected unavailability. For ongoing clients, we maintain detailed documentation to ensure smooth transitions when needed.'
      }
    ]
  },
  {
    category: 'Pricing & Billing',
    faqs: [
      {
        question: 'How is pricing structured for virtual assistant services?',
        answer: 'Pricing varies based on the complexity of tasks, required expertise, and time commitment. We offer flexible arrangements including hourly rates, monthly packages, and project-based pricing. Specific rates are discussed during your consultation.'
      },
      {
        question: 'Are there any setup fees or hidden costs?',
        answer: 'We believe in transparent pricing. Any setup fees or additional costs are clearly outlined in your service agreement. Most clients start with standard packages that include all necessary setup and onboarding.'
      },
      {
        question: 'How do I track the work being done by my VA?',
        answer: 'We provide various tracking and reporting options including time tracking software, detailed task reports, and regular progress updates. The specific tracking method is chosen based on your preferences and needs.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept major credit cards, ACH transfers, and wire transfers. Payment terms are typically net 15 days, and we can accommodate different billing cycles based on your business needs.'
      }
    ]
  }
]

const quickAnswers = [
  {
    question: 'How much do virtual assistant services cost?',
    answer: 'Pricing varies based on expertise and scope, starting from competitive hourly rates for basic tasks to premium rates for specialized or strategic support.',
    icon: '💰'
  },
  {
    question: 'Are virtual assistants available during my business hours?',
    answer: 'Yes, we match you with VAs whose working hours align with your business needs and time zone requirements.',
    icon: '⏰'
  },
  {
    question: 'How do you ensure quality and reliability?',
    answer: 'Through rigorous screening, ongoing training, performance monitoring, and dedicated client success management.',
    icon: '✅'
  },
  {
    question: 'Can I scale up or down my virtual assistant support?',
    answer: 'Absolutely. Our flexible engagement model allows you to adjust hours, tasks, and support levels based on your changing business needs.',
    icon: '📈'
  }
]

export default function FAQPage() {
  return (
    <>
      <FAQSchema 
        faqs={faqCategories.flatMap(category => category.faqs)} 
      />
      
      {/* Hero Section */}
      <Section background="white" spacing="xl">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6">Frequently Asked Questions</H2>
          <Paragraph size="lg" className="mb-8 text-gray-600">
            Find answers to common questions about our virtual assistant services, pricing, and how to get started. 
            Can't find what you're looking for? We're here to help.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/schedule-a-call" variant="primary" size="lg">
              Schedule Consultation
            </Button>
            <Button as="link" href="/contact" variant="outline" size="lg">
              Contact Support
            </Button>
          </div>
        </div>
      </Section>

      {/* Quick Answers */}
      <Section background="gray" spacing="lg">
        <SectionHeader
          title="Quick Answers"
          description="Fast answers to our most commonly asked questions"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {quickAnswers.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <H3 className="mb-3">{item.question}</H3>
                  <Paragraph className="text-gray-600">
                    {item.answer}
                  </Paragraph>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Detailed FAQ Categories */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Detailed Questions & Answers"
            description="Comprehensive answers organized by topic"
            centered
          />
          
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <H2 className="mb-8 text-primary-blue text-center">{category.category}</H2>
                <FAQAccordion 
                  faqs={category.faqs}
                  className="space-y-4"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Still Have Questions */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Still Have Questions?"
            description="Our team is here to provide personalized answers and guidance"
            centered
            theme="dark"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <H3 className="mb-4 text-white">Schedule a Call</H3>
              <Paragraph className="text-blue-100 mb-6">
                Get personalized answers to your questions and learn how virtual assistants can help your specific business needs.
              </Paragraph>
              <Button as="link" href="/schedule-a-call" variant="secondary" fullWidth>
                Book Free Consultation
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <H3 className="mb-4 text-white">Contact Support</H3>
              <Paragraph className="text-blue-100 mb-6">
                Send us your questions via email or live chat. Our support team typically responds within 2-4 hours during business days.
              </Paragraph>
              <Button as="link" href="/contact" variant="outline" fullWidth className="border-white text-white hover:bg-white hover:text-primary-blue">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Resource Links */}
      <Section background="gray" spacing="lg">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Additional Resources"
            description="More information to help you understand virtual assistant services"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/about" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏢</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">About Smartest Assistant</H3>
              <Paragraph className="text-gray-600">
                Learn about our company mission, values, and commitment to providing strategic virtual assistant services.
              </Paragraph>
            </Link>
            
            <Link href="/services" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">⚙️</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Our Services</H3>
              <Paragraph className="text-gray-600">
                Explore our comprehensive range of virtual assistant services and find the support that fits your needs.
              </Paragraph>
            </Link>
            
            <Link href="/team" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">👥</div>
              <H3 className="mb-3 group-hover:text-primary-blue transition-colors">Meet Our Team</H3>
              <Paragraph className="text-gray-600">
                Get to know the experienced professionals and virtual assistants who make up the Smartest Assistant team.
              </Paragraph>
            </Link>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-white">Ready to Get Started?</H2>
          <Paragraph size="lg" className="mb-8 text-blue-100">
            Don't see your question answered here? The best way to get specific information about how virtual assistants 
            can help your business is through a personal consultation.
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="link" href="/schedule-a-call" variant="secondary" size="xl">
              Schedule Free Consultation
            </Button>
            <Button as="link" href="/resources/roi-calculator" variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Calculate Your Savings
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div>✅ No commitment required</div>
            <div>✅ Personalized answers</div>
            <div>✅ 15-minute consultation</div>
          </div>
        </div>
      </Section>
    </>
  )
}