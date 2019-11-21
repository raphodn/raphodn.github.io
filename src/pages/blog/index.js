import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../../components/seo'
import Layout from '../../components/layout'
import Post from '../../components/post'
// import Navigation from '../../components/navigation'

// const Blog = ({ data, pageContext: { nextPagePath, previousPagePath } }) => {
const Blog = ({ data }) => {
  const {
    allMarkdownRemark: { edges: posts },
  } = data

  return (
    <>
      <SEO />
      <Layout>
        {posts.map(({ node }) => (
          <Post
            key={node.id}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            path={node.frontmatter.path}
            parent={node.frontmatter.parent}
            coverImage={node.frontmatter.coverImage}
            tags={node.frontmatter.tags}
            excerpt={node.frontmatter.excerpt || node.autoExcerpt}
          />
        ))}

        {/* <Navigation
          previousPath={previousPagePath}
          previousLabel="Newer posts"
          nextPath={nextPagePath}
          nextLabel="Older posts"
        /> */}
      </Layout>
    </>
  )
}

Blog.propTypes = {
  data: PropTypes.object.isRequired,
  // pageContext: PropTypes.shape({
  //   nextPagePath: PropTypes.string,
  //   previousPagePath: PropTypes.string,
  // }),
}

export const postsQuery = graphql`
  {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//posts//" },
        frontmatter: { published: { eq: true } }
      }
      sort: {
        fields: [frontmatter___date], order: DESC
      }
    ) {
      edges {
        node {
          id
          excerpt
          timeToRead
          wordCount {
            paragraphs
            sentences
            words
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            path
            parent
            excerpt
            tags
            published
            coverImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Blog
