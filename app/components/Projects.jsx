"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import FadeIn from './FadeIn';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null); // State to hold the selected project
  const [projects, setProjects] = useState([]); // State to hold the projects

  // Fetch projects from the JSON file
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/projects.json'); // Adjust the path as necessary
      const data = await response.json();
      // Combine collections and filter projects with attachments
      let projects = data.filter(x => x.attachments.length > 0);
      setProjects(projects);
    };
    fetchProjects();
  }, []);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <>
    <div className='flex flex-wrap gap-12 px-4 pb-20 lg:px-20 md:pb-32'>
      {projects.map((project, index) => {
        if (project.attachments.length < 1) { return null; }

        return (
          <FadeIn key={index} className="group cursor-pointer flex flex-col md:flex-[1_1_40%]">
            <ProjectContent project={project} onOpen={openProject} priority={index < 2} />
          </FadeIn>
        )
      })}
    </div>

    {selectedProject && (
        <div className="fixed bg-white/25 dark:bg-black/25 backdrop-blur-lg z-10 top-0 right-0 bottom-0 left-0 h-screen w-screen overflow-auto md:p-10" onClick={closeProject}>
          <div onClick={(e) => e.stopPropagation()} className="md:h-fit flex flex-col md:rounded-2xl pt-6 md:pt-10 pb-1 md:pb-2 gap-10 md:border border-zinc-200 bg-white dark:bg-black dark:md:border-zinc-800 animate-fadeUp mx-auto max-w-[1440px]">

            <div className="flex flex-col gap-6 md:gap-8 px-4 md:px-10">

              <div className="flex justify-between items-center">
                <h3 className="font-bold text-2xl md:text-4xl text-zinc-950 dark:text-zinc-50">
                  {selectedProject.title}
                </h3>
                <button className="btn-secondary h-10" onClick={closeProject}>Close</button>
              </div>

              <div className="flex gap-4 justify-between flex-wrap animate-fadeUpSlow">
                <div className="text-md md:text-lg" style={{ maxWidth: 720 }}>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col gap-4">
                    {selectedProject.year && <div>Company:</div>}
                    {selectedProject.year && <div>Date:</div>}
                    {selectedProject.url && <div>Link:</div>}
                    {/* {selectedProject.title == "Musho" && <div style={{ display: "none" }}>Case study:</div>} */}
                  </div>

                  <div className="flex flex-col gap-4">
                    {selectedProject.year && <div>{selectedProject.company}</div>}
                    {selectedProject.year && <div>{selectedProject.year}</div>}
                    {selectedProject.url && <a className="btn-link" href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                      <span className="flex gap-1 items-center">
                        Visit
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path></svg>
                      </span>
                    </a>
                    }
                    {/* {selectedProject.title == "Musho" && <a style={{ display: "none" }} href="https://cv.niklaspeterson.com/musho" target="_blank">
                      <span className="flex gap-1 items-center">
                        Visit
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path></svg>
                      </span>
                    </a>
                    } */}
                  </div>

                </div>
              </div>
            </div>

            <div className={`flex flex-col md:flex-row px-4 md:px-10 pb-5 md:pb-8 gap-4 md:gap-6 items-center animate-fadeUpSlow delay-100 md:overflow-x-auto md:snap-x md:snap-mandatory`}>
              {selectedProject.attachments.map((attachment, i) => (
                <div key={i} className="relative md:snap-center">
                  {attachment.type === 'image' ? (
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

                    />
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
  return (
    <div className="group flex flex-col gap-5 w-full h-full" onClick={() => onOpen(project)}>
      {project.attachments.map((media, index) => {
        if (index !== 0) return null;

        const attachment = media.type === "image"
          ? <Image className="" width={media.width} height={media.height} src={media.url} alt={media.alt} priority={priority} />
          : <video className="" src={media.url} autoPlay muted playsInline loop />;

        return (
          <div key={media.id || index} className="rounded-2xl md:rounded-3xl overflow-hidden relative w-full after:content-[''] after:absolute after:inset-0 after:border after:border-white/20 after:pointer-events-none after:rounded-2xl after:md:rounded-3xl transition-transform duration-250 shadow-none group-hover:scale-102 group-hover:shadow-lg active:scale-99">
            {attachment}
          </div>
        );
      })}

      <div className="flex flex-col gap-1 max-w-2xl">
        <div className="font-bold text-xl text-zinc-950 dark:text-zinc-50">
          {project.title}
        </div>

        <div className="text-md md:text-lg line-clamp-2">
          {project.description}
        </div>
      </div>
    </div>
  );
}