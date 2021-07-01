import styled from 'styled-components'
import Image from 'next/image'

const ProfileImage = (props) => (
  <ScProfileImage>
    <Image src={props.image} alt="Picture of the author" layout="fill" objectPosition="center center" objectFit="cover" loading="lazy" placeholder="blur" />
  </ScProfileImage>
)

export default ProfileImage

const ScProfileImage = styled.div`
  position: relative;
  width: 50vw;
  height: 100vh;
  overflow: hidden;
  transition: 0.1s ease;

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
`
