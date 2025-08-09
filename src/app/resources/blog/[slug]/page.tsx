import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogPostBySlug, getRelatedPosts, formatPublishDate } from '@/lib/blog'
import { generateSEOMetadata } from '@/lib/seo'
import { BlogPostSchema } from '@/components/seo/BlogPostSchema'
import { Breadcrumbs } from '@/components/navigation/breadcrumbs'
import { AuthorBio } from '@/components/blog/author-bio'
import { SocialShare } from '@/components/blog/social-share'
import { RelatedPosts } from '@/components/blog/related-posts'
import { Section, H1, Lead, Paragraph } from '@/components/ui'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    return {}
  }

  return generateSEOMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    canonical: `/resources/blog/${post.slug}`,
    openGraph: {
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [post.coverImage]
    }
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, 3)
  
  const breadcrumbs = [
    { label: 'Resources', href: '/resources' },
    { label: 'Blog', href: '/resources/blog' },
    { label: post.title, href: `/resources/blog/${post.slug}` }
  ]

  return (
    <>
      <BlogPostSchema post={post} />
      
      <article className="min-h-screen">
        {/* Hero Section */}
        <Section background="gray" spacing="lg">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={breadcrumbs} />
            
            <div className="mt-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-blue text-white">
                  {post.category.name}
                </span>
                <span className="text-gray-500">•</span>
                <time className="text-gray-500" dateTime={post.publishedAt}>
                  {formatPublishDate(post.publishedAt)}
                </time>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">{post.readingTime} min read</span>
              </div>
              
              <H1 className="mb-6">{post.title}</H1>
              
              <Lead className="mb-8">{post.excerpt}</Lead>
              
              <div className="flex items-center justify-between mb-8">
                <AuthorBio author={post.author} />
                <SocialShare 
                  url={`https://smartestassistant.com/resources/blog/${post.slug}`}
                  title={post.title}
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Cover Image */}
        {post.coverImage && (
          <Section spacing="sm" container={false}>
            <div className="max-w-6xl mx-auto px-4">
              <div className="relative aspect-[21/9] rounded-xl overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.coverImageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
              </div>
            </div>
          </Section>
        )}

        {/* Content */}
        <Section spacing="lg">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-primary-blue prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-600 prose-ol:text-gray-600">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Post Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/resources/blog?tag=${tag}`}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <AuthorBio author={post.author} expanded />
                <SocialShare 
                  url={`https://smartestassistant.com/resources/blog/${post.slug}`}
                  title={post.title}
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <Section background="gray" spacing="lg">
            <div className="max-w-6xl mx-auto">
              <RelatedPosts posts={relatedPosts} currentPostId={post.id} />
            </div>
          </Section>
        )}

        {/* CTA Section */}
        <Section background="primary" spacing="lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Reclaim Your Time?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 500+ business leaders who've delegated their way to success with smart virtual assistants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Your Smart VA Match
              </Link>
              <Link
                href="/resources/roi-calculator"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-primary-blue transition-colors"
              >
                Calculate Your Savings
              </Link>
            </div>
          </div>
        </Section>
      </article>
    </>
  )
}