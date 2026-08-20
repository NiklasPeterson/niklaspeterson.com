export default function ProjectScope({ items = [] }) {
  if (items.length === 0) return null;

  return (
    <dl className="grid max-w-3xl gap-x-8 gap-y-4 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-1">
          <dt className="text-[11px] font-medium tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
            {item.label}
          </dt>
          <dd className="text-sm leading-relaxed text-zinc-950 dark:text-zinc-50">
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

export function ProjectClosingStatement({ children }) {
  if (!children) return null;

  return (
    <section className="flex max-w-4xl flex-col gap-3 py-2 md:py-6">
      <h2 className="text-xs font-medium tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
        What scaled
      </h2>
      <p className="text-lg leading-relaxed md:text-xl">{children}</p>
    </section>
  );
}
