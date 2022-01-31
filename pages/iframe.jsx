import styled from 'styled-components';
import Copyright from '@components/Copyright'
import Footer from '@components/Footer'

export default function Titls(props) {
  return (
   <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 24, paddingRight: 16, paddingLeft: 16}}>
      <div width={1366} height={1024} style={{width: 1366, height: 1024, overflow: "hidden"}}>
        <iframe style={{border: "none", transform: "translate(-50px, -50px)"}} width={1566} height={1224} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F3YveU02SD7KP4lntipm6pv%2FShine-test%3Fnode-id%3D17%253A6"></iframe>
      </div>
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