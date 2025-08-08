'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAVIGATION, COMPANY_NAME } from '@/lib/constants'
import { NavigationItem } from '@/types'
import { cn } from '@/utils'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    handleScroll() // Check initial scroll position
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/90 backdrop-blur-sm'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-primary-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold text-gray-900 group-hover:text-primary-blue transition-colors">
                {COMPANY_NAME}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {NAVIGATION.map((item) => (
                <NavItem 
                  key={item.href} 
                  item={item} 
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                />
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button as="link" href="/schedule-a-call" size="sm">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center">
                <span
                  className={cn(
                    'block h-0.5 w-full bg-gray-700 transition-all duration-300 origin-center',
                    isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 w-full bg-gray-700 transition-all duration-300',
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 w-full bg-gray-700 transition-all duration-300 origin-center',
                    isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                  )}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" 
             onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={cn(
        'lg:hidden fixed top-16 left-0 right-0 z-40 bg-white border-t border-gray-200 transform transition-transform duration-300',
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      )}>
        <div className="max-h-screen overflow-y-auto py-4 px-4 space-y-2">
          {NAVIGATION.map((item) => (
            <MobileNavItem 
              key={item.href} 
              item={item}
              onClick={() => setIsMenuOpen(false)}
            />
          ))}
          <div className="pt-4 border-t border-gray-200">
            <Button 
              as="link" 
              href="/schedule-a-call" 
              fullWidth
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

function NavItem({ 
  item, 
  activeDropdown, 
  setActiveDropdown 
}: { 
  item: NavigationItem
  activeDropdown: string | null
  setActiveDropdown: (id: string | null) => void
}) {
  const pathname = usePathname()
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
  const isOpen = activeDropdown === item.href

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cn(
          'font-medium transition-colors duration-200 hover:text-primary-blue relative py-2',
          isActive ? 'text-primary-blue' : 'text-gray-700'
        )}
        onMouseEnter={() => setActiveDropdown(null)}
      >
        {item.label}
        {isActive && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-blue rounded-full" />
        )}
      </Link>
    )
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setActiveDropdown(item.href)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button
        className={cn(
          'font-medium transition-colors duration-200 flex items-center gap-1 py-2 hover:text-primary-blue',
          isActive ? 'text-primary-blue' : 'text-gray-700'
        )}
      >
        <span>{item.label}</span>
        <svg
          className={cn(
            'w-4 h-4 transition-transform duration-200',
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

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
          {item.children.map((child, index) => (
            <Link
              key={child.href}
              href={child.href}
              className={cn(
                'block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-blue transition-colors duration-200',
                index !== item.children!.length - 1 && 'border-b border-gray-100'
              )}
            >
              <div className="font-medium">{child.label}</div>
              {child.description && (
                <div className="text-sm text-gray-500 mt-1">{child.description}</div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileNavItem({ 
  item, 
  onClick 
}: { 
  item: NavigationItem
  onClick: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/')

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onClick}
        className={cn(
          'block py-3 px-4 font-medium rounded-lg transition-colors duration-200',
          isActive 
            ? 'text-primary-blue bg-blue-50' 
            : 'text-gray-700 hover:bg-gray-50'
        )}
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-full flex items-center justify-between py-3 px-4 font-medium transition-colors duration-200',
          isActive 
            ? 'text-primary-blue bg-blue-50' 
            : 'text-gray-700 hover:bg-gray-50'
        )}
      >
        <span>{item.label}</span>
        <svg
          className={cn(
            'w-4 h-4 transition-transform duration-200',
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

      {isOpen && (
        <div className="bg-gray-50 border-t border-gray-200">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClick}
              className="block py-2 px-8 text-gray-600 hover:text-primary-blue transition-colors duration-200"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}