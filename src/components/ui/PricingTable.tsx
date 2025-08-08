import { ReactNode } from 'react'
import { cn } from '@/utils'
import { H3, H4, Paragraph, Caption } from './Typography'
import Button from './Button'
import { Card } from './Card'

interface PricingFeature {
  name: string
  included: boolean
  description?: string
}

interface PricingPlan {
  id: string
  name: string
  description: string
  price: {
    amount: number
    currency: string
    period: 'hour' | 'month' | 'year'
    originalAmount?: number
  }
  features: PricingFeature[]
  cta: {
    text: string
    href?: string
    onClick?: () => void
  }
  popular?: boolean
  badge?: string
}

interface PricingTableProps {
  plans: PricingPlan[]
  billingPeriod?: 'month' | 'year'
  onBillingPeriodChange?: (period: 'month' | 'year') => void
  className?: string
}

export default function PricingTable({
  plans,
  billingPeriod,
  onBillingPeriodChange,
  className
}: PricingTableProps) {
  return (
    <div className={cn('max-w-7xl mx-auto', className)}>
      {/* Billing Period Toggle */}
      {billingPeriod && onBillingPeriodChange && (
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => onBillingPeriodChange('month')}
              className={cn(
                'px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                billingPeriod === 'month'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => onBillingPeriodChange('year')}
              className={cn(
                'px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                billingPeriod === 'year'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              )}
            >
              Annual
              <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Pricing Cards */}
      <div className={cn(
        'grid gap-8',
        plans.length === 2 && 'md:grid-cols-2 max-w-4xl mx-auto',
        plans.length === 3 && 'md:grid-cols-3',
        plans.length >= 4 && 'md:grid-cols-2 lg:grid-cols-4'
      )}>
        {plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  )
}

function PricingCard({ plan }: { plan: PricingPlan }) {
  const formatPrice = () => {
    const { amount, currency, period, originalAmount } = plan.price
    
    return (
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          {originalAmount && originalAmount > amount && (
            <span className="text-lg text-gray-500 line-through">
              ${originalAmount}
            </span>
          )}
          <span className="text-4xl font-bold text-gray-900">
            ${amount}
          </span>
          <span className="text-gray-600">
            /{period}
          </span>
        </div>
        {originalAmount && originalAmount > amount && (
          <div className="text-sm text-green-600 font-medium">
            Save ${originalAmount - amount}/{period}
          </div>
        )}
      </div>
    )
  }

  return (
    <Card className={cn(
      'relative p-8 h-full flex flex-col',
      plan.popular && 'border-2 border-primary-blue'
    )}>
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      {/* Custom Badge */}
      {plan.badge && !plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent-amber text-white px-4 py-1 rounded-full text-sm font-semibold">
            {plan.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <H3 className="mb-2">{plan.name}</H3>
        <Paragraph className="text-gray-600 mb-4">
          {plan.description}
        </Paragraph>
        {formatPrice()}
      </div>

      {/* Features */}
      <div className="flex-1 mb-8">
        <ul className="space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              {feature.included ? (
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
              <div>
                <span className={cn(
                  'text-sm',
                  feature.included ? 'text-gray-700' : 'text-gray-400'
                )}>
                  {feature.name}
                </span>
                {feature.description && (
                  <div className="text-xs text-gray-500 mt-1">
                    {feature.description}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Button
        as={plan.cta.href ? 'link' : 'button'}
        href={plan.cta.href}
        onClick={plan.cta.onClick}
        variant={plan.popular ? 'primary' : 'outline'}
        fullWidth
        size="lg"
      >
        {plan.cta.text}
      </Button>
    </Card>
  )
}

// Comparison Table
interface ComparisonTableProps {
  plans: PricingPlan[]
  features: Array<{
    category: string
    items: Array<{
      name: string
      description?: string
    }>
  }>
  className?: string
}

export function PricingComparisonTable({
  plans,
  features,
  className
}: ComparisonTableProps) {
  const getFeatureValue = (planId: string, featureName: string) => {
    const plan = plans.find(p => p.id === planId)
    const feature = plan?.features.find(f => f.name === featureName)
    return feature?.included || false
  }

  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full border-collapse">
        {/* Header */}
        <thead>
          <tr>
            <th className="text-left p-4 border-b border-gray-200">
              <span className="sr-only">Feature</span>
            </th>
            {plans.map(plan => (
              <th key={plan.id} className="text-center p-4 border-b border-gray-200">
                <div className="space-y-2">
                  <H4>{plan.name}</H4>
                  <div className="text-2xl font-bold">
                    ${plan.price.amount}
                    <span className="text-sm font-normal text-gray-600">
                      /{plan.price.period}
                    </span>
                  </div>
                  <Button
                    as={plan.cta.href ? 'link' : 'button'}
                    href={plan.cta.href}
                    onClick={plan.cta.onClick}
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="sm"
                  >
                    {plan.cta.text}
                  </Button>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {features.map((category, categoryIndex) => (
            <>
              {/* Category Header */}
              <tr key={`category-${categoryIndex}`}>
                <td colSpan={plans.length + 1} className="p-4 bg-gray-50">
                  <H4 className="text-gray-900">{category.category}</H4>
                </td>
              </tr>
              
              {/* Feature Rows */}
              {category.items.map((item, itemIndex) => (
                <tr key={`${categoryIndex}-${itemIndex}`} className="border-b border-gray-100">
                  <td className="p-4">
                    <div>
                      <span className="font-medium text-gray-900">{item.name}</span>
                      {item.description && (
                        <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                      )}
                    </div>
                  </td>
                  {plans.map(plan => (
                    <td key={plan.id} className="p-4 text-center">
                      {getFeatureValue(plan.id, item.name) ? (
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}