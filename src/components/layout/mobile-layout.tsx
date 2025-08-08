'use client'

import { ReactNode, useEffect } from 'react'
import { useMobile, getSafeAreaInsets } from '@/lib/mobile-utils'

interface MobileLayoutProps {
  children: ReactNode
  className?: string
  enableSafeArea?: boolean
  preventOverscroll?: boolean
}

export function MobileLayout({ 
  children, 
  className = '',
  enableSafeArea = true,
  preventOverscroll = true
}: MobileLayoutProps) {
  const { isMobile, isTouch, screenSize } = useMobile()

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Apply mobile-specific viewport meta tag
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport && isMobile) {
      viewport.setAttribute(
        'content',
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
      )
    }

    // Prevent overscroll bounce on iOS
    if (preventOverscroll && isMobile) {
      document.body.style.overscrollBehavior = 'none'
    }

    // Add mobile-specific CSS custom properties
    if (enableSafeArea) {
      const safeAreaInsets = getSafeAreaInsets()
      const root = document.documentElement
      
      root.style.setProperty('--safe-area-top', `${safeAreaInsets.top}px`)
      root.style.setProperty('--safe-area-right', `${safeAreaInsets.right}px`)
      root.style.setProperty('--safe-area-bottom', `${safeAreaInsets.bottom}px`)
      root.style.setProperty('--safe-area-left', `${safeAreaInsets.left}px`)
    }

    return () => {
      if (preventOverscroll) {
        document.body.style.overscrollBehavior = ''
      }
    }
  }, [isMobile, enableSafeArea, preventOverscroll])

  const mobileClasses = `
    ${screenSize === 'mobile' ? 'mobile-layout' : ''}
    ${isTouch ? 'touch-device' : 'no-touch'}
    ${enableSafeArea ? 'safe-area-enabled' : ''}
  `

  return (
    <div className={`${mobileClasses} ${className}`}>
      {children}
      
      <style jsx global>{`
        .mobile-layout {
          /* Optimize for mobile performance */
          -webkit-overflow-scrolling: touch;
          overflow-scrolling: touch;
          -webkit-text-size-adjust: 100%;
          text-size-adjust: 100%;
        }

        .safe-area-enabled {
          /* Use safe area insets */
          padding-left: env(safe-area-inset-left);
          padding-right: env(safe-area-inset-right);
        }

        .touch-device {
          /* Optimize for touch interactions */
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }

        .touch-device input,
        .touch-device textarea,
        .touch-device [contenteditable] {
          -webkit-user-select: text;
          user-select: text;
        }

        @media (max-width: 768px) {
          /* Mobile-specific styles */
          .mobile-layout {
            font-size: 16px; /* Prevent zoom on iOS */
          }

          /* Improve touch targets */
          button, 
          a, 
          input[type="button"], 
          input[type="submit"], 
          input[type="reset"],
          .btn {
            min-height: 48px;
            min-width: 48px;
          }

          /* Better focus indicators for mobile */
          button:focus,
          input:focus,
          textarea:focus,
          select:focus,
          a:focus {
            outline: 3px solid #3B82F6;
            outline-offset: 2px;
          }

          /* Optimize scrollable areas */
          .scroll-container {
            -webkit-overflow-scrolling: touch;
            overflow-scrolling: touch;
          }
        }
      `}</style>
    </div>
  )
}

// Mobile-specific container component
interface MobileContainerProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  className?: string
}

export function MobileContainer({
  children,
  size = 'lg',
  padding = 'md',
  className = ''
}: MobileContainerProps) {
  const { screenSize } = useMobile()

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md', 
    lg: 'max-w-lg',
    full: 'max-w-full'
  }

  const paddingClasses = {
    none: 'px-0',
    sm: 'px-4 sm:px-6',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12'
  }

  const mobilePadding = screenSize === 'mobile' ? 'px-4' : paddingClasses[padding]

  return (
    <div className={`
      w-full mx-auto
      ${sizeClasses[size]}
      ${mobilePadding}
      ${className}
    `}>
      {children}
    </div>
  )
}

