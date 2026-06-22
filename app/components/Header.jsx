import FadeIn from "./FadeIn";
import LottieAnimation from "./LottieAnimation";
import HoverThumbnail from "./HoverThumbnail";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <Nav className="t-0 absolute" />

      <FadeIn
        position="down"
        className="flex h-[560px] max-w-5xl flex-col justify-center gap-4 px-4 sm:h-[640px] md:h-[720px] md:py-32 lg:px-20"
      >
        <div className="absolute top-0 right-0 left-0 -z-10 flex max-w-full justify-center overflow-hidden blur-[120px]">
          <LottieAnimation />
        </div>
        {/* <div className="flex rounded-2xl gap-1 items-center bg-zinc-200 dark:bg-zinc-800 w-fit py-1 px-3">
          <div className="rounded-2xl w-3 h-3 bg-red-500"></div>
          <span className="mx-1 text-zinc-950 dark:text-zinc-50">Not open for work</span>
        </div> */}
        <h1 className="max-w-4xl text-4xl leading-tight font-bold text-zinc-950 md:text-[64px] dark:text-zinc-50">
          Bringing digital products to life with pixels and code.
        </h1>
        <p className="text-xl md:text-2xl">
          Niklas Peterson — designer and creator from Sweden, currently shaping
          experiences as a{" "}
          <span className="font-semibold text-zinc-950 dark:text-zinc-50">
            Senior Product Designer
          </span>{" "}
          at{" "}
          <span className="inline-block font-semibold text-zinc-950 dark:text-zinc-50">
            LottieFiles
          </span>
          .
        </p>
        <p className="text-lg md:text-xl">
          In my free time I&apos;m building{" "}
          <a
            href="https://apps.apple.com/app/hydrify/id6450311759"
            target="_blank"
            className="inline-block font-semibold text-zinc-950 dark:text-zinc-50"
          >
            <HoverThumbnail
              text="Hydrify"
              images={["/hydrify-screen-1.png", "/hydrify-screen-2.png"]}
            />
          </a>{" "}
          and{" "}
          <a
            href="https://apps.apple.com/app/titls/id1579078964"
            target="_blank"
            className="inline-block font-semibold text-zinc-950 dark:text-zinc-50"
          >
            <HoverThumbnail
              text="Titls"
              images={[
                "/titls-screen-2.png",
                "/titls-screen-3.png",
                "/titls-screen-1.png",
              ]}
            />
          </a>
          .
        </p>
      </FadeIn>
    </>
  );
}
