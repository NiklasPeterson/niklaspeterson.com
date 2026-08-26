const PROJECT_EYEBROW_CLASS =
  "text-[11px] font-medium tracking-widest uppercase text-muted";

export default function ProjectScope({ items = [] }) {
  if (items.length === 0) return null;

  return (
    <dl className="grid max-w-3xl gap-x-8 gap-y-4 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-1">
          <dt className={PROJECT_EYEBROW_CLASS}>
            {item.label}
          </dt>
          <dd className="text-sm leading-relaxed text-primary">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ProjectDescription({ children, className = "" }) {
  if (!children) return null;

  const paragraphs = children.split(/\n\s*\n/).filter(Boolean);

  return (
    <div className={`flex flex-col gap-5 text-pretty ${className}`}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export function ProjectHighlight({ highlight }) {
  if (!highlight) return null;

  return (
    <section
      aria-labelledby="project-impact"
      className="mt-2 grid gap-5 rounded-2xl border border-translucent bg-white px-5 py-6 md:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] md:items-start md:gap-12 md:rounded-3xl md:px-8 md:py-8 dark:bg-zinc-900"
    >
      <div className="flex flex-col gap-3">
        <p className={PROJECT_EYEBROW_CLASS}>Impact</p>
        <h2
          id="project-impact"
          className="text-lg leading-tight font-medium text-balance text-primary md:text-2xl"
        >
          {highlight.title}
        </h2>
      </div>

      {highlight.stats?.length > 0 && (
        <dl className="flex flex-col gap-x-8 gap-y-5 md:self-center">
          {highlight.stats.map((stat) => (
            <div
              key={`${stat.value}-${stat.label}`}
              className="flex min-w-20 flex-col gap-2"
            >
              <dd className="text-2xl leading-none font-semibold text-primary md:text-3xl">
                {stat.value}
              </dd>
                <dt className="text-sm leading-snug text-pretty text-muted">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}

export function ProjectClosingStatement({ children }) {
  if (!children) return null;

  return (
    <section className="flex max-w-4xl flex-col gap-3">
      <h2 className="text-xs font-medium tracking-widest uppercase text-muted">
        What scaled
      </h2>
      <p className="text-lg leading-relaxed md:text-xl">{children}</p>
    </section>
  );
}
