import Image from "next/image";
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
import ProjectVideo from "../../components/ProjectVideo";
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
    description: project.summary || project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Niklas Peterson`,
      description: project.summary || project.description,
      url: `${SITE_URL}/projects/${project.slug}`,
      images: [{ url: ogImage }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Niklas Peterson`,
      description: project.summary || project.description,
      images: [ogImage],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

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

      <article className="flex flex-col gap-10 px-4 pt-10 pb-20 md:gap-16 md:py-32 md:px-20">
        <FadeIn position="down">
          <ProjectHeader project={project} />
        </FadeIn>

        {project.summary ? (
          <ProjectCaseStudyContent project={project} priority />
        ) : (
          <ProjectGallery
            attachments={project.attachments}
            title={project.title}
          />
        )}

        <FadeIn>
          <ProjectTestimonials testimonials={project.testimonials} />
        </FadeIn>

        <FadeIn>
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

function ProjectGallery({ attachments, title }) {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {attachments.map((attachment, index) => (
        <FadeIn
          key={attachment.url}
          index={index}
          className="relative overflow-hidden rounded-2xl after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:border after:border-translucent after:content-[''] md:rounded-3xl md:after:rounded-3xl"
        >
          {attachment.type === "image" ? (
            <Image
              className="h-auto w-full"
              src={attachment.url}
              alt={attachment.alt || title}
              width={attachment.width}
              height={attachment.height}
              priority={index === 0}
            />
          ) : (
            <ProjectVideo media={attachment} className="h-auto w-full" />
          )}
        </FadeIn>
      ))}
    </div>
  );
}
