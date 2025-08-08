'use client'

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react'
import { Loader2 } from '@/components/ui/Icons'

interface MobileButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  fullWidth?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

// Mobile-optimized button with minimum 48x48px touch targets
export const MobileButton = forwardRef<HTMLButtonElement, MobileButtonProps>(
  ({
    children,
    variant = 'primary',
    size = 'md',
    loading = false,
    fullWidth = false,
    icon,
    iconPosition = 'left',
    className = '',
    disabled,
    ...props
  }, ref) => {
    // Ensure minimum 48x48 touch target
    const sizeClasses = {
      sm: 'min-h-[48px] px-4 py-3 text-sm',
      md: 'min-h-[52px] px-6 py-4 text-base',
      lg: 'min-h-[56px] px-8 py-5 text-lg',
      xl: 'min-h-[60px] px-10 py-6 text-xl'
    }

    const variantClasses = {
      primary: 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-sm',
      secondary: 'bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-white shadow-sm',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100',
      ghost: 'text-gray-700 hover:bg-gray-100 active:bg-gray-200',
      danger: 'bg-red-600 hover:bg-red-700 active:bg-red-800 text-white shadow-sm'
    }

    const baseClasses = `
      relative inline-flex items-center justify-center
      font-semibold rounded-lg
      transition-all duration-200 ease-in-out
      focus:outline-none focus:ring-4 focus:ring-blue-200
      active:transform active:scale-95
      disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
      ${fullWidth ? 'w-full' : ''}
    `

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <Loader2 className="w-5 h-5 animate-spin mr-2" />
        )}
        
        {!loading && icon && iconPosition === 'left' && (
          <span className="mr-2 flex-shrink-0">{icon}</span>
        )}
        
        <span className="truncate">{children}</span>
        
        {!loading && icon && iconPosition === 'right' && (
          <span className="ml-2 flex-shrink-0">{icon}</span>
        )}
      </button>
    )
  }
)

MobileButton.displayName = 'MobileButton'

// Floating Action Button for mobile
export function MobileFAB({
  children,
  onClick,
  className = '',
  ...props
}: {
  children: ReactNode
  onClick?: () => void
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      onClick={onClick}
      className={`
        fixed bottom-6 right-6 z-50
        w-16 h-16 min-h-[64px] min-w-[64px]
        bg-blue-600 hover:bg-blue-700 active:bg-blue-800
        text-white rounded-full shadow-lg hover:shadow-xl
        transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-4 focus:ring-blue-200
        active:transform active:scale-95
        flex items-center justify-center
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

// Mobile-optimized icon button
export function MobileIconButton({
  children,
  size = 'md',
  variant = 'ghost',
  className = '',
  ...props
}: {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  variant?: 'ghost' | 'outline' | 'solid'
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const sizeClasses = {
    sm: 'w-10 h-10 min-w-[48px] min-h-[48px]',
    md: 'w-12 h-12 min-w-[48px] min-h-[48px]',
    lg: 'w-14 h-14 min-w-[56px] min-h-[56px]'
  }

  const variantClasses = {
    ghost: 'hover:bg-gray-100 active:bg-gray-200 text-gray-600',
    outline: 'border-2 border-gray-300 hover:border-gray-400 text-gray-600',
    solid: 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700'
  }

  return (
    <button
      className={`
        inline-flex items-center justify-center
        rounded-lg transition-all duration-200
        focus:outline-none focus:ring-4 focus:ring-blue-200
        active:transform active:scale-95
        ${sizeClasses[size]} ${variantClasses[variant]} ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

// Click-to-call button
export function ClickToCallButton({
  phoneNumber,
  children,
  className = '',
  size = 'md'
}: {
  phoneNumber: string
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const formatPhoneNumber = (phone: string) => {
    return phone.replace(/[^\d+]/g, '')
  }

  return (
    <a
      href={`tel:${formatPhoneNumber(phoneNumber)}`}
      className={`
        inline-flex items-center justify-center
        min-h-[48px] px-4 py-3
        bg-green-600 hover:bg-green-700 active:bg-green-800
        text-white font-semibold rounded-lg
        transition-all duration-200
        focus:outline-none focus:ring-4 focus:ring-green-200
        active:transform active:scale-95
        ${size === 'lg' ? 'min-h-[56px] px-6 py-4 text-lg' : ''}
        ${size === 'sm' ? 'min-h-[44px] px-3 py-2 text-sm' : ''}
        ${className}
      `}
    >
      {children}
    </a>
  )
}

// Mobile-specific form button
export function MobileFormButton({
  children,
  type = 'button',
  loading = false,
  className = '',
  ...props
}: {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={`
        w-full min-h-[52px] px-6 py-4
        bg-blue-600 hover:bg-blue-700 active:bg-blue-800
        text-white font-semibold text-base rounded-lg
        transition-all duration-200
        focus:outline-none focus:ring-4 focus:ring-blue-200
        active:transform active:scale-[0.98]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        flex items-center justify-center space-x-2
        ${className}
      `}
      disabled={loading}
      {...props}
    >
      {loading && <Loader2 className="w-5 h-5 animate-spin" />}
      <span>{children}</span>
    </button>
  )
}