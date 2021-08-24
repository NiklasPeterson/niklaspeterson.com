import Heading2 from '@components/Heading/Heading2'
import Article from '@components/Article'
import Copyright from '@components/Copyright'
import Footer from '@components/Footer'
import List from '@components/List/List'
import ListItem from '@components/List/ListItem'
import Link from '@components/Link'
import Layout from '@components/Layout'
import Header from '@components/Header'

import profilePic from '../public/images/niklas-peterson.webp'

export default function Home(props) {
  return (
    <Layout
      pageTitle={props.title}
      pageDescription={props.description}
      pageAuthor={props.author}
      dribbbleLink={props.dribbble}
      githubLink={props.github}
      twitterLink={props.twitter}
      instagramLink={props.instagram}
      image={profilePic}
      altText="Photo of Niklas Peterson"
    >
      <Header heading="Niklas Peterson" tagline="Designer." />
      <Article>
        <Heading2
          text="My name is Niklas Peterson, and I'm a designer who focuses on UI
              & UX design, but I also develop websites & iOS/Android apps."
        />
        <p>
          See what  I'v been up to on{' '}
          <Link
            href="https://polywork.com/NiklasPeterson"
            title="Niklas Peterson on Polywork"
            target="_blank"
            rel="noopener"
          >
            Polywork
          </Link>.
          See my latest work on{' '}
          <Link
            href="https://dribbble.com/niklaspeterson"
            title="Niklas Peterson on Dribbble"
            target="_blank"
            rel="noopener"
          >
            Dribbble
          </Link>
          {' '}& check what I&apos;m currently building on{' '}
          <Link
            href="https://github.com/NiklasPeterson"
            title="Niklas Peterson on GitHub"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </Link>
          . Follow my life on{' '}
          <Link
            href="https://www.instagram.com/niklas.peterson/"
            title="Niklas Peterson on Instagram"
            target="_blank"
            rel="noopener"
          >
            Instagram
          </Link>{' '}
          & connect with me through{' '}
          <Link
            href="https://twitter.com/niklas_peterson"
            title="Niklas Peterson on Twitter"
            target="_blank"
            rel="noopener"
          >
            Twitter
          </Link>{' '}
          or{' '}
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
        <ListItem heading="Side Projects" />

        <ListItem
          title="Titls"
          linkUrl="https://niklaspeterson.com/titls"
          linkText="iOS Widget App"
        />

        <ListItem
          title="Minimalist icons"
          linkUrl="https://niklaspeterson.gumroad.com/l/minimalist-icons"
          linkText="iOS Icons"
          target="_blank"
        />

        <ListItem
          title="iOS iMessage Stickers Template"
          linkUrl="https://www.figma.com/community/file/894284318358585629/iOS-iMessage-Stickers-Template"
          linkText="Figma Template"
          target="_blank"
        />

        <ListItem
          title="iOS iMessage Stickers app"
          linkUrl="https://github.com/NiklasPeterson/ios-message-stickers-template"
          linkText="Swift Template"
          target="_blank"
        />




        <ListItem />
      </List>

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

      {/* <List>
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
      </List> */}

      <Footer>
        <Copyright text="&copy; 2021 Niklas Peterson." />
      </Footer>
    </Layout>
  )
}

export async function getStaticProps() {
  const config = await import(`../siteconfig.json`)

  return {
    props: {
      title: config.default.title,
      author: config.default.author,
      description: config.default.description,
      dribbble: config.default.dribbble,
      github: config.default.github,
      twitter: config.default.twitter,
      instagram: config.default.instagram,
    },
  }
}
