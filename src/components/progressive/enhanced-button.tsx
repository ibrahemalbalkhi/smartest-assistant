'use client'

import { Button } from '@/components/ui'
import { useState, ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  fullWidth?: boolean
  children: ReactNode
  as?: 'button' | 'link'
  href?: string
  loading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

interface EnhancedButtonProps extends ButtonProps {
  href?: string
  enhancedAction?: () => void | Promise<void>
  loadingText?: string
  fallbackHref?: string
}

// Progressive Enhancement Button that works with and without JS
export function EnhancedButton({
  href,
  enhancedAction,
  loadingText = 'Loading...',
  fallbackHref,
  children,
  onClick,
  disabled,
  ...props
}: EnhancedButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (enhancedAction && !disabled) {
      e.preventDefault()
      setIsLoading(true)
      
      try {
        await enhancedAction()
      } catch (error) {
        console.error('Enhanced action failed:', error)
        // Fallback to regular navigation if available
        if (fallbackHref) {
          window.location.href = fallbackHref
        }
      } finally {
        setIsLoading(false)
      }
    }
    
    if (onClick) {
      onClick(e)
    }
  }

  // If href is provided and no enhanced action, render as link
  if (href && !enhancedAction) {
    return (
      <a href={href} className="inline-block">
        <Button disabled={disabled || isLoading} {...props}>
          {isLoading ? loadingText : children}
        </Button>
      </a>
    )
  }

  return (
    <Button
      onClick={handleClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? loadingText : children}
    </Button>
  )
}

// Enhanced form that works without JavaScript
interface EnhancedFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  enhancedSubmit?: (formData: FormData) => void | Promise<void>
  fallbackAction?: string
  children: React.ReactNode
}

export function EnhancedForm({
  enhancedSubmit,
  fallbackAction,
  onSubmit,
  children,
  ...props
}: EnhancedFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (enhancedSubmit) {
      e.preventDefault()
      setIsSubmitting(true)
      
      const formData = new FormData(e.currentTarget)
      
      try {
        await enhancedSubmit(formData)
      } catch (error) {
        console.error('Enhanced form submission failed:', error)
        // Fallback to regular form submission
        if (fallbackAction) {
          e.currentTarget.action = fallbackAction
          e.currentTarget.submit()
        }
      } finally {
        setIsSubmitting(false)
      }
    }

    if (onSubmit) {
      onSubmit(e)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      action={fallbackAction}
      method="POST"
      {...props}
    >
      {children}
      {isSubmitting && (
        <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </form>
  )
}

// Enhanced navigation that supports both client-side and server-side routing
interface EnhancedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  prefetch?: boolean
  onClick?: () => void
}

export function EnhancedLink({ 
  href, 
  children, 
  className = '', 
  prefetch = false,
  onClick 
}: EnhancedLinkProps) {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
    
    // Add client-side navigation enhancement if available
    if (typeof window !== 'undefined' && window.history && 'pushState' in window.history) {
      // Could integrate with Next.js router here
      // For now, let the default navigation happen
    }
  }

  return (
    <a 
      href={href}
      className={className}
      onClick={handleClick}
      {...(prefetch && { rel: 'prefetch' })}
    >
      {children}
    </a>
  )
}