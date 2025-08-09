import Link from 'next/link'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { getRelatedPosts, formatPublishDate, BlogPost } from '@/lib/blog'
import { Clock, ArrowRight } from 'lucide-react'

interface RelatedPostsProps {
  currentPost: BlogPost
  limit?: number
  className?: string
}

export function RelatedPosts({ 
  currentPost, 
  limit = 3, 
  className = '' 
}: RelatedPostsProps) {
  const relatedPosts = getRelatedPosts(currentPost, limit)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <div className={`${className}`}>
      <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
          >
            {/* Post Image */}
            <div className="aspect-[16/10] overflow-hidden">
              <Link href={`/resources/blog/${post.slug}`}>
                <OptimizedImage
                  src={post.coverImage}
                  alt={post.coverImageAlt}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Post Content */}
            <div className="p-4">
              {/* Category */}
              <span
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-${post.category.color}-100 text-${post.category.color}-800 mb-2`}
              >
                {post.category.name}
              </span>

              {/* Title */}
              <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                <Link 
                  href={`/resources/blog/${post.slug}`}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {post.title}
                </Link>
              </h4>

              {/* Excerpt */}
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{post.readingTime} min</span>
                </div>
                <span>{formatPublishDate(post.publishedAt)}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View More Link */}
      <div className="mt-8 text-center">
        <Link
          href="/resources/blog"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 group"
        >
          View All Articles
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  )
}

// Compact related posts for sidebar
export function SidebarRelatedPosts({ 
  currentPost, 
  limit = 4, 
  className = '' 
}: RelatedPostsProps) {
  const relatedPosts = getRelatedPosts(currentPost, limit)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <div className={`bg-white rounded-lg p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">You Might Also Like</h3>
      
      <div className="space-y-4">
        {relatedPosts.map((post) => (
          <div key={post.id} className="group">
            <Link
              href={`/resources/blog/${post.slug}`}
              className="block hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200"
            >
              <div className="flex space-x-3">
                {/* Thumbnail */}
                <div className="flex-shrink-0">
                  <OptimizedImage
                    src={post.coverImage}
                    alt={post.coverImageAlt}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h4>
                  <div className="flex items-center text-xs text-gray-500 mt-1 space-x-2">
                    <span>{post.readingTime} min read</span>
                    <span>•</span>
                    <span>{formatPublishDate(post.publishedAt)}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

// Related posts with category grouping
export function GroupedRelatedPosts({ 
  currentPost, 
  className = '' 
}: Omit<RelatedPostsProps, 'limit'>) {
  const relatedPosts = getRelatedPosts(currentPost, 6)

  // Group by category
  const groupedPosts = relatedPosts.reduce((acc, post) => {
    const categoryId = post.category.id
    if (!acc[categoryId]) {
      acc[categoryId] = {
        category: post.category,
        posts: []
      }
    }
    acc[categoryId].posts.push(post)
    return acc
  }, {} as Record<string, { category: any, posts: BlogPost[] }>)

  const categories = Object.values(groupedPosts)

  if (categories.length === 0) {
    return null
  }

  return (
    <div className={className}>
      <h3 className="text-xl font-bold text-gray-900 mb-8">More Articles You'll Love</h3>
      
      {categories.map(({ category, posts }) => (
        <div key={category.id} className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900 flex items-center">
              <span
                className={`w-3 h-3 rounded-full bg-${category.color}-500 mr-2`}
              ></span>
              {category.name}
            </h4>
            <Link
              href={`/resources/blog?category=${category.slug}`}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View all
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {posts.slice(0, 2).map((post) => (
              <Link
                key={post.id}
                href={`/resources/blog/${post.slug}`}
                className="group p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
              >
                <h5 className="font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2 mb-2">
                  {post.title}
                </h5>
                <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                  {post.excerpt}
                </p>
                <div className="text-xs text-gray-500">
                  {post.readingTime} min read • {formatPublishDate(post.publishedAt)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}