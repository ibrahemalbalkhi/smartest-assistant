'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/utils'
import { Paragraph, Quote } from './Typography'
import { TestimonialCard } from './Card'
import { Testimonial } from '@/types'

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoplay?: boolean
  autoplayInterval?: number
  showDots?: boolean
  showArrows?: boolean
  className?: string
}

export default function TestimonialCarousel({
  testimonials,
  autoplay = true,
  autoplayInterval = 5000,
  showDots = true,
  showArrows = true,
  className
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoplay)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      )
    }, autoplayInterval)

    return () => clearInterval(interval)
  }, [isPlaying, autoplayInterval, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex(prev => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  if (!currentTestimonial) return null

  return (
    <div 
      className={cn('relative', className)}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(autoplay)}
    >
      {/* Main Testimonial */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <TestimonialSlide testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && testimonials.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'w-3 h-3 rounded-full transition-colors duration-200',
                index === currentIndex
                  ? 'bg-primary-blue'
                  : 'bg-gray-300 hover:bg-gray-400'
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}

    </div>
  )
}

function TestimonialSlide({ testimonial }: { testimonial: Testimonial }) {
  const stars = Array(5).fill(0).map((_, i) => (
    <svg
      key={i}
      className={cn(
        'w-5 h-5',
        i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
      )}
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ))

  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200 text-center max-w-4xl mx-auto">
      {/* Rating */}
      <div className="flex justify-center gap-1 mb-6">
        {stars}
      </div>

      {/* Quote */}
      <Quote className="text-xl lg:text-2xl mb-8 border-none pl-0 text-center not-italic">
        "{testimonial.content}"
      </Quote>

      {/* Author */}
      <div className="flex items-center justify-center gap-4">
        {testimonial.image && (
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={64}
            height={64}
            className="rounded-full"
          />
        )}
        <div className="text-left">
          <div className="font-semibold text-gray-900 text-lg">
            {testimonial.name}
          </div>
          <div className="text-gray-600">
            {testimonial.role} at {testimonial.company}
          </div>
          {testimonial.location && (
            <div className="text-sm text-gray-500">
              {testimonial.location}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Grid layout for multiple testimonials
interface TestimonialGridProps {
  testimonials: Testimonial[]
  columns?: 1 | 2 | 3
  className?: string
}

export function TestimonialGrid({ 
  testimonials, 
  columns = 3,
  className 
}: TestimonialGridProps) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  }

  return (
    <div className={cn(
      'grid gap-6',
      gridClasses[columns],
      className
    )}>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  )
}

// Compact testimonial list
interface TestimonialListProps {
  testimonials: Testimonial[]
  showImages?: boolean
  className?: string
}

export function TestimonialList({ 
  testimonials,
  showImages = true,
  className 
}: TestimonialListProps) {
  return (
    <div className={cn('space-y-6', className)}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
          {showImages && testimonial.image && (
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              className="rounded-full flex-shrink-0"
            />
          )}
          <div className="flex-1">
            <Paragraph className="mb-2 italic">
              "{testimonial.content}"
            </Paragraph>
            <div className="text-sm">
              <span className="font-semibold">{testimonial.name}</span>
              <span className="text-gray-500"> — {testimonial.role} at {testimonial.company}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}