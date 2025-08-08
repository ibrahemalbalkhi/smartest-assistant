'use client'

import { useEffect } from 'react'
import { Metric } from 'web-vitals'

// Track Core Web Vitals and send to analytics
function sendToAnalytics(metric: Metric) {
  // Send to Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      custom_parameter_value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      custom_parameter_delta: metric.delta,
      custom_parameter_metric_id: metric.id,
      custom_parameter_metric_navigation_type: metric.navigationType,
    })
  }

  // Send to Vercel Analytics
  if (typeof window !== 'undefined' && window.va) {
    window.va('track', `Web Vital: ${metric.name}`, {
      value: metric.value,
      delta: metric.delta,
      id: metric.id,
      navigationType: metric.navigationType,
    })
  }

  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      delta: metric.delta,
      rating: getVitalRating(metric.name, metric.value),
      id: metric.id,
    })
  }
}

// Get performance rating based on Core Web Vitals thresholds
function getVitalRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  switch (name) {
    case 'LCP':
      if (value <= 2500) return 'good'
      if (value <= 4000) return 'needs-improvement'
      return 'poor'
    case 'FID':
      if (value <= 100) return 'good'
      if (value <= 300) return 'needs-improvement'
      return 'poor'
    case 'CLS':
      if (value <= 0.1) return 'good'
      if (value <= 0.25) return 'needs-improvement'
      return 'poor'
    case 'TTFB':
      if (value <= 800) return 'good'
      if (value <= 1800) return 'needs-improvement'
      return 'poor'
    case 'FCP':
      if (value <= 1800) return 'good'
      if (value <= 3000) return 'needs-improvement'
      return 'poor'
    default:
      return 'good'
  }
}

export function WebVitals() {
  useEffect(() => {
    // Dynamically import web-vitals to avoid affecting the main bundle
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(sendToAnalytics)
      onFID(sendToAnalytics)
      onFCP(sendToAnalytics)
      onLCP(sendToAnalytics)
      onTTFB(sendToAnalytics)
    })
  }, [])

  return null
}

// TypeScript declarations for global analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    va?: (...args: any[]) => void
  }
}

export default WebVitals