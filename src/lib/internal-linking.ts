// Internal linking system for hub-and-spoke model

export interface InternalLink {
  href: string
  title: string
  description: string
  category: 'service' | 'location' | 'industry' | 'resource' | 'solution'
  priority: number // 1-10, higher = more important
  keywords: string[]
}

export interface PageRelationships {
  related: InternalLink[]
  parent?: InternalLink
  children: InternalLink[]
  crossLinks: InternalLink[]
}

// Service relationships - hub and spoke model
export const serviceRelationships: Record<string, string[]> = {
  'email-management': ['executive-assistant', 'calendar-management', 'customer-support'],
  'executive-assistant': ['email-management', 'calendar-management', 'travel-coordination'],
  'social-media-management': ['content-creation', 'cold-outreach', 'lead-generation'],
  'cold-outreach': ['lead-generation', 'social-media-management', 'market-research'],
  'calendar-management': ['executive-assistant', 'email-management', 'travel-coordination'],
  'customer-support': ['email-management', 'data-entry-research', 'project-management'],
  'data-entry-research': ['market-research', 'customer-support', 'document-management'],
  'bookkeeping': ['data-entry-research', 'document-management', 'project-management'],
  'content-creation': ['social-media-management', 'project-management', 'market-research'],
  'project-management': ['executive-assistant', 'content-creation', 'event-planning'],
  'travel-coordination': ['executive-assistant', 'calendar-management', 'event-planning'],
  'event-planning': ['travel-coordination', 'project-management', 'calendar-management'],
  'lead-generation': ['cold-outreach', 'market-research', 'social-media-management'],
  'market-research': ['lead-generation', 'data-entry-research', 'content-creation'],
  'document-management': ['bookkeeping', 'data-entry-research', 'project-management']
}

// Location to service relationships
export const locationServiceMap: Record<string, string[]> = {
  'san-francisco': ['executive-assistant', 'social-media-management', 'content-creation'],
  'new-york-city': ['executive-assistant', 'email-management', 'cold-outreach'],
  'chicago': ['bookkeeping', 'project-management', 'customer-support'],
  'los-angeles': ['social-media-management', 'content-creation', 'event-planning'],
  'miami': ['travel-coordination', 'event-planning', 'social-media-management'],
  'austin': ['content-creation', 'social-media-management', 'market-research'],
  'seattle': ['project-management', 'data-entry-research', 'executive-assistant'],
  'boston': ['executive-assistant', 'bookkeeping', 'document-management'],
  'atlanta': ['customer-support', 'lead-generation', 'email-management']
}

// Industry to service relationships
export const industryServiceMap: Record<string, string[]> = {
  'saas-startups': ['executive-assistant', 'social-media-management', 'content-creation', 'cold-outreach'],
  'ecommerce': ['customer-support', 'social-media-management', 'data-entry-research', 'content-creation'],
  'real-estate': ['lead-generation', 'cold-outreach', 'social-media-management', 'calendar-management'],
  'healthcare': ['customer-support', 'calendar-management', 'document-management', 'data-entry-research'],
  'legal-services': ['document-management', 'calendar-management', 'customer-support', 'data-entry-research'],
  'consulting': ['executive-assistant', 'project-management', 'market-research', 'content-creation'],
  'finance': ['bookkeeping', 'document-management', 'executive-assistant', 'market-research'],
  'marketing-agencies': ['social-media-management', 'content-creation', 'project-management', 'market-research'],
  'nonprofits': ['event-planning', 'social-media-management', 'bookkeeping', 'customer-support']
}

