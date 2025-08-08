module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000',
        'http://localhost:3000/about',
        'http://localhost:3000/services',
        'http://localhost:3000/services/email-management',
        'http://localhost:3000/services/executive-assistant',
        'http://localhost:3000/services/social-media-management',
        'http://localhost:3000/locations',
        'http://localhost:3000/locations/san-francisco',
        'http://localhost:3000/locations/new-york-city',
        'http://localhost:3000/industries',
        'http://localhost:3000/industries/saas-startups',
        'http://localhost:3000/solutions',
        'http://localhost:3000/solutions/for-entrepreneurs',
        'http://localhost:3000/contact',
        'http://localhost:3000/schedule-a-call',
      ],
      numberOfRuns: 3
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.85 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.90 }],
        'categories:seo': ['error', { minScore: 0.95 }],
        'categories:pwa': 'off',
        
        // Core Web Vitals
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'first-input-delay': ['error', { maxNumericValue: 100 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        
        // Performance metrics
        'first-contentful-paint': ['warn', { maxNumericValue: 1800 }],
        'speed-index': ['warn', { maxNumericValue: 3000 }],
        'time-to-interactive': ['warn', { maxNumericValue: 3800 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }],
        
        // SEO essentials
        'meta-description': 'error',
        'document-title': 'error',
        'html-has-lang': 'error',
        'image-alt': 'error',
        'link-text': 'error',
        
        // Accessibility
        'color-contrast': 'error',
        'heading-order': 'error',
        'html-lang-valid': 'error',
        'landmark-one-main': 'error',
        'page-has-heading-one': 'error',
        
        // Security
        'is-on-https': 'error',
        'uses-responsive-images': 'warn',
        'efficient-animated-content': 'warn',
        'unused-css-rules': 'warn',
        'unused-javascript': 'warn'
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}