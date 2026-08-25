import Link from "next/link";
import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";
import Logo from "./Logo";

export default function Nav({ className = "" }) {
  return (
    <FadeIn
      position="down"
      desktopOnly
      className={`relative z-10 flex w-full max-w-360 items-center justify-between px-4 py-4 md:px-20 ${className}`}
    >
      <Link href="/" aria-label="Niklas Peterson home">
        <Logo />
      </Link>

      <ContactButton tooltipPosition="bottom" />
    </FadeIn>
  );
}
