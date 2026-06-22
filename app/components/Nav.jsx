import Link from "next/link";
import FadeIn from "./FadeIn";

export default function Nav({ className = "" }) {
  return (
    <FadeIn
      position="down"
      className={`flex w-full max-w-[1440px] items-center justify-between px-4 py-4 lg:px-20 ${className}`}
    >
      <Link href="/" aria-label="Niklas Peterson — home">
        <svg
          className="text-zinc-950 dark:text-zinc-50"
          id="logo"
          width="58"
          height="40"
          viewBox="0 0 58 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 36C5.27925 30.0845 23 9.95764 18.6834 9.97834C14.3668 9.99904 2.16421 36 11.6037 36C19.1239 36 26.707 12.3068 29.3501 5.95081"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M39.9552 13.5873C38.5025 21.0603 34.3544 35.9905 29.2256 35.9905C22.8067 35.9905 25.0407 7.48312 44.4233 4.30513C60.0299 1.75648 62.7674 15.727 29.0683 25.607"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </Link>

      <a
        href="mailto:mail@niklaspeterson.com?subject=Contact"
        className="btn-primary px-5 py-3 text-base"
        aria-label="Contact"
      >
        <span className="mx-1">Contact</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
          />
        </svg>
      </a>
    </FadeIn>
  );
}
