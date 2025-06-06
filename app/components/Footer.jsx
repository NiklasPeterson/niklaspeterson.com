import FadeIn from './FadeIn';
import LottieAnimation from './LottieAnimation';

export default function Footer() {

  return (
    <FadeIn className='flex w-full flex-col gap-10 relative px-4 my-20 lg:px-20 md:mt-32'>
      <div className='flex flex-col gap-20 md:justify-between md:flex-row'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-4xl md:text-6xl leading-tight font-bold text-zinc-950 dark:text-zinc-50 max-w-xl'>Let&apos;s get to know each other!</h2>
          <p className='text-lg md:text-xl'>
            Feel free to drop me a message anytime— <br />
            I&apos;m all ears for cool and creative ideas!
          </p>
          <div className='flex gap-2 text-zinc-950 dark:text-zinc-50'>
            {[
              ['1', 'https://x.com/niklas_peterson', 'M17.7512 2.96094H20.818L14.1179 10.6187L22 21.0391H15.8284L10.9946 14.7192L5.46359 21.0391H2.39494L9.5613 12.8483L2 2.96094H8.32828L12.6976 8.7376L17.7512 2.96094ZM16.6748 19.2035H18.3742L7.4049 4.70015H5.58133L16.6748 19.2035Z', "X profile"],
              ['2', 'https://www.threads.net/@niklas.peterson', 'M16.5178 11.1523C16.6094 11.1898 16.6927 11.2314 16.7802 11.2689C17.9966 11.8563 18.8881 12.7353 19.3547 13.8267C20.0087 15.3472 20.0712 17.8175 18.0924 19.7921C16.5844 21.3001 14.7473 21.9792 12.152 22H12.1395C9.21513 21.9792 6.96976 20.996 5.45758 19.0756C4.11203 17.3676 3.4205 14.989 3.39551 12.0104V11.9979V11.9896C3.41634 9.01104 4.10786 6.63237 5.45341 4.92439C6.9656 3.00396 9.21513 2.02083 12.1395 2H12.152C15.0806 2.02083 17.3551 2.99979 18.9131 4.91189C19.6796 5.85753 20.2462 6.99479 20.6044 8.31535L18.9214 8.76526C18.6257 7.69048 18.1799 6.77401 17.5801 6.04082C16.3636 4.54947 14.539 3.78296 12.1437 3.7663C9.76918 3.78713 7.97372 4.54947 6.80313 6.03249C5.71169 7.4197 5.14514 9.42762 5.12431 11.9979C5.14514 14.5682 5.71169 16.5761 6.80313 17.9675C7.96956 19.4505 9.76918 20.2129 12.1437 20.2337C14.2849 20.217 15.7013 19.7088 16.8802 18.5299C18.2258 17.1885 18.2008 15.5388 17.7717 14.5349C17.5176 13.9433 17.0593 13.4518 16.4428 13.081C16.2887 14.2016 15.9512 15.0931 15.4138 15.7805C14.7015 16.6886 13.6892 17.1802 12.3853 17.251C11.4022 17.3051 10.4565 17.0677 9.72336 16.5845C8.85687 16.0096 8.34864 15.1348 8.29449 14.1141C8.19034 12.1021 9.78168 10.6565 12.2603 10.5149C13.1393 10.4649 13.9641 10.5024 14.7265 10.6315C14.6265 10.015 14.4224 9.52343 14.1183 9.16517C13.7017 8.67778 13.0518 8.42783 12.1937 8.42366H12.1645C11.473 8.42366 10.5399 8.61529 9.94414 9.51927L8.51111 8.53614C9.31094 7.32389 10.6065 6.65736 12.1687 6.65736H12.202C14.8098 6.67403 16.3636 8.30285 16.5219 11.1439L16.5136 11.1523H16.5178ZM10.0191 14.0183C10.0733 15.0639 11.2022 15.5513 12.2937 15.4889C13.3601 15.4305 14.5682 15.014 14.7723 12.4395C14.2224 12.3187 13.6142 12.2562 12.9643 12.2562C12.7644 12.2562 12.5644 12.2604 12.3645 12.2729C10.5773 12.3728 9.98164 13.2393 10.0233 14.0142L10.0191 14.0183Z', "Threads profile"],
              ['3', 'https://www.figma.com/@niklaspeterson', 'M8.78963 2L15.2103 2C17.2769 2 18.9522 3.6753 18.9522 5.74189C18.9522 7.05046 18.2805 8.20214 17.2631 8.87096C18.2805 9.5398 18.9522 10.6915 18.9522 12.0001C18.9522 14.0667 17.2769 15.742 15.2103 15.742H15.129C14.1602 15.742 13.2773 15.3738 12.6128 14.7697V18.2175C12.6128 20.3116 10.8937 22 8.80982 22C6.74836 22 5.04773 20.3298 5.04773 18.2581C5.04773 16.9495 5.71942 15.7979 6.73681 15.1291C5.71941 14.4603 5.04773 13.3086 5.04773 12.0001C5.04773 10.6915 5.71942 9.5398 6.73684 8.87096C5.71943 8.20214 5.04773 7.05046 5.04773 5.74189C5.04773 3.6753 6.72303 2 8.78963 2ZM8.78963 8.2581L11.3871 8.2581V3.22569L8.78963 3.22569C7.39996 3.22569 6.27342 4.35224 6.27342 5.74189C6.27342 7.13156 7.39996 8.2581 8.78963 8.2581ZM12.6128 3.22569V8.2581L15.2096 8.2581C16.5993 8.2581 17.7265 7.13156 17.7265 5.74189C17.7265 4.35224 16.5999 3.22569 15.2103 3.22569H12.6128ZM15.129 8.25819C15.1291 8.25819 15.1289 8.25819 15.129 8.25819ZM11.3871 9.48379L8.78963 9.48379C7.39999 9.48379 6.27342 10.6104 6.27342 12.0001C6.27342 13.3897 7.39996 14.5163 8.78963 14.5163H11.3871V9.48379ZM11.3871 15.742H8.78963C7.39994 15.742 6.27342 16.8685 6.27342 18.2581C6.27342 19.6427 7.41501 20.7743 8.80982 20.7743C10.2271 20.7743 11.3871 19.6244 11.3871 18.2175V15.742ZM15.2103 9.48379L15.1297 9.48388C13.74 9.48388 12.6128 10.6104 12.6128 12.0001C12.6128 13.3897 13.7393 14.5163 15.129 14.5163H15.2103C16.5999 14.5163 17.7265 13.3897 17.7265 12.0001C17.7265 10.6106 16.5996 9.48415 15.2103 9.48379C15.2103 9.48379 15.2103 9.48379 15.2103 9.48379Z', "Figma profile"],
            ].map(([key, url, path, label]) => (
              <a className='btn-ghost p-2' href={url} target='_blank' rel='noopener' key={key} aria-label={label}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d={path} /></svg>
              </a>
            ))}
          </div>
        </div>

        <div className='flex font-medium gap-20 text-zinc-950 dark:text-zinc-50'>

          <div className='flex items-start flex-col gap-6'>
            <div className='uppercase text-xs font-normal tracking-widest text-zinc-600 dark:text-zinc-300'>Side-projects</div>
            {[
              ['1', 'Hydrify', 'https://apps.apple.com/app/hydrify/id6450311759'],
              ['2', 'Titls', 'https://apps.apple.com/app/titls/id1579078964'],
              ['3', 'Timestamps', 'https://timestamps.app'],
            ].map(([key, title, url]) => (
              <a href={url} target='_blank' rel='noopener' key={key}>
                <div className='btn-link'>
                  {title}
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg> */}
                </div>
              </a>
            ))}
          </div>

          <div className='flex items-start flex-col gap-6'>
            <div className='uppercase text-xs font-normal tracking-widest text-zinc-600 dark:text-zinc-300'>Contact</div>
            {[
              ['1', 'Mail', 'mailto:mail@niklaspeterson.com'],
              ['2', 'x.com', 'https://x.com/niklas_peterson'],
              ['3', 'LinkedIn', 'https://www.linkedin.com/in/niklaspeterson'],
            ].map(([key, title, url]) => (
              <a href={url} target='_blank' rel='noopener' key={key}>
                <div className='btn-link'>
                  {title}
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg> */}
                </div>
              </a>
            ))}

          </div>
        </div>
      </div>

      <div className="h-full absolute bottom-0 left-0 right-0 -z-10 blur-[120px] rotate-180 max-w-full overflow-hidden flex justify-center"><LottieAnimation /></div>
    </FadeIn>
  );
}
