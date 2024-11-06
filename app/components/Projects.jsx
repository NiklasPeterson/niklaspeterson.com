"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Motion from './Motion';

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
      <div className='flex flex-wrap gap-12 px-4 pb-20 lg:px-20 md:pb-32'>
          {projects.map((project, index) => {
              if (project.attachments.length < 1) { return null; }

              return (
                  <Motion key={index} className="group flex flex-col md:flex-1-1-40">
                      <ProjectContent project={project} onOpen={openProject} />
                  </Motion>
              )
          })}

          {selectedProject && (
              <div className="modal">
                  <div className="modal-content flex flex-col rounded-2xl py-6 md:py-10 gap-10 bg-white dark:bg-black opacity-0 fade-slide-in">

                      <div className="flex flex-col gap-6 md:gap-10 px-4 md:px-10">

                          <div className="flex justify-between items-center">
                              <h3 className="font-bold text-2xl md:text-4xl text-zinc-950 dark:text-zinc-50">
                                  {selectedProject.title}
                              </h3>
                              <button className="btn-secondary h-10" onClick={closeProject}>Close</button>
                          </div>

                          <div className="flex gap-4 justify-between flex-wrap opacity-0 fade-slide-in fadeSlideInSequential-delay-0">
                              <div className="text-md md:text-lg" style={{ maxWidth: 720 }}>
                                  <p>{selectedProject.description}</p>
                              </div>

                              <div className="flex gap-4">
                                  <div className="flex flex-col gap-4">
                                      {selectedProject.year && <div>Date:</div>}
                                      {selectedProject.year && <div>Client:</div>}
                                      {selectedProject.url && <div>Link:</div>}
                                      {selectedProject.title == "Musho" && <div style={{ display: "none" }}>Case study:</div>}
                                  </div>

                                  <div className="flex flex-col gap-4">
                                      {selectedProject.year && <div>{selectedProject.year}</div>}
                                      {selectedProject.year && <div>{selectedProject.company}</div>}
                                      {selectedProject.url && <a className="btn-link" href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                                          <span className="flex gap-1 items-center">
                                              Visit
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path></svg>
                                          </span>
                                      </a>
                                      }
                                      {selectedProject.title == "Musho" && <a style={{ display: "none" }} href="https://cv.niklaspeterson.com/musho" target="_blank">
                                          <span className="flex gap-1 items-center">
                                              Visit
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path></svg>
                                          </span>
                                      </a>
                                      }
                                  </div>

                              </div>
                          </div>
                      </div>

                      <div className={`gallery-images flex flex-col md:flex-row px-4 md:px-10 gap-4 md:gap-6 items-center opacity-0 fade-slide-in fadeSlideInSequential-delay-01`}>
                          {selectedProject.attachments.map((attachment, i) => (
                              <div key={i} className="relative">
                                  {attachment.type === 'image' ? (
                                      <Image
                                          className="rounded-lg"
                                          src={attachment.url}
                                          alt={attachment.alt}
                                          width={attachment.width}
                                          height={attachment.height}
                                      />
                                  ) : (
                                      <video
                                          className="rounded-lg"
                                          src={attachment.url}
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

      </div>
  );
}

function ProjectContent({ project, onOpen }) {
  return (
      <div className="group flex flex-col gap-4 w-full h-full" onClick={() => onOpen(project)}>
          {project.attachments.map((media, index) => {
              if (index !== 0) return null;

              const attachment = media.type === "image"
                  ? <Image className="transition-transform duration-300 group-hover:scale-105" width={media.width} height={media.height} src={media.url} alt={media.alt} />
                  : <video className="transition-transform duration-300 group-hover:scale-105" src={media.url} autoPlay muted playsInline loop />;

              return (
                  <div key={media.id || index} className="rounded-2xl md:rounded-3xl overflow-hidden relative w-full styledBorder">
                      {attachment}
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl text-zinc-950 bg-zinc-50 absolute top-4 right-4 rotate-45 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-105">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rotate-45"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path></svg>
                      </div>
                  </div>
              );
          })}

          <div className="flex flex-col gap-1 max-w-2xl">
              <h4 className="font-bold text-xl text-zinc-950 dark:text-zinc-50">
                  {project.title}
              </h4>

              <div className="text-md md:text-lg line-clamp-2">
                  {project.description}
              </div>
          </div>
      </div>
  );
}