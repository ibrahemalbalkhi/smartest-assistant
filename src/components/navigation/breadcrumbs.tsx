'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { generateBreadcrumbSchema } from '@/lib/seo'

interface BreadcrumbItem {
  label: string
  href: string
  current?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Add home as first item if not present
  const breadcrumbItems = [
    { label: 'Home', href: '/', current: false },
    ...items.map(item => ({ ...item, current: false })),
  ]

  // Mark last item as current
  if (breadcrumbItems.length > 0) {
    breadcrumbItems[breadcrumbItems.length - 1].current = true
  }

  // Generate structured data for SEO
  const structuredData = generateBreadcrumbSchema(
    breadcrumbItems.map(item => ({
      name: item.label,
      url: item.href
    }))
  )

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <nav 
        className={`flex items-center space-x-1 text-sm text-gray-600 mb-6 ${className}`}
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-1">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400 mx-1 flex-shrink-0" />
              )}
              
              {item.current ? (
                <span 
                  className="font-medium text-gray-900 truncate max-w-xs"
                  aria-current="page"
                >
                  {index === 0 ? (
                    <Home className="h-4 w-4" aria-label="Home" />
                  ) : (
                    item.label
                  )}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-blue-600 transition-colors duration-200 truncate max-w-xs flex items-center"
                  title={item.label}
                >
                  {index === 0 ? (
                    <Home className="h-4 w-4" aria-label="Home" />
                  ) : (
                    item.label
                  )}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

// Helper function to generate breadcrumbs based on URL path
export function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = []
  let currentPath = ''

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    
    // Convert URL segments to readable labels
    const label = formatBreadcrumbLabel(segment, currentPath, index)
    
    breadcrumbs.push({
      label,
      href: currentPath,
      current: index === segments.length - 1
    })
  })

  return breadcrumbs
}

// Format URL segments into readable breadcrumb labels
function formatBreadcrumbLabel(segment: string, fullPath: string, index: number): string {
  // Handle specific page types
  const pathMappings: Record<string, string> = {
    'services': 'Services',
    'locations': 'Locations', 
    'industries': 'Industries',
    'resources': 'Resources',
    'blog': 'Blog',
    'about': 'About Us',
    'contact': 'Contact',
    'pricing': 'Pricing',
    'schedule-call': 'Schedule a Call',
    
    // Services
    'email-management': 'Email Management',
    'executive-assistant': 'Executive Assistant',
    'social-media-management': 'Social Media Management',
    'cold-outreach': 'Cold Outreach',
    'calendar-management': 'Calendar Management',
    'customer-support': 'Customer Support',
    'data-entry-research': 'Data Entry & Research',
    'bookkeeping': 'Bookkeeping',
    'content-creation': 'Content Creation',
    'project-management': 'Project Management',
    'travel-coordination': 'Travel Coordination',
    'event-planning': 'Event Planning',
    'lead-generation': 'Lead Generation',
    'market-research': 'Market Research',
    'document-management': 'Document Management',
    
    // Locations
    'san-francisco': 'San Francisco',
    'new-york-city': 'New York City',
    'chicago': 'Chicago',
    'los-angeles': 'Los Angeles',
    'miami': 'Miami',
    'austin': 'Austin',
    'seattle': 'Seattle',
    'boston': 'Boston',
    'atlanta': 'Atlanta',
    
    // Industries
    'saas-startups': 'SaaS & Startups',
    'ecommerce': 'E-commerce',
    'real-estate': 'Real Estate',
    'healthcare': 'Healthcare',
    'legal-services': 'Legal Services',
    'consulting': 'Consulting',
    'finance': 'Finance',
    'marketing-agencies': 'Marketing Agencies',
    'nonprofits': 'Nonprofits'
  }

  // Return mapped label or format the segment
  return pathMappings[segment] || formatSegment(segment)
}

// Format individual URL segments into readable text
function formatSegment(segment: string): string {
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Pre-built breadcrumb configurations for common page types
export const breadcrumbConfigs = {
  service: (serviceName: string, serviceSlug: string): BreadcrumbItem[] => [
    { label: 'Services', href: '/services' },
    { label: serviceName, href: `/services/${serviceSlug}`, current: true }
  ],
  
  location: (cityName: string, citySlug: string): BreadcrumbItem[] => [
    { label: 'Locations', href: '/locations' },
    { label: cityName, href: `/locations/${citySlug}`, current: true }
  ],
  
  industry: (industryName: string, industrySlug: string): BreadcrumbItem[] => [
    { label: 'Industries', href: '/industries' },
    { label: industryName, href: `/industries/${industrySlug}`, current: true }
  ],
  
  blogPost: (postTitle: string, postSlug: string): BreadcrumbItem[] => [
    { label: 'Resources', href: '/resources' },
    { label: 'Blog', href: '/resources/blog' },
    { label: postTitle, href: `/resources/blog/${postSlug}`, current: true }
  ],
  
  solution: (solutionName: string, solutionSlug: string): BreadcrumbItem[] => [
    { label: 'Solutions', href: '/solutions' },
    { label: solutionName, href: `/solutions/${solutionSlug}`, current: true }
  ]
}

// Smart breadcrumb component that auto-generates based on current route
export function SmartBreadcrumbs({ className }: { className?: string }) {
  // This would typically use usePathname from next/navigation
  // For now, we'll provide a static implementation
  
  return (
    <div className={`text-sm text-gray-600 mb-6 ${className}`}>
      {/* This component would be implemented with Next.js usePathname hook */}
      <p className="text-xs text-gray-500">
        Smart breadcrumbs component - implement with usePathname hook in actual usage
      </p>
    </div>
  )
}