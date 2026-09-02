"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import ProjectThumbnailVideo from "./ProjectThumbnailVideo";
import ProjectModal from "./ProjectModal";

export default function Projects({ projects = [] }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const currentIndex = selectedProject
    ? projects.findIndex(
        (p) =>
          (p.slug ?? p.title) ===
          (selectedProject.slug ?? selectedProject.title),
      )
    : -1;
  // Wrap around at the ends so both controls always have a target.
  const prevProject =
    currentIndex >= 0
      ? projects[(currentIndex - 1 + projects.length) % projects.length]
      : null;
  const nextProject =
    currentIndex >= 0 ? projects[(currentIndex + 1) % projects.length] : null;

  return (
    <>
      <section
        className="flex flex-wrap gap-12 px-4 pb-24 md:pb-32 md:px-20"
        aria-labelledby="selected-work-heading"
      >
        <h2 id="selected-work-heading" className="sr-only">
          Selected product design case studies
        </h2>
        {projects.map((project, index) => (
          <FadeIn
            key={project.slug ?? index}
            className="flex flex-col md:flex-[1_1_40%]"
            index={index}
            stagger="pair"
          >
            <ProjectContent
              project={project}
              onOpen={openProject}
              priority={project.preload}
              fetchPriority={project.preload ? "high" : undefined}
            />
          </FadeIn>
        ))}
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            prev={prevProject}
            next={nextProject}
            onClose={closeProject}
            onNavigate={setSelectedProject}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function ProjectContent({ project, onOpen, priority, fetchPriority }) {
  const preview = project.attachments[0];

  return (
    <Link
      href={`/projects/${project.slug}`}
      prefetch={false}
      className="group flex h-full w-full cursor-pointer flex-col gap-5 text-left"
      onClick={(event) => {
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }

        if (!window.matchMedia("(min-width: 768px)").matches) {
          return;
        }

        event.preventDefault();
        onOpen(project);
      }}
      aria-label={`Open ${project.title} project`}
    >
      {preview && (
        <div className="relative w-full overflow-hidden rounded-2xl shadow-none transition-transform duration-150 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-102 [@media(hover:hover)_and_(pointer:fine)]:group-hover:shadow-md after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:border after:border-translucent after:content-[''] active:scale-99 md:rounded-3xl after:md:rounded-3xl">
          {preview.type === "image" ? (
            <Image
              width={preview.width}
              height={preview.height}
              src={preview.url}
              alt={preview.alt}
              priority={priority}
            />
          ) : (
            <ProjectThumbnailVideo
              media={preview}
              className={preview.cropEdges === true ? "scale-[1.004]" : undefined}
              priority={priority}
              fetchPriority={fetchPriority}
            />
          )}
        </div>
      )}

      <div className="flex max-w-2xl flex-col gap-1">
        <h3 className="text-xl font-semibold text-primary">
          {project.title}
        </h3>

        <div className="text-md line-clamp-2 md:text-lg">
          {project.summary}
        </div>
      </div>
    </Link>
  );
}
