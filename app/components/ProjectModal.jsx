"use client";

import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import FadeIn from "./FadeIn";
import ProjectCaseStudyContent from "./ProjectCaseStudyContent";
import ProjectHeader from "./ProjectHeader";
import ProjectNav from "./ProjectNav";
import ProjectTestimonials from "./ProjectTestimonials";

export default function ProjectModal({
  project,
  prev,
  next,
  onClose,
  onNavigate,
}) {
  const overlayRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const contentInitial = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, transform: "translateY(12px) scale(0.98)" };
  const contentSettled = reduceMotion
    ? { opacity: 1 }
    : { opacity: 1, transform: "translateY(0) scale(1)" };

  useEffect(() => {
    const handleOverlayKeyDown = (event) => {
      if (event.key === "Tab") event.preventDefault();
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleOverlayKeyDown);
    return () => window.removeEventListener("keydown", handleOverlayKeyDown);
  }, [onClose]);

  useLayoutEffect(() => {
    const scrollY = window.scrollY;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const bodyStyle = document.body.style;
    const previousStyles = {
      overflow: bodyStyle.overflow,
      paddingRight: bodyStyle.paddingRight,
      position: bodyStyle.position,
      top: bodyStyle.top,
      width: bodyStyle.width,
    };

    bodyStyle.overflow = "hidden";
    bodyStyle.position = "fixed";
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.width = "100%";
    if (scrollbarWidth > 0) bodyStyle.paddingRight = `${scrollbarWidth}px`;

    return () => {
      Object.assign(bodyStyle, previousStyles);
      window.scrollTo(0, scrollY);
    };
  }, [project]);

  const navigateTo = useCallback(
    (nextProject) => {
      onNavigate(nextProject);
      if (overlayRef.current) overlayRef.current.scrollTop = 0;
    },
    [onNavigate],
  );

  useEffect(() => {
    if (!prev || !next || prev.slug === next.slug) return;

    const handleKeyDown = (event) => {
      const target = event.target;

      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey ||
        (target instanceof Element &&
          target.closest(
            "input, textarea, select, video, audio, [contenteditable='true'], [role='slider']",
          ))
      ) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        navigateTo(prev);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        navigateTo(next);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigateTo, next, prev]);

  return (
    <motion.div
      role="dialog"
      aria-labelledby="project-modal-title"
      ref={overlayRef}
      className="fixed inset-0 z-10 h-screen min-h-dvh w-screen overflow-y-auto overscroll-contain bg-white/25 backdrop-blur-lg md:p-10 dark:bg-black/25"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.16, ease: [0.23, 1, 0.32, 1] },
      }}
      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        className="mx-auto flex max-w-360 flex-col gap-16 border-translucent bg-zinc-50 pt-6 pb-1 md:h-fit md:rounded-3xl md:border md:pt-10 md:pb-2 dark:bg-zinc-950"
        initial={contentInitial}
        animate={contentSettled}
        exit={{
          ...contentInitial,
          transition: { duration: 0.16, ease: [0.23, 1, 0.32, 1] },
        }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      >
        <ProjectHeader
          project={project}
          variant="modal"
          titleId="project-modal-title"
          action={
            <button className="btn-secondary h-10" onClick={onClose}>
              Close
            </button>
          }
        />

        <ProjectCaseStudyContent
          project={project}
          variant="modal"
          className="px-4 md:px-10"
        />

        {project.testimonials?.length > 0 && (
          <FadeIn>
            <ProjectTestimonials
              key={project.slug ?? project.title}
              testimonials={project.testimonials}
              variant="modal"
            />
          </FadeIn>
        )}

        {prev && next && prev !== next && (
          <FadeIn>
            <ProjectNav
              prev={prev}
              next={next}
              variant="modal"
              onNavigate={navigateTo}
            />
          </FadeIn>
        )}
      </motion.div>
    </motion.div>
  );
}
