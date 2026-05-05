import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProjects, getProjectBySlug } from '../../lib/projects';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

const SITE_URL = 'https://www.niklaspeterson.com';

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const firstImage = project.attachments.find((a) => a.type === 'image');
  const ogImage = firstImage ? firstImage.url : '/opengraph-image.png';

  return {
    title: `${project.title} — Niklas Peterson`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — Niklas Peterson`,
      description: project.description,
      url: `${SITE_URL}/projects/${project.slug}`,
      images: [{ url: ogImage }],
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const dateModified = new Date().toISOString().split('T')[0];
  const firstImage = project.attachments.find((a) => a.type === 'image');

  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `${SITE_URL}/projects/${project.slug}`,
    ...(project.year && { dateCreated: String(project.year) }),
    dateModified,
    creator: { '@id': `${SITE_URL}/#person` },
    ...(firstImage && { image: `${SITE_URL}${firstImage.url}` }),
    ...(project.company && {
      sourceOrganization: { '@type': 'Organization', name: project.company },
    }),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: project.title,
        item: `${SITE_URL}/projects/${project.slug}`,
      },
    ],
  };

  return (
    <main className="w-full max-w-[1440px] flex flex-col">
      <Nav />

      <article className="flex flex-col gap-10 md:gap-16 px-4 lg:px-20 pt-10 md:pt-16 pb-20 md:pb-32">
        <header className="flex flex-col gap-6 max-w-3xl">
          <h1 className="font-bold text-4xl md:text-6xl leading-tight text-zinc-950 dark:text-zinc-50">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl">{project.description}</p>

          <div className="flex flex-wrap gap-x-10 gap-y-4 text-base">
            {project.company && (
              <div className="flex flex-col gap-1">
                <div className="uppercase text-xs font-normal tracking-widest text-zinc-600 dark:text-zinc-300">
                  Company
                </div>
                <div className="text-zinc-950 dark:text-zinc-50">{project.company}</div>
              </div>
            )}
            {project.year && (
              <div className="flex flex-col gap-1">
                <div className="uppercase text-xs font-normal tracking-widest text-zinc-600 dark:text-zinc-300">
                  Year
                </div>
                <div className="text-zinc-950 dark:text-zinc-50">{project.year}</div>
              </div>
            )}
            {project.url && (
              <div className="flex flex-col gap-1">
                <div className="uppercase text-xs font-normal tracking-widest text-zinc-600 dark:text-zinc-300">
                  Link
                </div>
                <a
                  className="btn-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex gap-1 items-center">
                    Visit live
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            )}
          </div>
        </header>

        <div className="flex flex-col gap-4 md:gap-6">
          {project.attachments.map((attachment, i) => (
            <div key={i} className="rounded-2xl md:rounded-3xl overflow-hidden relative">
              {attachment.type === 'image' ? (
                <Image
                  className="w-full h-auto"
                  src={attachment.url}
                  alt={attachment.alt || project.title}
                  width={attachment.width}
                  height={attachment.height}
                  priority={i === 0}
                />
              ) : (
                <video
                  className="w-full h-auto"
                  src={attachment.url}
                  height={attachment.height}
                  width={attachment.width}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
            </div>
          ))}
        </div>

        <Link href="/" className="btn-link self-start">
          <span className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            Back to all projects
          </span>
        </Link>
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
