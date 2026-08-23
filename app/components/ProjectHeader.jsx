import ProjectScope, { ProjectHighlight } from "./ProjectScope";

const HEADER_STYLES = {
  page: {
    container: "flex flex-col gap-6",
    details: "flex flex-col gap-6",
    title:
      "max-w-4xl text-4xl leading-tight font-semibold text-balance text-zinc-950 md:text-6xl dark:text-zinc-50",
    summary: "max-w-3xl text-lg leading-normal text-pretty md:text-xl",
  },
  modal: {
    container: "flex flex-col gap-6 px-4 md:px-10",
    details: "flex flex-col gap-6",
    title:
      "min-w-0 text-2xl leading-tight font-semibold text-balance text-zinc-950 md:text-4xl dark:text-zinc-50",
    summary: "max-w-180 text-md leading-normal text-pretty md:text-lg",
  },
};

export default function ProjectHeader({
  project,
  variant = "page",
  action,
  titleId,
}) {
  const styles = HEADER_STYLES[variant];
  const Title = variant === "modal" ? "h2" : "h1";

  return (
    <div className={styles.container}>
      {action ? (
        <div className="flex items-start justify-between gap-4">
          <Title id={titleId} className={styles.title}>
            {project.title}
          </Title>
          <span className="shrink-0">{action}</span>
        </div>
      ) : (
        <Title id={titleId} className={styles.title}>
          {project.title}
        </Title>
      )}

      <div className={styles.details}>
        <p className={styles.summary}>
          {project.summary || project.description}
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-sm text-zinc-500 dark:text-zinc-400">
          {project.company && (
            <span className="font-medium text-zinc-950 dark:text-zinc-50">
              {project.company}
            </span>
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
              className="group ms-2 inline-flex items-center gap-1.5 font-medium text-zinc-950 transition-opacity hover:opacity-60 md:ms-auto dark:text-zinc-50"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit project
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
            </a>
          )}
        </div>

        <ProjectScope items={project.scope} />
      </div>
      <ProjectHighlight highlight={project.highlight} />
    </div>
  );
}
