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
