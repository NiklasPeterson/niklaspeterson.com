import styled, { css } from 'styled-components'

const Aside = (props) => <ScAside image={props.image} video={props.video}>
  {props.video &&
    <video style={{height: '100%'}} playsInline muted autoPlay loop >
      <source src={props.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  }
</ScAside>

export default Aside

const ScAside = styled.aside`
  position: relative;
  width: 50vw;
  height: 100vh;
  overflow: hidden;

  ${(props) =>
    props.video &&
    css`
      text-align: right;

      @media (max-width: 812px) {
        width: 100vw;
        text-align: center;
      }
    `};

  ${(props) =>
    props.image &&
    css`
      transition: 0.1s ease;
      background: url('${(props) => props.image}.jpg') no-repeat center center;
      background-size: cover;

      @media (max-width: 812px) {
        width: 100vw;
        position: fixed;
        z-index: -1;

        &:after {
          content: '';
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: var(--color-background);
          opacity: 0.88;
        }
      }
    `};

  
`
