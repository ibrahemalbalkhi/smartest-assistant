import { Inter, Fira_Code } from 'next/font/google'

// Primary font - Inter for body text and UI
export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  preload: true,
})

// Monospace font for code and technical content
export const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-fira-code',
  display: 'swap',
  fallback: ['Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'Courier New', 'monospace'],
  preload: false, // Only preload if used above the fold
})

// Font optimization utilities
export const fontClasses = `${inter.variable} ${firaCode.variable}`

// Critical font preload links for manual inclusion in head
export const criticalFontPreloads = [
  {
    href: '/fonts/inter-v13-latin-regular.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    href: '/fonts/inter-v13-latin-500.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    href: '/fonts/inter-v13-latin-600.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
] as const