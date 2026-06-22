import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <FadeIn className="my-20 flex w-full flex-col-reverse justify-between gap-10 px-4 md:my-32 md:flex-row lg:gap-40 lg:px-20">
      <div className="flex max-w-2xl flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl leading-tight font-bold text-zinc-950 md:text-6xl dark:text-zinc-50">
            About me
          </h2>
          <p className="text-lg md:text-xl">
            I&apos;m{" "}
            <span className="font-semibold text-zinc-950 dark:text-zinc-50">
              Niklas Peterson
            </span>
            , a father of two, passionate about digital design, technology and
            innovation.
            <br />
            <br />
            Outside work, you&apos;ll find me cherishing quality time with my
            family. In my free moments, I enjoy exploring design and coding.
            I&apos;ve created two iOS apps,{" "}
            <a
              href="https://apps.apple.com/app/hydrify/id6450311759"
              target="_blank"
              className="inline-block font-semibold text-zinc-950 underline dark:text-zinc-50"
            >
              Hydrify
            </a>{" "}
            and{" "}
            <a
              href="https://apps.apple.com/app/titls/id1579078964"
              target="_blank"
              className="inline-block font-semibold text-zinc-950 underline dark:text-zinc-50"
            >
              Titls
            </a>
            . These are personal projects that let me scratch that creative itch
            by seamlessly blending design, development, and tech.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href="https://www.buymeacoffee.com/niklaspeterson"
            target="_blank"
            className="btn-secondary text-base"
          >
            <span className="mx-1">Support my Work</span>
          </a>
          <a
            href="https://cv.niklaspeterson.com"
            target="_blank"
            className="btn-secondary text-base"
          >
            <span className="mx-1">Read my CV</span>
          </a>
        </div>
      </div>

      <div className="relative h-[320px] w-full overflow-hidden rounded-2xl sm:h-[400px] sm:w-[320px] md:rounded-3xl">
        <Image
          src="/niklas-peterson.jpg"
          alt="Picture of Niklas Peterson"
          fill={true}
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </div>
    </FadeIn>
  );
}
