import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

const Sitemap = ({ data }) => {
  const {
    allMarkdownRemark: { edges: posts },
    sitemapJson,
  } = data

  return (
    <>
      <SEO />
      <Layout>
        <h1>Sitemap</h1>

        {sitemapJson.sitemapGroups.map((sitemapGroup, sitemapGroupIndex) => (
          <section key={sitemapGroupIndex}>
            <h3>{sitemapGroup.name}</h3>
            <ul className="margin-top-0">
              {sitemapGroup.links.map((child, childIndex) => (
                <li key={childIndex}><Link to={child.url}>{child.name}</Link></li>
              ))}
            </ul>
          </section>
        ))}

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

        <br />

        <i>Last updated: {sitemapJson.updated_at}</i>
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
    },
    sitemapJson {
      updated_at(formatString: "DD MMMM YYYY")
      sitemapGroups {
        name
        links {
          name
          url
        }
      }
    }
  }
`

export default Sitemap