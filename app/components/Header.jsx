import Motion from './Motion';
import LottieAnimation from './LottieAnimation';
import HoverThumbnail from './HoverThumbnail';

export default function Header() {

  return (
    <>
      <Motion position="down" className="w-full max-w-[1440px] flex items-center justify-between py-4 px-4 lg:px-20 t-0 absolute">
        <svg className='text-zinc-950 dark:text-zinc-50' id="logo" width="58" height="40" viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d='M1 36C5.27925 30.0845 23 9.95764 18.6834 9.97834C14.3668 9.99904 2.16421 36 11.6037 36C19.1239 36 26.707 12.3068 29.3501 5.95081'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <path
            d='M39.9552 13.5873C38.5025 21.0603 34.3544 35.9905 29.2256 35.9905C22.8067 35.9905 25.0407 7.48312 44.4233 4.30513C60.0299 1.75648 62.7674 15.727 29.0683 25.607'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
          />
        </svg>

        <a href='mailto:mail@niklaspeterson.com' className='px-5 py-3 text-base btn-primary'>
          <span className='mx-1'>Say Hello</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
          </svg>
        </a>
      </Motion>

      <Motion position="down" className='flex flex-col justify-center gap-4 px-4 max-w-5xl h-[560px] sm:h-[640px] lg:px-20 md:py-32 md:h-[720px]'>
        <div className="absolute top-0 left-0 right-0 -z-10 blur-[120px] max-w-full overflow-hidden flex justify-center"><LottieAnimation /></div>
        <div className="hidden rounded-2xl gap-1 items-center bg-zinc-200 dark:bg-zinc-800 w-fit py-1 px-3">
          <div className="rounded-2xl w-3 h-3 bg-red-500"></div>
          <span className="mx-1 text-zinc-950 dark:text-zinc-50">Not open for work</span>
        </div>
        <h1 className='text-4xl md:text-[64px] font-bold leading-tight text-zinc-950 dark:text-zinc-50 max-w-4xl'>Bringing digital products to life with pixels and code.</h1>
        <p className='text-xl md:text-2xl'>Niklas Peterson — designer and creator from Sweden, currently shaping experiences as a <span className='font-semibold text-zinc-950 dark:text-zinc-50'>Senior Product Designer</span> at <span className='inline-block font-semibold text-zinc-950 dark:text-zinc-50'>LottieFiles</span>.</p>
        <p className='text-lg md:text-xl'>In my free time I&apos;m building <a href="https://apps.apple.com/app/hydrify/id6450311759" target="_blank" className='inline-block font-semibold text-zinc-950 dark:text-zinc-50'>
            <HoverThumbnail text='Hydrify' images={["/hydrify-screen-1.png", "/hydrify-screen-2.png"]}
            /></a> and <a href="https://apps.apple.com/app/titls/id1579078964" target="_blank" className='inline-block font-semibold text-zinc-950 dark:text-zinc-50'><HoverThumbnail text='Titls' images={["/titls-screen-2.png","/titls-screen-3.png","/titls-screen-1.png"]} /></a>.</p>
      </Motion>
    </>
  );
}
