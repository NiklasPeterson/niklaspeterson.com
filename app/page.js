import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import FAQ, { faqs } from "./components/FAQ";
import { getProjectUrl, projects, siteUrl } from "./data/projects";

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Niklas Peterson",
      url: siteUrl,
      jobTitle: "Senior Product Designer",
      worksFor: {
        "@type": "Organization",
        name: "LottieFiles",
      },
      sameAs: [
        "https://x.com/niklas_peterson",
        "https://www.threads.net/@niklas.peterson",
        "https://www.figma.com/@niklaspeterson",
        "https://www.linkedin.com/in/niklaspeterson",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Niklas Peterson",
      url: siteUrl,
      description:
        "Portfolio of Niklas Peterson, a Swedish product designer and creator.",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Selected work by Niklas Peterson",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: getProjectUrl(project),
        name: project.title,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <main className="w-full max-w-[1440px] flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header/>
      <Projects/>
      <About/>
      <FAQ/>
      <Footer/>
    </main>
  );
}
