import getPosts from '@utils/getPosts'

import Layout from '@components/Layout'
import PostList from '@components/PostList'
import Nav from '@components/Nav'

const Blog = ({ posts, title, description, ...props }) => {
  return (
      <Layout pageTitle={`${title} | Blog`} description={description}>
        <Nav/>
        <h1 className="title">Welcome to my Blog!</h1>

        <p className="description">
          {description}
        </p>

        <PostList posts={posts} />

      </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  const config = await import(`../siteconfig.json`)

  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: config.default.title,
      description: config.default.description,
    },
  }
}