// Schema markup generators for blog and tools

import { BlogPost, BlogAuthor } from './blog'

// Article schema for blog posts
export function generateBlogPostSchema(post: BlogPost, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": {
      "@type": "ImageObject",
      "url": `https://smartestassistant.com${post.coverImage}`,
      "width": 1200,
      "height": 630,
      "alt": post.coverImageAlt
    },
    "url": url,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "description": post.author.bio,
      "jobTitle": post.author.role,
      "image": `https://smartestassistant.com${post.author.avatar}`,
      "url": post.author.socialLinks.linkedin || `https://smartestassistant.com/team/${post.author.id}`,
      "sameAs": [
        post.author.socialLinks.linkedin,
        post.author.socialLinks.twitter,
        `mailto:${post.author.socialLinks.email}`
      ].filter(Boolean)
    },
    "publisher": {
      "@type": "Organization",
      "name": "Smartest Assistant",
      "description": "Smart Virtual Assistant services for businesses and entrepreneurs",
      "url": "https://smartestassistant.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://smartestassistant.com/images/logo-smartest-assistant.webp",
        "width": 200,
        "height": 60
      },
      "sameAs": [
        "https://linkedin.com/company/smartestassistant",
        "https://twitter.com/smartestassist",
        "https://facebook.com/smartestassistant"
      ]
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": post.category.name,
    "keywords": post.tags.join(", "),
    "wordCount": post.content ? post.content.split(' ').length : undefined,
    "timeRequired": `PT${post.readingTime}M`,
    "about": {
      "@type": "Thing",
      "name": "Virtual Assistant Services",
      "description": "Professional virtual assistant services and delegation strategies"
    },
    "mentions": post.tags.map(tag => ({
      "@type": "Thing",
      "name": tag
    }))
  }
}

// Blog page schema
export function generateBlogPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Smartest Assistant Blog",
    "description": "Expert insights on virtual assistant services, delegation strategies, and business productivity tips",
    "url": "https://smartestassistant.com/resources/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Smartest Assistant",
      "url": "https://smartestassistant.com"
    },
    "author": {
      "@type": "Organization",
      "name": "Smartest Assistant",
      "description": "Smart Virtual Assistant services team"
    },
    "inLanguage": "en-US",
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Smartest Assistant"
    },
    "copyrightYear": new Date().getFullYear()
  }
}

// Author schema for team/author pages
export function generateAuthorSchema(author: BlogAuthor) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author.name,
    "description": author.bio,
    "jobTitle": author.role,
    "image": `https://smartestassistant.com${author.avatar}`,
    "url": `https://smartestassistant.com/team/${author.id}`,
    "worksFor": {
      "@type": "Organization",
      "name": "Smartest Assistant",
      "url": "https://smartestassistant.com"
    },
    "sameAs": [
      author.socialLinks.linkedin,
      author.socialLinks.twitter,
      `mailto:${author.socialLinks.email}`
    ].filter(Boolean),
    "knowsAbout": [
      "Virtual Assistant Services",
      "Business Process Optimization",
      "Delegation Strategies",
      "Remote Team Management"
    ]
  }
}

// Tool schema for ROI Calculator
export function generateROICalculatorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Virtual Assistant ROI Calculator",
    "description": "Calculate your return on investment when hiring a virtual assistant. Free interactive calculator with instant results.",
    "url": "https://smartestassistant.com/resources/roi-calculator",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Smartest Assistant",
      "url": "https://smartestassistant.com"
    },
    "featureList": [
      "Calculate annual time savings",
      "Estimate cost savings",
      "ROI percentage calculation",
      "Visual results presentation",
      "Downloadable results"
    ],
    "screenshot": "https://smartestassistant.com/images/roi-calculator-screenshot-smartest-assistant.webp"
  }
}

// Tool schema for Task Audit Tool
export function generateTaskAuditSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Task Delegation Audit Tool",
    "description": "Identify which tasks you should delegate to a virtual assistant. Free interactive checklist with personalized recommendations.",
    "url": "https://smartestassistant.com/resources/task-audit",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Smartest Assistant",
      "url": "https://smartestassistant.com"
    },
    "featureList": [
      "Task categorization by business function",
      "Delegation difficulty assessment",
      "Time impact analysis",
      "Personalized recommendations",
      "Downloadable audit report"
    ],
    "screenshot": "https://smartestassistant.com/images/task-audit-tool-screenshot-smartest-assistant.webp"
  }
}

// FAQ schema for tools and blog posts
export function generateToolFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// HowTo schema for guides and tutorials
export function generateHowToSchema(
  title: string,
  description: string,
  steps: Array<{ name: string; text: string; image?: string }>,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    "image": `https://smartestassistant.com/images/how-to-${title.toLowerCase().replace(/\s+/g, '-')}-smartest-assistant.webp`,
    "totalTime": "PT30M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Computer or mobile device"
      },
      {
        "@type": "HowToSupply",
        "name": "Internet connection"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Web browser"
      }
    ],
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "image": step.image ? `https://smartestassistant.com${step.image}` : undefined
    })),
    "url": url,
    "author": {
      "@type": "Organization",
      "name": "Smartest Assistant"
    }
  }
}

// Video schema for embedded videos
export function generateVideoSchema(
  title: string,
  description: string,
  thumbnailUrl: string,
  uploadDate: string,
  duration: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": title,
    "description": description,
    "thumbnailUrl": `https://smartestassistant.com${thumbnailUrl}`,
    "uploadDate": uploadDate,
    "duration": duration,
    "embedUrl": url,
    "publisher": {
      "@type": "Organization",
      "name": "Smartest Assistant",
      "logo": {
        "@type": "ImageObject",
        "url": "https://smartestassistant.com/images/logo-smartest-assistant.webp"
      }
    },
    "contentUrl": url,
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/WatchAction",
      "userInteractionCount": 0
    }
  }
}

// Review/Rating schema for tools and services
export function generateAggregateRatingSchema(
  itemName: string,
  ratingValue: number,
  reviewCount: number,
  bestRating: number = 5,
  worstRating: number = 1
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": itemName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount,
      "bestRating": bestRating,
      "worstRating": worstRating
    },
    "brand": {
      "@type": "Brand",
      "name": "Smartest Assistant"
    }
  }
}

// Collection schema for blog categories
export function generateBlogCategorySchema(
  categoryName: string,
  categoryDescription: string,
  categorySlug: string,
  postCount: number
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${categoryName} - Virtual Assistant Blog`,
    "description": categoryDescription,
    "url": `https://smartestassistant.com/resources/blog?category=${categorySlug}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": postCount,
      "itemListElement": [] // Would be populated with actual posts
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://smartestassistant.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Resources",
          "item": "https://smartestassistant.com/resources"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Blog",
          "item": "https://smartestassistant.com/resources/blog"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": categoryName,
          "item": `https://smartestassistant.com/resources/blog?category=${categorySlug}`
        }
      ]
    }
  }
}