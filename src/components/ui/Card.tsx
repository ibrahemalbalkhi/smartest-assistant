import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/utils'
import { H3, H4, Paragraph, Caption } from './Typography'
import Button from './Button'
import { Service, Testimonial, BlogPost } from '@/types'

interface BaseCardProps {
  className?: string
  children?: ReactNode
  hover?: boolean
}

export function Card({ className, children, hover = true }: BaseCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-gray-200 overflow-hidden',
        hover && 'transition-all duration-300 hover:shadow-lg hover:border-gray-300',
        className
      )}
    >
      {children}
    </div>
  )
}

interface ServiceCardProps {
  service: Service
  featured?: boolean
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <Link href={`/services/${service.slug}`} className="block h-full">
      <Card className={cn(
        'h-full p-8',
        featured && 'border-2 border-primary-blue relative'
      )}>
        {featured && (
          <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        )}
        
        {service.icon && (
          <div className="text-4xl mb-4">{service.icon}</div>
        )}
        
        <H4 className="mb-3 group-hover:text-primary-blue transition-colors">
          {service.name}
        </H4>
        
        <Paragraph className="mb-4">
          {service.description}
        </Paragraph>
        
        <div className="mt-auto">
          <span className="text-primary-blue font-semibold hover:underline inline-flex items-center gap-2">
            Learn more
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Card>
    </Link>
  )
}

interface TestimonialCardProps {
  testimonial: Testimonial
  featured?: boolean
}

export function TestimonialCard({ testimonial, featured = false }: TestimonialCardProps) {
  const stars = Array(5).fill(0).map((_, i) => (
    <svg
      key={i}
      className={cn(
        'w-5 h-5',
        i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
      )}
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ))

  return (
    <Card className={cn(
      'p-6',
      featured && 'border-2 border-primary-blue'
    )}>
      <div className="flex gap-1 mb-4">
        {stars}
      </div>
      
      <blockquote className="mb-6">
        <p className="text-gray-700 italic">
          "{testimonial.content}"
        </p>
      </blockquote>
      
      <div className="flex items-center gap-4">
        {testimonial.image && (
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
            className="rounded-full"
          />
        )}
        <div>
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-gray-600">
            {testimonial.role} at {testimonial.company}
          </div>
        </div>
      </div>
    </Card>
  )
}

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link href={`/resources/blog/${post.slug}`} className="block h-full">
      <Card className="h-full overflow-hidden group">
        {post.featuredImage && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
          
          <H4 className="mb-3 group-hover:text-primary-blue transition-colors">
            {post.title}
          </H4>
          
          <Paragraph className="mb-4">
            {post.excerpt}
          </Paragraph>
          
          <div className="flex items-center justify-between">
            <Caption>
              {new Date(post.publishedAt).toLocaleDateString()}
            </Caption>
            
            <span className="text-primary-blue font-semibold hover:underline inline-flex items-center gap-2">
              Read more
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Card>
    </Link>
  )
}

interface StatCardProps {
  value: string | number
  label: string
  description?: string
  icon?: ReactNode
  variant?: 'light' | 'dark'
}

export function StatCard({ value, label, description, icon, variant = 'light' }: StatCardProps) {
  const isDark = variant === 'dark'
  
  return (
    <Card className={cn(
      'p-6 text-center',
      isDark && 'bg-white/10 backdrop-blur-sm border-white/20'
    )}>
      {icon && (
        <div className={cn(
          'mb-4 flex justify-center text-3xl',
          isDark ? 'text-blue-200' : 'text-primary-blue'
        )}>
          {icon}
        </div>
      )}
      <div className={cn(
        'text-4xl font-bold mb-2',
        isDark ? 'text-white' : 'text-gray-900'
      )}>
        {value}
      </div>
      <div className={cn(
        'text-lg font-semibold mb-1',
        isDark ? 'text-blue-100' : 'text-gray-700'
      )}>
        {label}
      </div>
      {description && (
        <Caption className={isDark ? 'text-blue-200' : 'text-gray-500'}>
          {description}
        </Caption>
      )}
    </Card>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  icon?: ReactNode
  link?: {
    href: string
    text: string
  }
}

export function FeatureCard({ title, description, icon, link }: FeatureCardProps) {
  return (
    <Card className="p-6">
      {icon && (
        <div className="text-primary-blue mb-4 text-3xl">
          {icon}
        </div>
      )}
      <H4 className="mb-3">{title}</H4>
      <Paragraph className="mb-4">{description}</Paragraph>
      {link && (
        <Link
          href={link.href}
          className="text-primary-blue font-semibold hover:underline inline-flex items-center gap-2"
        >
          {link.text}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </Card>
  )
}