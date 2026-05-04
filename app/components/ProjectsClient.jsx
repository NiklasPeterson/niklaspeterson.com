"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function ProjectsClient({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="flex flex-wrap gap-12 px-4 pb-20 lg:px-20 md:pb-32">
        {projects.map((project, index) => {
          if (project.attachments.length < 1) return null;

          return (
            <FadeIn
              key={project.slug}
              className="flex flex-col md:flex-[1_1_40%]"
              index={index}
            >
              <ProjectContent
                project={project}
                onOpen={openProject}
                priority={index < 2}
              />
            </FadeIn>
          );
        })}
      </div>

      {selectedProject && (
        <div
          className="fixed bottom-0 left-0 right-0 top-0 z-10 h-screen w-screen overflow-auto bg-white/25 backdrop-blur-lg dark:bg-black/25 md:p-10"
          onClick={closeProject}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="mx-auto flex max-w-[1440px] flex-col gap-10 bg-white pb-1 pt-6 animate-fadeUp dark:bg-black md:h-fit md:rounded-3xl md:border md:border-zinc-200 md:pb-2 md:pt-10 dark:md:border-zinc-800"
          >
            <div className="flex flex-col gap-6 px-4 md:gap-8 md:px-10">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50 md:text-4xl">
                  {selectedProject.title}
                </h3>
                <button className="btn-secondary h-10" onClick={closeProject}>
                  Close
                </button>
              </div>

              <div className="flex flex-wrap justify-between gap-4 animate-fadeUp">
                <div className="text-md md:text-lg" style={{ maxWidth: 720 }}>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col gap-4">
                    {selectedProject.year && <div>Company:</div>}
                    {selectedProject.year && <div>Date:</div>}
                    {selectedProject.url && <div>Link:</div>}
                    <div>Case study:</div>
                  </div>

                  <div className="flex flex-col gap-4">
                    {selectedProject.year && <div>{selectedProject.company}</div>}
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
                          <ExternalIcon />
                        </span>
                      </a>
                    )}
                    <Link className="btn-link" href={`/work/${selectedProject.slug}`}>
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 px-4 pb-5 animate-fadeUp md:flex-row md:gap-6 md:overflow-x-auto md:snap-x md:snap-mandatory md:px-10 md:pb-8">
              {selectedProject.attachments.map((attachment, i) => (
                <div key={attachment.url} className="relative md:snap-center">
                  {attachment.type === "image" ? (
                    <Image
                      className="max-h-[600px] max-w-[calc(100vw-32px)] rounded-lg md:max-w-[80vw]"
                      src={attachment.url}
                      alt={attachment.alt}
                      height={attachment.height}
                      width={attachment.width}
                    />
                  ) : (
                    <figure>
                      <video
                        className="max-h-[600px] max-w-[calc(100vw-32px)] rounded-lg md:max-w-[80vw]"
                        src={attachment.url}
                        height={attachment.height}
                        width={attachment.width}
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-label={attachment.alt}
                      />
                      <figcaption className="sr-only">
                        {attachment.alt || `${selectedProject.title} video ${i + 1}`}
                      </figcaption>
                    </figure>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ProjectContent({ project, onOpen, priority }) {
  const media = project.attachments[0];

  return (
    <article className="group flex h-full w-full flex-col gap-5">
      <button
        type="button"
        className="flex cursor-pointer flex-col gap-5 text-left"
        onClick={() => onOpen(project)}
        aria-label={`Open ${project.title} project`}
      >
        <div className="relative w-full overflow-hidden rounded-2xl shadow-none transition-transform duration-200 after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:border after:border-white/20 after:content-[''] group-hover:scale-102 group-hover:shadow-lg active:scale-99 md:rounded-3xl after:md:rounded-3xl">
          {media.type === "image" ? (
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
              aria-label={media.alt}
            />
          )}
        </div>
      </button>

      <div className="flex max-w-2xl flex-col gap-2">
        <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50">
          {project.title}
        </h3>
        <p className="text-md line-clamp-2 md:text-lg">{project.description}</p>
        <Link className="btn-link w-fit" href={`/work/${project.slug}`}>
          Read case study
        </Link>
      </div>
    </article>
  );
}

function ExternalIcon() {
  return (
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
  );
}
