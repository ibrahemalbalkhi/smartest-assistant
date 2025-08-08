// Comprehensive navigation system for internal linking and site structure

import { InternalLink } from './internal-linking'

export interface NavigationItem {
  label: string
  href: string
  description?: string
  children?: NavigationItem[]
  featured?: boolean
  external?: boolean
}

export interface BreadcrumbItem {
  label: string
  href: string
  current?: boolean
}

// Main site navigation structure
export const mainNavigation: NavigationItem[] = [
  {
    label: 'Services',
    href: '/services',
    description: 'Smart virtual assistant services for every business need',
    children: [
      {
        label: 'Executive Assistant',
        href: '/services/executive-assistant',
        description: 'Strategic support for C-suite executives',
        featured: true
      },
      {
        label: 'Email Management',
        href: '/services/email-management',
        description: 'Intelligent inbox organization and management',
        featured: true
      },
      {
        label: 'Social Media Management',
        href: '/services/social-media-management',
        description: 'Expert social media strategy and execution',
        featured: true
      },
      {
        label: 'Cold Outreach',
        href: '/services/cold-outreach',
        description: 'Professional lead generation and outreach',
        featured: true
      },
      {
        label: 'Calendar Management',
        href: '/services/calendar-management',
        description: 'Smart scheduling and time optimization'
      },
      {
        label: 'Customer Support',
        href: '/services/customer-support',
        description: 'Professional customer service and support'
      },
      {
        label: 'Content Creation',
        href: '/services/content-creation',
        description: 'High-quality content and copywriting'
      },
      {
        label: 'Project Management',
        href: '/services/project-management',
        description: 'Organized project coordination and delivery'
      },
      {
        label: 'Data Entry & Research',
        href: '/services/data-entry-research',
        description: 'Accurate data management and research'
      },
      {
        label: 'View All Services',
        href: '/services',
        description: 'Complete overview of all our services'
      }
    ]
  },
  {
    label: 'Industries',
    href: '/industries',
    description: 'Specialized virtual assistants for every industry',
    children: [
      {
        label: 'SaaS & Startups',
        href: '/industries/saas-startups',
        description: 'VAs who understand tech and startup culture',
        featured: true
      },
      {
        label: 'E-commerce',
        href: '/industries/ecommerce',
        description: 'Specialized support for online retail',
        featured: true
      },
      {
        label: 'Real Estate',
        href: '/industries/real-estate',
        description: 'Expert assistants for property professionals',
        featured: true
      },
      {
        label: 'Healthcare',
        href: '/industries/healthcare',
        description: 'Compliant support for medical practices'
      },
      {
        label: 'Legal Services',
        href: '/industries/legal-services',
        description: 'Professional support for law firms'
      },
      {
        label: 'Consulting',
        href: '/industries/consulting',
        description: 'Strategic support for consultants'
      },
      {
        label: 'View All Industries',
        href: '/industries',
        description: 'See all industry specializations'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    description: 'Tailored solutions for different business needs',
    children: [
      {
        label: 'For Entrepreneurs',
        href: '/solutions/for-entrepreneurs',
        description: 'Scale your business with strategic support'
      },
      {
        label: 'For Small Businesses',
        href: '/solutions/for-small-businesses',
        description: 'Cost-effective virtual assistant solutions'
      },
      {
        label: 'For Enterprises',
        href: '/solutions/for-enterprises',
        description: 'Managed virtual assistant teams'
      },
      {
        label: 'For Agencies',
        href: '/solutions/for-agencies',
        description: 'White-label virtual assistant services'
      }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    description: 'Guides, tools, and insights for delegation success',
    children: [
      {
        label: 'Blog',
        href: '/resources/blog',
        description: 'Expert insights and delegation strategies'
      },
      {
        label: 'ROI Calculator',
        href: '/resources/roi-calculator',
        description: 'Calculate your virtual assistant ROI'
      },
      {
        label: 'Hiring Guide',
        href: '/resources/guides/hiring-virtual-assistant',
        description: 'Complete guide to hiring VAs'
      },
      {
        label: 'Case Studies',
        href: '/resources/case-studies',
        description: 'Real client success stories'
      },
      {
        label: 'Templates',
        href: '/resources/templates',
        description: 'Free delegation and process templates'
      }
    ]
  },
  {
    label: 'Pricing',
    href: '/pricing',
    description: 'Transparent pricing for all service levels'
  },
  {
    label: 'About',
    href: '/about',
    description: 'Learn about our team and mission'
  }
]

// Mobile navigation structure (simplified)
export const mobileNavigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Schedule Call', href: '/schedule-call' }
]

// Quick action buttons for CTAs
export const quickActions = [
  {
    label: 'Get Started',
    href: '/schedule-call',
    primary: true,
    description: 'Book a free consultation'
  },
  {
    label: 'View Services',
    href: '/services',
    primary: false,
    description: 'Explore our offerings'
  }
]

// Popular pages for quick access
export const popularPages: NavigationItem[] = [
  {
    label: 'Executive Assistant',
    href: '/services/executive-assistant',
    description: 'Strategic support for executives'
  },
  {
    label: 'Email Management',
    href: '/services/email-management',
    description: 'Intelligent inbox management'
  },
  {
    label: 'SaaS & Startups',
    href: '/industries/saas-startups',
    description: 'Specialized tech support'
  },
  {
    label: 'ROI Calculator',
    href: '/resources/roi-calculator',
    description: 'Calculate your savings'
  }
]

// Site-wide search suggestions
export const searchSuggestions = {
  services: [
    'executive assistant',
    'email management',
    'social media management',
    'cold outreach',
    'calendar management'
  ],
  industries: [
    'SaaS startups',
    'e-commerce',
    'real estate',
    'healthcare',
    'legal services'
  ],
  locations: [
    'San Francisco',
    'New York City',
    'Chicago',
    'Los Angeles',
    'Miami'
  ],
  general: [
    'virtual assistant',
    'pricing',
    'how it works',
    'ROI calculator',
    'case studies'
  ]
}

// Navigation utilities
export class NavigationHelper {
  // Find navigation item by href
  static findItemByHref(href: string, items: NavigationItem[] = mainNavigation): NavigationItem | null {
    for (const item of items) {
      if (item.href === href) {
        return item
      }
      if (item.children) {
        const found = this.findItemByHref(href, item.children)
        if (found) return found
      }
    }
    return null
  }

  // Get navigation breadcrumbs
  static getBreadcrumbs(pathname: string): BreadcrumbItem[] {
    const segments = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ]

    let currentPath = ''
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const item = this.findItemByHref(currentPath)
      
      breadcrumbs.push({
        label: item?.label || this.formatSegment(segment),
        href: currentPath,
        current: index === segments.length - 1
      })
    })

    return breadcrumbs
  }

  // Format URL segment to readable label
  static formatSegment(segment: string): string {
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  // Get active navigation state
  static getActiveStates(pathname: string): Record<string, boolean> {
    const states: Record<string, boolean> = {}
    
    mainNavigation.forEach(item => {
      const isActive = pathname === item.href || 
                       pathname.startsWith(item.href + '/') ||
                       (item.children && item.children.some(child => pathname === child.href))
      
      states[item.href] = isActive
    })

    return states
  }

  // Generate structured navigation data for schema
  static generateNavigationSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      "name": "Main Navigation",
      "url": "https://smartestassistant.com",
      "hasPart": mainNavigation.map(item => ({
        "@type": "WebPage",
        "name": item.label,
        "url": `https://smartestassistant.com${item.href}`,
        "description": item.description
      }))
    }
  }

  // Get contextual navigation recommendations
  static getContextualNav(currentHref: string, maxItems: number = 4): NavigationItem[] {
    const recommendations: NavigationItem[] = []
    
    // If on a service page, recommend related services
    if (currentHref.startsWith('/services/')) {
      const serviceItems = mainNavigation.find(item => item.href === '/services')?.children || []
      recommendations.push(...serviceItems.filter(item => item.href !== currentHref).slice(0, maxItems))
    }
    
    // If on an industry page, recommend popular services
    else if (currentHref.startsWith('/industries/')) {
      recommendations.push(...popularPages.slice(0, maxItems))
    }
    
    // Default recommendations
    else {
      recommendations.push(...popularPages.slice(0, maxItems))
    }
    
    return recommendations
  }

  // Generate sitemap data from navigation
  static generateSitemapData(): Array<{ url: string; priority: number; changeFreq: string }> {
    const urls: Array<{ url: string; priority: number; changeFreq: string }> = []
    const baseUrl = 'https://smartestassistant.com'

    const processItems = (items: NavigationItem[], basePriority: number = 0.8) => {
      items.forEach(item => {
        if (!item.external) {
          urls.push({
            url: `${baseUrl}${item.href}`,
            priority: item.featured ? 0.9 : basePriority,
            changeFreq: item.href === '/' ? 'daily' : 'weekly'
          })
        }
        
        if (item.children) {
          processItems(item.children, basePriority - 0.1)
        }
      })
    }

    processItems(mainNavigation)
    return urls
  }
}

// Export commonly used navigation data
export const navigation = {
  main: mainNavigation,
  mobile: mobileNavigation,
  popular: popularPages,
  actions: quickActions,
  search: searchSuggestions
}