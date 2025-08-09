import { BlogPost } from '@/lib/blog'
import { generateBlogPostSchema } from '@/lib/blog-schema'

interface BlogPostSchemaProps {
  post: BlogPost
}

export function BlogPostSchema({ post }: BlogPostSchemaProps) {
  const schema = generateBlogPostSchema(
    post,
    `https://smartestassistant.com/resources/blog/${post.slug}`
  )

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}