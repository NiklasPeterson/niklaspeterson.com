import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { MessageCircleIcon } from "@hugeicons/core-free-icons";
import FadeIn from "./FadeIn";
import Logo from "./Logo";

export default function Nav({ className = "" }) {
  return (
    <FadeIn
      position="down"
      desktopOnly
      className={`flex w-full max-w-360 items-center justify-between px-4 py-4 md:px-20 ${className}`}
    >
      <Link href="/" aria-label="Niklas Peterson home">
        <Logo />
      </Link>

      <a
        href="mailto:mail@niklaspeterson.com?subject=Contact"
        className="btn-primary px-5 py-3 text-base"
        aria-label="Contact"
      >
        <span className="mx-1">Contact</span>
        <HugeiconsIcon
          icon={MessageCircleIcon}
          strokeWidth={2}
          className="h-4.5 w-4.5"
          aria-hidden="true"
        />
      </a>
    </FadeIn>
  );
}
