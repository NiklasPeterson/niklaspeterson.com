import previewImage1 from "../../public/media/hydrify-screen-1-4770c7a49ef8.webp";
import previewImage2 from "../../public/media/hydrify-screen-2-add4de8285bb.webp";
import previewImage3 from "../../public/media/titls-screen-2-2a96d4ea581e.webp";
import previewImage4 from "../../public/media/titls-screen-3-5016696219cc.webp";
import previewImage5 from "../../public/media/titls-screen-1-12d0f8e0263e.webp";
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
      <p className="max-w-3xl text-xl md:text-2xl">
        Niklas Peterson, designer and creator from Sweden, currently shaping experiences as a{" "}
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
            images={[
              previewImage3,
              previewImage4,
              previewImage5,
            ]}
          />
        </a>.
      </p>
    </FadeIn>
  );
}
