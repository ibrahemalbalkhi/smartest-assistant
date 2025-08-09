import React, { ReactNode, HTMLAttributes } from 'react'
import { cn } from '@/utils'

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export function H1({ children, className, ...props }: TypographyProps) {
  return (
    <h1 
      className={cn(
        'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900',
        className
      )} 
      {...props}
    >
      {children}
    </h1>
  )
}

export function H2({ children, className, ...props }: TypographyProps) {
  return (
    <h2 
      className={cn(
        'text-3xl md:text-4xl font-bold tracking-tight text-gray-900',
        className
      )} 
      {...props}
    >
      {children}
    </h2>
  )
}

export function H3({ children, className, ...props }: TypographyProps) {
  return (
    <h3 
      className={cn(
        'text-2xl md:text-3xl font-bold text-gray-900',
        className
      )} 
      {...props}
    >
      {children}
    </h3>
  )
}

export function H4({ children, className, ...props }: TypographyProps) {
  return (
    <h4 
      className={cn(
        'text-xl md:text-2xl font-semibold text-gray-900',
        className
      )} 
      {...props}
    >
      {children}
    </h4>
  )
}

export function H5({ children, className, ...props }: TypographyProps) {
  return (
    <h5 
      className={cn(
        'text-lg md:text-xl font-semibold text-gray-900',
        className
      )} 
      {...props}
    >
      {children}
    </h5>
  )
}

export function H6({ children, className, ...props }: TypographyProps) {
  return (
    <h6 
      className={cn(
        'text-base md:text-lg font-semibold text-gray-900',
        className
      )} 
      {...props}
    >
      {children}
    </h6>
  )
}

export function Paragraph({ 
  children, 
  className, 
  size = 'base',
  ...props 
}: TypographyProps & { size?: 'sm' | 'base' | 'lg' }) {
  const sizeClasses = {
    sm: 'text-sm text-gray-600',
    base: 'text-base text-gray-600',
    lg: 'text-lg text-gray-600'
  }
  
  return (
    <p 
      className={cn(
        'leading-relaxed',
        sizeClasses[size],
        className
      )} 
      {...props}
    >
      {children}
    </p>
  )
}

export function Caption({ children, className, ...props }: TypographyProps) {
  return (
    <span 
      className={cn(
        'text-sm text-gray-500',
        className
      )} 
      {...props}
    >
      {children}
    </span>
  )
}

export function Lead({ children, className, ...props }: TypographyProps) {
  return (
    <p 
      className={cn(
        'text-xl md:text-2xl text-gray-600 leading-relaxed',
        className
      )} 
      {...props}
    >
      {children}
    </p>
  )
}

export function Quote({ 
  children, 
  className, 
  cite,
  ...props 
}: TypographyProps & { cite?: string }) {
  return (
    <blockquote 
      className={cn(
        'border-l-4 border-primary-blue pl-6 py-2 italic text-gray-700',
        className
      )} 
      {...props}
    >
      <p className="mb-2">{children}</p>
      {cite && (
        <cite className="text-sm text-gray-500 not-italic">— {cite}</cite>
      )}
    </blockquote>
  )
}

export function Code({ children, className, ...props }: TypographyProps) {
  return (
    <code 
      className={cn(
        'bg-gray-100 text-sm px-1.5 py-0.5 rounded font-mono text-gray-800',
        className
      )} 
      {...props}
    >
      {children}
    </code>
  )
}