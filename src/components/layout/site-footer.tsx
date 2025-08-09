import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'
import { OptimizedImage } from '@/components/ui/optimized-image'

interface FooterLink {
  label: string
  href: string
  external?: boolean
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  const footerSections: FooterSection[] = [
    {
      title: 'Services',
      links: [
        { label: 'All Services', href: '/services' },
        { label: 'Executive Assistant', href: '/services/executive-assistant' },
        { label: 'Email Management', href: '/services/email-management' },
        { label: 'Social Media Management', href: '/services/social-media-management' },
        { label: 'Cold Outreach', href: '/services/cold-outreach' },
        { label: 'Calendar Management', href: '/services/calendar-management' },
        { label: 'Customer Support', href: '/services/customer-support' },
        { label: 'Content Creation', href: '/services/content-creation' },
        { label: 'Project Management', href: '/services/project-management' }
      ]
    },
    {
      title: 'Locations',
      links: [
        { label: 'All Locations', href: '/locations' },
        { label: 'San Francisco', href: '/locations/san-francisco' },
        { label: 'New York City', href: '/locations/new-york-city' },
        { label: 'Chicago', href: '/locations/chicago' },
        { label: 'Los Angeles', href: '/locations/los-angeles' },
        { label: 'Miami', href: '/locations/miami' },
        { label: 'Austin', href: '/locations/austin' },
        { label: 'Seattle', href: '/locations/seattle' },
        { label: 'Boston', href: '/locations/boston' }
      ]
    },
    {
      title: 'Industries',
      links: [
        { label: 'All Industries', href: '/industries' },
        { label: 'SaaS & Startups', href: '/industries/saas-startups' },
        { label: 'E-commerce', href: '/industries/ecommerce' },
        { label: 'Real Estate', href: '/industries/real-estate' },
        { label: 'Healthcare', href: '/industries/healthcare' },
        { label: 'Legal Services', href: '/industries/legal' },
        { label: 'Consulting', href: '/industries/consulting' },
        { label: 'Finance', href: '/industries/finance' },
        { label: 'Marketing Agencies', href: '/industries/marketing-agencies' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'How It Works', href: '/services#how-it-works' },
        { label: 'Pricing', href: '/services#pricing' },
        { label: 'Schedule a Call', href: '/schedule-a-call' },
        { label: 'Contact', href: '/contact' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' },
        { label: 'Partners', href: '/partners' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Resource Hub', href: '/resources' },
        { label: 'Blog', href: '/resources/blog' },
        { label: 'ROI Calculator', href: '/resources/roi-calculator' },
        { label: 'VA Hiring Guide', href: '/resources/guides/hiring-virtual-assistant' },
        { label: 'Case Studies', href: '/resources/case-studies' },
        { label: 'Templates', href: '/resources/templates' },
        { label: 'Webinars', href: '/resources/webinars' },
        { label: 'FAQ', href: '/faq' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Data Processing Agreement', href: '/legal/data-processing' },
        { label: 'Security', href: '/legal/security' },
        { label: 'Compliance', href: '/legal/compliance' },
        { label: 'Cookie Policy', href: '/legal/cookies' }
      ]
    },
    {
      title: 'Key Locations',
      links: [
        { label: 'New York', href: '/locations/new-york-city' },
        { label: 'London', href: '/locations/london' },
        { label: 'Sydney', href: '/locations/sydney' },
        { label: 'Singapore', href: '/locations/singapore' },
        { label: 'Toronto', href: '/locations/toronto' },
        { label: 'Dubai', href: '/locations/dubai' }
      ]
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/smartestassistant',
      icon: Linkedin,
      external: true
    },
    {
      name: 'Twitter', 
      href: 'https://twitter.com/smartestassist',
      icon: Twitter,
      external: true
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/smartestassistant', 
      icon: Facebook,
      external: true
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company info and CTA */}
          <div className="space-y-8 xl:col-span-1">
            <OptimizedImage
              src="/images/logo-white-smartest-assistant.webp"
              alt="Smartest Assistant logo - Smart virtual assistant services"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority={false}
            />
            
            <p className="text-gray-300 text-base max-w-md leading-6">
              Smart Virtual Assistants Who Think Like Partners, Work Like Pros. 
              Strategic support that scales your business.
            </p>
            
            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <a 
                  href="tel:+1-XXX-XXX-XXXX" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +1 (XXX) XXX-XXXX
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <a 
                  href="mailto:hello@smartestassistant.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  hello@smartestassistant.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300">
                  Serving businesses nationwide
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Get Your Smart VA Match
              </Link>
            </div>
          </div>

          {/* Footer links grid */}
          <div className="mt-12 xl:mt-0 xl:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                          {...(link.external && {
                            target: '_blank',
                            rel: 'noopener noreferrer'
                          })}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest virtual assistant tips and productivity insights.
            </p>
            <form className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
            
            <div className="mt-6 md:mt-0 md:order-1">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
                <p>
                  © {currentYear} Smartest Assistant. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  <Link 
                    href="/privacy" 
                    className="hover:text-white transition-colors"
                  >
                    Privacy
                  </Link>
                  <Link 
                    href="/terms" 
                    className="hover:text-white transition-colors"
                  >
                    Terms
                  </Link>
                  <Link 
                    href="/sitemap.xml"
                    className="hover:text-white transition-colors" 
                  >
                    Sitemap
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}