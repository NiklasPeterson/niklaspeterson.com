import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectUrl, projects, siteUrl } from "../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {};
  }

  const image = project.attachments.find((attachment) => attachment.type === "image");
  const title = `${project.title} case study`;
  const url = getProjectUrl(project);

  return {
    title,
    description: project.description,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${title} | Niklas Peterson`,
      description: project.description,
      url,
      siteName: "Niklas Peterson",
      images: image
        ? [
            {
              url: image.url,
              width: image.width,
              height: image.height,
              alt: image.alt,
            },
          ]
        : undefined,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Niklas Peterson`,
      description: project.description,
      images: image ? [image.url] : undefined,
    },
  };
}

export default function WorkPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: getProjectUrl(project),
    creator: {
      "@type": "Person",
      name: "Niklas Peterson",
      url: siteUrl,
    },
    dateCreated: String(project.year),
    publisher: {
      "@type": "Organization",
      name: project.company,
    },
  };

  return (
    <main className="flex w-full max-w-[1440px] flex-col gap-12 px-4 py-8 lg:px-20 md:gap-16 md:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="flex items-center justify-between gap-4">
        <Link href="/#work" className="btn-secondary w-fit">
          Back to work
        </Link>
        <Link href="/#contact" className="btn-primary w-fit">
          Contact
        </Link>
      </nav>

      <header className="flex max-w-4xl flex-col gap-6">
        <div className="flex flex-wrap gap-3 text-sm font-medium uppercase tracking-widest text-zinc-600 dark:text-zinc-300">
          <span>{project.company}</span>
          <span>{project.year}</span>
        </div>
        <h1 className="text-4xl font-bold leading-tight text-zinc-950 dark:text-zinc-50 md:text-7xl">
          {project.title}
        </h1>
        <p className="text-xl md:text-2xl">{project.description}</p>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link w-fit"
          >
            Visit project
          </a>
        )}
      </header>

      <section className="flex flex-col gap-6" aria-label={`${project.title} media`}>
        {project.attachments.map((attachment) => (
          <figure key={attachment.url} className="flex flex-col gap-3">
            {attachment.type === "image" ? (
              <Image
                src={attachment.url}
                alt={attachment.alt}
                width={attachment.width}
                height={attachment.height}
                priority={attachment === project.attachments[0]}
                className="rounded-2xl md:rounded-3xl"
              />
            ) : (
              <video
                src={attachment.url}
                width={attachment.width}
                height={attachment.height}
                controls
                muted
                playsInline
                aria-label={attachment.alt}
                className="rounded-2xl md:rounded-3xl"
              />
            )}
            <figcaption className="text-base text-zinc-600 dark:text-zinc-300">
              {attachment.alt || `${project.title} media`}
            </figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}
