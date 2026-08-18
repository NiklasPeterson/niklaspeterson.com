import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { getAllProjects } from "./lib/projects";
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from "./lib/site";
import { preload } from "react-dom";

export default function Home() {
  // This is the LCP video in the initial project grid. Preloading it keeps the
  // request on the critical path instead of waiting for video scheduling.
  preload("/lottiefiles-dam.mp4", {
    as: "video",
    fetchPriority: "high",
  });

  const projects = getAllProjects();

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    mainEntity: { "@id": `${SITE_URL}/#person` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      url: `${SITE_URL}/projects/${project.slug}`,
    })),  
  };

  return (
    <main className="flex w-full max-w-360 flex-col">
      <div>
        <div className="absolute top-0 right-0 left-0 -z-10 flex max-w-full justify-center blur-[120px] md:pr-60">
          <img src="/animated-header.svg" alt="Animated Header" className="blur-[120px]" />
        </div>
      <Header />
      </div>
      <Projects projects={projects} />
      <About />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </main>
  );
}
