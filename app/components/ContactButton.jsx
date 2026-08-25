"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, MessageCircleIcon } from "@hugeicons/core-free-icons";
import {
  Tooltip,
  TooltipCreateHandle,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

const EMAIL = "mail@niklaspeterson.com";

export default function ContactButton({ tooltipPosition = "top" }) {
  const [copied, setCopied] = useState(false);
  const [tooltipHandle] = useState(() => TooltipCreateHandle());

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
              className="flex items-center gap-1 rounded-l-full px-5 py-3 text-base font-medium transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-300"
              aria-label="Contact — open email app"
            />
          }
        >
          {/* <HugeiconsIcon
            icon={MessageCircleIcon}
            strokeWidth={2}
            className="h-4.5 w-4.5"
            aria-hidden="true"
          /> */}
          <span className="mx-1">Contact</span>
        </TooltipTrigger>
        <TooltipTrigger
          handle={tooltipHandle}
          payload={copied ? "Copied" : "Copy email"}
          render={
            <button
              type="button"
              className="flex cursor-copy items-center justify-center rounded-r-full border-l border-white/20 px-3 pr-4 transition-colors hover:bg-zinc-700 focus-visible:bg-zinc-700 dark:border-zinc-950/15 dark:hover:bg-zinc-300 dark:focus-visible:bg-zinc-300"
              aria-label={copied ? "Email copied" : "Copy email address"}
              onClick={copyEmail}
            />
          }
        >
          <HugeiconsIcon
            icon={Copy01Icon}
            strokeWidth={2}
            className="h-4.5 w-4.5"
            aria-hidden="true"
          />
        </TooltipTrigger>
      </div>
      <Tooltip
        handle={tooltipHandle}
        onOpenChange={(open, eventDetails) => {
          if (!open && eventDetails.reason === "trigger-press") {
            eventDetails.cancel();
          }
        }}
      >
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
