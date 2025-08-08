import { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { CTAProps } from '@/types'
import { cn } from '@/utils'

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

export default function Button({ 
  variant = 'primary', 
  size = 'base', 
  fullWidth = false,
  children,
  as = 'button',
  href,
  className = '',
  disabled,
  loading,
  leftIcon,
  rightIcon,
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-accent-amber hover:bg-accent-hover text-white focus:ring-accent-amber shadow-sm hover:shadow-md',
    secondary: 'bg-primary-blue hover:bg-primary-dark text-white focus:ring-primary-blue shadow-sm hover:shadow-md',
    outline: 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white focus:ring-primary-blue',
    ghost: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-600 shadow-sm hover:shadow-md'
  }
  
  const sizes = {
    xs: 'min-h-[36px] px-3 py-1.5 text-xs gap-1.5',
    sm: 'min-h-[44px] px-4 py-2 text-sm gap-2',
    base: 'min-h-[48px] px-6 py-3 text-base gap-2',
    lg: 'min-h-[52px] px-8 py-4 text-lg gap-3',
    xl: 'min-h-[56px] px-10 py-5 text-xl gap-3'
  }
  
  const isDisabled = disabled || loading
  
  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    loading && 'cursor-wait',
    className
  )
  
  const content = (
    <>
      {loading ? (
        <svg 
          className="animate-spin h-4 w-4" 
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
      ) : leftIcon}
      <span>{children}</span>
      {!loading && rightIcon}
    </>
  )
  
  if (as === 'link' && href && !isDisabled) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }
  
  return (
    <button className={classes} disabled={isDisabled} {...props}>
      {content}
    </button>
  )
}

export function CTAButton({ text, href, variant = 'primary', size = 'base', fullWidth, icon, onClick }: CTAProps) {
  if (href) {
    return (
      <Button as="link" href={href} variant={variant} size={size} fullWidth={fullWidth}>
        {text}
        {icon && <span className="ml-2">{icon}</span>}
      </Button>
    )
  }
  
  return (
    <Button variant={variant} size={size} fullWidth={fullWidth} onClick={onClick}>
      {text}
      {icon && <span className="ml-2">{icon}</span>}
    </Button>
  )
}