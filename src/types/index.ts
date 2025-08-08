export interface Service {
  id: string
  name: string
  slug: string
  description: string
  features: string[]
  benefits: string[]
  icon?: string
  pricing?: {
    starting: number
    currency: string
    period: 'hour' | 'month' | 'project'
  }
}

export interface Location {
  id: string
  city: string
  state: string
  slug: string
  timezone: string
  description: string
}

export interface Industry {
  id: string
  name: string
  slug: string
  description: string
  challenges: string[]
  solutions: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: string
  location?: string
  service?: string
  industry?: string
}

export interface CaseStudy {
  id: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    improvement: string
  }[]
  testimonial?: Testimonial
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt?: string
  readTime: number
  category: string
  tags: string[]
  featuredImage?: string
}

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
  noindex?: boolean
  schema?: Record<string, any>
}

export interface CTAProps {
  text: string
  href: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'base' | 'lg'
  fullWidth?: boolean
  icon?: React.ReactNode
  onClick?: () => void
}

export interface NavigationItem {
  label: string
  href: string
  description?: string
  icon?: React.ReactNode
  children?: NavigationItem[]
}

export interface FAQ {
  question: string
  answer: string
  category?: string
}