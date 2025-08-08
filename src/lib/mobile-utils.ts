// Mobile detection and optimization utilities

import { useEffect, useState } from 'react'

// Mobile device detection
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

// Screen size detection
export function getScreenSize(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop'
  
  const width = window.innerWidth
  
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

// Touch capability detection
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false
  
  return 'ontouchstart' in window || 
         navigator.maxTouchPoints > 0 || 
         (navigator as any).msMaxTouchPoints > 0
}

// Check if device supports hover
export function supportsHover(): boolean {
  if (typeof window === 'undefined') return true
  
  return window.matchMedia('(hover: hover)').matches
}

// Hook for responsive breakpoints
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg')
  
  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth
      
      if (width < 640) setBreakpoint('sm')
      else if (width < 768) setBreakpoint('md') 
      else if (width < 1024) setBreakpoint('lg')
      else setBreakpoint('xl')
    }
    
    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)
    
    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])
  
  return breakpoint
}

// Hook for mobile-specific behavior
export function useMobile() {
  const [isMobileDevice, setIsMobileDevice] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')
  
  useEffect(() => {
    setIsMobileDevice(isMobile())
    setIsTouch(isTouchDevice())
    setScreenSize(getScreenSize())
    
    const handleResize = () => {
      setScreenSize(getScreenSize())
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return {
    isMobile: isMobileDevice,
    isTouch,
    screenSize,
    isSmallScreen: screenSize === 'mobile',
    isMediumScreen: screenSize === 'tablet',
    isLargeScreen: screenSize === 'desktop'
  }
}

// Viewport height utilities for mobile browsers
export function getViewportHeight(): number {
  if (typeof window === 'undefined') return 0
  
  // Use visual viewport API if available (better for mobile browsers)
  if (window.visualViewport) {
    return window.visualViewport.height
  }
  
  return window.innerHeight
}

// Safe area insets for notched devices
export function getSafeAreaInsets() {
  if (typeof window === 'undefined') {
    return { top: 0, right: 0, bottom: 0, left: 0 }
  }
  
  const style = getComputedStyle(document.documentElement)
  
  return {
    top: parseInt(style.getPropertyValue('env(safe-area-inset-top)') || '0'),
    right: parseInt(style.getPropertyValue('env(safe-area-inset-right)') || '0'), 
    bottom: parseInt(style.getPropertyValue('env(safe-area-inset-bottom)') || '0'),
    left: parseInt(style.getPropertyValue('env(safe-area-inset-left)') || '0')
  }
}

// Performance helpers for mobile
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): T {
  let inThrottle: boolean
  return ((...args: any[]) => {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }) as T
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): T {
  let timeoutId: ReturnType<typeof setTimeout>
  return ((...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(this, args), delay)
  }) as T
}

// Touch-optimized scrolling utilities
export function enableMomentumScrolling(element: HTMLElement) {
  element.style.webkitOverflowScrolling = 'touch'
  element.style.overflowScrolling = 'touch'
}

export function preventOverscroll(element: HTMLElement) {
  let startY = 0
  
  element.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY
  })
  
  element.addEventListener('touchmove', (e) => {
    const currentY = e.touches[0].clientY
    const isAtTop = element.scrollTop === 0 && currentY > startY
    const isAtBottom = 
      element.scrollHeight - element.offsetHeight <= element.scrollTop &&
      currentY < startY
    
    if (isAtTop || isAtBottom) {
      e.preventDefault()
    }
  }, { passive: false })
}

// Network-aware loading
export function getConnectionSpeed(): 'slow' | 'fast' | 'unknown' {
  if (typeof window === 'undefined') return 'unknown'
  
  const connection = (navigator as any).connection || 
                    (navigator as any).mozConnection || 
                    (navigator as any).webkitConnection
  
  if (!connection) return 'unknown'
  
  // Effective connection type mapping
  const effectiveType = connection.effectiveType
  
  switch (effectiveType) {
    case 'slow-2g':
    case '2g':
      return 'slow'
    case '3g':
    case '4g':
    default:
      return 'fast'
  }
}

// Battery-aware optimizations
export function getBatteryInfo(): Promise<{
  level: number
  charging: boolean
  chargingTime: number
  dischargingTime: number
} | null> {
  if (typeof window === 'undefined' || !(navigator as any).getBattery) {
    return Promise.resolve(null)
  }
  
  return (navigator as any).getBattery().then((battery: any) => ({
    level: battery.level,
    charging: battery.charging,
    chargingTime: battery.chargingTime,
    dischargingTime: battery.dischargingTime
  }))
}

