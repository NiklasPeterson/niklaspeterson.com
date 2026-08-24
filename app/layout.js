import { Inter } from "next/font/google";
import "./globals.css";
import AnalyticsTracker from "./components/AnalyticsTracker";
import {
  SITE_URL,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_UPDATED_YEAR,
} from "./lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/opengraph-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Niklas Peterson",
    url: SITE_URL,
    image: `${SITE_URL}/niklas-peterson.jpg`,
    jobTitle: "Product Designer",
    nationality: "Sweden",
    sameAs: [
      "https://x.com/niklas_peterson",
      "https://www.linkedin.com/in/niklaspeterson",
      "https://www.figma.com/@niklaspeterson",
      "https://www.threads.net/@niklas.peterson",
      "https://github.com/NiklasPeterson",
      "https://cv.niklaspeterson.com",
      "https://apps.apple.com/app/hydrify/id6450311759",
      "https://apps.apple.com/app/titls/id1579078964",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Niklas Peterson",
    url: SITE_URL,
    founder: { "@id": `${SITE_URL}/#person` },
    sameAs: [
      "https://x.com/niklas_peterson",
      "https://www.linkedin.com/in/niklaspeterson",
      "https://www.figma.com/@niklaspeterson",
      "https://github.com/NiklasPeterson",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    dateModified: String(SITE_UPDATED_YEAR),
    inLanguage: "en",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${inter.className} relative flex w-full justify-center bg-zinc-50 text-zinc-600 antialiased dark:bg-zinc-950 dark:text-zinc-300`}
      >
        {children}
        <AnalyticsTracker />
      </body>
    </html>
  );
}
