import styled from "styled-components/macro";

import GlobalStyle from "./GlobalStyle";


import Heading1 from "./components/Heading/Heading1";
import Heading2 from "./components/Heading/Heading2";
import Tagline from "./components/Tagline";
import Article from "./components/Article";
import Link from "./components/Link";
import Copyright from "./components/Copyright";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import List from "./components/List/List";
import ListItem from "./components/List/ListItem";

function App() {
  return (
    <>
    <GlobalStyle />

    <ScMainContainer>
      <ScInnerContainer>
        <header>
          <Heading1 text="Niklas Peterson" />
          <Tagline text="Designer." />
        </header>

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
      </ScInnerContainer>
    </ScMainContainer>

    <Aside image={"/images/niklas-peterson"} />
  </>
  );
}

export default App;

const ScMainContainer = styled.main`
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
`;

const ScInnerContainer = styled.div`
  padding: 48px;
  max-width: 680px;
  margin-top: auto;
  margin-bottom: auto;
`;