// Orientation utilities
export function getOrientation(): 'portrait' | 'landscape' {
  if (typeof window === 'undefined') return 'portrait'
  
  return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape'
}

export function useOrientation() {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait')
  
  useEffect(() => {
    const updateOrientation = () => {
      setOrientation(getOrientation())
    }
    
    updateOrientation()
    window.addEventListener('orientationchange', updateOrientation)
    window.addEventListener('resize', updateOrientation)
    
    return () => {
      window.removeEventListener('orientationchange', updateOrientation)
      window.removeEventListener('resize', updateOrientation)
    }
  }, [])
  
  return orientation
}

// Scroll utilities for mobile
export function scrollToElement(element: HTMLElement, offset: number = 0) {
  const elementTop = element.offsetTop - offset
  
  // Smooth scroll for modern browsers
  if (window.scrollTo) {
    window.scrollTo({
      top: elementTop,
      behavior: 'smooth'
    })
  } else {
    // Fallback for older browsers
    window.scrollTo(0, elementTop)
  }
}

// URL manipulation for mobile sharing
export function generateNativeShareData(data: {
  title: string
  text?: string
  url?: string
}) {
  return {
    title: data.title,
    text: data.text || '',
    url: data.url || window.location.href
  }
}

export async function shareNatively(data: {
  title: string
  text?: string
  url?: string
}): Promise<boolean> {
  if (typeof window === 'undefined' || !navigator.share) {
    return false
  }
  
  try {
    await navigator.share(generateNativeShareData(data))
    return true
  } catch (error) {
    console.error('Error sharing:', error)
    return false
  }
}

// Mobile-specific CSS class generators
export function getMobileClasses(
  baseClasses: string,
  mobileClasses: string,
  tabletClasses?: string
): string {
  return `${baseClasses} ${mobileClasses} ${tabletClasses || ''}`
}

// Touch gesture helpers
export interface TouchGestureHandlers {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  onTap?: () => void
  onDoubleTap?: () => void
  onLongPress?: () => void
}

export function addTouchGestures(
  element: HTMLElement,
  handlers: TouchGestureHandlers,
  options: {
    swipeThreshold?: number
    tapTimeout?: number
    doubleTapTimeout?: number
    longPressTimeout?: number
  } = {}
) {
  const {
    swipeThreshold = 50,
    tapTimeout = 200,
    doubleTapTimeout = 300,
    longPressTimeout = 500
  } = options
  
  let startX = 0, startY = 0
  let startTime = 0
  let lastTapTime = 0
  let longPressTimer: ReturnType<typeof setTimeout>
  
  const handleTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0]
    startX = touch.clientX
    startY = touch.clientY
    startTime = Date.now()
    
    // Start long press timer
    if (handlers.onLongPress) {
      longPressTimer = setTimeout(() => {
        handlers.onLongPress!()
      }, longPressTimeout)
    }
  }
  
  const handleTouchEnd = (e: TouchEvent) => {
    clearTimeout(longPressTimer)
    
    const touch = e.changedTouches[0]
    const endX = touch.clientX
    const endY = touch.clientY
    const endTime = Date.now()
    
    const deltaX = endX - startX
    const deltaY = endY - startY
    const deltaTime = endTime - startTime
    
    // Check for swipe gestures
    if (Math.abs(deltaX) > swipeThreshold || Math.abs(deltaY) > swipeThreshold) {
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (deltaX > 0 && handlers.onSwipeRight) {
          handlers.onSwipeRight()
        } else if (deltaX < 0 && handlers.onSwipeLeft) {
          handlers.onSwipeLeft()
        }
      } else {
        // Vertical swipe
        if (deltaY > 0 && handlers.onSwipeDown) {
          handlers.onSwipeDown()
        } else if (deltaY < 0 && handlers.onSwipeUp) {
          handlers.onSwipeUp()
        }
      }
      return
    }
    
    // Check for tap gestures
    if (deltaTime < tapTimeout && Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
      const currentTime = Date.now()
      
      // Check for double tap
      if (currentTime - lastTapTime < doubleTapTimeout && handlers.onDoubleTap) {
        handlers.onDoubleTap()
        lastTapTime = 0 // Reset to prevent triple tap
      } else if (handlers.onTap) {
        handlers.onTap()
        lastTapTime = currentTime
      }
    }
  }
  
  element.addEventListener('touchstart', handleTouchStart, { passive: true })
  element.addEventListener('touchend', handleTouchEnd, { passive: true })
  
  // Return cleanup function
  return () => {
    element.removeEventListener('touchstart', handleTouchStart)
    element.removeEventListener('touchend', handleTouchEnd)
    clearTimeout(longPressTimer)
  }
}