import Heading2 from '@components/Heading/Heading2'
import Article from '@components/Article'
import Copyright from '@components/Copyright'
import Footer from '@components/Footer'
import Layout from '@components/Layout'
import Header from '@components/Header'
import Link from '@components/Link'
import AppStoreButton from '@components/AppStoreButton'
import Heading3 from '@components/Heading/Heading3'

// import AppStoreWhite from '/images/App_store-white.svg';
// import AppStoreBlack from '/images/App_store-black.svg';

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
      video={'/gitnot_app-preview.mp4'}
    >
      <Header heading="GitNot" tagline="Shows GitHub Notifications in macOS menu bar." />
      <Article>
        <Heading2
          text="GitNot is a small app that lives in the menubar on macOS, it lets you know when you have unread notifications on GitHub."
        />

        <Heading3 text="Support/Feedback"/>
        <p style={{marginBottom: 16}}>
          If you have any questions or suggestions reach out to {' '}
          <Link
            href="https://twitter.com/niklas_peterson"
            title="Niklas Peterson on Twitter"
            target="_blank"
            rel="noopener"
          >
            @niklas_peterson
          </Link>{' '} on Twitter.
        </p>
          <AppStoreButton url="https://apps.apple.com/app/gitnot/id1580617340"/>
      </Article>
      
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
      title: "GitNot | " + config.default.title,
      author: config.default.author,
      description: "GitNot is a small app that lives in the menubar on macOS, it lets you know when you have unread notifications on GitHub.",
      dribbble: config.default.dribbble,
      github: config.default.github,
      twitter: config.default.twitter,
      instagram: config.default.instagram,
    },
  }
}
