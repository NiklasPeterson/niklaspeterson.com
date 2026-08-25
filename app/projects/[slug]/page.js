import { notFound } from "next/navigation";
import {
  getAllProjects,
  getProjectBySlug,
  getAdjacentProjects,
} from "../../lib/projects";
import { SITE_URL } from "../../lib/site";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import FadeIn from "../../components/FadeIn";
import ProjectNav from "../../components/ProjectNav";
import ProjectTestimonials from "../../components/ProjectTestimonials";
import ProjectHeader from "../../components/ProjectHeader";
import ProjectCaseStudyContent from "../../components/ProjectCaseStudyContent";

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const firstImage = project.attachments.find((a) => a.type === "image");
  const ogImage = firstImage ? firstImage.url : "/opengraph-image.png";

  return {
    title: `${project.title} | Niklas Peterson`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Niklas Peterson`,
      description: project.summary,
      url: `${SITE_URL}/projects/${project.slug}`,
      images: [{ url: ogImage }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Niklas Peterson`,
      description: project.summary,
      images: [ogImage],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const hasTestimonials = project.testimonials?.length > 0;
  const firstImage = project.attachments.find((a) => a.type === "image");
  const { prev, next } = getAdjacentProjects(slug);

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${SITE_URL}/projects/${project.slug}`,
    dateModified: project.updatedAt ?? String(project.updatedYear),
    creator: { "@id": `${SITE_URL}/#person` },
    ...(firstImage && { image: `${SITE_URL}${firstImage.url}` }),
    ...(project.company && {
      sourceOrganization: { "@type": "Organization", name: project.company },
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: project.title,
        item: `${SITE_URL}/projects/${project.slug}`,
      },
    ],
  };

  return (
    <main className="flex w-full max-w-360 flex-col">
      <Nav />

      <article className="flex flex-col px-4 pt-20 pb-24 md:px-20 md:py-32">
        <FadeIn position="down" className="mb-16 md:mb-20">
          <ProjectHeader project={project} />
        </FadeIn>

        <ProjectCaseStudyContent
          project={project}
          priority
          className="mb-16 md:mb-20"
        />

        {hasTestimonials && (
          <FadeIn className="-mx-4 mb-16 w-[calc(100%+2rem)] md:mx-0 md:mb-20 md:w-auto">
            <ProjectTestimonials testimonials={project.testimonials} />
          </FadeIn>
        )}

        <FadeIn className="mb-16 md:mb-20">
          <ProjectNav prev={prev} next={next} />
        </FadeIn>
      </article>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
