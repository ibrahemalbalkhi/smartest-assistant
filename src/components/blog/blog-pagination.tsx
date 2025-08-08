'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  category: string
}

export function BlogPagination({ 
  currentPage, 
  totalPages, 
  category 
}: BlogPaginationProps) {
  const generatePageUrl = (page: number) => {
    const baseUrl = '/resources/blog'
    const categoryParam = category !== 'all' ? `?category=${category}&page=${page}` : `?page=${page}`
    return `${baseUrl}${categoryParam}`
  }

  const getVisiblePages = () => {
    const delta = 2 // Number of pages to show on each side of current page
    const range = []
    const rangeWithDots = []

    // Calculate the range of pages to show
    const startPage = Math.max(2, currentPage - delta)
    const endPage = Math.min(totalPages - 1, currentPage + delta)

    // Always include first page
    range.push(1)

    // Add pages around current page
    for (let i = startPage; i <= endPage; i++) {
      range.push(i)
    }

    // Always include last page if there's more than one page
    if (totalPages > 1) {
      range.push(totalPages)
    }

    // Remove duplicates and sort
    const uniqueRange = [...new Set(range)].sort((a, b) => a - b)

    // Add dots between non-consecutive pages
    for (let i = 0; i < uniqueRange.length; i++) {
      if (i === 0) {
        rangeWithDots.push(uniqueRange[i])
      } else if (uniqueRange[i] - uniqueRange[i - 1] === 1) {
        rangeWithDots.push(uniqueRange[i])
      } else {
        rangeWithDots.push('...')
        rangeWithDots.push(uniqueRange[i])
      }
    }

    return rangeWithDots
  }

  if (totalPages <= 1) {
    return null
  }

  const visiblePages = getVisiblePages()

  return (
    <nav className="flex items-center justify-center space-x-2">
      {/* Previous Page */}
      {currentPage > 1 ? (
        <Link
          href={generatePageUrl(currentPage - 1)}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors duration-200"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Link>
      ) : (
        <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </span>
      )}

      {/* Page Numbers */}
      <div className="hidden sm:flex items-center space-x-1">
        {visiblePages.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`dots-${index}`}
                className="px-4 py-2 text-sm font-medium text-gray-500"
              >
                ...
              </span>
            )
          }

          const pageNum = page as number
          const isCurrentPage = pageNum === currentPage

          return (
            <Link
              key={pageNum}
              href={generatePageUrl(pageNum)}
              className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isCurrentPage
                  ? 'bg-blue-600 text-white border border-blue-600'
                  : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700'
              }`}
            >
              {pageNum}
            </Link>
          )
        })}
      </div>

      {/* Mobile Page Info */}
      <div className="sm:hidden">
        <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg">
          {currentPage} of {totalPages}
        </span>
      </div>

      {/* Next Page */}
      {currentPage < totalPages ? (
        <Link
          href={generatePageUrl(currentPage + 1)}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors duration-200"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      ) : (
        <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed">
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </span>
      )}
    </nav>
  )
}

// Simple pagination component for mobile
export function SimplePagination({ 
  currentPage, 
  totalPages, 
  category 
}: BlogPaginationProps) {
  const generatePageUrl = (page: number) => {
    const baseUrl = '/resources/blog'
    const categoryParam = category !== 'all' ? `?category=${category}&page=${page}` : `?page=${page}`
    return `${baseUrl}${categoryParam}`
  }

  if (totalPages <= 1) {
    return null
  }

  return (
    <div className="flex items-center justify-between">
      {/* Previous */}
      {currentPage > 1 ? (
        <Link
          href={generatePageUrl(currentPage - 1)}
          className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Link>
      ) : (
        <div></div>
      )}

      {/* Page Info */}
      <span className="text-sm text-gray-500">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={generatePageUrl(currentPage + 1)}
          className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  )
}