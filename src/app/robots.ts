import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://smartestassistant.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
          '/tmp/',
          '/_next/',
          '/dashboard/',
          '/internal/',
          '/test/',
          '*.json',
          '*?preview=*',
          '*?draft=*'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
          '/dashboard/',
          '/internal/'
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
          '/dashboard/',
          '/internal/'
        ],
      },
      // Block AI crawlers from training on our content
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'CCBot',
          'anthropic-ai',
          'Claude-Web'
        ],
        disallow: '/',
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-services.xml`,
      `${baseUrl}/sitemap-locations.xml`, 
      `${baseUrl}/sitemap-blog.xml`
    ],
    host: baseUrl,
  }
}