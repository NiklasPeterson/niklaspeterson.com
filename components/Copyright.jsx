import styled from 'styled-components'

const Copyright = (props) => <ScCopyright>{props.text}</ScCopyright>

export default Copyright

const ScCopyright = styled.small`
  color: var(--color-highlight);
  font-size: 14px;
  line-height: 1.5;
`
