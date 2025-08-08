import { ReactNode } from 'react'
import { cn } from '@/utils'

interface SpinnerProps {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  className?: string
}

export function Spinner({ size = 'base', className }: SpinnerProps) {
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    base: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  return (
    <svg
      className={cn(
        'animate-spin text-primary-blue',
        sizes[size],
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

interface LoadingProps {
  text?: string
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  variant?: 'inline' | 'overlay' | 'page'
  className?: string
}

export default function Loading({
  text = 'Loading...',
  size = 'base',
  variant = 'inline',
  className
}: LoadingProps) {
  if (variant === 'overlay') {
    return (
      <div className={cn(
        'fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50',
        className
      )}>
        <div className="text-center">
          <Spinner size={size} />
          {text && (
            <p className="mt-4 text-gray-600 font-medium">{text}</p>
          )}
        </div>
      </div>
    )
  }

  if (variant === 'page') {
    return (
      <div className={cn(
        'min-h-screen flex items-center justify-center',
        className
      )}>
        <div className="text-center">
          <Spinner size={size} />
          {text && (
            <p className="mt-4 text-gray-600 font-medium">{text}</p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Spinner size={size} />
      {text && (
        <span className="text-gray-600 font-medium">{text}</span>
      )}
    </div>
  )
}

// Skeleton components for loading states
interface SkeletonProps {
  className?: string
  width?: string | number
  height?: string | number
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}

export function Skeleton({ 
  className, 
  width, 
  height,
  rounded = 'md'
}: SkeletonProps) {
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  }

  return (
    <div
      className={cn(
        'animate-pulse bg-gray-200',
        roundedClasses[rounded],
        className
      )}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height
      }}
    />
  )
}

// Pre-built skeleton layouts
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn('p-6 border border-gray-200 rounded-xl', className)}>
      <Skeleton className="w-12 h-12 mb-4" rounded="lg" />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  )
}

export function SkeletonTestimonial({ className }: { className?: string }) {
  return (
    <div className={cn('p-6 border border-gray-200 rounded-xl', className)}>
      <div className="flex gap-1 mb-4">
        {Array(5).fill(0).map((_, i) => (
          <Skeleton key={i} className="w-5 h-5" rounded="sm" />
        ))}
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-4" />
      <div className="flex items-center gap-4">
        <Skeleton className="w-12 h-12" rounded="full" />
        <div className="flex-1">
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
    </div>
  )
}

export function SkeletonBlogPost({ className }: { className?: string }) {
  return (
    <div className={cn('border border-gray-200 rounded-xl overflow-hidden', className)}>
      <Skeleton className="h-48 w-full" rounded="none" />
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-20" />
        </div>
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-3/4 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  )
}

export function SkeletonTable({ 
  rows = 5, 
  columns = 4,
  className 
}: { 
  rows?: number
  columns?: number
  className?: string 
}) {
  return (
    <div className={cn('w-full', className)}>
      {/* Header */}
      <div className="flex gap-4 p-4 border-b border-gray-200">
        {Array(columns).fill(0).map((_, i) => (
          <Skeleton key={i} className="h-4 flex-1" />
        ))}
      </div>
      
      {/* Rows */}
      {Array(rows).fill(0).map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-4 p-4 border-b border-gray-100">
          {Array(columns).fill(0).map((_, colIndex) => (
            <Skeleton key={colIndex} className="h-4 flex-1" />
          ))}
        </div>
      ))}
    </div>
  )
}

// Loading states for specific components
interface LoadingStateProps {
  children: ReactNode
  isLoading: boolean
  skeleton?: ReactNode
  className?: string
}

export function LoadingState({ 
  children, 
  isLoading, 
  skeleton,
  className 
}: LoadingStateProps) {
  if (isLoading) {
    return (
      <div className={className}>
        {skeleton || <Loading />}
      </div>
    )
  }

  return <>{children}</>
}

// Pulse animation for loading content
export function PulseLoader({ className }: { className?: string }) {
  return (
    <div className={cn('flex space-x-2', className)}>
      <div className="w-2 h-2 bg-primary-blue rounded-full animate-pulse" />
      <div className="w-2 h-2 bg-primary-blue rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
      <div className="w-2 h-2 bg-primary-blue rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
    </div>
  )
}

// Skeleton grid for cards
export function SkeletonGrid({ 
  items = 6, 
  columns = 3,
  cardType = 'default',
  className 
}: { 
  items?: number
  columns?: 1 | 2 | 3 | 4
  cardType?: 'default' | 'testimonial' | 'blog'
  className?: string 
}) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  const SkeletonComponent = {
    default: SkeletonCard,
    testimonial: SkeletonTestimonial,
    blog: SkeletonBlogPost
  }[cardType]

  return (
    <div className={cn(
      'grid gap-6',
      gridClasses[columns],
      className
    )}>
      {Array(items).fill(0).map((_, i) => (
        <SkeletonComponent key={i} />
      ))}
    </div>
  )
}