import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://niklaspeterson.com'),
  title: 'Niklas Peterson',
  description: 'Product Designer from Sweden.',
  openGraph: {
    title: 'Niklas Peterson',
    description: 'Designer and creator.',
    url: 'https://niklaspeterson.co',
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
    title: 'Niklas Peterson',
    // card: 'summary_large_image',
  }
}

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({ children }) {
  return (
    <html
    lang="en"
    className={cx(
      inter.className,
      'bg-zinc-50 text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300')}>

      <body className="antialiased w-full flex justify-center">{children}</body>
    </html>
  )
}
