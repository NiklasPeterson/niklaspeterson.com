import { Inter } from 'next/font/google'
import "./globals.css";
import AnalyticsTracker from './components/AnalyticsTracker';

const inter = Inter({ subsets: ['latin'] })

const SITE_URL = 'https://www.niklaspeterson.com';
const SITE_TITLE = 'Niklas Peterson — Product Designer and creator';
const SITE_DESCRIPTION = 'Niklas Peterson, Product Designer and creator from Sweden. Who brings digital products to life through pixels and code.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  const dateModified = new Date().toISOString().split('T')[0];

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Niklas Peterson',
    url: SITE_URL,
    image: `${SITE_URL}/niklas-peterson.jpg`,
    jobTitle: 'Product Designer',
    nationality: 'SE',
    sameAs: [
      'https://x.com/niklas_peterson',
      'https://www.linkedin.com/in/niklaspeterson',
      'https://www.figma.com/@niklaspeterson',
      'https://www.threads.net/@niklas.peterson',
      'https://cv.niklaspeterson.com',
      'https://apps.apple.com/app/hydrify/id6450311759',
      'https://apps.apple.com/app/titls/id1579078964',
    ],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Niklas Peterson',
    url: SITE_URL,
    logo: `${SITE_URL}/niklas-peterson.jpg`,
    founder: { '@id': `${SITE_URL}/#person` },
    sameAs: [
      'https://x.com/niklas_peterson',
      'https://www.linkedin.com/in/niklaspeterson',
      'https://www.figma.com/@niklaspeterson',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
    author: { '@id': `${SITE_URL}/#person` },
    dateModified,
    inLanguage: 'en',
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${inter.className} antialiased w-full flex justify-center bg-white text-zinc-600 dark:bg-black dark:text-zinc-300`}
      >
        {children}
        <AnalyticsTracker />
      </body>
    </html>
  );
}
