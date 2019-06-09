import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

const Sitemap = ({ data }) => {
  const {
    allMarkdownRemark: { edges: posts },
  } = data

  return (
    <>
      <SEO />
      <Layout>
        <h1>Sitemap</h1>

        <h3>About</h3>
        <ul className="margin-top-0">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/skills'>Skills</Link></li>
          <li><Link to='/now'>Now</Link></li>
          <li><Link to='/colophon'>Colophon</Link></li>
        </ul>

        <h3>Projects</h3>
        <ul className="margin-top-0">
          <li><Link to='/projects'>Projects home</Link></li>
          {/* <li></li> */}
        </ul>

        <h3>Blog Posts</h3>
        <ul className="margin-top-0">
          <li><Link to='/blog'>Blog home</Link></li>
          {posts.map(({ node }) => (
            <li><Link to={node.frontmatter.path}>{node.frontmatter.date}: {node.frontmatter.title}</Link></li>
          ))}
        </ul>

        <h3>Other</h3>
        <ul className="margin-top-0">
          <li><Link to='/404'>404</Link></li>
        </ul>
      </Layout>
    </>
  )
}

export const postsQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts//" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            path
            excerpt
            tags
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

export default Sitemap