import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { projects } from "./data/projects";

const SITE_URL = "https://niklaspeterson.com";

export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Niklas Peterson",
    url: SITE_URL,
    image: `${SITE_URL}/niklas-peterson.jpg`,
    jobTitle: "Senior Product Designer",
    worksFor: { "@type": "Organization", name: "LottieFiles" },
    nationality: "Swedish",
    description:
      "Product Designer and creator from Sweden, currently a Senior Product Designer at LottieFiles. Brings digital products to life with pixels and code.",
    sameAs: [
      "https://x.com/niklas_peterson",
      "https://www.threads.net/@niklas.peterson",
      "https://www.linkedin.com/in/niklaspeterson",
      "https://www.figma.com/@niklaspeterson",
    ],
    email: "mailto:mail@niklaspeterson.com",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Niklas Peterson",
    url: SITE_URL,
    author: { "@type": "Person", name: "Niklas Peterson" },
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Selected work — Niklas Peterson",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/work/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <main className="w-full max-w-[1440px] flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <Header />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
