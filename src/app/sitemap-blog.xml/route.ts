import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://smartestassistant.com'
  const currentDate = new Date().toISOString()

  // Blog posts would typically come from a CMS or database
  // For now, we'll include common blog post topics for smart VA services
  const blogPosts = [
    {
      slug: 'how-to-hire-virtual-assistant-guide',
      title: 'Complete Guide to Hiring a Virtual Assistant in 2024',
      publishedAt: '2024-01-15',
      category: 'guides'
    },
    {
      slug: 'virtual-assistant-vs-employee-comparison',
      title: 'Virtual Assistant vs Employee: Cost-Benefit Analysis',
      publishedAt: '2024-01-20',
      category: 'analysis'
    },
    {
      slug: 'email-management-best-practices',
      title: 'Email Management Best Practices for Executives',
      publishedAt: '2024-02-01',
      category: 'productivity'
    },
    {
      slug: 'saas-startup-virtual-assistant-benefits',
      title: '7 Ways Virtual Assistants Accelerate SaaS Startup Growth',
      publishedAt: '2024-02-10',
      category: 'startups'
    },
    {
      slug: 'roi-calculator-virtual-assistant',
      title: 'Calculate Your Virtual Assistant ROI: Free Tool & Guide',
      publishedAt: '2024-02-15',
      category: 'tools'
    },
    {
      slug: 'social-media-management-delegation',
      title: 'How to Delegate Social Media Management Effectively',
      publishedAt: '2024-02-20',
      category: 'marketing'
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/resources/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${baseUrl}/images/blog-hub-virtual-assistant-smartest-assistant.webp</image:loc>
      <image:caption>Virtual assistant blog and resources - Smartest Assistant expert insights and guides</image:caption>
      <image:title>Virtual Assistant Blog</image:title>
    </image:image>
  </url>
  ${blogPosts.map(post => `
  <url>
    <loc>${baseUrl}/resources/blog/${post.slug}</loc>
    <lastmod>${post.publishedAt}T10:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <image:image>
      <image:loc>${baseUrl}/images/blog-${post.slug}-smartest-assistant.webp</image:loc>
      <image:caption>${post.title} - Expert insights from Smartest Assistant</image:caption>
      <image:title>${post.title}</image:title>
    </image:image>
    <news:news>
      <news:publication>
        <news:name>Smartest Assistant Blog</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${post.publishedAt}T10:00:00+00:00</news:publication_date>
      <news:title>${post.title}</news:title>
    </news:news>
  </url>`).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}