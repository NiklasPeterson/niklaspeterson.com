import styled, { css } from 'styled-components'
import Image from 'next/image'

const Aside = (props) => {
  return (
    
    <ScAside image={props.image} video={props.video}>

  {props.image &&
    <Image src={props.image} alt="Picture of the author" layout="fill" objectPosition="center center" objectFit="cover" loading="lazy" placeholder="blur" />
  }
  {props.video &&
    <video style={{height: '100%'}} playsInline muted autoPlay loop >
      <source src={props.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  }
</ScAside>
  )};

export default Aside

const ScAside = styled.div`
  position: relative;
  width: 50vw;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 812px) {
    position: fixed;
    z-index: -1;
    width: 100vw;

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

  ${(props) =>
    props.video &&
    css`
      text-align: center;

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
