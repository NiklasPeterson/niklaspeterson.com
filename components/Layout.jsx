import styled from 'styled-components'
import Head from 'next/head'

import ProfileImage from '@components/ProfileImage'

export default function Layout(props) {
  return (
    <ScPageWrapper>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1, viewport-fit=cover, shrink-to-fit=no"
        />
        <meta name="HandheldFriendly" content="true" />
        <meta name="theme-color" content="#282c37" />

        {/* SEO */}
        <title>{props.pageTitle}</title>
        <meta name="author" content={props.pageAuthor} />
        <meta name="description" content={props.pageDescription} />

        <meta name="robots" content="index, follow" />
        <meta name="referrer" content="always" />

        <link href={props.dribbbleLink} rel="me" />
        <link href={props.githubLink} rel="me" />
        <link href={props.twitterLink} rel="me" />
        <link href={props.instagramLink} rel="me" />

        {/*  Open Graph */}
        {/* <meta property="og:title" content="Niklas Peterson Designer." />
	    	<meta property="og:description" content="Niklas Peterson is a designer who focuses on UI & UX design, but he also develops websites & iOS / Android apps." />
	    	<meta property="og:site_name" content="Niklas Peterson">
	    	<meta property="og:type" content="website" />
	    	<meta property="og:image" content="assets/images/niklas_peterson_card.png">
	    	<meta property="og:url" content="https://niklaspeterson.com" /> */}

        {/* Favicon */}
        {/* <link
        rel="shortcut icon"
        type="image/x-icon"
        href="assets/icons/favicon.ico"
        sizes="16x16 24x24 32x32 64x64 192x192"
      /> */}

        {/* Pinned Tab Icon */}
        {/* <link rel="mask-icon" href="assets/icons/pd_pin.svg" color="#4a4a4a" />

      <link
        href="/assets/images/apple-touch-icon-precomposed.png"
        rel="apple-touch-icon-precomposed"
      /> */}

      <link
        rel="preload"
        href="/fonts/Inter-ExtraLight.woff2"
        as="font"
        crossOrigin=""
      />

      <link
        rel="preload"
        href="/fonts/Inter-Regular.woff2"
        as="font"
        crossOrigin=""
      />
      
      </Head>
      <ScLayout>
        <ScInnerContainer>{props.children}</ScInnerContainer>
      </ScLayout>
      <ProfileImage image={props.image} video={props.video} videoUrl={props.videoUrl} />
    </ScPageWrapper>
  )
}

const ScPageWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  @media (max-width: 812px) {
    flex-wrap: wrap;
    height: auto;
    min-height: 100vh;
  }
`
const ScLayout = styled.main`
  width: 50vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);

  @media (max-width: 812px) {
    width: 100vw;
    height: auto;
    z-index: 1;
  }
`

const ScInnerContainer = styled.div`
  padding: 48px;
  max-width: 680px;
  margin-top: auto;
  margin-bottom: auto;
`
