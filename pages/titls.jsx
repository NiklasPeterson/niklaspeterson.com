import Heading2 from '@components/Heading/Heading2'
import Article from '@components/Article'
import Copyright from '@components/Copyright'
import Footer from '@components/Footer'
import Layout from '@components/Layout'
import Header from '@components/Header'
import AppStoreButton from '@components/AppStoreButton'

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
      video={'/titls_app-preview.mp4'}
    >
      <Header heading="Titls" tagline="iOS widget" />
      <Article>
        <Heading2
          text="Titls is an small iOS app that lets you create titles and then use widgets to organise your iOS homescreens."
        />
          <AppStoreButton url="https://apps.apple.com/us/app/titls/id1579078964"/>
      </Article>

      <Footer>
        <Copyright text="&copy; 2021 Niklas Peterson" />
      </Footer>
    </Layout>
  )
}

export async function getStaticProps() {
  const config = await import(`../siteconfig.json`)

  return {
    props: {
      title: "Titls | " + config.default.title,
      author: config.default.author,
      description: "Titls is an small iOS app that lets you create titles and then use widgets to organise your iOS homescreens.",
      dribbble: config.default.dribbble,
      github: config.default.github,
      twitter: config.default.twitter,
      instagram: config.default.instagram,
    },
  }
}
