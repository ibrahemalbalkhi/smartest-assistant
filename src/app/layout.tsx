import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/ui/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Smart Virtual Assistants Who Think Ahead | Smartest Assistant",
    template: "%s | Smartest Assistant"
  },
  description: "Hire smart virtual assistants who think strategically & work autonomously. Email, social media, cold outreach & more. Save 40+ hrs/week. Free consultation.",
  keywords: ["virtual assistant services", "hire virtual assistant", "smart virtual assistant", "executive assistant services", "virtual assistant company"],
  authors: [{ name: "Smartest Assistant" }],
  creator: "Smartest Assistant",
  publisher: "Smartest Assistant",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://smartestassistant.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Smart Virtual Assistants Who Think Ahead | Smartest Assistant",
    description: "Hire smart virtual assistants who think strategically & work autonomously. Save 40+ hrs/week.",
    url: 'https://smartestassistant.com',
    siteName: 'Smartest Assistant',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Smartest Assistant - Smart Virtual Assistants',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Smart Virtual Assistants Who Think Ahead | Smartest Assistant",
    description: "Hire smart virtual assistants who think strategically & work autonomously. Save 40+ hrs/week.",
    images: ['/og-image.jpg'],
    creator: '@smartestassist',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <head>
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preload critical resources */}
        <link 
          rel="preload" 
          href="/images/logo-smartest-assistant.webp" 
          as="image" 
          type="image/webp"
        />
        
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .hero-title { 
              font-display: swap; 
              contain: layout style;
            }
            .critical-content {
              content-visibility: auto;
              contain-intrinsic-size: 0 500px;
            }
          `
        }} />
        
        {/* Performance optimizations */}
        <meta name="theme-color" content="#1E40AF" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="pt-16 lg:pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
