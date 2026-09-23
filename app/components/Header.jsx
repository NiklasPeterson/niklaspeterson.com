import previewImage1 from "../../public/media/hydrify-screen-1-4770c7a49ef8.webp";
import previewImage2 from "../../public/media/hydrify-screen-2-add4de8285bb.webp";
import previewImage3 from "../../public/media/titls-screen-2-d3c3c2b1ad09.webp";
import previewImage4 from "../../public/media/titls-screen-3-bbe82d29c34a.webp";
import previewImage5 from "../../public/media/titls-screen-1-a26cc5882529.webp";
import FadeIn from "./FadeIn";
import HoverThumbnail from "./HoverThumbnail";

export default function Header() {
  return (
    <FadeIn
      position="down"
      desktopOnly
      className="h-content relative z-1 flex flex-col justify-center gap-4 overflow-visible px-4 pt-20 pb-24 md:px-20 md:py-32"
    >
      <div className="inline-flex w-fit items-center gap-2 rounded-full bg-zinc-200/60 px-3 py-1.5 text-sm font-medium text-primary dark:bg-zinc-800">
        <span
          className="relative size-2 rounded-full bg-emerald-500 after:absolute after:inset-0 after:animate-ping after:rounded-full after:bg-emerald-500 after:opacity-60 after:content-[''] after:[animation-duration:1.8s] after:[animation-timing-function:cubic-bezier(0,0,0.35,1)] motion-reduce:after:animate-none"
          aria-hidden="true"
        />
        <span>Open for work</span>
      </div>
      <h1 className="max-w-4xl text-4xl leading-tight font-semibold text-pretty text-primary md:text-6xl">
        Bringing digital products to life with pixels and code
      </h1>
      <p className="max-w-4xl text-xl text-pretty md:text-2xl">
        I’m Niklas Peterson, a product designer and design engineer from Sweden. Most recently, I was a <span className="font-semibold text-primary">Staff Product Designer at LottieFiles</span>.
      </p>
      <p className="text-lg md:text-xl">
        In my free time I’m building{" "}
        <a
          href="https://apps.apple.com/app/hydrify/id6450311759"
          target="_blank"
        >
          <HoverThumbnail
            text="Hydrify"
            appIcon="/media/hydrify-95450c59dcbe.webp"
            images={[previewImage1, previewImage2]}
          />
        </a>{" "}
        and{" "}
        <a href="https://apps.apple.com/app/titls/id1579078964" target="_blank">
          <HoverThumbnail
            text="Titls"
            appIcon="/media/titls-635c65c5369d.webp"
            iconRotation="-rotate-12"
            hasTrailingSpacing={false}
            images={[previewImage3, previewImage4, previewImage5]}
          />
        </a>.
      </p>
    </FadeIn>
  );
}
