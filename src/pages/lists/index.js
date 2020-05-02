import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import SEO from '../../components/seo'
import Layout from '../../components/layout'

const Lists = ({ data }) => {
  const {
    allMarkdownRemark: { edges: lists },
  } = data

  return (
    <>
      <SEO />
      <Layout>
        <h1>Lists</h1>
        
        <p>
          I like to make lists. This page will serve the purpose to list those lists :)
        </p>

        <ul className="margin-top-0">
          {lists.map(({ node }) => (
            <li key={node.frontmatter.path}>
              <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  )
}

Lists.propTypes = {
  data: PropTypes.object.isRequired,
}

export const listsQuery = graphql`
  {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//lists//" },
        frontmatter: { published: { eq: true } }
      }
      sort: {
        fields: [frontmatter___title], order: ASC
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
            date
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

export default Lists