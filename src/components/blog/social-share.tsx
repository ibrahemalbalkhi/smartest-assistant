'use client'

import { useState } from 'react'
import { Share2, Twitter, Linkedin, Facebook, Link2, Check } from 'lucide-react'

interface SocialShareProps {
  url: string
  title: string
  description: string
  className?: string
}

export function SocialShare({ 
  url, 
  title, 
  description, 
  className = '' 
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const shareData = {
    url: typeof window !== 'undefined' ? window.location.href : url,
    title,
    description
  }

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareData.url)}&via=smartestassist`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareData.url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareData.title,
          text: shareData.description,
          url: shareData.url
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    }
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="flex items-center space-x-1 text-gray-500">
        <Share2 className="h-4 w-4" />
        <span className="text-sm font-medium">Share</span>
      </div>

      {/* Native Share (Mobile) */}
      {typeof window !== 'undefined' && navigator.share && (
        <button
          onClick={shareNative}
          className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          title="Share"
        >
          <Share2 className="h-4 w-4" />
        </button>
      )}

      {/* Twitter */}
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
        title="Share on Twitter"
      >
        <Twitter className="h-4 w-4" />
      </a>

      {/* LinkedIn */}
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
        title="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </a>

      {/* Facebook */}
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-400 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
        title="Share on Facebook"
      >
        <Facebook className="h-4 w-4" />
      </a>

      {/* Copy Link */}
      <button
        onClick={copyToClipboard}
        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        title="Copy link"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Link2 className="h-4 w-4" />
        )}
      </button>
    </div>
  )
}

// Floating social share component for blog posts
export function FloatingSocialShare({ 
  url, 
  title, 
  description 
}: SocialShareProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Show floating share when scrolled down
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsVisible(window.scrollY > 200)
    })
  }

  if (!isVisible) return null

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2">
        <div className="flex flex-col space-y-2">
          <div className="text-xs text-gray-500 px-2 py-1">Share</div>
          
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&via=smartestassist`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-50 rounded transition-colors duration-200"
            title="Share on Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>

          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
            title="Share on LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-blue-800 hover:bg-blue-50 rounded transition-colors duration-200"
            title="Share on Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

// Compact share buttons for cards
export function CompactSocialShare({ 
  url, 
  title, 
  description, 
  className = '' 
}: SocialShareProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&via=smartestassist`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
        title="Share on Twitter"
      >
        <Twitter className="h-4 w-4" />
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
        title="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-800 transition-colors duration-200"
        title="Share on Facebook"
      >
        <Facebook className="h-4 w-4" />
      </a>
    </div>
  )
}