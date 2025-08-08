'use client'

import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react'
import { MobileFormButton } from './mobile-button'

// Mobile-optimized input component
interface MobileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  icon?: React.ReactNode
}

export const MobileInput = forwardRef<HTMLInputElement, MobileInputProps>(
  ({ label, error, helperText, icon, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={props.id || props.name}
            className="block text-base font-medium text-gray-700 mb-2"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="text-gray-400">{icon}</span>
            </div>
          )}
          
          <input
            ref={ref}
            className={`
              w-full min-h-[52px] px-4 py-4 text-base
              border border-gray-300 rounded-lg
              focus:ring-4 focus:ring-blue-200 focus:border-blue-500
              disabled:bg-gray-100 disabled:cursor-not-allowed
              placeholder:text-gray-400
              ${icon ? 'pl-12' : 'pl-4'}
              ${error ? 'border-red-300 focus:ring-red-200 focus:border-red-500' : ''}
              ${className}
            `}
            {...props}
          />
        </div>
        
        {error && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p className="mt-2 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

MobileInput.displayName = 'MobileInput'

// Mobile-optimized textarea
interface MobileTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  maxLength?: number
}

export const MobileTextarea = forwardRef<HTMLTextAreaElement, MobileTextareaProps>(
  ({ label, error, helperText, maxLength, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={props.id || props.name}
            className="block text-base font-medium text-gray-700 mb-2"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <textarea
          ref={ref}
          className={`
            w-full min-h-[120px] px-4 py-4 text-base
            border border-gray-300 rounded-lg
            focus:ring-4 focus:ring-blue-200 focus:border-blue-500
            disabled:bg-gray-100 disabled:cursor-not-allowed
            placeholder:text-gray-400 resize-y
            ${error ? 'border-red-300 focus:ring-red-200 focus:border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
        
        <div className="flex justify-between items-center mt-2">
          <div>
            {error && (
              <p className="text-sm text-red-600" role="alert">
                {error}
              </p>
            )}
            
            {helperText && !error && (
              <p className="text-sm text-gray-500">
                {helperText}
              </p>
            )}
          </div>
          
          {maxLength && (
            <p className="text-sm text-gray-400">
              {(props.value as string)?.length || 0}/{maxLength}
            </p>
          )}
        </div>
      </div>
    )
  }
)

MobileTextarea.displayName = 'MobileTextarea'

// Mobile-optimized select
interface MobileSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  options: Array<{ value: string; label: string; disabled?: boolean }>
}

export const MobileSelect = forwardRef<HTMLSelectElement, MobileSelectProps>(
  ({ label, error, helperText, options, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={props.id || props.name}
            className="block text-base font-medium text-gray-700 mb-2"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          <select
            ref={ref}
            className={`
              w-full min-h-[52px] px-4 py-4 pr-12 text-base
              border border-gray-300 rounded-lg
              focus:ring-4 focus:ring-blue-200 focus:border-blue-500
              disabled:bg-gray-100 disabled:cursor-not-allowed
              appearance-none bg-white
              ${error ? 'border-red-300 focus:ring-red-200 focus:border-red-500' : ''}
              ${className}
            `}
            {...props}
          >
            {options.map((option) => (
              <option 
                key={option.value} 
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          
          {/* Custom dropdown arrow */}
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        
        {error && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p className="mt-2 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

MobileSelect.displayName = 'MobileSelect'

// Mobile-optimized checkbox
interface MobileCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  description?: string
}

export const MobileCheckbox = forwardRef<HTMLInputElement, MobileCheckboxProps>(
  ({ label, description, className = '', ...props }, ref) => {
    return (
      <div className="flex items-start space-x-3 py-2">
        <div className="flex items-center h-6 mt-1">
          <input
            ref={ref}
            type="checkbox"
            className={`
              w-5 h-5 text-blue-600 
              border-2 border-gray-300 rounded
              focus:ring-4 focus:ring-blue-200
              disabled:opacity-50 disabled:cursor-not-allowed
              ${className}
            `}
            {...props}
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <label 
            htmlFor={props.id || props.name}
            className="block text-base font-medium text-gray-900 cursor-pointer leading-6"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          
          {description && (
            <p className="text-sm text-gray-600 mt-1 leading-5">
              {description}
            </p>
          )}
        </div>
      </div>
    )
  }
)

MobileCheckbox.displayName = 'MobileCheckbox'

// Mobile-optimized radio group
interface RadioOption {
  value: string
  label: string
  description?: string
  disabled?: boolean
}

interface MobileRadioGroupProps {
  name: string
  label?: string
  options: RadioOption[]
  value?: string
  onChange?: (value: string) => void
  error?: string
  required?: boolean
}

export function MobileRadioGroup({
  name,
  label,
  options,
  value,
  onChange,
  error,
  required
}: MobileRadioGroupProps) {
  return (
    <div className="w-full">
      {label && (
        <fieldset className="w-full">
          <legend className="block text-base font-medium text-gray-700 mb-4">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </legend>
          
          <div className="space-y-3">
            {options.map((option) => (
              <div key={option.value} className="flex items-start space-x-3 py-2">
                <div className="flex items-center h-6 mt-1">
                  <input
                    type="radio"
                    name={name}
                    value={option.value}
                    checked={value === option.value}
                    onChange={(e) => onChange?.(e.target.value)}
                    disabled={option.disabled}
                    className={`
                      w-5 h-5 text-blue-600
                      border-2 border-gray-300 rounded-full
                      focus:ring-4 focus:ring-blue-200
                      disabled:opacity-50 disabled:cursor-not-allowed
                    `}
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <label className="block text-base font-medium text-gray-900 cursor-pointer leading-6">
                    {option.label}
                  </label>
                  
                  {option.description && (
                    <p className="text-sm text-gray-600 mt-1 leading-5">
                      {option.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </fieldset>
      )}
      
      {error && (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

// Complete mobile form wrapper
interface MobileFormProps {
  children: React.ReactNode
  onSubmit?: (e: React.FormEvent) => void
  className?: string
  title?: string
  description?: string
}

export function MobileForm({ 
  children, 
  onSubmit, 
  className = '', 
  title, 
  description 
}: MobileFormProps) {
  return (
    <div className={`w-full max-w-lg mx-auto ${className}`}>
      {(title || description) && (
        <div className="mb-8 text-center">
          {title && (
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-base text-gray-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}
      
      <form onSubmit={onSubmit} className="space-y-6">
        {children}
      </form>
    </div>
  )
}

// Quick contact form specifically for mobile
export function MobileQuickContact() {
  return (
    <MobileForm 
      title="Get Started Today"
      description="Tell us about your needs and we'll match you with the perfect virtual assistant."
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <MobileInput
        name="name"
        label="Full Name"
        placeholder="Enter your full name"
        required
      />
      
      <MobileInput
        name="email"
        type="email"
        label="Email Address"
        placeholder="your@email.com"
        required
      />
      
      <MobileInput
        name="phone"
        type="tel"
        label="Phone Number"
        placeholder="(555) 123-4567"
        helperText="We'll call you within 24 hours"
      />
      
      <MobileSelect
        name="service"
        label="Service Needed"
        required
        options={[
          { value: '', label: 'Select a service...' },
          { value: 'executive-assistant', label: 'Executive Assistant' },
          { value: 'email-management', label: 'Email Management' },
          { value: 'social-media', label: 'Social Media Management' },
          { value: 'other', label: 'Other Services' }
        ]}
      />
      
      <MobileTextarea
        name="message"
        label="Tell us about your needs"
        placeholder="Describe what tasks you'd like help with..."
        rows={4}
        maxLength={500}
      />
      
      <MobileCheckbox
        name="consent"
        label="I agree to receive communications from Smartest Assistant"
        description="We'll only contact you about your virtual assistant needs. No spam, ever."
        required
      />
      
      <MobileFormButton type="submit">
        Get My Smart VA Match
      </MobileFormButton>
      
      <p className="text-center text-sm text-gray-500">
        Free consultation • No commitment • 24-hour response
      </p>
    </MobileForm>
  )
}