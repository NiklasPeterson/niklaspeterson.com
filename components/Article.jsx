import styled from 'styled-components'

const Article = (props) => <ScArticle>{props.children}</ScArticle>

export default Article

const ScArticle = styled.article`
  margin-bottom: 40px;
  font-size: 20px;
  line-height: 1.5;
`
