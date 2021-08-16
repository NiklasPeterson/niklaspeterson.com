import Heading1 from '@components/Heading/Heading1'
import Tagline from '@components/Tagline'

export default function Header(props) {
  return (
    <header>
      <Heading1 text={props.heading} />
      <Tagline text={props.tagline} />
    </header>
  )
}
