import { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import { Breadcrumbs } from '@/components/navigation/breadcrumbs'
import { BlogGrid } from '@/components/blog/blog-grid'
import { BlogCategories } from '@/components/blog/blog-categories'
import { FeaturedPost } from '@/components/blog/featured-post'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Virtual Assistant Blog: Expert Tips & Strategies',
  description: 'Expert insights on delegation, productivity, and virtual assistant best practices. Learn how to scale your business with smart virtual assistants.',
  keywords: 'virtual assistant blog, delegation tips, productivity strategies, business automation',
  canonical: '/resources/blog'
})

export default async function BlogPage({
  searchParams
}: {
  searchParams: Promise<{ category?: string; page?: string }>
}) {
  const params = await searchParams
  const currentPage = parseInt(params.page || '1', 10)
  const selectedCategory = params.category || 'all'
  
  const breadcrumbs = [
    { label: 'Resources', href: '/resources' },
    { label: 'Blog', href: '/resources/blog' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Virtual Assistant Insights & Strategies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert tips on delegation, productivity, and building successful partnerships with virtual assistants. 
            Learn from real client experiences and proven strategies.
          </p>
        </div>

        {/* Featured Post */}
        <FeaturedPost />

        <div className="grid lg:grid-cols-4 gap-8 mt-12">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <BlogCategories selectedCategory={selectedCategory} />
            
            {/* Newsletter Signup */}
            <div className="bg-white rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get weekly tips on delegation and productivity delivered to your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Posts</h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Complete Guide to Hiring Virtual Assistants',
                    href: '/resources/blog/complete-guide-hiring-virtual-assistants-2024',
                    readTime: '18 min read'
                  },
                  {
                    title: 'Virtual Assistant vs Employee Analysis',
                    href: '/resources/blog/virtual-assistant-vs-employee-cost-analysis',
                    readTime: '16 min read'
                  },
                  {
                    title: 'Email Management Mastery with VAs',
                    href: '/resources/blog/email-management-mastery-virtual-assistants',
                    readTime: '15 min read'
                  }
                ].map((post, index) => (
                  <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0">
                    <a
                      href={post.href}
                      className="block hover:text-blue-600 transition-colors duration-200"
                    >
                      <div className="font-medium text-sm text-gray-900 line-clamp-2 mb-1">
                        {post.title}
                      </div>
                      <div className="text-xs text-gray-500">{post.readTime}</div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <BlogGrid 
              category={selectedCategory}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}