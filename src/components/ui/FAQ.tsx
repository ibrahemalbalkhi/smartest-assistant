'use client'

import { useState } from 'react'
import { cn } from '@/utils'
import { H4, Paragraph } from './Typography'
import { FAQ } from '@/types'

interface FAQItemProps {
  faq: FAQ
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <H4 className="pr-4">{faq.question}</H4>
        <svg
          className={cn(
            'w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0',
            isOpen && 'rotate-180'
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      
      <div
        className={cn(
          'transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
        id={`faq-answer-${faq.question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <div className="px-6 pb-6 pt-0">
          <Paragraph className="text-gray-700">
            {faq.answer}
          </Paragraph>
        </div>
      </div>
    </div>
  )
}

interface FAQAccordionProps {
  faqs: FAQ[]
  allowMultiple?: boolean
  defaultOpen?: number
  className?: string
}

export default function FAQAccordion({ 
  faqs, 
  allowMultiple = false, 
  defaultOpen,
  className 
}: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(
    defaultOpen !== undefined ? new Set([defaultOpen]) : new Set()
  )

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      
      if (allowMultiple) {
        if (newSet.has(index)) {
          newSet.delete(index)
        } else {
          newSet.add(index)
        }
      } else {
        if (newSet.has(index)) {
          newSet.clear()
        } else {
          newSet.clear()
          newSet.add(index)
        }
      }
      
      return newSet
    })
  }

  return (
    <div className={cn('space-y-4', className)}>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          isOpen={openItems.has(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  )
}

interface FAQSectionProps {
  title?: string
  description?: string
  faqs: FAQ[]
  categories?: string[]
  allowMultiple?: boolean
  className?: string
}

export function FAQSection({
  title = "Frequently Asked Questions",
  description,
  faqs,
  categories,
  allowMultiple = true,
  className
}: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  
  const filteredFAQs = activeCategory 
    ? faqs.filter(faq => faq.category === activeCategory)
    : faqs

  return (
    <div className={cn('max-w-4xl mx-auto', className)}>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
        {description && (
          <Paragraph size="lg" className="text-gray-600">
            {description}
          </Paragraph>
        )}
      </div>

      {/* Category Filter */}
      {categories && categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
              !activeCategory
                ? 'bg-primary-blue text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
          >
            All Questions
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
                activeCategory === category
                  ? 'bg-primary-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* FAQ Accordion */}
      <FAQAccordion 
        faqs={filteredFAQs} 
        allowMultiple={allowMultiple}
      />
    </div>
  )
}