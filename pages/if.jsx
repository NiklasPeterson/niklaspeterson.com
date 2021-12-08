import styled from 'styled-components';
import Copyright from '@components/Copyright'
import Footer from '@components/Footer'

export default function Titls(props) {
  return (
   <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 24, paddingRight: 16, paddingLeft: 16}}>
      <ScH1>Invisible Friends AR</ScH1>
        <p style={{textAlign: "center"}}>Press on the Cool Dude below (Might only work on iPhone)</p>
        <a style={{textAlign: "center"}} rel="ar" href="/images/if.usdz">
          <img width="100%" src="/images/if.png" alt="Invisible Friends AR Logo" />
        </a>
      <Footer>
        <Copyright text="&copy; 2021 Niklas Peterson." />
      </Footer>
    </div>
  )
}

export async function getStaticProps() {
  const config = await import(`../siteconfig.json`)

  return {
    props: {
      title: "Titls | " + config.default.title,
      author: config.default.author,
      description: "Titls is a small iOS app that lets you create titles and then use widgets to organize your iOS home screens.",
      dribbble: config.default.dribbble,
      github: config.default.github,
      twitter: config.default.twitter,
      instagram: config.default.instagram,
    },
  }
}


const ScH1 = styled.h1`
  display: block;
  margin-bottom: 40px;

  font-family: 'Inter Extra Light', sans-serif;
  font-size: 64px;
  line-height: 1.25;
  letter-spacing: -2px;
  color: var(--color-highlight);
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 812px) {
    font-size: 40px;
    line-height: 1.25;
  }
`;