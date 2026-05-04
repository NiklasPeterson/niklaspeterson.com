"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProjectModal({ projects }) {
  const [selectedSlug, setSelectedSlug] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      const slug = e.detail?.slug;
      if (slug) setSelectedSlug(slug);
    };
    window.addEventListener("open-project", handler);
    return () => window.removeEventListener("open-project", handler);
  }, []);

  useEffect(() => {
    if (!selectedSlug) return;
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedSlug(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedSlug]);

  const selectedProject = selectedSlug
    ? projects.find((p) => p.slug === selectedSlug)
    : null;

  if (!selectedProject) return null;

  const close = () => setSelectedSlug(null);

  return (
    <div
      className="fixed bg-white/25 dark:bg-black/25 backdrop-blur-lg z-10 top-0 right-0 bottom-0 left-0 h-screen w-screen overflow-auto md:p-10"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label={selectedProject.title}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="md:h-fit flex flex-col md:rounded-3xl pt-6 md:pt-10 pb-1 md:pb-2 gap-10 md:border border-zinc-200 bg-white dark:bg-black dark:md:border-zinc-800 animate-fadeUp mx-auto max-w-[1440px]"
      >
        <div className="flex flex-col gap-6 md:gap-8 px-4 md:px-10">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl md:text-4xl text-zinc-950 dark:text-zinc-50">
              {selectedProject.title}
            </h3>
            <button className="btn-secondary h-10" onClick={close}>
              Close
            </button>
          </div>

          <div className="flex gap-4 justify-between flex-wrap animate-fadeUp">
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
                {selectedProject.year && <div>{selectedProject.company}</div>}
                {selectedProject.year && <div>{selectedProject.year}</div>}
                {selectedProject.url && (
                  <a
                    className="btn-link"
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex gap-1 items-center">
                      Visit
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
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row px-4 md:px-10 pb-5 md:pb-8 gap-4 md:gap-6 items-center animate-fadeUp md:overflow-x-auto md:snap-x md:snap-mandatory">
          {selectedProject.attachments.map((attachment, i) => (
            <div key={i} className="relative md:snap-center">
              {attachment.type === "image" ? (
                <Image
                  className="rounded-lg w-auto max-h-[60vh] max-h-[600px] max-w-[calc(100vw-32px)] md:max-w-[80vw]"
                  src={attachment.url}
                  alt={attachment.alt}
                  height={attachment.height}
                  width={attachment.width}
                />
              ) : (
                <video
                  className="rounded-lg w-auto max-h-[60vh] max-h-[600px] max-w-[calc(100vw-32px)] md:max-w-[80vw]"
                  src={attachment.url}
                  height={attachment.height}
                  width={attachment.width}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={`${selectedProject.title} preview video`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
