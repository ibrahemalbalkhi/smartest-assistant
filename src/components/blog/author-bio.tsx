import Link from 'next/link'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { Linkedin, Twitter, Mail } from 'lucide-react'
import { BlogAuthor } from '@/lib/blog'

interface AuthorBioProps {
  author: BlogAuthor
  className?: string
  variant?: 'full' | 'compact'
}

export function AuthorBio({ 
  author, 
  className = '', 
  variant = 'full' 
}: AuthorBioProps) {
  if (variant === 'compact') {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        <OptimizedImage
          src={author.avatar}
          alt={`${author.name} - ${author.role} at Smartest Assistant`}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <div className="font-medium text-gray-900">{author.name}</div>
          <div className="text-sm text-gray-500">{author.role}</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-gray-50 rounded-xl p-6 ${className}`}>
      <div className="flex items-start space-x-4">
        <OptimizedImage
          src={author.avatar}
          alt={`${author.name} - ${author.role} at Smartest Assistant`}
          width={80}
          height={80}
          className="rounded-full flex-shrink-0"
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">{author.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{author.role}</p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              {author.socialLinks.email && (
                <a
                  href={`mailto:${author.socialLinks.email}`}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded-lg transition-colors duration-200"
                  title={`Email ${author.name}`}
                >
                  <Mail className="h-4 w-4" />
                </a>
              )}
              
              {author.socialLinks.linkedin && (
                <a
                  href={author.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-blue-600 hover:bg-white rounded-lg transition-colors duration-200"
                  title={`${author.name} on LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
              
              {author.socialLinks.twitter && (
                <a
                  href={author.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-blue-400 hover:bg-white rounded-lg transition-colors duration-200"
                  title={`${author.name} on Twitter`}
                >
                  <Twitter className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
          
          <p className="text-gray-600 leading-relaxed">{author.bio}</p>
          
          {/* Link to author's posts */}
          <div className="mt-4">
            <Link
              href={`/resources/blog?author=${author.id}`}
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              View all posts by {author.name.split(' ')[0]}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Author card for team/about pages
export function AuthorCard({ author, className = '' }: AuthorBioProps) {
  return (
    <div className={`bg-white rounded-xl p-6 text-center ${className}`}>
      <OptimizedImage
        src={author.avatar}
        alt={`${author.name} - ${author.role} at Smartest Assistant`}
        width={120}
        height={120}
        className="rounded-full mx-auto mb-4"
      />
      
      <h3 className="font-semibold text-gray-900 text-lg mb-1">{author.name}</h3>
      <p className="text-blue-600 font-medium mb-3">{author.role}</p>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{author.bio}</p>
      
      {/* Social Links */}
      <div className="flex justify-center space-x-3">
        {author.socialLinks.email && (
          <a
            href={`mailto:${author.socialLinks.email}`}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            title={`Email ${author.name}`}
          >
            <Mail className="h-4 w-4" />
          </a>
        )}
        
        {author.socialLinks.linkedin && (
          <a
            href={author.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
            title={`${author.name} on LinkedIn`}
          >
            <Linkedin className="h-4 w-4" />
          </a>
        )}
        
        {author.socialLinks.twitter && (
          <a
            href={author.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-50 rounded-lg transition-colors duration-200"
            title={`${author.name} on Twitter`}
          >
            <Twitter className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  )
}

// Inline author attribution
export function InlineAuthor({ 
  author, 
  publishDate, 
  readingTime,
  className = '' 
}: { 
  author: BlogAuthor
  publishDate?: string
  readingTime?: number
  className?: string 
}) {
  return (
    <div className={`flex items-center space-x-3 text-sm text-gray-600 ${className}`}>
      <OptimizedImage
        src={author.avatar}
        alt={`${author.name} - ${author.role} at Smartest Assistant`}
        width={32}
        height={32}
        className="rounded-full"
      />
      
      <div className="flex items-center space-x-2">
        <span className="font-medium text-gray-900">{author.name}</span>
        {publishDate && (
          <>
            <span>•</span>
            <span>{publishDate}</span>
          </>
        )}
        {readingTime && (
          <>
            <span>•</span>
            <span>{readingTime} min read</span>
          </>
        )}
      </div>
    </div>
  )
}