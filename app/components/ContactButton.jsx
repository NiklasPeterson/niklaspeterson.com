"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle02Icon, Copy01Icon } from "@hugeicons/core-free-icons";
import {
  Tooltip,
  TooltipCreateHandle,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

const EMAIL = "mail@niklaspeterson.com";
const COPY_ICON_ANIMATION = {
  initial: { opacity: 0, scale: 0.25, filter: "blur(4px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.25, filter: "blur(4px)" },
  transition: { type: "spring", duration: 0.3, bounce: 0 },
};
const REDUCED_MOTION_ICON_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.15 },
};

function keepTooltipOpenOnCopy(open, eventDetails) {
  if (!open && eventDetails.reason === "trigger-press") {
    eventDetails.cancel();
  }
}

export default function ContactButton({ tooltipPosition = "top" }) {
  const [copied, setCopied] = useState(false);
  const [tooltipHandle] = useState(() => TooltipCreateHandle());
  const reduceMotion = useReducedMotion();
  const iconAnimation = reduceMotion
    ? REDUCED_MOTION_ICON_ANIMATION
    : COPY_ICON_ANIMATION;
  const copyTooltip = copied ? "Copied" : "Copy email";
  const copyAriaLabel = copied ? "Email copied" : "Copy email address";
  const CopyIcon = copied ? CheckmarkCircle02Icon : Copy01Icon;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.append(textarea);
      textarea.select();
      const copiedWithFallback = document.execCommand("copy");
      textarea.remove();
      if (!copiedWithFallback) return;
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <TooltipProvider delay={200}>
      <div className="inline-flex w-fit overflow-visible rounded-full bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950">
        <TooltipTrigger
          handle={tooltipHandle}
          payload="Open email app"
          render={
            <a
              href={`mailto:${EMAIL}?subject=Contact`}
              className="flex items-center rounded-l-full px-6 py-3 text-base font-medium transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-300"
              aria-label="Contact — open email app"
            />
          }
        >
          Contact
        </TooltipTrigger>
        <TooltipTrigger
          handle={tooltipHandle}
          payload={copyTooltip}
          render={
            <button
              type="button"
              className="flex cursor-copy items-center justify-center rounded-r-full border-l border-white/20 px-3 pr-4 transition-colors hover:bg-zinc-700 focus-visible:bg-zinc-700 dark:border-zinc-950/15 dark:hover:bg-zinc-300 dark:focus-visible:bg-zinc-300"
              aria-label={copyAriaLabel}
              onClick={copyEmail}
            />
          }
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={copyTooltip}
              initial={iconAnimation.initial}
              animate={iconAnimation.animate}
              exit={iconAnimation.exit}
              transition={iconAnimation.transition}
            >
              <HugeiconsIcon
                icon={CopyIcon}
                strokeWidth={2}
                className="h-4.5 w-4.5"
                aria-hidden="true"
              />
            </motion.div>
          </AnimatePresence>
        </TooltipTrigger>
      </div>
      <Tooltip handle={tooltipHandle} onOpenChange={keepTooltipOpenOnCopy}>
        {({ payload }) => (
          <TooltipPopup side={tooltipPosition} sideOffset={8}>
            {payload}
          </TooltipPopup>
        )}
      </Tooltip>
      <p className="sr-only" role="status" aria-live="polite">
        {copied ? "Email copied" : ""}
      </p>
    </TooltipProvider>
  );
}
