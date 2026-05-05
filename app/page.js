import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { getAllProjects } from "./lib/projects";
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from "./lib/site";

export default function Home() {
  const projects = getAllProjects().filter((p) => p.attachments.length > 0);

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    mainEntity: { '@id': `${SITE_URL}/#person` },
    isPartOf: { '@id': `${SITE_URL}/#website` },
    hasPart: projects.map((project) => ({
      '@type': 'CreativeWork',
      name: project.title,
      url: `${SITE_URL}/projects/${project.slug}`,
    })),
  };

  return (
    <main className="w-full max-w-[1440px] flex flex-col">
      <Header/>
      <Projects projects={projects}/>
      <About/>
      <Footer/>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </main>
  );
}
