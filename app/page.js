import Image from 'next/image'
import LottieAnimation from './components/LottieAnimation';
import Motion from './components/Motion';

export default function Home() {

  return (
    <main className="w-full max-w-7xl flex flex-col">

      <nav className="w-full max-w-7xl flex items-center justify-between py-4 px-4 lg:px-20 t-0 absolute">
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

        <a href='mailto:hi@niklaspeterson.com' className='text-base font-medium rounded-full px-5 py-3 flex gap-1 items-center text-zinc-50 bg-zinc-900 hover:bg-zinc-700 focus:outline-none focus:ring-4 focus:ring-zinc-300 dark:text-zinc-950 dark:bg-zinc-50 dark:hover:bg-zinc-200 dark:focus:ring-zinc-100'>
          <span className='mx-1'>Say Hello</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
          </svg>
        </a>
      </nav>

      <Motion className='flex flex-col justify-center gap-4 px-4 h-[640px] lg:px-20 md:py-32 md:h-[720px]'>
        <div className="absolute top-0 left-0 right-0 -z-10 blur-[200px] max-w-full overflow-hidden flex justify-center"><LottieAnimation /></div>
        <h1 className='text-4xl md:text-[64px] font-bold leading-tight text-zinc-950 dark:text-zinc-50 max-w-4xl'>Bringing creativity to life through pixels and code</h1>
        <p className='text-xl md:text-2xl'>Niklas Peterson, <span className='font-semibold text-zinc-950 dark:text-zinc-50'>Product Designer</span> and founder from Sweden</p>
      </Motion>

      <section className='flex flex-wrap gap-12 px-4 pb-20 lg:px-20 md:pb-32'>

        <Motion className='group flex flex-col w-full h-[320px] sm:h-[480px] md:h-[640px]'>
          <a className='group flex flex-col gap-4 w-full h-full' href='https://musho.ai' target='_blank' rel='noopener'>
            <div className='rounded-2xl md:rounded-3xl overflow-hidden relative h-full'>
              <Image
                className='transition-transform duration-300 group-hover:scale-105'
                src="/musho.png"
                alt="Musho"
                fill={true}
                style={{ objectFit: "cover" }}
              />
              <div className='flex items-center justify-center w-12 h-12 rounded-xl text-zinc-950 bg-zinc-50 absolute top-4 right-4 rotate-45 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-105'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>

            <div className='flex flex-col gap-1 max-w-2xl'>
              <h4 className="font-bold text-xl text-zinc-950 dark:text-zinc-50">Musho</h4>
              <p className='text-md md:text-lg'>Musho turns your prompts into nearly-complete, dev-ready websites with simple layouts, great copy, and gorgeous images.</p>
            </div>
          </a>
        </Motion>

        <Motion className="flex w-full h-[400px] sm:h-[560px] md:flex-1">
          <a href='https://apps.apple.com/app/hydrify/id6450311759' target='_blank' rel='noopener' className='group flex flex-col gap-4 w-full h-full'>
            <div className='rounded-2xl md:rounded-3xl overflow-hidden relative h-full'>
              <Image
                className='transition duration-300 group-hover:scale-105'
                src="/hydrify.png"
                alt="Hydrify"
                fill={true}
                style={{ objectFit: "cover" }}
              />
              <div className='flex items-center justify-center w-12 h-12 rounded-xl text-zinc-950 bg-zinc-50 absolute top-4 right-4 rotate-45 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-105'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <h4 className="font-bold text-xl text-zinc-950 dark:text-zinc-50">Hydrify</h4>
              <p className='text-md md:text-lg'>Your optimal hydration companion.</p>
            </div>
          </a>
        </Motion>

        <Motion className="flex w-full h-[400px] sm:h-[560px] md:flex-1">
          <a href='https://apps.apple.com/app/titls/id1579078964' target='_blank' rel='noopener' className='group flex flex-col gap-4 w-full h-full'>
            <div className='rounded-xl md:rounded-3xl overflow-hidden relative h-full'>
              <Image
                className='group-hover:scale-105 transition-transform duration-300'
                src="/titls.png"
                alt="Titls"
                fill={true}
                style={{ objectFit: "cover" }}
              />
              <div className='flex items-center justify-center w-12 h-12 rounded-xl text-zinc-950 bg-zinc-50 absolute top-4 right-4 rotate-45 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-105'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <h4 className="font-bold text-xl text-zinc-950 dark:text-zinc-50">Titls</h4>
              <p className='text-md md:text-lg'>Organize and categorize your home screens.</p>
            </div>
          </a>
        </Motion>

      </section>

      <Motion className='flex w-full justify-between px-4 py-20 gap-10 flex-col-reverse md:flex-row lg:gap-40 lg:px-20 md:py-32'>
        <div className='flex flex-col gap-10 max-w-2xl'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-4xl md:text-6xl leading-tight font-bold text-zinc-950 dark:text-zinc-50'>About me</h3>
            <p className='text-lg md:text-xl'>
              I&apos;m <span className='font-semibold text-zinc-950 dark:text-zinc-50'>Niklas Peterson</span>, a father of two, passionate about interior and digital design. I work as a <span className='font-semibold text-zinc-950 dark:text-zinc-50'>Product Designer</span> at <span className='font-semibold text-zinc-950 dark:text-zinc-50'>Bueno</span>, focusing on <span className='font-semibold text-zinc-950 dark:text-zinc-50'>Musho.ai</span>, our Figma plugin that leverages AI to jumpstart your designs, letting you concentrate on those final touches.
              <br /><br />
              Outside work, you&apos;ll find me cherishing quality time with my family. In my free moments, I enjoy exploring design and coding. I&apos;ve created two iOS apps, <span className='font-semibold text-zinc-950 dark:text-zinc-50'>Hydrify</span> and <span className='font-semibold text-zinc-950 dark:text-zinc-50'>Titls</span>. These are personal projects that let me scratch that creative itch by seamlessly blending design, development, and tech.</p>
          </div>

          <div className="flex gap-2">
            <a href="https://www.buymeacoffee.com/niklaspeterson" className="btn-primary">
              <span className='mx-1'>Support my work</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </a>

            <a href="https://read.cv/niklaspeterson" className="btn-secondary">
              <span className='mx-1'>Resumé</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>

        <div className='relative h-[320px] w-full sm:h-[400] sm:w-[320px]'>
          <Image
            className='rounded-2xl md:rounded-3xl'
            src="/niklas-peterson.jpg"
            alt="Picture of Niklas Peterson"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
      </Motion>

      <Motion className='flex w-full flex-col gap-10 relative px-4 py-20 lg:px-20 md:py-32'>
        <div className='flex flex-col gap-20 md:justify-between md:flex-row'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-4xl md:text-6xl leading-tight font-bold text-zinc-950 dark:text-zinc-50 max-w-xl'>Let&apos;s get to know each other!</h2>
            <p className='text-lg md:text-xl'>
              Feel free to shoot me a message anytime— <br />
              I&apos;m all ears for cool and creative ideas!
            </p>
          </div>

          <div className='flex font-medium gap-20 text-zinc-950 dark:text-zinc-50'>

            <div className='flex flex-col gap-6'>
              <div className='uppercase text-xs font-normal tracking-widest text-zinc-700 dark:text-zinc-300'>Side-projects</div>
              {[
                ['1', 'Hydrify', 'https://apps.apple.com/app/hydrify/id6450311759'],
                ['2', 'Titls', 'https://apps.apple.com/app/titls/id1579078964'],
                ['3', 'Timestamps', 'https://timestamps.app'],
              ].map(([key, title, url]) => (
                <a href={url} target='_blank' rel='noopener' key={key}>
                  <div className='flex gap-2 items-center hover:opacity-60'>
                    {title}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>




            <div className='flex flex-col gap-6'>
              <div className='uppercase text-xs font-normal tracking-widest text-zinc-700 dark:text-zinc-300'>Contact</div>

              {[
                ['1', 'Mail', 'mailto:hello@niklaspeterson.com'],
                ['2', 'x.com', 'https://x.com/niklas_peterson'],
                ['3', 'LinkedIn', 'https://www.linkedin.com/in/niklaspeterson'],
              ].map(([key, title, url]) => (
                <a href={url} target='_blank' rel='noopener' key={key}>
                  <div className='flex gap-2 items-center hover:opacity-60'>
                    {title}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </a>
              ))}

            </div>
          </div>
        </div>

        <div className='flex gap-5 flex-col md:gap-0 md:flex-row md:justify-between'>

          <div className='flex gap-2 text-zinc-950 dark:text-zinc-50'>
            {[
              ['1', 'https://x.com/niklas_peterson', 'M17.7512 2.96094H20.818L14.1179 10.6187L22 21.0391H15.8284L10.9946 14.7192L5.46359 21.0391H2.39494L9.5613 12.8483L2 2.96094H8.32828L12.6976 8.7376L17.7512 2.96094ZM16.6748 19.2035H18.3742L7.4049 4.70015H5.58133L16.6748 19.2035Z'],
              ['2', 'https://www.threads.net/@niklas.peterson', 'M16.5178 11.1523C16.6094 11.1898 16.6927 11.2314 16.7802 11.2689C17.9966 11.8563 18.8881 12.7353 19.3547 13.8267C20.0087 15.3472 20.0712 17.8175 18.0924 19.7921C16.5844 21.3001 14.7473 21.9792 12.152 22H12.1395C9.21513 21.9792 6.96976 20.996 5.45758 19.0756C4.11203 17.3676 3.4205 14.989 3.39551 12.0104V11.9979V11.9896C3.41634 9.01104 4.10786 6.63237 5.45341 4.92439C6.9656 3.00396 9.21513 2.02083 12.1395 2H12.152C15.0806 2.02083 17.3551 2.99979 18.9131 4.91189C19.6796 5.85753 20.2462 6.99479 20.6044 8.31535L18.9214 8.76526C18.6257 7.69048 18.1799 6.77401 17.5801 6.04082C16.3636 4.54947 14.539 3.78296 12.1437 3.7663C9.76918 3.78713 7.97372 4.54947 6.80313 6.03249C5.71169 7.4197 5.14514 9.42762 5.12431 11.9979C5.14514 14.5682 5.71169 16.5761 6.80313 17.9675C7.96956 19.4505 9.76918 20.2129 12.1437 20.2337C14.2849 20.217 15.7013 19.7088 16.8802 18.5299C18.2258 17.1885 18.2008 15.5388 17.7717 14.5349C17.5176 13.9433 17.0593 13.4518 16.4428 13.081C16.2887 14.2016 15.9512 15.0931 15.4138 15.7805C14.7015 16.6886 13.6892 17.1802 12.3853 17.251C11.4022 17.3051 10.4565 17.0677 9.72336 16.5845C8.85687 16.0096 8.34864 15.1348 8.29449 14.1141C8.19034 12.1021 9.78168 10.6565 12.2603 10.5149C13.1393 10.4649 13.9641 10.5024 14.7265 10.6315C14.6265 10.015 14.4224 9.52343 14.1183 9.16517C13.7017 8.67778 13.0518 8.42783 12.1937 8.42366H12.1645C11.473 8.42366 10.5399 8.61529 9.94414 9.51927L8.51111 8.53614C9.31094 7.32389 10.6065 6.65736 12.1687 6.65736H12.202C14.8098 6.67403 16.3636 8.30285 16.5219 11.1439L16.5136 11.1523H16.5178ZM10.0191 14.0183C10.0733 15.0639 11.2022 15.5513 12.2937 15.4889C13.3601 15.4305 14.5682 15.014 14.7723 12.4395C14.2224 12.3187 13.6142 12.2562 12.9643 12.2562C12.7644 12.2562 12.5644 12.2604 12.3645 12.2729C10.5773 12.3728 9.98164 13.2393 10.0233 14.0142L10.0191 14.0183Z'],
              ['3', 'https://posts.cv/niklaspeterson', 'M9.55202 21.8124L4.44506 20.4439C3.70182 20.2446 3.06819 19.7582 2.68352 19.0918C2.29884 18.4253 2.19464 17.6334 2.39383 16.8901L5.80832 4.15013C6.00763 3.4069 6.49399 2.77326 7.16043 2.38859C7.82688 2.00392 8.61883 1.89972 9.36209 2.09891L19.5549 4.8286C20.2982 5.02791 20.9318 5.51427 21.3165 6.18071C21.7011 6.84716 21.8053 7.63911 21.6062 8.38238L19.5549 16.0354C19.3667 16.7381 19.0419 17.3969 18.599 17.9741C18.1562 18.5512 17.604 19.0355 16.974 19.3993L13.7558 21.2574C13.1258 21.6213 12.4303 21.8575 11.709 21.9525C10.9877 22.0476 10.2548 22.0007 9.55202 21.8124ZM3.92275 17.2995C3.87791 17.4668 3.86647 17.6413 3.88909 17.8131C3.9117 17.9848 3.96791 18.1504 4.05453 18.3004C4.14115 18.4505 4.25646 18.5819 4.3939 18.6874C4.53133 18.7928 4.68819 18.8702 4.85551 18.915L9.69658 20.2128L10.7211 16.391C10.8197 16.0229 10.9898 15.6778 11.2218 15.3755C11.4537 15.0731 11.743 14.8194 12.073 14.6288C12.403 14.4383 12.7673 14.3145 13.1451 14.2648C13.5229 14.215 13.9068 14.2401 14.2749 14.3387L18.0967 15.3622L20.0772 7.97403C20.1221 7.80671 20.1335 7.6322 20.1109 7.46046C20.0883 7.28872 20.0321 7.12312 19.9455 6.97311C19.8588 6.82309 19.7435 6.69161 19.6061 6.58617C19.4687 6.48073 19.3118 6.4034 19.1445 6.35858L8.95058 3.62572C8.61281 3.53548 8.25304 3.58304 7.95032 3.75795C7.6476 3.93285 7.42671 4.22079 7.33619 4.55848L3.92275 17.2995ZM17.472 16.8342L13.8655 15.8677C13.6982 15.8228 13.5237 15.8114 13.3519 15.834C13.1802 15.8566 13.0146 15.9128 12.8646 15.9994C12.7146 16.0861 12.5831 16.2014 12.4777 16.3388C12.3722 16.4762 12.2949 16.6331 12.2501 16.8004L11.2835 20.407C11.8753 20.3621 12.4494 20.1847 12.9634 19.8878L16.1826 18.0297C16.6967 17.7329 17.1373 17.3244 17.472 16.8342Z'],
              ['4', 'https://www.figma.com/@niklaspeterson', 'M8.78963 2L15.2103 2C17.2769 2 18.9522 3.6753 18.9522 5.74189C18.9522 7.05046 18.2805 8.20214 17.2631 8.87096C18.2805 9.5398 18.9522 10.6915 18.9522 12.0001C18.9522 14.0667 17.2769 15.742 15.2103 15.742H15.129C14.1602 15.742 13.2773 15.3738 12.6128 14.7697V18.2175C12.6128 20.3116 10.8937 22 8.80982 22C6.74836 22 5.04773 20.3298 5.04773 18.2581C5.04773 16.9495 5.71942 15.7979 6.73681 15.1291C5.71941 14.4603 5.04773 13.3086 5.04773 12.0001C5.04773 10.6915 5.71942 9.5398 6.73684 8.87096C5.71943 8.20214 5.04773 7.05046 5.04773 5.74189C5.04773 3.6753 6.72303 2 8.78963 2ZM8.78963 8.2581L11.3871 8.2581V3.22569L8.78963 3.22569C7.39996 3.22569 6.27342 4.35224 6.27342 5.74189C6.27342 7.13156 7.39996 8.2581 8.78963 8.2581ZM12.6128 3.22569V8.2581L15.2096 8.2581C16.5993 8.2581 17.7265 7.13156 17.7265 5.74189C17.7265 4.35224 16.5999 3.22569 15.2103 3.22569H12.6128ZM15.129 8.25819C15.1291 8.25819 15.1289 8.25819 15.129 8.25819ZM11.3871 9.48379L8.78963 9.48379C7.39999 9.48379 6.27342 10.6104 6.27342 12.0001C6.27342 13.3897 7.39996 14.5163 8.78963 14.5163H11.3871V9.48379ZM11.3871 15.742H8.78963C7.39994 15.742 6.27342 16.8685 6.27342 18.2581C6.27342 19.6427 7.41501 20.7743 8.80982 20.7743C10.2271 20.7743 11.3871 19.6244 11.3871 18.2175V15.742ZM15.2103 9.48379L15.1297 9.48388C13.74 9.48388 12.6128 10.6104 12.6128 12.0001C12.6128 13.3897 13.7393 14.5163 15.129 14.5163H15.2103C16.5999 14.5163 17.7265 13.3897 17.7265 12.0001C17.7265 10.6106 16.5996 9.48415 15.2103 9.48379C15.2103 9.48379 15.2103 9.48379 15.2103 9.48379Z'],
            ].map(([key, url, path]) => (
              <a className='p-2 hover:opacity-60' href={url} target='_blank' rel='noopener' key={key}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d={path} /></svg>
              </a>
            ))}
          </div>

          <small className='text-sm'>© 2024 Niklas Peterson</small>

        </div>
        <div className="h-full absolute bottom-0 left-0 right-0 -z-10 blur-[200px] rotate-180 max-w-full overflow-hidden flex justify-center"><LottieAnimation /></div>
      </Motion>

    </main>
  )
}