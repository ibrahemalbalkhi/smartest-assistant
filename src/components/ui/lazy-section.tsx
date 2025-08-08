'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'

interface LazySectionProps {
  children: ReactNode
  className?: string
  fallback?: ReactNode
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

// Lazy load content sections for better initial page load performance
export function LazySection({
  children,
  className = '',
  fallback = null,
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          
          if (triggerOnce) {
            setHasTriggered(true)
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  return (
    <div ref={ref} className={className}>
      {(isVisible || hasTriggered) ? children : fallback}
    </div>
  )
}

// Lazy load images with intersection observer
interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  placeholderSrc?: string
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  placeholderSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0U1RTdFQiIvPgo8L3N2Zz4K'
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '50px' }
    )

    const currentRef = imgRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  if (hasError) {
    return (
      <div className={`bg-gray-100 flex items-center justify-center ${className}`}>
        <span className="text-gray-400 text-sm">Image unavailable</span>
      </div>
    )
  }

  return (
    <div className="relative">
      <img
        ref={imgRef}
        src={isInView ? src : placeholderSrc}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        loading="lazy"
        decoding="async"
      />
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}

// Lazy load components with dynamic imports
interface LazyComponentProps {
  importFunc: () => Promise<{ default: React.ComponentType<any> }>
  fallback?: ReactNode
  props?: any
}

export function LazyComponent({ importFunc, fallback = null, props = {} }: LazyComponentProps) {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !Component && !isLoading) {
          setIsLoading(true)
          importFunc()
            .then((module) => {
              setComponent(() => module.default)
              setIsLoading(false)
            })
            .catch((error) => {
              console.error('Failed to lazy load component:', error)
              setIsLoading(false)
            })
          observer.disconnect()
        }
      },
      { rootMargin: '100px' }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [importFunc, Component, isLoading])

  return (
    <div ref={ref}>
      {Component ? (
        <Component {...props} />
      ) : (
        fallback || <div className="w-full h-32 bg-gray-100 animate-pulse rounded-lg" />
      )}
    </div>
  )
}