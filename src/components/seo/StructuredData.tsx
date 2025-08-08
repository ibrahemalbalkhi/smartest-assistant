import Script from 'next/script'

interface StructuredDataProps {
  data: Record<string, any>
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  )
}

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Smartest Assistant",
    "alternateName": "Smart VA Services",
    "description": "Smart virtual assistant services providing strategic VAs who think autonomously and leverage modern tools for exceptional results",
    "url": "https://smartestassistant.com",
    "logo": "https://smartestassistant.com/logo.png",
    "image": "https://smartestassistant.com/og-image.png",
    "telephone": "+1-XXX-XXX-XXXX",
    "email": "hello@smartestassistant.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "founder": {
      "@type": "Person",
      "name": "Smartest Assistant Team"
    },
    "foundingDate": "2020",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 50,
      "maxValue": 200
    },
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
  
  return <StructuredData data={data} />
}

export function ServiceSchema({
  name,
  description,
  url
}: {
  name: string
  description: string
  url: string
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Smartest Assistant"
    },
    "serviceType": "Virtual Assistant Services",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": url,
      "servicePhone": "+1-XXX-XXX-XXXX",
      "availableLanguage": {
        "@type": "Language",
        "name": "English"
      }
    },
    "offers": {
      "@type": "Offer",
      "priceRange": "$$-$$$",
      "availability": "https://schema.org/InStock"
    }
  }
  
  return <StructuredData data={data} />
}

export function LocalBusinessSchema({
  city,
  state,
  url
}: {
  city: string
  state: string
  url: string
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Smartest Assistant - ${city}`,
    "description": `Smart virtual assistant services for ${city} businesses`,
    "url": url,
    "telephone": "+1-XXX-XXX-XXXX",
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
      "closes": "18:00"
    },
    "priceRange": "$$"
  }
  
  return <StructuredData data={data} />
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const data = {
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
  
  return <StructuredData data={data} />
}