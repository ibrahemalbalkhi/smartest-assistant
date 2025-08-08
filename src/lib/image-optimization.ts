// Image optimization utilities for SEO and performance

export interface ImageMetadata {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  sizes?: string
  quality?: number
}

// Standard image dimensions for different page types
export const imageStandards = {
  // Open Graph and social sharing
  og: { width: 1200, height: 630 },
  
  // Hero sections
  hero: { width: 1200, height: 600 },
  heroMobile: { width: 800, height: 600 },
  
  // Service cards and features
  serviceCard: { width: 400, height: 300 },
  featureIcon: { width: 64, height: 64 },
  
  // Team and testimonials
  avatar: { width: 80, height: 80 },
  testimonial: { width: 100, height: 100 },
  teamPhoto: { width: 300, height: 300 },
  
  // Blog and content
  blogHero: { width: 800, height: 400 },
  blogThumbnail: { width: 300, height: 200 },
  
  // Location and industry pages
  cityHero: { width: 800, height: 400 },
  industryIcon: { width: 120, height: 120 },
  
  // Logos and branding
  logo: { width: 200, height: 60 },
  clientLogo: { width: 150, height: 80 },
  
  // Tool and platform logos
  toolLogo: { width: 80, height: 80 },
  platformBadge: { width: 60, height: 60 }
}

// Generate responsive image sizes string
export function generateSizes(type: keyof typeof imageStandards): string {
  const sizeMap = {
    og: '1200px',
    hero: '100vw',
    heroMobile: '100vw',
    serviceCard: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px',
    featureIcon: '64px',
    avatar: '80px',
    testimonial: '100px',
    teamPhoto: '(max-width: 768px) 100vw, 300px',
    blogHero: '(max-width: 768px) 100vw, 800px',
    blogThumbnail: '300px',
    cityHero: '(max-width: 768px) 100vw, 800px',
    industryIcon: '120px',
    logo: '200px',
    clientLogo: '150px',
    toolLogo: '80px',
    platformBadge: '60px'
  }
  
  return sizeMap[type] || '100vw'
}

// Create optimized image metadata for different contexts
export function createImageMetadata(
  type: 'service' | 'location' | 'industry' | 'blog' | 'hero' | 'team' | 'tool',
  context: {
    identifier: string
    displayName?: string
    description?: string
    city?: string
    state?: string
    priority?: boolean
  }
): ImageMetadata {
  const { identifier, displayName, description, city, state, priority = false } = context
  
  let src: string
  let alt: string
  let dimensions: { width: number; height: number }
  let sizes: string
  
  switch (type) {
    case 'service':
      src = `/images/${identifier}-virtual-assistant-smartest-assistant.webp`
      alt = `Smart virtual assistant providing ${displayName?.toLowerCase() || identifier.replace(/-/g, ' ')} services efficiently - Smartest Assistant professional support`
      dimensions = imageStandards.serviceCard
      sizes = generateSizes('serviceCard')
      break
      
    case 'location':
      src = `/images/${identifier}-virtual-assistant-smartest-assistant.webp`
      alt = `Virtual assistant services for ${displayName || city} ${state || ''} businesses - Smartest Assistant local support team`
      dimensions = imageStandards.cityHero
      sizes = generateSizes('cityHero')
      break
      
    case 'industry':
      src = `/images/${identifier}-virtual-assistant-smartest-assistant.webp`
      alt = `Virtual assistants specialized in ${displayName?.toLowerCase() || identifier.replace(/-/g, ' ')} industry - Smartest Assistant industry expertise`
      dimensions = imageStandards.serviceCard
      sizes = generateSizes('serviceCard')
      break
      
    case 'blog':
      src = `/images/blog-${identifier}-smartest-assistant.webp`
      alt = `${displayName || identifier.replace(/-/g, ' ')} - Expert virtual assistant insights from Smartest Assistant blog`
      dimensions = imageStandards.blogHero
      sizes = generateSizes('blogHero')
      break
      
    case 'hero':
      src = `/images/hero-${identifier}-smartest-assistant.webp`
      alt = description || 'Smart virtual assistants managing executive tasks with modern tools - Smartest Assistant strategic support'
      dimensions = imageStandards.hero
      sizes = generateSizes('hero')
      break
      
    case 'team':
      src = `/images/team-${identifier}-smartest-assistant.webp`
      alt = `${displayName || 'Virtual assistant team member'} - Professional virtual assistant at Smartest Assistant`
      dimensions = imageStandards.teamPhoto
      sizes = generateSizes('teamPhoto')
      break
      
    case 'tool':
      src = `/images/tool-${identifier}-logo-smartest-assistant.webp`
      alt = `${displayName || identifier} integration - Smart virtual assistants expert in ${displayName || identifier}`
      dimensions = imageStandards.toolLogo
      sizes = generateSizes('toolLogo')
      break
      
    default:
      src = `/images/${identifier}-smartest-assistant.webp`
      alt = description || `${displayName || identifier} - Smartest Assistant`
      dimensions = imageStandards.serviceCard
      sizes = generateSizes('serviceCard')
  }
  
  return {
    src,
    alt,
    width: dimensions.width,
    height: dimensions.height,
    priority,
    sizes,
    quality: priority ? 95 : 85
  }
}

