"use client";

import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@hugeicons/core-free-icons";

// Prev/next pager for both the project detail page and project modal.
// prefetch={false} keeps Safari/Next from eagerly loading the media-heavy
// neighbor route on hover.
export default function ProjectNav({
  prev,
  next,
  variant = "page",
  onNavigate,
}) {
  const isModal = variant === "modal";

  if (!prev || !next || prev.slug === next.slug) return null;

  return (
    <nav
      className={`flex items-center justify-between gap-4 ${
        isModal ? "px-2 py-6 md:px-8" : ""
      }`}
      aria-label="Project navigation"
    >
      <NavControl
        project={prev}
        dir="prev"
        variant={variant}
        onNavigate={onNavigate}
      />
      <NavControl
        project={next}
        dir="next"
        variant={variant}
        onNavigate={onNavigate}
      />
    </nav>
  );
}

function NavControl({ project, dir, variant, onNavigate }) {
  const isPrev = dir === "prev";
  const isModal = variant === "modal";
  const className = `group flex max-w-[calc(50%-0.5rem)] min-w-0 items-center gap-3 rounded-xl p-2 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800 ${
    isPrev
      ? isModal
        ? "pe-4"
        : "pe-3"
      : isModal
        ? "flex-row-reverse ps-4"
        : "flex-row-reverse ps-3"
  }`;

  if (isModal) {
    return (
      <button
        type="button"
        onClick={() => onNavigate(project)}
        aria-label={`${isPrev ? "Previous" : "Next"} project: ${project.title}`}
        className={className}
      >
        <ProjectNavContent project={project} dir={dir} />
      </button>
    );
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      prefetch={false}
      aria-label={`${isPrev ? "Previous" : "Next"} project: ${project.title}`}
      className={className}
    >
      <ProjectNavContent project={project} dir={dir} />
    </Link>
  );
}

function ProjectNavContent({ project, dir }) {
  const isPrev = dir === "prev";

  return (
    <>
      <Thumb media={project.attachments[0]} title={project.title} />
      <span
        className={`flex min-w-0 flex-col gap-0.5 ${isPrev ? "items-start" : "items-end"}`}
      >
        <span className="flex items-center gap-1 text-[11px] font-medium tracking-widest uppercase text-muted">
          {isPrev && <Chevron dir="left" />}
          {isPrev ? "Previous" : "Next"}
          {!isPrev && <Chevron dir="right" />}
        </span>
        <span className="max-w-full truncate text-sm font-medium text-primary md:max-w-60">
          {project.title}
        </span>
      </span>
    </>
  );
}

function Thumb({ media, title }) {
  return (
    <span className="relative aspect-16/10 w-14 shrink-0 overflow-hidden rounded-md bg-zinc-100 after:pointer-events-none after:absolute after:inset-0 after:rounded-md after:border after:border-translucent after:content-[''] md:w-16 dark:bg-zinc-900">
      {!media ? null : media.type === "image" ? (
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
          poster={media.poster}
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
    <HugeiconsIcon
      icon={dir === "left" ? ChevronLeftIcon : ChevronRightIcon}
      strokeWidth={2}
      className="h-3.5 w-3.5"
      aria-hidden="true"
    />
  );
}
