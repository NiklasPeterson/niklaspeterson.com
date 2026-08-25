import FadeIn from "./FadeIn";
import HoverThumbnail from "./HoverThumbnail";

export default function Header() {
  return (
    <FadeIn
      position="down"
      desktopOnly
      className="h-content relative z-1 flex flex-col justify-center gap-4 overflow-visible px-4 pt-20 pb-24 md:px-20 md:py-32"
    >
      <h1 className="max-w-4xl text-4xl leading-tight font-semibold text-pretty text-primary md:text-6xl">
        Bringing digital products to life with pixels and code.
      </h1>
      <p className="max-w-3xl text-xl text-pretty md:text-2xl">
        Niklas Peterson, designer and creator from Sweden, currently shaping
        experiences as a{" "}
        <span className="font-semibold text-primary">
          Staff Product Designer
        </span>{" "}
        at <span className="font-semibold text-primary">LottieFiles</span>.
      </p>
      <p className="text-lg md:text-xl">
        In my free time I&apos;m building{" "}
        <a
          href="https://apps.apple.com/app/hydrify/id6450311759"
          target="_blank"
        >
          <HoverThumbnail
            text="Hydrify"
            appIcon="/hydrify.png"
            images={["/hydrify-screen-1.png", "/hydrify-screen-2.png"]}
          />
        </a>{" "}
        and{" "}
        <a href="https://apps.apple.com/app/titls/id1579078964" target="_blank">
          <HoverThumbnail
            text="Titls"
            appIcon="/titls.png"
            iconRotation="-rotate-12"
            hasTrailingSpacing={false}
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
  );
}
