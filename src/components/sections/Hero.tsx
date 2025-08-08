import { ReactNode } from 'react'
import Image from 'next/image'
import { cn } from '@/utils'
import { H1, H2, Lead, Paragraph } from '@/components/ui/Typography'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

interface BaseHeroProps {
  title: string | ReactNode
  subtitle?: string
  description?: string
  className?: string
  children?: ReactNode
}

interface HeroAction {
  text: string
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  onClick?: () => void
}

interface HeroProps extends BaseHeroProps {
  actions?: HeroAction[]
  image?: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  variant?: 'default' | 'centered' | 'split' | 'minimal' | 'gradient'
  background?: 'white' | 'gray' | 'gradient' | 'primary'
}

export default function Hero({
  title,
  subtitle,
  description,
  actions = [],
  image,
  variant = 'default',
  background = 'gradient',
  className,
  children
}: HeroProps) {
  const renderActions = () => {
    if (actions.length === 0) return null
    
    return (
      <div className={cn(
        'flex gap-4',
        variant === 'centered' ? 'justify-center' : 'justify-start',
        'flex-col sm:flex-row'
      )}>
        {actions.map((action, index) => (
          <Button
            key={index}
            as={action.href ? 'link' : 'button'}
            href={action.href}
            variant={action.variant || (index === 0 ? 'primary' : 'outline')}
            size="lg"
            onClick={action.onClick}
          >
            {action.text}
          </Button>
        ))}
      </div>
    )
  }

  const renderContent = () => (
    <div className={cn(
      variant === 'centered' && 'text-center max-w-4xl mx-auto'
    )}>
      {subtitle && (
        <p className="text-sm font-semibold text-primary-blue uppercase tracking-wider mb-4">
          {subtitle}
        </p>
      )}
      
      <H1 className={cn(
        'mb-6',
        background === 'primary' && 'text-white'
      )}>
        {title}
      </H1>
      
      {description && (
        <Lead className={cn(
          'mb-8',
          background === 'primary' && 'text-blue-100'
        )}>
          {description}
        </Lead>
      )}
      
      {renderActions()}
      
      {children}
    </div>
  )

  if (variant === 'split' && image) {
    return (
      <Section 
        background={background} 
        spacing="xl" 
        className={className}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            {renderContent()}
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width || 600}
                height={image.height || 400}
                className="rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </Section>
    )
  }

  return (
    <Section 
      background={background} 
      spacing="xl" 
      className={className}
    >
      {renderContent()}
      
      {image && variant !== 'split' && (
        <div className="mt-12 relative">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 800}
            height={image.height || 500}
            className={cn(
              'rounded-xl shadow-2xl',
              variant === 'centered' && 'mx-auto'
            )}
            priority
          />
        </div>
      )}
    </Section>
  )
}

// Specific Hero variants
export function HomeHero({
  className,
  ...props
}: Omit<HeroProps, 'variant'>) {
  return (
    <Hero
      variant="centered"
      background="gradient"
      className={className}
      {...props}
    />
  )
}

export function ServiceHero({
  service,
  features,
  className,
  ...props
}: Omit<HeroProps, 'variant'> & {
  service?: string
  features?: string[]
}) {
  return (
    <Section background="white" spacing="lg" className={className}>
      <div className="max-w-3xl">
        {props.subtitle && (
          <p className="text-sm font-semibold text-primary-blue uppercase tracking-wider mb-4">
            {props.subtitle}
          </p>
        )}
        
        <H1 className="mb-6">{props.title}</H1>
        
        {props.description && (
          <Lead className="mb-8">{props.description}</Lead>
        )}
        
        {features && features.length > 0 && (
          <div className="mb-8">
            <ul className="grid md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button as="link" href="/schedule-a-call" size="lg">
            Get Started
          </Button>
          <Button as="link" href="#features" variant="outline" size="lg">
            See Features
          </Button>
        </div>
      </div>
    </Section>
  )
}

export function LocationHero({
  city,
  state,
  localFeatures,
  className,
  ...props
}: Omit<HeroProps, 'variant'> & {
  city: string
  state: string
  localFeatures?: string[]
}) {
  return (
    <Hero
      variant="centered"
      background="gradient"
      title={`${city} Virtual Assistant Services`}
      description={`Smart virtual assistants serving ${city} businesses. Local expertise, global standards.`}
      actions={[
        { text: `Book ${city} Consultation`, href: '/schedule-a-call' },
        { text: 'See Services', href: '/services', variant: 'outline' }
      ]}
      className={className}
      {...props}
    >
      {localFeatures && (
        <div className="mt-12 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-center mb-6">
            Why {city} Businesses Choose Us
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {localFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/80 rounded-lg p-4">
                <svg className="w-5 h-5 text-primary-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Hero>
  )
}

export function IndustryHero({
  industry,
  industryBenefits,
  className,
  ...props
}: Omit<HeroProps, 'variant'> & {
  industry: string
  industryBenefits?: string[]
}) {
  return (
    <Hero
      variant="default"
      background="white"
      title={`Virtual Assistants for ${industry}`}
      description={`Specialized support from VAs who understand ${industry.toLowerCase()} workflows and challenges.`}
      actions={[
        { text: 'Get Industry Expert', href: '/schedule-a-call' },
        { text: 'View Case Studies', href: '/case-studies', variant: 'outline' }
      ]}
      className={className}
      {...props}
    >
      {industryBenefits && (
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-6">
            {industry}-Specific Benefits
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {industryBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                <svg className="w-5 h-5 text-accent-amber flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Hero>
  )
}

export function MinimalHero({ 
  className,
  ...props 
}: Omit<HeroProps, 'variant'>) {
  return (
    <Section background="white" spacing="base" className={className}>
      <div className="text-center max-w-2xl mx-auto">
        <H2 className="mb-4">{props.title}</H2>
        {props.description && (
          <Paragraph size="lg" className="text-gray-600">
            {props.description}
          </Paragraph>
        )}
      </div>
    </Section>
  )
}