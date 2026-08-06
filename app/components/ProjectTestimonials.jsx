import Image from "next/image";

export default function ProjectTestimonials({
  testimonials = [],
  compact = false,
}) {
  if (testimonials.length === 0) return null;

  return (
    <div className="flex w-full justify-center px-4 md:px-10">
      <section
        className={`flex w-full max-w-5xl flex-col items-center rounded-[2rem] border border-zinc-300/20 bg-zinc-50 dark:bg-zinc-900/40 ${compact ? "my-8 gap-8 px-8 py-10 md:my-10 md:px-10 md:py-12" : "my-10 gap-10 px-8 py-12 md:my-14 md:px-12 md:py-16"}`}
        aria-labelledby={`testimonials-${compact ? "modal" : "page"}`}
      >
        <div
          className={`grid w-full gap-14 ${testimonials.length > 1 ? "md:grid-cols-2 md:gap-12" : "max-w-3xl"}`}
        >
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex h-full flex-col items-start justify-between gap-8 text-left"
            >
              <div
                className={`flex flex-col items-start text-pretty text-zinc-950 dark:text-zinc-50 ${compact ? "gap-5 text-xl leading-[1.3] md:text-2xl" : "gap-6 text-2xl leading-[1.25] md:text-[2rem]"}`}
              >
                {testimonial.quote
                  .split("\n\n")
                  .map((paragraph, index, parts) => (
                    <p key={paragraph} className="relative max-w-3xl">
                      {index === 0 ? "“" : null}
                      {paragraph}
                      {index === parts.length - 1 ? "”" : null}
                    </p>
                  ))}
              </div>

              <footer className="flex items-center gap-3">
                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:border after:border-zinc-300/20 after:content-['']">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </span>
                <cite className="flex flex-col gap-0.5 text-left not-italic">
                  <span className="font-medium text-zinc-950 dark:text-zinc-50">
                    {testimonial.name}
                  </span>
                  {testimonial.role && (
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      {testimonial.role}
                    </span>
                  )}
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
