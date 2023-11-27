import { GeistSans, GeistMono } from 'geist/font'
import './globals.css'

export const metadata = {
  title: 'Niklas Peterson',
  description: 'Product Designer from Sweden.',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  )
}