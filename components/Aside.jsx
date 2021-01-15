import styled from 'styled-components'

const Aside = (props) => <ScAside image={props.image} />

export default Aside

const ScAside = styled.aside`
  position: relative;
  width: 50vw;
  height: 100vh;
  overflow: hidden;
  transition: 0.1s ease;
  background: url('${(props) => props.image}.jpg') no-repeat center center;
  background-size: cover;

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
