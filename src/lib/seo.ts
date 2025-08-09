import { Metadata } from 'next'

interface SEOConfig {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
  jsonLd?: Record<string, any>
}

export function generateSEOMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/images/og-default-smartest-assistant.webp',
  noindex = false,
  jsonLd
}: SEOConfig): Metadata {
  const baseUrl = 'https://smartestassistant.com'
  const fullTitle = title.includes('Smartest Assistant') 
    ? title 
    : `${title} | Smart Virtual Assistants | Smartest Assistant`

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: 'Smartest Assistant' }],
    creator: 'Smartest Assistant',
    publisher: 'Smartest Assistant',
    robots: noindex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      title: fullTitle,
      description,
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      siteName: 'Smartest Assistant',
      images: [
        {
          url: `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: description,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${baseUrl}${ogImage}`],
      creator: '@smartestassist',
      site: '@smartestassist',
    },
    alternates: {
      canonical: canonical ? `${baseUrl}${canonical}` : baseUrl,
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
    other: {
      'application-name': 'Smartest Assistant',
      'msapplication-TileColor': '#1E40AF',
      'theme-color': '#1E40AF',
    },
  }

  return metadata
}

// Pre-configured metadata for common page types
export const SEOTemplates = {
  service: (serviceName: string, description: string, keywords?: string) => generateSEOMetadata({
    title: `${serviceName} Virtual Assistant Services | Smart VAs`,
    description: `Professional ${serviceName.toLowerCase()} by smart virtual assistants. ${description}`,
    keywords: keywords || `${serviceName.toLowerCase()} virtual assistant, smart VA ${serviceName.toLowerCase()}, professional ${serviceName.toLowerCase()} services`,
    canonical: `/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`,
    ogImage: `/images/${serviceName.toLowerCase().replace(/\s+/g, '-')}-virtual-assistant-smartest-assistant.webp`
  }),

  location: (city: string, state: string) => generateSEOMetadata({
    title: `${city} Virtual Assistant Services | Smart VAs for ${city} Businesses`,
    description: `Professional virtual assistant services for ${city}, ${state} businesses. Smart VAs who understand local business culture and deliver exceptional results.`,
    keywords: `virtual assistant ${city.toLowerCase()}, ${city.toLowerCase()} executive assistant, ${state.toLowerCase()} virtual assistant services`,
    canonical: `/locations/${city.toLowerCase().replace(/\s+/g, '-')}`,
    ogImage: `/images/${city.toLowerCase().replace(/\s+/g, '-')}-virtual-assistant-smartest-assistant.webp`
  }),

  industry: (industry: string, description: string) => generateSEOMetadata({
    title: `Virtual Assistants for ${industry} | Smart VAs Who Understand ${industry}`,
    description: `Specialized virtual assistant services for ${industry.toLowerCase()} businesses. ${description}`,
    keywords: `${industry.toLowerCase()} virtual assistant, smart VA ${industry.toLowerCase()}, virtual assistant for ${industry.toLowerCase()}`,
    canonical: `/industries/${industry.toLowerCase().replace(/\s+/g, '-')}`,
    ogImage: `/images/${industry.toLowerCase().replace(/\s+/g, '-')}-virtual-assistant-smartest-assistant.webp`
  }),

  blog: (title: string, description: string, slug: string) => generateSEOMetadata({
    title: `${title} | Smartest Assistant Blog`,
    description,
    keywords: 'virtual assistant tips, smart VA guide, delegation strategies, business productivity',
    canonical: `/resources/blog/${slug}`,
    ogImage: `/images/blog-${slug}-smartest-assistant.webp`
  })
}

// Breadcrumb schema generator
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://smartestassistant.com${crumb.url}`
    }))
  }
}

// Article schema generator for blog posts
export function generateArticleSchema({
  title,
  description,
  publishedDate,
  modifiedDate,
  authorName = 'Smartest Assistant Team',
  imageUrl,
  url
}: {
  title: string
  description: string
  publishedDate: string
  modifiedDate?: string
  authorName?: string
  imageUrl: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "url": url,
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": "https://smartestassistant.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Smartest Assistant",
      "logo": {
        "@type": "ImageObject",
        "url": "https://smartestassistant.com/images/logo-smartest-assistant.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  }
}

// Enhanced service schema with more details
export function generateServiceSchema({
  name,
  description,
  url,
  provider = 'Smartest Assistant',
  areaServed = 'United States',
  serviceType = 'Virtual Assistant Services',
  priceRange = '$$-$$$'
}: {
  name: string
  description: string
  url: string
  provider?: string
  areaServed?: string
  serviceType?: string
  priceRange?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": "https://smartestassistant.com",
      "logo": "https://smartestassistant.com/images/logo-smartest-assistant.webp",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "hello@chiefnest.com"
      }
    },
    "serviceType": serviceType,
    "areaServed": {
      "@type": "Country",
      "name": areaServed
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": url,
      "availableLanguage": {
        "@type": "Language",
        "name": "English"
      }
    },
    "offers": {
      "@type": "Offer",
      "priceRange": priceRange,
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "347",
      "bestRating": "5"
    }
  }
}

// Local business schema for location pages
export function generateLocalBusinessSchema({
  name,
  description,
  city,
  state,
  url,
  latitude,
  longitude
}: {
  name: string
  description: string
  city: string
  state: string
  url: string
  latitude?: number
  longitude?: number
}) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "description": description,
    "url": url,
    "email": "hello@chiefnest.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": state,
      "addressCountry": "US"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00",
      "validFrom": "2024-01-01",
      "validThrough": "2024-12-31"
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "347",
      "bestRating": "5"
    },
    "sameAs": [
      "https://linkedin.com/company/smartestassistant",
      "https://twitter.com/smartestassist",
      "https://facebook.com/smartestassistant"
    ]
  }

  if (latitude && longitude) {
    schema.geo = {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    }
  }

  return schema
}