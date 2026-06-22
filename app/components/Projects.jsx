"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function Projects({ projects = [] }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

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
          className="fixed top-0 right-0 bottom-0 left-0 z-10 h-screen w-screen overflow-auto bg-white/25 backdrop-blur-lg md:p-10 dark:bg-black/25"
          onClick={closeProject}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="mx-auto flex max-w-[1440px] animate-fadeUp flex-col gap-10 border-zinc-200 bg-white pt-6 pb-1 md:h-fit md:rounded-3xl md:border md:pt-10 md:pb-2 dark:bg-black dark:md:border-zinc-800"
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
          </div>
        </div>
      )}
    </>
  );
}

function ModalGallery({ attachments }) {
  const isSingle = attachments.length === 1;
  const itemClass = isSingle ? "relative md:w-full" : "relative md:snap-center";
  const mediaClass = isSingle
    ? "rounded-lg w-auto max-h-[60vh] max-h-[600px] max-w-[calc(100vw-32px)] md:w-full md:h-auto md:max-w-full md:max-h-none"
    : "rounded-lg w-auto max-h-[60vh] max-h-[600px] max-w-[calc(100vw-32px)] md:max-w-[80vw]";

  return (
    <div className="flex animate-fadeUp flex-col items-center gap-4 px-4 pb-5 md:snap-x md:snap-mandatory md:flex-row md:gap-6 md:overflow-x-auto md:px-10 md:pb-8">
      {attachments.map((attachment, i) => (
        <div key={i} className={itemClass}>
          {attachment.type === "image" ? (
            <Image
              className={mediaClass}
              src={attachment.url}
              alt={attachment.alt}
              height={attachment.height}
              width={attachment.width}
            />
          ) : (
            <video
              className={mediaClass}
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

function ProjectContent({ project, onOpen, priority }) {
  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    onOpen(project);
  };

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full w-full cursor-pointer flex-col gap-5 text-left"
      onClick={handleClick}
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
    </Link>
  );
}
