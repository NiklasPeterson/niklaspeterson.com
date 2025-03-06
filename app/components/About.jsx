import Image from 'next/image';
import Motion from './Motion';
import HoverThumbnail from './HoverThumbnail';

export default function About() {

  return (
    <Motion className='flex w-full justify-between px-4 my-20 gap-10 flex-col-reverse md:flex-row lg:gap-40 lg:px-20 md:my-32'>
      <div className='flex flex-col gap-8 max-w-2xl'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-4xl md:text-6xl leading-tight font-bold text-zinc-950 dark:text-zinc-50'>About me</h3>
          <p className='text-lg md:text-xl'>
            I&apos;m <span className='font-semibold text-zinc-950 dark:text-zinc-50'>Niklas Peterson</span>, a father of two, passionate about digital design, technology and innovation.
            <br /><br />
            Outside work, you&apos;ll find me cherishing quality time with my family. In my free moments, I enjoy exploring design and coding. I&apos;ve created two iOS apps, <a href="https://apps.apple.com/app/hydrify/id6450311759" target="_blank"  className='inline-block font-semibold underline text-zinc-950 dark:text-zinc-50'><HoverThumbnail text='Hydrify' imageSrc='/hydrify-logo.png' /></a> and <a href="https://apps.apple.com/app/titls/id1579078964" target="_blank" className='inline-block font-semibold underline text-zinc-950 dark:text-zinc-50'><HoverThumbnail text='Titls' imageSrc='/titls-logo.png' /></a>. These are personal projects that let me scratch that creative itch by seamlessly blending design, development, and tech.</p>
        </div>
        <div className="flex gap-2">
          <a href="https://www.buymeacoffee.com/niklaspeterson" target="_blank" className="px-5 py-3 text-base btn-primary">
            <span className='mx-1'>Support my work</span>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg> */}
          </a>
        </div>
      </div>

      <div className='relative rounded-2xl md:rounded-3xl overflow-hidden h-[320px] w-full sm:h-[400px] sm:w-[320px]'>
        <Image
          className='transition-transform duration-300 hover:scale-105'
          src="/niklas-peterson.jpg"
          alt="Picture of Niklas Peterson"
          fill={true}
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </div>
    </Motion>
  );
}
