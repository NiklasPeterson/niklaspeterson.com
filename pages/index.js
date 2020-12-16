import Head from 'next/head'

import Heading2 from "../components/Heading/Heading2";
import Article from "../components/Article";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import List from "../components/List/List";
import ListItem from "../components/List/ListItem";
import Link from "../components/Link";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default function Home() {
  return (

    <>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1, viewport-fit=cover, shrink-to-fit=no"
        />
        <meta name="HandheldFriendly" content="true" />
        <meta name="theme-color" content="#282c37" />

        {/* SEO */}
        <title>Niklas Peterson Designer.</title>
        <meta name="author" content="Niklas Peterson" />
        <meta
          name="description"
          content="Niklas Peterson is a designer who loves to create illustrations on his spare time. During my daytime job I design, develop websites & apps."
        />

        <meta name="robots" content="index, follow" />
        <meta name="referrer" content="always" />

        <link href="https://dribbble.com/niklaspeterson" rel="me" />
        <link href="https://instagram.com/niklas.peterson" rel="me" />ontent="initial-scale=1.0, width=device-width"/>

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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

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
          onload="this.media='all'"
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
      <Layout>
          <Header/>
          <Article>
            <Heading2
              text="Niklas Peterson is a designer who focuses on UI
              & UX design, but he also develops websites & iOS
              / Android apps."
            />
            <p>
              See my latest work on{" "}
              <Link
                href="https://dribbble.com/niklaspeterson"
                title="Niklas Peterson on Dribbble"
                target="_blank"
                rel="noopener"
              >
                Dribbble
              </Link>
              , checkout what I'm currently building on{" "}
              <Link
                href="https://github.com/NiklasPeterson"
                title="Niklas Peterson on GitHub"
                target="_blank"
                rel="noopener"
              >
                GitHub
              </Link>
              , follow my life on{" "}
              <Link
                href="https://www.instagram.com/niklas.peterson/"
                title="Niklas Peterson on Instagram"
                target="_blank"
                rel="noopener"
              >
                Instagram
              </Link>{" "}
              & connect with me through{" "}
              <Link
                href="https://twitter.com/niklas_peterson"
                title="Niklas Peterson on Twitter"
                target="_blank"
                rel="noopener"
              >
                Twitter
              </Link>{" "}
              or{" "}
              <Link
                href="https://linkedin.com/in/niklaspeterson/"
                title="Niklas Peterson on LinkedIn"
                target="_blank"
                rel="noopener"
              >
                Linkedin
              </Link>
            </p>
          </Article>

          <List>
            <ListItem heading="Experience" />

            <ListItem
              title="Designer"
              linkUrl="http://www.cityweb.se/uk/home"
              linkText="Cityweb"
              afterText="| 2015 - Current"
              linkRel="noreferrer"
            />

            <ListItem
              title="Web Developer consultant"
              linkUrl="https://www.ericsson.com"
              linkText="Ericsson"
              afterText="| 2015"
              linkRel="noreferrer"
            />

            <ListItem
              title="UI designer intern"
              linkUrl="http://www.black.se"
              linkText="Black & Co."
              afterText="| 2014 & 2015"
              linkRel="noreferrer"
            />

            <ListItem
              title="Web designer intern"
              linkUrl="http://jimdavislabs.com"
              linkText="JimDavisLabs"
              afterText="| 2014"
              linkRel="noreferrer"
            />
          </List>

          <List>
            <ListItem heading="Education" />

            <ListItem title="UI & UX design" text="NTI" afterText="| 2015" />

            <ListItem
              title="Graphic Communications"
              text="NTI"
              afterText="| 2015"
            />

            <ListItem
              title="Web Developing"
              text="Växjö School of Higher Vocational Education"
              afterText="| 2013-2015"
            />

            <ListItem />
          </List>

          <Footer>
            <Copyright text="&copy;2020 Niklas Peterson" />
          </Footer>
      </Layout>
    </>
  );
}
