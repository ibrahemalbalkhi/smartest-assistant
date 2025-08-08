import { ReactNode } from 'react'
import { cn } from '@/utils'
import Container from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'gray' | 'primary' | 'accent' | 'gradient'
  spacing?: 'sm' | 'base' | 'lg' | 'xl'
  container?: boolean
  fullWidth?: boolean
  as?: 'section' | 'div' | 'article' | 'aside'
}

export default function Section({
  children,
  className = '',
  background = 'white',
  spacing = 'base',
  container = true,
  fullWidth = false,
  as: Component = 'section'
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-blue text-white',
    accent: 'bg-accent-amber text-white',
    gradient: 'bg-gradient-to-b from-gray-50 to-white'
  }
  
  const spacings = {
    sm: 'py-8 lg:py-12',
    base: 'py-12 lg:py-20',
    lg: 'py-16 lg:py-24',
    xl: 'py-20 lg:py-32'
  }
  
  const sectionClasses = cn(
    backgrounds[background],
    spacings[spacing],
    fullWidth && 'w-full',
    className
  )
  
  if (!container) {
    return (
      <Component className={sectionClasses}>
        {children}
      </Component>
    )
  }
  
  return (
    <Component className={sectionClasses}>
      <Container>
        {children}
      </Container>
    </Component>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
  theme?: 'light' | 'dark'
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className = '',
  theme = 'light'
}: SectionHeaderProps) {
  const isDark = theme === 'dark'
  
  return (
    <div className={cn(
      'mb-12',
      centered && 'text-center',
      className
    )}>
      {subtitle && (
        <p className={cn(
          'text-sm font-semibold uppercase tracking-wider mb-2',
          isDark ? 'text-blue-200' : 'text-primary-blue'
        )}>
          {subtitle}
        </p>
      )}
      <h2 className={cn(
        'text-3xl lg:text-4xl font-bold mb-4',
        isDark ? 'text-white' : 'text-gray-900'
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          'text-xl leading-relaxed',
          isDark ? 'text-blue-100' : 'text-gray-600',
          centered && 'max-w-3xl mx-auto'
        )}>
          {description}
        </p>
      )}
    </div>
  )
}