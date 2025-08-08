// Blog data management and utilities

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: BlogAuthor
  category: BlogCategory
  tags: string[]
  publishedAt: string
  updatedAt?: string
  readingTime: number
  featured: boolean
  seoTitle?: string
  seoDescription?: string
  coverImage: string
  coverImageAlt: string
}

export interface BlogAuthor {
  id: string
  name: string
  bio: string
  avatar: string
  role: string
  socialLinks: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description: string
  color: string
  count?: number
}

// Blog categories
export const blogCategories: BlogCategory[] = [
  {
    id: 'guides',
    name: 'Guides & How-To',
    slug: 'guides',
    description: 'Step-by-step guides for working with virtual assistants',
    color: 'blue',
    count: 12
  },
  {
    id: 'productivity',
    name: 'Productivity',
    slug: 'productivity', 
    description: 'Tips and strategies for maximizing efficiency',
    color: 'green',
    count: 8
  },
  {
    id: 'case-studies',
    name: 'Case Studies',
    slug: 'case-studies',
    description: 'Real client success stories and results',
    color: 'purple',
    count: 6
  },
  {
    id: 'industry-insights',
    name: 'Industry Insights',
    slug: 'industry-insights',
    description: 'Trends and insights in the virtual assistant industry',
    color: 'amber',
    count: 10
  },
  {
    id: 'tools-resources',
    name: 'Tools & Resources',
    slug: 'tools-resources',
    description: 'Recommended tools and resources for delegation',
    color: 'indigo',
    count: 7
  },
  {
    id: 'startups',
    name: 'Startups',
    slug: 'startups',
    description: 'Virtual assistant strategies for startups and entrepreneurs',
    color: 'red',
    count: 9
  }
]

// Blog authors
export const blogAuthors: BlogAuthor[] = [
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    bio: 'Head of Operations at Smartest Assistant with 8+ years of experience in virtual team management and business process optimization.',
    avatar: '/images/team-sarah-johnson-smartest-assistant.webp',
    role: 'Head of Operations',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sarah-johnson-smartest-assistant',
      email: 'sarah@smartestassistant.com'
    }
  },
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    bio: 'Senior VA Strategist specializing in SaaS and tech company workflows. Former operations manager at two successful startups.',
    avatar: '/images/team-michael-chen-smartest-assistant.webp',
    role: 'Senior VA Strategist',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/michael-chen-va-expert',
      twitter: 'https://twitter.com/michaelchen_va'
    }
  },
  {
    id: 'emma-rodriguez',
    name: 'Emma Rodriguez',
    bio: 'Content Strategy Lead and virtual assistant expert with extensive experience in delegation training and process documentation.',
    avatar: '/images/team-emma-rodriguez-smartest-assistant.webp',
    role: 'Content Strategy Lead',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/emma-rodriguez-content',
      twitter: 'https://twitter.com/emma_va_tips'
    }
  }
]

