'use client'

import Link from 'next/link'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { getBlogPostsByCategory, paginatePosts, formatPublishDate } from '@/lib/blog'
import { BlogPagination } from './blog-pagination'
import { Clock, User, ArrowRight } from 'lucide-react'

interface BlogGridProps {
  category: string
  currentPage: number
  postsPerPage?: number
}

export function BlogGrid({ 
  category, 
  currentPage, 
  postsPerPage = 9 
}: BlogGridProps) {
  const allPosts = getBlogPostsByCategory(category)
  const paginationData = paginatePosts(allPosts, currentPage, postsPerPage)
  
  if (allPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 mb-4">
          <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.071 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No posts found
        </h3>
        <p className="text-gray-600">
          {category === 'all' 
            ? 'There are no blog posts available at the moment.'
            : `No posts found in the ${category} category.`
          }
        </p>
      </div>
    )
  }

  return (
    <div>
      {/* Results Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {category === 'all' ? 'All Posts' : `${category.charAt(0).toUpperCase() + category.slice(1)} Posts`}
          </h2>
          <p className="text-gray-600 mt-1">
            {paginationData.totalPosts} {paginationData.totalPosts === 1 ? 'post' : 'posts'} found
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginationData.posts.map((post) => (
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
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Post Content */}
            <div className="p-6">
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {post.category.name}
                </span>
                {post.featured && (
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-amber-100 text-amber-800">
                    Featured
                  </span>
                )}
              </div>

              {/* Post Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                <Link 
                  href={`/resources/blog/${post.slug}`}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {post.title}
                </Link>
              </h3>

              {/* Post Excerpt */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Post Meta */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>
              </div>

              {/* Publish Date */}
              <div className="text-xs text-gray-400 mb-4">
                {formatPublishDate(post.publishedAt)}
              </div>

              {/* Read More Link */}
              <Link
                href={`/resources/blog/${post.slug}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 group"
              >
                Read more
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {paginationData.totalPages > 1 && (
        <div className="mt-12">
          <BlogPagination
            currentPage={paginationData.currentPage}
            totalPages={paginationData.totalPages}
            category={category}
          />
        </div>
      )}

      {/* Load More CTA (Alternative to pagination) */}
      {paginationData.hasNextPage && (
        <div className="mt-12 text-center">
          <Link
            href={`/resources/blog?category=${category}&page=${currentPage + 1}`}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Load More Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      )}
    </div>
  )
}