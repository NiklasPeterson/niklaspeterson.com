import Image from "next/image";

export default function ProjectTestimonials({ testimonials = [] }) {
  if (testimonials.length === 0) return null;

  return (
    <div className="flex w-full justify-center px-4 md:px-10">
      <section
        className="flex w-full max-w-5xl flex-col items-center gap-7 rounded-3xl border border-zinc-200/50 bg-zinc-50 px-5 py-8 md:my-10 md:gap-8 md:rounded-[2rem] md:px-10 md:py-12 dark:bg-zinc-900/40"
        aria-label="Project testimonials"
      >
        <div
          className={`grid w-full gap-10 ${testimonials.length > 1 ? "md:grid-cols-2 md:gap-12" : "max-w-4xl"}`}
        >
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex h-full flex-col items-start justify-between gap-6 text-left md:gap-8"
            >
              <div className="flex flex-col items-start gap-4 text-lg leading-[1.4] text-pretty text-zinc-950 md:gap-5 md:text-2xl md:leading-[1.3] dark:text-zinc-50">
                {testimonial.quote
                  .split("\n\n")
                  .map((paragraph, index, parts) => (
                    <p key={paragraph} className="relative">
                      {index === 0 ? "“" : null}
                      {paragraph}
                      {index === parts.length - 1 ? "”" : null}
                    </p>
                  ))}
              </div>

              <footer className="flex items-center gap-3">
                <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:border after:border-zinc-200/50 after:content-[''] md:h-14 md:w-14">
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
