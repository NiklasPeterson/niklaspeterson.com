import { Inter } from 'next/font/google'
import "./globals.css";
import AnalyticsTracker from './components/AnalyticsTracker';

const inter = Inter({ subsets: ['latin'] })

const siteUrl = "https://niklaspeterson.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Niklas Peterson — Product Designer and Creator",
    template: "%s | Niklas Peterson",
  },
  description:
    "Niklas Peterson is a Swedish product designer and creator who designs digital products, design systems, Figma plugins, and iOS apps.",
  alternates: {
    canonical: "/",
  },
  creator: "Niklas Peterson",
  openGraph: {
    title: "Niklas Peterson — Product Designer and Creator",
    description:
      "Portfolio of Niklas Peterson, a Swedish product designer and creator working across digital products, design systems, Figma plugins, and iOS apps.",
    url: siteUrl,
    siteName: "Niklas Peterson",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Niklas Peterson portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niklas Peterson — Product Designer and Creator",
    description:
      "Product design, design systems, Figma plugins, and iOS apps by Niklas Peterson.",
    images: ["/twitter-image.png"],
    creator: "@niklas_peterson",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased w-full flex justify-center bg-white text-zinc-600 dark:bg-black dark:text-zinc-300`}
      >
        {children}
        <AnalyticsTracker />
      </body>
    </html>
  );
}
