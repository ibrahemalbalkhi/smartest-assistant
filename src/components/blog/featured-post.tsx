import Link from 'next/link'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { getFeaturedPosts, formatPublishDate } from '@/lib/blog'
import { Clock, User, ArrowRight } from '@/components/ui/Icons'

export function FeaturedPost() {
  const featuredPosts = getFeaturedPosts(1)
  
  if (featuredPosts.length === 0) {
    return null
  }

  const post = featuredPosts[0]

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Content */}
        <div className="p-8 lg:p-12 text-white">
          <div className="inline-flex items-center px-3 py-1 bg-amber-500 text-amber-900 rounded-full text-sm font-medium mb-4">
            Featured Post
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
            {post.title}
          </h2>
          
          <p className="text-blue-100 mb-6 text-lg leading-relaxed">
            {post.excerpt}
          </p>
          
          {/* Meta Information */}
          <div className="flex items-center space-x-6 text-blue-200 text-sm mb-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
          
          <div className="text-blue-200 text-sm mb-6">
            {formatPublishDate(post.publishedAt)}
          </div>
          
          {/* CTA */}
          <Link
            href={`/resources/blog/${post.slug}`}
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
          >
            Read Full Article
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
        
        {/* Image */}
        <div className="relative h-64 lg:h-full min-h-[300px]">
          <OptimizedImage
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill={true}
            className="object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
        </div>
      </div>
    </div>
  )
}