// Master service data
export const services: Record<string, InternalLink> = {
  'email-management': {
    href: '/services/email-management',
    title: 'Email Management Virtual Assistant Services',
    description: 'Smart virtual assistants who organize, prioritize, and manage your inbox efficiently',
    category: 'service',
    priority: 9,
    keywords: ['email management', 'inbox organization', 'email assistant']
  },
  'executive-assistant': {
    href: '/services/executive-assistant',
    title: 'Executive Assistant Virtual Assistant Services',
    description: 'Strategic virtual assistants for C-suite executives and business leaders',
    category: 'service',
    priority: 10,
    keywords: ['executive assistant', 'C-suite support', 'strategic assistant']
  },
  'social-media-management': {
    href: '/services/social-media-management',
    title: 'Social Media Management Virtual Assistant Services',
    description: 'Expert social media virtual assistants who grow your online presence',
    category: 'service',
    priority: 8,
    keywords: ['social media management', 'social media assistant', 'online presence']
  },
  'cold-outreach': {
    href: '/services/cold-outreach',
    title: 'Cold Outreach Virtual Assistant Services',
    description: 'Professional cold outreach and lead generation virtual assistants',
    category: 'service',
    priority: 8,
    keywords: ['cold outreach', 'lead generation', 'sales prospecting']
  },
  'calendar-management': {
    href: '/services/calendar-management',
    title: 'Calendar Management Virtual Assistant Services',
    description: 'Smart calendar management and scheduling virtual assistants',
    category: 'service',
    priority: 7,
    keywords: ['calendar management', 'scheduling assistant', 'appointment coordination']
  },
  'customer-support': {
    href: '/services/customer-support',
    title: 'Customer Support Virtual Assistant Services',
    description: 'Professional customer support and service virtual assistants',
    category: 'service',
    priority: 7,
    keywords: ['customer support', 'customer service', 'support assistant']
  },
  'data-entry-research': {
    href: '/services/data-entry-research',
    title: 'Data Entry & Research Virtual Assistant Services',
    description: 'Accurate data entry and comprehensive research virtual assistants',
    category: 'service',
    priority: 6,
    keywords: ['data entry', 'research assistant', 'data management']
  },
  'bookkeeping': {
    href: '/services/bookkeeping',
    title: 'Bookkeeping Virtual Assistant Services',
    description: 'Professional bookkeeping and financial management virtual assistants',
    category: 'service',
    priority: 6,
    keywords: ['bookkeeping', 'financial assistant', 'accounting support']
  },
  'content-creation': {
    href: '/services/content-creation',
    title: 'Content Creation Virtual Assistant Services',
    description: 'Creative content creation and copywriting virtual assistants',
    category: 'service',
    priority: 7,
    keywords: ['content creation', 'copywriting', 'content assistant']
  },
  'project-management': {
    href: '/services/project-management',
    title: 'Project Management Virtual Assistant Services',
    description: 'Organized project management and coordination virtual assistants',
    category: 'service',
    priority: 7,
    keywords: ['project management', 'project coordinator', 'project assistant']
  },
  'travel-coordination': {
    href: '/services/travel-coordination',
    title: 'Travel Coordination Virtual Assistant Services',
    description: 'Expert travel planning and coordination virtual assistants',
    category: 'service',
    priority: 5,
    keywords: ['travel coordination', 'travel planning', 'travel assistant']
  },
  'event-planning': {
    href: '/services/event-planning',
    title: 'Event Planning Virtual Assistant Services',
    description: 'Professional event planning and management virtual assistants',
    category: 'service',
    priority: 5,
    keywords: ['event planning', 'event coordination', 'event assistant']
  },
  'lead-generation': {
    href: '/services/lead-generation',
    title: 'Lead Generation Virtual Assistant Services',
    description: 'Strategic lead generation and prospecting virtual assistants',
    category: 'service',
    priority: 8,
    keywords: ['lead generation', 'prospecting', 'sales leads']
  },
  'market-research': {
    href: '/services/market-research',
    title: 'Market Research Virtual Assistant Services',
    description: 'Comprehensive market research and analysis virtual assistants',
    category: 'service',
    priority: 6,
    keywords: ['market research', 'competitive analysis', 'research assistant']
  },
  'document-management': {
    href: '/services/document-management',
    title: 'Document Management Virtual Assistant Services',
    description: 'Organized document management and filing virtual assistants',
    category: 'service',
    priority: 5,
    keywords: ['document management', 'file organization', 'document assistant']
  }
}

// Master location data
export const locations: Record<string, InternalLink> = {
  'san-francisco': {
    href: '/locations/san-francisco',
    title: 'San Francisco Virtual Assistant Services',
    description: 'Smart virtual assistants serving San Francisco Bay Area businesses',
    category: 'location',
    priority: 9,
    keywords: ['San Francisco VA', 'Bay Area virtual assistant', 'SF business support']
  },
  'new-york-city': {
    href: '/locations/new-york-city',
    title: 'New York City Virtual Assistant Services',
    description: 'Professional virtual assistants for NYC businesses and executives',
    category: 'location',
    priority: 10,
    keywords: ['NYC virtual assistant', 'Manhattan VA', 'New York business support']
  },
  'chicago': {
    href: '/locations/chicago',
    title: 'Chicago Virtual Assistant Services',
    description: 'Expert virtual assistants serving Chicago and Midwest businesses',
    category: 'location',
    priority: 7,
    keywords: ['Chicago VA', 'Midwest virtual assistant', 'Illinois business support']
  },
  'los-angeles': {
    href: '/locations/los-angeles',
    title: 'Los Angeles Virtual Assistant Services',
    description: 'Creative virtual assistants for Los Angeles businesses and startups',
    category: 'location',
    priority: 8,
    keywords: ['Los Angeles VA', 'LA virtual assistant', 'California business support']
  }
}

// Master industry data
export const industries: Record<string, InternalLink> = {
  'saas-startups': {
    href: '/industries/saas-startups',
    title: 'Virtual Assistants for SaaS & Startups',
    description: 'Specialized virtual assistants who understand SaaS and startup workflows',
    category: 'industry',
    priority: 9,
    keywords: ['SaaS virtual assistant', 'startup VA', 'tech company support']
  },
  'ecommerce': {
    href: '/industries/ecommerce',
    title: 'Virtual Assistants for E-commerce',
    description: 'E-commerce virtual assistants expert in online retail operations',
    category: 'industry',
    priority: 8,
    keywords: ['ecommerce VA', 'online retail assistant', 'e-commerce support']
  },
  'real-estate': {
    href: '/industries/real-estate',
    title: 'Virtual Assistants for Real Estate',
    description: 'Real estate virtual assistants who understand property and client management',
    category: 'industry',
    priority: 7,
    keywords: ['real estate VA', 'realtor assistant', 'property management']
  }
}

