'use client'

import { OptimizedImage } from './optimized-image'
import { createImageMetadata } from '@/lib/image-optimization'

interface HeroImageProps {
  type: 'homepage' | 'service' | 'location' | 'industry' | 'about'
  identifier: string
  displayName?: string
  description?: string
  city?: string
  state?: string
  className?: string
}

export function HeroImage({
  type,
  identifier,
  displayName,
  description,
  city,
  state,
  className = ''
}: HeroImageProps) {
  let imageContext

  switch (type) {
    case 'homepage':
      imageContext = {
        identifier: 'homepage-hero',
        displayName: 'Smart Virtual Assistant Services',
        description: 'Smart virtual assistant managing multiple executive tasks with modern AI tools - Smartest Assistant strategic partnership',
        priority: true
      }
      break

    case 'service':
      imageContext = {
        identifier: `${identifier}-hero`,
        displayName,
        description: `Professional ${displayName?.toLowerCase() || identifier.replace(/-/g, ' ')} virtual assistant using advanced tools and strategies - Smartest Assistant expertise`,
        priority: true
      }
      break

    case 'location':
      imageContext = {
        identifier: `${identifier}-hero`,
        displayName: `${displayName || city} Virtual Assistant Services`,
        description: `Smart virtual assistant team serving ${displayName || city} ${state || ''} business district - Smartest Assistant local expertise`,
        city,
        state,
        priority: true
      }
      break

    case 'industry':
      imageContext = {
        identifier: `${identifier}-industry-hero`,
        displayName,
        description: `Virtual assistant specialized in ${displayName?.toLowerCase() || identifier.replace(/-/g, ' ')} industry workflows - Smartest Assistant sector expertise`,
        priority: true
      }
      break

    case 'about':
      imageContext = {
        identifier: 'about-team-hero',
        displayName: 'Smartest Assistant Team',
        description: 'Professional virtual assistant team collaborating on strategic client projects - Smartest Assistant company culture',
        priority: true
      }
      break

    default:
      imageContext = {
        identifier,
        displayName,
        description,
        priority: true
      }
  }

  const imageMetadata = createImageMetadata('hero', imageContext)

  // Override dimensions for hero images
  const heroDimensions = {
    width: 1200,
    height: 600
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <OptimizedImage
        src={imageMetadata.src}
        alt={imageMetadata.alt}
        width={heroDimensions.width}
        height={heroDimensions.height}
        priority={true}
        className="object-cover w-full h-full"
        sizes="100vw"
        quality={95}
        placeholder="blur"
      />
      
      {/* Optional gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent" />
    </div>
  )
}