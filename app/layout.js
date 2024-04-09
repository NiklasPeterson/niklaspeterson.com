import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://niklaspeterson.com'),
  title: 'Niklas Peterson—Product Designer and founder',
  description: 'Niklas Peterson, Product Designer and founder from Sweden. Who brings creativity to life through pixels and code.',
  openGraph: {
    title: 'Niklas Peterson—Product Designer and founder',
    description: 'Niklas Peterson, Product Designer and founder from Sweden. Who brings creativity to life through pixels and code.',
    url: 'https://niklaspeterson.com',
    siteName: 'Niklas Peterson',
    locale: 'en_US',
    type: 'website',
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
  twitter: {
    title: 'Niklas Peterson—Product Designer and founder',
    description: 'Niklas Peterson, Product Designer and founder from Sweden. Who brings creativity to life through pixels and code.',
  }
}

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cx(
        inter.className,
        'bg-white text-zinc-700 dark:bg-black dark:text-zinc-300')}>

      <body className="antialiased w-full flex justify-center">
        {children}
        <Analytics />
        <SpeedInsights />
        </body>
    </html>
  )
}
