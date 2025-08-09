'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { mainNavigation, quickActions } from '@/lib/navigation'

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    setActiveDropdown(null)
  }

  const toggleDropdown = (href: string) => {
    setActiveDropdown(activeDropdown === href ? null : href)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <OptimizedImage
                src="/images/logo-smartest-assistant.webp"
                alt="Smartest Assistant - Smart Virtual Assistant Services"
                width={180}
                height={54}
                className="h-10 w-auto"
                priority={true}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <div
                    className={`absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transform transition-all duration-200 ${
                      activeDropdown === item.href
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-3 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                          child.featured ? 'border-b border-gray-100' : ''
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className={`font-medium text-gray-900 ${
                              child.featured ? 'text-blue-600' : ''
                            }`}>
                              {child.label}
                            </div>
                            {child.description && (
                              <div className="text-gray-500 mt-1 text-xs">
                                {child.description}
                              </div>
                            )}
                          </div>
                          {child.featured && (
                            <div className="ml-2 flex-shrink-0">
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                Popular
                              </span>
                            </div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+1-XXX-XXX-XXXX"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Call Now</span>
            </a>
            
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className={`inline-flex items-center px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                  action.primary
                    ? 'bg-amber-500 hover:bg-amber-400 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {action.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            ))}
          </div>

          {/* Mobile menu button - optimized for touch */}
          <div className="lg:hidden">
            <button
              type="button"
              className="
                w-12 h-12 min-w-[48px] min-h-[48px]
                flex items-center justify-center
                text-gray-700 hover:text-blue-600 hover:bg-gray-100
                rounded-lg transition-all duration-200
                active:scale-95 active:bg-gray-200
                focus:outline-none focus:ring-4 focus:ring-blue-200
              "
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Enhanced for touch */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-4 py-4 bg-white border-t border-gray-200 shadow-lg max-h-[80vh] overflow-y-auto">
            {mainNavigation.map((item) => (
              <div key={item.href} className="mb-2">
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    className="
                      flex-1 min-h-[48px] px-4 py-3 
                      text-lg font-medium text-gray-700 
                      hover:text-blue-600 hover:bg-blue-50 
                      rounded-lg transition-all duration-200
                      active:scale-98 active:bg-blue-100
                      flex items-center
                    "
                    onClick={() => !item.children && setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      className="
                        w-12 h-12 min-w-[48px] min-h-[48px]
                        flex items-center justify-center
                        text-gray-400 hover:text-gray-600 hover:bg-gray-100
                        rounded-lg transition-all duration-200
                        active:scale-95 active:bg-gray-200
                        ml-2
                      "
                      onClick={() => toggleDropdown(item.href)}
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transform transition-transform duration-200 ${
                          activeDropdown === item.href ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Submenu - Enhanced for touch */}
                {item.children && activeDropdown === item.href && (
                  <div className="mt-2 ml-4 space-y-1 bg-gray-50 rounded-lg p-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="
                          block min-h-[48px] px-4 py-3 
                          text-base text-gray-600 
                          hover:text-blue-600 hover:bg-white 
                          rounded-lg transition-all duration-200
                          active:scale-98 active:bg-blue-50
                          flex items-center justify-between
                        "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{child.label}</span>
                        {child.featured && (
                          <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Popular
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Actions - Enhanced for touch */}
            <div className="pt-6 border-t border-gray-200 space-y-3">
              <a
                href="tel:+1-XXX-XXX-XXXX"
                className="
                  flex items-center min-h-[52px] px-4 py-3 
                  text-white bg-green-600 hover:bg-green-700 active:bg-green-800
                  rounded-lg font-semibold text-lg
                  transition-all duration-200
                  active:scale-98
                  focus:outline-none focus:ring-4 focus:ring-green-200
                "
              >
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>Call Now: +1 (XXX) XXX-XXXX</span>
              </a>
              
              {quickActions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={`
                    flex items-center justify-center min-h-[52px] px-6 py-4 
                    rounded-lg font-semibold text-lg
                    transition-all duration-200
                    active:scale-98
                    focus:outline-none focus:ring-4
                    ${action.primary
                      ? 'bg-amber-500 hover:bg-amber-400 text-white focus:ring-amber-200'
                      : 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-200'
                    }
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mr-2">{action.label}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}