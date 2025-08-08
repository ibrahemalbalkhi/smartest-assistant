import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://smartestassistant.com'
  const currentDate = new Date().toISOString()

  const services = [
    'email-management',
    'executive-assistant',
    'social-media-management',
    'cold-outreach',
    'calendar-management',
    'customer-support',
    'data-entry-research',
    'bookkeeping',
    'content-creation',
    'project-management',
    'travel-coordination',
    'event-planning',
    'lead-generation',
    'market-research',
    'document-management'
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${baseUrl}/images/services-hub-virtual-assistant-smartest-assistant.webp</image:loc>
      <image:caption>Smart virtual assistant services comparison table - Smartest Assistant service offerings</image:caption>
      <image:title>Virtual Assistant Services Hub</image:title>
    </image:image>
  </url>
  ${services.map(service => `
  <url>
    <loc>${baseUrl}/services/${service}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${baseUrl}/images/${service}-virtual-assistant-smartest-assistant.webp</image:loc>
      <image:caption>Smart virtual assistant providing ${service.replace(/-/g, ' ')} services - Smartest Assistant professional support</image:caption>
      <image:title>${service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Virtual Assistant</image:title>
    </image:image>
  </url>`).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}