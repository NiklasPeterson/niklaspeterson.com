import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <FadeIn className="flex w-full flex-col-reverse justify-between gap-10 px-4 pb-24 md:items-center md:flex-row md:gap-40 md:px-20 md:pb-32">
      <div className="flex max-w-2xl flex-col gap-4">
        <h2 className="text-4xl leading-tight font-semibold text-primary md:text-5xl">
          About me
        </h2>
        <div className="flex flex-col gap-5 text-lg leading-normal text-pretty md:text-xl">
          <p>
            I&apos;m{" "}
            <span className="font-semibold text-primary">
              Niklas Peterson
            </span>
            , a product designer who likes working where design, technology,
            and product thinking come together. I enjoy turning complex
            problems into experiences that feel clear, useful, and well
            considered.
          </p>
          <p>
            I like being involved in the bigger picture, but I’m equally happy
            getting into the details. I enjoy shaping product direction,
            prototyping, and jumping into code when it helps bring an idea to
            life.
          </p>
          <p>
            Outside work, I’m a father of two and spend most of my time with my
            family. I’ve also designed and built two iOS apps,{" "}
            <a
              href="https://apps.apple.com/app/hydrify/id6450311759"
              target="_blank"
              className="inline-block font-semibold text-primary underline"
            >
              Hydrify
            </a>{" "}
            and{" "}
            <a
              href="https://apps.apple.com/app/titls/id1579078964"
              target="_blank"
              className="inline-block font-semibold text-primary underline"
            >
              Titls
            </a>
            . They’re personal projects that let me scratch that creative itch
            by blending design, development, and tech.
          </p>
        </div>
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
