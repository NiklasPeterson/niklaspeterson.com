import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  projects,
  getProjectBySlug,
  getProjectSlugs,
} from "../../data/projects";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const SITE_URL = "https://niklaspeterson.com";

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.title} — Niklas Peterson`;
  const description = project.description.slice(0, 200);
  const url = `${SITE_URL}/work/${project.slug}`;
  const firstImage = project.attachments.find((a) => a.type === "image");

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Niklas Peterson",
      type: "article",
      images: firstImage
        ? [
            {
              url: firstImage.url,
              width: firstImage.width,
              height: firstImage.height,
              alt: firstImage.alt || project.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: firstImage ? [firstImage.url] : undefined,
    },
  };
}

export default async function WorkPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const url = `${SITE_URL}/work/${project.slug}`;
  const firstImage = project.attachments.find((a) => a.type === "image");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url,
    author: {
      "@type": "Person",
      name: "Niklas Peterson",
      url: SITE_URL,
    },
    creator: {
      "@type": "Person",
      name: "Niklas Peterson",
      url: SITE_URL,
    },
    ...(project.company && {
      sourceOrganization: {
        "@type": "Organization",
        name: project.company,
      },
    }),
    ...(project.year && { dateCreated: String(project.year) }),
    ...(firstImage && { image: `${SITE_URL}${firstImage.url}` }),
    ...(project.url && { sameAs: project.url }),
  };

  return (
    <main className="w-full max-w-[1440px] flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Nav />

      <article className="flex flex-col gap-10 px-4 pb-20 pt-28 md:pt-36 lg:px-20 md:pb-32">
        <nav aria-label="Breadcrumb" className="text-sm">
          <Link href="/#work" className="btn-link">
            ← Back to Selected work
          </Link>
        </nav>

        <header className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-950 dark:text-zinc-50">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">{project.description}</p>

          <dl className="flex flex-wrap gap-x-8 gap-y-3 text-base">
            {project.company && (
              <div className="flex gap-2">
                <dt className="text-zinc-500 dark:text-zinc-400">Company:</dt>
                <dd className="text-zinc-950 dark:text-zinc-50">
                  {project.company}
                </dd>
              </div>
            )}
            {project.year && (
              <div className="flex gap-2">
                <dt className="text-zinc-500 dark:text-zinc-400">Year:</dt>
                <dd className="text-zinc-950 dark:text-zinc-50">
                  {project.year}
                </dd>
              </div>
            )}
            {project.url && (
              <div className="flex gap-2">
                <dt className="text-zinc-500 dark:text-zinc-400">Link:</dt>
                <dd>
                  <a
                    className="btn-link"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit ↗
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </header>

        <div className="flex flex-col gap-6">
          {project.attachments.map((attachment, i) => (
            <figure key={i} className="flex flex-col gap-2">
              {attachment.type === "image" ? (
                <Image
                  className="rounded-lg w-full h-auto"
                  src={attachment.url}
                  alt={attachment.alt || project.title}
                  height={attachment.height}
                  width={attachment.width}
                  priority={i === 0}
                />
              ) : (
                <video
                  className="rounded-lg w-full h-auto"
                  src={attachment.url}
                  height={attachment.height}
                  width={attachment.width}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={`${project.title} preview video`}
                />
              )}
              {attachment.alt && (
                <figcaption className="text-sm text-zinc-500 dark:text-zinc-400">
                  {attachment.alt}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        <RelatedWork currentSlug={project.slug} />
      </article>

      <Footer />
    </main>
  );
}

function RelatedWork({ currentSlug }) {
  const others = projects
    .filter((p) => p.slug !== currentSlug && p.attachments.length > 0)
    .slice(0, 3);
  if (others.length === 0) return null;

  return (
    <section aria-labelledby="related-heading" className="flex flex-col gap-4 mt-10">
      <h2
        id="related-heading"
        className="text-2xl md:text-3xl font-bold text-zinc-950 dark:text-zinc-50"
      >
        More work
      </h2>
      <ul className="flex flex-col gap-2">
        {others.map((p) => (
          <li key={p.slug}>
            <Link className="btn-link" href={`/work/${p.slug}`}>
              {p.title} →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
