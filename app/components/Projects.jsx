import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/projects";

export default function Projects() {
  const visibleProjects = projects.filter((p) => p.attachments.length > 0);

  return (
    <section id="work" className="flex flex-col gap-8 px-4 pb-20 lg:px-20 md:pb-32" aria-labelledby="work-heading">
      <h2
        id="work-heading"
        className="text-3xl md:text-5xl font-bold text-zinc-950 dark:text-zinc-50"
      >
        Selected work
      </h2>

      <div className="flex flex-wrap gap-12">
        {visibleProjects.map((project, index) => (
          <FadeIn
            key={project.slug}
            className="flex flex-col md:flex-[1_1_40%]"
            index={index}
          >
            <ProjectCard project={project} priority={index < 2} />
          </FadeIn>
        ))}
      </div>

      <ProjectModal projects={visibleProjects} />
    </section>
  );
}
