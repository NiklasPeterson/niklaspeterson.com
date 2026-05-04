"use client";

import Image from "next/image";

export default function ProjectCard({ project, priority }) {
  const handleOpen = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(
      new CustomEvent("open-project", { detail: { slug: project.slug } })
    );
  };

  const media = project.attachments[0];
  if (!media) return null;

  const attachment =
    media.type === "image" ? (
      <Image
        width={media.width}
        height={media.height}
        src={media.url}
        alt={media.alt}
        priority={priority}
      />
    ) : (
      <video
        src={media.url}
        autoPlay
        muted
        playsInline
        loop
        aria-label={`${project.title} preview video`}
      />
    );

  return (
    <button
      type="button"
      className="group flex h-full w-full cursor-pointer flex-col gap-5 text-left"
      onClick={handleOpen}
      aria-label={`Open ${project.title} project`}
    >
      <div className="rounded-2xl md:rounded-3xl overflow-hidden relative w-full after:content-[''] after:absolute after:inset-0 after:border after:border-white/20 after:pointer-events-none after:rounded-2xl after:md:rounded-3xl transition-transform duration-200 shadow-none group-hover:scale-102 group-hover:shadow-lg active:scale-99">
        {attachment}
      </div>

      <div className="flex flex-col gap-1 max-w-2xl">
        <h3 className="font-bold text-xl text-zinc-950 dark:text-zinc-50">
          {project.title}
        </h3>
        <p className="text-md md:text-lg line-clamp-2">{project.description}</p>
      </div>
    </button>
  );
}
