import { Inter } from 'next/font/google'
import "./globals.css";
import AnalyticsTracker from './components/AnalyticsTracker';

const inter = Inter({ subsets: ['latin'] })

const SITE_URL = "https://niklaspeterson.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Niklas Peterson — Product Designer and creator",
    template: "%s",
  },
  description:
    "Niklas Peterson is a Product Designer and creator from Sweden, currently a Senior Product Designer at LottieFiles. He brings digital products to life with pixels and code.",
  applicationName: "Niklas Peterson",
  authors: [{ name: "Niklas Peterson", url: SITE_URL }],
  creator: "Niklas Peterson",
  publisher: "Niklas Peterson",
  keywords: [
    "Niklas Peterson",
    "Product Designer",
    "Sweden",
    "LottieFiles",
    "Lummi",
    "Musho",
    "Bueno",
    "Hydrify",
    "Titls",
    "Figma plugin",
    "UI design",
    "UX design",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Niklas Peterson",
    title: "Niklas Peterson — Product Designer and creator",
    description:
      "Niklas Peterson is a Product Designer and creator from Sweden, currently a Senior Product Designer at LottieFiles. He brings digital products to life with pixels and code.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Niklas Peterson — Product Designer and creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niklas Peterson — Product Designer and creator",
    description:
      "Niklas Peterson is a Product Designer and creator from Sweden, currently a Senior Product Designer at LottieFiles.",
    creator: "@niklas_peterson",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
