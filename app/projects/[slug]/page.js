import Image from "next/image";
import Link from "next/link";
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
import ProjectScope, {
  ProjectClosingStatement,
  ProjectDescription,
  ProjectHighlight,
} from "../../components/ProjectScope";
import {
  getProjectInsights,
  getProjectVisualAspectRatio,
  getVisibleProjectSections,
  isFullWidthProjectSection,
} from "../../lib/project-layout";

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
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const dateModified = new Date().toISOString().split("T")[0];
  const firstImage = project.attachments.find((a) => a.type === "image");
  const { prev, next } = getAdjacentProjects(slug);

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${SITE_URL}/projects/${project.slug}`,
    ...(project.year && { dateCreated: String(project.year) }),
    dateModified,
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
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
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

      <article className="flex flex-col gap-10 px-4 pt-10 pb-20 md:gap-16 md:pt-16 md:pb-32 lg:px-20">
        <FadeIn position="down" className="flex flex-col gap-6">
          <h1 className="text-4xl leading-tight font-semibold text-zinc-950 md:text-6xl max-w-3xl dark:text-zinc-50">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            {project.summary || project.description}
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-sm text-zinc-500 dark:text-zinc-400">
            {project.company && (
              <span className="font-medium text-zinc-950 dark:text-zinc-50">
                {project.company}
              </span>
            )}
            {project.company && project.year && (
              <span
                aria-hidden="true"
                className="text-zinc-300 dark:text-zinc-700"
              >
                /
              </span>
            )}
            {project.year && <span>{project.year}</span>}
            {project.url && (
              <a
                className="group ml-2 inline-flex items-center gap-1.5 font-medium text-zinc-950 transition-opacity hover:opacity-60 md:ml-auto dark:text-zinc-50"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            )}
          </div>

          <ProjectScope items={project.scope} />
        </FadeIn>

        {project.summary ? (
          <CaseStudyContent project={project} />
        ) : (
          <div className="flex flex-col gap-4 md:gap-6">
            {project.attachments.map((attachment, i) => (
              <FadeIn
                key={i}
                index={i}
                className="relative overflow-hidden rounded-2xl after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:border after:border-zinc-200/50 dark:after:border-zinc-600/50 after:content-[''] md:rounded-3xl md:after:rounded-3xl"
              >
                <ProjectMedia
                  media={attachment}
                  title={project.title}
                  priority={i === 0}
                />
              </FadeIn>
            ))}
          </div>
        )}

        <ProjectTestimonials testimonials={project.testimonials} />

        <ProjectNav prev={prev} next={next} />
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

function CaseStudyContent({ project }) {
  const hero = project.attachments[0];
  const visibleSections = getVisibleProjectSections(project.sections);
  const insights = getProjectInsights(project);

  return (
    <div className="flex flex-col gap-12 md:gap-20">
      <FadeIn>
        <ProjectHighlight highlight={project.highlight} />
      </FadeIn>

      <FadeIn>
        <figure className="flex flex-col gap-3">
          <div className="relative overflow-hidden rounded-2xl after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:border after:border-zinc-200/50 dark:after:border-zinc-600/50 after:content-[''] md:rounded-3xl md:after:rounded-3xl">
            {hero ? (
              <ProjectMedia
                media={hero}
                title={`${project.title} overview`}
                priority
              />
            ) : (
              <VisualPlaceholder title={`${project.title} overview`} />
            )}
          </div>
          {hero?.caption && (
            <figcaption className="max-w-2xl">
              <p className="text-xs leading-relaxed text-zinc-500 md:text-sm dark:text-zinc-400">
                {hero.caption}
              </p>
            </figcaption>
          )}
        </figure>
      </FadeIn>

      <FadeIn className="grid gap-12 md:grid-cols-[minmax(0,1.65fr)_minmax(18rem,0.75fr)] md:gap-16 lg:gap-24">
        <div className="max-w-3xl">
          <ProjectDescription className="text-lg leading-relaxed md:text-xl">
            {project.description}
          </ProjectDescription>
        </div>

        {insights.length > 0 && (
          <div className="flex flex-col gap-8 md:pl-10">
            {insights.map((insight) => (
              <section key={insight.label} className="flex flex-col gap-3">
                <h2 className="text-xs font-medium tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
                  {insight.label}
                </h2>
                <p className="leading-relaxed">{insight.body}</p>
              </section>
            ))}
          </div>
        )}
      </FadeIn>

      {visibleSections.length > 0 && (
        <div className="grid gap-10 md:grid-cols-2">
          {visibleSections.map((section, index) => {
            const isFullWidth = isFullWidthProjectSection(
              index,
              visibleSections.length,
              section,
            );

            return (
              <FadeIn
                key={section.title}
                index={index}
                className={isFullWidth ? "md:col-span-2" : ""}
              >
                <figure className="flex flex-col gap-3">
                  <div
                    className="relative overflow-hidden rounded-2xl after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:border after:border-zinc-200/50 dark:after:border-zinc-600/50 after:content-[''] md:rounded-3xl md:after:rounded-3xl"
                  style={
                    isFullWidth
                      ? undefined
                      : {
                            aspectRatio: getProjectVisualAspectRatio(
                              section.visual,
                            ),
                        }
                  }
                  >
                    {section.visual ? (
                      <ProjectMedia
                        media={section.visual}
                        title={section.title}
                        contained={!isFullWidth}
                      />
                  ) : (
                    <VisualPlaceholder title={section.title} />
                  )}
                  </div>
                  <figcaption className="max-w-lg">
                    <p className="text-xs leading-relaxed text-zinc-500 md:text-sm dark:text-zinc-400">
                      {section.body}
                    </p>
                  </figcaption>
                </figure>
              </FadeIn>
            );
          })}
        </div>
      )}

      <ProjectClosingStatement>{project.whatScaled}</ProjectClosingStatement>
    </div>
  );
}

function ProjectMedia({ media, title, priority = false, contained = false }) {
  return media.type === "image" ? (
    <Image
      className={`${contained ? "h-full object-contain" : "h-auto"} w-full`}
      src={media.url}
      alt={media.alt || title}
      width={media.width}
      height={media.height}
      priority={priority}
    />
  ) : (
    <ProjectVideo
      media={media}
      className={`${contained ? "h-full object-contain" : "h-auto"} w-full`}
    />
  );
}

function VisualPlaceholder({ title }) {
  return (
    <div className="flex aspect-video w-full items-center justify-center bg-zinc-100 px-6 text-center text-sm text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
      Visual for {title} was being prepared
    </div>
  );
}
