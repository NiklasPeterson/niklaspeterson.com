import FadeIn from './FadeIn';
import LottieAnimation from './LottieAnimation';
import HoverThumbnail from './HoverThumbnail';
import Nav from './Nav';

export default function Header() {

  return (
    <>
      <Nav />

      <FadeIn position="down" className='flex flex-col justify-center gap-4 px-4 max-w-5xl h-[560px] sm:h-[640px] lg:px-20 md:py-32 md:h-[720px]'>
        <div className="absolute top-0 left-0 right-0 -z-10 blur-[120px] max-w-full overflow-hidden flex justify-center"><LottieAnimation /></div>
        <h1 className='text-4xl md:text-[64px] font-bold leading-tight text-zinc-950 dark:text-zinc-50 max-w-4xl'>Bringing digital products to life with pixels and code.</h1>
        <p className='text-xl md:text-2xl'>Niklas Peterson — designer and creator from Sweden, currently shaping experiences as a <span className='font-semibold text-zinc-950 dark:text-zinc-50'>Senior Product Designer</span> at <span className='inline-block font-semibold text-zinc-950 dark:text-zinc-50'>LottieFiles</span>.</p>
        <p className='text-lg md:text-xl'>In my free time I&apos;m building <a href="https://apps.apple.com/app/hydrify/id6450311759" target="_blank" rel="noopener noreferrer" className='inline-block font-semibold text-zinc-950 dark:text-zinc-50'>
            <HoverThumbnail text='Hydrify' images={["/hydrify-screen-1.png", "/hydrify-screen-2.png"]}
            /></a> and <a href="https://apps.apple.com/app/titls/id1579078964" target="_blank" rel="noopener noreferrer" className='inline-block font-semibold text-zinc-950 dark:text-zinc-50'><HoverThumbnail text='Titls' images={["/titls-screen-2.png","/titls-screen-3.png","/titls-screen-1.png"]} /></a>.</p>
      </FadeIn>
    </>
  );
}
