'use client'

import { useState, useEffect } from 'react'
import { Button } from './Button'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookie-consent')
    if (!hasConsented) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700 leading-relaxed">
              We use essential cookies to ensure our website works properly and analytics cookies to understand how you interact with our site. 
              By clicking "Accept All", you consent to our use of cookies. 
              <a 
                href="/legal/cookies" 
                className="text-primary-blue hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about our cookie policy
              </a>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="text-gray-600 border-gray-300 hover:bg-gray-50"
            >
              Decline
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleAccept}
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}