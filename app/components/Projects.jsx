import { projects } from "../data/projects";
import ProjectsClient from "./ProjectsClient";

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-10">
      <div className="flex flex-col gap-3 px-4 pb-10 lg:px-20">
        <h2 className="text-4xl font-bold leading-tight text-zinc-950 dark:text-zinc-50 md:text-6xl">
          Selected work
        </h2>
        <p className="max-w-3xl text-lg md:text-xl">
          Product design, design systems, interface concepts, and Figma plugin
          work across Lummi, Musho, Buenoverse, and Bueno Drops.
        </p>
      </div>
      <ProjectsClient projects={projects} />
    </section>
  );
}
