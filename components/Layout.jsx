import styled from 'styled-components'
import Head from 'next/head'

import Aside from '@components/Aside'

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

        {/* Google Fonts */}
        {/*
        - 1. Preemptively warm up the fonts’ origin.
        -
        - 2. Initiate a high-priority, asynchronous fetch for the CSS file. Works in
        -    most modern browsers.
        -
        - 3. Initiate a low-priority, asynchronous fetch that gets applied to the page
        -    only after it’s arrived. Works in all browsers with JavaScript enabled.
        -
        - 4. In the unlikely event that a visitor has intentionally disabled
        -    JavaScript, fall back to the original method. The good news is that,
        -    although this is a render-blocking request, it can still make use of the
        -    preconnect which makes it marginally faster than the default.
        */}

        {/* [1] */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        {/* [2] */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,400&display=swap"
        />

        {/* [3] */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,400&display=swap"
          media="print"
          onLoad="this.media='all'"
        />

        {/* [4] */}
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,400&display=swap"
          />
        </noscript>
        {/* End Google Fonts */}
      </Head>
      <ScLayout>
        <ScInnerContainer>{props.children}</ScInnerContainer>
      </ScLayout>
      <Aside image={'/images/niklas-peterson'} />
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
