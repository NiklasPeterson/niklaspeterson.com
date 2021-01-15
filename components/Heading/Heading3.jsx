import styled from 'styled-components'

const Heading3 = (props) => <ScH3>{props.text}</ScH3>

export default Heading3

const ScH3 = styled.h3`
  margin-bottom: 16px;
  color: var(--color-highlight);
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 1.5;
  text-transform: uppercase;
`
