import Image from "next/image";
import ProjectVideo from "./ProjectVideo";
import {
  ProjectClosingStatement,
  ProjectDescription,
} from "./ProjectScope";
import {
  getProjectInsights,
  getProjectVisualAspectRatio,
  getVisibleProjectSections,
  isFullWidthProjectSection,
} from "../lib/project-layout";

const CASE_STUDY_STYLES = {
  page: {
    narrative:
      "grid gap-12 md:grid-cols-[minmax(0,1.65fr)_minmax(18rem,0.75fr)] md:gap-20",
    insights: "flex flex-col gap-8 md:pl-10",
    insightBody: "leading-relaxed",
  },
  modal: {
    narrative:
      "grid gap-10 md:grid-cols-[minmax(0,1.55fr)_minmax(16rem,0.8fr)] md:gap-16",
    insights: "flex flex-col gap-7 text-pretty md:pl-8",
    insightBody: "text-base leading-relaxed",
  },
};

export default function ProjectCaseStudyContent({
  project,
  variant = "page",
  className = "",
  priority = false,
}) {
  const styles = CASE_STUDY_STYLES[variant];
  const hero = project.attachments[0];
  const visibleSections = getVisibleProjectSections(project.sections);
  const insights = getProjectInsights(project);

  return (
    <div className={`flex flex-col gap-12 md:gap-16 ${className}`}>
      <ProjectFigure
        visual={hero}
        title={`${project.title} overview`}
        caption={hero?.caption}
        variant={variant}
        priority={priority}
      />

      <div className={styles.narrative}>
        <div className="max-w-3xl">
          <ProjectDescription className="text-lg leading-relaxed md:text-xl">
            {project.description}
          </ProjectDescription>
        </div>

        {insights.length > 0 && (
          <div className={styles.insights}>
            {insights.map((insight) => (
              <section key={insight.label} className="flex flex-col gap-3">
                <h2 className="text-xs font-medium tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
                  {insight.label}
                </h2>
                <p className={styles.insightBody}>{insight.body}</p>
              </section>
            ))}
          </div>
        )}
      </div>

      {visibleSections.length > 0 && (
        <div className="grid gap-10 md:grid-cols-2">
          {visibleSections.map((section, index) => {
            const isFullWidth = isFullWidthProjectSection(
              index,
              visibleSections.length,
              section,
            );

            return (
              <div
                key={section.title}
                className={isFullWidth ? "md:col-span-2" : ""}
              >
                <ProjectFigure
                  visual={section.visual}
                  title={section.title}
                  caption={section.body}
                  variant={variant}
                  contained={!isFullWidth}
                />
              </div>
            );
          })}
        </div>
      )}

      <ProjectClosingStatement>{project.whatScaled}</ProjectClosingStatement>
    </div>
  );
}

function ProjectFigure({
  visual,
  title,
  caption,
  variant,
  priority = false,
  contained = false,
}) {
  return (
    <figure className="flex flex-col gap-3">
      <div
        className={`relative overflow-hidden rounded-2xl after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:border after:border-translucent after:content-[''] ${variant === "page" ? "md:rounded-3xl md:after:rounded-3xl" : ""}`}
        style={
          contained
            ? { aspectRatio: getProjectVisualAspectRatio(visual) }
            : undefined
        }
      >
        {visual ? (
          <ProjectMedia
            media={visual}
            title={title}
            priority={priority}
            contained={contained}
          />
        ) : (
          <VisualPlaceholder title={title} />
        )}
      </div>
      {caption && (
        <figcaption className="max-w-2xl">
          <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {caption}
          </p>
        </figcaption>
      )}
    </figure>
  );
}

function ProjectMedia({ media, title, priority, contained }) {
  return media.type === "image" ? (
    <Image
      className={`${contained ? "h-full object-contain" : "h-auto"} w-full`}
      src={media.url}
      alt={media.alt || title}
      width={media.width}
      height={media.height}
      priority={priority}
    />
  ) : (
    <ProjectVideo
      media={media}
      className={`${contained ? "h-full object-contain" : "h-auto"} w-full`}
    />
  );
}

function VisualPlaceholder({ title }) {
  return (
    <div className="flex aspect-video w-full items-center justify-center bg-zinc-100 px-6 text-center text-sm text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
      Visual for {title} was being prepared
    </div>
  );
}
