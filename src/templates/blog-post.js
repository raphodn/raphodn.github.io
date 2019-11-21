import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Post from '../components/post'

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.frontmatter.excerpt || data.markdownRemark.excerpt.autoExcerpt}
    />
    <Post
      key={data.markdownRemark.id}
      title={data.markdownRemark.frontmatter.title}
      date={data.markdownRemark.frontmatter.date}
      path={data.markdownRemark.frontmatter.path}
      parent={data.markdownRemark.frontmatter.parent}
      coverImage={data.markdownRemark.frontmatter.coverImage}
      html={data.markdownRemark.html}
      tags={data.markdownRemark.frontmatter.tags}
      // previousPost={pageContext.previous}
      // nextPost={pageContext.next}
    />
  </Layout>
)

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  // pageContext: PropTypes.shape({
  //   next: PropTypes.object,
  //   previous: PropTypes.object,
  // }),
}

export const pageQuery = graphql`
  query($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
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
`

export default BlogPostTemplate