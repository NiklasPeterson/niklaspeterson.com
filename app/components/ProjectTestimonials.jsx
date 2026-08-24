"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ProjectTestimonials({
  testimonials = [],
  variant = "page",
}) {
  const railRef = useRef(null);
  const [edgeFades, setEdgeFades] = useState({ left: false, right: false });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length < 2 || !railRef.current) return;

    const rail = railRef.current;
    const updateEdgeFades = () => {
      const left = rail.scrollLeft > 8;
      const right = rail.scrollLeft < rail.scrollWidth - rail.clientWidth - 8;
      const cards = Array.from(rail.children);
      const nextActiveIndex = cards.reduce(
        (closestIndex, card, index) =>
          Math.abs(card.offsetLeft - rail.scrollLeft) <
          Math.abs(cards[closestIndex].offsetLeft - rail.scrollLeft)
            ? index
            : closestIndex,
        0,
      );

      setEdgeFades((current) =>
        current.left === left && current.right === right
          ? current
          : { left, right },
      );
      setActiveIndex((current) =>
        current === nextActiveIndex ? current : nextActiveIndex,
      );
    };

    updateEdgeFades();
    rail.addEventListener("scroll", updateEdgeFades, { passive: true });

    const resizeObserver = new ResizeObserver(updateEdgeFades);
    resizeObserver.observe(rail);

    return () => {
      rail.removeEventListener("scroll", updateEdgeFades);
      resizeObserver.disconnect();
    };
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  const hasMultipleTestimonials = testimonials.length > 1;
  const railPaddingClasses =
    variant === "modal"
      ? "px-4 scroll-px-4 md:px-10 md:scroll-px-10"
      : "";

  const scrollToTestimonial = (index) => {
    const card = railRef.current?.children[index];
    if (!card) return;

    setActiveIndex(index);
    card.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const renderTestimonial = (testimonial, className = "") => (
    <blockquote
      key={testimonial.name}
      className={`flex h-full flex-col items-start justify-between gap-6 text-left md:gap-8 ${className}`}
    >
      <div className="flex flex-col items-start gap-4 text-lg leading-snug font-medium text-pretty text-zinc-950 md:gap-5 md:text-xl dark:text-zinc-50">
        {testimonial.quote.split("\n\n").map((paragraph, index, parts) => (
          <p key={paragraph} className="relative">
            {index === 0 ? "“" : null}
            {paragraph}
            {index === parts.length - 1 ? "”" : null}
          </p>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:border after:border-translucent after:content-[''] md:h-14 md:w-14">
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
      </div>
    </blockquote>
  );

  return (
    <div className="flex w-full justify-center">
      <section
        className={
          hasMultipleTestimonials
            ? "relative w-full"
            : "flex w-full max-w-5xl flex-col items-center gap-7 rounded-3xl border border-translucent bg-white mx-4 px-5 py-8 md:gap-8 md:rounded-4xl md:mx-10 md:px-10 md:py-12 dark:bg-zinc-900"
        }
        aria-label="Project testimonials"
      >
        {hasMultipleTestimonials ? (
          <div className="relative w-full">
            <div
              ref={railRef}
              className={`flex snap-x snap-mandatory scrollbar-none gap-4 overflow-x-auto overscroll-x-contain pb-3 md:gap-6 [&::-webkit-scrollbar]:hidden ${railPaddingClasses}`}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="shrink-0 basis-[84%] snap-center snap-always md:basis-[72%]"
                >
                  {renderTestimonial(
                    testimonial,
                    "min-h-80 rounded-3xl border border-translucent bg-white px-5 py-8 dark:bg-zinc-900 md:rounded-4xl md:px-10 md:py-12",
                  )}
                </div>
              ))}
            </div>

            {edgeFades.left && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-zinc-50 to-transparent dark:from-zinc-950"
              />
            )}

            {edgeFades.right && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-zinc-50  to-transparent dark:from-zinc-950"
              />
            )}

            <div
              className="hidden justify-center pt-1 md:flex"
              role="group"
              aria-label="Choose a testimonial"
            >
              {testimonials.map((testimonial, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={testimonial.name}
                    type="button"
                    aria-label={`Show testimonial ${index + 1} of ${testimonials.length}`}
                    aria-pressed={isActive}
                    onClick={() => scrollToTestimonial(index)}
                    className="flex h-5 w-5 items-center justify-center rounded-full transition-transform duration-150 active:scale-96"
                  >
                    <span
                      aria-hidden="true"
                      className={`h-2 w-2 rounded-full transition-colors duration-150 ${
                        isActive
                          ? "bg-zinc-950 dark:bg-zinc-50"
                          : "bg-zinc-300 dark:bg-zinc-700"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <p className="sr-only" role="status" aria-live="polite">
              Showing testimonial {activeIndex + 1} of {testimonials.length}
            </p>
          </div>
        ) : (
          <div className="w-full max-w-4xl">
            {renderTestimonial(testimonials[0])}
          </div>
        )}
      </section>
    </div>
  );
}
