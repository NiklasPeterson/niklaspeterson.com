import Image from "next/image";
import Link from "next/link";

// Prev/next pager for the project detail page. Mirrors the modal's ModalNav
// design, but navigates between pages. prefetch={false} keeps Safari/Next from
// eagerly loading the (media-heavy) neighbor route on hover.
export default function ProjectNav({ prev, next }) {
  if (!prev || !next || prev.slug === next.slug) return null;
  return (
    <nav className="flex items-center justify-between gap-4">
      <NavLink project={prev} dir="prev" />
      <NavLink project={next} dir="next" />
    </nav>
  );
}

function NavLink({ project, dir }) {
  const isPrev = dir === "prev";
  return (
    <Link
      href={`/projects/${project.slug}`}
      prefetch={false}
      aria-label={`${isPrev ? "Previous" : "Next"} project: ${project.title}`}
      className={`group flex max-w-[calc(50%-0.5rem)] min-w-0 items-center gap-3 rounded-xl p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900 ${
        isPrev ? "" : "flex-row-reverse"
      }`}
    >
      <Thumb media={project.attachments[0]} title={project.title} />
      <span
        className={`flex min-w-0 flex-col gap-0.5 ${isPrev ? "items-start" : "items-end"}`}
      >
        <span className="flex items-center gap-1 text-[11px] font-normal tracking-widest text-zinc-400 uppercase dark:text-zinc-500">
          {isPrev && <Chevron dir="left" />}
          {isPrev ? "Previous" : "Next"}
          {!isPrev && <Chevron dir="right" />}
        </span>
        <span className="max-w-full truncate text-sm font-medium text-zinc-950 md:max-w-[15rem] dark:text-zinc-50">
          {project.title}
        </span>
      </span>
    </Link>
  );
}

function Thumb({ media, title }) {
  return (
    <span className="relative aspect-[16/10] w-14 shrink-0 overflow-hidden rounded-md bg-zinc-100 md:w-16 dark:bg-zinc-900">
      {media.type === "image" ? (
        <Image
          src={media.url}
          alt={title}
          fill
          sizes="64px"
          className="object-cover"
        />
      ) : (
        // #t=0.1 nudges the browser to render the first frame as a still poster
        <video
          src={`${media.url}#t=0.1`}
          className="h-full w-full object-cover"
          muted
          playsInline
          preload="metadata"
        />
      )}
    </span>
  );
}

function Chevron({ dir }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-3.5 w-3.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={
          dir === "left"
            ? "M15.75 19.5 8.25 12l7.5-7.5"
            : "m8.25 4.5 7.5 7.5-7.5 7.5"
        }
      />
    </svg>
  );
}
