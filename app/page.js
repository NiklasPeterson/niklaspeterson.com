import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import { getAllProjects } from "./lib/projects";
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from "./lib/site";
import GradientGlow from "./components/GradientGlow";

export default function Home() {
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
    <main className="relative flex w-full flex-col">
      <header className="relative">
        <GradientGlow />
        <div className="mx-auto w-full max-w-360">
          <Nav />
          <Header />
        </div>
      </header>
      <div className="mx-auto flex w-full max-w-360 flex-col">
        <Projects projects={projects} />
        <About />
      </div>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </main>
  );
}
