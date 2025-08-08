'use client'

import Link from 'next/link'
import { blogCategories } from '@/lib/blog'
import { Tag } from 'lucide-react'

interface BlogCategoriesProps {
  selectedCategory: string
}

export function BlogCategories({ selectedCategory }: BlogCategoriesProps) {
  const getCategoryColorClasses = (color: string, isSelected: boolean) => {
    const colorMap = {
      blue: isSelected ? 'bg-blue-100 text-blue-800 border-blue-200' : 'bg-blue-50 text-blue-700 hover:bg-blue-100',
      green: isSelected ? 'bg-green-100 text-green-800 border-green-200' : 'bg-green-50 text-green-700 hover:bg-green-100',
      purple: isSelected ? 'bg-purple-100 text-purple-800 border-purple-200' : 'bg-purple-50 text-purple-700 hover:bg-purple-100',
      amber: isSelected ? 'bg-amber-100 text-amber-800 border-amber-200' : 'bg-amber-50 text-amber-700 hover:bg-amber-100',
      indigo: isSelected ? 'bg-indigo-100 text-indigo-800 border-indigo-200' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
      red: isSelected ? 'bg-red-100 text-red-800 border-red-200' : 'bg-red-50 text-red-700 hover:bg-red-100'
    }
    
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-50 text-gray-700 hover:bg-gray-100'
  }

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center mb-4">
        <Tag className="h-5 w-5 text-gray-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
      </div>
      
      <div className="space-y-2">
        {/* All Categories */}
        <Link
          href="/resources/blog"
          className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
            selectedCategory === 'all'
              ? 'bg-gray-100 text-gray-900 border border-gray-200'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">All Categories</span>
            <span className={`text-sm px-2 py-1 rounded-full ${
              selectedCategory === 'all' 
                ? 'bg-gray-200 text-gray-700' 
                : 'bg-gray-100 text-gray-600'
            }`}>
              {blogCategories.reduce((total, cat) => total + (cat.count || 0), 0)}
            </span>
          </div>
        </Link>

        {/* Individual Categories */}
        {blogCategories.map((category) => {
          const isSelected = selectedCategory === category.slug
          const colorClasses = getCategoryColorClasses(category.color, isSelected)
          
          return (
            <Link
              key={category.id}
              href={`/resources/blog?category=${category.slug}`}
              className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
                isSelected ? `border ${colorClasses}` : colorClasses
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{category.name}</div>
                  <div className="text-xs mt-1 opacity-75">
                    {category.description}
                  </div>
                </div>
                <span className={`text-sm px-2 py-1 rounded-full ml-2 flex-shrink-0 ${
                  isSelected 
                    ? 'bg-white/50' 
                    : 'bg-white/80'
                }`}>
                  {category.count || 0}
                </span>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Quick Topics */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">
          Popular Topics
        </h4>
        
        <div className="flex flex-wrap gap-2">
          {[
            'Delegation',
            'Productivity',
            'Hiring',
            'ROI',
            'Email Management',
            'Social Media',
            'Startups',
            'Tools',
            'Case Studies'
          ].map((topic) => (
            <span
              key={topic}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer transition-colors duration-200"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">
          Blog Stats
        </h4>
        
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Total Posts:</span>
            <span className="font-medium text-gray-900">
              {blogCategories.reduce((total, cat) => total + (cat.count || 0), 0)}
            </span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Categories:</span>
            <span className="font-medium text-gray-900">{blogCategories.length}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Updated:</span>
            <span className="font-medium text-gray-900">Weekly</span>
          </div>
        </div>
      </div>
    </div>
  )
}