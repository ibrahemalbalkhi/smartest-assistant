import Link from 'next/link'
import { ArrowRight, ExternalLink } from '@/components/ui/Icons'
import { getRelatedLinks, getHubLink, generateAnchorText, type InternalLink } from '@/lib/internal-linking'

interface RelatedLinksProps {
  pageType: 'service' | 'location' | 'industry' | 'blog'
  pageSlug: string
  maxLinks?: number
  className?: string
  showHub?: boolean
  title?: string
}

export function RelatedLinks({
  pageType,
  pageSlug,
  maxLinks = 3,
  className = '',
  showHub = true,
  title
}: RelatedLinksProps) {
  const relatedLinks = getRelatedLinks(pageType, pageSlug, maxLinks)
  const hubLink = showHub ? getHubLink(pageType) : null
  
  if (relatedLinks.length === 0 && !hubLink) {
    return null
  }

  const sectionTitle = title || getSectionTitle(pageType)

  return (
    <div className={`bg-gray-50 rounded-lg p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {sectionTitle}
      </h3>
      
      <div className="space-y-3">
        {/* Hub link (back to parent category) */}
        {hubLink && (
          <Link
            href={hubLink.href}
            className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
          >
            <div>
              <h4 className="font-medium text-gray-900 group-hover:text-blue-600">
                {hubLink.title}
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                {hubLink.description}
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
          </Link>
        )}

        {/* Related links */}
        {relatedLinks.map((link) => (
          <RelatedLinkCard key={link.href} link={link} pageType={pageType} />
        ))}
      </div>
    </div>
  )
}

// Individual related link card
function RelatedLinkCard({ 
  link, 
  pageType 
}: { 
  link: InternalLink
  pageType: string 
}) {
  return (
    <Link
      href={link.href}
      className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
    >
      <div className="flex-1">
        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">
          {link.title}
        </h4>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {link.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {link.keywords.slice(0, 3).map((keyword) => (
            <span
              key={keyword}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0 ml-4" />
    </Link>
  )
}

// Inline contextual links within content
interface ContextualLinksProps {
  links: Array<{
    href: string
    text: string
    title?: string
    external?: boolean
  }>
  className?: string
}

export function ContextualLinks({ links, className = '' }: ContextualLinksProps) {
  if (links.length === 0) return null

  return (
    <div className={`border-l-4 border-blue-200 bg-blue-50 p-4 my-6 ${className}`}>
      <h4 className="text-sm font-semibold text-blue-900 mb-3">
        Related Resources
      </h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="inline-flex items-center text-sm text-blue-700 hover:text-blue-900 font-medium"
              title={link.title}
              {...(link.external && {
                target: '_blank',
                rel: 'noopener noreferrer'
              })}
            >
              {link.text}
              {link.external && (
                <ExternalLink className="h-3 w-3 ml-1" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Service-specific related links
export function ServiceRelatedLinks({ serviceSlug }: { serviceSlug: string }) {
  return (
    <RelatedLinks
      pageType="service"
      pageSlug={serviceSlug}
      title="Related Services"
      className="mt-8"
    />
  )
}

// Location-specific related links
export function LocationRelatedLinks({ locationSlug }: { locationSlug: string }) {
  return (
    <RelatedLinks
      pageType="location"
      pageSlug={locationSlug}
      title="Popular Services in This Area"
      className="mt-8"
      showHub={false}
    />
  )
}

// Industry-specific related links
export function IndustryRelatedLinks({ industrySlug }: { industrySlug: string }) {
  return (
    <RelatedLinks
      pageType="industry"
      pageSlug={industrySlug}
      title="Recommended Services for Your Industry"
      className="mt-8"
      showHub={false}
    />
  )
}

// Blog post related links
export function BlogRelatedLinks({ 
  postSlug,
  category = 'general'
}: { 
  postSlug: string
  category?: string 
}) {
  return (
    <RelatedLinks
      pageType="blog"
      pageSlug={postSlug}
      title="Recommended Services"
      className="mt-8"
      maxLinks={2}
      showHub={false}
    />
  )
}

// Cross-page navigation for similar content
interface CrossPageNavigationProps {
  currentPage: {
    type: string
    slug: string
    title: string
  }
  className?: string
}

export function CrossPageNavigation({ 
  currentPage, 
  className = '' 
}: CrossPageNavigationProps) {
  // This would typically fetch similar/related pages from a CMS or API
  const relatedPages = [
    {
      type: 'service',
      title: 'Email Management Services',
      href: '/services/email-management',
      description: 'Smart email organization and management'
    },
    {
      type: 'industry',
      title: 'SaaS & Startup Solutions',
      href: '/industries/saas-startups',
      description: 'Specialized support for tech companies'
    }
  ]

  return (
    <nav className={`border-t border-gray-200 pt-8 mt-8 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        You Might Also Be Interested In
      </h3>
      
      <div className="grid gap-4 md:grid-cols-2">
        {relatedPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium text-gray-900 group-hover:text-blue-600">
                  {page.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {page.description}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0 mt-1" />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  )
}

// Helper function to get section titles
function getSectionTitle(pageType: string): string {
  const titles = {
    service: 'Related Services',
    location: 'Services in This Area',
    industry: 'Recommended Services',
    blog: 'Related Services'
  }
  
  return titles[pageType as keyof typeof titles] || 'Related Content'
}

// Sticky sidebar navigation for long content pages
interface SidebarNavigationProps {
  sections: Array<{
    id: string
    title: string
    href?: string
  }>
  relatedLinks?: InternalLink[]
  className?: string
}

export function SidebarNavigation({ 
  sections, 
  relatedLinks, 
  className = '' 
}: SidebarNavigationProps) {
  return (
    <div className={`sticky top-8 space-y-6 ${className}`}>
      {/* Table of contents */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
          On This Page
        </h3>
        <nav className="space-y-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={section.href || `#${section.id}`}
              className="block text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors duration-200"
            >
              {section.title}
            </a>
          ))}
        </nav>
      </div>

      {/* Related links */}
      {relatedLinks && relatedLinks.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
            Related Pages
          </h3>
          <nav className="space-y-3">
            {relatedLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block group"
              >
                <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                  {link.title}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {link.description.substring(0, 80)}...
                </div>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}