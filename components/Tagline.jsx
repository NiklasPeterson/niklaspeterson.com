import styled from 'styled-components'

const Tagline = (props) => <ScTagline>{props.text}</ScTagline>
export default Tagline

const ScTagline = styled.span`
  display: block;
  margin-bottom: 40px;

  font-family: 'Inter Extra Light', sans-serif;
  font-size: 64px;
  line-height: 1.25;
  letter-spacing: -2px;
  color: var(--color-highlight);
  text-transform: uppercase;

  @media (max-width: 812px) {
    font-size: 40px;
    line-height: 1.25;
  }
`
