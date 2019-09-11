import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Post from '../components/post'
import Navigation from '../components/navigation'

// import '../styles/layout.css'

const Tags = ({
  data,
  pageContext: { nextPagePath, previousPagePath, tag },
}) => {
  const {
    allMarkdownRemark: { edges: posts },
  } = data

  return (
    <>
      <SEO />
      <Layout>
        <div className="infoBanner">
          Posts with tag: <span style={{ fontWeight: 'bold' }}>#{tag}</span>
          <span style={{ float: 'right' }}>
            <Link to="/blog">Remove filter</Link> | <Link to="/blog/tags">All tags</Link>
          </span>
        </div>

        {posts.map(({ node }) => (
          <Post
            key={node.id}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            path={node.frontmatter.path}
            tags={node.frontmatter.tags}
            coverImage={node.frontmatter.coverImage}
            excerpt={node.frontmatter.excerpt || node.excerpt.autoExcerpt}
          />
        ))}

        <Navigation
          previousPath={previousPagePath}
          previousLabel="Newer posts"
          nextPath={nextPagePath}
          nextLabel="Older posts"
        />
      </Layout>
    </>
  )
}

Tags.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string,
    previousPagePath: PropTypes.string,
  }),
}

export const postsQuery = graphql`
  query($limit: Int!, $skip: Int!, $tag: String!) {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//posts//" },
        frontmatter: { tags: { in: [$tag] }, published: { eq: true } }
      }
      sort: {
        fields: [frontmatter___date], order: DESC
      }
      limit: $limit
      skip: $skip
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

export default Tags
