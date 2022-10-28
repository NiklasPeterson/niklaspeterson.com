import styled from 'styled-components'
import Link from 'next/link'

const Copyright = (props) => <ScCopyright><Link href="/">{props.text}</Link></ScCopyright>

export default Copyright

const ScCopyright = styled.small`
  color: var(--color-highlight);
  font-size: 14px;
  line-height: 1.5;


  a {

    box-shadow: none;
    transition-duration: 0.5s;

    color: var(--color-highlight);
    text-decoration: none;
    cursor: pointer;

    :visited,
    :focus {
      color: var(--color-highlight);
    }

    :hover {
      box-shadow: none;
      border-bottom: 1px dotted var(--color-link-hover);
      transition-duration: 0.1s;

      color: var(--color-link-hover);
      text-decoration: none;
    }
  }
`