// Generate related links for a page
export function getRelatedLinks(
  pageType: 'service' | 'location' | 'industry' | 'blog',
  pageSlug: string,
  maxLinks: number = 3
): InternalLink[] {
  const links: InternalLink[] = []

  switch (pageType) {
    case 'service':
      const relatedServices = serviceRelationships[pageSlug] || []
      relatedServices.slice(0, maxLinks).forEach(serviceSlug => {
        if (services[serviceSlug]) {
          links.push(services[serviceSlug])
        }
      })
      break

    case 'location':
      const locationServices = locationServiceMap[pageSlug] || []
      locationServices.slice(0, maxLinks).forEach(serviceSlug => {
        if (services[serviceSlug]) {
          links.push(services[serviceSlug])
        }
      })
      break

    case 'industry':
      const industryServices = industryServiceMap[pageSlug] || []
      industryServices.slice(0, maxLinks).forEach(serviceSlug => {
        if (services[serviceSlug]) {
          links.push(services[serviceSlug])
        }
      })
      break

    case 'blog':
      // For blog posts, link to top services
      const topServices = ['executive-assistant', 'email-management', 'social-media-management']
      topServices.slice(0, maxLinks).forEach(serviceSlug => {
        if (services[serviceSlug]) {
          links.push(services[serviceSlug])
        }
      })
      break
  }

  return links.sort((a, b) => b.priority - a.priority)
}

// Get hub link (parent page)
export function getHubLink(pageType: 'service' | 'location' | 'industry'): InternalLink | null {
  const hubs = {
    service: {
      href: '/services',
      title: 'All Virtual Assistant Services',
      description: 'Complete overview of our smart virtual assistant services',
      category: 'service' as const,
      priority: 10,
      keywords: ['virtual assistant services', 'VA services', 'smart assistants']
    },
    location: {
      href: '/locations',
      title: 'Virtual Assistant Service Locations',
      description: 'Smart virtual assistants serving businesses nationwide',
      category: 'location' as const,
      priority: 8,
      keywords: ['virtual assistant locations', 'VA coverage', 'nationwide service']
    },
    industry: {
      href: '/industries',
      title: 'Virtual Assistants by Industry',
      description: 'Industry-specialized virtual assistants for every business type',
      category: 'industry' as const,
      priority: 8,
      keywords: ['industry virtual assistants', 'specialized VAs', 'sector expertise']
    }
  }

  return hubs[pageType] || null
}

// Generate contextual anchor text for internal links
export function generateAnchorText(link: InternalLink, context: string = ''): string {
  const variations = {
    service: [
      `expert ${link.title.toLowerCase().replace(' virtual assistant services', '')} services`,
      `professional ${link.title.toLowerCase().replace(' virtual assistant services', '')} support`,
      `smart ${link.title.toLowerCase().replace(' virtual assistant services', '')} assistants`,
      link.title.replace(' Virtual Assistant Services', ' services')
    ],
    location: [
      `${link.title.replace(' Virtual Assistant Services', '')} support`,
      `virtual assistants in ${link.title.replace(' Virtual Assistant Services', '')}`,
      `${link.title.replace(' Virtual Assistant Services', '')} VA services`,
      link.title.replace(' Virtual Assistant Services', ' VAs')
    ],
    industry: [
      `${link.title.replace('Virtual Assistants for ', '')} virtual assistants`,
      `VAs specializing in ${link.title.replace('Virtual Assistants for ', '').toLowerCase()}`,
      `${link.title.replace('Virtual Assistants for ', '').toLowerCase()} support services`,
      link.title.replace('Virtual Assistants for ', '') + ' VAs'
    ],
    resource: [
      link.title,
      `learn about ${link.title.toLowerCase()}`,
      `${link.title} guide`,
      `${link.title} resources`
    ]
  }

  const options = variations[link.category] || [link.title]
  return options[Math.floor(Math.random() * options.length)]
}

// Check if two pages should be cross-linked
export function shouldCrossLink(
  fromType: string,
  fromSlug: string,
  toType: string,
  toSlug: string
): boolean {
  // Don't link to self
  if (fromType === toType && fromSlug === toSlug) return false

  // Services should cross-link based on relationships
  if (fromType === 'service' && toType === 'service') {
    return serviceRelationships[fromSlug]?.includes(toSlug) || false
  }

  // Locations should link to relevant services
  if (fromType === 'location' && toType === 'service') {
    return locationServiceMap[fromSlug]?.includes(toSlug) || false
  }

  // Industries should link to relevant services
  if (fromType === 'industry' && toType === 'service') {
    return industryServiceMap[fromSlug]?.includes(toSlug) || false
  }

  return false
}