// Blur placeholder generator for better loading experience
export function generateBlurPlaceholder(width: number, height: number): string {
  // Create a simple blur placeholder based on dimensions
  const aspectRatio = width / height
  const baseWidth = Math.min(width, 20)
  const baseHeight = Math.round(baseWidth / aspectRatio)
  
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${baseWidth}" height="${baseHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#E5E7EB;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#F3F4F6;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
    </svg>
  `)}`
}

// Image preload utility for critical images
export function preloadImage(src: string, priority: 'high' | 'low' = 'low'): void {
  if (typeof window === 'undefined') return
  
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = src
  link.as = 'image'
  link.fetchPriority = priority
  
  document.head.appendChild(link)
}

// Batch preload multiple images
export function preloadImages(images: Array<{ src: string; priority?: 'high' | 'low' }>): void {
  images.forEach(({ src, priority }) => {
    preloadImage(src, priority)
  })
}

// Generate srcSet for responsive images
export function generateSrcSet(basePath: string, identifier: string, suffix: string): string {
  const sizes = [400, 600, 800, 1200]
  return sizes
    .map(size => `${basePath}/${identifier}-${size}w${suffix} ${size}w`)
    .join(', ')
}

// Critical image paths that should be preloaded
export const criticalImages = {
  hero: '/images/hero-homepage-smartest-assistant.webp',
  logo: '/images/logo-smartest-assistant.webp',
  aboutTeam: '/images/team-hero-smartest-assistant.webp'
}

// Common tool and platform logos for integration sections
export const toolLogos = [
  { name: 'Gmail', identifier: 'gmail', category: 'email' },
  { name: 'Outlook', identifier: 'outlook', category: 'email' },
  { name: 'Slack', identifier: 'slack', category: 'communication' },
  { name: 'Zoom', identifier: 'zoom', category: 'communication' },
  { name: 'Asana', identifier: 'asana', category: 'project-management' },
  { name: 'Trello', identifier: 'trello', category: 'project-management' },
  { name: 'HubSpot', identifier: 'hubspot', category: 'crm' },
  { name: 'Salesforce', identifier: 'salesforce', category: 'crm' },
  { name: 'LinkedIn', identifier: 'linkedin', category: 'social-media' },
  { name: 'Facebook', identifier: 'facebook', category: 'social-media' },
  { name: 'Instagram', identifier: 'instagram', category: 'social-media' },
  { name: 'Twitter', identifier: 'twitter', category: 'social-media' },
  { name: 'Canva', identifier: 'canva', category: 'design' },
  { name: 'Figma', identifier: 'figma', category: 'design' },
  { name: 'Zapier', identifier: 'zapier', category: 'automation' },
  { name: 'QuickBooks', identifier: 'quickbooks', category: 'accounting' }
]