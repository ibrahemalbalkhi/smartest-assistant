'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
  fill?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '(max-width: 480px) 95vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw',
  fill = false,
  quality = 85,
  placeholder = 'blur',
  blurDataURL
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Mobile-optimized quality settings
  const mobileQuality = typeof window !== 'undefined' && window.innerWidth < 768 ? 75 : quality

  // Generate blur placeholder if not provided
  const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='

  if (hasError) {
    return (
      <div 
        className={`bg-gray-100 flex items-center justify-center ${className}`}
        style={fill ? {} : { width, height }}
      >
        <span className="text-gray-400 text-sm">Image not available</span>
      </div>
    )
  }

  return (
    <div className={`relative ${fill ? 'h-full w-full' : ''}`}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        priority={priority}
        sizes={sizes}
        quality={mobileQuality}
        placeholder={placeholder}
        blurDataURL={blurDataURL || defaultBlurDataURL}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
        }}
      />
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center"
          style={fill ? {} : { width, height }}
        >
          <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}

// Helper function to generate SEO-optimized image paths
export function generateImagePath(type: 'service' | 'location' | 'industry' | 'blog' | 'general', identifier: string, descriptor?: string): string {
  const baseDescriptor = descriptor || 'virtual-assistant'
  
  switch (type) {
    case 'service':
      return `/images/${identifier}-${baseDescriptor}-smartest-assistant.webp`
    case 'location':
      return `/images/${identifier}-virtual-assistant-smartest-assistant.webp`
    case 'industry':
      return `/images/${identifier}-virtual-assistant-smartest-assistant.webp`
    case 'blog':
      return `/images/blog-${identifier}-smartest-assistant.webp`
    case 'general':
      return `/images/${identifier}-smartest-assistant.webp`
    default:
      return `/images/${identifier}-smartest-assistant.webp`
  }
}

// Helper function to generate SEO-optimized alt text
export function generateAltText(type: 'service' | 'location' | 'industry' | 'blog' | 'hero' | 'team' | 'testimonial', context: {
  serviceName?: string
  cityName?: string
  stateName?: string
  industryName?: string
  blogTitle?: string
  personName?: string
  companyName?: string
  description?: string
}): string {
  const { serviceName, cityName, stateName, industryName, blogTitle, personName, companyName, description } = context

  switch (type) {
    case 'service':
      return `Smart virtual assistant providing ${serviceName?.toLowerCase()} services efficiently - Smartest Assistant professional ${serviceName?.toLowerCase()} support`
    
    case 'location':
      return `Smartest Assistant team serving ${cityName} ${stateName} businesses with smart virtual assistant services - Local virtual assistant support`
    
    case 'industry':
      return `Virtual assistant specialized in ${industryName?.toLowerCase()} industry workflows and tools - Smartest Assistant ${industryName?.toLowerCase()} expertise`
    
    case 'blog':
      return `${blogTitle} - Expert insights and strategies from Smartest Assistant virtual assistant blog`
    
    case 'hero':
      return `Smart virtual assistant managing multiple executive tasks simultaneously using modern tools - Smartest Assistant strategic virtual assistant services`
    
    case 'team':
      return `Professional virtual assistant team collaborating on client projects - Smartest Assistant expert team delivering exceptional results`
    
    case 'testimonial':
      return `${personName} from ${companyName} testimonial about exceptional virtual assistant results - Smartest Assistant client success story`
    
    default:
      return description ? `${description} - Smartest Assistant` : 'Smartest Assistant professional virtual assistant services'
  }
}

// Pre-configured image sizes for different use cases - Mobile optimized
export const imageSizes = {
  hero: { 
    width: 1200, 
    height: 600, 
    sizes: '(max-width: 480px) 95vw, (max-width: 768px) 90vw, 100vw',
    quality: { mobile: 75, desktop: 90 }
  },
  card: { 
    width: 400, 
    height: 300, 
    sizes: '(max-width: 480px) 95vw, (max-width: 768px) 45vw, (max-width: 1200px) 30vw, 25vw',
    quality: { mobile: 70, desktop: 85 }
  },
  thumbnail: { 
    width: 150, 
    height: 150, 
    sizes: '(max-width: 480px) 120px, 150px',
    quality: { mobile: 70, desktop: 80 }
  },
  avatar: { 
    width: 80, 
    height: 80, 
    sizes: '(max-width: 480px) 60px, 80px',
    quality: { mobile: 75, desktop: 85 }
  },
  testimonial: { 
    width: 100, 
    height: 100, 
    sizes: '(max-width: 480px) 80px, 100px',
    quality: { mobile: 75, desktop: 85 }
  },
  blog: { 
    width: 800, 
    height: 400, 
    sizes: '(max-width: 480px) 95vw, (max-width: 768px) 90vw, (max-width: 1200px) 70vw, 800px',
    quality: { mobile: 70, desktop: 85 }
  },
  service: { 
    width: 600, 
    height: 400, 
    sizes: '(max-width: 480px) 95vw, (max-width: 768px) 90vw, (max-width: 1200px) 45vw, 600px',
    quality: { mobile: 70, desktop: 85 }
  },
  location: { 
    width: 600, 
    height: 300, 
    sizes: '(max-width: 480px) 95vw, (max-width: 768px) 90vw, (max-width: 1200px) 45vw, 600px',
    quality: { mobile: 70, desktop: 85 }
  }
}