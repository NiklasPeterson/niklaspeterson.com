import { HugeiconsIcon } from "@hugeicons/react";
import { SquareArrowUpRightIcon } from "@hugeicons/core-free-icons";
import ProjectScope, { ProjectHighlight } from "./ProjectScope";

export default function ProjectHeader({
  project,
  variant = "page",
  action,
  titleId,
}) {
  const isModal = variant === "modal";
  const Title = isModal ? "h2" : "h1";

  return (
    <div className={`flex flex-col gap-12 ${isModal ? "px-4 md:px-10" : ""}`}>
      <div className="flex flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <Title
            id={titleId}
            className={`leading-tight font-semibold text-balance text-primary ${isModal ? "min-w-0 text-2xl md:text-4xl" : "max-w-4xl text-4xl md:text-6xl"}`}
          >
            {project.title}
          </Title>
          {action && <span className="shrink-0">{action}</span>}
        </div>

        <p
          className={`leading-normal text-pretty ${isModal ? "text-md max-w-180 md:text-lg" : "max-w-3xl text-lg md:text-xl"}`}
        >
          {project.summary}
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-sm text-muted">
          {project.company && (
            <span className="font-medium text-primary">{project.company}</span>
          )}
          {project.company && project.year && (
            <span
              aria-hidden="true"
              className="text-zinc-300 dark:text-zinc-700"
            >
              /
            </span>
          )}
          {project.year && <span>{project.year}</span>}
          {project.url && (
            <a
              className="group ms-2 inline-flex items-center gap-1.5 font-medium text-primary transition-opacity hover:opacity-60 md:ms-auto"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit project
              <HugeiconsIcon
                icon={SquareArrowUpRightIcon}
                strokeWidth={2}
                className="h-4 w-4"
                aria-hidden="true"
              />
            </a>
          )}
        </div>
        <ProjectScope items={project.scope} />
      </div>
      <ProjectHighlight highlight={project.highlight} />
    </div>
  );
}
