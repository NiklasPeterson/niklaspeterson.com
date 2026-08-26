import { HugeiconsIcon } from "@hugeicons/react";
import {
  FigmaIcon,
  GithubIcon,
  ThreadsIcon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";
import { LottieAnimation } from "./LottieAnimation";

const SIDE_PROJECTS = [
  { title: "Hydrify", href: "https://apps.apple.com/app/hydrify/id6450311759" },
  { title: "Titls", href: "https://apps.apple.com/app/titls/id1579078964" },
  { title: "Timestamps", href: "https://timestamps.app" },
];

const CONTACT_LINKS = [
  { title: "x.com", href: "https://x.com/niklas_peterson" },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/niklaspeterson" },
  {
    title: "Buy me a coffee",
    href: "https://www.buymeacoffee.com/niklaspeterson",
  },
];

const SOCIAL_LINKS = [
  {
    href: "https://x.com/niklas_peterson",
    icon: NewTwitterIcon,
    label: "X profile",
  },
  {
    href: "https://www.threads.net/@niklas.peterson",
    icon: ThreadsIcon,
    label: "Threads profile",
  },
  {
    href: "https://github.com/NiklasPeterson",
    icon: GithubIcon,
    label: "GitHub profile",
  },
  {
    href: "https://www.figma.com/@niklaspeterson",
    icon: FigmaIcon,
    label: "Figma profile",
  },
];

export default function Footer() {
  return (
    <FadeIn className="relative flex w-full flex-col gap-10 overflow-hidden px-4 pb-20 md:px-20 md:pb-20">
      <div className="flex flex-col gap-20 md:flex-row md:justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="max-w-xl text-4xl leading-tight text-pretty font-semibold text-primary md:text-5xl">
              Let&apos;s get to know each other!
            </h2>
            <p className="text-lg max-w-lg text-balance md:text-xl ">
              Feel free to drop me a message anytime. I&apos;m all ears for cool and creative ideas!
            </p>
          </div>
          <ContactButton />
          <div className="flex gap-2 text-primary">
            {SOCIAL_LINKS.map(({ href, icon, label }) => (
              <a
                className="btn-ghost p-2"
                href={href}
                target="_blank"
                rel="noopener"
                key={label}
                aria-label={label}
              >
                <HugeiconsIcon
                  icon={icon}
                  strokeWidth={1.5}
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex gap-20">
          <div className="flex flex-col items-start gap-6">
            <div className="text-xs font-medium tracking-widest text-muted uppercase">
              Side-projects
            </div>
            {SIDE_PROJECTS.map(({ title, href }) => (
              <a href={href} target="_blank" rel="noopener" key={title}>
                <div className="btn-link">{title}</div>
              </a>
            ))}
          </div>

          <div className="flex flex-col items-start gap-6">
            <div className="text-xs font-medium tracking-widest text-muted uppercase">
              Contact
            </div>
            {CONTACT_LINKS.map(({ title, href }) => (
              <a href={href} target="_blank" rel="noopener" key={title}>
                <div className="btn-link">{title}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* <DeferredFooterBackground /> */}
      <div
        aria-hidden="true"
        className="absolute right-0 bottom-0 left-0 -z-10 flex h-full max-w-full rotate-180 justify-center"
      >
        <LottieAnimation />
      </div>

    </FadeIn>
  );
}
