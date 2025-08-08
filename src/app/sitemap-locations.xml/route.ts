import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://smartestassistant.com'
  const currentDate = new Date().toISOString()

  const locations = [
    { slug: 'san-francisco', city: 'San Francisco', state: 'CA' },
    { slug: 'new-york-city', city: 'New York City', state: 'NY' },
    { slug: 'chicago', city: 'Chicago', state: 'IL' },
    { slug: 'los-angeles', city: 'Los Angeles', state: 'CA' },
    { slug: 'miami', city: 'Miami', state: 'FL' },
    { slug: 'austin', city: 'Austin', state: 'TX' },
    { slug: 'seattle', city: 'Seattle', state: 'WA' },
    { slug: 'boston', city: 'Boston', state: 'MA' },
    { slug: 'atlanta', city: 'Atlanta', state: 'GA' }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/locations</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${baseUrl}/images/locations-hub-virtual-assistant-smartest-assistant.webp</image:loc>
      <image:caption>Virtual assistant services across major US cities - Smartest Assistant nationwide coverage</image:caption>
      <image:title>Virtual Assistant Service Locations</image:title>
    </image:image>
  </url>
  ${locations.map(location => `
  <url>
    <loc>${baseUrl}/locations/${location.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${baseUrl}/images/${location.slug}-virtual-assistant-smartest-assistant.webp</image:loc>
      <image:caption>Smart virtual assistant services for ${location.city} ${location.state} businesses - Smartest Assistant local support</image:caption>
      <image:title>${location.city} Virtual Assistant Services</image:title>
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