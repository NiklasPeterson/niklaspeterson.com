"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Projects({ projects = [] }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const overlayRef = useRef(null);

  const navigateTo = (project) => {
    setSelectedProject(project);
    if (overlayRef.current) overlayRef.current.scrollTop = 0;
  };

  const currentIndex = selectedProject
    ? projects.findIndex(
        (p) =>
          (p.slug ?? p.title) === (selectedProject.slug ?? selectedProject.title),
      )
    : -1;
  // Wrap around at the ends so both controls always have a target.
  const prevProject =
    currentIndex >= 0
      ? projects[(currentIndex - 1 + projects.length) % projects.length]
      : null;
  const nextProject =
    currentIndex >= 0
      ? projects[(currentIndex + 1) % projects.length]
      : null;

  return (
    <>
      <div className="flex flex-wrap gap-12 px-4 pb-20 md:pb-32 lg:px-20">
        {projects.map((project, index) => (
          <FadeIn
            key={project.slug ?? index}
            className="flex flex-col md:flex-[1_1_40%]"
            index={index}
          >
            <ProjectContent
              project={project}
              onOpen={openProject}
              priority={index < 2}
            />
          </FadeIn>
        ))}
      </div>

      {selectedProject && (
        <div
          ref={overlayRef}
          className="fixed top-0 right-0 bottom-0 left-0 z-10 h-screen w-screen overflow-auto bg-white/25 backdrop-blur-lg md:p-10 dark:bg-black/25"
          onClick={closeProject}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="mx-auto flex max-w-360 md:animate-fadeUp flex-col gap-10 border-zinc-200 bg-white pt-6 pb-1 md:h-fit md:rounded-3xl md:border md:pt-10 md:pb-2 dark:bg-black dark:md:border-zinc-800"
          >
            <div className="flex flex-col gap-6 px-4 md:gap-8 md:px-10">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-zinc-950 md:text-4xl dark:text-zinc-50">
                  {selectedProject.title}
                </h3>
                <button className="btn-secondary h-10" onClick={closeProject}>
                  Close
                </button>
              </div>

              <div className="flex animate-fadeUp flex-wrap justify-between gap-4">
                <div className="text-md md:text-lg" style={{ maxWidth: 720 }}>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col gap-4">
                    {selectedProject.year && <div>Company:</div>}
                    {selectedProject.year && <div>Date:</div>}
                    {selectedProject.url && <div>Link:</div>}
                  </div>

                  <div className="flex flex-col gap-4">
                    {selectedProject.year && (
                      <div>{selectedProject.company}</div>
                    )}
                    {selectedProject.year && <div>{selectedProject.year}</div>}
                    {selectedProject.url && (
                      <a
                        className="btn-link"
                        href={selectedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="flex items-center gap-1">
                          Visit
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
                            ></path>
                          </svg>
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <ModalGallery attachments={selectedProject.attachments} />

            {prevProject && nextProject && prevProject !== nextProject && (
              <ModalNav
                prev={prevProject}
                next={nextProject}
                onNavigate={navigateTo}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

function ModalGallery({ attachments }) {
  // const isSingle = attachments.length === 1;
  // const itemClass = isSingle ? "relative md:w-full" : "relative md:snap-center";
  // const mediaClass = isSingle
  //     ? "rounded-lg w-auto max-h-[60vh] max-h-[600px] max-w-[calc(100vw-32px)] md:w-full md:h-auto md:max-w-full md:max-h-none"
  //     : "rounded-lg w-auto max-h-[60vh] max-h-[600px] max-w-[calc(100vw-32px)] md:max-w-[80vw]";

  return (
    <div className="flex animate-fadeUp flex-col items-center gap-4 px-4 pb-5 md:gap-6 md:overflow-x-auto md:px-10 md:pb-8">
      {attachments.map((attachment, i) => (
        <div key={i} className="relative md:w-full">
          {attachment.type === "image" ? (
            <Image
              className="rounded-lg w-auto max-w-[calc(100vw-32px)] md:w-full md:h-auto md:max-w-full md:max-h-none"
              src={attachment.url}
              alt={attachment.alt}
              height={attachment.height}
              width={attachment.width}
            />
          ) : (
            <video
              className="rounded-lg w-auto max-w-[calc(100vw-32px)] md:w-full md:h-auto md:max-w-full md:max-h-none"
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
  );
}

function ModalNav({ prev, next, onNavigate }) {
  return (
    <div className="flex items-center justify-between gap-4 px-2 pb-2 md:px-8">
      <NavButton project={prev} dir="prev" onNavigate={onNavigate} />
      <NavButton project={next} dir="next" onNavigate={onNavigate} />
    </div>
  );
}

function NavButton({ project, dir, onNavigate }) {
  const isPrev = dir === "prev";
  return (
    <button
      type="button"
      onClick={() => onNavigate(project)}
      aria-label={`${isPrev ? "Previous" : "Next"} project: ${project.title}`}
      className={`group flex items-center gap-3 rounded-xl p-2 ${isPrev ? "pr-4" : "pl-4"} transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900 ${
        isPrev ? "" : "flex-row-reverse"
      }`}
    >
      <NavThumb media={project.attachments[0]} title={project.title} />
      <span
        className={`flex min-w-0 flex-col gap-0.5 ${isPrev ? "items-start" : "items-end"}`}
      >
        <span className="flex items-center gap-1 text-[11px] font-normal tracking-widest text-zinc-400 uppercase dark:text-zinc-500">
          {isPrev && <Chevron dir="left" />}
          {isPrev ? "Previous" : "Next"}
          {!isPrev && <Chevron dir="right" />}
        </span>
        <span className="max-w-[34vw] truncate text-sm font-medium text-zinc-950 md:max-w-[15rem] dark:text-zinc-50">
          {project.title}
        </span>
      </span>
    </button>
  );
}

function NavThumb({ media, title }) {
  return (
    <span className="relative aspect-[16/10] w-14 shrink-0 overflow-hidden rounded-md bg-zinc-100 md:w-16 dark:bg-zinc-900">
      {media.type === "image" ? (
        <Image src={media.url} alt={title} fill sizes="64px" className="object-cover" />
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
        d={dir === "left" ? "M15.75 19.5 8.25 12l7.5-7.5" : "m8.25 4.5 7.5 7.5-7.5 7.5"}
      />
    </svg>
  );
}

function ProjectContent({ project, onOpen, priority }) {
  // Plain <button>, NOT a link: a navigable <a href="/projects/[slug]"> (or
  // next/link) makes Safari speculatively load that heavy detail route on
  // hover/mousedown, freezing the main thread ~1-2s before the modal renders.
  // The project routes stay discoverable via sitemap.xml + JSON-LD instead.
  return (
    <button
      type="button"
      className="group flex h-full w-full cursor-pointer flex-col gap-5 text-left"
      onClick={() => onOpen(project)}
      aria-label={`Open ${project.title} project`}
    >
      {project.attachments.map((media, index) => {
        if (index !== 0) return null;

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
            <video src={media.url} autoPlay muted playsInline loop />
          );

        return (
          <div
            key={media.id || index}
            className="relative w-full overflow-hidden rounded-2xl shadow-none transition-transform duration-200 group-hover:scale-102 group-hover:shadow-lg after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:border after:border-white/20 after:content-[''] active:scale-99 md:rounded-3xl after:md:rounded-3xl"
          >
            {attachment}
          </div>
        );
      })}

      <div className="flex max-w-2xl flex-col gap-1">
        <div className="text-xl font-bold text-zinc-950 dark:text-zinc-50">
          {project.title}
        </div>

        <div className="text-md line-clamp-2 md:text-lg">
          {project.description}
        </div>
      </div>
    </button>
  );
}