// Sample blog posts
export const blogPosts: BlogPost[] = [
  {
    id: 'how-to-hire-virtual-assistant-guide',
    slug: 'how-to-hire-virtual-assistant-guide',
    title: 'Complete Guide to Hiring Your First Virtual Assistant in 2024',
    excerpt: 'A comprehensive step-by-step guide covering everything from defining requirements to onboarding your virtual assistant successfully.',
    content: '', // Would contain full blog content
    author: blogAuthors[0],
    category: blogCategories[0],
    tags: ['hiring', 'onboarding', 'guide', 'first-time'],
    publishedAt: '2024-01-15T10:00:00Z',
    readingTime: 12,
    featured: true,
    seoTitle: 'How to Hire a Virtual Assistant: Complete 2024 Guide',
    seoDescription: 'Learn how to hire your first virtual assistant with our comprehensive guide. Includes hiring checklist, interview questions, and onboarding tips.',
    coverImage: '/images/blog-how-to-hire-virtual-assistant-guide-smartest-assistant.webp',
    coverImageAlt: 'Professional virtual assistant interview process - Smartest Assistant hiring guide'
  },
  {
    id: 'virtual-assistant-vs-employee-comparison',
    slug: 'virtual-assistant-vs-employee-comparison',
    title: 'Virtual Assistant vs Employee: Cost-Benefit Analysis for 2024',
    excerpt: 'Detailed comparison of hiring virtual assistants versus full-time employees, including hidden costs and strategic considerations.',
    content: '',
    author: blogAuthors[1],
    category: blogCategories[3],
    tags: ['comparison', 'costs', 'strategy', 'analysis'],
    publishedAt: '2024-01-20T14:00:00Z',
    readingTime: 10,
    featured: false,
    coverImage: '/images/blog-virtual-assistant-vs-employee-comparison-smartest-assistant.webp',
    coverImageAlt: 'Cost comparison chart between virtual assistants and employees - Smartest Assistant analysis'
  },
  {
    id: 'email-management-best-practices',
    slug: 'email-management-best-practices',
    title: 'Email Management Best Practices for Executives',
    excerpt: 'Professional strategies for delegating email management to virtual assistants while maintaining security and efficiency.',
    content: '',
    author: blogAuthors[2],
    category: blogCategories[1],
    tags: ['email', 'productivity', 'executives', 'delegation'],
    publishedAt: '2024-02-01T09:00:00Z',
    readingTime: 8,
    featured: false,
    coverImage: '/images/blog-email-management-best-practices-smartest-assistant.webp',
    coverImageAlt: 'Organized email inbox managed by virtual assistant - Smartest Assistant email management'
  },
  {
    id: 'saas-startup-virtual-assistant-benefits',
    slug: 'saas-startup-virtual-assistant-benefits',
    title: '7 Ways Virtual Assistants Accelerate SaaS Startup Growth',
    excerpt: 'How SaaS startups use virtual assistants to scale operations, improve customer success, and focus on product development.',
    content: '',
    author: blogAuthors[1],
    category: blogCategories[5],
    tags: ['SaaS', 'startups', 'growth', 'scaling'],
    publishedAt: '2024-02-10T11:00:00Z',
    readingTime: 9,
    featured: true,
    coverImage: '/images/blog-saas-startup-virtual-assistant-benefits-smartest-assistant.webp',
    coverImageAlt: 'SaaS startup team collaborating with virtual assistants - Smartest Assistant startup solutions'
  },
  {
    id: 'roi-calculator-virtual-assistant',
    slug: 'roi-calculator-virtual-assistant',
    title: 'Calculate Your Virtual Assistant ROI: Free Tool & Guide',
    excerpt: 'Learn how to measure the return on investment of your virtual assistant and use our free calculator to estimate potential savings.',
    content: '',
    author: blogAuthors[0],
    category: blogCategories[4],
    tags: ['ROI', 'calculator', 'metrics', 'tools'],
    publishedAt: '2024-02-15T13:00:00Z',
    readingTime: 6,
    featured: false,
    coverImage: '/images/blog-roi-calculator-virtual-assistant-smartest-assistant.webp',
    coverImageAlt: 'ROI calculation dashboard showing virtual assistant savings - Smartest Assistant ROI tool'
  },
  {
    id: 'social-media-management-delegation',
    slug: 'social-media-management-delegation',
    title: 'How to Delegate Social Media Management Effectively',
    excerpt: 'Step-by-step process for delegating social media tasks to virtual assistants while maintaining brand voice and engagement.',
    content: '',
    author: blogAuthors[2],
    category: blogCategories[0],
    tags: ['social media', 'delegation', 'brand', 'marketing'],
    publishedAt: '2024-02-20T15:00:00Z',
    readingTime: 11,
    featured: false,
    coverImage: '/images/blog-social-media-management-delegation-smartest-assistant.webp',
    coverImageAlt: 'Social media content calendar managed by virtual assistant - Smartest Assistant social media services'
  }
]

// Utility functions
export function getBlogPostBySlug(slug: string): BlogPost | null {
  return blogPosts.find(post => post.slug === slug) || null
}

export function getBlogPostsByCategory(categorySlug: string, limit?: number): BlogPost[] {
  let filteredPosts = categorySlug === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.slug === categorySlug)
  
  // Sort by publish date (newest first)
  filteredPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  
  return limit ? filteredPosts.slice(0, limit) : filteredPosts
}

export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => post.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => 
      post.id !== currentPost.id && (
        post.category.id === currentPost.category.id ||
        post.tags.some(tag => currentPost.tags.includes(tag))
      )
    )
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.split(' ').length
  return Math.ceil(words / wordsPerMinute)
}

export function formatPublishDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function generateBlogPostUrl(slug: string): string {
  return `/resources/blog/${slug}`
}

export function getCategoryBySlug(slug: string): BlogCategory | null {
  return blogCategories.find(category => category.slug === slug) || null
}

export function getAuthorById(id: string): BlogAuthor | null {
  return blogAuthors.find(author => author.id === id) || null
}

// Pagination utilities
export function paginatePosts(posts: BlogPost[], page: number, postsPerPage: number = 9) {
  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  
  return {
    posts: posts.slice(startIndex, endIndex),
    currentPage: page,
    totalPosts: posts.length,
    totalPages: Math.ceil(posts.length / postsPerPage),
    hasNextPage: endIndex < posts.length,
    hasPrevPage: page > 1
  }
}

// SEO utilities
export function generateBlogSEOData(post: BlogPost) {
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    canonical: generateBlogPostUrl(post.slug),
    ogImage: post.coverImage,
    keywords: post.tags.join(', '),
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt || post.publishedAt,
    author: post.author.name,
    section: post.category.name,
    tags: post.tags
  }
}