// Mobile-optimized section component
interface MobileSectionProps {
  children: ReactNode
  background?: 'white' | 'gray' | 'blue' | 'transparent'
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function MobileSection({
  children,
  background = 'transparent',
  spacing = 'lg',
  className = ''
}: MobileSectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-50',
    transparent: 'bg-transparent'
  }

  const spacingClasses = {
    none: 'py-0',
    sm: 'py-6 sm:py-8',
    md: 'py-8 sm:py-12',
    lg: 'py-12 sm:py-16',
    xl: 'py-16 sm:py-20'
  }

  return (
    <section className={`
      w-full
      ${backgroundClasses[background]}
      ${spacingClasses[spacing]}
      ${className}
    `}>
      <MobileContainer>
        {children}
      </MobileContainer>
    </section>
  )
}

// Mobile-optimized grid component
interface MobileGridProps {
  children: ReactNode
  cols?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

export function MobileGrid({
  children,
  cols = 1,
  gap = 'md',
  className = ''
}: MobileGridProps) {
  const { screenSize } = useMobile()

  // Responsive column classes - always single column on mobile
  const getColClasses = () => {
    if (screenSize === 'mobile') return 'grid-cols-1'
    
    const colMap = {
      1: 'sm:grid-cols-1',
      2: 'sm:grid-cols-1 md:grid-cols-2',
      3: 'sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    }
    
    return `grid-cols-1 ${colMap[cols]}`
  }

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8'
  }

  return (
    <div className={`
      grid
      ${getColClasses()}
      ${gapClasses[gap]}
      ${className}
    `}>
      {children}
    </div>
  )
}

// Mobile-optimized card component
interface MobileCardProps {
  children: ReactNode
  padding?: 'sm' | 'md' | 'lg'
  shadow?: 'none' | 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function MobileCard({
  children,
  padding = 'md',
  shadow = 'sm',
  rounded = 'lg',
  className = ''
}: MobileCardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  const shadowClasses = {
    none: 'shadow-none',
    sm: 'shadow-sm hover:shadow-md',
    md: 'shadow-md hover:shadow-lg',
    lg: 'shadow-lg hover:shadow-xl'
  }

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl'
  }

  return (
    <div className={`
      bg-white
      ${paddingClasses[padding]}
      ${shadowClasses[shadow]}
      ${roundedClasses[rounded]}
      transition-shadow duration-200
      ${className}
    `}>
      {children}
    </div>
  )
}

// Mobile-specific loading component
export function MobileLoading({ 
  text = "Loading...",
  size = 'md'
}: { 
  text?: string
  size?: 'sm' | 'md' | 'lg' 
}) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className={`
        ${sizeClasses[size]}
        border-4 border-gray-200 border-t-blue-600 
        rounded-full animate-spin
      `} />
      <p className="mt-4 text-gray-600 text-center">{text}</p>
    </div>
  )
}

// Mobile back button
interface MobileBackButtonProps {
  onClick?: () => void
  text?: string
  className?: string
}

export function MobileBackButton({ 
  onClick, 
  text = "Back",
  className = '' 
}: MobileBackButtonProps) {
  const handleBack = () => {
    if (onClick) {
      onClick()
    } else if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back()
    }
  }

  return (
    <button
      onClick={handleBack}
      className={`
        inline-flex items-center min-h-[48px] px-4 py-3
        text-blue-600 hover:text-blue-700 hover:bg-blue-50
        rounded-lg transition-all duration-200
        active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-200
        ${className}
      `}
    >
      <svg 
        className="w-5 h-5 mr-2" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M10 19l-7-7m0 0l7-7m-7 7h18" 
        />
      </svg>
      {text}
    </button>
  )
}