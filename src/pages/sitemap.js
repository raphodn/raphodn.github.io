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
            <h2>{sitemapGroup.name}</h2>
            <ul className="margin-top-0">
              {sitemapGroup.links.map((child, childIndex) => (
                <li key={childIndex}><Link to={child.url}>{child.name}</Link></li>
              ))}
            </ul>
          </section>
        ))}

        <h2>Blog Posts</h2>
        <ul className="margin-top-0">
          <li><Link to='/blog'>Blog Home</Link></li>
          <li><Link to='/blog/tags'>Blog Tags</Link></li>
          {posts.map(({ node }) => (
            <li key={node.frontmatter.path}>
              <Link to={node.frontmatter.path}>{node.frontmatter.date}: {node.frontmatter.title}</Link>
            </li>
          ))}
        </ul>

        <h2>Other</h2>
        <ul className="margin-top-0">
          <li><Link to='/404'>404</Link></li>
        </ul>

        <br />
        <br />

        <i>Last updated: {sitemapJson.updated_at}</i>
      </Layout>
    </>
  )
}

export const postsQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts//" }, frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: ASC }
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