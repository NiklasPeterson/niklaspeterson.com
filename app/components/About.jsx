import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <FadeIn className="my-20 flex w-full flex-col-reverse justify-between md:items-center gap-10 px-4 md:my-32 md:flex-row lg:gap-40 lg:px-20">
      <div className="flex max-w-2xl flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl leading-tight font-semibold text-zinc-950 md:text-6xl dark:text-zinc-50">
            About me
          </h2>
          <p className="text-lg text-balance md:text-xl">
            I&apos;m{" "}
            <span className="font-semibold text-zinc-950 dark:text-zinc-50">
              Niklas Peterson
            </span>
            , a product designer who likes working where design, technology, and product thinking come together. I enjoy turning complex problems into experiences that feel clear, useful, and well considered.
            <br />
            <br />
            I like being involved in the bigger picture, but I’m equally happy getting into the details. I enjoy shaping product direction, prototyping, and jumping into code when it helps bring an idea to life.
            <br />
            <br />
            Outside work, I’m a father of two and spend most of my time with my family. I’ve also designed and built two iOS apps, {" "}
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
            . They’re personal projects that let me scratch that creative itch by blending design, development, and tech.
          </p>
        </div>
        {/* <div className="flex flex-wrap gap-2">
          <a
            href="https://www.buymeacoffee.com/niklaspeterson"
            target="_blank"
            className="btn-secondary text-base"
          >
            <span className="mx-1">Support my Work</span>
          </a>
        </div> */}
      </div>

      <div className="relative h-100 w-full overflow-hidden rounded-2xl sm:w-[320px] md:rounded-3xl">
        <Image
          src="/niklas-peterson.jpg"
          alt="Picture of Niklas Peterson"
          fill={true}
          unoptimized
          className="object-cover"
        />
      </div>
    </FadeIn>
  );
}
